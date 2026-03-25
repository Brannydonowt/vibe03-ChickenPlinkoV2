import * as THREE from 'three';
import { EGG, POWERUP } from '../config/constants.js';

export class Egg {
  constructor(x, y, physics, texture, isDuplicate = false) {
    this.physics = physics;
    this.isDuplicate = isDuplicate;
    this.pegHits = 0;
    this.alive = true;
    this.landed = false;
    this.landedBin = null;

    const radius = isDuplicate ? EGG.RADIUS * POWERUP.DUPLICATE_RADIUS_SCALE : EGG.RADIUS;
    const restitution = isDuplicate ? POWERUP.DUPLICATE_RESTITUTION : EGG.RESTITUTION;

    this.body = physics.createCircle(x, -y, radius, {
      restitution,
      friction: EGG.FRICTION,
      density: EGG.DENSITY,
      label: isDuplicate ? 'egg_duplicate' : 'egg',
    });
    this.body.eggRef = this;
    physics.addBody(this.body);

    const size = radius * 2.4;
    const geo = new THREE.PlaneGeometry(size, size);
    const mat = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      opacity: isDuplicate ? POWERUP.DUPLICATE_OPACITY : 1.0,
    });
    if (isDuplicate) {
      mat.color.set(0xFFE680);
    }
    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.position.set(x, -y, isDuplicate ? 1.5 : 2);

    this._crackLines = [];
    this._squashX = 1;
    this._squashY = 1;
  }

  getX() { return this.body.position.x; }
  getY() { return -this.body.position.y; }
  getVelX() { return this.body.velocity.x; }
  getVelY() { return this.body.velocity.y; }
  getSpeed() {
    const vx = this.body.velocity.x;
    const vy = this.body.velocity.y;
    return Math.sqrt(vx * vx + vy * vy);
  }

  setSquash(sx, sy) {
    this._squashX = sx;
    this._squashY = sy;
  }

  showCracks() {
    if (this._crackLines.length > 0) return;
    const lineMat = new THREE.LineBasicMaterial({ color: 0x8B7355 });
    for (let i = 0; i < 3; i++) {
      const pts = [];
      const angle = (Math.random() - 0.5) * Math.PI;
      const len = EGG.RADIUS * 0.6;
      pts.push(new THREE.Vector3(0, 0, 0));
      pts.push(new THREE.Vector3(
        Math.cos(angle) * len,
        Math.sin(angle) * len,
        0
      ));
      if (Math.random() > 0.4) {
        const branchAngle = angle + (Math.random() - 0.5) * 1.2;
        pts.push(new THREE.Vector3(
          Math.cos(angle) * len * 0.6 + Math.cos(branchAngle) * len * 0.4,
          Math.sin(angle) * len * 0.6 + Math.sin(branchAngle) * len * 0.4,
          0
        ));
      }
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      const line = new THREE.Line(geo, lineMat);
      line.position.z = 3;
      this.mesh.add(line);
      this._crackLines.push(line);
    }
  }

  update() {
    if (!this.alive) return;
    this.mesh.position.x = this.body.position.x;
    this.mesh.position.y = this.body.position.y;
    this.mesh.scale.set(this._squashX, this._squashY, 1);
    this.mesh.rotation.z = this.body.angle;
  }

  destroy(scene) {
    this.alive = false;
    this.physics.removeBody(this.body);
    scene.remove(this.mesh);
  }
}
