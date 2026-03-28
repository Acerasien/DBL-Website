"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Container } from "./Container";
import { Button } from "../ui/Button";

/**
 * Navigation link configuration
 */
const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Tentang Kami" },
  { href: "/contact", label: "Kontak" },
];

/**
 * Navbar Component
 *
 * Sticky navigation bar with logo, navigation links, and CTA button.
 * Collapses to hamburger menu on mobile devices.
 *
 * Features:
 * - Sticky on scroll with backdrop blur
 * - Mobile responsive hamburger menu
 * - Active link highlighting
 * - Smooth transitions
 */
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-white py-5"
        )}
      >
        <Container>
          <nav className="flex items-center justify-between relative z-50">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group relative z-50">
              <Image
                src="/logo_transparent.png"
                alt="PT. Digdoyo Bowo Leksono"
                width={40}
                height={40}
                className="transform group-hover:scale-105 transition-transform duration-200"
              />
              <span
                className={cn(
                  "text-xl font-bold transition-colors duration-200",
                  "text-primary-500"
                )}
              >
                Digdoyo Bowo Leksono
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8 relative z-50">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200 relative group",
                    pathname === link.href
                      ? "text-primary-500"
                      : "text-gray-600 hover:text-secondary-600"
                  )}
                >
                  {link.label}
                  {/* Active indicator */}
                  {pathname === link.href && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-500 rounded-full" />
                  )}
                  {/* Hover underline animation */}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary-500 rounded-full transform origin-left transition-transform duration-200",
                      pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                </Link>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block relative z-50">
              <Button asChild size="md">
                <Link href="/contact">Hubungi Kami</Link>
              </Button>
            </div>

            {/* Mobile Menu Button - Higher z-index to ensure clickability */}
            <div className="lg:hidden relative z-[60]">
              <button
                type="button"
                className="p-3 text-gray-600 hover:text-primary-500 transition-colors cursor-pointer touch-manipulation relative z-[60]"
                style={{ WebkitTapHighlightColor: 'transparent' }}
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </nav>
        </Container>
      </header>

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white z-50 lg:hidden shadow-2xl transform transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-5 border-b border-border">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo_transparent.png"
                alt="PT. Digdoyo Bowo Leksono"
                width={36}
                height={36}
              />
              <span className="text-lg font-bold text-primary-500">Digdoyo Bowo Leksono</span>
            </Link>
            <button
              type="button"
              className="p-2 text-gray-600 hover:text-primary-500 transition-colors cursor-pointer touch-manipulation"
              style={{ WebkitTapHighlightColor: 'transparent' }}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-6">
            <ul className="flex flex-col gap-2 px-5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200",
                      pathname === link.href
                        ? "bg-primary-50 text-primary-600"
                        : "text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile CTA Button */}
          <div className="p-5 border-t border-border">
            <Button asChild fullWidth size="lg">
              <Link href="/contact">Hubungi Kami</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;
