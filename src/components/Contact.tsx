import { BudgetForm } from "@/components/BudgetForm";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const PROMISES = [
  { title: "Respuesta en 24h", desc: "Te contesto con una propuesta clara." },
  { title: "Sin compromiso", desc: "Contame el objetivo y vemos el alcance." },
  { title: "Enfoque conversion", desc: "La web pensada para generar consultas." },
] as const;

export function Contact() {
  return (
    <section
      id="contacto"
      className="contact-stage section-contact relative overflow-x-clip cv-auto"
      aria-labelledby="contacto-heading"
    >
      <div className="site-container relative z-10 py-[var(--section-y)]">
        <div className="cq mx-auto max-w-5xl">
          <Reveal>
            <div className="max-w-lg">
              <p className="eyebrow">Contacto</p>
              <h2
                id="contacto-heading"
                className="mt-8 font-display text-[clamp(2.25rem,5.5vw,3.75rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-[var(--foreground)]"
              >
                Contame tu proyecto
              </h2>
              <p className="mt-8 max-w-md text-[length:var(--text-lg)] leading-relaxed text-[var(--foreground-muted)]">
                Completá el formulario. Si preferís ir más rápido, también estamos por WhatsApp.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid items-start gap-16 lg:mt-24 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-24">
            <Reveal variant="left" className="order-2 lg:order-1">
              <aside className="flex flex-col gap-16 lg:sticky lg:top-[calc(var(--header-offset)+1.5rem)] lg:pt-1">
                <ul className="space-y-10">
                  {PROMISES.map((item) => (
                    <li key={item.title} className="max-w-xs">
                      <p className="font-display text-[length:var(--text-xl)] font-semibold text-[var(--foreground)]">
                        {item.title}
                      </p>
                      <p className="mt-3 text-[length:var(--text-sm)] leading-relaxed text-[var(--muted)]">
                        {item.desc}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-[var(--section-divider)] pt-10">
                  <p className="text-[length:var(--text-sm)] text-[var(--muted)]">
                    ¿Necesitás una respuesta más rápida?
                  </p>
                  <WhatsAppButton variant="ghost" magnetic={false} className="mt-6 w-full sm:w-auto">
                    Escribirme por WhatsApp
                  </WhatsAppButton>
                </div>
              </aside>
            </Reveal>

            <Reveal variant="right" delay={60} className="order-1 min-w-0 lg:order-2">
              <div className="contact-form-shell">
                <BudgetForm featured />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
