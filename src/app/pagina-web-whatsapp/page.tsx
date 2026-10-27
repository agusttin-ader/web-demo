import type { Metadata } from "next";
import { SeoLanding, seoLandingMetadata } from "@/components/SeoLanding";
import { getSeoLanding } from "@/data/seo-pages";
import { notFound } from "next/navigation";

const PAGE = getSeoLanding("pagina-web-whatsapp");

export const metadata: Metadata = PAGE ? seoLandingMetadata(PAGE) : {};

export default function PaginaWebWhatsappPage() {
  if (!PAGE) notFound();
  return <SeoLanding page={PAGE} />;
}
