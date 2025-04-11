"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { heroSection } from "@/constants/site-data";
import { VerticalWordCarousel } from "../widgets/vertical-words-carousel";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const { title, highlightedTitle, description, ctaButton, ctaLink } =
    heroSection;
  const auroraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!auroraRef.current) return;

    // Define multiple aurora points
    const auroraPoints = [
      { x: 20, y: 60, targetX: 0, targetY: 0, speed: 0.015 },
      { x: 70, y: 30, targetX: 0, targetY: 0, speed: 0.02 },
      { x: 40, y: 70, targetX: 0, targetY: 0, speed: 0.01 },
    ];

    // Set initial random targets for each point
    auroraPoints.forEach((point) => {
      point.targetX = getRandomX();
      point.targetY = getRandomY();
    });

    // Generate random x position between 10% and 90%
    function getRandomX() {
      return Math.random() * 80 + 10; // 10% to 90%
    }

    // Generate random y position primarily in the upper area
    function getRandomY() {
      return Math.random() * 40 + 40; // 40% to 80%
    }

    let animationFrame: number;

    const animateAurora = () => {
      if (!auroraRef.current) return;

      // Update each aurora point
      auroraPoints.forEach((point, index) => {
        // Move current position toward target position
        point.x += (point.targetX - point.x) * point.speed;
        point.y += (point.targetY - point.y) * point.speed;

        // If we're close enough to the target, set a new random target
        if (
          Math.abs(point.x - point.targetX) < 0.5 &&
          Math.abs(point.y - point.targetY) < 0.5
        ) {
          point.targetX = getRandomX();
          point.targetY = getRandomY();
        }

        if (auroraRef.current) {
          // Update CSS variables for this point
          auroraRef.current.style.setProperty(
            `--gradient-center-x-${index + 1}`,
            `${point.x}%`
          );
          auroraRef.current.style.setProperty(
            `--gradient-center-y-${index + 1}`,
            `${point.y}%`
          );
        }
      });

      animationFrame = requestAnimationFrame(animateAurora);
    };

    animateAurora();

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative h-screen flex items-center w-full">
      <div className="linear-gradient-2 h-1/2 absolute left-0 bottom-0 w-full"></div>
      <div
        ref={auroraRef}
        className="aurora-container absolute left-0 bottom-0 w-full h-2/3 z-0"
      >
        <div className="aurora-layer"></div>
      </div>
      <div className="container relative h-full flex items-center justify-center">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <motion.div
            className="flex flex-col items-center gap-2"
            variants={item}
          >
            <div className="p-2 px-8 rounded-full bg-background/60 w-fit">
              <span className="text-sm">{title}</span>
            </div>
            <VerticalWordCarousel
              words={highlightedTitle}
              className="h-20 w-full"
              wordClassName="text-7xl text-gradient-1 font-heading font-bold"
            />
          </motion.div>
          <motion.p className="my-8 mx-auto max-w-2xl" variants={item}>
            {description}
          </motion.p>
          <motion.div variants={item}>
            <Link
              href={ctaLink}
              className="btn-gradient-1 inline-block px-8 py-3 rounded-2xl text-sm hover:text-background duration-150 ease-in-out"
            >
              {ctaButton}
            </Link>
          </motion.div>
        </motion.div>

        {/* Dark gradient box/placeholder for image or video */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-full h-64 md:h-72 lg:h-96 linear-gradient-1 backdrop-blur-sm rounded-xl mx-auto container shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        ></motion.div>
      </div>
    </section>
  );
}
