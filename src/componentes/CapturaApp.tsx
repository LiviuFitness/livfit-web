import Image from "next/image";

export default function CapturaApp({
  src,
  alt,
  titulo,
  width,
  height,
}: {
  src: string;
  alt: string;
  titulo: string;
  width: number;
  height: number;
}) {
  return (
    <div className="w-full max-w-[260px] shrink-0 self-start">
      <div className="overflow-hidden rounded-2xl border border-borde-2 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-auto w-full self-start"
        />
      </div>
      <p className="mt-3 text-center text-xs font-medium text-atenuado">{titulo}</p>
    </div>
  );
}
