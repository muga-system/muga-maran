import { Container } from "@/components/ui/container";
import { IconBadge } from "@/components/ui/icon-badge";
import { processStages } from "@/content/business-content";

export function WorkProcessSection() {
  const icons = ["plan", "shield", "field", "time"] as const;

  return (
    <section id="proceso" className="py-10 sm:py-12">
      <Container>
        <div className="muga-slide p-4 sm:p-6">
          <div className="relative z-10">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="signal-label">Proceso</p>
                <h2 className="muga-scifi-title mt-4 text-4xl text-foreground sm:text-5xl">Cómo trabajamos</h2>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-0 right-0 top-6 hidden h-px bg-foreground/30 md:block" aria-hidden />
              <div className="grid gap-3 md:grid-cols-4">
                {processStages.map((stage, index) => (
                  <article key={stage.id} className="relative">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="inline-flex h-11 w-11 items-center justify-center border border-foreground bg-accent text-brandForeground">
                        <span className="text-xs font-black tracking-[0.12em]">{stage.id}</span>
                      </div>
                      <IconBadge name={icons[index]} className="h-11 w-11" />
                    </div>

                    <div className="muga-panel p-4">
                      <h3 className="text-sm font-black uppercase leading-tight text-foreground">{stage.title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-foreground/74">{stage.objective}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
