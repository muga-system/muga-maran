import { Container } from "@/components/ui/container";
import { Pill } from "@/components/ui/pill";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section className="py-10 sm:py-14">
      <Container>
        <div className="block-panel grid lg:grid-cols-[1.35fr_0.65fr]">
          <div className="border-b-2 border-foreground p-6 sm:p-9 lg:border-b-0 lg:border-r-2">
            <Pill>Desmalezado y limpieza</Pill>

            <h1 className="mt-5 text-5xl font-black uppercase leading-[0.9] text-foreground sm:text-6xl md:text-7xl">
              Limpieza
              <br />
              de terrenos
              <br />
              en serio.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/82 sm:text-lg">
              Trabajo operativo para lotes urbanos y rurales en {siteConfig.serviceArea}. Cortamos, limpiamos y
              retiramos residuos en una sola intervención.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={siteConfig.phoneHref} className="btn-primary text-base">
                {siteConfig.ctaPrimary}
              </a>
              <a href="#proceso" className="btn-secondary text-base">
                Ver proceso
              </a>
            </div>
          </div>

          <div className="grid">
            <article className="border-b-2 border-foreground p-5 sm:p-6">
              <p className="text-xs font-black uppercase tracking-[0.09em] text-foreground/74">Zona</p>
              <p className="mt-2 text-3xl font-black uppercase leading-none text-foreground">{siteConfig.serviceArea}</p>
            </article>
            <article className="border-b-2 border-foreground p-5 sm:p-6">
              <p className="text-xs font-black uppercase tracking-[0.09em] text-foreground/74">Contacto</p>
              <a href={siteConfig.phoneHref} className="mt-2 inline-block text-xl font-black leading-tight text-foreground">
                {siteConfig.phoneDisplay}
              </a>
            </article>
            <article className="p-5 sm:p-6">
              <p className="text-xs font-black uppercase tracking-[0.09em] text-foreground/74">Servicio</p>
              <p className="mt-2 text-base font-black uppercase leading-tight text-foreground">
                Desmalezado + limpieza + retiro final
              </p>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}
