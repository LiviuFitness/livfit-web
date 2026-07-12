"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CtaFlotante() {
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const contacto = document.getElementById("contacto");

    let fueraDelHero = false;
    let dentroDeContacto = false;
    const actualizar = () => setMostrar(fueraDelHero && !dentroDeContacto);

    // Páginas sin hero (ej. /calculadora): usar el scroll como referencia.
    if (!hero) {
      const alScrollear = () => {
        fueraDelHero = window.scrollY > 400;
        actualizar();
      };
      window.addEventListener("scroll", alScrollear, { passive: true });
      alScrollear();
      return () => window.removeEventListener("scroll", alScrollear);
    }

    const observerHero = new IntersectionObserver(
      ([entry]) => {
        fueraDelHero = !entry.isIntersecting;
        actualizar();
      },
      { threshold: 0 },
    );
    observerHero.observe(hero);

    let observerContacto: IntersectionObserver | undefined;
    if (contacto) {
      observerContacto = new IntersectionObserver(
        ([entry]) => {
          dentroDeContacto = entry.isIntersecting;
          actualizar();
        },
        { threshold: 0.1 },
      );
      observerContacto.observe(contacto);
    }

    return () => {
      observerHero.disconnect();
      observerContacto?.disconnect();
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-borde bg-fondo/95 p-3 backdrop-blur transition-transform duration-300 md:hidden ${
        mostrar ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Link href="/#contacto" className="cta w-full">
        Empieza tu método
      </Link>
    </div>
  );
}
