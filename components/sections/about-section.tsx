"use client";

import { motion } from "framer-motion";
import { aboutSection } from "@/constants/site-data";
import { useEffect, useRef } from "react";
import Image from "next/image";

export function AboutSection() {
  const { title, getTo, knowBetter, subTitle, description, img } = aboutSection;
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

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        {/* Partnership intro */}
        <div className="text-center mb-12">
          <p className="text-gray-300 text-sm md:text-base mb-8 max-w-2xl mx-auto">
            {title}
          </p>

          {/* Partner logos container */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-30 mb-16">
            {img.map((imageSrc, index) => (
              <div key={index} className="relative h-10 w-24 md:h-12 md:w-32">
                {" "}
                {/* Container for each image */}
                <Image
                  src={imageSrc}
                  alt={`Gallery image ${index + 1}`} // Dynamic alt text
                  // For logos, 'fill' with 'object-contain' is usually better than 'object-cover'
                  // if you want the whole logo to be visible without cropping.
                  // If you know the exact dimensions and want fixed sizes, use width and height.
                  fill // This makes the image fill the parent div (relative h-10 w-24)
                  className="object-contain" // Ensures the entire logo is visible within the container
                  // If you want specific sizes for each logo, you might define them here
                  // width={100} // Example fixed width
                  // height={40} // Example fixed height
                  priority={index === 0} // Prioritize the first logo for LCP
                />
              </div>
            ))}
          </div>
        </div>

        {/* About us section */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-gray-400 text-sm tracking-wider mb-4">About us</p>

          <h2 className="text-white text-3xl md:text-4xl font-bold mb-8">
            {getTo} <span className="text-[#c5e054]">{knowBetter}</span>
          </h2>

          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {subTitle}
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            <strong className="text-white">Scageon</strong> is a pioneering IT
            services firm dedicated to driving{" "}
            <strong className="text-white">business transformations</strong> in
            the digital age. We leverage cutting-edge digital technologies, data
            analytics, and artificial intelligence to help organizations
            innovate, optimize operations, and unlock new growth opportunities.
            Our comprehensive suite of services encompasses strategic
            consulting, technology integration, intelligent solutions that
            enhance efficiency, decision-making, and customer experiences. We
            are committed to delivering tailored strategies and solutions that
            empower businesses to embrace the future with confidence and
            agility.
          </p>
        </div>
      </div>
    </section>
  );
}
