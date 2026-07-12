"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  calcularMacros,
  FACTORES_ACTIVIDAD,
  type Objetivo,
  type ResultadoMacros,
  type Sexo,
} from "@/lib/macros";

const OBJETIVOS: { valor: Objetivo; etiqueta: string }[] = [
  { valor: "perder", etiqueta: "Perder grasa" },
  { valor: "mantener", etiqueta: "Mantener" },
  { valor: "ganar", etiqueta: "Ganar músculo" },
];

export default function CalculadoraCalorias() {
  const [resultado, setResultado] = useState<ResultadoMacros | null>(null);

  function calcular(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    const datos = new FormData(evento.currentTarget);

    setResultado(
      calcularMacros({
        sexo: datos.get("sexo") as Sexo,
        edad: Number(datos.get("edad")),
        pesoKg: Number(datos.get("peso")),
        alturaCm: Number(datos.get("altura")),
        factorActividad: Number(datos.get("actividad")),
        objetivo: datos.get("objetivo") as Objetivo,
      }),
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 md:items-start">
      <form onSubmit={calcular} className="tarjeta flex flex-col gap-4">
        <div className="grid grid-cols-3 gap-2">
          {(["hombre", "mujer", "otro"] as const).map((valor, i) => (
            <label key={valor} className="relative">
              <input
                type="radio"
                name="sexo"
                value={valor}
                defaultChecked={i === 0}
                className="peer sr-only"
              />
              <span className="block cursor-pointer rounded-lg border border-borde-2 bg-campo px-2 py-2 text-center text-sm font-medium text-texto-2 capitalize transition-colors peer-checked:border-acento peer-checked:bg-acento peer-checked:text-fondo peer-checked:font-semibold">
                {valor}
              </span>
            </label>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="mb-1 block text-xs text-atenuado">Edad</label>
            <input name="edad" type="number" required min={14} max={90} defaultValue={30} className="input" />
          </div>
          <div>
            <label className="mb-1 block text-xs text-atenuado">Peso (kg)</label>
            <input name="peso" type="number" required min={30} max={250} step={0.1} defaultValue={75} className="input" />
          </div>
          <div>
            <label className="mb-1 block text-xs text-atenuado">Altura (cm)</label>
            <input name="altura" type="number" required min={120} max={230} defaultValue={175} className="input" />
          </div>
        </div>

        <div>
          <label className="mb-1 block text-xs text-atenuado">Nivel de actividad</label>
          <select name="actividad" className="input" defaultValue={FACTORES_ACTIVIDAD[2].valor}>
            {FACTORES_ACTIVIDAD.map((f) => (
              <option key={f.valor} value={f.valor}>
                {f.etiqueta}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1 block text-xs text-atenuado">Objetivo</label>
          <div className="grid grid-cols-3 gap-2">
            {OBJETIVOS.map((o, i) => (
              <label key={o.valor} className="relative">
                <input
                  type="radio"
                  name="objetivo"
                  value={o.valor}
                  defaultChecked={i === 0}
                  className="peer sr-only"
                />
                <span className="block cursor-pointer rounded-lg border border-borde-2 bg-campo px-2 py-2 text-center text-xs font-medium text-texto-2 transition-colors peer-checked:border-acento peer-checked:bg-acento peer-checked:text-fondo peer-checked:font-semibold">
                  {o.etiqueta}
                </span>
              </label>
            ))}
          </div>
        </div>

        <button type="submit" className="cta">
          Calcular mis calorías
        </button>
      </form>

      <div className="tarjeta flex min-h-[280px] flex-col justify-center">
        {!resultado ? (
          <p className="text-center text-sm text-atenuado">
            Rellena tus datos y pulsa &quot;Calcular&quot; para ver tu
            objetivo diario de calorías y macros.
          </p>
        ) : (
          <div className="flex flex-col gap-6">
            <div className="text-center">
              <span className="etiqueta">Tu objetivo diario</span>
              <p className="mt-1 text-4xl font-bold tracking-tight">
                {resultado.kcal} <span className="text-lg font-medium text-atenuado">kcal</span>
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div>
                <p className="text-lg font-bold" style={{ color: "var(--color-proteina)" }}>
                  {resultado.prot} g
                </p>
                <p className="text-xs text-atenuado">Proteína</p>
              </div>
              <div>
                <p className="text-lg font-bold" style={{ color: "var(--color-carbohidratos)" }}>
                  {resultado.carb} g
                </p>
                <p className="text-xs text-atenuado">Carbohidratos</p>
              </div>
              <div>
                <p className="text-lg font-bold" style={{ color: "var(--color-grasas)" }}>
                  {resultado.gras} g
                </p>
                <p className="text-xs text-atenuado">Grasas</p>
              </div>
            </div>
            <div className="border-t border-borde pt-5 text-center">
              <p className="text-sm text-texto-2">
                Esto es un punto de partida. Un plan real se ajusta cada
                semana según tu progreso — no es un número fijo para siempre.
              </p>
              <Link href="/#contacto" className="cta mt-4 w-full">
                Quiero un plan hecho a mi medida
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
