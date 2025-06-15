"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight,
  Activity,
  MessageSquare,
  Database,
  Zap,
  Users,
  Target,
  BarChart3,
  Shield,
  Globe,
} from "lucide-react";
import { Button } from "../ui/button";

interface CasesSectionProps {
  className?: string;
}

// Case studies from the PDF
const caseStudies = [
  {
    id: "healthcare-command-centre",
    title: "Healthcare Command Centre Platform",
    client: "Healthcare Services Major - Middle East",
    industry: "Healthcare",
    region: "Middle East",
    timeline: "12 months",
    category: "Data Intelligence & AI",
    icon: Activity,
    color: "from-blue-500 to-cyan-400",
    overview:
      "A cutting-edge mission critical decision support platform that helps in optimizing day to day operations for the chain of hospitals",
    challenge:
      "Hospital chain struggled with fragmented data across multiple systems, inefficient resource allocation, and suboptimal patient flow management, leading to reduced operational efficiency and care quality.",
    solution:
      "Implemented a comprehensive healthcare data platform with AI-driven decision management, real-time analytics, and intelligent forecasting capabilities to optimize hospital operations.",
    capabilities: [
      "Healthcare Data Platform integration",
      "AI-driven Decision Management Layer",
      "Self-Serve tool for customer on-boarding",
      "AI-driven Forecasting, Predictions and Recommendations",
    ],
    businessBenefits: [
      {
        metric: "Staff Productivity Gain",
        value: "20%",
        description: "Increased efficiency across all departments",
      },
      {
        metric: "Operational Improvements",
        value: "Multiple Areas",
        description:
          "Bed Capacity, Patient Flow, Discharge Planning, Unit Operations, Resource Management",
      },
      {
        metric: "Care Quality",
        value: "Significant Improvement",
        description: "Enhanced patient outcomes and satisfaction",
      },
    ],
    technologies: [
      "Apache Spark",
      "Apache Airflow",
      "Apache Ni-Fi",
      "Kafka",
      "MongoDB",
      "PostgreDB",
      "ReactJS",
      "Python",
      "Node.js",
      "LLaMa",
      "Langchain",
      "VectorDB",
      "Prometheus",
      "Grafana",
      "GCP",
    ],
    keyFeatures: [
      "Real-time hospital operations monitoring",
      "Predictive analytics for resource planning",
      "AI-powered patient flow optimization",
      "Automated decision support systems",
    ],
  },
  {
    id: "messaging-platform",
    title: "Messaging Platform for Digital Marketing",
    client: "Digital Advertising & Marketing Major - South-East Asia",
    industry: "Digital Marketing",
    region: "South-East Asia",
    timeline: "8 months",
    category: "Cloud Platform & Automation",
    icon: MessageSquare,
    color: "from-purple-500 to-pink-400",
    overview:
      "Design and Development of new age messaging platform for digital advertising and marketing campaigns",
    challenge:
      "Marketing company needed a scalable messaging platform to handle high-volume campaigns with real-time personalization, regulatory compliance, and advanced analytics for optimal campaign performance.",
    solution:
      "Built a modern, cloud-native messaging platform with automated workflows, AI integration, and comprehensive analytics to enable large-scale, personalized marketing campaigns.",
    capabilities: [
      "Automated Workflows with Chatbots and AI Integration",
      "Customer Management with Two-Way Communication",
      "Real-Time Analytics and Campaign Performance Tracking",
      "Security and Compliance with Data Protection",
      "Advanced Campaign Management and Targeting",
    ],
    businessBenefits: [
      {
        metric: "Platform Availability",
        value: "> 99.5%",
        description: "Enterprise-grade reliability achieved",
      },
      {
        metric: "Message Volume",
        value: "~70M/month",
        description: "Massive upscale in campaign volumes",
      },
      {
        metric: "Performance Improvement",
        value: "5 TPS to 800 TPS",
        description: "160x performance enhancement",
      },
      {
        metric: "Latency Reduction",
        value: "Minutes to <1 sec",
        description: "Real-time conversational experience",
      },
    ],
    technologies: [
      "Kafka",
      "RabbitMQ",
      "Postgres",
      "Python",
      "Node.js",
      "Golang",
      "Prometheus",
      "Grafana",
      "AWS",
      "ELK",
      "WhatsApp Business API",
    ],
    keyFeatures: [
      "High-throughput message processing",
      "Real-time campaign analytics",
      "AI-powered customer targeting",
      "Regulatory compliance automation",
    ],
  },
];

const industryMetrics = [
  {
    icon: Users,
    label: "Enterprises Served",
    value: "50+",
    description: "Across multiple industries",
  },
  {
    icon: Globe,
    label: "Global Reach",
    value: "15+ Countries",
    description: "Worldwide implementation",
  },
  {
    icon: TrendingUp,
    label: "Average ROI",
    value: "300%+",
    description: "Within 12 months",
  },
  {
    icon: Shield,
    label: "Success Rate",
    value: "98%",
    description: "Project delivery success",
  },
];

export function CasesSection({ className }: CasesSectionProps) {
  return (
    <section
      className={cn(
        "py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden",
        className
      )}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-100 to-cyan-100 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-full text-sm text-blue-700 mb-6">
            <Target className="w-4 h-4" />
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
            Transforming Businesses with
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Measurable Results
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Real projects, quantifiable outcomes. Discover how we&apos;ve helped
            industry leaders achieve breakthrough results through strategic data
            and AI implementations.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-12">
          {caseStudies.map((caseStudy, index) => {
            const Icon = caseStudy.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className="relative"
              >
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                    <div className="space-y-6">
                      {/* Header */}
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-r ${caseStudy.color} flex items-center justify-center`}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded-full">
                                {caseStudy.industry}
                              </span>
                              <span className="text-xs text-slate-500">•</span>
                              <span className="text-xs text-slate-500">
                                {caseStudy.region}
                              </span>
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900">
                              {caseStudy.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-slate-600 mb-4">
                          {caseStudy.overview}
                        </p>
                      </div>

                      {/* Challenge & Solution */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                          <h4 className="text-sm font-semibold text-red-700 mb-2 flex items-center gap-2">
                            <Target className="w-4 h-4" />
                            Challenge
                          </h4>
                          <p className="text-sm text-red-600 leading-relaxed">
                            {caseStudy.challenge}
                          </p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                          <h4 className="text-sm font-semibold text-green-700 mb-2 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4" />
                            Solution
                          </h4>
                          <p className="text-sm text-green-600 leading-relaxed">
                            {caseStudy.solution}
                          </p>
                        </div>
                      </div>

                      {/* Business Benefits */}
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-blue-600" />
                          Business Impact
                        </h4>
                        <div className="grid gap-3">
                          {caseStudy.businessBenefits.map((benefit, bIndex) => (
                            <div
                              key={bIndex}
                              className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200"
                            >
                              <div className="flex-shrink-0">
                                <div className="text-lg font-bold text-blue-700">
                                  {benefit.value}
                                </div>
                                <div className="text-xs text-blue-600">
                                  {benefit.metric}
                                </div>
                              </div>
                              <div className="text-sm text-blue-600">
                                {benefit.description}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-4 pt-4">
                        <Button className="bg-slate-900 text-white hover:bg-slate-800">
                          View Full Case Study
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Clock className="w-4 h-4" />
                          <span>{caseStudy.timeline} implementation</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Technical Details */}
                  <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                    <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                      {/* Capabilities */}
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                          <Zap className="w-5 h-5 text-purple-600" />
                          Key Capabilities Delivered
                        </h4>
                        <div className="space-y-3">
                          {caseStudy.capabilities.map((capability, cIndex) => (
                            <div
                              key={cIndex}
                              className="flex items-start gap-3"
                            >
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-slate-700">
                                {capability}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                          <Database className="w-5 h-5 text-blue-600" />
                          Technology Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {caseStudy.technologies.map((tech, tIndex) => (
                            <span
                              key={tIndex}
                              className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full border border-slate-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                          <BarChart3 className="w-5 h-5 text-green-600" />
                          Key Features
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {caseStudy.keyFeatures.map((feature, fIndex) => (
                            <div
                              key={fIndex}
                              className="flex items-center gap-2 text-sm text-slate-600"
                            >
                              <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
              Join industry leaders who have transformed their operations with
              our proven methodologies. Let&apos;s discuss how we can deliver
              similar breakthrough results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 text-lg font-medium">
                Start Your Transformation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-3 text-lg"
              >
                Download Case Studies
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 mt-8 pt-8 border-t border-slate-700 text-slate-400">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Enterprise Security Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>98% Project Success Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>50+ Enterprise Clients</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
