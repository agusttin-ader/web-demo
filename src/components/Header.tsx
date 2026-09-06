"use client";

import { useState, useEffect, useRef, useId } from "react";
import Image from "next/image";
import { ExternalLink } from "@/components/ExternalLink";
import { IconArrowRight, IconWhatsApp } from "@/components/icons";
import { NAV_ITEMS, WHATSAPP_URL } from "@/lib/constants";

const SECTION_IDS = ["hero", ...NAV_ITEMS.map((item) => item.id)] as const;
const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("hero");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstMenuItemRef = useRef<HTMLAnchorElement>(null);
  const menuId = useId();
  const titleId = useId();

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 12);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
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
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : "";
    document.body.dataset.navOpen = open ? "true" : "";
    if (open) {
      window.requestAnimationFrame(() => firstMenuItemRef.current?.focus());
    }
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
        className={[
          "site-header pt-[env(safe-area-inset-top)]",
          scrolled || open ? "is-scrolled" : "is-visible",
          open ? "is-menu-open" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        role="banner"
      >
        <div className="header-inner">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("hero");
            }}
            className="nav-logo focus-ring min-w-0 shrink"
            aria-label="Agustín Ader, ir al inicio"
          >
            <Image
              src="/new-logo-transparent.webp"
              alt=""
              width={72}
              height={72}
              className="h-8 w-auto shrink-0 object-contain object-left sm:h-9"
              sizes="36px"
              priority
            />
            <span className="nav-logo-text font-display text-[length:var(--text-base)] font-semibold tracking-tight text-[var(--foreground)] sm:text-[length:var(--text-lg)]">
              Agustin Ader
            </span>
          </a>

          <nav className="hidden items-center gap-0.5 md:flex" aria-label="Secciones principales">
            <ul className="flex items-center gap-0.5">
              {NAV_ITEMS.map(({ id, label }) => {
                const isActive = activeId === id;
                return (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(id);
                      }}
                      className={`nav-link focus-ring ${isActive ? "is-active" : ""}`}
                      aria-current={isActive ? "location" : undefined}
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <ExternalLink href={WHATSAPP_URL} className="nav-cta focus-ring ml-3">
              WhatsApp
              <IconArrowRight className="h-3 w-3 opacity-70" aria-hidden />
            </ExternalLink>
          </nav>

          <div className="nav-mobile-actions flex shrink-0 items-center gap-1.5 sm:gap-2 md:hidden">
            <ExternalLink
              href={WHATSAPP_URL}
              className="nav-cta nav-cta--icon focus-ring"
              aria-label="Contactar por WhatsApp"
            >
              <IconWhatsApp className="h-3.5 w-3.5" aria-hidden />
              <span className="nav-cta-label" aria-hidden>
                WhatsApp
              </span>
            </ExternalLink>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius)] border border-[var(--card-border)] bg-[rgba(255,255,255,0.03)] text-[var(--foreground)] transition-colors hover:bg-[rgba(255,255,255,0.06)]"
              aria-expanded={open}
              aria-controls={menuId}
              aria-haspopup="dialog"
              aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            >
              <span className="relative h-3.5 w-5" aria-hidden>
                <span
                  className={`absolute left-0 top-0 h-[1.5px] w-5 origin-center bg-current transition-transform duration-300 ease-[var(--ease-out)] ${
                    open ? "translate-y-[6px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[6px] h-[1.5px] w-5 bg-current transition-opacity duration-200 ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[12px] h-[1.5px] w-5 origin-center bg-current transition-transform duration-300 ease-[var(--ease-out)] ${
                    open ? "-translate-y-[6px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        ref={panelRef}
        id={menuId}
        className={`nav-mobile-panel fixed inset-x-0 bottom-0 z-[45] flex flex-col px-[var(--container-inline)] pb-[calc(env(safe-area-inset-bottom)+1.5rem)] transition-[opacity,visibility] duration-300 md:hidden ${
          open
            ? "is-open pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        inert={!open ? true : undefined}
      >
        <h2 id={titleId} className="sr-only">
          Menú de navegación
        </h2>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto pt-[var(--space-1)]" aria-label="Navegación móvil">
          <ul className="flex flex-col gap-0.5">
            {NAV_ITEMS.map(({ id, label }, index) => {
              const isActive = activeId === id;
              return (
                <li key={id}>
                  <a
                    ref={index === 0 ? firstMenuItemRef : undefined}
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(id);
                    }}
                    className={`nav-mobile-link focus-ring ${isActive ? "is-active" : ""}`}
                    style={{ transitionDelay: open ? `${80 + index * 55}ms` : "0ms" }}
                    aria-current={isActive ? "location" : undefined}
                    tabIndex={open ? 0 : -1}
                  >
                    <span>{label}</span>
                    <IconArrowRight className="h-4 w-4 opacity-40" aria-hidden />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <ExternalLink
          href={WHATSAPP_URL}
          className="nav-cta focus-ring mt-auto w-full !min-h-12 !text-[length:var(--text-sm)]"
          onClick={() => setOpen(false)}
          tabIndex={open ? 0 : -1}
          style={{
            opacity: open ? 1 : 0,
            transform: open ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.35s var(--ease-out), transform 0.35s var(--ease-out)",
            transitionDelay: open ? "260ms" : "0ms",
          }}
        >
          <IconWhatsApp className="h-4 w-4" aria-hidden />
          Escribirme por WhatsApp
        </ExternalLink>
      </div>
    </>
  );
}
