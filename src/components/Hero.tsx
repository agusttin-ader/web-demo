import { IconArrowRight } from "@/components/icons";
import { HeroMockups } from "@/components/HeroMockups";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getDictionary } from "@/i18n/get-dictionary";
import { TECH_STACK, whatsappUrl } from "@/lib/constants";

export async function Hero() {
  const t = await getDictionary();

  return (
    <section
      id="hero"
      className="hero-stage relative min-h-[100dvh] overflow-x-clip overflow-y-visible pt-[calc(var(--header-offset)+0.25rem)]"
      aria-labelledby="hero-heading"
    >
      <div className="hero-mesh" aria-hidden />

      <div className="site-container relative z-10 grid min-h-[calc(100dvh-6rem)] items-center gap-10 pb-20 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-10 lg:gap-20 lg:pb-32">
        <div className="min-w-0 max-w-2xl">
          <Reveal variant="up">
            <p className="eyebrow mb-8">{t.hero.eyebrow}</p>
          </Reveal>

          <Reveal variant="up" delay={60}>
            <h1
              id="hero-heading"
              className="max-w-[14ch] font-display text-[length:var(--text-hero)] font-bold leading-[0.95] tracking-[-0.04em] text-[var(--foreground)]"
            >
              {t.hero.titleBefore}
              <br />
              <span className="text-gradient">{t.hero.titleAccent}</span>
              <br />
              {t.hero.titleAfter}
            </h1>
          </Reveal>

          <Reveal variant="up" delay={120}>
            <p className="mt-10 max-w-md text-[length:var(--text-lg)] leading-relaxed text-[var(--foreground-muted)]">
              {t.hero.body}
            </p>
          </Reveal>

          <Reveal variant="up" delay={160}>
            <div className="mt-12 flex w-full flex-col gap-4 sm:max-w-none sm:flex-row sm:items-center">
              <a href="#proyecto-real" className="btn-primary focus-ring w-full sm:w-auto">
                {t.hero.ctaProjects}
                <IconArrowRight className="mi-icon mi-icon-right h-4 w-4" aria-hidden />
              </a>
              <WhatsAppButton
                variant="ghost"
                magnetic={false}
                className="w-full sm:w-auto"
                href={whatsappUrl(t.whatsapp.defaultMessage)}
              >
                {t.hero.ctaWhatsapp}
              </WhatsAppButton>
            </div>
          </Reveal>

          <ul className="mt-16 flex flex-wrap items-center gap-x-5 gap-y-3" aria-label={t.common.techAria}>
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

        <HeroMockups />
      </div>
    </section>
  );
}
