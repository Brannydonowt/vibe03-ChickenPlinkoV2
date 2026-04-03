import * as THREE from 'three';
import { BINS, COLORS, GAME, BOARD } from '../config/constants.js';

export class Bin {
  constructor(index, x, y, width, physics) {
    this.index = index;
    this.multiplier = BINS.MULTIPLIERS[index];
    this.x = x;
    this.y = y;
    this.width = width;
    this._glowTimer = 0;
    this._time = 0;
    this._squashTimer = 0;
    this._labelPopTimer = 0;

    const tier = BINS.TIERS[this.multiplier];
    this._tier = tier;
    this._baseLabelScale = tier.labelScale;

    this.sensor = physics.createRect(x, -y, width - 4, BINS.HEIGHT, {
      isStatic: true,
      isSensor: true,
      label: `bin_${index}`,
    });
    this.sensor.binRef = this;
    physics.addBody(this.sensor);

    const group = new THREE.Group();
    group.position.set(x, -y, 0);

    // --- Glow rim (behind background, higher tiers only) ---
    if (tier.glowIntensity > 0) {
      const rimGeo = new THREE.PlaneGeometry(width + 6, BINS.HEIGHT + 6);
      const rimMat = new THREE.MeshBasicMaterial({
        color: tier.glowColor,
        transparent: true,
        opacity: tier.glowIntensity,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      this.rimMesh = new THREE.Mesh(rimGeo, rimMat);
      this.rimMesh.position.z = -0.5;
      group.add(this.rimMesh);
      this._rimBaseOpacity = tier.glowIntensity;
    }

    // --- Gradient background via canvas texture ---
    const bgCanvas = document.createElement('canvas');
    bgCanvas.width = 64;
    bgCanvas.height = 64;
    const bgCtx = bgCanvas.getContext('2d');
    const baseColor = new THREE.Color(BINS.COLORS[index]);
    const topHex = this._lighten(baseColor, 0.3);
    const bottomHex = this._darken(baseColor, 0.35);
    const grad = bgCtx.createLinearGradient(0, 0, 0, 64);
    grad.addColorStop(0, topHex);
    grad.addColorStop(1, bottomHex);
    bgCtx.fillStyle = grad;
    bgCtx.fillRect(0, 0, 64, 64);

    const bgTex = new THREE.CanvasTexture(bgCanvas);
    const bgGeo = new THREE.PlaneGeometry(width - 2, BINS.HEIGHT);
    const bgMat = new THREE.MeshBasicMaterial({
      map: bgTex,
      transparent: true,
      opacity: 0.7,
    });
    this.bgMesh = new THREE.Mesh(bgGeo, bgMat);
    group.add(this.bgMesh);

    // --- Multiplier label (tier-styled) ---
    const labelText = `x${this.multiplier}`;
    const labelCanvas = document.createElement('canvas');
    labelCanvas.width = 128;
    labelCanvas.height = 64;
    const lCtx = labelCanvas.getContext('2d');
    const fontSize = this.multiplier === 10 ? 32 : 26;
    lCtx.font = `bold ${fontSize}px "Arial Black", sans-serif`;
    lCtx.textAlign = 'center';
    lCtx.textBaseline = 'middle';
    lCtx.strokeStyle = '#000';
    lCtx.lineWidth = tier.labelStroke;
    lCtx.lineJoin = 'round';
    lCtx.strokeText(labelText, 64, 32);
    lCtx.fillStyle = tier.labelColor;
    lCtx.fillText(labelText, 64, 32);

    const labelTex = new THREE.CanvasTexture(labelCanvas);
    const labelSize = 32 * tier.labelScale;
    const labelGeo = new THREE.PlaneGeometry(labelSize * 2, labelSize);
    const labelMat = new THREE.MeshBasicMaterial({ map: labelTex, transparent: true, depthWrite: false });
    this.labelMesh = new THREE.Mesh(labelGeo, labelMat);
    this.labelMesh.position.z = 1;
    group.add(this.labelMesh);

    this.mesh = group;
  }

  _lighten(color, amount) {
    const r = Math.min(1, color.r + (1 - color.r) * amount);
    const g = Math.min(1, color.g + (1 - color.g) * amount);
    const b = Math.min(1, color.b + (1 - color.b) * amount);
    return `rgb(${Math.round(r * 255)},${Math.round(g * 255)},${Math.round(b * 255)})`;
  }

  _darken(color, amount) {
    const r = color.r * (1 - amount);
    const g = color.g * (1 - amount);
    const b = color.b * (1 - amount);
    return `rgb(${Math.round(r * 255)},${Math.round(g * 255)},${Math.round(b * 255)})`;
  }

  glow() {
    this._glowTimer = 1.0;
  }

  squash() {
    this._squashTimer = 1.0;
  }

  popLabel() {
    this._labelPopTimer = 1.0;
  }

  update(delta) {
    this._time += delta;

    // --- Landing glow fade ---
    if (this._glowTimer > 0) {
      this._glowTimer -= delta * 2;
      if (this._glowTimer <= 0) this._glowTimer = 0;
      this.bgMesh.material.opacity = 0.7 + 0.3 * this._glowTimer;
      if (this.rimMesh) {
        this.rimMesh.material.opacity = this._rimBaseOpacity + (1.0 - this._rimBaseOpacity) * this._glowTimer;
      }
    }

    // --- Idle glow pulse (higher tiers only) ---
    if (this.rimMesh && this._glowTimer <= 0) {
      const pulseSpeed = this.multiplier === 10 ? 2.5 : 1.5;
      const pulseAmp = this.multiplier === 10 ? 0.25 : 0.1;
      const pulse = Math.sin(this._time * pulseSpeed) * pulseAmp;
      this.rimMesh.material.opacity = this._rimBaseOpacity + pulse;
    }

    // --- Idle label breathe (x10 only) ---
    if (this.multiplier === 10 && this._labelPopTimer <= 0) {
      const breathe = 1.0 + Math.sin(this._time * 1.2 + 0.5) * 0.06;
      this.labelMesh.scale.set(breathe, breathe, 1);
    }

    // --- Bin squash on landing ---
    if (this._squashTimer > 0) {
      this._squashTimer -= delta * 4;
      if (this._squashTimer <= 0) this._squashTimer = 0;
      const t = this._squashTimer;
      const sx = 1 + 0.15 * t;
      const sy = 1 - 0.15 * t;
      this.mesh.scale.set(sx, sy, 1);
    } else {
      this.mesh.scale.set(1, 1, 1);
    }

    // --- Label pop on landing ---
    if (this._labelPopTimer > 0) {
      this._labelPopTimer -= delta * 3;
      if (this._labelPopTimer <= 0) this._labelPopTimer = 0;
      const pop = 1 + 0.8 * this._labelPopTimer;
      this.labelMesh.scale.set(pop, pop, 1);
    }
  }
}
