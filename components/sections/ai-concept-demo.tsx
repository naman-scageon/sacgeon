"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Database,
  Brain,
  ArrowRight,
  TrendingUp,
  Users,
  Target,
  Play,
  Lightbulb,
  CheckCircle,
  Timer,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Simplified transformation stages
const transformationStages = [
  {
    id: "connect",
    title: "Connect",
    description: "Integrate your existing data sources",
    icon: Database,
    color: "from-blue-500 to-cyan-400",
    duration: "2-3 weeks",
    features: ["One-click integrations", "Real-time sync", "Data validation"],
  },
  {
    id: "analyze",
    title: "Analyze",
    description: "AI learns your business patterns",
    icon: Brain,
    color: "from-purple-500 to-pink-400",
    duration: "1-2 weeks",
    features: ["Pattern recognition", "Custom models", "Automated insights"],
  },
  {
    id: "optimize",
    title: "Optimize",
    description: "Generate actionable recommendations",
    icon: Lightbulb,
    color: "from-amber-500 to-orange-400",
    duration: "Real-time",
    features: [
      "Smart recommendations",
      "Risk assessment",
      "Performance tracking",
    ],
  },
  {
    id: "scale",
    title: "Scale",
    description: "Drive measurable business results",
    icon: TrendingUp,
    color: "from-emerald-500 to-teal-400",
    duration: "Ongoing",
    features: ["Automated actions", "ROI measurement", "Continuous learning"],
  },
];

// Success metrics
const successMetrics = [
  {
    industry: "Manufacturing",
    metric: "85% reduction",
    detail: "in equipment downtime",
    icon: Target,
  },
  {
    industry: "E-commerce",
    metric: "67% increase",
    detail: "in conversion rates",
    icon: BarChart3,
  },
  {
    industry: "Finance",
    metric: "40% faster",
    detail: "decision making",
    icon: Timer,
  },
];

const InteractiveDemo = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Auto-play demo
  useEffect(() => {
    if (isInView && isPlaying) {
      const interval = setInterval(() => {
        setActiveStage((prev) => (prev + 1) % transformationStages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isInView, isPlaying]);

  const startDemo = () => {
    setIsPlaying(true);
    setActiveStage(0);
  };

  const handleGetStarted = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={ref} className="max-w-6xl mx-auto">
      {/* Demo Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 border border-purple-200 rounded-full text-sm text-purple-700 mb-4">
          <Play className="w-4 h-4" />
          How It Works
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
          Your AI transformation in
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {" "}
            4 simple steps
          </span>
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
          See how businesses achieve measurable results in weeks, not months.
          Watch the transformation process in action.
        </p>

        {!isPlaying && (
          <Button
            onClick={startDemo}
            className="bg-purple-600 hover:bg-purple-700"
          >
            <Play className="w-4 h-4 mr-2" />
            Watch Demo
          </Button>
        )}
      </motion.div>

      {/* Progress Bar */}
      {isPlaying && (
        <div className="mb-8">
          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(activeStage + 1) * 25}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="flex justify-between text-xs text-slate-500 mt-2">
            {transformationStages.map((stage) => (
              <span key={stage.id}>{stage.title}</span>
            ))}
          </div>
        </div>
      )}

      {/* Transformation Stages */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {transformationStages.map((stage, index) => {
          const Icon = stage.icon;
          const isActive = index === activeStage;
          const isCompleted = index < activeStage && isPlaying;

          return (
            <motion.div
              key={stage.id}
              className={`relative p-6 rounded-xl border cursor-pointer transition-all duration-300 ${
                isActive
                  ? "bg-white shadow-lg border-purple-200 scale-105"
                  : isCompleted
                  ? "bg-emerald-50 border-emerald-200 shadow-md"
                  : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-md"
              }`}
              onClick={() => !isPlaying && setActiveStage(index)}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {/* Stage Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                  isActive
                    ? `bg-gradient-to-r ${stage.color}`
                    : isCompleted
                    ? "bg-emerald-500"
                    : "bg-slate-100"
                }`}
              >
                {isCompleted ? (
                  <CheckCircle className="w-6 h-6 text-white" />
                ) : (
                  <Icon
                    className={`w-6 h-6 ${
                      isActive ? "text-white" : "text-slate-600"
                    }`}
                  />
                )}
              </div>

              {/* Stage Content */}
              <div>
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    isActive ? "text-slate-900" : "text-slate-700"
                  }`}
                >
                  {stage.title}
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  {stage.description}
                </p>

                {/* Timeline */}
                <div className="text-xs text-slate-500 mb-3">
                  Duration: {stage.duration}
                </div>

                {/* Features */}
                <div className="space-y-1">
                  {stage.features.map((feature, fIndex) => (
                    <div
                      key={fIndex}
                      className="flex items-center gap-2 text-xs text-slate-600"
                    >
                      <div className="w-1 h-1 bg-slate-400 rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Active indicator */}
              {isActive && isPlaying && (
                <div className="absolute top-2 right-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Success Metrics */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <h3 className="text-xl font-semibold text-slate-900 text-center mb-8">
          Real Results from Real Businesses
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {successMetrics.map((metric, index) => {
            const Icon = metric.icon;

            return (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-slate-900">
                    {metric.industry}
                  </span>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">
                    {metric.metric}
                  </div>
                  <div className="text-sm text-slate-600">{metric.detail}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="bg-gradient-to-r from-slate-50 to-purple-50 rounded-2xl p-8 border border-slate-200">
          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            Ready to Start Your Transformation?
          </h3>
          <p className="text-slate-600 mb-6 max-w-md mx-auto">
            Join hundreds of businesses already seeing measurable results with
            our proven approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={handleGetStarted}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Get Started Today
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              className="border-slate-300 hover:bg-slate-50"
            >
              <Users className="w-4 h-4 mr-2" />
              Talk to Expert
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export function AiConceptDemo() {
  return (
    <section
      data-section="ai-demo"
      className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-100/50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <InteractiveDemo />
      </div>
    </section>
  );
}
