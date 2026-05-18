import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, email, telefono, sede, mensaje } = body;

    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { message: "Nombre, email y mensaje son requeridos." },
        { status: 400 }
      );
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      return NextResponse.json(
        { message: "Servicio de email no configurado." },
        { status: 503 }
      );
    }

    const sedeLabel = sede === "dean-funes"
      ? "Deán Funes"
      : sede === "balcarce"
      ? "Balcarce"
      : "Sin especificar";

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "La Cantera Web <noreply@lacanteraws.com>",
        to: ["lacantera1380@gmail.com"],
        reply_to: email,
        subject: `Consulta web de ${nombre}`,
        html: `
          <h2>Nueva consulta desde lacanteraws.com</h2>
          <table>
            <tr><td><strong>Nombre:</strong></td><td>${nombre}</td></tr>
            <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
            <tr><td><strong>Teléfono:</strong></td><td>${telefono || "—"}</td></tr>
            <tr><td><strong>Sede:</strong></td><td>${sedeLabel}</td></tr>
          </table>
          <h3>Mensaje:</h3>
          <p>${mensaje.replace(/\n/g, "<br>")}</p>
        `,
      }),
    });

    if (!res.ok) {
      return NextResponse.json(
        { message: "Error al enviar el email. Intentá de nuevo." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { message: "Error inesperado. Intentá de nuevo." },
      { status: 500 }
    );
  }
}
