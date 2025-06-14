"use client";

import { motion } from "framer-motion";
import { Database, Brain, Zap, ArrowRight, TrendingUp, BarChart3, CheckCircle, Clock, DollarSign } from "lucide-react";
import { useState } from "react";
import { servicesSection } from "@/constants/site-data";

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
  deliverables?: Array<string>;
  outcomes?: Array<string>;
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
  const { headline, highlightedHeadline, tagline } = servicesSection;

  const services: Service[] = [
    {
      id: "data-services",
      title: "Data Services",
      description: "Modernize your data infrastructure with proven methodologies. We help enterprises consolidate, migrate, and optimize their data platforms for better decision-making and operational efficiency.",
      icon: Database,
      deliverables: [
        "Data Strategy & Assessment",
        "Cloud Migration Planning",
        "Data Warehouse Implementation", 
        "ETL/ELT Pipeline Development",
        "Business Intelligence Dashboards"
      ],
      outcomes: [
        "40% faster reporting cycles",
        "60% reduction in data processing costs",
        "Single source of truth across systems"
      ],
      subServices: [
        {
          title: "Data Strategy Development",
          description: "Comprehensive assessment and roadmap for data modernization aligned with business goals"
        },
        {
          title: "Cloud Data Migration",
          description: "Seamless migration of on-premise data to AWS, Azure, or GCP with zero downtime"
        },
        {
          title: "Analytics Implementation",
          description: "End-to-end business intelligence solutions with real-time dashboards and reporting"
        }
      ],
      metrics: [
        { label: "Data Processing Speed", value: 85, color: "from-blue-500 to-cyan-400" },
        { label: "Cost Optimization", value: 60, color: "from-cyan-400 to-blue-500" },
        { label: "System Reliability", value: 96, color: "from-blue-600 to-indigo-500" }
      ]
    },
    {
      id: "ai-engineering",
      title: "AI Engineering",
      description: "Practical AI implementations that solve real business problems. From chatbots to predictive analytics, we build AI systems that integrate seamlessly with your existing operations.",
      icon: Brain,
      deliverables: [
        "AI Readiness Assessment",
        "Custom Model Development",
        "MLOps Pipeline Setup",
        "AI Chatbot Implementation",
        "Predictive Analytics Models"
      ],
      outcomes: [
        "85% improvement in prediction accuracy",
        "50% automation of manual processes",
        "Real-time intelligent decision making"
      ],
      subServices: [
        {
          title: "AI Strategy & Consulting",
          description: "Identify high-impact AI opportunities and create practical implementation roadmaps"
        },
        {
          title: "Custom AI Model Development",
          description: "Build and train domain-specific models for your unique business challenges"
        },
        {
          title: "NLP & Chatbot Development",
          description: "Deploy conversational AI systems and intelligent document processing"
        },
        {
          title: "MLOps & Model Management",
          description: "Automate model deployment, monitoring, and continuous improvement"
        }
      ],
      metrics: [
        { label: "Model Accuracy", value: 94, color: "from-purple-500 to-pink-400" },
        { label: "Process Automation", value: 88, color: "from-pink-400 to-red-400" },
        { label: "Implementation Success", value: 97, color: "from-purple-600 to-indigo-500" }
      ]
    },
    {
      id: "application-services",
      title: "Application Services",
      description: "Modernize legacy systems and build scalable cloud-native applications. We specialize in API development, system integration, and application architecture that grows with your business.",
      icon: Zap,
      deliverables: [
        "Legacy System Assessment",
        "Cloud-Native Development",
        "API Design & Integration",
        "Microservices Architecture",
        "Performance Optimization"
      ],
      outcomes: [
        "70% improvement in system performance",
        "99.9% application uptime",
        "Scalable, future-ready architecture"
      ],
      subServices: [
        {
          title: "Legacy System Modernization",
          description: "Systematic approach to migrating and updating outdated systems"
        },
        {
          title: "Cloud-Native Development",
          description: "Build applications designed for cloud scalability and resilience"
        },
        {
          title: "API & Integration Services",
          description: "Connect systems with robust APIs and seamless third-party integrations"
        }
      ],
      metrics: [
        { label: "Performance Improvement", value: 89, color: "from-green-500 to-emerald-400" },
        { label: "System Uptime", value: 99, color: "from-emerald-400 to-teal-400" },
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
            Our Services
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {headline}{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              {highlightedHeadline}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {tagline}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
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

                  {/* Deliverables and Outcomes */}
                  {service.deliverables && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: isActive ? 'auto' : 0, 
                        opacity: isActive ? 1 : 0 
                      }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-6 pt-6 border-t border-white/10">
                        {/* Key Deliverables */}
                        <div>
                          <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            Key Deliverables
                          </h4>
                          <div className="space-y-2">
                            {service.deliverables.map((deliverable, dIndex) => (
                              <motion.div 
                                key={dIndex} 
                                className="flex items-start gap-2 text-sm text-gray-400"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -10 }}
                                transition={{ delay: dIndex * 0.05 }}
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                                <span>{deliverable}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Business Outcomes */}
                        {service.outcomes && (
                          <div>
                            <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                              <TrendingUp className="w-4 h-4 text-blue-400" />
                              Expected Outcomes
                            </h4>
                            <div className="space-y-2">
                              {service.outcomes.map((outcome, oIndex) => (
                                <motion.div 
                                  key={oIndex} 
                                  className="flex items-start gap-2 text-sm font-medium text-green-400"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -10 }}
                                  transition={{ delay: oIndex * 0.05 }}
                                >
                                  <TrendingUp className="w-3 h-3 mt-0.5 flex-shrink-0" />
                                  <span>{outcome}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        )}
                        
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

        {/* Bottom CTA Section */}
        <motion.div
          className="text-center bg-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Get a free consultation to discuss your specific needs and learn how our proven methodologies can help your organization achieve measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-400 to-blue-400 text-black font-semibold rounded-full hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300"
            >
              <Clock className="w-5 h-5" />
              Schedule Free Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300"
            >
              <DollarSign className="w-5 h-5" />
              Get Project Estimate
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
