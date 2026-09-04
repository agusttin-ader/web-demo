import { FaGithub } from "react-icons/fa6";
import { ExternalLink } from "@/components/ExternalLink";
import { IconExternal } from "@/components/icons";
import { ProjectMedia } from "@/components/ProjectMedia";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
};

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const demoUrl = project.demo ?? project.link;
  const technologies = project.technologies?.length ? project.technologies : project.tags ?? [];
  const badgeLabel = project.type === "demo" ? "Demo" : "En producción";
  const badgeClass = project.type === "demo" ? "project-badge-demo" : "project-badge-live";

  return (
    <article className="apple-card group relative flex h-full flex-col overflow-hidden">
      <div className="apple-card-media relative overflow-hidden">
        <ProjectMedia project={project} variant="featured" priority={priority} showStack />
      </div>

      <div className="flex flex-1 flex-col px-4 pb-6 pt-5 sm:px-8 sm:pb-8 sm:pt-7">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`project-badge ${badgeClass}`}>{badgeLabel}</span>
          <p className="eyebrow-muted tracking-[0.14em]">Caso destacado</p>
        </div>
        <h3 className="mt-3 font-display text-[clamp(1.5rem,3vw,1.85rem)] font-bold tracking-tight text-[var(--foreground)]">
          {project.title}
        </h3>
        <p className="mt-1 text-[length:var(--text-sm)] text-[var(--foreground-muted)]">{project.client}</p>

        <dl className="mt-6 space-y-4 border-t border-[var(--section-divider)] pt-5">
          <div>
            <dt className="eyebrow-muted tracking-[0.12em]">Problema</dt>
            <dd className="mt-1.5 text-[length:var(--text-sm)] leading-relaxed text-[var(--foreground-muted)]">
              {project.problem}
            </dd>
          </div>
          <div>
            <dt className="eyebrow-muted tracking-[0.12em]">Solucion</dt>
            <dd className="mt-1.5 text-[length:var(--text-sm)] leading-relaxed text-[var(--foreground-muted)]">
              {project.solution}
            </dd>
          </div>
          <div>
            <dt className="text-[length:var(--text-xs)] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
              Resultado
            </dt>
            <dd className="mt-1.5 text-[length:var(--text-sm)] leading-relaxed text-[var(--foreground)]">
              {project.result}
            </dd>
          </div>
        </dl>

        {technologies.length ? (
          <div className="mt-6">
            <p className="eyebrow-muted tracking-[0.12em]">Tecnologias</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-[var(--card-border)] bg-[var(--surface-2)] px-3 py-1 text-[length:var(--text-xs)] font-medium text-[var(--foreground-muted)] transition-colors duration-300 group-hover:border-[var(--card-border-hover)] group-hover:text-[var(--foreground)]"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mt-auto flex flex-wrap gap-3 pt-7">
          {demoUrl ? (
            <ExternalLink href={demoUrl} className="apple-card-btn apple-card-btn-primary focus-ring">
              {project.type === "demo" ? "Ver demo" : "Ver sitio"}
              <IconExternal className="mi-icon mi-icon-external h-3 w-3 opacity-70" aria-hidden />
            </ExternalLink>
          ) : null}

          {project.github ? (
            <ExternalLink href={project.github} className="apple-card-btn apple-card-btn-ghost focus-ring">
              <FaGithub className="h-3.5 w-3.5" aria-hidden />
              GitHub
            </ExternalLink>
          ) : (
            <p className="text-[length:var(--text-sm)] text-[var(--muted)]">Repositorio privado</p>
          )}
        </div>
      </div>
    </article>
  );
}
