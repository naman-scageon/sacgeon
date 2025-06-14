"use client";

import { motion } from "framer-motion";
import { aboutSection } from "@/constants/site-data";
import Image from "next/image";
import { Users, Award, Target, Zap, Shield, Clock } from "lucide-react";

export function AboutSection() {
  const { title, subTitle, description, img } = aboutSection;

  const capabilities = [
    {
      icon: Target,
      title: "Strategic Approach",
      description: "We focus on high-impact initiatives that deliver measurable business outcomes, not just technology implementations."
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Our proven methodologies enable faster project delivery - weeks instead of months for most implementations."
    },
    {
      icon: Shield,
      title: "Enterprise-Grade",
      description: "Security, compliance, and scalability built into every solution we deliver for mid-market and enterprise clients."
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "6x", label: "Average ROI" },
    { number: "24/7", label: "Support Coverage" }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-gradient-to-r from-green-400/3 to-blue-400/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/2 right-1/3 w-96 h-96 bg-gradient-to-r from-purple-400/3 to-pink-400/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Company Introduction */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300 tracking-wider mb-8"
            >
              About Scageon
            </motion.span>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
              {subTitle}
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              {title}
            </p>

            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-12" />
            
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </motion.div>

          {/* Key Capabilities */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <motion.div 
                  key={index}
                  className="text-center p-8 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-white/5 hover:bg-white/5 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{capability.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{capability.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="bg-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/5 mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Proven Track Record</h3>
              <p className="text-gray-400">Numbers that speak to our commitment to client success</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Partner Logos */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300 tracking-wider mb-8"
            >
              Technology Partners
            </motion.span>
            
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
              We work with industry-leading technology partners to deliver best-in-class solutions
            </p>

            {/* Partner logos with cleaner presentation */}
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
              {img.map((imageSrc, index) => (
                <motion.div 
                  key={index} 
                  className="relative h-10 w-28 opacity-40 hover:opacity-80 transition-opacity duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0.4, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1, opacity: 0.8 }}
                >
                  <Image
                    src={imageSrc}
                    alt={`Technology Partner ${index + 1}`}
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    priority={index === 0}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <div className="bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Work with Scageon?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Let's discuss how our expertise can help your organization achieve its data and AI transformation goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-400 to-blue-400 text-black font-semibold rounded-full hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300"
                >
                  <Users className="w-5 h-5" />
                  Meet Our Team
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  <Award className="w-5 h-5" />
                  View Our Work
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
