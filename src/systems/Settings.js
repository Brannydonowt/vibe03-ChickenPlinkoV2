export const Settings = {
  fastMode: false,
  sfxEnabled: true,
  musicEnabled: true,
  _userSet: {},
  _listeners: [],
  onChange(fn) { this._listeners.push(fn); },
  _notify() { for (const fn of this._listeners) fn(this); },
  set(key, val) { this[key] = val; this._notify(); },
  toggle(key) { this[key] = !this[key]; this._userSet[key] = true; this._notify(); },
  wasUserSet(key) { return !!this._userSet[key]; },
};
