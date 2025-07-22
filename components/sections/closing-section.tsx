"use client";

import { motion } from "framer-motion";
import { closingSection } from "@/constants/site-data";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Calendar,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";

export function ClosingSection() {
  const {
    headline,
    highlightedHeadline,
    middleText,
    secondHighlighted,
    tagline,
    finalText,
    middleTextLine,
  } = closingSection;

  const handleScheduleCall = () => {
    window.open(
      "mailto:info@scageon.com?subject=Schedule%20Consultation",
      "_blank"
    );
  };

  const handleGetQuote = () => {
    window.open(
      "mailto:info@scageon.com?subject=Project%20Quote%20Request",
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      data-section="closing"
      className="relative py-32 bg-gradient-to-br from-charcoal-950 via-charcoal-900 to-charcoal-950 overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        {/* Primary gradient orb */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-5"
          style={{
            background:
              "radial-gradient(circle, rgba(100, 116, 139, 0.1) 0%, rgba(120, 113, 108, 0.05) 50%, transparent 100%)",
            left: "20%",
            top: "30%",
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Secondary gradient orb */}
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-3"
          style={{
            background:
              "radial-gradient(circle, rgba(148, 163, 184, 0.08) 0%, rgba(87, 83, 78, 0.04) 50%, transparent 100%)",
            right: "20%",
            bottom: "20%",
            transform: "translate(50%, 50%)",
          }}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.03, 0.12, 0.03],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-subtle-grid opacity-[0.005]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-offwhite-100">{headline} </span>
            <span className="gradient-text">{highlightedHeadline}</span>
            <span className="text-offwhite-100"> {middleText}</span>
            <span className="text-offwhite-100">{middleTextLine}</span>
            <span className="gradient-text-secondary">{secondHighlighted}</span>
            <span className="text-offwhite-100"> {tagline} </span>
            <span className="gradient-text">{finalText}</span>
            <span className="text-offwhite-100">.</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-offwhite-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to transform your business with data and AI? Let&apos;s start
            a conversation about your specific challenges and how we can help
            you achieve measurable results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button onClick={handleScheduleCall} className="btn-primary group">
              <Calendar className="w-5 h-5 mr-2" />
              <span>Schedule Free Consultation</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>

            <Button onClick={handleGetQuote} className="btn-secondary group">
              <MessageCircle className="w-5 h-5 mr-2" />
              <span>Get Project Quote</span>
            </Button>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              {
                icon: Mail,
                label: "Email Us",
                value: "info@scageon.com",
                action: () => window.open("mailto:info@scageon.com", "_blank"),
              },
              {
                icon: Phone,
                label: "Call Us",
                value: "+1 (555) 123-4567",
                action: () => window.open("tel:+15551234567", "_blank"),
              },
              {
                icon: MapPin,
                label: "Visit Us",
                value: "Global Offices",
                action: () => {},
              },
            ].map((contact, index) => {
              const Icon = contact.icon;
              return (
                <div
                  key={index}
                  onClick={contact.action}
                  className="group text-center p-6 rounded-xl bg-charcoal-900/30 backdrop-blur-sm border border-warm-700/30 hover:border-warm-600/40 hover:bg-charcoal-800/40 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-steel-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-steel-500/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-steel-400 group-hover:text-steel-300 transition-colors duration-300" />
                  </div>
                  <div className="text-sm text-offwhite-500 mb-1">
                    {contact.label}
                  </div>
                  <div className="text-offwhite-200 font-medium group-hover:text-offwhite-100 transition-colors duration-300">
                    {contact.value}
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Bottom Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 pt-8 border-t border-warm-700/30"
          >
            <p className="text-sm text-offwhite-600 mb-6">
              Trusted by 50+ enterprise clients worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-offwhite-500 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-steel-400 rounded-full" />
                <span>98% Success Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-warm-400 rounded-full" />
                <span>Enterprise Security Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-steel-300 rounded-full" />
                <span>15+ Countries Served</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-warm-300 rounded-full" />
                <span>300%+ Average ROI</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
