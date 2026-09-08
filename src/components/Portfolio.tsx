import {
  getDemoProjects,
  getFeaturedProject,
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
  const featuredBase = getFeaturedProject();
  const productionRestBase = getProductionProjects();
  const demosBase = getDemoProjects();

  if (!featuredBase) return null;

  const featured = withProjectCopy(featuredBase, getProjectCopy(t, featuredBase.id));
  const productionRest = productionRestBase.map((project) =>
    withProjectCopy(project, getProjectCopy(t, project.id))
  );
  const demos = demosBase.map((project) => withProjectCopy(project, getProjectCopy(t, project.id)));

  return (
    <section id="proyecto-real" className="section-shell">
      <div className="cq w-full">
        <SectionHeader
          label={t.portfolio.label}
          title={t.portfolio.title}
          description={t.portfolio.description}
        />

        <div className="portfolio-showcase mt-14 lg:mt-20">
          <Reveal variant="left" className="portfolio-showcase-featured">
            <ProjectCard project={featured} copy={t.portfolio} priority />
          </Reveal>

          <div className="portfolio-showcase-side">
            {productionRest.length > 0 ? (
              <Reveal variant="right" delay={40}>
                <div className="portfolio-side-block">
                  <div className="portfolio-side-header">
                    <p className="eyebrow-muted tracking-[0.12em]">{t.portfolio.inProduction}</p>
                    <p className="mt-1 text-[length:var(--text-sm)] text-[var(--muted)]">
                      {interpolate(t.portfolio.activeSites, { count: productionRest.length + 1 })}
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
