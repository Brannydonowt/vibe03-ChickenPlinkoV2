import { AUDIO } from '../config/constants.js';

export class AudioManager {
  constructor() {
    this.ctx = null;
    this._initialized = false;
    this._rawSounds = {};
    this._decodedSounds = {};
  }

  _init() {
    if (this._initialized) return;
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this._initialized = true;
  }

  async loadSound(name, url) {
    const res = await fetch(url);
    this._rawSounds[name] = await res.arrayBuffer();
  }

  async _getBuffer(name) {
    if (this._decodedSounds[name]) return this._decodedSounds[name];
    const raw = this._rawSounds[name];
    if (!raw) return null;
    this._decodedSounds[name] = await this.ctx.decodeAudioData(raw);
    delete this._rawSounds[name];
    return this._decodedSounds[name];
  }

  async _playSound(name, volume = AUDIO.MASTER_VOLUME) {
    this._init();
    const buffer = await this._getBuffer(name);
    if (!buffer) return;
    const source = this.ctx.createBufferSource();
    const gain = this.ctx.createGain();
    source.buffer = buffer;
    gain.gain.value = volume;
    source.connect(gain);
    gain.connect(this.ctx.destination);
    source.start();
  }

  _play(freq, duration, type = 'sine', volume = AUDIO.MASTER_VOLUME, detune = 0) {
    this._init();
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.value = freq;
    if (detune) osc.detune.value = detune;

    gain.gain.setValueAtTime(volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration);
  }

  _noise(duration, volume = AUDIO.MASTER_VOLUME * 0.5) {
    this._init();
    const ctx = this.ctx;
    const bufferSize = ctx.sampleRate * duration;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.5;
    }
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    const filter = ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 2000;

    source.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    source.start();
  }

  pegHit(normalizedY, comboCount = 1, volumeScale = 1.0) {
    const freq = AUDIO.PEG_BASE_FREQ + AUDIO.PEG_FREQ_RANGE * (1 - normalizedY);
    const comboBoost = Math.min(comboCount, 8) * 30;
    this._play(freq + comboBoost, 0.08, 'sine', AUDIO.MASTER_VOLUME * 0.6 * volumeScale);
    this._play((freq + comboBoost) * 1.5, 0.05, 'sine', AUDIO.MASTER_VOLUME * 0.2 * volumeScale);
  }

  layEgg() {
    this._play(400, 0.12, 'sine', AUDIO.MASTER_VOLUME * 0.5);
    this._play(600, 0.08, 'sine', AUDIO.MASTER_VOLUME * 0.3);
  }

  chickenCluck(volumeScale = 1.0) {
    this._playSound('chickenCluck', AUDIO.MASTER_VOLUME * 0.8 * volumeScale);
  }

  chickenSqueeze(volumeScale = 1.0) {
    const idx = Math.floor(Math.random() * 3) + 1;
    this._playSound(`chickenSqueeze${idx}`, AUDIO.MASTER_VOLUME * volumeScale);
  }

  eggPop(volumeScale = 1.0) {
    this._init();
    const ctx = this.ctx;
    const now = ctx.currentTime;

    const pop = ctx.createOscillator();
    const popGain = ctx.createGain();
    pop.type = 'sine';
    pop.frequency.setValueAtTime(350, now);
    pop.frequency.exponentialRampToValueAtTime(80, now + 0.12);
    popGain.gain.setValueAtTime(AUDIO.MASTER_VOLUME * 0.7 * volumeScale, now);
    popGain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
    pop.connect(popGain);
    popGain.connect(ctx.destination);
    pop.start(now);
    pop.stop(now + 0.15);

    const snap = ctx.createOscillator();
    const snapGain = ctx.createGain();
    snap.type = 'square';
    snap.frequency.setValueAtTime(800, now);
    snap.frequency.exponentialRampToValueAtTime(200, now + 0.06);
    snapGain.gain.setValueAtTime(AUDIO.MASTER_VOLUME * 0.3 * volumeScale, now);
    snapGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    snap.connect(snapGain);
    snapGain.connect(ctx.destination);
    snap.start(now);
    snap.stop(now + 0.08);

    this._noise(0.08, AUDIO.MASTER_VOLUME * 0.4 * volumeScale);
  }

  eggLand(volumeScale = 1.0) {
    this._play(120, 0.2, 'sine', AUDIO.MASTER_VOLUME * 0.5 * volumeScale);
    this._noise(0.1, AUDIO.MASTER_VOLUME * 0.2 * volumeScale);
  }

  hatch() {
    this._noise(0.15, AUDIO.MASTER_VOLUME * 0.6);
    setTimeout(() => {
      this._play(600, 0.3, 'sine', AUDIO.MASTER_VOLUME * 0.4);
      this._play(900, 0.25, 'sine', AUDIO.MASTER_VOLUME * 0.3);
      this._play(1200, 0.2, 'sine', AUDIO.MASTER_VOLUME * 0.2);
    }, 100);
  }

  coinCollect(index, total) {
    const freq = AUDIO.COIN_BASE_FREQ + (index / total) * 600;
    this._play(freq, 0.06, 'square', AUDIO.MASTER_VOLUME * 0.15);
  }

  drumrollHit(intensity) {
    const vol = AUDIO.MASTER_VOLUME * (0.15 + intensity * 0.25);
    this._play(100 + intensity * 40, 0.04, 'triangle', vol);
    this._noise(0.025, vol * 0.4);
  }

  purchasePowerup() {
    this._init();
    const vol = AUDIO.MASTER_VOLUME * 0.7;
    const notes = [523, 659, 784];
    notes.forEach((freq, i) => {
      setTimeout(() => {
        this._play(freq, 0.2 - i * 0.04, 'sine', vol * (1 - i * 0.12));
      }, i * 70);
    });
    setTimeout(() => this._noise(0.06, AUDIO.MASTER_VOLUME * 0.25), 60);
  }

  duplicateSpawn() {
    this._play(1000 + Math.random() * 200, 0.04, 'sine', AUDIO.MASTER_VOLUME * 0.18);
    this._noise(0.02, AUDIO.MASTER_VOLUME * 0.06);
  }

  whoosh() {
    this._init();
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(200, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.4);
    gain.gain.setValueAtTime(AUDIO.MASTER_VOLUME * 0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.4);
    this._noise(0.2, AUDIO.MASTER_VOLUME * 0.15);
  }
}
