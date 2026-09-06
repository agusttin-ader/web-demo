import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { PLANS } from "@/data/plans";
import {
  SEO_FAQ,
  SEO_PRIMARY_KEYWORDS,
  SEO_SERVICE_AREAS,
} from "@/data/seo-content";
import {
  EMAIL,
  INSTAGRAM_URL,
  PHONE_E164,
  WHATSAPP_NUMBER,
} from "@/lib/constants";

export const SITE_URL = "https://www.agustinaderdev.com";
export const SITE_NAME = "Agustín Ader";
export const SITE_TAGLINE = "Desarrollo web y páginas web en Argentina";

export const DEFAULT_TITLE =
  "Desarrollo Web y Páginas Web en Argentina | Programación — Agustín Ader";
export const DEFAULT_DESCRIPTION =
  "Desarrollo web, programación y diseño de páginas web para negocios en Argentina. Landings rápidas, mobile-first y WhatsApp integrado. Presupuesto en 24 hs.";

export const OG_TITLE = "Desarrollo Web · Páginas Web · Programación | Agustín Ader";
export const OG_DESCRIPTION =
  "Freelance de desarrollo web en Argentina. Creo páginas web claras, rápidas y optimizadas para Google y WhatsApp.";

export const TWITTER_TITLE = DEFAULT_TITLE;
export const TWITTER_DESCRIPTION = DEFAULT_DESCRIPTION;

export const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Agustín Ader — Desarrollo web y páginas web para negocios en Argentina",
  type: "image/png",
} as const;

export const LOGO_URL = `${SITE_URL}/new-logo-transparent.webp`;
export { EMAIL, INSTAGRAM_URL, PHONE_E164 };
export const WHATSAPP_PROFILE = `https://wa.me/${WHATSAPP_NUMBER}`;

/** Fecha de última actualización del sitio (sitemap + schema). */
export const SITE_LAST_MODIFIED = "2026-03-08";

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "" : normalized}`;
}

const KEYWORDS = [
  ...SEO_PRIMARY_KEYWORDS,
  "desarrollo web buenos aires",
  "freelance programación web",
  "landing page argentina",
  "desarrollador next.js",
  "sitio web para pymes",
  "web whatsapp integrado",
  "seo técnico páginas web",
  "presupuesto página web",
  "programador web freelance argentina",
];

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  keywords: KEYWORDS,
  icons: {
    icon: [{ url: "/favicon-32.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon-32.png"],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "/",
    languages: {
      "es-AR": "/",
      es: "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: `${SITE_NAME} — Desarrollo web Argentina`,
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE.url,
        width: OG_IMAGE.width,
        height: OG_IMAGE.height,
        alt: OG_IMAGE.alt,
        type: OG_IMAGE.type,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TWITTER_TITLE,
    description: TWITTER_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE.url,
        alt: OG_IMAGE.alt,
        width: OG_IMAGE.width,
        height: OG_IMAGE.height,
      },
    ],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "geo.region": "AR",
    "geo.placename": "Buenos Aires, Argentina",
    "content-language": "es-AR",
    subject: "Desarrollo web, páginas web y programación para negocios en Argentina",
  },
  ...(googleVerification
    ? {
        verification: {
          google: googleVerification,
        },
      }
    : {}),
};

export const homeMetadata: Metadata = {
  ...siteMetadata,
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  alternates: {
    canonical: "/",
    languages: {
      "es-AR": "/",
      es: "/",
    },
  },
  openGraph: {
    ...siteMetadata.openGraph,
    url: SITE_URL,
    title: OG_TITLE,
    description: OG_DESCRIPTION,
  },
};

function buildFaqEntities() {
  return SEO_FAQ.map((item) => ({
    "@type": "Question" as const,
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer" as const,
      text: item.answer,
    },
  }));
}

function buildOfferCatalog() {
  return PLANS.map((plan) => ({
    "@type": "Offer" as const,
    "@id": `${SITE_URL}/#offer-${plan.id}`,
    name: `${plan.name} — ${plan.tagline}`,
    description: plan.features.join(". "),
    price: String(plan.priceUsd),
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/#planes`,
    validFrom: SITE_LAST_MODIFIED,
    itemOffered: {
      "@type": "Service" as const,
      name: `Desarrollo web — ${plan.name}`,
      description: plan.tagline,
      provider: { "@id": `${SITE_URL}/#person` },
      areaServed: SEO_SERVICE_AREAS.map((area) => ({
        "@type": "Place" as const,
        name: area,
      })),
      serviceType: [
        "Desarrollo web",
        "Página web",
        "Programación web",
        "Diseño web",
        "Landing page",
      ],
    },
  }));
}

export function buildJsonLd() {
  const projectEntities = projects.map((project, index) => ({
    "@type": "CreativeWork",
    "@id": `${SITE_URL}/#project-${project.id}`,
    position: index + 1,
    name: project.title,
    description: project.description,
    image: absoluteUrl(project.image),
    url: project.demo ?? project.link ?? SITE_URL,
    creator: { "@id": `${SITE_URL}/#person` },
    about: project.client,
    keywords: ["desarrollo web", "página web", project.client].join(", "),
  }));

  const faqEntities = buildFaqEntities();
  const offers = buildOfferCatalog();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: SITE_NAME,
        givenName: "Agustín",
        familyName: "Ader",
        url: SITE_URL,
        image: { "@id": `${SITE_URL}/#logo` },
        email: `mailto:${EMAIL}`,
        telephone: PHONE_E164,
        jobTitle: "Desarrollador web freelance",
        description: DEFAULT_DESCRIPTION,
        sameAs: [INSTAGRAM_URL, WHATSAPP_PROFILE],
        knowsAbout: [
          "Desarrollo web",
          "Programación web",
          "Páginas web",
          "Diseño web",
          "Landing pages",
          "Next.js",
          "React",
          "TypeScript",
          "SEO técnico",
          "Integración WhatsApp",
          "Diseño mobile-first",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Buenos Aires",
          addressRegion: "Buenos Aires",
          addressCountry: "AR",
        },
        worksFor: { "@id": `${SITE_URL}/#service` },
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#profilepage`,
        url: SITE_URL,
        name: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
        inLanguage: "es-AR",
        mainEntity: { "@id": `${SITE_URL}/#person` },
        isPartOf: { "@id": `${SITE_URL}/#website` },
        dateModified: SITE_LAST_MODIFIED,
      },
      {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#logo`,
        url: LOGO_URL,
        contentUrl: LOGO_URL,
        caption: `${SITE_NAME} — desarrollo web`,
        width: 256,
        height: 256,
      },
      {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#primaryimage`,
        url: absoluteUrl(OG_IMAGE.url),
        contentUrl: absoluteUrl(OG_IMAGE.url),
        width: OG_IMAGE.width,
        height: OG_IMAGE.height,
        caption: OG_IMAGE.alt,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        alternateName: [
          "Agustín Ader desarrollo web",
          "Agustin Ader páginas web",
        ],
        description: DEFAULT_DESCRIPTION,
        inLanguage: "es-AR",
        publisher: { "@id": `${SITE_URL}/#person` },
        copyrightHolder: { "@id": `${SITE_URL}/#person` },
        about: [
          { "@type": "Thing", name: "Desarrollo web" },
          { "@type": "Thing", name: "Páginas web" },
          { "@type": "Thing", name: "Programación web" },
        ],
        potentialAction: {
          "@type": "CommunicateAction",
          target: WHATSAPP_PROFILE,
          name: "Consultar por WhatsApp",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
        inLanguage: "es-AR",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#person` },
        primaryImageOfPage: { "@id": `${SITE_URL}/#primaryimage` },
        breadcrumb: { "@id": `${SITE_URL}/#breadcrumb` },
        mainEntity: { "@id": `${SITE_URL}/#faq` },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["#hero-heading", "#faq-heading", ".faq-answer p"],
        },
        dateModified: SITE_LAST_MODIFIED,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Preguntas frecuentes",
            item: `${SITE_URL}/#preguntas-frecuentes`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        url: `${SITE_URL}/#preguntas-frecuentes`,
        name: "Preguntas sobre desarrollo web y páginas web",
        inLanguage: "es-AR",
        isPartOf: { "@id": `${SITE_URL}/#webpage` },
        mainEntity: faqEntities,
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: `${SITE_NAME} — Desarrollo web y páginas web`,
        alternateName: "Agustín Ader desarrollo web freelance",
        description:
          "Servicio de desarrollo web, programación y diseño de páginas web para negocios en Argentina. Landings optimizadas para Google y WhatsApp.",
        url: SITE_URL,
        image: { "@id": `${SITE_URL}/#primaryimage` },
        logo: { "@id": `${SITE_URL}/#logo` },
        provider: { "@id": `${SITE_URL}/#person` },
        areaServed: SEO_SERVICE_AREAS.map((area) => ({
          "@type": "AdministrativeArea",
          name: area,
        })),
        serviceType: [
          "Desarrollo web",
          "Programación web",
          "Página web",
          "Diseño web",
          "Landing page",
          "SEO técnico",
          "Integración WhatsApp",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          "@id": `${SITE_URL}/#offers`,
          name: "Planes de desarrollo web",
          itemListElement: offers,
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer service",
            email: EMAIL,
            telephone: PHONE_E164,
            availableLanguage: ["Spanish", "es"],
            areaServed: "AR",
            url: WHATSAPP_PROFILE,
          },
        ],
        sameAs: [INSTAGRAM_URL, WHATSAPP_PROFILE],
      },
      {
        "@type": "OfferCatalog",
        "@id": `${SITE_URL}/#offers`,
        name: "Planes de páginas web",
        itemListElement: offers,
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/#projects`,
        name: "Proyectos de desarrollo web en producción",
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        numberOfItems: projectEntities.length,
        itemListElement: projectEntities.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item,
        })),
      },
    ],
  };
}
