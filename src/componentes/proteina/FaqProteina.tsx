"use client";

import { useState } from "react";

const PREGUNTAS = [
  {
    pregunta: "¿Necesito proteína en polvo?",
    respuesta:
      "No. Casi todas las recetas son con comida normal: huevos, pollo, atún, ternera, yogur, legumbres… Solo un par llevan proteína en polvo, y puedes saltártelas.",
  },
  {
    pregunta: "¿Me sirve si estoy definiendo o si quiero ganar músculo?",
    respuesta:
      "Sí. Cada receta trae sus calorías y macros por ración, y al principio del PDF te explico cómo ajustar las raciones: un poco más de carbohidrato si estás en volumen, y la ración tal cual (o algo menos) si estás definiendo.",
  },
  {
    pregunta: "¿Cómo lo recibo?",
    respuesta:
      "Al pagar te llega un email con el enlace de descarga y lo tienes al momento. Es un PDF pensado para leerlo en el móvil mientras cocinas.",
  },
  {
    pregunta: "¿Puedo pagar con PayPal?",
    respuesta: "Sí, con PayPal o con tarjeta. Es un pago único, sin suscripciones.",
  },
  {
    pregunta: "¿Los macros son exactos?",
    respuesta:
      "Son estimaciones orientativas calculadas con tablas nutricionales estándar. Te sirven de sobra para organizarte, pero no sustituyen a un etiquetado certificado.",
  },
  {
    pregunta: "¿Es vegetariano?",
    respuesta:
      "No del todo. Hay opciones sin carne ni pescado (tofu, legumbres, huevos, lácteos), pero la mayoría de recetas llevan pollo, pescado o carne.",
  },
];

export function FaqProteina() {
  const [abierta, setAbierta] = useState<number | null>(0);

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-2.5">
      {PREGUNTAS.map((item, i) => {
        const estaAbierta = abierta === i;
        return (
          <div key={item.pregunta} className="rounded-lg border border-borde bg-panel px-5">
            <button
              type="button"
              onClick={() => setAbierta(estaAbierta ? null : i)}
              aria-expanded={estaAbierta}
              className="flex w-full items-center justify-between gap-4 py-4 text-left"
            >
              <span className="text-sm font-semibold">{item.pregunta}</span>
              <span
                className={`font-mono text-lg text-acento transition-transform duration-300 ${estaAbierta ? "rotate-45" : ""}`}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                estaAbierta ? "grid-rows-[1fr] pb-4 opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-sm leading-relaxed text-texto-2">{item.respuesta}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
