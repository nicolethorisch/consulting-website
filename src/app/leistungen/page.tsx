"use client";

import { motion } from "framer-motion";
import { CalendarDays, Mail, Check, ArrowRight, Lightbulb, Target, Clock, Building2, Zap, Users, GraduationCap, Shield, FileText, MessageSquare, Calculator, FileCheck, BarChart2 } from "lucide-react";

import Link from "next/link";
import { openExternalUrl, CALENDLY_LINK } from "@/lib/links";

const services = [
  {
    icon: Lightbulb,
    title: "Prozess-Analyse",
    subtitle: "Verstehen, wo Zeit verloren geht",
    description:
      "Ich schaue mir Ihre Arbeitsabläufe an und zeige, wo Zeit und Geld verloren geht. Sie erhalten konkrete Vorschläge, welche Aufgaben sich automatisieren lassen. Mit einer ehrlichen Kosten Nutzen Rechnung.",
    deliverables: [
      "Arbeitsabläufe dokumentieren",
      "Zeitfresser identifizieren",
      "Automatisierungspotenzial aufzeigen",
      "Kosten Nutzen Rechnung",
    ],
    timeline: "1-2 Wochen",
    ideal: "Unternehmen, die wissen wollen, wo sie mit KI Automatisierung ansetzen sollten",
  },
  {
    icon: Target,
    title: "KI Automatisierung",
    subtitle: "Wiederkehrende Aufgaben automatisieren",
    description:
      "Virtuelle Mitarbeiter für Ihr Team: Emails beantworten, Dokumente erstellen, Termine koordinieren. Ich automatisiere wiederkehrende Aufgaben und schule Ihre Mitarbeiter im Umgang mit den neuen Tools.",
    deliverables: [
      "Email Assistenten einrichten",
      "Dokumentenerstellung automatisieren",
      "Termin Koordination optimieren",
      "Mitarbeiter Schulung inklusive",
    ],
    timeline: "2-4 Wochen",
    ideal: "Teams, die täglich Stunden mit wiederkehrenden Aufgaben verbringen",
  },
  {
    icon: Building2,
    title: "Maßgeschneiderte Software",
    subtitle: "Enterprise Tools zum Mittelstands Preis",
    description:
      "Individuelle KI Lösungen für Ihre spezifischen Anforderungen: CRM Assistenten, Angebots Generatoren, Kundenservice Bots. Entwickelt für Ihren Betrieb, nicht von der Stange.",
    deliverables: [
      "Individuelle Anforderungsanalyse",
      "Maßgeschneiderte Entwicklung",
      "Integration in bestehende Systeme",
      "Laufende Betreuung (optional)",
    ],
    timeline: "4-8 Wochen",
    ideal: "Unternehmen mit spezifischen Anforderungen, die keine Standardlösung abdeckt",
  },
  {
    icon: BarChart2,
    title: "Datenanalyse und Analytics",
    subtitle: "Aus Daten Entscheidungen ableiten",
    description:
      "Ihre Geschäftsdaten systematisch auswerten: Vertriebsanalysen, KPI-Dashboards, Reporting-Automatisierung. Ich helfe Ihnen, aus Excel-Chaos und verstreuten Quellen klare Kennzahlen und Handlungsempfehlungen zu gewinnen.",
    deliverables: [
      "Datenquellen erfassen und zusammenführen",
      "KPI-Dashboards und Reports erstellen",
      "Reporting-Automatisierung einrichten",
      "Handlungsempfehlungen ableiten",
    ],
    timeline: "2-3 Wochen",
    ideal: "Unternehmen, die mehr aus ihren Daten machen und datenbasierte Entscheidungen treffen wollen",
  },
];

const examples = [
  {
    icon: MessageSquare,
    title: "Email Assistent",
    description: "Standardanfragen automatisch beantworten, Termine vorschlagen, wichtige Emails priorisieren.",
  },
  {
    icon: FileText,
    title: "Angebots Generator",
    description: "Kundenanfragen analysieren, passendes Angebot aus Vorlagen generieren, Preise berechnen.",
  },
  {
    icon: Users,
    title: "Kundenservice Bot",
    description: "24/7 Kundenanfragen beantworten, komplexe Fälle an Mitarbeiter weiterleiten.",
  },
  {
    icon: Calculator,
    title: "Rechnungsprüfung",
    description: "Eingangsrechnungen erfassen, mit Bestellungen abgleichen, Freigabe Workflows automatisieren.",
  },
  {
    icon: BarChart2,
    title: "Vertriebs-Dashboard",
    description: "Umsätze, Pipeline und Conversion automatisch visualisieren. Kennzahlen statt Excel-Tabellen.",
  },
];

export default function LeistungenPage() {
  return (
    <>
      <section className="hero-gradient pt-44 pb-20 lg:pt-52 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/50 backdrop-blur-sm text-[#ff6b35] text-sm font-medium border border-blue-100 mb-6">
              <Zap className="w-4 h-4" />
              Leistungen
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a1628] leading-tight mb-8">
              KI Lösungen für den{" "}
              <span className="text-gradient-orange">Mittelstand</span>
            </h1>
            <p className="text-xl lg:text-2xl text-[#5a6a7e] leading-relaxed">
              Von der Analyse bis zur fertigen Lösung. Pragmatisch und auf Ihren Betrieb zugeschnitten.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 lg:py-32 section-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-12 items-start"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff6b35] to-[#ff8c5a] flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-[#0a1628]">
                        {service.title}
                      </h2>
                      <p className="text-[#ff6b35] font-medium">{service.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-lg text-[#5a6a7e] leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-6 mb-8">
                    <div className="flex items-center gap-2 text-[#0a1628]">
                      <Clock className="w-5 h-5 text-[#ff6b35]" />
                      <span className="font-medium">{service.timeline}</span>
                    </div>
                  </div>

                  <Link
                    href="/kontakt#contact-form"
                    className="flex items-center gap-2 px-6 py-3 btn-primary text-white font-semibold rounded-full"
                  >
                    <span>Personalisierte Lösung anfragen</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="font-bold text-[#0a1628] mb-6 text-lg">Was Sie bekommen</h3>
                  <ul className="space-y-4 mb-8">
                    {service.deliverables.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#ff6b35]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-[#ff6b35]" />
                        </div>
                        <span className="text-[#5a6a7e]">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-gray-100">
                    <h4 className="text-sm font-medium text-[#5a6a7e] uppercase tracking-wider mb-2">
                      Ideal für
                    </h4>
                    <p className="text-[#0a1628]">{service.ideal}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#ff6b35]/10 text-[#ff6b35] text-sm font-medium mb-4">
              Beispiele
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-6">
              Was kann automatisiert werden?
            </h2>
            <p className="text-xl text-[#5a6a7e] max-w-2xl mx-auto">
              Konkrete Anwendungsfälle, die meine Kunden bereits nutzen
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {examples.map((example, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#f8fafc] rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0a1628] flex items-center justify-center mb-4">
                  <example.icon className="w-6 h-6 text-[#ff6b35]" />
                </div>
                <h3 className="font-bold text-[#0a1628] mb-2">{example.title}</h3>
                <p className="text-sm text-[#5a6a7e] leading-relaxed">
                  {example.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 section-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#ff6b35]/10 text-[#ff6b35] text-sm font-medium mb-4">
              Warum ich
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-6">
              Was Sie bei mir bekommen
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Users,
                title: "Persönliche Betreuung",
                description: "Sie arbeiten direkt mit mir. Keine Projektmanager, keine Kommunikationsketten, keine versteckten Kosten."
              },
              {
                icon: GraduationCap,
                title: "Schulung inklusive",
                description: "Ich zeige Ihrem Team, wie die neuen Tools funktionieren. Sie sind nicht von mir abhängig."
              },
              {
                icon: Clock,
                title: "Schnelle Umsetzung",
                description: "Erste Ergebnisse in Tagen, nicht Monaten. Transparente Kosten ohne Enterprise Aufschläge."
              },
              {
                icon: Shield,
                title: "Wissenschaftliche Präzision",
                description: "Als Forscherin am Max-Planck-Institut arbeite ich methodisch und zuverlässig."
              }
            ].map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 p-6 lg:p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0a1628] to-[#1a2b42] flex items-center justify-center flex-shrink-0">
                  <reason.icon className="w-7 h-7 text-[#ff6b35]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0a1628] mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-[#5a6a7e] leading-relaxed">
                    {reason.description}
                  </p>
                </div>
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
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Bereit für den nächsten Schritt?
            </h2>
            <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto mb-10">
              In einem kostenlosen 30-minütigen Gespräch finden wir gemeinsam heraus, welche Aufgaben Sie automatisieren können. Unverbindlich.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openExternalUrl(CALENDLY_LINK)}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-[#1e3a5f] hover:bg-[#254670] text-white font-semibold rounded-lg text-lg transition-colors shadow-lg border border-[#2a4a70]"
              >
                <CalendarDays className="w-5 h-5" />
                <span>Gespräch vereinbaren</span>
              </button>
              <Link
                href="/kontakt#contact-form"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white/90 hover:bg-white text-[#0a1628] font-semibold rounded-lg text-lg transition-colors shadow-lg"
              >
                <Mail className="w-5 h-5" />
                <span>Anfrage per Email</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
