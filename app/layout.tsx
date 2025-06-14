import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Scageon - Data & AI Solutions for Mid-Market Enterprises",
  description: "Specialized data and AI consultancy helping enterprises modernize their data infrastructure, implement analytics platforms, and deploy practical AI solutions. Proven results with 95% client satisfaction.",
  keywords: "data analytics, AI implementation, cloud migration, business intelligence, data modernization, enterprise software",
  openGraph: {
    title: "Scageon - Data & AI Solutions for Mid-Market Enterprises",
    description: "Transform your business with proven data and AI solutions. 50+ successful projects delivered.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${inter.variable} antialiased font-sans`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
