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
  title: "Home - Business Legality & Licensing Services",
  description: "Professional services for company establishment, OSS licensing, SLF permits, and legal advisory in Indonesia. Trusted by 100+ companies.",
  keywords: ["company establishment", "OSS licensing", "SLF permit", "legal advisory", "Indonesia", "PT", "CV", "Firma"],
  openGraph: {
    title: "PT. Digdoyo Bowo Leksono - Business Legality & Licensing Services",
    description: "Your trusted partner for business legality and licensing in Indonesia",
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
