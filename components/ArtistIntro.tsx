"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ImageReveal from "@/components/ImageReveal";
import MagneticButton from "@/components/MagneticButton";

export default function ArtistIntro() {
  return (
    <section className="relative w-full py-28 md:py-36 px-6 md:px-12 bg-[#080808] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="07"
          label="BIOGRAPHY / ORIGIN"
          title="THE SOUND ARCHITECT"
          subtitle="Operating from the intersection of classical acoustic mastery and avant-garde modular synthesis."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait Reveal */}
          <div className="lg:col-span-5 relative">
            <ImageReveal className="relative w-full aspect-[4/5] rounded-xs border border-white/[0.08] shadow-2xl overflow-hidden">
              <Image
                src="/images/artist/artist-bio.svg"
                alt="NOVA Composer Profile"
                fill
                className="object-cover filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 font-mono text-[9px] tracking-widest text-[#8E8D8A] uppercase">
                STUDIO DISPATCH // BERLIN & BLACK FOREST
              </div>
            </ImageReveal>
          </div>

          {/* Right Column: Editorial Bio and Metadata */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="text-2xl md:text-4xl font-serif font-light text-[#F5F2EC] leading-snug tracking-tight mb-6">
              "We carve sonic monoliths out of tape decay, room reflections, and unyielding emotional truth."
            </h3>

            <p className="text-[#8E8D8A] text-sm md:text-base font-light leading-relaxed mb-6">
              Trained in classical composition at the Royal Conservatoire before disappearing into the Berlin underground electronic landscape, NOVA merges grand acoustic concert halls with distorted reel-to-reel tape synthesis. 
            </p>

            <p className="text-[#8E8D8A] text-sm md:text-base font-light leading-relaxed mb-8">
              Her discography avoids repetitive pop formulas, opting instead for long-form sonic narratives that reward deep listening through high-fidelity monitors or late-night headphone immersion.
            </p>

            {/* Editorial Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-y border-white/[0.08] mb-8 font-mono text-xs">
              <div>
                <span className="block text-[9px] text-[#C5A880] tracking-widest uppercase">BASED IN</span>
                <span className="text-[#F5F2EC] mt-1 block">BERLIN / DUSK</span>
              </div>
              <div>
                <span className="block text-[9px] text-[#C5A880] tracking-widest uppercase">ACTIVE SINCE</span>
                <span className="text-[#F5F2EC] mt-1 block">MMXXIII</span>
              </div>
              <div>
                <span className="block text-[9px] text-[#C5A880] tracking-widest uppercase">PRIMARY MEDIUM</span>
                <span className="text-[#F5F2EC] mt-1 block">ANALOGUE TAPE</span>
              </div>
              <div>
                <span className="block text-[9px] text-[#C5A880] tracking-widest uppercase">GENRE</span>
                <span className="text-[#F5F2EC] mt-1 block">CHAMBER NOIR</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/about" data-cursor="READ">
                <MagneticButton className="px-6 py-3 rounded-full bg-[#F5F2EC] hover:bg-[#C5A880] text-[#080808] font-mono text-xs tracking-widest font-semibold transition-colors">
                  FULL BIOGRAPHY & ESSAY
                  <ArrowUpRight className="w-4 h-4" />
                </MagneticButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
