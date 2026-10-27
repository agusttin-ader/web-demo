import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { SEO_LANDING_PAGES } from "@/data/seo-pages";
import { BRAND_LOGO_SRC } from "@/lib/constants";
import { absoluteUrl, OG_IMAGE, SITE_LAST_MODIFIED, SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectImages = projects.map((project) => absoluteUrl(project.image));

  return [
    {
      url: SITE_URL,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1,
      images: [absoluteUrl(OG_IMAGE.url), absoluteUrl(BRAND_LOGO_SRC), ...projectImages],
    },
    ...SEO_LANDING_PAGES.map((page) => ({
      url: absoluteUrl(`/${page.slug}`),
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];
}
