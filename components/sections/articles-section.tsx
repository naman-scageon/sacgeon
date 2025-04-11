"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { articlesSection } from "@/constants/site-data";
import Image from "next/image";
import { Button } from "../ui/button";

export function ArticlesSection() {
  const { headline, highlightedHeadline, tagline, articles } = articlesSection;

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0,
      },
    },
  };

  return (
    <section
      id="articles"
      className="bg-background mt-24 w-full relative overflow-hidden"
    >
      {/* Background effects */}

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 flex flex-col items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="py-1.5 px-6 rounded-full bg-foreground/10 backdrop-blur-sm">
            <span className="text-sm font-medium">Articles</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold max-w-2xl">
            {headline}{" "}
            <span className="text-gradient-2">
              {highlightedHeadline.split(" ").map((item, index) => (
                <span key={index}>
                  {item}
                  {index % 2 === 0 && <br />}
                </span>
              ))}
            </span>{" "}
            <span>{tagline}</span>
          </h2>
        </motion.div>
        <div className="aurora-container absolute left-0 bottom-0 w-full h-2/3 z-0">
          <div className="aurora-layer"></div>
        </div>
        {/* Articles Grid */}
        <motion.div
          className="w-full py-16 relative flex flex-col items-center justify-center gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="linear-gradient-3 absolute top-0 left-0 w-full h-full" />
            {articles.map((article) => (
              <div
                key={article.id}
                className="group h-[380px] md:h-[320px] rounded-3xl overflow-hidden"
              >
                <Link
                  href={`/articles/${article.id}`}
                  className="block w-full h-full relative group"
                >
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105 scale-120"
                      priority={article.id === articles[0].id}
                    />
                    {/* Gradient overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  </div>

                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <span className="inline-block mb-2 text-sm font-medium text-[--color-accent-green] bg-black/30 backdrop-blur-sm py-1 px-3 rounded-full">
                      {article.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-[--color-accent-green] transition-colors duration-300">
                      {article.title}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          {/* "View All" Button */}
          <div className="flex justify-center z-10">
            <Button
              variant="link"
              className="text-foreground group flex items-center gap-2 text-base font-medium"
            >
              View All Articles
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
