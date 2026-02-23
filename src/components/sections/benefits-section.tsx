import { Container } from "@/components/ui/container";
import { IconBadge } from "@/components/ui/icon-badge";
import { benefits } from "@/content/business-content";

export function BenefitsSection() {
  const icons = ["field", "cleanup", "maintenance"] as const;

  return (
    <section id="servicios" className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="muga-slide p-5 sm:p-7 lg:p-8">
          <div className="relative z-10">
            <div className="mb-8 lg:mb-10">
              <p className="signal-label">Servicio</p>
              <div className="mt-4 max-w-[52rem]">
                <h2 className="muga-scifi-title text-[2.65rem] leading-[0.94] text-foreground sm:text-[3.4rem] lg:text-[4.25rem]">
                  Qué resolvemos
                </h2>
              </div>
            </div>

            <div className="grid gap-4 sm:gap-5 xl:grid-cols-3">
              {benefits.map((benefit, index) => (
                <article key={benefit.title} className="muga-panel h-full p-4 sm:p-5 lg:p-6">
                  <div className="grid grid-cols-[3rem_1fr_auto] gap-x-4 gap-y-4">
                    <IconBadge name={icons[index]} className="h-12 w-12" />
                    <p className="max-w-[18ch] pt-1 text-xs font-semibold uppercase tracking-[0.1em] leading-[1.35] text-foreground/68">
                      {benefit.kicker}
                    </p>
                    <p className="pt-1 text-[10px] font-black uppercase tracking-[0.14em] text-foreground/55">
                      0{index + 1}
                    </p>

                    <div className="col-span-3">
                      <h3 className="text-lg font-black leading-[1.2] text-foreground sm:text-xl">
                        {benefit.title}
                      </h3>

                      <p className="mt-4 text-sm leading-[1.65] text-foreground/80">
                        {benefit.description}
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
