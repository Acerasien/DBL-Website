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
  title: "Hubungi Kami",
  description: "Hubungi PT. Digdoyo Bowo Leksono untuk layanan legalitas dan perizinan bisnis. Email: info@digdoyobowoleksono.co.id. Kami membalas dalam 24 jam.",
  keywords: ["kontak", "perizinan bisnis", "pendirian perusahaan", "OSS", "SLF", "konsultasi hukum", "Jakarta"],
  openGraph: {
    title: "Hubungi PT. Digdoyo Bowo Leksono",
    description: "Hubungi tim kami. Kami membalas dalam kurun waktu 24 jam.",
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
              Hubungi <span className="text-secondary-400">Kami</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200">
              Jangkau tim kami untuk berkonsultasi seputar masalah 
              legalitas dan kebutuhan perizinan bisnis Anda.
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
                  Kirimkan Pesan
                </h2>
                <p className="text-gray-600">
                  Isi formulir di bawah ini dan tim kami akan segera menghubungi Anda
                  dalam waktu 1 kali 24 jam.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Contact Info - 1 column */}
            <div className="lg:col-span-1">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Informasi Kontak
                </h2>
                <p className="text-gray-600">
                  Hubungi kami secara langsung lewat kontak-kontak berikut ini.
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
                      Kami membalas dalam 24 jam
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-secondary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Telepon</h3>
                    <a
                      href="tel:+62210000000"
                      className="text-primary-500 hover:text-primary-600 transition-colors"
                    >
                      +62 21 XXXX XXXX
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      Senin-Jumat, 09.00-17.00 WIB
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Kantor</h3>
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
                      Jam Operasional
                    </h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex justify-between">
                        <span>Senin - Jumat</span>
                        <span>09.00 - 17.00 WIB</span>
                      </li>
                      <li className="flex justify-between text-gray-400">
                        <span>Sabtu - Minggu</span>
                        <span>Tutup</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-10 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Ikuti Kami
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
            title="Lokasi PT. Digdoyo Bowo Leksono"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </Section>

      {/* FAQ Section */}
      <Section padding="xl">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Jawaban cepat dari beberapa pertanyaan umum mengenai layanan dan proses kami.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "Berapa lama proses pendirian perusahaan biasanya memakan waktu?",
                answer:
                  "Proses ini umumnya membutuhkan waktu 2-4 minggu tergantung pada jenis badan usaha dan kelengkapan dokumen. Kami akan memandu Anda dalam setiap tahapan untuk memastikan kelancarannya.",
              },
              {
                question: "Dokumen apa saja yang dibutuhkan untuk perizinan OSS?",
                answer:
                  "Syarat dokumen bervariasi bergantung pada jenis bisnis, tetapi umumnya meliputi dokumen perusahaan induk (NIB), KTP/identitas direksi, serta bukti alamat domisili usaha. Kami akan memberikan daftar periksa lengkap sesuai dengan kebutuhan spesifik Anda.",
              },
              {
                question: "Apakah Anda juga memproses izin SLF untuk semua jenis bangunan?",
                answer:
                  "Ya, kami memproses pengajuan dan penerbitan SLF untuk ragam fungsi bangunan komersial, industri, dan residensial. Tim kami akan berkoordinasi secara langsung dengan pihak berwenang guna memastikan bahwa bangunan Anda telah layak secara teknis.",
              },
              {
                question: "Dapatkah Anda membantu meninjau draf kontrak kerja dan hukum?",
                answer:
                  "Tentu saja. Cakupan layanan penasihatan hukum kami secara tak terbatas meliputi peninjauan kontrak, penyusunan draf, maupun dukungan konsultansi mitigasi terkait untuk senantiasa melindungi entitas perusahan Anda.",
              },
              {
                question: "Apakah Anda melayani klien dari luar Jakarta?",
                answer:
                  "Ya, kami melayani berbagai klien perusahaan di seluruh Indonesia termasuk Surabaya, Bandung, Bali, maupun sebaran kota besar lainnya. Kami dapat mengakomodasi agenda konsultasi jarak jauh / virtual hingga kunjungan on-site bila diperlukan.",
              },
              {
                question: "Bagaimana dengan sistem atau rentang biaya layanannya?",
                answer:
                  "Biaya yang dikenakan cukup bervariasi bergantung pada jenis layanan dan kompleksitas permasalahannya. Silahkan hubungi kami guna mendapatkan penawaran awal yang dapat disesuaikan. Kami menawarkan penetapan harga yang transparan tanpa hidden costs (biaya siluman).",
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
              Siap Memulai Perjalanan Bisnis Anda?
            </h2>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              Jadwalkan konsultasi gratis dengan para ahli kami untuk membantu menganalisis lebih komperhensif
              kebutuhan legalitas dan perizinan bisnis Anda.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+62210000000"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-500 font-semibold rounded-lg hover:bg-primary-50 transition-colors duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Telepon Sekarang
              </a>
              <a
                href="mailto:info@digdoyobowoleksono.co.id"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200"
              >
                <Send className="w-5 h-5 mr-2" />
                Kirim Email
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
