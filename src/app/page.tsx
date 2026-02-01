"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Shield, Clock, Target, Users, ChartLine, Lightbulb, Building2, Linkedin, GraduationCap, Atom, Award, Mail, FileText, Bot, Search, Briefcase, Phone, Plus, Minus, Globe, RefreshCw } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { openExternalUrl, CALENDLY_LINK, PHONE_LINK, LINKEDIN_LINK } from "@/lib/links";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

function InteractiveChart() {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const [activePoint, setActivePoint] = useState<number | null>(null);

  const dataPoints = [
  { x: 0, y: 110, label: "Start", value: "10%" },
  { x: 100, y: 85, label: "Woche 1", value: "35%" },
  { x: 200, y: 70, label: "Woche 2", value: "55%" },
  { x: 300, y: 45, label: "Woche 3", value: "75%" },
  { x: 400, y: 25, label: "Woche 4", value: "90%" }];


  return (
    <div className="mt-6 pt-6 border-t border-white/10 relative h-48 overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-4 opacity-10 pointer-events-none">
        {[...Array(32)].map((_, i) =>
        <div key={i} className="border-[0.5px] border-white/20" />
        )}
      </div>

      <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-[9px] text-white/40 font-mono py-2">
        <span>100%</span>
        <span>75%</span>
        <span>50%</span>
        <span>25%</span>
        <span>0%</span>
      </div>

      <svg className="w-full h-full relative z-10 pl-8" viewBox="0 0 400 140" preserveAspectRatio="none">
        <defs>
          <linearGradient id="chart-grad-interactive" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ff6b35" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        <motion.path
          d="M 0 110 Q 50 115, 100 85 T 200 70 T 300 45 T 400 25"
          fill="none"
          stroke="#ff6b35"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }} />

        
        <motion.path
          d="M 0 110 Q 50 115, 100 85 T 200 70 T 300 45 T 400 25 V 140 H 0 Z"
          fill="url(#chart-grad-interactive)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }} />


        {dataPoints.map((point, i) =>
        <g key={i}>
            <motion.circle
            cx={point.x}
            cy={point.y}
            r={hoveredPoint === i || activePoint === i ? 8 : 5}
            fill={activePoint === i ? "#fff" : "#ff6b35"}
            stroke={activePoint === i ? "#ff6b35" : "transparent"}
            strokeWidth="2"
            className="cursor-pointer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.15, type: "spring" }}
            style={{ filter: hoveredPoint === i || activePoint === i ? "drop-shadow(0 0 8px #ff6b35)" : "drop-shadow(0 0 3px #ff6b35)" }}
            onMouseEnter={() => setHoveredPoint(i)}
            onMouseLeave={() => setHoveredPoint(null)}
            onClick={() => setActivePoint(activePoint === i ? null : i)} />

            {(hoveredPoint === i || activePoint === i) &&
          <motion.g
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}>

                <rect
              x={point.x - 30}
              y={point.y - 35}
              width="60"
              height="26"
              rx="4"
              fill="#0a1628"
              stroke="#ff6b35"
              strokeWidth="1" />

                <text
              x={point.x}
              y={point.y - 24}
              textAnchor="middle"
              fill="#ff6b35"
              fontSize="8"
              fontWeight="bold">

                  {point.label}
                </text>
                <text
              x={point.x}
              y={point.y - 14}
              textAnchor="middle"
              fill="#fff"
              fontSize="9"
              fontWeight="bold">

                  {point.value}
                </text>
              </motion.g>
          }
          </g>
        )}
      </svg>

      <motion.div
        className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#ff6b35] to-transparent z-20 pointer-events-none"
        animate={{ left: ["0%", "100%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }} />

      
      <div className="absolute bottom-1 left-8 right-0 flex justify-between text-[8px] text-white/30 font-mono px-2">
        {dataPoints.map((p, i) =>
        <span key={i} className={hoveredPoint === i || activePoint === i ? "text-[#ff6b35]" : ""}>{p.label}</span>
        )}
      </div>
    </div>);

}

function AgentWorkflowAnimation() {
  const centerX = 50;
  const centerY = 50;
  const nodeBoxW = 6;
  const nodeBoxH = 7;

  // All nodes at equal distance from center (~49.5) for equal line length
  const radius = 35 * Math.sqrt(2); // ~49.5, matches corner distance
  const nodes = [
  { icon: Mail, label: "Email", lineLabel: "Beantworten", x: 15, y: 15 },
  { icon: FileText, label: "Dokument", lineLabel: ["Verarbeiten &", "Erstellen"], x: 85, y: 15 },
  { icon: Globe, label: "Website", lineLabel: "Updaten", x: 50 - radius, y: 50 },
  { icon: Phone, label: "Anruf", lineLabel: ["Beantworten &", "Protokollieren"], x: 50 + radius, y: 50 },
  { icon: Search, label: "Analyse", lineLabel: "Auswerten", x: 15, y: 85 },
  { icon: Briefcase, label: "CRM", lineLabel: "Aktualisieren", x: 85, y: 85 }];

  // Shorten line minimally so lines extend close to nodes (longer lines for labels)
  const lineEnd = (nx: number, ny: number) => {
    const dx = nx - centerX;
    const dy = ny - centerY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const shorten = 0.5;
    if (dist <= shorten) return { x: nx, y: ny };
    const t = 1 - shorten / dist;
    return { x: centerX + dx * t, y: centerY + dy * t };
  };


  return (
    <div className="relative w-full aspect-square max-w-2xl mx-auto scale-100 origin-center">
      <div className="absolute inset-0 flex items-center justify-center !w-full !h-[583px]">
        <div className="absolute inset-0 opacity-20 !w-[680px] !h-[640px]" style={{ backgroundImage: 'radial-gradient(#ff6b35 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        
        {/* Central Agent */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0a1628] rounded-3xl border-2 border-[#ff6b35] flex items-center justify-center z-20 shadow-[0_0_60px_rgba(255,107,53,0.5)] w-28 h-28"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
          <Bot className="w-14 h-14 text-[#ff6b35]" />
        </motion.div>

        {/* Lines and Nodes - shared SVG coordinate system so icons align with line endpoints */}
        <svg className="absolute inset-0 w-full h-full z-10 overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Connecting lines */}
          <g className="pointer-events-none">
            {nodes.map((node, i) => {
              const end = lineEnd(node.x, node.y);
              return (
              <g key={`line-${i}`}>
                {/* Base line (subtle) */}
                <line
                  x1={centerX}
                  y1={centerY}
                  x2={end.x}
                  y2={end.y}
                  stroke="#ff6b35"
                  strokeWidth="0.5"
                  strokeOpacity="0.2"
                  fill="none"
                />
                {/* Draw-in animation on mount */}
                <motion.path
                  d={`M ${centerX} ${centerY} L ${end.x} ${end.y}`}
                  stroke="#ff6b35"
                  strokeWidth="0.5"
                  strokeOpacity="0.5"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: i * 0.12, ease: "easeOut" }}
                />
                {/* Flowing dashed animation - data moving along the line */}
                <motion.path
                  d={`M ${centerX} ${centerY} L ${end.x} ${end.y}`}
                  stroke="#ff6b35"
                  strokeWidth="0.5"
                  strokeOpacity="0.65"
                  fill="none"
                  strokeDasharray="1.5 4"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    strokeDashoffset: [0, -5.5],
                  }}
                  transition={{
                    opacity: { duration: 0.3, delay: 0.7 + i * 0.12 },
                    strokeDashoffset: {
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 1 + i * 0.15,
                    },
                  }}
                />
                {/* Line label - offset perpendicular to line to avoid overlap */}
                {(() => {
                  const midX = (centerX + end.x) / 2;
                  const midY = (centerY + end.y) / 2;
                  const dx = end.x - centerX;
                  const dy = end.y - centerY;
                  const dist = Math.sqrt(dx * dx + dy * dy) || 1;
                  const perpX = -dy / dist;
                  const perpY = dx / dist;
                  const offset = 3;
                  const labelX = midX + perpX * offset;
                  const labelY = midY + perpY * offset;
                  const angle = Math.atan2(dy, dx);
                  const deg = (angle * 180) / Math.PI;
                  const rotate = deg > 90 || deg < -90 ? deg + 180 : deg;
                  return (
                    <motion.text
                      x={labelX}
                      y={labelY}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="rgba(255,255,255,0.7)"
                      fontSize="2.5"
                      fontWeight="500"
                      style={{ fontFamily: "system-ui, sans-serif" }}
                      transform={`rotate(${rotate} ${labelX} ${labelY})`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    >
                      {Array.isArray(node.lineLabel)
                        ? node.lineLabel.map((line, j) => (
                            <tspan key={j} x={labelX} dy={j === 0 ? 0 : "1.2em"}>
                              {line}
                            </tspan>
                          ))
                        : node.lineLabel}
                    </motion.text>
                  );
                })()}
              </g>
            );
            })}
          </g>

          {/* Node icons at line endpoints - foreignObject for exact SVG coordinate alignment */}
          {nodes.map((node, i) => {
            const NodeIcon = node.icon;
            return (
              <foreignObject
                key={`node-${i}`}
                x={node.x - nodeBoxW / 2}
                y={node.y - nodeBoxH / 2}
                width={nodeBoxW}
                height={nodeBoxH}
                className="overflow-visible"
              >
                <motion.div
                  className="w-full h-full flex flex-col items-center justify-center gap-0.5 bg-transparent transition-all duration-300"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.15, type: "spring", stiffness: 200 }}
                >
                  <NodeIcon className="w-2 h-2 text-[#ff6b35] shrink-0" />
                  <span className="text-[2px] font-semibold text-white/95 uppercase tracking-wider leading-tight">{node.label}</span>
                </motion.div>
              </foreignObject>
            );
          })}
        </svg>

        {/* Subtle ambient particles */}
        {[...Array(4)].map((_, i) =>
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#ff6b35]/60 rounded-full"
          style={{ left: `${20 + i * 20}%`, top: `${30 + (i % 2) * 40}%` }}
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 2 + i * 0.5, repeat: Infinity, ease: "easeInOut" }} />
        )}
      </div>
    </div>);


}

function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const sunY = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const sunScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.3]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5], [0.7, 1]);
  const skyBrightness = useTransform(scrollYProgress, [0, 0.5], [0.05, 0.2]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center pt-12 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050a12 0%, #0a1628 30%, #0d1a2d 60%, #0a1628 100%)' }}>

        <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: skyBrightness,
          background: 'linear-gradient(180deg, transparent 0%, rgba(255, 140, 50, 0.08) 40%, rgba(255, 100, 30, 0.15) 70%, rgba(255, 80, 20, 0.25) 100%)'
        }} />

        <div className="absolute inset-x-0 bottom-0 h-[200px] pointer-events-none"
      style={{
        background: 'linear-gradient(180deg, transparent 0%, rgba(255, 120, 40, 0.15) 40%, rgba(255, 100, 30, 0.3) 100%)'
      }} />

        <div className="absolute bottom-0 left-0 right-0 h-[60%] pointer-events-none">
          <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-[800px] h-[800px]"
          style={{
            y: sunY,
            scale: sunScale,
            bottom: '-620px'
          }}>

          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              opacity: glowOpacity,
              background: 'radial-gradient(ellipse 120% 100% at 50% 100%, rgba(255, 200, 100, 0.9) 0%, rgba(255, 150, 50, 0.7) 15%, rgba(255, 100, 30, 0.5) 30%, rgba(255, 80, 20, 0.3) 50%, rgba(255, 60, 20, 0.15) 70%, transparent 100%)',
              filter: 'blur(60px)'
            }} />

          <motion.div
            className="absolute inset-[10%] rounded-full"
            style={{
              background: 'radial-gradient(ellipse 130% 100% at 50% 100%, rgba(255, 220, 150, 1) 0%, rgba(255, 180, 80, 0.9) 20%, rgba(255, 140, 50, 0.6) 45%, transparent 100%)',
              filter: 'blur(30px)'
            }} />

          <motion.div
            className="absolute inset-[25%] rounded-full"
            style={{
              background: 'radial-gradient(ellipse 110% 100% at 50% 100%, rgba(255, 250, 220, 1) 0%, rgba(255, 200, 100, 0.8) 40%, transparent 100%)',
              filter: 'blur(10px)'
            }} />

        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20 lg:pb-32 pt-0 lg:pt-0 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-left lg:-ml-24 lg:-mt-20">

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-white to-[#ff6b35] bg-clip-text text-transparent leading-[1.1] mb-4 !whitespace-pre-line">KI-Vorsprung für den Mittelstand
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-white/80 italic mb-6">
              Prozesse automatisieren, Mitarbeiter entlasten.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-base lg:text-lg text-white/60 leading-relaxed mb-8 max-w-xl">
              Automatisieren Sie Ihre Prozesse: Email-Assistenten, Angebotserstellung
              und KI-Telefonassistenten – maßgeschneiderte KI für Ihren Betrieb.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-4 mb-8">
              <button
                onClick={() => openExternalUrl(CALENDLY_LINK)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#ff6b35] hover:bg-[#ff8c5a] text-white font-semibold rounded-lg transition-all shadow-lg shadow-[#ff6b35]/20">
                Gespräch vereinbaren
              </button>
              <Link
                href="/leistungen"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-sm transition-all border border-white/10">
                Leistungen ansehen
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-4 text-white/60 hover:text-[#ff6b35] transition-colors">
              <Phone className="w-5 h-5" />
              <button onClick={() => openExternalUrl(PHONE_LINK)} className="text-lg font-medium hover:underline">+49 151 21343097</button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block lg:translate-x-12 lg:-mt-10">

            <AgentWorkflowAnimation />
          </motion.div>
        </div>
      </div>
    </section>);
}

function AboutSection() {
  const credentials = [
  {
    icon: Atom,
    title: "Max-Planck-Institut für Quantenoptik",
    description: "Forschung in der Nobelpreis-gekrönten Gruppe von Prof. Ferenc Krausz"
  },
  {
    icon: Award,
    title: "Harvard Medical School & TUM.ai",
    description: "Surgical Planning Lab — 3D Computer Vision & KI-gestützte medizinische Bildanalyse"
  },
  {
    icon: GraduationCap,
    title: "Elite-Master Theoretical & Mathematical Physics",
    description: "TUM & LMU München"
  }];


  const affiliationLogos = [
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ebddd4d1-529f-4f5c-8cf9-5c0783c3927a/max_planck-1769294573803.png", alt: "Max-Planck-Gesellschaft" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ebddd4d1-529f-4f5c-8cf9-5c0783c3927a/Logo_of_the_Technical_University_of_Munich.svg-resized-1769355971751.webp", alt: "TUM" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ebddd4d1-529f-4f5c-8cf9-5c0783c3927a/LMU_Muenchen_Logo.svg-resized-1769355971748.webp", alt: "LMU München" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ebddd4d1-529f-4f5c-8cf9-5c0783c3927a/lmu_klinikum_logo-1769294557924.png", alt: "LMU Klinikum" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ebddd4d1-529f-4f5c-8cf9-5c0783c3927a/tum-ai-logo-removebg-preview-1769355971743.png", alt: "TUM.ai" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/ebddd4d1-529f-4f5c-8cf9-5c0783c3927a/image-Photoroom-34-1769363532187.png?width=8000&height=8000&resize=contain", alt: "Harvard Medical School" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ebddd4d1-529f-4f5c-8cf9-5c0783c3927a/elite-network-bavaria-1769294707889.png", alt: "Elite Network of Bavaria" }];


  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-[#0a1628] to-[#0d1a2d] relative overflow-hidden">
      <div className="absolute top-0 bottom-0 left-0 w-64 bg-gradient-to-r from-[#ff6b35]/20 via-[#ff8c5a]/10 to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-64 bg-gradient-to-l from-[#ff6b35]/20 via-[#ff8c5a]/10 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-[#ff6b35]/20 text-[#ff6b35] text-sm font-medium mb-4">
            Über mich
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Nicole Thorisch
          </h2>
            <p className="text-xl text-[#94a3b8]">
              Physikerin & KI/ML Engineer | Expertin für Deep Learning & Software Entwicklung
            </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 !w-[559px] !h-full">
            <p className="text-lg text-white/80 leading-relaxed">
              Als <span className="text-white font-medium">KI Ingenieurin</span> am <span className="text-white font-medium">Max-Planck-Institut für Quantenoptik</span> entwickle ich hochpräzise Machine Learning Architekturen in der Gruppe von <span className="text-[#ff6b35]">Nobelpreisträger Prof. Ferenc Krausz</span>. Mein Fokus liegt auf der Skalierung komplexer Modelle für die Früherkennung kritischer Krankheiten mittels <span className="text-white font-medium">Deep Learning</span> und <span className="text-white font-medium">Reinforcement Learning</span>.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              Nach meiner Forschung an der <span className="text-white font-medium">Harvard Medical School</span> und bei <span className="text-white font-medium">TUM.ai</span> im Bereich 3D Computer Vision, verbinde ich heute wissenschaftliche Exzellenz mit professioneller <span className="text-white font-medium">Software Entwicklung</span>: Von der Daten-Pipeline bis zum fertigen LLM-System.
            </p>

            <div className="space-y-4 pt-4">
              {credentials.map((cred, i) =>
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff6b35] to-[#ff8c5a] flex items-center justify-center flex-shrink-0">
                    <cred.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{cred.title}</h4>
                    <p className="text-white/60 text-sm">{cred.description}</p>
                  </div>
                </motion.div>
              )}
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                onClick={() => openExternalUrl(LINKEDIN_LINK)}
                className="flex items-center gap-2 px-6 py-3 bg-[#0077b5] hover:bg-[#006399] text-white font-medium rounded-lg transition-colors">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                onClick={() => openExternalUrl("https://open.spotify.com/episode/3pOs4ZTYbHROqooejkdLBy")}
                className="flex items-center gap-2 px-6 py-3 bg-[#1DB954] hover:bg-[#1aa34a] text-white font-medium rounded-lg transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
                <span>ITCS Podcast</span>
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative hidden lg:block">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#ff6b35]/20 to-[#ff8c5a]/10 blur-2xl" />
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/ebddd4d1-529f-4f5c-8cf9-5c0783c3927a/image-1769616082980.png?width=8000&height=8000&resize=contain"
                alt="Nicole Thorisch"
                className="relative w-full h-full object-cover rounded-3xl border-2 border-white/10 shadow-2xl" />

            </div>
          </motion.div>
        </div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 pt-8">
        <p className="text-center text-white/40 text-sm mb-4">Affiliiert mit</p>
        
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md py-6 px-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a1628] via-[#0a1628]/80 to-transparent z-10 pointer-events-none" />
          
          <div className="flex animate-marquee">
            {[...affiliationLogos, ...affiliationLogos].map((logo, i) =>
            <div key={i} className="flex-shrink-0 mx-8 lg:mx-14 h-12 lg:h-16 flex items-center">
                <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full w-auto object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300" />

              </div>
            )}
          </div>
        </div>
      </motion.div>
    
    <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>);

}

function PotentialSection() {
  const painPoints = [
  "Ihre Mitarbeiter verbringen Stunden mit Emails, die eine KI in Sekunden beantworten könnte?",
  "Angebote werden noch manuell aus Excel-Tabellen zusammenkopiert?",
  "Kundenanfragen bleiben liegen, weil niemand Zeit hat?",
  "Rechnungen stapeln sich, weil die Prüfung ewig dauert?"];


  return (
    <section className="py-16 lg:py-20 bg-[#0d1a2d] relative overflow-hidden">
      {/* Side Gradients */}
      <div className="absolute top-0 bottom-0 left-0 w-64 bg-gradient-to-r from-[#ff6b35]/20 via-[#ff8c5a]/10 to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-64 bg-gradient-to-l from-[#ff6b35]/20 via-[#ff8c5a]/10 to-transparent pointer-events-none" />
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ff6b35]/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center">

          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Erkennen Sie sich wieder?
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-xl lg:text-2xl text-[#ff6b35] font-semibold mb-12">
            Welche Prozesse bremsen Sie aus?
          </motion.p>

          <div className="grid gap-4 max-w-3xl mx-auto">
            {painPoints.map((point, i) =>
            <motion.div
              key={i}
              variants={fadeInUp}
              className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#ff6b35]/30 hover:bg-white/10 transition-all duration-300 text-left">

                <div className="w-10 h-10 rounded-full bg-[#ff6b35]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-[#ff6b35] font-bold">?</span>
                </div>
                <p className="text-lg text-white/80 group-hover:text-white transition-colors">
                  {point}
                </p>
              </motion.div>
            )}
          </div>
          
          <motion.p
            variants={fadeInUp}
            className="text-white/50 mt-12 text-lg">
            Lassen Sie uns gemeinsam schauen, welche Aufgaben Sie automatisieren können. Unverbindlich.
          </motion.p>
          
          <motion.div
            variants={fadeInUp}
            className="mt-10">
            <button
              onClick={() => openExternalUrl(CALENDLY_LINK)}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-[#1e3a5f] hover:bg-[#254a75] text-white font-semibold rounded-lg text-lg transition-colors border border-[#2a4a70] mx-auto shadow-xl hover:shadow-[#1e3a5f]/20">
              Gratis Potential-Check vereinbaren
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>);

}

function TrustSection() {
  const logos = [
  "Enterprise Corp",
  "Global Tech",
  "MedTech AG",
  "Finance Pro",
  "Industrial Solutions"];


  return (
    <section className="py-20 lg:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12">
          <p className="text-[#5a6a7e] text-sm font-medium uppercase tracking-wider mb-2">
            Vertrauen von
          </p>
          <p className="text-[#0a1628] text-lg">
            Führende Organisationen setzen auf präzise KI-Workflows
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {logos.map((logo, i) =>
          <div
            key={i}
            className="flex items-center justify-center h-12 px-6 text-[#94a3b8] font-semibold text-lg opacity-60 hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-2">
                <Building2 className="w-6 h-6" />
                <span>{logo}</span>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>);

}

function ServicesSection() {
  const services = [
  {
    icon: Lightbulb,
    title: "Prozess-Analyse",
    description: "Ich schaue mir Ihre Arbeitsabläufe an und zeige, wo Zeit und Geld verloren geht. Sie erhalten konkrete Vorschläge, welche Aufgaben sich automatisieren lassen.",
    features: ["Arbeitsabläufe dokumentieren", "Zeitfresser identifizieren", "Automatisierungspotenzial aufzeigen", "Kosten Nutzen Rechnung"]
  },
  {
    icon: Target,
    title: "KI Automatisierung",
    description: "Wiederkehrende Aufgaben automatisieren oder Ihre Mitarbeiter schulen: Emails beantworten, Dokumente erstellen, Termine koordinieren. Virtuelle Mitarbeiter für Ihr Team.",
    features: ["Email Assistenten", "Dokumentenerstellung", "Termin Automatisierung", "Mitarbeiter Schulung"]
  },
  {
    icon: Building2,
    title: "Maßgeschneiderte Software",
    description: "Enterprise Tools zum Mittelstands Preis: CRM-Assistenten, Angebots-Generatoren, Dokumentations KI. Individuell für Sie entwickelt, nicht von der Stange.",
    features: ["CRM Assistenten", "Angebots Generator", "Kundenservice Bot", "Rechnungsprüfung"]
  }];


  return (
    <section id="leistungen" className="py-24 lg:py-32 section-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#ff6b35]/10 text-[#ff6b35] text-sm font-medium mb-4">
            Leistungen
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] mb-6">
            So kann ich Ihnen helfen
          </h2>
          <p className="text-xl text-[#5a6a7e] max-w-2xl mx-auto">
            Von der Analyse bis zur fertigen Lösung — pragmatisch, bezahlbar und auf Ihren Betrieb zugeschnitten.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) =>
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#ff6b35]/20 transition-all duration-300">
                <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff6b35] to-[#ff8c5a] flex items-center justify-center mb-6 shadow-lg shadow-[#ff6b35]/20">

                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>
              <h3 className="text-xl font-bold text-[#0a1628] mb-4">
                {service.title}
              </h3>
              <p className="text-[#5a6a7e] mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, j) =>
              <li key={j} className="flex items-center gap-2 text-sm text-[#5a6a7e]">
                    <Check className="w-4 h-4 text-[#ff6b35]" />
                    <span>{feature}</span>
                  </li>
              )}
                </ul>
              </motion.div>
          )}
          </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center">
          <Link
            href="/kontakt#contact-form"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#ff6b35] hover:bg-[#ff8c5a] text-white font-semibold rounded-lg text-lg transition-all shadow-lg hover:shadow-[#ff6b35]/20"
          >
            <span>Personalisierte Lösung anfragen</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>);

}

function ImpactSection() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
  "Email-Automatisierung",
  "Angebotserstellung",
  "KI-Telefonassistenten",
  "Rechnungsprüfung",
  "Vertragsverwaltung"];


  const caseStudies = [
  {
    title: "Email-Assistent für den Vertrieb",
    metric: "70%",
    metricLabel: "weniger Email-Aufwand",
    bullets: [
    "Standardanfragen automatisch beantwortet",
    "Terminvorschläge werden automatisch erstellt",
    "Wichtige Emails priorisiert und weitergeleitet"]

  },
  {
    title: "Automatische Angebotserstellung",
    metric: "5 Min",
    metricLabel: "statt 2 Stunden pro Angebot",
    bullets: [
    "Kundenanfrage wird automatisch analysiert",
    "Passendes Angebot aus Vorlagen generiert",
    "Preise und Konditionen automatisch berechnet"]

  },
  {
    title: "KI-Telefonassistenten für Ihre Anrufe",
    metric: "24/7",
    metricLabel: "Erreichbarkeit am Telefon",
    bullets: [
    "Anrufe automatisch entgegennehmen und qualifizieren",
    "Termine direkt im Telefonat vereinbaren",
    "Häufige Fragen sprachbasiert beantworten"]

  },
  {
    title: "Automatische Rechnungsprüfung",
    metric: "90%",
    metricLabel: "weniger manuelle Prüfung",
    bullets: [
    "Eingangsrechnungen automatisch erfasst",
    "Abgleich mit Bestellungen und Lieferscheinen",
    "Freigabe-Workflows automatisiert"]

  },
  {
    title: "Intelligente Vertragsverwaltung",
    metric: "0",
    metricLabel: "verpasste Fristen",
    bullets: [
    "Kündigungsfristen automatisch überwacht",
    "Verlängerungen rechtzeitig gemeldet",
    "Vertragskonditionen automatisch verglichen"]

  }];


  const visualizationData = [
  {
    icon: Mail,
    items: ["Anfrage analysieren...", "Antwort generieren...", "Termin bestätigt!"],
    color: "text-blue-400"
  },
  {
    icon: FileText,
    items: ["Daten extrahieren...", "Kalkulation läuft...", "PDF erstellt"],
    color: "text-orange-400"
  },
  {
    icon: Phone,
    items: ["Anruf geht ein...", "Anliegen wird verstanden...", "Termin wird gebucht"],
    color: "text-green-400"
  },
  {
    icon: Search,
    items: ["Beleg scannen...", "MwSt. abgleichen...", "Freigabe erteilt"],
    color: "text-purple-400"
  },
  {
    icon: Briefcase,
    items: ["Fristen prüfen...", "Verlängerung anstehend...", "Erinnerung versendet"],
    color: "text-red-400"
  }];


  return (
    <section className="py-24 lg:py-32 bg-[#0a1628] relative overflow-hidden">
      <div className="absolute top-0 bottom-0 left-0 w-64 bg-gradient-to-r from-[#ff6b35]/20 via-[#ff8c5a]/10 to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-64 bg-gradient-to-l from-[#ff6b35]/20 via-[#ff8c5a]/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#ff6b35]/20 text-[#ff6b35] text-sm font-medium mb-4">
            Beispiele
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Konkrete Automatisierungen
          </h2>
          <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto">
            Was virtuelle Mitarbeiter in Ihrem Unternehmen leisten können
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8 lg:p-12">
          <div className="flex flex-wrap gap-3 mb-10">
            {tabs.map((tab, i) =>
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
              activeTab === i ?
              "bg-[#ff6b35] text-white" :
              "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"}`
              }>
                {tab}
              </button>
            )}
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                {caseStudies[activeTab].title}
              </h3>
              <div className="bg-gradient-to-br from-[#ff6b35] to-[#ff8c5a] rounded-2xl p-6 mb-8">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {caseStudies[activeTab].metric}
                </div>
                <div className="text-white/80 font-medium">
                  {caseStudies[activeTab].metricLabel}
                </div>
              </div>
              <ul className="space-y-4">
                {caseStudies[activeTab].bullets.map((bullet, i) =>
                <li key={i} className="flex items-start gap-3 text-[#94a3b8]">
                    <Check className="w-5 h-5 text-[#ff6b35] mt-0.5 flex-shrink-0" />
                    <span className="text-lg">{bullet}</span>
                  </li>
                )}
              </ul>
            </div>

            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 lg:p-8 min-h-[300px] flex flex-col justify-between overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 1.2 }}
                    className="space-y-6">
                    {visualizationData[activeTab].items.map((item, i) => {
                      const Icon = visualizationData[activeTab].icon;
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 1.5, duration: 0.8 }}
                          className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center ${visualizationData[activeTab].color}`}>
                            {i === 0 ?
                            <Icon className="w-6 h-6" /> :
                            i === 1 ?
                            <Bot className="w-6 h-6 animate-bounce" /> :

                            <Check className="w-6 h-6" />
                            }
                          </div>
                          <div className="flex-1">
                            <div className="h-4 bg-white/10 rounded w-full overflow-hidden relative">
                              <motion.div
                                className={`absolute inset-0 bg-white/20`}
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{
                                  repeat: Infinity,
                                  duration: 5,
                                  delay: i * 1.5,
                                  ease: "linear"
                                }} />

                              <div className="absolute inset-0 flex items-center px-3">
                                <span className="text-[10px] text-white/50 font-mono uppercase tracking-wider">
                                  {item}
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>);

                    })}
                  </motion.div>
                </AnimatePresence>
                <InteractiveChart />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#ff6b35]/20 rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>);


}

function WhySection() {
  const reasons = [
  {
    icon: Users,
    title: "Persönliche Betreuung statt Agentur Overhead",
    description: "Sie arbeiten direkt mit mir. Keine Projektmanager, keine Kommunikationsketten, keine versteckten Kosten."
  },
  {
    icon: GraduationCap,
    title: "Schulung Ihrer Mitarbeiter inklusive",
    description: "Ich zeige Ihrem Team, wie die neuen Tools funktionieren. Sie sind nicht von mir abhängig."
  },
  {
    icon: Clock,
    title: "Schnelle Umsetzung, faire Preise",
    description: "Erste Ergebnisse in Tagen, nicht Monaten. Transparente Kosten ohne Enterprise-Aufschläge."
  },
  {
    icon: Shield,
    title: "Wissenschaftliche Präzision",
    description: "Als Forscherin am Max-Planck-Institut arbeite ich methodisch und zuverlässig. Das bringe ich auch in Ihre Projekte mit."
  }];


  return (
    <section className="py-24 lg:py-32 section-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#ff6b35]/10 text-[#ff6b35] text-sm font-medium mb-4">
            Warum ich
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] mb-6">
            Warum Mittelständler mit mir arbeiten
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, i) =>
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-6 p-6 lg:p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
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
          )}
        </div>

        {/* Highlight Section: Onboarding Assistant */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0a1628] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-[#ff6b35] font-semibold mb-4">
                <Bot className="w-5 h-5" />
                <span>Praxis-Beispiel</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                Automatisches Mitarbeiter-Onboarding
              </h2>
              <p className="text-[#94a3b8] text-lg leading-relaxed mb-8">
                Stellen Sie sich vor, neue Mitarbeiter werden durch eine intelligente KI in Ihre internen Prozesse eingeführt. 
                Die KI vermittelt Wissen, beantwortet Fragen zu Abläufen und begleitet die Einarbeitung – konsistent, geduldig und 24/7 verfügbar. So entlasten Sie Ihr Team ab dem ersten Tag.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-[#ff6b35] font-bold text-2xl mb-1">90%</div>
                  <div className="text-white/60 text-xs uppercase tracking-wider">Schnellere Einarbeitung</div>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-[#ff6b35] font-bold text-2xl mb-1">0h</div>
                  <div className="text-white/60 text-xs uppercase tracking-wider">Manueller Aufwand</div>
                </div>
              </div>
            </div>
            <div className="relative min-h-[400px] lg:min-h-full overflow-hidden bg-[#050a12] flex items-center justify-center p-6">
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#ff6b35 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
              </div>
              
              <div className="relative z-10 w-full max-w-sm space-y-4">
                {[
                { icon: Users, text: "Neuer Mitarbeiter registriert", color: "blue" },
                { icon: Bot, text: "KI erstellt Einarbeitungsplan", color: "orange" },
                { icon: FileText, text: "Zugriff auf Wissensdatenbank", color: "green" },
                { icon: Check, text: "Onboarding abgeschlossen", color: "emerald" }].
                map((step, idx) =>
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-4">

                    <div className={`w-10 h-10 rounded-xl bg-${step.color === 'orange' ? '[#ff6b35]' : step.color + '-500'}/20 flex items-center justify-center flex-shrink-0`}>
                      <step.icon className={`w-5 h-5 text-${step.color === 'orange' ? '[#ff6b35]' : step.color + '-400'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-white/90 font-medium">{step.text}</div>
                    </div>
                  </div>
                )}
              </div>

              <div className="absolute top-1/4 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-[80px]" />
              <div className="absolute bottom-1/4 -right-10 w-40 h-40 bg-[#ff6b35]/10 rounded-full blur-[80px]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}

function BlogSection() {
  const posts = [
  {
    slug: "ki-im-mittelstand-einstieg",
    title: "KI im Mittelstand: Wo fängt man sinnvoll an?",
    excerpt: "Viele Unternehmen stehen vor der Frage: Welche Prozesse eignen sich zuerst für KI? Ein Leitfaden für den pragmatischen Einstieg.",
    date: "24. Jan 2026",
    category: "Strategie",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "datenschutz-ki-dsgvo",
    title: "Datenschutz & KI: DSGVO-konforme Lösungen",
    excerpt: "Wie Sie LLMs und Automatisierungen nutzen können, ohne die Sicherheit Ihrer Unternehmensdaten zu gefährden.",
    date: "15. Jan 2026",
    category: "Sicherheit",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "zukunft-email-automatisierung",
    title: "Die Zukunft der Email-Bearbeitung",
    excerpt: "Wie KI-Assistenten die tägliche Flut an Kundenanfragen bändigen und was das für die Effizienz in Ihrem Team bedeutet.",
    date: "08. Jan 2026",
    category: "Automatisierung",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=800"
  }];


  return (
    <section className="py-24 lg:py-32 bg-[#0a1628] relative overflow-hidden">
      {/* Side Gradients */}
      <div className="absolute top-0 bottom-0 left-0 w-64 bg-gradient-to-r from-[#ff6b35]/20 via-[#ff8c5a]/10 to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-64 bg-gradient-to-l from-[#ff6b35]/20 via-[#ff8c5a]/10 to-transparent pointer-events-none" />
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6b35]/5 rounded-full blur-[120px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff6b35]/10 border border-[#ff6b35]/20 text-[#ff6b35] text-sm font-semibold mb-4">
            <Bot className="w-4 h-4" />
            <span>Wissensbasis</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Einblicke & Expertenwissen
          </h2>
          <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto leading-relaxed">
            Aktuelle Entwicklungen und praxisnahe Tipps rund um KI im Unternehmen
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) =>
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative">

              {/* Card Container */}
              <div className="h-full bg-white/[0.03] backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-[#ff6b35]/40 transition-all duration-500 flex flex-col shadow-2xl">
                {/* Image Section */}
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90" />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] to-transparent opacity-60" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-lg bg-[#ff6b35] text-white text-[10px] font-bold uppercase tracking-wider shadow-lg">
                      {post.category}
                    </span>
                  </div>

                  {/* Date Badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white/70 text-[10px] font-mono">
                    <Clock className="w-3 h-3 text-[#ff6b35]" />
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex-1 flex flex-col relative">
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#ff6b35]/0 group-hover:border-[#ff6b35]/20 transition-all duration-500 rounded-tr-3xl" />
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#ff6b35] transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-8 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:text-[#ff6b35] transition-colors group/link">

                      <span>Beitrag lesen</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                    
                    {/* Animated Decorative Dots */}
                    <div className="flex gap-1">
                      {[0, 1, 2].map((dot) =>
                    <div
                      key={dot}
                      className={`w-1 h-1 rounded-full bg-[#ff6b35]/20 group-hover:bg-[#ff6b35] transition-all duration-500`}
                      style={{ transitionDelay: `${dot * 100}ms` }} />

                    )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-br from-[#ff6b35]/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 -z-10" />
            </motion.div>
          )}
        </div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center">

          <Link
            href="/blog"
            className="inline-flex px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-2xl border border-white/10 transition-all"
          >
            Alle Beiträge entdecken
          </Link>
        </motion.div>
      </div>
    </section>);

}

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
  {
    question: "Was kostet eine KI-Lösung?",
    answer: "Jedes Projekt ist individuell. In einem ersten Gespräch klären wir den Umfang und Sie erhalten ein transparentes Festpreis-Angebot, das auf Ihren spezifischen Bedarf zugeschnitten ist."
  },
  {
    question: "Wie sicher sind meine Daten?",
    answer: "Datenschutz steht an erster Stelle. Wir nutzen bevorzugt europäische Server oder lokale Lösungen, die vollständig DSGVO-konform sind. Ihre Daten verlassen den geschützten Raum nur, wenn Sie es explizit wünschen."
  },
  {
    question: "Wie lange dauert es, bis erste Ergebnisse sichtbar sind?",
    answer: "Oft können wir bereits nach wenigen Tagen erste funktionierende Prototypen zeigen. Die vollständige Implementierung und Automatisierung Ihrer Prozesse dauert in der Regel zwischen 2 und 4 Wochen."
  },
  {
    question: "Brauchen wir spezielles IT-Know-how im Team?",
    answer: "Nein. Ich entwickle Lösungen, die so intuitiv sind, dass jeder sie ohne technisches Vorwissen bedienen kann. Zudem schule ich Ihr Team intensiv in der Handhabung der neuen Tools."
  },
  {
    question: "Können bestehende Systeme (CRM, ERP) angebunden werden?",
    answer: "Ja, fast alle modernen Systeme bieten Schnittstellen (APIs), über die wir KI-Workflows nahtlos integrieren können. So fließen die Daten direkt dorthin, wo sie gebraucht werden."
  }];


  return (
    <section className="py-24 lg:py-32 section-light">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#ff6b35]/10 text-[#ff6b35] text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] mb-6">
            Häufig gestellte Fragen
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) =>
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">

              <button
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-6 text-left">

                <span className="text-lg font-bold text-[#0a1628]">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${activeIndex === i ? 'bg-[#ff6b35] text-white' : 'bg-gray-100 text-[#0a1628]'}`}>
                  {activeIndex === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              <AnimatePresence>
                {activeIndex === i &&
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}>

                    <div className="px-6 pb-6 text-[#5a6a7e] leading-relaxed border-t border-gray-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
              }
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}

function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-[#0a1628] relative overflow-hidden">
      <div className="absolute top-0 bottom-0 left-0 w-64 bg-gradient-to-r from-[#ff6b35]/20 via-[#ff8c5a]/10 to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-64 bg-gradient-to-l from-[#ff6b35]/20 via-[#ff8c5a]/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto mb-10">
            Lassen Sie uns in einem 30-minütigen Gespräch herausfinden, wie KI Automatisierungen Ihr Unternehmen voranbringen können.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openExternalUrl(CALENDLY_LINK)}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-[#1e3a5f] hover:bg-[#254a75] text-white font-semibold rounded-lg text-lg transition-colors border border-[#2a4a70]">
              Gespräch vereinbaren
            </button>
            <Link
              href="/kontakt#contact-form"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-[#0a1628] font-semibold rounded-lg text-lg transition-colors"
            >
              Anfrage per Email
            </Link>
          </div>
        </motion.div>
      </div>
    </section>);

}

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ImpactSection />
      <WhySection />
      <AboutSection />
      <PotentialSection />
      <BlogSection />
      <FAQSection />
      <CTASection />
    </>);
}