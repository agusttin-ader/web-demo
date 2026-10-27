import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { ExternalLink } from "@/components/ExternalLink";
import { IconWhatsApp } from "@/components/icons";
import { interpolate } from "@/i18n/format";
import { getDictionary } from "@/i18n/get-dictionary";
import { BRAND_LOGO_SRC, EMAIL, INSTAGRAM_URL, LINKEDIN_URL, NAV_ITEMS, whatsappUrl } from "@/lib/constants";
import { DS_CLASS } from "@/lib/design-system";

export async function Footer() {
  const t = await getDictionary();
  const year = new Date().getFullYear();
  const whatsappHref = whatsappUrl(t.whatsapp.defaultMessage);

  const quickLinks = [
    ...NAV_ITEMS.map((id) => ({ href: `/#${id}`, label: t.nav.items[id] })),
    { href: "/#preguntas-frecuentes", label: t.footer.faq },
    { href: "/#sobre-mi", label: t.footer.about },
    { href: "/#overview", label: t.overview.title },
  ] as const;

  const seoLinks = [
    { href: "/desarrollo-web", label: t.footer.seoWebDev },
    { href: "/pagina-web", label: t.footer.seoWebsite },
    { href: "/landing-page", label: t.footer.seoLanding },
    { href: "/desarrollador-web-freelance", label: t.footer.seoFreelance },
    { href: "/sitio-web-para-medicos", label: t.footer.seoMedicos },
    { href: "/sitio-web-turismo", label: t.footer.seoTurismo },
    { href: "/desarrollo-web-buenos-aires", label: t.footer.seoBuenosAires },
    { href: "/pagina-web-whatsapp", label: t.footer.seoWhatsapp },
    { href: "/sitio-web-multiidioma", label: t.footer.seoI18n },
    { href: "/pagina-web-comercio", label: t.footer.seoShop },
  ] as const;

  const socialLinks = [
    { id: "linkedin", href: LINKEDIN_URL, label: t.footer.linkedinAria, variant: "linkedin", icon: <FaLinkedin aria-hidden /> },
    { id: "instagram", href: INSTAGRAM_URL, label: t.footer.instagramAria, variant: "instagram", icon: <FaInstagram aria-hidden /> },
    { id: "whatsapp", href: whatsappHref, label: t.footer.whatsappAria, variant: "whatsapp", icon: <IconWhatsApp aria-hidden /> },
  ] as const;

  return (
    <footer className={`site-footer ${DS_CLASS.sectionDark}`} role="contentinfo">
      <div className={DS_CLASS.container}>
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <a href="/" className="site-footer__logo-link">
              <Image src={BRAND_LOGO_SRC} alt="" width={40} height={40} loading="lazy" />
              <span>Agustin Ader</span>
            </a>
            <p>{t.footer.blurb}</p>

            <ul className="site-footer__social" aria-label={t.common.socialAria}>
              {socialLinks.map((item) => (
                <li key={item.id}>
                  <ExternalLink
                    href={item.href}
                    aria-label={item.label}
                    showHint={false}
                    className={`site-footer__social-link site-footer__social-link--${item.variant}`}
                  >
                    {item.icon}
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__meta">
            <h2>{t.footer.contact}</h2>
            <ul>
              <li>
                <span>{t.footer.email}</span>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
              <li>
                <span>{t.footer.location}</span>
                <p>{t.footer.locationValue}</p>
              </li>
              <li>
                <span>{t.footer.availability}</span>
                <p>{t.footer.available}</p>
              </li>
            </ul>
          </div>

          <div className="site-footer__links">
            <h2>{t.footer.quickLinks}</h2>
            <nav aria-label={t.footer.quickAria}>
              <ul>
                {quickLinks.map(({ href, label }) => (
                  <li key={href}>
                    <a href={href}>{label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="site-footer__links site-footer__links--seo">
            <h2>{t.footer.seoHeading}</h2>
            <nav aria-label={t.footer.seoAria}>
              <ul>
                {seoLinks.map(({ href, label }) => (
                  <li key={href}>
                    <a href={href}>{label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>{interpolate(t.footer.rights, { year })}</p>
          <p>{t.footer.credit}</p>
        </div>
      </div>
    </footer>
  );
}
