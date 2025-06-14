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

export default function Home() {
  return (
    <BaseLayout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CasesSection />
      <TestimonialSection />
      <TechStackSection />
      <ArticlesSection />
      <ClosingSection />
    </BaseLayout>
  );
}
