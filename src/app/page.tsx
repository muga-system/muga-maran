import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { WhatsAppFab } from "@/components/layout/whatsapp-fab";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { CtaSection } from "@/components/sections/cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { WorkProcessSection } from "@/components/sections/work-process-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-surface text-foreground">
      <SiteHeader />

      <main className="relative">
        <HeroSection />
        <WorkProcessSection />
        <BenefitsSection />
        <CtaSection />
      </main>

      <WhatsAppFab />
      <SiteFooter />
    </div>
  );
}
