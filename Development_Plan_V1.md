Agentic Coding Prompt — Egg Plinko Hyper-Casual Core Loop (Mobile-Focused)

Objective:
Build a polished, hyper-casual Plinko egg experience in Three.JS (or equivalent web-friendly 3D/2.5D framework) targeting portrait mobile-first gameplay, deployable via GitHub Pages. Focus on moment-to-moment engagement, player anticipation, and satisfying visual/feedback loops. No progression, upgrades, or economy yet—just the core egg journey executed to a high-quality level.

Key Player Journey / Flow
Game Start
Camera zoomed in on flying chicken at top of screen.
Pulsating TAP TO LAY EGG prompt.
Chicken idle animation: subtle bobbing/floating.
Egg Drop
On tap: chicken plays lay flipbook animation; egg spawns.
Camera softly follows egg with dampened movement; slightly zoomed out, but never shows the full Plinko board.
Background gradient lightens as egg descends (sky → grass).
Plinko Physics
Egg collides with pegs; each collision triggers +points visual feedback (+1, +5, +100).
Egg speed affects FOV / zoom to convey motion.
Landing rewards scale based on number of peg hits.
Landing / Hatch
Egg lands in a bin on grass floor.
Hatch flipbook animation; coins/loot particles explode.
Coins animate toward top-screen gold UI bar.
Camera zooms out + pans back to chicken for next egg.
Loop
Egg tap prompt reappears on chicken.
Maintain snappy, satisfying transitions.
Core Features / Requirements
Mobile Portrait Focus: UI and camera designed for vertical screen; large touch targets.
Three.JS (or equivalent): Egg physics, camera controls, particle effects, and animations implemented in web-friendly 3D/2.5D environment.
Plinko Board: Physics-driven egg bounces; pegs give visual + score feedback; partial view to create anticipation.
Camera Dynamics: Egg follow with soft dampening; dynamic FOV based on egg speed; smooth zooms on landing/hatch.
Animations: Chicken lay flipbook, egg squash/stretch, hatch flipbook, coin/loot explosion.
Points Feedback: Peg hit points accumulate at top UI in real-time; landing bonus scales with peg hits.
Environment: Gradient sky → grass floor; bins clearly visible; cozy farm aesthetic.
Loop Polish: TAP prompt pulsates; smooth transitions; particles + sound for impact/reward.
Deployment: Web-ready for GitHub Pages; fast load; mobile-first scaling.
Phased Deliverables

Phase 1 — Egg Drop & Peg Feedback

Tap triggers chicken lay + egg spawn.
Camera follows egg; partial Plinko board visible.
Peg collisions produce visual + point feedback.

Phase 2 — Landing & Hatch

Egg lands in bin; hatch animation.
Coin/loot particle explosion to UI.
Camera returns to chicken.

Phase 3 — Moment-to-Moment Polish

Dynamic FOV + speed-based camera adjustments.
Peg hit stacking bonus affects landing reward.
Particle effects, squash/stretch, sound cues.
Snappy loop (~30s per egg experience).

Phase 4 — Art Integration

Replace placeholders with generated assets (chicken, egg, bins, background).
Maintain cozy farm aesthetic while preserving clarity and readability.
Agent Instructions
Mobile Portrait First: All camera, UI, and physics must scale properly for mobile vertical orientation.
Web-Ready: Code should run in browser via Three.JS (or similar) and be deployable via GitHub Pages.
Hyper-Casual Focus: Prioritize tension, anticipation, satisfying feedback loops, and snackable play (<30s per drop).
Iterative Refinement: Focus purely on core egg drop → peg collisions → landing → hatch → coin animation loop.