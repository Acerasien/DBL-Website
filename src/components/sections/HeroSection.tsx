import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout";
import { Button } from "@/components/ui";
import { ArrowRight, TrendingUp, Shield, Users } from "lucide-react";

/**
 * Hero Section Component
 *
 * Above-the-fold hero section with headline, subheadline, and CTAs.
 * Features a professional background with floating accent elements.
 *
 * Design decisions:
 * - Strong value proposition headline (benefit-driven, not descriptive)
 * - Two CTAs: primary (conversion) and secondary (learn more)
 * - Trust indicators (stats/logos) below CTAs
 * - Subtle background pattern for visual interest
 */
export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image & Pattern */}
      <div className="absolute inset-0 overflow-hidden bg-primary-900">
        <Image
          src="/hero-bg-6.jpg"
          alt="Modern office buildings"
          fill
          priority
          className="object-cover opacity-70 bg-center"
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 via-primary-900/40 to-primary-900/80" />

        {/* Accents floating behind text */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary-500 rounded-full opacity-20 blur-3xl mix-blend-screen" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full opacity-10 blur-3xl mix-blend-screen" />
      </div>

      <Container className="relative z-10">
        <div className="py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
              <TrendingUp className="w-4 h-4 text-secondary-400" />
              <span className="text-sm font-medium text-gray-50">
                Trusted by 100+ Companies Across Indonesia
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
              Your Partner in
              <span className="block text-secondary-400 mt-2">
                Business Legality & Licensing
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
              Professional services for company establishment, OSS licensing, SLF permits,
              and legal advisory. We simplify the process so you can focus on growing your business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button asChild size="lg" variant="secondary" className="px-8 text-white hover:text-white bg-secondary-500 hover:bg-secondary-600">
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                <Link href="/about">
                  Learn More
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-secondary-400 mb-1">
                  50+
                </div>
                <div className="text-sm text-gray-200 uppercase tracking-wider text-xs font-semibold">Companies Established</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-secondary-400 mb-1">
                  100+
                </div>
                <div className="text-sm text-gray-200 uppercase tracking-wider text-xs font-semibold">OSS Licenses Processed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-secondary-400 mb-1">
                  95%
                </div>
                <div className="text-sm text-gray-200 uppercase tracking-wider text-xs font-semibold">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-secondary-400 mb-1">
                  10+
                </div>
                <div className="text-sm text-gray-200 uppercase tracking-wider text-xs font-semibold">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
