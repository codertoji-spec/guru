"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  text: string;
  speed?: number; // seconds for full cycle
  direction?: "left" | "right";
  className?: string;
  separator?: string;
}

export default function Marquee({
  text,
  speed = 28,
  direction = "left",
  className = "",
  separator = "—",
}: MarqueeProps) {
  const content = `${text} ${separator} `.repeat(6);

  return (
    <div className={`overflow-hidden whitespace-nowrap select-none py-4 pointer-events-none ${className}`}>
      <motion.div
        className="inline-block flex"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        <span className="font-serif tracking-[0.25em] uppercase text-white/10 text-6xl md:text-8xl lg:text-9xl whitespace-nowrap">
          {content}
        </span>
        <span className="font-serif tracking-[0.25em] uppercase text-white/10 text-6xl md:text-8xl lg:text-9xl whitespace-nowrap">
          {content}
        </span>
      </motion.div>
    </div>
  );
}
