import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export function CtaSection() {
  const quickItems = ["Entrada rápida", "Retiro de residuos", "Entrega final del lote"] as const;

  return (
    <section id="contacto" className="py-12 sm:py-16">
      <Container>
        <div className="border-2 border-foreground bg-brand text-brandForeground">
          <div className="border-b-2 border-foreground/40 p-6 sm:p-8">
            <p className="inline-flex border-2 border-accent bg-accent px-3 py-1 text-xs font-black uppercase tracking-[0.08em] text-foreground">
              Contacto directo
            </p>
            <h2 className="mt-5 max-w-4xl text-4xl font-black uppercase leading-[0.9] sm:text-6xl">
              Coordinamos hoy.
              <br />
              Resolvemos hoy.
            </h2>
          </div>

          <div className="grid md:grid-cols-[1.1fr_0.9fr]">
            <div className="border-b-2 border-foreground/40 p-6 sm:p-8 md:border-b-0 md:border-r-2 md:border-foreground/40">
              <a href={siteConfig.phoneHref} className="text-4xl font-black leading-none sm:text-5xl">
                {siteConfig.phoneDisplay}
              </a>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-brandForeground/90">
                Enviá ubicación y estado del terreno. Definimos alcance, tiempos y comienzo de trabajo.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={siteConfig.phoneHref} className="btn-primary text-base">
                  {siteConfig.ctaPrimary}
                </a>
                <a href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-secondary text-base">
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.08em] text-brandForeground/82">Incluye</p>
              <ul className="mt-4 space-y-3">
                {quickItems.map((item) => (
                  <li key={item} className="border-2 border-brandForeground/45 bg-brand px-4 py-3 text-sm font-bold uppercase tracking-[0.06em] text-brandForeground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
