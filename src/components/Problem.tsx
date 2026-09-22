import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { getDictionary } from "@/i18n/get-dictionary";
import { DS_CLASS } from "@/lib/design-system";

export async function Problem() {
  const t = await getDictionary();

  return (
    <section id="problema" className={DS_CLASS.sectionDark}>
      <div className={DS_CLASS.container}>
        <div className="problem__layout">
          <div className="problem__intro">
            <SectionHeader
              label={t.problem.label}
              title={t.problem.title}
              description={t.problem.description}
            />
          </div>

          <div className="problem__body">
            <ol className="problem__list">
              {t.problem.points.map((point, index) => (
                <li key={point} className="problem__item">
                  <Reveal variant="up" delay={index * 70}>{point}</Reveal>
                </li>
              ))}
            </ol>

            <Reveal variant="fade" delay={120}>
              <p className="problem__closing">
                {t.problem.closing}{" "}
                <span className="problem__closing-accent">{t.problem.closingAccent}</span>
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
