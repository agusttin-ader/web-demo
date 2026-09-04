"use client";

import Image from "next/image";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { CERTIFICATIONS } from "@/lib/constants";

const STATS = [
  { value: "2+", label: "Años de experiencia" },
  { value: "2+", label: "Proyectos en producción" },
  { value: "100%", label: "Enfoque mobile-first" },
  { value: "24h", label: "Tiempo de respuesta" },
];

const TIMELINE = [
  {
    id: "2024-inicio",
    year: "2024",
    title: "Inicio freelance",
    desc: "Primeros encargos enfocados en webs claras para negocios locales.",
  },
  {
    id: "2025-produccion",
    year: "2025",
    title: "Proyectos en producción",
    desc: "Sitios reales publicados, con foco en contacto directo y conversión.",
  },
  {
    id: "2026-hoy",
    year: "2026",
    title: "Hoy",
    desc: "Landings, WhatsApp y performance alineados para generar más consultas.",
  },
] as const;

export function About() {
  return (
    <section id="sobre-mi" className="section-shell">
      <div className="cq w-full">
        <div className="grid gap-14 border-b border-[var(--section-divider)] pb-20 lg:grid-cols-[1fr_1.1fr] lg:gap-24 lg:pb-28">
          <MotionReveal variant="up">
            <p className="eyebrow tracking-[0.18em]">Sobre mí</p>
            <h2 className="mt-6 max-w-[12ch] break-words font-display text-[clamp(2.125rem,8vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-[var(--foreground)]">
              Agustín <span className="text-gradient">Ader</span>
            </h2>
            <p className="mt-4 text-[length:var(--text-sm)] font-medium tracking-wide text-[var(--muted)]">
              Desarrollador web freelance · Argentina
            </p>
          </MotionReveal>

          <MotionReveal variant="right" delay={100} className="flex flex-col justify-end">
            <p className="max-w-xl text-[length:var(--text-xl)] leading-relaxed text-[var(--foreground-muted)]">
              Trabajo con negocios reales que necesitan resultados, no solo una web linda. Mi enfoque es simple: que el
              cliente entienda rápido, consulte y convierta.
            </p>
            <p className="mt-8 max-w-md text-[length:var(--text-base)] leading-relaxed text-[var(--muted)]">
              Sin tecnicismos innecesarios. Sin ruido. Solo estructura clara, diseño premium y un camino directo a la
              acción.
            </p>
          </MotionReveal>
        </div>

        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <MotionReveal variant="scale">
            <figure className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--card-border)] bg-[var(--surface-1)] shadow-[0_24px_80px_rgba(139,92,246,0.12)]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_30%,rgba(139,92,246,0.15),transparent_65%)]" />
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
                    <p className="mt-1 text-[length:var(--text-sm)] text-[var(--muted)]">Landing pages · Conversión</p>
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
          </MotionReveal>

          <div className="flex flex-col justify-center">
            <MotionReveal variant="left" delay={80}>
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
            </MotionReveal>
          </div>
        </div>

        <div className="mt-24 border-t border-[var(--section-divider)] pt-16 lg:mt-32 lg:pt-24">
          <MotionReveal variant="up">
            <p className="eyebrow-muted">Timeline</p>
            <h3 className="mt-4 max-w-md font-display text-[length:var(--text-3xl)] font-bold text-[var(--foreground)]">
              Un recorrido enfocado en resultados
            </h3>
          </MotionReveal>

          <ol className="mt-14 space-y-0 lg:mt-20">
            {TIMELINE.map((item, i) => (
              <li key={item.id} className="border-t border-[var(--section-divider)]">
                <MotionReveal variant="left" delay={i * 80} className="grid gap-4 py-8 sm:grid-cols-[7rem_1fr] sm:gap-10 lg:grid-cols-[8rem_1fr_1.2fr] lg:gap-16 lg:py-10">
                  <p className="font-display text-[length:var(--text-lg)] font-bold text-[var(--accent)]">
                    {item.year}
                  </p>
                  <h4 className="font-display text-[length:var(--text-xl)] font-bold text-[var(--foreground)]">
                    {item.title}
                  </h4>
                  <p className="text-[length:var(--text-base)] leading-relaxed text-[var(--foreground-muted)] sm:col-span-2 lg:col-span-1">
                    {item.desc}
                  </p>
                </MotionReveal>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-24 border-t border-[var(--section-divider)] pt-16 lg:mt-32 lg:pt-24">
          <MotionReveal variant="up">
            <p className="eyebrow-muted">Certificaciones & foco</p>
            <h3 className="mt-4 max-w-lg font-display text-[length:var(--text-3xl)] font-bold text-[var(--foreground)]">
              Especialización práctica
            </h3>
          </MotionReveal>

          <ul className="mt-14 grid gap-4 sm:grid-cols-2">
            {CERTIFICATIONS.map((cert, i) => (
              <MotionReveal key={cert.title} variant="scale" delay={i * 60}>
                <li className="glass-card h-full rounded-[var(--radius-xl)] p-8">
                  <p className="font-display text-[length:var(--text-lg)] font-bold text-[var(--foreground)]">
                    {cert.title}
                  </p>
                  <p className="mt-2 text-[length:var(--text-sm)] text-[var(--muted)]">{cert.meta}</p>
                </li>
              </MotionReveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
