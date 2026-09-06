import { BENEFITS } from "@/data/site-content";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function Benefits() {
  return (
    <section id="beneficios" className="section-shell">
      <div className="cq mx-auto max-w-5xl">
        <SectionHeader label="Beneficios" title="Qué cambia cuando la web está bien hecha" />

        <div className="benefits-grid mt-14 sm:mt-16">
          {BENEFITS.map((benefit, i) => (
            <Reveal
              key={benefit.title}
              className={benefit.accent ? "benefits-cell benefits-cell--lead" : "benefits-cell"}
              variant={i % 2 === 0 ? "up" : "scale"}
              delay={i * 45}
            >
              <article
                className={`benefits-card ${benefit.accent ? "benefits-card--accent glass-card-accent" : ""}`}
              >
                <span className="benefits-index" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="benefits-title">{benefit.title}</h3>
                <p className="benefits-desc">{benefit.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
