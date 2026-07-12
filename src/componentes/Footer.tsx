import Image from "next/image";
import Link from "next/link";
import IconoInstagram from "@/componentes/IconoInstagram";

export default function Footer() {
  return (
    <footer className="border-t border-borde">
      <div className="contenedor flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-3">
          <Image
            src="/logo-livfit.png"
            alt="LivFit"
            width={110}
            height={38}
            className="h-7 w-auto self-start"
          />
          <p className="max-w-xs text-sm text-atenuado">
            Entrenamiento personal online con seguimiento real. Un método, un
            entrenador, resultados de verdad.
          </p>
          <a
            href="https://instagram.com/liviufitness"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-texto-2 transition-colors hover:text-acento"
          >
            <IconoInstagram size={16} />
            @liviufitness
          </a>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <span className="etiqueta mb-1">Legal</span>
          <Link href="/aviso-legal" className="text-atenuado hover:text-white">
            Aviso legal
          </Link>
          <Link href="/privacidad" className="text-atenuado hover:text-white">
            Política de privacidad
          </Link>
          <Link href="/cookies" className="text-atenuado hover:text-white">
            Política de cookies
          </Link>
        </div>
      </div>

      <div className="border-t border-borde py-5">
        <p className="contenedor text-xs text-atenuado">
          © {new Date().getFullYear()} LIVIU Fitness Studio. Todos los
          derechos reservados.
        </p>
      </div>
    </footer>
  );
}
