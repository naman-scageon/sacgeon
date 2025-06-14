import { BaseLayout } from "@/components/layout/base-layout";
import { servicesNavigationData } from "@/constants/site-data";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Lightbulb,
  Cpu,
  MessageCircle,
  GitBranch,
  Search,
  Bot,
  CheckCircle,
  Sparkles,
  Star,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Engineering | Scageon - Intelligent Solutions & Custom AI Models",
  description:
    "Implement practical AI solutions including custom models, NLP systems, predictive analytics, and intelligent automation tailored to your industry needs.",
};

const iconMap = {
  lightbulb: Lightbulb,
  cpu: Cpu,
  "message-circle": MessageCircle,
  "git-branch": GitBranch,
  search: Search,
  bot: Bot,
};

const aiService = servicesNavigationData.find(
  (service) => service.id === "ai-engineering"
)!;

const benefits = [
  "85% accuracy improvement in predictive models",
  "50% process automation through intelligent systems",
  "Real-time insights and decision-making capabilities",
  "Custom AI solutions tailored to your industry",
  "Seamless integration with existing workflows",
  "Scalable AI infrastructure for future growth",
];

const useCases = [
  {
    title: "Predictive Analytics",
    description:
      "Forecast trends, demand, and outcomes with advanced machine learning models.",
    icon: "📊",
    industries: ["Finance", "Retail", "Manufacturing"],
  },
  {
    title: "Intelligent Automation",
    description:
      "Automate complex business processes with AI-powered decision making.",
    icon: "⚙️",
    industries: ["Healthcare", "Insurance", "Logistics"],
  },
  {
    title: "Natural Language Processing",
    description:
      "Extract insights from unstructured text and enable conversational AI.",
    icon: "💬",
    industries: ["Customer Service", "Legal", "Media"],
  },
  {
    title: "Computer Vision",
    description:
      "Analyze images and video content for quality control and insights.",
    icon: "👁️",
    industries: ["Manufacturing", "Security", "Retail"],
  },
  {
    title: "Recommendation Systems",
    description:
      "Personalize user experiences with intelligent recommendation engines.",
    icon: "🎯",
    industries: ["E-commerce", "Media", "Finance"],
  },
  {
    title: "Fraud Detection",
    description: "Identify suspicious patterns and prevent fraud in real-time.",
    icon: "🛡️",
    industries: ["Banking", "Insurance", "E-commerce"],
  },
];

const technologies = [
  "TensorFlow",
  "PyTorch",
  "Scikit-learn",
  "Hugging Face",
  "OpenAI GPT",
  "LangChain",
  "Apache Spark",
  "MLflow",
  "Kubeflow",
  "Docker",
  "Kubernetes",
  "AWS SageMaker",
];

export default function AIEngineeringPage() {
  return (
    <BaseLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(147,51,234,0.2),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.2),transparent_50%)]" />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="px-2 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded text-sm font-medium">
                  Advanced Service
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Engineering
                </span>
              </h1>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Harness the power of artificial intelligence to transform your
                business operations. We build custom AI solutions that deliver
                intelligent automation, predictive insights, and enhanced
                decision-making capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  Start AI Journey
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#solutions"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/50 border border-slate-600/50 hover:bg-slate-700/50 hover:border-slate-500/50 text-white font-medium transition-all duration-300"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-slate-900/40 border border-slate-700/50 flex items-center justify-center backdrop-blur-sm">
                <Brain className="w-32 h-32 text-purple-400/40" />
              </div>
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI-Powered Business Transformation
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Our AI engineering solutions deliver tangible business outcomes
              that drive competitive advantage.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-slate-900/40 border border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-slate-300 font-medium text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Solutions */}
      <section id="solutions" className="py-20 bg-black">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive AI Solutions
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              From consulting to deployment, we provide end-to-end AI services
              that transform how you operate.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiService.subServices?.map((service, index) => {
              const Icon =
                iconMap[service.icon as keyof typeof iconMap] || Brain;
              return (
                <div
                  key={service.id}
                  className="group relative p-6 bg-slate-900/40 border border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 mb-4 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                      {service.title}
                    </h3>
                    {service.isNew && (
                      <span className="inline-flex items-center px-1.5 py-0.5 bg-blue-500/10 text-blue-400 text-xs font-medium rounded">
                        <Sparkles className="w-2.5 h-2.5 mr-1" />
                        New
                      </span>
                    )}
                    {service.isPopular && (
                      <span className="inline-flex items-center px-1.5 py-0.5 bg-orange-500/10 text-orange-400 text-xs font-medium rounded">
                        <Star className="w-2.5 h-2.5 mr-1" />
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors text-sm"
                  >
                    Learn More
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-black border-t border-slate-800">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Use Cases Across Industries
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Discover how AI can solve specific challenges in your industry
              with proven use cases and applications.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-slate-900/40 p-6 border border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {useCase.title}
                </h3>
                <p className="text-slate-400 mb-4 leading-relaxed text-sm">
                  {useCase.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {useCase.industries.map((industry) => (
                    <span
                      key={industry}
                      className="px-2 py-1 bg-purple-500/10 text-purple-400 text-xs rounded"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-black border-t border-slate-800">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cutting-Edge AI Technology Stack
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              We leverage the latest AI frameworks and tools to build robust,
              scalable solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-slate-900/40 border border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-300"
              >
                <span className="text-slate-300 font-medium text-center text-sm">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-700">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Implement AI in Your Business?
          </h2>
          <p className="text-lg text-purple-100 mb-8 max-w-3xl mx-auto">
            Let&apos;s explore how artificial intelligence can revolutionize
            your operations and drive unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-100 text-purple-600 font-medium transition-all duration-300 hover:shadow-lg"
            >
              Start AI Implementation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-medium transition-all duration-300"
            >
              Schedule AI Consultation
            </Link>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
