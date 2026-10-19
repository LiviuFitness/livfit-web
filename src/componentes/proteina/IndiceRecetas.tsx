"use client";

import { useState } from "react";
import { BLOQUES } from "./recetas";

export function IndiceRecetas() {
  const [activo, setActivo] = useState(0);
  const bloque = BLOQUES[activo];

  return (
    <div className="mx-auto max-w-2xl">
      <div className="grid grid-cols-4 gap-1.5 rounded-lg border border-borde bg-panel p-1.5" role="tablist">
        {BLOQUES.map((b, i) => (
          <button
            key={b.titulo}
            type="button"
            role="tab"
            aria-selected={activo === i}
            onClick={() => setActivo(i)}
            className={`rounded-md px-1 py-2.5 text-[11px] font-bold uppercase tracking-wide transition-colors sm:text-xs ${
              activo === i ? "bg-acento text-fondo" : "text-texto-2 hover:text-white"
            }`}
          >
            {b.titulo === "Snacks y meriendas" ? "Snacks" : b.titulo}
          </button>
        ))}
      </div>

      <ol className="mt-4 divide-y divide-borde rounded-lg border border-borde bg-panel" role="tabpanel">
        {bloque.recetas.map((r) => (
          <li key={r.n} className="flex items-center gap-3 px-4 py-3">
            <span className="font-mono tabular w-6 shrink-0 text-xs text-atenuado">{String(r.n).padStart(2, "0")}</span>
            <span className="min-w-0 flex-1 text-sm leading-snug">{r.nombre}</span>
            <span className="font-mono tabular shrink-0 text-sm font-bold text-acento">{r.proteina}g</span>
          </li>
        ))}
      </ol>
      <p className="mt-3 text-center text-[11px] uppercase tracking-wide text-atenuado">
        Proteína por ración · todas con calorías, carbos y grasa en el PDF
      </p>
    </div>
  );
}
