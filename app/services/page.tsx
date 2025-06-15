import { BaseLayout } from "@/components/layout/base-layout";
import { servicesNavigationData } from "@/constants/site-data";
import Link from "next/link";
import { ArrowRight, Database, Brain, Code2 } from "lucide-react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services | Scageon - Data, AI & Application Solutions",
  description:
    "Transform your business with our comprehensive suite of data services, AI engineering, and application modernization solutions.",
};
const iconMap = { database: Database, brain: Brain, code: Code2 };
export default function ServicesPage() {
  return (
    <BaseLayout>
      {" "}
      {/* Hero Section */}{" "}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
        {" "}
        {/* Background Pattern */}{" "}
        <div className="absolute inset-0 opacity-10">
          {" "}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />{" "}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] animate-pulse" />{" "}
        </div>{" "}
        <div className="container relative z-10 text-center">
          {" "}
          <div className="max-w-4xl mx-auto">
            {" "}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {" "}
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Services
              </span>{" "}
            </h1>{" "}
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              {" "}
              We drive business transformation by unlocking the power of data,
              leveraging digital technologies, and implementing AI solutions
              that deliver measurable results.{" "}
            </p>{" "}
            {/* Service Categories Grid */}{" "}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {" "}
              {servicesNavigationData.map((service) => {
                const Icon =
                  iconMap[service.icon as keyof typeof iconMap] || Database;
                return (
                  <Link
                    key={service.id}
                    href={service.href}
                    className="group relative p-8 bg-slate-800/50 border border-slate-700/50 rounded-2xl hover:bg-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-105"
                  >
                    {" "}
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600/50 flex items-center justify-center group-hover:from-slate-600 group-hover:to-slate-700 transition-all duration-300">
                      {" "}
                      <Icon className="w-8 h-8 text-slate-300 group-hover:text-white transition-colors" />{" "}
                    </div>{" "}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                      {" "}
                      {service.title}{" "}
                    </h3>{" "}
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors mb-6">
                      {" "}
                      {service.description}{" "}
                    </p>{" "}
                    <div className="flex items-center justify-center text-blue-400 group-hover:text-blue-300 transition-colors">
                      {" "}
                      <span className="text-sm font-medium mr-2">
                        Explore Services
                      </span>{" "}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />{" "}
                    </div>{" "}
                    {service.badge && (
                      <span className="absolute top-4 right-4 px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full">
                        {" "}
                        {service.badge}{" "}
                      </span>
                    )}{" "}
                  </Link>
                );
              })}{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Detailed Services Overview */}{" "}
      <section className="py-24 bg-slate-50">
        {" "}
        <div className="container">
          {" "}
          <div className="text-center mb-16">
            {" "}
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {" "}
              Comprehensive Solutions for Your Business{" "}
            </h2>{" "}
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {" "}
              Each service is designed to address specific business challenges
              while integrating seamlessly with your existing infrastructure and
              workflows.{" "}
            </p>{" "}
          </div>{" "}
          <div className="space-y-24">
            {" "}
            {servicesNavigationData.map((service, index) => {
              const Icon =
                iconMap[service.icon as keyof typeof iconMap] || Database;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isEven ? "" : "lg:grid-flow-col-dense"
                  }`}
                >
                  {" "}
                  <div className={isEven ? "" : "lg:col-start-2"}>
                    {" "}
                    <div className="flex items-center gap-4 mb-6">
                      {" "}
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        {" "}
                        <Icon className="w-6 h-6 text-white" />{" "}
                      </div>{" "}
                      <div>
                        {" "}
                        <h3 className="text-3xl font-bold text-slate-900">
                          {service.title}
                        </h3>{" "}
                        {service.badge && (
                          <span className="inline-block mt-1 px-3 py-1 text-sm font-medium bg-blue-100 text-blue-700 rounded-full">
                            {" "}
                            {service.badge}{" "}
                          </span>
                        )}{" "}
                      </div>{" "}
                    </div>{" "}
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      {" "}
                      {service.description}{" "}
                    </p>{" "}
                    <div className="space-y-4 mb-8">
                      {" "}
                      <h4 className="text-lg font-semibold text-slate-900">
                        Key Capabilities:
                      </h4>{" "}
                      <div className="grid sm:grid-cols-2 gap-3">
                        {" "}
                        {service.subServices?.slice(0, 6).map((subService) => (
                          <div
                            key={subService.id}
                            className="flex items-center gap-2"
                          >
                            {" "}
                            <div className="w-2 h-2 rounded-full bg-blue-500" />{" "}
                            <span className="text-slate-700 text-sm">
                              {subService.title}
                            </span>{" "}
                          </div>
                        ))}{" "}
                      </div>{" "}
                    </div>{" "}
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl transition-colors"
                    >
                      {" "}
                      Learn More <ArrowRight className="w-4 h-4" />{" "}
                    </Link>{" "}
                  </div>{" "}
                  <div className={isEven ? "" : "lg:col-start-1"}>
                    {" "}
                    <div className="relative">
                      {" "}
                      <div className="aspect-square bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-200/50 flex items-center justify-center">
                        {" "}
                        <Icon className="w-32 h-32 text-blue-500/30" />{" "}
                      </div>{" "}
                      {/* Decorative elements */}{" "}
                      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-xl" />{" "}
                      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl" />{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
              );
            })}{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* CTA Section */}{" "}
      <section className="py-24 bg-slate-900">
        {" "}
        <div className="container text-center">
          {" "}
          <h2 className="text-4xl font-bold text-white mb-6">
            {" "}
            Ready to Transform Your Business?{" "}
          </h2>{" "}
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            {" "}
            Let&apos;s discuss how our services can help you achieve your
            digital transformation goals.{" "}
          </p>{" "}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {" "}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              {" "}
              Get Started <ArrowRight className="w-5 h-5" />{" "}
            </Link>{" "}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-medium rounded-xl transition-all duration-300"
            >
              {" "}
              Schedule Consultation{" "}
            </Link>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
    </BaseLayout>
  );
}
