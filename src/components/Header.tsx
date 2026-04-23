"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { id: "beneficios", label: "Beneficios" },
  { id: "servicios", label: "Servicios" },
  { id: "proyecto-real", label: "Proyecto real" },
  { id: "sobre-mi", label: "Sobre mi" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 py-3 md:py-4">
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
            className="h-9 w-auto object-contain object-left lg:h-10"
            priority
            unoptimized={false}
          />
        </a>

        <nav className="hidden items-center gap-5 text-sm lg:flex">
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
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className={`relative z-[60] inline-flex h-11 min-w-[44px] items-center justify-center rounded-xl border px-3 transition-colors ${
              open
                ? "border-[var(--btn-primary-bg)] bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)]"
                : "border-[var(--card-border)] text-[var(--foreground)] hover:bg-[var(--accent-soft-hover)]"
            }`}
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            <span className="relative h-4 w-6" aria-hidden>
              <span
                className={`absolute left-0 top-0 h-[2px] w-6 rounded-full bg-current transition-all duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-[2px] w-6 rounded-full bg-current transition-all duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-[2px] w-6 rounded-full bg-current transition-all duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-[var(--background)] transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col px-5 pt-24">
          <nav className="flex flex-col gap-2">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollTo(id)}
                className="cursor-pointer rounded-xl px-4 py-3 text-left text-base font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--accent-soft-hover)]"
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
