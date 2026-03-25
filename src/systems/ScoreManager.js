import { SCORING } from '../config/constants.js';

export class ScoreManager {
  constructor() {
    this.totalGold = 0;
    this.currentRunScore = 0;
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

    const points = SCORING.BASE_POINTS * this.combo;
    this.currentRunScore += points;
    return { points, combo: this.combo };
  }

  calculateLanding(binMultiplier) {
    const gold = Math.ceil(this.currentRunScore * binMultiplier / 10);
    return gold;
  }

  collectGold(amount) {
    this.totalGold += amount;
  }

  resetRun() {
    this.currentRunScore = 0;
    this.pegHits = 0;
    this.combo = 0;
    this._lastHitTime = 0;
  }
}
