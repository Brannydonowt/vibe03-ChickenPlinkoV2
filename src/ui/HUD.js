export class HUD {
  constructor() {
    this._goldEl = document.getElementById('gold-count');
    this._scoreEl = document.getElementById('score-count');
    this._scoreDisplay = document.getElementById('score-display');
    this._comboDisplay = document.getElementById('combo-display');
    this._tapPrompt = document.getElementById('tap-prompt');
    this._screenFlash = document.getElementById('screen-flash');
    this._edgeGlow = document.getElementById('edge-glow');
    this._goldPill = document.querySelector('.gold-pill');
  }

  setGold(value) {
    this._goldEl.textContent = value;
    this._goldPill.classList.add('punch');
    setTimeout(() => this._goldPill.classList.remove('punch'), 150);
  }

  setScore(value) {
    this._scoreEl.textContent = value;
    this._scoreDisplay.classList.add('visible');
  }

  setCombo(value) {
    if (value > 1) {
      this._comboDisplay.textContent = `x${value}`;
      this._comboDisplay.classList.add('visible');
      this._comboDisplay.style.transform = `translateX(-50%) scale(${1 + value * 0.05})`;
    } else {
      this._comboDisplay.classList.remove('visible');
    }
  }

  setEdgeGlow(intensity) {
    this._edgeGlow.style.opacity = Math.min(intensity, 1);
  }

  showTapPrompt() {
    this._tapPrompt.classList.add('visible');
  }

  hideTapPrompt() {
    this._tapPrompt.classList.remove('visible');
  }

  hideScore() {
    this._scoreDisplay.classList.remove('visible');
    this._comboDisplay.classList.remove('visible');
    this._edgeGlow.style.opacity = 0;
  }

  screenFlash(duration = 0.15) {
    this._screenFlash.style.opacity = 0.6;
    setTimeout(() => {
      this._screenFlash.style.transition = `opacity ${duration}s ease`;
      this._screenFlash.style.opacity = 0;
    }, 30);
    setTimeout(() => {
      this._screenFlash.style.transition = 'opacity 0.1s ease';
    }, duration * 1000 + 50);
  }
}
