import type { Metadata } from "next";
import { Big_Shoulders, JetBrains_Mono } from "next/font/google";
import "./proteina.css";

// Fuentes propias de esta landing: se declaran con los mismos nombres de variable
// que usan las utilidades font-display / font-mono, así solo cambian dentro de /proteina.
const bigShoulders = Big_Shoulders({
  variable: "--font-display",
  weight: ["700", "800", "900"],
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  weight: ["500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Proteína Fácil — 40 recetas altas en proteína",
  description:
    "40 recetas altas en proteína con calorías y macros, para dejar de improvisar en la cocina y llegar a tu objetivo sin aburrirte.",
  openGraph: {
    title: "Proteína Fácil — 40 recetas altas en proteína",
    description: "40 recetas altas en proteína con sus calorías y macros. PDF para el móvil.",
  },
};

export default function ProteinaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${bigShoulders.variable} ${jetbrainsMono.variable} flex flex-col min-h-full flex-1`}>
      {children}
    </div>
  );
}
