"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Play,
  Database,
  Brain,
  TrendingUp,
  Sparkles,
  Zap,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface FloatingElementProps {
  delay?: number;
  duration?: number;
  className?: string;
  children: React.ReactNode;
}

const FloatingElement: React.FC<FloatingElementProps> = ({
  delay = 0,
  duration = 6,
  className = "",
  children,
}) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
);

interface NetworkNodeProps {
  x: number;
  y: number;
  delay: number;
}

const NetworkNode: React.FC<NetworkNodeProps> = ({ x, y, delay }) => (
  <motion.div
    className="absolute w-2 h-2 rounded-full bg-emerald-400/60"
    style={{ left: `${x}%`, top: `${y}%` }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0.6, 1],
      scale: [0, 1, 1.2, 1],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <div className="absolute inset-0 rounded-full bg-emerald-400/30 animate-ping" />
  </motion.div>
);

interface FeaturePillProps {
  icon: React.ElementType;
  label: string;
  index: number;
}

const FeaturePill: React.FC<FeaturePillProps> = ({
  icon: Icon,
  label,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
    whileHover={{ scale: 1.05, y: -2 }}
    className="group inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-800/40 backdrop-blur-xl border border-slate-700/30 hover:border-emerald-400/40 hover:bg-slate-700/40 transition-all duration-300"
  >
    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-4 h-4 text-black" />
    </div>
    <span className="text-white font-medium group-hover:text-emerald-300 transition-colors duration-300">
      {label}
    </span>
  </motion.div>
);

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      return () => section.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const features = [
    { icon: Database, label: "Data Platforms" },
    { icon: Brain, label: "AI Solutions" },
    { icon: TrendingUp, label: "Analytics" },
  ];

  // Network nodes for animated background
  const networkNodes = [
    { x: 15, y: 20, delay: 0 },
    { x: 25, y: 35, delay: 0.5 },
    { x: 75, y: 25, delay: 1 },
    { x: 85, y: 40, delay: 1.5 },
    { x: 45, y: 15, delay: 2 },
    { x: 55, y: 60, delay: 2.5 },
    { x: 20, y: 70, delay: 3 },
    { x: 80, y: 65, delay: 3.5 },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900/95 to-slate-950"
    >
      {/* Interactive Background */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-30"
          style={{
            background: "linear-gradient(45deg, #10b981, #3b82f6)",
            left: `${20 + mousePosition.x * 10}%`,
            top: `${20 + mousePosition.y * 10}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
            right: `${10 + mousePosition.x * 15}%`,
            bottom: `${30 + mousePosition.y * 10}%`,
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Neural network background */}
        <div className="absolute inset-0 opacity-20">
          {/* Grid pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Animated network nodes */}
          {networkNodes.map((node, index) => (
            <NetworkNode key={index} {...node} />
          ))}

          {/* Connecting lines */}
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient
                id="lineGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {networkNodes.slice(0, -1).map((node, index) => {
              const nextNode = networkNodes[index + 1];
              return (
                <motion.line
                  key={index}
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${nextNode.x}%`}
                  y2={`${nextNode.y}%`}
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{
                    duration: 2,
                    delay: index * 0.3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 1,
                  }}
                />
              );
            })}
          </svg>
        </div>

        {/* Floating tech elements */}
        <FloatingElement delay={0} duration={8} className="top-1/4 left-1/6">
          <div className="w-12 h-12 rounded-xl bg-slate-800/40 backdrop-blur-sm border border-emerald-400/30 flex items-center justify-center">
            <Database className="w-6 h-6 text-emerald-400" />
          </div>
        </FloatingElement>

        <FloatingElement delay={2} duration={10} className="top-1/3 right-1/4">
          <div className="w-12 h-12 rounded-xl bg-slate-800/40 backdrop-blur-sm border border-blue-400/30 flex items-center justify-center">
            <Brain className="w-6 h-6 text-blue-400" />
          </div>
        </FloatingElement>

        <FloatingElement delay={4} duration={7} className="bottom-1/3 left-1/4">
          <div className="w-12 h-12 rounded-xl bg-slate-800/40 backdrop-blur-sm border border-purple-400/30 flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-purple-400" />
          </div>
        </FloatingElement>

        {/* Particle effects */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div className="container relative z-10" style={{ y }}>
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400/10 backdrop-blur-sm border border-emerald-400/20 text-emerald-400 text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>Driving Business Transformation</span>
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            <span className="text-white">Unlocking the power of </span>
            <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Data & AI
            </span>
            <br />
            <span className="text-white">for enterprise success</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Committed to delivering tailored strategies and scalable solutions,
            we empower businesses to embrace the future with{" "}
            <span className="text-emerald-400 font-semibold">
              confidence and agility
            </span>
            .
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-400 to-blue-400 text-black font-bold rounded-2xl hover:shadow-2xl hover:shadow-emerald-400/25 transition-all duration-300"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Zap className="w-5 h-5" />
              <span>Start Your Project</span>
              <ArrowRight
                className={`w-5 h-5 transition-transform duration-300 ${
                  isHovered ? "translate-x-1" : ""
                }`}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-slate-800/40 backdrop-blur-sm border border-slate-600/30 text-white font-semibold rounded-2xl hover:bg-slate-700/40 hover:border-slate-500/40 transition-all duration-300"
            >
              <Play className="w-5 h-5 text-emerald-400" />
              <span>Watch Demo</span>
            </motion.button>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {features.map((feature, index) => (
              <FeaturePill key={index} {...feature} index={index} />
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-8 h-14 border-2 border-slate-600 rounded-full flex justify-center p-2">
          <motion.div
            className="w-1 h-3 bg-gradient-to-b from-emerald-400 to-blue-400 rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
