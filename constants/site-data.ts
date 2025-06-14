import { title } from "process";

export const navItems = [
  { label: "Who we are", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Select Stories", href: "#selectStories" },
];

export const heroSection = {
  subtTitle: "DATA-DRIVEN BUSINESS INTELLIGENCE",
  title: "SCAGEON",
  description: "We help enterprises unlock the value of their data through strategic analytics, modern data platforms, and targeted AI solutions that deliver measurable business outcomes.",
};


export const aboutSection = {
  getTo : "Get to",
  knowBetter:"Know Us Better",
   title : "Specialized data and AI consultancy helping mid-market enterprises modernize their data infrastructure and implement intelligent solutions that drive real business value.",
   subTitle:"Your trusted partner for data modernization and AI implementation.",
   description:"We combine deep technical expertise with proven methodologies to deliver data platforms, analytics solutions, and AI implementations that actually work in enterprise environments.",
  img: ["/partnersImg/Shutterfly.svg","/partnersImg/Zoom.svg","/partnersImg/Facebook.svg","/partnersImg/Google.svg"],
}

export const partnersSection = {
  tagline:
    "Scageon brings together a highly experienced team and has already partnered with notable industry players.",
  partners: [
    { name: "Shutterfly", icon: "camera" },
    { name: "Zoom", icon: "video" },
    { name: "Facebook", icon: "facebook" },
    { name: "Google", icon: "search" },
  ],
};

export const servicesSection = {
  headline: "Accelerate your business with",
  highlightedHeadline: "Data & AI Solutions",
  tagline:
    "We deliver practical data platforms, analytics solutions, and AI implementations that drive measurable business outcomes.",
  services: [
    {
      id: "data-services",
      title: "Data Services",
      description:
        "Modernize your data infrastructure with cloud migration, data warehousing, integration, and advanced analytics platforms that scale with your business.",
      icon: "/services/dataService.svg",
      deliverables: ["Data Strategy & Assessment", "Cloud Migration", "Data Warehouse Implementation", "Business Intelligence Dashboards"],
      outcomes: ["40% faster reporting", "60% cost reduction", "Single source of truth"]
    },
    {
      id: "ai-engineering",
      title: "AI Engineering",
      description:
        "Implement practical AI solutions including custom models, NLP systems, predictive analytics, and intelligent automation tailored to your industry needs.",
  icon: "/services/aiMlService.svg",
      deliverables: ["AI Readiness Assessment", "Custom Model Development", "MLOps Implementation", "AI Chatbot Development"],
      outcomes: ["85% accuracy improvement", "50% process automation", "Real-time insights"]
    },
    {
      id: "application-services",
      title: "Application Services",
      description:
        "Modernize legacy systems and build cloud-native applications with robust APIs, microservices architecture, and seamless third-party integrations.",
       icon: "/services/productService.svg",
       deliverables: ["Legacy System Assessment", "Cloud-Native Development", "API Integration", "System Modernization"],
       outcomes: ["70% performance improvement", "99.9% uptime", "Scalable architecture"]
    },

  ],
};

export const casesSection = {
  headline: "Real Client",
  highlightedHeadline: "Success Stories",
  cases: [
    {
      id: 1,
      title: "Manufacturing Data Platform",
      description:
        "Implemented a comprehensive data warehouse and analytics platform for a mid-size manufacturer, consolidating production, inventory, and sales data.",
      icon: "file-text",
      impact: "40% reduction in reporting time",
      technologies: ["PostgreSQL", "Apache Spark", "Power BI"],
      client: "Manufacturing Company",
      timeline: "6 months",
      challenge: "Siloed data across 15+ systems",
      solution: "Unified data platform with real-time dashboards"
    },
    {
      id: 2,
      title: "Healthcare Analytics Implementation",
      description:
        "Built a patient data analytics system for a regional healthcare provider, enabling better resource allocation and patient care optimization.",
      icon: "activity",
      impact: "25% improvement in resource utilization",
      technologies: ["HIPAA-compliant cloud", "Python", "Tableau"],
      client: "Regional Healthcare Provider",
      timeline: "4 months",
      challenge: "Manual reporting taking 40+ hours weekly",
      solution: "Automated analytics with predictive insights"
    },
    {
      id: 3,
      title: "Financial Services Modernization",
      description: "Migrated legacy systems to cloud and implemented real-time fraud detection for a financial services company.",
      icon: "truck",
      impact: "60% faster transaction processing",
      technologies: ["AWS", "Machine Learning", "API Gateway"],
      client: "Financial Services Firm",
      timeline: "8 months",
      challenge: "Legacy systems causing delays and security risks",
      solution: "Cloud-native platform with ML-powered fraud detection"
    },
    {
      id: 4,
      title: "Retail Customer Analytics",
      description:
        "Developed customer behavior analytics and inventory optimization system for a retail chain with 50+ locations.",
      icon: "users",
      impact: "22% increase in inventory turnover",
      technologies: ["MongoDB", "Python", "React Dashboard"],
      client: "Multi-location Retailer",
      timeline: "5 months",
      challenge: "Poor inventory management and customer insights",
      solution: "Integrated analytics platform with predictive inventory"
    },
    {
      id: 5,
      title: "Supply Chain Optimization",
      description:
        "Built end-to-end supply chain visibility platform with predictive analytics for a logistics company.",
      icon: "trending-up",
      impact: "18% reduction in operational costs",
      technologies: ["Apache Kafka", "Elasticsearch", "Node.js"],
      client: "Logistics Company",
      timeline: "7 months",
      challenge: "Lack of real-time visibility across supply chain",
      solution: "Real-time tracking with predictive alerts"
    },
  ],
};

export const techStackSection = {
  headline: "Tech Stack",
  tagline: "Get to know about the",
  highlightedTagline: "Technology we use",
  technologies: [
    { name: "RabbitMQ", category: "Message Broker", icon: "message-square" },
    { name: "Python", category: "Programming", icon: "code" },
    { name: "Node.js", category: "Backend", icon: "server" },
    { name: "Golang", category: "Programming", icon: "code" },
    { name: "PostgreSQL", category: "Database", icon: "database" },
    { name: "Blockchain", category: "Security", icon: "lock" },
    { name: "Python", category: "Programming", icon: "code" },
    { name: "MongoDB", category: "Database", icon: "database" },
    { name: "Apache NiFi", category: "Data Processing", icon: "git-branch" },
  ],
};

export const testimonialSection = {
  headline: "Built with",
  highlightedHeadline: "Precision",
  tagline: "backed by those Who Know",
  testimonials: [
    {
      id: 1,
      quote:
        "Scageon is a trusted development partner of ours throughout the entire process. At each step, their team was proactive and committed to delivering a high-quality product. The application they developed has significantly improved our operational efficiency and customer engagement.",
      author: "Name",
      position: "Position, Company",
      icon: "user",
      avatarUrl: "/images/avatar.jpg",
    },
  ],
};

export const articlesSection = {
  headline: "Learn about",
  highlightedHeadline: "Changing World",
  tagline: "with us",
  articles: [
    {
      id: 1,
      title: "Digital Transformation",
      category: "Article",
      image: "/articles/article1.svg",
    },
    {
      id: 2,
      title: "Building Trust",
      category: "Article",
      image: "/articles/article2.svg",
    },
    {
      id: 3,
      title: "Customer Review",
      category: "Study",
      image: "/articles/article3.svg",
    },
  ],
};

export const closingSection = {
  headline: "Transforming",
  highlightedHeadline: "Data",
  middleText: "into business",
  middleTextLine:"—",
  secondHighlighted: "Value",
  tagline: "through proven",
  finalText: "expertise",
};

export const footerSection = {
  companyName: "SCAGEON",
  tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing",
  socialLinks: [
    { platform: "Twitter", url: "https://twitter.com", icon: "twitter" },
    { platform: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
    { platform: "GitHub", url: "https://github.com", icon: "github" },
  ],
  contactInfo: {
    email: "info@scageon.com",
    phone: "+1 (123) 456-7890",
    address: "42nd Street, New York",
    description: "Get in Touch to see what Scageon can do for your business.",
  },
  copyright: "© 2023",
  links: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
  // New structure for main footer links, reflecting the image's nested structure
  mainFooterLinks: {
    services: [
      {
        label: "Data Services",
        href: "#",
        subLinks: [
          { label: "Data Strategy", href: "#" },
          { label: "Data Management and Engineering", href: "#" },
          { label: "Data Analytics", href: "#" },
        ],
      },
      {
        label: "AIML Services",
        href: "#",
        subLinks: [
          { label: "AI Consulting Services", href: "#" },
          { label: "AI Model Development", href: "#" },
          { label: "NLP and Generative AI", href: "#" },
          { label: "MLOps", href: "#" },
        ],
      },
      {
        label: "Product and Design",
        href: "#",
        subLinks: [
          { label: "XX", href: "#" },
          { label: "XX", href: "#" },
          { label: "XX", href: "#" },
          { label: "XX", href: "#" },
        ],
      },
    ],
    aboutUs: [], // Empty as per the image
  }
};
