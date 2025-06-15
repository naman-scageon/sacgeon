"use client";

import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import {
  Brain,
  Database,
  Cloud,
  Code,
  Layers,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Globe,
  Cpu,
  Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Define technology categories with their tools and metadata
const techCategories = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description: "Advanced AI models and ML frameworks for intelligent solutions",
    icon: Brain,
    color: "from-steel-500 to-steel-400",
    bgColor: "bg-steel-500/10",
    borderColor: "border-steel-500/20",
    technologies: [
      { name: "OpenAI GPT", tier: "Production" },
      { name: "Claude", tier: "Enterprise" },
      { name: "LangChain", tier: "Production" },
      { name: "TensorFlow", tier: "Production" },
      { name: "PyTorch", tier: "Production" },
      { name: "Hugging Face", tier: "Development" },
    ],
  },
  {
    id: "data-analytics",
    title: "Data & Analytics",
    description: "Scalable data processing and real-time analytics platforms",
    icon: Database,
    color: "from-warm-500 to-warm-400",
    bgColor: "bg-warm-500/10",
    borderColor: "border-warm-500/20",
    technologies: [
      { name: "Apache Spark", tier: "Enterprise" },
      { name: "Apache Kafka", tier: "Production" },
      { name: "PostgreSQL", tier: "Production" },
      { name: "MongoDB", tier: "Production" },
      { name: "Elasticsearch", tier: "Production" },
      { name: "Apache Airflow", tier: "Production" },
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    description: "Modern cloud infrastructure and deployment automation",
    icon: Cloud,
    color: "from-steel-600 to-steel-500",
    bgColor: "bg-steel-600/10",
    borderColor: "border-steel-600/20",
    technologies: [
      { name: "AWS", tier: "Enterprise" },
      { name: "Docker", tier: "Production" },
      { name: "Kubernetes", tier: "Enterprise" },
      { name: "Terraform", tier: "Production" },
      { name: "GitHub Actions", tier: "Production" },
      { name: "Prometheus", tier: "Production" },
    ],
  },
  {
    id: "programming",
    title: "Development Stack",
    description: "Modern programming languages and frameworks",
    icon: Code,
    color: "from-warm-600 to-warm-500",
    bgColor: "bg-warm-600/10",
    borderColor: "border-warm-600/20",
    technologies: [
      { name: "Python", tier: "Production" },
      { name: "TypeScript", tier: "Production" },
      { name: "Next.js", tier: "Production" },
      { name: "FastAPI", tier: "Production" },
      { name: "Node.js", tier: "Production" },
      { name: "React", tier: "Production" },
    ],
  },
];

const tierColors = {
  Enterprise: "bg-warm-500/10 text-warm-400 border-warm-500/20",
  Production: "bg-steel-500/10 text-steel-400 border-steel-500/20",
  Development: "bg-charcoal-600/30 text-offwhite-400 border-charcoal-600/40",
};

const TechCard = ({
  category,
  index,
  isActive,
  onHover,
  onLeave,
}: {
  category: (typeof techCategories)[0];
  index: number;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}) => {
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative group cursor-pointer transition-all duration-300 ${
        isActive ? "scale-[1.02]" : "hover:scale-[1.01]"
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Card Background */}
      <div
        className={`
        relative p-6 rounded-xl border backdrop-blur-sm transition-all duration-300
        ${
          isActive
            ? `bg-charcoal-800/50 ${category.borderColor} shadow-lg`
            : "bg-charcoal-900/30 border-warm-700/30 hover:border-warm-600/40 hover:bg-charcoal-800/40"
        }
      `}
      >
        {/* Category Header */}
        <div className="flex items-start gap-4 mb-6">
          <div
            className={`
            w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300
            ${
              isActive
                ? `bg-gradient-to-r ${category.color}`
                : `${category.bgColor} group-hover:scale-110`
            }
          `}
          >
            <Icon
              className={`w-6 h-6 ${
                isActive ? "text-offwhite-100" : "text-steel-400"
              }`}
            />
          </div>

          <div className="flex-1">
            <h3
              className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                isActive
                  ? "text-offwhite-100"
                  : "text-offwhite-200 group-hover:text-offwhite-100"
              }`}
            >
              {category.title}
            </h3>
            <p
              className={`text-sm leading-relaxed transition-colors duration-300 ${
                isActive
                  ? "text-offwhite-400"
                  : "text-offwhite-500 group-hover:text-offwhite-400"
              }`}
            >
              {category.description}
            </p>
          </div>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 gap-3">
          {category.technologies.map((tech, techIndex) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + techIndex * 0.05 }}
              className={`
                relative p-3 rounded-lg border transition-all duration-300
                ${
                  isActive
                    ? "bg-charcoal-900/40 border-warm-700/20 hover:bg-charcoal-800/50"
                    : "bg-charcoal-900/30 border-warm-700/20 hover:bg-charcoal-800/40 hover:border-warm-600/30"
                }
              `}
            >
              <div className="flex flex-col gap-2">
                <span
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isActive ? "text-offwhite-100" : "text-offwhite-200"
                  }`}
                >
                  {tech.name}
                </span>

                <span
                  className={`
                    text-xs px-2 py-0.5 rounded-full border transition-all duration-300
                    ${tierColors[tech.tier as keyof typeof tierColors]}
                  `}
                >
                  {tech.tier}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleGetStarted = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleViewWork = () => {
    const casesSection = document.querySelector("[data-section='cases']");
    if (casesSection) {
      casesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-charcoal-900 to-charcoal-950 relative overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-steel-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-warm-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-charcoal-800/40 border border-warm-700/30 rounded-full text-sm text-steel-400 mb-6">
            <Sparkles className="w-4 h-4" />
            Technology Stack
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold text-offwhite-100 mb-6">
            Built with{" "}
            <span className="gradient-text">
              enterprise-grade technology
            </span>
          </h2>

          <p className="text-lg text-offwhite-400 max-w-3xl mx-auto">
            We leverage the latest technologies and proven frameworks to build
            scalable, secure, and high-performance solutions for enterprise clients.
          </p>
        </motion.div>

        {/* Technology Categories Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {techCategories.map((category, index) => (
            <TechCard
              key={category.id}
              category={category}
              index={index}
              isActive={activeCategory === category.id}
              onHover={() => setActiveCategory(category.id)}
              onLeave={() => setActiveCategory(null)}
            />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {[
            {
              icon: Cpu,
              label: "Technologies",
              value: "30+",
              color: "text-steel-400",
            },
            {
              icon: Shield,
              label: "Enterprise Grade",
              value: "100%",
              color: "text-warm-400",
            },
            {
              icon: Activity,
              label: "Uptime SLA",
              value: "99.9%",
              color: "text-steel-300",
            },
            {
              icon: Globe,
              label: "Global Scale",
              value: "15+",
              color: "text-warm-300",
            },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center bg-charcoal-900/30 backdrop-blur-sm rounded-xl p-6 border border-warm-700/30">
                <div className="w-12 h-12 bg-charcoal-800/50 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-2xl font-bold text-offwhite-100 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-offwhite-400">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="bg-charcoal-900/60 backdrop-blur-xl rounded-2xl p-8 border border-warm-700/20">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4 text-offwhite-100">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-offwhite-400 text-lg mb-8">
                Let's discuss how these technologies can transform your business
                and deliver exceptional results for your users.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleGetStarted}
                  className="btn-primary"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Start Your Project
                </Button>
                <Button
                  onClick={handleViewWork}
                  className="btn-secondary"
                >
                  View Our Work
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
