import { MessageCircle } from "lucide-react";

import { siteConfig } from "@/config/site";

export function WhatsAppFab() {
  return (
    <a
      href={siteConfig.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enviar consulta por WhatsApp"
      className="fixed bottom-4 right-4 z-30 inline-flex h-12 w-12 items-center justify-center border-2 border-foreground bg-accent text-foreground transition sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-5 w-5" strokeWidth={2.2} aria-hidden />
    </a>
  );
}
