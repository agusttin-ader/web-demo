import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function Portfolio() {
  return (
    <section id="proyecto-real" className="section-shell">
      <div className="cq w-full">
        <Reveal>
          <SectionHeader
            label="Portfolio"
            title="Proyectos en produccion"
            description="Casos reales con problema, solucion y resultado. Webs claras, rapidas y pensadas para convertir."
          />
        </Reveal>

        <div className="cq-grid-portfolio mx-auto mt-12 max-w-6xl lg:mt-16">
          {projects.map((project, index) => (
            <Reveal key={project.id} variant={index % 2 === 0 ? "left" : "right"} delay={index * 80}>
              <ProjectCard project={project} priority={index === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
