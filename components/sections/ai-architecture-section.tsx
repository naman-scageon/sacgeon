"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Database,
  Brain,
  Zap,
  ArrowRight,
  Network,
  Shield,
  Monitor,
  Workflow,
  Users,
  TrendingUp,
  Clock,
  Globe,
  CheckCircle,
  Play,
} from "lucide-react";

// Business-focused workflow steps
const workflowSteps = [
  {
    id: "data-collection",
    title: "Data Collection",
    description: "Seamlessly ingest data from multiple business sources",
    businessValue: "Unified view of your operations",
    icon: Database,
    color: "from-blue-500 to-cyan-400",
    darkColor: "from-blue-400 to-cyan-300",
    useCases: [
      "Customer interaction data",
      "Sales and revenue streams",
      "Operational metrics",
      "Market intelligence",
    ],
  },
  {
    id: "ai-processing",
    title: "AI Processing",
    description: "Transform raw data into actionable business intelligence",
    businessValue: "Automated decision making",
    icon: Brain,
    color: "from-purple-500 to-pink-400",
    darkColor: "from-purple-400 to-pink-300",
    useCases: [
      "Predictive analytics",
      "Customer behavior analysis",
      "Risk assessment",
      "Performance optimization",
    ],
  },
  {
    id: "intelligent-decisions",
    title: "Smart Decisions",
    description: "AI-powered recommendations for business growth",
    businessValue: "Faster, data-driven decisions",
    icon: Zap,
    color: "from-amber-500 to-orange-400",
    darkColor: "from-yellow-400 to-orange-300",
    useCases: [
      "Resource allocation",
      "Market opportunities",
      "Cost optimization",
      "Strategic planning",
    ],
  },
  {
    id: "integration",
    title: "Integration",
    description: "Connect insights directly to your existing tools",
    businessValue: "Seamless workflow integration",
    icon: Network,
    color: "from-green-500 to-emerald-400",
    darkColor: "from-green-400 to-emerald-300",
    useCases: [
      "CRM automation",
      "ERP synchronization",
      "Reporting dashboards",
      "Third-party APIs",
    ],
  },
];

// Enterprise capabilities
const capabilities = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance standards",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Deploy across regions with automatic scaling",
  },
  {
    icon: Clock,
    title: "Real-time Insights",
    description: "Get instant feedback as your business evolves",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Share insights across departments seamlessly",
  },
];

const WorkflowDiagram = () => {
  const [activeStep, setActiveStep] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/60 backdrop-blur-sm rounded-full text-sm text-slate-300 mb-6 border border-slate-700/50">
          <Workflow className="w-4 h-4 text-blue-400" />
          AI-Powered Business Intelligence
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          From Data to
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {" "}
            Business Impact
          </span>
        </h2>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          Transform your business data into intelligent insights that drive
          growth, optimize operations, and create competitive advantages.
        </p>
      </motion.div>

      {/* Enhanced Workflow Stepper */}
      <div className="relative mb-20">
        {/* Background Connection Path */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-5xl h-0.5 bg-gradient-to-r from-transparent via-slate-600/50 to-transparent hidden lg:block" />
        </div>

        {/* Workflow Steps with Better Alignment */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;
              const isCompleted = index < activeStep;

              return (
                <motion.div
                  key={step.id}
                  className="relative cursor-pointer group"
                  onMouseEnter={() => setActiveStep(index)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                >
                  {/* Connecting Line for Mobile/Tablet */}
                  {index < workflowSteps.length - 1 && (
                    <div className="absolute top-20 left-1/2 w-0.5 h-16 bg-gradient-to-b from-slate-600 to-transparent lg:hidden" />
                  )}

                  {/* Step Container */}
                  <div className="flex flex-col items-center text-center">
                    {/* Step Number & Icon Container */}
                    <div className="relative mb-6">
                      {/* Outer Ring */}
                      <div
                        className={`w-20 h-20 rounded-full border-2 transition-all duration-500 ${
                          isActive
                            ? "border-blue-400 bg-slate-800/60 backdrop-blur-sm scale-110 shadow-lg shadow-blue-500/25"
                            : isCompleted
                            ? "border-green-400 bg-slate-800/40 backdrop-blur-sm shadow-md shadow-green-500/20"
                            : "border-slate-600/50 bg-slate-800/30 group-hover:border-slate-500 group-hover:bg-slate-800/50"
                        }`}
                      >
                        {/* Inner Icon Container */}
                        <div
                          className={`w-full h-full rounded-full flex items-center justify-center transition-all duration-500 ${
                            isActive
                              ? `bg-gradient-to-r ${step.darkColor}`
                              : isCompleted
                              ? "bg-green-500"
                              : "bg-slate-700/50 group-hover:bg-slate-700"
                          }`}
                        >
                          {isCompleted ? (
                            <CheckCircle className="w-8 h-8 text-white" />
                          ) : (
                            <Icon
                              className={`w-8 h-8 transition-colors duration-500 ${
                                isActive
                                  ? "text-white"
                                  : "text-slate-400 group-hover:text-slate-300"
                              }`}
                            />
                          )}
                        </div>
                      </div>

                      {/* Step Number Badge */}
                      <div
                        className={`absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                          isActive
                            ? "bg-blue-500 text-white shadow-lg"
                            : isCompleted
                            ? "bg-green-500 text-white"
                            : "bg-slate-700 text-slate-400"
                        }`}
                      >
                        {index + 1}
                      </div>

                      {/* Pulse Animation for Active Step */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-ping" />
                      )}
                    </div>

                    {/* Step Content */}
                    <div className="space-y-3">
                      <h3
                        className={`text-lg font-semibold transition-colors duration-300 ${
                          isActive
                            ? "text-white"
                            : isCompleted
                            ? "text-green-400"
                            : "text-slate-300 group-hover:text-white"
                        }`}
                      >
                        {step.title}
                      </h3>

                      <p
                        className={`text-sm leading-relaxed transition-colors duration-300 ${
                          isActive
                            ? "text-slate-300"
                            : "text-slate-500 group-hover:text-slate-400"
                        }`}
                      >
                        {step.description}
                      </p>

                      {/* Business Value Badge */}
                      <div
                        className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                          isActive
                            ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                            : isCompleted
                            ? "bg-green-500/20 text-green-300 border border-green-500/30"
                            : "bg-slate-800/50 text-slate-400 border border-slate-700/50 group-hover:bg-slate-700/50"
                        }`}
                      >
                        {step.businessValue}
                      </div>
                    </div>
                  </div>

                  {/* Progress Indicator for Desktop */}
                  {index < workflowSteps.length - 1 && (
                    <div className="absolute top-10 -right-6 hidden lg:block">
                      <div
                        className={`w-12 h-0.5 transition-all duration-500 ${
                          isCompleted
                            ? "bg-gradient-to-r from-green-400 to-green-300"
                            : isActive
                            ? "bg-gradient-to-r from-blue-400 to-slate-600"
                            : "bg-slate-600/30"
                        }`}
                      />
                      <div className="absolute top-1/2 right-0 w-2 h-2 bg-slate-600 rounded-full transform -translate-y-1/2" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Active Step Details */}
      <motion.div
        key={activeStep}
        className="bg-slate-800/40 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 shadow-xl mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-start gap-8">
          <div
            className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${workflowSteps[activeStep].darkColor} flex items-center justify-center flex-shrink-0 shadow-lg`}
          >
            {(() => {
              const Icon = workflowSteps[activeStep].icon;
              return <Icon className="w-8 h-8 text-white" />;
            })()}
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-3">
              {workflowSteps[activeStep].title}
            </h3>
            <p className="text-slate-400 text-lg mb-8">
              {workflowSteps[activeStep].description}
            </p>

            <div>
              <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                Business Use Cases
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {workflowSteps[activeStep].useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/30 border border-slate-600/30"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{useCase}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Enterprise Capabilities */}
      <div className="mb-20">
        <motion.h3
          className="text-2xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Enterprise-Ready Platform
        </motion.h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;

            return (
              <motion.div
                key={index}
                className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
              >
                <div className="w-12 h-12 bg-slate-700/50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-slate-600/50 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-slate-400 group-hover:text-slate-300" />
                </div>
                <h4 className="font-semibold text-white mb-2">
                  {capability.title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {capability.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <div className="bg-gradient-to-r from-slate-800/60 to-slate-700/60 backdrop-blur-sm rounded-3xl p-10 border border-slate-600/50">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            See how our AI platform can deliver measurable results for your
            specific industry and use case.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
              <Play className="w-5 h-5" />
              Schedule a Demo
            </button>
            <button className="inline-flex items-center gap-2 bg-slate-800/80 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold border border-slate-600/50 hover:bg-slate-700/80 transition-all duration-300">
              <ArrowRight className="w-5 h-5" />
              View Case Studies
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export function AiArchitectureSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.3) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <WorkflowDiagram />
      </div>
    </section>
  );
}
