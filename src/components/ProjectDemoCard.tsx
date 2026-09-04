import { HiArrowUpRight } from "react-icons/hi2";
import { ExternalLink } from "@/components/ExternalLink";
import { ProjectMedia } from "@/components/ProjectMedia";
import type { Project } from "@/data/projects";

type ProjectDemoCardProps = {
  project: Project;
};

export function ProjectDemoCard({ project }: ProjectDemoCardProps) {
  const liveUrl = project.demo ?? project.link;

  return (
    <article className="project-demo group relative flex h-full flex-col overflow-hidden">
      <div className="project-demo-media relative overflow-hidden">
        <ProjectMedia project={project} variant="demo" showDemoBadge />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="eyebrow-muted tracking-[0.12em]">Ejemplo interactivo</p>
        <h3 className="mt-2 font-display text-[length:var(--text-xl)] font-bold tracking-tight text-[var(--foreground)]">
          {project.title}
        </h3>
        <p className="mt-3 text-[length:var(--text-sm)] leading-relaxed text-[var(--foreground-muted)]">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-[var(--card-border)] bg-[var(--surface-2)] px-2.5 py-1 text-[length:var(--text-xs)] font-medium text-[var(--muted)]"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-5">
          {liveUrl ? (
            <ExternalLink href={liveUrl} className="apple-card-btn apple-card-btn-ghost focus-ring w-full sm:w-auto">
              Ver demo
              <HiArrowUpRight className="h-3.5 w-3.5 opacity-70" aria-hidden />
            </ExternalLink>
          ) : (
            <a href="#contacto" className="apple-card-btn apple-card-btn-ghost focus-ring w-full sm:w-auto">
              Pedir acceso al demo
              <HiArrowUpRight className="h-3.5 w-3.5 opacity-70" aria-hidden />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
