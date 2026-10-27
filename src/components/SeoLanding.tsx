import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Reveal } from "@/components/Reveal";
import { ExternalLink } from "@/components/ExternalLink";
import { Magnetic } from "@/components/Magnetic";
import { SeoHeroTitle } from "@/components/SeoHeroTitle";
import { FaqList } from "@/components/FaqList";
import type { SeoLandingPage } from "@/data/seo-pages";
import { DS_CLASS } from "@/lib/design-system";
import { whatsappUrl } from "@/lib/constants";
import {
  absoluteUrl,
  OG_IMAGE,
  SITE_LAST_MODIFIED,
  SITE_NAME,
  buildLandingJsonLd,
} from "@/lib/seo";

export function seoLandingMetadata(page: SeoLandingPage): Metadata {
  const url = absoluteUrl(`/${page.slug}`);
  return {
    title: { absolute: `${page.title} | ${SITE_NAME}` },
    description: page.description,
    keywords: [page.keyword, "desarrollo web", "desarrollo web argentina", "página web", SITE_NAME],
    robots: { index: true, follow: true },
    alternates: {
      canonical: `/${page.slug}`,
      languages: {
        "es-AR": `/${page.slug}`,
        es: `/${page.slug}`,
        "x-default": `/${page.slug}`,
      },
    },
    openGraph: {
      type: "article",
      locale: "es_AR",
      url,
      siteName: `${SITE_NAME} — Desarrollo web Argentina`,
      title: page.title,
      description: page.description,
      publishedTime: "2026-10-27",
      modifiedTime: SITE_LAST_MODIFIED,
      images: [{ url: OG_IMAGE.url, width: OG_IMAGE.width, height: OG_IMAGE.height, alt: OG_IMAGE.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [{ url: OG_IMAGE.url, alt: OG_IMAGE.alt }],
    },
  };
}

function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

function sectionIndex(n: number) {
  return String(n).padStart(2, "0");
}

export function SeoLanding({ page }: { page: SeoLandingPage }) {
  const whatsappHref = whatsappUrl(
    `Hola Agustín, vengo de ${page.keyword}. Quiero una web que me traiga más consultas.`,
  );
  const jsonLd = buildLandingJsonLd(page);
  const casesIndex = page.sections.length + 1;
  const faqIndex = page.sections.length + (page.cases?.length ? 2 : 1);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <main id="contenido" className="seo-page" aria-labelledby="seo-heading">
        <header className="seo-page__hero">
          <div className={`${DS_CLASS.container} seo-page__hero-inner`}>
            <div className="seo-page__hero-main">
              <Reveal variant="fade" initialVisible delay={0}>
                <nav className="seo-page__crumbs" aria-label="Miga de pan">
                  <ol>
                    <li>
                      <a href="/">Inicio</a>
                    </li>
                    <li aria-current="page">{page.label}</li>
                  </ol>
                </nav>
              </Reveal>
              <Reveal variant="fade" initialVisible delay={40}>
                <p className={DS_CLASS.eyebrow}>
                  <span className={DS_CLASS.eyebrowDot} aria-hidden />
                  {page.label}
                </p>
              </Reveal>
              <SeoHeroTitle id="seo-heading" text={page.h1} />
            </div>

            <aside className="seo-page__panel">
              <Reveal variant="up" initialVisible delay={120}>
                <p className="seo-page__lead">{page.lead}</p>
              </Reveal>
              <Reveal variant="up" initialVisible delay={180}>
                <div className="seo-page__actions">
                  <Magnetic className="seo-page__magnet">
                    <ExternalLink href={whatsappHref} className={DS_CLASS.btnPrimary} showHint={false}>
                      Hablar por WhatsApp
                    </ExternalLink>
                  </Magnetic>
                  <Magnetic className="seo-page__magnet" strength={0.14}>
                    <a href="/#planes" className={DS_CLASS.btnOutline}>
                      Ver planes
                    </a>
                  </Magnetic>
                </div>
              </Reveal>
            </aside>
          </div>
        </header>

        <article className={`${DS_CLASS.container} seo-page__body`}>
          {page.sections.map((section, index) => (
            <section key={section.title} className="seo-page__block">
              <Reveal className="seo-page__heading" variant="up" delay={index * 40}>
                <span className="seo-page__index" aria-hidden>
                  {sectionIndex(index + 1)}
                </span>
                <h2>{section.title}</h2>
              </Reveal>
              <Reveal className="seo-page__copy" variant="up" delay={index * 40 + 60}>
                {section.paragraphs.map((text) => (
                  <p key={text}>{text}</p>
                ))}
                {section.bullets ? (
                  <ul>
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </Reveal>
            </section>
          ))}

          {page.cases?.length ? (
            <section className="seo-page__block seo-page__block--cases" aria-labelledby="seo-cases-heading">
              <Reveal className="seo-page__heading" variant="up">
                <span className="seo-page__index" aria-hidden>
                  {sectionIndex(casesIndex)}
                </span>
                <h2 id="seo-cases-heading">Trabajos reales</h2>
              </Reveal>
              <Reveal className="seo-page__lede" variant="up" delay={50}>
                <p>Sitios y landings ya publicadas. Abrís el proyecto, no un mockup.</p>
              </Reveal>
              <ul className="seo-page__cases">
                {page.cases.map((item, index) => (
                  <li key={item.href}>
                    <Reveal variant="up" delay={index * 80}>
                      <ExternalLink href={item.href} className="seo-page__case" showHint={false}>
                        <span className="seo-page__case-kind">{item.kind}</span>
                        <span className="seo-page__case-name">{item.name}</span>
                        <p>{item.summary}</p>
                        <span className="seo-page__case-go">Ver sitio</span>
                      </ExternalLink>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <section className="seo-page__block seo-page__block--faq" aria-labelledby="seo-faq-heading">
            <Reveal className="seo-page__heading" variant="up">
              <span className="seo-page__index" aria-hidden>
                {sectionIndex(faqIndex)}
              </span>
              <h2 id="seo-faq-heading">Preguntas frecuentes</h2>
            </Reveal>
            <div className="seo-page__faq-wrap">
              <FaqList items={page.faqs} />
            </div>
          </section>

          <nav className="seo-page__related" aria-label="Más sobre desarrollo web">
            <p>Seguí leyendo</p>
            <ul>
              {page.related.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
              <li>
                <a href="/">Inicio</a>
              </li>
            </ul>
          </nav>
        </article>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
