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
  Shield,
  BarChart3,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

interface FloatingElementProps {
  delay?: number;
  duration?: number;
  className?: string;
  children: React.ReactNode;
}

const FloatingElement: React.FC<FloatingElementProps> = ({
  delay = 0,
  duration = 8,
  className = "",
  children,
}) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{
      y: [0, -15, 0],
      opacity: [0.2, 0.4, 0.2],
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
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
    whileHover={{ y: -2 }}
    className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal-900/30 backdrop-blur-sm border border-warm-700/30 hover:border-warm-600/40 hover:bg-charcoal-800/40 transition-all duration-300"
  >
    <div className="w-4 h-4 rounded bg-steel-500/20 flex items-center justify-center group-hover:bg-steel-400/30 transition-colors duration-300">
      <Icon className="w-2.5 h-2.5 text-steel-400 group-hover:text-steel-300" />
    </div>
    <span className="text-sm font-medium text-offwhite-300 group-hover:text-offwhite-200 transition-colors duration-300">
      {label}
    </span>
  </motion.div>
);

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

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
    { icon: BarChart3, label: "Analytics" },
    { icon: Shield, label: "Enterprise Grade" },
  ];

  const handleGetStarted = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWatchDemo = () => {
    const demoSection = document.querySelector("[data-section='ai-demo']");
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-charcoal-950 via-charcoal-900 to-charcoal-950"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        {/* Primary gradient orb */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(100, 116, 139, 0.08) 0%, rgba(120, 113, 108, 0.05) 50%, transparent 100%)",
            left: `${30 + mousePosition.x * 2}%`,
            top: `${20 + mousePosition.y * 2}%`,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-subtle-grid opacity-[0.01]" />

        {/* Floating tech elements */}
        <FloatingElement delay={0} duration={12} className="top-1/4 left-1/6">
          <div className="w-8 h-8 rounded-lg bg-charcoal-800/40 backdrop-blur-sm border border-warm-700/20 flex items-center justify-center">
            <Database className="w-4 h-4 text-steel-400/60" />
          </div>
        </FloatingElement>

        <FloatingElement delay={4} duration={14} className="top-1/3 right-1/5">
          <div className="w-8 h-8 rounded-lg bg-charcoal-800/40 backdrop-blur-sm border border-warm-700/20 flex items-center justify-center">
            <Brain className="w-4 h-4 text-steel-400/60" />
          </div>
        </FloatingElement>

        <FloatingElement
          delay={8}
          duration={10}
          className="bottom-1/3 left-1/5"
        >
          <div className="w-8 h-8 rounded-lg bg-charcoal-800/40 backdrop-blur-sm border border-warm-700/20 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-steel-400/60" />
          </div>
        </FloatingElement>
      </div>

      {/* Main Content */}
      <motion.div className="container relative z-10 px-4 pt-20" style={{ y }}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-charcoal-900/30 backdrop-blur-sm border border-warm-700/30 text-offwhite-400 text-sm font-medium mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-steel-400 animate-pulse-subtle" />
            <span className="text-xs">Enterprise Data & AI Solutions</span>
            <Sparkles className="w-3 h-3 text-offwhite-500" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]"
          >
            <span className="text-offwhite-100">Transform Your Business with</span>
            <br />
            <span className="gradient-text">
              Data & AI Solutions
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-offwhite-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We help enterprises unlock the value of their data through modern
            platforms, intelligent analytics, and AI implementations that drive{" "}
            <span className="text-offwhite-200 font-medium">
              measurable results
            </span>
            .
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Button
              onClick={handleGetStarted}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="btn-primary"
            >
              <Zap className="w-4 h-4 mr-2" />
              <span>Get Started</span>
              <ArrowRight
                className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                  isHovered ? "translate-x-1" : ""
                }`}
              />
            </Button>

            <Button
              onClick={handleWatchDemo}
              className="btn-secondary"
            >
              <Play className="w-4 h-4 mr-2" />
              <span>Watch Demo</span>
            </Button>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {features.map((feature, index) => (
              <FeaturePill key={index} {...feature} index={index} />
            ))}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="pt-8 border-t border-warm-700/30"
          >
            <p className="text-sm text-offwhite-600 mb-4">
              Trusted by industry leaders
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-20">
              {/* Trust indicator placeholders */}
              <div className="h-6 w-20 bg-warm-600/30 rounded" />
              <div className="h-6 w-24 bg-warm-600/30 rounded" />
              <div className="h-6 w-16 bg-warm-600/30 rounded" />
              <div className="h-6 w-28 bg-warm-600/30 rounded" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border border-warm-600/40 rounded-full flex justify-center p-1.5">
          <motion.div
            className="w-1 h-2 bg-steel-400/60 rounded-full"
            animate={{ y: [0, 12, 0] }}
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
