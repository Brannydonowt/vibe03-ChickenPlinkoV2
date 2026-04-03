import { SCORING } from '../config/constants.js';

export class ScoreManager {
  constructor() {
    this.totalGold = 0;
    this.currentRunGold = 0;
    this.pegHits = 0;
    this.combo = 0;
    this._lastHitTime = 0;
  }

  onPegHit(time) {
    this.pegHits++;

    if (time - this._lastHitTime < SCORING.COMBO_WINDOW_MS) {
      this.combo = Math.min(this.combo + 1, SCORING.COMBO_MAX);
    } else {
      this.combo = 1;
    }
    this._lastHitTime = time;

    const gold = SCORING.BASE_GOLD * this.combo;
    this.currentRunGold += gold;
    this.totalGold += gold;
    return { gold, combo: this.combo };
  }

  calculateLandingBonus(binMultiplier) {
    return Math.ceil(this.currentRunGold * binMultiplier);
  }

  canAfford(amount) {
    return this.totalGold >= amount;
  }

  spendGold(amount) {
    if (!this.canAfford(amount)) return false;
    this.totalGold -= amount;
    return true;
  }

  collectGold(amount) {
    this.totalGold += amount;
  }

  resetRun() {
    this.currentRunGold = 0;
    this.pegHits = 0;
    this.combo = 0;
    this._lastHitTime = 0;
  }
}
