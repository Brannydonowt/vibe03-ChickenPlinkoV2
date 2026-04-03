const COIN_SVG_DATA_URI = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="#FFD700" stroke="#DAA520" stroke-width="4"/><circle cx="50" cy="50" r="36" fill="none" stroke="#DAA520" stroke-width="3"/><text x="50" y="62" text-anchor="middle" font-size="40" font-weight="bold" fill="#B8860B" font-family="Arial">$</text></svg>`)}`;

export class HUD {
  constructor() {
    this._goldEl = document.getElementById('gold-count');
    this._runGoldEl = document.getElementById('run-gold-count');
    this._runGoldDisplay = document.getElementById('run-gold-display');
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
    this._autoList = document.getElementById('upgrade-tab-auto');
    this._playerList = document.getElementById('upgrade-tab-player');

    this._tabBtnPlayer = document.getElementById('tab-btn-player');
    this._tabBtnAuto = document.getElementById('tab-btn-auto');

    this._goalBar = document.getElementById('goal-bar');
    this._goalBarFill = document.getElementById('goal-bar-fill');
    this._goalBarMission = document.getElementById('goal-bar-mission');
    this._goalBarReward = document.getElementById('goal-bar-reward');
    this._goalBarProgress = document.getElementById('goal-bar-progress');

    this._panelOpen = false;
    this._activeTab = 'player';
    this._upgradeRows = {};
    this._playerRows = {};
    this._upgradeCallback = null;
    this._playerUpgradeCallback = null;
    this._flyingCoinCount = 0;

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

    this._goalBar.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      this.openUpgradePanel();
    });

    this._tabBtnPlayer.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      this._switchTab('player');
    });
    this._tabBtnAuto.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      this._switchTab('auto');
    });
    this._switchTab('player');
  }

  _switchTab(tab) {
    this._activeTab = tab;
    if (tab === 'player') {
      this._tabBtnPlayer.classList.add('active');
      this._tabBtnAuto.classList.remove('active');
      this._playerList.style.display = '';
      this._autoList.style.display = 'none';
    } else {
      this._tabBtnAuto.classList.add('active');
      this._tabBtnPlayer.classList.remove('active');
      this._autoList.style.display = '';
      this._playerList.style.display = 'none';
    }
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

  setRunGold(value) {
    this._runGoldEl.textContent = value;
    this._runGoldDisplay.classList.add('visible');
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

  showTapPrompt() { this._tapPrompt.classList.add('visible'); }
  hideTapPrompt() { this._tapPrompt.classList.remove('visible'); }
  showSubtleTapPrompt() { this._subtleTapPrompt.classList.add('visible'); }
  hideSubtleTapPrompt() { this._subtleTapPrompt.classList.remove('visible'); }

  hideRunGold() {
    this._runGoldDisplay.classList.remove('visible');
    this._comboDisplay.classList.remove('visible');
    this._edgeGlow.style.opacity = 0;
  }

  /* --- Flying Coin (peg hit) --- */

  spawnFlyingCoin(screenX, screenY) {
    if (this._flyingCoinCount >= 6) return;

    const pillRect = this._goldPill.getBoundingClientRect();
    const vpRect = this._viewport.getBoundingClientRect();
    const targetX = pillRect.left + pillRect.width / 2 - vpRect.left;
    const targetY = pillRect.top + pillRect.height / 2 - vpRect.top;

    const el = document.createElement('div');
    el.className = 'flying-coin-mini';
    el.style.left = `${screenX - 7}px`;
    el.style.top = `${screenY - 7}px`;
    this._viewport.appendChild(el);
    this._flyingCoinCount++;

    const dx = targetX - screenX;
    const dy = targetY - screenY;

    requestAnimationFrame(() => {
      const anim = el.animate([
        { transform: 'translate(0, 0) scale(1)', opacity: 1 },
        { transform: `translate(${dx}px, ${dy}px) scale(0.4)`, opacity: 0.7 },
      ], {
        duration: 250,
        easing: 'ease-in',
        fill: 'forwards',
      });

      anim.onfinish = () => {
        el.remove();
        this._flyingCoinCount--;
        this.throbGold();
      };
    });
  }

  /* --- Goal Bar (Quest Style) --- */

  showGoalBar() { this._goalBar.classList.add('visible'); }
  hideGoalBar() { this._goalBar.classList.remove('visible'); }

  updateGoalBar({ emoji, name, current, target }) {
    if (!target || target === Infinity) {
      this.hideGoalBar();
      return;
    }

    const canAfford = current >= target;
    this._goalBarMission.textContent = canAfford ? 'READY!' : `Save up ${target}g`;
    this._goalBarReward.textContent = `${emoji} ${name}`;
    this._goalBarProgress.textContent = `${current} / ${target}g`;

    const pct = Math.min(current / target, 1) * 100;
    this._goalBarFill.style.width = `${pct}%`;

    this._goalBar.classList.toggle('goal-ready', canAfford);
    this.showGoalBar();
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
  hidePowerupButton() { this._powerupBar.classList.remove('visible'); }

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
    if (canAfford) this._powerupBtn.classList.remove('disabled');
    else this._powerupBtn.classList.add('disabled');
  }

  onPowerupClick(callback) {
    this._powerupBtn.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      callback();
    });
  }

  /* --- Upgrade Toggle & Panel --- */

  showUpgradeToggle() { this._upgradeToggle.classList.add('visible'); }
  hideUpgradeToggle() { this._upgradeToggle.classList.remove('visible'); }

  pulseUpgradeToggle() {
    this._upgradeToggle.classList.remove('pulse');
    void this._upgradeToggle.offsetWidth;
    this._upgradeToggle.classList.add('pulse');
    this._upgradeToggle.addEventListener('animationend', () => {
      this._upgradeToggle.classList.remove('pulse');
    }, { once: true });
  }

  setUpgradeToggleHighlight(on) {
    if (on) this._upgradeToggle.classList.add('can-afford');
    else this._upgradeToggle.classList.remove('can-afford');
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

  isPanelOpen() { return this._panelOpen; }

  /* --- Player Upgrade Rows --- */

  initPlayerUpgradeRows(upgrades) {
    this._playerList.innerHTML = '';
    for (const u of upgrades) {
      const row = document.createElement('div');
      row.className = 'upgrade-item';
      row.dataset.type = u.id;

      row.innerHTML = `
        <div class="upgrade-item-icon">${u.emoji}</div>
        <div class="upgrade-item-info">
          <span class="upgrade-item-name">${u.name}</span>
          <span class="upgrade-item-desc">${u.description}</span>
          <span class="upgrade-item-level"></span>
        </div>
        <button class="upgrade-item-buy" data-type="${u.id}">
          <img class="buy-coin" src="${COIN_SVG_DATA_URI}" alt="" />
          <span class="buy-price">${u.baseCost}</span>
        </button>
      `;

      const btn = row.querySelector('.upgrade-item-buy');
      btn.addEventListener('pointerdown', (e) => {
        e.stopPropagation();
        if (this._playerUpgradeCallback) this._playerUpgradeCallback(u.id);
      });

      this._playerList.appendChild(row);
      this._playerRows[u.id] = {
        row,
        btn,
        priceEl: row.querySelector('.buy-price'),
        levelEl: row.querySelector('.upgrade-item-level'),
      };
    }
  }

  updatePlayerUpgradeRow(id, state) {
    const entry = this._playerRows[id];
    if (!entry) return;

    if (state.level >= state.maxLevel) {
      entry.priceEl.textContent = 'MAX';
      entry.btn.querySelector('.buy-coin').style.display = 'none';
      entry.levelEl.textContent = `Lv.${state.level}`;
      entry.btn.disabled = true;
      entry.btn.classList.add('locked');
    } else {
      entry.priceEl.textContent = state.cost;
      entry.btn.querySelector('.buy-coin').style.display = '';
      entry.levelEl.textContent = state.level > 0 ? `Lv.${state.level}` : '';
      entry.btn.disabled = false;
      entry.btn.classList.remove('locked');
    }

    if (state.canAfford && !entry.btn.disabled) {
      entry.btn.classList.remove('cannot-afford');
    } else {
      entry.btn.classList.add('cannot-afford');
    }
  }

  onPlayerUpgradeRowClick(callback) {
    this._playerUpgradeCallback = callback;
  }

  /* --- Auto Chicken Upgrade Rows --- */

  initUpgradeRows(chickenTypes) {
    this._autoList.innerHTML = '';
    for (const type of chickenTypes) {
      const row = document.createElement('div');
      row.className = 'upgrade-item';
      row.dataset.type = type.id;
      row.style.display = 'none';

      row.innerHTML = `
        <div class="upgrade-item-icon">${type.emoji}</div>
        <div class="upgrade-item-info">
          <span class="upgrade-item-name">${type.name}</span>
          <span class="upgrade-item-desc">${type.description}</span>
          <span class="upgrade-item-level"></span>
        </div>
        <button class="upgrade-item-buy" data-type="${type.id}">
          <img class="buy-coin" src="${COIN_SVG_DATA_URI}" alt="" />
          <span class="buy-price">${type.baseCost}</span>
        </button>
      `;

      const btn = row.querySelector('.upgrade-item-buy');
      btn.addEventListener('pointerdown', (e) => {
        e.stopPropagation();
        if (this._upgradeCallback) this._upgradeCallback(type.id);
      });

      this._autoList.appendChild(row);
      this._upgradeRows[type.id] = {
        row,
        btn,
        priceEl: row.querySelector('.buy-price'),
        levelEl: row.querySelector('.upgrade-item-level'),
        descEl: row.querySelector('.upgrade-item-desc'),
      };
    }
  }

  revealUpgradeRow(typeId) {
    const entry = this._upgradeRows[typeId];
    if (!entry) return;
    entry.row.style.display = '';
  }

  updateUpgradeRow(typeId, state) {
    const entry = this._upgradeRows[typeId];
    if (!entry) return;

    if (!state.owned) {
      entry.priceEl.textContent = state.cost;
      entry.levelEl.textContent = '';
      entry.btn.disabled = false;
      entry.btn.classList.remove('locked');
    } else if (state.level >= state.maxLevel) {
      entry.priceEl.textContent = 'MAX';
      entry.btn.querySelector('.buy-coin').style.display = 'none';
      entry.levelEl.textContent = `Lv.${state.level}`;
      entry.btn.disabled = true;
      entry.btn.classList.add('locked');
    } else {
      entry.priceEl.textContent = state.cost;
      entry.btn.querySelector('.buy-coin').style.display = '';
      entry.levelEl.textContent = `Lv.${state.level}`;
      entry.btn.disabled = false;
      entry.btn.classList.remove('locked');
    }

    if (state.canAfford && !entry.btn.disabled) {
      entry.btn.classList.remove('cannot-afford');
    } else {
      entry.btn.classList.add('cannot-afford');
    }
  }

  onUpgradeRowClick(callback) {
    this._upgradeCallback = callback;
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
