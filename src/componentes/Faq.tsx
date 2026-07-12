"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const PREGUNTAS = [
  {
    pregunta: "¿Entrenas presencial u online?",
    respuesta:
      "Las dos cosas. Puedes entrenar conmigo presencialmente en mi estudio o completamente online — el método, el seguimiento semanal y la app son los mismos en ambos casos.",
  },
  {
    pregunta: "¿Necesito experiencia previa entrenando?",
    respuesta:
      "No. El método se adapta a tu nivel de partida, desde cero hasta avanzado — la rutina y la progresión se ajustan a ti, no al revés.",
  },
  {
    pregunta: "¿Cómo es el seguimiento semana a semana?",
    respuesta:
      "Cada semana reviso tu peso, tu adherencia y tu progreso, y ajusto tu rutina y tu dieta en consecuencia. Además tienes chat directo conmigo para dudas del día a día.",
  },
  {
    pregunta: "Si entreno online, ¿puedo hacerlo en cualquier gimnasio o en casa?",
    respuesta:
      "Cuéntame tu situación cuando me escribas — con qué material cuentas y dónde entrenas — y adapto tu rutina a eso.",
  },
  {
    pregunta: "¿Cuánto tardaré en ver resultados?",
    respuesta:
      "Depende de tu punto de partida y tu constancia. Por eso existe la revisión semanal: para detectar pronto qué está funcionando y ajustar el rumbo si no.",
  },
  {
    pregunta: "No sé si elegir el plan mensual o el trimestral",
    respuesta:
      "Escríbeme por el formulario y te recomiendo el que mejor encaje según tu objetivo — no hace falta que lo decidas antes de hablar conmigo.",
  },
];

export default function Faq() {
  const [abierta, setAbierta] = useState<number | null>(0);

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-3">
      {PREGUNTAS.map((item, i) => {
        const estaAbierta = abierta === i;
        return (
          <div key={item.pregunta} className="tarjeta !py-0">
            <button
              type="button"
              onClick={() => setAbierta(estaAbierta ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-semibold">{item.pregunta}</span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-acento transition-transform duration-300 ${
                  estaAbierta ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                estaAbierta ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-sm text-texto-2">{item.respuesta}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
