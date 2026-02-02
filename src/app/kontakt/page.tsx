"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Mail, Phone, MapPin, Linkedin, Clock, MessageCircle } from "lucide-react";
import Script from "next/script";

import { openExternalUrl, CALENDLY_LINK, LINKEDIN_LINK, PHONE_LINK } from "@/lib/links";
import { EmbeddedContactForm } from "@/components/EmbeddedContactForm";

const contactMethods = [
  {
    icon: CalendarDays,
    title: "30 Min Call buchen",
    description: "Der schnellste Weg für ein Erstgespräch",
    action: () => openExternalUrl(CALENDLY_LINK),
    buttonText: "Termin wählen",
    highlight: true,
  },
  {
    icon: Mail,
    title: "Anfrage per E-Mail",
    description: "Formular direkt auf der Seite ausfüllen",
    action: () => {
      const el = document.getElementById("contact-form");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    buttonText: "Formular öffnen",
  },
  {
    icon: Phone,
    title: "Anrufen",
    description: "+49 151 21343097",
    action: () => openExternalUrl(PHONE_LINK),
    buttonText: "Jetzt anrufen",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    description: "Vernetzen Sie sich mit mir",
    action: () => openExternalUrl(LINKEDIN_LINK),
    buttonText: "Profil ansehen",
  },
];

const faqs = [
  {
    question: "Wie läuft ein Erstgespräch ab?",
    answer:
      "In 30 Minuten besprechen wir Ihre aktuelle Situation, Ziele und Herausforderungen. Ich gebe eine erste Einschätzung und Empfehlungen für mögliche nächste Schritte. Das Gespräch ist kostenlos und unverbindlich.",
  },
  {
    question: "Für welche Unternehmensgröße sind Ihre Leistungen gedacht?",
    answer:
      "Ich arbeite primär mit mittelständischen Unternehmen und Enterprise-Kunden, typischerweise ab 50 Mitarbeitern. Die Methoden sind für komplexe Organisationen mit entsprechenden Compliance- und Governance-Anforderungen optimiert. Falls Sie nicht in diese Zielgruppe fallen: Vereinbaren Sie trotzdem gerne ein Gespräch — gemeinsam finden wir heraus, ob und wie wir eine passende Lösung für Sie entwickeln können.",
  },
  {
    question: "Wie schnell können wir starten?",
    answer:
      "Nach dem Erstgespräch kann ein Projekt typischerweise innerhalb von 1-2 Wochen starten, abhängig von der aktuellen Auslastung und Ihren internen Freigabeprozessen.",
  },
  {
    question: "Arbeiten Sie remote oder vor Ort?",
    answer:
      "Beides ist möglich. Die meisten Projekte werden remote durchgeführt, mit optionalen Vor-Ort-Workshops in München oder bei Ihnen im Unternehmen für wichtige Meilensteine.",
  },
];

function scrollToContactForm() {
  const el = document.getElementById("contact-form");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function KontaktPage() {
  useEffect(() => {
    const handleHashScroll = () => {
      if (typeof window !== "undefined" && window.location.hash === "#contact-form") {
        scrollToContactForm();
      }
    };
    handleHashScroll();
    window.addEventListener("hashchange", handleHashScroll);
    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, []);

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      <section className="hero-gradient pt-44 pb-20 lg:pt-52 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/50 backdrop-blur-sm text-[#ff6b35] text-sm font-medium border border-blue-100 mb-6">
              <MessageCircle className="w-4 h-4" />
              Kontakt
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a1628] leading-tight mb-8">
              Lassen Sie uns{" "}
              <span className="text-gradient-orange">sprechen</span>
            </h1>
            <p className="text-xl lg:text-2xl text-[#5a6a7e] leading-relaxed">
              Ob Fragen, Ideen oder ein konkretes Projekt — ich freue mich auf den Austausch mit Ihnen.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 lg:py-32 section-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-6">
                  Kontaktmöglichkeiten
                </h2>
                <p className="text-lg text-[#5a6a7e] leading-relaxed">
                  Wählen Sie den für Sie bequemsten Weg, mich zu erreichen.
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-6">
                {contactMethods.map((method, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`rounded-2xl p-6 ${
                      method.highlight
                        ? "bg-gradient-to-br from-[#ff6b35] to-[#ff8c5a] text-white"
                        : "bg-white border border-gray-100 shadow-sm"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                        method.highlight ? "bg-white/20" : "bg-[#f4f6f9]"
                      }`}
                    >
                      <method.icon
                        className={`w-6 h-6 ${method.highlight ? "text-white" : "text-[#ff6b35]"}`}
                      />
                    </div>
                    <h3
                      className={`font-bold text-lg mb-2 ${
                        method.highlight ? "text-white" : "text-[#0a1628]"
                      }`}
                    >
                      {method.title}
                    </h3>
                    <p
                      className={`text-sm mb-4 ${
                        method.highlight ? "text-white/80" : "text-[#5a6a7e]"
                      }`}
                    >
                      {method.description}
                    </p>
                    <button
                      type="button"
                      data-orchids-interactive
                      onClick={method.action}
                      className={`text-sm font-semibold ${
                        method.highlight
                          ? "text-white underline underline-offset-4"
                          : "text-[#ff6b35] hover:underline"
                      }`}
                    >
                      {method.buttonText} →
                    </button>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f4f6f9] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#ff6b35]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a1628] mb-2">Standort</h3>
                    <p className="text-[#5a6a7e] leading-relaxed">
                      Unite Office (7th floor)<br />
                      Rosenheimer Str. 116A<br />
                      81669 München
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff6b35] to-[#ff8c5a] flex items-center justify-center">
                      <CalendarDays className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0a1628]">
                        30 Min Erstgespräch
                      </h3>
                      <p className="text-[#5a6a7e] text-sm">Kostenlos & unverbindlich</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-6 text-sm text-[#5a6a7e]">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>30 Minuten</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      <span>Video Call</span>
                    </div>
                  </div>

                <div className="bg-[#f8fafc] rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-[#0a1628] mb-3">Was Sie erwartet:</h4>
                  <ul className="space-y-2 text-sm text-[#5a6a7e]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#ff6b35] mt-1">•</span>
                      <span>Verständnis Ihrer aktuellen Situation und Ziele</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#ff6b35] mt-1">•</span>
                      <span>Erste Einschätzung der Machbarkeit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#ff6b35] mt-1">•</span>
                      <span>Empfehlungen für mögliche nächste Schritte</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#ff6b35] mt-1">•</span>
                      <span>Raum für Ihre Fragen</span>
                    </li>
                  </ul>
                </div>

                <button
                  type="button"
                  data-orchids-interactive
                  onClick={() => openExternalUrl(CALENDLY_LINK)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 btn-primary text-white font-semibold rounded-xl text-lg"
                >
                  <CalendarDays className="w-5 h-5" />
                  <span>Termin buchen</span>
                </button>

                <p className="text-center text-sm text-[#5a6a7e] mt-4">
                  Sie werden zu Calendly weitergeleitet
                </p>
              </div>

              <div id="contact-form">
                <EmbeddedContactForm variant="default" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#ff6b35]/10 text-[#ff6b35] text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-6">
              Häufig gestellte Fragen
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#f8fafc] rounded-2xl p-8"
              >
                <h3 className="font-bold text-[#0a1628] text-lg mb-3">
                  {faq.question}
                </h3>
                <p className="text-[#5a6a7e] leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#0a1628] to-[#1a2b42] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#ff6b35]/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-center">
              Weitere Fragen?
            </h2>
            <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto mb-10 text-center">
              Füllen Sie das Formular aus – ich antworte in der Regel innerhalb von 24 Stunden.
            </p>

            <EmbeddedContactForm variant="compact" />
          </motion.div>
        </div>
      </section>
    </>
  );
}
