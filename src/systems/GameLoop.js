import { CAMERA, TIMING, CHICKEN, SCORING, EGG, GAME, POWERUP, AUTO_CHICKEN } from '../config/constants.js';
import { Egg } from '../entities/Egg.js';
import { AutoChicken } from '../entities/AutoChicken.js';

const STATES = {
  IDLE: 'idle',
  WARMUP: 'warmup',
  DROP: 'drop',
  LAND: 'land',
  HATCH: 'hatch',
  TRANSITION: 'transition',
};

const STUCK_SPEED_THRESHOLD = 0.5;
const STUCK_TIME_THRESHOLD = 2.0;
const STUCK_WALL_MARGIN = 25;
const STUCK_NUDGE_FORCE = 0.05;
const STUCK_NUDGE_UP = -0.035;

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
    this._hasPlayedRound = false;

    this._autoChickens = [];
    this._autoEggs = [];
    this._numAutoChickens = 0;

    this._onCollision = this._onCollision.bind(this);
    this.physics.on('collisionStart', this._onCollision);

    this._onTap = this._onTap.bind(this);
    this.input.onTap(this._onTap);

    this.hud.onPowerupClick(() => this.purchaseDupliBounce());
    this.hud.onUpgradeChickenClick(() => this.purchaseAutoChicken());

    this._enterIdle();
  }

  _onTap() {
    if (this.state === STATES.IDLE) {
      this._enterWarmup();
    }
  }

  _onCollision(pair) {
    const { bodyA, bodyB } = pair;

    const mainValid = this.state === STATES.DROP || this.state === STATES.LAND;

    if (mainValid && this.egg && this.egg.alive && this.state === STATES.DROP) {
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

    if (mainValid) {
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

    for (const autoEgg of this._autoEggs) {
      if (!autoEgg.alive || autoEgg.landed) continue;
      let other = null;
      if (bodyA === autoEgg.body) other = bodyB;
      else if (bodyB === autoEgg.body) other = bodyA;
      if (!other) continue;

      if (other.label === 'peg' && other.pegRef) {
        this._handleAutoEggPegHit(other.pegRef, autoEgg);
      } else if (other.label && other.label.startsWith('bin_') && other.binRef) {
        this._handleAutoEggBinLand(other.binRef, autoEgg);
      } else if (other.label === 'floor') {
        this._handleAutoEggFloorLand(autoEgg);
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

    this.score.currentRunScore += 1;

    const normalizedY = this.board.getNormalizedY(peg.y);
    this.audio.pegHit(normalizedY, 1);

    this.particles.emitPegSpark(peg.x, -peg.y);
    this.particles.spawnFloatingText(peg.x, -peg.y + 20, '+1', 22, '#DDDDDD');

    this.hud.setScore(this.score.currentRunScore);
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

  _getAutoChickenCost() {
    return Math.floor(AUTO_CHICKEN.BASE_COST * Math.pow(AUTO_CHICKEN.COST_MULTIPLIER, this._numAutoChickens));
  }

  purchaseAutoChicken() {
    if (this.state !== STATES.IDLE) return;
    const cost = this._getAutoChickenCost();
    if (!this.score.canAfford(cost)) return;

    this.score.spendGold(cost);
    this.hud.setGold(this.score.totalGold);

    const ac = new AutoChicken(this.textures, this._numAutoChickens);
    this._autoChickens.push(ac);
    this.renderer.scene.add(ac.group);
    this._numAutoChickens++;

    this.audio.purchasePowerup();

    const newCost = this._getAutoChickenCost();
    this.hud.setUpgradeCost(newCost);
    this.hud.setUpgradeAffordable(this.score.canAfford(newCost));
  }

  _spawnAutoEgg(autoChicken) {
    const vol = AUTO_CHICKEN.AUDIO_VOLUME_SCALE;
    this.audio.eggPop(vol);
    this.audio.chickenCluck(vol);

    const x = autoChicken.getDropX();
    const y = autoChicken.getDropY();
    const egg = new Egg(x, y, this.physics, this.textures.egg, false);
    egg.body.label = 'egg_auto';
    egg.mesh.position.z = 1.5;
    egg._autoAge = 0;
    this.renderer.scene.add(egg.mesh);
    this._autoEggs.push(egg);
  }

  _handleAutoEggPegHit(peg, autoEgg) {
    peg.hit();
    autoEgg.pegHits++;
    this.board.rippleFrom(peg);

    const vol = AUTO_CHICKEN.AUDIO_VOLUME_SCALE;
    const normalizedY = this.board.getNormalizedY(peg.y);
    this.audio.pegHit(normalizedY, 1, vol);

    this.particles.emitPegSpark(peg.x, -peg.y);
  }

  _handleAutoEggBinLand(bin, autoEgg) {
    if (autoEgg.landed) return;
    autoEgg.landed = true;

    bin.glow();
    this.audio.eggLand(AUTO_CHICKEN.AUDIO_VOLUME_SCALE);
    this.particles.emitDust(bin.x, -bin.y + 15);

    const gold = Math.max(1, Math.ceil(autoEgg.pegHits * SCORING.BASE_POINTS * bin.multiplier / 10));
    this.score.collectGold(gold);
    this.hud.setGold(this.score.totalGold);

    this.particles.spawnFloatingText(
      bin.x, -bin.y + 25,
      `+${gold}g`,
      24, '#FFE680'
    );

    this._updateUpgradeBarAffordability();

    setTimeout(() => {
      if (autoEgg.alive) {
        autoEgg.destroy(this.renderer.scene);
        const idx = this._autoEggs.indexOf(autoEgg);
        if (idx !== -1) this._autoEggs.splice(idx, 1);
      }
    }, 150);
  }

  _handleAutoEggFloorLand(autoEgg) {
    if (autoEgg.landed) return;
    autoEgg.landed = true;

    const gold = Math.max(1, Math.ceil(autoEgg.pegHits * SCORING.BASE_POINTS / 10));
    this.score.collectGold(gold);
    this.hud.setGold(this.score.totalGold);

    this._updateUpgradeBarAffordability();

    setTimeout(() => {
      if (autoEgg.alive) {
        autoEgg.destroy(this.renderer.scene);
        const idx = this._autoEggs.indexOf(autoEgg);
        if (idx !== -1) this._autoEggs.splice(idx, 1);
      }
    }, 100);
  }

  _updateUpgradeBarAffordability() {
    if (this.hud.isUpgradeRevealed()) {
      const cost = this._getAutoChickenCost();
      this.hud.setUpgradeAffordable(this.score.canAfford(cost));
    }
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
    this.hud.hideScore();

    if (this._hasPlayedRound) {
      this.camera.setTargetZoom(CAMERA.OVERVIEW_ZOOM);
      this.camera.followX(0);
      this.camera.followY(CAMERA.OVERVIEW_CENTER_Y);
    } else {
      this.camera.setTargetZoom(CAMERA.IDLE_ZOOM);
      this.camera.followX(this.chicken.getX());
      this.camera.followY(CHICKEN.Y_POS);
    }

    const chickenCost = this._getAutoChickenCost();
    if (this.hud.isUpgradeRevealed()) {
      this.hud.setUpgradeCost(chickenCost);
      this.hud.setUpgradeAffordable(this.score.canAfford(chickenCost));
      this.hud.showUpgradeBar();
    } else if (this.score.totalGold >= chickenCost) {
      this.hud.setUpgradeCost(chickenCost);
      this.hud.setUpgradeAffordable(true);
      this.hud.showUpgradeBar();
    }
  }

  _enterWarmup() {
    this.state = STATES.WARMUP;
    this._stateTimer = 0;
    this._bonusGold = 0;
    this.hud.hideTapPrompt();
    this.hud.hideSubtleTapPrompt();
    this.hud.hidePowerupButton();
    this.hud.hideUpgradeBar();

    if (this._dupliBounceActive) {
      this._dupliBounceInFlight = true;
      this._dupliBounceActive = false;
    }

    this.chicken.warmup(
      [this.textures.chickenLay0, this.textures.chickenLay1],
      CHICKEN.WARMUP_DURATION
    );
    this.audio.chickenSqueeze();
    this.camera.setTargetZoom(CAMERA.WARMUP_ZOOM);
  }

  _enterDrop() {
    this.state = STATES.DROP;
    this._stateTimer = 0;
    this._stuckTimer = 0;

    this.chicken.stopWarmup();
    this.chicken.lay();
    this.audio.eggPop();
    this.audio.chickenCluck();
    this.camera.shake(5.0);

    const x = this.chicken.getDropX();
    const y = this.chicken.getDropY();
    this.egg = new Egg(x, y, this.physics, this.textures.egg);
    this.renderer.scene.add(this.egg.mesh);

    this.particles.emitEggPop(x, -y);

    this.camera.setTargetZoom(CAMERA.DROP_ZOOM_START);
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
    this._hasPlayedRound = true;

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
      0, CAMERA.OVERVIEW_CENTER_Y,
      CAMERA.OVERVIEW_ZOOM, TIMING.TRANSITION_DURATION,
      () => { this._enterIdle(); }
    );
  }

  update(delta) {
    this.chicken.update(delta);
    this.board.update(delta);
    this.particles.update(delta);

    for (const ac of this._autoChickens) {
      const result = ac.update(delta);
      if (result.shouldLay) {
        this._spawnAutoEgg(ac);
      }
    }

    for (let i = this._autoEggs.length - 1; i >= 0; i--) {
      const ae = this._autoEggs[i];
      if (!ae.alive) continue;
      if (ae.landed) continue;
      ae._autoAge += delta;
      ae.update();
      if (ae._autoAge > 20) {
        this._handleAutoEggFloorLand(ae);
      }
    }

    switch (this.state) {
      case STATES.IDLE:
        this._updateIdle(delta);
        break;
      case STATES.WARMUP:
        this._updateWarmup(delta);
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
    if (this._hasPlayedRound) {
      this.camera.followX(0);
      this.camera.followY(CAMERA.OVERVIEW_CENTER_Y);
    } else {
      this.camera.followX(this.chicken.getX());
      this.camera.followY(CHICKEN.Y_POS);
    }

    this._idleDelay -= delta;
    if (this._idleDelay <= 0) {
      if (this._hasPlayedRound) {
        this.hud.showSubtleTapPrompt();
      } else {
        this.hud.showTapPrompt();
      }
    }
  }

  _updateWarmup(delta) {
    this._stateTimer += delta;

    this.camera.followX(this.chicken.getX());
    this.camera.followY(CHICKEN.Y_POS);

    const t = Math.min(this._stateTimer / CHICKEN.WARMUP_DURATION, 1);
    this.camera.shake(t * t * 0.8);

    if (this._stateTimer >= CHICKEN.WARMUP_DURATION) {
      this._enterDrop();
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
