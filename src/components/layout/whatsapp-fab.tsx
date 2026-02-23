import { MessageCircle } from "lucide-react";

import { siteConfig } from "@/config/site";

export function WhatsAppFab() {
  return (
    <a
      href={siteConfig.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enviar consulta por WhatsApp"
      className="fixed bottom-4 right-4 z-30 inline-flex h-12 w-12 items-center justify-center border border-foreground bg-card text-foreground transition-colors hover:bg-accent sm:bottom-6 sm:right-6"
      style={{ transform: "translateX(calc(var(--scrollbar-compensation, 0px) * -1))" }}
    >
      <MessageCircle className="h-5 w-5" strokeWidth={2.1} aria-hidden />
    </a>
  );
}
