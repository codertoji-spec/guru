import Image from "next/image";
import Link from "next/link";
import { releases } from "@/data/releases";
import SectionHeading from "@/components/SectionHeading";
import ImageReveal from "@/components/ImageReveal";
import MagneticButton from "@/components/MagneticButton";
import { ArrowUpRight, Disc } from "lucide-react";

export const metadata = {
  title: "Discography & Recordings — NOVA",
  description: "Complete studio albums, extended plays, and lathe-cut acoustic compositions by NOVA.",
};

export default function MusicPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <SectionHeading
        number="01"
        label="CATALOGUE // 2023 — 2026"
        title="COMPLETE DISCOGRAPHY"
        subtitle="Explore four distinct sonic eras, including studio master tracklists, liner notes, and vinyl editions."
      />

      <div className="space-y-24 mt-12">
        {releases.map((release, idx) => (
          <div
            key={release.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center pb-20 border-b border-white/[0.08]"
          >
            {/* Artwork */}
            <div className="lg:col-span-5 relative group">
              <Link href={`/music/${release.slug}`} data-cursor="VIEW">
                <ImageReveal className="relative w-full aspect-square rounded-xs border border-white/[0.08] overflow-hidden">
                  <Image
                    src={release.artwork}
                    alt={release.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                </ImageReveal>
              </Link>
            </div>

            {/* Info */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-3 font-mono text-xs text-[#C5A880]">
                <span>{release.type}</span>
                <span>•</span>
                <span>{release.year}</span>
                <span>•</span>
                <span className="text-[#8E8D8A]">{release.tracks.length} MOVEMENTS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#F5F2EC] tracking-tight mt-2 mb-4">
                <Link href={`/music/${release.slug}`} className="hover:text-[#C5A880] transition-colors">
                  {release.title}
                </Link>
              </h2>

              <p className="text-sm md:text-base text-[#8E8D8A] font-light leading-relaxed mb-6">
                {release.description}
              </p>

              {/* Sample track list */}
              <div className="space-y-2 border-t border-white/[0.08] pt-4 mb-8">
                {release.tracks.slice(0, 4).map((track) => (
                  <div
                    key={track.id}
                    className="flex items-center justify-between font-mono text-xs text-[#8E8D8A] py-1"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[#C5A880]">{track.number}</span>
                      <span className="text-[#F5F2EC]">{track.title}</span>
                    </div>
                    <span>{track.duration}</span>
                  </div>
                ))}
                {release.tracks.length > 4 && (
                  <p className="font-mono text-[10px] text-[#8E8D8A] pt-1 tracking-wider uppercase">
                    + {release.tracks.length - 4} ADDITIONAL TRACKS
                  </p>
                )}
              </div>

              <div className="flex items-center gap-4">
                <Link href={`/music/${release.slug}`}>
                  <MagneticButton className="px-6 py-3 rounded-full bg-[#F5F2EC] hover:bg-[#C5A880] text-[#080808] font-mono text-xs font-semibold tracking-wider transition-colors">
                    <span>EXPLORE ALBUM EXPERIENCE</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </MagneticButton>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
