"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X, Film, Sparkles } from "lucide-react";
import { videos, VideoItem } from "@/data/videos";
import SectionHeading from "@/components/SectionHeading";
import ImageReveal from "@/components/ImageReveal";

export default function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const featured = videos[0]; // Primary large cinema piece
  const secondary = videos.slice(1);

  return (
    <section className="relative w-full py-28 px-6 md:px-12 bg-[#080808] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="05"
          label="CINEMATOGRAPHY / VISUAL ESSAYS"
          title="THE MOVING IMAGE"
          subtitle="Anamorphic 35mm film suites, live brutalist chamber concerts, and kinetic audio-reactive visuals."
        />

        {/* Huge Featured Video Card */}
        <div className="relative mb-14 group">
          <div
            onClick={() => setSelectedVideo(featured)}
            data-cursor="PLAY"
            className="cursor-pointer relative overflow-hidden rounded-xs border border-white/[0.1] aspect-[16/9] md:aspect-[21/9] w-full"
          >
            <ImageReveal className="w-full h-full">
              <Image
                src={featured.thumbnail}
                alt={featured.title}
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-103 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

              {/* Central Play Trigger Indicator */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/20 bg-black/40 backdrop-blur-xs flex items-center justify-center group-hover:scale-110 group-hover:border-[#C5A880] group-hover:bg-[#C5A880]/20 transition-all duration-300">
                  <Play className="w-7 h-7 text-[#F5F2EC] group-hover:text-[#C5A880] fill-current translate-x-0.5" />
                </div>
              </div>

              {/* Bottom Cinema Overlay Info */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4 pointer-events-none">
                <div>
                  <span className="font-mono text-[10px] tracking-widest text-[#C5A880] uppercase block">
                    {featured.role} // {featured.year}
                  </span>
                  <h3 className="font-serif text-2xl md:text-4xl text-[#F5F2EC] font-light mt-1">
                    {featured.title}
                  </h3>
                  <p className="text-xs text-[#8E8D8A] font-light max-w-xl mt-1 hidden sm:block">
                    {featured.description}
                  </p>
                </div>

                <div className="font-mono text-xs text-[#8E8D8A] tracking-widest uppercase flex items-center gap-3">
                  <span>{featured.aspectRatio}</span>
                  <span>•</span>
                  <span>{featured.duration}</span>
                </div>
              </div>
            </ImageReveal>
          </div>
        </div>

        {/* Secondary Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {secondary.map((vid) => (
            <div
              key={vid.id}
              onClick={() => setSelectedVideo(vid)}
              data-cursor="PLAY"
              className="group cursor-pointer flex flex-col gap-3"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-xs border border-white/[0.08]">
                <Image
                  src={vid.thumbnail}
                  alt={vid.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/15 transition-colors" />

                {/* Small play corner icon */}
                <div className="absolute bottom-3 right-3 p-2.5 rounded-full bg-black/60 backdrop-blur-xs border border-white/10 text-[#F5F2EC] group-hover:text-[#C5A880] group-hover:border-[#C5A880] transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current" />
                </div>

                <div className="absolute top-3 left-3 font-mono text-[9px] tracking-widest uppercase bg-black/60 px-2 py-0.5 rounded-full text-[#8E8D8A]">
                  {vid.duration}
                </div>
              </div>

              <div>
                <span className="font-mono text-[9px] text-[#C5A880] tracking-widest uppercase block">
                  {vid.role}
                </span>
                <h4 className="font-serif text-lg text-[#F5F2EC] font-light group-hover:text-[#C5A880] transition-colors mt-0.5">
                  {vid.title}
                </h4>
                <p className="text-xs text-[#8E8D8A] mt-1 line-clamp-2 font-light">
                  {vid.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Video Modal with ESC support & high-end layout */}
      {selectedVideo && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[120] bg-black/95 flex flex-col justify-between p-6 md:p-12 animate-in fade-in duration-300"
          onClick={() => setSelectedVideo(null)}
        >
          {/* Top Modal Controls */}
          <div className="w-full flex items-center justify-between text-xs font-mono text-[#8E8D8A]">
            <div className="flex items-center gap-3">
              <Film className="w-4 h-4 text-[#C5A880]" />
              <span className="text-[#F5F2EC] tracking-wider uppercase">{selectedVideo.title}</span>
            </div>

            <button
              onClick={() => setSelectedVideo(null)}
              className="p-2 rounded-full border border-white/15 text-[#F5F2EC] hover:text-[#C5A880] hover:border-[#C5A880] transition-colors"
              aria-label="Close Video Player"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Central Cinema Frame */}
          <div
            className="w-full max-w-5xl mx-auto aspect-video bg-[#0a0a0a] rounded-xs border border-white/10 overflow-hidden relative shadow-2xl flex items-center justify-center my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-8 bg-gradient-to-b from-[#141414] to-[#080808]">
              <Sparkles className="w-10 h-10 text-[#C5A880] mb-4 animate-pulse" />
              <h3 className="font-serif text-2xl md:text-3xl font-light text-[#F5F2EC]">
                {selectedVideo.title}
              </h3>
              <p className="font-mono text-xs text-[#8E8D8A] mt-2 tracking-widest uppercase">
                DIRECTED BY {selectedVideo.director} // DOP: {selectedVideo.dop}
              </p>
              <p className="text-sm text-[#8E8D8A] max-w-lg mt-4 font-light leading-relaxed">
                {selectedVideo.description}
              </p>

              <div className="mt-8 flex items-center gap-4">
                <span className="font-mono text-xs px-4 py-2 rounded-full border border-[#C5A880]/50 text-[#C5A880]">
                  PLAYING CINEMATIC STREAM ({selectedVideo.aspectRatio})
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Metas */}
          <div className="w-full text-center font-mono text-[10px] tracking-widest text-[#8E8D8A] uppercase">
            PRESS ESC OR CLICK OUTSIDE TO CLOSE SCREEN
          </div>
        </div>
      )}
    </section>
  );
}
