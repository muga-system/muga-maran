import { Container } from "@/components/ui/container";
import { benefits } from "@/content/business-content";

export function BenefitsSection() {
  return (
    <section id="servicios" className="py-10 sm:py-12">
      <Container>
        <div className="muga-slide p-4 sm:p-6">
          <div className="relative z-10">
            <div className="mb-5">
              <p className="signal-label">Servicio</p>
              <h2 className="muga-scifi-title mt-4 text-4xl text-foreground sm:text-5xl">Qué resolvemos</h2>
            </div>

            <div className="grid gap-3 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <article key={benefit.title} className="muga-panel p-4 sm:p-5">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-foreground/60">0{index + 1}</p>
                  <h3 className="mt-2 text-lg font-black uppercase leading-tight text-foreground">{benefit.title}</h3>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.1em] text-foreground/62">{benefit.kicker}</p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/76">{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
