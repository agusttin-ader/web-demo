/**
 * Design system reference (Step 3). Visual tokens live in globals.css + tailwind.config.ts.
 * Use Tailwind utilities (text-hero, bg-ink, …) or component classes (ds-btn-primary, ds-card, …).
 */

export const DS_CLASS = {
  container: "ds-container",
  section: "ds-section",
  sectionLight: "ds-section ds-section--light",
  sectionDark: "ds-section ds-section--dark",
  eyebrow: "ds-eyebrow",
  eyebrowDot: "ds-eyebrow-dot",
  proseMuted: "ds-prose-muted",
  btn: "ds-btn",
  btnPrimary: "ds-btn ds-btn-primary",
  btnOutline: "ds-btn ds-btn-outline",
  card: "ds-card",
  tag: "ds-tag",
  tagAccent: "ds-tag ds-tag--accent",
  field: "ds-field",
} as const;
