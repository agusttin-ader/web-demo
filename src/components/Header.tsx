"use client";

import { useState } from "react";
import Image from "next/image";

const navItems = [
  { id: "servicios", label: "Servicios" },
  { id: "proyectos", label: "Proyectos" },
  { id: "about", label: "Sobre mí" },
  { id: "contacto", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[var(--background)]/98 backdrop-blur-md pt-[env(safe-area-inset-top)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 md:py-4">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("hero");
          }}
          className="flex items-center gap-2"
          aria-label="Agustín Ader - Inicio"
        >
          <Image
            src="/images/logo.png"
            alt="Agustín Ader"
            width={140}
            height={44}
            className="h-10 w-auto object-contain md:h-11"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm text-[var(--muted)] md:flex">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollTo(id)}
              className="hover:text-[var(--foreground)] transition-colors"
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
            className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
          >
            Hablemos
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </nav>

        {/* Mobile: hamburger + CTA */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("contacto");
            }}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl bg-[var(--accent)] px-3 py-2 text-sm font-medium text-white"
          >
            Hablemos
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-11 min-w-[44px] items-center justify-center rounded-xl border border-black/10 text-[var(--foreground)] hover:bg-black/5"
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

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-black/5 bg-[var(--background)] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollTo(id)}
                className="rounded-lg py-3 text-left text-sm font-medium text-[var(--foreground)] hover:bg-black/5"
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
