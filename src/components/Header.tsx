"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const navItems = [
  { id: "beneficios", label: "Beneficios" },
  { id: "proyecto-real", label: "Proyectos" },
  { id: "servicios", label: "Servicios" },
  { id: "contacto", label: "Contacto" },
];

const WHATSAPP_URL =
  "https://wa.me/5491168696491?text=Hola%20Agustin,%20quiero%20mejorar%20mi%20web%20para%20recibir%20mas%20consultas.";

export function Header() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      if (currentY < 80) {
        setVisible(true);
      } else if (delta > 8) {
        setVisible(false);
        setOpen(false);
      } else if (delta < -8) {
        setVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-[var(--card-border)] bg-[var(--background-elevated)] pt-[env(safe-area-inset-top)] transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-[var(--container-inline)] py-3 sm:py-3.5">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("hero");
            }}
            className="flex shrink-0 items-center overflow-visible focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            aria-label="Agustín Ader - Inicio"
          >
            <Image
              src="/images/logo-transparent.png"
              alt="Agustín Ader - Desarrollo Web"
              width={240}
              height={84}
              className="h-10 w-auto max-w-none object-contain object-left sm:h-11"
              priority
            />
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollTo(id)}
                className="px-3.5 py-2 text-sm font-medium text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]"
              >
                {label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary ml-2 !min-h-[2.25rem] !px-4 !py-1.5 !text-xs"
            >
              WhatsApp
            </a>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="inline-flex h-10 w-10 items-center justify-center border border-[var(--card-border)] text-[var(--foreground)]"
              aria-expanded={open}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
            >
              <span className="relative h-3.5 w-5" aria-hidden>
                <span className={`absolute left-0 top-0 h-[1.5px] w-5 bg-current transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
                <span className={`absolute left-0 top-[6px] h-[1.5px] w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
                <span className={`absolute left-0 top-[12px] h-[1.5px] w-5 bg-current transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 flex flex-col bg-[var(--background-elevated)] px-6 pt-24 transition-opacity duration-200 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav className="flex flex-col gap-1 border-t border-[var(--card-border)] pt-4">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollTo(id)}
              className="px-2 py-4 text-left font-[family-name:var(--font-display)] text-xl font-bold text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
            >
              {label}
            </button>
          ))}
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-8 w-full"
          onClick={() => setOpen(false)}
        >
          Escribirme por WhatsApp
        </a>
      </div>
    </>
  );
}
