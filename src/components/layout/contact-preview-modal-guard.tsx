"use client";

import { useEffect, useLayoutEffect, useState } from "react";

type ContactKind = "phone" | "whatsapp";

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden className="h-5 w-5">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function FlaskIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-10 w-10">
      <path d="M14 2v6a2 2 0 0 0 .25.96l5.5 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.75-2.96l5.5-10.08A2 2 0 0 0 10 8V2" />
      <path d="M6.5 15h11" />
      <path d="M8.5 2h7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-3.5 w-3.5">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.2 18.8 19.5 19.5 0 0 1 5.2 12.8 19.8 19.8 0 0 1 2.08 4.07 2 2 0 0 1 4.07 2h3a2 2 0 0 1 2 1.72c.12.9.35 1.78.68 2.61a2 2 0 0 1-.45 2.11L8 9.75a16 16 0 0 0 6.25 6.25l1.31-1.3a2 2 0 0 1 2.11-.45c.83.33 1.7.56 2.61.68A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-3.5 w-3.5">
      <path d="M3 20l1.1-3.4A9 9 0 1 1 12 21a9 9 0 0 1-4-.9L3 20Z" />
      <path d="M9.5 8.8c.2-.4.4-.4.6-.4h.5c.2 0 .4 0 .5.4.2.5.7 1.8.8 1.9.1.2.1.4 0 .5l-.4.5c-.1.2-.2.3-.1.5.2.4.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.5 1.5.2.1.4 0 .5-.1l.6-.7c.2-.2.3-.2.6-.1l1.7.8c.3.1.5.2.6.4.1.2.1 1-.2 1.4-.3.4-1 .9-1.7 1-.4.1-1 .1-1.6-.1-.4-.1-1-.3-1.7-.6-2.9-1.3-4.8-4.3-4.9-4.4-.1-.2-1.2-1.6-1.2-3 0-1.4.7-2.1.9-2.4Z" />
    </svg>
  );
}

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

function closeMobileMenuForAnchor(anchor: HTMLAnchorElement) {
  const details = anchor.closest("details[data-mobile-menu]");

  if (!(details instanceof HTMLDetailsElement)) {
    return;
  }

  details.open = false;
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

      closeMobileMenuForAnchor(anchor);

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
          <CloseIcon />
        </button>

        <div className="pr-12">
          <p className="signal-label">Aviso</p>
          <h2 id="contact-preview-title" className="mt-4 text-2xl font-black uppercase tracking-[-0.02em] text-foreground sm:text-3xl">
            Versión de prueba
          </h2>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-[auto_1fr] sm:items-start">
          <div className="inline-flex h-20 w-20 items-center justify-center border border-foreground bg-card text-foreground">
            <FlaskIcon />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-black uppercase tracking-[0.1em] text-foreground/68">
              <span className="inline-flex items-center gap-1.5 border border-foreground/35 px-2 py-1">
                {contactKind === "phone" ? <PhoneIcon /> : <WhatsAppIcon />}
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
