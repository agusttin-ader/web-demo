"use client";

import { useState, useEffect, useRef, type CSSProperties } from "react";
import Image from "next/image";
import { ExternalLink } from "@/components/ExternalLink";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { useI18n } from "@/i18n/I18nProvider";
import { DS_CLASS } from "@/lib/design-system";
import { BRAND_LOGO_SRC, NAV_ITEMS, whatsappUrl } from "@/lib/constants";

const SECTION_IDS = ["hero", ...NAV_ITEMS] as const;
const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const MOBILE_MENU_ID = "site-mobile-menu";
const MOBILE_MENU_TITLE_ID = "site-mobile-menu-title";

export function Header() {
  const { t } = useI18n();
  const whatsappHref = whatsappUrl(t.whatsapp.defaultMessage);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("hero");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstMenuItemRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.dataset.navOpen = "true";
    window.requestAnimationFrame(() => firstMenuItemRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      delete document.body.dataset.navOpen;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    if (!panel) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const nodes = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => !el.hasAttribute("disabled") && el.getAttribute("aria-hidden") !== "true"
      );
      if (!nodes.length) return;

      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      el.setAttribute("tabindex", "-1");
      el.focus({ preventScroll: true });
    }
    setActiveId(id);
    setOpen(false);
  };

  return (
    <>
      <header
        className={`site-header${scrolled ? " site-header--scrolled" : ""}`}
        role="banner"
        data-scrolled={scrolled ? "true" : undefined}
      >
        <div className={`site-header__bar ${DS_CLASS.container}`}>
          <div className="site-header__start">
            <a
              href="#hero"
              className="site-header__logo"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("hero");
              }}
              aria-label={t.nav.logoAria}
            >
              <Image src={BRAND_LOGO_SRC} alt="" width={64} height={64} priority sizes="32px" />
              <span className="site-header__logo-text">Agustin Ader</span>
            </a>
          </div>

          <nav className="site-header__nav-desktop" aria-label={t.nav.ariaMain}>
            <ul className="site-header__nav-list">
              {NAV_ITEMS.map((id) => {
                const isActive = activeId === id;
                return (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="site-header__nav-link"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(id);
                      }}
                      aria-current={isActive ? "location" : undefined}
                    >
                      {t.nav.items[id]}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="site-header__end">
            <LocaleSwitcher header />
            <ExternalLink
              href={whatsappHref}
              className={`site-header__cta ${DS_CLASS.btnPrimary} ds-btn--sm`}
              showHint={false}
            >
              {t.nav.whatsappCta}
            </ExternalLink>
          </div>

          <div className="site-header__actions-mobile">
            <LocaleSwitcher compact header />
            <button
              ref={menuButtonRef}
              type="button"
              className="site-header__menu-btn"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls={MOBILE_MENU_ID}
              aria-haspopup="dialog"
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            >
              <span className="site-header__menu-icon" aria-hidden>
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        ref={panelRef}
        id={MOBILE_MENU_ID}
        className="site-header__panel"
        hidden={!open}
        role="dialog"
        aria-modal="true"
        aria-labelledby={MOBILE_MENU_TITLE_ID}
      >
        <h2 id={MOBILE_MENU_TITLE_ID} className="sr-only">
          {t.nav.menuTitle}
        </h2>

        <nav className="site-header__panel-nav" aria-label={t.nav.ariaMobile}>
          <ul className="site-header__panel-list">
            {NAV_ITEMS.map((id, index) => {
              const isActive = activeId === id;
              return (
                <li key={id} style={{ "--menu-i": index } as CSSProperties}>
                  <a
                    ref={index === 0 ? firstMenuItemRef : undefined}
                    href={`#${id}`}
                    className="site-header__panel-link"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(id);
                    }}
                    aria-current={isActive ? "location" : undefined}
                    tabIndex={open ? 0 : -1}
                  >
                    {t.nav.items[id]}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="site-header__panel-brand" aria-hidden>
          <Image
            src={BRAND_LOGO_SRC}
            alt=""
            width={160}
            height={160}
            sizes="(max-width: 1023px) 28vw, 0px"
          />
        </div>

        <ExternalLink
          href={whatsappHref}
          className={`site-header__panel-cta ${DS_CLASS.btnPrimary}`}
          onClick={() => setOpen(false)}
          tabIndex={open ? 0 : -1}
          showHint={false}
        >
          {t.nav.whatsappMobile}
        </ExternalLink>
      </div>
    </>
  );
}
