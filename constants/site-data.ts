import { title } from "process";

export const navItems = [
  { label: "Who we are", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Select Stories", href: "#selectStories" },
];

export const heroSection = {
  subtTitle : "WE ARE",
   title : "SCAGEON",
   description:"We are driving business transformation by unlocking the power of data, leveraging digital technologies and implementing AI .",
  img: "/technologyDigital.svg",
  // title: "Driving Digital",
  // highlightedTitle: ["Transformation", "Innovation", "Design", "Concept"],
  // description:
  //   "We're creating the next generation of digital products that businesses need to stay competitive in today's digital landscape. Our team is experienced, knowledgeable, and passionate.",
  // ctaButton: "Get Started",
  // ctaLink: "#contact",
};


export const aboutSection = {
  getTo : "Get to",
  knowBetter:"Know Us Better",
   title : "Scageon brings together a highly experienced team and has already partnered with notable industry players.",
   subTitle:"Scageon drives digital transformations by unlocking the power of Data.",
   description:"We are driving business transformation by unlocking the power of data, leveraging digital technologies and implementing AI .",
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
  headline: "Get your business",
  highlightedHeadline: "Problem Solved",
  tagline:
    "Scageon helps you grow your business with AI-driven solutions and methods.",
  services: [
    {
      id: "data-service",
      title: "Data Service",
      description:
        "Strategic technology consulting to help businesses navigate digital transformation, optimize processes, and make informed decisions for sustainable growth.",
      icon: "/services/dataService.svg",
    },
    {
      id: "ai-ml-services",
      title: "AI ML Services",
      description:
        "Leverage the power of artificial intelligence and machine learning to transform your business processes and create intelligent solutions that drive innovation.",
  icon: "/services/aiMlService.svg",
    },
    {
      id: "product-design",
      title: "Product & Design",
      description:
        "Strategic technology consulting to help businesses navigate digital transformation, optimize processes, and make informed decisions for sustainable growth.",
       icon: "/services/productService.svg",
    },
    // {
    //   id: "application-services",
    //   title: "Application Services",
    //   description:
    //     "Develop robust and scalable applications with our expert development team. We create custom software solutions tailored to your business needs.",
    //   icon: "code",
    // },
  ],
};

export const casesSection = {
  headline: "Learn how Scageon handles",
  highlightedHeadline: "Real-world tasks",
  cases: [
    {
      id: 1,
      title: "Intelligent Document Processing",
      description:
        "Automated extraction and processing of data from various document types using AI",
      icon: "file-text",
    },
    {
      id: 2,
      title: "Healthcare Data Analysis",
      description:
        "Advanced analytics for healthcare providers to improve patient outcomes",
      icon: "activity",
    },
    {
      id: 3,
      title: "Supply Chain Optimization",
      description: "AI-driven logistics and inventory management solutions",
      icon: "truck",
    },
    {
      id: 4,
      title: "Customer Experience Enhancement",
      description:
        "Personalized customer journeys powered by predictive analytics",
      icon: "users",
    },
    {
      id: 5,
      title: "Financial Risk Assessment",
      description:
        "Machine learning models for accurate financial risk prediction",
      icon: "trending-up",
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
  middleText: "into intelligence",
  middleTextLine:"—",
  secondHighlighted: "Engineering",
  tagline: "the future",
  finalText: "with AI",
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
