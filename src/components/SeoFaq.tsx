import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { getDictionary } from "@/i18n/get-dictionary";

export async function SeoFaq() {
  const t = await getDictionary();

  return (
    <section id="preguntas-frecuentes" className="section-shell faq-section" aria-labelledby="faq-heading">
      <div className="cq mx-auto max-w-3xl">
        <SectionHeader
          label={t.faq.label}
          title={t.faq.title}
          id="faq-heading"
          description={t.faq.description}
        />

        <div className="faq-list mt-12">
          {t.faq.items.map((item, index) => (
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
