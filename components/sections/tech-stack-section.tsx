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

// Define technology categories with their tools and metadata
const techCategories = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description:
      "Advanced AI models and ML frameworks for intelligent solutions",
    icon: Brain,
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/20",
    technologies: [
      { name: "Anthropic Claude", type: "LLM", tier: "Enterprise" },
      { name: "OpenAI GPT", type: "LLM", tier: "Production" },
      { name: "Ollama", type: "Local LLM", tier: "Development" },
      { name: "LangChain", type: "Framework", tier: "Production" },
      { name: "TensorFlow", type: "ML Framework", tier: "Production" },
      { name: "PyTorch", type: "Deep Learning", tier: "Production" },
    ],
  },
  {
    id: "data-analytics",
    title: "Data & Analytics",
    description: "Scalable data processing and real-time analytics platforms",
    icon: Database,
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    technologies: [
      { name: "Apache Spark", type: "Big Data", tier: "Enterprise" },
      { name: "Apache Flink", type: "Stream Processing", tier: "Production" },
      { name: "Apache Airflow", type: "Orchestration", tier: "Production" },
      { name: "PostgreSQL", type: "Database", tier: "Production" },
      { name: "MongoDB", type: "NoSQL", tier: "Production" },
      { name: "Elasticsearch", type: "Search Engine", tier: "Production" },
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    description: "Modern cloud infrastructure and deployment automation",
    icon: Cloud,
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    technologies: [
      { name: "Docker", type: "Containerization", tier: "Production" },
      { name: "Kubernetes", type: "Orchestration", tier: "Enterprise" },
      { name: "AWS", type: "Cloud Platform", tier: "Enterprise" },
      { name: "Azure", type: "Cloud Platform", tier: "Enterprise" },
      { name: "GCP", type: "Cloud Platform", tier: "Production" },
      { name: "Terraform", type: "IaC", tier: "Production" },
    ],
  },
  {
    id: "programming",
    title: "Programming Languages",
    description: "Modern programming languages for enterprise applications",
    icon: Code,
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    technologies: [
      { name: "Python", type: "Backend", tier: "Production" },
      { name: "TypeScript", type: "Full Stack", tier: "Production" },
      { name: "Go", type: "Backend", tier: "Production" },
      { name: "Rust", type: "Systems", tier: "Development" },
      { name: "Java", type: "Enterprise", tier: "Enterprise" },
      { name: "JavaScript", type: "Frontend", tier: "Production" },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks & Libraries",
    description: "Modern frameworks for rapid application development",
    icon: Layers,
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/20",
    technologies: [
      { name: "Next.js", type: "React Framework", tier: "Production" },
      { name: "React", type: "Frontend", tier: "Production" },
      { name: "FastAPI", type: "Python API", tier: "Production" },
      { name: "Node.js", type: "Runtime", tier: "Production" },
      { name: "Flask", type: "Python Web", tier: "Development" },
      { name: "Express", type: "Node.js Web", tier: "Production" },
    ],
  },
];

const tierColors = {
  Enterprise:
    "bg-gradient-to-r from-yellow-400/20 to-amber-400/20 text-yellow-300 border-yellow-400/30",
  Production:
    "bg-gradient-to-r from-green-400/20 to-emerald-400/20 text-green-300 border-green-400/30",
  Development:
    "bg-gradient-to-r from-blue-400/20 to-cyan-400/20 text-blue-300 border-blue-400/30",
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
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative group cursor-pointer transition-all duration-500 ${
        isActive ? "scale-105" : "hover:scale-[1.02]"
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Card Background */}
      <div
        className={`
        relative p-6 rounded-2xl border backdrop-blur-sm transition-all duration-500
        ${
          isActive
            ? `bg-slate-800/60 ${category.borderColor} shadow-2xl`
            : "bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600/50"
        }
      `}
      >
        {/* Category Header */}
        <div className="flex items-start gap-4 mb-6">
          <div
            className={`
            w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500
            ${
              isActive
                ? `bg-gradient-to-r ${category.color} shadow-lg`
                : `${category.bgColor} group-hover:scale-110`
            }
          `}
          >
            <Icon
              className={`w-6 h-6 ${
                isActive ? "text-white" : "text-slate-400"
              }`}
            />
          </div>

          <div className="flex-1">
            <h3
              className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                isActive
                  ? "text-white"
                  : "text-slate-300 group-hover:text-white"
              }`}
            >
              {category.title}
            </h3>
            <p
              className={`text-sm leading-relaxed transition-colors duration-300 ${
                isActive
                  ? "text-slate-300"
                  : "text-slate-500 group-hover:text-slate-400"
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
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + techIndex * 0.05 }}
              className={`
                relative p-3 rounded-lg border transition-all duration-300
                ${
                  isActive
                    ? "bg-slate-700/50 border-slate-600/50 hover:bg-slate-700/70"
                    : "bg-slate-800/50 border-slate-700/30 hover:bg-slate-700/50 hover:border-slate-600/50"
                }
              `}
            >
              <div className="flex flex-col gap-2">
                <span
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isActive ? "text-white" : "text-slate-300"
                  }`}
                >
                  {tech.name}
                </span>

                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs transition-colors duration-300 ${
                      isActive ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {tech.type}
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
              </div>
            </motion.div>
          ))}
        </div>

        {/* Glow Effect for Active Card */}
        {isActive && (
          <div
            className={`
            absolute inset-0 rounded-2xl opacity-20 blur-xl -z-10
            bg-gradient-to-r ${category.color}
          `}
          />
        )}
      </div>
    </motion.div>
  );
};

export function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-emerald-500/5 via-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.2) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/60 backdrop-blur-sm rounded-full text-sm text-slate-300 mb-6 border border-slate-700/50">
            <Sparkles className="w-4 h-4 text-violet-400" />
            Technology Stack
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Built with{" "}
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Modern Technologies
            </span>
          </h2>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            We leverage cutting-edge technologies and frameworks to build
            scalable, secure, and high-performance solutions for enterprise
            clients.
          </p>
        </motion.div>

        {/* Technology Categories Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
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
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {[
            {
              icon: Cpu,
              label: "Technologies",
              value: "30+",
              color: "text-violet-400",
            },
            {
              icon: Shield,
              label: "Enterprise Grade",
              value: "100%",
              color: "text-blue-400",
            },
            {
              icon: Activity,
              label: "Uptime SLA",
              value: "99.9%",
              color: "text-emerald-400",
            },
            {
              icon: Globe,
              label: "Global CDN",
              value: "15+",
              color: "text-orange-400",
            },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center mx-auto mb-3 border border-slate-700/50">
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
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
          <div className="bg-gradient-to-r from-slate-800/60 to-slate-700/60 backdrop-blur-sm rounded-3xl p-10 border border-slate-600/50">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-slate-400 text-lg mb-8">
                Let&apos;s discuss how these technologies can transform your
                business and deliver exceptional results for your users.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300">
                  <Zap className="w-5 h-5" />
                  Start Your Project
                </button>
                <button className="inline-flex items-center gap-2 bg-slate-800/80 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold border border-slate-600/50 hover:bg-slate-700/80 transition-all duration-300">
                  View Our Work
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
