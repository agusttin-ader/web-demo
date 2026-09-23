"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ExternalLink } from "@/components/ExternalLink";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { useI18n } from "@/i18n/I18nProvider";
import { DS_CLASS } from "@/lib/design-system";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { BRAND_LOGO_SRC, NAV_ITEMS, whatsappUrl } from "@/lib/constants";

const SECTION_IDS = ["hero", ...NAV_ITEMS] as const;

function getScrollPaddingTop() {
  const parsed = Number.parseFloat(
    getComputedStyle(document.documentElement).scrollPaddingTop
  );
  return Number.isFinite(parsed) ? parsed : 0;
}

function scrollToSection(el: HTMLElement, behavior: ScrollBehavior) {
  const offset = getScrollPaddingTop();
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: Math.max(0, top), behavior });
  el.setAttribute("tabindex", "-1");
  el.focus({ preventScroll: true });
}
const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const MOBILE_MENU_ID = "site-mobile-menu";
const MOBILE_MENU_TITLE_ID = "site-mobile-menu-title";

export function Header() {
  const { t } = useI18n();
  const prefersReducedMotion = usePrefersReducedMotion();
  const whatsappHref = whatsappUrl(t.whatsapp.defaultMessage);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const [activeId, setActiveId] = useState<string>("hero");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstMenuItemRef = useRef<HTMLAnchorElement>(null);
  const lastScrollYRef = useRef(0);
  const scrolledRef = useRef(false);
  const headerHiddenRef = useRef(false);
  const postCloseScrollIdRef = useRef<string | null>(null);

  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const y = window.scrollY;
        const isScrolled = y > 12;
        if (isScrolled !== scrolledRef.current) {
          scrolledRef.current = isScrolled;
          setScrolled(isScrolled);
        }

        if (open) return;

        const delta = y - lastScrollYRef.current;
        let nextHidden = headerHiddenRef.current;
        if (y < 48) {
          nextHidden = false;
        } else if (delta > 6) {
          nextHidden = true;
        } else if (delta < -6) {
          nextHidden = false;
        }

        if (nextHidden !== headerHiddenRef.current) {
          headerHiddenRef.current = nextHidden;
          setHeaderHidden(nextHidden);
        }
        lastScrollYRef.current = y;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [open]);

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
        const id = visible[0]?.target?.id;
        if (id) {
          setActiveId((prev) => (prev === id ? prev : id));
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

    const scrollY = window.scrollY;
    const { style: bodyStyle } = document.body;
    const { style: htmlStyle } = document.documentElement;

    const prevBodyOverflow = bodyStyle.overflow;
    const prevBodyPosition = bodyStyle.position;
    const prevBodyTop = bodyStyle.top;
    const prevBodyLeft = bodyStyle.left;
    const prevBodyRight = bodyStyle.right;
    const prevBodyWidth = bodyStyle.width;
    const prevHtmlOverflow = htmlStyle.overflow;

    bodyStyle.overflow = "hidden";
    htmlStyle.overflow = "hidden";
    bodyStyle.position = "fixed";
    bodyStyle.top = `-${scrollY}px`;
    bodyStyle.left = "0";
    bodyStyle.right = "0";
    bodyStyle.width = "100%";
    document.body.dataset.navOpen = "true";
    document.body.dataset.scrollLock = String(scrollY);
    lastScrollYRef.current = scrollY;

    window.requestAnimationFrame(() => firstMenuItemRef.current?.focus());

    return () => {
      const lockedY = Number.parseInt(document.body.dataset.scrollLock ?? "0", 10);
      bodyStyle.overflow = prevBodyOverflow;
      bodyStyle.position = prevBodyPosition;
      bodyStyle.top = prevBodyTop;
      bodyStyle.left = prevBodyLeft;
      bodyStyle.right = prevBodyRight;
      bodyStyle.width = prevBodyWidth;
      htmlStyle.overflow = prevHtmlOverflow;
      delete document.body.dataset.navOpen;
      delete document.body.dataset.scrollLock;
      window.scrollTo(0, lockedY);
    };
  }, [open]);

  useEffect(() => {
    if (open) return;
    const id = postCloseScrollIdRef.current;
    if (!id) return;
    postCloseScrollIdRef.current = null;

    const el = document.getElementById(id);
    if (!el) return;

    const behavior: ScrollBehavior = prefersReducedMotion ? "auto" : "smooth";
    const run = () => scrollToSection(el, behavior);

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(run);
    });
  }, [open, prefersReducedMotion]);

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
    setActiveId(id);
    const el = document.getElementById(id);
    if (!el) {
      setOpen(false);
      return;
    }

    const behavior: ScrollBehavior = prefersReducedMotion ? "auto" : "smooth";

    if (open) {
      postCloseScrollIdRef.current = id;
      setOpen(false);
      return;
    }

    const offset = getScrollPaddingTop();
    const targetY = Math.max(0, el.getBoundingClientRect().top + window.scrollY - offset);
    lastScrollYRef.current = targetY;
    scrollToSection(el, behavior);
  };

  return (
    <>
      <header
        className={`site-header${scrolled ? " site-header--scrolled" : ""}${headerHidden && !open ? " site-header--hidden" : ""}`}
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
            {!open ? <LocaleSwitcher compact header /> : null}
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
        className={`site-header__backdrop${open ? " site-header__backdrop--open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div
        ref={panelRef}
        id={MOBILE_MENU_ID}
        className={`site-header__panel${open ? " site-header__panel--open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        aria-labelledby={MOBILE_MENU_TITLE_ID}
        inert={!open}
      >
        <h2 id={MOBILE_MENU_TITLE_ID} className="sr-only">
          {t.nav.menuTitle}
        </h2>

        <nav className="site-header__panel-nav" aria-label={t.nav.ariaMobile}>
          <ul className="site-header__panel-list">
            {NAV_ITEMS.map((id, index) => {
              const isActive = activeId === id;
              return (
                <li key={id}>
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
