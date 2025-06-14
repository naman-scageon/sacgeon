"use client";

import { motion } from "framer-motion";
import { BaseLayout } from "@/components/layout/base-layout";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    "Data Services",
    "AI Engineering", 
    "Application Services",
    "Consulting",
    "Other"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <BaseLayout>
      <div className="min-h-screen bg-black pt-32 pb-20">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-green-400/5 to-blue-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300 tracking-wider mb-6">
                Contact Us
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Let's Transform Your{" "}
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Business Together
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to unlock the power of AI and data for your organization? 
                Our experts are here to guide you through every step of your digital transformation journey.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <motion.div
                className="space-y-12"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div>
                  <h2 className="text-3xl font-bold text-white mb-8">Start Your Journey</h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    Every great transformation begins with a conversation. Whether you're looking to 
                    implement AI solutions, optimize your data strategy, or modernize your applications, 
                    we're here to help you succeed.
                  </p>
                  
                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                      <div className="text-2xl font-bold text-green-400 mb-1">50+</div>
                      <div className="text-xs text-gray-400">Projects Delivered</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                      <div className="text-2xl font-bold text-blue-400 mb-1">95%</div>
                      <div className="text-xs text-gray-400">Client Satisfaction</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                      <div className="text-2xl font-bold text-purple-400 mb-1">24h</div>
                      <div className="text-xs text-gray-400">Response Time</div>
                    </div>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  <motion.div
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-green-400 to-blue-400">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Email</h3>
                      <p className="text-gray-300">info@scageon.com</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-green-400 to-blue-400">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Phone</h3>
                      <p className="text-gray-300">+1 (123) 456-7890</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-green-400 to-blue-400">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Location</h3>
                      <p className="text-gray-300">42nd Street, New York</p>
                    </div>
                  </motion.div>
                </div>

                {/* Business Hours */}
                <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <h3 className="text-white font-semibold mb-4">Business Hours</h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-white">Tell us about your project</h3>
                      <div className="flex items-center gap-2 px-3 py-1 bg-green-400/20 rounded-full">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-400 font-medium">We're online</span>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Service Interest
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-green-400 transition-colors"
                        >
                          <option value="">Select a service</option>
                          {services.map(service => (
                            <option key={service} value={service} className="bg-gray-900">
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors resize-none"
                        placeholder="Describe your project goals, current challenges, and how we can help you achieve success..."
                      />
                    </div>
                    
                    {/* Project Timeline */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Preferred Timeline
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {["ASAP", "1-3 months", "3-6 months", "6+ months"].map((timeline) => (
                          <button
                            key={timeline}
                            type="button"
                            className="px-3 py-2 text-sm bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:bg-white/10 hover:border-green-400/50 transition-all duration-200"
                          >
                            {timeline}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Budget Range */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Budget Range (Optional)
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {["$10K - $25K", "$25K - $50K", "$50K - $100K", "$100K+"].map((budget) => (
                          <button
                            key={budget}
                            type="button"
                            className="px-3 py-2 text-sm bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:bg-white/10 hover:border-green-400/50 transition-all duration-200"
                          >
                            {budget}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-400 to-blue-400 text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </motion.button>
                      
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-medium rounded-xl hover:bg-white/10 transition-all duration-300"
                      >
                        Schedule Call
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
