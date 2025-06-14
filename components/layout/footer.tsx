import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import { footerSection } from "@/constants/site-data";
import Image from "next/image";
import { Button } from "../ui/button";

export function Footer() {
  const { contactInfo, copyright, links } = footerSection;

  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Image
              src="/logo-white.svg"
              alt="Scageon logo"
              width={160}
              height={32}
              className="mb-6"
            />
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
              Pioneering IT services firm dedicated to driving business transformation 
              through cutting-edge AI and data solutions.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
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
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  Data Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  AI Engineering
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  Application Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & CTA */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4 mb-6">
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
            
            <Link href="/contact">
              <Button className="w-full bg-gradient-to-r from-green-400 to-blue-400 text-black font-semibold hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300">
                Get Started
              </Button>
            </Link>
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
          <p className="text-gray-400 text-sm order-1 md:order-2 mb-4 md:mb-0">
            Made with ❤️ for the future
          </p>
        </div>
      </div>
    </footer>
  );
}
