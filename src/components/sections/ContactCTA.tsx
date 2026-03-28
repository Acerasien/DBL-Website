import React from "react";
import Link from "next/link";
import { Container, Section } from "@/components/layout";
import { Button } from "@/components/ui";
import { ArrowRight, Mail, Phone, Clock } from "lucide-react";

/**
 * Contact CTA Section Component
 *
 * Final conversion section at the bottom of the home page.
 * Uses a bold background color to stand out and drive action.
 */
export const ContactCTA = () => {
  return (
    <Section variant="primary" padding="xl">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Content */}
          <div className="text-center mb-12">
            {/* Heading */}
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Siap Memulai Perjalanan Bisnis Anda?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Biarkan kami membantu setiap kebutuhan prosedur legalitas hingga perizinan Anda.
              Hubungi kami sekarang untuk berkonsultasi secara lebih mendalam.
            </p>

            {/* Primary CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary-500 hover:bg-gray-100 font-semibold"
              >
                <Link href="/contact">
                  Jadwalkan Konsultasi Gratis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-secondary-500 hover:border-secondary-500 hover:text-white font-semibold bg-transparent"
              >
                <Link href="/about#services">
                  Lihat Layanan Kami
                </Link>
              </Button>
            </div>
          </div>

          {/* Contact Options */}
          <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-white/20">
            {/* Email */}
            <a
              href="mailto:info@digdoyobowoleksono.co.id"
              className="flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-white/20 transition-colors">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <span className="text-white font-medium">Kirim Email</span>
              <span className="text-primary-200 text-sm">info@digdoyobowoleksono.co.id</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+62210000000"
              className="flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-white/20 transition-colors">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <span className="text-white font-medium">Hubungi Kami</span>
              <span className="text-primary-200 text-sm">+62 21 XXXX XXXX</span>
            </a>

            {/* Business Hours */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-3">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <span className="text-white font-medium">Jam Operasional</span>
              <span className="text-primary-200 text-sm">Senin-Jumat, 09.00-17.00 WIB</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ContactCTA;
