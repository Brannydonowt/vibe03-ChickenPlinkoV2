import * as THREE from 'three';
import { BOARD, COLORS, GOLDEN_PEG } from '../config/constants.js';

export class Peg {
  constructor(x, y, physics) {
    this.x = x;
    this.y = y;
    this.baseScale = 1;
    this._hitTimer = 0;
    this.isGolden = false;

    this.body = physics.createCircle(x, -y, BOARD.PEG_RADIUS, {
      isStatic: true,
      restitution: 0.7,
      friction: 0.05,
      label: 'peg',
    });
    this.body.pegRef = this;
    physics.addBody(this.body);

    const geo = new THREE.CircleGeometry(BOARD.PEG_RADIUS, 16);
    const mat = new THREE.MeshBasicMaterial({ color: COLORS.PEG_DEFAULT });
    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.position.set(x, -y, 0);
  }

  setGolden(on) {
    this.isGolden = on;
    if (on) {
      this.mesh.material.color.setHex(GOLDEN_PEG.COLOR);
      this.baseScale = GOLDEN_PEG.SCALE;
      this.mesh.scale.set(this.baseScale, this.baseScale, 1);
    } else {
      this.mesh.material.color.setHex(COLORS.PEG_DEFAULT);
      this.baseScale = 1;
      this.mesh.scale.set(1, 1, 1);
    }
  }

  hit() {
    this._hitTimer = 1.0;
    this.mesh.material.color.setHex(this.isGolden ? 0xFFFFAA : COLORS.PEG_HIT);
  }

  nudge(intensity) {
    if (this._hitTimer < intensity) {
      this._hitTimer = intensity;
    }
  }

  update(delta) {
    if (this._hitTimer > 0) {
      this._hitTimer -= delta * 6;
      const scale = this.baseScale + 0.4 * Math.max(this._hitTimer, 0);
      this.mesh.scale.set(scale, scale, 1);

      if (this._hitTimer <= 0) {
        this._hitTimer = 0;
        this.mesh.scale.set(this.baseScale, this.baseScale, 1);
        this.mesh.material.color.setHex(this.isGolden ? GOLDEN_PEG.COLOR : COLORS.PEG_DEFAULT);
      }
    }
  }
}
