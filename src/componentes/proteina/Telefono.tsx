import Image from "next/image";

// Marco de móvil con una página real del PDF dentro.
export function Telefono({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[26px] border-[7px] border-[#1b2127] bg-black shadow-[0_30px_70px_rgba(0,0,0,0.6)] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={715}
        height={1105}
        sizes="(min-width: 768px) 260px, 45vw"
        className="block h-auto w-full"
        priority={priority}
      />
    </div>
  );
}
