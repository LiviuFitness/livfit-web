import {
  Dumbbell,
  ClipboardList,
  UtensilsCrossed,
  LineChart,
  CalendarCheck,
  MessageCircle,
  Trophy,
  TrendingUp,
  Send,
  Target,
  Calculator,
  Gift,
} from "lucide-react";
import Image from "next/image";
import Header from "@/componentes/Header";
import Footer from "@/componentes/Footer";
import CapturaApp from "@/componentes/CapturaApp";
import FormularioContacto from "@/componentes/FormularioContacto";
import IconoInstagram from "@/componentes/IconoInstagram";
import Revelar from "@/componentes/Revelar";
import CtaFlotante from "@/componentes/CtaFlotante";
import Faq from "@/componentes/Faq";

const PILARES = [
  {
    icono: Dumbbell,
    titulo: "Mesociclos con rango de reps + RIR",
    texto:
      "Cada bloque de entrenamiento progresa por semanas, con series definidas por rango de repeticiones y esfuerzo (RIR), no por sensaciones sueltas.",
  },
  {
    icono: TrendingUp,
    titulo: "Revisión semanal de verdad",
    texto:
      "Cada semana reviso tu peso, tu adherencia y tu progreso, y ajusto tu dieta y tu rutina en consecuencia. No hay piloto automático.",
  },
  {
    icono: UtensilsCrossed,
    titulo: "Dieta por gramos, con equivalencias",
    texto:
      'Nada de "come sano": tu dieta lleva gramos exactos por alimento, con equivalencias para que puedas cambiar unos por otros sin descuadrar tus macros.',
  },
];

const INCLUYE = [
  {
    icono: ClipboardList,
    titulo: "Rutina personalizada semana a semana",
    texto: "Diseñada para tu nivel y objetivo, y ajustada cada semana según tu progreso real.",
  },
  {
    icono: UtensilsCrossed,
    titulo: "Dieta con gramos exactos",
    texto: "Con equivalencias entre alimentos para que puedas adaptarla a tu día a día.",
  },
  {
    icono: LineChart,
    titulo: "Seguimiento de progreso",
    texto: "Peso, fotos, récords personales y 1RM estimado, todo en un mismo sitio.",
  },
  {
    icono: CalendarCheck,
    titulo: "Hábitos diarios",
    texto: "Pasos, agua, sueño y lo que necesites: constancia visible semana a semana.",
  },
  {
    icono: MessageCircle,
    titulo: "Chat directo conmigo",
    texto: "Dudas, ajustes o motivación: hablas conmigo, no con un bot.",
  },
  {
    icono: Trophy,
    titulo: "Logros y comunidad",
    texto: "Metas que se desbloquean con tu esfuerzo, dentro de la comunidad de clientes.",
  },
];

const CAPTURAS = [
  {
    src: "/capturas/sesion-entreno.png",
    titulo: "Sesión de entrenamiento guiada",
    width: 700,
    height: 1101,
  },
  {
    src: "/capturas/dieta.png",
    titulo: "Dieta con equivalencias",
    width: 700,
    height: 658,
  },
  {
    src: "/capturas/inicio.png",
    titulo: "Racha, hábitos y logros",
    width: 700,
    height: 1107,
  },
  {
    src: "/capturas/progreso.png",
    titulo: "Progreso semanal",
    width: 700,
    height: 1101,
  },
];

const PASOS = [
  {
    icono: Send,
    numero: "01",
    titulo: "Escríbeme",
    texto: "Rellena el formulario contándome tu objetivo y tu punto de partida.",
  },
  {
    icono: Target,
    numero: "02",
    titulo: "Hablamos",
    texto: "Vemos si encajamos, resolvemos tus dudas y definimos el plan que más te conviene.",
  },
  {
    icono: ClipboardList,
    numero: "03",
    titulo: "Recibes tu plan",
    texto: "Preparo tu rutina y tu dieta personalizada, lista en la app desde el primer día.",
  },
  {
    icono: TrendingUp,
    numero: "04",
    titulo: "Progresas cada semana",
    texto: "Reviso tu evolución semana a semana y ajusto lo que haga falta contigo.",
  },
];

const PLANES = [
  {
    nombre: "Mensual",
    texto: "Para empezar sin compromiso a largo plazo y notar cómo trabajo.",
    destacado: false,
  },
  {
    nombre: "Trimestral",
    texto: "El plan recomendado: tiempo real para que el método haga efecto y ajustarlo contigo.",
    destacado: true,
  },
];

export default function Inicio() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section
          id="hero"
          className="contenedor relative overflow-hidden py-20 md:py-28"
        >
          <div className="brillo-hero" aria-hidden="true" />
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">
              <span className="etiqueta animate-[aparecer_0.6s_ease_both]">
                Entrenamiento personal · online y presencial
              </span>
              <h1 className="max-w-2xl animate-[aparecer_0.6s_ease_0.1s_both] text-4xl font-bold tracking-tight md:text-5xl">
                Un método real, un entrenador detrás, resultados que se ven.
              </h1>
              <p className="max-w-xl animate-[aparecer_0.6s_ease_0.2s_both] text-balance text-base text-texto-2 md:text-lg">
                Entrena conmigo en mi estudio o desde donde estés: misma
                rutina que progresa semana a semana, dieta por gramos y una
                revisión real de tu evolución.
              </p>
              <div className="flex animate-[aparecer_0.6s_ease_0.3s_both] flex-col gap-3 sm:flex-row">
                <a href="#contacto" className="cta">
                  Empieza tu método
                </a>
                <a href="#incluye" className="ghost">
                  Ver qué incluye
                </a>
              </div>
            </div>

            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm animate-[aparecer_0.6s_ease_0.15s_both]">
              <div className="absolute inset-0 overflow-hidden rounded-3xl border border-borde-2 shadow-[0_25px_70px_rgba(0,0,0,0.5)]">
                <Image
                  src="/liviu-hero.jpg"
                  alt="Liviu, entrenador personal de LivFit"
                  fill
                  sizes="(min-width: 768px) 400px, 320px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fondo/50 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Método */}
        <section id="metodo" className="border-t border-borde py-20">
          <div className="contenedor">
            <Revelar className="mx-auto max-w-2xl text-center">
              <span className="etiqueta">El método</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Soy Liviu, y esto es lo que hago distinto
              </h2>
              <p className="mt-4 text-texto-2">
                Llevo mi propio método de entrenamiento y nutrición con cada
                cliente: nada de rutinas genéricas ni dietas copiadas. Todo se
                ajusta cada semana según cómo respondes tú — tanto si
                entrenamos presencialmente en mi estudio como si lo hacemos
                online.
              </p>
            </Revelar>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {PILARES.map((pilar, i) => (
                <Revelar key={pilar.titulo} retraso={i * 100}>
                  <div className="tarjeta tarjeta-interactiva h-full">
                    <pilar.icono className="text-acento" size={26} strokeWidth={1.7} />
                    <h3 className="mt-4 font-semibold">{pilar.titulo}</h3>
                    <p className="mt-2 text-sm text-texto-2">{pilar.texto}</p>
                  </div>
                </Revelar>
              ))}
            </div>
          </div>
        </section>

        {/* Qué incluye */}
        <section id="incluye" className="border-t border-borde py-20">
          <div className="contenedor">
            <Revelar className="mx-auto max-w-2xl text-center">
              <span className="etiqueta">Qué incluye</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Todo lo que necesitas, en un mismo sitio
              </h2>
              <p className="mt-4 text-texto-2">
                Tu propia app de seguimiento, incluida en el servicio.
              </p>
            </Revelar>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {INCLUYE.map((item, i) => (
                <Revelar key={item.titulo} retraso={(i % 3) * 100}>
                  <div className="tarjeta tarjeta-interactiva h-full">
                    <item.icono className="text-acento" size={24} strokeWidth={1.7} />
                    <h3 className="mt-3 text-sm font-semibold">{item.titulo}</h3>
                    <p className="mt-2 text-sm text-atenuado">{item.texto}</p>
                  </div>
                </Revelar>
              ))}
            </div>
          </div>
        </section>

        {/* Calculadora — imán gratuito */}
        <section className="border-t border-borde py-14">
          <div className="contenedor">
            <Revelar>
              <div className="tarjeta tarjeta-interactiva flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-acento/10">
                    <Calculator className="text-acento" size={22} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      ¿No sabes cuántas calorías necesitas?
                    </h3>
                    <p className="mt-1 text-sm text-texto-2">
                      Calcúlalo gratis en un minuto, sin registrarte.
                    </p>
                  </div>
                </div>
                <a href="/calculadora" className="ghost shrink-0">
                  Abrir calculadora
                </a>
              </div>
            </Revelar>
          </div>
        </section>

        {/* Capturas / mockups */}
        <section className="border-t border-borde py-20">
          <div className="contenedor">
            <Revelar className="mx-auto max-w-2xl text-center">
              <span className="etiqueta">La app</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Tu progreso, siempre a mano
              </h2>
              <p className="mt-4 text-texto-2">
                Capturas reales de la app que usarás cada semana.
              </p>
            </Revelar>

            <div className="mt-12 flex flex-wrap items-start justify-center gap-6">
              {CAPTURAS.map((captura, i) => (
                <Revelar key={captura.src} retraso={i * 100}>
                  <CapturaApp
                    src={captura.src}
                    alt={captura.titulo}
                    titulo={captura.titulo}
                    width={captura.width}
                    height={captura.height}
                  />
                </Revelar>
              ))}
            </div>
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="border-t border-borde py-20">
          <div className="contenedor">
            <Revelar className="mx-auto max-w-2xl text-center">
              <span className="etiqueta">Cómo funciona</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Empezar es así de simple
              </h2>
            </Revelar>

            <div className="relative mt-12 grid gap-8 md:grid-cols-4">
              <div
                className="absolute top-6 right-0 left-0 hidden h-px bg-borde md:block"
                aria-hidden="true"
              />
              {PASOS.map((paso, i) => (
                <Revelar key={paso.titulo} retraso={i * 120} className="relative text-center">
                  <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-borde bg-fondo">
                    <paso.icono className="text-acento" size={20} strokeWidth={1.8} />
                  </div>
                  <span className="etiqueta mt-4 block">{paso.numero}</span>
                  <h3 className="mt-1 font-semibold">{paso.titulo}</h3>
                  <p className="mt-2 text-sm text-texto-2">{paso.texto}</p>
                </Revelar>
              ))}
            </div>
          </div>
        </section>

        {/* Planes */}
        <section id="planes" className="border-t border-borde py-20">
          <div className="contenedor">
            <Revelar className="mx-auto max-w-2xl text-center">
              <span className="etiqueta">Planes</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Elige tu compromiso
              </h2>
              <p className="mt-4 text-texto-2">
                Precios a medida según tu punto de partida y objetivo — te los
                doy al hablar contigo.
              </p>
            </Revelar>

            <div className="mx-auto mt-12 grid max-w-2xl gap-5 sm:grid-cols-2">
              {PLANES.map((plan, i) => (
                <Revelar key={plan.nombre} retraso={i * 100}>
                  <div
                    className={`tarjeta tarjeta-interactiva flex h-full flex-col gap-3 ${
                      plan.destacado ? "border-acento" : ""
                    }`}
                  >
                    {plan.destacado && (
                      <span className="etiqueta w-fit rounded-full bg-acento/10 px-3 py-1">
                        Recomendado
                      </span>
                    )}
                    <h3 className="text-xl font-bold">{plan.nombre}</h3>
                    <p className="flex-1 text-sm text-texto-2">{plan.texto}</p>
                    <a href="#contacto" className="ghost mt-2">
                      Consultar precio
                    </a>
                  </div>
                </Revelar>
              ))}
            </div>
          </div>
        </section>

        {/* Trae a un amigo */}
        <section className="border-t border-borde py-14">
          <div className="contenedor">
            <Revelar>
              <div className="tarjeta tarjeta-interactiva flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-acento/10">
                    <Gift className="text-acento" size={22} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Trae a un amigo</h3>
                    <p className="mt-1 text-sm text-texto-2">
                      Si os apuntáis los dos, os regalo una semana gratis a
                      cada uno.
                    </p>
                  </div>
                </div>
                <a href="#contacto" className="ghost shrink-0">
                  Contarme más
                </a>
              </div>
            </Revelar>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-borde py-20">
          <div className="contenedor">
            <Revelar className="mx-auto max-w-2xl text-center">
              <span className="etiqueta">Dudas frecuentes</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Antes de escribirme
              </h2>
            </Revelar>

            <Revelar retraso={100} className="mt-12">
              <Faq />
            </Revelar>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="border-t border-borde py-20">
          <div className="contenedor grid gap-12 md:grid-cols-2 md:items-center">
            <Revelar>
              <span className="etiqueta">Contacto</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Hablemos de tu objetivo
              </h2>
              <p className="mt-4 text-texto-2">
                Cuéntame dónde estás y a dónde quieres llegar — y si prefieres
                entrenar presencialmente en mi estudio o online. Te respondo
                yo personalmente para ver si encajamos y cómo empezar.
              </p>
              <a
                href="https://instagram.com/liviufitness"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-texto-2 transition-colors hover:text-acento"
              >
                <IconoInstagram size={18} />
                O escríbeme por Instagram: @liviufitness
              </a>
            </Revelar>
            <Revelar retraso={100}>
              <FormularioContacto />
            </Revelar>
          </div>
        </section>
      </main>
      <Footer />
      <CtaFlotante />
    </>
  );
}
