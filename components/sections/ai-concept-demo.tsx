"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Database, Brain, Zap, ArrowRight, TrendingUp, Network, Cpu, Bot } from "lucide-react";

// Interactive AI Pipeline Visualization Component
const AIPipelineDemo = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const pipelineStages = [
    {
      id: 0,
      name: "Data Ingestion",
      icon: Database,
      color: "from-blue-500 to-cyan-400",
      description: "Multi-source data collection",
      visualization: "Animated data streams flowing in",
      concepts: ["Real-time APIs", "Database integration", "IoT sensors", "Document processing"]
    },
    {
      id: 1,
      name: "AI Processing",
      icon: Brain,
      color: "from-purple-500 to-indigo-400",
      description: "Neural network analysis",
      visualization: "Neural connections pulsing",
      concepts: ["Deep learning", "Pattern recognition", "Predictive modeling", "NLP analysis"]
    },
    {
      id: 2,
      name: "Intelligence Layer",
      icon: Cpu,
      color: "from-green-500 to-emerald-400",
      description: "Decision engine",
      visualization: "Decision trees branching",
      concepts: ["Automated decisions", "Risk assessment", "Optimization", "Recommendations"]
    },
    {
      id: 3,
      name: "Business Impact",
      icon: TrendingUp,
      color: "from-orange-500 to-red-400",
      description: "Measurable outcomes",
      visualization: "Growth metrics ascending",
      concepts: ["Revenue growth", "Cost reduction", "Efficiency gains", "Competitive advantage"]
    }
  ];

  useEffect(() => {
    if (isInView && !isRunning) {
      setIsRunning(true);
      const interval = setInterval(() => {
        setActiveStage((prev) => (prev + 1) % pipelineStages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isInView, isRunning, pipelineStages.length]);

  return (
    <div ref={ref} className="relative w-full max-w-4xl mx-auto">
      {/* Pipeline Overview */}
      <div className="mb-12 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">
          AI Pipeline Visualization
        </h3>
        <p className="text-gray-400">
          Watch how we transform raw data into intelligent business solutions
        </p>
      </div>

      {/* Interactive Pipeline */}
      <div className="relative">
        {/* Pipeline Flow */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          {pipelineStages.map((stage, index) => {
            const Icon = stage.icon;
            const isActive = index === activeStage;
            const isCompleted = index < activeStage;
            
            return (
              <motion.div
                key={stage.id}
                className={`relative flex-1 p-6 rounded-2xl border transition-all duration-700 cursor-pointer ${
                  isActive 
                    ? 'bg-white/10 border-white/30 scale-105 shadow-xl' 
                    : isCompleted
                    ? 'bg-white/5 border-green-400/30'
                    : 'bg-white/[0.02] border-white/10 hover:bg-white/5'
                }`}
                onClick={() => setActiveStage(index)}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {/* Stage Icon */}
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 ${
                  isActive 
                    ? `bg-gradient-to-r ${stage.color}` 
                    : isCompleted
                    ? 'bg-green-400/20'
                    : 'bg-white/10'
                }`}>
                  <Icon className={`w-8 h-8 transition-colors duration-500 ${
                    isActive || isCompleted ? 'text-white' : 'text-gray-400'
                  }`} />
                </div>

                {/* Stage Content */}
                <h4 className={`text-lg font-semibold mb-2 transition-colors duration-500 ${
                  isActive ? 'text-white' : isCompleted ? 'text-green-400' : 'text-gray-300'
                }`}>
                  {stage.name}
                </h4>
                
                <p className={`text-sm mb-4 transition-colors duration-500 ${
                  isActive ? 'text-gray-300' : 'text-gray-500'
                }`}>
                  {stage.description}
                </p>

                {/* Concepts */}
                <div className="space-y-2">
                  {stage.concepts.map((concept, conceptIndex) => (
                    <motion.div
                      key={conceptIndex}
                      className={`text-xs px-2 py-1 rounded-full transition-all duration-500 ${
                        isActive 
                          ? 'bg-white/20 text-white' 
                          : 'bg-white/5 text-gray-500'
                      }`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: isActive ? 1 : 0.6, 
                        scale: isActive ? 1 : 0.9 
                      }}
                      transition={{ delay: conceptIndex * 0.1 }}
                    >
                      {concept}
                    </motion.div>
                  ))}
                </div>

                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}

                {/* Completion Indicator */}
                {isCompleted && (
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                )}

                {/* Connection Line */}
                {index < pipelineStages.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-white/20 to-transparent" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Active Stage Details */}
        <motion.div
          key={activeStage}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${pipelineStages[activeStage].color} flex items-center justify-center`}>
              {(() => {
                const Icon = pipelineStages[activeStage].icon;
                return <Icon className="w-6 h-6 text-white" />;
              })()}
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">
                {pipelineStages[activeStage].name}
              </h4>
              <p className="text-gray-400">
                {pipelineStages[activeStage].visualization}
              </p>
            </div>
          </div>

          {/* Interactive Elements */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-sm font-semibold text-white mb-3">Key Technologies</h5>
              <div className="flex flex-wrap gap-2">
                {pipelineStages[activeStage].concepts.map((concept, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-white/10 text-white text-sm rounded-full border border-white/20"
                  >
                    {concept}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="text-sm font-semibold text-white mb-3">Business Value</h5>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Processing Speed</span>
                  <span className="text-sm text-green-400">+{85 + activeStage * 5}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Accuracy</span>
                  <span className="text-sm text-green-400">+{90 + activeStage * 2}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Cost Efficiency</span>
                  <span className="text-sm text-green-400">+{70 + activeStage * 7}%</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <button className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-400 to-blue-400 text-black font-semibold rounded-full hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300">
          Build Your AI Pipeline
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </div>
  );
};

export function AiConceptDemo() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-500/5 to-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300 tracking-wider mb-6"
          >
            Interactive Demo
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See AI Transformation
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              {" "}in Action
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience how we transform raw business data into intelligent, actionable insights through our AI-native approach.
          </p>
        </motion.div>

        {/* Interactive Demo */}
        <AIPipelineDemo />
      </div>
    </section>
  );
}
