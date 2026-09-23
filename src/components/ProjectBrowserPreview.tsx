import Image from "next/image";
import type { Project } from "@/data/projects";
import { interpolate } from "@/i18n/format";
import type { PortfolioCopy } from "@/i18n/get-dictionary";

function isScreenshotPath(src: string): boolean {
  const lower = src.toLowerCase();
  if (lower.includes("/logos/")) return false;
  return /\.(webp|jpg|jpeg|png)$/i.test(lower) && !lower.endsWith("-circle.png");
}

type ProjectBrowserPreviewProps = {
  project: Project;
  copy: PortfolioCopy;
  priority?: boolean;
};

export function ProjectBrowserPreview({ project, copy, priority = false }: ProjectBrowserPreviewProps) {
  const screenshot = isScreenshotPath(project.image) ? project.image : null;
  const alt = project.imageAlt ?? interpolate(copy.mediaAria, { title: project.title });

  const liveUrl = project.demo ?? project.link;
  let urlLabel = project.title;
  if (liveUrl) {
    try {
      urlLabel = new URL(liveUrl).hostname.replace(/^www\./, "");
    } catch {
      urlLabel = liveUrl;
    }
  }

  return (
    <figure className="project-browser">
      <div className="project-browser__chrome">
        <span className="project-browser__dot" />
        <span className="project-browser__dot" />
        <span className="project-browser__dot" />
        <span className="project-browser__url">{urlLabel}</span>
      </div>
      <div className={`project-browser__viewport project-browser__viewport--${project.mediaTheme}`}>
        {screenshot ? (
          <Image
            src={screenshot}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="project-browser__shot"
            priority={priority}
            loading={priority ? "eager" : "lazy"}
          />
        ) : (
          <div className="project-browser__brand">
            <Image
              src={project.logo}
              alt=""
              width={200}
              height={200}
              className="project-browser__logo"
              priority={priority}
            />
          </div>
        )}
      </div>
      <figcaption className="sr-only">{alt}</figcaption>
    </figure>
  );
}
