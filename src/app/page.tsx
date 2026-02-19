"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { projects } from "@/data/projects";

function useRevealSection() {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-black/6 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
      {children}
    </span>
  );
}

/** Contenedor para label + título con espaciado proporcional (label más separado del título) */
function SectionHeader({
  label,
  title,
  subtitle,
  className = "",
}: {
  label: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <div className="flex justify-center">
        <SectionLabel>{label}</SectionLabel>
      </div>
      <h2 className="mt-10 font-serif text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:mt-12 md:mt-14 sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 w-full max-w-lg text-sm text-[var(--muted)] sm:text-base">{subtitle}</p>
      )}
    </div>
  );
}

function scrollToContact() {
  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const rubros = [
  { label: "Turismo y alojamientos", desc: "Hostels, cabañas, hoteles, experiencias" },
  { label: "Servicios", desc: "Profesionales, consultoría, locales" },
  { label: "Emprendimientos", desc: "Marcas, productos, tiendas" },
];

const servicios = [
  { title: "Sitios profesionales", desc: "Diseño claro y rápido, pensado para generar consultas y reservas." },
  { title: "Mobile-first y responsive", desc: "Tu web se ve y funciona bien en celular, tablet y desktop." },
  { title: "SEO y visibilidad", desc: "Estructura y contenidos que ayudan a aparecer en búsquedas." },
  { title: "Formularios y WhatsApp", desc: "Integración con WhatsApp y canales de contacto para no perder consultas." },
  { title: "Mantenimiento simple", desc: "Entregas fáciles de actualizar cuando lo necesites." },
];

export default function Home() {
  const heroReveal = useRevealSection();
  const rubrosReveal = useRevealSection();
  const projectsReveal = useRevealSection();
  const servicesReveal = useRevealSection();
  const testimonialsReveal = useRevealSection();
  const aboutReveal = useRevealSection();
  const contactReveal = useRevealSection();

  return (
    <>
      <main className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
        {/* HERO — Muestra orientada a turismo, abierta a todos los rubros */}
        <section
          id="hero"
          ref={heroReveal.ref}
          className={`px-4 pt-8 pb-4 sm:px-6 sm:pt-12 sm:pb-6 md:pt-16 md:pb-8 transition-all duration-700 ease-out ${
            heroReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <div className="flex justify-center">
              <SectionLabel>Desarrollo web profesional</SectionLabel>
            </div>
            <h1 className="mt-10 font-serif text-3xl font-semibold leading-tight tracking-tight text-[var(--foreground)] sm:mt-12 md:mt-14 sm:text-4xl md:text-5xl lg:text-[2.75rem]">
              Una web que atraiga clientes a tu negocio
            </h1>
            <p className="mt-5 w-full max-w-xl text-base text-[var(--muted)] leading-relaxed sm:text-lg">
              Especialmente para turismo, hostels y alojamientos — y abierto a cualquier rubro. Diseño claro, rápido y enfocado en que te lleguen más consultas y reservas.
            </p>
            <div className="mt-8 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:justify-center">
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToContact();
                }}
                className="inline-flex w-full min-h-[44px] items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-6 py-3.5 text-sm font-medium text-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition hover:opacity-90 sm:w-auto sm:min-h-0"
              >
                Quiero una web así
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#proyectos"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-black/15 bg-white px-6 py-3.5 text-sm font-medium text-[var(--foreground)] transition hover:bg-black/5 sm:w-auto"
              >
                Ver webs que desarrollé
              </a>
            </div>
            <p className="mt-6 text-center text-xs text-[var(--muted)] sm:text-sm">
              Optimizado para móviles · Contenidos orientados a resultados · Sin compromiso
            </p>
          </div>
        </section>

        {/* PARA QUIÉN — Turismo + otros rubros */}
        <section
          ref={rubrosReveal.ref}
          className={`px-4 sm:px-6 transition-all duration-700 ease-out ${
            rubrosReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col items-center text-center">
              <p className="text-sm font-medium text-[var(--muted)]">Trabajo con</p>
            </div>
            <div className="mx-auto mt-4 grid max-w-4xl grid-cols-1 gap-4 sm:mt-5 sm:grid-cols-3">
              {rubros.map(({ label, desc }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-black/6 bg-white p-5 text-center shadow-[0_6px_24px_rgba(0,0,0,0.04)] transition hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)]"
                >
                  <h3 className="font-serif text-lg font-semibold tracking-tight text-[var(--foreground)]">{label}</h3>
                  <p className="mt-1 text-sm text-[var(--muted)]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROYECTOS — Muestra + tu web (link que podés pasar) */}
        <section
          id="proyectos"
          ref={projectsReveal.ref}
          className={`px-4 sm:px-6 transition-all duration-700 ease-out ${
            projectsReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="mx-auto max-w-3xl">
            <SectionHeader
              label="Proyectos"
              title="Webs que desarrollé"
              subtitle="Una muestra de lo que puedo hacer para tu negocio: sitios claros, rápidos y pensados para atraer clientes."
            />
          </div>
          <div className="mx-auto mt-6 grid max-w-5xl gap-6 sm:mt-8 sm:gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group overflow-hidden rounded-2xl border border-black/6 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[4/3]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {project.tags && project.tags.length > 0 && (
                    <div className="absolute left-3 top-3 flex flex-wrap gap-2 sm:left-4 sm:top-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg bg-white/95 px-2.5 py-1 text-[11px] font-medium text-[var(--foreground)] shadow-sm backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="border-t border-black/5 p-5 text-center sm:p-6">
                  <h3 className="font-serif text-xl font-semibold tracking-tight text-[var(--foreground)]">{project.title}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">{project.description}</p>
                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
                    >
                      Ver sitio en vivo
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SERVICIOS */}
        <section
          id="servicios"
          ref={servicesReveal.ref}
          className={`px-4 sm:px-6 transition-all duration-700 ease-out ${
            servicesReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="mx-auto max-w-3xl">
            <SectionHeader
              label="Servicios"
              title="Todo lo que tu negocio necesita en una web"
              subtitle="Sitios profesionales, rápidos y orientados a convertir visitantes en clientes."
            />
          </div>
          <div className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {servicios.map(({ title, desc }) => (
              <article
                key={title}
                className="rounded-2xl border border-black/6 bg-white p-5 text-center shadow-[0_6px_24px_rgba(0,0,0,0.04)] transition hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] sm:p-6"
              >
                <h3 className="font-medium text-[var(--foreground)]">{title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* TESTIMONIOS */}
        <section
          id="opiniones"
          ref={testimonialsReveal.ref}
          className={`px-4 sm:px-6 transition-all duration-700 ease-out ${
            testimonialsReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="mx-auto max-w-3xl">
            <SectionHeader label="Opiniones" title="Lo que dicen quienes trabajaron conmigo" />
          </div>
          <div className="mx-auto mt-6 grid max-w-4xl grid-cols-1 gap-5 sm:mt-8 sm:gap-6 md:grid-cols-2">
            <blockquote className="rounded-2xl border border-black/6 bg-white p-6 text-center shadow-[0_6px_24px_rgba(0,0,0,0.04)] sm:p-8">
              <p className="text-base text-[var(--foreground)] leading-relaxed sm:text-lg">
                &ldquo;Agustín logró una web clara y moderna que mejoró nuestras consultas.&rdquo;
              </p>
            </blockquote>
            <blockquote className="rounded-2xl border border-black/6 bg-white p-6 text-center shadow-[0_6px_24px_rgba(0,0,0,0.04)] sm:p-8">
              <p className="text-base text-[var(--foreground)] leading-relaxed sm:text-lg">
                &ldquo;Excelente comunicación y enfoque profesional.&rdquo;
              </p>
            </blockquote>
          </div>
        </section>

        {/* SOBRE MÍ — Texto que ya tenías */}
        <section
          id="about"
          ref={aboutReveal.ref}
          className={`px-4 sm:px-6 transition-all duration-700 ease-out ${
            aboutReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <div className="flex justify-center">
              <SectionLabel>Sobre mí</SectionLabel>
            </div>
            <h2 className="mt-10 font-serif text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:mt-12 md:mt-14 sm:text-3xl md:text-4xl">
              Agustín Ader
            </h2>
            <p className="mt-6 w-full text-sm text-[var(--muted)] leading-relaxed sm:text-base">
              Soy desarrollador frontend con más de 9 años de experiencia en atención al cliente y administración. Combino know‑how técnico con comprensión de procesos de negocio para entregar soluciones web confiables y orientadas a resultados.
            </p>
            <p className="mt-4 w-full text-sm text-[var(--muted)] leading-relaxed sm:text-base">
              Trabajo con empresas y emprendimientos —incluyendo turismo y servicios— para convertir necesidades operativas en sitios claros, fáciles de usar y pensados para generar consultas y ventas. Me involucro como socio técnico: comunicación directa, entregas puntuales y soluciones prácticas para tu negocio.
            </p>
            <div className="flex justify-center">
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToContact();
                }}
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
              Hablemos de tu proyecto
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              </a>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section
          id="contacto"
          ref={contactReveal.ref}
          className={`px-4 sm:px-6 transition-all duration-700 ease-out ${
            contactReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="mx-auto flex max-w-xl flex-col items-center text-center">
            <div className="flex justify-center">
              <SectionLabel>Contacto</SectionLabel>
            </div>
            <h2 className="mt-10 font-serif text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:mt-12 md:mt-14 sm:text-3xl md:text-4xl">
              ¿Hablamos?
            </h2>
            <p className="mt-4 w-full text-sm text-[var(--muted)] leading-relaxed sm:text-base">
              Si buscás una web profesional que mejore consultas y ventas para tu negocio, contactame sin compromiso. Primero entendemos el proyecto y después vemos cómo sumar.
            </p>
            <a
              href="https://wa.me/5491168696491?text=Hola%21%20Vi%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20consultarte%20por%20una%20web."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
              className="mt-8 inline-flex w-full min-h-[44px] items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-6 py-4 text-sm font-medium text-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition hover:opacity-90 sm:w-auto sm:min-h-0 sm:py-3.5"
            >
              Contactame por WhatsApp
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/6 bg-white/60 py-10 sm:py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 text-center">
          <div className="flex justify-center gap-8">
            <a
              href="https://www.instagram.com/agustinader.dev?utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[var(--muted)] transition hover:text-[var(--foreground)]"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
            <a
              href="mailto:agusttin.dev@gmail.com"
              aria-label="Correo electrónico"
              className="text-[var(--muted)] transition hover:text-[var(--foreground)]"
            >
              <FiMail className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/5491168696491?text=Hola%21%20Me%20pod%C3%A9s%20dar%20m%C3%A1s%20informaci%C3%B3n%3F"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-[var(--muted)] transition hover:text-[var(--foreground)]"
            >
              <FaWhatsapp className="h-5 w-5" />
            </a>
          </div>
          <div className="mt-8 flex flex-col items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Agustín Ader – Desarrollador Frontend"
              width={160}
              height={50}
              className="h-8 w-auto object-contain md:h-10"
            />
            <span className="text-sm text-[var(--muted)]">Desarrollado por Agustín Ader</span>
          </div>
        </div>
      </footer>

      <p className="sr-only">
        Soy desarrollador especializado en desarrollo web profesional para pymes y emprendimientos: creo
        páginas web para negocios pensadas para convertir visitantes en clientes. Entrego sitios rápidos
        y responsivos, con arquitectura clara, formularios eficientes e integración de canales como
        WhatsApp. Trabajo con turismo y servicios; más de 9 años de experiencia en atención al cliente.
      </p>
    </>
  );
}
