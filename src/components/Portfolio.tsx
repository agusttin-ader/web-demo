import {
  getDemoProjects,
  getFeaturedProject,
  getProductionProjects,
} from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectDemoCard } from "@/components/ProjectDemoCard";
import { ProjectRow } from "@/components/ProjectRow";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function Portfolio() {
  const featured = getFeaturedProject();
  const productionRest = getProductionProjects();
  const demos = getDemoProjects();

  if (!featured) return null;

  return (
    <section id="proyecto-real" className="section-shell">
      <div className="cq w-full">
        <SectionHeader
          label="Portfolio"
          title="Trabajos que ya están online"
          description="Sitios reales con clientes y un demo para que veas cómo trabajo. En cada uno: qué había, qué hice y qué pasó."
        />

        <div className="portfolio-showcase mt-14 lg:mt-20">
          <Reveal variant="left" className="portfolio-showcase-featured">
            <ProjectCard project={featured} priority />
          </Reveal>

          <div className="portfolio-showcase-side">
            {productionRest.length > 0 ? (
              <Reveal variant="right" delay={40}>
                <div className="portfolio-side-block">
                  <div className="portfolio-side-header">
                    <p className="eyebrow-muted tracking-[0.12em]">En producción</p>
                    <p className="mt-1 text-[length:var(--text-sm)] text-[var(--muted)]">
                      {productionRest.length + 1} sitios activos con clientes reales
                    </p>
                  </div>
                  <ul className="portfolio-row-list">
                    {productionRest.map((project, index) => (
                      <li key={project.id}>
                        <Reveal variant="right" delay={60 + index * 40}>
                          <ProjectRow project={project} />
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
                    <p className="eyebrow-muted tracking-[0.12em]">Demo</p>
                    <p className="mt-1 text-[length:var(--text-sm)] text-[var(--muted)]">
                      Funcionalidad lista para adaptar a tu rubro
                    </p>
                  </div>
                  {demos.map((project) => (
                    <ProjectDemoCard key={project.id} project={project} />
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
