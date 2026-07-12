import Image from "next/image";
import Link from "next/link";

const ENLACES = [
  { href: "/#metodo", texto: "Método" },
  { href: "/#incluye", texto: "Qué incluye" },
  { href: "/calculadora", texto: "Calculadora" },
  { href: "/#planes", texto: "Planes" },
  { href: "/#contacto", texto: "Contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-borde bg-fondo/85 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-livfit.png"
            alt="LivFit"
            width={120}
            height={42}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {ENLACES.map((enlace) => (
            <a
              key={enlace.href}
              href={enlace.href}
              className="text-sm font-medium text-texto-2 transition-colors hover:text-white"
            >
              {enlace.texto}
            </a>
          ))}
        </nav>

        <Link href="/#contacto" className="cta !px-5 !py-2.5 !text-[13.5px]">
          Apúntate
        </Link>
      </div>
    </header>
  );
}
