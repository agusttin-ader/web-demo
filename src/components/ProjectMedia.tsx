import Image from "next/image";
import type { Project } from "@/data/projects";
import { interpolate } from "@/i18n/format";
import type { PortfolioCopy } from "@/i18n/get-dictionary";
import { DS_CLASS } from "@/lib/design-system";

type ProjectMediaVariant = "featured" | "row" | "demo";

type ProjectMediaProps = {
  project: Project;
  variant: ProjectMediaVariant;
  copy: PortfolioCopy;
  priority?: boolean;
  showStack?: boolean;
  showDemoBadge?: boolean;
};

export function ProjectMedia({
  project,
  variant,
  copy,
  priority = false,
  showStack = false,
  showDemoBadge = false,
}: ProjectMediaProps) {
  const size = variant === "row" ? 72 : 160;

  return (
    <div
      className={`project-media project-media--${project.mediaTheme} project-media--${variant}`}
      role="img"
      aria-label={project.imageAlt ?? interpolate(copy.mediaAria, { title: project.title })}
    >
      <div className="project-media__logo">
        <Image
          src={project.logo}
          alt=""
          width={size}
          height={size}
          className="project-media__img"
          priority={priority}
          loading={priority ? "eager" : "lazy"}
        />
      </div>
      <div>
        {showDemoBadge ? <span className={DS_CLASS.tagAccent}>{copy.demo}</span> : null}
        {showStack && project.stack ? <p className="project-card__meta">{project.stack}</p> : null}
      </div>
    </div>
  );
}
