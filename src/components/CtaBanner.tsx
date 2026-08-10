import { IconArrowRight } from "@/components/icons";
import { Magnetic } from "@/components/Magnetic";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function CtaBanner() {
  return (
    <section id="cta" className="cta-banner relative overflow-x-clip cv-auto">
      <div className="cta-banner-gradient" aria-hidden />

      <div className="site-container relative z-10 flex flex-col items-center justify-center py-[var(--section-y)] text-center">
        <Reveal variant="fade">
          <p className="eyebrow">Proximo paso</p>
        </Reveal>
        <Reveal variant="up" delay={60}>
          <h2 className="mt-10 max-w-[13ch] px-1 font-display text-[length:var(--text-hero)] font-semibold leading-[0.98] tracking-[-0.045em] text-[var(--foreground)]">
            Hagamos que tu web <span className="text-gradient">genere consultas</span>
          </h2>
        </Reveal>
        <Reveal variant="up" delay={120}>
          <p className="mx-auto mt-10 max-w-md text-[length:var(--text-lg)] leading-relaxed text-[var(--foreground-muted)]">
            Empezá por el formulario: te respondo con una propuesta clara y el siguiente paso.
          </p>
        </Reveal>
        <Reveal variant="up" delay={180}>
          <div className="mt-14 flex w-full max-w-md flex-col items-stretch gap-4 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-5">
            <Magnetic strength={0.2} className="w-full sm:w-auto">
              <a href="#contacto" className="btn-primary focus-ring !min-h-12 !px-8 w-full">
                Pedir propuesta
                <IconArrowRight className="mi-icon mi-icon-right h-3.5 w-3.5" aria-hidden />
              </a>
            </Magnetic>
            <WhatsAppButton variant="ghost" strength={0.16} className="!min-h-12 !px-8 w-full">
              Hablar por WhatsApp
            </WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
