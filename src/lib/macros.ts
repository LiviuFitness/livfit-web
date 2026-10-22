/* Mismo cálculo que usa la app real (Mifflin-St Jeor + factor de
   actividad + ajuste por objetivo) — ver plataforma-liviu/src/lib/macros.ts */

export type Sexo = "hombre" | "mujer" | "otro";
export type Objetivo = "perder" | "mantener" | "ganar";

export interface DatosCalculadora {
  sexo: Sexo;
  edad: number;
  pesoKg: number;
  alturaCm: number;
  factorActividad: number;
  objetivo: Objetivo;
}

export interface ResultadoMacros {
  kcal: number;
  prot: number;
  carb: number;
  gras: number;
  /** Metabolismo basal y gasto total del día (sin ajuste por objetivo). */
  tmb: number;
  tdee: number;
}

export const FACTORES_ACTIVIDAD = [
  { valor: 1.2, etiqueta: "Sedentario (sin ejercicio)" },
  { valor: 1.375, etiqueta: "Ligero (1-3 días/semana)" },
  { valor: 1.55, etiqueta: "Moderado (3-5 días/semana)" },
  { valor: 1.725, etiqueta: "Alto (6-7 días/semana)" },
  { valor: 1.9, etiqueta: "Muy alto (trabajo físico + entrenos)" },
];

export function calcularMacros(d: DatosCalculadora): ResultadoMacros {
  const offsetSexo = d.sexo === "hombre" ? 5 : d.sexo === "mujer" ? -161 : -78;
  const tmb = 10 * d.pesoKg + 6.25 * d.alturaCm - 5 * d.edad + offsetSexo;
  const tdee = tmb * d.factorActividad;

  let ajuste = 1.0;
  let protPorKg = 1.6;
  if (d.objetivo === "perder") {
    ajuste = 0.85;
    protPorKg = 2.0;
  } else if (d.objetivo === "ganar") {
    ajuste = 1.1;
    protPorKg = 1.8;
  }

  const kcal = Math.round((tdee * ajuste) / 10) * 10;
  const prot = Math.round((protPorKg * d.pesoKg) / 5) * 5;
  const gras = Math.round(Math.max((kcal * 0.25) / 9, 0.8 * d.pesoKg) / 5) * 5;
  const carb = Math.max(0, Math.round((kcal - prot * 4 - gras * 9) / 4 / 5) * 5);

  return { kcal, prot, carb, gras, tmb: Math.round(tmb), tdee: Math.round(tdee) };
}
