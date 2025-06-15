"use client";

import { motion } from "framer-motion";
import { BaseLayout } from "@/components/layout/base-layout";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  User,
  Target,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    employees: "",
    industry: "",
    challenge: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const industries = [
    "Manufacturing",
    "Healthcare",
    "Financial Services",
    "Retail & E-commerce",
    "Technology",
    "Other",
  ];

  const budgetRanges = [
    "Under $50K",
    "$50K - $100K",
    "$100K - $250K",
    "$250K - $500K",
    "$500K+",
    "Not sure yet",
  ];

  const timelines = [
    "Immediate (1-2 months)",
    "Near term (3-6 months)",
    "Mid term (6-12 months)",
    "Long term (12+ months)",
    "Just exploring",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    if (formStep < 3) setFormStep(formStep + 1);
  };

  const prevStep = () => {
    if (formStep > 1) setFormStep(formStep - 1);
  };

  return (
    <BaseLayout>
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Let&apos;s Build Your{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Data Future
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Get a free consultation to discuss your specific needs and learn
              how our proven methodologies can help your organization achieve
              measurable results.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-700/40 p-6">
                {/* Form Progress */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-medium text-white">
                    Step {formStep} of 3
                  </span>
                  <div className="flex gap-1">
                    {[1, 2, 3].map((step) => (
                      <div
                        key={step}
                        className={`w-8 h-1 transition-colors duration-200 ${
                          step <= formStep ? "bg-blue-500" : "bg-slate-700"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Step 1: Basic Information */}
                {formStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <User className="w-4 h-4 text-blue-400" />
                      <h3 className="text-lg font-semibold text-white">
                        Basic Information
                      </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                          placeholder="John Smith"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                          placeholder="Your Company"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">
                          Company Size
                        </label>
                        <select
                          name="employees"
                          value={formData.employees}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600/50 text-white focus:outline-none focus:border-blue-500 transition-colors text-sm"
                        >
                          <option value="">Select size</option>
                          <option value="1-10">1-10 employees</option>
                          <option value="11-50">11-50 employees</option>
                          <option value="51-200">51-200 employees</option>
                          <option value="201-500">201-500 employees</option>
                          <option value="500+">500+ employees</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">
                          Industry
                        </label>
                        <select
                          name="industry"
                          value={formData.industry}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600/50 text-white focus:outline-none focus:border-blue-500 transition-colors text-sm"
                        >
                          <option value="">Select industry</option>
                          {industries.map((industry) => (
                            <option key={industry} value={industry}>
                              {industry}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Project Details */}
                {formStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Target className="w-4 h-4 text-blue-400" />
                      <h3 className="text-lg font-semibold text-white">
                        Project Details
                      </h3>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">
                        Main Challenge *
                      </label>
                      <textarea
                        name="challenge"
                        value={formData.challenge}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm resize-none"
                        placeholder="Describe your current data/AI challenges..."
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">
                          Budget Range
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600/50 text-white focus:outline-none focus:border-blue-500 transition-colors text-sm"
                        >
                          <option value="">Select budget</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>
                              {range}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">
                          Timeline
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600/50 text-white focus:outline-none focus:border-blue-500 transition-colors text-sm"
                        >
                          <option value="">Select timeline</option>
                          {timelines.map((timeline) => (
                            <option key={timeline} value={timeline}>
                              {timeline}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Additional Information */}
                {formStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <FileText className="w-4 h-4 text-blue-400" />
                      <h3 className="text-lg font-semibold text-white">
                        Additional Details
                      </h3>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">
                        Additional Information
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm resize-none"
                        placeholder="Any specific requirements, questions, or additional context..."
                      />
                    </div>

                    <div className="bg-blue-500/5 border border-blue-500/20 p-4">
                      <h4 className="text-white font-medium mb-2 text-sm">
                        What happens next?
                      </h4>
                      <ul className="text-slate-400 text-xs space-y-1">
                        <li>• Review within 24 hours</li>
                        <li>• 30-minute discovery call</li>
                        <li>• Preliminary assessment</li>
                        <li>• Detailed proposal if aligned</li>
                      </ul>
                    </div>
                  </motion.div>
                )}

                {/* Form Navigation */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-700/50">
                  <Button
                    onClick={prevStep}
                    variant="outline"
                    size="sm"
                    className={`border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white ${
                      formStep === 1 ? "invisible" : ""
                    }`}
                  >
                    Previous
                  </Button>

                  {formStep < 3 ? (
                    <Button
                      onClick={nextStep}
                      size="sm"
                      className="bg-blue-500 hover:bg-blue-600 text-white"
                    >
                      Next
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      size="sm"
                      className="bg-blue-500 hover:bg-blue-600 text-white"
                    >
                      Submit
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {/* Contact Methods */}
              <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-700/40 p-4">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Contact Info
                </h3>

                <div className="space-y-3">
                  <a
                    href="mailto:info@scageon.com"
                    className="flex items-center gap-3 p-2 hover:bg-slate-800/40 transition-colors group border-l-2 border-transparent hover:border-l-blue-500"
                  >
                    <div className="w-8 h-8 bg-blue-500/20 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium group-hover:text-blue-400 transition-colors">
                        Email Us
                      </div>
                      <div className="text-slate-400 text-xs">
                        info@scageon.com
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:+11234567890"
                    className="flex items-center gap-3 p-2 hover:bg-slate-800/40 transition-colors group border-l-2 border-transparent hover:border-l-blue-500"
                  >
                    <div className="w-8 h-8 bg-blue-500/20 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium group-hover:text-blue-400 transition-colors">
                        Call Us
                      </div>
                      <div className="text-slate-400 text-xs">
                        +1 (123) 456-7890
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 p-2 border-l-2 border-transparent">
                    <div className="w-8 h-8 bg-blue-500/20 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">
                        Location
                      </div>
                      <div className="text-slate-400 text-xs">
                        42nd Street, New York
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
