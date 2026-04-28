import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";

export const runtime = "nodejs";

const TO = process.env.CONTACT_TO_EMAIL ?? "contacto@wecome.mx";
const FROM = process.env.CONTACT_FROM_EMAIL ?? "no-reply@wecome.mx";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Solicitud inválida." },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Datos inválidos.", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  // Honeypot: si llegó algo en `website`, ignorar silenciosamente.
  if (parsed.data.website && parsed.data.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn(
      "[/api/contacto] RESEND_API_KEY no configurado — el mensaje se procesa pero NO se envía. Configurar antes de producción."
    );
    return NextResponse.json({ ok: true });
  }

  try {
    const resend = new Resend(apiKey);
    const { name, email, phone, message } = parsed.data;
    await resend.emails.send({
      from: `Wecome Web <${FROM}>`,
      to: [TO],
      replyTo: email,
      subject: `Nuevo mensaje desde wecome.mx — ${name}`,
      text: [
        `Nombre: ${name}`,
        `Correo: ${email}`,
        `Teléfono: ${phone}`,
        "",
        "Mensaje:",
        message,
      ].join("\n"),
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[/api/contacto] Resend error", err);
    return NextResponse.json(
      { ok: false, message: "No pudimos enviar el mensaje. Intenta más tarde." },
      { status: 500 }
    );
  }
}
