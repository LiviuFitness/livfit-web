import { NextResponse } from "next/server";

interface CuerpoContacto {
  nombre: string;
  email: string;
  telefono?: string;
  mensaje: string;
}

export async function POST(request: Request) {
  const cuerpo = (await request.json()) as Partial<CuerpoContacto>;
  const { nombre, email, telefono, mensaje } = cuerpo;

  if (!nombre || !email || !mensaje) {
    return NextResponse.json(
      { error: "Faltan campos obligatorios." },
      { status: 400 },
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const destinatario = process.env.CONTACTO_EMAIL_DESTINO;

  if (!resendApiKey || !destinatario) {
    // Sin proveedor de email configurado todavía: se registra en el
    // log del servidor para no perder el lead mientras se conecta
    // un servicio real (Resend, etc.) — ver README.
    console.warn("[contacto] Sin RESEND_API_KEY/CONTACTO_EMAIL_DESTINO configurados. Lead recibido:", {
      nombre,
      email,
      telefono,
      mensaje,
    });
    return NextResponse.json({ ok: true, aviso: "sin-proveedor-email" });
  }

  const respuesta = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM ?? "LivFit Web <web@livfit.es>",
      to: destinatario,
      reply_to: email,
      subject: `Nuevo contacto desde livfit.es — ${nombre}`,
      text: `Nombre: ${nombre}\nEmail: ${email}\nTeléfono: ${telefono ?? "-"}\n\nMensaje:\n${mensaje}`,
    }),
  });

  if (!respuesta.ok) {
    console.error("[contacto] Error enviando email:", await respuesta.text());
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
