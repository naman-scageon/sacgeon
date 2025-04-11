"use client";

import { motion } from "framer-motion";
import { Quote, User } from "lucide-react";
import { testimonialSection } from "@/constants/site-data";

export function TestimonialSection() {
  const { headline, highlightedHeadline, tagline, testimonials } =
    testimonialSection;

  // For simplicity, we're assuming there's at least one testimonial
  const testimonial = testimonials[0];

  return (
    <section className="bg-[--color-dark-bg] py-20">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[--color-text-light]">
            {headline}{" "}
            <span className="text-[--color-accent-green]">
              {highlightedHeadline}
            </span>
            ,
          </h2>
          <p className="text-[--color-text-muted]">{tagline}</p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto bg-card rounded-xl p-0 md:p-10 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute -top-5 -left-2 text-[--color-accent-green] opacity-20">
            <Quote size={60} />
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3 mb-6 md:mb-0 relative">
              <div className="rounded-lg overflow-hidden aspect-square bg-card flex items-center justify-center">
                <User size={64} className="text-[--color-accent-green]" />
              </div>

              <div className="absolute -bottom-3 -right-3 text-[--color-accent-green] opacity-20 transform rotate-180">
                <Quote size={40} />
              </div>
            </div>

            <div className="md:w-2/3">
              <blockquote className="text-[--color-text-light] italic mb-6">
                {testimonial.quote}
              </blockquote>

              <div className="flex items-center">
                <div>
                  <div className="text-[--color-text-light] font-medium">
                    {testimonial.author}
                  </div>
                  <div className="text-[--color-text-muted] text-sm">
                    {testimonial.position}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
