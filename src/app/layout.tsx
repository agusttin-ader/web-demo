import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Agustín Ader | Desarrollo Web Profesional para Negocios",
  description: "Desarrollo de sitios web profesionales, responsive y optimizados para SEO. Especializado en turismo, hostels, servicios y emprendimientos. Diseño mobile-first, formularios y WhatsApp.",
  keywords: [
    "desarrollo web",
    "sitios web profesionales",
    "web para negocios",
    "turismo web",
    "hostel web",
    "desarrollador frontend",
    "web responsive",
    "SEO",
    "Argentina",
  ],
  authors: [{ name: "Agustín Ader", url: "https://www.agustinaderdev.com" }],
  creator: "Agustín Ader",
  openGraph: {
    type: "website",
    url: "https://www.agustinaderdev.com",
    siteName: "Agustín Ader - Desarrollo Web Profesional",
    title: "Agustín Ader | Desarrollo Web Profesional para Negocios",
    description: "Desarrollo de sitios web profesionales, responsive y optimizados para SEO. Turismo, hostels, servicios y emprendimientos.",
    locale: "es_AR",
    images: [{ url: "/images/logo.png", alt: "Agustín Ader - Desarrollo Web Profesional", width: 280, height: 88 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agustín Ader | Desarrollo Web Profesional",
    description: "Sitios web profesionales, responsive y SEO para tu negocio.",
    images: ["/images/logo.png"],
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
        "https://www.instagram.com/agustinader.dev",
        "https://wa.me/5491168696491",
      ],
      email: "mailto:agusttin.dev@gmail.com",
      jobTitle: "Desarrollador Frontend",
      description: "Desarrollador web profesional con más de 9 años de experiencia. Especializado en sitios para turismo, hostels, servicios y emprendimientos.",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.agustinaderdev.com/#website",
      url: "https://www.agustinaderdev.com",
      name: "Agustín Ader | Desarrollo Web Profesional",
      description: "Desarrollo de sitios web profesionales, responsive y optimizados para SEO. Turismo, hostels, servicios y emprendimientos.",
      publisher: { "@id": "https://www.agustinaderdev.com/#person" },
      inLanguage: "es-AR",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.agustinaderdev.com/#service",
      name: "Agustín Ader - Desarrollo Web",
      description: "Desarrollo de sitios web profesionales para negocios y emprendimientos.",
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
      <body className={`${plusJakarta.variable} font-sans antialiased`}>
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
