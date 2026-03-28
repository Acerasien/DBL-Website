import React from "react";
import type { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "profile";
  twitterCard?: "summary" | "summary_large_image";
  noIndex?: boolean;
}

/**
 * SEO Component
 *
 * Generates comprehensive SEO metadata including:
 * - Basic meta tags (title, description)
 * - Open Graph tags for social sharing
 * - Twitter Card tags
 * - Canonical URL
 * - Robots directives
 *
 * Usage: Export metadata from page component using generateMetadata function
 */
export const generateSEO = ({
  title,
  description,
  canonicalUrl,
  ogImage = "/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  noIndex = false,
}: SEOProps): Metadata => {
  const siteName = "PT. Digdoyo Bowo Leksono";
  const defaultTitle = `${title} | ${siteName}`;

  return {
    title: {
      default: defaultTitle,
      template: `%s | ${siteName}`,
    },
    description,

    // Canonical URL
    ...(canonicalUrl && {
      alternates: {
        canonical: canonicalUrl,
      },
    }),

    // Robots
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    // Open Graph / Facebook
    openGraph: {
      type: ogType,
      locale: "en_US",
      url: canonicalUrl,
      siteName,
      title: defaultTitle,
      description,
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: title }] : undefined,
    },

    // Twitter
    twitter: {
      card: twitterCard,
      title: defaultTitle,
      description,
      images: ogImage ? [ogImage] : undefined,
      creator: "@digdoyobowoleksono",
      site: "@digdoyobowoleksono",
    },

    // Additional metadata
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://digdoyobowoleksono.co.id"),
  };
};

/**
 * Structured Data (JSON-LD) for Organization
 * Enhances search results with rich snippets
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PT. Digdoyo Bowo Leksono",
  description: "Professional services in business legality and licensing. Expert assistance for company establishment, OSS, SLF, and legal advisory in Indonesia.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://digdoyobowoleksono.co.id",
  logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://digdoyobowoleksono.co.id"}/logo.png`,
  foundingDate: "2010",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jakarta",
    addressCountry: "ID",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+62-21-XXXX-XXXX",
    contactType: "customer service",
    email: "info@digdoyobowoleksono.co.id",
  },
  sameAs: [
    "https://www.linkedin.com/company/digdoyobowoleksono",
    "https://twitter.com/digdoyobowoleksono",
    "https://www.facebook.com/digdoyobowoleksono",
  ],
};

/**
 * Structured Data (JSON-LD) for Local Business
 */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "PT. Digdoyo Bowo Leksono",
  image: `${process.env.NEXT_PUBLIC_SITE_URL || "https://digdoyobowoleksono.co.id"}/og-image.jpg`,
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://digdoyobowoleksono.co.id",
  telephone: "+62-21-XXXX-XXXX",
  email: "info@digdoyobowoleksono.co.id",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jakarta",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -6.2088,
    longitude: 106.8456,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
  priceRange: "$$",
};

/**
 * Structured Data Component for inline JSON-LD
 */
export const StructuredData: React.FC<{
  data: Record<string, unknown>;
}> = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export default generateSEO;
