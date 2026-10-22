import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DiagnosticoLivfit from "@/componentes/DiagnosticoLivfit";

export const metadata: Metadata = {
  title: "Diagnóstico LivFit: tus calorías y macros",
  description:
    "Calcula gratis en 1 minuto cuántas calorías y cuánta proteína necesitas para perder grasa, mantenerte o ganar músculo.",
};

export default function Calculadora() {
  return (
    <main className="flex-1">
      <section className="contenedor relative max-w-lg overflow-hidden py-10">
        <div className="brillo-hero" aria-hidden="true" />
        <div className="relative">
          <Link href="/" className="inline-block">
            <Image src="/logo-livfit.png" alt="LivFit" width={120} height={42} priority className="h-8 w-auto" />
          </Link>

          <div className="mt-8">
            <span className="etiqueta">Diagnóstico LivFit · gratis</span>
            <h1 className="mt-2 text-3xl font-bold tracking-tight">¿Cuántas calorías necesitas de verdad?</h1>
            <p className="mt-2 text-texto-2">5 preguntas y en 1 minuto tienes tus calorías, tu proteína y tu ritmo estimado.</p>
          </div>

          <div className="mt-10">
            <DiagnosticoLivfit />
          </div>
        </div>
      </section>
    </main>
  );
}
