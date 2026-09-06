import { BudgetForm } from "@/components/BudgetForm";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const PROMISES = [
  { title: "Te respondo en 24 hs", desc: "Con una propuesta clara, sin vueltas." },
  { title: "Sin compromiso", desc: "Contame qué necesitás y vemos si encaja." },
  { title: "Pensado para consultas", desc: "La web hecha para que te escriban, no solo para mirar." },
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
          <Reveal variant="up">
            <div className="max-w-lg">
              <p className="eyebrow">Contacto</p>
              <h2
                id="contacto-heading"
                className="mt-8 font-display text-[clamp(2.25rem,5.5vw,3.75rem)] font-bold leading-[1.02] tracking-[-0.04em] text-[var(--foreground)]"
              >
                Contame tu <span className="text-gradient">proyecto</span>
              </h2>
              <p className="mt-8 max-w-md text-[length:var(--text-lg)] leading-relaxed text-[var(--foreground-muted)]">
                Completá el formulario o escribime por WhatsApp si preferís ir más directo.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid items-start gap-16 lg:mt-24 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-24">
            <Reveal variant="left" className="order-2 lg:order-1">
              <aside className="flex flex-col gap-16 lg:sticky lg:top-[calc(var(--header-offset)+1.5rem)] lg:pt-1">
                <ul className="space-y-6">
                  {PROMISES.map((item) => (
                    <li key={item.title} className="glass-card max-w-xs rounded-[var(--radius-xl)] p-6">
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
                    ¿Querés respuesta al toque?
                  </p>
                  <WhatsAppButton variant="ghost" magnetic={false} className="mt-6 w-full sm:w-auto">
                    Escribirme por WhatsApp
                  </WhatsAppButton>
                </div>
              </aside>
            </Reveal>

            <Reveal variant="right" delay={80} className="order-1 min-w-0 lg:order-2">
              <div className="contact-form-shell glass-card rounded-[var(--radius-2xl)] p-6 sm:p-8 lg:p-10">
                <BudgetForm featured />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
