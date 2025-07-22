import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { footerSection } from "@/constants/site-data";
import Image from "next/image";
export function Footer() {
  const { contactInfo, copyright, links } = footerSection;
  return (
    <footer className="bg-black relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 border-b border-slate-800/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Company Info */}
            <div className="md:col-span-1">
              <Image
                src="/logo-white.svg"
                alt="Scageon logo"
                width={140}
                height={28}
                className="mb-4"
              />
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Transforming data into business value through proven expertise.
              </p>
            </div>
            {/* Contact Information */}
            <div className="md:col-span-1">
              <h4 className="text-white font-medium mb-4 text-sm">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-slate-500 flex-shrink-0" />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-slate-400 text-sm hover:text-white transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-slate-500 flex-shrink-0" />
                  <div className="text-slate-400 text-xs flex gap-2">
                    {contactInfo.phone.map((phone, index) => (
                      <span key={phone}>
                        <a
                          key={phone}
                          href={`tel:${phone}`}
                          className="text-slate-400 hover:text-white transition-colors"
                        >
                          {phone}
                        </a>
                        {index < contactInfo.phone.length - 1 && ", "}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400 text-sm">
                    {contactInfo.address}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-slate-500 text-sm">
              {copyright} Scageon. All rights reserved.
            </div>
            <div className="flex gap-6">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-slate-500 hover:text-slate-300 transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
