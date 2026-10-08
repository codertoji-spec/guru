"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
  };

  return (
    <section className="relative w-full py-28 md:py-36 px-6 md:px-12 bg-[#080808] border-b border-white/[0.06] flex items-center justify-center">
      <div className="max-w-3xl mx-auto w-full text-center flex flex-col items-center">
        <span className="font-mono text-[10px] md:text-xs tracking-[0.35em] text-[#C5A880] uppercase mb-3">
          09 / PRIVATE DISPATCHES
        </span>

        <h2 className="text-3xl sm:text-5xl font-serif font-light tracking-tight text-[#F5F2EC]">
          THE INNER FREQUENCY
        </h2>

        <p className="mt-4 text-xs md:text-sm font-light text-[#8E8D8A] max-w-lg leading-relaxed">
          Receive unreleased tape excerpts, secret performance coordinates, and priority access to limited edition lathe-cut vinyl pressings. No digital noise.
        </p>

        {isSubscribed ? (
          <div className="mt-10 flex items-center gap-3 px-6 py-4 rounded-full border border-[#C5A880]/50 bg-[#C5A880]/10 text-[#C5A880] font-mono text-xs tracking-wider animate-in fade-in">
            <CheckCircle2 className="w-4 h-4" />
            <span>DISPATCH TRANSMISSION CONFIRMED. WELCOME TO THE CIRCLE.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md mt-10 flex flex-col sm:flex-row items-center gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ENTER YOUR EMAIL ADDRESS"
              required
              className="w-full bg-[#121212] border border-white/10 px-5 py-3.5 rounded-full text-xs font-mono text-[#F5F2EC] placeholder:text-[#8E8D8A]/60 focus:outline-none focus:border-[#C5A880] transition-colors"
            />
            <MagneticButton
              type="submit"
              data-cursor="JOIN"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#C5A880] hover:bg-[#F5F2EC] text-[#080808] font-mono text-xs font-semibold tracking-widest uppercase transition-colors shrink-0"
            >
              <span>SUBSCRIBE</span>
              <Send className="w-3.5 h-3.5" />
            </MagneticButton>
          </form>
        )}

        <span className="mt-6 text-[9px] font-mono tracking-widest text-[#8E8D8A]/50 uppercase">
          PRIVACY ASSURED // TRANSMITTED ONLY AT DUSK
        </span>
      </div>
    </section>
  );
}
