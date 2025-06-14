import { title } from "process";

export const navItems = [
  { label: "Who we are", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Select Stories", href: "#selectStories" },
];

export const heroSection = {
  subtTitle: "AI-NATIVE TRANSFORMATION",
  title: "SCAGEON",
  description: "We transform enterprises with AI-native solutions, turning complex data into intelligent business advantages through cutting-edge engineering.",
};


export const aboutSection = {
  getTo : "Get to",
  knowBetter:"Know Us Better",
   title : "From enterprise development expertise to AI-first innovation - we bring deep technical knowledge and startup agility to complex business challenges.",
   subTitle:"Building the future of AI-native business transformation.",
   description:"We leverage our enterprise development background to create AI solutions that actually work in complex business environments.",
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
  headline: "Transform your enterprise with",
  highlightedHeadline: "AI-Native Solutions",
  tagline:
    "We build intelligent systems from the ground up, combining enterprise-grade reliability with cutting-edge AI innovation.",
  services: [
    {
      id: "ai-transformation",
      title: "AI Transformation Strategy",
      description:
        "Design comprehensive AI adoption roadmaps that align with your business objectives, from proof-of-concept to enterprise-wide implementation.",
      icon: "/services/dataService.svg",
    },
    {
      id: "intelligent-systems",
      title: "Intelligent System Development",
      description:
        "Build custom AI-powered applications with neural networks, machine learning models, and automated decision-making capabilities tailored to your industry.",
  icon: "/services/aiMlService.svg",
    },
    {
      id: "ai-integration",
      title: "AI Integration & Automation",
      description:
        "Seamlessly integrate AI capabilities into existing enterprise systems, creating intelligent workflows that enhance productivity and decision-making.",
       icon: "/services/productService.svg",
    },

  ],
};

export const casesSection = {
  headline: "AI Transformation",
  highlightedHeadline: "Scenarios",
  cases: [
    {
      id: 1,
      title: "Manufacturing Intelligence",
      description:
        "Transform production lines with predictive maintenance, quality control, and supply chain optimization through AI-powered sensors and analytics.",
      icon: "file-text",
      impact: "40% reduction in downtime",
      technologies: ["Computer Vision", "Predictive Analytics", "IoT Integration"]
    },
    {
      id: 2,
      title: "Healthcare AI Assistant",
      description:
        "Build intelligent diagnosis support systems that analyze medical data, predict patient risks, and optimize treatment recommendations.",
      icon: "activity",
      impact: "60% faster diagnosis",
      technologies: ["Medical NLP", "Deep Learning", "Clinical Decision Support"]
    },
    {
      id: 3,
      title: "Financial Intelligence Platform",
      description: "Create AI-native fraud detection, risk assessment, and algorithmic trading systems that adapt to market conditions in real-time.",
      icon: "truck",
      impact: "90% fraud detection accuracy",
      technologies: ["Anomaly Detection", "Time Series Analysis", "Ensemble Methods"]
    },
    {
      id: 4,
      title: "Retail Personalization Engine",
      description:
        "Develop intelligent recommendation systems that understand customer behavior, predict trends, and optimize inventory across channels.",
      icon: "users",
      impact: "35% increase in conversion",
      technologies: ["Recommender Systems", "Behavioral Analytics", "Dynamic Pricing"]
    },
    {
      id: 5,
      title: "Smart City Operations",
      description:
        "Design AI systems for traffic optimization, energy management, and public safety through integrated sensor networks and predictive models.",
      icon: "trending-up",
      impact: "25% efficiency improvement",
      technologies: ["Edge Computing", "Multi-Agent Systems", "Optimization Algorithms"]
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
