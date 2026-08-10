import { IconArrowRight } from "@/components/icons";
import { Magnetic } from "@/components/Magnetic";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { TECH_STACK } from "@/lib/constants";

function FloatingMockups() {
  return (
    <div
      className="hero-mockups relative mx-auto h-[clamp(220px,58vw,340px)] w-full max-w-md lg:mx-0 lg:h-[min(420px,48vh)] lg:max-w-none"
      aria-hidden
    >
      <div className="hero-mock hero-float-a absolute left-[6%] top-[8%] z-20 w-[78%] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--card-border)] bg-[var(--surface-1)] shadow-[var(--shadow-lg)] sm:left-[4%]">
        <div className="flex items-center gap-1.5 border-b border-[var(--section-divider)] px-3 py-2.5">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
          <span className="ml-2 h-4 flex-1 rounded-[var(--radius-sm)] bg-[var(--surface-2)]" />
        </div>
        <div className="space-y-2.5 p-4">
          <div className="h-2.5 w-1/3 rounded-full bg-[var(--accent-soft)]" />
          <div className="h-8 w-4/5 rounded-[var(--radius-sm)] bg-[linear-gradient(90deg,rgba(244,247,251,0.12),rgba(92,225,255,0.18))]" />
          <div className="h-2 w-full rounded-full bg-[var(--surface-2)]" />
          <div className="h-2 w-5/6 rounded-full bg-[var(--surface-2)]" />
          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="aspect-[4/3] rounded-[var(--radius-sm)] bg-[var(--surface-2)]" />
            <div className="aspect-[4/3] rounded-[var(--radius-sm)] bg-[var(--surface-3)]" />
            <div className="aspect-[4/3] rounded-[var(--radius-sm)] bg-[var(--accent-soft)]" />
          </div>
          <div className="mt-2 h-7 w-28 rounded-full bg-[var(--foreground)]/90" />
        </div>
      </div>

      <div className="hero-mock hero-float-b absolute bottom-[4%] right-[2%] z-30 w-[34%] overflow-hidden rounded-[1.1rem] border border-[var(--card-border)] bg-[var(--surface-2)] shadow-[var(--shadow-md)] sm:right-[6%] sm:w-[30%]">
        <div className="mx-auto mt-2 h-1 w-8 rounded-full bg-[var(--muted)]/50" />
        <div className="space-y-2 p-3 pt-4">
          <div className="h-2 w-2/3 rounded-full bg-[var(--foreground)]/20" />
          <div className="h-14 rounded-[var(--radius-md)] bg-[linear-gradient(160deg,rgba(92,225,255,0.16),rgba(59,130,246,0.08))]" />
          <div className="h-2 w-full rounded-full bg-[var(--surface-3)]" />
          <div className="h-2 w-4/5 rounded-full bg-[var(--surface-3)]" />
          <div className="h-6 rounded-full bg-[#25D366]/85" />
        </div>
      </div>

      <div className="hero-mock hero-float-c absolute right-[8%] top-[0%] z-10 hidden w-[42%] overflow-hidden rounded-[var(--radius-md)] border border-[var(--card-border)] bg-[var(--background-elevated)]/90 p-3 shadow-[var(--shadow-md)] backdrop-blur-sm sm:block">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--accent-soft)] text-[10px] font-bold text-[var(--accent)]">
            +
          </span>
          <div className="flex-1 space-y-1.5">
            <div className="h-1.5 w-16 rounded-full bg-[var(--foreground)]/25" />
            <div className="h-1.5 w-10 rounded-full bg-[var(--muted)]/40" />
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
      <div className="hero-aurora" aria-hidden />
      <div className="hero-mesh" aria-hidden />

      <div className="site-container relative z-10 grid min-h-[calc(100dvh-6rem)] items-center gap-12 pb-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:pb-28">
        <div className="min-w-0 max-w-2xl">
          <h1
            id="hero-heading"
            className="hero-enter max-w-[15ch] font-display text-[length:var(--text-hero)] font-semibold leading-[0.98] tracking-[-0.045em] text-[var(--foreground)]"
            style={{ animationDelay: "0ms" }}
          >
            Landing pages que <span className="text-gradient">convierten</span> visitas en consultas
          </h1>

          <p
            className="hero-enter mt-8 max-w-md text-[length:var(--text-lg)] leading-relaxed text-[var(--foreground-muted)]"
            style={{ animationDelay: "80ms" }}
          >
            Diseño mobile-first, performance real y contacto directo por WhatsApp para negocios en Argentina.
          </p>

          <div
            className="hero-enter mt-10 flex w-full flex-col gap-4 sm:mt-12 sm:max-w-none sm:flex-row sm:items-center"
            style={{ animationDelay: "160ms" }}
          >
            <Magnetic className="w-full sm:w-auto" strength={0.2}>
              <a href="#proyecto-real" className="btn-primary focus-ring w-full sm:w-auto">
                Ver proyectos
                <IconArrowRight className="mi-icon mi-icon-right h-3.5 w-3.5" aria-hidden />
              </a>
            </Magnetic>
            <WhatsAppButton variant="ghost" strength={0.16} className="w-full sm:w-auto">
              Hablar por WhatsApp
            </WhatsAppButton>
          </div>

          <ul
            className="hero-enter mt-14 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[var(--section-divider)] pt-8"
            aria-label="Tecnologías"
            style={{ animationDelay: "240ms" }}
          >
            {TECH_STACK.map((tech, i) => (
              <li
                key={tech}
                className="flex items-center gap-3 text-[length:var(--text-xs)] font-medium tracking-wide text-[var(--muted)]"
              >
                {i > 0 ? <span className="h-1 w-1 rounded-full bg-[var(--muted)]/60" aria-hidden /> : null}
                <span>{tech}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-enter relative min-w-0 w-full lg:justify-self-end" style={{ animationDelay: "120ms" }}>
          <FloatingMockups />
        </div>
      </div>
    </section>
  );
}
