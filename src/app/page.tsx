"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_URL =
  "https://wa.me/5491168696491?text=Hola%20Agustin,%20quiero%20mejorar%20mi%20web%20para%20recibir%20mas%20consultas.";

type RevealHook = [React.RefObject<HTMLElement | null>, boolean];

function useRevealSection(initialVisible = false): RevealHook {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(initialVisible);

  useEffect(() => {
    if (initialVisible) return;
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [initialVisible]);

  return [ref, isVisible];
}

function Section({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  const [ref, visible] = useRevealSection();

  return (
    <section
      id={id}
      ref={ref}
      className={`mx-auto max-w-5xl px-4 py-12 transition-all duration-700 sm:px-6 sm:py-16 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      }`}
    >
      <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">{title}</h2>
      {intro && <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--foreground-muted)] sm:text-base">{intro}</p>}
      <div className="mt-8">{children}</div>
    </section>
  );
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [heroRef, heroVisible] = useRevealSection(true);

  return (
    <>
      <main className="pb-20">
        <section
          id="hero"
          ref={heroRef}
          className={`mx-auto max-w-5xl px-4 pb-16 pt-14 transition-all duration-700 sm:px-6 sm:pb-20 sm:pt-20 ${
            heroVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--foreground-muted)]">Landing enfocada en conversion</p>
          <h1 className="mt-5 max-w-4xl text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
            Webs simples para negocios que quieren mas consultas y reservas
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--foreground-muted)] sm:text-lg">
            Diseno claro, rapido y pensado para que el cliente entienda, consulte y convierta sin vueltas.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => scrollToSection("proyecto-real")}
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[var(--btn-primary-bg)] px-6 py-3 text-sm font-semibold text-[var(--btn-primary-text)] transition-colors hover:bg-[var(--btn-primary-hover)]"
            >
              Ver proyecto real
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-[var(--card-border)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition-colors hover:bg-[var(--accent-soft-hover)]"
            >
              Escribirme por WhatsApp
            </a>
          </div>
        </section>

        <Section
          id="problema"
          title="Muchos negocios tienen trafico, pero no consultas"
          intro="Se pierde tiempo respondiendo mensajes repetidos y la web no guia a la accion. Una landing simple, clara y bien estructurada convierte mejor y ordena el contacto desde el primer click."
        >
          <div className="rounded-2xl border border-[var(--card-border)] p-6 sm:p-8">
            <p className="text-lg font-medium text-[var(--foreground)]">
              Menos friccion, mas consultas reales: ese es el objetivo de cada decision de diseno y contenido.
            </p>
          </div>
        </Section>

        <Section id="beneficios" title="Beneficios">
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              "Mas consultas reales",
              "Menos tiempo en WhatsApp",
              "Mejor imagen profesional",
              "Canal propio sin depender de Instagram",
            ].map((item) => (
              <li key={item} className="rounded-xl border border-[var(--card-border)] p-4 text-sm font-medium text-[var(--foreground)] sm:text-base">
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section
          id="proyecto-real"
          title="Proyecto real"
          intro="La Guarida Instrumentos"
        >
          <article className="overflow-hidden rounded-2xl border border-[var(--card-border)]">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/images/laguarida.PNG"
                alt="Preview del sitio La Guarida Instrumentos"
                fill
                sizes="(min-width: 1024px) 960px, 100vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-sm leading-relaxed text-[var(--foreground-muted)] sm:text-base">
                Sitio desarrollado para mejorar la presentacion del negocio y facilitar consultas directas.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-[var(--foreground)] sm:text-base">
                <li>- Diseno claro y rapido</li>
                <li>- Optimizado para mobile</li>
                <li>- Enfoque en contacto directo</li>
              </ul>
              <a
                href="https://www.laguaridainstrumentos.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-[46px] items-center justify-center rounded-xl bg-[var(--btn-primary-bg)] px-5 py-2.5 text-sm font-semibold text-[var(--btn-primary-text)] transition-colors hover:bg-[var(--btn-primary-hover)]"
              >
                Ver sitio
              </a>
            </div>
          </article>
        </Section>

        <Section id="servicios" title="Servicios">
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              "Landing optimizada para conversion",
              "Integracion con WhatsApp",
              "Formularios simples",
              "Diseno mobile-first",
              "Mantenimiento opcional",
            ].map((service) => (
              <li key={service} className="rounded-xl border border-[var(--card-border)] p-4 text-sm text-[var(--foreground)] sm:text-base">
                {service}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="sobre-mi" title="Sobre mi">
          <p className="max-w-3xl text-sm leading-relaxed text-[var(--foreground-muted)] sm:text-base">
            Trabajo con negocios reales que necesitan resultados, no solo una web linda. Mi enfoque es simple:
            que el cliente entienda rapido, consulte y convierta.
          </p>
        </Section>

        <Section id="contacto" title="Si queres mejorar como llegan y consultan tus clientes, lo vemos en 5 minutos.">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-[var(--btn-primary-bg)] px-6 py-3 text-sm font-semibold text-[var(--btn-primary-text)] transition-colors hover:bg-[var(--btn-primary-hover)]"
          >
            Escribirme por WhatsApp
          </a>
        </Section>
      </main>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      >
        <FaWhatsapp className="h-6 w-6" />
      </a>
    </>
  );
}
