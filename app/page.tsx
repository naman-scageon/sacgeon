import { BaseLayout } from "@/components/layout/base-layout";
import {
  HeroSection,
  ServicesSection,
  CasesSection,
  TechStackSection,
  TestimonialSection,
  ArticlesSection,
  ClosingSection,
  AboutSection,
} from "@/components/sections";
import { Spacer } from "@/components/ui/spacer";

export default function Home() {
  return (
    <BaseLayout>
      <HeroSection />
    <Spacer height={30} />
      <AboutSection />
      {/* <Spacer height={250} /> */}
      {/* <PartnersSection /> */}
      <ServicesSection />
      <CasesSection />
      <TechStackSection />
      {/* <TestimonialSection /> */}
      <ArticlesSection />
      <ClosingSection />
    </BaseLayout>
  );
}
