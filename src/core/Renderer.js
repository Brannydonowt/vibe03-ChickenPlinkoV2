import * as THREE from 'three';
import { GAME } from '../config/constants.js';

export class Renderer {
  constructor(container) {
    this.scene = new THREE.Scene();

    const aspect = GAME.WIDTH / GAME.HEIGHT;
    const halfW = GAME.WIDTH / 2;
    const halfH = GAME.HEIGHT / 2;
    this.camera = new THREE.OrthographicCamera(-halfW, halfW, halfH, -halfH, 0.1, 1000);
    this.camera.position.z = 100;

    this.baseLeft = -halfW;
    this.baseRight = halfW;
    this.baseTop = halfH;
    this.baseBottom = -halfH;

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x000000);
    container.appendChild(this.renderer.domElement);

    this._createBackground();
    this._resize();
    window.addEventListener('resize', () => this._resize());
  }

  _createBackground() {
    const geo = new THREE.PlaneGeometry(2, 2);
    const mat = new THREE.ShaderMaterial({
      uniforms: {
        uTopColor: { value: new THREE.Color(GAME.BG_TOP) },
        uBottomColor: { value: new THREE.Color(GAME.BG_BOTTOM) },
        uBrightness: { value: 0.0 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uTopColor;
        uniform vec3 uBottomColor;
        uniform float uBrightness;
        varying vec2 vUv;
        void main() {
          vec3 color = mix(uBottomColor, uTopColor, vUv.y);
          color = mix(color, vec3(1.0), uBrightness);
          gl_FragColor = vec4(color, 1.0);
        }
      `,
      depthWrite: false,
      depthTest: false,
    });
    this.bgMesh = new THREE.Mesh(geo, mat);
    this.bgMesh.renderOrder = -1000;
    this.bgMesh.frustumCulled = false;

    this.bgScene = new THREE.Scene();
    this.bgCamera = new THREE.Camera();
    this.bgScene.add(this.bgMesh);
  }

  setBgBrightness(v) {
    this.bgMesh.material.uniforms.uBrightness.value = v;
  }

  _resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.renderer.setSize(w, h);

    const gameAspect = GAME.WIDTH / GAME.HEIGHT;
    const windowAspect = w / h;

    if (windowAspect > gameAspect) {
      const visibleH = GAME.HEIGHT;
      const visibleW = visibleH * windowAspect;
      this.camera.left = -visibleW / 2;
      this.camera.right = visibleW / 2;
      this.camera.top = visibleH / 2;
      this.camera.bottom = -visibleH / 2;
    } else {
      const visibleW = GAME.WIDTH;
      const visibleH = visibleW / windowAspect;
      this.camera.left = -visibleW / 2;
      this.camera.right = visibleW / 2;
      this.camera.top = visibleH / 2;
      this.camera.bottom = -visibleH / 2;
    }

    this.camera.updateProjectionMatrix();
  }

  render() {
    this.renderer.autoClear = false;
    this.renderer.clear();
    this.renderer.render(this.bgScene, this.bgCamera);
    this.renderer.render(this.scene, this.camera);
  }

  getCanvas() {
    return this.renderer.domElement;
  }
}
