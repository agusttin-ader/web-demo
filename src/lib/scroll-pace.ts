/** Scroll speed → reveal duration (faster scroll = snappier reveals). */

const BASE_DURATION_MS = 1450;
const IDLE_MS = 220;
const MAX_DELAY_MS = 640;

let lastY = 0;
let lastT = 0;
let lastScrollAt = 0;
let smoothedVelocity = 0;
let listening = false;

function onScroll() {
  const t = performance.now();
  const y = window.scrollY;
  const dt = Math.max(t - lastT, 1);
  const instant = Math.abs(y - lastY) / dt;
  smoothedVelocity = smoothedVelocity * 0.65 + instant * 0.35;
  lastY = y;
  lastT = t;
  lastScrollAt = t;
}

export function initScrollPaceTracking() {
  if (listening || typeof window === "undefined") return;
  listening = true;
  lastY = window.scrollY;
  lastT = performance.now();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function getSmoothedVelocity(): number {
  if (performance.now() - lastScrollAt > IDLE_MS) {
    return 0;
  }
  return smoothedVelocity;
}

/** Duration in ms for the next reveal, based on recent scroll speed. */
export function getRevealDurationMs(): number {
  const v = getSmoothedVelocity();
  if (v < 0.35) return BASE_DURATION_MS;
  if (v < 0.85) return 1080;
  if (v < 1.5) return 780;
  if (v < 2.6) return 540;
  return 360;
}

export function applyScrollPaceToElement(el: HTMLElement, delayMs: number) {
  const durationMs = getRevealDurationMs();
  const ratio = durationMs / BASE_DURATION_MS;
  el.style.setProperty("--m-reveal-duration", `${durationMs}ms`);
  const scaledDelay = Math.round(Math.min(delayMs, MAX_DELAY_MS) * ratio);
  el.style.setProperty("--m-reveal-delay", `${scaledDelay}ms`);
}
