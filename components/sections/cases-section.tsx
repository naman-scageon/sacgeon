"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Building2, TrendingUp, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { casesSection } from "@/constants/site-data";

interface CasesSectionProps {
  className?: string;
}

export function CasesSection({ className }: CasesSectionProps) {
  const { headline, highlightedHeadline, cases } = casesSection;

  return (
    <section className={cn("py-24 bg-black relative overflow-hidden", className)}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-green-500/5 to-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300 tracking-wider mb-6"
          >
            Client Success Stories
          </motion.span>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {headline}{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              {highlightedHeadline}
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real projects, measurable results. See how we've helped businesses transform their operations through data and AI solutions.
          </p>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative"
            >
              <div className="bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:bg-white/5 hover:border-white/10 transition-all duration-300 h-full">
                {/* Case Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">
                        {caseStudy.title}
                      </h3>
                      <p className="text-sm text-gray-400">{caseStudy.client}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    {caseStudy.timeline}
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-red-400 mb-2">Challenge</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {caseStudy.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Solution</h4>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {caseStudy.solution}
                    </p>
                  </div>
                </div>

                {/* Impact Highlight */}
                <div className="bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-sm font-semibold text-white">Key Impact</span>
                  </div>
                  <p className="text-lg font-bold text-green-400">
                    {caseStudy.impact}
                  </p>
                </div>

                {/* Technologies Used */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-white/10 text-xs text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-green-400 hover:text-green-300 p-0 h-auto font-medium group/btn"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    <span>Completed</span>
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
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
          <div className="bg-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/5 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Join these successful companies who have transformed their operations with our data and AI solutions. Let's discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-green-400 to-blue-400 text-black font-semibold hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300">
                Start Your Project
              </Button>
              <Button 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10"
              >
                Download Case Studies
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
