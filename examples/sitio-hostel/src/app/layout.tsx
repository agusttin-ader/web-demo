import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Escápate al lago | Alojamiento",
  description: "Sitio de ejemplo tipo hostel/cabañas con calculadora de estadía.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
