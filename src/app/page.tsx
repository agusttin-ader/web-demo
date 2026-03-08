"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { projects } from "@/data/projects";
import { inDevelopmentProjects } from "@/data/in-development";
import { examples } from "@/data/examples";
import { BudgetForm } from "@/components/BudgetForm";

function useRevealSection(initialVisible = false) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(initialVisible);

  useEffect(() => {
    if (initialVisible) return;
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
      { threshold: 0.06, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [initialVisible]);

  return { ref, isVisible };
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-[var(--accent-soft)] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
      {children}
    </span>
  );
}

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
      <h2 className="mt-6 text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:mt-7 md:mt-8 sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2.5 w-full max-w-lg text-sm text-[var(--foreground-muted)] sm:text-base leading-relaxed">
          {subtitle}
        </p>
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
  const heroReveal = useRevealSection(true);
  const rubrosReveal = useRevealSection();
  const processReveal = useRevealSection();
  const projectsReveal = useRevealSection();
  const inDevelopmentReveal = useRevealSection();
  const examplesReveal = useRevealSection();
  const servicesReveal = useRevealSection();
  const aboutReveal = useRevealSection();
  const contactReveal = useRevealSection();

  const transitionClass = "transition-all duration-700 ease-out";
  const visibleClass = "opacity-100 translate-y-0";
  const hiddenClass = "opacity-0 translate-y-8";

  return (
    <>
      <main className="space-y-14 sm:space-y-16 md:space-y-20 lg:space-y-24">
        {/* HERO */}
        <section
          id="hero"
          ref={heroReveal.ref}
          className={`hero-premium-bg px-4 pt-12 pb-8 sm:px-6 sm:pt-16 sm:pb-10 md:pt-24 md:pb-12 ${transitionClass} ${
            heroReveal.isVisible ? visibleClass : hiddenClass
          }`}
        >
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <div className="flex justify-center">
              <SectionLabel>Desarrollo web profesional</SectionLabel>
            </div>
            <h1 className="mt-8 text-3xl font-semibold leading-[1.15] tracking-tight text-[var(--foreground)] sm:mt-10 md:mt-12 sm:text-4xl md:text-5xl lg:text-[2.75rem]">
              Una web que atraiga clientes a tu negocio
            </h1>
            <p className="mt-4 w-full max-w-xl text-base text-[var(--foreground-muted)] leading-relaxed sm:text-lg">
              Especialmente para turismo, hostels y alojamientos — y abierto a cualquier rubro. Diseño claro, rápido y enfocado en que te lleguen más consultas y reservas.
            </p>
            <div className="hero-ctas">
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToContact();
                }}
                className="inline-flex w-full min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[var(--btn-primary-bg)] px-6 py-3.5 text-sm font-medium text-[var(--btn-primary-text)] shadow-[var(--shadow-md)] transition-all duration-200 hover:bg-[var(--btn-primary-hover)] hover:shadow-[var(--shadow-lg)] sm:w-auto sm:min-h-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
              >
                Pedir presupuesto
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
                className="inline-flex w-full min-h-[48px] items-center justify-center gap-2 rounded-xl border border-[var(--card-border)] bg-[var(--background-elevated)] px-6 py-3.5 text-sm font-medium text-[var(--foreground)] transition-all duration-200 hover:bg-[var(--accent-soft-hover)] hover:border-[var(--foreground)]/12 sm:w-auto sm:min-h-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
              >
                Ver proyectos
              </a>
            </div>
            <p className="hero-labels text-sm text-[var(--foreground-muted)]">
              <span>9+ años de experiencia</span>
              <span className="text-[var(--muted)]">·</span>
              <span>Respuesta en 24 h</span>
              <span className="text-[var(--muted)]">·</span>
              <span>Entregas a tiempo</span>
            </p>
            <a
              href="#trabajo-con"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("trabajo-con")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="mt-10 flex flex-col items-center gap-2 text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]"
              aria-label="Bajar a Trabajo con"
            >
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <svg className="h-6 w-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </section>

        {/* PARA QUIÉN - Trabajo con */}
        <section
          id="trabajo-con"
          ref={rubrosReveal.ref}
          className={`px-4 sm:px-6 ${transitionClass} ${rubrosReveal.isVisible ? visibleClass : hiddenClass}`}
        >
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col items-center text-center">
              <p className="text-sm font-medium text-[var(--foreground-muted)]">Trabajo con</p>
            </div>
            <div className="mx-auto mt-6 grid max-w-4xl grid-cols-1 gap-5 sm:mt-7 sm:grid-cols-3 sm:gap-6">
              {rubros.map(({ label, desc }) => (
                <div
                  key={label}
                  className="group rounded-2xl bg-[var(--background-elevated)] p-6 card-premium border border-[var(--card-border)] hover:ring-1 hover:ring-[var(--card-border)] sm:p-8"
                >
                  <div className="mb-4 h-px w-8 bg-[var(--accent)]/40 group-hover:bg-[var(--accent)] group-hover:w-12 transition-all duration-300 mx-auto" aria-hidden />
                  <h3 className="text-lg font-semibold tracking-tight text-[var(--foreground)] text-center">
                    {label}
                  </h3>
                  <p className="mt-3 text-sm text-[var(--foreground-muted)] leading-relaxed text-center">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESO */}
        <section
          id="proceso"
          ref={processReveal.ref}
          className={`px-4 sm:px-6 ${transitionClass} ${processReveal.isVisible ? visibleClass : hiddenClass}`}
        >
          <div className="mx-auto max-w-3xl">
            <SectionHeader
              label="Proceso"
              title="Cómo trabajo"
              subtitle="Un flujo claro para que sepas en qué etapa estamos y cuándo tendrás tu sitio listo."
            />
          </div>
          <div className="mx-auto mt-7 grid max-w-4xl gap-5 sm:mt-8 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {[
              { step: "01", title: "Consulta", desc: "Contamos qué necesitás y definimos alcance, plazos y presupuesto." },
              { step: "02", title: "Propuesta", desc: "Te envío una propuesta formal con entregables y cronograma." },
              { step: "03", title: "Desarrollo", desc: "Diseño y desarrollo con revisiones en cada etapa clave." },
              { step: "04", title: "Entrega", desc: "Publicamos tu sitio, te doy acceso y soporte post-lanzamiento." },
            ].map(({ step, title, desc }) => (
              <div
                key={step}
                className="group overflow-hidden rounded-2xl bg-[var(--background-elevated)] p-6 card-premium border border-[var(--card-border)] hover:ring-1 hover:ring-[var(--card-border)]"
              >
                <div className="mb-3 h-px w-8 bg-[var(--accent)]/40 transition-all duration-300 group-hover:w-12 group-hover:bg-[var(--accent)]" aria-hidden />
                <span className="text-xs font-semibold tracking-wider text-[var(--accent)]">{step}</span>
                <h3 className="mt-2 text-lg font-semibold tracking-tight text-[var(--foreground)]">{title}</h3>
                <p className="mt-2 text-sm text-[var(--foreground-muted)] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROYECTOS: La Guarida + testimonio */}
        <section
          id="proyectos"
          ref={projectsReveal.ref}
          className={`px-4 sm:px-6 ${transitionClass} ${projectsReveal.isVisible ? visibleClass : hiddenClass}`}
        >
          <div className="mx-auto max-w-3xl">
            <SectionHeader
              label="Proyectos"
              title="Webs que desarrollé"
              subtitle="Sitios en producción para clientes: claros, rápidos y pensados para atraer clientes."
            />
          </div>
          <div className="mx-auto mt-7 max-w-3xl sm:mt-8">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group overflow-hidden rounded-2xl bg-[var(--background-elevated)] card-premium border border-[var(--card-border)] hover:ring-1 hover:ring-[var(--card-border)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[4/3]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  {project.tags && project.tags.length > 0 && (
                    <div className="absolute left-3 top-3 flex flex-wrap gap-2 sm:left-4 sm:top-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg bg-[var(--background-elevated)]/95 px-2.5 py-1 text-[11px] font-medium text-[var(--foreground)] shadow-sm backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="p-5 text-center sm:p-6">
                  <div className="mb-3 h-px w-8 bg-[var(--accent)]/40 group-hover:bg-[var(--accent)] group-hover:w-12 transition-all duration-300 mx-auto" aria-hidden />
                  <h3 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--foreground-muted)] leading-relaxed">
                    {project.description}
                  </p>
                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-brand mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)]"
                    >
                      Ver sitio
                      <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
                <div className="border-t border-[var(--card-border)] px-5 py-5 sm:px-6 sm:py-6">
                  <p className="text-center text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">Lo que dice el cliente</p>
                  <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                    <blockquote className="text-center">
                      <p className="text-sm text-[var(--foreground)] leading-relaxed sm:text-base">
                        &ldquo;Agustín logró una web clara y moderna que mejoró nuestras consultas.&rdquo;
                      </p>
                      <footer className="mt-2">
                        <cite className="not-italic text-sm font-medium text-[var(--foreground)]">Leo Ruberti</cite>
                        <span className="block text-xs text-[var(--foreground-muted)]">La Guarida Instrumentos</span>
                      </footer>
                    </blockquote>
                    <blockquote className="text-center">
                      <p className="text-sm text-[var(--foreground)] leading-relaxed sm:text-base">
                        &ldquo;Excelente comunicación y enfoque profesional.&rdquo;
                      </p>
                      <footer className="mt-2">
                        <cite className="not-italic text-sm font-medium text-[var(--foreground)]">Leo Ruberti</cite>
                        <span className="block text-xs text-[var(--foreground-muted)]">La Guarida Instrumentos</span>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EN DESARROLLO: proyectos en curso con permiso del cliente */}
        {inDevelopmentProjects.length > 0 && (
          <section
            id="en-desarrollo"
            ref={inDevelopmentReveal.ref}
            className={`px-4 sm:px-6 ${transitionClass} ${inDevelopmentReveal.isVisible ? visibleClass : hiddenClass}`}
          >
            <div className="mx-auto max-w-3xl">
              <SectionHeader
                label="En desarrollo"
                title="Proyectos en curso"
                subtitle="Sitios que estamos desarrollando ahora. Podés ver el avance en el enlace."
              />
            </div>
            <div
              className={`mx-auto mt-7 gap-5 sm:mt-8 sm:gap-6 md:gap-8 ${
                inDevelopmentProjects.length === 1
                  ? "grid max-w-3xl grid-cols-1"
                  : "grid max-w-5xl grid-cols-1 md:grid-cols-2"
              }`}
            >
              {inDevelopmentProjects.map((project) => (
                <article
                  key={project.id}
                  className="card-premium group overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--background-elevated)] hover:ring-1 hover:ring-[var(--card-border)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[4/3]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      style={{ objectPosition: project.imagePosition ?? "center 40%" }}
                      unoptimized
                    />
                    <span className="absolute right-3 top-3 rounded-lg bg-amber-500/95 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white shadow-sm">
                      En desarrollo
                    </span>
                    {project.tags && project.tags.length > 0 && (
                      <div className="absolute left-3 bottom-3 flex flex-wrap gap-2 sm:left-4 sm:bottom-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-lg bg-[var(--background-elevated)]/95 px-2.5 py-1 text-[11px] font-medium text-[var(--foreground)] shadow-sm backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="p-5 text-center sm:p-6">
                    <div className="mb-3 h-px w-8 bg-[var(--accent)]/40 group-hover:bg-[var(--accent)] group-hover:w-12 transition-all duration-300 mx-auto" aria-hidden />
                    <h3 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--foreground-muted)] leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mt-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-brand inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)]"
                      >
                        Ver avance
                        <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <p className="mt-1.5 text-xs text-[var(--muted)]">
                        Abre en nueva pestaña · Sitio en desarrollo
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* EJEMPLOS: deploys de demostración */}
        <section
          id="ejemplos"
          ref={examplesReveal.ref}
          className={`px-4 sm:px-6 ${transitionClass} ${examplesReveal.isVisible ? visibleClass : hiddenClass}`}
        >
          <div className="mx-auto max-w-3xl">
            <SectionHeader
              label="Ejemplos"
              title="Deploys de demostración"
              subtitle="Sitios de ejemplo en vivo (alojados en Vercel) para que veas el tipo de desarrollo: ecommerce, turismo con reservas, etc. No son proyectos en producción."
            />
          </div>
          <div className="mx-auto mt-7 grid max-w-5xl gap-5 sm:mt-8 sm:gap-6 md:grid-cols-2 md:gap-8">
            {examples.map((example) => (
              <article
                key={example.id}
                className="group overflow-hidden rounded-2xl bg-[var(--background-elevated)] card-premium border border-[var(--card-border)] hover:ring-1 hover:ring-[var(--card-border)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[4/3]">
                  <Image
                    src={example.image}
                    alt={example.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    style={{ objectPosition: example.imagePosition ?? "center 40%" }}
                    unoptimized
                  />
                  {example.tags && example.tags.length > 0 && (
                    <div className="absolute left-3 top-3 flex flex-wrap gap-2 sm:left-4 sm:top-4">
                      {example.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg bg-[var(--background-elevated)]/95 px-2.5 py-1 text-[11px] font-medium text-[var(--foreground)] shadow-sm backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="p-5 text-center sm:p-6">
                  <div className="mb-3 h-px w-8 bg-[var(--accent)]/40 group-hover:bg-[var(--accent)] group-hover:w-12 transition-all duration-300 mx-auto" aria-hidden />
                  <h3 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
                    {example.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--foreground-muted)] leading-relaxed">
                    {example.description}
                  </p>
                  {example.extraNote && (
                    <p className="mt-3 text-xs text-[var(--accent)] font-medium">
                      {example.extraNote}
                    </p>
                  )}
                  {example.link && example.link !== "#" && (
                    <div className="mt-4">
                      <a
                        href={example.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-brand inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)]"
                      >
                        Ver demo en vivo
                        <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <p className="mt-1.5 text-xs text-[var(--muted)]">
                        Abre en nueva pestaña · Sitio de demostración
                      </p>
                    </div>
                  )}
                  {example.link === "#" && (
                    <span className="mt-4 inline-block text-xs text-[var(--muted)]">Próximamente</span>
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
          className={`px-4 sm:px-6 ${transitionClass} ${servicesReveal.isVisible ? visibleClass : hiddenClass}`}
        >
          <div className="mx-auto max-w-3xl">
            <SectionHeader
              label="Servicios"
              title="Todo lo que tu negocio necesita en una web"
              subtitle="Sitios profesionales, rápidos y orientados a convertir visitantes en clientes."
            />
          </div>
          <div className="mx-auto mt-7 grid max-w-5xl grid-cols-1 gap-5 sm:mt-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {servicios.map(({ title, desc }) => (
              <article
                key={title}
                className="group flex min-h-[200px] flex-col rounded-2xl bg-[var(--background-elevated)] p-6 card-premium border border-[var(--card-border)] hover:ring-1 hover:ring-[var(--card-border)] sm:p-8"
              >
                <div className="mb-4 h-px w-8 bg-[var(--accent)]/40 group-hover:bg-[var(--accent)] group-hover:w-12 transition-all duration-300" aria-hidden />
                <h3 className="font-semibold tracking-tight text-[var(--foreground)]">{title}</h3>
                <p className="mt-3 flex-1 text-sm text-[var(--foreground-muted)] leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* SOBRE MÍ */}
        <section
          id="about"
          ref={aboutReveal.ref}
          className={`px-4 sm:px-6 ${transitionClass} ${aboutReveal.isVisible ? visibleClass : hiddenClass}`}
        >
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <div className="flex justify-center">
              <SectionLabel>Sobre mí</SectionLabel>
            </div>
            <h2 className="mt-6 text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:mt-7 md:mt-8 sm:text-3xl md:text-4xl">
              Agustín Ader
            </h2>
            <p className="mt-5 w-full text-sm text-[var(--foreground-muted)] leading-relaxed sm:text-base">
              Soy desarrollador frontend con más de 9 años de experiencia en atención al cliente y administración. Combino know‑how técnico con comprensión de procesos de negocio para entregar soluciones web confiables y orientadas a resultados.
            </p>
            <p className="mt-4 w-full text-sm text-[var(--foreground-muted)] leading-relaxed sm:text-base">
              Trabajo con empresas y emprendimientos —incluyendo turismo y servicios— para convertir necesidades operativas en sitios claros, fáciles de usar y pensados para generar consultas y ventas.
            </p>
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                scrollToContact();
              }}
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[var(--btn-primary-bg)] px-5 py-3 text-sm font-medium text-[var(--btn-primary-text)] transition-all duration-200 hover:bg-[var(--btn-primary-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
            >
              Hablemos de tu proyecto
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>

        {/* CONTACTO + FORMULARIO PRESUPUESTO */}
        <section
          id="contacto"
          ref={contactReveal.ref}
          className={`px-4 sm:px-6 pb-4 ${transitionClass} ${contactReveal.isVisible ? visibleClass : hiddenClass}`}
        >
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <SectionLabel>Contacto</SectionLabel>
            </div>
            <h2 className="mt-6 text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:mt-7 md:mt-8 sm:text-3xl md:text-4xl">
              Pedí tu presupuesto
            </h2>
            <p className="mt-3 w-full text-sm text-[var(--foreground-muted)] leading-relaxed sm:text-base">
              Contame tu proyecto y te respondo con una propuesta sin compromiso. También podés escribirme por WhatsApp.
            </p>
          </div>
          <div className="mt-8 flex flex-col items-center gap-6">
            <BudgetForm />
            <a
              href="https://wa.me/5491168696491?text=Hola%21%20Vi%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20consultarte%20por%20una%20web."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
              className="link-brand inline-flex items-center gap-2 text-sm"
            >
              <FaWhatsapp className="h-5 w-5 shrink-0" />
              Prefiero contactar por WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--card-border)] bg-[var(--background-elevated)]/80 py-10 sm:py-12 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 text-center">
          <div className="flex justify-center gap-8">
            <a
              href="https://www.instagram.com/agustinader.dev?utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="link-brand"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
            <a
              href="mailto:agusttin.dev@gmail.com"
              aria-label="Correo electrónico"
              className="link-brand"
            >
              <FiMail className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/5491168696491?text=Hola%21%20Me%20pod%C3%A9s%20dar%20m%C3%A1s%20informaci%C3%B3n%3F"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="link-brand"
            >
              <FaWhatsapp className="h-5 w-5" />
            </a>
          </div>
          <div className="mt-6 flex flex-col items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Agustín Ader – Desarrollador Frontend"
              width={160}
              height={50}
              className="h-8 w-auto object-contain md:h-9"
            />
            <span className="text-sm text-[var(--foreground-muted)]">Desarrollado por Agustín Ader</span>
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
