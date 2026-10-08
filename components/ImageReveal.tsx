"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ImageRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "clip";
}

export default function ImageReveal({
  children,
  className = "",
  delay = 0,
  direction = "clip",
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-12% 0px" });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={
          direction === "clip"
            ? { clipPath: "inset(100% 0% 0% 0%)", scale: 1.08 }
            : { y: "40px", opacity: 0 }
        }
        animate={
          isInView
            ? direction === "clip"
              ? { clipPath: "inset(0% 0% 0% 0%)", scale: 1 }
              : { y: "0px", opacity: 1 }
            : {}
        }
        transition={{
          duration: 1.25,
          ease: [0.25, 1, 0.5, 1], // expoOut style
          delay,
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
