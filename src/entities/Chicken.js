import * as THREE from 'three';
import { CHICKEN, GAME } from '../config/constants.js';

const FLIP_INTERVAL = 0.15;

export class Chicken {
  constructor(textures) {
    this._time = 0;
    this._dir = 1;
    this._laying = false;
    this._layTimer = 0;
    this._celebTimer = 0;
    this._flipTimer = 0;
    this._frameIndex = 0;

    this._warmingUp = false;
    this._warmupTimer = 0;
    this._warmupDuration = 0;

    this._flyFrames = [textures.chickenFly1, textures.chickenFly2];
    this._frames = this._flyFrames;

    this.group = new THREE.Group();
    this.group.position.set(0, -CHICKEN.Y_POS, 5);
    this.group.scale.x = -1;

    const size = CHICKEN.BODY_RADIUS * 2.8;
    const geo = new THREE.PlaneGeometry(size, size);
    const mat = new THREE.MeshBasicMaterial({
      map: this._frames[0],
      transparent: true,
    });
    this.sprite = new THREE.Mesh(geo, mat);
    this.group.add(this.sprite);

    this._minX = -GAME.WIDTH / 2 + 40;
    this._maxX = GAME.WIDTH / 2 - 40;
  }

  getX() {
    return this.group.position.x;
  }

  getDropX() {
    return this.group.position.x;
  }

  getDropY() {
    return -this.group.position.y + CHICKEN.BODY_RADIUS + 5;
  }

  warmup(layTextures, duration) {
    this._warmingUp = true;
    this._warmupTimer = 0;
    this._warmupDuration = duration;
    this._frames = layTextures;
    this._frameIndex = 0;
    this._flipTimer = 0;
    this.sprite.material.map = this._frames[0];
  }

  stopWarmup() {
    this._warmingUp = false;
    this._warmupTimer = 0;
    this._frames = this._flyFrames;
    this._frameIndex = 0;
    this.sprite.material.map = this._frames[0];
    this.sprite.scale.set(1, 1, 1);
    this.sprite.position.x = 0;
  }

  lay() {
    this._laying = true;
    this._layTimer = CHICKEN.LAY_DURATION;
  }

  celebrate() {
    this._celebTimer = 0.6;
  }

  update(delta) {
    this._time += delta;

    this._flipTimer += delta;
    if (this._flipTimer >= FLIP_INTERVAL) {
      this._flipTimer -= FLIP_INTERVAL;
      this._frameIndex = (this._frameIndex + 1) % this._frames.length;
      this.sprite.material.map = this._frames[this._frameIndex];
    }

    if (this._warmingUp) {
      this._warmupTimer += delta;
      const t = Math.min(this._warmupTimer / this._warmupDuration, 1);
      const eased = t * t;

      const squashY = 1 - 0.3 * eased;
      const squashX = 1 + 0.25 * eased;
      this.sprite.scale.set(squashX, squashY, 1);

      const tremble = eased * 1.5 * (Math.random() - 0.5) * 2;
      this.sprite.position.x = tremble;

      const bobY = Math.sin(this._time * CHICKEN.BOB_SPEED) * CHICKEN.BOB_AMPLITUDE * (1 - eased * 0.5);
      this.group.position.y = -CHICKEN.Y_POS + bobY;
      return;
    }

    if (this._laying) {
      this._layTimer -= delta;
      const t = 1 - (this._layTimer / CHICKEN.LAY_DURATION);
      const squash = t < 0.5
        ? 1 - 0.3 * (t * 2)
        : 0.7 + 0.3 * ((t - 0.5) * 2);
      this.sprite.scale.set(1 + (1 - squash) * 0.5, squash, 1);

      if (this._layTimer <= 0) {
        this._laying = false;
        this.sprite.scale.set(1, 1, 1);
      }
      return;
    }

    if (this._celebTimer > 0) {
      this._celebTimer -= delta;
      const bob = Math.sin(this._celebTimer * 30) * 3;
      this.group.position.y = -CHICKEN.Y_POS + bob;
      if (this._celebTimer <= 0) {
        this.group.position.y = -CHICKEN.Y_POS;
      }
      return;
    }

    this.group.position.x += CHICKEN.SPEED * this._dir * delta;
    if (this.group.position.x > this._maxX) {
      this._dir = -1;
      this.group.scale.x = 1;
    } else if (this.group.position.x < this._minX) {
      this._dir = 1;
      this.group.scale.x = -1;
    }

    const bobY = Math.sin(this._time * CHICKEN.BOB_SPEED) * CHICKEN.BOB_AMPLITUDE;
    this.group.position.y = -CHICKEN.Y_POS + bobY;
  }
}
