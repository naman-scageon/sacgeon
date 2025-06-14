"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Define technology categories with their tools
const techCategories = {
  "AI & ML": [
    "Anthropic", "OpenAI", "Ollama", "Langchain", "TensorFlow", "PyTorch"
  ],
  "Data & Analytics": [
    "Apache Spark", "Apache Flink", "Apache Airflow", "PostgreSQL", "MongoDB", "Elasticsearch"
  ],
  "Cloud & DevOps": [
    "Docker", "Kubernetes", "AWS", "Azure", "GCP", "Terraform"
  ],
  "Programming": [
    "Python", "JavaScript", "Go", "Java", "TypeScript", "Rust"
  ],
  "Frameworks": [
    "React", "Next.js", "Flask", "FastAPI", "Node.js", "Express"
  ]
};

export function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section id="tech-stack" className="py-24 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-green-500/5 to-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
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
            Tech Stack
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get to know about the{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Technology we use
            </span>
          </h2>
        </motion.div>

        {/* Technology Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(techCategories).map(([category, technologies], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
              className="group"
              onMouseEnter={() => setActiveCategory(category)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div className={`
                p-6 rounded-2xl border transition-all duration-500
                ${activeCategory === category 
                  ? 'bg-white/5 border-white/20 backdrop-blur-sm scale-105' 
                  : 'bg-white/[0.02] border-white/5 hover:bg-white/5'
                }
              `}>
                <h3 className={`text-xl font-bold mb-6 transition-colors duration-500 ${
                  activeCategory === category ? 'text-white' : 'text-gray-200 group-hover:text-white'
                }`}>
                  {category}
                </h3>
                
                <div className="grid grid-cols-2 gap-3">
                  {technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + techIndex * 0.05 }}
                      className={`
                        p-3 rounded-lg text-center transition-all duration-300
                        ${activeCategory === category 
                          ? 'bg-gradient-to-r from-green-400/20 to-blue-400/20 text-white' 
                          : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                        }
                      `}
                    >
                      <span className="text-sm font-medium">{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-gray-400 mb-6">
            Ready to leverage these technologies for your business?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-400 to-blue-400 text-black font-semibold rounded-full hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300"
          >
            Discuss Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
