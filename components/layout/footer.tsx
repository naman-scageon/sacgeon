// import Link from "next/link";
// import { Mail, Phone, Twitter, Linkedin, Github, PinIcon } from "lucide-react";
// import { footerSection } from "@/constants/site-data";
// import Image from "next/image";
// import { Button } from "../ui/button";

// // Define proper TypeScript interfaces for the footer data
// export interface FooterSectionData {
//   companyName: string;
//   tagline: string;
//   socialLinks: SocialLink[];
//   contactInfo: ContactInfo;
//   copyright: string;
//   links: QuickLink[];
//   quickLinks: QuickLink[];
// }

// interface SocialLink {
//   platform: "Twitter" | "LinkedIn" | "GitHub";
//   url: string;
// }

// interface ContactInfo {
//   email: string;
//   phone: string;
// }

// interface QuickLink {
//   label: string;
//   href: string;
// }

// // Use a centralized mapping for social icons for better maintainability
// const SOCIAL_ICONS = {
//   Twitter: <Twitter size={16} className="text-gradient-1" />,
//   LinkedIn: <Linkedin size={16} className="text-gradient-2" />,
//   GitHub: <Github size={16} className="text-gradient-2" />,
// };

// export function Footer() {
//   const {
//     tagline,
//     socialLinks,
//     contactInfo,
//     copyright,
//     links,
//     // quickLinks,
//   } = footerSection;

//   return (
//     <footer className="bg-[--color-dark-bg] pt-20 pb-4">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
//           {/* Company Info */}
//           <div className="col-span-2">
//             <Image src="/logo-white.svg" alt="logo" width={290} height={28} />
//             <p className="text-[--color-text-muted] mb-3 text-sm">{tagline}</p>
//             <div className="flex space-x-2">
//               {socialLinks.map((link) => (
//                 <Link
//                   key={link.platform}
//                   href={link.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="btn-gradient-1 p-2 rounded-full  transition-colors duration-200"
//                   aria-label={link.platform}
//                 >
//                   {SOCIAL_ICONS[link.platform as keyof typeof SOCIAL_ICONS]}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Contact Info */}
//           <div className="flex flex-col gap-3">
//             <Button className="w-3/4 h-12 rounded-xl text-lg inline-flex items-center justify-center btn-gradient-1 text-white px-4 py-2 transition-colors cursor-pointer">
//               Contact Us
//             </Button>
//             <p className="max-w-xs text-sm font-semibold leading-4">
//               {contactInfo.description}
//             </p>
//             <ul className="space-y-3 my-5 flex flex-col gap-3">
//               <li className="flex items-center gap-2 text-[--color-text-muted] text-sm">
//                 <PinIcon
//                   size={16}
//                   className="text-[--color-accent-green] flex-shrink-0"
//                 />
//                 <a
//                   href={`mailto:${contactInfo.email}`}
//                   className="hover:text-[--color-accent-green] transition-colors"
//                 >
//                   {contactInfo.address}
//                 </a>
//               </li>
//               <li className="flex items-center gap-2 text-[--color-text-muted] text-sm">
//                 <Mail
//                   size={16}
//                   className="text-[--color-accent-green] flex-shrink-0"
//                 />
//                 <a
//                   href={`mailto:${contactInfo.email}`}
//                   className="hover:text-[--color-accent-green] transition-colors"
//                 >
//                   {contactInfo.email}
//                 </a>
//               </li>
//               <li className="flex items-center gap-2 text-[--color-text-muted] text-sm">
//                 <Phone
//                   size={16}
//                   className="text-[--color-accent-green] flex-shrink-0"
//                 />
//                 <a
//                   href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
//                   className="hover:text-[--color-accent-green] transition-colors"
//                 >
//                   {contactInfo.phone}
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Copyright Section */}
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <div className="flex flex-wrap gap-4">
//             <p className="text-[--color-text-muted] text-xs md:mb-0">
//               {copyright}
//             </p>
//             {links.map((link) => (
//               <Link
//                 key={link.label}
//                 href={link.href}
//                 className="text-[--color-text-muted] text-xs hover:text-[--color-accent-green] transition-colors"
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </div>
//           <Linkedin size={16} className="text-gradient-2" />
//         </div>
//       </div>
//     </footer>
//   );
// }
import Link from "next/link";
import { Mail, Phone, PinIcon, Linkedin } from "lucide-react"; // Only these icons are used for this design
import { footerSection } from "@/constants/site-data";
import Image from "next/image";
import { Button } from "../ui/button"; // Assuming this is your Shadcn UI button

// Define proper TypeScript interfaces for the footer data
export interface FooterSectionData {
  companyName: string;
  tagline: string;
  socialLinks: SocialLink[]; // Not used in this specific design from image
  contactInfo: ContactInfo;
  copyright: string;
  links: QuickLink[]; // For bottom copyright links
  mainFooterLinks: {
    services: ServiceSection[]; // Updated type for services
    aboutUs: QuickLink[];
  };
}

// Interface for nested service links
interface ServiceSection {
  label: string; // e.g., "Data Services"
  href: string; // Main section link, often a placeholder like "#"
  subLinks: QuickLink[]; // Array of actual sub-links
}

interface SocialLink {
  platform: "Twitter" | "LinkedIn" | "GitHub";
  url: string;
}

interface ContactInfo {
  description: string;
  address: string;
  email: string;
  phone: string;
}

interface QuickLink {
  label: string;
  href: string;
}

// SOCIAL_ICONS not needed as per image, but keeping the structure for future use
// const SOCIAL_ICONS = {
//   Twitter: <Twitter size={16} className="text-gradient-1" />,
//   LinkedIn: <Linkedin size={16} className="text-gradient-2" />,
//   GitHub: <Github size={16} className="text-gradient-2" />,
// };

export function Footer() {
  const {
    // tagline, // No tagline under logo in this image
    // socialLinks, // No social links under logo in this image
    contactInfo,
    copyright,
    links,
    mainFooterLinks,
  } = footerSection;

  return (
    <footer className="bg-[--color-dark-bg] pt-15 pb-4 text-white">
      {" "}
      {/* Added text-white to base */}
      <div className="container mx-auto px-4">
        {/* Main Footer Grid */}
        {/* Adjusted grid for 4 columns on medium and larger screens */}
        {/* Column 1: Company Logo */}
        <div className="flex flex-col items-start">
          {/* The image shows "SCAGEON" as an image logo, not text */}
          <Image
            src="/logo-white.svg" // Assuming this is the path to your Scageon logo
            alt="Scageon logo"
            width={160} // Adjust width based on your logo's appearance in the image
            height={28} // Adjust height
            className="mb-6" // Increased margin bottom
          />
          {/* No tagline or social links visible under logo in this design */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          {" "}
          {/* Adjusted mb to 20 */}
          {/* Column 2: Services */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-5">Services</h4>{" "}
            {/* Increased mb */}
            <div className="space-y-4">
              {" "}
              {/* Space between main service categories */}
              {mainFooterLinks.services.map((serviceSection, sectionIndex) => (
                <div key={sectionIndex}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <Link
                      href={serviceSection.href}
                      className="text-white font-medium hover:text-[--color-accent-green] transition-colors text-base mb-2 block" // Styling for main service heading (e.g., "Data Services")
                    >
                      {serviceSection.label}
                    </Link>
                    <ul className="space-y-2 ml-2">
                      {" "}
                      {/* Indent sub-links slightly */}
                      {serviceSection.subLinks.map((subLink, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subLink.href}
                            className="text-[--color-text-muted] hover:text-[--color-accent-green] transition-colors text-sm"
                          >
                            {subLink.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Column 3: About Us */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-5">About us</h4>{" "}
            {/* Increased mb */}
            {/* As per the image, there are no links under "About us".
                If you add them later, map them here like Services sub-links. */}
            {/* {mainFooterLinks.aboutUs.length > 0 && (
                <ul className="space-y-2">
                    {mainFooterLinks.aboutUs.map((link, index) => (
                        <li key={index}>
                            <Link
                                href={link.href}
                                className="text-[--color-text-muted] hover:text-[--color-accent-green] transition-colors text-sm"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )} */}
          </div>
          {/* Column 3: About Us */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-5">Contact</h4>{" "}
            {/* Increased mb */}
            <ul className="space-y-3">
              <li className="flex items-center justify-start gap-2 text-[--color-text-muted] text-sm">
                {" "}
                {/* Added justify-end */}
                <Image
                  src="/connect/location.svg" // Assuming this is the path to your Scageon logo
                  alt="ocation"
                  width={18} // Adjust width based on your logo's appearance in the image
                  height={18} // Adjust height
                />
                <span className="text-[--color-text-muted]">
                  {" "}
                  {/* Changed to span */}
                  {contactInfo.address}
                </span>
              </li>
              <li className="flex items-center justify-start gap-2 text-[--color-text-muted] text-sm">
                {" "}
                {/* Added justify-end */}
                <Image
                  src="/connect/mail.svg" // Assuming this is the path to your Scageon logo
                  alt="Mail"
                  width={18} // Adjust width based on your logo's appearance in the image
                  height={18} // Adjust height
                />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-[--color-accent-green] transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center justify-start gap-2 text-[--color-text-muted] text-sm">
                {" "}
                {/* Added justify-end */}
                <Image
                  src="/connect/phoneCall.svg" // Assuming this is the path to your Scageon logo
                  alt="Phone Call"
                  width={18} // Adjust width based on your logo's appearance in the image
                  height={18} // Adjust height
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
          {/* Column 4: Contact Info & CTA */}
          <div className="flex flex-col items-start text-right">
            {" "}
            {/* Align to end for right column */}
            <Button className="w-3xs h-12 rounded-xl text-lg inline-flex items-center justify-center bg-white text-black font-semibold px-6 py-2 transition-colors duration-200 hover:bg-gray-200 cursor-pointer mb-5">
              {" "}
              {/* Styled to be a white button with black text */}
              Contact us
            </Button>
            <p className="max-w-xs text-sm leading-relaxed text-left text-[--color-text-muted] mb-8 mt-3">
              {" "}
              {/* Align text right, adjusted mb and text color */}
              {contactInfo.description}
            </p>
          </div>
        </div>

        {/* No horizontal line with dotted X in this design */}

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          {" "}
          {/* Added border-t for separator and pt-8 */}
          <div className="flex flex-wrap gap-4 text-[--color-text-muted] text-xs order-2 md:order-1 mt-4 md:mt-0">
            {" "}
            {/* Added mt-4 for mobile spacing */}
            <p className="mb-0">{copyright}</p>
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-[--color-accent-green] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          {/* LinkedIn icon (placed as seen in image, far right) */}
          <Linkedin
            size={16}
            className="text-[--color-text-muted] order-1 md:order-2 mb-4 md:mb-0"
          />{" "}
          {/* Adjusted color, order, and mb */}
        </div>
      </div>
    </footer>
  );
}
