import type { Metadata } from "next";
import {
  HeroSection,
  ServicesSection,
  AboutPreview,
  PortfolioSection,
  ContactCTA,
} from "@/components/sections";

/**
 * Home Page - PT. Digdoyo Bowo Leksono
 *
 * Main landing page that showcases the company's value proposition,
 * services, track record, and contact information.
 *
 * Page Structure:
 * 1. Hero Section - Above the fold value proposition
 * 2. Services Section - Core offerings preview
 * 3. About Preview - Company introduction
 * 4. Portfolio Section - Track record
 * 5. Contact CTA - Final conversion opportunity
 */

export const metadata: Metadata = {
  title: "Beranda - Layanan Legalitas & Perizinan Bisnis",
  description: "Layanan profesional untuk pendirian perusahaan, perizinan OSS, Sertifikat Laik Fungsi (SLF), dan konsultasi hukum di Indonesia. Dipercaya oleh 100+ perusahaan.",
  keywords: ["pendirian perusahaan", "perizinan OSS", "sertifikat laik fungsi", "konsultasi hukum", "Indonesia", "PT", "CV", "Firma"],
  openGraph: {
    title: "PT. Digdoyo Bowo Leksono - Layanan Legalitas & Perizinan Bisnis",
    description: "Mitra terpercaya Anda untuk legalitas dan perizinan bisnis di Indonesia",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutPreview />
      <PortfolioSection />
      <ContactCTA />
    </>
  );
}
