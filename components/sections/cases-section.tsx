"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { SpeakerIcon, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

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
      image: "/cases/1.svg",
      icon: <SpeakerIcon className="text-gradient-2" />,
      ctaText: "View Case Study",
      ctaLink: "/cases/digital-advertising",
    },
    {
      id: "case2",
      title: "Healthcare Command Centre Platform for Healthcare Services",
      description: "Major in Middle East",
      image: "/cases/2.svg",
      icon: <SpeakerIcon className="text-gradient-2" />,
      ctaText: "View Case Study",
      ctaLink: "/cases/healthcare-command",
    },
    {
      id: "case3",
      title: "Messaging Platform for Digital Advertising and Marketing",
      description: "Major in South-East Asia",
      image: "/cases/3.svg",
      icon: <SpeakerIcon className="text-gradient-2" />,
      ctaText: "View Case Study",
      ctaLink: "/cases/messaging-platform",
    },
    {
      id: "case4",
      title: "Healthcare Command Centre Platform for Healthcare Services",
      description: "Major in Middle East",
      image: "/cases/2.svg",
      icon: <SpeakerIcon className="text-gradient-2" />,
      ctaText: "View Case Study",
      ctaLink: "/cases/healthcare-services",
    },
    {
      id: "case5",
      title: "Messaging Platform for Digital Advertising and Marketing",
      description: "Major in South-East Asia",
      image: "/cases/1.svg",
      icon: <SpeakerIcon className="text-gradient-2" />,
      ctaText: "View Case Study",
      ctaLink: "/cases/marketing-platform",
    },
  ],
};

export function CasesSection({ className }: CasesSectionProps) {
  const { headline, highlightedHeadline, cases } = casesData;

  return (
    <section className={cn("py-20 text-foreground", className)}>
      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center mb-12 w-fit mx-auto relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Background blur element */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-foreground/10 h-full w-full -z-10 blur-3xl rounded-full" />

          {/* "Select Stories" badge */}
          <div className="p-2 px-8 rounded-full w-fit mx-auto mb-4 bg-foreground/10 backdrop-blur-sm">
            <span>Select Stories</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {headline} <br />
            <span className="text-gradient-2">{highlightedHeadline}</span>
          </h2>
        </motion.div>

        {/* Carousel container */}
        <div className="relative">
          <Carousel>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-30 lg:-left-12" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-30 lg:-right-12" />
            <CarouselContent>
              {cases.map((item, index) => (
                <CarouselItem
                  key={item.id}
                  className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-2"
                >
                  <div className="group h-full aspect-[3/4] relative rounded-3xl overflow-hidden linear-gradient-3 border flex flex-col">
                    {/* Card Content */}
                    <div className="p-4 sm:p-6 flex flex-col justify-start items-center flex-grow z-10">
                      <div className="mb-2">{item.icon}</div>
                      <h3 className="text-base text-gradient-2 font-semibold mt-3 text-center">
                        {item.title}
                      </h3>
                      <p className="text-xs text-center mt-1 text-foreground/80">
                        {item.description}
                      </p>
                    </div>

                    {/* Image Container with CTA behind it */}
                    <div className="relative h-1/2 w-full overflow-hidden">
                      {/* CTA Button (behind the image) */}
                      <div className="absolute inset-0 flex flex-col items-center justify-start gap-2 z-10 bg-gradient-3 p-4 pt-0">
                        <Button
                          className="btn-gradient-1 rounded-xl text-xs"
                          size={"sm"}
                        >
                          {item.ctaText}
                        </Button>
                        <p className="text-xs text-center text-foreground/80">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cum temporibus inventore iusto in similique
                          adipisci perferendis a sequi eum ipsum beatae ut
                          repellat ducimus nemo, at velit modi accusantium
                          nulla.
                        </p>
                      </div>

                      {/* Image that slides down on hover */}
                      <div className="absolute inset-0 z-20 transform transition-transform duration-500 ease-in-out group-hover:translate-y-3/4">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          className="object-cover rounded-3xl"
                          priority={index < 2}
                          quality={80}
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
