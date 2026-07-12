import Header from "@/componentes/Header";
import Footer from "@/componentes/Footer";

export default function LayoutLegal({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="contenedor flex-1 py-12">
        <div className="mx-auto max-w-[720px]">
          <div className="tarjeta mb-8 !border-[#e2b429]/50 text-[13px] text-texto-2">
            <b className="text-[#e2b429]">Borrador pendiente de revisión legal.</b>{" "}
            Este texto es un punto de partida y debe revisarlo un profesional
            antes del lanzamiento. Los datos entre [corchetes] están
            pendientes de completar.
          </div>

          <article className="legal text-[14.5px] leading-relaxed text-texto-2 [&_h1]:mb-3 [&_h1]:mt-6 [&_h1]:text-[26px] [&_h1]:font-bold [&_h1]:tracking-tight [&_h1]:text-white [&_h2]:mb-2 [&_h2]:mt-6 [&_h2]:text-[17px] [&_h2]:font-bold [&_h2]:text-white [&_li]:mb-1 [&_p]:mb-3 [&_ul]:mb-3 [&_ul]:list-disc [&_ul]:pl-5">
            {children}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
