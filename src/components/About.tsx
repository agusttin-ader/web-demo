import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { getDictionary } from "@/i18n/get-dictionary";

export async function About() {
  const t = await getDictionary();

  return (
    <section id="sobre-mi" className="section-shell">
      <div className="cq w-full">
        <div className="grid gap-14 border-b border-[var(--section-divider)] pb-20 md:grid-cols-2 md:gap-16 lg:gap-24 lg:pb-28">
          <Reveal variant="up">
            <p className="eyebrow tracking-[0.18em]">{t.about.label}</p>
            <h2 className="mt-6 max-w-[12ch] break-words font-display text-[clamp(2.125rem,8vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-[var(--foreground)]">
              Agustín <span className="text-gradient">Ader</span>
            </h2>
            <p className="mt-4 text-[length:var(--text-sm)] font-medium tracking-wide text-[var(--muted)]">
              {t.about.role}
            </p>
          </Reveal>

          <Reveal variant="right" delay={100} className="flex flex-col justify-end">
            <p className="max-w-xl text-[length:var(--text-xl)] leading-relaxed text-[var(--foreground-muted)]">
              {t.about.body}
            </p>
            <p className="mt-8 max-w-md text-[length:var(--text-base)] leading-relaxed text-[var(--muted)]">
              {t.about.bodyAlt}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16 lg:mt-24 lg:gap-20">
          <Reveal variant="scale">
            <figure className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--card-border)] bg-[var(--surface-1)] shadow-[0_24px_80px_rgba(94,234,184,0.1)]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_30%,rgba(94,234,184,0.12),transparent_65%)]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8">
                  <Image
                    src="/new-logo-transparent.webp"
                    alt={t.about.photoAlt}
                    width={144}
                    height={144}
                    className="h-28 w-28 object-contain sm:h-36 sm:w-36"
                    sizes="144px"
                    loading="lazy"
                  />
                  <figcaption className="text-center">
                    <p className="font-display text-[length:var(--text-lg)] font-bold text-[var(--foreground)]">
                      Agustín Ader
                    </p>
                    <p className="mt-1 text-[length:var(--text-sm)] text-[var(--muted)]">{t.about.photoCaption}</p>
                  </figcaption>
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-4 border-t border-[var(--section-divider)] pt-6 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <p className="font-display text-[clamp(3rem,6vw,4.5rem)] font-bold leading-none tracking-tight text-gradient">
                    2+
                  </p>
                  <p className="mt-2 text-[length:var(--text-sm)] text-[var(--muted)]">{t.about.years}</p>
                </div>
                <p className="max-w-[12ch] text-right text-[length:var(--text-xs)] uppercase tracking-[0.14em] text-[var(--foreground-muted)]">
                  {t.about.freelanceSince}
                </p>
              </div>
            </figure>
          </Reveal>

          <div className="flex flex-col justify-center">
            <Reveal variant="left" delay={80}>
              <p className="eyebrow-muted">{t.about.numbers}</p>
              <dl className="mt-8 grid grid-cols-1 gap-x-4 gap-y-8 min-[390px]:grid-cols-2 min-[390px]:gap-x-8 min-[390px]:gap-y-10">
                {t.about.stats.map((stat) => (
                  <div key={stat.label} className="glass-card rounded-[var(--radius-xl)] p-5">
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <p className="font-display text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-tight text-[var(--foreground)]">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-[length:var(--text-sm)] text-[var(--muted)]">{stat.label}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>

        <div className="mt-24 border-t border-[var(--section-divider)] pt-16 lg:mt-32 lg:pt-24">
          <Reveal variant="up">
            <p className="eyebrow-muted">{t.about.timelineLabel}</p>
            <h3 className="mt-4 max-w-md font-display text-[length:var(--text-3xl)] font-bold text-[var(--foreground)]">
              {t.about.timelineTitle}
            </h3>
          </Reveal>

          <ol className="timeline mt-14 lg:mt-20">
            {t.about.timeline.map((item, i) => (
              <li key={item.id} className="timeline-item">
                <Reveal variant="left" delay={i * 80} className="timeline-row">
                  <div className="timeline-marker" aria-hidden>
                    <span className="timeline-dot" />
                  </div>
                  <div className="timeline-body glass-card rounded-[var(--radius-xl)] p-6 sm:p-8">
                    <p className="timeline-year">{item.year}</p>
                    <h4 className="timeline-title">{item.title}</h4>
                    <p className="timeline-desc">{item.desc}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-24 border-t border-[var(--section-divider)] pt-16 lg:mt-32 lg:pt-24">
          <Reveal variant="up">
            <p className="eyebrow-muted">{t.about.focusLabel}</p>
            <h3 className="mt-4 max-w-lg font-display text-[length:var(--text-3xl)] font-bold text-[var(--foreground)]">
              {t.about.focusTitle}
            </h3>
          </Reveal>

          <ul className="mt-14 grid gap-4 sm:grid-cols-2">
            {t.about.certs.map((cert, i) => (
              <Reveal key={cert.title} variant="scale" delay={i * 60}>
                <li className="glass-card h-full rounded-[var(--radius-xl)] p-8">
                  <p className="font-display text-[length:var(--text-lg)] font-bold text-[var(--foreground)]">
                    {cert.title}
                  </p>
                  <p className="mt-2 text-[length:var(--text-sm)] text-[var(--muted)]">{cert.meta}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
