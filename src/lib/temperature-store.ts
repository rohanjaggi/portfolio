let temperature = 0;
const listeners: Set<() => void> = new Set();

export function getTemperature() {
  return temperature;
}

export function setTemperature(value: number) {
  temperature = Math.max(0, Math.min(1, value));
  listeners.forEach((fn) => fn());
}

export function subscribe(fn: () => void) {
  listeners.add(fn);
  return () => { listeners.delete(fn); };
}
