import type { LucideIcon } from "lucide-react";

export default function MockupTelefono({
  icono: Icono,
  titulo,
}: {
  icono: LucideIcon;
  titulo: string;
}) {
  return (
    <div className="w-full max-w-[220px] shrink-0">
      <div className="relative aspect-[9/19] w-full rounded-[28px] border-4 border-borde-2 bg-panel p-2 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
        <div className="absolute left-1/2 top-2 h-4 w-16 -translate-x-1/2 rounded-full bg-fondo" />
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-[20px] border border-borde bg-campo">
          <Icono size={34} className="text-acento/70" strokeWidth={1.5} />
          <span className="px-4 text-center text-xs font-medium text-atenuado">
            {titulo}
          </span>
        </div>
      </div>
    </div>
  );
}
