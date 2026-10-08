"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    restDelta: 0.001,
  });

  const [percent, setPercent] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setPercent(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3 select-none pointer-events-none">
      <span className="font-mono text-[9px] tracking-widest text-[#8E8D8A]">
        {String(percent).padStart(2, "0")}%
      </span>

      {/* Progress track */}
      <div className="w-[1.5px] h-28 bg-white/10 relative overflow-hidden rounded-full">
        <motion.div
          className="absolute top-0 left-0 w-full bg-[#C5A880] origin-top rounded-full"
          style={{ height: "100%", scaleY }}
        />
      </div>

      <span className="font-mono text-[8px] tracking-[0.3em] text-[#8E8D8A] uppercase [writing-mode:vertical-lr]">
        ERA IV
      </span>
    </div>
  );
}
