"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Database,
  Brain,
  Rocket,
  CheckCircle,
  Zap,
  BarChart3,
  Calendar,
  Play,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ServiceSolution {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: any;
  color: string;
  features: string[];
  outcomes: string[];
}

export function ServicesSection() {
  const [activeService, setActiveService] =
    useState<string>("data-intelligence");

  const serviceSolutions: ServiceSolution[] = [
    {
      id: "data-intelligence",
      title: "Data Intelligence Platform",
      tagline: "Transform data chaos into competitive advantage",
      description:
        "Unified data platforms with AI-driven insights that enable real-time decision-making and operational excellence.",
      icon: Database,
      color: "from-steel-500 to-steel-400",
      features: [
        "Real-time data integration and processing",
        "Self-service analytics and dashboards",
        "Automated data quality monitoring",
        "Enterprise security and compliance",
      ],
      outcomes: [
        "5x faster decision-making",
        "40-60% reduction in data operations cost",
        "99.8% data accuracy and consistency",
        "95%+ user adoption across teams",
      ],
    },
    {
      id: "ai-solutions",
      title: "AI Implementation Engine",
      tagline: "Deploy intelligent systems that deliver ROI from day one",
      description:
        "Custom AI solutions from conversational interfaces to predictive analytics, designed for enterprise scale and security.",
      icon: Brain,
      color: "from-warm-500 to-warm-400",
      features: [
        "Custom AI model development and training",
        "Conversational AI and chatbot platforms",
        "Predictive analytics and forecasting",
        "MLOps and model lifecycle management",
      ],
      outcomes: [
        "80%+ process automation",
        "95%+ accuracy in predictions",
        "10-15 hours saved per employee weekly",
        "$2-5M annual value creation",
      ],
    },
    {
      id: "platform-modernization",
      title: "Platform Modernization",
      tagline: "Accelerate innovation with cloud-native architecture",
      description:
        "Transform legacy systems into scalable, secure, and high-performance platforms that enable rapid business growth.",
      icon: Rocket,
      color: "from-steel-600 to-steel-500",
      features: [
        "Cloud migration and modernization",
        "Microservices and API architecture",
        "DevOps automation and CI/CD",
        "Performance optimization and scaling",
      ],
      outcomes: [
        "10x faster application performance",
        "3x faster feature delivery",
        "50-70% infrastructure cost reduction",
        "99.9%+ system uptime and reliability",
      ],
    },
  ];

  const activeServiceData =
    serviceSolutions.find((s) => s.id === activeService) || serviceSolutions[0];

  const handleGetQuote = () => {
    const closingSection = document.querySelector("[data-section='closing']");
    if (closingSection) {
      closingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWatchDemo = () => {
    const casesSection = document.querySelector("[data-section='cases']");
    if (casesSection) {
      casesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      data-section="services"
      className="py-20 bg-gradient-to-b from-charcoal-900 to-charcoal-950 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-charcoal-800/40 border border-warm-700/30 rounded-full text-sm text-steel-400 mb-6">
            <Rocket className="w-4 h-4" />
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-offwhite-100 mb-4">
            Solutions that drive
            <span className="gradient-text"> measurable results</span>
          </h2>
          <p className="text-lg text-offwhite-400 max-w-3xl mx-auto">
            We don&apos;t just build technology—we create transformation
            pathways that turn your biggest challenges into competitive
            advantages.
          </p>
        </motion.div>

        {/* Service Navigation */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {serviceSolutions.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeService === service.id;

            return (
              <motion.button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`text-left p-6 rounded-xl border transition-all duration-300 ${
                  isActive
                    ? "bg-charcoal-800/50 border-steel-600/40 shadow-lg scale-[1.02]"
                    : "bg-charcoal-900/30 border-warm-700/30 hover:border-warm-600/40 hover:bg-charcoal-800/30"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: isActive ? 0 : -2 }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      isActive
                        ? `bg-gradient-to-r ${service.color}`
                        : "bg-charcoal-800/50"
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        isActive ? "text-offwhite-100" : "text-steel-400"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`font-semibold mb-2 ${
                        isActive ? "text-offwhite-100" : "text-offwhite-200"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`text-sm mb-3 ${
                        isActive ? "text-steel-300" : "text-offwhite-500"
                      }`}
                    >
                      {service.tagline}
                    </p>
                    <p className="text-sm text-offwhite-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${
                      isActive ? "rotate-90 text-steel-400" : "text-warm-500"
                    }`}
                  />
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Active Service Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-charcoal-800/30 backdrop-blur-xl rounded-2xl p-8 border border-warm-700/30"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Features */}
              <div>
                <h3 className="text-xl font-semibold text-offwhite-100 mb-6 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-steel-400" />
                  Key Capabilities
                </h3>
                <div className="space-y-4">
                  {activeServiceData.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-steel-400 flex-shrink-0 mt-0.5" />
                      <span className="text-offwhite-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Outcomes */}
              <div>
                <h3 className="text-xl font-semibold text-offwhite-100 mb-6 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-warm-400" />
                  Expected Outcomes
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {activeServiceData.outcomes.map((outcome, index) => (
                    <motion.div
                      key={index}
                      className="bg-charcoal-900/50 rounded-lg p-4 border border-warm-700/20"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="text-2xl font-bold text-offwhite-100 mb-1">
                        {outcome.split(" ")[0]}
                      </div>
                      <div className="text-sm text-offwhite-400">
                        {outcome.split(" ").slice(1).join(" ")}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA Section */}
        <motion.div
          className="bg-charcoal-900/60 backdrop-blur-xl rounded-2xl p-8 text-center mt-16 border border-warm-700/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-offwhite-100">
            Ready to Transform Your Business?
          </h3>
          <p className="text-offwhite-400 mb-8 max-w-2xl mx-auto">
            Every successful transformation starts with understanding your
            unique challenges. Let&apos;s discuss how our proven methodologies
            can deliver measurable results for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={handleGetQuote} className="btn-primary">
              <Calendar className="w-4 h-4 mr-2" />
              Get Started Today
            </Button>
            <Button onClick={handleWatchDemo} className="btn-secondary">
              <Play className="w-4 h-4 mr-2" />
              View Success Stories
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
