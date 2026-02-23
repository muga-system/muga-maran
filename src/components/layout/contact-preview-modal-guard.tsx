"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { FlaskConical, MessageCircle, Phone, X } from "lucide-react";

type ContactKind = "phone" | "whatsapp";

function getContactKind(href: string): ContactKind | null {
  const normalized = href.toLowerCase();

  if (normalized.startsWith("tel:")) {
    return "phone";
  }

  if (normalized.includes("wa.me/") || normalized.includes("api.whatsapp.com")) {
    return "whatsapp";
  }

  return null;
}

export function ContactPreviewModalGuard() {
  const [isOpen, setIsOpen] = useState(false);
  const [contactKind, setContactKind] = useState<ContactKind | null>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest("a[href]");

      if (!(anchor instanceof HTMLAnchorElement)) {
        return;
      }

      const href = anchor.getAttribute("href");

      if (!href) {
        return;
      }

      const kind = getContactKind(href);

      if (!kind) {
        return;
      }

      event.preventDefault();
      setContactKind(kind);
      setIsOpen(true);
    }

    function handleKeydown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClick, true);
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  useLayoutEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const previousScrollbarCompensation = document.body.style.getPropertyValue("--scrollbar-compensation");
    const computedBodyPaddingRight = window.getComputedStyle(document.body).paddingRight;
    const bodyPaddingRight = Number.parseFloat(computedBodyPaddingRight) || 0;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    document.body.style.setProperty("--scrollbar-compensation", `${Math.max(scrollbarWidth, 0)}px`);
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${bodyPaddingRight + scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
      if (previousScrollbarCompensation) {
        document.body.style.setProperty("--scrollbar-compensation", previousScrollbarCompensation);
      } else {
        document.body.style.removeProperty("--scrollbar-compensation");
      }
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[120] grid place-items-center p-4 sm:p-6" role="presentation">
      <button
        type="button"
        aria-label="Cerrar aviso"
        className="absolute inset-0 bg-foreground/55"
        onClick={() => setIsOpen(false)}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-preview-title"
        className="muga-slide relative z-10 w-full max-w-xl bg-surface p-5 sm:p-6 lg:p-7"
      >
        <button
          type="button"
          aria-label="Cerrar"
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center border border-foreground/45 bg-surface text-foreground"
        >
          <X className="h-5 w-5" strokeWidth={2.2} aria-hidden />
        </button>

        <div className="pr-12">
          <p className="signal-label">Aviso</p>
          <h2 id="contact-preview-title" className="mt-4 text-2xl font-black uppercase tracking-[-0.02em] text-foreground sm:text-3xl">
            Versión de prueba
          </h2>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-[auto_1fr] sm:items-start">
          <div className="inline-flex h-20 w-20 items-center justify-center border border-foreground bg-card text-foreground">
            <FlaskConical className="h-10 w-10" strokeWidth={2} aria-hidden />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-black uppercase tracking-[0.1em] text-foreground/68">
              <span className="inline-flex items-center gap-1.5 border border-foreground/35 px-2 py-1">
                {contactKind === "phone" ? <Phone className="h-3.5 w-3.5" aria-hidden /> : <MessageCircle className="h-3.5 w-3.5" aria-hidden />}
                {contactKind === "phone" ? "Teléfono" : "WhatsApp"}
              </span>
              <span>Sin contacto real</span>
            </div>

            <p className="mt-4 max-w-[44ch] text-sm leading-7 text-foreground/82 sm:text-base">
              Este sitio está en versión de prueba. Los botones de teléfono y WhatsApp son demostrativos y no tienen un canal de contacto real habilitado.
            </p>

            <div className="mt-6">
              <button type="button" onClick={() => setIsOpen(false)} className="btn-primary w-full justify-center px-7 py-4 sm:w-auto">
                Entendido
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
