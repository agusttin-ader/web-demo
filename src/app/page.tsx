import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { examples } from "@/data/examples";
import { projects } from "@/data/projects";
import { WHATSAPP_DEMO_URL } from "@/lib/whatsapp";

const tourismExample = examples.find((e) => e.id === "turismo-reservas");
const laGuaridaProject = projects.find((p) => p.id === "la-guarida");

type LiveRef = {
  key: string;
  title: string;
  description: string;
  image: string;
  imagePosition?: string;
  link?: string;
  extraNote?: string;
  linkLabel: string;
};

const liveReferences: LiveRef[] = [
  ...(laGuaridaProject
    ? [
        {
          key: laGuaridaProject.id,
          title: laGuaridaProject.title,
          description: laGuaridaProject.description,
          image: laGuaridaProject.image,
          link: laGuaridaProject.link,
          linkLabel: "Ver sitio en producción",
        } satisfies LiveRef,
      ]
    : []),
  ...(tourismExample
    ? [
        {
          key: tourismExample.id,
          title: tourismExample.title,
          description: tourismExample.description,
          image: tourismExample.image,
          imagePosition: tourismExample.imagePosition,
          link: tourismExample.link,
          extraNote: tourismExample.extraNote,
          linkLabel: "Abrir demo de turismo",
        } satisfies LiveRef,
      ]
    : []),
];

function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-2xl px-5 py-12 sm:px-6 sm:py-14 md:py-16 ${className}`}
    >
      {children}
    </section>
  );
}

function PrimaryCta({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={WHATSAPP_DEMO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-[var(--btn-primary-bg)] px-6 py-4 text-base font-semibold text-[var(--btn-primary-text)] shadow-[var(--shadow-md)] transition-colors hover:bg-[var(--btn-primary-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] sm:w-auto ${className}`}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <main className="bg-[var(--background)] pb-28">
        {/* HERO */}
        <section
          id="hero"
          className="border-b border-[var(--card-border)] px-5 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-12 md:pb-20 md:pt-14"
        >
          <div className="mx-auto max-w-2xl">
            <h1 className="text-[1.65rem] font-semibold leading-tight tracking-tight text-[var(--foreground)] sm:text-4xl md:text-[2.35rem]">
              Páginas web que generan consultas reales
            </h1>
            <p className="mt-5 text-lg text-[var(--foreground-muted)] sm:text-xl">
              Probá tu web antes de pagar
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <PrimaryCta>
                <FaWhatsapp className="h-5 w-5 shrink-0" aria-hidden />
                Pedí tu demo gratis
              </PrimaryCta>
              <a
                href="#ejemplo"
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl border border-[var(--card-border)] bg-[var(--background-elevated)] px-6 py-4 text-base font-semibold text-[var(--foreground)] transition-colors hover:border-[var(--foreground)]/20 hover:bg-[var(--accent-soft-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] sm:w-auto"
              >
                Ver ejemplo
              </a>
            </div>
          </div>
        </section>

        <Section id="problema">
          <p className="text-lg leading-relaxed text-[var(--foreground)] sm:text-xl">
            Muchos negocios manejan todo por Instagram, pero tienen la información desordenada y pierden
            consultas.
          </p>
        </Section>

        <Section id="solucion" className="border-t border-[var(--card-border)]">
          <p className="text-lg leading-relaxed text-[var(--foreground)] sm:text-xl">
            Creo páginas web simples donde organizo tus servicios, precios y contacto para que el cliente
            entienda rápido y te escriba.
          </p>
        </Section>

        <Section id="beneficios" className="border-t border-[var(--card-border)]">
          <ul className="space-y-5 text-lg text-[var(--foreground)] sm:text-xl">
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
              <span>Más consultas desde Instagram</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
              <span>Información clara para el cliente</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
              <span>Botón directo a WhatsApp</span>
            </li>
          </ul>
        </Section>

        <Section id="demo" className="border-t border-[var(--card-border)]">
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
            Te muestro cómo quedaría tu web
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[var(--foreground-muted)] sm:text-xl">
            Armo una demo con tu negocio real para que veas el resultado antes de pagar.
          </p>
          <div className="mt-8">
            <PrimaryCta className="w-full sm:w-auto">Quiero mi demo</PrimaryCta>
          </div>
        </Section>

        {/* Referencias en vivo: turismo (demo) + cliente real. Sin ecommerce. */}
        <section
          id="ejemplo"
          className="border-t border-[var(--card-border)] px-5 py-12 sm:px-6 sm:py-14 md:py-16"
        >
          <div className="mx-auto max-w-2xl">
            <h2 className="text-xl font-semibold tracking-tight text-[var(--foreground)] sm:text-2xl">
              Referencia en vivo
            </h2>
            <p className="mt-3 text-base text-[var(--foreground-muted)]">
              Un sitio en producción y una demo de turismo: información clara y contacto directo.
            </p>
            <div className="mt-8 flex flex-col gap-10">
              {liveReferences.map((ref, index) => (
                <article
                  key={ref.key}
                  className="overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--background-elevated)] shadow-[var(--shadow-sm)]"
                >
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={ref.image}
                      alt={ref.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 42rem"
                      className="object-cover"
                      style={{ objectPosition: ref.imagePosition ?? "center" }}
                      priority={index === 0}
                    />
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg font-semibold text-[var(--foreground)]">{ref.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--foreground-muted)] sm:text-base">
                      {ref.description}
                    </p>
                    {ref.extraNote && (
                      <p className="mt-3 text-sm text-[var(--foreground-muted)]">{ref.extraNote}</p>
                    )}
                    {ref.link && ref.link !== "#" && (
                      <a
                        href={ref.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-brand mt-5 inline-flex text-sm font-semibold text-[var(--foreground)] sm:text-base"
                      >
                        {ref.linkLabel}
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-8">
              <PrimaryCta className="w-full sm:w-auto">
                <FaWhatsapp className="h-5 w-5 shrink-0" aria-hidden />
                Pedí tu demo gratis
              </PrimaryCta>
            </div>
          </div>
        </section>
      </main>

      {/* CTA fija: visible al scrollear */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 border-t border-[var(--card-border)] bg-[var(--background-elevated)]/95 px-4 py-3 backdrop-blur-md supports-[padding:max(0px)]:pb-[max(0.75rem,env(safe-area-inset-bottom))]"
        role="region"
        aria-label="Pedir demo por WhatsApp"
      >
        <div className="mx-auto flex max-w-2xl justify-center">
          <a
            href={WHATSAPP_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] w-full max-w-md items-center justify-center gap-2 rounded-xl bg-[var(--btn-primary-bg)] px-5 py-3 text-sm font-semibold text-[var(--btn-primary-text)] shadow-[var(--shadow-md)] transition-colors hover:bg-[var(--btn-primary-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
          >
            <FaWhatsapp className="h-5 w-5 shrink-0" aria-hidden />
            Pedí tu demo gratis
          </a>
        </div>
      </div>

      <footer className="border-t border-[var(--card-border)] bg-[var(--background-elevated)] py-10 sm:py-12">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 px-5 text-center sm:px-6">
          <div className="flex justify-center gap-8">
            <a
              href="https://www.instagram.com/agusttin.ader/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="link-brand"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
            <a href="mailto:agusttin.dev@gmail.com" aria-label="Correo electrónico" className="link-brand">
              <FiMail className="h-5 w-5" />
            </a>
            <a
              href={WHATSAPP_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="link-brand"
            >
              <FaWhatsapp className="h-5 w-5" />
            </a>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Agustín Ader"
              width={160}
              height={50}
              className="h-8 w-auto object-contain md:h-9"
            />
            <span className="text-sm text-[var(--foreground-muted)]">Agustín Ader · Web para turismo y servicios</span>
          </div>
        </div>
      </footer>

      <p className="sr-only">
        Páginas web para cabañas, excursiones y negocios de turismo. Demo web gratis antes de pagar.
        Consultas por WhatsApp.
      </p>
    </>
  );
}
