import { CAMERA, GAME, DISPLAY } from '../config/constants.js';

export class Camera {
  constructor(threeCamera) {
    this.cam = threeCamera;
    this.targetX = 0;
    this.currentX = 0;
    this.targetY = 0;
    this.currentY = 0;
    this._initialized = false;
    this.zoom = CAMERA.IDLE_ZOOM;
    this.targetZoom = CAMERA.IDLE_ZOOM;
    this.shakeX = 0;
    this.shakeY = 0;
    this.shakeIntensity = 0;

    this._transitionActive = false;
    this._transFrom = { x: 0, y: 0, zoom: 1 };
    this._transTo = { x: 0, y: 0, zoom: 1 };
    this._transDuration = 0;
    this._transElapsed = 0;
    this._transCallback = null;
  }

  followX(x) {
    this.targetX = x;
    if (!this._initialized) {
      this.currentX = x;
    }
  }

  followY(y) {
    this.targetY = -y;
    if (!this._initialized) {
      this.currentY = -y;
      this._initialized = true;
    }
  }

  snapTo(x, y) {
    this.targetX = x;
    this.currentX = x;
    this.targetY = -y;
    this.currentY = -y;
  }

  setTargetZoom(z) {
    this.targetZoom = z;
  }

  shake(intensity) {
    this.shakeIntensity = Math.max(this.shakeIntensity, intensity);
  }

  transitionTo(x, y, zoom, duration, callback) {
    this._transitionActive = true;
    this._transFrom = { x: this.currentX, y: this.currentY, zoom: this.zoom };
    this._transTo = { x, y: -y, zoom };
    this._transDuration = duration;
    this._transElapsed = 0;
    this._transCallback = callback || null;
  }

  update(delta) {
    if (this._transitionActive) {
      this._transElapsed += delta;
      let t = Math.min(this._transElapsed / this._transDuration, 1);
      t = this._easeInOut(t);

      this.currentX = this._transFrom.x + (this._transTo.x - this._transFrom.x) * t;
      this.currentY = this._transFrom.y + (this._transTo.y - this._transFrom.y) * t;
      this.zoom = this._transFrom.zoom + (this._transTo.zoom - this._transFrom.zoom) * t;

      if (this._transElapsed >= this._transDuration) {
        this._transitionActive = false;
        if (this._transCallback) this._transCallback();
      }
    } else {
      this.currentX += (this.targetX - this.currentX) * CAMERA.FOLLOW_LERP_X;
      this.currentY += (this.targetY - this.currentY) * CAMERA.FOLLOW_LERP;
      this.zoom += (this.targetZoom - this.zoom) * CAMERA.ZOOM_LERP;
    }

    if (this.shakeIntensity > 0.1) {
      this.shakeX = (Math.random() - 0.5) * 2 * this.shakeIntensity;
      this.shakeY = (Math.random() - 0.5) * 2 * this.shakeIntensity;
      this.shakeIntensity *= CAMERA.SHAKE_DECAY;
    } else {
      this.shakeX = 0;
      this.shakeY = 0;
      this.shakeIntensity = 0;
    }

    const halfH = (GAME.HEIGHT / 2) / this.zoom;
    const halfW = halfH * DISPLAY.ASPECT;

    this.cam.left = -halfW;
    this.cam.right = halfW;
    this.cam.top = halfH;
    this.cam.bottom = -halfH;
    this.cam.position.x = this.currentX + this.shakeX;
    this.cam.position.y = this.currentY + this.shakeY;
    this.cam.updateProjectionMatrix();
  }

  isTransitioning() {
    return this._transitionActive;
  }

  _easeInOut(t) {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }
}
