import type { ReactNode } from "react";
import {
  HiOutlineBriefcase,
  HiOutlineCpuChip,
  HiOutlineBuildingOffice2,
  HiOutlineAcademicCap,
  HiOutlineSignal,
  HiArrowUpRight,
} from "react-icons/hi2";
import { ExternalLink } from "@/components/ExternalLink";
import { IconWhatsApp } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import {
  CERTIFICATIONS_SHORT,
  CLIENTS,
  OVERVIEW_TECH,
  WHATSAPP_URL,
} from "@/lib/constants";

function BentoCell({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <Reveal className={`bento-cell ${className}`} variant="scale" delay={delay}>
      {children}
    </Reveal>
  );
}

export function BentoGrid() {
  return (
    <section id="overview" className="section-shell">
      <div className="cq w-full">
        <SectionHeader
          align="left"
          label="Resumen"
          title="De un vistazo"
          description="Experiencia, herramientas, clientes y si estoy tomando laburo — todo junto."
          className="mb-0 max-w-xl"
        />

        <div className="cq-grid-bento mt-14 sm:mt-16">
          <BentoCell className="bento-cell-accent cq-bento-experience relative" delay={0}>
            <div className="bento-cell-glow" aria-hidden />
            <div className="relative flex h-full flex-col justify-between p-5 sm:p-7 lg:p-8">
              <div className="flex items-center gap-2 text-[var(--muted)]">
                <HiOutlineBriefcase className="h-4 w-4 shrink-0" aria-hidden />
                <span className="eyebrow-muted tracking-[0.14em]">Experiencia</span>
              </div>
              <div className="min-w-0">
                <p className="font-display text-[clamp(3.25rem,12vw,6.5rem)] font-bold leading-none tracking-tight text-gradient">
                  2+
                </p>
                <p className="mt-3 max-w-xs text-[length:var(--text-lg)] text-[var(--foreground-muted)]">
                  años haciendo landings claras para negocios de acá.
                </p>
                <p className="mt-4 text-[length:var(--text-sm)] text-[var(--muted)]">Freelance · Argentina · 2024—hoy</p>
              </div>
            </div>
          </BentoCell>

          <BentoCell className="cq-span-2" delay={80}>
            <div className="flex h-full flex-col p-5 sm:p-7">
              <div className="flex items-center gap-2 text-[var(--muted)]">
                <HiOutlineCpuChip className="h-4 w-4 shrink-0" aria-hidden />
                <span className="eyebrow-muted tracking-[0.14em]">Tecnologías</span>
              </div>
              <p className="mt-4 font-display text-[length:var(--text-xl)] font-bold text-[var(--foreground)]">
                Stack con el que laburo
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {OVERVIEW_TECH.map((tech) => (
                  <li key={tech} className="bento-chip">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </BentoCell>

          <BentoCell delay={120}>
            <div className="flex h-full flex-col p-5 sm:p-6">
              <div className="flex items-center gap-2 text-[var(--muted)]">
                <HiOutlineBuildingOffice2 className="h-4 w-4 shrink-0" aria-hidden />
                <span className="eyebrow-muted tracking-[0.14em]">Clientes</span>
              </div>
              <p className="mt-5 font-display text-[length:var(--text-2xl)] font-bold text-[var(--foreground)]">
                2+
              </p>
              <ul className="mt-4 space-y-2">
                {CLIENTS.map((client) => (
                  <li key={client} className="break-words text-[length:var(--text-sm)] text-[var(--foreground-muted)]">
                    {client}
                  </li>
                ))}
              </ul>
            </div>
          </BentoCell>

          <BentoCell delay={160}>
            <div className="flex h-full flex-col justify-between p-5 sm:p-6">
              <div className="flex items-center gap-2 text-[var(--muted)]">
                <HiOutlineSignal className="h-4 w-4 shrink-0" aria-hidden />
                <span className="eyebrow-muted tracking-[0.14em]">Disponibilidad</span>
              </div>
              <div className="mt-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(37,211,102,0.35)] bg-[rgba(37,211,102,0.08)] px-3 py-1.5 text-[length:var(--text-xs)] font-semibold uppercase tracking-[0.12em] text-[#4ade80]">
                  <span className="bento-pulse" aria-hidden />
                  Tomando proyectos
                </span>
                <p className="mt-4 text-[length:var(--text-sm)] leading-relaxed text-[var(--foreground-muted)]">
                  Tengo lugar para proyectos nuevos este mes.
                </p>
              </div>
            </div>
          </BentoCell>

          <BentoCell className="cq-span-2" delay={200}>
            <div className="flex h-full flex-col p-5 sm:p-7">
              <div className="flex items-center gap-2 text-[var(--muted)]">
                <HiOutlineAcademicCap className="h-4 w-4 shrink-0" aria-hidden />
                <span className="eyebrow-muted tracking-[0.14em]">Certificaciones</span>
              </div>
              <ul className="cq-certs-row mt-5 grid gap-4">
                {CERTIFICATIONS_SHORT.map((cert) => (
                  <li key={cert.title} className="cq-cert-item min-w-0">
                    <p className="font-display text-[length:var(--text-sm)] font-bold text-[var(--foreground)]">
                      {cert.title}
                    </p>
                    <p className="mt-1 text-[length:var(--text-xs)] text-[var(--muted)]">{cert.meta}</p>
                  </li>
                ))}
              </ul>
            </div>
          </BentoCell>

          <BentoCell className="bento-cell-cta cq-span-2" delay={240}>
            <ExternalLink
              href={WHATSAPP_URL}
              className="focus-ring relative flex h-full flex-col justify-between rounded-[inherit] p-5 sm:p-7"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-[length:var(--text-xs)] font-semibold uppercase tracking-[0.14em] text-[var(--btn-primary-text)]/80">
                  Contacto
                </span>
                <HiArrowUpRight className="h-4 w-4 shrink-0 text-[var(--btn-primary-text)]/80" aria-hidden />
              </div>
              <div className="mt-8 min-w-0">
                <p className="font-display text-[length:var(--text-2xl)] font-bold tracking-tight text-[var(--btn-primary-text)] sm:text-[length:var(--text-3xl)]">
                  Hablemos de tu web
                </p>
                <p className="mt-2 max-w-sm text-[length:var(--text-sm)] text-[var(--btn-primary-text)]/80">
                  Contame tu negocio por WhatsApp y vemos cómo seguir.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-[length:var(--text-sm)] font-semibold text-[var(--btn-primary-text)]">
                  <IconWhatsApp className="h-4 w-4" aria-hidden />
                  Escribir ahora
                </span>
              </div>
            </ExternalLink>
          </BentoCell>
        </div>
      </div>
    </section>
  );
}
