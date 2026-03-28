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
  title: "Tentang Kami - Layanan Legalitas & Perizinan Bisnis",
  description: "Pelajari tentang PT. Digdoyo Bowo Leksono - Mitra terpercaya Anda untuk pendirian perusahaan, perizinan OSS, SLF, dan konsultasi hukum di Indonesia.",
  keywords: ["tentang", "pendirian perusahaan", "perizinan OSS", "sertifikat laik fungsi", "konsultasi hukum", "Indonesia"],
  openGraph: {
    title: "Tentang PT. Digdoyo Bowo Leksono",
    description: "Layanan profesional dalam legalitas dan perizinan bisnis",
    url: "/about",
  },
};

// Services data
const services = [
  {
    icon: Building,
    title: "Pendirian Perusahaan",
    description: "Bantuan lengkap untuk mendirikan badan usaha Anda (PT, CV, Firma). Kami urus dokumen legalnya agar Anda bisa fokus pada bisnis.",
    link: "/about#services",
  },
  {
    icon: ClipboardCheck,
    title: "Perizinan OSS",
    description: "Pengurusan izin usaha Online Single Submission (OSS). Penanganan persyaratan perizinan bisnis Anda dengan cepat dan akurat.",
    link: "/about#services",
  },
  {
    icon: FileText,
    title: "Sertifikat Laik Fungsi",
    description: "Pengurusan Sertifikat Laik Fungsi bangunan. Pastikan lokasi bisnis Anda memenuhi persyaratan regulasi yang berlaku.",
    link: "/about#services",
  },
  {
    icon: Scale,
    title: "Konsultasi Hukum",
    description: "Konsultasi hukum berkelanjutan untuk bisnis Anda. Saran ahli mengenai kepatuhan, kontrak, dan masalah hukum lainnya.",
    link: "/about#services",
  },
];

// Portfolio/Track record data
const portfolioStats = [
  { number: "50+", label: "Perusahaan Didirikan", description: "Telah sukses membantu berbagai bisnis mendirikan badan hukum mereka" },
  { number: "100+", label: "Izin OSS Diproses", description: "Perizinan bisnis yang diselesaikan lewat sistem OSS" },
  { number: "80+", label: "SLF Disetujui", description: "Sertifikat Laik Fungsi yang berhasil didapatkan untuk klien" },
  { number: "150+", label: "Konsultasi Hukum", description: "Layanan penasihat hukum berkelanjutan yang kami berikan" },
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
              Tentang <span className="text-secondary-400">PT. Digdoyo Bowo Leksono</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200">
              Mitra terpercaya Anda untuk layanan legalitas dan perizinan bisnis di Indonesia
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
                Kisah Kami
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  PT. Digdoyo Bowo Leksono didirikan dengan satu misi utama: menyederhanakan
                  rumitnya proses perizinan dan pendirian bisnis di Indonesia. Kami paham bahwa
                  menangani urusan regulasi bisa jadi menantang, karenanya kami di sini untuk membantu.
                </p>
                <p>
                  Tim profesional berpengalaman kami siap memberikan pelayanan komplit 
                  dalam pendirian perusahaan, penerbitan izin OSS, izin SLF, maupun 
                  konsultansi hukum. Kami memadukan wawasan seputar regulasi lokal 
                  dengan pemahaman praktis bisnis Anda agar lebih efisien.
                </p>
                <p>
                  Selama bertahun-tahun, dengan berbagai pengalaman proyek yang berjalan aman,
                  kami telah menjadi partner terpercaya bagi pebisnis yang ingin 
                  memulai dan terus berkembang di skala nasional maupun internasional.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-bold text-primary-500 mb-1">10+</div>
                  <div className="text-sm text-gray-600">Tahun Pengalaman</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-500 mb-1">100+</div>
                  <div className="text-sm text-gray-600">Klien Dilayani</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-500 mb-1">95%</div>
                  <div className="text-sm text-gray-600">Tingkat Keberhasilan</div>
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
              Visi & Misi
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dipandu oleh tujuan yang jelas dan nilai-nilai yang teguh
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision Card */}
            <Card className="p-8 bg-white shadow-lg border-0">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visi Kami</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Menjadi mitra paling terpercaya untuk layanan legalitas dan perizinan bisnis
                di Indonesia, yang diakui karena profesionalisme, efisiensi, serta komitmen
                akan kesuksesan para klien kami.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary-500 rounded-full mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Keahlian terkemuka di industri</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary-500 rounded-full mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Penanganan proses yang efisien</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary-500 rounded-full mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Layanan yang berfokus pada klien</span>
                </li>
              </ul>
            </Card>

            {/* Mission Card */}
            <Card className="p-8 bg-white shadow-lg border-0">
              <div className="w-14 h-14 bg-secondary-100 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-secondary-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi Kami</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Kami memberdayakan bisnis untuk menavigasi regulasi Indonesia dengan percaya diri
                melalui penyediaan layanan hukum dan perizinan yang konprehensif, efisien, 
                transparan, dan dapat diandalkan.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-secondary-500 rounded-full mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Menyederhanakan proses yang rumit</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-secondary-500 rounded-full mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Komunikasi yang transparan</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-secondary-500 rounded-full mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Penyelesaian tepat waktu</span>
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
              Layanan Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Solusi aspek legal dan perizinan yang komprehensif bagi bisnis Anda
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
                    Pelajari Lebih Lanjut
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
              Rekam Jejak Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hasil nyata yang telah terbukti dalam membantu pendirian bisnis serta pertumbuhan bisnis di Indonesia
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
                  Melayani Klien di Seluruh Indonesia
                </h3>
                <p className="text-primary-100 leading-relaxed">
                  Dari Jakarta hingga Surabaya, Bandung hingga Bali, kami telah membantu banyak bisnis 
                  dari ragam ukuran menavigasi kerumitan regulasi dunia usaha. Jaringan serta keahlian kami 
                  menjangkau banyak kota-kota besar dan kawasan industri di Indonesia.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/10 rounded-xl">
                  <div className="text-2xl font-bold mb-1">Jakarta</div>
                  <div className="text-sm text-primary-100">Kantor Pusat</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-xl">
                  <div className="text-2xl font-bold mb-1">Surabaya</div>
                  <div className="text-sm text-primary-100">Kantor Cabang</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-xl">
                  <div className="text-2xl font-bold mb-1">Bandung</div>
                  <div className="text-sm text-primary-100">Area Layanan</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-xl">
                  <div className="text-2xl font-bold mb-1">Bali</div>
                  <div className="text-sm text-primary-100">Area Layanan</div>
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
              Nilai-Nilai Inti Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Prinsip-prinsip yang senantiasa memandu apa yang kami lakukan
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Berfokus pada Klien",
                description: "Kami mendahulukan kebutuhan klien serta memberikan solusi serta layanan yang terpersonalisasi.",
                color: "primary",
              },
              {
                icon: TrendingUp,
                title: "Profesionalisme",
                description: "Kami menjaga standar profesional dan interaksi terbaik dalam setiap kesempatan.",
                color: "secondary",
              },
              {
                icon: BookOpen,
                title: "Integritas",
                description: "Kami bertindak dengan kejujuran dan transparan, membangun kepercayaan dan rekam jejak yang baik.",
                color: "primary",
              },
              {
                icon: Heart,
                title: "Keunggulan",
                description: "Kami berusaha untuk meraih hasil terbaik dalam setiap layanan yang kami berikan kepada klien.",
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
              Siap Memulai Perjalanan Bisnis Anda?
            </h2>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
               Mari kita wujudkan impian bisnis Anda. Hubungi kami sekarang dan temukan solusi terbaik untuk kebutuhan Anda.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-500 font-semibold rounded-lg hover:bg-primary-50 transition-colors duration-200"
              >
                Hubungi Kami
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200"
              >
                Lihat Layanan
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
