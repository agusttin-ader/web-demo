import {
  getDemoProjects,
  getFeaturedProjects,
  getProductionProjects,
  withProjectCopy,
} from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectDemoCard } from "@/components/ProjectDemoCard";
import { ProjectRow } from "@/components/ProjectRow";
import { SectionHeader } from "@/components/SectionHeader";
import { interpolate } from "@/i18n/format";
import { getDictionary, getProjectCopy } from "@/i18n/get-dictionary";
import { DS_CLASS } from "@/lib/design-system";

export async function Portfolio() {
  const t = await getDictionary();
  const featuredBases = getFeaturedProjects();
  const productionRestBase = getProductionProjects();
  const demosBase = getDemoProjects();

  if (!featuredBases.length) return null;

  const featured = featuredBases.map((project) =>
    withProjectCopy(project, getProjectCopy(t, project.id))
  );
  const productionRest = productionRestBase.map((project) =>
    withProjectCopy(project, getProjectCopy(t, project.id))
  );
  const demos = demosBase.map((project) => withProjectCopy(project, getProjectCopy(t, project.id)));
  const liveCount = featured.length + productionRest.length;

  return (
    <section id="proyecto-real" className={`portfolio ${DS_CLASS.sectionDark}`}>
      <div className={DS_CLASS.container}>
        <div className="portfolio__header">
          <SectionHeader
            label={t.portfolio.label}
            title={t.portfolio.title}
            description={t.portfolio.description}
          />
        </div>

        <div className="portfolio__showcase">
          {featured.map((project, index) => (
            <ProjectCard key={project.id} project={project} copy={t.portfolio} priority={index === 0} />
          ))}
        </div>

        {productionRest.length > 0 ? (
          <div className="portfolio__block">
            <p className="portfolio__block-title">{t.portfolio.inProduction}</p>
            <p className="portfolio__block-meta">{interpolate(t.portfolio.activeSites, { count: liveCount })}</p>
            <ul className="portfolio__production-list">
              {productionRest.map((project) => (
                <li key={project.id}>
                  <ProjectRow project={project} copy={t.portfolio} />
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {demos.length > 0 ? (
          <div className="portfolio__block">
            <p className="portfolio__block-title">{t.portfolio.demo}</p>
            <p className="portfolio__block-meta">{t.portfolio.demoHint}</p>
            <div className="portfolio__demos">
              {demos.map((project) => (
                <ProjectDemoCard key={project.id} project={project} copy={t.portfolio} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
