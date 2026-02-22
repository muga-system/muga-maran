"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { navLinks } from "@/content/business-content";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/35 bg-surface">
      <Container className="py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center border border-foreground px-4 py-2 text-sm font-black uppercase tracking-[0.12em] text-foreground"
          >
            {siteConfig.brand}
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-bold uppercase tracking-[0.08em] text-foreground/82 underline decoration-transparent underline-offset-[6px] transition hover:text-brand hover:decoration-brand"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center md:flex">
            <a href={siteConfig.phoneHref} className="btn-primary px-5">
              Contactar
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center border border-foreground bg-card text-foreground md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          >
            {menuOpen ? <X className="h-5 w-5" strokeWidth={2.1} /> : <Menu className="h-5 w-5" strokeWidth={2.1} />}
          </button>
        </div>

        {menuOpen ? (
          <>
            <button
              type="button"
              aria-label="Cerrar menú"
              className="fixed inset-0 z-40 bg-brand/45 md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <nav
              id="mobile-nav"
              className="fixed inset-x-4 top-[5.2rem] z-50 mx-auto grid w-[min(92vw,22rem)] gap-2 border border-foreground bg-surface p-3 md:hidden"
            >
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border border-foreground/30 bg-card px-4 py-2.5 text-sm font-semibold uppercase tracking-[0.05em] text-foreground"
                >
                  {item.label}
                </a>
              ))}
              <a href={siteConfig.phoneHref} className="btn-primary mt-1 justify-center text-sm">
                Contactar
              </a>
            </nav>
          </>
        ) : null}
      </Container>
    </header>
  );
}
