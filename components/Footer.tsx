"use client";

import Link from "next/link";
import { ARTIST_NAME, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#050505] pt-24 pb-8 px-6 md:px-12 text-[#8E8D8A] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto flex flex-col justify-between">
        {/* Top Grid: Links, Social, and Back to Top */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pb-16 border-b border-white/[0.08] text-xs font-mono">
          {/* Navigation Column */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A880]">
              NAVIGATION
            </span>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[#F5F2EC] transition-colors tracking-wider uppercase"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Platforms */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A880]">
              CHANNELS
            </span>
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#F5F2EC] transition-colors tracking-wider uppercase"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Direct Contact */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A880]">
              INQUIRIES
            </span>
            <a href="mailto:management@novamusic.com" className="hover:text-[#F5F2EC] transition-colors">
              MANAGEMENT
            </a>
            <a href="mailto:press@novamusic.com" className="hover:text-[#F5F2EC] transition-colors">
              EDITORIAL PRESS
            </a>
            <a href="mailto:booking@novamusic.com" className="hover:text-[#F5F2EC] transition-colors">
              BOOKING & RESIDENCIES
            </a>
          </div>

          {/* Upwards anchor */}
          <div className="flex flex-col justify-between items-start md:items-end">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A880]">
              TOPOLOGY
            </span>
            <button
              onClick={scrollToTop}
              className="mt-6 text-[10px] tracking-widest text-[#F5F2EC] hover:text-[#C5A880] transition-colors border-b border-white/20 pb-0.5"
            >
              RETURN TO TOP ↑
            </button>
          </div>
        </div>

        {/* Huge Monolithic Bottom Brand Watermark */}
        <div className="py-12 md:py-16 text-center overflow-hidden">
          <h2 className="text-[20vw] font-serif font-light tracking-[0.1em] text-white/[0.04] leading-none uppercase select-none hover:text-[#C5A880]/10 transition-colors duration-700">
            {ARTIST_NAME}
          </h2>
        </div>

        {/* Bottom Legal / Editorial Timestamp */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-[#8E8D8A]/70 border-t border-white/[0.06] pt-6">
          <span>© MMXXVI {ARTIST_NAME} ARCHIVES. ALL RECORDINGS & VISUAL RIGHTS RESERVED.</span>
          <span className="tracking-widest uppercase">DESIGNED FOR CINEMATIC IMMERSION</span>
        </div>
      </div>
    </footer>
  );
}
