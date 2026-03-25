import Matter from 'matter-js';
import { PHYSICS } from '../config/constants.js';

export class Physics {
  constructor() {
    this.engine = Matter.Engine.create({
      gravity: { x: 0, y: -PHYSICS.GRAVITY },
    });
    this.world = this.engine.world;
    this.listeners = new Map();

    Matter.Events.on(this.engine, 'collisionStart', (event) => {
      for (const pair of event.pairs) {
        this._emit('collisionStart', pair);
      }
    });
  }

  addBody(body) {
    Matter.Composite.add(this.world, body);
  }

  removeBody(body) {
    Matter.Composite.remove(this.world, body);
  }

  update(delta) {
    const maxStep = 16;
    const totalMs = Math.min(delta * 1000, 50);
    let remaining = totalMs;
    while (remaining > 0) {
      const step = Math.min(remaining, maxStep);
      Matter.Engine.update(this.engine, step);
      remaining -= step;
    }
  }

  on(event, callback) {
    if (!this.listeners.has(event)) this.listeners.set(event, []);
    this.listeners.get(event).push(callback);
  }

  off(event, callback) {
    const list = this.listeners.get(event);
    if (list) {
      const idx = list.indexOf(callback);
      if (idx >= 0) list.splice(idx, 1);
    }
  }

  _emit(event, data) {
    const list = this.listeners.get(event);
    if (list) list.forEach(cb => cb(data));
  }

  createCircle(x, y, radius, options = {}) {
    return Matter.Bodies.circle(x, y, radius, options);
  }

  createRect(x, y, w, h, options = {}) {
    return Matter.Bodies.rectangle(x, y, w, h, options);
  }

  setStatic(body, isStatic) {
    Matter.Body.setStatic(body, isStatic);
  }

  setVelocity(body, velocity) {
    Matter.Body.setVelocity(body, velocity);
  }

  setPosition(body, position) {
    Matter.Body.setPosition(body, position);
  }
}
