"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, Pause, ArrowLeft, ExternalLink } from "lucide-react";
import { Release } from "@/data/releases";
import { useMusicPlayer } from "@/lib/MusicPlayerContext";
import ImageReveal from "@/components/ImageReveal";

export default function ReleaseClientView({
  release,
  relatedReleases,
}: {
  release: Release;
  relatedReleases: Release[];
}) {
  const { playTrack, togglePlay, currentTrack, isPlaying } = useMusicPlayer();

  return (
    <div className="pt-28 pb-32 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      {/* Back Link */}
      <div className="mb-8">
        <Link
          href="/music"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#8E8D8A] hover:text-[#C5A880] transition-colors uppercase tracking-widest"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>RETURN TO DISCOGRAPHY</span>
        </Link>
      </div>

      {/* Hero Release Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20 border-b border-white/[0.08]">
        {/* Left: Oversized Album Artwork */}
        <div className="lg:col-span-6 relative">
          <ImageReveal className="relative w-full aspect-square rounded-xs border border-white/[0.08] shadow-2xl overflow-hidden">
            <Image
              src={release.artwork}
              alt={release.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </ImageReveal>

          {/* Quick Vinyl/Format Metadata */}
          <div className="mt-4 flex items-center justify-between font-mono text-xs text-[#8E8D8A]">
            <span>CAT. NV-{release.year}-LP</span>
            <span className="text-[#C5A880]">{release.releaseDate}</span>
          </div>
        </div>

        {/* Right: Album Title, Concept, and Credits */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs text-[#C5A880] tracking-widest uppercase">
              <span>{release.type}</span>
              <span>•</span>
              <span>{release.year}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[#F5F2EC] tracking-tight mt-2 mb-4">
              {release.title}
            </h1>

            <p className="font-mono text-xs text-[#8E8D8A] tracking-[0.25em] uppercase mb-6">
              {release.tagline}
            </p>

            <p className="text-sm md:text-base text-[#8E8D8A] font-light leading-relaxed mb-6">
              {release.description}
            </p>

            <div className="p-5 bg-white/[0.02] border border-white/[0.06] rounded-xs mb-8">
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#C5A880] block mb-2">
                CONCEPTUAL STATEMENT
              </span>
              <p className="font-serif italic text-sm md:text-base text-[#F5F2EC]/90 leading-relaxed">
                "{release.concept}"
              </p>
            </div>
          </div>

          {/* Streaming & Physical Links */}
          <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/[0.08]">
            <a
              href={release.streamingLinks.spotify}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-full border border-white/10 hover:border-[#C5A880] font-mono text-[10px] tracking-wider text-[#F5F2EC] uppercase transition-colors flex items-center gap-2"
            >
              <span>SPOTIFY</span>
              <ExternalLink className="w-3 h-3 text-[#C5A880]" />
            </a>

            <a
              href={release.streamingLinks.appleMusic}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-full border border-white/10 hover:border-[#C5A880] font-mono text-[10px] tracking-wider text-[#F5F2EC] uppercase transition-colors flex items-center gap-2"
            >
              <span>APPLE MUSIC</span>
              <ExternalLink className="w-3 h-3 text-[#C5A880]" />
            </a>

            <a
              href={release.streamingLinks.bandcamp}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-full border border-white/10 hover:border-[#C5A880] font-mono text-[10px] tracking-wider text-[#F5F2EC] uppercase transition-colors flex items-center gap-2"
            >
              <span>BANDCAMP (VINYL)</span>
              <ExternalLink className="w-3 h-3 text-[#C5A880]" />
            </a>
          </div>
        </div>
      </div>

      {/* Complete Tracklist Section */}
      <div className="py-16 border-b border-white/[0.08]">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="font-mono text-xs text-[#C5A880] tracking-widest uppercase">
              STUDIO RECORDINGS
            </span>
            <h2 className="text-3xl font-serif font-light text-[#F5F2EC] mt-1">
              MOVEMENT TRACKLIST
            </h2>
          </div>
          <span className="font-mono text-xs text-[#8E8D8A]">
            {release.tracks.length} TRACKS // 96KHZ MASTER
          </span>
        </div>

        <div className="divide-y divide-white/[0.08] border-t border-b border-white/[0.08]">
          {release.tracks.map((track) => {
            const isPlayingThis = currentTrack?.id === track.id && isPlaying;
            return (
              <div
                key={track.id}
                onClick={() => {
                  if (isPlayingThis) togglePlay();
                  else playTrack(track, release);
                }}
                className="group flex flex-col sm:flex-row sm:items-center justify-between py-5 px-3 hover:bg-white/[0.02] cursor-pointer transition-colors"
                data-cursor={isPlayingThis ? "PAUSE" : "PLAY"}
              >
                <div className="flex items-center gap-6">
                  <span className="font-mono text-xs text-[#8E8D8A] w-6">
                    {track.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg md:text-xl font-light text-[#F5F2EC] group-hover:text-[#C5A880] transition-colors">
                      {track.title}
                    </h3>
                    {track.lyrics && (
                      <p className="text-xs text-[#8E8D8A] font-serif italic mt-0.5 line-clamp-1">
                        "{track.lyrics[0]}"
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-6 mt-3 sm:mt-0 font-mono text-xs text-[#8E8D8A]">
                  <span>{track.duration}</span>
                  <button
                    className={`p-2 rounded-full transition-colors ${
                      isPlayingThis
                        ? "bg-[#C5A880] text-[#080808]"
                        : "border border-white/10 group-hover:border-[#C5A880] text-[#F5F2EC] group-hover:text-[#C5A880]"
                    }`}
                  >
                    {isPlayingThis ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Production & Engineering Credits */}
      <div className="py-16 border-b border-white/[0.08]">
        <span className="font-mono text-xs text-[#C5A880] tracking-widest uppercase">
          METADATA & ARCHIVAL CREDITS
        </span>
        <h2 className="text-2xl font-serif font-light text-[#F5F2EC] mt-1 mb-8">
          PRODUCTION ARCHIVES
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs">
          <div className="p-4 bg-white/[0.02] border border-white/[0.06] rounded-xs">
            <span className="text-[#C5A880] text-[10px] tracking-widest block uppercase">PRODUCED BY</span>
            <span className="text-[#F5F2EC] mt-1 block">{release.credits.producedBy}</span>
          </div>
          <div className="p-4 bg-white/[0.02] border border-white/[0.06] rounded-xs">
            <span className="text-[#C5A880] text-[10px] tracking-widest block uppercase">MIXED BY</span>
            <span className="text-[#F5F2EC] mt-1 block">{release.credits.mixedBy}</span>
          </div>
          <div className="p-4 bg-white/[0.02] border border-white/[0.06] rounded-xs">
            <span className="text-[#C5A880] text-[10px] tracking-widest block uppercase">MASTERED BY</span>
            <span className="text-[#F5F2EC] mt-1 block">{release.credits.masteredBy}</span>
          </div>
          <div className="p-4 bg-white/[0.02] border border-white/[0.06] rounded-xs">
            <span className="text-[#C5A880] text-[10px] tracking-widest block uppercase">RECORDED AT</span>
            <span className="text-[#F5F2EC] mt-1 block">{release.credits.recordedAt}</span>
          </div>
        </div>
      </div>

      {/* Related Releases */}
      <div className="pt-16">
        <span className="font-mono text-xs text-[#C5A880] tracking-widest uppercase">
          CONNECTED DISCOGRAPHY
        </span>
        <h2 className="text-2xl font-serif font-light text-[#F5F2EC] mt-1 mb-8">
          EXPLORE OTHER ERAS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {relatedReleases.map((rel) => (
            <Link
              key={rel.id}
              href={`/music/${rel.slug}`}
              className="group p-4 bg-white/[0.02] border border-white/[0.06] hover:border-[#C5A880]/50 rounded-xs transition-colors"
            >
              <div className="relative aspect-square overflow-hidden rounded-xs mb-3">
                <Image
                  src={rel.artwork}
                  alt={rel.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="font-mono text-[10px] text-[#C5A880] uppercase tracking-wider">
                {rel.type} // {rel.year}
              </span>
              <h3 className="font-serif text-lg font-light text-[#F5F2EC] group-hover:text-[#C5A880] transition-colors mt-0.5">
                {rel.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
