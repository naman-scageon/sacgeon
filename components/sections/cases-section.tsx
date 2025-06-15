"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight,
  Activity,
  MessageSquare,
  Database,
  Zap,
  Users,
  Target,
  BarChart3,
  Shield,
  Globe,
  ExternalLink,
} from "lucide-react";
import { Button } from "../ui/button";

interface CasesSectionProps {
  className?: string;
}

// Simplified case studies
const caseStudies = [
  {
    id: "healthcare-platform",
    title: "Healthcare Command Centre",
    client: "Healthcare Services - Middle East",
    industry: "Healthcare",
    timeline: "12 months",
    category: "Data Intelligence & AI",
    icon: Activity,
    color: "from-blue-500 to-cyan-400",
    overview:
      "Mission-critical decision support platform optimizing hospital operations across a chain of facilities.",
    challenge:
      "Fragmented data across multiple systems causing inefficient resource allocation and suboptimal patient flow.",
    solution:
      "Comprehensive healthcare data platform with AI-driven decision management and real-time analytics.",
    results: [
      {
        metric: "Staff Productivity",
        value: "+20%",
        description: "Increased efficiency across all departments",
      },
      {
        metric: "Operational Excellence",
        value: "Multiple Areas",
        description: "Bed capacity, patient flow, discharge planning optimized",
      },
    ],
    technologies: ["Apache Spark", "MongoDB", "Python", "React", "GCP"],
  },
  {
    id: "messaging-platform",
    title: "Digital Marketing Platform",
    client: "Marketing Major - South-East Asia",
    industry: "Digital Marketing",
    timeline: "8 months",
    category: "Cloud Platform & Automation",
    icon: MessageSquare,
    color: "from-purple-500 to-pink-400",
    overview:
      "Next-generation messaging platform enabling large-scale personalized marketing campaigns.",
    challenge:
      "Need for scalable messaging with real-time personalization, compliance, and advanced analytics.",
    solution:
      "Cloud-native messaging platform with automated workflows, AI integration, and comprehensive analytics.",
    results: [
      {
        metric: "Platform Availability",
        value: ">99.5%",
        description: "Enterprise-grade reliability achieved",
      },
      {
        metric: "Performance",
        value: "5 TPS → 800 TPS",
        description: "160x performance enhancement",
      },
    ],
    technologies: ["Kafka", "Python", "Node.js", "AWS", "PostgreSQL"],
  },
];

export function CasesSection({ className }: CasesSectionProps) {
  const handleViewCase = () => {
    // In a real app, this would navigate to detailed case study
    console.log("View full case study");
  };

  const handleGetStarted = () => {
    const closingSection = document.querySelector("[data-section='closing']");
    if (closingSection) {
      closingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="cases"
      data-section="cases"
      className={cn(
        "py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden",
        className
      )}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-emerald-100 to-cyan-100 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full text-sm text-emerald-700 mb-6">
            <Target className="w-4 h-4" />
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
            Transforming businesses with
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              {" "}
              measurable impact
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Real projects, quantifiable outcomes. See how we've helped industry
            leaders achieve breakthrough results through strategic
            implementation.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((caseStudy, index) => {
            const Icon = caseStudy.icon;

            return (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Header */}
                <div className="p-6 border-b border-slate-100">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${caseStudy.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded-full">
                          {caseStudy.industry}
                        </span>
                        <span className="text-xs text-slate-500">•</span>
                        <span className="text-xs text-slate-500">
                          {caseStudy.timeline}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-1">
                        {caseStudy.title}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {caseStudy.client}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {caseStudy.overview}
                  </p>

                  {/* Challenge & Solution */}
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-red-50 rounded-lg p-4 border border-red-100">
                      <h4 className="text-sm font-semibold text-red-700 mb-2 flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        Challenge
                      </h4>
                      <p className="text-sm text-red-600 leading-relaxed">
                        {caseStudy.challenge}
                      </p>
                    </div>
                    <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
                      <h4 className="text-sm font-semibold text-emerald-700 mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Solution
                      </h4>
                      <p className="text-sm text-emerald-600 leading-relaxed">
                        {caseStudy.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-blue-600" />
                      Key Results
                    </h4>
                    <div className="space-y-3">
                      {caseStudy.results.map((result, rIndex) => (
                        <div
                          key={rIndex}
                          className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100"
                        >
                          <div className="flex-shrink-0">
                            <div className="text-lg font-bold text-blue-700">
                              {result.value}
                            </div>
                            <div className="text-xs text-blue-600">
                              {result.metric}
                            </div>
                          </div>
                          <div className="text-sm text-blue-600">
                            {result.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-900 mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.technologies.map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <Button
                      onClick={handleViewCase}
                      variant="outline"
                      className="text-sm"
                    >
                      View Details
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Clock className="w-4 h-4" />
                      <span>{caseStudy.timeline}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
              Join industry leaders who have transformed their operations with
              our proven approach. Let's discuss how we can deliver similar
              results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleGetStarted}
                className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 font-medium"
              >
                Start Your Transformation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-3"
              >
                Download Case Studies
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 mt-8 pt-6 border-t border-slate-700 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Enterprise Security Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>98% Success Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>50+ Enterprise Clients</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
