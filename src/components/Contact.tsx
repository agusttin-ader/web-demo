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
      <div className="contact-stage-glow" aria-hidden />
      <div className="contact-stage-grid" aria-hidden />

      <div className="site-container relative z-10 py-[var(--section-y)]">
        <div className="cq mx-auto max-w-6xl">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow tracking-[0.18em]">Contacto</p>
              <h2
                id="contacto-heading"
                className="mt-4 font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-tight text-[var(--foreground)]"
              >
                Contame tu proyecto y armamos la propuesta
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[length:var(--text-base)] leading-relaxed text-[var(--foreground-muted)] sm:text-[length:var(--text-lg)]">
                Completá el formulario con lo esencial. Si preferís ir más rápido, también estamos por WhatsApp.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid items-start gap-8 lg:mt-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-10 xl:gap-14">
            <Reveal variant="left" className="order-2 lg:order-1">
              <aside className="contact-aside flex h-full flex-col justify-between gap-8 lg:min-h-[28rem] lg:py-2">
                <ul className="space-y-5">
                  {PROMISES.map((item) => (
                    <li key={item.title} className="flex gap-4 border-t border-[var(--section-divider)] pt-5 first:border-t-0 first:pt-0">
                      <span
                        className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)] shadow-[0_0_12px_rgba(92,225,255,0.45)]"
                        aria-hidden
                      />
                      <div className="min-w-0">
                        <p className="font-display text-[length:var(--text-lg)] font-bold text-[var(--foreground)]">
                          {item.title}
                        </p>
                        <p className="mt-1 text-[length:var(--text-sm)] leading-relaxed text-[var(--foreground-muted)]">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="rounded-[var(--radius-lg)] border border-[var(--card-border)] bg-[rgba(255,255,255,0.02)] p-5 sm:p-6">
                  <p className="text-[length:var(--text-sm)] leading-relaxed text-[var(--foreground-muted)]">
                    ¿Necesitás una respuesta más rápida?
                  </p>
                  <WhatsAppButton
                    variant="ghost"
                    magnetic={false}
                    className="mt-4 w-full !min-h-11 justify-center"
                  >
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
