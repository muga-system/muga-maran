import { Container } from "@/components/ui/container";
import { Pill } from "@/components/ui/pill";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section id="inicio" className="py-8 sm:py-10 lg:py-12">
      <Container>
        <div className="muga-slide px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
          <div className="relative z-10">
            <div className="flex items-center gap-2">
              <Pill>Desmalezado y limpieza</Pill>
            </div>

            <div className="relative mt-4 border border-foreground/60 px-4 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
              <div className="relative max-w-4xl">
                <h1 className="muga-scifi-title text-[2.25rem] text-foreground sm:text-6xl lg:text-7xl">
                  Limpiamos
                  <br />
                  terrenos
                  <br />
                  para avanzar
                </h1>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/78 sm:text-base">
                  Trabajo directo, ordenado y completo: corte, limpieza y retiro final en una sola coordinación.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a href={siteConfig.phoneHref} className="btn-primary text-base">
                    {siteConfig.ctaPrimary}
                  </a>
                  <a href="#proceso" className="btn-secondary text-base">
                    Ver proceso
                  </a>
                </div>
              </div>
            </div>

            <div className="relative z-20 mt-4 lg:-mt-16 lg:ml-auto lg:w-[min(100%,30rem)]">
              <div className="muga-float-card p-4 sm:p-5">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-foreground/65">Contacto rápido</p>
                <a href={siteConfig.phoneHref} className="mt-2 inline-block text-2xl font-black leading-none text-foreground sm:text-3xl">
                  {siteConfig.phoneDisplay}
                </a>
                <p className="mt-3 text-sm leading-relaxed text-foreground/74">
                  Coordinamos rápido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
