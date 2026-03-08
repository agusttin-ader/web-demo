"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { id: "proceso", label: "Proceso" },
  { id: "servicios", label: "Servicios" },
  { id: "proyectos", label: "Proyectos" },
  { id: "en-desarrollo", label: "En desarrollo" },
  { id: "ejemplos", label: "Ejemplos" },
  { id: "about", label: "Sobre mí" },
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
        scrolled ? "border-b border-[var(--card-border)] bg-[var(--background-elevated)]/95 shadow-[var(--shadow-sm)] backdrop-blur-lg" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 md:py-4">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("hero");
          }}
          className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 rounded-lg"
          aria-label="Agustín Ader - Inicio"
        >
          <Image
            src="/images/logo.png"
            alt="Agustín Ader - Desarrollo Web Profesional"
            width={160}
            height={50}
            className="h-9 w-auto object-contain object-left md:h-10"
            priority
            unoptimized={false}
          />
        </a>

        <nav className="hidden items-center gap-6 text-sm md:flex">
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
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("contacto");
            }}
            className="inline-flex items-center gap-2 rounded-xl bg-[var(--btn-primary-bg)] px-4 py-2.5 text-sm font-medium text-[var(--btn-primary-text)] transition-all duration-200 hover:bg-[var(--btn-primary-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
          >
            Pedir presupuesto
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("contacto");
            }}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl bg-[var(--btn-primary-bg)] px-3 py-2 text-sm font-medium text-[var(--btn-primary-text)] transition-colors hover:bg-[var(--btn-primary-hover)]"
          >
            Presupuesto
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-11 min-w-[44px] items-center justify-center rounded-xl border border-[var(--card-border)] text-[var(--foreground)] hover:bg-[var(--accent-soft-hover)] transition-colors"
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
        <div className="border-t border-[var(--card-border)] bg-[var(--background-elevated)] px-4 py-4 md:hidden animate-in">
          <nav className="flex flex-col gap-1">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollTo(id)}
                className="link-brand cursor-pointer rounded-lg py-3 px-3 text-left text-sm font-medium text-[var(--foreground)] hover:bg-[var(--accent-soft-hover)] transition-colors"
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
