import { IconArrowRight } from "@/components/icons";
import { Magnetic } from "@/components/Magnetic";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function CtaBanner() {
  return (
    <section id="cta" className="cta-banner relative overflow-x-clip cv-auto">
      <div className="cta-banner-gradient" aria-hidden />
      <div className="cta-banner-grid" aria-hidden />

      <div className="site-container relative z-10 flex min-h-[min(52vh,520px)] flex-col items-center justify-center py-[clamp(3.5rem,9vw,7rem)] text-center">
        <Reveal variant="fade">
          <p className="eyebrow tracking-[0.2em]">Proximo paso</p>
        </Reveal>
        <Reveal variant="up" delay={60}>
          <h2 className="mt-6 max-w-[16ch] px-1 font-display text-[length:var(--text-hero)] font-extrabold leading-[0.96] tracking-[-0.045em] text-[var(--foreground)] sm:mt-8">
            Hagamos que tu web <span className="text-gradient">genere consultas</span>
          </h2>
        </Reveal>
        <Reveal variant="up" delay={120}>
          <p className="mx-auto mt-6 max-w-lg text-[length:var(--text-lg)] leading-relaxed text-[var(--foreground-muted)]">
            Empezá por el formulario: te respondo con una propuesta clara y el siguiente paso.
          </p>
        </Reveal>
        <Reveal variant="up" delay={180}>
          <div className="mt-10 flex w-full max-w-md flex-col items-stretch gap-3 sm:mt-12 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <Magnetic strength={0.2} className="w-full sm:w-auto">
              <a href="#contacto" className="btn-primary focus-ring !min-h-12 !px-7 w-full">
                Pedir propuesta
                <IconArrowRight className="mi-icon mi-icon-right h-3.5 w-3.5" aria-hidden />
              </a>
            </Magnetic>
            <WhatsAppButton variant="ghost" strength={0.16} className="!min-h-12 !px-7 w-full">
              Hablar por WhatsApp
            </WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
