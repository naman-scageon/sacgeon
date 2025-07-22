"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Database,
  Brain,
  ArrowRight,
  TrendingUp,
  Users,
  Play,
  Lightbulb,
  CheckCircle,
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
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm text-purple-400 mb-4">
          <Play className="w-4 h-4" />
          How It Works
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          Your AI transformation in
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            {" "}
            4 simple steps
          </span>
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
          See how businesses achieve measurable results in weeks, not months.
          Watch the transformation process in action.
        </p>

        {!isPlaying && (
          <Button
            onClick={startDemo}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            <Play className="w-4 h-4 mr-2" />
            Watch Demo
          </Button>
        )}
      </motion.div>

      {/* Progress Bar */}
      {isPlaying && (
        <div className="mb-8">
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
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
              className={`relative p-6 border cursor-pointer transition-all duration-300 ${
                isActive
                  ? "bg-slate-800/60 border-purple-500/50 shadow-lg shadow-purple-500/10 scale-105"
                  : isCompleted
                  ? "bg-emerald-500/10 border-emerald-500/30 shadow-md"
                  : "bg-slate-900/40 border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/40"
              }`}
              onClick={() => !isPlaying && setActiveStage(index)}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {/* Stage Icon */}
              <div
                className={`w-12 h-12 flex items-center justify-center mb-4 transition-all duration-300 ${
                  isActive
                    ? `bg-gradient-to-r ${stage.color} rounded-lg`
                    : isCompleted
                    ? "bg-emerald-500 rounded-lg"
                    : "bg-slate-700/50 rounded-lg"
                }`}
              >
                {isCompleted ? (
                  <CheckCircle className="w-6 h-6 text-white" />
                ) : (
                  <Icon
                    className={`w-6 h-6 ${
                      isActive ? "text-white" : "text-slate-300"
                    }`}
                  />
                )}
              </div>

              {/* Stage Content */}
              <div>
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    isActive ? "text-white" : "text-slate-200"
                  }`}
                >
                  {stage.title}
                </h3>
                <p className="text-sm text-slate-400 mb-3">
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
                      className="flex items-center gap-2 text-xs text-slate-400"
                    >
                      <div className="w-1 h-1 bg-slate-500 rounded-full" />
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

      {/* CTA Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="bg-slate-900/60 border border-slate-700/50 p-8">
          <h3 className="text-xl font-semibold text-white mb-3">
            Ready to Start Your Transformation?
          </h3>
          <p className="text-slate-400 mb-6 max-w-md mx-auto">
            Join hundreds of businesses already seeing measurable results with
            our proven approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={handleGetStarted}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Get Started Today
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
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
      className="py-20 bg-black relative overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <InteractiveDemo />
      </div>
    </section>
  );
}
