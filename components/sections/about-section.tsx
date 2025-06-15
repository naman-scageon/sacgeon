"use client";

import { motion } from "framer-motion";
import { Database, Brain, Shield, CheckCircle } from "lucide-react";

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
    className="group relative p-6 rounded-xl bg-charcoal-900/30 backdrop-blur-sm border border-warm-700/30 hover:border-warm-600/40 hover:bg-charcoal-800/40 transition-all duration-300"
  >
    <div className="relative z-10">
      {/* Icon */}
      <div className="mb-4">
        <div className="w-10 h-10 rounded-lg bg-steel-500/10 flex items-center justify-center group-hover:bg-steel-500/20 transition-colors duration-300">
          <Icon className="w-5 h-5 text-steel-400" />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-offwhite-100 mb-2 group-hover:text-offwhite-50 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-offwhite-400 text-sm leading-relaxed group-hover:text-offwhite-300 transition-colors duration-300">
        {description}
      </p>
    </div>
  </motion.div>
);

export function AboutSection() {
  const capabilities = [
    {
      icon: Database,
      title: "Data Platform Excellence",
      description:
        "Modern data infrastructure, cloud migrations, and real-time analytics that scale with your business.",
      delay: 0.1,
    },
    {
      icon: Brain,
      title: "AI Implementation",
      description:
        "Custom AI models, intelligent automation, and MLOps frameworks for measurable business outcomes.",
      delay: 0.2,
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "HIPAA, SOX, and industry-compliant solutions with enterprise security and governance built-in.",
      delay: 0.3,
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-charcoal-950 to-charcoal-900 relative overflow-hidden"
    >
      {/* Subtle background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-steel-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/6 w-32 h-32 bg-warm-500/5 rounded-full blur-3xl" />
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
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-800/40 border border-warm-700/30 text-steel-400 text-sm font-medium mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-steel-400" />
              About Scageon
            </motion.span>

            <h2 className="text-3xl md:text-4xl font-semibold text-offwhite-100 leading-tight mb-4">
              Your trusted partner for{" "}
              <span className="gradient-text">data transformation</span> and AI
              implementation
            </h2>

            <p className="text-lg text-offwhite-400 max-w-3xl mx-auto leading-relaxed">
              We help enterprises unlock the value of their data through
              strategic analytics, modern data platforms, and targeted AI
              solutions that deliver measurable business outcomes.
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
            <div className="max-w-4xl mx-auto">
              <div className="bg-charcoal-800/30 backdrop-blur-xl rounded-2xl p-8 border border-warm-700/30">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-offwhite-100 mb-3">
                      Why Choose Scageon?
                    </h3>
                    <p className="text-offwhite-400 leading-relaxed mb-6">
                      We combine deep technical expertise with proven
                      methodologies to deliver solutions that actually work in
                      enterprise environments. Our focus is on measurable
                      business outcomes, not just technology implementations.
                    </p>
                  </div>
                  <div className="space-y-3">
                    {[
                      "Enterprise-grade security & compliance",
                      "Proven track record with 50+ clients",
                      "End-to-end implementation support",
                      "Measurable ROI within 6 months",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-steel-400 flex-shrink-0" />
                        <span className="text-sm text-offwhite-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
