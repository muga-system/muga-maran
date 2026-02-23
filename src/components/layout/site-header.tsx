import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { navLinks } from "@/content/business-content";

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" aria-hidden className="h-5 w-5">
      <path d="M4 5h16" />
      <path d="M4 12h16" />
      <path d="M4 19h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" aria-hidden className="h-5 w-5">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/35 bg-surface">
      <Container className="py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <a
            href="/"
            className="inline-flex items-center border border-foreground px-4 py-2 text-sm font-black uppercase tracking-[0.12em] text-foreground"
          >
            {siteConfig.brand}
          </a>

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

          <details data-mobile-menu className="group relative md:hidden">
            <summary
              className="relative z-50 inline-flex h-11 w-11 list-none items-center justify-center border border-foreground bg-card text-foreground [&::-webkit-details-marker]:hidden group-open:before:fixed group-open:before:inset-0 group-open:before:z-40 group-open:before:bg-brand/45 group-open:before:content-['']"
              aria-controls="mobile-nav"
              aria-label="Abrir o cerrar menú de navegación"
            >
              <span className="group-open:hidden">
                <MenuIcon />
              </span>
              <span className="hidden group-open:block">
                <CloseIcon />
              </span>
            </summary>

            <nav
              id="mobile-nav"
              className="fixed inset-x-4 top-[5.2rem] z-50 mx-auto hidden w-[min(92vw,22rem)] gap-2 border border-foreground bg-surface p-3 group-open:grid"
            >
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="border border-foreground/30 bg-card px-4 py-2.5 text-sm font-semibold uppercase tracking-[0.05em] text-foreground"
                >
                  {item.label}
                </a>
              ))}
              <a href={siteConfig.phoneHref} className="btn-primary mt-1 justify-center text-sm">
                Contactar
              </a>
            </nav>
          </details>
        </div>
      </Container>
    </header>
  );
}
