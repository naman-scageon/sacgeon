import { BaseLayout } from "@/components/layout/base-layout";
import {
  HeroSection,
  ServicesSection,
  CasesSection,
  TechStackSection,
  ArticlesSection,
  ClosingSection,
  AboutSection,
  AiConceptDemo,
} from "@/components/sections";

export default function Home() {
  return (
    <BaseLayout>
      <HeroSection />
      <AboutSection />
      <AiConceptDemo />
      <ServicesSection />
      <CasesSection />
      <TechStackSection />
      <ArticlesSection />
      <ClosingSection />
    </BaseLayout>
  );
}
