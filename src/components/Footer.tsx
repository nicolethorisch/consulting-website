"use client";

import Link from "next/link";
import { CalendarDays, Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { openExternalUrl, CALENDLY_LINK, LINKEDIN_LINK, PHONE_LINK } from "@/lib/links";

export function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white relative overflow-hidden">
      <div className="absolute top-0 bottom-0 left-0 w-12 md:w-24 lg:w-40 xl:w-56 bg-gradient-to-r from-[#ff6b35]/20 via-[#ff8c5a]/10 to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-12 md:w-24 lg:w-40 xl:w-56 bg-gradient-to-l from-[#ff6b35]/20 via-[#ff8c5a]/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/ebddd4d1-529f-4f5c-8cf9-5c0783c3927a/nicole-thorisch-logo-komplett-zoomed-1769432467459.png?width=8000&height=8000&resize=contain" 
                  alt="Nicole Thorisch Logo" 
                  className="h-40 w-auto object-contain brightness-0 invert"
                />
              </Link>
            <div className="mb-8">
              <p className="text-[#94a3b8] text-lg leading-relaxed max-w-md">
                KI, die liefert. Keine Buzzwords, keine Pilotprojekte ohne Ende.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => openExternalUrl(CALENDLY_LINK)}
                className="flex items-center gap-2 px-5 py-3 btn-primary text-white font-semibold rounded-full"
              >
                <CalendarDays className="w-4 h-4" />
                <span>Gespräch vereinbaren</span>
              </button>
              <Link
                href="/kontakt#contact-form"
                className="flex items-center gap-2 px-5 py-3 border border-white/20 hover:bg-white/10 text-white font-medium rounded-full transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Anfrage per E-Mail</span>
              </Link>
            </div>
          </div>

            <div>
              <h3 className="font-semibold text-lg mb-6">Navigation</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="text-[#94a3b8] hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/leistungen" className="text-[#94a3b8] hover:text-white transition-colors">
                    Leistungen
                  </Link>
                </li>
                <li>
                  <Link href="/vorgehen" className="text-[#94a3b8] hover:text-white transition-colors">
                    Vorgehen
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-[#94a3b8] hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/kontakt" className="text-[#94a3b8] hover:text-white transition-colors">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[#94a3b8]">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>
                  Unite Office (7th floor)<br />
                  Rosenheimer Str. 116A<br />
                  81669 München
                </span>
              </li>
              <li>
                <button
                  onClick={() => openExternalUrl(PHONE_LINK)}
                  className="flex items-center gap-3 text-[#94a3b8] hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+49 151 21343097</span>
                </button>
              </li>
              <li>
                <Link
                  href="/kontakt#contact-form"
                  className="flex items-center gap-3 text-[#94a3b8] hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>nicole.thorisch@gmail.com</span>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => openExternalUrl(LINKEDIN_LINK)}
                  className="flex items-center gap-3 text-[#94a3b8] hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#94a3b8] text-sm">
            © {new Date().getFullYear()} Nicole Thorisch. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6 text-sm text-[#94a3b8]">
            <Link href="/impressum" className="hover:text-white transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
