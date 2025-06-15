import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Calendar,
  MessageCircle,
  ArrowRight,
  Star,
  CheckCircle,
} from "lucide-react";
import { footerSection } from "@/constants/site-data";
import Image from "next/image";
import { Button } from "../ui/button";

export function Footer() {
  const { contactInfo, copyright, links } = footerSection;

  const serviceLinks = [
    { name: "AI Strategy & Implementation", href: "/services/ai-strategy" },
    { name: "Data Platform Modernization", href: "/services/data-platform" },
    { name: "Intelligent Automation", href: "/services/automation" },
    { name: "Analytics & Insights", href: "/services/analytics" },
  ];

  const solutionLinks = [
    { name: "Enterprise AI", href: "/solutions/enterprise-ai" },
    { name: "Data Intelligence", href: "/solutions/data-intelligence" },
    { name: "Process Automation", href: "/solutions/automation" },
    { name: "Predictive Analytics", href: "/solutions/predictive" },
  ];

  const resourceLinks = [
    { name: "Success Stories", href: "/success-stories" },
    { name: "AI Readiness Assessment", href: "/assessment" },
    { name: "Implementation Playbook", href: "/playbook" },
    { name: "ROI Calculator", href: "/calculator" },
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Partners", href: "/partners" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-slate-900 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 to-slate-900" />

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-slate-700/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Join industry leaders who trust us to deliver measurable results.
              Get insights, case studies, and AI implementation strategies
              delivered monthly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
              <input
                type="email"
                placeholder="Enter your business email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No spam, unsubscribe anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>Trusted by 200+ companies</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Company Info - Takes up 2 columns */}
            <div className="lg:col-span-2">
              <Image
                src="/logo-white.svg"
                alt="Scageon logo"
                width={160}
                height={32}
                className="mb-6"
              />
              <p className="text-slate-400 leading-relaxed mb-8 max-w-sm">
                We help enterprise businesses unlock the power of AI and data to
                drive growth, efficiency, and innovation at scale.
              </p>

              {/* Contact Information */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">
                      Global Headquarters
                    </p>
                    <p className="text-slate-400 text-sm">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-slate-400 text-sm hover:text-blue-400 transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <a
                      href={`tel:${contactInfo.phone.replace(/\\s/g, "")}`}
                      className="text-slate-400 text-sm hover:text-blue-400 transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Availability Status */}
              <div className="inline-flex items-center gap-2 px-3 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm font-medium">
                  Available for new projects
                </span>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {serviceLinks.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span>{service.name}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="text-white font-semibold mb-6">Solutions</h4>
              <ul className="space-y-3">
                {solutionLinks.map((solution) => (
                  <li key={solution.name}>
                    <Link
                      href={solution.href}
                      className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span>{solution.name}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-semibold mb-6">Resources</h4>
              <ul className="space-y-3">
                {resourceLinks.map((resource) => (
                  <li key={resource.name}>
                    <Link
                      href={resource.href}
                      className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span>{resource.name}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold mb-6">Company</h4>
              <ul className="space-y-3 mb-8">
                {companyLinks.map((company) => (
                  <li key={company.name}>
                    <Link
                      href={company.href}
                      className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span>{company.name}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social Links */}
              <div>
                <h5 className="text-white font-semibold mb-4">Follow Us</h5>
                <div className="flex gap-3">
                  <Link
                    href="https://linkedin.com"
                    className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                  </Link>
                  <Link
                    href="https://twitter.com"
                    className="w-10 h-10 bg-slate-800 hover:bg-sky-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                  </Link>
                  <Link
                    href="https://github.com"
                    className="w-10 h-10 bg-slate-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-300 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 mb-12 border border-slate-600/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Ready to Get Started?
                </h3>
                <p className="text-slate-400">
                  Book a consultation to discuss your AI transformation journey.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Consultation
                  </Button>
                </Link>
                <Link href="/assessment">
                  <Button
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-6 py-3 rounded-lg"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Free Assessment
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-slate-400 text-sm">
              <p>{copyright} Scageon. All rights reserved.</p>
              <div className="flex gap-6">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-slate-400">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <span>4.9/5 client satisfaction</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>ISO 27001 Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
