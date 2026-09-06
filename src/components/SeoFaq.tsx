import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { SEO_FAQ } from "@/data/seo-content";

export function SeoFaq() {
  return (
    <section id="preguntas-frecuentes" className="section-shell faq-section" aria-labelledby="faq-heading">
      <div className="cq mx-auto max-w-3xl">
        <SectionHeader
          label="Preguntas frecuentes"
          title="Desarrollo web, páginas web y programación"
          id="faq-heading"
          description="Respuestas directas sobre precios, plazos y qué incluye trabajar conmigo en tu página web."
        />

        <div className="faq-list mt-12">
          {SEO_FAQ.map((item, index) => (
            <Reveal key={item.question} variant="up" delay={index * 40}>
              <div className="faq-item glass-card rounded-[var(--radius-xl)]">
                <details className="faq-details group">
                  <summary className="faq-summary focus-ring">
                    <span>{item.question}</span>
                    <span className="faq-icon" aria-hidden />
                  </summary>
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </details>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
