import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { navLinks } from "@/content/business-content";

export function SiteFooter() {
  return (
    <footer className="py-12">
      <Container>
        <div className="border-2 border-foreground bg-card">
          <div className="grid gap-6 border-b-2 border-foreground p-6 md:grid-cols-[1fr_auto] md:items-start md:gap-8">
            <div>
              <span className="signal-label">Cobertura local</span>
              <p className="mt-3 text-lg font-black uppercase tracking-[0.06em] text-foreground">{siteConfig.brand}</p>
              <p className="mt-1 max-w-lg text-sm text-foreground/78">{siteConfig.role}</p>
            </div>

            <nav className="flex flex-wrap gap-2 md:justify-end">
              {navLinks.map((item) => (
                <a key={item.href} href={item.href} className="terrain-chip transition hover:border-foreground">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="grid gap-3 p-6 text-sm sm:grid-cols-[1fr_auto] sm:items-center">
            <a href={siteConfig.phoneHref} className="font-semibold text-foreground">
              {siteConfig.phoneDisplay}
            </a>
            <p className="text-foreground/72">© {new Date().getFullYear()} {siteConfig.brand}. Todos los derechos reservados.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
