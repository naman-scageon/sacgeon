"use client";

import { motion } from "framer-motion";
import { Database, Brain, Shield } from "lucide-react";

interface CapabilityProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}

const Capability: React.FC<CapabilityProps> = ({
  icon: Icon,
  title,
  description,
  delay,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.02, y: -2 }}
    className="group relative p-6 rounded-2xl bg-slate-900/30 backdrop-blur-sm border border-slate-700/20 hover:border-emerald-500/30 hover:bg-slate-900/40 transition-all duration-300"
  >
    <div className="relative z-10">
      {/* Icon */}
      <div className="mb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-blue-400 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
          <Icon className="w-6 h-6 text-black" />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
        {description}
      </p>
    </div>
  </motion.div>
);

export function AboutSection() {
  const capabilities = [
    {
      icon: Database,
      title: "Data Engineering Excellence",
      description:
        "Modern data platforms, cloud migrations, and real-time pipelines that scale with your business growth.",
      delay: 0.1,
    },
    {
      icon: Brain,
      title: "AI Implementation",
      description:
        "Custom AI models, NLP solutions, and MLOps frameworks that deliver measurable business outcomes.",
      delay: 0.2,
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description:
        "HIPAA, SOX, and industry-compliant solutions with enterprise security and governance built-in.",
      delay: 0.3,
    },
  ];

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/95 to-slate-950" />

      {/* Subtle animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/6 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-sm font-medium mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              About Scageon
            </motion.span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Your trusted partner for{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                data modernization
              </span>{" "}
              and AI implementation
            </h2>

            <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              We are a pioneering IT services firm dedicated to driving business
              transformation through cutting-edge data analytics, modern data
              platforms, and targeted AI solutions.
            </p>
          </motion.div>

          {/* Capabilities Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {capabilities.map((capability, index) => (
              <Capability key={index} {...capability} />
            ))}
          </div>

          {/* Value Proposition */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-slate-900/30 backdrop-blur-sm border border-slate-700/20">
              <p className="text-lg text-slate-300 leading-relaxed">
                We combine deep technical expertise with proven methodologies to
                deliver data platforms, analytics solutions, and AI
                implementations that actually work in enterprise environments.
                Our focus is on{" "}
                <span className="text-emerald-400 font-semibold">
                  measurable business outcomes
                </span>
                , not just technology implementations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
