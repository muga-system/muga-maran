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
    <section id="contacto" className="py-10 sm:py-12">
      <Container>
        <div className="muga-slide px-4 py-6 sm:px-6 sm:py-8">
          <div className="relative z-10 text-center">
            <p className="signal-label">Contacto</p>
            <h2 className="muga-scifi-title mt-5 text-5xl text-foreground sm:text-7xl">Hablemos</h2>
            <a href={siteConfig.phoneHref} className="mt-5 inline-block text-3xl font-black leading-none text-foreground sm:text-5xl">
              {siteConfig.phoneDisplay}
            </a>
          </div>

          <div className="relative z-20 mt-7 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="muga-panel-soft p-4 sm:p-5 text-left">
              <p className="text-xs font-black uppercase tracking-[0.12em] text-foreground/62">Para cotizar</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {quickItems.map((item, index) => (
                  <div
                    key={item.label}
                    className="border border-foreground/35 px-3 py-3 backdrop-blur-[4px] sm:px-4 sm:py-4"
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

            <div className="muga-float-card p-4 sm:p-5 text-center">
              <p className="text-xs font-black uppercase tracking-[0.12em] text-foreground/62">Canal</p>
              <div className="mt-4 flex justify-center">
                <a
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center gap-2 sm:max-w-xs"
                >
                  <MessageCircle className="h-5 w-5" strokeWidth={2.2} aria-hidden />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
