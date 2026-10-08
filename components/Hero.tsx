"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, Disc3 } from "lucide-react";
import { ARTIST_NAME, ARTIST_TAGLINE } from "@/lib/constants";
import MagneticButton from "@/components/MagneticButton";
import { useMusicPlayer } from "@/lib/MusicPlayerContext";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { togglePlay, isPlaying } = useMusicPlayer();

  useEffect(() => {
    // Parallax effect on scroll
    const handleScroll = () => {
      if (!heroRef.current || !imageContainerRef.current) return;
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;

      if (scrollY <= heroHeight) {
        const factor = scrollY / heroHeight;
        // Image subtle translation & scale
        imageContainerRef.current.style.transform = `translate3d(0, ${scrollY * 0.22}px, 0) scale(${
          1 - factor * 0.05
        })`;
        imageContainerRef.current.style.opacity = `${1 - factor * 0.85}`;

        // Title parallax
        if (titleRef.current) {
          titleRef.current.style.transform = `translate3d(0, ${-scrollY * 0.15}px, 0)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100svh] w-full flex flex-col justify-between pt-24 pb-12 px-6 md:px-12 overflow-hidden bg-[#080808]"
    >
      {/* Background Ambience Layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C5A880]/[0.035] rounded-full blur-[140px]" />
      </div>

      {/* Top Editorial Metadata Bar */}
      <div className="relative z-10 w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/[0.08] text-[10px] md:text-xs font-mono tracking-[0.25em] text-[#8E8D8A] uppercase">
        <div className="flex items-center gap-4">
          <span className="text-[#C5A880]">PHASE 04</span>
          <span>/</span>
          <span>NOCTURNE MASTERWORKS</span>
        </div>
        <div className="flex items-center gap-6">
          <span>CAT. NV-2026</span>
          <span className="hidden sm:inline">BERLIN — LONDON</span>
        </div>
      </div>

      {/* Central Visual Composition */}
      <div className="relative z-10 my-auto py-8 flex flex-col items-center justify-center">
        {/* Floating Background/Framed Artist Portrait */}
        <div
          ref={imageContainerRef}
          className="relative w-full max-w-4xl h-[48vh] sm:h-[54vh] md:h-[62vh] overflow-hidden rounded-xs border border-white/[0.06] shadow-2xl transition-transform duration-100 ease-out"
        >
          <Image
            src="/images/artist/hero-portrait.svg"
            alt={`${ARTIST_NAME} Cinematic Portrait`}
            fill
            priority
            className="object-cover object-center scale-105 filter brightness-95 contrast-105"
          />
          {/* Subtle editorial film frame markings */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/40" />

          <div className="absolute top-4 left-4 font-mono text-[9px] tracking-widest text-[#8E8D8A]/80">
            FRAME 04:32 // 35MM EXPOSURE
          </div>
          <div className="absolute bottom-4 right-4 font-mono text-[9px] tracking-widest text-[#C5A880]/90">
            MIDNIGHT ECHOES
          </div>
        </div>

        {/* Oversized Monolithic Artist Title Overlapping the image */}
        <div className="relative -mt-16 sm:-mt-24 md:-mt-32 z-20 text-center select-none pointer-events-none">
          <h1
            ref={titleRef}
            className="text-[18vw] sm:text-[16vw] md:text-[15vw] leading-[0.82] font-serif font-light tracking-[0.06em] text-[#F5F2EC] drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
          >
            {ARTIST_NAME}
          </h1>
        </div>

        <p className="relative z-20 mt-4 text-center text-xs md:text-sm font-mono tracking-[0.35em] text-[#C5A880] uppercase">
          {ARTIST_TAGLINE}
        </p>
      </div>

      {/* Bottom Editorial Actions & Scroll Directive */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pt-6 border-b border-white/[0.08] pb-6">
        {/* Left: Featured Release Callout */}
        <div className="flex flex-col gap-1 max-w-xs">
          <span className="font-mono text-[10px] tracking-widest text-[#8E8D8A] uppercase">
            CURRENT ODYSSEY
          </span>
          <span className="font-serif text-lg md:text-xl text-[#F5F2EC] font-light">
            MIDNIGHT ECHOES
          </span>
          <span className="text-xs text-[#8E8D8A] font-light leading-relaxed">
            New 8-track studio LP available worldwide across all digital and vinyl formats.
          </span>
        </div>

        {/* Center: Play Ambient Audio Trigger */}
        <div className="flex items-center gap-4">
          <MagneticButton
            onClick={togglePlay}
            cursorText={isPlaying ? "PAUSE" : "LISTEN"}
            className="px-6 py-3 rounded-full border border-[#C5A880]/50 hover:border-[#C5A880] bg-[#121212]/80 backdrop-blur-xs text-xs font-mono tracking-[0.25em] text-[#F5F2EC] hover:text-[#C5A880]"
          >
            <Disc3 className={`w-4 h-4 text-[#C5A880] ${isPlaying ? "animate-spin" : ""}`} />
            {isPlaying ? "PAUSE SOUND" : "ENTER SOUNDSCAPE"}
          </MagneticButton>

          <Link href="/music/midnight-echoes" data-cursor="EXPLORE">
            <MagneticButton className="px-6 py-3 rounded-full border border-white/10 hover:border-white/40 bg-transparent text-xs font-mono tracking-[0.25em] text-[#8E8D8A] hover:text-[#F5F2EC]">
              EXPLORE LP
              <ArrowDownRight className="w-3.5 h-3.5 text-[#C5A880]" />
            </MagneticButton>
          </Link>
        </div>

        {/* Right: Scroll Indicator */}
        <div className="hidden md:flex flex-col items-end gap-2 text-right">
          <span className="font-mono text-[9px] tracking-[0.3em] text-[#8E8D8A] uppercase">
            SCROLL TO COMMENCE
          </span>
          <div className="w-8 h-[1px] bg-[#C5A880]/80" />
        </div>
      </div>
    </section>
  );
}
