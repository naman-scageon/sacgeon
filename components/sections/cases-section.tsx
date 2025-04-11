"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useHover } from "@uidotdev/usehooks";
import {
  ChevronLeft,
  ChevronRight,
  FileText,
  Activity,
  Truck,
  Users,
  TrendingUp,
} from "lucide-react";
import { casesSection } from "@/constants/site-data";

export function CasesSection() {
  const { headline, highlightedHeadline, cases } = casesSection;

  const caseIcons = {
    "file-text": <FileText size={36} className="text-[--color-accent-green]" />,
    activity: <Activity size={36} className="text-[--color-accent-green]" />,
    truck: <Truck size={36} className="text-[--color-accent-green]" />,
    users: <Users size={36} className="text-[--color-accent-green]" />,
    "trending-up": (
      <TrendingUp size={36} className="text-[--color-accent-green]" />
    ),
  };
  const sliderRef = useRef<HTMLDivElement>(null);
  const [hoverLeftRef, isHoveringLeft] = useHover();
  const [hoverRightRef, isHoveringRight] = useHover();

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

  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          className="text-center mb-12 w-fit mx-auto relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-foreground/10 h-full w-full -z-10 blur-2xl rounded-full" />
          <div className="p-2 px-8 rounded-full w-fit mx-auto mb-4 bg-foreground/10 backdrop-blur-sm">
            <span>Select Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {headline} <br />
            <span className="text-gradient-2">{highlightedHeadline}</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
            ref={hoverLeftRef}
          >
            <button
              onClick={scrollLeft}
              className="bg-card/80 backdrop-blur-sm p-2 rounded-full text-white"
              aria-label="Previous case"
            >
              <ChevronLeft
                className={`w-6 h-6 transition-transform duration-300 ${
                  isHoveringLeft ? "-translate-x-1" : ""
                }`}
              />
            </button>
          </div>

          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
            ref={hoverRightRef}
          >
            <button
              onClick={scrollRight}
              className="bg-card/80 backdrop-blur-sm p-2 rounded-full text-white"
              aria-label="Next case"
            >
              <ChevronRight
                className={`w-6 h-6 transition-transform duration-300 ${
                  isHoveringRight ? "translate-x-1" : ""
                }`}
              />
            </button>
          </div>

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
                className="min-w-80 h-56 relative rounded-lg overflow-hidden snap-center group bg-[--color-card-bg]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    {caseIcons[item.icon as keyof typeof caseIcons]}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[--color-text-muted]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Add custom CSS to hide scrollbar but keep functionality
const style = `
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
`;

// Add style to document
if (typeof document !== "undefined") {
  const styleElement = document.createElement("style");
  styleElement.textContent = style;
  document.head.appendChild(styleElement);
}
