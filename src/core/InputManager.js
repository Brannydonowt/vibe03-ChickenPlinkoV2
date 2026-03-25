export class InputManager {
  constructor(element) {
    this._callbacks = [];
    this._element = element;

    this._onPointerDown = (e) => {
      e.preventDefault();
      this._callbacks.forEach(cb => cb(e));
    };

    this._onKeyDown = (e) => {
      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        this._callbacks.forEach(cb => cb(e));
      }
    };

    element.addEventListener('pointerdown', this._onPointerDown, { passive: false });
    element.addEventListener('touchstart', (e) => e.preventDefault(), { passive: false });
    window.addEventListener('keydown', this._onKeyDown);
  }

  onTap(callback) {
    this._callbacks.push(callback);
  }

  offTap(callback) {
    const idx = this._callbacks.indexOf(callback);
    if (idx >= 0) this._callbacks.splice(idx, 1);
  }

  destroy() {
    this._element.removeEventListener('pointerdown', this._onPointerDown);
    this._callbacks = [];
  }
}
