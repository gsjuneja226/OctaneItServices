"use client";

import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/data/companyData";

export default function WhatsAppPill() {
  const whatsappUrl = `https://wa.me/${COMPANY.contact.whatsappNumber}?text=Hi%20Octane%20IT%20Services,%20I'd%20like%20to%20inquire%20about%20your%20services!`;

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-3 rounded-full shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all"
        title="Chat with our team on WhatsApp"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 fill-white text-emerald-500" />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
        </div>
        <span className="text-xs font-bold tracking-wide hidden sm:inline">
          Chat with Octane Team
        </span>
      </a>
    </aside>
  );
}

