import { BaseLayout } from "@/components/layout/base-layout";
import { servicesNavigationData } from "@/constants/site-data";
import Link from "next/link";
import {
  ArrowRight,
  Database,
  Target,
  Settings,
  Layers,
  Shuffle,
  Archive,
  Cloud,
  RefreshCw,
  BarChart3,
  PieChart,
  CheckCircle,
} from "lucide-react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Data Services | Scageon - Modern Data Infrastructure Solutions",
  description:
    "Transform your data infrastructure with cloud migration, data warehousing, integration, and advanced analytics platforms that scale with your business.",
};
const iconMap = {
  target: Target,
  settings: Settings,
  layers: Layers,
  shuffle: Shuffle,
  archive: Archive,
  cloud: Cloud,
  "refresh-cw": RefreshCw,
  "bar-chart-3": BarChart3,
  "pie-chart": PieChart,
};
const dataService = servicesNavigationData.find(
  (service) => service.id === "data-services"
)!;
const benefits = [
  "40% faster reporting and analytics",
  "60% cost reduction through cloud optimization",
  "Single source of truth for all business data",
  "Scalable infrastructure that grows with your business",
  "Enhanced data security and compliance",
  "Real-time insights and decision-making capabilities",
];
const processSteps = [
  {
    step: "01",
    title: "Assessment & Strategy",
    description:
      "Comprehensive evaluation of your current data landscape and business objectives to create a tailored roadmap.",
  },
  {
    step: "02",
    title: "Architecture Design",
    description:
      "Design scalable, secure data architecture that aligns with industry best practices and your specific needs.",
  },
  {
    step: "03",
    title: "Implementation",
    description:
      "Phased implementation approach ensuring minimal disruption to your business operations.",
  },
  {
    step: "04",
    title: "Migration & Integration",
    description:
      "Seamless data migration and integration with existing systems and new cloud platforms.",
  },
  {
    step: "05",
    title: "Optimization & Support",
    description:
      "Continuous monitoring, optimization, and support to ensure peak performance and ROI.",
  },
];
export default function DataServicesPage() {
  return (
    <BaseLayout>
      {" "}
      {/* Hero Section */}{" "}
      <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden pt-20">
        {" "}
        {/* Background Pattern */}{" "}
        <div className="absolute inset-0 opacity-20">
          {" "}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.15),transparent_50%)]" />{" "}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(147,51,234,0.15),transparent_50%)]" />{" "}
        </div>{" "}
        <div className="container relative z-10">
          {" "}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {" "}
            <div>
              {" "}
              <div className="flex items-center gap-3 mb-6">
                {" "}
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  {" "}
                  <Database className="w-5 h-5 text-white" />{" "}
                </div>{" "}
                <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded text-sm font-medium">
                  {" "}
                  Core Service{" "}
                </span>{" "}
              </div>{" "}
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {" "}
                Data{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}
                  Services{" "}
                </span>{" "}
              </h1>{" "}
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                {" "}
                Transform your data infrastructure with modern cloud solutions.
                We help enterprises modernize their data platforms, implement
                scalable architectures, and unlock the full potential of their
                data assets.{" "}
              </p>{" "}
              <div className="flex flex-col sm:flex-row gap-4">
                {" "}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  {" "}
                  Get Started <ArrowRight className="w-4 h-4" />{" "}
                </Link>{" "}
                <Link
                  href="#services"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/50 border border-slate-600/50 hover:bg-slate-700/50 hover:border-slate-500/50 text-white font-medium transition-all duration-300"
                >
                  {" "}
                  Explore Services{" "}
                </Link>{" "}
              </div>{" "}
            </div>{" "}
            <div className="relative">
              {" "}
              <div className="aspect-square bg-slate-900/40 border border-slate-700/50 flex items-center justify-center backdrop-blur-sm">
                {" "}
                <Database className="w-32 h-32 text-blue-400/40" />{" "}
              </div>{" "}
              {/* Background pattern */}{" "}
              <div className="absolute inset-0 opacity-20">
                {" "}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl" />{" "}
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl" />{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Benefits Section */}{" "}
      <section className="py-20 bg-black">
        {" "}
        <div className="container">
          {" "}
          <div className="text-center mb-16">
            {" "}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {" "}
              Why Choose Our Data Services?{" "}
            </h2>{" "}
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              {" "}
              We deliver measurable outcomes that transform how your
              organization leverages data for competitive advantage.{" "}
            </p>{" "}
          </div>{" "}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {" "}
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-slate-900/40 border border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-300"
              >
                {" "}
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />{" "}
                <span className="text-slate-300 font-medium text-sm">
                  {benefit}
                </span>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Services Grid */}{" "}
      <section id="services" className="py-20 bg-black">
        {" "}
        <div className="container">
          {" "}
          <div className="text-center mb-16">
            {" "}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {" "}
              Comprehensive Data Solutions{" "}
            </h2>{" "}
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              {" "}
              From strategy to implementation, we provide end-to-end data
              services that drive business value.{" "}
            </p>{" "}
          </div>{" "}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {" "}
            {dataService.subServices?.map((service) => {
              const Icon =
                iconMap[service.icon as keyof typeof iconMap] || Database;
              return (
                <div
                  key={service.id}
                  className="group relative p-6 bg-slate-900/40 border border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-300"
                >
                  {" "}
                  <div className="w-10 h-10 mb-4 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {" "}
                    <Icon className="w-5 h-5 text-white" />{" "}
                  </div>{" "}
                  <div className="flex items-center gap-2 mb-3">
                    {" "}
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                      {" "}
                      {service.title}{" "}
                    </h3>{" "}
                    {service.isPopular && (
                      <span className="px-1.5 py-0.5 bg-orange-500/10 text-orange-400 text-xs font-medium rounded">
                        {" "}
                        Popular{" "}
                      </span>
                    )}{" "}
                  </div>{" "}
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors mb-4 leading-relaxed text-sm">
                    {" "}
                    {service.description}{" "}
                  </p>{" "}
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors text-sm"
                  >
                    {" "}
                    Learn More{" "}
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />{" "}
                  </Link>{" "}
                </div>
              );
            })}{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Process Section */}{" "}
      <section className="py-20 bg-black border-t border-slate-800">
        {" "}
        <div className="container">
          {" "}
          <div className="text-center mb-16">
            {" "}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {" "}
              Our Proven Process{" "}
            </h2>{" "}
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              {" "}
              We follow a structured approach to ensure successful data
              transformation projects with minimal risk and maximum value.{" "}
            </p>{" "}
          </div>{" "}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {" "}
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {" "}
                <div className="text-center">
                  {" "}
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    {" "}
                    <span className="text-white font-bold text-sm">
                      {" "}
                      {step.step}{" "}
                    </span>{" "}
                  </div>{" "}
                  <h3 className="text-lg font-bold text-white mb-3">
                    {" "}
                    {step.title}{" "}
                  </h3>{" "}
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {" "}
                    {step.description}{" "}
                  </p>{" "}
                </div>{" "}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-y-1/2" />
                )}{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* CTA Section */}{" "}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        {" "}
        <div className="container text-center">
          {" "}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {" "}
            Ready to Modernize Your Data Infrastructure?{" "}
          </h2>{" "}
          <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
            {" "}
            Let&apos;s discuss how our data services can transform your business
            operations and unlock new growth opportunities.{" "}
          </p>{" "}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {" "}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-100 text-blue-600 font-medium transition-all duration-300 hover:shadow-lg"
            >
              {" "}
              Start Your Data Journey <ArrowRight className="w-4 h-4" />{" "}
            </Link>{" "}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-medium transition-all duration-300"
            >
              {" "}
              Schedule Assessment{" "}
            </Link>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
    </BaseLayout>
  );
}
