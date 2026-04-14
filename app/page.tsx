import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { ProcessSection } from "@/components/process-section";
import { ServicesGrid } from "@/components/services-grid";
import { TrustBar } from "@/components/trust-bar";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <>
      <HeroSection hero={siteConfig.hero} />
      <TrustBar trust={siteConfig.trust} />
      <ServicesGrid services={siteConfig.services} />
      <ProcessSection process={siteConfig.process} />
      <AboutSection about={siteConfig.about} />
      <ContactSection contact={siteConfig.contact} />
    </>
  );
}
