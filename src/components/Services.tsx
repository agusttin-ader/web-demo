import type { IconType } from "react-icons";
import {
  HiOutlineCursorArrowRays,
  HiOutlineDevicePhoneMobile,
  HiOutlineChatBubbleLeftRight,
  HiOutlineDocumentText,
  HiOutlineWrenchScrewdriver,
  HiArrowUpRight,
} from "react-icons/hi2";
import { ExternalLink } from "@/components/ExternalLink";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

type Service = {
  id: string;
  title: string;
  desc: string;
  cta: string;
  icon: IconType;
  accent: string;
};

const SERVICES: Service[] = [
  {
    id: "landing",
    title: "Landing de conversion",
    desc: "Estructura, jerarquia y CTAs pensados para que el visitante entienda rapido y actue sin friccion.",
    cta: "Quiero una landing",
    icon: HiOutlineCursorArrowRays,
    accent: "rgba(92, 225, 255, 0.22)",
  },
  {
    id: "whatsapp",
    title: "WhatsApp integrado",
    desc: "Un solo click y el cliente ya te escribe con el mensaje listo. Menos pasos, mas consultas.",
    cta: "Integrar WhatsApp",
    icon: HiOutlineChatBubbleLeftRight,
    accent: "rgba(37, 211, 102, 0.2)",
  },
  {
    id: "forms",
    title: "Formularios simples",
    desc: "Solo los campos que importan. Captura leads cualificados sin cansar al visitante.",
    cta: "Armar formulario",
    icon: HiOutlineDocumentText,
    accent: "rgba(59, 130, 246, 0.2)",
  },
  {
    id: "mobile",
    title: "Diseno mobile-first",
    desc: "La experiencia se prioriza en celular, donde llega la mayoria de tus clientes.",
    cta: "Ver enfoque mobile",
    icon: HiOutlineDevicePhoneMobile,
    accent: "rgba(142, 235, 255, 0.2)",
  },
  {
    id: "mantenimiento",
    title: "Mantenimiento",
    desc: "Actualizaciones, soporte y mejoras continuas para que tu web siga rindiendo.",
    cta: "Hablar de soporte",
    icon: HiOutlineWrenchScrewdriver,
    accent: "rgba(255, 255, 255, 0.12)",
  },
];

function ServiceProduct({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  const href =
    service.id === "whatsapp"
      ? WHATSAPP_URL
      : whatsappUrl(`Hola Agustin, me interesa el servicio: ${service.title}.`);

  return (
    <Reveal>
      <ExternalLink href={href} className="service-product focus-ring group relative block rounded-[var(--radius)]" showHint={false}>
        <span
          className="service-product-glow"
          style={{ background: `radial-gradient(circle, ${service.accent} 0%, transparent 68%)` }}
          aria-hidden
        />

        <div className="service-product-row relative">
          <div className="service-product-icon">
            <Icon className="h-6 w-6" aria-hidden />
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-display text-[length:var(--text-xs)] font-semibold tabular-nums tracking-[0.14em] text-[var(--muted)]" aria-hidden>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-[length:var(--text-xl)] font-bold tracking-tight text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--accent-bright)] sm:text-[length:var(--text-2xl)]">
                {service.title}
              </h3>
            </div>
            <p className="mt-3 max-w-xl text-[length:var(--text-base)] leading-relaxed text-[var(--foreground-muted)]">
              {service.desc}
            </p>
          </div>

          <span className="service-product-cta inline-flex items-center gap-2 text-[length:var(--text-sm)] font-semibold">
            {service.cta}
            <span className="sr-only"> (se abre en una pestaña nueva)</span>
            <HiArrowUpRight
              className="h-4 w-4 shrink-0 transition-transform duration-300 ease-[var(--ease-out)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </span>
        </div>
      </ExternalLink>
    </Reveal>
  );
}

export function Services() {
  return (
    <section id="servicios" className="section-shell">
      <div className="cq w-full">
        <Reveal>
          <SectionHeader
            align="left"
            label="Servicios"
            title="Productos para convertir mejor"
            description="Cada servicio esta pensado como una pieza clara del sistema: menos friccion, mas consultas reales."
            titleClassName="text-[clamp(2rem,5vw,3.25rem)]"
            className="mb-0"
          />
        </Reveal>

        <div className="mt-16 border-t border-[var(--section-divider)] lg:mt-20">
          {SERVICES.map((service, index) => (
            <ServiceProduct key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
