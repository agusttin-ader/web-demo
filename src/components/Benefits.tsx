import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { getDictionary } from "@/i18n/get-dictionary";
import { DS_CLASS } from "@/lib/design-system";

export async function Benefits() {
  const t = await getDictionary();

  return (
    <section id="beneficios" className={DS_CLASS.sectionLight}>
      <div className={DS_CLASS.container}>
        <div className="benefits__layout">
          <div className="benefits__intro">
            <SectionHeader label={t.benefits.label} title={t.benefits.title} />
          </div>

          <ul className="benefits__grid">
            {t.benefits.items.map((benefit, index) => (
              <li key={benefit.title}>
                <Reveal variant="up" delay={index * 60}>
                  <article className="benefits__item">
                    <h3>{benefit.title}</h3>
                    <p>{benefit.desc}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
