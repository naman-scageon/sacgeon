"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { navItems } from "@/constants/site-data";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Image from "next/image";

export function Header() {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (current < 0.01) {
      setVisible(true);
    } else {
      if (typeof current === "number") {
        const direction = current! - scrollYProgress.getPrevious()!;

        if (scrollYProgress.get() < 0.01) {
          setVisible(false);
        } else {
          if (direction < 0) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.header
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex md:max-w-4xl h-16 rounded-2xl fixed top-8 inset-x-0 mx-auto border border-transparent bg-foreground z-[5000] p-3 px-6 items-center justify-center space-x-4"
        )}
      >
        <div className="flex w-full items-center justify-between text-background">
          <Link href="/" className="relative z-10 flex items-center space-x-2">
            <Image src="/logo.svg" alt="logo" width={120} height={40} />
          </Link>

          <nav className="flex items-center gap-10">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="text-sm">
                {item.label}
              </Link>
            ))}
          </nav>
          <Button className="bg-background text-foreground rounded-xl">
            Contact Us
          </Button>
        </div>
      </motion.header>
    </AnimatePresence>
  );
}
