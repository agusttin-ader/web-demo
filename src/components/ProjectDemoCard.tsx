import { ExternalLink } from "@/components/ExternalLink";
import { ProjectMedia } from "@/components/ProjectMedia";
import type { Project } from "@/data/projects";
import type { PortfolioCopy } from "@/i18n/get-dictionary";
import { Reveal } from "@/components/Reveal";
import { DS_CLASS } from "@/lib/design-system";

type ProjectDemoCardProps = {
  project: Project;
  copy: PortfolioCopy;
};

export function ProjectDemoCard({ project, copy }: ProjectDemoCardProps) {
  const liveUrl = project.demo ?? project.link;

  return (
    <Reveal variant="up">
    <article className={`project-demo-card ${DS_CLASS.card}`}>
      <ProjectMedia project={project} variant="demo" showDemoBadge copy={copy} />
      <p className="project-card__meta">{copy.liveExample}</p>
      <h3>{project.title}</h3>
      <p className="project-card__description">{project.description}</p>
      <p className="project-card__meta">{project.stack}</p>
      <ul>
        {project.technologies.slice(0, 4).map((tech) => (
          <li key={tech}>
            <span className={DS_CLASS.tag}>{tech}</span>
          </li>
        ))}
      </ul>
      {liveUrl ? (
        <ExternalLink href={liveUrl} className={DS_CLASS.btnPrimary}>
          {copy.viewDemo}
        </ExternalLink>
      ) : (
        <a href="#contacto" className={DS_CLASS.btnOutline}>
          {copy.requestDemoAccess}
        </a>
      )}
    </article>
    </Reveal>
  );
}
