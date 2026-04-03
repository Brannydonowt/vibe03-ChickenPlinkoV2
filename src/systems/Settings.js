export const Settings = {
  fastMode: false,
  sfxEnabled: true,
  musicEnabled: true,
  _listeners: [],
  onChange(fn) { this._listeners.push(fn); },
  _notify() { for (const fn of this._listeners) fn(this); },
  set(key, val) { this[key] = val; this._notify(); },
  toggle(key) { this[key] = !this[key]; this._notify(); },
};
