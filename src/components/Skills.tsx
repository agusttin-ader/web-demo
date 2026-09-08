import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiVercel,
  SiFramer,
} from "react-icons/si";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { getDictionary } from "@/i18n/get-dictionary";

const SKILL_ICONS: Record<string, IconType> = {
  "Next.js": SiNextdotjs,
  React: SiReact,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "Framer Motion": SiFramer,
  Vercel: SiVercel,
};

export async function Skills() {
  const t = await getDictionary();
  const skills = Object.entries(t.skills.items);

  return (
    <section id="skills" className="section-shell">
      <div className="cq w-full">
        <SectionHeader
          align="left"
          label={t.skills.label}
          title={t.skills.title}
          description={t.skills.description}
          className="mb-0 max-w-xl"
        />

        <Reveal variant="up" delay={40}>
          <div className="skills-panel mt-14 sm:mt-16">
            <ul className="skills-list">
              {skills.map(([name, use], i) => {
                const Icon = SKILL_ICONS[name];
                return (
                  <li key={name} className="skills-item" style={{ transitionDelay: `${i * 50}ms` }}>
                    <span className="skills-item-icon" aria-hidden>
                      {Icon ? <Icon size={22} /> : null}
                    </span>
                    <div className="min-w-0">
                      <p className="skills-item-name">{name}</p>
                      <p className="skills-item-use">{use}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
