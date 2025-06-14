"use client";

import { motion } from "framer-motion";
import { aboutSection } from "@/constants/site-data";
import Image from "next/image";

export function AboutSection() {
  const { title, img } = aboutSection;

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-gradient-to-r from-green-400/3 to-blue-400/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/2 right-1/3 w-96 h-96 bg-gradient-to-r from-purple-400/3 to-pink-400/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Partnership Statement */}
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
              Trusted Partners
            </motion.span>
            
            <p className="text-xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
              {title}
            </p>

            {/* Partner logos with cleaner presentation */}
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
              {img.map((imageSrc, index) => (
                <motion.div 
                  key={index} 
                  className="relative h-10 w-28 opacity-40 hover:opacity-80 transition-opacity duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0.4, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1, opacity: 0.8 }}
                >
                  <Image
                    src={imageSrc}
                    alt={`Partner ${index + 1}`}
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    priority={index === 0}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Company Mission */}
          <motion.div 
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                We drive digital transformation through 
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  intelligent solutions
                </span>
              </h2>
              
              <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto" />
              
              <div className="grid md:grid-cols-3 gap-8 mt-16">
                <motion.div 
                  className="p-8 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-white/5 hover:bg-white/5 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h3 className="text-xl font-semibold text-white mb-4">Data-Driven</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Transform raw data into strategic assets with advanced analytics and AI-powered insights.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="p-8 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-white/5 hover:bg-white/5 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <h3 className="text-xl font-semibold text-white mb-4">AI-Powered</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Leverage cutting-edge artificial intelligence to automate processes and enhance decision-making.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="p-8 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-white/5 hover:bg-white/5 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <h3 className="text-xl font-semibold text-white mb-4">Future-Ready</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Build scalable, modern applications that adapt and grow with your business needs.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
