import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import { ExternalLink } from "@/components/ExternalLink";
import { IconWhatsApp } from "@/components/icons";
import { EMAIL, INSTAGRAM_URL, NAV_ITEMS, WHATSAPP_URL } from "@/lib/constants";

const QUICK_LINKS = [
  ...NAV_ITEMS,
  { id: "sobre-mi", label: "Sobre mi" },
  { id: "skills", label: "Skills" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-[var(--section-divider)] pt-[clamp(3rem,7vw,5rem)] pb-[calc(2.5rem+env(safe-area-inset-bottom,0px))]"
      role="contentinfo"
    >
      <div className="site-container">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.9fr] lg:gap-16">
          <div>
            <a
              href="#hero"
              className="focus-ring inline-flex items-center gap-3 rounded-[var(--radius)]"
            >
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
              Landing pages claras y rapidas para negocios que quieren mas consultas.
            </p>

            <ul className="mt-6 flex items-center gap-3" aria-label="Redes sociales">
              <li>
                <ExternalLink
                  href={INSTAGRAM_URL}
                  className="footer-social focus-ring"
                  aria-label="Instagram de Agustín Ader"
                >
                  <FaInstagram className="h-4 w-4" aria-hidden />
                </ExternalLink>
              </li>
              <li>
                <ExternalLink
                  href={WHATSAPP_URL}
                  className="footer-social focus-ring"
                  aria-label="WhatsApp de Agustín Ader"
                >
                  <IconWhatsApp className="h-4 w-4" aria-hidden />
                </ExternalLink>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="eyebrow-muted tracking-[0.14em]">Contacto</h2>
            <ul className="mt-5 space-y-4 text-[length:var(--text-sm)]">
              <li>
                <span className="block text-[var(--muted)]">Email</span>
                <a
                  href={`mailto:${EMAIL}`}
                  className="link-brand focus-ring mt-1 inline-block rounded-sm text-[var(--foreground)]"
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                <span className="block text-[var(--muted)]">Ubicacion</span>
                <p className="mt-1 text-[var(--foreground)]">Buenos Aires, Argentina</p>
              </li>
              <li>
                <span className="block text-[var(--muted)]">Disponibilidad</span>
                <p className="mt-1 inline-flex items-center gap-2 text-[var(--foreground)]">
                  <span className="footer-dot" aria-hidden />
                  Disponible para proyectos
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="eyebrow-muted tracking-[0.14em]">Links rapidos</h2>
            <nav className="mt-5" aria-label="Enlaces del pie de página">
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                {QUICK_LINKS.map(({ id, label }) => (
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
            © {year} Agustin Ader. Todos los derechos reservados.
          </p>
          <p className="text-[length:var(--text-xs)] text-[var(--muted)]">Diseño & desarrollo — portfolio personal</p>
        </div>
      </div>
    </footer>
  );
}
