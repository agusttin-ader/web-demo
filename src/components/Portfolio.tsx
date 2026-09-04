import {
  getDemoProjects,
  getFeaturedProject,
  getProductionProjects,
} from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectDemoCard } from "@/components/ProjectDemoCard";
import { ProjectRow } from "@/components/ProjectRow";
import { MotionReveal } from "@/components/motion/MotionReveal";
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
          title="Proyectos que generan consultas"
          description="Casos reales en producción y un demo para mostrar cómo trabajo. Problema, solución y resultado en cada uno."
        />

        <div className="portfolio-showcase mt-14 lg:mt-20">
          <MotionReveal variant="left" className="portfolio-showcase-featured">
            <ProjectCard project={featured} priority />
          </MotionReveal>

          <div className="portfolio-showcase-side">
            {productionRest.length > 0 ? (
              <MotionReveal variant="right" delay={40}>
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
                        <MotionReveal variant="right" delay={60 + index * 40}>
                          <ProjectRow project={project} />
                        </MotionReveal>
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionReveal>
            ) : null}

            {demos.length > 0 ? (
              <MotionReveal variant="scale" delay={120}>
                <div className="portfolio-side-block">
                  <div className="portfolio-side-header">
                    <p className="eyebrow-muted tracking-[0.12em]">Demo</p>
                    <p className="mt-1 text-[length:var(--text-sm)] text-[var(--muted)]">
                      Funcionalidad lista para adaptar a tu negocio
                    </p>
                  </div>
                  {demos.map((project) => (
                    <ProjectDemoCard key={project.id} project={project} />
                  ))}
                </div>
              </MotionReveal>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
