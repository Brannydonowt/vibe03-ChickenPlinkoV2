import * as THREE from 'three';
import { GAME, ENVIRONMENT } from '../config/constants.js';

export class Environment {
  constructor(scene, textures) {
    this.scene = scene;
    this.textures = textures;
    this._clouds = [];
    this._mountains = [];
    this._groundDetails = [];

    this._createGround();
    this._createMountains();
    this._createClouds();
    this._createGroundDetails();
  }

  _makeSprite(texture, width, height, x, y, z, opacity = 1.0) {
    const geo = new THREE.PlaneGeometry(width, height);
    const mat = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      opacity,
      depthWrite: false,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, z);
    this.scene.add(mesh);
    return mesh;
  }

  _createGround() {
    const groundY = -ENVIRONMENT.GROUND_Y;
    const h = ENVIRONMENT.GROUND_HEIGHT;
    const w = ENVIRONMENT.GROUND_WIDTH;

    const groundMat = new THREE.MeshBasicMaterial({ color: ENVIRONMENT.GROUND_COLOR });
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(w, h), groundMat);
    ground.position.set(0, groundY - h / 2, -1);
    this.scene.add(ground);

    const topH = ENVIRONMENT.GROUND_TOP_HEIGHT;
    const topMat = new THREE.MeshBasicMaterial({ color: ENVIRONMENT.GROUND_TOP_COLOR });
    const topStrip = new THREE.Mesh(new THREE.PlaneGeometry(w, topH), topMat);
    topStrip.position.set(0, groundY - topH / 2, -0.9);
    this.scene.add(topStrip);
  }

  _createMountains() {
    const tex = this.textures;
    const baseY = -ENVIRONMENT.GROUND_Y;

    if (tex.mountainsFar) {
      const far1 = this._makeSprite(tex.mountainsFar, 550, 220, -40, baseY + 100, -4, 0.7);
      far1._baseY = baseY + 100;
      far1._parallax = ENVIRONMENT.MOUNTAIN_PARALLAX * 0.6;
      this._mountains.push(far1);

      const far2 = this._makeSprite(tex.mountainsFar, 500, 190, 180, baseY + 80, -4, 0.5);
      far2.scale.x = -1;
      far2._baseY = baseY + 80;
      far2._parallax = ENVIRONMENT.MOUNTAIN_PARALLAX * 0.6;
      this._mountains.push(far2);
    }

    if (tex.mountainsNear) {
      const near1 = this._makeSprite(tex.mountainsNear, 600, 240, 0, baseY + 90, -3, 0.85);
      near1._baseY = baseY + 90;
      near1._parallax = ENVIRONMENT.MOUNTAIN_PARALLAX;
      this._mountains.push(near1);
    }
  }

  _createClouds() {
    const tex = this.textures;
    const cloudDefs = [
      { key: 'cloudLarge',  x: -120, gameY: 20,  w: 160, h: 80,  z: -6, opacity: 0.9 },
      { key: 'cloudMedium', x: 100,  gameY: 60,  w: 120, h: 60,  z: -5, opacity: 0.85 },
      { key: 'cloudSmall',  x: -60,  gameY: 130, w: 90,  h: 35,  z: -5, opacity: 0.7 },
      { key: 'cloudLarge',  x: 150,  gameY: 200, w: 130, h: 65,  z: -6, opacity: 0.6 },
      { key: 'cloudMedium', x: -140, gameY: 280, w: 100, h: 50,  z: -5, opacity: 0.55 },
      { key: 'cloudSmall',  x: 50,   gameY: 350, w: 80,  h: 30,  z: -6, opacity: 0.45 },
      { key: 'cloudSmall',  x: -100, gameY: 450, w: 70,  h: 28,  z: -5, opacity: 0.35 },
    ];

    for (const def of cloudDefs) {
      const t = tex[def.key];
      if (!t) continue;
      const threeY = -def.gameY;
      const mesh = this._makeSprite(t, def.w, def.h, def.x, threeY, def.z, def.opacity);
      mesh._baseY = threeY;
      this._clouds.push(mesh);
    }
  }

  _createGroundDetails() {
    const tex = this.textures;
    const groundY = -ENVIRONMENT.GROUND_Y;
    const detailDefs = [
      { key: 'grass01', x: -130, w: 30, h: 35, offsetY: 12 },
      { key: 'bush01',  x: -60,  w: 40, h: 28, offsetY: 8 },
      { key: 'hut01',   x: 20,   w: 55, h: 50, offsetY: 20 },
      { key: 'grass01', x: 100,  w: 25, h: 30, offsetY: 10 },
      { key: 'bush01',  x: 160,  w: 35, h: 25, offsetY: 7 },
      { key: 'grass01', x: -170, w: 22, h: 26, offsetY: 8 },
    ];

    for (const def of detailDefs) {
      const t = tex[def.key];
      if (!t) continue;
      const y = groundY + def.offsetY;
      this._makeSprite(t, def.w, def.h, def.x, y, -0.5);
    }
  }

  update(camera) {
    const camY = camera.currentY;
    const parallaxRef = camY;

    for (const cloud of this._clouds) {
      cloud.position.y = cloud._baseY + parallaxRef * ENVIRONMENT.CLOUD_PARALLAX;
    }

    for (const mtn of this._mountains) {
      mtn.position.y = mtn._baseY + parallaxRef * mtn._parallax;
    }
  }
}
