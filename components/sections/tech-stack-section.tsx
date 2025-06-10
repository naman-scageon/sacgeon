"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Marquee } from "../magicui/marquee";

// Define TypeScript interfaces
interface Technology {
  name: string;
  category: string;
  svgPath: string;
}

// Hardcoded tech stack data with SVG paths
const technologies: Technology[] = [
  { name: "Anthropic", category: "AI", svgPath: "/tech-stack/anthropic.svg" },
  {
    name: "Apache Airflow",
    category: "Data Pipeline",
    svgPath: "/tech-stack/apache-airflow-svgrepo-com.svg",
  },
  {
    name: "Apache Flink",
    category: "Stream Processing",
    svgPath: "/tech-stack/apache-flink-svgrepo-com.svg",
  },
  {
    name: "Apache Spark",
    category: "Big Data",
    svgPath: "/tech-stack/apache-spark-svgrepo-com.svg",
  },
  {
    name: "Apache",
    category: "Web Server",
    svgPath: "/tech-stack/apache-svgrepo-com.svg",
  },
  {
    name: "Atlassian",
    category: "DevOps",
    svgPath: "/tech-stack/atlassian-svgrepo-com.svg",
  },
  {
    name: "Docker",
    category: "Containerization",
    svgPath: "/tech-stack/docker-svgrepo-com.svg",
  },
  {
    name: "Expo",
    category: "Mobile Development",
    svgPath: "/tech-stack/expo-svgrepo-com.svg",
  },
  {
    name: "Firebase",
    category: "Backend",
    svgPath: "/tech-stack/firebase-svgrepo-com.svg",
  },
  {
    name: "Flask",
    category: "Web Framework",
    svgPath: "/tech-stack/flask-svgrepo-com.svg",
  },
  {
    name: "Flutter",
    category: "Mobile Development",
    svgPath: "/tech-stack/flutter-svgrepo-com.svg",
  },
  {
    name: "Git",
    category: "Version Control",
    svgPath: "/tech-stack/git-svgrepo-com.svg",
  },
  {
    name: "Go",
    category: "Programming",
    svgPath: "/tech-stack/go-svgrepo-com.svg",
  },
  {
    name: "Java",
    category: "Programming",
    svgPath: "/tech-stack/java-svgrepo-com.svg",
  },
  {
    name: "JavaScript",
    category: "Programming",
    svgPath: "/tech-stack/javascript-svgrepo-com.svg",
  },
  {
    name: "Jest",
    category: "Testing",
    svgPath: "/tech-stack/jest-svgrepo-com.svg",
  },
  {
    name: "Langchain",
    category: "AI/ML",
    svgPath: "/tech-stack/langchain-text.svg",
  },
  {
    name: "Linux",
    category: "Operating System",
    svgPath: "/tech-stack/linux-svgrepo-com.svg",
  },
  {
    name: "MongoDB",
    category: "Database",
    svgPath: "/tech-stack/mongodb-svgrepo-com.svg",
  },
  { name: "Ollama", category: "AI", svgPath: "/tech-stack/ollama.svg" },
  { name: "OpenAI", category: "AI", svgPath: "/tech-stack/openai.svg" },
  {
    name: "PostgreSQL",
    category: "Database",
    svgPath: "/tech-stack/postgresql-svgrepo-com.svg",
  },
  {
    name: "Python",
    category: "Programming",
    svgPath: "/tech-stack/python-svgrepo-com.svg",
  },
  {
    name: "React",
    category: "Frontend",
    svgPath: "/tech-stack/react-svgrepo-com.svg",
  },
];

export function TechStackSection() {
  // Split technologies into three rows for a staggered effect
  const row1 = technologies.slice(0, 8);
  const row2 = technologies.slice(8, 16);

  return (
    <section id="tech-stack" className="py-24 relative w-full overflow-hidden">
      {/* Background effects */}
      <div className="aurora-container absolute left-0 bottom-0 w-full h-2/3 z-0">
        <div className="aurora-layer opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block py-1.5 px-6 bg-foreground/10 backdrop-blur-sm rounded-full mb-3">
            <span className="text-sm font-medium">Tech Stack</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Get to know about the <br />
            <span className="text-gradient-2">Technology we use</span>
          </h2>
        </motion.div>

        {/* Tech Stack Marquees - 3 rows with alternating directions */}
        <div className="space-y-10 pt-12">
          {/* Row 1: Left to Right */}
          <Marquee className="py-2 [--duration:16s]" pauseOnHover={true}>
            {row1.map((tech, index) => (
              <TechCard key={`row1-${index}`} tech={tech} />
            ))}
          </Marquee>

          {/* Row 2: Right to Left */}
          <Marquee
            className="py-2 [--duration:16s]"
            pauseOnHover={true}
            reverse={true}
          >
            {row2.map((tech, index) => (
              <TechCard key={`row2-${index}`} tech={tech} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

// Tech card component that displays only the SVG image
function TechCard({ tech }: { tech: Technology }) {
  return (
    <motion.div
      className="mx-4"
      whileHover={{
        y: -8,
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
    >
      <div className="w-24 h-24 md:w-20 md:h-20 bg-foreground/40 backdrop-blur-2xl rounded-xl flex items-center justify-center p-4 shadow-lg transition-all duration-300 border border-[--color-border] hover:border-[--color-accent-green]">
        <div className="relative w-full h-full">
          <Image
            src={tech.svgPath}
            alt={tech.category}
            fill
            className="object-contain p-1"
          />
        </div>
      </div>
    </motion.div>
  );
}
