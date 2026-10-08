import {
  getAllProductionProjects,
  getDemoProjects,
  getFeaturedProjects,
  getProductionProjects,
  withProjectCopy,
} from "@/data/projects";
import { ProjectDemoCard } from "@/components/ProjectDemoCard";
import { ProjectProductionCard } from "@/components/ProjectProductionCard";
import { ExternalLink } from "@/components/ExternalLink";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { interpolate } from "@/i18n/format";
import { getDictionary, getProjectCopy } from "@/i18n/get-dictionary";
import { DS_CLASS } from "@/lib/design-system";
import { whatsappUrl } from "@/lib/constants";

export async function Portfolio() {
  const t = await getDictionary();
  const featuredBases = getFeaturedProjects();
  const restBases = getProductionProjects();
  const demosBase = getDemoProjects();
  const liveCount = getAllProductionProjects().length;

  if (!featuredBases.length && !restBases.length) return null;

  const spotlightBase = featuredBases[0];
  const spotlight = spotlightBase
    ? withProjectCopy(spotlightBase, getProjectCopy(t, spotlightBase.id))
    : null;
  const productionRest = restBases.map((project) =>
    withProjectCopy(project, getProjectCopy(t, project.id))
  );
  const demos = demosBase.map((project) => withProjectCopy(project, getProjectCopy(t, project.id)));

  return (
    <section id="proyecto-real" className={`portfolio ${DS_CLASS.sectionDark}`}>
      <div className={DS_CLASS.container}>
        <header className="portfolio__head">
          <SectionHeader
            label={t.portfolio.label}
            title={t.portfolio.title}
            description={t.portfolio.description}
          />
          <p className="portfolio__live-meta">
            {interpolate(t.portfolio.activeSites, { count: liveCount })}
          </p>
        </header>

        {spotlight ? (
          <div className="portfolio__featured">
            <ProjectProductionCard
              project={spotlight}
              copy={t.portfolio}
              index={0}
              variant="featured"
            />
          </div>
        ) : null}

        {productionRest.length > 0 ? (
          <ul className="portfolio__production-grid">
            {productionRest.map((project, index) => (
              <li key={project.id}>
                <ProjectProductionCard project={project} copy={t.portfolio} index={index + 1} />
              </li>
            ))}
          </ul>
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

        <Reveal variant="up" className="portfolio__nudge">
          <p className="portfolio__nudge-lead">
            {t.portfolio.nudge.lead}{" "}
            <span className="portfolio__nudge-accent">{t.portfolio.nudge.accent}</span>
          </p>
          <p className="portfolio__nudge-body">{t.portfolio.nudge.body}</p>
          <div className="portfolio__nudge-actions">
            <ExternalLink
              href={whatsappUrl(t.whatsapp.defaultMessage)}
              className={DS_CLASS.btnPrimary}
              showHint={false}
            >
              {t.portfolio.nudge.ctaWhatsapp}
            </ExternalLink>
            <a href="#servicios" className={DS_CLASS.btnOutline}>
              {t.portfolio.nudge.ctaServices}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
