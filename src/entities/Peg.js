import * as THREE from 'three';
import { BOARD, COLORS, SPECIAL_PEGS } from '../config/constants.js';

export class Peg {
  constructor(x, y, physics) {
    this.x = x;
    this.y = y;
    this.baseScale = 1;
    this._hitTimer = 0;
    this.specialType = null;
    this._phase = 0;

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

  setSpecial(type) {
    this.specialType = type;
    if (type) {
      const config = SPECIAL_PEGS[type];
      this.mesh.material.color.setHex(config.color);
      this.baseScale = config.scale;
    } else {
      this.mesh.material.color.setHex(COLORS.PEG_DEFAULT);
      this.baseScale = 1;
    }
    this.mesh.scale.set(this.baseScale, this.baseScale, 1);
  }

  hit() {
    this._hitTimer = 1.0;
    const config = this.specialType ? SPECIAL_PEGS[this.specialType] : null;
    this.mesh.material.color.setHex(config ? config.hitColor : COLORS.PEG_HIT);
  }

  nudge(intensity) {
    if (this._hitTimer < intensity) {
      this._hitTimer = intensity;
    }
  }

  update(delta) {
    if (this._hitTimer <= 0) {
      if (this.specialType === 'rainbow') {
        this._phase += delta * 2;
        this.mesh.material.color.setHSL(this._phase % 1, 1, 0.6);
      } else if (this.specialType === 'diamond') {
        this._phase += delta * 3;
        this.mesh.material.color.setHSL(0.52, 0.9, 0.65 + 0.15 * Math.sin(this._phase));
      }
    }

    if (this._hitTimer > 0) {
      this._hitTimer -= delta * 6;
      const scale = this.baseScale + 0.4 * Math.max(this._hitTimer, 0);
      this.mesh.scale.set(scale, scale, 1);

      if (this._hitTimer <= 0) {
        this._hitTimer = 0;
        this.mesh.scale.set(this.baseScale, this.baseScale, 1);
        const type = this.specialType;
        if (type === 'golden') {
          this.mesh.material.color.setHex(SPECIAL_PEGS.golden.color);
        } else if (!type) {
          this.mesh.material.color.setHex(COLORS.PEG_DEFAULT);
        }
      }
    }
  }
}
