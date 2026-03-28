import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout";
import { Footer } from "@/components/layout";
import { organizationSchema } from "@/components/shared/SEO";
import SkipLink from "@/components/shared/SkipLink";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// PT. Digdoyo Bowo Leksono brand fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://digdoyobowoleksono.co.id";

export const metadata: Metadata = {
  title: {
    default: "PT. Digdoyo Bowo Leksono - Layanan Legalitas & Perizinan Bisnis",
    template: "%s | PT. Digdoyo Bowo Leksono",
  },
  description: "Layanan profesional dalam legalitas dan perizinan bisnis. Bantuan ahli untuk pendirian perusahaan, OSS, SLF, dan konsultasi hukum di Indonesia.",

  // Canonical URL
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "PT. Digdoyo Bowo Leksono",
    title: "PT. Digdoyo Bowo Leksono - Layanan Legalitas & Perizinan Bisnis",
    description: "Layanan profesional dalam legalitas dan perizinan bisnis",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "PT. Digdoyo Bowo Leksono - Layanan Legalitas & Perizinan Bisnis",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "PT. Digdoyo Bowo Leksono - Layanan Legalitas & Perizinan Bisnis",
    description: "Layanan profesional dalam legalitas dan perizinan bisnis",
    creator: "@digdoyobowoleksono",
    site: "@digdoyobowoleksono",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${poppins.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <SkipLink />
        <Navbar />
        <main className="flex-1 flex flex-col pt-20" id="main-content">
          {children}
        </main>
        <Footer />
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
