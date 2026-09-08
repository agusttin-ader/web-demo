"use client";

import { Reveal } from "@/components/Reveal";

function FloatingMockups() {
  return (
    <div
      className="hero-mockups relative mx-auto h-[clamp(240px,52vw,360px)] w-full max-w-md md:mx-0 md:h-[min(400px,44vh)] md:max-w-none lg:h-[min(460px,50vh)]"
      aria-hidden
    >
      <div className="hero-mock hero-float-a absolute left-[4%] top-[6%] z-20 w-[80%] overflow-hidden rounded-[var(--radius-xl)] border border-[var(--card-border)] bg-[var(--surface-1)] shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-1.5 border-b border-[var(--section-divider)] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 h-4 flex-1 rounded-[var(--radius-sm)] bg-[var(--surface-2)]" />
        </div>
        <div className="space-y-3 p-5">
          <div className="h-2.5 w-1/3 rounded-full bg-[var(--accent-soft)]" />
          <div className="h-10 w-4/5 rounded-[var(--radius-md)] bg-[linear-gradient(90deg,rgba(94,234,184,0.22),rgba(125,211,252,0.16))]" />
          <div className="h-2 w-full rounded-full bg-[var(--surface-2)]" />
          <div className="h-2 w-5/6 rounded-full bg-[var(--surface-2)]" />
          <div className="mt-4 grid grid-cols-3 gap-2.5">
            <div className="aspect-[4/3] rounded-[var(--radius-md)] bg-[var(--surface-2)]" />
            <div className="aspect-[4/3] rounded-[var(--radius-md)] bg-[var(--surface-3)]" />
            <div className="aspect-[4/3] rounded-[var(--radius-md)] bg-[var(--accent-soft)]" />
          </div>
          <div className="mt-3 h-8 w-32 rounded-full bg-[linear-gradient(135deg,#fde68a,#5eead4)]" />
        </div>
      </div>

      <div className="hero-mock hero-float-b absolute bottom-[2%] right-[0%] z-30 w-[36%] overflow-hidden rounded-[1.25rem] border border-[var(--card-border)] bg-[var(--surface-2)] shadow-[0_16px_48px_rgba(0,0,0,0.4)] sm:right-[4%] sm:w-[32%]">
        <div className="mx-auto mt-2.5 h-1 w-10 rounded-full bg-[var(--muted)]/40" />
        <div className="space-y-2.5 p-4 pt-5">
          <div className="h-2 w-2/3 rounded-full bg-[var(--foreground)]/20" />
          <div className="h-16 rounded-[var(--radius-md)] bg-[linear-gradient(160deg,rgba(94,234,184,0.18),rgba(125,211,252,0.1))]" />
          <div className="h-2 w-full rounded-full bg-[var(--surface-3)]" />
          <div className="h-7 rounded-full bg-[#25D366]/90" />
        </div>
      </div>

      <div className="hero-mock hero-float-c absolute right-[6%] top-[-2%] z-10 hidden w-[44%] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--card-border)] bg-[var(--background-elevated)] p-4 shadow-[var(--shadow-md)] sm:block">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--accent-soft)] text-xs font-bold text-[var(--accent)]">
            +
          </span>
          <div className="flex-1 space-y-2">
            <div className="h-2 w-20 rounded-full bg-[var(--foreground)]/25" />
            <div className="h-2 w-12 rounded-full bg-[var(--muted)]/40" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroMockups() {
  return (
    <Reveal variant="up" delay={80} className="hero-enter relative min-w-0 w-full lg:justify-self-end">
      <FloatingMockups />
    </Reveal>
  );
}
