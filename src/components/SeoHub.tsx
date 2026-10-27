import { getDictionary } from "@/i18n/get-dictionary";
import { DS_CLASS } from "@/lib/design-system";
import { Reveal } from "@/components/Reveal";

const CORE_ITEMS = [
  { href: "/desarrollo-web", labelKey: "seoWebDev", descKey: "webDev" },
  { href: "/pagina-web", labelKey: "seoWebsite", descKey: "website" },
  { href: "/landing-page", labelKey: "seoLanding", descKey: "landing" },
  { href: "/desarrollador-web-freelance", labelKey: "seoFreelance", descKey: "freelance" },
] as const;

const NICHE_ITEMS = [
  { href: "/sitio-web-para-medicos", labelKey: "seoMedicos", descKey: "medicos" },
  { href: "/sitio-web-turismo", labelKey: "seoTurismo", descKey: "turismo" },
  { href: "/desarrollo-web-buenos-aires", labelKey: "seoBuenosAires", descKey: "buenosAires" },
  { href: "/pagina-web-whatsapp", labelKey: "seoWhatsapp", descKey: "whatsapp" },
  { href: "/sitio-web-multiidioma", labelKey: "seoI18n", descKey: "i18n" },
  { href: "/pagina-web-comercio", labelKey: "seoShop", descKey: "shop" },
] as const;

export async function SeoHub() {
  const t = await getDictionary();

  return (
    <section className={`seo-hub ${DS_CLASS.sectionLight}`} aria-labelledby="seo-hub-heading">
      <div className={`${DS_CLASS.container} seo-hub__layout`}>
        <header className="seo-hub__intro">
          <Reveal variant="up">
            <p className={DS_CLASS.eyebrow}>
              <span className={DS_CLASS.eyebrowDot} aria-hidden />
              {t.seoHub.label}
            </p>
            <h2 id="seo-hub-heading">{t.seoHub.title}</h2>
            <p className="seo-hub__lead">{t.seoHub.body}</p>
          </Reveal>
        </header>

        <div className="seo-hub__panels">
          <nav aria-label={t.seoHub.aria}>
            <ul className="seo-hub__cards">
              {CORE_ITEMS.map((item, index) => (
                <li key={item.href}>
                  <Reveal variant="up" delay={index * 55}>
                    <a href={item.href} className="seo-hub__card">
                      <h3>{t.footer[item.labelKey]}</h3>
                      <p>{t.seoHub.items[item.descKey]}</p>
                      <span className="seo-hub__card-go">{t.seoHub.go}</span>
                    </a>
                  </Reveal>
                </li>
              ))}
            </ul>
          </nav>

          <p className="seo-hub__sub">{t.seoHub.nicheTitle}</p>
          <nav aria-label={t.seoHub.nicheAria}>
            <ul className="seo-hub__cards">
              {NICHE_ITEMS.map((item, index) => (
                <li key={item.href}>
                  <Reveal variant="up" delay={index * 45}>
                    <a href={item.href} className="seo-hub__card">
                      <h3>{t.footer[item.labelKey]}</h3>
                      <p>{t.seoHub.items[item.descKey]}</p>
                      <span className="seo-hub__card-go">{t.seoHub.go}</span>
                    </a>
                  </Reveal>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
