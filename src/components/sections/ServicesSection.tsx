import React from "react";
import Link from "next/link";
import { Container, Section } from "@/components/layout";
import { Card, CardBody, Button } from "@/components/ui";
import {
  FileText,
  ClipboardCheck,
  Building,
  Scale
} from "lucide-react";

/**
 * Service card data
 */
const services = [
  {
    icon: Building,
    title: "Pendirian Perusahaan",
    description: "Bantuan lengkap untuk mendirikan badan usaha Anda (PT, CV, Firma). Kami mengurus pembuatan dokumen hukum agar Anda dapat berfokus pada bisnis Anda.",
    link: "/about#services",
  },
  {
    icon: ClipboardCheck,
    title: "Perizinan OSS",
    description: "Pemrosesan izin Online Single Submission (OSS). Penanganan kebutuhan perizinan bisnis Anda dengan cepat dan akurat melalui sistem pemerintahan.",
    link: "/about#services",
  },
  {
    icon: FileText,
    title: "Sertifikat Laik Fungsi",
    description: "Pemrosesan Sertifikat Laik Fungsi bangunan. Memastikan lokasi bisnis Anda memenuhi seluruh syarat regulasi demi keamanan operasional.",
    link: "/about#services",
  },
  {
    icon: Scale,
    title: "Konsultasi Hukum",
    description: "Konsultasi berkelanjutan untuk bisnis Anda. Saran ahli tentang kepatuhan, kontrak kerja, hingga mitigasi masalah hukum untuk melindungi kepentingan Anda.",
    link: "/about#services",
  },
];

/**
 * Services Section Component
 *
 * Displays all services in a responsive grid layout.
 * Each card features an icon, title, description, and link.
 *
 * Design decisions:
 * - 4 services in 2-col grid (desktop), 1-col (mobile)
 * - Hoverable cards with subtle lift effect
 * - Consistent icon styling with brand colors
 * - Clear section heading with subtitle
 */
export const ServicesSection = () => {
  return (
    <Section variant="muted" padding="xl" id="services">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Layanan Kami
          </h2>
          <p className="text-lg text-gray-600">
            Solusi legalitas dan perizinan yang komprehensif bagi bisnis Anda.
            Panduan profesional dari awal mula pendirian hingga penerapan kepatuhan regulasi.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              variant="elevated"
              hoverable
              className="group h-full"
            >
              <CardBody className="flex flex-col h-full p-6 lg:p-8">
                {/* Icon */}
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary-500 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Link */}
                <Link
                  href={service.link}
                  className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors group-hover/link:translate-x-1 transition-transform"
                >
                  Pelajari Lebih Lanjut
                  <ArrowRightIcon className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">
              Jadwalkan Konsultasi
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

// Arrow icon component for inline use
const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

export default ServicesSection;
