import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
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
  ];
}
