import React from "react";
import Link from "next/link";
import { Container, Section } from "@/components/layout";
import { Button } from "@/components/ui";
import { CheckCircle, Award, Globe, Clock } from "lucide-react";

/**
 * About Preview Section Component
 *
 * Introduces the company with key differentiators.
 * Uses a 2-column layout on desktop (image + content).
 */
export const AboutPreview = () => {
  return (
    <Section variant="default" padding="xl">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main Image */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="PT. Digdoyo Bowo Leksono team"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-6 hidden md:block">
                <div className="flex items-center gap-3">
                  <Award className="w-10 h-10 text-primary-500" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">10+</div>
                    <div className="text-sm text-gray-600">Years of Excellence</div>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-100 rounded-full opacity-50 -z-10" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary-100 rounded-full opacity-50 -z-10" />
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2">
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 text-primary-500 font-medium mb-4">
              <span className="w-8 h-px bg-primary-500" />
              About PT. Digdoyo Bowo Leksono
            </div>

            {/* Heading */}
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Your Partner in
              <span className="text-primary-500"> Business Legality & Licensing</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-6">
              PT. Digdoyo Bowo Leksono provides professional services for business
              legality and licensing in Indonesia. We simplify the complex process
              of company establishment, OSS licensing, SLF permits, and legal advisory.
            </p>

            <p className="text-gray-600 mb-8">
              Our experienced team is dedicated to helping your business navigate
              Indonesian regulations with confidence. We handle the paperwork so
              you can focus on growing your business.
            </p>

            {/* Key Differentiators */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <Differentiator
                icon={Award}
                text="Expert Team"
              />
              <Differentiator
                icon={Globe}
                text="Nationwide Service"
              />
              <Differentiator
                icon={Clock}
                text="Fast Processing"
              />
              <Differentiator
                icon={CheckCircle}
                text="Trusted Partner"
              />
            </div>

            {/* CTA Button */}
            <Button asChild size="lg">
              <Link href="/about">
                Learn More About Us
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

/**
 * Differentiator item component
 */
const Differentiator = ({
  icon: Icon,
  text
}: {
  icon: React.ElementType;
  text: string;
}) => (
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
      <Icon className="w-5 h-5 text-primary-500" />
    </div>
    <span className="text-gray-700 font-medium">{text}</span>
  </div>
);

export default AboutPreview;
