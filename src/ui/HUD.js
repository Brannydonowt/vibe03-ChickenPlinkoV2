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
    this._viewport = document.getElementById('game-viewport');

    this._powerupBar = document.getElementById('powerup-bar');
    this._powerupBtn = document.getElementById('powerup-dupli-bounce');
    this._powerupNameEl = this._powerupBtn.querySelector('.powerup-name');

    this._subtleTapPrompt = document.getElementById('tap-prompt-subtle');

    this._upgradeToggle = document.getElementById('upgrade-toggle');
    this._upgradeBackdrop = document.getElementById('upgrade-backdrop');
    this._upgradePanel = document.getElementById('upgrade-panel');
    this._upgradeClose = document.getElementById('upgrade-close');
    this._buyAutoChickenBtn = document.getElementById('buy-auto-chicken');
    this._autoChickenCostEl = document.getElementById('auto-chicken-cost');
    this._autoChickenCountEl = document.getElementById('auto-chicken-count');

    this._panelOpen = false;

    this._upgradeToggle.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      this.openUpgradePanel();
    });
    this._upgradeClose.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      this.closeUpgradePanel();
    });
    this._upgradeBackdrop.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      this.closeUpgradePanel();
    });
  }

  setGold(value) {
    this._goldEl.textContent = value;
  }

  throbGold() {
    this._goldPill.classList.remove('throb');
    void this._goldPill.offsetWidth;
    this._goldPill.classList.add('throb');
    setTimeout(() => this._goldPill.classList.remove('throb'), 120);
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

  showSubtleTapPrompt() {
    this._subtleTapPrompt.classList.add('visible');
  }

  hideSubtleTapPrompt() {
    this._subtleTapPrompt.classList.remove('visible');
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

  showPowerupButton(canAfford) {
    this._powerupBar.classList.add('visible');
    this.updatePowerupAffordability(canAfford);
    this.setPowerupIdle();
  }

  hidePowerupButton() {
    this._powerupBar.classList.remove('visible');
  }

  setPowerupActive() {
    this._powerupBtn.classList.remove('disabled');
    this._powerupBtn.classList.add('active');
    this._powerupNameEl.textContent = 'ACTIVE!';
  }

  setPowerupIdle() {
    this._powerupBtn.classList.remove('active');
    this._powerupNameEl.textContent = 'Dupli-Bounce!';
  }

  updatePowerupAffordability(canAfford) {
    if (canAfford) {
      this._powerupBtn.classList.remove('disabled');
    } else {
      this._powerupBtn.classList.add('disabled');
    }
  }

  onPowerupClick(callback) {
    this._powerupBtn.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      callback();
    });
  }

  /* --- Upgrade Toggle & Panel --- */

  showUpgradeToggle() {
    this._upgradeToggle.classList.add('visible');
  }

  hideUpgradeToggle() {
    this._upgradeToggle.classList.remove('visible');
  }

  openUpgradePanel() {
    if (this._panelOpen) return;
    this._panelOpen = true;
    this._upgradePanel.classList.add('open');
    this._upgradeBackdrop.classList.add('open');
  }

  closeUpgradePanel() {
    if (!this._panelOpen) return;
    this._panelOpen = false;
    this._upgradePanel.classList.remove('open');
    this._upgradeBackdrop.classList.remove('open');
  }

  isPanelOpen() {
    return this._panelOpen;
  }

  setAutoChickenCost(cost) {
    this._autoChickenCostEl.textContent = cost;
  }

  setAutoChickenCount(count) {
    this._autoChickenCountEl.textContent = count > 0 ? `Owned: ${count}` : '';
  }

  setAutoChickenAffordable(canAfford) {
    if (canAfford) {
      this._buyAutoChickenBtn.classList.remove('cannot-afford');
    } else {
      this._buyAutoChickenBtn.classList.add('cannot-afford');
    }
  }

  onAutoChickenBuy(callback) {
    this._buyAutoChickenBtn.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      callback();
    });
  }

  spawnCoinFountain(screenX, screenY, numCoins, goldPerCoin, onCoinArrive, onAllDone) {
    const pillRect = this._goldPill.getBoundingClientRect();
    const vpRect = this._viewport.getBoundingClientRect();
    const targetX = pillRect.left + pillRect.width / 2 - vpRect.left;
    const targetY = pillRect.top + pillRect.height / 2 - vpRect.top;

    const coins = [];
    for (let i = 0; i < numCoins; i++) {
      const el = document.createElement('div');
      el.className = 'flying-coin';
      el.style.left = `${screenX - 10}px`;
      el.style.top = `${screenY - 10}px`;
      el.style.transform = 'translate(0, 0) scale(1)';
      this._viewport.appendChild(el);
      coins.push(el);
    }

    requestAnimationFrame(() => {
      for (const el of coins) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 40 + Math.random() * 60;
        const bx = Math.cos(angle) * radius;
        const by = Math.sin(angle) * radius - 20;
        el.style.transform = `translate(${bx}px, ${by}px) scale(1.1)`;
      }
    });

    const burstSettleTime = 700;
    const flyStagger = 100;
    const flyDuration = 350;
    let collected = 0;

    setTimeout(() => {
      coins.forEach((el, i) => {
        setTimeout(() => {
          const elRect = el.getBoundingClientRect();
          const startX = elRect.left + elRect.width / 2 - vpRect.left;
          const startY = elRect.top + elRect.height / 2 - vpRect.top;

          el.style.transition = 'none';
          el.style.left = `${startX - 10}px`;
          el.style.top = `${startY - 10}px`;
          el.style.transform = 'translate(0, 0) scale(1)';

          const dx = targetX - startX;
          const dy = targetY - startY;

          const anim = el.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${dx * 0.5}px, ${dy * 0.5 - 30}px) scale(0.8)`, opacity: 1, offset: 0.5 },
            { transform: `translate(${dx}px, ${dy}px) scale(0.3)`, opacity: 0.8 },
          ], {
            duration: flyDuration,
            easing: 'ease-in',
            fill: 'forwards',
          });

          anim.onfinish = () => {
            el.remove();
            collected++;
            onCoinArrive(goldPerCoin, collected, numCoins);
            this.throbGold();

            if (collected >= numCoins && onAllDone) {
              onAllDone();
            }
          };
        }, i * flyStagger);
      });
    }, burstSettleTime);
  }
}
