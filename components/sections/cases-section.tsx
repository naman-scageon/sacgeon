"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Define TypeScript interfaces
interface CaseItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface CasesSectionProps {
  className?: string;
}

// Sample data - in production, this would come from your data source
const casesData = {
  headline: "Learn how Scageon handles",
  highlightedHeadline: "Real-world tasks",
  cases: [
    {
      id: "case1",
      title: "Platform for Digital Advertising and Marketing",
      description: "Major in South-East Asia",
      image: "/images/cases/digital-marketing.jpg",
    },
    {
      id: "case2",
      title: "Healthcare Command Centre Platform for Healthcare Services",
      description: "Major in Middle East",
      image: "/images/cases/healthcare.jpg",
    },
    {
      id: "case3",
      title: "Messaging Platform for Digital Advertising and Marketing",
      description: "Major in South-East Asia",
      image: "/images/cases/messaging.jpg",
    },
    {
      id: "case4",
      title: "Healthcare Command Centre Platform for Healthcare Services",
      description: "Major in Middle East",
      image: "/images/cases/healthcare-2.jpg",
    },
    {
      id: "case5",
      title: "Messaging Platform for Digital Advertising and Marketing",
      description: "Major in South-East Asia",
      image: "/images/cases/messaging-2.jpg",
    },
  ],
};

export function CasesSection({ className }: CasesSectionProps) {
  const { headline, highlightedHeadline, cases } = casesData;
  const [isLeftVisible, setIsLeftVisible] = useState<boolean>(false);
  const [isRightVisible, setIsRightVisible] = useState<boolean>(true);

  const sliderRef = useRef<HTMLDivElement>(null);

  // Check if scroll buttons should be visible
  const checkScrollPosition = () => {
    if (!sliderRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setIsLeftVisible(scrollLeft > 10);
    setIsRightVisible(scrollLeft < scrollWidth - clientWidth - 10);
  };

  // Handle scroll buttons
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", checkScrollPosition);
      // Initial check
      checkScrollPosition();

      // Check on window resize
      window.addEventListener("resize", checkScrollPosition);

      return () => {
        slider.removeEventListener("scroll", checkScrollPosition);
        window.removeEventListener("resize", checkScrollPosition);
      };
    }
  }, []);

  return (
    <section className={cn("py-20 bg-gray-900 text-white", className)}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 w-fit mx-auto relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Background blur element */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/5 h-full w-full -z-10 blur-2xl rounded-full" />

          {/* "Select Stories" badge */}
          <div className="p-2 px-8 rounded-full w-fit mx-auto mb-4 bg-gray-800/70 backdrop-blur-sm">
            <span>Select Stories</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {headline} <br />
            <span className="text-yellow-300">{highlightedHeadline}</span>
          </h2>
        </motion.div>

        {/* Carousel container */}
        <div className="relative">
          {/* Left scroll button */}
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLeftVisible ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={scrollLeft}
              className="bg-gray-800/70 backdrop-blur-sm p-3 rounded-full text-white hover:bg-gray-700/80 transition-all"
              aria-label="Previous case"
              disabled={!isLeftVisible}
            >
              <ChevronLeft className="w-6 h-6 transition-transform duration-300 hover:-translate-x-1" />
            </button>
          </motion.div>

          {/* Right scroll button */}
          <motion.div
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: isRightVisible ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={scrollRight}
              className="bg-gray-800/70 backdrop-blur-sm p-3 rounded-full text-white hover:bg-gray-700/80 transition-all"
              aria-label="Next case"
              disabled={!isRightVisible}
            >
              <ChevronRight className="w-6 h-6 transition-transform duration-300 hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Carousel */}
          <motion.div
            ref={sliderRef}
            className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory gap-5 py-4 px-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {cases.map((item, index) => (
              <motion.div
                key={item.id}
                className="min-w-[300px] sm:min-w-[320px] h-64 relative rounded-lg overflow-hidden snap-center group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Use Next.js Image component for better performance */}
                <div className="absolute inset-0 z-0">
                  <div className="relative w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 320px"
                      className="object-cover"
                      priority={index < 2} // Only prioritize loading for first two visible images
                      quality={80}
                    />
                    <div className="absolute inset-0 bg-gray-800/80 backdrop-blur-sm" />
                  </div>
                </div>

                {/* Card content */}
                <div className="p-6 flex flex-col h-full relative z-10">
                  <h3 className="text-lg font-semibold text-white mb-2 mt-4">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
