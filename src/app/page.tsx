import {
  Dumbbell,
  ClipboardList,
  UtensilsCrossed,
  LineChart,
  CalendarCheck,
  MessageCircle,
  Trophy,
  Camera,
  Scale,
  TrendingUp,
} from "lucide-react";
import Header from "@/componentes/Header";
import Footer from "@/componentes/Footer";
import MockupTelefono from "@/componentes/MockupTelefono";
import FormularioContacto from "@/componentes/FormularioContacto";
import IconoInstagram from "@/componentes/IconoInstagram";

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
  { icono: Scale, titulo: "Registro de peso y progreso" },
  { icono: Dumbbell, titulo: "Sesión de entrenamiento guiada" },
  { icono: Camera, titulo: "Fotos de progreso y récords" },
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
        <section className="contenedor flex flex-col items-center gap-6 py-20 text-center md:py-28">
          <span className="etiqueta">Entrenamiento personal online</span>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
            Un método real, un entrenador detrás, resultados que se ven.
          </h1>
          <p className="max-w-xl text-balance text-base text-texto-2 md:text-lg">
            Rutina que progresa semana a semana, dieta por gramos y una
            revisión real de tu evolución. Nada de apps genéricas sin nadie
            al otro lado.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#contacto" className="cta">
              Empieza tu método
            </a>
            <a href="#incluye" className="ghost">
              Ver qué incluye
            </a>
          </div>
        </section>

        {/* Método */}
        <section id="metodo" className="border-t border-borde py-20">
          <div className="contenedor">
            <div className="mx-auto max-w-2xl text-center">
              <span className="etiqueta">El método</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Soy Liviu, y esto es lo que hago distinto
              </h2>
              <p className="mt-4 text-texto-2">
                Llevo mi propio método de entrenamiento y nutrición con cada
                cliente: nada de rutinas genéricas ni dietas copiadas. Todo se
                ajusta cada semana según cómo respondes tú.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {PILARES.map((pilar) => (
                <div key={pilar.titulo} className="tarjeta">
                  <pilar.icono className="text-acento" size={26} strokeWidth={1.7} />
                  <h3 className="mt-4 font-semibold">{pilar.titulo}</h3>
                  <p className="mt-2 text-sm text-texto-2">{pilar.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Qué incluye */}
        <section id="incluye" className="border-t border-borde py-20">
          <div className="contenedor">
            <div className="mx-auto max-w-2xl text-center">
              <span className="etiqueta">Qué incluye</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Todo lo que necesitas, en un mismo sitio
              </h2>
              <p className="mt-4 text-texto-2">
                Tu propia app de seguimiento, incluida en el servicio.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {INCLUYE.map((item) => (
                <div key={item.titulo} className="tarjeta">
                  <item.icono className="text-acento" size={24} strokeWidth={1.7} />
                  <h3 className="mt-3 text-sm font-semibold">{item.titulo}</h3>
                  <p className="mt-2 text-sm text-atenuado">{item.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capturas / mockups */}
        <section className="border-t border-borde py-20">
          <div className="contenedor">
            <div className="mx-auto max-w-2xl text-center">
              <span className="etiqueta">La app</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Tu progreso, siempre a mano
              </h2>
              <p className="mt-4 text-texto-2">
                Capturas reales de la app próximamente.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap items-start justify-center gap-6">
              {CAPTURAS.map((captura) => (
                <MockupTelefono
                  key={captura.titulo}
                  icono={captura.icono}
                  titulo={captura.titulo}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Planes */}
        <section id="planes" className="border-t border-borde py-20">
          <div className="contenedor">
            <div className="mx-auto max-w-2xl text-center">
              <span className="etiqueta">Planes</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Elige tu compromiso
              </h2>
              <p className="mt-4 text-texto-2">
                Precios a medida según tu punto de partida y objetivo — te los
                doy al hablar contigo.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-2xl gap-5 sm:grid-cols-2">
              {PLANES.map((plan) => (
                <div
                  key={plan.nombre}
                  className={`tarjeta flex flex-col gap-3 ${
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
              ))}
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="border-t border-borde py-20">
          <div className="contenedor grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <span className="etiqueta">Contacto</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Hablemos de tu objetivo
              </h2>
              <p className="mt-4 text-texto-2">
                Cuéntame dónde estás y a dónde quieres llegar. Te respondo yo
                personalmente para ver si encajamos y cómo empezar.
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
            </div>
            <FormularioContacto />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
