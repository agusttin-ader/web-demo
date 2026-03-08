import Image from "next/image";
import { CalculadoraEstadia } from "@/components/CalculadoraEstadia";

const WHATSAPP_NUMERO = "5491168696491";
const WHATSAPP_MSG = "Hola, quiero consultar por reservas.";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <header className="border-b border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
          <p className="text-sm font-medium uppercase tracking-wider text-sky-600 dark:text-sky-400">
            Ejemplo de sitio
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Escápate al lago
          </h1>
          <p className="mt-3 max-w-xl text-slate-600 dark:text-slate-300">
            Alojamiento con vista al lago. Consultá disponibilidad y calculá tu estadía.
          </p>
        </div>
      </header>

      {/* Contenido */}
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
        {/* Ubicación - card con imagen y texto */}
        <section className="mb-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <div className="relative aspect-[16/10] w-full sm:aspect-[21/9]">
            <Image
              src="/centro.jpg"
              alt="Vista del centro y alrededores"
              fill
              className="object-cover"
              sizes="(min-width: 640px) 896px, 100vw"
              priority
            />
            <p className="absolute bottom-2 left-2 text-xs text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              Foto de{" "}
              <a
                href="https://unsplash.com/es/@thayran?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white/90"
              >
                Thayran Melo
              </a>{" "}
              en{" "}
              <a
                href="https://unsplash.com/es/fotos/edificio-de-piedra-marron-hFY0ZefVjQ8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white/90"
              >
                Unsplash
              </a>
            </p>
          </div>
          <div className="p-5 sm:p-6">
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">
              Ubicación
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              A minutos del centro y de la terminal. Fácil acceso al transporte público.
            </p>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
            Reservas
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Usá la calculadora para ver noches y total estimado. Luego escribinos por WhatsApp para confirmar.
          </p>
          <div className="mt-6 max-w-md">
            <CalculadoraEstadia />
          </div>
        </section>

        {/* CTA WhatsApp */}
        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/50 sm:p-8">
          <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
            ¿Consultas?
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Escribinos por WhatsApp y te respondemos a la brevedad.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(WHATSAPP_MSG)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-green-700"
          >
            <span>Escribir por WhatsApp</span>
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </section>

        <p className="mt-10 text-center text-xs text-slate-500 dark:text-slate-400">
          Sitio de ejemplo · Calculadora de estadía · Desarrollo web
        </p>
      </div>
    </main>
  );
}
