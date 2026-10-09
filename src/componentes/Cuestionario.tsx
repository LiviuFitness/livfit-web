"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";

type Pregunta = {
  id: string;
  titulo: string;
  ayuda?: string;
  opciones: string[];
};

const PREGUNTAS: Pregunta[] = [
  {
    id: "objetivo",
    titulo: "¿Qué quieres conseguir?",
    opciones: [
      "Perder grasa",
      "Ganar músculo",
      "Las dos cosas (recomposición)",
      "Rendir más en mi deporte",
    ],
  },
  {
    id: "experiencia",
    titulo: "¿Cuánto tiempo llevas entrenando?",
    opciones: ["Nada o casi nada", "Menos de 1 año", "De 1 a 3 años", "Más de 3 años"],
  },
  {
    id: "dias",
    titulo: "¿Cuántos días a la semana puedes entrenar?",
    opciones: ["2 días", "3 días", "4 días", "5 o más"],
  },
  {
    id: "freno",
    titulo: "¿Qué te ha frenado hasta ahora?",
    ayuda: "Elige la que más te suene.",
    opciones: [
      "Las dietas me dan hambre y lo dejo",
      "No sé qué hacer en el gimnasio",
      "Empiezo bien pero no soy constante",
      "Falta de tiempo",
      "Una lesión o molestia",
    ],
  },
  {
    id: "modalidad",
    titulo: "¿Cómo prefieres entrenar conmigo?",
    opciones: ["Online, desde donde esté", "Presencial en el estudio", "Me da igual"],
  },
  {
    id: "cuando",
    titulo: "¿Cuándo quieres empezar?",
    opciones: ["Cuanto antes", "Este mes", "Solo estoy mirando"],
  },
];

type Estado = "listo" | "enviando" | "enviado" | "error";

export default function Cuestionario() {
  const [paso, setPaso] = useState(0);
  const [respuestas, setRespuestas] = useState<Record<string, string>>({});
  const [estado, setEstado] = useState<Estado>("listo");

  const total = PREGUNTAS.length + 1;
  const pregunta = PREGUNTAS[paso];
  const soloMirando = respuestas.cuando === "Solo estoy mirando";

  function elegir(opcion: string) {
    setRespuestas((r) => ({ ...r, [pregunta.id]: opcion }));
    setPaso((p) => p + 1);
  }

  async function enviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    const datos = new FormData(evento.currentTarget);
    const resumen = PREGUNTAS.map((p) => `${p.titulo}\n→ ${respuestas[p.id]}`).join("\n\n");

    setEstado("enviando");
    try {
      const respuesta = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          origen: "cuestionario",
          nombre: datos.get("nombre"),
          email: datos.get("email"),
          telefono: datos.get("telefono"),
          mensaje: resumen,
        }),
      });
      if (!respuesta.ok) throw new Error();
      setEstado("enviado");
    } catch {
      setEstado("error");
    }
  }

  if (estado === "enviado") {
    return (
      <div className="flex flex-col items-center gap-4 py-10 text-center">
        <CheckCircle2 className="text-acento" size={48} />
        <h2 className="text-2xl font-bold tracking-tight">¡Recibido!</h2>
        <p className="max-w-sm text-texto-2">
          {soloMirando
            ? "Te escribo yo personalmente. Mientras tanto, aquí tienes algo útil:"
            : "Te escribo yo personalmente en menos de 24 h para contarte cómo lo haríamos en tu caso."}
        </p>
        <Link href="/calculadora" className="ghost mt-2 w-full max-w-sm">
          Calcula tus calorías y macros gratis
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Progreso */}
      <div className="mb-8 flex items-center gap-3">
        <button
          type="button"
          onClick={() => setPaso((p) => p - 1)}
          disabled={paso === 0}
          aria-label="Volver a la pregunta anterior"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-borde-2 text-texto-2 transition-colors hover:border-acento disabled:invisible"
        >
          <ArrowLeft size={16} />
        </button>
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-borde">
          <div
            className="h-full rounded-full bg-acento transition-[width] duration-300"
            style={{ width: `${((paso + 1) / total) * 100}%` }}
          />
        </div>
        <span className="shrink-0 text-xs font-semibold tabular-nums text-atenuado">
          {paso + 1}/{total}
        </span>
      </div>

      {pregunta ? (
        <div key={pregunta.id} className="animate-[aparecer_0.35s_ease_both]">
          <h2 className="text-2xl font-bold tracking-tight">{pregunta.titulo}</h2>
          {pregunta.ayuda && <p className="mt-2 text-sm text-atenuado">{pregunta.ayuda}</p>}
          <div className="mt-6 flex flex-col gap-3">
            {pregunta.opciones.map((opcion) => (
              <button
                key={opcion}
                type="button"
                onClick={() => elegir(opcion)}
                className={`tarjeta tarjeta-interactiva !py-4 text-left text-base font-medium ${
                  respuestas[pregunta.id] === opcion ? "!border-acento" : ""
                }`}
              >
                {opcion}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <form onSubmit={enviar} className="animate-[aparecer_0.35s_ease_both]">
          <h2 className="text-2xl font-bold tracking-tight">Último paso: ¿dónde te escribo?</h2>
          <p className="mt-2 text-sm text-atenuado">
            Te contesto yo, no un bot. Nada de spam.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <input name="nombre" required placeholder="Tu nombre" className="input !text-base" autoComplete="given-name" />
            <input name="email" type="email" required placeholder="Tu email" className="input !text-base" autoComplete="email" />
            <input name="telefono" type="tel" placeholder="WhatsApp (opcional)" className="input !text-base" autoComplete="tel" />
          </div>
          <button type="submit" disabled={estado === "enviando"} className="cta mt-6 w-full">
            {estado === "enviando" ? <Loader2 className="animate-spin" size={18} /> : "Enviar"}
          </button>
          {estado === "error" && (
            <p className="mt-3 text-center text-sm text-peligro">
              No se pudo enviar. Prueba otra vez o escríbeme por Instagram.
            </p>
          )}
          <p className="mt-4 text-center text-xs text-atenuado">
            Al enviar aceptas la{" "}
            <Link href="/privacidad" className="underline">
              política de privacidad
            </Link>
            .
          </p>
        </form>
      )}
    </div>
  );
}
