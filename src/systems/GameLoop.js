import { CAMERA, TIMING, CHICKEN, SCORING, EGG } from '../config/constants.js';
import { Egg } from '../entities/Egg.js';

const STATES = {
  IDLE: 'idle',
  DROP: 'drop',
  LAND: 'land',
  HATCH: 'hatch',
  TRANSITION: 'transition',
};

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
    this._coinQueue = [];
    this._coinTimer = 0;
    this._landingGold = 0;
    this._coinsCollected = 0;
    this._totalCoins = 0;
    this._idleDelay = 0;

    this._onCollision = this._onCollision.bind(this);
    this.physics.on('collisionStart', this._onCollision);

    this._onTap = this._onTap.bind(this);
    this.input.onTap(this._onTap);

    this._enterIdle();
  }

  _onTap() {
    if (this.state === STATES.IDLE) {
      this._enterDrop();
    }
  }

  _onCollision(pair) {
    if (this.state !== STATES.DROP) return;
    if (!this.egg || !this.egg.alive) return;

    const { bodyA, bodyB } = pair;
    const eggBody = this.egg.body;

    let other = null;
    if (bodyA === eggBody) other = bodyB;
    else if (bodyB === eggBody) other = bodyA;
    else return;

    if (other.label === 'peg' && other.pegRef) {
      this._handlePegHit(other.pegRef);
    } else if (other.label && other.label.startsWith('bin_') && other.binRef) {
      this._handleBinLand(other.binRef);
    } else if (other.label === 'floor' && !this.egg.landed) {
      this._handleFloorLand();
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

    const textSize = combo > 3 ? 18 : combo > 1 ? 15 : 12;
    const textColor = combo > 3 ? '#FF6B35' : combo > 1 ? '#FFD700' : '#FFFFFF';
    this.particles.spawnFloatingText(
      peg.x, -peg.y + 10,
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
  }

  _handleFloorLand() {
    if (!this.egg || this.egg.landed) return;
    this.egg.landed = true;
    this.audio.eggLand();
    this._landingGold = this.score.calculateLanding(1);
    this.state = STATES.LAND;
    this._stateTimer = 0;
  }

  _enterIdle() {
    this.state = STATES.IDLE;
    this.score.resetRun();
    this._idleDelay = TIMING.IDLE_PROMPT_DELAY;

    this.camera.setTargetZoom(CAMERA.IDLE_ZOOM);
    this.camera.followY(CHICKEN.Y_POS);
    this.hud.hideScore();
  }

  _enterDrop() {
    this.state = STATES.DROP;
    this._stateTimer = 0;
    this.hud.hideTapPrompt();

    this.chicken.lay();
    this.audio.layEgg();

    setTimeout(() => {
      if (this.state !== STATES.DROP) return;
      const x = this.chicken.getDropX();
      const y = this.chicken.getDropY();
      this.egg = new Egg(x, y, this.physics, this.textures.egg);
      this.renderer.scene.add(this.egg.mesh);
      this.camera.setTargetZoom(CAMERA.DROP_ZOOM_MAX);
    }, CHICKEN.LAY_DURATION * 500);
  }

  _enterHatch() {
    this.state = STATES.HATCH;
    this._stateTimer = 0;
    this._wobblePhase = 0;

    this.physics.setStatic(this.egg.body, true);
  }

  _enterTransition() {
    this.state = STATES.TRANSITION;
    this._stateTimer = 0;

    if (this.egg) {
      this.egg.destroy(this.renderer.scene);
      this.egg = null;
    }

    this.audio.whoosh();
    this.chicken.celebrate();

    this.camera.transitionTo(CHICKEN.Y_POS, CAMERA.IDLE_ZOOM, TIMING.TRANSITION_DURATION, () => {
      this._enterIdle();
    });
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

    this.camera.followY(this.egg.getY());

    const speed = this.egg.getSpeed();
    const speedZoom = CAMERA.DROP_ZOOM_MAX - speed * CAMERA.SPEED_ZOOM_FACTOR;
    this.camera.setTargetZoom(Math.max(CAMERA.DROP_ZOOM_MIN, Math.min(CAMERA.DROP_ZOOM_MAX, speedZoom)));

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
  }

  _updateLand(delta) {
    this._stateTimer += delta;

    if (this.egg) this.egg.update();

    if (this._stateTimer >= TIMING.HATCH_DELAY) {
      this._enterHatch();
    }
  }

  _updateHatch(delta) {
    this._stateTimer += delta;

    if (this._stateTimer < TIMING.WOBBLE_DURATION) {
      this._wobblePhase += delta * 25;
      const intensity = this._stateTimer / TIMING.WOBBLE_DURATION;
      if (this.egg) {
        const wobble = Math.sin(this._wobblePhase) * 0.2 * intensity;
        this.egg.mesh.rotation.z = wobble;
      }
    } else if (this._stateTimer < TIMING.WOBBLE_DURATION + TIMING.CRACK_DURATION) {
      if (this.egg && this.egg._crackLines.length === 0) {
        this.egg.showCracks();
        this.camera.setTargetZoom(CAMERA.HATCH_ZOOM);
      }
    } else if (this._stateTimer >= TIMING.WOBBLE_DURATION + TIMING.CRACK_DURATION) {
      if (this.egg) {
        const ex = this.egg.getX();
        const ey = -this.egg.getY();

        this.hud.screenFlash();
        this.audio.hatch();
        this.particles.emitHatchExplosion(ex, ey);
        this.renderer.setBgBrightness(0.15);

        this.egg.destroy(this.renderer.scene);
        this.egg = null;

        this._startCoinCollection(ex, ey);
      }
    }

    this._updateCoins(delta);
  }

  _startCoinCollection(x, y) {
    this._coinQueue = [];
    this._coinTimer = 0;
    this._coinsCollected = 0;
    const numCoins = Math.min(Math.max(this._landingGold, 3), 15);
    this._totalCoins = numCoins;
    const goldPerCoin = this._landingGold / numCoins;

    for (let i = 0; i < numCoins; i++) {
      this._coinQueue.push({
        delay: i * (TIMING.COIN_DURATION / numCoins),
        x: x + (Math.random() - 0.5) * 20,
        y: y,
        gold: Math.round(goldPerCoin),
        emitted: false,
      });
    }
  }

  _updateCoins(delta) {
    if (this._coinQueue.length === 0) return;

    this._coinTimer += delta;
    this.renderer.setBgBrightness(Math.max(0, 0.15 - this._coinTimer * 0.3));

    let allDone = true;
    for (const coin of this._coinQueue) {
      if (coin.emitted) continue;
      if (this._coinTimer >= coin.delay) {
        coin.emitted = true;
        this._coinsCollected++;

        this.score.collectGold(coin.gold);
        this.hud.setGold(this.score.totalGold);
        this.audio.coinCollect(this._coinsCollected, this._totalCoins);

        this.particles.emit(coin.x, coin.y, 3, {
          color: 0xFFD700,
          speed: 100,
          life: 0.3,
          size: 3,
          spread: Math.PI / 2,
          angle: -Math.PI / 2,
          gravity: 0,
          drag: 0.9,
        });
      } else {
        allDone = false;
      }
    }

    if (allDone) {
      this._coinQueue = [];
      this.renderer.setBgBrightness(0);
      this.hud.hideScore();

      setTimeout(() => {
        if (this.state === STATES.HATCH) {
          this._enterTransition();
        }
      }, 300);
    }
  }

  _updateTransition(delta) {
    this._stateTimer += delta;
  }
}
