"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ARTIST_NAME } from "@/lib/constants";

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1600; // 1.6s duration

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const calculated = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(calculated);

      if (calculated >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsVisible(false);
          if (onComplete) onComplete();
        }, 400);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
            transition: { duration: 0.9, ease: [0.77, 0, 0.175, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-between bg-[#080808] px-8 py-12 text-[#F5F2EC] select-none"
        >
          {/* Top metadata */}
          <div className="w-full flex justify-between items-center text-[10px] tracking-[0.3em] text-[#8E8D8A] uppercase font-mono">
            <span>SOUND ARCHITECTURE</span>
            <span>MMXXVI</span>
          </div>

          {/* Center visual signature */}
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-light tracking-[0.4em] font-serif text-[#F5F2EC]">
                {ARTIST_NAME}
              </h1>
              <p className="mt-3 text-[11px] tracking-[0.35em] text-[#C5A880] uppercase">
                MIDNIGHT ECHOES — ERA IV
              </p>
            </motion.div>

            {/* Subtle audio frequency line */}
            <div className="flex items-center gap-1.5 h-6">
              {[40, 75, 30, 90, 60, 100, 45, 80, 25, 70, 95, 35].map((h, i) => (
                <motion.div
                  key={i}
                  animate={{
                    height: [h * 0.2, h * 0.8, h * 0.3],
                    opacity: [0.3, 0.9, 0.4],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.2,
                    delay: i * 0.08,
                    ease: "easeInOut",
                  }}
                  className="w-[1.5px] bg-[#C5A880]/60 rounded-full"
                  style={{ height: `${h * 0.3}px` }}
                />
              ))}
            </div>
          </div>

          {/* Bottom counter and progress line */}
          <div className="w-full max-w-sm flex flex-col items-center gap-3">
            <div className="w-full flex justify-between items-baseline text-xs font-mono text-[#8E8D8A]">
              <span className="text-[10px] tracking-[0.25em]">INITIALIZING FREQUENCIES</span>
              <span className="text-sm font-semibold text-[#F5F2EC] tracking-widest">
                {String(progress).padStart(3, "0")}%
              </span>
            </div>
            <div className="w-full h-[1.5px] bg-[#222222] overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-[#C5A880] to-[#F5F2EC]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
