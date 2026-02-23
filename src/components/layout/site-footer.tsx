import { Container } from "@/components/ui/container";
import { ArrowUp, Facebook, Instagram } from "lucide-react";
import { siteConfig } from "@/config/site";
import { navLinks } from "@/content/business-content";

export function SiteFooter() {
  const siteVersion = "1.0.0";

  return (
    <footer className="py-10 sm:py-14">
      <Container>
        <div className="muga-slide relative px-4 py-8 sm:px-8 sm:py-12 lg:px-10">
          <div className="relative z-10 text-center lg:text-left">
            <h2 className="text-[clamp(3rem,10vw,8.4rem)] font-black uppercase leading-[0.84] tracking-[-0.045em] text-foreground lg:tracking-[-0.055em]">
              {siteConfig.brand}
            </h2>
            <p className="mx-auto mt-4 max-w-[42rem] text-sm leading-relaxed text-foreground/72 sm:text-base lg:mx-0">
              {siteConfig.role}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:justify-start">
              <a
                href={siteConfig.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 w-14 items-center justify-center border border-foreground bg-surface text-foreground transition hover:bg-brand hover:text-brandForeground"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" strokeWidth={2} aria-hidden />
              </a>
              <a
                href={siteConfig.facebookHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 w-14 items-center justify-center border border-foreground bg-surface text-foreground transition hover:bg-brand hover:text-brandForeground"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" strokeWidth={2} aria-hidden />
              </a>
              <a
                href="#inicio"
                className="inline-flex h-14 w-14 items-center justify-center border border-foreground bg-surface text-foreground transition hover:bg-brand hover:text-brandForeground"
                aria-label="Volver al inicio"
              >
                <ArrowUp className="h-6 w-6" strokeWidth={2} aria-hidden />
              </a>
            </div>

            <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-black uppercase tracking-[0.1em] text-foreground/78 sm:text-sm lg:justify-start">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="underline decoration-transparent underline-offset-[5px] transition hover:text-brand hover:decoration-brand"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-8 grid gap-3 border-t border-foreground/20 pt-5 text-[11px] text-center sm:grid-cols-3 sm:items-center sm:text-xs">
              <div className="flex flex-wrap items-center justify-center gap-2 text-foreground/66 sm:justify-self-start sm:justify-start">
                <a
                  href="https://muga.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-transparent underline-offset-[4px] transition hover:text-foreground hover:decoration-foreground/60"
                >
                  muga.dev
                </a>
                <span aria-hidden>·</span>
                <a
                  href="https://github.com/muga-system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/72 underline decoration-transparent underline-offset-[4px] transition hover:text-foreground hover:decoration-foreground/60"
                  aria-label={`Versión ${siteVersion} en GitHub`}
                  title="Ver en GitHub"
                >
                  v{siteVersion}
                </a>
              </div>
              <p className="text-foreground/66 sm:justify-self-center">Trabajo directo. Coordinación clara.</p>
              <p className="text-foreground/66 sm:justify-self-end sm:text-right">{new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
