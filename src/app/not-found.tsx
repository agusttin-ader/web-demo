import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      id="contenido"
      className="site-shell relative z-10 flex min-h-[100dvh] items-center justify-center px-[var(--container-inline)] pt-[var(--header-offset)] pb-16"
      aria-labelledby="not-found-heading"
    >
      <div className="mx-auto max-w-lg text-center">
        <p className="eyebrow">404</p>
        <h1
          id="not-found-heading"
          className="mt-4 font-display text-[clamp(2rem,6vw,3.25rem)] font-bold tracking-tight text-[var(--foreground)]"
        >
          Esta pagina no existe
        </h1>
        <p className="mt-4 text-[length:var(--text-base)] leading-relaxed text-[var(--foreground-muted)]">
          El enlace puede estar desactualizado. Volve al inicio para ver proyectos y contactarme.
        </p>
        <Link href="/" className="btn-primary focus-ring mt-8 inline-flex">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
