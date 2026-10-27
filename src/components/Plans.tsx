import { SectionHeader } from "@/components/SectionHeader";
import { PlansOffer } from "@/components/PlansOffer";
import { getDictionary } from "@/i18n/get-dictionary";
import { DS_CLASS } from "@/lib/design-system";

export async function Plans() {
  const t = await getDictionary();

  return (
    <section id="planes" className={`plans ${DS_CLASS.sectionLight}`}>
      <div className={DS_CLASS.container}>
        <SectionHeader label={t.plans.label} title={t.plans.title} description={t.plans.description} />
        <PlansOffer copy={t.plans} />
      </div>
    </section>
  );
}
