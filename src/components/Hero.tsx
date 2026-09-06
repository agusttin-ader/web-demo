import { IconArrowRight } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { TECH_STACK } from "@/lib/constants";

function FloatingMockups() {
  return (
    <div
      className="hero-mockups relative mx-auto h-[clamp(240px,58vw,380px)] w-full max-w-md lg:mx-0 lg:h-[min(460px,50vh)] lg:max-w-none"
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

export function Hero() {
  return (
    <section
      id="hero"
      className="hero-stage relative min-h-[100dvh] overflow-x-clip overflow-y-visible pt-[var(--header-offset)]"
      aria-labelledby="hero-heading"
    >
      <div className="hero-mesh" aria-hidden />

      <div className="site-container relative z-10 grid min-h-[calc(100dvh-6rem)] items-center gap-14 pb-24 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-20 lg:pb-32">
        <div className="min-w-0 max-w-2xl">
          <Reveal variant="up">
            <p className="eyebrow mb-8">Desarrollo web · Argentina</p>
          </Reveal>

          <Reveal variant="up" delay={60}>
            <h1
              id="hero-heading"
              className="max-w-[14ch] font-display text-[length:var(--text-hero)] font-bold leading-[0.95] tracking-[-0.04em] text-[var(--foreground)]"
            >
              Landing pages que
              <br />
              <span className="text-gradient">convierten</span>
              <br />
              visitas en consultas
            </h1>
          </Reveal>

          <Reveal variant="up" delay={120}>
            <p className="mt-10 max-w-md text-[length:var(--text-lg)] leading-relaxed text-[var(--foreground-muted)]">
              Diseño para el celu, carga rápida y WhatsApp a mano — para negocios que quieren que la web labure de
              verdad.
            </p>
          </Reveal>

          <Reveal variant="up" delay={160}>
            <div className="mt-12 flex w-full flex-col gap-4 sm:max-w-none sm:flex-row sm:items-center">
              <a href="#proyecto-real" className="btn-primary focus-ring w-full sm:w-auto">
                Ver proyectos
                <IconArrowRight className="mi-icon mi-icon-right h-4 w-4" aria-hidden />
              </a>
              <WhatsAppButton variant="ghost" magnetic={false} className="w-full sm:w-auto">
                Hablar por WhatsApp
              </WhatsAppButton>
            </div>
          </Reveal>

          <ul className="mt-16 flex flex-wrap items-center gap-x-5 gap-y-3" aria-label="Tecnologías">
            {TECH_STACK.map((tech, i) => (
              <li
                key={tech}
                className="flex items-center gap-3 text-[length:var(--text-xs)] font-medium tracking-wide text-[var(--muted)]"
              >
                {i > 0 ? (
                  <span className="h-1 w-1 rounded-full bg-[var(--accent)]/50" aria-hidden />
                ) : null}
                <span className="rounded-full border border-[var(--card-border)] bg-[var(--surface-1)] px-3 py-1.5">
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <Reveal variant="up" delay={80} className="hero-enter relative min-w-0 w-full lg:justify-self-end">
          <FloatingMockups />
        </Reveal>
      </div>
    </section>
  );
}
