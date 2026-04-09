export const VERSION = {
  MAJOR: 1,
  MINOR: 1,
  BUILD: 2,
  toString() {
    return `v${this.MAJOR}.${this.MINOR} build ${this.BUILD}`;
  },
};

export const DISPLAY = {
  ASPECT: 9 / 16,
};

export const GAME = {
  WIDTH: 390,
  HEIGHT: 844,
  BG_TOP: 0x87CEEB,
  BG_BOTTOM: 0x5BA3D9,
};

export const BOARD = {
  PEG_ROWS: 12,
  PEG_COLS: 8,
  PEG_RADIUS: 7,
  PEG_SPACING_X: 44,
  PEG_SPACING_Y: 44,
  TOP_OFFSET: 180,
  WALL_THICKNESS: 10,
};

export const BINS = {
  COUNT: 7,
  HEIGHT: 65,
  MULTIPLIERS: [1, 3, 5, 10, 5, 3, 1],
  COLORS: [0x4CAF50, 0x8BC34A, 0xFFEB3B, 0xFF9800, 0xFFEB3B, 0x8BC34A, 0x4CAF50],
  TIERS: {
    1:  { glowColor: 0x4CAF50, glowIntensity: 0,    labelScale: 1.0, labelColor: '#ffffff', labelStroke: 3 },
    3:  { glowColor: 0x8BC34A, glowIntensity: 0.15, labelScale: 1.05, labelColor: '#ffffff', labelStroke: 3 },
    5:  { glowColor: 0xFFEB3B, glowIntensity: 0.3,  labelScale: 1.1,  labelColor: '#FFFFA0', labelStroke: 3.5 },
    10: { glowColor: 0xFFD700, glowIntensity: 0.6,  labelScale: 1.2,  labelColor: '#FFD700', labelStroke: 4 },
  },
};

export const EGG = {
  RADIUS: 10,
  RESTITUTION: 0.75,
  FRICTION: 0.02,
  DENSITY: 0.001,
  COLOR: 0xFFF5E6,
  TRAIL_LENGTH: 8,
};

export const CHICKEN = {
  BODY_RADIUS: 18,
  Y_POS: 105,
  SPEED: 40,
  BOB_AMPLITUDE: 4,
  BOB_SPEED: 2.5,
  COLOR: 0xFFFFFF,
  BEAK_COLOR: 0xFF8C00,
  COMB_COLOR: 0xFF3333,
  LAY_DURATION: 0.3,
  WARMUP_DURATION: 1.8,
};

export const PHYSICS = {
  GRAVITY: 0.55,
  PEG_CATEGORY: 0x0002,
  EGG_CATEGORY: 0x0004,
  WALL_CATEGORY: 0x0008,
};

export const CAMERA = {
  FOLLOW_LERP: 0.08,
  FOLLOW_LERP_X: 0.10,
  ZOOM_LERP: 0.04,
  IDLE_ZOOM: 4.6,
  WARMUP_ZOOM: 5.2,
  DROP_ZOOM_START: 1.4,
  DROP_ZOOM_MIN: 0.7,
  DROP_ZOOM_MAX: 1.4,
  HATCH_ZOOM: 1.6,
  HATCH_SHAKE_MAX: 4.0,
  SHAKE_INTENSITY: 2.5,
  SHAKE_DECAY: 0.9,
  TRANSITION_DURATION: 1.5,
  SPEED_ZOOM_FACTOR: 0.0003,
  BOARD_TOP_Y: 180,
  BOARD_BOTTOM_Y: 770,
  OVERVIEW_ZOOM: 1.2,
  OVERVIEW_CENTER_Y: 418,
};

export const SCORING = {
  BASE_GOLD: 1,
  COMBO_WINDOW_MS: 400,
  COMBO_MAX: 10,
};

export const TIMING = {
  HATCH_DELAY: 0.5,
  WOBBLE_DURATION: 1.2,
  CRACK_DURATION: 0.3,
  COIN_DURATION: 1.2,
  TRANSITION_DURATION: 1.5,
  IDLE_PROMPT_DELAY: 0.5,
  LAND_FREEZE: 0.08,
};

export const AUDIO = {
  MASTER_VOLUME: 0.3,
  PEG_BASE_FREQ: 800,
  PEG_FREQ_RANGE: 400,
  COIN_BASE_FREQ: 1200,
  HATCH_FREQ: 300,
};

export const ENVIRONMENT = {
  GROUND_Y: 775,
  GROUND_HEIGHT: 400,
  GROUND_WIDTH: 800,
  GROUND_COLOR: 0x5B8C3E,
  GROUND_TOP_COLOR: 0x7EC850,
  GROUND_TOP_HEIGHT: 18,

  CLOUD_PARALLAX: 0.12,
  MOUNTAIN_PARALLAX: 0.05,

  MOUNTAIN_FAR_COLOR: 0x6A8FA8,
  MOUNTAIN_NEAR_COLOR: 0x4A6070,
};

export const POWERUP = {
  DUPLI_BOUNCE_COST: 1000,
  DUPLICATE_RADIUS_SCALE: 0.85,
  DUPLICATE_OPACITY: 0.75,
  DUPLICATE_RESTITUTION: 0.8,
  SPAWN_OFFSET_Y: 5,
  SPAWN_SPEED_MIN: 1.5,
  SPAWN_SPEED_SPREAD: 1.0,
};

export const AUTO_CHICKEN = {
  Y_POS: 140,
  SCALE: 0.65,
  SPEED: 35,
  WARMUP_DURATION: 1.2,
  LAY_DURATION: 0.25,
  AUDIO_VOLUME_SCALE: 0.25,
  Z_POS: 4,
  INTERVAL_REDUCTION: 0.12,
  MAX_LEVEL: 10,
};

export const CHICKEN_TYPES = [
  {
    id: 'normal',
    name: 'Chicken',
    emoji: '\u{1F414}',
    description: 'Lays eggs on its own',
    baseCost: 250,
    levelCostBase: 200,
    levelCostMult: 1.8,
    baseInterval: 15,
    goldMultiplier: 1,
    tint: null,
    eggTint: null,
    timerColor: '#FFFFFF',
    particleColor: 0xFFD700,
  },
  {
    id: 'rainbow',
    name: 'Rainbow Chicken',
    emoji: '\u{1F308}',
    description: 'Lays rainbow eggs worth 10x gold',
    baseCost: 2000,
    levelCostBase: 1500,
    levelCostMult: 2.0,
    baseInterval: 30,
    goldMultiplier: 10,
    tint: 0xFF69B4,
    eggTint: 0xFF69B4,
    timerColor: '#FF69B4',
    particleColor: 0xFF69B4,
  },
  {
    id: 'cosmic',
    name: 'Cosmic Chicken',
    emoji: '\u{1F30C}',
    description: 'Lays cosmic eggs worth 50x gold',
    baseCost: 10000,
    levelCostBase: 8000,
    levelCostMult: 2.2,
    baseInterval: 60,
    goldMultiplier: 50,
    tint: 0x9B59B6,
    eggTint: 0x9B59B6,
    timerColor: '#9B59B6',
    particleColor: 0x9B59B6,
  },
];

export const PLAYER_UPGRADES = [
  {
    id: 'bounciness',
    name: 'Bouncy Egg',
    emoji: '\u{1F3C0}',
    description: 'Eggs bounce higher off pegs',
    maxLevel: 5,
    baseCost: 150,
    costMult: 2.0,
    effect: 0.04,
  },
  {
    id: 'multi_egg',
    name: 'Double Yolk',
    emoji: '\u{1F95A}',
    description: 'Lay extra eggs each drop',
    maxLevel: 3,
    baseCost: 500,
    costMult: 3.0,
    effect: 1,
  },
  {
    id: 'golden_pegs',
    name: 'Golden Pegs',
    emoji: '\u{2B50}',
    description: 'Random pegs give 5x gold',
    maxLevel: 5,
    baseCost: 300,
    costMult: 2.2,
    effect: 3,
  },
  {
    id: 'diamond_pegs',
    name: 'Diamond Pegs',
    emoji: '\u{1F48E}',
    description: 'Random pegs give 25x gold',
    maxLevel: 5,
    baseCost: 10000,
    costMult: 2.5,
    effect: 1,
  },
  {
    id: 'rainbow_pegs',
    name: 'Rainbow Pegs',
    emoji: '\u{1F308}',
    description: 'Random pegs give 50x gold',
    maxLevel: 3,
    baseCost: 75000,
    costMult: 3.0,
    effect: 1,
  },
];

export const SPECIAL_PEGS = {
  CYCLE_INTERVAL: 30,
  golden:  { multiplier: 5,  color: 0xFFD700, hitColor: 0xFFFFAA, textColor: '#FFFF00', scale: 1.3 },
  diamond: { multiplier: 25, color: 0x44EEFF, hitColor: 0xAAFFFF, textColor: '#44EEFF', scale: 1.35 },
  rainbow: { multiplier: 50, color: 0xFF44FF, hitColor: 0xFFAAFF, textColor: '#FF44FF', scale: 1.4 },
};

export const COLORS = {
  PEG_DEFAULT: 0xE0E0E0,
  PEG_HIT: 0xFFFFFF,
  WALL: 0x8B7355,
  BIN_BORDER: 0x6B5B3D,
  GOLD_PARTICLE: 0xFFD700,
  SHELL_PARTICLE: 0xFFF5E6,
  SPARK: 0xFFFFAA,
  DUST: 0xC8B896,
};
