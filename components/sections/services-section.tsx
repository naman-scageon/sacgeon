"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Database,
  Brain,
  TrendingUp,
  CheckCircle,
  Users,
  Target,
  Rocket,
  Shield,
  Layers,
  Star,
  Play,
  Calendar,
  ChevronRight,
  Calculator,
} from "lucide-react";
import { useState } from "react";
import { servicesSection } from "@/constants/site-data";

// Journey Stage Component
const JourneyStage = ({
  stage,
  index,
  isActive,
}: {
  stage: any;
  index: number;
  isActive: boolean;
}) => {
  return (
    <motion.div
      className={`relative p-4 rounded-xl transition-all duration-300 ${
        isActive
          ? "bg-blue-50 border border-blue-200"
          : "bg-slate-50 border border-slate-200"
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex items-center gap-3 mb-2">
        <div
          className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-semibold ${
            isActive ? "bg-blue-500 text-white" : "bg-slate-200 text-slate-600"
          }`}
        >
          {index + 1}
        </div>
        <h4 className="font-semibold text-slate-900">{stage.title}</h4>
      </div>
      <p className="text-sm text-slate-600 mb-2">{stage.description}</p>
      <div className="text-xs text-slate-500">Duration: {stage.duration}</div>
    </motion.div>
  );
};

// Success Metrics Component
const SuccessMetrics = ({
  metrics,
  isVisible,
}: {
  metrics: any[];
  isVisible: boolean;
}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {metrics.map((metric, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            scale: isVisible ? 1 : 0.9,
          }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div
              className={`w-6 h-6 rounded-full bg-gradient-to-r ${metric.color} flex items-center justify-center`}
            >
              <TrendingUp className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm font-medium text-slate-700">
              {metric.label}
            </span>
          </div>
          <div className="text-2xl font-bold text-slate-900">
            {metric.value}
          </div>
          <div className="text-xs text-slate-500">{metric.context}</div>
        </motion.div>
      ))}
    </div>
  );
};

interface ServiceSolution {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: any;
  color: string;
  problemStatement: string;
  solutionApproach: string;
  implementationJourney: Array<{
    title: string;
    description: string;
    duration: string;
  }>;
  businessImpact: Array<{
    label: string;
    value: string;
    context: string;
    color: string;
  }>;
  serviceOfferings: Array<{
    name: string;
    description: string;
    features: string[];
  }>;
  successStories: Array<{
    industry: string;
    challenge: string;
    solution: string;
    result: string;
  }>;
  investmentRange: {
    starting: string;
    typical: string;
    enterprise: string;
  };
}

export function ServicesSection() {
  const [activeService, setActiveService] =
    useState<string>("data-intelligence");
  const [viewMode, setViewMode] = useState<"overview" | "journey" | "impact">(
    "overview"
  );
  const { headline, highlightedHeadline, tagline } = servicesSection;

  const serviceSolutions: ServiceSolution[] = [
    {
      id: "data-intelligence",
      title: "Data Intelligence Transformation",
      tagline: "Turn data chaos into competitive advantage",
      description:
        "Transform your organization's relationship with data through intelligent automation, unified analytics, and real-time insights that drive measurable business outcomes.",
      icon: Database,
      color: "from-blue-500 to-cyan-400",
      problemStatement:
        "Most enterprises struggle with fragmented data systems, inconsistent reporting, and decision-making based on outdated information. This leads to missed opportunities, inefficient operations, and competitive disadvantage.",
      solutionApproach:
        "We implement a holistic data intelligence platform that unifies your data sources, automates insights generation, and empowers every team member to make data-driven decisions with confidence.",
      implementationJourney: [
        {
          title: "Data Discovery & Assessment",
          description:
            "Comprehensive audit of existing data landscape and identification of opportunities",
          duration: "2-3 weeks",
        },
        {
          title: "Architecture Design",
          description:
            "Custom data platform design aligned with business objectives and technical requirements",
          duration: "1-2 weeks",
        },
        {
          title: "Foundation Build",
          description:
            "Implementation of core data infrastructure, pipelines, and governance frameworks",
          duration: "6-8 weeks",
        },
        {
          title: "Intelligence Layer",
          description:
            "Development of analytics, reporting, and automated insight generation capabilities",
          duration: "4-6 weeks",
        },
        {
          title: "Optimization & Scale",
          description:
            "Performance tuning, user training, and expansion of capabilities",
          duration: "Ongoing",
        },
      ],
      businessImpact: [
        {
          label: "Decision Speed",
          value: "5x faster",
          context: "From data to insight",
          color: "from-blue-500 to-cyan-400",
        },
        {
          label: "Cost Reduction",
          value: "40-60%",
          context: "In data operations",
          color: "from-green-500 to-emerald-400",
        },
        {
          label: "Data Quality",
          value: "99.8%",
          context: "Accuracy & consistency",
          color: "from-purple-500 to-pink-400",
        },
        {
          label: "User Adoption",
          value: "95%+",
          context: "Cross-team engagement",
          color: "from-orange-500 to-red-400",
        },
      ],
      serviceOfferings: [
        {
          name: "Data Platform Modernization",
          description:
            "Cloud-native data infrastructure built for scale and performance",
          features: [
            "Multi-cloud architecture",
            "Real-time processing",
            "Auto-scaling",
            "Disaster recovery",
          ],
        },
        {
          name: "Business Intelligence Suite",
          description:
            "Self-service analytics and interactive dashboards for all stakeholders",
          features: [
            "Custom dashboards",
            "Mobile access",
            "Automated reporting",
            "Predictive insights",
          ],
        },
        {
          name: "Data Governance Framework",
          description:
            "Comprehensive data quality, security, and compliance management",
          features: [
            "Data cataloging",
            "Quality monitoring",
            "Access controls",
            "Audit trails",
          ],
        },
      ],
      successStories: [
        {
          industry: "Healthcare",
          challenge: "Patient data scattered across 15+ systems",
          solution: "Unified patient data platform with real-time analytics",
          result: "30% improvement in patient outcomes, 50% faster diagnoses",
        },
        {
          industry: "Manufacturing",
          challenge: "Production inefficiencies and quality issues",
          solution: "IoT-enabled data platform with predictive analytics",
          result:
            "25% increase in production efficiency, 60% reduction in defects",
        },
      ],
      investmentRange: {
        starting: "$50K",
        typical: "$150K-500K",
        enterprise: "$1M+",
      },
    },
    {
      id: "ai-innovation",
      title: "AI Innovation Engine",
      tagline: "Build intelligent systems that learn and adapt",
      description:
        "Deploy production-ready AI solutions that solve real business problems, from customer service automation to predictive maintenance, with measurable ROI from day one.",
      icon: Brain,
      color: "from-purple-500 to-pink-400",
      problemStatement:
        "Organizations want to leverage AI but struggle with where to start, how to ensure ROI, and how to integrate AI solutions with existing business processes effectively.",
      solutionApproach:
        "We identify high-impact AI opportunities, build custom solutions tailored to your specific needs, and ensure seamless integration with your existing workflows and systems.",
      implementationJourney: [
        {
          title: "AI Opportunity Assessment",
          description:
            "Identify and prioritize AI use cases with highest business impact potential",
          duration: "2 weeks",
        },
        {
          title: "Proof of Concept",
          description:
            "Rapid prototype development to validate technical feasibility and business value",
          duration: "3-4 weeks",
        },
        {
          title: "Model Development",
          description:
            "Build and train production-ready AI models with your specific data",
          duration: "6-10 weeks",
        },
        {
          title: "Integration & Deployment",
          description:
            "Seamless integration with existing systems and production deployment",
          duration: "4-6 weeks",
        },
        {
          title: "Continuous Learning",
          description:
            "Model monitoring, performance optimization, and capability expansion",
          duration: "Ongoing",
        },
      ],
      businessImpact: [
        {
          label: "Process Automation",
          value: "80%+",
          context: "Manual tasks eliminated",
          color: "from-purple-500 to-pink-400",
        },
        {
          label: "Accuracy Improvement",
          value: "95%+",
          context: "In predictions & decisions",
          color: "from-blue-500 to-purple-500",
        },
        {
          label: "Time Savings",
          value: "10-15 hours",
          context: "Per employee per week",
          color: "from-green-500 to-blue-500",
        },
        {
          label: "Revenue Impact",
          value: "$2-5M",
          context: "Annual value creation",
          color: "from-orange-500 to-pink-500",
        },
      ],
      serviceOfferings: [
        {
          name: "Intelligent Automation",
          description:
            "AI-powered workflow automation and decision support systems",
          features: [
            "Process mining",
            "Workflow optimization",
            "Decision automation",
            "Exception handling",
          ],
        },
        {
          name: "Conversational AI",
          description:
            "Advanced chatbots and voice assistants for customer and employee support",
          features: [
            "Natural language processing",
            "Multi-channel deployment",
            "Human handoff",
            "Continuous learning",
          ],
        },
        {
          name: "Predictive Analytics",
          description:
            "Machine learning models for forecasting and risk assessment",
          features: [
            "Demand forecasting",
            "Risk scoring",
            "Anomaly detection",
            "Optimization recommendations",
          ],
        },
      ],
      successStories: [
        {
          industry: "Financial Services",
          challenge: "Manual loan processing taking 2-3 weeks",
          solution: "AI-powered risk assessment and document processing",
          result:
            "Reduced processing time to 2 hours, 40% increase in approvals",
        },
        {
          industry: "Retail",
          challenge: "Inventory management and demand forecasting",
          solution: "ML-based demand prediction and inventory optimization",
          result:
            "30% reduction in stockouts, 25% decrease in excess inventory",
        },
      ],
      investmentRange: {
        starting: "$75K",
        typical: "$200K-750K",
        enterprise: "$1.5M+",
      },
    },
    {
      id: "digital-acceleration",
      title: "Digital Acceleration Platform",
      tagline: "Accelerate innovation with modern technology",
      description:
        "Transform legacy systems into agile, cloud-native platforms that enable rapid innovation, seamless scalability, and exceptional user experiences across all touchpoints.",
      icon: Rocket,
      color: "from-green-500 to-emerald-400",
      problemStatement:
        "Legacy systems and outdated technology stacks are holding back innovation, increasing costs, and creating poor user experiences that impact customer satisfaction and employee productivity.",
      solutionApproach:
        "We modernize your technology foundation with cloud-native architectures, API-first designs, and modern development practices that enable rapid innovation and seamless scaling.",
      implementationJourney: [
        {
          title: "Technology Assessment",
          description:
            "Comprehensive evaluation of current systems and modernization roadmap creation",
          duration: "2-3 weeks",
        },
        {
          title: "Architecture Planning",
          description:
            "Design of modern, scalable architecture aligned with business goals",
          duration: "2-3 weeks",
        },
        {
          title: "Foundation Migration",
          description:
            "Phased migration of core systems to modern cloud-native infrastructure",
          duration: "8-12 weeks",
        },
        {
          title: "Application Development",
          description:
            "Build new applications and modernize existing ones with latest technologies",
          duration: "6-10 weeks",
        },
        {
          title: "Performance Optimization",
          description:
            "Continuous optimization, monitoring, and capability enhancement",
          duration: "Ongoing",
        },
      ],
      businessImpact: [
        {
          label: "Performance Boost",
          value: "10x faster",
          context: "Application response times",
          color: "from-green-500 to-emerald-400",
        },
        {
          label: "Development Speed",
          value: "3x faster",
          context: "Feature delivery",
          color: "from-blue-500 to-green-500",
        },
        {
          label: "Cost Optimization",
          value: "50-70%",
          context: "Infrastructure costs",
          color: "from-purple-500 to-green-500",
        },
        {
          label: "System Uptime",
          value: "99.9%+",
          context: "Service availability",
          color: "from-orange-500 to-green-500",
        },
      ],
      serviceOfferings: [
        {
          name: "Cloud Migration & Modernization",
          description:
            "Seamless transition to cloud-native architecture with zero downtime",
          features: [
            "Multi-cloud strategy",
            "Containerization",
            "Microservices",
            "DevOps automation",
          ],
        },
        {
          name: "API & Integration Platform",
          description:
            "Robust API ecosystem for seamless system connectivity and data flow",
          features: [
            "API design",
            "Integration middleware",
            "Real-time sync",
            "Security & monitoring",
          ],
        },
        {
          name: "User Experience Transformation",
          description:
            "Modern, responsive interfaces that delight users and drive engagement",
          features: [
            "UI/UX design",
            "Mobile-first",
            "Progressive web apps",
            "Accessibility compliance",
          ],
        },
      ],
      successStories: [
        {
          industry: "Insurance",
          challenge: "Legacy policy management system causing delays",
          solution: "Modern cloud-native platform with automated workflows",
          result:
            "90% faster policy processing, 50% reduction in operational costs",
        },
        {
          industry: "Education",
          challenge: "Outdated learning management system",
          solution: "Modern learning platform with AI-powered personalization",
          result:
            "85% increase in student engagement, 40% improvement in outcomes",
        },
      ],
      investmentRange: {
        starting: "$100K",
        typical: "$300K-1M",
        enterprise: "$2M+",
      },
    },
  ];

  const activeServiceData =
    serviceSolutions.find((s) => s.id === activeService) || serviceSolutions[0];

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
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
            <Rocket className="w-4 h-4" />
            Service Solutions
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
            Transformative Solutions for
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Modern Enterprises
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We don&apos;t just provide services—we architect complete
            transformation journeys that turn your biggest challenges into
            competitive advantages.
          </p>
        </motion.div>

        {/* Service Navigation */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Service Tabs */}
          <div className="lg:w-1/3 space-y-3">
            {serviceSolutions.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeService === service.id;

              return (
                <motion.button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`w-full text-left p-6 rounded-xl border transition-all duration-300 ${
                    isActive
                      ? "bg-white shadow-lg border-blue-200 scale-105"
                      : "bg-white/50 border-slate-200 hover:border-slate-300 hover:shadow-md"
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        isActive
                          ? `bg-gradient-to-r ${service.color}`
                          : "bg-slate-100"
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          isActive ? "text-white" : "text-slate-600"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`font-semibold mb-1 ${
                          isActive ? "text-slate-900" : "text-slate-700"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`text-sm ${
                          isActive ? "text-blue-600" : "text-slate-500"
                        }`}
                      >
                        {service.tagline}
                      </p>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="mt-3 pt-3 border-t border-slate-200"
                        >
                          <p className="text-sm text-slate-600">
                            {service.description}
                          </p>
                        </motion.div>
                      )}
                    </div>
                    <ChevronRight
                      className={`w-5 h-5 transition-transform ${
                        isActive ? "rotate-90 text-blue-600" : "text-slate-400"
                      }`}
                    />
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Content Area */}
          <div className="lg:w-2/3">
            {/* View Mode Tabs */}
            <div className="flex gap-2 mb-6 bg-slate-100 p-1 rounded-lg">
              {[
                { key: "overview", label: "Overview", icon: Target },
                { key: "journey", label: "Implementation", icon: Layers },
                { key: "impact", label: "Business Impact", icon: TrendingUp },
              ].map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setViewMode(key as any)}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                    viewMode === key
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>

            {/* Content Display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeService}-${viewMode}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-slate-200"
              >
                {viewMode === "overview" && (
                  <div className="space-y-8">
                    {/* Problem & Solution */}
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-4">
                        The Challenge
                      </h3>
                      <p className="text-slate-600 mb-6">
                        {activeServiceData.problemStatement}
                      </p>

                      <h3 className="text-xl font-semibold text-slate-900 mb-4">
                        Our Approach
                      </h3>
                      <p className="text-slate-600 mb-6">
                        {activeServiceData.solutionApproach}
                      </p>
                    </div>

                    {/* Service Offerings */}
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-4">
                        What We Deliver
                      </h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {activeServiceData.serviceOfferings.map(
                          (offering, index) => (
                            <motion.div
                              key={index}
                              className="bg-slate-50 rounded-lg p-6 border border-slate-200"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <h4 className="font-semibold text-slate-900 mb-2">
                                {offering.name}
                              </h4>
                              <p className="text-sm text-slate-600 mb-4">
                                {offering.description}
                              </p>
                              <div className="space-y-2">
                                {offering.features.map((feature, fIndex) => (
                                  <div
                                    key={fIndex}
                                    className="flex items-center gap-2 text-sm text-slate-600"
                                  >
                                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                    {feature}
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )
                        )}
                      </div>
                    </div>

                    {/* Investment Range */}
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200">
                      <h3 className="text-lg font-semibold text-slate-900 mb-4">
                        Investment Range
                      </h3>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">
                            {activeServiceData.investmentRange.starting}
                          </div>
                          <div className="text-sm text-slate-600">
                            Starting projects
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600">
                            {activeServiceData.investmentRange.typical}
                          </div>
                          <div className="text-sm text-slate-600">
                            Typical engagement
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">
                            {activeServiceData.investmentRange.enterprise}
                          </div>
                          <div className="text-sm text-slate-600">
                            Enterprise scale
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {viewMode === "journey" && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-slate-900 mb-6">
                      Implementation Journey
                    </h3>
                    <div className="space-y-4">
                      {activeServiceData.implementationJourney.map(
                        (stage, index) => (
                          <JourneyStage
                            key={index}
                            stage={stage}
                            index={index}
                            isActive={index === 0}
                          />
                        )
                      )}
                    </div>

                    {/* Success Stories */}
                    <div className="mt-8">
                      <h4 className="text-lg font-semibold text-slate-900 mb-4">
                        Success Stories
                      </h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        {activeServiceData.successStories.map(
                          (story, index) => (
                            <motion.div
                              key={index}
                              className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6 border border-green-200"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <div className="flex items-center gap-2 mb-3">
                                <Target className="w-5 h-5 text-green-600" />
                                <span className="font-semibold text-slate-900">
                                  {story.industry}
                                </span>
                              </div>
                              <div className="space-y-2 text-sm">
                                <div>
                                  <span className="text-slate-500">
                                    Challenge:
                                  </span>
                                  <p className="text-slate-700">
                                    {story.challenge}
                                  </p>
                                </div>
                                <div>
                                  <span className="text-slate-500">
                                    Solution:
                                  </span>
                                  <p className="text-slate-700">
                                    {story.solution}
                                  </p>
                                </div>
                                <div>
                                  <span className="text-slate-500">
                                    Result:
                                  </span>
                                  <p className="font-semibold text-green-700">
                                    {story.result}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {viewMode === "impact" && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-slate-900 mb-6">
                      Business Impact Metrics
                    </h3>
                    <SuccessMetrics
                      metrics={activeServiceData.businessImpact}
                      isVisible={true}
                    />

                    {/* ROI Calculator */}
                    <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-6 border border-slate-200 mt-8">
                      <h4 className="text-lg font-semibold text-slate-900 mb-4">
                        ROI Calculator
                      </h4>
                      <p className="text-slate-600 mb-4">
                        Get a personalized estimate of the business impact for
                        your organization.
                      </p>
                      <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                        <Calculator className="w-4 h-4" />
                        Calculate Your ROI
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-4">
            Ready to Start Your Transformation?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Every successful transformation starts with a conversation.
            Let&apos;s discuss your specific challenges and explore how our
            proven methodologies can deliver measurable results for your
            organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              <Calendar className="w-5 h-5" />
              Schedule Strategy Session
            </button>
            <button className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-500/30 transition-all duration-300">
              <Play className="w-5 h-5" />
              Watch Success Stories
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-8 pt-6 border-t border-white/20 text-blue-100">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>200+ Successful Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span>4.9/5 Client Satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Enterprise Security Certified</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
