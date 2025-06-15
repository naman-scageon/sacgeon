import { BaseLayout } from "@/components/layout/base-layout";
import { servicesNavigationData } from "@/constants/site-data";
import Link from "next/link";
import { ArrowRight, Code2, RefreshCw, Cloud, Link as LinkIcon, Grid3X3, CheckCircle, Clock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Application Services | Scageon - Modern Development & System Modernization",
  description: "Modernize legacy systems and build cloud-native applications with robust APIs, microservices architecture, and seamless third-party integrations.",
};

const iconMap = {
  "refresh-cw": RefreshCw,
  cloud: Cloud,
  link: LinkIcon,
  "grid-3x3": Grid3X3,
};

const appService = servicesNavigationData.find(service => service.id === "application-services")!;

const benefits = [
  "70% performance improvement through modernization",
  "99.9% uptime with scalable cloud architectures",
  "Reduced technical debt and maintenance costs",
  "Enhanced security and compliance capabilities",
  "Seamless integration with modern ecosystems",
  "Future-ready scalable infrastructure"
];

const modernizationApproaches = [
  {
    title: "Lift & Shift",
    description: "Quick migration to cloud with minimal changes for immediate benefits.",
    timeline: "2-4 weeks",
    complexity: "Low",
    benefits: ["Fast deployment", "Cost savings", "Improved reliability"]
  },
  {
    title: "Re-platforming",
    description: "Optimize applications for cloud platforms with targeted improvements.",
    timeline: "1-3 months",
    complexity: "Medium",
    benefits: ["Better performance", "Cloud-native features", "Reduced costs"]
  },
  {
    title: "Re-architecting",
    description: "Complete redesign using microservices and cloud-native patterns.",
    timeline: "3-8 months",
    complexity: "High",
    benefits: ["Maximum scalability", "Modern architecture", "Future-proof"]
  }
];

const technologies = [
  "React", "Next.js", "Node.js", "Python", "Go", "Java",
  "Docker", "Kubernetes", "AWS", "Azure", "GCP", "Terraform"
];

const developmentProcess = [
  {
    phase: "Discovery",
    description: "Comprehensive analysis of existing systems and requirements",
    deliverables: ["System Assessment", "Architecture Review", "Migration Strategy"]
  },
  {
    phase: "Design",
    description: "Create detailed technical specifications and architecture plans",
    deliverables: ["Technical Design", "API Specifications", "Infrastructure Plan"]
  },
  {
    phase: "Development",
    description: "Iterative development with continuous integration and testing",
    deliverables: ["MVP Release", "Feature Increments", "Quality Assurance"]
  },
  {
    phase: "Deployment",
    description: "Seamless deployment with zero-downtime migration strategies",
    deliverables: ["Production Deployment", "Monitoring Setup", "Documentation"]
  },
  {
    phase: "Support",
    description: "Ongoing maintenance, monitoring, and optimization",
    deliverables: ["24/7 Monitoring", "Performance Optimization", "Feature Updates"]
  }
];

export default function ApplicationServicesPage() {
  return (
    <BaseLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.3),transparent_50%)]" />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-600 flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <span className="px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full text-sm font-medium">
                  Coming Soon
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Application <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Transform your legacy systems into modern, scalable applications. We specialize in cloud-native development, 
                system modernization, and building robust APIs that power your digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  Start Modernization
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-medium rounded-xl transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-3xl border border-blue-400/30 flex items-center justify-center backdrop-blur-sm">
                <Code2 className="w-48 h-48 text-blue-400/40" />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-emerald-400/30 to-blue-400/30 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-blue-400/30 to-emerald-400/30 rounded-full blur-2xl animate-pulse delay-1000" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Modern Application Development Benefits
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our application services deliver measurable improvements in performance, scalability, and maintainability.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-slate-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Services */}
      <section id="services" className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Application Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From legacy modernization to cloud-native development, we provide end-to-end application services.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {appService.subServices?.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap] || Code2;
              return (
                <div key={service.id} className="group relative p-8 bg-slate-50 hover:bg-white border border-slate-200 hover:border-blue-300 rounded-2xl transition-all duration-300 hover:shadow-xl">
                  <div className="w-12 h-12 mb-6 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 group-hover:text-slate-700 transition-colors mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modernization Approaches */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Modernization Approaches
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the right modernization strategy based on your timeline, complexity, and business requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {modernizationApproaches.map((approach, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{approach.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{approach.description}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">Timeline:</span>
                    <span className="text-sm font-medium text-slate-700">{approach.timeline}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">Complexity:</span>
                    <span className={`text-sm font-medium ${
                      approach.complexity === 'Low' ? 'text-green-600' :
                      approach.complexity === 'Medium' ? 'text-yellow-600' : 'text-red-600'
                    }`}>{approach.complexity}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-slate-900">Key Benefits:</h4>
                  {approach.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span className="text-sm text-slate-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 bg-slate-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We follow a structured approach that ensures successful application development and modernization projects.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-8">
            {developmentProcess.map((phase, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-emerald-600 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{phase.phase}</h3>
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">{phase.description}</p>
                  <div className="space-y-1">
                    {phase.deliverables.map((deliverable, deliverableIndex) => (
                      <div key={deliverableIndex} className="text-xs text-slate-400">
                        • {deliverable}
                      </div>
                    ))}
                  </div>
                </div>
                {index < developmentProcess.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-emerald-600 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Modern Technology Stack
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We use cutting-edge technologies and frameworks to build scalable, maintainable applications.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-xl hover:bg-white hover:border-blue-300 hover:shadow-md transition-all duration-300">
                <span className="text-slate-700 font-medium text-center">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-emerald-700">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Modernize Your Applications?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Let's transform your legacy systems into modern, scalable applications that drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 font-medium rounded-xl transition-all duration-300 hover:shadow-lg"
            >
              Start Your Modernization
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-medium rounded-xl transition-all duration-300"
            >
              Schedule Assessment
            </Link>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}