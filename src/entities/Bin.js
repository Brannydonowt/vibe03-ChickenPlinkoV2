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

    this.sensor = physics.createRect(x, -y, width - 4, BINS.HEIGHT, {
      isStatic: true,
      isSensor: true,
      label: `bin_${index}`,
    });
    this.sensor.binRef = this;
    physics.addBody(this.sensor);

    const group = new THREE.Group();
    group.position.set(x, -y, 0);

    const bgGeo = new THREE.PlaneGeometry(width - 2, BINS.HEIGHT);
    const bgMat = new THREE.MeshBasicMaterial({
      color: BINS.COLORS[index],
      transparent: true,
      opacity: 0.5,
    });
    this.bgMesh = new THREE.Mesh(bgGeo, bgMat);
    group.add(this.bgMesh);

    const labelText = `x${this.multiplier}`;
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 22px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(labelText, 32, 16);

    const tex = new THREE.CanvasTexture(canvas);
    const labelGeo = new THREE.PlaneGeometry(32, 16);
    const labelMat = new THREE.MeshBasicMaterial({ map: tex, transparent: true });
    const labelMesh = new THREE.Mesh(labelGeo, labelMat);
    labelMesh.position.z = 1;
    group.add(labelMesh);

    this.mesh = group;
  }

  glow() {
    this._glowTimer = 1.0;
  }

  update(delta) {
    if (this._glowTimer > 0) {
      this._glowTimer -= delta * 2;
      this.bgMesh.material.opacity = 0.5 + 0.5 * Math.max(this._glowTimer, 0);
      if (this._glowTimer <= 0) {
        this._glowTimer = 0;
        this.bgMesh.material.opacity = 0.5;
      }
    }
  }
}
