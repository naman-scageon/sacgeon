"use client";

import { motion } from "framer-motion";
// import { Database, Cloud, Brain, Code, ChevronRight } from "lucide-react";
import { servicesSection } from "@/constants/site-data";
import { Button } from "../ui/button";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export function ServicesSection() {
  const { headline, highlightedHeadline, tagline, services } = servicesSection;

  // const serviceIcons = {
  //   database: <Database className="w-8 h-8 text-[--color-accent-green]" />,
  //   aiML: <Cloud className="w-8 h-8 text-[--color-accent-green]" />,
  //   product: <Brain className="w-8 h-8 text-[--color-accent-green]" />,
  //   // code: <Code className="w-8 h-8 text-[--color-accent-green]" />,
  // };

  // Define which services occupy larger spaces in the bento grid
  const isFeatureService = (index: number) => false;

  return (
    <section id="services" className="bg-[--color-dark-bg] py-20">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-muted p-2 px-8 rounded-full w-fit mx-auto mb-4">
            Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[--color-text-light]">
            {headline}{" "}
            <span className="text-accent-green">{highlightedHeadline}</span>
          </h2>
          <p className="max-w-2xl mx-auto font-extralight text-lg">{tagline}</p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`
                group p-6 border border-[--color-border] bg-[--color-card-bg]/20 
                backdrop-blur-md hover:bg-[--color-card-bg]/40 transition-all duration-300
                ${
                  isFeatureService(index)
                    ? "md:col-span-4 md:row-span-1 card-gradient-1 rounded-3xl rounded-br-none"
                    : "md:col-span-2 md:row-span-1 card-gradient-2 rounded-3xl rounded-br-none"
                }
              `}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center">
                  <div
                    className={`rounded-full w-fit p-3 mb-3 bg-[--color-card-bg]/50 
                  group-hover:bg-[--color-accent-green]/10 transition-colors duration-300
                `}
                  >
                    <Image
                      src={service.icon}
                      alt={`Service image ${index + 1}`}
                      width={24} 
                      height={24} 
                      className="object-contain"
                    />
                  </div>

                  <h3
                    className={`
                  ${isFeatureService(index) ? "text-2xl" : "text-xl"} 
                  font-semibold mb-3 text-[--color-text-light] 
                  group-hover:text-[--color-accent-green] transition-colors duration-300
                `}
                  >
                    {service.title}
                  </h3>
                </div>

                <p className="text-muted-foreground font-light text-sm mb-4 max-w-sm">
                  {service.description}
                </p>

                <div className="mt-auto pt-2">
                  <Button
                    variant={"link"}
                    className="font-medium 
                    hover:underline flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-300 !px-0"
                  >
                    Know more
                    <ChevronRight className="w-4 h-4 stroke-0 fill-foreground" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
