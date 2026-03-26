import * as THREE from 'three';
import { AUTO_CHICKEN, CHICKEN, GAME } from '../config/constants.js';

const FLIP_INTERVAL = 0.18;

export class AutoChicken {
  constructor(textures, typeConfig, level = 1) {
    this.typeConfig = typeConfig;
    this._level = level;
    this._time = Math.random() * 100;

    const typeIndex = ['normal', 'rainbow', 'cosmic'].indexOf(typeConfig.id);
    this._dir = typeIndex % 2 === 0 ? 1 : -1;
    this._flipTimer = Math.random() * FLIP_INTERVAL;
    this._frameIndex = 0;

    this._layInterval = this._calcInterval(level);
    this._laying = false;
    this._layTimer = this._layInterval;
    this._warmingUp = false;
    this._warmupTimer = 0;
    this._layAnimTimer = 0;
    this._lastDisplayedSecond = Math.ceil(this._layTimer);

    this._flyFrames = [textures.chickenFly1, textures.chickenFly2];
    this._layFrames = [textures.chickenLay0, textures.chickenLay1];
    this._frames = this._flyFrames;

    this.group = new THREE.Group();
    const startX = ((typeIndex * 97 + 43) % (GAME.WIDTH - 80)) - (GAME.WIDTH / 2 - 40);
    this.group.position.set(startX, -AUTO_CHICKEN.Y_POS, AUTO_CHICKEN.Z_POS);
    this.group.scale.set(
      AUTO_CHICKEN.SCALE * (this._dir === 1 ? -1 : 1),
      AUTO_CHICKEN.SCALE,
      1
    );

    const size = CHICKEN.BODY_RADIUS * 2.8;
    const geo = new THREE.PlaneGeometry(size, size);
    const mat = new THREE.MeshBasicMaterial({
      map: this._frames[0],
      transparent: true,
    });
    if (typeConfig.tint) {
      mat.color.set(typeConfig.tint);
    }
    this.sprite = new THREE.Mesh(geo, mat);
    this.group.add(this.sprite);

    this._minX = -GAME.WIDTH / 2 + 40;
    this._maxX = GAME.WIDTH / 2 - 40;

    this._timerCanvas = document.createElement('canvas');
    this._timerCanvas.width = 64;
    this._timerCanvas.height = 32;
    this._timerCtx = this._timerCanvas.getContext('2d');
    this._timerTexture = new THREE.CanvasTexture(this._timerCanvas);
    this._timerTexture.minFilter = THREE.LinearFilter;

    const timerMat = new THREE.SpriteMaterial({
      map: this._timerTexture,
      transparent: true,
      depthTest: false,
    });
    this._timerSprite = new THREE.Sprite(timerMat);
    this._timerScaleBase = 28 / AUTO_CHICKEN.SCALE;
    const initSignX = this.group.scale.x > 0 ? 1 : -1;
    this._timerSprite.scale.set(this._timerScaleBase * initSignX, this._timerScaleBase * 0.5, 1);
    this._timerSprite.position.y = size * 0.55;
    this._timerSprite.position.z = 1;
    this.group.add(this._timerSprite);

    this._drawTimerText(Math.ceil(this._layTimer));
  }

  _calcInterval(level) {
    return this.typeConfig.baseInterval * Math.pow(1 - AUTO_CHICKEN.INTERVAL_REDUCTION, level - 1);
  }

  setLevel(level) {
    this._level = level;
    this._layInterval = this._calcInterval(level);
    if (!this._warmingUp && !this._laying) {
      this._layTimer = Math.min(this._layTimer, this._layInterval);
    }
  }

  _drawTimerText(seconds) {
    const ctx = this._timerCtx;
    ctx.clearRect(0, 0, 64, 32);
    ctx.font = 'bold 22px "Segoe UI", system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.strokeStyle = 'rgba(0,0,0,0.7)';
    ctx.lineWidth = 3;
    ctx.strokeText(`${seconds}s`, 32, 17);
    ctx.fillStyle = this.typeConfig.timerColor;
    ctx.fillText(`${seconds}s`, 32, 17);
    this._timerTexture.needsUpdate = true;
  }

  triggerImmediateLay() {
    this._warmingUp = true;
    this._warmupTimer = 0;
    this._frames = this._layFrames;
    this._frameIndex = 0;
    this.sprite.material.map = this._frames[0];
    this._timerSprite.visible = false;
  }

  getX() { return this.group.position.x; }

  getDropX() { return this.group.position.x; }

  getDropY() {
    return -this.group.position.y + CHICKEN.BODY_RADIUS * AUTO_CHICKEN.SCALE + 3;
  }

  update(delta) {
    this._time += delta;
    let shouldLay = false;

    this._flipTimer += delta;
    if (this._flipTimer >= FLIP_INTERVAL) {
      this._flipTimer -= FLIP_INTERVAL;
      this._frameIndex = (this._frameIndex + 1) % this._frames.length;
      this.sprite.material.map = this._frames[this._frameIndex];
    }

    if (this._warmingUp) {
      this._warmupTimer += delta;
      const t = Math.min(this._warmupTimer / AUTO_CHICKEN.WARMUP_DURATION, 1);
      const eased = t * t;

      const squashY = 1 - 0.25 * eased;
      const squashX = 1 + 0.2 * eased;
      this.sprite.scale.set(squashX, squashY, 1);

      const tremble = eased * 1.0 * (Math.random() - 0.5) * 2;
      this.sprite.position.x = tremble;

      if (this._warmupTimer >= AUTO_CHICKEN.WARMUP_DURATION) {
        this._warmingUp = false;
        this._laying = true;
        this._layAnimTimer = AUTO_CHICKEN.LAY_DURATION;
        this._frames = this._flyFrames;
        this._frameIndex = 0;
        this.sprite.material.map = this._frames[0];
        this.sprite.position.x = 0;
        shouldLay = true;
      }
    } else if (this._laying) {
      this._layAnimTimer -= delta;
      const t = 1 - (this._layAnimTimer / AUTO_CHICKEN.LAY_DURATION);
      const squash = t < 0.5
        ? 1 - 0.25 * (t * 2)
        : 0.75 + 0.25 * ((t - 0.5) * 2);
      this.sprite.scale.set(1 + (1 - squash) * 0.4, squash, 1);

      if (this._layAnimTimer <= 0) {
        this._laying = false;
        this.sprite.scale.set(1, 1, 1);
        this._layTimer = this._layInterval;
        this._lastDisplayedSecond = Math.ceil(this._layTimer);
        this._drawTimerText(this._lastDisplayedSecond);
        this._timerSprite.visible = true;
      }
    } else {
      this._layTimer -= delta;

      const sec = Math.max(Math.ceil(this._layTimer), 0);
      if (sec !== this._lastDisplayedSecond) {
        this._lastDisplayedSecond = sec;
        this._drawTimerText(sec);
      }

      if (this._layTimer <= AUTO_CHICKEN.WARMUP_DURATION) {
        if (!this._warmingUp) {
          this._warmingUp = true;
          this._warmupTimer = 0;
          this._frames = this._layFrames;
          this._frameIndex = 0;
          this.sprite.material.map = this._frames[0];
          this._timerSprite.visible = false;
        }
      }
    }

    if (!this._warmingUp && !this._laying) {
      this.group.position.x += AUTO_CHICKEN.SPEED * this._dir * delta;
      if (this.group.position.x > this._maxX) {
        this._dir = -1;
        this.group.scale.x = AUTO_CHICKEN.SCALE;
      } else if (this.group.position.x < this._minX) {
        this._dir = 1;
        this.group.scale.x = -AUTO_CHICKEN.SCALE;
      }
    }

    this._timerSprite.scale.x = this._timerScaleBase * Math.sign(this.group.scale.x);

    const bobY = Math.sin(this._time * CHICKEN.BOB_SPEED * 0.9) * CHICKEN.BOB_AMPLITUDE * 0.8;
    this.group.position.y = -AUTO_CHICKEN.Y_POS + bobY;

    if (this.typeConfig.id === 'cosmic') {
      const pulse = 1 + Math.sin(this._time * 3) * 0.03;
      this.sprite.scale.x *= pulse;
      this.sprite.scale.y *= pulse;
    }

    return { shouldLay };
  }
}
