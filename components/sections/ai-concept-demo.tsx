"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Database,
  Brain,
  Zap,
  ArrowRight,
  TrendingUp,
  Users,
  Target,
  BarChart3,
  Clock,
  CheckCircle,
  Play,
  Lightbulb,
  Workflow,
  Globe,
  Shield,
} from "lucide-react";

// Business transformation stages
const transformationStages = [
  {
    id: "data-connection",
    title: "Connect Your Data",
    description: "Seamlessly integrate with your existing business systems",
    icon: Database,
    color: "from-blue-500 to-cyan-400",
    duration: "2-3 weeks",
    businessOutcome: "Unified data visibility",
    features: [
      "One-click integrations",
      "Real-time synchronization",
      "Data quality monitoring",
      "Compliance & security",
    ],
    metrics: {
      setup: "3 weeks",
      integration: "50+ sources",
      accuracy: "99.9%",
    },
  },
  {
    id: "ai-training",
    title: "AI Learning Phase",
    description: "Our AI models learn your business patterns and objectives",
    icon: Brain,
    color: "from-purple-500 to-pink-400",
    duration: "1-2 weeks",
    businessOutcome: "Custom AI for your business",
    features: [
      "Automated pattern recognition",
      "Business rule learning",
      "Performance optimization",
      "Continuous improvement",
    ],
    metrics: {
      training: "2 weeks",
      patterns: "1000+",
      accuracy: "92%+",
    },
  },
  {
    id: "insights-generation",
    title: "Generate Insights",
    description: "AI delivers actionable recommendations for growth",
    icon: Lightbulb,
    color: "from-amber-500 to-orange-400",
    duration: "Real-time",
    businessOutcome: "Data-driven decisions",
    features: [
      "Predictive analytics",
      "Opportunity identification",
      "Risk assessment",
      "Performance forecasting",
    ],
    metrics: {
      insights: "100+ daily",
      speed: "<1 second",
      relevance: "95%+",
    },
  },
  {
    id: "business-impact",
    title: "Drive Results",
    description: "Transform insights into measurable business outcomes",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-400",
    duration: "Ongoing",
    businessOutcome: "Measurable ROI growth",
    features: [
      "Automated actions",
      "Performance tracking",
      "ROI measurement",
      "Success optimization",
    ],
    metrics: {
      roi: "300%+",
      efficiency: "+250%",
      growth: "+40%",
    },
  },
];

// Success stories/use cases
const successStories = [
  {
    industry: "E-commerce",
    challenge: "Low conversion rates",
    solution: "AI-powered personalization",
    result: "+67% conversion increase",
    icon: Target,
  },
  {
    industry: "Manufacturing",
    challenge: "Equipment downtime",
    solution: "Predictive maintenance",
    result: "85% reduction in downtime",
    icon: Shield,
  },
  {
    industry: "Finance",
    challenge: "Risk assessment",
    solution: "Real-time risk scoring",
    result: "40% faster decisions",
    icon: BarChart3,
  },
];

const InteractiveDemo = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Auto-play demo
  useEffect(() => {
    if (isInView && isPlaying) {
      const interval = setInterval(() => {
        setActiveStage((prev) => (prev + 1) % transformationStages.length);
        setProgress((prev) => (prev + 25) % 100);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isInView, isPlaying]);

  const startDemo = () => {
    setIsPlaying(true);
    setProgress(0);
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
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full text-sm text-slate-600 mb-4 border border-slate-200">
          <Play className="w-4 h-4" />
          Interactive Demo
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
          Your AI Transformation
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {" "}
            Journey
          </span>
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
          See how businesses like yours achieve measurable results in weeks, not
          months. Click play to watch the transformation process.
        </p>

        {!isPlaying && (
          <button
            onClick={startDemo}
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors duration-200"
          >
            <Play className="w-4 h-4" />
            Start Demo
          </button>
        )}
      </motion.div>

      {/* Progress Bar */}
      {isPlaying && (
        <div className="mb-8">
          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(activeStage + 1) * 25}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="flex justify-between text-xs text-slate-500 mt-2">
            <span>Connect</span>
            <span>Learn</span>
            <span>Analyze</span>
            <span>Results</span>
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
              className={`relative p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                isActive
                  ? "bg-white shadow-lg border-blue-200 scale-105"
                  : isCompleted
                  ? "bg-green-50 border-green-200 shadow-md"
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
                    ? "bg-green-500"
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

                {/* Duration & Outcome */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Timeline:</span>
                    <span className="font-medium text-slate-700">
                      {stage.duration}
                    </span>
                  </div>
                  <div
                    className={`text-xs px-2 py-1 rounded-full ${
                      isActive
                        ? "bg-blue-50 text-blue-700 border border-blue-200"
                        : isCompleted
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-slate-50 text-slate-600 border border-slate-200"
                    }`}
                  >
                    {stage.businessOutcome}
                  </div>
                </div>
              </div>

              {/* Progress Indicator */}
              {isActive && isPlaying && (
                <div className="absolute top-2 right-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Active Stage Details */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStage}
          className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Stage Details */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-r ${transformationStages[activeStage].color} flex items-center justify-center`}
                >
                  {(() => {
                    const Icon = transformationStages[activeStage].icon;
                    return <Icon className="w-5 h-5 text-white" />;
                  })()}
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {transformationStages[activeStage].title}
                </h3>
              </div>

              <p className="text-slate-600 mb-6">
                {transformationStages[activeStage].description}
              </p>

              <div>
                <h4 className="text-sm font-medium text-slate-900 mb-3">
                  Key Features:
                </h4>
                <div className="space-y-2">
                  {transformationStages[activeStage].features.map(
                    (feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-2 text-sm text-slate-600"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </motion.div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div>
              <h4 className="text-sm font-medium text-slate-900 mb-4">
                Performance Metrics:
              </h4>
              <div className="space-y-4">
                {Object.entries(transformationStages[activeStage].metrics).map(
                  ([key, value], index) => (
                    <motion.div
                      key={key}
                      className="bg-slate-50 rounded-lg p-4"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600 capitalize">
                          {key}
                        </span>
                        <span className="text-lg font-semibold text-slate-900">
                          {value}
                        </span>
                      </div>
                    </motion.div>
                  )
                )}
              </div>

              {/* Business Impact */}
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
                <h5 className="text-sm font-medium text-slate-900 mb-2">
                  Business Impact:
                </h5>
                <p className="text-sm text-slate-700">
                  {transformationStages[activeStage].businessOutcome}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Success Stories */}
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
          {successStories.map((story, index) => {
            const Icon = story.icon;

            return (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-4 h-4 text-slate-600" />
                  </div>
                  <span className="text-sm font-medium text-slate-900">
                    {story.industry}
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="text-xs text-slate-500">Challenge:</span>
                    <p className="text-sm text-slate-700">{story.challenge}</p>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500">Solution:</span>
                    <p className="text-sm text-slate-700">{story.solution}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-xs text-slate-500">Result:</span>
                    <p className="text-lg font-semibold text-green-600">
                      {story.result}
                    </p>
                  </div>
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
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200">
          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            Ready to Start Your Transformation?
          </h3>
          <p className="text-slate-600 mb-6 max-w-md mx-auto">
            Join hundreds of businesses already seeing measurable results with
            our AI platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors duration-200">
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-medium border border-slate-200 hover:border-slate-300 transition-colors duration-200">
              <Users className="w-4 h-4" />
              Talk to Sales
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export function AiConceptDemo() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <InteractiveDemo />
      </div>
    </section>
  );
}
