"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { navItems } from "@/constants/site-data";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ServicesMegaMenu } from "../navigation/services-mega-menu";
import Image from "next/image";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";

export function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Track active section for navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "services", "cases", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = href;
    }
    setIsMobileMenuOpen(false);
  };

  const handleGetStarted = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/50 shadow-lg shadow-slate-900/5"
            : "bg-transparent"
        )}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="relative z-10 flex items-center group"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="flex items-center gap-2">
                {isScrolled ? (
                  <Image
                    src="/logo.svg"
                    alt="Scageon logo"
                    width={140}
                    height={24}
                    className="w-auto"
                  />
                ) : (
                  <Image
                    src="/logo-white.svg"
                    alt="Scageon logo"
                    width={140}
                    height={32}
                    className="h-8 w-auto"
                  />
                )}
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center">
              <div
                className={cn(
                  "flex items-center gap-1 px-2 py-1 rounded-full transition-all duration-300",
                  isScrolled
                    ? "bg-slate-100/80 border border-slate-200/50"
                    : "bg-white/10 backdrop-blur-sm border border-white/20"
                )}
              >
                {navItems.map((item, index) => {
                  // Replace Services with mega menu
                  if (item.label === "Services") {
                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        <ServicesMegaMenu isScrolled={isScrolled} />
                      </motion.div>
                    );
                  }

                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className={cn(
                          "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                          isActive
                            ? isScrolled
                              ? "bg-white text-blue-600 shadow-sm"
                              : "bg-white/20 text-white"
                            : isScrolled
                            ? "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                            : "text-white/80 hover:text-white hover:bg-white/10"
                        )}
                      >
                        {item.label}
                        {isActive && (
                          <motion.div
                            layoutId="activeSection"
                            className={cn(
                              "absolute inset-0 rounded-full -z-10",
                              isScrolled ? "bg-white shadow-sm" : "bg-white/20"
                            )}
                            transition={{
                              type: "spring",
                              bounce: 0.2,
                              duration: 0.6,
                            }}
                          />
                        )}
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </nav>

            {/* Desktop CTA */}
            <motion.div
              className="hidden md:flex items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <Button
                onClick={handleGetStarted}
                className={cn(
                  "group font-medium transition-all duration-300",
                  isScrolled
                    ? "bg-slate-900 hover:bg-slate-800 text-white shadow-lg hover:shadow-xl"
                    : "bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 hover:border-white/50"
                )}
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-300" />
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "md:hidden p-2 rounded-lg transition-all duration-300",
                isScrolled
                  ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              )}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? "0%" : "100%",
        }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="fixed inset-0 z-40 md:hidden"
        style={{ pointerEvents: isMobileMenuOpen ? "auto" : "none" }}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-xl border-l border-slate-200/50">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-200/50">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold text-slate-900">
                  Scageon
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation */}
            <div className="flex-1 px-6 py-8">
              <div className="space-y-2">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className={cn(
                          "w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300",
                          isActive
                            ? "bg-blue-50 text-blue-600 border border-blue-200"
                            : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                        )}
                      >
                        {item.label}
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 border-t border-slate-200/50">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  onClick={handleGetStarted}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 font-medium"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
