import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

/**
 * Footer link sections configuration
 */
const footerLinks = {
  company: {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/about#services", label: "Services" },
      { href: "/about#portfolio", label: "Our Work" },
    ],
  },
  services: {
    title: "Services",
    links: [
      { href: "/about#services", label: "Company Establishment" },
      { href: "/about#services", label: "OSS Licensing" },
      { href: "/about#services", label: "SLF Permit" },
      { href: "/about#services", label: "Legal Advisory" },
    ],
  },
  support: {
    title: "Support",
    links: [
      { href: "/contact", label: "Contact Us" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
};

/**
 * Social media links
 */
const socialLinks = [
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
];

/**
 * Footer Component
 *
 * Site footer with navigation links, contact info, and social media.
 * Organized in a responsive grid layout.
 *
 * Features:
 * - Responsive grid (1 col mobile, 2 col tablet, 4 col desktop)
 * - Social media icons
 * - Contact information
 * - Newsletter signup (optional)
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container>
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Image
                  src="/logo_white.png"
                  alt="PT. Digdoyo Bowo Leksono"
                  width={40}
                  height={40}
                />
                <span className="text-xl font-bold text-white">Digdoyo Bowo Leksono</span>
              </Link>
              <p className="text-gray-400 mb-6 max-w-sm">
                Professional services in business legality and licensing.
                Your trusted partner for company establishment, OSS, SLF, and legal advisory in Indonesia.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="mailto:info@digdoyobowoleksono.co.id"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>info@digdoyobowoleksono.co.id</span>
                </a>
                <a
                  href="tel:+62210000000"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+62 21 XXXX XXXX</span>
                </a>
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-5 h-5" />
                  <span>Jakarta, Indonesia</span>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">{footerLinks.company.title}</h3>
              <ul className="space-y-2">
                {footerLinks.company.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">{footerLinks.services.title}</h3>
              <ul className="space-y-2">
                {footerLinks.services.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">{footerLinks.support.title}</h3>
              <ul className="space-y-2">
                {footerLinks.support.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-gray-400">
              © {currentYear} PT. Digdoyo Bowo Leksono. All rights reserved.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-all duration-200"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
