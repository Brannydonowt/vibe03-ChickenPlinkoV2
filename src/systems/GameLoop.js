import { CAMERA, TIMING, CHICKEN, SCORING, EGG, GAME, POWERUP } from '../config/constants.js';
import { Egg } from '../entities/Egg.js';

const STATES = {
  IDLE: 'idle',
  DROP: 'drop',
  LAND: 'land',
  HATCH: 'hatch',
  TRANSITION: 'transition',
};

const STUCK_SPEED_THRESHOLD = 0.5;
const STUCK_TIME_THRESHOLD = 2.0;
const STUCK_WALL_MARGIN = 25;
const STUCK_NUDGE_FORCE = 0.15;
const STUCK_NUDGE_UP = -0.1;

export class GameLoop {
  constructor({ renderer, physics, camera, board, chicken, scoreManager, particleSystem, hud, audio, input, textures }) {
    this.renderer = renderer;
    this.physics = physics;
    this.camera = camera;
    this.board = board;
    this.chicken = chicken;
    this.score = scoreManager;
    this.particles = particleSystem;
    this.hud = hud;
    this.audio = audio;
    this.input = input;
    this.textures = textures;

    this.state = STATES.IDLE;
    this.egg = null;
    this._stateTimer = 0;
    this._wobblePhase = 0;
    this._landingGold = 0;
    this._idleDelay = 0;

    this._stuckTimer = 0;
    this._freezeTimer = 0;
    this._drumrollTimer = 0;
    this._coinFountainActive = false;

    this._hatchEggX = 0;
    this._hatchEggY = 0;

    this._dupliBounceActive = false;
    this._dupliBounceInFlight = false;
    this._duplicateEggs = [];
    this._bonusGold = 0;

    this._onCollision = this._onCollision.bind(this);
    this.physics.on('collisionStart', this._onCollision);

    this._onTap = this._onTap.bind(this);
    this.input.onTap(this._onTap);

    this.hud.onPowerupClick(() => this.purchaseDupliBounce());

    this._enterIdle();
  }

  _onTap() {
    if (this.state === STATES.IDLE) {
      this._enterDrop();
    }
  }

  _onCollision(pair) {
    const validStates = this.state === STATES.DROP || this.state === STATES.LAND;
    if (!validStates) return;

    const { bodyA, bodyB } = pair;

    if (this.egg && this.egg.alive && this.state === STATES.DROP) {
      let other = null;
      if (bodyA === this.egg.body) other = bodyB;
      else if (bodyB === this.egg.body) other = bodyA;

      if (other) {
        if (other.label === 'peg' && other.pegRef) {
          this._handlePegHit(other.pegRef);
          if (this._dupliBounceInFlight) {
            this._spawnDuplicate(other.pegRef.x, other.pegRef.y);
          }
        } else if (other.label && other.label.startsWith('bin_') && other.binRef) {
          this._handleBinLand(other.binRef);
        } else if (other.label === 'floor' && !this.egg.landed) {
          this._handleFloorLand();
        }
        return;
      }
    }

    for (const dupe of this._duplicateEggs) {
      if (!dupe.alive || dupe.landed) continue;
      let other = null;
      if (bodyA === dupe.body) other = bodyB;
      else if (bodyB === dupe.body) other = bodyA;
      if (!other) continue;

      if (other.label === 'peg' && other.pegRef) {
        this._handleDupePegHit(other.pegRef, dupe);
      } else if (other.label && other.label.startsWith('bin_') && other.binRef) {
        this._handleDupeBinLand(other.binRef, dupe);
      } else if (other.label === 'floor') {
        this._handleDupeFloorLand(dupe);
      }
      return;
    }
  }

  _handlePegHit(peg) {
    peg.hit();
    this.egg.pegHits++;
    this.board.rippleFrom(peg);

    const now = performance.now();
    const { points, combo } = this.score.onPegHit(now);

    const normalizedY = this.board.getNormalizedY(peg.y);
    this.audio.pegHit(normalizedY, combo);

    const speed = this.egg.getSpeed();
    this.camera.shake(CAMERA.SHAKE_INTENSITY * Math.min(speed / 5, 1.5));

    this.particles.emitPegSpark(peg.x, -peg.y);

    const textSize = combo > 3 ? 42 : combo > 1 ? 34 : 28;
    const textColor = combo > 3 ? '#FF6B35' : combo > 1 ? '#FFD700' : '#FFFFFF';
    this.particles.spawnFloatingText(
      peg.x, -peg.y + 20,
      `+${points}`,
      textSize, textColor
    );

    this.hud.setScore(this.score.currentRunScore);
    this.hud.setCombo(combo);
    this.hud.setEdgeGlow(combo / SCORING.COMBO_MAX);
  }

  _handleBinLand(bin) {
    if (this.egg.landed) return;
    this.egg.landed = true;
    this.egg.landedBin = bin;

    bin.glow();
    this.audio.eggLand();
    this.particles.emitDust(bin.x, -bin.y + 15);

    this._landingGold = this.score.calculateLanding(bin.multiplier);
    this.state = STATES.LAND;
    this._stateTimer = 0;
    this._freezeTimer = TIMING.LAND_FREEZE;

    this.camera.shake(3.0);
    if (this.egg) {
      this.egg.setSquash(1.3, 0.7);
    }
  }

  _handleFloorLand() {
    if (!this.egg || this.egg.landed) return;
    this.egg.landed = true;
    this.audio.eggLand();
    this._landingGold = this.score.calculateLanding(1);
    this.state = STATES.LAND;
    this._stateTimer = 0;
    this._freezeTimer = TIMING.LAND_FREEZE;
    this.camera.shake(2.0);
    if (this.egg) {
      this.egg.setSquash(1.3, 0.7);
    }
  }

  _spawnDuplicate(pegX, pegY) {
    const dupe = new Egg(pegX, pegY, this.physics, this.textures.egg, true);

    const angle = Math.random() * Math.PI * 2;
    const speed = POWERUP.SPAWN_SPEED_MIN + Math.random() * POWERUP.SPAWN_SPEED_SPREAD;
    this.physics.setVelocity(dupe.body, {
      x: Math.cos(angle) * speed,
      y: -Math.abs(Math.sin(angle) * speed) - 0.5,
    });

    this.renderer.scene.add(dupe.mesh);
    this._duplicateEggs.push(dupe);

    this.audio.duplicateSpawn();
    this.particles.emitPegSpark(pegX, -pegY);
  }

  _handleDupePegHit(peg, dupe) {
    peg.hit();
    dupe.pegHits++;
    this.board.rippleFrom(peg);

    const now = performance.now();
    const { points, combo } = this.score.onPegHit(now);

    const normalizedY = this.board.getNormalizedY(peg.y);
    this.audio.pegHit(normalizedY, combo);

    this.particles.emitPegSpark(peg.x, -peg.y);

    const textSize = combo > 3 ? 38 : combo > 1 ? 30 : 24;
    const textColor = combo > 3 ? '#FF6B35' : combo > 1 ? '#FFD700' : '#DDDDDD';
    this.particles.spawnFloatingText(
      peg.x, -peg.y + 20,
      `+${points}`,
      textSize, textColor
    );

    this.hud.setScore(this.score.currentRunScore);
    this.hud.setCombo(combo);
    this.hud.setEdgeGlow(combo / SCORING.COMBO_MAX);
  }

  _handleDupeBinLand(bin, dupe) {
    if (dupe.landed) return;
    dupe.landed = true;
    dupe.landedBin = bin;

    bin.glow();
    this.audio.eggLand();
    this.particles.emitDust(bin.x, -bin.y + 15);

    const gold = this.score.calculateLanding(bin.multiplier);
    this._bonusGold += gold;

    this.particles.spawnFloatingText(
      bin.x, -bin.y + 25,
      `+${gold}g`,
      26, '#FFE680'
    );

    setTimeout(() => {
      if (dupe.alive) {
        dupe.destroy(this.renderer.scene);
        const idx = this._duplicateEggs.indexOf(dupe);
        if (idx !== -1) this._duplicateEggs.splice(idx, 1);
      }
    }, 200);
  }

  _handleDupeFloorLand(dupe) {
    if (dupe.landed) return;
    dupe.landed = true;
    setTimeout(() => {
      if (dupe.alive) {
        dupe.destroy(this.renderer.scene);
        const idx = this._duplicateEggs.indexOf(dupe);
        if (idx !== -1) this._duplicateEggs.splice(idx, 1);
      }
    }, 100);
  }

  _cleanupDuplicates() {
    for (const dupe of this._duplicateEggs) {
      if (dupe.alive) {
        dupe.destroy(this.renderer.scene);
      }
    }
    this._duplicateEggs = [];
  }

  purchaseDupliBounce() {
    if (this.state !== STATES.IDLE) return;
    if (this._dupliBounceActive) return;
    if (!this.score.canAfford(POWERUP.DUPLI_BOUNCE_COST)) return;

    this.score.spendGold(POWERUP.DUPLI_BOUNCE_COST);
    this.hud.setGold(this.score.totalGold);
    this._dupliBounceActive = true;

    this.audio.purchasePowerup();
    this.hud.setPowerupActive();
  }

  _enterIdle() {
    this.state = STATES.IDLE;
    this.score.resetRun();
    this._idleDelay = TIMING.IDLE_PROMPT_DELAY;

    this.camera.setTargetZoom(CAMERA.IDLE_ZOOM);
    this.camera.followX(this.chicken.getX());
    this.camera.followY(CHICKEN.Y_POS);
    this.hud.hideScore();

    if (this._dupliBounceActive) {
      this.hud.showPowerupButton(true);
      this.hud.setPowerupActive();
    } else {
      this.hud.showPowerupButton(this.score.canAfford(POWERUP.DUPLI_BOUNCE_COST));
    }
  }

  _enterDrop() {
    this.state = STATES.DROP;
    this._stateTimer = 0;
    this._stuckTimer = 0;
    this._bonusGold = 0;
    this.hud.hideTapPrompt();
    this.hud.hidePowerupButton();

    if (this._dupliBounceActive) {
      this._dupliBounceInFlight = true;
      this._dupliBounceActive = false;
    }

    this.chicken.lay();
    this.audio.chickenCluck();

    setTimeout(() => {
      if (this.state !== STATES.DROP) return;
      const x = this.chicken.getDropX();
      const y = this.chicken.getDropY();
      this.egg = new Egg(x, y, this.physics, this.textures.egg);
      this.renderer.scene.add(this.egg.mesh);
      this.camera.setTargetZoom(CAMERA.DROP_ZOOM_START);
    }, CHICKEN.LAY_DURATION * 500);
  }

  _enterHatch() {
    this.state = STATES.HATCH;
    this._stateTimer = 0;
    this._wobblePhase = 0;
    this._drumrollTimer = 0;
    this._coinFountainActive = false;

    this._landingGold += this._bonusGold;
    this._cleanupDuplicates();

    this.physics.setStatic(this.egg.body, true);
    this.camera.setTargetZoom(CAMERA.HATCH_ZOOM);
  }

  _enterTransition() {
    this.state = STATES.TRANSITION;
    this._stateTimer = 0;

    this._dupliBounceInFlight = false;
    this._bonusGold = 0;
    this._cleanupDuplicates();

    if (this.egg) {
      this.egg.destroy(this.renderer.scene);
      this.egg = null;
    }

    this.audio.whoosh();
    this.chicken.celebrate();

    this.camera.transitionTo(
      this.chicken.getX(), CHICKEN.Y_POS,
      CAMERA.IDLE_ZOOM, TIMING.TRANSITION_DURATION,
      () => { this._enterIdle(); }
    );
  }

  update(delta) {
    this.chicken.update(delta);
    this.board.update(delta);
    this.particles.update(delta);

    switch (this.state) {
      case STATES.IDLE:
        this._updateIdle(delta);
        break;
      case STATES.DROP:
        this._updateDrop(delta);
        break;
      case STATES.LAND:
        this._updateLand(delta);
        break;
      case STATES.HATCH:
        this._updateHatch(delta);
        break;
      case STATES.TRANSITION:
        this._updateTransition(delta);
        break;
    }

    this.camera.update(delta);
  }

  _updateIdle(delta) {
    this.camera.followX(this.chicken.getX());
    this.camera.followY(CHICKEN.Y_POS);

    this._idleDelay -= delta;
    if (this._idleDelay <= 0) {
      this.hud.showTapPrompt();
    }
  }

  _updateDrop(delta) {
    if (!this.egg || !this.egg.alive) return;

    this._stateTimer += delta;
    if (this._stateTimer > 20 && !this.egg.landed) {
      this._handleFloorLand();
      return;
    }

    this.egg.update();

    for (const dupe of this._duplicateEggs) {
      if (dupe.alive) dupe.update();
    }

    this.camera.followX(this.egg.getX());
    this.camera.followY(this.egg.getY());

    const eggY = this.egg.getY();
    const progress = Math.max(0, Math.min(1,
      (eggY - CAMERA.BOARD_TOP_Y) / (CAMERA.BOARD_BOTTOM_Y - CAMERA.BOARD_TOP_Y)
    ));
    const positionZoom = CAMERA.DROP_ZOOM_MAX + (CAMERA.DROP_ZOOM_MIN - CAMERA.DROP_ZOOM_MAX) * progress;

    const speed = this.egg.getSpeed();
    const speedZoom = CAMERA.DROP_ZOOM_MAX - speed * CAMERA.SPEED_ZOOM_FACTOR;
    const clampedSpeedZoom = Math.max(CAMERA.DROP_ZOOM_MIN, Math.min(CAMERA.DROP_ZOOM_MAX, speedZoom));

    this.camera.setTargetZoom(Math.min(positionZoom, clampedSpeedZoom));

    const velX = this.egg.getVelX();
    const velY = this.egg.getVelY();
    const mag = Math.sqrt(velX * velX + velY * velY);
    if (mag > 1) {
      const stretchFactor = Math.min(mag * 0.03, 0.3);
      const angle = Math.atan2(Math.abs(velY), Math.abs(velX));
      const verticalness = angle / (Math.PI / 2);
      this.egg.setSquash(
        1 - stretchFactor * (1 - verticalness) + stretchFactor * verticalness * 0.3,
        1 + stretchFactor * verticalness - stretchFactor * (1 - verticalness) * 0.3
      );
    } else {
      this.egg.setSquash(1, 1);
    }

    if (speed > 1.5) {
      this.particles.emitTrail(this.egg.getX(), this.egg.body.position.y, speed);
    }

    this._checkStuck(delta);
  }

  _checkStuck(delta) {
    if (!this.egg || this.egg.landed) return;

    const speed = this.egg.getSpeed();
    const eggX = this.egg.getX();
    const wallEdge = GAME.WIDTH / 2 - STUCK_WALL_MARGIN;

    if (speed < STUCK_SPEED_THRESHOLD && Math.abs(eggX) > wallEdge) {
      this._stuckTimer += delta;
    } else {
      this._stuckTimer = Math.max(0, this._stuckTimer - delta * 2);
    }

    if (this._stuckTimer >= STUCK_TIME_THRESHOLD) {
      const nudgeDir = eggX > 0 ? -1 : 1;
      this.physics.applyForce(this.egg.body, { x: nudgeDir * STUCK_NUDGE_FORCE, y: STUCK_NUDGE_UP });
      this.particles.spawnFloatingText(eggX, -this.egg.getY(), 'BLAST OFF!', 48, '#FF4400');
      this._stuckTimer = 0;
    }
  }

  _updateLand(delta) {
    for (const dupe of this._duplicateEggs) {
      if (dupe.alive) dupe.update();
    }

    if (this._freezeTimer > 0) {
      this._freezeTimer -= delta;

      if (this.egg) {
        this.camera.followX(this.egg.getX());
        this.camera.followY(this.egg.getY());
      }
      return;
    }

    this._stateTimer += delta;

    if (this.egg) {
      const t = Math.min(this._stateTimer / TIMING.HATCH_DELAY, 1);
      const sx = 1.3 + (1 - 1.3) * t;
      const sy = 0.7 + (1 - 0.7) * t;
      this.egg.setSquash(sx, sy);
      this.egg.update();
      this.camera.followX(this.egg.getX());
      this.camera.followY(this.egg.getY());
    }

    if (this._stateTimer >= TIMING.HATCH_DELAY) {
      this._enterHatch();
    }
  }

  _updateHatch(delta) {
    this._stateTimer += delta;

    if (this.egg) {
      this.camera.followX(this.egg.getX());
      this.camera.followY(this.egg.getY());
    }

    if (this._stateTimer < TIMING.WOBBLE_DURATION) {
      const rawIntensity = this._stateTimer / TIMING.WOBBLE_DURATION;
      const intensity = rawIntensity * rawIntensity;

      this._wobblePhase += delta * (20 + intensity * 30);
      if (this.egg) {
        const wobble = Math.sin(this._wobblePhase) * (0.15 + intensity * 0.25);
        this.egg.mesh.rotation.z = wobble;
      }

      this.camera.shake(intensity * CAMERA.HATCH_SHAKE_MAX);

      this._drumrollTimer -= delta;
      const drumInterval = 0.15 - intensity * 0.11;
      if (this._drumrollTimer <= 0) {
        this.audio.drumrollHit(intensity);
        this._drumrollTimer = drumInterval;
      }

    } else if (this._stateTimer < TIMING.WOBBLE_DURATION + TIMING.CRACK_DURATION) {
      if (this.egg && this.egg._crackLines.length === 0) {
        this.egg.showCracks();
      }
      this.camera.shake(CAMERA.HATCH_SHAKE_MAX * 0.8);

    } else if (this._stateTimer >= TIMING.WOBBLE_DURATION + TIMING.CRACK_DURATION) {
      if (this.egg && !this._coinFountainActive) {
        const ex = this.egg.getX();
        const ey = -this.egg.getY();

        this._hatchEggX = ex;
        this._hatchEggY = ey;

        this.hud.screenFlash();
        this.audio.hatch();
        this.particles.emitHatchExplosion(ex, ey);
        this.renderer.setBgBrightness(0.15);

        this.egg.destroy(this.renderer.scene);
        this.egg = null;

        this._startCoinFountain(ex, ey);
      }
    }

    if (this._coinFountainActive) {
      const elapsed = this._stateTimer - (TIMING.WOBBLE_DURATION + TIMING.CRACK_DURATION);
      this.renderer.setBgBrightness(Math.max(0, 0.15 - elapsed * 0.2));
    }
  }

  _startCoinFountain(worldX, worldY) {
    this._coinFountainActive = true;
    const screenPos = this.renderer.projectToScreen(worldX, worldY);

    const numCoins = Math.min(Math.max(Math.ceil(Math.sqrt(this._landingGold)), 3), 20);
    const goldPerCoin = Math.round(this._landingGold / numCoins);
    let totalCollected = 0;

    this.hud.spawnCoinFountain(
      screenPos.x, screenPos.y,
      numCoins, goldPerCoin,
      (gold, collected, total) => {
        totalCollected += gold;
        const newTotal = Math.min(
          this.score.totalGold + gold,
          this.score.totalGold + this._landingGold - (totalCollected - gold)
        );
        this.score.collectGold(gold);
        this.hud.setGold(this.score.totalGold);
        this.audio.coinCollect(collected, total);
      },
      () => {
        this._coinFountainActive = false;
        this.renderer.setBgBrightness(0);
        this.hud.hideScore();

        setTimeout(() => {
          if (this.state === STATES.HATCH) {
            this._enterTransition();
          }
        }, 300);
      }
    );
  }

  _updateTransition(delta) {
    this._stateTimer += delta;
  }
}
