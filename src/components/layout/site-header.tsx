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
    <header className="sticky top-0 z-50 border-b-2 border-foreground bg-surface/95 backdrop-blur-md">
      <Container className="py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center border-2 border-foreground bg-brand px-4 py-2 text-sm font-black uppercase tracking-[0.08em] text-brandForeground"
          >
            {siteConfig.brand}
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-2 border-transparent px-3 py-2 text-sm font-bold uppercase tracking-[0.06em] text-foreground transition hover:border-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center md:flex">
            <a href={siteConfig.phoneHref} className="btn-primary px-5">
              {siteConfig.ctaPrimary}
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center border-2 border-foreground bg-card text-foreground md:hidden"
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
              className="fixed inset-0 z-40 bg-foreground/18 md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <nav
              id="mobile-nav"
              className="fixed inset-x-4 top-[5.2rem] z-50 mx-auto grid w-[min(92vw,22rem)] gap-2 border-2 border-foreground bg-card p-3 md:hidden"
            >
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-2 border-foreground/35 bg-surface px-4 py-2.5 text-sm font-semibold uppercase tracking-[0.05em] text-foreground"
                >
                  {item.label}
                </a>
              ))}
              <a href={siteConfig.phoneHref} className="btn-primary mt-1 justify-center text-sm">
                {siteConfig.ctaPrimary}
              </a>
            </nav>
          </>
        ) : null}
      </Container>
    </header>
  );
}
