"use client";

import { motion } from "framer-motion";
import { Camera, Video, Facebook, Search } from "lucide-react";
import { partnersSection } from "@/constants/site-data";

export function PartnersSection() {
  const { tagline, partners } = partnersSection;

  const partnerIcons = {
    camera: <Camera size={32} />,
    video: <Video size={32} />,
    facebook: <Facebook size={32} />,
    search: <Search size={32} />,
  };

  return (
    <section className="bg-[--color-dark-bg] py-16">
      <div className="container">
        <motion.p
          className="text-center text-[--color-text-light] mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {tagline}
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-10 md:gap-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="transition-all duration-300 opacity-70 hover:opacity-100 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-white mb-2">
                {partnerIcons[partner.icon as keyof typeof partnerIcons]}
              </div>
              <div className="text-white text-sm">{partner.name}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
