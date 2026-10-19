import Image from "next/image";
import Link from "next/link";
import { IconBolt, IconNoRepeat, IconPhone, IconScale, IconBowl } from "@/componentes/proteina/Icons";
import { MacroRing } from "@/componentes/proteina/MacroRing";
import { Telefono } from "@/componentes/proteina/Telefono";
import { IndiceRecetas } from "@/componentes/proteina/IndiceRecetas";
import { FaqProteina } from "@/componentes/proteina/FaqProteina";
import { CtaFijo } from "@/componentes/proteina/CtaFijo";

// Producto en Gumroad (cuenta liviufitness).
const GUMROAD_URL = "https://liviufitness.gumroad.com/l/proteina-facil";

const paginas = [
  { src: "/proteina/desayunos.webp", alt: "Página de desayunos del recetario", etiqueta: "Desayunos" },
  { src: "/proteina/comidas.webp", alt: "Página de comidas del recetario", etiqueta: "Comidas" },
  { src: "/proteina/cenas.webp", alt: "Página de cenas del recetario", etiqueta: "Cenas" },
  { src: "/proteina/intro.webp", alt: "Introducción e índice del recetario", etiqueta: "Cómo usarlo" },
];

const incluye = [
  { icon: IconScale, text: "Calorías, proteína, carbohidratos y grasa en cada una de las 40 recetas." },
  { icon: IconNoRepeat, text: "Cómo ajustar las raciones según tu objetivo: ganar músculo o definir." },
  { icon: IconBowl, text: "Ingredientes de súper normal, nada de suplementos raros." },
  { icon: IconPhone, text: "PDF vertical pensado para leer desde el móvil mientras cocinas." },
];

function BotonCompra({ texto, className = "" }: { texto: string; className?: string }) {
  return (
    <a
      href={GUMROAD_URL}
      className={`inline-flex items-center justify-center gap-2 rounded-md bg-acento px-7 py-4 text-sm font-bold text-fondo shadow-[0_10px_40px_rgba(41,171,226,0.35)] transition hover:brightness-110 ${className}`}
    >
      <IconBolt className="h-4 w-4" />
      {texto}
    </a>
  );
}

export default function Proteina() {
  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-borde bg-fondo/85 px-5 py-3.5 backdrop-blur md:px-12">
        <Link href="/" aria-label="LivFit, inicio">
          <Image src="/logo-livfit.png" alt="LivFit" width={130} height={45} className="h-7 w-auto" priority />
        </Link>
        <a
          href={GUMROAD_URL}
          className="rounded-md border border-borde-2 px-3.5 py-2 text-xs font-semibold tracking-wide transition-colors hover:border-acento hover:text-acento"
        >
          6,99 € · COMPRAR
        </a>
      </header>

      <main className="flex-1">
        {/* HERO */}
        <section id="hero" className="px-5 pb-16 pt-10 md:px-12 md:pb-24 md:pt-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div className="animate-fade-up">
              <p className="text-[11px] font-semibold tracking-[0.22em] text-acento">
                RECETARIO PDF · 40 RECETAS
              </p>
              <h1 className="mt-3 font-display text-[64px] font-black uppercase leading-[0.88] md:text-7xl">
                Proteína
                <br />
                sin contar
                <br />
                <span className="text-acento">a ojo</span>
              </h1>
              <p className="mt-5 max-w-md text-base text-texto-2 md:text-lg">
                40 recetas reales, altas en proteína,{" "}
                <span className="font-semibold text-white">con sus calorías y macros</span> calculados.
                Para gente que entrena y quiere dejar de improvisar en la cocina.
              </p>
            </div>

            {/* Producto: móviles con páginas reales del PDF (visible también en móvil) */}
            <div className="animate-fade-up relative mx-auto h-[300px] w-full max-w-[340px] sm:h-[400px] sm:max-w-[420px]" style={{ animationDelay: "0.1s" }}>
              <Telefono
                src="/proteina/cenas.webp"
                alt="Recetas de cenas con sus macros"
                className="absolute right-0 top-4 w-[48%] rotate-6"
              />
              <Telefono
                src="/proteina/portada.webp"
                alt="Portada del recetario Proteína Fácil"
                className="absolute left-2 top-0 w-[50%] -rotate-3"
                priority
              />
              <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-full border border-borde bg-panel/95 px-4 py-2 backdrop-blur">
                <span className="font-mono tabular text-sm font-bold text-acento">40</span>
                <span className="text-xs text-texto-2">recetas</span>
                <span className="h-3 w-px bg-borde-2" />
                <span className="font-mono tabular text-sm font-bold">100%</span>
                <span className="text-xs text-texto-2">con macros</span>
              </div>
            </div>

            <div className="animate-fade-up lg:col-start-1 lg:row-start-2 lg:-mt-6" style={{ animationDelay: "0.15s" }}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <BotonCompra texto="QUIERO MIS RECETAS" className="w-full sm:w-auto" />
                <div className="flex items-baseline justify-center gap-2 sm:justify-start">
                  <span className="font-mono tabular text-2xl font-bold">6,99 €</span>
                  <span className="text-sm text-atenuado">pago único</span>
                </div>
              </div>
              <p className="mt-4 text-center text-[11px] uppercase tracking-wide text-atenuado sm:text-left">
                Descarga al instante · PayPal o tarjeta · PDF para el móvil
              </p>
            </div>
          </div>
        </section>

        {/* PROBLEMA */}
        <section className="border-t border-borde px-5 py-14 md:px-12 md:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-black uppercase leading-tight md:text-4xl">
              ¿Siempre te quedas corto de <span className="text-acento">proteína</span>?
            </h2>
            <p className="mt-5 text-base text-texto-2 md:text-lg">
              Entrenas duro, pero a la hora de comer todo se reduce a pechuga con arroz o un batido de
              más. Contar proteína a ojo casi nunca sale bien, y comer siempre lo mismo cansa.{" "}
              <span className="font-semibold text-white">No te falta disciplina</span>: te falta un
              sistema de comidas que ya tenga la proteína resuelta.
            </p>
          </div>
        </section>

        {/* POR DENTRO */}
        <section className="border-t border-borde py-14 md:py-16">
          <div className="mx-auto max-w-6xl px-5 md:px-12">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-acento">ASÍ ES POR DENTRO</p>
            <h2 className="mt-2 font-display text-3xl font-black uppercase md:text-4xl">
              Cada receta, con su etiqueta
            </h2>
            <p className="mt-3 max-w-md text-sm text-texto-2">
              Ingredientes, pasos y una etiqueta con calorías y macros. Páginas reales del PDF:
            </p>
          </div>
          <div className="scroll-fade mt-8">
            <div className="scrollbar-none flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 md:px-12">
              {paginas.map((p) => (
                <figure key={p.src} className="w-[58%] shrink-0 snap-start sm:w-[240px]">
                  <Telefono src={p.src} alt={p.alt} />
                  <figcaption className="mt-3 text-center text-[11px] font-semibold uppercase tracking-[0.15em] text-atenuado">
                    {p.etiqueta}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
          <p className="mt-2 text-center text-[11px] text-atenuado md:hidden">Desliza →</p>
        </section>

        {/* LAS 40 RECETAS */}
        <section className="border-t border-borde px-5 py-14 md:px-12 md:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-acento">EL ÍNDICE COMPLETO</p>
            <h2 className="mt-2 font-display text-3xl font-black uppercase md:text-4xl">
              Las <span className="text-acento">40</span> recetas
            </h2>
          </div>
          <div className="mt-8">
            <IndiceRecetas />
          </div>
        </section>

        {/* DIFERENCIACIÓN + ANILLO DE MACROS */}
        <section className="border-t border-borde px-5 py-14 md:px-12 md:py-20">
          <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2 md:gap-14">
            <div>
              <h2 className="font-display text-3xl font-black uppercase leading-tight md:text-4xl">
                No es otro PDF de <span className="text-acento">proteína</span> de internet
              </h2>
              <p className="mt-5 text-base text-texto-2 md:text-lg">
                La diferencia está en los macros. Aquí no solo comes rico y suficiente proteína: sabes
                exactamente cómo encaja cada plato en tu objetivo, ya sea ganar músculo o definir.
                Recetas pensadas desde el entreno y la nutrición, no copiadas de cualquier blog.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="rounded-lg border border-borde bg-panel p-7">
                <p className="mb-6 text-xs tracking-[0.15em] text-atenuado">REPARTO MEDIO DE MACROS POR RECETA</p>
                <MacroRing protein={40} carbs={38} fat={22} />
              </div>
            </div>
          </div>
        </section>

        {/* QUÉ INCLUYE */}
        <section className="border-t border-borde px-5 py-14 md:px-12 md:py-16">
          <div className="mx-auto max-w-3xl">
            <p className="text-center text-[11px] font-semibold tracking-[0.22em] text-acento">QUÉ TE LLEVAS</p>
            <h2 className="mt-2 text-center font-display text-3xl font-black uppercase md:text-4xl">
              Todo lo que incluye
            </h2>
            <ul className="mt-9 grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {incluye.map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-acento" />
                  <span className="text-sm leading-relaxed text-texto-2">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* AUTORIDAD */}
        <section className="border-t border-borde px-5 py-14 md:px-12 md:py-16">
          <div className="mx-auto grid max-w-4xl items-center gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
            <div className="relative mx-auto w-full max-w-[300px] overflow-hidden rounded-lg border border-borde">
              <Image
                src="/liviu-hero.jpg"
                alt="Liviu, entrenador personal"
                width={1279}
                height={1600}
                sizes="(min-width: 768px) 300px, 80vw"
                className="h-auto w-full"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-fondo to-transparent p-4 pt-12">
                <p className="text-sm font-semibold">Liviu</p>
                <p className="text-[11px] tracking-[0.15em] text-atenuado">@LIVIUFITNESS</p>
              </div>
            </div>
            <div>
              <p className="mb-2 text-[11px] font-semibold tracking-[0.2em] text-atenuado">QUIÉN ESTÁ DETRÁS</p>
              <h2 className="font-display text-3xl font-black uppercase leading-tight md:text-4xl">
                Lo que le mando a <span className="text-acento">mis clientes</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-texto-2 md:text-base">
                Soy <span className="font-semibold text-white">Liviu</span>, entrenador personal y coach de
                nutrición. Ayudo a gente que entrena a llegar a su proteína diaria sin vivir a base de
                pechuga hervida. Este recetario es lo que le mando a mis clientes cuando me dicen{" "}
                <span className="italic">&ldquo;no sé qué más comer&rdquo;</span>.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-borde px-5 py-14 md:px-12 md:py-16">
          <h2 className="mb-8 text-center font-display text-3xl font-black uppercase md:text-4xl">
            Preguntas <span className="text-acento">frecuentes</span>
          </h2>
          <FaqProteina />
        </section>

        {/* OFERTA FINAL */}
        <section id="oferta" className="border-t border-borde px-5 py-16 text-center md:px-12 md:py-20">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-acento">PRECIO DE LANZAMIENTO</p>
          <h2 className="mt-4 font-display text-5xl font-black uppercase leading-[0.92] md:text-6xl">
            Empieza a comer
            <br />
            <span className="text-acento">proteína</span> hoy
          </h2>
          <div className="mx-auto mt-8 flex max-w-xs items-center justify-center gap-6">
            <Telefono src="/proteina/portada.webp" alt="Portada del recetario" className="w-[110px] -rotate-3" />
            <div className="text-left">
              <p className="font-mono tabular text-4xl font-bold">6,99 €</p>
              <p className="mt-1 text-[11px] uppercase tracking-wide text-atenuado">
                Pago único
                <br />
                Descarga inmediata
                <br />
                Tuyo para siempre
              </p>
            </div>
          </div>
          <BotonCompra texto="QUIERO MI RECETARIO" className="mt-9 w-full max-w-sm md:text-base" />
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-borde px-5 pb-28 pt-10 text-center md:px-12 md:pb-10">
        <Image src="/logo-livfit.png" alt="LivFit" width={130} height={45} className="mx-auto h-6 w-auto opacity-70" />
        <p className="mt-4 text-sm font-semibold">@liviufitness</p>
        <p className="mt-1 text-[11px] tracking-[0.2em] text-atenuado">ENTRENAMIENTO &amp; NUTRICIÓN</p>
        <p className="mx-auto mt-4 max-w-xl text-[11px] leading-relaxed text-atenuado/70">
          Las calorías y los macros son estimaciones orientativas. Este recetario es material
          informativo y no sustituye la valoración de un profesional sanitario. Adapta las raciones a tu
          objetivo.
        </p>
      </footer>

      <CtaFijo href={GUMROAD_URL} />
    </>
  );
}
