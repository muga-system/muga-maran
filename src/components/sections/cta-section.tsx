import { Container } from "@/components/ui/container";
import { Clock3, FileText, Leaf, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function CtaSection() {
  const quickItems = [
    { label: "Estado", Icon: Leaf },
    { label: "Alcance", Icon: FileText },
    { label: "Inicio", Icon: Clock3 }
  ] as const;

  return (
    <section id="contacto" className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="muga-slide px-4 py-7 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
          <div className="relative z-10 mx-auto max-w-[46rem] text-center">
            <p className="signal-label">Contacto</p>
            <h2 className="muga-scifi-title mt-5 text-5xl text-foreground sm:text-7xl">Hablemos</h2>
            <a href={siteConfig.phoneHref} className="mt-6 inline-block text-3xl font-black leading-none text-foreground sm:text-5xl">
              {siteConfig.phoneDisplay}
            </a>
          </div>

          <div className="relative z-20 mt-10 grid gap-4 lg:grid-cols-[1.15fr_0.85fr] lg:gap-5">
            <div className="muga-panel-soft p-5 text-left sm:p-6">
              <p className="text-xs font-black uppercase tracking-[0.12em] text-foreground/62">Para cotizar</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {quickItems.map((item, index) => (
                  <div
                    key={item.label}
                    className="border border-foreground/35 px-4 py-4 backdrop-blur-[4px]"
                    style={{ backgroundColor: "hsl(var(--color-surface) / 0.45)" }}
                  >
                    <p className="text-3xl font-black leading-none text-foreground/52 sm:text-[2.1rem]">
                      0{index + 1}
                    </p>
                    <div className="mt-3 flex items-center gap-2.5">
                      <item.Icon className="h-5 w-5 text-brand" strokeWidth={2.1} aria-hidden />
                      <p className="text-sm font-semibold text-foreground">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="muga-float-card p-5 text-center sm:p-6">
              <p className="text-xs font-black uppercase tracking-[0.12em] text-foreground/62">Canal</p>
              <div className="mt-5 flex flex-col gap-3 sm:items-center">
                <a
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center gap-2 px-7 py-4 sm:max-w-sm"
                >
                  <MessageCircle className="h-5 w-5" strokeWidth={2.2} aria-hidden />
                  WhatsApp
                </a>
                <a href="#servicios" className="btn-secondary w-full justify-center px-7 py-4 sm:max-w-sm">
                  {siteConfig.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
