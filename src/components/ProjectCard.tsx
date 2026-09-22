import { FaGithub } from "react-icons/fa6";
import { ExternalLink } from "@/components/ExternalLink";
import { ProjectMedia } from "@/components/ProjectMedia";
import type { Project } from "@/data/projects";
import type { PortfolioCopy } from "@/i18n/get-dictionary";
import { Reveal } from "@/components/Reveal";
import { DS_CLASS } from "@/lib/design-system";

type ProjectCardProps = {
  project: Project;
  copy: PortfolioCopy;
  priority?: boolean;
};

export function ProjectCard({ project, copy, priority = false }: ProjectCardProps) {
  const demoUrl = project.demo ?? project.link;
  const technologies = project.technologies?.length ? project.technologies : project.tags ?? [];
  const badgeLabel = project.type === "demo" ? copy.demo : copy.inProduction;

  return (
    <Reveal variant="up">
      <article className="project-card project-card--case">
        <div className="project-card__intro">
          <ProjectMedia project={project} variant="featured" priority={priority} showStack copy={copy} />

          <div className="project-card__identity">
            <div className="project-card__badges">
              <span className={DS_CLASS.tagAccent}>{badgeLabel}</span>
              <span className={DS_CLASS.tag}>{copy.featuredCase}</span>
            </div>

            <h3>{project.title}</h3>
            <p className="project-card__description">{project.description}</p>
          </div>
        </div>

        {technologies.length ? (
          <div className="project-card__tech">
            <p className="project-card__meta">{copy.technologies}</p>
            <ul>
              {technologies.map((tech) => (
                <li key={tech}>
                  <span className={DS_CLASS.tag}>{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="project-card__actions">
          {demoUrl ? (
            <ExternalLink href={demoUrl} className={DS_CLASS.btnPrimary}>
              {project.type === "demo" ? copy.viewDemo : copy.viewSite}
            </ExternalLink>
          ) : null}
          {project.github ? (
            <ExternalLink href={project.github} className={DS_CLASS.btnOutline}>
              <FaGithub aria-hidden />
              GitHub
            </ExternalLink>
          ) : (
            <p className="project-card__meta">{copy.privateRepo}</p>
          )}
        </div>
      </article>
    </Reveal>
  );
}
