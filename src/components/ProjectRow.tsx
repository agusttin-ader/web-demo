import { ExternalLink } from "@/components/ExternalLink";
import { ProjectMedia } from "@/components/ProjectMedia";
import type { Project } from "@/data/projects";
import { interpolate } from "@/i18n/format";
import type { PortfolioCopy } from "@/i18n/get-dictionary";
import { Reveal } from "@/components/Reveal";

type ProjectRowProps = {
  project: Project;
  copy: PortfolioCopy;
};

export function ProjectRow({ project, copy }: ProjectRowProps) {
  const liveUrl = project.demo ?? project.link;

  return (
    <Reveal variant="up">
      <article className="project-row project-row--list">
        <ProjectMedia project={project} variant="row" copy={copy} />
        <div className="project-row__main">
          <h3>{project.title}</h3>
          <p className="project-card__description">{project.description}</p>
          <p className="project-card__meta">{project.stack}</p>
        </div>
        {liveUrl ? (
          <ExternalLink
            href={liveUrl}
            showHint={false}
            className="project-row__cta"
            aria-label={interpolate(copy.viewSiteAria, { title: project.title })}
          >
            {copy.viewSite}
          </ExternalLink>
        ) : null}
      </article>
    </Reveal>
  );
}
