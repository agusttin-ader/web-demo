"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { ThemeToggle } from "./ThemeToggle";
import { WHATSAPP_DEMO_URL } from "@/lib/whatsapp";

const navItems = [
  { id: "problema", label: "Problema" },
  { id: "demo", label: "Demo" },
  { id: "ejemplo", label: "Ejemplo" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--card-border)] bg-[var(--background-elevated)]/95 shadow-[var(--shadow-sm)] backdrop-blur-lg"
          : "border-b border-transparent bg-[var(--background)]/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 py-3 md:gap-4 md:py-4">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("hero");
          }}
          className="flex min-w-0 shrink items-center gap-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
          aria-label="Agustín Ader - Inicio"
        >
          <Image
            src="/images/logo.png"
            alt="Agustín Ader"
            width={160}
            height={50}
            className="h-8 w-auto max-w-[140px] object-contain object-left sm:h-9 lg:h-10"
            priority
          />
        </a>

        <nav className="hidden items-center gap-4 text-sm lg:flex">
          <ThemeToggle />
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollTo(id)}
              className="link-brand cursor-pointer"
            >
              {label}
            </button>
          ))}
          <a
            href={WHATSAPP_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[var(--btn-primary-bg)] px-4 py-2.5 text-sm font-semibold text-[var(--btn-primary-text)] shadow-[var(--shadow-sm)] transition-all duration-200 hover:bg-[var(--btn-primary-hover)] hover:shadow-[var(--shadow-md)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
          >
            <FaWhatsapp className="h-4 w-4" aria-hidden />
            Demo gratis
          </a>
        </nav>

        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <ThemeToggle />
          <a
            href={WHATSAPP_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl bg-[var(--btn-primary-bg)] px-3 py-2 text-xs font-semibold text-[var(--btn-primary-text)] sm:px-4 sm:text-sm"
          >
            <FaWhatsapp className="h-4 w-4 shrink-0" aria-hidden />
            <span className="truncate">Demo gratis</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-11 min-w-[44px] items-center justify-center rounded-xl border border-[var(--card-border)] text-[var(--foreground)] transition-colors hover:bg-[var(--accent-soft-hover)]"
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="animate-in border-t border-[var(--card-border)] bg-[var(--background-elevated)] px-1 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollTo(id)}
                className="cursor-pointer rounded-lg px-3 py-3 text-left text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--accent-soft-hover)]"
              >
                {label}
              </button>
            ))}
            <a
              href={WHATSAPP_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3 mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--btn-primary-bg)] py-3 text-sm font-semibold text-[var(--btn-primary-text)]"
              onClick={() => setOpen(false)}
            >
              <FaWhatsapp className="h-4 w-4" aria-hidden />
              Pedí tu demo gratis
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
