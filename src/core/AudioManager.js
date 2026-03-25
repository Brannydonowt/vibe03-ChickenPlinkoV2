import { AUDIO } from '../config/constants.js';

export class AudioManager {
  constructor() {
    this.ctx = null;
    this._initialized = false;
  }

  _init() {
    if (this._initialized) return;
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this._initialized = true;
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

  pegHit(normalizedY, comboCount = 1) {
    const freq = AUDIO.PEG_BASE_FREQ + AUDIO.PEG_FREQ_RANGE * (1 - normalizedY);
    const comboBoost = Math.min(comboCount, 8) * 30;
    this._play(freq + comboBoost, 0.08, 'sine', AUDIO.MASTER_VOLUME * 0.6);
    this._play((freq + comboBoost) * 1.5, 0.05, 'sine', AUDIO.MASTER_VOLUME * 0.2);
  }

  layEgg() {
    this._play(400, 0.12, 'sine', AUDIO.MASTER_VOLUME * 0.5);
    this._play(600, 0.08, 'sine', AUDIO.MASTER_VOLUME * 0.3);
  }

  eggLand() {
    this._play(120, 0.2, 'sine', AUDIO.MASTER_VOLUME * 0.5);
    this._noise(0.1, AUDIO.MASTER_VOLUME * 0.2);
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
