"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TextReveal from "@/components/TextReveal";

export default function ArtistStatement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.4, 0.7, 0.95], [0.3, 1, 1, 0.3]);
  const y = useTransform(scrollYProgress, [0.1, 0.9], [40, -40]);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-36 md:py-52 px-6 md:px-12 bg-[#080808] border-b border-white/[0.06] flex items-center justify-center overflow-hidden"
    >
      {/* Subtle background radial glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[800px] h-[400px] bg-[#C5A880]/[0.025] blur-[160px] rounded-full" />
      </div>

      <motion.div
        style={{ opacity, y }}
        className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8 relative z-10"
      >
        <span className="font-mono text-[10px] md:text-xs tracking-[0.35em] text-[#C5A880] uppercase">
          06 / ARTISTIC MANIFESTO
        </span>

        <TextReveal
          as="h2"
          text="I make music for the subterranean moments you cannot explain to daylight."
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-tight text-[#F5F2EC] leading-[1.18]"
        />

        <p className="max-w-xl text-xs md:text-sm font-light text-[#8E8D8A] leading-relaxed tracking-wide">
          Between silence and thunder lies an architecture of lost frequencies. Midnight Echoes was crafted in isolation—not as entertainment, but as an acoustic sanctuary for restless spirits.
        </p>

        <div className="flex items-center gap-3 mt-4 text-[10px] font-mono tracking-widest text-[#8E8D8A] uppercase">
          <span>NOVA</span>
          <span>—</span>
          <span>AUTUMN 2026</span>
        </div>
      </motion.div>
    </section>
  );
}
