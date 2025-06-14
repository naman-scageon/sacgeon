"use client";

import { motion } from "framer-motion";
import { Database, Brain, Zap, ArrowRight, TrendingUp, BarChart3, Layers } from "lucide-react";
import { useState } from "react";

// Performance metrics visualization component
const MetricsVisualization = ({ metrics, isActive }: { metrics: any[], isActive: boolean }) => {
  return (
    <div className="mt-6 space-y-3">
      {metrics.map((metric, index) => (
        <div key={index} className="flex items-center justify-between">
          <span className="text-sm text-gray-400">{metric.label}</span>
          <div className="flex items-center gap-2">
            <div className="w-20 h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className={`h-full bg-gradient-to-r ${metric.color} rounded-full`}
                initial={{ width: 0 }}
                animate={{ width: isActive ? `${metric.value}%` : 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              />
            </div>
            <span className="text-sm font-medium text-white min-w-[3rem] text-right">
              {isActive ? `${metric.value}%` : '0%'}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
  subServices?: Array<{
    title: string;
    description: string;
  }>;
  metrics?: Array<{
    label: string;
    value: number;
    color: string;
  }>;
}

export function ServicesSection() {
  const [activeService, setActiveService] = useState<string | null>(null);

  const services: Service[] = [
    {
      id: "data-services",
      title: "Data Services",
      description: "Transform raw data into strategic assets with our comprehensive data engineering and analytics solutions.",
      icon: Database,
      subServices: [
        {
          title: "Data Strategy & Architecture",
          description: "Design scalable data ecosystems aligned with business objectives"
        },
        {
          title: "Data Engineering & Pipelines",
          description: "Build robust ETL/ELT processes for real-time data processing"
        },
        {
          title: "Advanced Analytics & BI",
          description: "Create interactive dashboards and predictive analytics models"
        }
      ],
      metrics: [
        { label: "Data Processing Speed", value: 85, color: "from-blue-500 to-cyan-400" },
        { label: "Analytics Accuracy", value: 92, color: "from-cyan-400 to-blue-500" },
        { label: "Pipeline Reliability", value: 96, color: "from-blue-600 to-indigo-500" }
      ]
    },
    {
      id: "ai-engineering",
      title: "AI Engineering",
      description: "Harness the power of artificial intelligence with custom models and intelligent automation solutions.",
      icon: Brain,
      subServices: [
        {
          title: "AI Strategy & Consulting",
          description: "Identify AI opportunities and create implementation roadmaps"
        },
        {
          title: "Custom AI Model Development",
          description: "Build domain-specific models for your unique challenges"
        },
        {
          title: "NLP & Generative AI",
          description: "Deploy conversational AI and content generation systems"
        },
        {
          title: "MLOps & Model Management",
          description: "Automate model deployment, monitoring, and optimization"
        }
      ],
      metrics: [
        { label: "Model Accuracy", value: 94, color: "from-purple-500 to-pink-400" },
        { label: "Training Efficiency", value: 88, color: "from-pink-400 to-red-400" },
        { label: "Deployment Success", value: 97, color: "from-purple-600 to-indigo-500" }
      ]
    },
    {
      id: "application-services",
      title: "Application Services",
      description: "Accelerate digital transformation with modern, scalable applications built for tomorrow's challenges.",
      icon: Zap,
      subServices: [
        {
          title: "Modern App Development",
          description: "Build cloud-native applications with microservices architecture"
        },
        {
          title: "Legacy System Modernization",
          description: "Migrate and transform outdated systems to modern platforms"
        },
        {
          title: "API & Integration Services",
          description: "Connect systems with robust APIs and integration platforms"
        }
      ],
      metrics: [
        { label: "Development Speed", value: 89, color: "from-green-500 to-emerald-400" },
        { label: "System Performance", value: 93, color: "from-emerald-400 to-teal-400" },
        { label: "Migration Success", value: 91, color: "from-green-600 to-cyan-500" }
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
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
            Services
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Accelerate your{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Digital Transformation
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Unlock the power of data and AI to transform your business operations, enhance decision-making, and drive sustainable growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeService === service.id;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group relative"
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className={`
                  relative p-8 rounded-2xl border transition-all duration-500
                  ${isActive 
                    ? 'bg-white/5 border-white/20 backdrop-blur-sm scale-105' 
                    : 'bg-white/[0.02] border-white/5 hover:bg-white/5'
                  }
                `}>
                  {/* Service Icon */}
                  <div className={`
                    inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 transition-all duration-500
                    ${isActive 
                      ? 'bg-gradient-to-r from-green-400 to-blue-400' 
                      : 'bg-white/5 group-hover:bg-white/10'
                    }
                  `}>
                    <Icon className={`w-8 h-8 transition-colors duration-500 ${
                      isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'
                    }`} />
                  </div>

                  {/* Service Content */}
                  <h3 className={`text-2xl font-bold mb-4 transition-colors duration-500 ${
                    isActive ? 'text-white' : 'text-gray-200 group-hover:text-white'
                  }`}>
                    {service.title}
                  </h3>
                  
                  <p className={`text-base leading-relaxed mb-6 transition-colors duration-500 ${
                    isActive ? 'text-gray-300' : 'text-gray-400'
                  }`}>
                    {service.description}
                  </p>

                  {/* Sub-services and Metrics */}
                  {service.subServices && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: isActive ? 'auto' : 0, 
                        opacity: isActive ? 1 : 0 
                      }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-4 pt-6 border-t border-white/10">
                        {/* Sub-services */}
                        <div className="space-y-3">
                          {service.subServices.map((subService, subIndex) => (
                            <motion.div 
                              key={subIndex} 
                              className="flex items-start gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/5"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -10 }}
                              transition={{ delay: subIndex * 0.1 }}
                            >
                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-blue-400 mt-2 flex-shrink-0" />
                              <div className="flex-1">
                                <h4 className="text-sm font-semibold text-white mb-1">
                                  {subService.title}
                                </h4>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                  {subService.description}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* Performance Metrics */}
                        {service.metrics && (
                          <div className="pt-4 border-t border-white/5">
                            <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                              <BarChart3 className="w-4 h-4" />
                              Performance Metrics
                            </h4>
                            <MetricsVisualization metrics={service.metrics} isActive={isActive} />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* CTA */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="group/btn inline-flex items-center gap-2 text-sm font-medium text-green-400 hover:text-green-300 transition-colors mt-6"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>

                  {/* Hover effect */}
                  <div className={`
                    absolute inset-0 rounded-2xl transition-all duration-500 pointer-events-none
                    ${isActive ? 'shadow-lg shadow-green-400/10' : ''}
                  `} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
