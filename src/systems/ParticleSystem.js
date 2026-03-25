import * as THREE from 'three';
import { COLORS } from '../config/constants.js';

class Particle {
  constructor(x, y, vx, vy, size, color, life, gravity = 0, drag = 0.98) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.size = size;
    this.color = color;
    this.life = life;
    this.maxLife = life;
    this.gravity = gravity;
    this.drag = drag;
    this.alive = true;
  }
}

export class ParticleSystem {
  constructor(scene) {
    this.scene = scene;
    this.particles = [];

    this._maxParticles = 300;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(this._maxParticles * 3);
    const colors = new Float32Array(this._maxParticles * 3);
    const sizes = new Float32Array(this._maxParticles);
    for (let i = 0; i < this._maxParticles; i++) {
      positions[i * 3 + 2] = -9999;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const mat = new THREE.PointsMaterial({
      size: 4,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: false,
      depthWrite: false,
    });

    this.points = new THREE.Points(geo, mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = 100;
    this.points.visible = false;
    scene.add(this.points);

    this._floatingTexts = [];
  }

  emit(x, y, count, config = {}) {
    const {
      color = COLORS.SPARK,
      speed = 80,
      life = 0.5,
      size = 3,
      spread = Math.PI * 2,
      angle = -Math.PI / 2,
      gravity = 200,
      drag = 0.97,
    } = config;

    const c = new THREE.Color(color);

    for (let i = 0; i < count; i++) {
      if (this.particles.length >= this._maxParticles) break;
      const a = angle + (Math.random() - 0.5) * spread;
      const s = speed * (0.5 + Math.random() * 0.5);
      this.particles.push(new Particle(
        x, y,
        Math.cos(a) * s,
        Math.sin(a) * s,
        size * (0.5 + Math.random() * 0.5),
        c,
        life * (0.7 + Math.random() * 0.3),
        gravity,
        drag
      ));
    }
  }

  emitTrail(x, y, speed) {
    const count = Math.min(Math.ceil(speed / 3), 3);
    this.emit(x, y, count, {
      color: 0xFFE4B5,
      speed: 10,
      life: 0.2 + speed * 0.01,
      size: 2,
      spread: Math.PI,
      angle: Math.PI / 2,
      gravity: 0,
      drag: 0.95,
    });
  }

  emitPegSpark(x, y) {
    this.emit(x, y, 5, {
      color: COLORS.SPARK,
      speed: 60,
      life: 0.25,
      size: 2.5,
      spread: Math.PI * 2,
      angle: 0,
      gravity: 100,
      drag: 0.96,
    });
  }

  emitHatchExplosion(x, y) {
    this.emit(x, y, 15, {
      color: COLORS.SHELL_PARTICLE,
      speed: 150,
      life: 0.8,
      size: 5,
      spread: Math.PI * 2,
      angle: 0,
      gravity: 300,
      drag: 0.97,
    });
    this.emit(x, y, 20, {
      color: COLORS.GOLD_PARTICLE,
      speed: 120,
      life: 0.6,
      size: 4,
      spread: Math.PI,
      angle: -Math.PI / 2,
      gravity: 100,
      drag: 0.96,
    });
    this.emit(x, y, 10, {
      color: COLORS.SPARK,
      speed: 200,
      life: 0.4,
      size: 2,
      spread: Math.PI * 2,
      angle: 0,
      gravity: 50,
      drag: 0.95,
    });
  }

  emitDust(x, y) {
    this.emit(x, y, 8, {
      color: COLORS.DUST,
      speed: 30,
      life: 0.6,
      size: 3,
      spread: Math.PI,
      angle: -Math.PI / 2,
      gravity: -20,
      drag: 0.93,
    });
  }

  spawnFloatingText(x, y, text, size, color) {
    const canvas = document.createElement('canvas');
    const pixelScale = 2;
    canvas.width = 256 * pixelScale;
    canvas.height = 96 * pixelScale;
    const ctx = canvas.getContext('2d');
    ctx.scale(pixelScale, pixelScale);
    ctx.font = `bold ${size}px "Arial Black", sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 4;
    ctx.lineJoin = 'round';
    ctx.strokeText(text, 128, 48);
    ctx.fillStyle = color || '#fff';
    ctx.fillText(text, 128, 48);

    const tex = new THREE.CanvasTexture(canvas);
    const geo = new THREE.PlaneGeometry(128, 48);
    const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, 10);
    mesh.renderOrder = 200;
    this.scene.add(mesh);

    this._floatingTexts.push({
      mesh,
      vy: 50,
      life: 0.9,
      maxLife: 0.9,
      scale: 1.5,
      targetScale: 1.0,
    });
  }

  update(delta) {
    const positions = this.points.geometry.attributes.position.array;
    const colors = this.points.geometry.attributes.color.array;
    const sizes = this.points.geometry.attributes.size.array;

    let alive = 0;
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= delta;
      if (p.life <= 0) {
        this.particles.splice(i, 1);
        continue;
      }
      p.vy -= p.gravity * delta;
      p.vx *= p.drag;
      p.vy *= p.drag;
      p.x += p.vx * delta;
      p.y += p.vy * delta;
    }

    for (let i = 0; i < this._maxParticles; i++) {
      if (i < this.particles.length) {
        const p = this.particles[i];
        const alpha = p.life / p.maxLife;
        positions[i * 3] = p.x;
        positions[i * 3 + 1] = p.y;
        positions[i * 3 + 2] = 5;
        colors[i * 3] = p.color.r * alpha;
        colors[i * 3 + 1] = p.color.g * alpha;
        colors[i * 3 + 2] = p.color.b * alpha;
        sizes[i] = p.size * alpha;
      } else {
        positions[i * 3] = -9999;
        positions[i * 3 + 1] = -9999;
        positions[i * 3 + 2] = -9999;
        sizes[i] = 0;
      }
    }

    this.points.visible = this.particles.length > 0;
    this.points.geometry.attributes.position.needsUpdate = true;
    this.points.geometry.attributes.color.needsUpdate = true;
    this.points.geometry.attributes.size.needsUpdate = true;

    for (let i = this._floatingTexts.length - 1; i >= 0; i--) {
      const ft = this._floatingTexts[i];
      ft.life -= delta;
      ft.mesh.position.y += ft.vy * delta;
      ft.mesh.material.opacity = Math.max(0, ft.life / ft.maxLife);

      if (ft.scale !== undefined) {
        ft.scale += (ft.targetScale - ft.scale) * Math.min(delta * 12, 1);
        ft.mesh.scale.set(ft.scale, ft.scale, 1);
      }

      if (ft.life <= 0) {
        this.scene.remove(ft.mesh);
        ft.mesh.geometry.dispose();
        ft.mesh.material.map.dispose();
        ft.mesh.material.dispose();
        this._floatingTexts.splice(i, 1);
      }
    }
  }
}
