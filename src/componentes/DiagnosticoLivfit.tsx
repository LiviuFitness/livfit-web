"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, Copy } from "lucide-react";
import IconoInstagram from "@/componentes/IconoInstagram";
import {
  calcularMacros,
  FACTORES_ACTIVIDAD,
  type Objetivo,
  type ResultadoMacros,
  type Sexo,
} from "@/lib/macros";

const USUARIO_IG = "liviufitness";

const OBJETIVOS: { valor: Objetivo; etiqueta: string; detalle: string }[] = [
  { valor: "perder", etiqueta: "Perder grasa", detalle: "Bajar grasa sin perder músculo" },
  { valor: "mantener", etiqueta: "Mantenerme", detalle: "Recomposición: mismo peso, mejor cuerpo" },
  { valor: "ganar", etiqueta: "Ganar músculo", detalle: "Subir de peso con cabeza" },
];

const ACTIVIDAD_TEXTO = [
  "Paso casi todo el día sentado y no entreno",
  "Entreno 1–3 días a la semana",
  "Entreno 3–5 días a la semana",
  "Entreno 6–7 días a la semana",
  "Trabajo físico y además entreno",
];

type Datos = {
  nombre: string;
  sexo: Sexo | null;
  edad: string;
  peso: string;
  altura: string;
  actividad: number | null;
  objetivo: Objetivo | null;
};

const TOTAL_PASOS = 5;

export default function DiagnosticoLivfit() {
  const [paso, setPaso] = useState(0);
  const [d, setD] = useState<Datos>({ nombre: "", sexo: null, edad: "", peso: "", altura: "", actividad: null, objetivo: null });
  const [resultado, setResultado] = useState<ResultadoMacros | null>(null);
  const [copiado, setCopiado] = useState(false);
  const ancla = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (resultado) ancla.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [resultado]);

  const cambiar = (parcial: Partial<Datos>) => setD((x) => ({ ...x, ...parcial }));
  const siguiente = () => setPaso((p) => p + 1);

  function calcular(objetivo: Objetivo) {
    cambiar({ objetivo });
    setResultado(
      calcularMacros({
        sexo: d.sexo ?? "otro",
        edad: Number(d.edad),
        pesoKg: Number(d.peso.replace(",", ".")),
        alturaCm: Number(d.altura),
        factorActividad: d.actividad ?? 1.55,
        objetivo,
      }),
    );
  }

  const nombre = d.nombre.trim().split(" ")[0] || "";

  if (resultado && d.objetivo) {
    const deficit = resultado.tdee - resultado.kcal;
    const kgSemana = Math.round(((Math.abs(deficit) * 7) / 7700) * 10) / 10;
    const protComida = Math.round(resultado.prot / 4);
    const objetivoTxt = OBJETIVOS.find((o) => o.valor === d.objetivo)!.etiqueta.toLowerCase();
    const resumen =
      `Hola Liviu, soy ${nombre || "yo"} 👋 He hecho el Diagnóstico LivFit:\n` +
      `🎯 Objetivo: ${objetivoTxt}\n` +
      `🔥 ${resultado.kcal} kcal al día\n` +
      `P ${resultado.prot} g · C ${resultado.carb} g · G ${resultado.gras} g\n` +
      `¿Cómo lo haríamos en mi caso?`;

    async function enviar() {
      try {
        await navigator.clipboard.writeText(resumen);
        setCopiado(true);
      } catch {
        setCopiado(false);
      }
      window.location.href = `https://ig.me/m/${USUARIO_IG}`;
    }

    const macros = [
      { k: "Proteína", v: resultado.prot, color: "var(--color-proteina)", kcal: resultado.prot * 4 },
      { k: "Carbohidratos", v: resultado.carb, color: "var(--color-carbohidratos)", kcal: resultado.carb * 4 },
      { k: "Grasas", v: resultado.gras, color: "var(--color-grasas)", kcal: resultado.gras * 9 },
    ];

    return (
      <div ref={ancla} className="scroll-mt-4 animate-[aparecer_0.4s_ease_both]">
        <span className="etiqueta">Tu diagnóstico</span>
        <h2 className="mt-1 text-2xl font-bold tracking-tight">{nombre ? `${nombre}, este es tu punto de partida.` : "Este es tu punto de partida."}</h2>

        <div className="tarjeta mt-5 !p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-atenuado">Para {objetivoTxt}</p>
          <p className="mt-1 text-5xl font-bold tracking-tight tabular-nums">
            {resultado.kcal.toLocaleString("es-ES")} <span className="text-lg font-medium text-atenuado">kcal / día</span>
          </p>
          <div className="mt-5 flex h-2.5 overflow-hidden rounded-full bg-borde">
            {macros.map((m) => (
              <div key={m.k} style={{ width: `${(m.kcal / resultado.kcal) * 100}%`, background: m.color }} />
            ))}
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {macros.map((m) => (
              <div key={m.k}>
                <p className="text-xl font-bold tabular-nums" style={{ color: m.color }}>{m.v} g</p>
                <p className="text-xs text-atenuado">{m.k}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="tarjeta !p-4">
            <p className="text-xs text-atenuado">Gastas al día</p>
            <p className="mt-1 text-xl font-bold tabular-nums">{resultado.tdee.toLocaleString("es-ES")} kcal</p>
          </div>
          <div className="tarjeta !p-4">
            <p className="text-xs text-atenuado">Proteína por comida</p>
            <p className="mt-1 text-xl font-bold tabular-nums">≈ {protComida} g <span className="text-xs font-medium text-atenuado">× 4</span></p>
          </div>
          {d.objetivo !== "mantener" && (
            <div className="tarjeta col-span-2 !p-4">
              <p className="text-xs text-atenuado">Ritmo estimado</p>
              <p className="mt-1 text-base font-semibold">
                {d.objetivo === "perder" ? "Perder" : "Ganar"} unos <span className="text-acento">{kgSemana} kg a la semana</span>, sin pasar hambre ni vivir en el gym.
              </p>
            </div>
          )}
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <button type="button" onClick={enviar} className="cta w-full">
            <IconoInstagram size={18} /> Enviármelo por Instagram
          </button>
          <p className="text-center text-xs text-atenuado">
            {copiado ? (
              <span className="inline-flex items-center gap-1 text-acento"><Check size={14} /> Copiado. Pégalo en el chat y te digo cómo lo haríamos.</span>
            ) : (
              <>Se copia tu resultado y se abre mi chat: <b>pégalo y envía</b>. Te contesto yo.</>
            )}
          </p>
          <button
            type="button"
            onClick={() => navigator.clipboard?.writeText(resumen).then(() => setCopiado(true)).catch(() => {})}
            className="ghost w-full"
          >
            <Copy size={16} /> Copiar mi resultado
          </button>
          <Link href="/empezar" className="ghost w-full">Quiero un plan hecho a mi medida</Link>
        </div>

        <p className="mt-6 text-center text-xs text-atenuado">
          Estimación con la fórmula Mifflin-St Jeor. Es un punto de partida: el número real se ajusta cada semana según tu progreso.
        </p>
        <button type="button" onClick={() => { setResultado(null); setPaso(0); }} className="mx-auto mt-3 block text-xs text-atenuado underline">
          Volver a calcular
        </button>
      </div>
    );
  }

  const opcion = (activo: boolean) =>
    `tarjeta tarjeta-interactiva !py-4 text-left text-base font-medium ${activo ? "!border-acento" : ""}`;

  return (
    <div>
      <div className="mb-8 flex items-center gap-3">
        <button
          type="button"
          onClick={() => setPaso((p) => p - 1)}
          disabled={paso === 0}
          aria-label="Volver al paso anterior"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-borde-2 text-texto-2 transition-colors hover:border-acento disabled:invisible"
        >
          <ArrowLeft size={16} />
        </button>
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-borde">
          <div className="h-full rounded-full bg-acento transition-[width] duration-300" style={{ width: `${((paso + 1) / TOTAL_PASOS) * 100}%` }} />
        </div>
        <span className="shrink-0 text-xs font-semibold tabular-nums text-atenuado">{paso + 1}/{TOTAL_PASOS}</span>
      </div>

      <div key={paso} className="animate-[aparecer_0.35s_ease_both]">
        {paso === 0 && (
          <form onSubmit={(e) => { e.preventDefault(); siguiente(); }}>
            <h2 className="text-2xl font-bold tracking-tight">¿Cómo te llamas?</h2>
            <p className="mt-2 text-sm text-atenuado">Para tu diagnóstico personalizado.</p>
            <input id="diag-nombre" autoFocus required value={d.nombre} onChange={(e) => cambiar({ nombre: e.target.value })} placeholder="Tu nombre" className="input mt-6 !text-base" autoComplete="given-name" />
            <button type="submit" className="cta mt-4 w-full">Empezar</button>
          </form>
        )}

        {paso === 1 && (
          <>
            <h2 className="text-2xl font-bold tracking-tight">{nombre ? `${nombre}, ¿eres…?` : "¿Eres…?"}</h2>
            <div className="mt-6 flex flex-col gap-3">
              {(["hombre", "mujer"] as const).map((s) => (
                <button key={s} type="button" className={opcion(d.sexo === s)} onClick={() => { cambiar({ sexo: s }); siguiente(); }}>
                  {s === "hombre" ? "Hombre" : "Mujer"}
                </button>
              ))}
            </div>
          </>
        )}

        {paso === 2 && (
          <form onSubmit={(e) => { e.preventDefault(); siguiente(); }}>
            <h2 className="text-2xl font-bold tracking-tight">Tus datos</h2>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <label className="block">
                <span className="mb-1 block text-xs text-atenuado">Edad</span>
                <input id="diag-edad" required inputMode="numeric" type="number" min={14} max={90} value={d.edad} onChange={(e) => cambiar({ edad: e.target.value })} placeholder="30" className="input !text-base" />
              </label>
              <label className="block">
                <span className="mb-1 block text-xs text-atenuado">Peso (kg)</span>
                <input id="diag-peso" required inputMode="decimal" type="number" min={30} max={250} step={0.1} value={d.peso} onChange={(e) => cambiar({ peso: e.target.value })} placeholder="80" className="input !text-base" />
              </label>
              <label className="block">
                <span className="mb-1 block text-xs text-atenuado">Altura (cm)</span>
                <input id="diag-altura" required inputMode="numeric" type="number" min={120} max={230} value={d.altura} onChange={(e) => cambiar({ altura: e.target.value })} placeholder="175" className="input !text-base" />
              </label>
            </div>
            <button type="submit" className="cta mt-6 w-full">Siguiente</button>
          </form>
        )}

        {paso === 3 && (
          <>
            <h2 className="text-2xl font-bold tracking-tight">¿Cómo es tu semana?</h2>
            <div className="mt-6 flex flex-col gap-3">
              {FACTORES_ACTIVIDAD.map((f, i) => (
                <button key={f.valor} type="button" className={opcion(d.actividad === f.valor)} onClick={() => { cambiar({ actividad: f.valor }); siguiente(); }}>
                  {ACTIVIDAD_TEXTO[i]}
                </button>
              ))}
            </div>
          </>
        )}

        {paso === 4 && (
          <>
            <h2 className="text-2xl font-bold tracking-tight">¿Qué quieres conseguir?</h2>
            <div className="mt-6 flex flex-col gap-3">
              {OBJETIVOS.map((o) => (
                <button key={o.valor} type="button" className={opcion(d.objetivo === o.valor)} onClick={() => calcular(o.valor)}>
                  <span className="block">{o.etiqueta}</span>
                  <span className="mt-0.5 block text-sm font-normal text-atenuado">{o.detalle}</span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
