"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { archiveEras } from "@/data/archive";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HorizontalStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run desktop pinned horizontal scroll on large viewports
    if (window.innerWidth < 1024) return;

    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const totalScroll = track.scrollWidth - window.innerWidth + 80;

    const tween = gsap.to(track, {
      x: -totalScroll,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${totalScroll}`,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === container) st.kill();
      });
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#0a0a0a] border-b border-white/[0.06] overflow-hidden"
    >
      {/* Editorial Header bar */}
      <div className="pt-20 px-6 md:px-12 flex items-center justify-between">
        <div>
          <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#C5A880]">
            04 / HISTORICAL CHRONOLOGY
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-[#F5F2EC] tracking-tight mt-1">
            THE ERAS (2023 — 2026)
          </h2>
        </div>
        <span className="hidden lg:inline-block font-mono text-xs text-[#8E8D8A] tracking-widest uppercase">
          HORIZONTAL DRIFT →
        </span>
      </div>

      {/* Horizontal Carousel Track */}
      <div
        ref={trackRef}
        className="flex items-center gap-8 md:gap-16 py-16 px-6 md:px-16 overflow-x-auto lg:overflow-x-visible no-scrollbar w-full lg:w-max"
      >
        {archiveEras.map((era, index) => (
          <div
            key={era.id}
            className="flex-shrink-0 w-[300px] sm:w-[420px] md:w-[500px] bg-[#0f0f0f] border border-white/[0.08] p-6 md:p-8 rounded-xs relative group flex flex-col justify-between"
          >
            {/* Top Index & Year */}
            <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
              <span className="font-serif text-3xl font-light text-[#C5A880]">
                {era.year}
              </span>
              <span className="font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full bg-white/[0.04] text-[#8E8D8A]">
                {era.category}
              </span>
            </div>

            {/* Artwork Preview */}
            <div className="relative w-full aspect-[16/10] my-6 overflow-hidden rounded-xs border border-white/[0.06]">
              <Image
                src={era.artwork}
                alt={era.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 font-mono text-[9px] tracking-widest text-[#F5F2EC]/80 uppercase">
                {era.location}
              </div>
            </div>

            {/* Era Details */}
            <div>
              <span className="font-mono text-[10px] tracking-[0.25em] text-[#C5A880] uppercase block">
                {era.era}
              </span>
              <h3 className="font-serif text-2xl font-light text-[#F5F2EC] tracking-wide mt-1">
                {era.title}
              </h3>
              <p className="text-xs md:text-sm text-[#8E8D8A] font-light leading-relaxed mt-3">
                {era.summary}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2 pt-4 mt-4 border-t border-white/[0.06] text-center font-mono">
                <div>
                  <span className="block text-xs text-[#F5F2EC]">{era.metrics.tracksRecorded}</span>
                  <span className="text-[8px] text-[#8E8D8A] uppercase">Tracks</span>
                </div>
                <div>
                  <span className="block text-xs text-[#F5F2EC]">{era.metrics.citiesVisited || "N/A"}</span>
                  <span className="text-[8px] text-[#8E8D8A] uppercase">Cities</span>
                </div>
                <div>
                  <span className="block text-xs text-[#F5F2EC]">{era.metrics.analogueTapesUsed}</span>
                  <span className="text-[8px] text-[#8E8D8A] uppercase">Tapes</span>
                </div>
              </div>
            </div>

            {/* Navigation Link */}
            <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <Link
                href={`/music/${era.slug || "midnight-echoes"}`}
                data-cursor="OPEN"
                className="text-xs font-mono tracking-widest text-[#8E8D8A] group-hover:text-[#F5F2EC] flex items-center gap-2 uppercase transition-colors"
              >
                EXPLORE RECORD
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A880]" />
              </Link>
              <span className="font-mono text-[10px] text-[#8E8D8A]">
                0{index + 1} / 04
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
