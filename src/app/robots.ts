import { MetadataRoute } from "next";

/**
 * Robots.txt Configuration
 *
 * Controls search engine crawling behavior
 * Allows all bots by default, references sitemap location
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://digdoyobowoleksono.co.id";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Disallow admin/private areas if they exist
        disallow: ["/_next/", "/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        // Optimize for Google
        disallow: ["/_next/", "/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
