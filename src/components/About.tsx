import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { CERTIFICATIONS } from "@/lib/constants";

const STATS = [
  { value: "2+", label: "Años de experiencia" },
  { value: "2+", label: "Proyectos en produccion" },
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
    title: "Proyectos en produccion",
    desc: "Sitios reales publicados, con foco en contacto directo y conversion.",
  },
  {
    id: "2026-hoy",
    year: "2026",
    title: "Hoy",
    desc: "Landings, WhatsApp y performance alineados para generar mas consultas.",
  },
] as const;

export function About() {
  return (
    <section id="sobre-mi" className="section-shell">
      <div className="cq w-full">
        <div className="grid gap-14 border-b border-[var(--section-divider)] pb-20 lg:grid-cols-[1fr_1.1fr] lg:gap-24 lg:pb-28">
          <Reveal>
            <p className="eyebrow tracking-[0.18em]">Sobre mi</p>
            <h2 className="mt-6 max-w-[12ch] break-words font-display text-[clamp(2.125rem,8vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-[var(--foreground)]">
              Agustin Ader
            </h2>
            <p className="mt-4 text-[length:var(--text-sm)] font-medium tracking-wide text-[var(--muted)]">
              Desarrollador web freelance · Argentina
            </p>
          </Reveal>

          <Reveal className="flex flex-col justify-end">
            <p className="max-w-xl text-[length:var(--text-xl)] leading-relaxed text-[var(--foreground-muted)]">
              Trabajo con negocios reales que necesitan resultados, no solo una web linda. Mi enfoque es simple: que el
              cliente entienda rapido, consulte y convierta.
            </p>
            <p className="mt-8 max-w-md text-[length:var(--text-base)] leading-relaxed text-[var(--muted)]">
              Sin tecnicismos innecesarios. Sin ruido. Solo estructura clara, diseno premium y un camino directo a la
              accion.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <figure className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-xl)] border border-[var(--card-border)] bg-[var(--surface-1)] shadow-[var(--shadow-md)]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_30%,rgba(92,225,255,0.1),transparent_65%)]" />
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
                      Agustin Ader
                    </p>
                    <p className="mt-1 text-[length:var(--text-sm)] text-[var(--muted)]">Landing pages · Conversion</p>
                  </figcaption>
                </div>
              </div>
              <div className="mt-6 flex items-baseline justify-between border-t border-[var(--section-divider)] pt-6">
                <div>
                  <p className="font-display text-[clamp(3rem,6vw,4.5rem)] font-bold leading-none tracking-tight text-[var(--foreground)]">
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
            <Reveal>
              <p className="eyebrow-muted">En numeros</p>
              <dl className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 min-[390px]:gap-x-8 min-[390px]:gap-y-10">
                {STATS.map((stat) => (
                  <div key={stat.label}>
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
          <Reveal>
            <p className="eyebrow-muted">Timeline</p>
            <h3 className="mt-4 max-w-md font-display text-[length:var(--text-3xl)] font-bold text-[var(--foreground)]">
              Un recorrido enfocado en resultados
            </h3>
          </Reveal>

          <ol className="mt-14 space-y-0 lg:mt-20">
            {TIMELINE.map((item) => (
              <li key={item.id} className="border-t border-[var(--section-divider)]">
                <Reveal className="grid gap-4 py-8 sm:grid-cols-[7rem_1fr] sm:gap-10 lg:grid-cols-[8rem_1fr_1.2fr] lg:gap-16 lg:py-10">
                  <p className="font-display text-[length:var(--text-lg)] font-bold text-[var(--accent)]">
                    {item.year}
                  </p>
                  <h4 className="font-display text-[length:var(--text-xl)] font-bold text-[var(--foreground)]">
                    {item.title}
                  </h4>
                  <p className="text-[length:var(--text-base)] leading-relaxed text-[var(--foreground-muted)] sm:col-span-2 lg:col-span-1">
                    {item.desc}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-24 border-t border-[var(--section-divider)] pt-16 lg:mt-32 lg:pt-24">
          <Reveal>
            <p className="eyebrow-muted">Certificaciones & foco</p>
            <h3 className="mt-4 max-w-lg font-display text-[length:var(--text-3xl)] font-bold text-[var(--foreground)]">
              Especializacion practica
            </h3>
          </Reveal>

          <ul className="mt-14 grid gap-0 sm:grid-cols-2">
            {CERTIFICATIONS.map((cert) => (
              <Reveal key={cert.title}>
                <li className="border-t border-[var(--section-divider)] py-8 pr-6 sm:odd:pr-10 sm:even:pl-10 lg:py-10">
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
