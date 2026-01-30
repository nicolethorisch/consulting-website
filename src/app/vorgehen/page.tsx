"use client";

import { motion } from "framer-motion";
import { CalendarDays, Mail, Check, MessageSquare, Search, Lightbulb, Rocket, Settings, ArrowRight } from "lucide-react";

import Link from "next/link";
import { openExternalUrl, CALENDLY_LINK } from "@/lib/links";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Erstgespräch",
    subtitle: "30 Minuten, kostenlos",
    description:
      "In einem unverbindlichen Gespräch lernen wir uns kennen. Sie schildern Ihre Situation, Ziele und Herausforderungen. Ich gebe erste Einschätzungen und mögliche Ansätze.",
    outcomes: [
      "Verständnis Ihrer Ausgangslage",
      "Erste Einschätzung der Machbarkeit",
      "Klärung offener Fragen",
      "Empfehlung für nächste Schritte",
    ],
    duration: "30 Min",
  },
  {
    number: "02",
    icon: Search,
    title: "Discovery & Analyse",
    subtitle: "Tiefes Verständnis aufbauen",
    description:
      "Wir analysieren Ihre bestehenden Systeme, Daten und Prozesse. Sie erhalten ein klares Bild von Potenzialen, Risiken und einem realistischen Zeitplan.",
    outcomes: [
      "Daten- und System-Assessment",
      "Anwendungsfall-Priorisierung",
      "Risiko-Analyse",
      "Detaillierte Projektplanung",
    ],
    duration: "1-2 Wochen",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Konzeption & Design",
    subtitle: "Lösung maßschneidern",
    description:
      "Basierend auf der Analyse entwickeln wir eine passgenaue Lösung. Sie sehen genau, was gebaut wird, wie es funktioniert und welche Ergebnisse Sie erwarten können.",
    outcomes: [
      "Technisches Konzept",
      "Workflow-Spezifikation",
      "Validierungsplan",
      "Meilenstein-Definition",
    ],
    duration: "1-2 Wochen",
  },
  {
    number: "04",
    icon: Settings,
    title: "Implementierung",
    subtitle: "Strukturiert umsetzen",
    description:
      "Die Lösung wird in überschaubaren Sprints umgesetzt. Regelmäßige Updates und klare Meilensteine sorgen für volle Transparenz über den Fortschritt.",
    outcomes: [
      "Wöchentliche Status-Updates",
      "Iterative Entwicklung",
      "Qualitätssicherung",
      "Dokumentation",
    ],
    duration: "2-8 Wochen",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Rollout & Übergabe",
    subtitle: "In den Betrieb überführen",
    description:
      "Die fertige Lösung wird in Ihre Systeme integriert und an Ihr Team übergeben. Training und Dokumentation stellen sicher, dass Sie die Lösung erfolgreich nutzen können.",
    outcomes: [
      "Systemintegration",
      "Team-Training",
      "Übergabe-Dokumentation",
      "Support-Plan (optional)",
    ],
    duration: "1-2 Wochen",
  },
];

const principles = [
  {
    title: "Transparenz",
    description: "Sie wissen jederzeit, wo das Projekt steht. Keine Überraschungen, keine versteckten Kosten.",
  },
  {
    title: "Fixe Timelines",
    description: "Wir arbeiten mit klaren Meilensteinen und Deadlines. Open-End-Projekte gibt es bei uns nicht.",
  },
  {
    title: "Messbare Ergebnisse",
    description: "Jedes Projekt hat definierte Erfolgskriterien. Sie können den Mehrwert konkret beziffern.",
  },
  {
    title: "Ihr Eigentum",
    description: "Alle entwickelten Lösungen, Dokumentationen und Trainingsmaterialien gehören Ihnen.",
  },
];

export default function VorgehenPage() {
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
              <ArrowRight className="w-4 h-4" />
              Vorgehen
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a1628] leading-tight mb-8">
              Von der Idee zur{" "}
              <span className="text-gradient-orange">fertigen Lösung</span>
            </h1>
            <p className="text-xl lg:text-2xl text-[#5a6a7e] leading-relaxed">
              Ein strukturierter Prozess mit klaren Meilensteinen. Damit Sie jederzeit wissen, wo das Projekt steht.
            </p>
          </motion.div>
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
              Schritt für Schritt
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] mb-6">
              Der Weg zu Ihrer KI Lösung
            </h2>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#ff6b35] via-[#ff6b35]/50 to-transparent" />

            <div className="space-y-12 lg:space-y-0">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-16 ${
                    i !== steps.length - 1 ? "lg:pb-24" : ""
                  }`}
                >
                  <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff6b35] to-[#ff8c5a] flex items-center justify-center">
                            <step.icon className="w-8 h-8 text-white" />
                          </div>
                          <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#0a1628] text-white text-sm font-bold flex items-center justify-center">
                            {step.number}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-[#0a1628]">
                            {step.title}
                          </h3>
                          <p className="text-[#ff6b35] font-medium">{step.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-[#5a6a7e] leading-relaxed mb-6">
                        {step.description}
                      </p>

                      <div className="flex items-center gap-2 text-sm text-[#5a6a7e] mb-6">
                        <span className="px-3 py-1 rounded-full bg-[#f4f6f9] font-medium">
                          Dauer: {step.duration}
                        </span>
                      </div>

                      <div className="pt-6 border-t border-gray-100">
                        <h4 className="text-sm font-medium text-[#5a6a7e] uppercase tracking-wider mb-4">
                          Ergebnisse
                        </h4>
                        <ul className="grid grid-cols-2 gap-3">
                          {step.outcomes.map((outcome, j) => (
                            <li key={j} className="flex items-center gap-2 text-sm text-[#0a1628]">
                              <Check className="w-4 h-4 text-[#ff6b35] flex-shrink-0" />
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className={`hidden lg:flex items-center justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                      <motion.div 
                        className="relative w-64 h-64"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                      >
                        {/* Animated illustration for each step */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#ff6b35]/10 to-[#ff8c5a]/5 border border-[#ff6b35]/20" />
                        
                        {/* Step 1: Erstgespräch - Conversation between people */}
                        {i === 0 && (
                          <>
                            {/* Chat window */}
                            <div className="absolute inset-6 rounded-2xl bg-[#f8fafc] border border-gray-200 overflow-hidden shadow-inner">
                              <div className="p-3 space-y-3">
                                {/* Message from consultant */}
                                <motion.div
                                  className="flex items-end gap-2"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.2 }}
                                >
                                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#ff6b35] to-[#ff8c5a] flex items-center justify-center flex-shrink-0">
                                    <span className="text-white text-xs font-bold">N</span>
                                  </div>
                                  <motion.div 
                                    className="bg-white rounded-2xl rounded-bl-sm px-3 py-2 shadow-sm border border-gray-100 max-w-[140px]"
                                    animate={{ scale: [1, 1.02, 1] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                  >
                                    <p className="text-[8px] text-[#0a1628]">Wie kann ich Ihnen helfen?</p>
                                  </motion.div>
                                </motion.div>
                                
                                {/* Message from client */}
                                <motion.div
                                  className="flex items-end gap-2 justify-end"
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.8 }}
                                >
                                  <motion.div 
                                    className="bg-[#0a1628] rounded-2xl rounded-br-sm px-3 py-2 max-w-[140px]"
                                    animate={{ scale: [1, 1.02, 1] }}
                                    transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
                                  >
                                    <p className="text-[8px] text-white">Wir möchten KI einsetzen...</p>
                                  </motion.div>
                                  <div className="w-7 h-7 rounded-full bg-[#1a2b42] flex items-center justify-center flex-shrink-0">
                                    <span className="text-white text-xs font-bold">K</span>
                                  </div>
                                </motion.div>
                                
                                {/* Message from consultant */}
                                <motion.div
                                  className="flex items-end gap-2"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 1.4 }}
                                >
                                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#ff6b35] to-[#ff8c5a] flex items-center justify-center flex-shrink-0">
                                    <span className="text-white text-xs font-bold">N</span>
                                  </div>
                                  <motion.div 
                                    className="bg-white rounded-2xl rounded-bl-sm px-3 py-2 shadow-sm border border-gray-100 max-w-[140px]"
                                    animate={{ scale: [1, 1.02, 1] }}
                                    transition={{ duration: 3, delay: 1, repeat: Infinity }}
                                  >
                                    <p className="text-[8px] text-[#0a1628]">Da habe ich einige Ideen!</p>
                                  </motion.div>
                                </motion.div>
                                
                                {/* Typing indicator */}
                                <motion.div
                                  className="flex items-end gap-2 justify-end"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: [0, 1, 1, 0] }}
                                  transition={{ delay: 2, duration: 2, repeat: Infinity, repeatDelay: 1 }}
                                >
                                  <div className="bg-[#0a1628]/10 rounded-2xl rounded-br-sm px-3 py-2">
                                    <div className="flex gap-1">
                                      {[0, 1, 2].map((dot) => (
                                        <motion.div
                                          key={dot}
                                          className="w-1.5 h-1.5 rounded-full bg-[#5a6a7e]"
                                          animate={{ y: [-1, 1, -1] }}
                                          transition={{ duration: 0.6, delay: dot * 0.15, repeat: Infinity }}
                                        />
                                      ))}
                                    </div>
                                  </div>
                                  <div className="w-7 h-7 rounded-full bg-[#1a2b42] flex items-center justify-center flex-shrink-0">
                                    <span className="text-white text-xs font-bold">K</span>
                                  </div>
                                </motion.div>
                              </div>
                            </div>
                            
                            {/* Floating icon */}
                            <motion.div 
                              className="absolute -bottom-2 -right-2 w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff6b35] to-[#ff8c5a] flex items-center justify-center shadow-lg"
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <step.icon className="w-6 h-6 text-white" />
                            </motion.div>
                          </>
                        )}
                        
                        {/* Step 2: Concept - Blueprint layers */}
                        {i === 1 && (
                          <>
                            {[0, 1, 2].map((layer) => (
                              <motion.div
                                key={layer}
                                className="absolute rounded-xl border-2 border-[#ff6b35]/40 bg-white/50"
                                style={{
                                  top: 40 + layer * 20,
                                  left: 40 + layer * 20,
                                  right: 40 + (2 - layer) * 20,
                                  bottom: 40 + (2 - layer) * 20,
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: [0.4, 0.8, 0.4], y: 0 }}
                                transition={{ duration: 2, delay: layer * 0.3, repeat: Infinity }}
                              />
                            ))}
                            <motion.div 
                              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-xl bg-gradient-to-br from-[#ff6b35] to-[#ff8c5a] flex items-center justify-center"
                              animate={{ rotate: [0, 5, -5, 0] }}
                              transition={{ duration: 4, repeat: Infinity }}
                            >
                              <step.icon className="w-8 h-8 text-white" />
                            </motion.div>
                          </>
                        )}
                        
                        {/* Step 3: Implementation - Code blocks */}
                        {i === 2 && (
                          <>
                            <div className="absolute inset-8 rounded-xl bg-[#0a1628] overflow-hidden p-4">
                              {[0, 1, 2, 3, 4].map((line) => (
                                <motion.div
                                  key={line}
                                  className="flex items-center gap-2 mb-2"
                                  initial={{ x: -20, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: line * 0.2 }}
                                >
                                  <motion.div 
                                    className="h-2 rounded bg-[#ff6b35]"
                                    style={{ width: [40, 60, 30, 50, 45][line] }}
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 1.5, delay: line * 0.1, repeat: Infinity }}
                                  />
                                  <motion.div 
                                    className="h-2 rounded bg-[#3b82f6]/60"
                                    style={{ width: [30, 20, 40, 25, 35][line] }}
                                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                                    transition={{ duration: 1.5, delay: line * 0.15, repeat: Infinity }}
                                  />
                                </motion.div>
                              ))}
                              <motion.div 
                                className="absolute bottom-4 right-4 w-10 h-10 rounded-lg bg-gradient-to-br from-[#ff6b35] to-[#ff8c5a] flex items-center justify-center"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                <step.icon className="w-5 h-5 text-white" />
                              </motion.div>
                            </div>
                          </>
                        )}
                        
                        {/* Step 4: Implementierung - Code Editor mit Terminal */}
                        {i === 3 && (
                          <>
                            <div className="absolute inset-4 rounded-xl bg-[#1e1e2e] overflow-hidden shadow-2xl border border-[#313244]">
                              {/* Editor tabs */}
                              <div className="h-7 bg-[#181825] flex items-center px-2 gap-1 border-b border-[#313244]">
                                <div className="flex items-center gap-1.5 px-2 py-1 bg-[#1e1e2e] rounded-t text-[8px] text-[#cdd6f4]">
                                  <div className="w-2 h-2 rounded-sm bg-[#89b4fa]" />
                                  <span>main.py</span>
                                </div>
                                <div className="flex items-center gap-1.5 px-2 py-1 text-[8px] text-[#6c7086]">
                                  <div className="w-2 h-2 rounded-sm bg-[#f9e2af]" />
                                  <span>config.ts</span>
                                </div>
                              </div>
                              
                              {/* Code area */}
                              <div className="p-2 font-mono text-[7px] leading-relaxed h-28 overflow-hidden">
                                {[
                                  { num: '1', code: 'from', keyword: true, rest: ' ai_engine ', imp: 'import', cls: ' Pipeline' },
                                  { num: '2', code: '', keyword: false, rest: '' },
                                  { num: '3', code: 'class', keyword: true, rest: ' ', cls: 'AutomationFlow', end: ':' },
                                  { num: '4', code: '    def', keyword: true, rest: ' ', fn: 'process', args: '(self, data):' },
                                  { num: '5', code: '        result = self.', fn: 'transform', args: '(data)' },
                                  { num: '6', code: '        ', ret: 'return', rest: ' result' },
                                ].map((line, idx) => (
                                  <motion.div
                                    key={idx}
                                    className="flex"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.15 }}
                                  >
                                    <span className="w-4 text-[#6c7086] select-none">{line.num}</span>
                                    <span>
                                      {line.keyword && <span className="text-[#cba6f7]">{line.code}</span>}
                                      {line.imp && <span className="text-[#cba6f7]"> {line.imp}</span>}
                                      {line.rest && <span className="text-[#cdd6f4]">{line.rest}</span>}
                                      {line.cls && <span className="text-[#f9e2af]">{line.cls}</span>}
                                      {line.fn && <span className="text-[#89b4fa]">{line.fn}</span>}
                                      {line.args && <span className="text-[#a6adc8]">{line.args}</span>}
                                      {line.ret && <span className="text-[#cba6f7]">{line.ret}</span>}
                                      {line.end && <span className="text-[#cdd6f4]">{line.end}</span>}
                                    </span>
                                  </motion.div>
                                ))}
                                {/* Blinking cursor */}
                                <motion.span
                                  className="inline-block w-1 h-3 bg-[#f5e0dc] ml-12"
                                  animate={{ opacity: [1, 0, 1] }}
                                  transition={{ duration: 1, repeat: Infinity }}
                                />
                              </div>
                              
                              {/* Terminal */}
                              <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#11111b] border-t border-[#313244]">
                                <div className="flex items-center gap-1 px-2 py-1 text-[7px] text-[#6c7086] border-b border-[#313244]">
                                  <span>TERMINAL</span>
                                </div>
                                <div className="p-1.5 font-mono text-[7px]">
                                  <motion.div 
                                    className="text-[#a6e3a1]"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1 }}
                                  >
                                    $ python main.py
                                  </motion.div>
                                  <motion.div 
                                    className="text-[#cdd6f4]"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.5 }}
                                  >
                                    Processing pipeline...
                                  </motion.div>
                                  <motion.div 
                                    className="text-[#a6e3a1] flex items-center gap-1"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 1, 1] }}
                                    transition={{ delay: 2, duration: 0.5 }}
                                  >
                                    <span>✓</span> Build successful
                                  </motion.div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Floating gear icon */}
                            <motion.div 
                              className="absolute -bottom-2 -right-2 w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff6b35] to-[#ff8c5a] flex items-center justify-center shadow-lg"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            >
                              <step.icon className="w-6 h-6 text-white" />
                            </motion.div>
                          </>
                        )}
                        
                        {/* Step 5: Rollout - Employee onboarding to AI software */}
                        {i === 4 && (
                          <>
                            {/* Central screen/dashboard */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-20 rounded-lg bg-[#0a1628] border-2 border-[#ff6b35]/40 overflow-hidden">
                              <div className="h-3 bg-[#1a2b42] flex items-center px-1 gap-0.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b35]" />
                                <div className="w-1.5 h-1.5 rounded-full bg-[#ff8c5a]/50" />
                                <div className="w-1.5 h-1.5 rounded-full bg-[#ff8c5a]/30" />
                              </div>
                              <div className="p-1.5 space-y-1">
                                <motion.div 
                                  className="h-1.5 w-full rounded bg-[#ff6b35]/60"
                                  animate={{ opacity: [0.4, 1, 0.4] }}
                                  transition={{ duration: 1.5, repeat: Infinity }}
                                />
                                <motion.div 
                                  className="h-1.5 w-3/4 rounded bg-[#3b82f6]/40"
                                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                                  transition={{ duration: 1.5, delay: 0.2, repeat: Infinity }}
                                />
                                <motion.div 
                                  className="h-1.5 w-1/2 rounded bg-[#ff6b35]/40"
                                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                                  transition={{ duration: 1.5, delay: 0.4, repeat: Infinity }}
                                />
                              </div>
                            </div>
                            
                            {/* Team members around the screen */}
                            {[
                              { angle: -60, delay: 0 },
                              { angle: 0, delay: 0.3 },
                              { angle: 60, delay: 0.6 },
                            ].map((person, idx) => (
                              <motion.div
                                key={idx}
                                className="absolute"
                                style={{
                                  top: '25%',
                                  left: `${30 + idx * 20}%`,
                                }}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: person.delay }}
                              >
                                <motion.div
                                  animate={{ y: [-2, 2, -2] }}
                                  transition={{ duration: 2, delay: person.delay, repeat: Infinity }}
                                >
                                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1a2b42] to-[#0a1628] border-2 border-[#ff6b35]/30 flex items-center justify-center">
                                    <div className="w-3 h-3 rounded-full bg-[#ff6b35]/60" />
                                  </div>
                                  {/* Connection line to screen */}
                                  <motion.div 
                                    className="absolute top-8 left-1/2 w-px h-8 bg-gradient-to-b from-[#ff6b35]/40 to-transparent"
                                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                                    transition={{ duration: 1.5, delay: person.delay, repeat: Infinity }}
                                  />
                                </motion.div>
                              </motion.div>
                            ))}
                            
                            {/* Checkmarks appearing */}
                            {[0, 1, 2].map((check) => (
                              <motion.div
                                key={check}
                                className="absolute w-5 h-5 rounded-full bg-green-500/80 flex items-center justify-center"
                                style={{
                                  top: '20%',
                                  left: `${32 + check * 20}%`,
                                }}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }}
                                transition={{ duration: 0.5, delay: 1 + check * 0.5, repeat: Infinity, repeatDelay: 2 }}
                              >
                                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              </motion.div>
                            ))}
                            
                            {/* Rocket icon at center */}
                            <motion.div 
                              className="absolute bottom-6 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-[#ff6b35] to-[#ff8c5a] flex items-center justify-center"
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <step.icon className="w-5 h-5 text-white" />
                            </motion.div>
                          </>
                        )}
                      </motion.div>
                    </div>
                </motion.div>
              ))}
            </div>
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
              Prinzipien
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-6">
              Worauf Sie sich verlassen können
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#f8fafc] rounded-2xl p-8 text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-[#ff6b35]/10 flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-[#ff6b35]" />
                </div>
                <h3 className="font-bold text-[#0a1628] mb-3 text-lg">{principle.title}</h3>
                <p className="text-sm text-[#5a6a7e] leading-relaxed">
                  {principle.description}
                </p>
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
              Bereit für den ersten Schritt?
            </h2>
            <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto mb-10">
              Starten Sie mit einem kostenlosen 30-minütigen Gespräch. Unverbindlich, ohne Verpflichtungen.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openExternalUrl(CALENDLY_LINK)}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-[#1e3a5f] hover:bg-[#254670] text-white font-semibold rounded-lg text-lg transition-colors shadow-lg"
              >
                <CalendarDays className="w-5 h-5" />
                <span>Erstgespräch buchen</span>
              </button>
                <Link
                  href="/kontakt#contact-form"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-white/90 hover:bg-white text-[#0a1628] font-semibold rounded-lg text-lg transition-colors shadow-lg"
                >
                  <Mail className="w-5 h-5" />
                  <span>Per Email anfragen</span>
                </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
