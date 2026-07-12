"use client";

import { useEffect, useState } from "react";

export default function CtaFlotante() {
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const contacto = document.getElementById("contacto");
    if (!hero || !contacto) return;

    let fueraDelHero = false;
    let dentroDeContacto = false;

    const actualizar = () => setMostrar(fueraDelHero && !dentroDeContacto);

    const observerHero = new IntersectionObserver(
      ([entry]) => {
        fueraDelHero = !entry.isIntersecting;
        actualizar();
      },
      { threshold: 0 },
    );
    const observerContacto = new IntersectionObserver(
      ([entry]) => {
        dentroDeContacto = entry.isIntersecting;
        actualizar();
      },
      { threshold: 0.1 },
    );

    observerHero.observe(hero);
    observerContacto.observe(contacto);
    return () => {
      observerHero.disconnect();
      observerContacto.disconnect();
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-borde bg-fondo/95 p-3 backdrop-blur transition-transform duration-300 md:hidden ${
        mostrar ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a href="#contacto" className="cta w-full">
        Empieza tu método
      </a>
    </div>
  );
}
