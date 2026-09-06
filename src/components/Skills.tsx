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

type Skill = {
  name: string;
  use: string;
  icon: IconType;
};

const SKILLS: Skill[] = [
  { name: "Next.js", use: "Sitios rápidos y SEO", icon: SiNextdotjs },
  { name: "React", use: "Interfaces interactivas", icon: SiReact },
  { name: "TypeScript", use: "Código más sólido", icon: SiTypescript },
  { name: "Tailwind CSS", use: "Diseño consistente", icon: SiTailwindcss },
  { name: "Framer Motion", use: "Animaciones suaves", icon: SiFramer },
  { name: "Vercel", use: "Publicación y hosting", icon: SiVercel },
];

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="cq w-full">
        <SectionHeader
          align="left"
          label="Stack"
          title="Con qué laburo"
          description="Herramientas que uso para entregar sitios rápidos, claros y que inviten a escribirte."
          className="mb-0 max-w-xl"
        />

        <Reveal variant="up" delay={40}>
          <div className="skills-panel mt-14 sm:mt-16">
            <ul className="skills-list">
              {SKILLS.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <li key={skill.name} className="skills-item" style={{ transitionDelay: `${i * 50}ms` }}>
                    <span className="skills-item-icon" aria-hidden>
                      <Icon size={22} />
                    </span>
                    <div className="min-w-0">
                      <p className="skills-item-name">{skill.name}</p>
                      <p className="skills-item-use">{skill.use}</p>
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
