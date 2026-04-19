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
  title: "Agustín Ader | Web que genera consultas · Demo gratis",
  description:
    "Páginas web para turismo y servicios (cabañas, excursiones). Organizo servicios y contacto para que te escriban por WhatsApp. Demo con tu negocio antes de pagar.",
  keywords: [
    "web para turismo",
    "página web cabañas",
    "demo web gratis",
    "WhatsApp negocio",
    "web excursiones",
    "sitio web servicios",
    "Argentina",
  ],
  authors: [{ name: "Agustín Ader", url: "https://www.agustinaderdev.com" }],
  creator: "Agustín Ader",
  openGraph: {
    type: "website",
    url: "https://www.agustinaderdev.com",
    siteName: "Agustín Ader",
    title: "Agustín Ader | Web que genera consultas · Demo gratis",
    description:
      "Sitios web claros para turismo y servicios. Más consultas desde Instagram y botón directo a WhatsApp. Probá tu web antes de pagar.",
    locale: "es_AR",
    images: [
      { url: "/og-image.svg", alt: "Agustín Ader — Web para turismo y servicios", width: 1200, height: 630 },
      { url: "/images/logo.png", alt: "Agustín Ader", width: 280, height: 88 },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agustín Ader | Demo web gratis",
    description: "Web para turismo y servicios. Consultas por WhatsApp.",
    images: ["/og-image.svg", "/images/logo.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.agustinaderdev.com" },
  category: "technology",
  metadataBase: new URL("https://www.agustinaderdev.com"),
};

export const viewport = {
  themeColor: "#0f172a",
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
        "https://www.instagram.com/agusttin.ader/",
        "https://wa.me/5491168696491",
      ],
      email: "mailto:agusttin.dev@gmail.com",
      jobTitle: "Desarrollador Frontend",
      description: "Desarrollador web. Sitios para turismo y servicios con foco en consultas por WhatsApp.",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.agustinaderdev.com/#website",
      url: "https://www.agustinaderdev.com",
      name: "Agustín Ader",
      description: "Páginas web para turismo y servicios. Demo gratis antes de pagar. Consultas por WhatsApp.",
      publisher: { "@id": "https://www.agustinaderdev.com/#person" },
      inLanguage: "es-AR",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.agustinaderdev.com/#service",
      name: "Agustín Ader · Web para turismo y servicios",
      description: "Páginas web claras para turismo y servicios. Demo antes de pagar.",
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
