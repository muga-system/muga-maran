import { Container } from "@/components/ui/container";
import { IconBadge } from "@/components/ui/icon-badge";
import { processStages } from "@/content/business-content";

export function WorkProcessSection() {
  const icons = ["plan", "shield", "field", "time"] as const;

  return (
    <section id="proceso" className="py-12 sm:py-16">
      <Container>
        <div className="mb-6">
          <p className="signal-label">Proceso operativo</p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.9] text-foreground sm:text-5xl">
            Método en
            <br />
            cuatro pasos.
          </h2>
        </div>

        <div className="border-2 border-foreground bg-card">
          {processStages.map((stage, index) => (
            <article key={stage.id} className="grid gap-4 border-b-2 border-foreground p-5 last:border-b-0 md:grid-cols-[120px_auto_1fr] md:items-start">
              <p className="text-3xl font-black text-foreground">{stage.id}</p>
              <IconBadge name={icons[index]} className="h-12 w-12" />

              <div>
                <h3 className="text-2xl font-black uppercase leading-tight text-foreground">{stage.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/82">{stage.objective}</p>
                <p className="mt-3 text-xs font-black uppercase tracking-[0.08em] text-brand">{stage.actions[0]}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
