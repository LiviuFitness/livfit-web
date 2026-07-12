import type { Metadata } from "next";
import Header from "@/componentes/Header";
import Footer from "@/componentes/Footer";
import CalculadoraCalorias from "@/componentes/CalculadoraCalorias";

export const metadata: Metadata = {
  title: "Calculadora de calorías y macros gratis",
  description:
    "Calcula gratis tus calorías diarias y el reparto de macros (proteína, carbohidratos y grasas) según tu peso, altura, actividad y objetivo.",
};

export default function Calculadora() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="contenedor py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="etiqueta">Herramienta gratuita</span>
            <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Calculadora de calorías y macros
            </h1>
            <p className="mt-4 text-texto-2">
              Con la misma fórmula que uso con mis clientes (Mifflin-St
              Jeor). Un buen punto de partida — el número exacto se ajusta
              semana a semana con seguimiento real.
            </p>
          </div>

          <div className="mt-12">
            <CalculadoraCalorias />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
