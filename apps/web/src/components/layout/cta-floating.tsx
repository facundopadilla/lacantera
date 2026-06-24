"use client";

import { MessageCircle } from "lucide-react";

export function CtaFloating() {
  return (
    <a
      href="https://wa.me/5493874636952"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 right-4 sm:right-6 bottom-[calc(env(safe-area-inset-bottom,0px)+1rem)] sm:bottom-[calc(env(safe-area-inset-bottom,0px)+1.5rem)] flex items-center justify-center gap-2 size-14 sm:size-auto sm:h-12 sm:px-5 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 font-semibold text-sm"
      aria-label="Chatear por WhatsApp"
    >
      <MessageCircle size={24} className="shrink-0 sm:size-[18px]" />
      <span className="hidden sm:inline">¿Hablamos?</span>
    </a>
  );
}
