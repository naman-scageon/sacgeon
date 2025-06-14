import { BaseLayout } from "@/components/layout/base-layout";
import { servicesNavigationData } from "@/constants/site-data";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  RefreshCw,
  Cloud,
  Link as LinkIcon,
  Grid3X3,
  CheckCircle,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Application Services | Scageon - Modern Development & System Modernization",
  description:
    "Modernize legacy systems and build cloud-native applications with robust APIs, microservices architecture, and seamless third-party integrations.",
};

const iconMap = {
  "refresh-cw": RefreshCw,
  cloud: Cloud,
  link: LinkIcon,
  "grid-3x3": Grid3X3,
};

const appService = servicesNavigationData.find(
  (service) => service.id === "application-services"
)!;

const benefits = [
  "70% performance improvement through modernization",
  "99.9% uptime with scalable cloud architectures",
  "Reduced technical debt and maintenance costs",
  "Enhanced security and compliance capabilities",
  "Seamless integration with modern ecosystems",
  "Future-ready scalable infrastructure",
];

const modernizationApproaches = [
  {
    title: "Lift & Shift",
    description:
      "Quick migration to cloud with minimal changes for immediate benefits.",
    timeline: "2-4 weeks",
    complexity: "Low",
    benefits: ["Fast deployment", "Cost savings", "Improved reliability"],
  },
  {
    title: "Re-platforming",
    description:
      "Optimize applications for cloud platforms with targeted improvements.",
    timeline: "1-3 months",
    complexity: "Medium",
    benefits: ["Better performance", "Cloud-native features", "Reduced costs"],
  },
  {
    title: "Re-architecting",
    description:
      "Complete redesign using microservices and cloud-native patterns.",
    timeline: "3-8 months",
    complexity: "High",
    benefits: ["Maximum scalability", "Modern architecture", "Future-proof"],
  },
];

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Go",
  "Java",
  "Docker",
  "Kubernetes",
  "AWS",
  "Azure",
  "GCP",
  "Terraform",
];

const developmentProcess = [
  {
    phase: "Discovery",
    description: "Comprehensive analysis of existing systems and requirements",
    deliverables: [
      "System Assessment",
      "Architecture Review",
      "Migration Strategy",
    ],
  },
  {
    phase: "Design",
    description:
      "Create detailed technical specifications and architecture plans",
    deliverables: [
      "Technical Design",
      "API Specifications",
      "Infrastructure Plan",
    ],
  },
  {
    phase: "Development",
    description:
      "Iterative development with continuous integration and testing",
    deliverables: ["MVP Release", "Feature Increments", "Quality Assurance"],
  },
  {
    phase: "Deployment",
    description: "Seamless deployment with zero-downtime migration strategies",
    deliverables: [
      "Production Deployment",
      "Monitoring Setup",
      "Documentation",
    ],
  },
  {
    phase: "Support",
    description: "Ongoing maintenance, monitoring, and optimization",
    deliverables: [
      "24/7 Monitoring",
      "Performance Optimization",
      "Feature Updates",
    ],
  },
];

export default function ApplicationServicesPage() {
  return (
    <BaseLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.15),transparent_50%)]" />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-600 flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <span className="px-2 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded text-sm font-medium">
                  Coming Soon
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Application{" "}
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Transform your legacy systems into modern, scalable
                applications. We specialize in cloud-native development, system
                modernization, and building robust APIs that power your digital
                transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  Start Modernization
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/50 border border-slate-600/50 hover:bg-slate-700/50 hover:border-slate-500/50 text-white font-medium transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-slate-900/40 border border-slate-700/50 flex items-center justify-center backdrop-blur-sm">
                <Code2 className="w-32 h-32 text-blue-400/40" />
              </div>
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/20 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Modern Application Development Benefits
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Our application services deliver measurable improvements in
              performance, scalability, and maintainability.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-slate-900/40 border border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-slate-300 font-medium text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Services */}
      <section id="services" className="py-20 bg-black">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Application Solutions
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              From legacy modernization to cloud-native development, we provide
              end-to-end application services.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {appService.subServices?.map((service) => {
              const Icon =
                iconMap[service.icon as keyof typeof iconMap] || Code2;
              return (
                <div
                  key={service.id}
                  className="group relative p-6 bg-slate-900/40 border border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 mb-4 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors text-sm"
                  >
                    Learn More
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modernization Approaches */}
      <section className="py-20 bg-black border-t border-slate-800">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Modernization Approaches
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Choose the right modernization strategy based on your timeline,
              complexity, and business requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {modernizationApproaches.map((approach, index) => (
              <div
                key={index}
                className="bg-slate-900/40 p-6 border border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  {approach.title}
                </h3>
                <p className="text-slate-400 mb-4 leading-relaxed text-sm">
                  {approach.description}
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">Timeline:</span>
                    <span className="text-sm font-medium text-slate-300">
                      {approach.timeline}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">Complexity:</span>
                    <span
                      className={`text-sm font-medium ${
                        approach.complexity === "Low"
                          ? "text-green-400"
                          : approach.complexity === "Medium"
                          ? "text-yellow-400"
                          : "text-red-400"
                      }`}
                    >
                      {approach.complexity}
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-white">
                    Key Benefits:
                  </h4>
                  {approach.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-blue-400" />
                      <span className="text-sm text-slate-400">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-black border-t border-slate-800">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              We follow a structured approach that ensures successful
              application development and modernization projects.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {developmentProcess.map((phase, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-600 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {phase.phase}
                  </h3>
                  <p className="text-slate-400 text-sm mb-3 leading-relaxed">
                    {phase.description}
                  </p>
                  <div className="space-y-1">
                    {phase.deliverables.map((deliverable, deliverableIndex) => (
                      <div
                        key={deliverableIndex}
                        className="text-xs text-slate-500"
                      >
                        • {deliverable}
                      </div>
                    ))}
                  </div>
                </div>
                {index < developmentProcess.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-emerald-600 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-black border-t border-slate-800">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Modern Technology Stack
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              We use cutting-edge technologies and frameworks to build scalable,
              maintainable applications.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-slate-900/40 border border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-300"
              >
                <span className="text-slate-300 font-medium text-center text-sm">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-emerald-700">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Modernize Your Applications?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
            Let&apos;s transform your legacy systems into modern, scalable
            applications that drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-100 text-blue-600 font-medium transition-all duration-300 hover:shadow-lg"
            >
              Start Your Modernization
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-medium transition-all duration-300"
            >
              Schedule Assessment
            </Link>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
