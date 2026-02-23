import { Container } from "@/components/ui/container";
import { Pill } from "@/components/ui/pill";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section id="inicio" className="py-12 sm:py-14 lg:py-16">
      <Container>
        <div className="muga-slide px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
          <div className="relative z-10">
            <div className="flex items-center gap-2">
              <Pill>Desmalezado y limpieza</Pill>
            </div>

            <div className="relative mt-5 border border-foreground/60 px-4 py-9 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
              <div className="relative max-w-[46rem]">
                <h1 className="muga-scifi-title text-[2.35rem] text-foreground sm:text-[4rem] lg:text-[5rem]">
                  Limpiamos
                  <br />
                  terrenos
                  <br />
                  para avanzar
                </h1>
                <p className="mt-5 max-w-[44rem] text-sm leading-7 text-foreground/82 sm:text-lg sm:leading-8">
                  Trabajo directo, ordenado y completo: corte, limpieza y retiro final en una sola coordinación.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a href={siteConfig.phoneHref} className="btn-primary w-full justify-center px-7 py-4 text-base sm:w-auto">
                    {siteConfig.ctaPrimary}
                  </a>
                  <a href="#proceso" className="btn-secondary w-full justify-center px-7 py-4 text-base sm:w-auto">
                    Ver proceso
                  </a>
                </div>
              </div>
            </div>

            <div className="relative z-20 mt-6 lg:-mt-14 lg:ml-auto lg:w-[min(100%,30rem)]">
              <div className="muga-float-card p-4 sm:p-5">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-foreground/65">Contacto rápido</p>
                <a href={siteConfig.phoneHref} className="mt-2 inline-block text-2xl font-black leading-none text-foreground sm:text-3xl">
                  {siteConfig.phoneDisplay}
                </a>
                <p className="mt-3 max-w-[24rem] text-sm leading-6 text-foreground/78">
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
