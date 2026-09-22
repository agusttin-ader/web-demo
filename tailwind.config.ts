import type { Config } from "tailwindcss";

/**
 * Design system (Step 3) — tokens mirrored in src/app/globals.css @theme.
 * Palette: ink · paper · accent (sparse). Mobile-first fluid type & spacing.
 */
const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        "ink-muted": "var(--color-ink-muted)",
        "ink-subtle": "var(--color-ink-subtle)",
        paper: "var(--color-paper)",
        "paper-elevated": "var(--color-paper-elevated)",
        accent: "var(--color-accent)",
        "accent-hover": "var(--color-accent-hover)",
        border: "var(--color-border)",
        "border-strong": "var(--color-border-strong)",
        surface: "var(--color-surface)",
        "surface-elevated": "var(--color-surface-elevated)",
        muted: "var(--color-muted)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        xs: "var(--text-xs)",
        sm: "var(--text-sm)",
        base: "var(--text-base)",
        lg: "var(--text-lg)",
        xl: "var(--text-xl)",
        "2xl": "var(--text-2xl)",
        "3xl": "var(--text-3xl)",
        display: "var(--text-display)",
        hero: "var(--text-hero)",
      },
      spacing: {
        gutter: "var(--space-gutter)",
        section: "var(--space-section-y)",
        "header-offset": "var(--header-offset)",
      },
      maxWidth: {
        content: "var(--content-max)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        DEFAULT: "var(--radius-md)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        pill: "var(--radius-pill)",
      },
      transitionTimingFunction: {
        out: "var(--ease-out)",
      },
      transitionDuration: {
        DEFAULT: "var(--duration)",
        fast: "var(--duration-fast)",
      },
    },
  },
  plugins: [],
};

export default config;
