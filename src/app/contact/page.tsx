import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Container, Section } from "@/components/layout";
import { ContactForm } from "@/components/sections";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

/**
 * Contact Page - PT. Digdoyo Bowo Leksono
 *
 * Contact form, company information, and location map.
 */

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description: "Contact PT. Digdoyo Bowo Leksono for business legality and licensing services. Email: info@digdoyobowoleksono.co.id. We respond within 24 hours.",
  keywords: ["contact", "business licensing", "company establishment", "OSS", "SLF", "legal advisory", "Jakarta"],
  openGraph: {
    title: "Contact PT. Digdoyo Bowo Leksono",
    description: "Get in touch with our team. We respond within 24 hours.",
    url: "/contact",
  },
};

export default function ContactPage() {
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
              Contact <span className="text-secondary-400">Us</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200">
              Get in touch with our team. We're here to help you with
              your business legality and licensing needs.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Content */}
      <Section padding="xl">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Form - 2 columns */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and our team will get back to you
                  within 24 hours.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Contact Info - 1 column */}
            <div className="lg:col-span-1">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Contact Information
                </h2>
                <p className="text-gray-600">
                  Reach out to us directly through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:info@digdoyobowoleksono.co.id"
                      className="text-primary-500 hover:text-primary-600 transition-colors"
                    >
                      info@digdoyobowoleksono.co.id
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-secondary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a
                      href="tel:+62210000000"
                      className="text-primary-500 hover:text-primary-600 transition-colors"
                    >
                      +62 21 XXXX XXXX
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      Mon-Fri, 9am-5pm WIB
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office</h3>
                    <address className="text-gray-600 not-italic">
                      Jakarta, Indonesia
                    </address>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-secondary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Business Hours
                    </h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>9:00 AM - 5:00 PM</span>
                      </li>
                      <li className="flex justify-between text-gray-400">
                        <span>Saturday - Sunday</span>
                        <span>Closed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-10 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {[
                    { name: "LinkedIn", url: "#" },
                    { name: "Twitter", url: "#" },
                    { name: "Instagram", url: "#" },
                    { name: "Facebook", url: "#" },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-primary-100 hover:text-primary-500 transition-colors"
                      aria-label={social.name}
                    >
                      <span className="text-xs font-medium">
                        {social.name.charAt(0)}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Map Section */}
      <Section variant="muted" padding="none">
        <div className="w-full h-[450px] bg-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254188!2d106.6894!3d-6.2088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf5807c595!2sJakarta!5e0!3m2!1sen!2sid!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="PT. Digdoyo Bowo Leksono Location"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </Section>

      {/* FAQ Section */}
      <Section padding="xl">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "How long does company establishment take?",
                answer:
                  "The process typically takes 2-4 weeks depending on the type of entity and completeness of documents. We'll guide you through every step to ensure a smooth process.",
              },
              {
                question: "What documents are needed for OSS licensing?",
                answer:
                  "Requirements vary by business type, but generally include company documents (NIB), ID of directors, and business address proof. We'll provide a complete checklist based on your specific needs.",
              },
              {
                question: "Do you handle SLF permits for all building types?",
                answer:
                  "Yes, we process SLF permits for commercial, industrial, and residential buildings. Our team will coordinate with relevant authorities to ensure compliance.",
              },
              {
                question: "Can you help with legal review of contracts?",
                answer:
                  "Absolutely. Our legal advisory service includes contract review, drafting, and negotiation support to protect your business interests.",
              },
              {
                question: "Do you serve clients outside Jakarta?",
                answer:
                  "Yes, we serve clients across Indonesia including Surabaya, Bandung, Bali, and other major cities. We can handle remote consultations and on-site visits as needed.",
              },
              {
                question: "What are your service fees?",
                answer:
                  "Fees vary based on service type and complexity. Contact us for a customized quote. We offer transparent pricing with no hidden costs.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section padding="xl">
        <Container>
          <div className="bg-primary-500 rounded-3xl p-10 lg:p-16 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Start Your Business Journey?
            </h2>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our experts to discuss your
              business legality and licensing needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+62210000000"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-500 font-semibold rounded-lg hover:bg-primary-50 transition-colors duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
              <a
                href="mailto:info@digdoyobowoleksono.co.id"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200"
              >
                <Send className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
