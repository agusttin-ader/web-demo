import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { CERTIFICATIONS } from "@/lib/constants";

const STATS = [
  { value: "2+", label: "Años laburando en esto" },
  { value: "2+", label: "Sitios en producción" },
  { value: "100%", label: "Pensado para el celu" },
  { value: "24h", label: "Te respondo en" },
];

const TIMELINE = [
  {
    id: "2024-inicio",
    year: "2024",
    title: "Inicio freelance",
    desc: "Primeros trabajos para negocios locales que necesitaban una web clara, sin complicarse.",
  },
  {
    id: "2025-produccion",
    year: "2025",
    title: "Proyectos en producción",
    desc: "Sitios reales online, con foco en que la gente pueda contactarte fácil.",
  },
  {
    id: "2026-hoy",
    year: "2026",
    title: "Hoy",
    desc: "Landings, WhatsApp y sitios rápidos — todo apuntando a más consultas.",
  },
] as const;

export function About() {
  return (
    <section id="sobre-mi" className="section-shell">
      <div className="cq w-full">
        <div className="grid gap-14 border-b border-[var(--section-divider)] pb-20 lg:grid-cols-[1fr_1.1fr] lg:gap-24 lg:pb-28">
          <Reveal variant="up">
            <p className="eyebrow tracking-[0.18em]">Sobre mí</p>
            <h2 className="mt-6 max-w-[12ch] break-words font-display text-[clamp(2.125rem,8vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-[var(--foreground)]">
              Agustín <span className="text-gradient">Ader</span>
            </h2>
            <p className="mt-4 text-[length:var(--text-sm)] font-medium tracking-wide text-[var(--muted)]">
              Desarrollador web freelance · Argentina
            </p>
          </Reveal>

          <Reveal variant="right" delay={100} className="flex flex-col justify-end">
            <p className="max-w-xl text-[length:var(--text-xl)] leading-relaxed text-[var(--foreground-muted)]">
              Trabajo con negocios que necesitan resultados, no solo una web linda. La idea es simple:
              que entiendan qué hacés, te escriban y listo.
            </p>
            <p className="mt-8 max-w-md text-[length:var(--text-base)] leading-relaxed text-[var(--muted)]">
              Sin tecnicismos de más. Te armo una web clara, que se vea bien y que lleve directo al contacto.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal variant="scale">
            <figure className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--card-border)] bg-[var(--surface-1)] shadow-[0_24px_80px_rgba(94,234,184,0.1)]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_30%,rgba(94,234,184,0.12),transparent_65%)]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8">
                  <Image
                    src="/new-logo-transparent.webp"
                    alt="Agustín Ader — desarrollador web freelance en Argentina"
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
                    <p className="mt-1 text-[length:var(--text-sm)] text-[var(--muted)]">Landings · más consultas</p>
                  </figcaption>
                </div>
              </div>
              <div className="mt-6 flex items-baseline justify-between border-t border-[var(--section-divider)] pt-6">
                <div>
                  <p className="font-display text-[clamp(3rem,6vw,4.5rem)] font-bold leading-none tracking-tight text-gradient">
                    2+
                  </p>
                  <p className="mt-2 text-[length:var(--text-sm)] text-[var(--muted)]">años de experiencia</p>
                </div>
                <p className="max-w-[12ch] text-right text-[length:var(--text-xs)] uppercase tracking-[0.14em] text-[var(--foreground-muted)]">
                  Freelance desde 2024
                </p>
              </div>
            </figure>
          </Reveal>

          <div className="flex flex-col justify-center">
            <Reveal variant="left" delay={80}>
              <p className="eyebrow-muted">En números</p>
              <dl className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 min-[390px]:gap-x-8 min-[390px]:gap-y-10">
                {STATS.map((stat) => (
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
            <p className="eyebrow-muted">Recorrido</p>
            <h3 className="mt-4 max-w-md font-display text-[length:var(--text-3xl)] font-bold text-[var(--foreground)]">
              Cómo llegué hasta acá
            </h3>
          </Reveal>

          <ol className="timeline mt-14 lg:mt-20">
            {TIMELINE.map((item, i) => (
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
            <p className="eyebrow-muted">Formación y foco</p>
            <h3 className="mt-4 max-w-lg font-display text-[length:var(--text-3xl)] font-bold text-[var(--foreground)]">
              En qué me especializo
            </h3>
          </Reveal>

          <ul className="mt-14 grid gap-4 sm:grid-cols-2">
            {CERTIFICATIONS.map((cert, i) => (
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
