import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout";
import { Card, CardBody, Button } from "@/components/ui";
import {
  Target,
  Award,
  Users,
  BookOpen,
  TrendingUp,
  Heart,
  FileText,
  ClipboardCheck,
  Building,
  Scale,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

/**
 * About Page - PT. Digdoyo Bowo Leksono
 *
 * Combined page with:
 * 1. Company Overview
 * 2. Services Section
 * 3. Portfolio/Track Record
 */

export const metadata: Metadata = {
  title: "About Us - Business Legality & Licensing Services",
  description: "Learn about PT. Digdoyo Bowo Leksono - Your trusted partner for company establishment, OSS licensing, SLF permits, and legal advisory in Indonesia.",
  keywords: ["about", "company establishment", "OSS licensing", "SLF permit", "legal advisory", "Indonesia"],
  openGraph: {
    title: "About PT. Digdoyo Bowo Leksono",
    description: "Professional services in business legality and licensing",
    url: "/about",
  },
};

// Services data
const services = [
  {
    icon: Building,
    title: "Company Establishment",
    description: "Complete assistance for establishing your business entity (PT, CV, Firma). We handle the legal paperwork so you can focus on your business.",
    link: "/about#services",
  },
  {
    icon: ClipboardCheck,
    title: "OSS Licensing",
    description: "Online Single Submission (OSS) license processing. Fast and accurate handling of your business licensing requirements.",
    link: "/about#services",
  },
  {
    icon: FileText,
    title: "SLF Permit",
    description: "Surat Layak Fungsi (Building Function Permit) processing. Ensure your business premises meet regulatory requirements.",
    link: "/about#services",
  },
  {
    icon: Scale,
    title: "Legal Advisory",
    description: "Ongoing legal consultation for your business. Expert advice on compliance, contracts, and legal matters.",
    link: "/about#services",
  },
];

// Portfolio/Track record data
const portfolioStats = [
  { number: "50+", label: "Companies Established", description: "Successfully helped businesses establish their legal entities" },
  { number: "100+", label: "OSS Licenses Processed", description: "Completed business licensing through OSS system" },
  { number: "80+", label: "SLF Permits Approved", description: "Building function permits secured for clients" },
  { number: "150+", label: "Legal Consultations", description: "Ongoing legal advisory services provided" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Page Header */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden bg-primary-900">
          <Image
            src="/hero-bg-6.jpg"
            alt="Hero background"
            fill
            priority
            className="object-cover opacity-70 bg-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 via-primary-900/40 to-primary-900/80" />
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary-500 rounded-full opacity-20 blur-3xl mix-blend-screen" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full opacity-10 blur-3xl mix-blend-screen" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              About <span className="text-secondary-400">PT. Digdoyo Bowo Leksono</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200">
              Your trusted partner for business legality and licensing services in Indonesia
            </p>
          </div>
        </Container>
      </section>

      {/* Company Overview Section */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                  alt="Office building"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-100 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary-100 rounded-full -z-10" />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  PT. Digdoyo Bowo Leksono was founded with a clear mission: to simplify
                  the complex process of business establishment and licensing in Indonesia.
                  We understand that navigating legal requirements can be challenging for
                  businesses, which is why we're here to help.
                </p>
                <p>
                  Our team of experienced professionals provides comprehensive services
                  in company establishment, OSS licensing, SLF permits, and legal advisory.
                  We combine deep knowledge of Indonesian regulations with practical
                  business understanding to deliver efficient solutions.
                </p>
                <p>
                  With years of experience and a track record of successful projects,
                  we've become a trusted partner for businesses looking to establish
                  and grow their presence in Indonesia.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-bold text-primary-500 mb-1">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-500 mb-1">100+</div>
                  <div className="text-sm text-gray-600">Clients Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-500 mb-1">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Vision & Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Guided by clear purpose and unwavering values
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision Card */}
            <Card className="p-8 bg-white shadow-lg border-0">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                To be the most trusted partner for business legality and licensing
                services in Indonesia, recognized for our professionalism, efficiency,
                and commitment to client success.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary-500 rounded-full mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Industry-leading expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary-500 rounded-full mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Efficient process handling</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary-500 rounded-full mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Client-focused service</span>
                </li>
              </ul>
            </Card>

            {/* Mission Card */}
            <Card className="p-8 bg-white shadow-lg border-0">
              <div className="w-14 h-14 bg-secondary-100 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-secondary-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We empower businesses to navigate Indonesian regulations with confidence
                by providing comprehensive legal and licensing services that are
                efficient, transparent, and reliable.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-secondary-500 rounded-full mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Simplify complex processes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-secondary-500 rounded-full mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Transparent communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-secondary-500 rounded-full mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Timely delivery</span>
                </li>
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24" id="services">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive legal and licensing solutions for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                variant="elevated"
                hoverable
                className="group h-full"
              >
                <CardBody className="flex flex-col h-full p-6 lg:p-8">
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-primary-500 group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 flex-grow">
                    {service.description}
                  </p>

                  <Link
                    href={service.link}
                    className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors group-hover/link:translate-x-1 transition-transform"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Portfolio/Track Record Section */}
      <section className="py-16 lg:py-24 bg-gray-50" id="portfolio">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Track Record
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proven results in helping businesses establish and grow in Indonesia
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {portfolioStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl lg:text-5xl font-bold text-primary-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-primary-500 rounded-2xl p-8 lg:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Serving Clients Across Indonesia
                </h3>
                <p className="text-primary-100 leading-relaxed">
                  From Jakarta to Surabaya, Bandung to Bali, we've helped businesses
                  of all sizes navigate the complexities of Indonesian business
                  regulations. Our network and expertise span across major cities
                  and industrial zones throughout the archipelago.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/10 rounded-xl">
                  <div className="text-2xl font-bold mb-1">Jakarta</div>
                  <div className="text-sm text-primary-100">Head Office</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-xl">
                  <div className="text-2xl font-bold mb-1">Surabaya</div>
                  <div className="text-sm text-primary-100">Branch Office</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-xl">
                  <div className="text-2xl font-bold mb-1">Bandung</div>
                  <div className="text-sm text-primary-100">Service Area</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-xl">
                  <div className="text-2xl font-bold mb-1">Bali</div>
                  <div className="text-sm text-primary-100">Service Area</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values Section */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Client Focus",
                description: "We put our clients' needs first, providing personalized service and solutions.",
                color: "primary",
              },
              {
                icon: TrendingUp,
                title: "Professionalism",
                description: "We maintain the highest standards of professional conduct in all interactions.",
                color: "secondary",
              },
              {
                icon: BookOpen,
                title: "Integrity",
                description: "We act with honesty and transparency, building trust through our actions.",
                color: "primary",
              },
              {
                icon: Heart,
                title: "Excellence",
                description: "We strive for excellence in every service we provide, never settling for less.",
                color: "secondary",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    value.color === "primary"
                      ? "bg-primary-100"
                      : "bg-secondary-100"
                  }`}
                >
                  <value.icon
                    className={`w-6 h-6 ${
                      value.color === "primary"
                        ? "text-primary-500"
                        : "text-secondary-500"
                    }`}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="bg-primary-500 rounded-3xl p-10 lg:p-16 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Start Your Business Journey?
            </h2>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              Let us help you navigate the legal and licensing requirements.
              Contact us today for a consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-500 font-semibold rounded-lg hover:bg-primary-50 transition-colors duration-200"
              >
                Get in Touch
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200"
              >
                View Services
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
