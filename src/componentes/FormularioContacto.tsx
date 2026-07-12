"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

type Estado = "listo" | "enviando" | "enviado" | "error";

export default function FormularioContacto() {
  const [estado, setEstado] = useState<Estado>("listo");

  async function enviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    const formulario = evento.currentTarget;
    const datos = new FormData(formulario);

    setEstado("enviando");
    try {
      const respuesta = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: datos.get("nombre"),
          email: datos.get("email"),
          telefono: datos.get("telefono"),
          mensaje: datos.get("mensaje"),
        }),
      });
      if (!respuesta.ok) throw new Error();
      setEstado("enviado");
      formulario.reset();
    } catch {
      setEstado("error");
    }
  }

  if (estado === "enviado") {
    return (
      <div className="tarjeta flex flex-col items-center gap-3 py-12 text-center">
        <CheckCircle2 className="text-acento" size={40} />
        <h3 className="text-lg font-semibold">¡Mensaje enviado!</h3>
        <p className="max-w-sm text-sm text-atenuado">
          Te responderé personalmente en menos de 24-48h para hablar de tu
          objetivo y cómo puedo ayudarte.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={enviar} className="tarjeta flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="nombre"
          required
          placeholder="Tu nombre"
          className="input"
          disabled={estado === "enviando"}
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Tu email"
          className="input"
          disabled={estado === "enviando"}
        />
      </div>
      <input
        name="telefono"
        placeholder="Teléfono (opcional)"
        className="input"
        disabled={estado === "enviando"}
      />
      <textarea
        name="mensaje"
        required
        placeholder="Cuéntame tu objetivo: qué quieres conseguir, tu experiencia entrenando, y cualquier duda que tengas"
        rows={4}
        className="input resize-none"
        disabled={estado === "enviando"}
      />

      {estado === "error" && (
        <p className="text-sm text-peligro">
          No se pudo enviar. Prueba de nuevo o escríbeme directamente a{" "}
          <a
            href="https://instagram.com/liviufitness"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            @liviufitness
          </a>
          .
        </p>
      )}

      <button type="submit" disabled={estado === "enviando"} className="cta">
        {estado === "enviando" ? (
          <>
            <Loader2 className="animate-spin" size={16} />
            Enviando...
          </>
        ) : (
          "Enviar y empezar"
        )}
      </button>
      <p className="text-center text-xs text-atenuado">
        Al enviar aceptas la{" "}
        <a href="/privacidad" className="underline hover:text-white">
          política de privacidad
        </a>
        .
      </p>
    </form>
  );
}
