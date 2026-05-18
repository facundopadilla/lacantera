"use client";

import { MessageCircle } from "lucide-react";

export function CtaFloating() {
  return (
    <a
      href="https://wa.me/5493874636952"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 font-semibold text-sm"
      aria-label="Chatear por WhatsApp"
    >
      <MessageCircle size={18} />
      <span className="hidden sm:inline">¿Hablamos?</span>
    </a>
  );
}
