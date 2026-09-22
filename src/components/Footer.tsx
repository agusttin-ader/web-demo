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
    ...NAV_ITEMS.map((id) => ({ id, label: t.nav.items[id] })),
    { id: "preguntas-frecuentes", label: t.footer.faq },
    { id: "sobre-mi", label: t.footer.about },
    { id: "skills", label: t.footer.skills },
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
            <a href="#hero" className="site-footer__logo-link">
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
                {quickLinks.map(({ id, label }) => (
                  <li key={id}>
                    <a href={`#${id}`}>{label}</a>
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
