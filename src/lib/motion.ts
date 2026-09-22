/** Shared motion tokens (Step 5). Durations align with globals.css --duration. */

export const MOTION_EASE = [0.16, 1, 0.3, 1] as const;

export const MOTION_DURATION = 0.45;

export const MOTION_VIEWPORT = {
  once: true,
  amount: 0.15,
  margin: "0px 0px -6% 0px",
} as const;

/** Aligns with header / layout breakpoints. Motion runs at or below this width only. */
export const MOBILE_MOTION_MEDIA_QUERY = "(max-width: 1023px)";

export const MOBILE_MOTION_EASE = [0.22, 1, 0.36, 1] as const;

export const MOBILE_MOTION_DURATION = 0.58;

export const MOBILE_MOTION_VIEWPORT = {
  once: true,
  amount: 0.14,
  margin: "0px 0px -3% 0px",
} as const;

export const MOBILE_MENU_EASE = [0.32, 0.72, 0, 1] as const;

export const MOBILE_MENU_DURATION = 0.42;

export const MOBILE_REVEAL_VARIANTS = {
  up: {
    hidden: { opacity: 0, y: 28, scale: 0.984 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  fade: {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  },
} as const;
