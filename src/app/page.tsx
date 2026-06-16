"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaWhatsapp, FaArrowRight, FaArrowUpRightFromSquare, FaBullseye, FaComments, FaClipboardList, FaMobileScreen, FaScrewdriverWrench } from "react-icons/fa6";
import { projects } from "@/data/projects";

const WHATSAPP_URL =
  "https://wa.me/5491168696491?text=Hola%20Agustin,%20quiero%20mejorar%20mi%20web%20para%20recibir%20mas%20consultas.";

const MARQUEE_ITEMS = [
  "Mas consultas",
  "Menos friccion",
  "WhatsApp integrado",
  "Mobile-first",
  "Conversion real",
  "Diseno claro",
  "Carga rapida",
  "Canal propio",
];

const BENEFITS = [
  {
    title: "Mas consultas reales",
    desc: "Cada seccion guia al visitante hacia el contacto, sin distracciones.",
    span: "col-span-1 sm:col-span-2",
    accent: true,
  },
  {
    title: "Menos tiempo en WhatsApp",
    desc: "La web responde lo basico. Vos atendes lo que importa.",
    span: "col-span-1",
    accent: false,
  },
  {
    title: "Imagen profesional",
    desc: "Una presencia digital que transmite confianza desde el primer segundo.",
    span: "col-span-1",
    accent: false,
  },
  {
    title: "Canal propio",
    desc: "Dejas de depender solo de Instagram o redes que no controlas.",
    span: "col-span-1 sm:col-span-2",
    accent: false,
  },
];

const SERVICES = [
  { icon: FaBullseye, title: "Landing de conversion", desc: "Estructura pensada para que el visitante entienda y actue." },
  { icon: FaWhatsapp, title: "WhatsApp integrado", desc: "Un click y el cliente ya te escribe con el mensaje listo." },
  { icon: FaClipboardList, title: "Formularios simples", desc: "Sin friccion. Solo los campos que realmente necesitas." },
  { icon: FaMobileScreen, title: "Diseno mobile-first", desc: "El 80% de tus clientes entra desde el celular. Lo priorizamos." },
  { icon: FaScrewdriverWrench, title: "Mantenimiento", desc: "Actualizaciones y soporte opcional para que no te preocupes." },
];

const PROBLEM_POINTS = [
  "Respondes lo mismo una y otra vez por WhatsApp",
  "La web no explica ni guia al cliente",
  "Perdes consultas por falta de claridad",
];

function useReveal(initialVisible = false) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(initialVisible);

  useEffect(() => {
    if (initialVisible) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [initialVisible]);

  return { ref, visible };
}

function Reveal({
  children,
  className = "",
  initialVisible = false,
}: {
  children: React.ReactNode;
  className?: string;
  initialVisible?: boolean;
}) {
  const { ref, visible } = useReveal(initialVisible);
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal ${visible ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SectionHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent)]">{label}</p>
      <h2 className="mt-3 text-[clamp(1.75rem,4vw,3rem)] font-bold leading-tight text-[var(--foreground)]">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[var(--foreground-muted)] sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <main className="relative z-10">
        {/* HERO */}
        <section id="hero" className="mesh-bg min-h-[100dvh] px-[var(--container-inline)] pb-20 pt-24 sm:pt-28">
          <div className="mx-auto max-w-6xl">
            <Reveal initialVisible>
              <div className="mb-6 inline-flex items-center gap-2 border border-[var(--card-border)] bg-[var(--accent-soft)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent)]">
                Landing pages que convierten
              </div>
            </Reveal>

            <Reveal initialVisible>
              <h1 className="max-w-4xl text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold leading-[0.95] tracking-tight text-[var(--foreground)]">
                Tu negocio merece una web que{" "}
                <span className="text-gradient">genere consultas</span>
              </h1>
            </Reveal>

            <Reveal initialVisible>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--foreground-muted)] sm:text-lg">
                Diseno claro, carga rapida y cada pixel pensado para que el cliente entienda, confie y te escriba. Sin vueltas.
              </p>
            </Reveal>

            <Reveal initialVisible>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button type="button" onClick={() => scrollTo("proyecto-real")} className="btn-primary">
                  Ver proyectos reales
                  <FaArrowRight className="h-3.5 w-3.5" />
                </button>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  <FaWhatsapp className="h-4 w-4 text-[#25D366]" />
                  Escribirme por WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal initialVisible>
              <div className="mt-16 grid grid-cols-3 gap-4 border-t border-[var(--card-border)] pt-8 sm:max-w-lg">
                {[
                  { val: "2+", label: "Proyectos en produccion" },
                  { val: "100%", label: "Mobile-first" },
                  { val: "24h", label: "Respuesta rapida" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
                      {stat.val}
                    </p>
                    <p className="mt-1 text-xs text-[var(--muted)]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="border-y border-[var(--card-border)] bg-[var(--surface-2)] px-[var(--container-inline)] py-4">
          <div className="marquee-strip md:hidden">
            {MARQUEE_ITEMS.map((item) => (
              <span
                key={item}
                className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--foreground-muted)]"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="hidden overflow-hidden md:block">
            <div className="marquee-track">
              {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
                <span
                  key={`${item}-${i}`}
                  className="mx-6 flex shrink-0 items-center gap-6 font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.12em] text-[var(--foreground-muted)]"
                >
                  {item}
                  <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* PROBLEMA */}
        <section id="problema" className="px-[var(--container-inline)] py-20 sm:py-28">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <SectionHeader
                label="El problema"
                title="Tenes trafico, pero no consultas"
                description="Se pierde tiempo respondiendo lo mismo por WhatsApp y la web no guia a nadie. Una landing clara convierte mejor y ordena el contacto desde el primer click."
              />
            </Reveal>
            <Reveal>
              <ul className="mb-8 grid gap-3 sm:grid-cols-3">
                {PROBLEM_POINTS.map((point) => (
                  <li
                    key={point}
                    className="panel-card flex items-center justify-center p-5 text-center text-sm leading-relaxed text-[var(--foreground-muted)] sm:text-base"
                  >
                    {point}
                  </li>
                ))}
              </ul>
              <div className="panel-card-accent mx-auto max-w-2xl p-8 text-center sm:p-10">
                <FaComments className="mx-auto h-6 w-6 text-[var(--accent)]" aria-hidden />
                <p className="mt-4 font-[family-name:var(--font-display)] text-lg font-semibold leading-snug text-[var(--foreground)] sm:text-xl">
                  Menos friccion, mas consultas reales. Ese es el objetivo de cada decision.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* BENEFICIOS */}
        <section id="beneficios" className="px-[var(--container-inline)] py-20 sm:py-28">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <SectionHeader
                label="Beneficios"
                title="Lo que cambia con una buena landing"
              />
            </Reveal>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {BENEFITS.map((b) => (
                <Reveal key={b.title}>
                  <article
                    className={`bento-card glass h-full rounded-2xl p-6 sm:p-8 ${b.span} ${
                      b.accent ? "border-[color-mix(in_srgb,var(--accent)_25%,var(--card-border))] bg-[var(--accent-soft)]" : ""
                    }`}
                  >
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--foreground)]">
                      {b.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--foreground-muted)] sm:text-base">
                      {b.desc}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROYECTOS */}
        <section id="proyecto-real" className="px-[var(--container-inline)] py-20 sm:py-28">
          <Reveal>
            <SectionHeader
              label="Proyectos reales"
              title="Sitios en produccion"
              description="Negocios reales que necesitaban mas consultas. Resultado: webs claras, rapidas y orientadas a la accion."
            />
          </Reveal>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={project.id}>
                <article className="panel-card flex h-full flex-col overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--card-border)]">
                    <Image
                      src={project.image}
                      alt={`Preview del sitio ${project.title}`}
                      fill
                      sizes="(min-width: 768px) 480px, 100vw"
                      className="object-cover object-top"
                      priority={index === 0}
                    />
                    {project.tags && (
                      <div className="absolute bottom-3 left-0 right-0 flex flex-wrap justify-center gap-2 px-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="border border-[var(--card-border)] bg-[var(--background-elevated)] px-3 py-1 text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6 text-center sm:p-7">
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--foreground)]">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--foreground-muted)]">
                      {project.description}
                    </p>
                    {project.highlights && (
                      <ul className="mt-4 space-y-2">
                        {project.highlights.map((item) => (
                          <li key={item} className="text-sm text-[var(--foreground-muted)]">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost mx-auto mt-6 !min-h-[2.5rem] !px-4 !text-sm"
                      >
                        Ver sitio
                        <FaArrowUpRightFromSquare className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="px-[var(--container-inline)] py-20 sm:py-28">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <SectionHeader label="Servicios" title="Todo lo que incluye" />
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map(({ icon: Icon, title, desc }) => (
                <Reveal key={title}>
                  <article className="panel-card flex h-full flex-col items-center p-6 text-center sm:p-8">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-bold text-[var(--foreground)]">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--foreground-muted)]">{desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SOBRE MI */}
        <section id="sobre-mi" className="px-[var(--container-inline)] py-20 sm:py-28">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="panel-card-accent flex flex-col items-center px-8 py-10 text-center sm:px-12 sm:py-14">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[var(--card-border)] bg-[var(--accent-soft)] font-[family-name:var(--font-display)] text-2xl font-extrabold text-[var(--accent)]">
                  AA
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent)]">Sobre mi</p>
                <blockquote className="mt-4 font-[family-name:var(--font-display)] text-[clamp(1.35rem,3vw,2rem)] font-bold leading-snug text-[var(--foreground)]">
                  Trabajo con negocios reales que necesitan resultados, no solo una web linda.
                </blockquote>
                <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-[var(--foreground-muted)]">
                  Mi enfoque es simple: que el cliente entienda rapido, consulte y convierta. Sin tecnicismos, sin vueltas.
                </p>
                <p className="mt-6 font-semibold text-[var(--foreground)]">— Agustin Ader</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="px-[var(--container-inline)] pb-28 pt-8 sm:pb-36">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="panel-card-accent flex flex-col items-center px-8 py-12 text-center sm:px-14 sm:py-16">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent)]">Contacto</p>
                <h2 className="mx-auto mt-4 max-w-xl font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight text-[var(--foreground)]">
                  Mejoramos como llegan y consultan tus clientes en 5 minutos
                </h2>
                <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[var(--foreground-muted)] sm:text-base">
                  Contame tu negocio por WhatsApp. Sin formularios eternos, sin compromiso.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-8"
                >
                  <FaWhatsapp className="h-4 w-4" />
                  Escribirme por WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-[var(--card-border)] px-[var(--container-inline)] py-8">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-[var(--muted)]">
              © {new Date().getFullYear()} Agustin Ader — Landing pages para conversion
            </p>
            <a
              href="https://www.instagram.com/agustinader.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--foreground-muted)] transition-colors hover:text-[var(--accent)]"
            >
              @agustinader.dev
            </a>
          </div>
        </footer>
      </main>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      >
        <FaWhatsapp className="h-6 w-6" />
      </a>
    </>
  );
}
