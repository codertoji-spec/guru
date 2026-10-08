"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Maximize2,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { useMusicPlayer } from "@/lib/MusicPlayerContext";
import { formatTime } from "@/lib/utils";

export default function MusicPlayer() {
  const {
    currentTrack,
    currentRelease,
    isPlaying,
    currentTime,
    duration,
    togglePlay,
    playNext,
    playPrev,
    seek,
    volume,
    setVolumeLevel,
    isMuted,
    toggleMute,
  } = useMusicPlayer();

  const [isExpanded, setIsExpanded] = useState(false);

  if (!currentTrack || !currentRelease) return null;

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <aside
      aria-label="Floating audio player"
      className="fixed bottom-0 left-0 right-0 z-50 transition-all duration-300"
    >
      {/* Precision Audio Seek Bar on top edge of player */}
      <div
        className="relative w-full h-[3px] bg-white/10 hover:h-[6px] cursor-pointer group transition-all"
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const clickPos = (e.clientX - rect.left) / rect.width;
          seek(clickPos * duration);
        }}
      >
        <div
          className="absolute top-0 left-0 h-full bg-[#C5A880] group-hover:bg-[#F5F2EC] transition-colors"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Main Player Bar */}
      <div className="bg-[#0c0c0c]/90 backdrop-blur-md border-t border-white/[0.08] px-4 md:px-8 py-3 text-[#F5F2EC]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Left: Album Artwork & Track Details */}
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="relative w-11 h-11 rounded-xs overflow-hidden border border-white/10 shrink-0">
              <Image
                src={currentRelease.artwork}
                alt={currentRelease.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="min-w-0">
              <h5 className="font-serif text-sm tracking-wide text-[#F5F2EC] truncate">
                {currentTrack.title}
              </h5>
              <p className="font-mono text-[10px] text-[#8E8D8A] truncate uppercase">
                {currentRelease.title} — {currentTrack.number}
              </p>
            </div>
          </div>

          {/* Center: Playback Controls & Progress Timestamp */}
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-3 md:gap-5">
              <button
                onClick={playPrev}
                className="text-[#8E8D8A] hover:text-[#F5F2EC] transition-colors p-1"
                aria-label="Previous Track"
                data-cursor="PREV"
              >
                <SkipBack className="w-4 h-4" />
              </button>

              <button
                onClick={togglePlay}
                className="w-9 h-9 rounded-full bg-[#F5F2EC] hover:bg-[#C5A880] text-[#080808] flex items-center justify-center transition-colors"
                aria-label={isPlaying ? "Pause Track" : "Play Track"}
                data-cursor={isPlaying ? "PAUSE" : "PLAY"}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 fill-current" />
                ) : (
                  <Play className="w-4 h-4 fill-current translate-x-0.5" />
                )}
              </button>

              <button
                onClick={playNext}
                className="text-[#8E8D8A] hover:text-[#F5F2EC] transition-colors p-1"
                aria-label="Next Track"
                data-cursor="NEXT"
              >
                <SkipForward className="w-4 h-4" />
              </button>
            </div>

            <div className="hidden sm:flex items-center gap-2 font-mono text-[9px] text-[#8E8D8A]">
              <span>{formatTime(currentTime)}</span>
              <span>/</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Right: Volume & Format Badges */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={toggleMute}
                className="text-[#8E8D8A] hover:text-[#F5F2EC] transition-colors"
                aria-label={isMuted ? "Unmute Audio" : "Mute Audio"}
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-4 h-4 text-[#C5A880]" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={(e) => setVolumeLevel(parseFloat(e.target.value))}
                className="w-16 accent-[#C5A880] h-1 bg-white/20 rounded-lg cursor-pointer"
                aria-label="Volume Slider"
              />
            </div>

            <div className="hidden lg:inline-block font-mono text-[9px] text-[#C5A880] tracking-widest uppercase border border-[#C5A880]/30 px-2 py-0.5 rounded-full">
              STUDIO MASTER
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
