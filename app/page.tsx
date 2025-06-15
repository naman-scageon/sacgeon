import { BaseLayout } from "@/components/layout/base-layout";
import {
  HeroSection,
  ServicesSection,
  CasesSection,
  TechStackSection,
  ClosingSection,
  AboutSection,
  AiConceptDemo,
} from "@/components/sections";

export default function Home() {
  return (
    <BaseLayout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <AiConceptDemo />
      <TechStackSection />
      <CasesSection />
      <ClosingSection />
    </BaseLayout>
  );
}
