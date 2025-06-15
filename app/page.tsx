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
import { TestimonialSection } from "@/components/sections/testimonial-section";
import { AiArchitectureSection } from "@/components/sections/ai-architecture-section";

export default function Home() {
  return (
    <BaseLayout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      {/* <AiArchitectureSection /> */}
      <TechStackSection />
      <AiConceptDemo />
      <CasesSection />
      {/* <TestimonialSection /> */}
      {/* <ArticlesSection /> */}
      <ClosingSection />
    </BaseLayout>
  );
}
