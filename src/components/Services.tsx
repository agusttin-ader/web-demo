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
    title: "Landing que convierte",
    desc: "Ordeno la info para que se entienda rápido y el visitante sepa qué hacer — sin dar vueltas.",
    cta: "Quiero una landing",
    icon: HiOutlineCursorArrowRays,
    accent: "rgba(94, 234, 184, 0.2)",
  },
  {
    id: "whatsapp",
    title: "WhatsApp integrado",
    desc: "Un click y ya te escriben con el mensaje armado. Menos pasos, más consultas.",
    cta: "Sumar WhatsApp",
    icon: HiOutlineChatBubbleLeftRight,
    accent: "rgba(37, 211, 102, 0.18)",
  },
  {
    id: "forms",
    title: "Formularios simples",
    desc: "Solo los datos que necesitás. Sin formularios eternos que espantan a la gente.",
    cta: "Armar formulario",
    icon: HiOutlineDocumentText,
    accent: "rgba(34, 211, 238, 0.16)",
  },
  {
    id: "mobile",
    title: "Pensada para el celu",
    desc: "La mayoría entra desde el teléfono. Por eso diseño primero para pantalla chica.",
    cta: "Ver enfoque mobile",
    icon: HiOutlineDevicePhoneMobile,
    accent: "rgba(125, 211, 252, 0.16)",
  },
  {
    id: "mantenimiento",
    title: "Mantenimiento",
    desc: "Actualizaciones, arreglos y mejoras para que la web siga andando bien.",
    cta: "Hablar de soporte",
    icon: HiOutlineWrenchScrewdriver,
    accent: "rgba(255, 255, 255, 0.1)",
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  const href =
    service.id === "whatsapp"
      ? WHATSAPP_URL
      : whatsappUrl(`Hola Agustín, me interesa: ${service.title}.`);
  const isWide = index === 0;

  return (
    <Reveal variant="up" delay={index * 40} className={isWide ? "services-cell services-cell--wide" : "services-cell"}>
      <ExternalLink
        href={href}
        className={`services-card focus-ring group ${isWide ? "services-card--wide" : ""}`}
        showHint={false}
      >
        <span
          className="services-card-glow"
          style={{ background: `radial-gradient(circle at 20% 20%, ${service.accent}, transparent 70%)` }}
          aria-hidden
        />

        <div className="services-card-top">
          <span className="services-card-icon">
            <Icon className="h-5 w-5" aria-hidden />
          </span>
          <span className="services-card-num" aria-hidden>
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h3 className="services-card-title">{service.title}</h3>
        <p className="services-card-desc">{service.desc}</p>

        <span className="services-card-cta">
          {service.cta}
          <span className="sr-only"> (se abre en una pestaña nueva)</span>
          <HiArrowUpRight className="h-4 w-4" aria-hidden />
        </span>
      </ExternalLink>
    </Reveal>
  );
}

export function Services() {
  return (
    <section id="servicios" className="section-shell">
      <div className="cq w-full">
        <SectionHeader
          align="left"
          label="Servicios"
          title="Lo que puedo armarte"
          description="Cada pieza suma al mismo objetivo: que te escriban más y mejor."
          titleClassName="text-[clamp(2rem,5vw,3.25rem)]"
          className="mb-0 max-w-xl"
        />

        <div className="services-grid mt-14 lg:mt-20">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
