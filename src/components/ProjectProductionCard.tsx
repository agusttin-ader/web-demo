import Image from "next/image";
import { ExternalLink } from "@/components/ExternalLink";
import { Reveal } from "@/components/Reveal";
import type { Project } from "@/data/projects";
import { interpolate } from "@/i18n/format";
import type { PortfolioCopy } from "@/i18n/get-dictionary";

type ProjectProductionCardProps = {
  project: Project;
  copy: PortfolioCopy;
  index?: number;
  variant?: "grid" | "featured";
};

function ProductionCardStage({ project, priority = false }: { project: Project; priority?: boolean }) {
  const logoClass = [
    "production-card__logo",
    project.logoOnDark ? "production-card__logo--on-dark" : "",
    project.logoInvert ? "production-card__logo--invert" : "",
    project.logoScreenBlend ? "production-card__logo--medical" : "",
    project.logoCrisp ? "production-card__logo--crisp" : "",
    project.mediaTheme === "rhinoscopy" ? "production-card__logo--rhinoscopy" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`production-card__stage production-card__stage--${project.mediaTheme}`}>
      <div className="production-card__glow production-card__glow--a" aria-hidden />
      <div className="production-card__glow production-card__glow--b" aria-hidden />
      <div className="production-card__vignette" aria-hidden />
      <div className="production-card__logo-wrap">
        <Image
          src={project.logo}
          alt=""
          width={project.logoCrisp ? 512 : 256}
          height={project.logoCrisp ? 512 : 256}
          sizes={project.logoCrisp ? "7rem" : "(min-width: 1180px) 7rem, 6.5rem"}
          className={logoClass}
          loading={priority ? "eager" : "lazy"}
          priority={priority}
        />
      </div>
    </div>
  );
}

export function ProjectProductionCard({
  project,
  copy,
  index = 0,
  variant = "grid",
}: ProjectProductionCardProps) {
  const liveUrl = project.demo ?? project.link;
  const viewAria = interpolate(copy.viewSiteAria, { title: project.title });
  const isFeatured = variant === "featured";
  const cardClass = `production-card${isFeatured ? " production-card--featured" : ""}`;

  return (
    <Reveal variant="up" delay={index * 70}>
      <article className={cardClass}>
        {liveUrl ? (
          <ExternalLink
            href={liveUrl}
            className="production-card__media"
            showHint={false}
            aria-label={viewAria}
          >
            <ProductionCardStage project={project} priority={index === 0} />
          </ExternalLink>
        ) : (
          <div className="production-card__media">
            <ProductionCardStage project={project} priority={index === 0} />
          </div>
        )}

        <div className="production-card__body">
          {isFeatured ? <p className="production-card__eyebrow">{copy.featuredCase}</p> : null}
          <h3 className="production-card__title">{project.title}</h3>
          <p className="production-card__desc">{project.description}</p>
          <div className="production-card__foot">
            <p className="production-card__stack">{project.stack}</p>
            {liveUrl ? (
              <ExternalLink href={liveUrl} className="production-card__link" showHint={false}>
                {copy.viewSite}
              </ExternalLink>
            ) : null}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
