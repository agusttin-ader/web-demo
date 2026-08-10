import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiVercel,
  SiCss3,
} from "react-icons/si";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

type SkillLevel = "Avanzado" | "Experto";

type Skill = {
  name: string;
  category: string;
  level: SkillLevel;
  score: number;
  icon: IconType;
};

const SKILLS: Skill[] = [
  { name: "Next.js", category: "Framework", level: "Experto", score: 95, icon: SiNextdotjs },
  { name: "React", category: "Frontend", level: "Experto", score: 94, icon: SiReact },
  { name: "TypeScript", category: "Lenguaje", level: "Avanzado", score: 88, icon: SiTypescript },
  { name: "Tailwind CSS", category: "Styling", level: "Experto", score: 92, icon: SiTailwindcss },
  { name: "Motion CSS", category: "Motion", level: "Avanzado", score: 82, icon: SiCss3 },
  { name: "Vercel", category: "Deploy", level: "Avanzado", score: 86, icon: SiVercel },
];

function levelTone(level: SkillLevel) {
  if (level === "Experto") return "text-[var(--accent-bright)]";
  return "text-[var(--foreground)]";
}

function SkillCard({ skill }: { skill: Skill }) {
  const Icon = skill.icon;

  return (
    <article className="skill-card group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--card-border)] bg-[var(--surface-1)] p-5 shadow-[var(--shadow-sm)] sm:p-6">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_0%_0%,rgba(92,225,255,0.08),transparent_55%)]" />
      </div>

      <div className="relative flex items-center justify-between gap-3">
        <span className="skill-card-icon" aria-hidden>
          <Icon size={20} />
        </span>

        <span className="shrink-0 rounded-[var(--radius-full)] border border-[var(--card-border)] px-2.5 py-1 text-[length:var(--text-xs)] font-medium leading-none tracking-wide text-[var(--muted)] transition-colors duration-300 group-hover:border-[var(--card-border-hover)] group-hover:text-[var(--foreground-muted)]">
          {skill.category}
        </span>
      </div>

      <h3 className="relative mt-5 font-display text-[length:var(--text-lg)] font-bold tracking-tight text-[var(--foreground)]">
        {skill.name}
      </h3>

      <div className="relative mt-auto pt-5">
        <div className="mb-2 flex items-center justify-between gap-3">
          <span className={`text-[length:var(--text-xs)] font-semibold uppercase tracking-[0.12em] ${levelTone(skill.level)}`}>
            {skill.level}
          </span>
          <span className="text-[length:var(--text-xs)] tabular-nums text-[var(--muted)]">{skill.score}%</span>
        </div>

        <div
          className="h-1.5 overflow-hidden rounded-full bg-[var(--surface-3)]"
          role="meter"
          aria-label={`Nivel de ${skill.name}`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={skill.score}
        >
          <div
            className="skill-meter-fill h-full origin-left rounded-full bg-[linear-gradient(90deg,var(--accent-deep),var(--accent))]"
            style={{ ["--skill-score" as string]: `${skill.score}%` }}
          />
        </div>
      </div>
    </article>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="cq w-full">
        <Reveal>
          <SectionHeader
            align="left"
            label="Skills"
            title="Stack con el que construyo"
            description="Herramientas seleccionadas para entregar landings rapidas, claras y orientadas a conversion."
            className="mb-0 max-w-xl"
          />
        </Reveal>

        <div className="cq-grid mt-14 sm:mt-16">
          {SKILLS.map((skill, i) => (
            <Reveal key={skill.name} className="h-full" delay={i * 40}>
              <SkillCard skill={skill} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
