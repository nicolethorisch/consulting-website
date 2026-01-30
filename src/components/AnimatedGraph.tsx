"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Dot
} from "recharts";

const generateData = () => {
  return Array.from({ length: 12 }, (_, i) => ({
    name: `Punkt ${i + 1}`,
    value: Math.floor(Math.random() * 50) + 20,
    efficiency: Math.floor(Math.random() * 40) + 40,
  }));
};

export default function AnimatedGraph() {
  const [data, setData] = useState(generateData());

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) =>
        prevData.map((item) => ({
          ...item,
          value: Math.max(10, Math.min(100, item.value + (Math.random() * 10 - 5))),
          efficiency: Math.max(10, Math.min(100, item.efficiency + (Math.random() * 8 - 4))),
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[400px] bg-white/5 border border-white/10 rounded-2xl p-6 my-12 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-white font-bold text-lg">Live Prozess-Analyse</h3>
            <p className="text-white/40 text-xs uppercase tracking-wider">Echtzeit-Datenvisualisierung</p>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff6b35]" />
              <span className="text-xs text-white/60">Automatisierung</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-white/40" />
              <span className="text-xs text-white/60">Manuell</span>
            </div>
          </div>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis 
              dataKey="name" 
              hide 
            />
            <YAxis 
              stroke="rgba(255,255,255,0.3)" 
              fontSize={10}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "#0a1628", 
                border: "1px solid rgba(255,107,53,0.2)",
                borderRadius: "12px",
                color: "#fff"
              }}
              itemStyle={{ color: "#ff6b35" }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#ff6b35"
              strokeWidth={3}
              dot={{ r: 4, fill: "#ff6b35", strokeWidth: 2, stroke: "#0a1628" }}
              activeDot={{ r: 8, fill: "#ff6b35", stroke: "#fff", strokeWidth: 2 }}
              animationDuration={1500}
            />
            <Line
              type="monotone"
              dataKey="efficiency"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ r: 3, fill: "rgba(255,255,255,0.2)", strokeWidth: 1, stroke: "#0a1628" }}
              animationDuration={1500}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Floating particles effect to represent moving points */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#ff6b35]/30 rounded-full"
            animate={{
              x: ["0%", "100%"],
              y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </div>
  );
}
