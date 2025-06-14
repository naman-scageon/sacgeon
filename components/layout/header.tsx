"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { navItems } from "@/constants/site-data";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled 
            ? "bg-black/80 backdrop-blur-md border-b border-white/10" 
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="relative z-10 flex items-center">
              <Image
                src="/logo-white.svg"
                alt="Scageon logo"
                width={140}
                height={32}
                className="h-8 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div key={item.label} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                  <Link
                    href={item.href}
                    className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 group-hover:w-full transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-green-400 to-blue-400 text-black font-semibold hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300 rounded-full px-6">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0, 
          x: isMobileMenuOpen ? '0%' : '100%' 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed inset-0 z-40 md:hidden"
      >
        <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setIsMobileMenuOpen(false)} />
        <div className="absolute right-0 top-0 h-full w-80 max-w-full bg-black/95 backdrop-blur-xl border-l border-white/10">
          <div className="flex flex-col p-6 pt-24 space-y-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-medium text-gray-300 hover:text-white transition-colors py-2"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <div className="pt-6 border-t border-white/10">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-green-400 to-blue-400 text-black font-semibold hover:shadow-lg transition-all duration-300 rounded-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
