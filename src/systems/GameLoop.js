import { CAMERA, TIMING, CHICKEN, SCORING, EGG, GAME, POWERUP, AUTO_CHICKEN, CHICKEN_TYPES, PLAYER_UPGRADES, GOLDEN_PEG } from '../config/constants.js';
import { Egg } from '../entities/Egg.js';
import { AutoChicken } from '../entities/AutoChicken.js';

const STATES = {
  IDLE: 'idle',
  WARMUP: 'warmup',
  DROP: 'drop',
  LAND: 'land',
  HATCH: 'hatch',
  TRANSITION: 'transition',
};

const STUCK_SPEED_THRESHOLD = 0.5;
const STUCK_TIME_THRESHOLD = 2.0;
const STUCK_WALL_MARGIN = 25;
const STUCK_NUDGE_FORCE = 0.05;
const STUCK_NUDGE_UP = -0.035;

export class GameLoop {
  constructor({ renderer, physics, camera, board, chicken, scoreManager, particleSystem, hud, audio, input, textures }) {
    this.renderer = renderer;
    this.physics = physics;
    this.camera = camera;
    this.board = board;
    this.chicken = chicken;
    this.score = scoreManager;
    this.particles = particleSystem;
    this.hud = hud;
    this.audio = audio;
    this.input = input;
    this.textures = textures;

    this.state = STATES.IDLE;
    this.egg = null;
    this._mainEggs = [];
    this._stateTimer = 0;
    this._wobblePhase = 0;
    this._landingGold = 0;
    this._idleDelay = 0;

    this._stuckTimer = 0;
    this._freezeTimer = 0;
    this._drumrollTimer = 0;
    this._coinFountainActive = false;

    this._hatchEggX = 0;
    this._hatchEggY = 0;

    this._dupliBounceActive = false;
    this._dupliBounceInFlight = false;
    this._duplicateEggs = [];
    this._bonusGold = 0;
    this._hasPlayedRound = false;
    this._hasPulsedToggle = false;
    this._roundCount = 0;

    this._playerUpgrades = {};
    for (const u of PLAYER_UPGRADES) this._playerUpgrades[u.id] = 0;

    this._chickenSlots = CHICKEN_TYPES.map(type => ({
      config: type,
      owned: false,
      level: 0,
      chicken: null,
    }));
    this._autoEggs = [];

    this._onCollision = this._onCollision.bind(this);
    this.physics.on('collisionStart', this._onCollision);

    this._onTap = this._onTap.bind(this);
    this.input.onTap(this._onTap);

    this.hud.onPowerupClick(() => this.purchaseDupliBounce());

    this.hud.initUpgradeRows(CHICKEN_TYPES);
    this.hud.revealUpgradeRow(CHICKEN_TYPES[0].id);
    this.hud.onUpgradeRowClick((typeId) => this._handleUpgradeClick(typeId));

    this.hud.initPlayerUpgradeRows(PLAYER_UPGRADES);
    this.hud.onPlayerUpgradeRowClick((id) => this._handlePlayerUpgradeClick(id));

    this._enterIdle();
  }

  _getSpeedMult() {
    return this._roundCount >= 2 ? 0.6 : 1.0;
  }

  _onTap() {
    if (this.state === STATES.IDLE && !this.hud.isPanelOpen()) {
      this._enterWarmup();
    }
  }

  _onCollision(pair) {
    const { bodyA, bodyB } = pair;
    const mainValid = this.state === STATES.DROP || this.state === STATES.LAND;

    if (mainValid && this.state === STATES.DROP) {
      for (const mainEgg of this._mainEggs) {
        if (!mainEgg.alive || mainEgg.landed) continue;
        let other = null;
        if (bodyA === mainEgg.body) other = bodyB;
        else if (bodyB === mainEgg.body) other = bodyA;
        if (!other) continue;

        if (other.label === 'peg' && other.pegRef) {
          this._handlePegHit(other.pegRef, mainEgg);
          if (this._dupliBounceInFlight) {
            this._spawnDuplicate(other.pegRef.x, other.pegRef.y);
          }
        } else if (other.label && other.label.startsWith('bin_') && other.binRef) {
          this._handleBinLand(other.binRef, mainEgg);
        } else if (other.label === 'floor' && !mainEgg.landed) {
          this._handleFloorLand(mainEgg);
        }
        return;
      }
    }

    if (mainValid) {
      for (const dupe of this._duplicateEggs) {
        if (!dupe.alive || dupe.landed) continue;
        let other = null;
        if (bodyA === dupe.body) other = bodyB;
        else if (bodyB === dupe.body) other = bodyA;
        if (!other) continue;

        if (other.label === 'peg' && other.pegRef) {
          this._handleDupePegHit(other.pegRef, dupe);
        } else if (other.label && other.label.startsWith('bin_') && other.binRef) {
          this._handleDupeBinLand(other.binRef, dupe);
        } else if (other.label === 'floor') {
          this._handleDupeFloorLand(dupe);
        }
        return;
      }
    }

    for (const autoEgg of this._autoEggs) {
      if (!autoEgg.alive || autoEgg.landed) continue;
      let other = null;
      if (bodyA === autoEgg.body) other = bodyB;
      else if (bodyB === autoEgg.body) other = bodyA;
      if (!other) continue;

      if (other.label === 'peg' && other.pegRef) {
        this._handleAutoEggPegHit(other.pegRef, autoEgg);
      } else if (other.label && other.label.startsWith('bin_') && other.binRef) {
        this._handleAutoEggBinLand(other.binRef, autoEgg);
      } else if (other.label === 'floor') {
        this._handleAutoEggFloorLand(autoEgg);
      }
      return;
    }
  }

  _pegHitScreenPos(peg) {
    return this.renderer.projectToScreen(peg.x, -peg.y);
  }

  _handlePegHit(peg, mainEgg) {
    peg.hit();
    mainEgg.pegHits++;
    this.board.rippleFrom(peg);

    const now = performance.now();
    const { gold, combo } = this.score.onPegHit(now);
    const finalGold = peg.isGolden ? gold * GOLDEN_PEG.GOLD_MULTIPLIER : gold;
    if (peg.isGolden) {
      const extra = finalGold - gold;
      this.score.totalGold += extra;
      this.score.currentRunGold += extra;
    }

    const normalizedY = this.board.getNormalizedY(peg.y);
    this.audio.pegHit(normalizedY, combo);

    const speed = mainEgg.getSpeed();
    this.camera.shake(CAMERA.SHAKE_INTENSITY * Math.min(speed / 5, 1.5));

    this.particles.emitPegSpark(peg.x, -peg.y);

    const textSize = combo > 3 ? 42 : combo > 1 ? 34 : 28;
    const textColor = peg.isGolden ? '#FFFF00' : (combo > 3 ? '#FF6B35' : combo > 1 ? '#FFD700' : '#FFFFFF');
    this.particles.spawnFloatingGold(peg.x, -peg.y + 20, finalGold, textSize, textColor);

    this.hud.setGold(this.score.totalGold);
    this.hud.setRunGold(this.score.currentRunGold);
    this.hud.setCombo(combo);
    this.hud.setEdgeGlow(combo / SCORING.COMBO_MAX);

    const screenPos = this._pegHitScreenPos(peg);
    this.hud.spawnFlyingCoin(screenPos.x, screenPos.y);
  }

  _handleBinLand(bin, mainEgg) {
    if (mainEgg.landed) return;
    mainEgg.landed = true;
    mainEgg.landedBin = bin;

    bin.glow();
    this.audio.eggLand();
    this.particles.emitDust(bin.x, -bin.y + 15);

    this.camera.shake(3.0);
    mainEgg.setSquash(1.3, 0.7);

    if (this._allMainEggsLanded()) {
      const bestBin = this._getBestBin();
      this._landingGold = this.score.calculateLandingBonus(bestBin.multiplier);
      this.egg = this._getHatchEgg();
      this.state = STATES.LAND;
      this._stateTimer = 0;
      this._freezeTimer = TIMING.LAND_FREEZE;
    }
  }

  _handleFloorLand(mainEgg) {
    if (!mainEgg || mainEgg.landed) return;
    mainEgg.landed = true;
    this.audio.eggLand();

    if (this._allMainEggsLanded()) {
      const bestBin = this._getBestBin();
      if (bestBin) {
        this._landingGold = this.score.calculateLandingBonus(bestBin.multiplier);
      } else {
        this._landingGold = 0;
      }
      this.egg = this._getHatchEgg();
      this.state = STATES.LAND;
      this._stateTimer = 0;
      this._freezeTimer = TIMING.LAND_FREEZE;
      this.camera.shake(2.0);
      if (this.egg) this.egg.setSquash(1.3, 0.7);
    }
  }

  _allMainEggsLanded() {
    return this._mainEggs.every(e => e.landed || !e.alive);
  }

  _getBestBin() {
    let best = null;
    for (const e of this._mainEggs) {
      if (e.landedBin && (!best || e.landedBin.multiplier > best.multiplier)) {
        best = e.landedBin;
      }
    }
    return best;
  }

  _getHatchEgg() {
    const bestBin = this._getBestBin();
    if (bestBin) {
      return this._mainEggs.find(e => e.landedBin === bestBin) || this._mainEggs[0];
    }
    return this._mainEggs[0];
  }

  _spawnDuplicate(pegX, pegY) {
    const dupe = new Egg(pegX, pegY, this.physics, this.textures.egg, true);

    const angle = Math.random() * Math.PI * 2;
    const speed = POWERUP.SPAWN_SPEED_MIN + Math.random() * POWERUP.SPAWN_SPEED_SPREAD;
    this.physics.setVelocity(dupe.body, {
      x: Math.cos(angle) * speed,
      y: -Math.abs(Math.sin(angle) * speed) - 0.5,
    });

    this.renderer.scene.add(dupe.mesh);
    this._duplicateEggs.push(dupe);

    this.audio.duplicateSpawn();
    this.particles.emitPegSpark(pegX, -pegY);
  }

  _handleDupePegHit(peg, dupe) {
    peg.hit();
    dupe.pegHits++;
    this.board.rippleFrom(peg);

    const gold = peg.isGolden ? GOLDEN_PEG.GOLD_MULTIPLIER : 1;
    this.score.currentRunGold += gold;
    this.score.totalGold += gold;

    const normalizedY = this.board.getNormalizedY(peg.y);
    this.audio.pegHit(normalizedY, 1);

    this.particles.emitPegSpark(peg.x, -peg.y);
    this.particles.spawnFloatingGold(peg.x, -peg.y + 20, gold, 22, peg.isGolden ? '#FFFF00' : '#DDDDDD');

    this.hud.setGold(this.score.totalGold);
    this.hud.setRunGold(this.score.currentRunGold);

    const screenPos = this._pegHitScreenPos(peg);
    this.hud.spawnFlyingCoin(screenPos.x, screenPos.y);
  }

  _handleDupeBinLand(bin, dupe) {
    if (dupe.landed) return;
    dupe.landed = true;
    dupe.landedBin = bin;

    bin.glow();
    this.audio.eggLand();
    this.particles.emitDust(bin.x, -bin.y + 15);

    const gold = this.score.calculateLandingBonus(bin.multiplier);
    this._bonusGold += gold;

    this.particles.spawnFloatingText(
      bin.x, -bin.y + 25,
      `+${gold}g`,
      26, '#FFE680'
    );

    setTimeout(() => {
      if (dupe.alive) {
        dupe.destroy(this.renderer.scene);
        const idx = this._duplicateEggs.indexOf(dupe);
        if (idx !== -1) this._duplicateEggs.splice(idx, 1);
      }
    }, 200);
  }

  _handleDupeFloorLand(dupe) {
    if (dupe.landed) return;
    dupe.landed = true;
    setTimeout(() => {
      if (dupe.alive) {
        dupe.destroy(this.renderer.scene);
        const idx = this._duplicateEggs.indexOf(dupe);
        if (idx !== -1) this._duplicateEggs.splice(idx, 1);
      }
    }, 100);
  }

  _cleanupDuplicates() {
    for (const dupe of this._duplicateEggs) {
      if (dupe.alive) dupe.destroy(this.renderer.scene);
    }
    this._duplicateEggs = [];
  }

  _cleanupMainEggs() {
    for (const e of this._mainEggs) {
      if (e !== this.egg && e.alive) e.destroy(this.renderer.scene);
    }
    this._mainEggs = [];
  }

  /* --- Player upgrade system --- */

  _getPlayerUpgradeCost(config) {
    const level = this._playerUpgrades[config.id];
    if (level >= config.maxLevel) return Infinity;
    return Math.floor(config.baseCost * Math.pow(config.costMult, level));
  }

  _handlePlayerUpgradeClick(upgradeId) {
    if (this.state !== STATES.IDLE) return;
    const config = PLAYER_UPGRADES.find(u => u.id === upgradeId);
    if (!config) return;

    const cost = this._getPlayerUpgradeCost(config);
    if (!this.score.canAfford(cost)) return;

    this.score.spendGold(cost);
    this.hud.setGold(this.score.totalGold);
    this._playerUpgrades[upgradeId]++;

    this.audio.purchasePowerup();
    this._syncAllUpgradeRows();
  }

  _syncPlayerUpgradeRows() {
    let anyAffordable = false;
    for (const config of PLAYER_UPGRADES) {
      const level = this._playerUpgrades[config.id];
      const cost = this._getPlayerUpgradeCost(config);
      const canAfford = this.score.canAfford(cost);
      if (canAfford && cost !== Infinity) anyAffordable = true;

      this.hud.updatePlayerUpgradeRow(config.id, {
        level,
        cost: cost === Infinity ? '---' : cost,
        canAfford,
        maxLevel: config.maxLevel,
      });
    }
    return anyAffordable;
  }

  /* --- Chicken upgrade system --- */

  _getSlot(typeId) {
    return this._chickenSlots.find(s => s.config.id === typeId);
  }

  _getSlotCost(slot) {
    if (!slot.owned) return slot.config.baseCost;
    if (slot.level >= AUTO_CHICKEN.MAX_LEVEL) return Infinity;
    return Math.floor(slot.config.levelCostBase * Math.pow(slot.config.levelCostMult, slot.level - 1));
  }

  _handleUpgradeClick(typeId) {
    if (this.state !== STATES.IDLE) return;
    const slot = this._getSlot(typeId);
    if (!slot) return;

    const cost = this._getSlotCost(slot);
    if (!this.score.canAfford(cost)) return;

    if (!slot.owned) {
      this._purchaseChicken(slot);
    } else if (slot.level < AUTO_CHICKEN.MAX_LEVEL) {
      this._upgradeChicken(slot);
    }
  }

  _purchaseChicken(slot) {
    const cost = slot.config.baseCost;
    this.score.spendGold(cost);
    this.hud.setGold(this.score.totalGold);

    slot.owned = true;
    slot.level = 1;
    slot.chicken = new AutoChicken(this.textures, slot.config, 1);
    this.renderer.scene.add(slot.chicken.group);
    slot.chicken.triggerImmediateLay();

    this.audio.purchasePowerup();

    const slotIdx = this._chickenSlots.indexOf(slot);
    if (slotIdx + 1 < this._chickenSlots.length) {
      this.hud.revealUpgradeRow(this._chickenSlots[slotIdx + 1].config.id);
    }

    this._syncAllUpgradeRows();
  }

  _upgradeChicken(slot) {
    const cost = this._getSlotCost(slot);
    this.score.spendGold(cost);
    this.hud.setGold(this.score.totalGold);

    slot.level++;
    slot.chicken.setLevel(slot.level);

    this.audio.purchasePowerup();
    this._syncAllUpgradeRows();
  }

  _syncAllUpgradeRows() {
    let anyAffordable = false;
    for (const slot of this._chickenSlots) {
      const cost = this._getSlotCost(slot);
      const canAfford = this.score.canAfford(cost);
      if (canAfford && cost !== Infinity) anyAffordable = true;

      const prev = this._chickenSlots[this._chickenSlots.indexOf(slot) - 1];
      const visible = !prev || prev.owned;
      if (!slot.owned && !visible) continue;

      this.hud.updateUpgradeRow(slot.config.id, {
        owned: slot.owned,
        level: slot.level,
        cost: cost === Infinity ? '---' : cost,
        canAfford,
        maxLevel: AUTO_CHICKEN.MAX_LEVEL,
      });
    }
    const playerAffordable = this._syncPlayerUpgradeRows();
    this.hud.setUpgradeToggleHighlight(anyAffordable || playerAffordable);
    this._updateGoalBar();
  }

  _getNextGoal() {
    let cheapest = null;

    for (const slot of this._chickenSlots) {
      const cost = this._getSlotCost(slot);
      if (cost === Infinity) continue;

      if (!slot.owned) {
        const prev = this._chickenSlots[this._chickenSlots.indexOf(slot) - 1];
        if (prev && !prev.owned) continue;
      }

      if (!cheapest || cost < cheapest.cost) {
        const label = !slot.owned
          ? slot.config.name
          : `${slot.config.name} Lv.${slot.level + 1}`;
        cheapest = { emoji: slot.config.emoji, name: label, cost };
      }
    }

    for (const config of PLAYER_UPGRADES) {
      const cost = this._getPlayerUpgradeCost(config);
      if (cost === Infinity) continue;
      if (!cheapest || cost < cheapest.cost) {
        const level = this._playerUpgrades[config.id];
        const label = level === 0 ? config.name : `${config.name} Lv.${level + 1}`;
        cheapest = { emoji: config.emoji, name: label, cost };
      }
    }

    return cheapest;
  }

  _updateGoalBar() {
    const goal = this._getNextGoal();
    if (!goal) {
      this.hud.hideGoalBar();
      return;
    }
    this.hud.updateGoalBar({
      emoji: goal.emoji,
      name: goal.name,
      current: this.score.totalGold,
      target: goal.cost,
    });
  }

  _spawnAutoEgg(autoChicken) {
    const vol = AUTO_CHICKEN.AUDIO_VOLUME_SCALE;
    this.audio.eggPop(vol);
    this.audio.chickenCluck(vol);

    const x = autoChicken.getDropX();
    const y = autoChicken.getDropY();
    const tc = autoChicken.typeConfig;
    const egg = new Egg(x, y, this.physics, this.textures.egg, false, {
      tint: tc.eggTint,
      goldMultiplier: tc.goldMultiplier,
      typeId: tc.id,
    });
    egg.body.label = 'egg_auto';
    egg.mesh.position.z = 1.5;
    egg._autoAge = 0;
    egg._stuckTimer = 0;
    this.renderer.scene.add(egg.mesh);
    this._autoEggs.push(egg);
  }

  _handleAutoEggPegHit(peg, autoEgg) {
    peg.hit();
    autoEgg.pegHits++;
    this.board.rippleFrom(peg);

    const baseGold = peg.isGolden ? GOLDEN_PEG.GOLD_MULTIPLIER : 1;
    const gold = baseGold * autoEgg.goldMultiplier;
    this.score.collectGold(gold);

    const vol = AUTO_CHICKEN.AUDIO_VOLUME_SCALE;
    const normalizedY = this.board.getNormalizedY(peg.y);
    this.audio.pegHit(normalizedY, 1, vol);

    this.particles.emitPegSpark(peg.x, -peg.y);
    this.particles.spawnFloatingGold(
      peg.x, -peg.y + 20,
      gold, 22,
      peg.isGolden ? '#FFFF00' : '#AADDFF'
    );

    this.hud.setGold(this.score.totalGold);
    const screenPos = this._pegHitScreenPos(peg);
    this.hud.spawnFlyingCoin(screenPos.x, screenPos.y);
  }

  _handleAutoEggBinLand(bin, autoEgg) {
    if (autoEgg.landed) return;
    autoEgg.landed = true;

    bin.glow();
    this.audio.eggLand(AUTO_CHICKEN.AUDIO_VOLUME_SCALE);
    this.particles.emitDust(bin.x, -bin.y + 15);

    const baseGold = Math.max(1, Math.ceil(autoEgg.pegHits * SCORING.BASE_GOLD * bin.multiplier));
    const gold = baseGold * autoEgg.goldMultiplier;

    this._fireAutoEggFountain(autoEgg, gold);
  }

  _handleAutoEggFloorLand(autoEgg) {
    if (autoEgg.landed) return;
    autoEgg.landed = true;

    this._fireAutoEggFountain(autoEgg, 0);
  }

  _fireAutoEggFountain(autoEgg, gold) {
    const ex = autoEgg.getX();
    const ey = -autoEgg.getY();

    this.particles.emitHatchExplosion(ex, ey);

    if (gold > 0) {
      const screenPos = this.renderer.projectToScreen(ex, ey);
      const numCoins = Math.min(Math.max(Math.ceil(Math.sqrt(gold)), 2), 12);
      const goldPerCoin = Math.round(gold / numCoins);

      this.hud.spawnCoinFountain(
        screenPos.x, screenPos.y,
        numCoins, goldPerCoin,
        (g) => {
          this.score.collectGold(g);
          this.hud.setGold(this.score.totalGold);
          this._syncAllUpgradeRows();
          this._updateGoalBar();
        },
        null
      );
    }

    setTimeout(() => {
      if (autoEgg.alive) {
        autoEgg.destroy(this.renderer.scene);
        const idx = this._autoEggs.indexOf(autoEgg);
        if (idx !== -1) this._autoEggs.splice(idx, 1);
      }
    }, 150);
  }

  _checkAutoEggStuck(ae, delta) {
    if (ae.landed) return;
    const speed = ae.getSpeed();
    const eggX = ae.getX();
    const wallEdge = GAME.WIDTH / 2 - STUCK_WALL_MARGIN;

    if (speed < STUCK_SPEED_THRESHOLD && Math.abs(eggX) > wallEdge) {
      ae._stuckTimer += delta;
    } else {
      ae._stuckTimer = Math.max(0, ae._stuckTimer - delta * 2);
    }

    if (ae._stuckTimer >= STUCK_TIME_THRESHOLD) {
      const nudgeDir = eggX > 0 ? -1 : 1;
      this.physics.applyForce(ae.body, { x: nudgeDir * STUCK_NUDGE_FORCE, y: STUCK_NUDGE_UP });
      this.particles.spawnFloatingText(eggX, -ae.getY(), 'BLAST OFF!', 36, '#FF4400');
      ae._stuckTimer = 0;
    }
  }

  purchaseDupliBounce() {
    if (this.state !== STATES.IDLE) return;
    if (this._dupliBounceActive) return;
    if (!this.score.canAfford(POWERUP.DUPLI_BOUNCE_COST)) return;

    this.score.spendGold(POWERUP.DUPLI_BOUNCE_COST);
    this.hud.setGold(this.score.totalGold);
    this._dupliBounceActive = true;

    this.audio.purchasePowerup();
    this.hud.setPowerupActive();
    this._syncAllUpgradeRows();
  }

  _enterIdle() {
    this.state = STATES.IDLE;
    this.score.resetRun();
    this._idleDelay = TIMING.IDLE_PROMPT_DELAY;
    this.hud.hideRunGold();
    this.board.clearGoldenPegs();

    if (this._hasPlayedRound) {
      this.camera.setTargetZoom(CAMERA.OVERVIEW_ZOOM);
      this.camera.followX(0);
      this.camera.followY(CAMERA.OVERVIEW_CENTER_Y);
    } else {
      this.camera.setTargetZoom(CAMERA.IDLE_ZOOM);
      this.camera.followX(this.chicken.getX());
      this.camera.followY(CHICKEN.Y_POS);
    }

    if (this._hasPlayedRound) {
      this._syncAllUpgradeRows();
      this.hud.showUpgradeToggle();
      this._updateGoalBar();

      if (!this._hasPulsedToggle) {
        this._hasPulsedToggle = true;
        setTimeout(() => this.hud.pulseUpgradeToggle(), 400);
      }
    }
  }

  _enterWarmup() {
    this.state = STATES.WARMUP;
    this._stateTimer = 0;
    this._bonusGold = 0;
    this.hud.hideTapPrompt();
    this.hud.hideSubtleTapPrompt();
    this.hud.hidePowerupButton();
    this.hud.closeUpgradePanel();
    this.hud.hideUpgradeToggle();
    this.hud.hideGoalBar();

    if (this._dupliBounceActive) {
      this._dupliBounceInFlight = true;
      this._dupliBounceActive = false;
    }

    this.chicken.warmup(
      [this.textures.chickenLay0, this.textures.chickenLay1],
      CHICKEN.WARMUP_DURATION * this._getSpeedMult()
    );
    this.audio.chickenSqueeze();
    this.camera.setTargetZoom(CAMERA.WARMUP_ZOOM);
  }

  _enterDrop() {
    this.state = STATES.DROP;
    this._stateTimer = 0;
    this._stuckTimer = 0;

    this.chicken.stopWarmup();
    this.chicken.lay();
    this.audio.eggPop();
    this.audio.chickenCluck();
    this.camera.shake(5.0);

    const goldenLevel = this._playerUpgrades.golden_pegs;
    if (goldenLevel > 0) {
      const goldenConfig = PLAYER_UPGRADES.find(u => u.id === 'golden_pegs');
      this.board.setGoldenPegs(goldenLevel * goldenConfig.effect);
    }

    const eggCount = 1 + this._playerUpgrades.multi_egg;
    const bouncinessConfig = PLAYER_UPGRADES.find(u => u.id === 'bounciness');
    const restitutionBonus = this._playerUpgrades.bounciness * bouncinessConfig.effect;

    const baseX = this.chicken.getDropX();
    const y = this.chicken.getDropY();
    this._mainEggs = [];

    for (let i = 0; i < eggCount; i++) {
      const spread = eggCount > 1 ? (i - (eggCount - 1) / 2) * 15 : 0;
      const egg = new Egg(baseX + spread, y, this.physics, this.textures.egg, false, {
        restitutionBonus,
      });
      this.renderer.scene.add(egg.mesh);
      this._mainEggs.push(egg);
    }

    this.egg = this._mainEggs[0];

    for (let i = 1; i < this._mainEggs.length; i++) {
      this.particles.emitEggPop(this._mainEggs[i].getX(), -y);
    }
    this.particles.emitEggPop(baseX, -y);

    this.camera.setTargetZoom(CAMERA.DROP_ZOOM_START);
  }

  _enterHatch() {
    this.state = STATES.HATCH;
    this._stateTimer = 0;
    this._wobblePhase = 0;
    this._drumrollTimer = 0;
    this._coinFountainActive = false;

    this._landingGold += this._bonusGold;
    this._cleanupDuplicates();

    for (const e of this._mainEggs) {
      if (e !== this.egg && e.alive) e.destroy(this.renderer.scene);
    }

    if (this.egg && this.egg.alive) {
      this.physics.setStatic(this.egg.body, true);
    }
    this.camera.setTargetZoom(CAMERA.HATCH_ZOOM);
  }

  _enterTransition() {
    this.state = STATES.TRANSITION;
    this._stateTimer = 0;
    this._hasPlayedRound = true;
    this._roundCount++;

    this._dupliBounceInFlight = false;
    this._bonusGold = 0;
    this._cleanupDuplicates();
    this.board.clearGoldenPegs();

    if (this.egg) {
      this.egg.destroy(this.renderer.scene);
      this.egg = null;
    }
    this._mainEggs = [];

    this.audio.whoosh();
    this.chicken.celebrate();

    this.camera.transitionTo(
      0, CAMERA.OVERVIEW_CENTER_Y,
      CAMERA.OVERVIEW_ZOOM, TIMING.TRANSITION_DURATION * this._getSpeedMult(),
      () => { this._enterIdle(); }
    );
  }

  update(delta) {
    this.chicken.update(delta);
    this.board.update(delta);
    this.particles.update(delta);

    for (const slot of this._chickenSlots) {
      if (!slot.chicken) continue;
      const result = slot.chicken.update(delta);
      if (result.shouldLay) {
        this._spawnAutoEgg(slot.chicken);
      }
    }

    for (let i = this._autoEggs.length - 1; i >= 0; i--) {
      const ae = this._autoEggs[i];
      if (!ae.alive) continue;
      if (ae.landed) continue;
      ae._autoAge += delta;
      ae.update();
      this._checkAutoEggStuck(ae, delta);
      if (ae._autoAge > 20) {
        this._handleAutoEggFloorLand(ae);
      }
    }

    switch (this.state) {
      case STATES.IDLE:
        this._updateIdle(delta);
        break;
      case STATES.WARMUP:
        this._updateWarmup(delta);
        break;
      case STATES.DROP:
        this._updateDrop(delta);
        break;
      case STATES.LAND:
        this._updateLand(delta);
        break;
      case STATES.HATCH:
        this._updateHatch(delta);
        break;
      case STATES.TRANSITION:
        this._updateTransition(delta);
        break;
    }

    this.camera.update(delta);
  }

  _updateIdle(delta) {
    if (this._hasPlayedRound) {
      this.camera.followX(0);
      this.camera.followY(CAMERA.OVERVIEW_CENTER_Y);
    } else {
      this.camera.followX(this.chicken.getX());
      this.camera.followY(CHICKEN.Y_POS);
    }

    this._idleDelay -= delta;
    if (this._idleDelay <= 0) {
      if (this._hasPlayedRound) {
        this.hud.showSubtleTapPrompt();
      } else {
        this.hud.showTapPrompt();
      }
    }
  }

  _updateWarmup(delta) {
    this._stateTimer += delta;
    const warmupDur = CHICKEN.WARMUP_DURATION * this._getSpeedMult();

    this.camera.followX(this.chicken.getX());
    this.camera.followY(CHICKEN.Y_POS);

    const t = Math.min(this._stateTimer / warmupDur, 1);
    this.camera.shake(t * t * 0.8);

    if (this._stateTimer >= warmupDur) {
      this._enterDrop();
    }
  }

  _updateDrop(delta) {
    const primaryEgg = this._mainEggs[0];
    if (!primaryEgg || !primaryEgg.alive) return;

    this._stateTimer += delta;
    if (this._stateTimer > 20) {
      for (const e of this._mainEggs) {
        if (!e.landed) this._handleFloorLand(e);
      }
      return;
    }

    for (const e of this._mainEggs) {
      if (e.alive) e.update();
    }

    for (const dupe of this._duplicateEggs) {
      if (dupe.alive) dupe.update();
    }

    this.camera.followX(primaryEgg.getX());
    this.camera.followY(primaryEgg.getY());

    const eggY = primaryEgg.getY();
    const progress = Math.max(0, Math.min(1,
      (eggY - CAMERA.BOARD_TOP_Y) / (CAMERA.BOARD_BOTTOM_Y - CAMERA.BOARD_TOP_Y)
    ));
    const positionZoom = CAMERA.DROP_ZOOM_MAX + (CAMERA.DROP_ZOOM_MIN - CAMERA.DROP_ZOOM_MAX) * progress;

    const speed = primaryEgg.getSpeed();
    const speedZoom = CAMERA.DROP_ZOOM_MAX - speed * CAMERA.SPEED_ZOOM_FACTOR;
    const clampedSpeedZoom = Math.max(CAMERA.DROP_ZOOM_MIN, Math.min(CAMERA.DROP_ZOOM_MAX, speedZoom));

    this.camera.setTargetZoom(Math.min(positionZoom, clampedSpeedZoom));

    for (const e of this._mainEggs) {
      if (!e.alive || e.landed) continue;
      const velX = e.getVelX();
      const velY = e.getVelY();
      const mag = Math.sqrt(velX * velX + velY * velY);
      if (mag > 1) {
        const stretchFactor = Math.min(mag * 0.03, 0.3);
        const angle = Math.atan2(Math.abs(velY), Math.abs(velX));
        const verticalness = angle / (Math.PI / 2);
        e.setSquash(
          1 - stretchFactor * (1 - verticalness) + stretchFactor * verticalness * 0.3,
          1 + stretchFactor * verticalness - stretchFactor * (1 - verticalness) * 0.3
        );
      } else {
        e.setSquash(1, 1);
      }
    }

    if (speed > 1.5) {
      this.particles.emitTrail(primaryEgg.getX(), primaryEgg.body.position.y, speed);
    }

    this._checkStuck(delta);
  }

  _checkStuck(delta) {
    const primaryEgg = this._mainEggs[0];
    if (!primaryEgg || primaryEgg.landed) return;

    const speed = primaryEgg.getSpeed();
    const eggX = primaryEgg.getX();
    const wallEdge = GAME.WIDTH / 2 - STUCK_WALL_MARGIN;

    if (speed < STUCK_SPEED_THRESHOLD && Math.abs(eggX) > wallEdge) {
      this._stuckTimer += delta;
    } else {
      this._stuckTimer = Math.max(0, this._stuckTimer - delta * 2);
    }

    if (this._stuckTimer >= STUCK_TIME_THRESHOLD) {
      for (const e of this._mainEggs) {
        if (e.landed) continue;
        const ex = e.getX();
        const nudgeDir = ex > 0 ? -1 : 1;
        this.physics.applyForce(e.body, { x: nudgeDir * STUCK_NUDGE_FORCE, y: STUCK_NUDGE_UP });
      }
      this.particles.spawnFloatingText(eggX, -primaryEgg.getY(), 'BLAST OFF!', 48, '#FF4400');
      this._stuckTimer = 0;
    }
  }

  _updateLand(delta) {
    for (const dupe of this._duplicateEggs) {
      if (dupe.alive) dupe.update();
    }

    if (this._freezeTimer > 0) {
      this._freezeTimer -= delta;
      if (this.egg) {
        this.camera.followX(this.egg.getX());
        this.camera.followY(this.egg.getY());
      }
      return;
    }

    this._stateTimer += delta;

    if (this.egg) {
      const t = Math.min(this._stateTimer / TIMING.HATCH_DELAY, 1);
      const sx = 1.3 + (1 - 1.3) * t;
      const sy = 0.7 + (1 - 0.7) * t;
      this.egg.setSquash(sx, sy);
      this.egg.update();
      this.camera.followX(this.egg.getX());
      this.camera.followY(this.egg.getY());
    }

    if (this._stateTimer >= TIMING.HATCH_DELAY) {
      this._enterHatch();
    }
  }

  _updateHatch(delta) {
    this._stateTimer += delta;
    const sm = this._getSpeedMult();
    const wobbleDur = TIMING.WOBBLE_DURATION * sm;
    const crackDur = TIMING.CRACK_DURATION * sm;

    if (this.egg) {
      this.camera.followX(this.egg.getX());
      this.camera.followY(this.egg.getY());
    }

    if (this._stateTimer < wobbleDur) {
      const rawIntensity = this._stateTimer / wobbleDur;
      const intensity = rawIntensity * rawIntensity;

      this._wobblePhase += delta * (20 + intensity * 30);
      if (this.egg) {
        const wobble = Math.sin(this._wobblePhase) * (0.15 + intensity * 0.25);
        this.egg.mesh.rotation.z = wobble;
      }

      this.camera.shake(intensity * CAMERA.HATCH_SHAKE_MAX);

      this._drumrollTimer -= delta;
      const drumInterval = 0.15 - intensity * 0.11;
      if (this._drumrollTimer <= 0) {
        this.audio.drumrollHit(intensity);
        this._drumrollTimer = drumInterval;
      }

    } else if (this._stateTimer < wobbleDur + crackDur) {
      if (this.egg && this.egg._crackLines.length === 0) {
        this.egg.showCracks();
      }
      this.camera.shake(CAMERA.HATCH_SHAKE_MAX * 0.8);

    } else if (this._stateTimer >= wobbleDur + crackDur) {
      if (this.egg && !this._coinFountainActive) {
        const ex = this.egg.getX();
        const ey = -this.egg.getY();

        this._hatchEggX = ex;
        this._hatchEggY = ey;

        this.hud.screenFlash();
        this.audio.hatch();
        this.particles.emitHatchExplosion(ex, ey);
        this.renderer.setBgBrightness(0.15);

        this.egg.destroy(this.renderer.scene);
        this.egg = null;

        this._startCoinFountain(ex, ey);
      }
    }

    if (this._coinFountainActive) {
      const elapsed = this._stateTimer - (wobbleDur + crackDur);
      this.renderer.setBgBrightness(Math.max(0, 0.15 - elapsed * 0.2));
    }
  }

  _startCoinFountain(worldX, worldY) {
    this._coinFountainActive = true;

    if (this._landingGold <= 0) {
      this._coinFountainActive = false;
      this.renderer.setBgBrightness(0);
      this.hud.hideRunGold();
      setTimeout(() => {
        if (this.state === STATES.HATCH) this._enterTransition();
      }, 300);
      return;
    }

    const screenPos = this.renderer.projectToScreen(worldX, worldY);
    const numCoins = Math.min(Math.max(Math.ceil(Math.sqrt(this._landingGold)), 3), 20);
    const goldPerCoin = Math.round(this._landingGold / numCoins);
    let totalCollected = 0;

    this.hud.spawnCoinFountain(
      screenPos.x, screenPos.y,
      numCoins, goldPerCoin,
      (gold, collected, total) => {
        totalCollected += gold;
        this.score.collectGold(gold);
        this.hud.setGold(this.score.totalGold);
        this.audio.coinCollect(collected, total);
      },
      () => {
        this._coinFountainActive = false;
        this.renderer.setBgBrightness(0);
        this.hud.hideRunGold();

        setTimeout(() => {
          if (this.state === STATES.HATCH) {
            this._enterTransition();
          }
        }, 300);
      }
    );
  }

  _updateTransition(delta) {
    this._stateTimer += delta;
  }
}
