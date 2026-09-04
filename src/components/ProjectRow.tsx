import { HiArrowUpRight } from "react-icons/hi2";
import { ExternalLink } from "@/components/ExternalLink";
import { ProjectMedia } from "@/components/ProjectMedia";
import type { Project } from "@/data/projects";

type ProjectRowProps = {
  project: Project;
};

export function ProjectRow({ project }: ProjectRowProps) {
  const liveUrl = project.demo ?? project.link;

  return (
    <article className="project-row group">
      <div className="project-row-media shrink-0 overflow-hidden rounded-[var(--radius-md)]">
        <ProjectMedia project={project} variant="row" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="project-badge project-badge-live">En producción</span>
          <span className="text-[length:var(--text-xs)] text-[var(--muted)]">{project.stack}</span>
        </div>
        <h3 className="mt-2 font-display text-[length:var(--text-lg)] font-bold tracking-tight text-[var(--foreground)] transition-colors group-hover:text-[var(--accent-bright)]">
          {project.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-[length:var(--text-sm)] leading-relaxed text-[var(--foreground-muted)]">
          {project.result}
        </p>
      </div>

      {liveUrl ? (
        <ExternalLink
          href={liveUrl}
          className="project-row-link focus-ring"
          aria-label={`Ver sitio de ${project.title}`}
          showHint={false}
        >
          <HiArrowUpRight className="h-4 w-4" aria-hidden />
        </ExternalLink>
      ) : null}
    </article>
  );
}
