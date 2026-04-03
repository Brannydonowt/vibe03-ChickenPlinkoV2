# Egg Plinko — Game Design Document

**Project:** Chicken Plinko V2 (`ChickenPlinkoV2`)
**Genre:** Hyper-Casual / Idle Plinko
**Platform:** Mobile Web (portrait-first), deployed via GitHub Pages
**Tech Stack:** JavaScript (ES Modules), Three.js (rendering), Matter.js (physics), Web Audio API, Vite 6
**Status:** Playable core loop with idle progression systems

---

## 1. Game Overview

**Elevator Pitch:**
A cozy, hyper-casual Plinko game where players tap to make a chicken lay an egg, watch it bounce through a peg board with satisfying physics, and collect gold when it hatches in a scoring bin. Gold fuels an idle progression system of auto-laying chickens with escalating value tiers.

**Tone & Aesthetic:**
Cozy farm meets satisfying physics toy. Sky-blue gradient backgrounds, parallax mountains and clouds, grassy ground with bushes and a farmhouse. The art style uses 2D sprites rendered as Three.js plane meshes in an orthographic 2.5D view.

**Target Session:** ~30 seconds per manual egg drop; idle chickens provide passive engagement.

---

## 2. Core Gameplay Loop

The game follows a tight **state machine** cycle:

```
IDLE → WARMUP → DROP → LAND → HATCH → TRANSITION → IDLE
```

| State | What Happens | Duration |
|-------|-------------|----------|
| **IDLE** | Chicken patrols horizontally at the top. Pulsating "TAP TO LAY EGG!" prompt. Camera in overview showing the full board. | Until player taps |
| **WARMUP** | Chicken squash/tremble animation, squeeze SFX plays. Camera zooms in on chicken. | 1.8s |
| **DROP** | Egg spawns at chicken's position and falls under gravity. Camera follows egg with soft dampening. Egg bounces off pegs, accumulating score with combo multipliers. | Physics-driven |
| **LAND** | Egg reaches a bin (or floor). Brief freeze frame (0.08s). Camera targets the landing zone. | ~0.08s |
| **HATCH** | Egg wobbles (1.2s), cracks appear (0.3s), explosion of coin/shell particles. Coins animate toward gold HUD counter. | ~3.3s total |
| **TRANSITION** | Camera smoothly pans back to overview. Idle prompt reappears. | 1.5s |

---

## 3. Board Layout

**Resolution:** 390 × 844 logical units (9:16 portrait aspect ratio)

### Peg Grid
- **14 rows**, staggered pattern
- Even rows: **8 pegs**, odd rows: **7 pegs** (offset by half-spacing)
- Peg radius: **7 units**
- Spacing: **44 units** horizontal and vertical
- Top offset: **160 units** from top of world (below chicken area)

### Bins (Bottom)
- **7 scoring bins** spanning the board width
- Multipliers: **×1 — ×3 — ×5 — ×10 — ×5 — ×3 — ×1** (center-weighted)
- Bin colors: Green edges, yellow mid, orange center

| Bin | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|-----|---|---|---|---|---|---|---|
| **Multiplier** | ×1 | ×3 | ×5 | ×10 | ×5 | ×3 | ×1 |
| **Color** | Green | Light Green | Yellow | Orange | Yellow | Light Green | Green |

### Walls
- Vertical boundaries on both sides, thickness 10 units, semi-transparent brown

### Floor
- Below bins; eggs missing all bins land on the floor (multiplier treated as ×1)

---

## 4. Physics

| Property | Value |
|----------|-------|
| Engine | Matter.js ^0.20.0 |
| Gravity | 0.55 |
| Egg Radius | 10 |
| Egg Restitution | 0.75 |
| Egg Friction | 0.02 |
| Egg Density | 0.001 |
| Peg Restitution | 0.7 |
| Peg Friction | 0.05 |
| Wall Restitution | 0.8 |
| Wall Friction | 0.02 |

- Fixed-timestep substep loop (16ms steps, max 50ms per frame)
- **Stuck detection:** If egg speed < 0.5 near side walls for 2 seconds, a nudge force is applied with a "BLAST OFF!" floating text

---

## 5. Scoring System — Gold-Direct Economy

Every peg bounce directly awards gold. There is no intermediate "points" currency.

### Peg Hit Gold
- **Base gold per hit:** 1
- **Combo system:** Rapid successive peg hits within a **400ms window** increase the combo counter (max **×10**)
- Gold per hit = `BASE_GOLD (1) × combo_multiplier`
- All peg hit gold accumulates into the **run gold** total
- Floating text shows `+Xg` on each peg hit, so players immediately see bounces = gold

### Landing Payout
- **Gold earned** = `ceil(runGold × binMultiplier)`
- Floor landing uses multiplier of **1**
- Gold is the sole currency

### Combo Feedback
- Combo counter displayed on HUD during drops
- Edge glow effect scales with combo level
- Audio pitch increases with combo

---

## 6. Economy & Currency

**Currency:** Gold (single currency, starts at 0, no cap)

### Gold Sources
| Source | Formula |
|--------|---------|
| Manual egg drop | `ceil(runGold × binMultiplier)` |
| Auto-chicken egg | `max(1, ceil(pegHits × 1 × binMultiplier)) × goldMultiplier` |
| Duplicate egg (Dupli-Bounce) | Same as manual, added as bonus gold |

### Gold Sinks
| Sink | Cost |
|------|------|
| Dupli-Bounce power-up | 1,000 gold |
| Normal Chicken (purchase) | 250 gold |
| Rainbow Chicken (purchase) | 2,000 gold |
| Cosmic Chicken (purchase) | 10,000 gold |
| Chicken level upgrades | Escalating (see Progression) |

---

## 7. Progression — Auto-Chicken System

Three tiers of auto-laying chickens can be purchased and leveled up. They appear as smaller chickens (65% scale) at Y position 110, automatically laying eggs on a timer.

### Chicken Types

| Type | Emoji | Base Cost | Gold Multiplier | Base Interval | Tint | Description |
|------|-------|-----------|----------------|---------------|------|-------------|
| **Chicken** | 🐔 | 250g | ×1 | 15s | None | Lays eggs on its own |
| **Rainbow Chicken** | 🌈 | 2,000g | ×10 | 30s | Hot Pink | Lays rainbow eggs worth 10× gold |
| **Cosmic Chicken** | 🌌 | 10,000g | ×50 | 60s | Purple | Lays cosmic eggs worth 50× gold |

### Leveling System
- **Max level:** 10 per chicken
- **Level cost formula:** `levelCostBase × levelCostMult^(level - 1)`
- **Interval reduction per level:** 12% faster each level
- **Interval formula:** `baseInterval × (1 - 0.12)^(level - 1)`

#### Level Cost Tables

**Normal Chicken** (base: 200g, mult: 1.8×):

| Level | Cost |
|-------|------|
| 2 | 200g |
| 3 | 360g |
| 4 | 648g |
| 5 | 1,166g |
| ... | Escalating |
| 10 | ~15,480g |

**Rainbow Chicken** (base: 1,500g, mult: 2.0×):

| Level | Cost |
|-------|------|
| 2 | 1,500g |
| 3 | 3,000g |
| 4 | 6,000g |
| ... | Doubling |

**Cosmic Chicken** (base: 8,000g, mult: 2.2×):

| Level | Cost |
|-------|------|
| 2 | 8,000g |
| 3 | 17,600g |
| 4 | 38,720g |
| ... | Steep curve |

### Auto-Chicken Behavior
- Chickens unlock sequentially (next tier revealed after purchasing the previous one)
- Auto eggs are labeled `egg_auto` in physics and use the chicken type's `goldMultiplier` and `eggTint`
- Auto eggs that don't land within **20 seconds** are force-landed on the floor
- Each auto-chicken shows a countdown timer sprite above it
- On purchase, the chicken immediately lays its first egg

---

## 8. Power-Up: Dupli-Bounce

| Property | Value |
|----------|-------|
| Cost | 1,000 gold |
| Duration | Single-use (one round) |
| Effect | Each peg hit by the **main egg** spawns a **duplicate egg** |

### Duplicate Egg Properties
- Radius: 85% of normal egg
- Opacity: 75%
- Restitution: 0.8 (slightly bouncier)
- Spawns with random velocity (min 1.5, spread 1.0)
- Each duplicate peg hit adds +1 to run score
- Duplicate bin landings contribute to `bonusGold`, merged into the hatch total

**Known Issue:** The UI button to activate Dupli-Bounce (`showPowerupButton`) is never called from `GameLoop`, so the power-up button may be invisible to players despite the system being fully implemented in code.

---

## 9. Camera System

Orthographic camera with smooth transitions between gameplay states:

| State | Zoom Level | Behavior |
|-------|-----------|----------|
| Idle | 4.6 (overview) | Centered at Y=420, shows full board |
| Warmup | 5.2 (close-up) | Focuses on chicken |
| Drop Start | 1.4 | Follows egg, zooms dynamically with speed |
| Drop Range | 0.7 — 1.4 | Speed-responsive zoom (factor: 0.0003) |
| Hatch | 1.6 | Focuses on bin, screen shake (max 4.0) |
| Overview | 1.05 | Smooth transition back |

- **Follow lerp:** 0.08 (Y), 0.10 (X)
- **Zoom lerp:** 0.04
- **Shake:** Intensity 2.5, decay 0.9
- **Transition duration:** 1.5s with easing

---

## 10. Visual Effects & Particles

### Particle System
- Up to **300 point sprites** active simultaneously
- Emitter types: trail, peg spark, hatch explosion, egg pop, dust
- Floating text meshes for score popups (+10, BLAST OFF!, etc.)
- Coin fountain: DOM elements animating from hatch position toward gold HUD counter

### Visual Feedback
- **Peg hits:** Flash white, scale pulse, ripple effect on neighboring pegs (~1.8× peg spacing)
- **Combo:** Edge glow on HUD intensifies with combo count
- **Hatch sequence:** Wobble animation (1.2s) → crack lines appear (0.3s) → explosion burst → coin shower (1.2s)
- **Screen flash:** Brightness pulse on hatch via shader background
- **Egg trail:** Speed-based particle trail (8 trail segments)

---

## 11. Audio Design

### Sampled SFX
| Sound | File | Use |
|-------|------|-----|
| Chicken Cluck | `SFX_ChickenCluck.ogg` | Lay trigger |
| Squeeze 1–3 | `SFX_Branny_ChickenSqueeze01-03.ogg` | Warmup phase variations |

### Procedural Audio (Web Audio oscillators/noise)
| Sound | Description |
|-------|-------------|
| Peg hit | Pitch varies by Y-position (800Hz base + 400Hz range) and combo level |
| Coin collect | Staggered pitch (1200Hz base), scales with coin count |
| Hatch | Low frequency burst (300Hz) |
| Egg pop | Short noise burst on spawn |
| Drumroll | During wobble/hatch anticipation |
| Purchase chime | Arpeggio on upgrade buy |
| Duplicate spawn | Blip SFX |
| Transition whoosh | Camera pan audio cue |

**Master Volume:** 0.3

---

## 12. UI / HUD

All UI is HTML/CSS DOM overlay (not rendered in Three.js canvas).

### HUD Elements
- **Gold pill:** Persistent top-of-screen counter with coin SVG icon
- **Run gold display:** Gold-themed counter (coin icon + value) shown during active drops, replacing the old "pts" score display. Ticks up with each peg hit so players see bounces = gold.
- **Combo counter:** Shows current combo multiplier during drops
- **Tap prompt:** Large pulsating "LAY YOUR EGG!" for first-time users; subtle "Tap to lay!" icon after first round
- **Edge glow:** CSS glow effect that intensifies with combo

### Next Goal Progress Bar
Persistent bar below the upgrade toggle in the top-left HUD. Answers "why am I collecting gold?"
- Shows progress toward the cheapest available purchase or upgrade
- Displays: progress fill bar, current gold / target cost, emoji + name of target
- Tapping the bar opens the upgrade panel
- Hidden during active drops; visible during idle after first round
- Goal selection logic: scans chicken slots for cheapest available action (unpurchased chicken or level upgrade)

### Upgrade Panel
- **Toggle button:** Arrow icon in top-left HUD (appears after first round)
  - **Pulse animation:** Bounces 3 times after the very first round completes, drawing the player's eye
  - **Can-afford glow:** Gold border + pulsing box-shadow when the player can afford any upgrade
- **Slide-up sheet:** Lists available chicken types with:
  - Emoji + name + description
  - Current level indicator
  - Buy/upgrade button with cost
  - Affordability-based styling (greyed out when can't afford)
- **Close button:** X icon
- Rows unlock sequentially as chickens are purchased

### Power-Up Bar
- Dupli-Bounce button (currently hidden by default, visibility issue noted — to be revisited)

---

## 13. Environment & Art

### Background
- Full-screen gradient shader: Sky blue top (`#87CEEB`) to deeper blue bottom (`#5BA3D9`)
- Brightness modulated during hatch sequence

### Parallax Layers
| Layer | Parallax Factor | Description |
|-------|----------------|-------------|
| Clouds (3 sizes) | 0.12 | Large, medium, small cloud sprites |
| Mountains (2 layers) | 0.05 | Far (blue-grey) and near (dark teal) mountain ranges |

### Ground
- Green ground strip at Y=810, 400 units tall, 800 units wide
- Lighter green top edge (18 units)
- Grass, bush, and farmhouse (hut) prop sprites

### Art Assets (Referenced)
- Chicken: 2-frame fly animation + 2-frame lay animation (PNG sprites)
- Egg: Static sprite with procedural crack overlay
- Environment: Cloud, mountain, grass, bush, hut textures
- Icons: Coin, arrow, close button (SVGs)

---

## 14. Technical Architecture

```
main.js (bootstrap + animation loop)
├── config/constants.js (all game tuning)
├── core/
│   ├── Renderer.js      (Three.js WebGL + shader background)
│   ├── Physics.js        (Matter.js engine wrapper)
│   ├── Camera.js         (orthographic follow/zoom/shake)
│   ├── InputManager.js   (pointer + keyboard input)
│   ├── AudioManager.js   (Web Audio samples + procedural)
│   └── AssetLoader.js    (Three.js texture loading)
├── entities/
│   ├── Chicken.js        (player chicken sprite + animation)
│   ├── AutoChicken.js    (idle auto-laying chickens)
│   ├── Egg.js            (physics body + visual mesh)
│   ├── Peg.js            (static peg + hit feedback)
│   └── Bin.js            (scoring bin sensor + label)
├── systems/
│   ├── GameLoop.js       (state machine + collision handler)
│   ├── Board.js          (peg grid + walls + bins layout)
│   ├── ScoreManager.js   (combo scoring + gold wallet)
│   ├── ParticleSystem.js (GPU-style point particles)
│   └── Environment.js    (parallax clouds/mountains/ground)
└── ui/
    └── HUD.js            (DOM overlay: gold, score, upgrades)
```

### Update Order (per frame)
1. `Physics.update(dt)` — Matter.js substeps
2. `GameLoop.update(dt)` — state machine, collisions, economy
3. `Environment.update(camera)` — parallax positioning
4. `Renderer.render(camera)` — Three.js draw call

### Deployment
- **Build:** Vite 6 (`npm run build` → `dist/`)
- **Host:** GitHub Pages via GitHub Actions CI
- **Base URL:** `/vibe03-ChickenPlinkoV2/`

---

## 15. Known Issues / Notes

1. **Dupli-Bounce UI:** `HUD.showPowerupButton()` is never called from `GameLoop`, so the power-up button may be invisible to players despite the system being fully implemented in code. Dupli-Bounce design is pending a revisit.
2. **Collision categories:** `PEG_CATEGORY`, `EGG_CATEGORY`, `WALL_CATEGORY` are defined in constants but not used in physics body creation; collisions rely on Matter.js defaults and label strings.
3. **Missing assets on disk:** PNG textures and OGG audio files are referenced by code but not present in the repository (may be in `.gitignore`, LFS, or need generation).
4. **No persistence:** Gold and progression are session-only; refreshing resets all progress (no localStorage or save system). Intentionally deferred during prototyping.
5. **`AudioManager.layEgg`:** Defined but never called from the game loop.

---

## 16. Future Considerations (Not Yet Implemented)

Based on the architecture and progression trajectory:

- **Save/Load system** (localStorage) for gold and chicken levels
- **Additional power-ups** beyond Dupli-Bounce
- **More chicken tiers** or prestige system
- **Special egg types** with unique physics properties
- **Daily challenges** or milestone rewards
- **Board variations** (different peg layouts, special pegs)
- **Monetization hooks** (ad-for-gold, IAP for premium chickens)
