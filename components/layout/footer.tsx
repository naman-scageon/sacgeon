import Link from "next/link";
import { Mail, Phone, Twitter, Linkedin, Github, PinIcon } from "lucide-react";
import { footerSection } from "@/constants/site-data";
import Image from "next/image";
import { Button } from "../ui/button";

// Define proper TypeScript interfaces for the footer data
export interface FooterSectionData {
  companyName: string;
  tagline: string;
  socialLinks: SocialLink[];
  contactInfo: ContactInfo;
  copyright: string;
  links: QuickLink[];
  quickLinks: QuickLink[];
}

interface SocialLink {
  platform: "Twitter" | "LinkedIn" | "GitHub";
  url: string;
}

interface ContactInfo {
  email: string;
  phone: string;
}

interface QuickLink {
  label: string;
  href: string;
}

// Use a centralized mapping for social icons for better maintainability
const SOCIAL_ICONS = {
  Twitter: <Twitter size={16} className="text-gradient-1" />,
  LinkedIn: <Linkedin size={16} className="text-gradient-2" />,
  GitHub: <Github size={16} className="text-gradient-2" />,
};

export function Footer() {
  const {
    tagline,
    socialLinks,
    contactInfo,
    copyright,
    links,
    // quickLinks,
  } = footerSection;

  return (
    <footer className="bg-[--color-dark-bg] pt-20 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Company Info */}
          <div className="col-span-2">
            <Image src="/logo-white.svg" alt="logo" width={290} height={28} />
            <p className="text-[--color-text-muted] mb-3 text-sm">{tagline}</p>
            <div className="flex space-x-2">
              {socialLinks.map((link) => (
                <Link
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient-1 p-2 rounded-full  transition-colors duration-200"
                  aria-label={link.platform}
                >
                  {SOCIAL_ICONS[link.platform as keyof typeof SOCIAL_ICONS]}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-3">
            <Button className="w-3/4 h-12 rounded-xl text-lg inline-flex items-center justify-center btn-gradient-1 text-white px-4 py-2 transition-colors cursor-pointer">
              Contact Us
            </Button>
            <p className="max-w-xs text-sm font-semibold leading-4">
              {contactInfo.description}
            </p>
            <ul className="space-y-3 my-5 flex flex-col gap-3">
              <li className="flex items-center gap-2 text-[--color-text-muted] text-sm">
                <PinIcon
                  size={16}
                  className="text-[--color-accent-green] flex-shrink-0"
                />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-[--color-accent-green] transition-colors"
                >
                  {contactInfo.address}
                </a>
              </li>
              <li className="flex items-center gap-2 text-[--color-text-muted] text-sm">
                <Mail
                  size={16}
                  className="text-[--color-accent-green] flex-shrink-0"
                />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-[--color-accent-green] transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-[--color-text-muted] text-sm">
                <Phone
                  size={16}
                  className="text-[--color-accent-green] flex-shrink-0"
                />
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="hover:text-[--color-accent-green] transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-4">
            <p className="text-[--color-text-muted] text-xs md:mb-0">
              {copyright}
            </p>
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[--color-text-muted] text-xs hover:text-[--color-accent-green] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Linkedin size={16} className="text-gradient-2" />
        </div>
      </div>
    </footer>
  );
}
