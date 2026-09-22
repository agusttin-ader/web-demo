import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/i18n/get-dictionary";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: false },
};

export default async function NotFound() {
  const t = await getDictionary();

  return (
    <main id="contenido" aria-labelledby="not-found-heading">
      <p>404</p>
      <h1 id="not-found-heading">{t.notFound.title}</h1>
      <p>{t.notFound.body}</p>
      <Link href="/">{t.notFound.cta}</Link>
    </main>
  );
}
