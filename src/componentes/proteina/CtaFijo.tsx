"use client";

import { useEffect, useState } from "react";

// Barra de compra fija abajo (solo móvil): aparece al salir del hero
// y se esconde cuando ya se ve la oferta final, para no duplicar botones.
export function CtaFijo({ href }: { href: string }) {
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const oferta = document.getElementById("oferta");
    if (!hero) return;

    const actualizar = () => {
      const fueraDelHero = hero.getBoundingClientRect().bottom < 0;
      const enOferta = oferta ? oferta.getBoundingClientRect().top < window.innerHeight * 0.8 : false;
      setMostrar(fueraDelHero && !enOferta);
    };
    actualizar();
    window.addEventListener("scroll", actualizar, { passive: true });
    window.addEventListener("resize", actualizar);
    return () => {
      window.removeEventListener("scroll", actualizar);
      window.removeEventListener("resize", actualizar);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-borde bg-fondo/95 px-4 py-3 backdrop-blur transition-transform duration-300 md:hidden ${
        mostrar ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={href}
        className="flex items-center justify-between gap-3 rounded-md bg-acento px-5 py-3.5 font-bold text-fondo"
      >
        <span className="text-sm">QUIERO MIS 40 RECETAS</span>
        <span className="font-mono tabular text-base">6,99 €</span>
      </a>
    </div>
  );
}
