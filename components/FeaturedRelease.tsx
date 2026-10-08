"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, ArrowUpRight, Disc } from "lucide-react";
import { releases } from "@/data/releases";
import ImageReveal from "@/components/ImageReveal";
import MagneticButton from "@/components/MagneticButton";
import { useMusicPlayer } from "@/lib/MusicPlayerContext";

export default function FeaturedRelease() {
  const featured = releases[0]; // Midnight Echoes
  const { playTrack, currentTrack, isPlaying } = useMusicPlayer();

  const isCurrentActive = currentTrack?.id === featured.featuredTrack.id && isPlaying;

  return (
    <section className="relative w-full py-28 md:py-36 px-6 md:px-12 bg-[#080808] border-b border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.08] gap-4">
          <div>
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#C5A880]">
              01 / MASTER RELEASES
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-[#F5F2EC] tracking-tight mt-2">
              FEATURED ODYSSEY
            </h2>
          </div>
          <div className="font-mono text-xs text-[#8E8D8A] tracking-widest uppercase">
            RELEASED {featured.releaseDate}
          </div>
        </div>

        {/* Hero Release Layout: Artwork + Editorial Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Large Artwork with Reveal */}
          <div className="lg:col-span-7 relative group">
            <ImageReveal direction="clip" className="w-full aspect-square max-h-[640px] rounded-xs border border-white/[0.08] shadow-2xl relative">
              <Image
                src={featured.artwork}
                alt={featured.title}
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Floating artwork quick action */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-auto">
                <span className="font-mono text-[10px] tracking-widest text-[#8E8D8A] uppercase bg-black/60 px-3 py-1.5 backdrop-blur-xs rounded-full border border-white/10">
                  8 TRACKS // 42 MIN
                </span>
                <button
                  onClick={() => playTrack(featured.featuredTrack, featured)}
                  data-cursor={isCurrentActive ? "PAUSE" : "PLAY"}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#C5A880] text-[#080808] font-mono text-xs tracking-wider font-semibold hover:bg-[#F5F2EC] transition-colors"
                >
                  <Play className={`w-3.5 h-3.5 ${isCurrentActive ? "fill-current" : ""}`} />
                  {isCurrentActive ? "PLAYING" : "PREVIEW TITLE"}
                </button>
              </div>
            </ImageReveal>
          </div>

          {/* Right: Editorial Narrative & Tracklist preview */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="font-mono text-xs text-[#C5A880] tracking-[0.3em] uppercase">
              {featured.type} // {featured.year}
            </span>

            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#F5F2EC] tracking-tight mt-3 mb-6">
              {featured.title}
            </h3>

            <p className="text-[#8E8D8A] text-sm md:text-base font-light leading-relaxed mb-6">
              {featured.description}
            </p>

            <blockquote className="border-l-2 border-[#C5A880]/60 pl-4 my-4 italic text-sm text-[#F5F2EC]/90 font-serif">
              "{featured.concept}"
            </blockquote>

            {/* Quick specifications */}
            <div className="grid grid-cols-2 gap-4 py-6 border-y border-white/[0.08] my-6 font-mono text-[11px] text-[#8E8D8A]">
              <div>
                <span className="block text-[#C5A880] text-[9px] tracking-widest">RECORDED AT</span>
                <span className="text-[#F5F2EC] mt-0.5 block">{featured.credits.recordedAt}</span>
              </div>
              <div>
                <span className="block text-[#C5A880] text-[9px] tracking-widest">PRODUCED BY</span>
                <span className="text-[#F5F2EC] mt-0.5 block">{featured.credits.producedBy}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <Link href={`/music/${featured.slug}`} data-cursor="VIEW">
                <MagneticButton className="px-7 py-3.5 rounded-full bg-[#F5F2EC] hover:bg-[#C5A880] text-[#080808] font-mono text-xs tracking-[0.2em] font-medium transition-colors">
                  ENTER ALBUM EXPERIENCE
                  <ArrowUpRight className="w-4 h-4" />
                </MagneticButton>
              </Link>

              <button
                onClick={() => playTrack(featured.tracks[0], featured)}
                className="px-6 py-3.5 rounded-full border border-white/15 hover:border-white/40 text-[#F5F2EC] font-mono text-xs tracking-[0.2em] transition-colors flex items-center gap-2"
                data-cursor="PLAY"
              >
                <Disc className="w-4 h-4 text-[#C5A880]" />
                LISTEN TRACK 01
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
