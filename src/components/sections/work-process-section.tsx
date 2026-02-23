import { Container } from "@/components/ui/container";
import { IconBadge } from "@/components/ui/icon-badge";
import { processStages } from "@/content/business-content";

export function WorkProcessSection() {
  const icons = ["plan", "shield", "field", "time"] as const;

  return (
    <section id="proceso" className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="muga-slide p-5 sm:p-7 lg:p-8">
          <div className="relative z-10">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="signal-label">Proceso</p>
                <h2 className="muga-scifi-title mt-4 text-4xl text-foreground sm:text-[3.35rem]">Cómo trabajamos</h2>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {processStages.map((stage, index) => (
                <article key={stage.id} className="muga-panel p-4 sm:p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex shrink-0 flex-col items-center gap-2 pt-0.5">
                      <div className="inline-flex h-11 w-11 items-center justify-center border border-foreground bg-accent text-brandForeground">
                        <span className="text-xs font-black tracking-[0.12em]">{stage.id}</span>
                      </div>
                      <IconBadge name={icons[index]} className="h-11 w-11" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-black uppercase leading-tight text-foreground sm:text-lg">
                        {stage.title}
                      </h3>
                      <p className="mt-3 max-w-[34rem] text-sm leading-6 text-foreground/80">{stage.objective}</p>
                      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.09em] text-foreground/66">
                        {stage.actions[0]}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
