"use client";

import { motion } from "framer-motion";
import { BaseLayout } from "@/components/layout/base-layout";
import { useState } from "react";
import { Calendar, MessageCircle, Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight } from "lucide-react";
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
    message: ""
  });

  const industries = [
    "Manufacturing",
    "Healthcare",
    "Financial Services",
    "Retail & E-commerce",
    "Technology",
    "Other"
  ];

  const budgetRanges = [
    "Under $50K",
    "$50K - $100K", 
    "$100K - $250K",
    "$250K - $500K",
    "$500K+",
    "Not sure yet"
  ];

  const timelines = [
    "Immediate (1-2 months)",
    "Near term (3-6 months)",
    "Mid term (6-12 months)",
    "Long term (12+ months)",
    "Just exploring"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
      <div className="pt-20 pb-24 bg-black min-h-screen">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Let's Build Your{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Data Future
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get a free consultation to discuss your specific needs and learn how our proven methodologies can help your organization achieve measurable results.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            
            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-2xl p-8">
                {/* Form Progress */}
                <div className="flex items-center justify-between mb-8">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                        step <= formStep 
                          ? 'bg-gradient-to-r from-green-400 to-blue-400 text-white' 
                          : 'bg-white/10 text-gray-400'
                      }`}>
                        {step < formStep ? <CheckCircle className="w-4 h-4" /> : step}
                      </div>
                      {step < 3 && (
                        <div className={`w-16 h-0.5 ml-4 ${
                          step < formStep ? 'bg-gradient-to-r from-green-400 to-blue-400' : 'bg-white/10'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>

                {/* Step 1: Basic Information */}
                {formStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold text-white mb-6">Tell us about yourself</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
                          placeholder="John Smith"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
                          placeholder="Your Company"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Company Size
                        </label>
                        <select
                          name="employees"
                          value={formData.employees}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-green-400 transition-colors"
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
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Industry
                        </label>
                        <select
                          name="industry"
                          value={formData.industry}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-green-400 transition-colors"
                        >
                          <option value="">Select industry</option>
                          {industries.map((industry) => (
                            <option key={industry} value={industry}>{industry}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Project Details */}
                {formStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold text-white mb-6">Project Details</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        What's your main challenge? *
                      </label>
                      <textarea
                        name="challenge"
                        value={formData.challenge}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
                        placeholder="Describe your current data/AI challenges..."
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Budget Range
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-green-400 transition-colors"
                        >
                          <option value="">Select budget</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Timeline
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-green-400 transition-colors"
                        >
                          <option value="">Select timeline</option>
                          {timelines.map((timeline) => (
                            <option key={timeline} value={timeline}>{timeline}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Additional Information */}
                {formStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold text-white mb-6">Anything else?</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Additional Details
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
                        placeholder="Any specific requirements, questions, or additional context you'd like to share..."
                      />
                    </div>

                    <div className="bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">What happens next?</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• We'll review your information within 24 hours</li>
                        <li>• Schedule a 30-minute discovery call</li>
                        <li>• Provide a preliminary assessment and recommendations</li>
                        <li>• If it's a good fit, we'll create a detailed proposal</li>
                      </ul>
                    </div>
                  </motion.div>
                )}

                {/* Form Navigation */}
                <div className="flex items-center justify-between mt-8">
                  <Button
                    onClick={prevStep}
                    variant="outline"
                    className={`border-white/20 text-white hover:bg-white/10 ${
                      formStep === 1 ? 'invisible' : ''
                    }`}
                  >
                    Previous
                  </Button>
                  
                  {formStep < 3 ? (
                    <Button
                      onClick={nextStep}
                      className="bg-gradient-to-r from-green-400 to-blue-400 text-black font-semibold"
                    >
                      Next Step
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-green-400 to-blue-400 text-black font-semibold"
                    >
                      Submit Request
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Contact Information Sidebar */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {/* Contact Methods */}
              <div className="bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:info@scageon.com"
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-green-400/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <div className="text-white font-medium group-hover:text-green-400 transition-colors">
                        Email Us
                      </div>
                      <div className="text-gray-400 text-sm">info@scageon.com</div>
                    </div>
                  </a>

                  <a 
                    href="tel:+11234567890"
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-blue-400/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-white font-medium group-hover:text-blue-400 transition-colors">
                        Call Us
                      </div>
                      <div className="text-gray-400 text-sm">+1 (123) 456-7890</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-3 rounded-lg">
                    <div className="w-10 h-10 bg-purple-400/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Visit Us</div>
                      <div className="text-gray-400 text-sm">42nd Street, New York</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-6">Business Hours</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Monday - Friday</span>
                    <span className="text-white">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Saturday</span>
                    <span className="text-white">10:00 AM - 2:00 PM EST</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Sunday</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                </div>

                <div className="mt-6 p-3 bg-green-400/10 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm font-medium">Available for new projects</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
                
                <div className="space-y-3">
                  <Button 
                    className="w-full justify-start bg-white/5 hover:bg-white/10 text-white border-white/20"
                    variant="outline"
                  >
                    <Calendar className="w-4 h-4 mr-3" />
                    Schedule a Call
                  </Button>
                  
                  <Button 
                    className="w-full justify-start bg-white/5 hover:bg-white/10 text-white border-white/20"
                    variant="outline"
                  >
                    <MessageCircle className="w-4 h-4 mr-3" />
                    Live Chat
                  </Button>
                  
                  <Button 
                    className="w-full justify-start bg-white/5 hover:bg-white/10 text-white border-white/20"
                    variant="outline"
                  >
                    <Clock className="w-4 h-4 mr-3" />
                    Free Assessment
                  </Button>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-2xl p-6 border border-white/10">
                <h4 className="text-white font-semibold mb-2">Response Time</h4>
                <p className="text-gray-300 text-sm mb-4">
                  We typically respond to all inquiries within 2-4 hours during business hours.
                </p>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm">Fast response guaranteed</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
