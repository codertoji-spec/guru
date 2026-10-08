"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isPointerDevice, setIsPointerDevice] = useState(true);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsPointerDevice(false);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check for custom cursor targets
      const target = (e.target as HTMLElement).closest("[data-cursor]");
      if (target) {
        const text = target.getAttribute("data-cursor") || "";
        setCursorText(text);
        setIsHovered(true);
      } else {
        const interactive = (e.target as HTMLElement).closest("a, button, [role='button'], input");
        if (interactive) {
          setCursorText("");
          setIsHovered(true);
        } else {
          setCursorText("");
          setIsHovered(false);
        }
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  if (!isPointerDevice) return null;

  return (
    <>
      {/* Precision Core Dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[999] h-2 w-2 rounded-full bg-[#F5F2EC] mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: isHovered && cursorText ? 0 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.1 }}
      />

      {/* Outer Follower / Contextual Capsule */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[998] flex items-center justify-center rounded-full border border-[#C5A880]/60 bg-[#080808]/70 backdrop-blur-xs font-mono text-[9px] tracking-[0.2em] uppercase text-[#F5F2EC]"
        animate={{
          x: mousePosition.x - (cursorText ? 42 : isHovered ? 20 : 12),
          y: mousePosition.y - (cursorText ? 42 : isHovered ? 20 : 12),
          width: cursorText ? 84 : isHovered ? 40 : 24,
          height: cursorText ? 84 : isHovered ? 40 : 24,
          scale: isHovered ? 1.05 : 1,
          borderColor: cursorText ? "rgba(197, 168, 128, 0.9)" : "rgba(245, 242, 236, 0.25)",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 220, mass: 0.2 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center font-medium text-[#C5A880]"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
