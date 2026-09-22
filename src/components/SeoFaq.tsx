import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { getDictionary } from "@/i18n/get-dictionary";
import { DS_CLASS } from "@/lib/design-system";

export async function SeoFaq() {
  const t = await getDictionary();

  return (
    <section id="preguntas-frecuentes" className={`faq ${DS_CLASS.sectionDark}`} aria-labelledby="faq-heading">
      <div className={DS_CLASS.container}>
        <div className="faq__layout">
          <div className="faq__intro">
            <SectionHeader
              label={t.faq.label}
              title={t.faq.title}
              id="faq-heading"
              description={t.faq.description}
            />
          </div>

          <div className="faq__list">
            {t.faq.items.map((item, index) => (
              <Reveal key={item.question} variant="up" delay={index * 45}>
                <details className="faq__item">
                  <summary>{item.question}</summary>
                  <div className="faq__answer faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
