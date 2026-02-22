import { Container } from "@/components/ui/container";
import { IconBadge } from "@/components/ui/icon-badge";
import { benefits } from "@/content/business-content";

export function BenefitsSection() {
  const icons = ["field", "cleanup", "maintenance"] as const;

  return (
    <section id="servicios" className="py-12 sm:py-16">
      <Container>
        <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
          <div>
            <p className="signal-label">Servicios</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-[0.9] text-foreground sm:text-5xl">
              Cobertura
              <br />
              real.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-foreground/82">
              Soluciones para terreno tomado por maleza, residuos verdes y necesidad de mantenimiento periódico.
            </p>
          </div>

          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <article key={benefit.title} className="border-2 border-foreground bg-card p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <IconBadge name={icons[index]} />
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.08em] text-brand">{benefit.kicker}</p>
                      <h3 className="mt-1 text-2xl font-black uppercase leading-tight text-foreground">{benefit.title}</h3>
                    </div>
                  </div>
                  <span className="terrain-chip">0{index + 1}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-foreground/82">{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
