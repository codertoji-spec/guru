"use client";

import { useState } from "react";
import { Play, Pause, Disc, ArrowUpRight } from "lucide-react";
import { releases, Track } from "@/data/releases";
import { useMusicPlayer } from "@/lib/MusicPlayerContext";
import SectionHeading from "@/components/SectionHeading";

export default function TracklistSection() {
  const [selectedAlbum, setSelectedAlbum] = useState(releases[0]);
  const { playTrack, togglePlay, currentTrack, isPlaying } = useMusicPlayer();

  return (
    <section className="relative w-full py-28 px-6 md:px-12 bg-[#080808] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <SectionHeading
            number="02"
            label="DISCOGRAPHY / COMPOSITIONS"
            title="THE ARCHIVAL MOVEMENTS"
            subtitle="Explore studio recordings across four developmental eras. Click any track to trigger immediate playback."
          />

          {/* Album Selector Filter */}
          <div className="flex flex-wrap gap-2 mb-8 md:mb-12">
            {releases.map((rel) => (
              <button
                key={rel.id}
                onClick={() => setSelectedAlbum(rel)}
                className={`px-4 py-2 rounded-full font-mono text-[10px] tracking-widest uppercase transition-all duration-300 ${
                  selectedAlbum.id === rel.id
                    ? "bg-[#C5A880] text-[#080808] font-bold"
                    : "bg-white/[0.03] text-[#8E8D8A] hover:text-[#F5F2EC] hover:bg-white/[0.08] border border-white/[0.05]"
                }`}
                data-cursor="SELECT"
              >
                {rel.title} ({rel.year})
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Track Rows */}
        <div className="divide-y divide-white/[0.07] border-t border-b border-white/[0.07]">
          {selectedAlbum.tracks.map((track: Track) => {
            const isThisTrackPlaying = currentTrack?.id === track.id && isPlaying;
            const isThisTrackSelected = currentTrack?.id === track.id;

            return (
              <div
                key={track.id}
                onClick={() => {
                  if (isThisTrackPlaying) {
                    togglePlay();
                  } else {
                    playTrack(track, selectedAlbum);
                  }
                }}
                data-cursor={isThisTrackPlaying ? "PAUSE" : "PLAY"}
                className={`group flex items-center justify-between py-6 px-4 md:px-6 cursor-pointer transition-all duration-300 ${
                  isThisTrackSelected
                    ? "bg-white/[0.04] pl-6 md:pl-8"
                    : "hover:bg-white/[0.02] hover:pl-6 md:hover:pl-8"
                }`}
              >
                {/* Left: Track Index & Title */}
                <div className="flex items-center gap-6 md:gap-10">
                  <span className="font-mono text-xs md:text-sm text-[#8E8D8A] group-hover:text-[#C5A880] transition-colors w-8">
                    {isThisTrackPlaying ? (
                      <span className="flex items-center gap-0.5 h-3.5">
                        <span className="w-1 h-3 bg-[#C5A880] animate-pulse" />
                        <span className="w-1 h-4 bg-[#C5A880] animate-pulse [animation-delay:150ms]" />
                        <span className="w-1 h-2 bg-[#C5A880] animate-pulse [animation-delay:300ms]" />
                      </span>
                    ) : (
                      track.number
                    )}
                  </span>

                  <div>
                    <h4
                      className={`font-serif text-lg md:text-2xl font-light tracking-wide transition-colors ${
                        isThisTrackSelected ? "text-[#C5A880]" : "text-[#F5F2EC] group-hover:text-[#C5A880]"
                      }`}
                    >
                      {track.title}
                    </h4>
                    {track.lyrics && (
                      <p className="text-[11px] font-sans text-[#8E8D8A] italic mt-0.5 line-clamp-1 max-w-md hidden sm:block">
                        "{track.lyrics[0]}"
                      </p>
                    )}
                  </div>
                </div>

                {/* Right: Duration, Format badge & Play Icon */}
                <div className="flex items-center gap-6 md:gap-10">
                  <span className="hidden md:inline-block font-mono text-[10px] tracking-widest text-[#8E8D8A] uppercase">
                    LOSSLESS 96KHZ/24-BIT
                  </span>
                  <span className="font-mono text-xs md:text-sm text-[#8E8D8A]">
                    {track.duration}
                  </span>

                  <button
                    className={`p-2.5 rounded-full transition-all duration-300 ${
                      isThisTrackPlaying
                        ? "bg-[#C5A880] text-[#080808]"
                        : "border border-white/10 group-hover:border-[#C5A880] text-[#F5F2EC] group-hover:text-[#C5A880]"
                    }`}
                    aria-label={`Play ${track.title}`}
                  >
                    {isThisTrackPlaying ? (
                      <Pause className="w-3.5 h-3.5 fill-current" />
                    ) : (
                      <Play className="w-3.5 h-3.5 fill-current" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
