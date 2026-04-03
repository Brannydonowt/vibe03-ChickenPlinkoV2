import { Renderer } from './core/Renderer.js';
import { Physics } from './core/Physics.js';
import { Camera } from './core/Camera.js';
import { InputManager } from './core/InputManager.js';
import { AudioManager } from './core/AudioManager.js';
import { AssetLoader } from './core/AssetLoader.js';
import { Board } from './systems/Board.js';
import { ScoreManager } from './systems/ScoreManager.js';
import { ParticleSystem } from './systems/ParticleSystem.js';
import { GameLoop } from './systems/GameLoop.js';
import { Chicken } from './entities/Chicken.js';
import { Environment } from './systems/Environment.js';
import { HUD } from './ui/HUD.js';
import { Settings } from './systems/Settings.js';
import { VERSION } from './config/constants.js';

async function init() {
  const textures = await AssetLoader.loadAll();

  const container = document.getElementById('game');

  const renderer = new Renderer(container);
  const physics = new Physics();
  const camera = new Camera(renderer.camera);
  const input = new InputManager(renderer.getCanvas());
  const audio = new AudioManager();
  await audio.loadSound('chickenCluck', 'sounds/SFX_ChickenCluck.ogg');
  await audio.loadSound('chickenSqueeze1', 'sounds/SFX_Branny_ChickenSqueeze01.ogg');
  await audio.loadSound('chickenSqueeze2', 'sounds/SFX_Branny_ChickenSqueeze02.ogg');
  await audio.loadSound('chickenSqueeze3', 'sounds/SFX_Branny_ChickenSqueeze03.ogg');
  const scoreManager = new ScoreManager();
  const particleSystem = new ParticleSystem(renderer.scene);
  const board = new Board(renderer.scene, physics);
  const environment = new Environment(renderer.scene, textures);
  const chicken = new Chicken(textures);
  renderer.scene.add(chicken.group);
  const hud = new HUD();
  hud.initSettingsToggles(Settings);
  Settings.onChange((s) => hud.syncSettingsToggles(s));
  document.getElementById('version-label').textContent = VERSION.toString();

  const gameLoop = new GameLoop({
    renderer,
    physics,
    camera,
    board,
    chicken,
    scoreManager,
    particleSystem,
    hud,
    audio,
    input,
    textures,
  });

  let lastTime = -1;

  function animate(time) {
    requestAnimationFrame(animate);
    if (lastTime < 0) { lastTime = time; return; }
    const delta = Math.min((time - lastTime) / 1000, 1 / 20);
    lastTime = time;

    physics.update(delta);
    gameLoop.update(delta);
    environment.update(camera);
    renderer.render();
  }

  requestAnimationFrame(animate);
}

init();
