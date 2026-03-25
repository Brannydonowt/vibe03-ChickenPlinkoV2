import { CAMERA, GAME } from '../config/constants.js';

export class Camera {
  constructor(threeCamera) {
    this.cam = threeCamera;
    this.targetY = 0;
    this.currentY = 0;
    this._initialized = false;
    this.zoom = CAMERA.IDLE_ZOOM;
    this.targetZoom = CAMERA.IDLE_ZOOM;
    this.shakeX = 0;
    this.shakeY = 0;
    this.shakeIntensity = 0;

    this._transitionActive = false;
    this._transFrom = { y: 0, zoom: 1 };
    this._transTo = { y: 0, zoom: 1 };
    this._transDuration = 0;
    this._transElapsed = 0;
    this._transCallback = null;
  }

  followY(y) {
    this.targetY = -y;
    if (!this._initialized) {
      this.currentY = -y;
      this._initialized = true;
    }
  }

  setTargetZoom(z) {
    this.targetZoom = z;
  }

  shake(intensity) {
    this.shakeIntensity = Math.max(this.shakeIntensity, intensity);
  }

  transitionTo(y, zoom, duration, callback) {
    this._transitionActive = true;
    this._transFrom = { y: this.currentY, zoom: this.zoom };
    this._transTo = { y: -y, zoom };
    this._transDuration = duration;
    this._transElapsed = 0;
    this._transCallback = callback || null;
  }

  update(delta) {
    if (this._transitionActive) {
      this._transElapsed += delta;
      let t = Math.min(this._transElapsed / this._transDuration, 1);
      t = this._easeInOut(t);

      this.currentY = this._transFrom.y + (this._transTo.y - this._transFrom.y) * t;
      this.zoom = this._transFrom.zoom + (this._transTo.zoom - this._transFrom.zoom) * t;

      if (this._transElapsed >= this._transDuration) {
        this._transitionActive = false;
        if (this._transCallback) this._transCallback();
      }
    } else {
      this.currentY += (this.targetY - this.currentY) * CAMERA.FOLLOW_LERP;
      this.zoom += (this.targetZoom - this.zoom) * 0.05;
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

    const halfW = (GAME.WIDTH / 2) / this.zoom;
    const halfH = (GAME.HEIGHT / 2) / this.zoom;

    this.cam.left = -halfW;
    this.cam.right = halfW;
    this.cam.top = halfH;
    this.cam.bottom = -halfH;
    this.cam.position.x = this.shakeX;
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
