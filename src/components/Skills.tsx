import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { getDictionary } from "@/i18n/get-dictionary";
import { DS_CLASS } from "@/lib/design-system";

export async function Skills() {
  const t = await getDictionary();
  const skills = Object.entries(t.skills.items);

  return (
    <section id="skills" className={`skills ${DS_CLASS.sectionLight}`}>
      <div className={DS_CLASS.container}>
        <SectionHeader label={t.skills.label} title={t.skills.title} description={t.skills.description} />

        <ul className="skills__grid">
          {skills.map(([name, use], index) => (
            <li key={name}>
              <Reveal variant="up" delay={index * 40}>
                <article className="skills__item">
                  <h3 className="skills__name">{name}</h3>
                  <p className="skills__use">{use}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
