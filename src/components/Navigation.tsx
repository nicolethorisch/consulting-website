"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, Mail, Menu, Phone, X } from "lucide-react";
import { openExternalUrl, CALENDLY_LINK, MAILTO_LINK, PHONE_LINK } from "@/lib/links";

const PHONE_NUMBER = "+49 151 21343097";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/vorgehen", label: "Vorgehen" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const openEmail = () => openExternalUrl(MAILTO_LINK);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const openCalendly = () => openExternalUrl(CALENDLY_LINK);
    const openPhone = () => openExternalUrl(PHONE_LINK);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-[#0a1628]/95 backdrop-blur-xl border-b border-white/10 shadow-lg" 
        : "bg-[#0a1628]/80 backdrop-blur-lg border-b border-white/5"
    }`}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-16" : "h-20"
        }`}>
          <Link href="/" className="flex items-center gap-3">
            <img 
              src="/brand/nicole-thorisch-logo-white.png" 
              alt="Nicole Thorisch Logo" 
              className={`transition-all duration-300 w-auto object-contain ${
                scrolled ? "h-10" : "h-12"
              }`}
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-white font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

              <div className="hidden lg:flex items-center gap-4">
                <button
                  type="button"
                  data-orchids-interactive
                  onClick={openPhone}
                  className="flex items-center gap-2 px-4 py-2.5 text-white/70 hover:text-white font-medium transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>{PHONE_NUMBER}</span>
                </button>
                <button
                  type="button"
                  data-orchids-interactive
                  onClick={openEmail}
                  className="flex items-center gap-2 px-4 py-2.5 text-white/70 hover:text-white font-medium transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </button>
              <button
                type="button"
                data-orchids-interactive
                onClick={openCalendly}
                className="flex items-center gap-2 px-6 py-2.5 bg-[#ff6b35] hover:bg-[#ff8c5a] text-white font-bold rounded-full transition-all shadow-lg shadow-[#ff6b35]/20 hover:scale-105 active:scale-95"
              >
                <CalendarDays className="w-4 h-4" />
                <span>Gespräch vereinbaren</span>
              </button>
            </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0a1628] border-b border-white/10"
          >
            <div className="px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-white/80 hover:text-white font-medium text-xl py-2"
                >
                  {link.label}
                </Link>
              ))}
                <div className="pt-6 border-t border-white/10 space-y-4">
                    <button
                      type="button"
                      data-orchids-interactive
                      onClick={() => {
                        openPhone();
                        setMobileMenuOpen(false);
                      }}
                      className="flex items-center justify-center gap-2 w-full px-4 py-4 text-white font-medium border border-white/20 rounded-xl hover:bg-white/5 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>{PHONE_NUMBER}</span>
                    </button>
                    <button
                      type="button"
                      data-orchids-interactive
                      onClick={() => {
                        openEmail();
                        setMobileMenuOpen(false);
                      }}
                      className="flex items-center justify-center gap-2 w-full px-4 py-4 text-white font-medium border border-white/20 rounded-xl hover:bg-white/5 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Anfrage per Email</span>
                    </button>
                <button
                  type="button"
                  data-orchids-interactive
                  onClick={() => {
                    openCalendly();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 w-full px-4 py-4 bg-[#ff6b35] text-white font-bold rounded-xl shadow-lg shadow-[#ff6b35]/20"
                >
                  <CalendarDays className="w-4 h-4" />
                  <span>Gespräch vereinbaren</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff6b35] to-transparent opacity-80" />
      <div className="absolute bottom-0 left-0 right-0 h-[15px] bg-gradient-to-r from-transparent via-[#ff6b35]/30 to-transparent blur-xl pointer-events-none" />
    </header>
  );
}
