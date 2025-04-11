// src/components/VerticalWordCarousel.tsx (Note the .tsx extension)
"use client"; // Still needed for Next.js App Router

import React, { useState, useEffect, ReactElement } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { cn } from "@/lib/utils"; // Ensure this utility is TS-compatible or add types

// --- Constants ---
const DEFAULT_INTERVAL_DURATION = 3000; // Default time each word is shown (ms)

// --- Framer Motion Variants ---
// Define types for variants for better safety
const animationVariants: Variants = {
  enter: (direction: number) => ({
    y: direction > 0 ? -20 : 20, // Start below or above based on direction (optional enhancement)
    opacity: 0,
    // scale: 0.95, // Optional subtle scale
  }),
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1,
    // scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    y: direction < 0 ? 20 : -20, // Exit downwards or upwards
    opacity: 0,
    // scale: 0.95,
  }),
};

// --- Prop Types Interface ---
interface VerticalWordCarouselProps {
  /** Array of words to cycle through. */
  words: string[];
  /** Duration (in milliseconds) each word is displayed. Defaults to 3000ms. */
  intervalDuration?: number;
  /** Optional CSS class names for the main container div. */
  className?: string;
  /** Optional CSS class names for the animated word span. */
  wordClassName?: string;
}

// --- Component Implementation ---
export const VerticalWordCarousel = ({
  words,
  intervalDuration = DEFAULT_INTERVAL_DURATION,
  className,
  wordClassName,
}: VerticalWordCarouselProps): ReactElement | null => {
  // State to track the current word index
  const [index, setIndex] = useState<number>(0);
  // Optional: Track direction for slightly different enter/exit animations
  // const [direction, setDirection] = useState<number>(0);

  useEffect(() => {
    // Validate words prop early
    if (!words || words.length === 0) {
      return; // No interval needed if no words
    }

    // Set up the interval to change the word
    const intervalId = setInterval(() => {
      // setDirection(1); // Indicate next word is coming (optional)
      setIndex((prevIndex) => (prevIndex + 1) % words.length); // Cycle through words
    }, intervalDuration);

    // Clear the interval on component unmount or when dependencies change
    return () => clearInterval(intervalId);
  }, [words, intervalDuration]); // Re-run if words array or interval changes

  // Render nothing if the words array is empty or invalid
  if (!words || words.length === 0) {
    return null;
  }

  return (
    <div
      // Use h-8, h-10, etc. based on expected font size + line height
      className={cn(
        "relative flex items-center justify-center overflow-hidden h-10",
        className
      )}
      aria-live="polite" // Announce changes to screen readers
      aria-atomic="true"
    >
      <AnimatePresence
        initial={false}
        mode="wait"
        //  custom={direction} // Pass direction to variants (optional)
      >
        {/* Use index as key for AnimatePresence */}
        <motion.span
          key={index}
          //   custom={direction} // Pass direction to variants (optional)
          variants={animationVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            // Use spring for a bouncier effect, or tween for smoother
            y: { type: "spring", stiffness: 300, damping: 30 },
            // y: { type: "tween", ease: "easeInOut", duration: 0.4 },
            opacity: { duration: 0.3 },
            // scale: { duration: 0.3 },
          }}
          className={cn(
            "absolute text-center font-semibold text-xl h-full", // Base styling - adjust as needed
            wordClassName
          )}
        >
          {/* Display the current word */}
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};
