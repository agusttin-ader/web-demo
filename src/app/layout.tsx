import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Agustin Ader | Landing pages para mas consultas",
  description:
    "Webs simples y claras para negocios que quieren mas consultas y reservas. Diseno mobile-first, integracion con WhatsApp y enfoque en conversion real.",
  keywords: [
    "landing page para negocios",
    "web para consultas",
    "diseno web conversion",
    "integracion whatsapp",
    "web mobile first",
    "desarrollador freelance argentina",
  ],
  authors: [{ name: "Agustín Ader", url: "https://www.agustinaderdev.com" }],
  creator: "Agustín Ader",
  openGraph: {
    type: "website",
    url: "https://www.agustinaderdev.com",
    siteName: "Agustin Ader - Landing pages",
    title: "Agustin Ader | Webs para mas consultas y reservas",
    description: "Landing pages claras y rapidas para convertir visitas en consultas por WhatsApp.",
    locale: "es_AR",
    images: [
      { url: "/og-image.svg", alt: "Agustin Ader - Landing pages para conversion", width: 1200, height: 630 },
      { url: "/images/logo.png", alt: "Agustin Ader - Landing pages para conversion", width: 280, height: 88 },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agustin Ader | Landing pages para mas consultas",
    description: "Webs simples y claras para negocios que quieren convertir mas.",
    images: ["/og-image.svg", "/images/logo.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.agustinaderdev.com" },
  category: "technology",
  metadataBase: new URL("https://www.agustinaderdev.com"),
};

export const viewport = {
  themeColor: "#1d3634",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.agustinaderdev.com/#person",
      name: "Agustín Ader",
      url: "https://www.agustinaderdev.com",
      sameAs: [
        "https://www.instagram.com/agustinader.dev",
        "https://wa.me/5491168696491",
      ],
      email: "mailto:agusttin.dev@gmail.com",
      jobTitle: "Desarrollador web freelance",
      description: "Desarrollo landing pages para negocios que necesitan mas consultas y reservas, con enfoque en conversion y contacto directo por WhatsApp.",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.agustinaderdev.com/#website",
      url: "https://www.agustinaderdev.com",
      name: "Agustin Ader | Landing pages para conversion",
      description: "Landing pages simples, claras y orientadas a generar consultas reales para negocios.",
      publisher: { "@id": "https://www.agustinaderdev.com/#person" },
      inLanguage: "es-AR",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.agustinaderdev.com/#service",
      name: "Agustin Ader - Web para negocios",
      description: "Servicio de landing pages para conversion con integracion de WhatsApp y enfoque mobile-first.",
      url: "https://www.agustinaderdev.com",
      areaServed: "AR",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('portfolio-theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&d))document.documentElement.classList.add('dark');})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${manrope.variable} font-sans antialiased`}>
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
        >
          Saltar al contenido
        </a>
        <Header />
        {children}
      </body>
    </html>
  );
}
