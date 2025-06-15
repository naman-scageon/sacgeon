"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Database,
  Brain,
  Code2,
  Target,
  Settings,
  Layers,
  Shuffle,
  Archive,
  Cloud,
  RefreshCw,
  BarChart3,
  PieChart,
  Lightbulb,
  Cpu,
  MessageCircle,
  GitBranch,
  Search,
  Bot,
  Link as LinkIcon,
  Grid3X3,
  ArrowRight,
  ExternalLink,
  Layers3,
} from "lucide-react";
import {
  servicesNavigationData,
  type ServiceItem,
  type SubService,
} from "@/constants/site-data";
import { cn } from "@/lib/utils";

interface ServicesMegaMenuProps {
  isScrolled: boolean;
  className?: string;
}

const iconMap = {
  database: Database,
  brain: Brain,
  code: Code2,
  target: Target,
  settings: Settings,
  layers: Layers,
  shuffle: Shuffle,
  archive: Archive,
  cloud: Cloud,
  "refresh-cw": RefreshCw,
  "bar-chart-3": BarChart3,
  "pie-chart": PieChart,
  lightbulb: Lightbulb,
  cpu: Cpu,
  "message-circle": MessageCircle,
  "git-branch": GitBranch,
  search: Search,
  bot: Bot,
  link: LinkIcon,
  "grid-3x3": Grid3X3,
};

type IconName = keyof typeof iconMap;

const ServiceIcon = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => {
  const Icon = iconMap[name as IconName] || Database;
  return <Icon className={className} />;
};

const ServiceCard = ({
  service,
  index,
  onHover,
  isActive,
}: {
  service: ServiceItem;
  index: number;
  onHover: (serviceId: string | null) => void;
  isActive: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.2 }}
      onMouseEnter={() => onHover(service.id)}
      onMouseLeave={() => onHover(null)}
      className="relative"
    >
      <Link
        href={service.href}
        className={cn(
          "group flex items-start gap-3 p-3 border-l-2 transition-all duration-200 relative",
          isActive
            ? "bg-slate-800/60 border-l-blue-500 shadow-sm"
            : "hover:bg-slate-800/30 border-l-transparent hover:border-l-slate-600"
        )}
      >
        <div className={cn(
          "w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0 transition-all duration-200",
          isActive 
            ? "bg-blue-500/20 text-blue-400" 
            : "bg-slate-700/50 text-slate-400 group-hover:bg-slate-600/50 group-hover:text-slate-300"
        )}>
          <ServiceIcon name={service.icon} className="w-4 h-4" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className={cn(
              "text-sm font-medium transition-colors duration-200",
              isActive ? "text-white" : "text-slate-200 group-hover:text-white"
            )}>
              {service.title}
            </h3>
            {service.badge && (
              <span className={cn(
                "px-1.5 py-0.5 text-xs font-medium rounded",
                service.badge === "Core" && "bg-emerald-500/10 text-emerald-400",
                service.badge === "Advanced" && "bg-purple-500/10 text-purple-400",
                service.badge === "Coming Soon" && "bg-amber-500/10 text-amber-400"
              )}>
                {service.badge}
              </span>
            )}
          </div>
          <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors line-clamp-2">
            {service.description}
          </p>
        </div>

        <ArrowRight className={cn(
          "w-4 h-4 transition-all duration-200 flex-shrink-0 mt-1",
          isActive 
            ? "text-blue-400 translate-x-0.5" 
            : "text-slate-500 group-hover:text-slate-400 group-hover:translate-x-0.5"
        )} />
      </Link>
    </motion.div>
  );
};

const SubServicesPanel = ({ service }: { service: ServiceItem | null }) => {
  if (!service?.subServices) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 8 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 8 }}
      transition={{ duration: 0.15 }}
      className="absolute left-full top-0 ml-2 w-72 z-50"
    >
      <div className="bg-slate-900/98 backdrop-blur-sm border border-slate-700/50 shadow-xl p-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3 pb-3 border-b border-slate-700/30">
          <div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center">
            <ServiceIcon name={service.icon} className="w-3 h-3 text-blue-400" />
          </div>
          <div>
            <h4 className="text-sm font-medium text-white">{service.title}</h4>
            <p className="text-xs text-slate-500">All services</p>
          </div>
        </div>

        {/* Sub Services List */}
        <div className="space-y-1 max-h-80 overflow-y-auto">
          {service.subServices.map((subService, index) => (
            <motion.div
              key={subService.id}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
            >
              <Link
                href={subService.href}
                className="group flex items-start gap-2 p-2 hover:bg-slate-800/40 transition-colors duration-150"
              >
                <div className="w-5 h-5 rounded bg-slate-700/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-slate-600/40 transition-colors">
                  {subService.icon && (
                    <ServiceIcon name={subService.icon} className="w-2.5 h-2.5 text-slate-400 group-hover:text-slate-300" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <h5 className="text-xs font-medium text-slate-200 group-hover:text-white transition-colors line-clamp-1">
                      {subService.title}
                    </h5>
                    {subService.isNew && (
                      <span className="px-1 py-0.5 text-xs font-medium bg-blue-500/10 text-blue-400 rounded">
                        New
                      </span>
                    )}
                    {subService.isPopular && (
                      <span className="px-1 py-0.5 text-xs font-medium bg-amber-500/10 text-amber-400 rounded">
                        Hot
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors line-clamp-2 leading-relaxed">
                    {subService.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-3 pt-3 border-t border-slate-700/30">
          <Link
            href={service.href}
            className="flex items-center justify-between p-2 bg-blue-500/5 border border-blue-500/20 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-150 group"
          >
            <span className="text-xs font-medium text-blue-400">View all {service.title.toLowerCase()}</span>
            <ArrowRight className="w-3 h-3 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export function ServicesMegaMenu({
  isScrolled,
  className,
}: ServicesMegaMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      setHoveredService(null);
    }, 100);
  };

  const handleServiceHover = (serviceId: string | null) => {
    setHoveredService(serviceId);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setHoveredService(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const hoveredServiceData = hoveredService 
    ? servicesNavigationData.find(s => s.id === hoveredService) 
    : null;

  return (
    <div
      ref={menuRef}
      className={cn("relative", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger Button */}
      <button
        className={cn(
          "flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
          isScrolled
            ? "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            : "text-white/80 hover:text-white hover:bg-white/10",
          isOpen &&
            (isScrolled
              ? "bg-slate-50 text-slate-900"
              : "bg-white/10 text-white")
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Services
        <ChevronDown
          className={cn(
            "w-4 h-4 transition-transform duration-200",
            isOpen ? "rotate-180" : "rotate-0"
          )}
        />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-96 z-50"
          >
            <div className="bg-slate-900/98 backdrop-blur-sm border border-slate-700/50 shadow-xl">
              {/* Header */}
              <div className="px-4 py-3 border-b border-slate-700/30">
                <div className="flex items-center gap-2">
                  <Layers3 className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium text-white">Services</span>
                  <span className="text-xs text-slate-500 ml-auto">Hover to explore</span>
                </div>
              </div>

              {/* Services List */}
              <div className="relative">
                <div className="py-2">
                  {servicesNavigationData.map((service, index) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      index={index}
                      onHover={handleServiceHover}
                      isActive={hoveredService === service.id}
                    />
                  ))}
                </div>

                {/* Sub Services Panel */}
                <AnimatePresence>
                  {hoveredServiceData && (
                    <SubServicesPanel service={hoveredServiceData} />
                  )}
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className="px-4 py-3 border-t border-slate-700/30 bg-slate-800/20">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">Need help choosing?</span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 px-3 py-1 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 text-xs font-medium border border-blue-500/20 hover:border-blue-500/30 transition-all duration-150 group"
                  >
                    Get Started
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
