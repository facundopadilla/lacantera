"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      nombre: (form.elements.namedItem("nombre") as HTMLInputElement).value,
      email:  (form.elements.namedItem("email")  as HTMLInputElement).value,
      telefono: (form.elements.namedItem("telefono") as HTMLInputElement).value,
      sede:   (form.elements.namedItem("sede")   as HTMLSelectElement).value,
      mensaje: (form.elements.namedItem("mensaje") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(json.message ?? "Hubo un error al enviar. Intentá de nuevo.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("No se pudo conectar con el servidor. Intentá de nuevo.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle size={36} className="text-success mb-4" />
        <h3 className="font-display font-bold text-xl text-stone-deep mb-2">
          ¡Mensaje enviado!
        </h3>
        <p className="text-neutral-500 text-sm max-w-xs">
          Te respondemos a la brevedad. Si querés, también podés escribirnos directo por WhatsApp.
        </p>
        <Button
          variant="outline"
          size="sm"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Enviar otro mensaje
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Nombre *" htmlFor="nombre">
          <Input id="nombre" name="nombre" required placeholder="Tu nombre" />
        </Field>
        <Field label="Email *" htmlFor="email">
          <Input id="email" name="email" type="email" required placeholder="tu@email.com" />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Teléfono" htmlFor="telefono">
          <Input id="telefono" name="telefono" type="tel" placeholder="+54 9 387..." />
        </Field>
        <Field label="Sede de interés" htmlFor="sede">
          <select
            id="sede"
            name="sede"
            className="w-full h-10 px-3 text-sm border border-neutral-200 rounded-lg bg-white text-stone-deep focus:outline-none focus:ring-1 focus:ring-copper focus:border-copper transition-colors"
          >
            <option value="">Las dos / no sé todavía</option>
            <option value="dean-funes">Deán Funes</option>
            <option value="balcarce">Balcarce</option>
          </select>
        </Field>
      </div>

      <Field label="Mensaje *" htmlFor="mensaje">
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={4}
          placeholder="Contanos qué necesitás, cuántas personas son, si querés una visita..."
          className="w-full px-3 py-2.5 text-sm border border-neutral-200 rounded-lg bg-white text-stone-deep placeholder:text-neutral-300 focus:outline-none focus:ring-1 focus:ring-copper focus:border-copper transition-colors resize-none"
        />
      </Field>

      {status === "error" && (
        <div className="flex items-center gap-2 text-sm text-danger bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          <AlertCircle size={14} className="shrink-0" />
          {errorMsg}
        </div>
      )}

      {/* Nota: Turnstile widget se agrega acá en producción */}
      <p className="text-xs text-neutral-400">
        Al enviar este formulario aceptás nuestra{" "}
        <a href="/privacidad" className="underline hover:text-copper">política de privacidad</a>.
      </p>

      <Button
        type="submit"
        variant="copper"
        size="md"
        disabled={status === "loading"}
        className="self-start"
      >
        {status === "loading" ? "Enviando..." : "Enviar mensaje"}
        <Send size={16} />
      </Button>
    </form>
  );
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-xs font-semibold text-neutral-600 uppercase tracking-wide">
        {label}
      </label>
      {children}
    </div>
  );
}

function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`w-full h-10 px-3 text-sm border border-neutral-200 rounded-lg bg-white text-stone-deep placeholder:text-neutral-300 focus:outline-none focus:ring-1 focus:ring-copper focus:border-copper transition-colors ${className ?? ""}`}
      {...props}
    />
  );
}
