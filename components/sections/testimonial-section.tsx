"use client";

import { motion } from "framer-motion";
import { Star, Quote, CheckCircle } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  company: string;
  companySize: string;
  industry: string;
  projectType: string;
  outcome: string;
  rating: number;
  avatarUrl?: string;
  companyLogo?: string;
}

export function TestimonialSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote:
        "Scageon transformed our data infrastructure in just 4 months. Their team understood our manufacturing challenges and delivered a solution that gives us real-time visibility across all our production lines. The ROI was immediate.",
      author: "Sarah Johnson",
      position: "VP of Operations",
      company: "MidWest Manufacturing",
      companySize: "500+ employees",
      industry: "Manufacturing",
      projectType: "Data Warehouse & Analytics",
      outcome: "40% reduction in reporting time",
      rating: 5,
      avatarUrl: "/testimonials/sarah-j.jpg",
    },
    {
      id: 2,
      quote:
        "Working with Scageon was refreshingly different. They didn't oversell us on AI we didn't need. Instead, they focused on solving our actual business problems with practical data solutions. The predictive maintenance system they built has saved us hundreds of thousands in equipment downtime.",
      author: "Michael Chen",
      position: "CTO",
      company: "Regional Healthcare Systems",
      companySize: "200+ employees",
      industry: "Healthcare",
      projectType: "Predictive Analytics Platform",
      outcome: "25% improvement in resource utilization",
      rating: 5,
      avatarUrl: "/testimonials/michael-c.jpg",
    },
    {
      id: 3,
      quote:
        "The team at Scageon delivered exactly what they promised, on time and within budget. Their technical expertise combined with clear communication made the entire cloud migration process smooth. Our new platform handles 10x the transaction volume with better performance.",
      author: "Lisa Rodriguez",
      position: "Head of Technology",
      company: "Financial Services Group",
      companySize: "150+ employees",
      industry: "Financial Services",
      projectType: "Cloud Migration & Modernization",
      outcome: "60% faster transaction processing",
      rating: 5,
      avatarUrl: "/testimonials/lisa-r.jpg",
    },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-green-500/5 to-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
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
            Client Testimonials
          </motion.span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Built with{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Precision
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Backed by those who know the value of reliable, results-driven
            solutions
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative"
            >
              <div className="bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:bg-white/5 hover:border-white/10 transition-all duration-300 h-full">
                {/* Quote Icon */}
                <div className="flex items-start justify-between mb-4">
                  <Quote className="w-8 h-8 text-green-400 flex-shrink-0" />
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-gray-300 leading-relaxed mb-6 text-sm">
                  {testimonial.quote}
                </blockquote>

                {/* Author Info */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm">
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-sm">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-400 text-xs">
                      {testimonial.position}
                    </p>
                    <p className="text-green-400 text-xs font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-2 mb-4 pt-4 border-t border-white/5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">Industry:</span>
                    <span className="text-gray-400">
                      {testimonial.industry}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">Project:</span>
                    <span className="text-gray-400">
                      {testimonial.projectType}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">Company Size:</span>
                    <span className="text-gray-400">
                      {testimonial.companySize}
                    </span>
                  </div>
                </div>

                {/* Outcome Highlight */}
                <div className="bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm font-medium text-green-400">
                      {testimonial.outcome}
                    </span>
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="text-center bg-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="grid md:grid-cols-4 gap-8 items-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-400 text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-gray-400 text-sm">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">6x</div>
              <div className="text-gray-400 text-sm">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
              <div className="text-gray-400 text-sm">On-Time Delivery</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
