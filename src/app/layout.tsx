import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://livfit.es"),
  title: {
    default: "LivFit — Entrenamiento personal con seguimiento real",
    template: "%s · LivFit",
  },
  description:
    "Entrenamiento personal con Liviu, online o presencial: rutina semanal personalizada, dieta por gramos y seguimiento real de tu progreso.",
  openGraph: {
    title: "LivFit — Entrenamiento personal con seguimiento real",
    description:
      "Entrenamiento personal con Liviu, online o presencial: rutina semanal personalizada, dieta por gramos y seguimiento real de tu progreso.",
    siteName: "LivFit",
    locale: "es_ES",
    type: "website",
    images: ["/logo-livfit-fondo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "LivFit — Entrenamiento personal con seguimiento real",
    description:
      "Entrenamiento personal con Liviu, online o presencial: rutina semanal personalizada, dieta por gramos y seguimiento real de tu progreso.",
    images: ["/logo-livfit-fondo.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0C0E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
