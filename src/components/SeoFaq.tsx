import { FaqList } from "@/components/FaqList";
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

          <FaqList items={t.faq.items} />
        </div>
      </div>
    </section>
  );
}
