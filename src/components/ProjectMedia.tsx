import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectMediaVariant = "featured" | "row" | "demo";

type ProjectMediaProps = {
  project: Project;
  variant: ProjectMediaVariant;
  priority?: boolean;
  showStack?: boolean;
  showDemoBadge?: boolean;
};

export function ProjectMedia({
  project,
  variant,
  priority = false,
  showStack = false,
  showDemoBadge = false,
}: ProjectMediaProps) {
  const theme = project.mediaTheme ?? "neutral";

  return (
    <div
      className={`project-media project-media--${theme} project-media--${variant}`}
      role="img"
      aria-label={project.imageAlt ?? `Identidad visual de ${project.title}`}
    >
      <div className="project-media-glow" aria-hidden />
      <div className="project-media-grid" aria-hidden />

      <div className="project-media-logo-shell">
        <Image
          src={project.logo}
          alt=""
          width={variant === "row" ? 72 : 160}
          height={variant === "row" ? 72 : 160}
          className="project-media-logo"
          sizes={variant === "row" ? "72px" : "160px"}
          priority={priority}
          loading={priority ? "eager" : "lazy"}
        />
      </div>

      {showDemoBadge ? (
        <span className="project-badge project-badge-demo project-media-badge">Demo</span>
      ) : null}

      {showStack && project.stack ? (
        <p className="project-media-stack">{project.stack}</p>
      ) : null}
    </div>
  );
}
