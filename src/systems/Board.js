import { BOARD, BINS, GAME, COLORS } from '../config/constants.js';
import { Peg } from '../entities/Peg.js';
import { Bin } from '../entities/Bin.js';
import * as THREE from 'three';

export class Board {
  constructor(scene, physics) {
    this.pegs = [];
    this.bins = [];
    this.scene = scene;
    this.physics = physics;

    this._createPegs();
    this._createWalls();
    this._createBins();
    this._createBinDividers();
  }

  _createPegs() {
    const usableWidth = GAME.WIDTH - BOARD.WALL_THICKNESS * 2 - BOARD.PEG_RADIUS * 4;
    const spacingX = usableWidth / (BOARD.PEG_COLS - 1);
    const startX = -usableWidth / 2;

    this._pegSpacingX = spacingX;

    for (let row = 0; row < BOARD.PEG_ROWS; row++) {
      const isOffset = row % 2 === 1;
      const cols = isOffset ? BOARD.PEG_COLS - 1 : BOARD.PEG_COLS;
      const offsetX = isOffset ? spacingX / 2 : 0;

      for (let col = 0; col < cols; col++) {
        const x = startX + col * spacingX + offsetX;
        const y = BOARD.TOP_OFFSET + row * BOARD.PEG_SPACING_Y;
        const peg = new Peg(x, y, this.physics);
        this.pegs.push(peg);
        this.scene.add(peg.mesh);
      }

      if (isOffset) {
        const y = BOARD.TOP_OFFSET + row * BOARD.PEG_SPACING_Y;
        for (const edgeX of [startX, -startX]) {
          const peg = new Peg(edgeX, y, this.physics);
          this.pegs.push(peg);
          this.scene.add(peg.mesh);
        }
      }
    }
  }

  _createWalls() {
    const boardHeight = BOARD.TOP_OFFSET + BOARD.PEG_ROWS * BOARD.PEG_SPACING_Y + BINS.HEIGHT + 100;
    const halfW = GAME.WIDTH / 2;

    const wallOpts = {
      isStatic: true,
      friction: 0.02,
      restitution: 0.8,
      label: 'wall',
    };

    const leftWall = this.physics.createRect(
      -halfW + BOARD.WALL_THICKNESS / 2, -boardHeight / 2,
      BOARD.WALL_THICKNESS, boardHeight * 2,
      wallOpts
    );
    const rightWall = this.physics.createRect(
      halfW - BOARD.WALL_THICKNESS / 2, -boardHeight / 2,
      BOARD.WALL_THICKNESS, boardHeight * 2,
      wallOpts
    );

    this.physics.addBody(leftWall);
    this.physics.addBody(rightWall);

    const wallMat = new THREE.MeshBasicMaterial({ color: COLORS.WALL, transparent: true, opacity: 0.3 });

    const leftMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(BOARD.WALL_THICKNESS, boardHeight * 2),
      wallMat
    );
    leftMesh.position.set(-halfW + BOARD.WALL_THICKNESS / 2, -boardHeight / 2, 0);
    this.scene.add(leftMesh);

    const rightMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(BOARD.WALL_THICKNESS, boardHeight * 2),
      wallMat.clone()
    );
    rightMesh.position.set(halfW - BOARD.WALL_THICKNESS / 2, -boardHeight / 2, 0);
    this.scene.add(rightMesh);
  }

  _createBins() {
    const boardBottom = BOARD.TOP_OFFSET + BOARD.PEG_ROWS * BOARD.PEG_SPACING_Y + 30;
    const halfW = GAME.WIDTH / 2 - BOARD.WALL_THICKNESS;
    const totalWidth = halfW * 2;
    const binWidth = totalWidth / BINS.COUNT;
    const startX = -halfW + binWidth / 2;

    for (let i = 0; i < BINS.COUNT; i++) {
      const x = startX + i * binWidth;
      const bin = new Bin(i, x, boardBottom, binWidth, this.physics);
      this.bins.push(bin);
      this.scene.add(bin.mesh);
    }

    this.boardBottom = boardBottom;
    this._binWidth = binWidth;
    this._binStartX = -halfW;
    this._binTotalWidth = totalWidth;
  }

  _createBinDividers() {
    const boardBottom = this.boardBottom;
    const binWidth = this._binWidth;
    const startX = this._binStartX;
    const dividerWidth = 4;

    const divMat = new THREE.MeshBasicMaterial({ color: COLORS.BIN_BORDER });

    for (let i = 0; i <= BINS.COUNT; i++) {
      const x = startX + i * binWidth;
      const divider = this.physics.createRect(
        x, -boardBottom,
        dividerWidth, BINS.HEIGHT + 10,
        { isStatic: true, label: 'divider', restitution: 0.7, friction: 0.05 }
      );
      this.physics.addBody(divider);

      const mesh = new THREE.Mesh(
        new THREE.PlaneGeometry(dividerWidth, BINS.HEIGHT + 10),
        divMat
      );
      mesh.position.set(x, -boardBottom, 1);
      this.scene.add(mesh);
    }

    const floorY = boardBottom + BINS.HEIGHT / 2 + 5;
    const floor = this.physics.createRect(
      0, -floorY, GAME.WIDTH, 10,
      { isStatic: true, label: 'floor' }
    );
    this.physics.addBody(floor);
  }

  rippleFrom(hitPeg) {
    const maxDist = (this._pegSpacingX || BOARD.PEG_SPACING_X) * 1.8;
    for (const peg of this.pegs) {
      if (peg === hitPeg) continue;
      const dx = peg.x - hitPeg.x;
      const dy = peg.y - hitPeg.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < maxDist) {
        const intensity = 1 - (dist / maxDist);
        peg.nudge(intensity * 0.3);
      }
    }
  }

  update(delta, particles) {
    for (const peg of this.pegs) peg.update(delta);
    for (const bin of this.bins) {
      bin.update(delta);
      if (particles && bin.multiplier === 10) {
        this._sparkleTimer = (this._sparkleTimer || 0) + delta;
        if (this._sparkleTimer > 0.15) {
          this._sparkleTimer = 0;
          particles.emit(bin.x, -bin.y + 10, 1, {
            color: 0xFFD700,
            speed: 15,
            life: 0.6,
            size: 2.5,
            spread: Math.PI * 0.4,
            angle: -Math.PI / 2,
            gravity: -10,
            drag: 0.96,
          });
        }
      }
    }
  }

  cycleSpecialPegs(counts) {
    this.clearSpecialPegs();
    const shuffled = [...this.pegs].sort(() => Math.random() - 0.5);
    let idx = 0;
    for (const type of ['rainbow', 'diamond', 'golden']) {
      const count = counts[type] || 0;
      const n = Math.min(count, shuffled.length - idx);
      for (let i = 0; i < n; i++) {
        shuffled[idx++].setSpecial(type);
      }
    }
  }

  clearSpecialPegs() {
    for (const peg of this.pegs) {
      if (peg.specialType) peg.setSpecial(null);
    }
  }

  getBoardBottom() {
    return this.boardBottom;
  }

  getNormalizedY(worldY) {
    return Math.max(0, Math.min(1,
      (worldY - BOARD.TOP_OFFSET) / (BOARD.PEG_ROWS * BOARD.PEG_SPACING_Y)
    ));
  }
}
