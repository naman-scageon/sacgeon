import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Calendar, MessageCircle } from "lucide-react";
import { footerSection } from "@/constants/site-data";
import Image from "next/image";
import { Button } from "../ui/button";

export function Footer() {
  const { contactInfo, copyright, links } = footerSection;

  const serviceLinks = [
    { name: "Data Strategy & Analytics", href: "/services/data-strategy" },
    { name: "AI Model Development", href: "/services/ai-development" },
    { name: "Cloud Migration", href: "/services/cloud-migration" },
    { name: "Legacy Modernization", href: "/services/modernization" }
  ];

  const industryLinks = [
    { name: "Manufacturing", href: "/industries/manufacturing" },
    { name: "Healthcare", href: "/industries/healthcare" },
    { name: "Financial Services", href: "/industries/financial" },
    { name: "Retail & E-commerce", href: "/industries/retail" }
  ];

  const resourceLinks = [
    { name: "Case Studies", href: "/case-studies" },
    { name: "Data Readiness Assessment", href: "/assessment" },
    { name: "ROI Calculator", href: "/calculator" },
    { name: "Implementation Guide", href: "/guide" }
  ];

  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Image
              src="/logo-white.svg"
              alt="Scageon logo"
              width={160}
              height={32}
              className="mb-6"
            />
            <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-md">
              Specialized data and AI consultancy helping mid-market enterprises modernize their data infrastructure and implement intelligent solutions.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-green-400 flex-shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-green-400 transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                <a
                  href={`tel:${contactInfo.phone.replace(/\\s/g, "")}`}
                  className="hover:text-green-400 transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 mb-6">
              <Link
                href="https://linkedin.com"
                className="w-10 h-10 bg-white/5 hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-400 rounded-lg flex items-center justify-center transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </Link>
              <Link
                href="https://twitter.com"
                className="w-10 h-10 bg-white/5 hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-400 rounded-lg flex items-center justify-center transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </Link>
              <Link
                href="https://github.com"
                className="w-10 h-10 bg-white/5 hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-400 rounded-lg flex items-center justify-center transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3">
              <Link href="/contact">
                <Button className="w-full bg-gradient-to-r from-green-400 to-blue-400 text-black font-semibold hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/assessment">
                <Button 
                  variant="outline" 
                  className="w-full border-white/20 text-white hover:bg-white/10"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Free Assessment
                </Button>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href} 
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Industries</h4>
            <ul className="space-y-3">
              {industryLinks.map((industry) => (
                <li key={industry.name}>
                  <Link 
                    href={industry.href} 
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((resource) => (
                <li key={resource.name}>
                  <Link 
                    href={resource.href} 
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Newsletter Signup */}
            <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
              <h5 className="text-white text-sm font-semibold mb-2">Industry Insights</h5>
              <p className="text-gray-400 text-xs mb-3">
                Get monthly updates on data & AI trends
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded text-sm text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
                />
                <Button 
                  size="sm" 
                  className="bg-green-400 text-black hover:bg-green-500 px-3"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
          <div className="flex flex-wrap gap-6 text-gray-400 text-sm order-2 md:order-1 mt-4 md:mt-0">
            <p>{copyright} Scageon. All rights reserved.</p>
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-green-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4 order-1 md:order-2 mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              Trusted by 50+ companies
            </p>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-xs">Available for new projects</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
