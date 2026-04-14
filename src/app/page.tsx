"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { projects } from "@/data/projects";
import { inDevelopmentProjects } from "@/data/in-development";
import { examples } from "@/data/examples";
import { BudgetForm } from "@/components/BudgetForm";

function useRevealSection(initialVisible = false): [React.RefObject<HTMLElement | null>, boolean] {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(initialVisible);

  useEffect(() => {
    if (initialVisible) return;
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      const fallbackReveal = window.setTimeout(() => setIsVisible(true), 0);
      return () => window.clearTimeout(fallbackReveal);
    }
    let didReveal = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!didReveal && entry.isIntersecting) {
            didReveal = true;
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

  return [ref, isVisible];
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
  align = "center",
}: {
  label: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
  align?: "center" | "left";
}) {
  const isLeft = align === "left";
  return (
    <div className={`flex flex-col ${isLeft ? "items-start text-left" : "items-center text-center"} ${className}`}>
      <div className={`flex ${isLeft ? "justify-start" : "justify-center"}`}>
        <SectionLabel>{label}</SectionLabel>
      </div>
      <h2 className="mt-6 text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:mt-7 md:mt-8 sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-2.5 w-full text-sm text-[var(--foreground-muted)] sm:text-base leading-relaxed ${isLeft ? "max-w-2xl" : "max-w-lg"}`}>
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
  { label: "Hospitality y turismo", desc: "Hoteles, hostels, cabañas y experiencias con foco comercial." },
  { label: "Empresas de servicios", desc: "Consultorías y negocios con necesidad de presencia digital confiable." },
  { label: "Marcas en expansión", desc: "Emprendimientos con objetivos de posicionamiento y captación." },
];

const servicios = [
  { title: "Arquitectura web profesional", desc: "Estructuras claras que elevan la percepción de marca y la experiencia de usuario." },
  { title: "Responsive estratégico", desc: "Diseño consistente para mobile, tablet y desktop sin perder jerarquía visual." },
  { title: "SEO y autoridad digital", desc: "Base técnica y contenidos orientados a mejorar visibilidad y calidad de tráfico." },
  { title: "Canales de conversión", desc: "Formularios y WhatsApp pensados para convertir visitas en oportunidades." },
  { title: "Escalabilidad y mantenimiento", desc: "Implementación sólida para evolucionar el sitio con seguridad." },
];

const contactGuidelines = [
  { title: "Respuesta inicial", detail: "Dentro de 24 horas hábiles con próximos pasos claros." },
  { title: "Primera propuesta", detail: "Documento de alcance, plazos y presupuesto estimado." },
  { title: "Inicio de trabajo", detail: "Kickoff con objetivos, prioridades y cronograma de entregas." },
];

export default function Home() {
  const [heroRef, heroVisible] = useRevealSection(true);
  const [rubrosRef, rubrosVisible] = useRevealSection();
  const [processRef, processVisible] = useRevealSection();
  const [projectsRef, projectsVisible] = useRevealSection();
  const [inDevelopmentRef, inDevelopmentVisible] = useRevealSection();
  const [examplesRef, examplesVisible] = useRevealSection();
  const [servicesRef, servicesVisible] = useRevealSection();
  const [aboutRef, aboutVisible] = useRevealSection();
  const [contactRef, contactVisible] = useRevealSection();

  const transitionClass = "transition-all duration-700 ease-out";
  const visibleClass = "opacity-100 translate-y-0";
  const hiddenClass = "opacity-0 translate-y-8";

  return (
    <>
      <main className="space-y-14 pb-8 sm:space-y-16 md:space-y-20 lg:space-y-24">
        {/* HERO */}
        <section
          id="hero"
          ref={heroRef}
          className={`hero-premium-bg premium-ambient px-5 pt-12 pb-10 sm:px-8 sm:pt-16 sm:pb-12 md:pt-24 md:pb-14 ${transitionClass} ${
            heroVisible ? visibleClass : hiddenClass
          }`}
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-12">
            <div className="max-w-2xl text-left">
              <SectionLabel>Portfolio profesional</SectionLabel>
              <h1 className="mt-8 text-3xl font-semibold leading-[1.12] tracking-tight text-[var(--foreground)] sm:mt-10 md:mt-12 sm:text-4xl md:text-5xl lg:text-[3rem]">
                Diseño y desarrollo web con estándar corporativo
              </h1>
              <p className="mt-5 max-w-2xl text-base text-[var(--foreground-muted)] leading-relaxed sm:text-lg">
                Construyo sitios de alto impacto visual para empresas que necesitan posicionarse con claridad, diferenciarse en su mercado y convertir tráfico en oportunidades reales.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#contacto"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToContact();
                  }}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[var(--btn-primary-bg)] px-6 py-3.5 text-sm font-semibold text-[var(--btn-primary-text)] shadow-[var(--shadow-md)] transition-all duration-200 hover:bg-[var(--btn-primary-hover)] hover:shadow-[var(--shadow-lg)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
                >
                  Solicitar propuesta
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
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-[var(--card-border)] bg-[var(--background-elevated)] px-6 py-3.5 text-sm font-semibold text-[var(--foreground)] transition-all duration-200 hover:bg-[var(--accent-soft-hover)] hover:border-[var(--foreground)]/12 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
                >
                  Revisar casos
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-2 text-xs font-medium uppercase tracking-[0.12em] text-[var(--foreground-muted)] sm:gap-3">
                <span className="badge-premium rounded-full px-3 py-1.5">9+ años de experiencia</span>
                <span className="badge-premium rounded-full px-3 py-1.5">Respuesta en 24 h hábiles</span>
                <span className="badge-premium rounded-full px-3 py-1.5">Ejecución orientada a resultados</span>
              </div>
            </div>
            <aside className="grid-balanced premium-float border-l border-[var(--section-divider)] pl-5 sm:pl-7">
              {[
                { value: "9+", label: "Años de experiencia profesional" },
                { value: "24 h", label: "Tiempo estimado de respuesta inicial" },
                { value: "100%", label: "Enfoque en claridad y conversión" },
              ].map((metric) => (
                <div key={metric.label} className="border-b border-[var(--section-divider)]/70 pb-4 last:border-0 last:pb-0">
                  <p className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">{metric.value}</p>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--foreground-muted)]">{metric.label}</p>
                </div>
              ))}
            </aside>
          </div>
        </section>

        {/* PARA QUIÉN - Trabajo con */}
        <section
          id="trabajo-con"
          ref={rubrosRef}
          className={`section-shell ${transitionClass} ${rubrosVisible ? visibleClass : hiddenClass}`}
        >
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--foreground-muted)]">Sectores clave</p>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:mt-7 sm:grid-cols-3 sm:gap-6">
              {rubros.map(({ label, desc }, index) => (
                <div
                  key={label}
                  className={`group border-l border-[var(--section-divider)] pl-5 transition-all duration-700 sm:pl-6 ${
                    rubrosVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="mb-4 h-px w-8 bg-[var(--accent)]/35 transition-all duration-500 group-hover:w-14 group-hover:bg-[var(--accent)]" aria-hidden />
                  <h3 className="text-lg font-semibold tracking-tight text-[var(--foreground)]">
                    {label}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--foreground-muted)]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESO */}
        <section
          id="proceso"
          ref={processRef}
          className={`section-shell ${transitionClass} ${processVisible ? visibleClass : hiddenClass}`}
        >
          <div className="mx-auto max-w-5xl">
            <SectionHeader
              label="Proceso"
              title="Metodología de trabajo"
              subtitle="Un proceso transparente para ejecutar con previsibilidad, calidad técnica y foco en objetivos comerciales."
              align="left"
            />
          </div>
          <div className="mx-auto mt-7 grid max-w-5xl gap-5 sm:mt-8 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {[
              { step: "01", title: "Diagnóstico", desc: "Relevamos contexto y objetivos para definir alcance realista." },
              { step: "02", title: "Propuesta ejecutiva", desc: "Presento una propuesta formal con cronograma y entregables." },
              { step: "03", title: "Implementación", desc: "Diseño y desarrollo iterativo con revisiones en hitos críticos." },
              { step: "04", title: "Lanzamiento", desc: "Publicación, traspaso operativo y acompañamiento posterior." },
            ].map(({ step, title, desc }, index) => (
              <div
                key={step}
                className={`group border-l border-[var(--section-divider)] pl-5 transition-all duration-700 ${
                  processVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
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
          ref={projectsRef}
          className={`section-shell ${transitionClass} ${projectsVisible ? visibleClass : hiddenClass}`}
        >
          <div className="mx-auto max-w-5xl">
            <SectionHeader
              label="Proyectos"
              title="Casos implementados"
              subtitle="Proyectos en producción diseñados para fortalecer marca y aumentar consultas calificadas."
              align="left"
            />
          </div>
          <div className="mx-auto mt-7 max-w-5xl sm:mt-8">
            {projects.map((project, index) => (
                <article
                  key={project.id}
                className={`group overflow-hidden rounded-2xl bg-[var(--background-elevated)] border border-[var(--card-border)] transition-all duration-500 hover:-translate-y-0.5 hover:border-[var(--accent)]/35 hover:shadow-[var(--shadow-premium)] ${
                  projectsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${index * 90}ms` }}
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
                <div className="p-5 sm:p-6">
                  <div className="mb-3 h-px w-8 bg-[var(--accent)]/40 transition-all duration-300 group-hover:w-12 group-hover:bg-[var(--accent)]" aria-hidden />
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
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">Validación del cliente</p>
                  <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                    <blockquote>
                      <p className="text-sm text-[var(--foreground)] leading-relaxed sm:text-base">
                        &ldquo;El nuevo sitio elevó nuestra presencia digital y mejoró la calidad de las consultas recibidas.&rdquo;
                      </p>
                      <footer className="mt-2">
                        <cite className="not-italic text-sm font-medium text-[var(--foreground)]">Leo Ruberti</cite>
                        <span className="block text-xs text-[var(--foreground-muted)]">La Guarida Instrumentos</span>
                      </footer>
                    </blockquote>
                    <blockquote>
                      <p className="text-sm text-[var(--foreground)] leading-relaxed sm:text-base">
                        &ldquo;La gestión fue ordenada, clara y con tiempos de entrega cumplidos.&rdquo;
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
            ref={inDevelopmentRef}
            className={`section-shell ${transitionClass} ${inDevelopmentVisible ? visibleClass : hiddenClass}`}
          >
            <div className="mx-auto max-w-5xl">
              <SectionHeader
                label="En desarrollo"
                title="Iniciativas en ejecución"
                subtitle="Proyectos actualmente en construcción, compartidos con autorización para mostrar avances."
                align="left"
              />
            </div>
            <div
              className={`mx-auto mt-7 gap-5 sm:mt-8 sm:gap-6 md:gap-8 ${
                inDevelopmentProjects.length === 1
                  ? "grid max-w-5xl grid-cols-1"
                  : "grid max-w-5xl grid-cols-1 md:grid-cols-2"
              }`}
            >
              {inDevelopmentProjects.map((project, index) => (
                <article
                  key={project.id}
                  className={`group overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--background-elevated)] transition-all duration-500 hover:-translate-y-0.5 hover:border-[var(--accent)]/35 hover:shadow-[var(--shadow-premium)] ${
                    inDevelopmentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${index * 90}ms` }}
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
                  <div className="p-5 sm:p-6">
                    <div className="mb-3 h-px w-8 bg-[var(--accent)]/40 transition-all duration-300 group-hover:w-12 group-hover:bg-[var(--accent)]" aria-hidden />
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
          ref={examplesRef}
          className={`section-shell ${transitionClass} ${examplesVisible ? visibleClass : hiddenClass}`}
        >
          <div className="mx-auto max-w-5xl">
            <SectionHeader
              label="Ejemplos"
              title="Prototipos de referencia"
              subtitle="Entornos demostrativos en vivo para visualizar arquitectura, experiencia y criterio de diseño aplicable a distintos modelos de negocio."
              align="left"
            />
          </div>
          <div className="mx-auto mt-7 grid max-w-5xl gap-5 sm:mt-8 sm:gap-6 md:grid-cols-2 md:gap-8">
            {examples.map((example, index) => (
              <article
                key={example.id}
                className={`group overflow-hidden rounded-2xl bg-[var(--background-elevated)] border border-[var(--card-border)] transition-all duration-500 hover:-translate-y-0.5 hover:border-[var(--accent)]/35 hover:shadow-[var(--shadow-premium)] ${
                  examplesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${index * 90}ms` }}
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
                <div className="p-5 sm:p-6">
                  <div className="mb-3 h-px w-8 bg-[var(--accent)]/40 transition-all duration-300 group-hover:w-12 group-hover:bg-[var(--accent)]" aria-hidden />
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
                        Ver entorno en vivo
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
          ref={servicesRef}
          className={`section-shell ${transitionClass} ${servicesVisible ? visibleClass : hiddenClass}`}
        >
          <div className="mx-auto max-w-5xl">
            <SectionHeader
              label="Servicios"
              title="Servicios orientados a negocio"
              subtitle="Soluciones web pensadas para consolidar posicionamiento, optimizar conversión y sostener crecimiento."
              align="left"
            />
          </div>
          <div className="mx-auto mt-7 grid max-w-5xl grid-cols-1 gap-5 sm:mt-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {servicios.map(({ title, desc }, index) => (
              <article
                className={`group flex min-h-[160px] flex-col border-l border-[var(--section-divider)] pl-5 transition-all duration-700 sm:pl-6 ${
                  servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                key={title}
                style={{ transitionDelay: `${index * 80}ms` }}
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
          ref={aboutRef}
          className={`section-shell ${transitionClass} ${aboutVisible ? visibleClass : hiddenClass}`}
        >
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-start">
            <div>
              <SectionLabel>Sobre mí</SectionLabel>
              <h2 className="mt-6 text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl md:text-4xl">
                Agustín Ader
              </h2>
              <p className="mt-5 w-full text-sm leading-relaxed text-[var(--foreground-muted)] sm:text-base">
                Soy desarrollador frontend con más de 9 años de experiencia en gestión operativa y atención al cliente. Integro criterio técnico y visión comercial para construir soluciones digitales confiables, escalables y orientadas a resultados.
              </p>
              <p className="mt-4 w-full text-sm leading-relaxed text-[var(--foreground-muted)] sm:text-base">
                Trabajo con empresas y emprendimientos para transformar necesidades de negocio en experiencias web claras, de alto nivel visual y preparadas para convertir visitas en oportunidades reales.
              </p>
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToContact();
                }}
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[var(--btn-primary-bg)] px-5 py-3 text-sm font-medium text-[var(--btn-primary-text)] transition-all duration-200 hover:bg-[var(--btn-primary-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
              >
                Coordinar una reunión
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <div className="grid-balanced border-l border-[var(--section-divider)] pl-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">Propuesta de valor</p>
              <p className="text-sm leading-relaxed text-[var(--foreground-muted)]">
                Claridad estratégica, ejecución técnica y diseño de alto estándar para proyectar una marca profesional.
              </p>
              <p className="text-sm leading-relaxed text-[var(--foreground-muted)]">
                Acompañamiento cercano durante todo el proceso, desde diagnóstico hasta lanzamiento.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACTO + FORMULARIO PRESUPUESTO */}
        <section
          id="contacto"
          ref={contactRef}
          className={`section-shell pb-4 ${transitionClass} ${contactVisible ? visibleClass : hiddenClass}`}
        >
          <div className="mx-auto max-w-5xl">
            <div className="flex justify-start">
              <SectionLabel>Contacto</SectionLabel>
            </div>
            <h2 className="mt-6 text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:mt-7 md:mt-8 sm:text-3xl md:text-4xl">
              Solicita tu propuesta
            </h2>
            <p className="mt-3 w-full max-w-2xl text-sm text-[var(--foreground-muted)] leading-relaxed sm:text-base">
              Comparte tus objetivos y te responderé con un planteo profesional de alcance, tiempos y próximos pasos. También puedes contactarme por WhatsApp.
            </p>
          </div>
          <div className="mt-8 grid max-w-5xl gap-8 md:grid-cols-[minmax(0,1fr)_320px] md:items-start">
            <BudgetForm />
            <aside className="grid-balanced border-l border-[var(--section-divider)] pl-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">Antes de enviar</p>
              {contactGuidelines.map((item) => (
                <div key={item.title} className="border-b border-[var(--section-divider)]/70 pb-4 last:border-0 last:pb-0">
                  <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--foreground-muted)]">{item.detail}</p>
                </div>
              ))}
              <a
                href="https://wa.me/5491168696491?text=Hola%21%20Vi%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20consultarte%20por%20una%20web."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
                className="link-brand inline-flex items-center gap-2 self-start pt-1 text-sm"
              >
                <FaWhatsapp className="h-5 w-5 shrink-0" />
                También disponible por WhatsApp
              </a>
            </aside>
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
