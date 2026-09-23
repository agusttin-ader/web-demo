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

/** Easing shared with mobile-motion.css (cubic-bezier). */
export const MOBILE_MOTION_EASE_CSS = "cubic-bezier(0.22, 1, 0.36, 1)";
