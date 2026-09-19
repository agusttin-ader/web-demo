import {
  getDemoProjects,
  getFeaturedProjects,
  getProductionProjects,
  withProjectCopy,
} from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectDemoCard } from "@/components/ProjectDemoCard";
import { ProjectRow } from "@/components/ProjectRow";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { interpolate } from "@/i18n/format";
import { getDictionary, getProjectCopy } from "@/i18n/get-dictionary";

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
    <section id="proyecto-real" className="section-shell">
      <div className="cq w-full">
        <SectionHeader
          label={t.portfolio.label}
          title={t.portfolio.title}
          description={t.portfolio.description}
        />

        <div className="portfolio-showcase mt-14 lg:mt-20">
          <div className="portfolio-showcase-featured">
            {featured.map((project, index) => (
              <Reveal key={project.id} variant="left" delay={index * 50}>
                <ProjectCard project={project} copy={t.portfolio} priority={index === 0} />
              </Reveal>
            ))}
          </div>

          <div className="portfolio-showcase-side">
            {productionRest.length > 0 ? (
              <Reveal variant="right" delay={40}>
                <div className="portfolio-side-block">
                  <div className="portfolio-side-header">
                    <p className="eyebrow-muted tracking-[0.12em]">{t.portfolio.inProduction}</p>
                    <p className="mt-1 text-[length:var(--text-sm)] text-[var(--muted)]">
                      {interpolate(t.portfolio.activeSites, { count: liveCount })}
                    </p>
                  </div>
                  <ul className="portfolio-row-list">
                    {productionRest.map((project, index) => (
                      <li key={project.id}>
                        <Reveal variant="right" delay={60 + index * 40}>
                          <ProjectRow project={project} copy={t.portfolio} />
                        </Reveal>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ) : null}

            {demos.length > 0 ? (
              <Reveal variant="scale" delay={120}>
                <div className="portfolio-side-block">
                  <div className="portfolio-side-header">
                    <p className="eyebrow-muted tracking-[0.12em]">{t.portfolio.demo}</p>
                    <p className="mt-1 text-[length:var(--text-sm)] text-[var(--muted)]">
                      {t.portfolio.demoHint}
                    </p>
                  </div>
                  {demos.map((project) => (
                    <ProjectDemoCard key={project.id} project={project} copy={t.portfolio} />
                  ))}
                </div>
              </Reveal>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
