"use client";

import { useEffect, useState } from "react";

export function MacroRing({
  protein,
  carbs,
  fat,
}: {
  protein: number;
  carbs: number;
  fat: number;
}) {
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDrawn(true), 150);
    return () => clearTimeout(t);
  }, []);

  const p1 = drawn ? protein : 0;
  const p2 = drawn ? protein + carbs : 0;

  return (
    <div className="flex items-center gap-6">
      <div
        className="macro-ring relative w-32 h-32 md:w-36 md:h-36 rounded-full shrink-0"
        style={{ "--p1": `${p1}%`, "--p2": `${p2}%` } as React.CSSProperties}
      >
        <div className="absolute inset-[10px] rounded-full bg-fondo flex flex-col items-center justify-center">
          <span className="font-mono tabular text-2xl font-bold">{protein}%</span>
          <span className="text-[9px] tracking-[0.15em] text-atenuado">PROTEÍNA</span>
        </div>
      </div>
      <dl className="flex flex-col gap-2.5 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-sm bg-acento shrink-0" />
          <dt className="text-texto-2">Proteína</dt>
          <dd className="font-mono tabular font-semibold ml-1">{protein}%</dd>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-sm bg-carbohidratos shrink-0" />
          <dt className="text-texto-2">Carbohidratos</dt>
          <dd className="font-mono tabular font-semibold ml-1">{carbs}%</dd>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-sm bg-grasas shrink-0" />
          <dt className="text-texto-2">Grasas</dt>
          <dd className="font-mono tabular font-semibold ml-1">{fat}%</dd>
        </div>
      </dl>
    </div>
  );
}
