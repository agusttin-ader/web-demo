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
import { interpolate } from "@/i18n/format";
import { getDictionary } from "@/i18n/get-dictionary";
import { whatsappUrl } from "@/lib/constants";

const SERVICE_META = [
  { id: "landing", icon: HiOutlineCursorArrowRays, accent: "rgba(94, 234, 184, 0.2)" },
  { id: "whatsapp", icon: HiOutlineChatBubbleLeftRight, accent: "rgba(37, 211, 102, 0.18)" },
  { id: "forms", icon: HiOutlineDocumentText, accent: "rgba(34, 211, 238, 0.16)" },
  { id: "mobile", icon: HiOutlineDevicePhoneMobile, accent: "rgba(125, 211, 252, 0.16)" },
  { id: "mantenimiento", icon: HiOutlineWrenchScrewdriver, accent: "rgba(255, 255, 255, 0.1)" },
] as const;

function ServiceCard({
  title,
  desc,
  cta,
  icon: Icon,
  accent,
  index,
  href,
}: {
  title: string;
  desc: string;
  cta: string;
  icon: IconType;
  accent: string;
  index: number;
  href: string;
}) {
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
          style={{ background: `radial-gradient(circle at 20% 20%, ${accent}, transparent 70%)` }}
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

        <h3 className="services-card-title">{title}</h3>
        <p className="services-card-desc">{desc}</p>

        <span className="services-card-cta">
          {cta}
          <HiArrowUpRight className="h-4 w-4" aria-hidden />
        </span>
      </ExternalLink>
    </Reveal>
  );
}

export async function Services() {
  const t = await getDictionary();
  const defaultWhatsapp = whatsappUrl(t.whatsapp.defaultMessage);

  return (
    <section id="servicios" className="section-shell">
      <div className="cq w-full">
        <SectionHeader
          align="left"
          label={t.services.label}
          title={t.services.title}
          description={t.services.description}
          titleClassName="text-[clamp(2rem,5vw,3.25rem)]"
          className="mb-0 max-w-xl"
        />

        <div className="services-grid mt-14 lg:mt-20">
          {SERVICE_META.map((meta, index) => {
            const copy = t.services.items[meta.id];
            const href =
              meta.id === "whatsapp"
                ? defaultWhatsapp
                : whatsappUrl(interpolate(t.services.whatsappInterest, { title: copy.title }));
            return (
              <ServiceCard
                key={meta.id}
                title={copy.title}
                desc={copy.desc}
                cta={copy.cta}
                icon={meta.icon}
                accent={meta.accent}
                index={index}
                href={href}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
