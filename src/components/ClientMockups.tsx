import { DeviceMockup } from "@/components/DeviceMockup";
import { ExternalLink } from "@/components/ExternalLink";
import { getAllProductionProjects } from "@/data/projects";

type ClientMockupsProps = {
  listClassName?: string;
  ariaLabel?: string;
  compact?: boolean;
};

function hostnameLabel(url?: string, fallback = "") {
  if (!url) return fallback;
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return fallback;
  }
}

export function ClientMockups({
  listClassName = "client-mockups",
  ariaLabel,
  compact = false,
}: ClientMockupsProps) {
  const sites = getAllProductionProjects().filter(
    (p) => p.mockupDesktop && p.mockupMobile,
  );

  return (
    <ul
      className={`${listClassName}${compact ? " client-mockups--compact" : ""}`}
      aria-label={ariaLabel}
    >
      {sites.map((project) => {
        const href = project.demo ?? project.link;
        const urlLabel = hostnameLabel(href, project.title);

        const body = (
          <>
            <DeviceMockup
              title={project.title}
              desktopSrc={project.mockupDesktop!}
              mobileSrc={project.mockupMobile!}
              urlLabel={urlLabel}
              className="client-mockups__devices"
            />
            <span className="client-mockups__caption">
              <span className="client-mockups__name">{project.title}</span>
              <span className="client-mockups__url">{urlLabel}</span>
            </span>
          </>
        );

        return (
          <li key={project.id} className="client-mockups__item">
            {href ? (
              <ExternalLink
                href={href}
                className="client-mockups__card"
                showHint={false}
                aria-label={project.title}
              >
                {body}
              </ExternalLink>
            ) : (
              <div className="client-mockups__card">{body}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
