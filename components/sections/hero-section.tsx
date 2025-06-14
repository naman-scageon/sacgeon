"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { heroSection } from "@/constants/site-data";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Database, Brain, Zap, BarChart3 } from "lucide-react";

// Simple AI Architecture Diagram Component
const AIArchitectureDiagram = () => {
  const [activeLayer, setActiveLayer] = useState(0);
  
  const layers = [
    { name: "Data Layer", icon: Database, color: "from-blue-500 to-cyan-400", description: "Collection & Storage" },
    { name: "Processing Layer", icon: Brain, color: "from-purple-500 to-indigo-400", description: "AI & ML Models" },
    { name: "Intelligence Layer", icon: Zap, color: "from-green-500 to-emerald-400", description: "Decision Engine" },
    { name: "Insights Layer", icon: BarChart3, color: "from-orange-500 to-red-400", description: "Business Value" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLayer((prev) => (prev + 1) % layers.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [layers.length]);

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Architecture Layers */}
      <div className="space-y-4">
        {layers.map((layer, index) => {
          const Icon = layer.icon;
          const isActive = index === activeLayer;
          const isComplete = index < activeLayer;
          
          return (
            <motion.div
              key={index}
              className={`relative p-4 rounded-xl border transition-all duration-500 ${
                isActive 
                  ? 'bg-white/10 border-white/20 scale-105' 
                  : isComplete
                  ? 'bg-white/5 border-green-400/20'
                  : 'bg-white/[0.02] border-white/5'
              }`}
              layout
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-500 ${
                  isActive 
                    ? `bg-gradient-to-r ${layer.color}` 
                    : isComplete
                    ? 'bg-green-400/20'
                    : 'bg-white/5'
                }`}>
                  <Icon className={`w-6 h-6 transition-colors duration-500 ${
                    isActive || isComplete ? 'text-white' : 'text-gray-400'
                  }`} />
                </div>
                <div>
                  <h4 className={`font-semibold transition-colors duration-500 ${
                    isActive ? 'text-white' : isComplete ? 'text-green-400' : 'text-gray-300'
                  }`}>
                    {layer.name}
                  </h4>
                  <p className={`text-sm transition-colors duration-500 ${
                    isActive ? 'text-gray-300' : 'text-gray-500'
                  }`}>
                    {layer.description}
                  </p>
                </div>
              </div>
              
              {/* Progress Indicator */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <div className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  isActive 
                    ? `bg-gradient-to-r ${layer.color} animate-pulse` 
                    : isComplete
                    ? 'bg-green-400'
                    : 'bg-gray-600'
                }`} />
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Data Flow Lines */}
      <div className="absolute left-8 top-16 bottom-16 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
    </div>
  );
};

export function HeroSection() {
  const { subtTitle, description } = heroSection;
  const containerRef = useRef<HTMLDivElement>(null);
  
  // AI-first startup tagline
  const tagline = "AI-Native Enterprise Transformation";

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-black overflow-hidden flex items-center pt-20">
      {/* Minimalist background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        {/* Subtle floating elements */}
        <motion.div 
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-green-400/5 to-blue-400/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -25, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 25, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-8">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300 tracking-wider"
              >
                {subtTitle}
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-7xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  {tagline}
                </span>
              </motion.h1>
              
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 origin-left"
              />
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-xl text-gray-300 leading-relaxed max-w-xl"
              >
                {description}
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-400 to-blue-400 text-black font-semibold rounded-full hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* AI Architecture Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-white mb-2">AI Architecture</h3>
              <p className="text-gray-400 text-sm">Scalable, intelligent infrastructure</p>
            </div>
            
            <AIArchitectureDiagram />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
