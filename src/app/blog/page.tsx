"use client";

import { motion } from "framer-motion";
import { Clock, ArrowRight, Bot } from "lucide-react";
import Link from "next/link";

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
  }
];

export default function BlogPage() {
  return (
    <main className="pt-32 pb-24 bg-[#0a1628] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff6b35]/10 border border-[#ff6b35]/20 text-[#ff6b35] text-sm font-semibold mb-4">
            <Bot className="w-4 h-4" />
            <span>Wissensbasis</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Blog & Insights
          </h1>
          <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto leading-relaxed">
            Aktuelle Entwicklungen, Strategien und Praxisbeispiele rund um künstliche Intelligenz im Unternehmen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="h-full bg-white/[0.03] backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-[#ff6b35]/40 transition-all duration-500 flex flex-col shadow-2xl">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] to-transparent opacity-60" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-lg bg-[#ff6b35] text-white text-[10px] font-bold uppercase tracking-wider shadow-lg">
                      {post.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white/70 text-[10px] font-mono">
                    <Clock className="w-3 h-3 text-[#ff6b35]" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col relative">
                  <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#ff6b35]/0 group-hover:border-[#ff6b35]/20 transition-all duration-500 rounded-tr-3xl" />
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#ff6b35] transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-8 flex-1">
                    {post.excerpt}
                  </p>
                  
                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:text-[#ff6b35] transition-colors group/link"
                    >
                      <span>Beitrag lesen</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-br from-[#ff6b35]/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
