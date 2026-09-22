import { ExternalLink } from "@/components/ExternalLink";
import { SectionHeader } from "@/components/SectionHeader";
import { interpolate } from "@/i18n/format";
import { getDictionary } from "@/i18n/get-dictionary";
import { whatsappUrl } from "@/lib/constants";
import { Reveal } from "@/components/Reveal";
import { DS_CLASS } from "@/lib/design-system";

const SERVICE_IDS = ["landing", "whatsapp", "forms", "mobile", "mantenimiento"] as const;

export async function Services() {
  const t = await getDictionary();
  const defaultWhatsapp = whatsappUrl(t.whatsapp.defaultMessage);

  return (
    <section id="servicios" className={`services ${DS_CLASS.sectionDark}`}>
      <div className={DS_CLASS.container}>
        <div className="services__layout">
          <div className="services__intro">
            <SectionHeader
              label={t.services.label}
              title={t.services.title}
              description={t.services.description}
            />
          </div>

          <ol className="services__list">
            {SERVICE_IDS.map((id, index) => {
              const copy = t.services.items[id];
              const href =
                id === "whatsapp"
                  ? defaultWhatsapp
                  : whatsappUrl(interpolate(t.services.whatsappInterest, { title: copy.title }));

              return (
                <li key={id} className="services__item">
                  <Reveal variant="up" delay={index * 70}>
                    <article className="services__item-inner">
                      <h3>{copy.title}</h3>
                      <p>{copy.desc}</p>
                      <ExternalLink href={href} showHint={false}>{copy.cta}</ExternalLink>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
