"use client";

import { motion } from "framer-motion";
import { closingSection } from "@/constants/site-data";

export function ClosingSection() {
  const {
    headline,
    highlightedHeadline,
    middleText,
    secondHighlighted,
    tagline,
    finalText,
  } = closingSection;

  return (
    <div className="relative overflow-y-hidden py-56 h-full">
      {/* Aurora background - explicit z-index with position relative */}
      <div
        className="aurora-container absolute left-0 bottom-0 w-full h-1/2 blur-[100px]"
        style={{ zIndex: 1 }}
      >
        <div className="aurora-layer"></div>
      </div>

      {/* Content with higher z-index */}
      <div
        className="max-w-3xl mx-auto flex flex-col items-center justify-center h-full relative"
        style={{ zIndex: 10 }}
      >
        <motion.h2
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-12 text-center leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[--color-text-light]">{headline} </span>
          <span className="text-gradient-2">{highlightedHeadline} </span>
          <span className="text-gradient-2">{middleText}</span>
          <span className="text-gradient-2">{secondHighlighted} </span>
          <span className="text-[--color-text-light]">{tagline} </span>
          <span className="text-gradient-2">{finalText}</span>
        </motion.h2>
      </div>
    </div>
  );
}
