import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { isPlanPromoActive, PLAN_PROMO, PLANS, resolvePlanPricing } from "@/data/plans";
import {
  SEO_FAQ,
  SEO_PRIMARY_KEYWORDS,
  SEO_SERVICE_AREAS,
} from "@/data/seo-content";
import { SEO_LANDING_PAGES, type SeoLandingPage } from "@/data/seo-pages";
import {
  EMAIL,
  INSTAGRAM_URL,
  BRAND_LOGO_SRC,
  LINKEDIN_URL,
  PHONE_E164,
  WHATSAPP_NUMBER,
} from "@/lib/constants";

export const SITE_URL = "https://www.agustinaderdev.com";
export const SITE_NAME = "Agustín Ader";
export const SITE_TAGLINE = "Desarrollo web y páginas web en Argentina";

export const DEFAULT_TITLE =
  "Desarrollo Web en Argentina | Freelance · Landings y Páginas Web";
export const DEFAULT_DESCRIPTION =
  "Desarrollador web freelance en Argentina. Landings y páginas web rápidas, mobile-first, con SEO y WhatsApp. Essential desde USD 225. Presupuesto en 24 hs.";

export const OG_TITLE = "Desarrollo Web en Argentina | Agustín Ader";
export const OG_DESCRIPTION =
  "Freelance de desarrollo web en Buenos Aires. Landings y páginas web que convierten visitas en consultas. Presupuesto claro en 24 hs.";

export const TWITTER_TITLE = DEFAULT_TITLE;
export const TWITTER_DESCRIPTION = DEFAULT_DESCRIPTION;

export const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Agustín Ader — Desarrollo web y páginas web para negocios en Argentina",
  type: "image/png",
} as const;

export const LOGO_URL = `${SITE_URL}${BRAND_LOGO_SRC}`;
export { EMAIL, INSTAGRAM_URL, PHONE_E164 };
export const WHATSAPP_PROFILE = `https://wa.me/${WHATSAPP_NUMBER}`;

/** Fecha de última actualización del sitio (sitemap + schema). */
export const SITE_LAST_MODIFIED = "2026-10-27";

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "" : normalized}`;
}

const KEYWORDS = [
  ...SEO_PRIMARY_KEYWORDS,
  "desarrollo web buenos aires",
  "desarrollo web argentina precio",
  "desarrollador web buenos aires",
  "desarrollador web freelance argentina",
  "página web para negocios",
  "pagina web para negocios",
  "crear pagina web argentina",
  "cuanto cuesta una pagina web",
  "freelance programación web",
  "landing page argentina",
  "landing page para conseguir clientes",
  "desarrollador next.js",
  "sitio web para pymes",
  "web whatsapp integrado",
  "seo técnico páginas web",
  "presupuesto página web",
  "programador web freelance argentina",
  "sitio web para médicos",
  "pagina web para medicos",
  "sitio web rinoplastia",
  "sitio web turismo argentina",
  "pagina web turismo",
  "desarrollo web buenos aires freelance",
  "pagina web con whatsapp",
  "sitio web multiidioma",
  "pagina web para comercios",
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
      "x-default": "/",
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
      "x-default": "/",
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
  const promoActive = isPlanPromoActive();
  return SEO_FAQ.map((item) => ({
    "@type": "Question" as const,
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer" as const,
      text: promoActive && "answerPromo" in item && item.answerPromo ? item.answerPromo : item.answer,
    },
  }));
}

function buildPlanOffers() {
  const promoActive = isPlanPromoActive();
  return PLANS.map((plan) => {
    const pricing = resolvePlanPricing(plan, promoActive);
    return {
      "@type": "Offer" as const,
      "@id": `${SITE_URL}/#offer-${plan.id}`,
      name: `Plan ${plan.name}`,
      description: plan.tagline,
      url: `${SITE_URL}/#planes`,
      price: String(pricing.priceUsd),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      ...(promoActive && pricing.discountPercent
        ? { priceValidUntil: PLAN_PROMO.end }
        : {}),
    };
  });
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
        knowsLanguage: ["es-AR", "en", "pt-BR"],
        description: DEFAULT_DESCRIPTION,
        sameAs: [LINKEDIN_URL, INSTAGRAM_URL, WHATSAPP_PROFILE],
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
        hasPart: SEO_LANDING_PAGES.map((page) => ({
          "@type": "WebPage" as const,
          "@id": `${SITE_URL}/${page.slug}#webpage`,
          url: `${SITE_URL}/${page.slug}`,
          name: page.title,
        })),
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
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": `${SITE_URL}/#service`,
        name: `${SITE_NAME} — Desarrollo web y páginas web`,
        alternateName: [
          "Agustín Ader desarrollo web freelance",
          "Desarrollo web Argentina",
        ],
        description:
          "Servicio de desarrollo web, programación y diseño de páginas web para negocios en Argentina. Landings optimizadas para Google y WhatsApp.",
        url: SITE_URL,
        image: { "@id": `${SITE_URL}/#primaryimage` },
        logo: { "@id": `${SITE_URL}/#logo` },
        provider: { "@id": `${SITE_URL}/#person` },
        founder: { "@id": `${SITE_URL}/#person` },
        priceRange: "USD 0–500",
        currenciesAccepted: "USD",
        paymentAccepted: "Transferencia bancaria, USD",
        geo: {
          "@type": "GeoCoordinates",
          latitude: -34.6037,
          longitude: -58.3816,
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Buenos Aires",
          addressRegion: "Buenos Aires",
          addressCountry: "AR",
        },
        areaServed: SEO_SERVICE_AREAS.map((area) => ({
          "@type": "AdministrativeArea",
          name: area,
        })),
        knowsLanguage: ["es-AR", "en", "pt-BR"],
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
          name: "Planes de desarrollo web",
          itemListElement: buildPlanOffers(),
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            email: EMAIL,
            telephone: PHONE_E164,
            availableLanguage: ["Spanish", "English", "Portuguese"],
            areaServed: "AR",
            url: WHATSAPP_PROFILE,
          },
        ],
        sameAs: [LINKEDIN_URL, INSTAGRAM_URL, WHATSAPP_PROFILE],
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

const SITE_GRAPH_IDS = [
  `${SITE_URL}/#person`,
  `${SITE_URL}/#logo`,
  `${SITE_URL}/#primaryimage`,
  `${SITE_URL}/#website`,
  `${SITE_URL}/#service`,
];

export function buildSiteJsonLd() {
  const full = buildJsonLd();
  return {
    "@context": "https://schema.org",
    "@graph": full["@graph"].filter((node) =>
      SITE_GRAPH_IDS.includes((node as { "@id"?: string })["@id"] ?? ""),
    ),
  };
}

export function buildHomeJsonLd() {
  const full = buildJsonLd();
  return {
    "@context": "https://schema.org",
    "@graph": full["@graph"].filter(
      (node) => !SITE_GRAPH_IDS.includes((node as { "@id"?: string })["@id"] ?? ""),
    ),
  };
}

export function buildLandingJsonLd(page: SeoLandingPage) {
  const url = `${SITE_URL}/${page.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: page.title,
        description: page.description,
        inLanguage: "es-AR",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@type": "Thing", name: page.keyword },
        primaryImageOfPage: { "@id": `${SITE_URL}/#primaryimage` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        dateModified: SITE_LAST_MODIFIED,
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", ".seo-page__lead"],
        },
        mainEntity: { "@id": `${url}#service` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
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
            name: page.label,
            item: url,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        url,
        inLanguage: "es-AR",
        isPartOf: { "@id": `${url}#webpage` },
        mainEntity: page.faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: page.h1,
        serviceType: page.keyword,
        provider: { "@id": `${SITE_URL}/#person` },
        areaServed: { "@type": "Country", name: "Argentina" },
        url,
      },
      ...(page.cases?.length
        ? [
            {
              "@type": "ItemList" as const,
              "@id": `${url}#cases`,
              name: "Trabajos reales",
              numberOfItems: page.cases.length,
              itemListElement: page.cases.map((item, index) => ({
                "@type": "ListItem" as const,
                position: index + 1,
                url: item.href,
                name: item.name,
                description: item.summary,
              })),
            },
          ]
        : []),
    ],
  };
}
