import React from "react";
import Link from "next/link";
import { Container, Section } from "@/components/layout";
import { Card, Button } from "@/components/ui";
import { FileText, Building, ClipboardCheck, Scale } from "lucide-react";

/**
 * Track record stats
 */
const stats = [
  {
    icon: Building,
    number: "50+",
    label: "Perusahaan Didirikan",
    description: "Sukses dalam mendampingi berbagai bisnis mensahkan entitas kelembagaan mereka termasuk PT, CV, dan Firma.",
  },
  {
    icon: ClipboardCheck,
    number: "100+",
    label: "Izin OSS Diproses",
    description: "Tuntas menangani urusan lisensi melalui sistem OSS dengan tingkat keberhasilan yang tinggi.",
  },
  {
    icon: FileText,
    number: "80+",
    label: "SLF Disetujui",
    description: "Berhasil meraih perizinan Sertifikat Laik Fungsi bangunan untuk industri dan komersil.",
  },
  {
    icon: Scale,
    number: "150+",
    label: "Konsultasi Hukum",
    description: "Aktif menggelar layanan konseling berkelanjutan yang bertujuan melindungi hak klien.",
  },
];

/**
 * Portfolio Section Component
 *
 * Showcases track record and achievements.
 *
 * Design decisions:
 * - 4 stats in responsive grid
 * - Icon-based visual representation
 * - Clear, scannable information
 */
export const PortfolioSection = () => {
  return (
    <Section variant="muted" padding="xl">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 text-primary-500 font-medium mb-4">
            <span className="w-8 h-px bg-primary-500" />
            Rekam Jejak Kami
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Hasil Terbukti Nyata
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Kami telah banyak membantu pertumbuhan bisnis guna menavigasi tata kelola dalam pusaran
            regulasi Indonesia, serta melebarkan sayap mereka di setiap penjuru negeri.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/about#portfolio">
              Lihat Detail Sekilas
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

/**
 * Stat Card Component
 */
const StatCard = ({
  stat
}: {
  stat: {
    icon: React.ElementType;
    number: string;
    label: string;
    description: string;
  }
}) => {
  return (
    <Card variant="elevated" className="group p-6 text-center hover:shadow-lg transition-shadow duration-300">
      {/* Icon */}
      <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500 transition-colors duration-300">
        <stat.icon className="w-8 h-8 text-primary-500 group-hover:text-white transition-colors duration-300" />
      </div>

      {/* Number */}
      <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
        {stat.number}
      </div>

      {/* Label */}
      <div className="text-lg font-semibold text-gray-700 mb-3">
        {stat.label}
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm">
        {stat.description}
      </p>
    </Card>
  );
};

export default PortfolioSection;
