import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import { ExternalLink } from "@/components/ExternalLink";
import { IconWhatsApp } from "@/components/icons";
import { interpolate } from "@/i18n/format";
import { getDictionary } from "@/i18n/get-dictionary";
import { EMAIL, INSTAGRAM_URL, NAV_ITEMS, whatsappUrl } from "@/lib/constants";

export async function Footer() {
  const t = await getDictionary();
  const year = new Date().getFullYear();
  const whatsappHref = whatsappUrl(t.whatsapp.defaultMessage);

  const quickLinks = [
    ...NAV_ITEMS.map(({ id }) => ({ id, label: t.nav.items[id] })),
    { id: "preguntas-frecuentes", label: t.footer.faq },
    { id: "sobre-mi", label: t.footer.about },
    { id: "skills", label: t.footer.skills },
  ] as const;

  return (
    <footer
      className="border-t border-[var(--section-divider)] pt-[clamp(3rem,7vw,5rem)] pb-[calc(2.5rem+env(safe-area-inset-bottom,0px))]"
      role="contentinfo"
    >
      <div className="site-container">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.9fr] lg:gap-16">
          <div>
            <a href="#hero" className="focus-ring inline-flex items-center gap-3 rounded-[var(--radius)]">
              <Image
                src="/new-logo-transparent.webp"
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
                sizes="40px"
                loading="lazy"
              />
              <span className="font-display text-[length:var(--text-lg)] font-bold tracking-tight text-[var(--foreground)]">
                Agustin Ader
              </span>
            </a>
            <p className="mt-5 max-w-sm text-[length:var(--text-sm)] leading-relaxed text-[var(--foreground-muted)]">
              {t.footer.blurb}
            </p>

            <ul className="mt-6 flex items-center gap-3" aria-label={t.common.socialAria}>
              <li>
                <ExternalLink href={INSTAGRAM_URL} className="footer-social focus-ring" aria-label={t.footer.instagramAria}>
                  <FaInstagram className="h-4 w-4" aria-hidden />
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href={whatsappHref} className="footer-social focus-ring" aria-label={t.footer.whatsappAria}>
                  <IconWhatsApp className="h-4 w-4" aria-hidden />
                </ExternalLink>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="eyebrow-muted tracking-[0.14em]">{t.footer.contact}</h2>
            <ul className="mt-5 space-y-4 text-[length:var(--text-sm)]">
              <li>
                <span className="block text-[var(--muted)]">{t.footer.email}</span>
                <a
                  href={`mailto:${EMAIL}`}
                  className="link-brand focus-ring mt-1 inline-block break-all rounded-sm text-[var(--foreground)]"
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                <span className="block text-[var(--muted)]">{t.footer.location}</span>
                <p className="mt-1 text-[var(--foreground)]">{t.footer.locationValue}</p>
              </li>
              <li>
                <span className="block text-[var(--muted)]">{t.footer.availability}</span>
                <p className="mt-1 inline-flex items-center gap-2 text-[var(--foreground)]">
                  <span className="footer-dot" aria-hidden />
                  {t.footer.available}
                </p>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="eyebrow-muted tracking-[0.14em]">{t.footer.quickLinks}</h2>
            <nav className="mt-5" aria-label={t.footer.quickAria}>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                {quickLinks.map(({ id, label }) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="focus-ring rounded-sm text-[length:var(--text-sm)] text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-[var(--section-divider)] pt-6 sm:flex-row sm:items-center">
          <p className="text-[length:var(--text-xs)] text-[var(--muted)]">
            {interpolate(t.footer.rights, { year })}
          </p>
          <p className="text-[length:var(--text-xs)] text-[var(--muted)]">{t.footer.credit}</p>
        </div>
      </div>
    </footer>
  );
}
