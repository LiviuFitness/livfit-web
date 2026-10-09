import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Cuestionario from "@/componentes/Cuestionario";

export const metadata: Metadata = {
  title: "Empieza tu método",
  description:
    "Responde 6 preguntas rápidas y te digo personalmente cómo trabajaríamos en tu caso.",
};

export default function Empezar() {
  return (
    <main className="flex-1">
      <section className="contenedor relative max-w-lg overflow-hidden py-10">
        <div className="brillo-hero" aria-hidden="true" />
        <div className="relative">
          <Link href="/" className="inline-block">
            <Image src="/logo-livfit.png" alt="LivFit" width={120} height={42} priority className="h-8 w-auto" />
          </Link>

          <div className="mt-8 flex items-center gap-4">
            <Image
              src="/liviu-hero.jpg"
              alt="Liviu"
              width={56}
              height={56}
              className="h-14 w-14 shrink-0 rounded-full border border-borde-2 object-cover object-top"
            />
            <div>
              <h1 className="text-xl font-bold tracking-tight">¿Empezamos?</h1>
              <p className="text-sm text-texto-2">
                6 preguntas rápidas y te digo yo cómo lo haríamos en tu caso.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Cuestionario />
          </div>
        </div>
      </section>
    </main>
  );
}
