import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { getDictionary } from "@/i18n/get-dictionary";

const BENEFIT_LAYOUT = [
  { className: "benefits-cell benefits-cell--lead", accent: true },
  { className: "benefits-cell", accent: false },
  { className: "benefits-cell", accent: false },
  { className: "benefits-cell", accent: false },
] as const;

export async function Benefits() {
  const t = await getDictionary();

  return (
    <section id="beneficios" className="section-shell">
      <div className="cq mx-auto max-w-5xl">
        <SectionHeader label={t.benefits.label} title={t.benefits.title} />

        <div className="benefits-grid mt-14 sm:mt-16">
          {t.benefits.items.map((benefit, i) => {
            const layout = BENEFIT_LAYOUT[i] ?? BENEFIT_LAYOUT[1];
            return (
              <Reveal
                key={benefit.title}
                className={layout.className}
                variant={i % 2 === 0 ? "up" : "scale"}
                delay={i * 45}
              >
                <article
                  className={`benefits-card ${layout.accent ? "benefits-card--accent glass-card-accent" : ""}`}
                >
                  <span className="benefits-index" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="benefits-title">{benefit.title}</h3>
                  <p className="benefits-desc">{benefit.desc}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
