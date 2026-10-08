"use client";

import React, { createContext, useContext, useState, useRef, useEffect } from "react";
import { Track, Release, releases } from "@/data/releases";

interface MusicPlayerContextType {
  currentTrack: Track | null;
  currentRelease: Release | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isMuted: boolean;
  playTrack: (track: Track, release?: Release) => void;
  togglePlay: () => void;
  pause: () => void;
  seek: (seconds: number) => void;
  setVolumeLevel: (vol: number) => void;
  toggleMute: () => void;
  playNext: () => void;
  playPrev: () => void;
}

const MusicPlayerContext = createContext<MusicPlayerContextType | null>(null);

export function MusicPlayerProvider({ children }: { children: React.ReactNode }) {
  const [currentRelease, setCurrentRelease] = useState<Release | null>(releases[0]);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(releases[0].tracks[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(releases[0].tracks[0].durationSec);
  const [volume, setVolume] = useState<number>(0.85);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  // Simulated ambient web audio synthesizer for genuine playback feel without external mp3 dependencies
  const audioContextRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startAudioTone = () => {
    if (typeof window === "undefined") return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtx();
      }
      if (audioContextRef.current.state === "suspended") {
        audioContextRef.current.resume();
      }
    } catch {
      // AudioContext fallback
    }
  };

  const playTrack = (track: Track, release?: Release) => {
    const parentRelease = release || releases.find((r) => r.tracks.some((t) => t.id === track.id)) || releases[0];
    setCurrentRelease(parentRelease);
    setCurrentTrack(track);
    setDuration(track.durationSec);
    setCurrentTime(0);
    setIsPlaying(true);
    startAudioTone();
  };

  const togglePlay = () => {
    if (!currentTrack) {
      if (releases[0]?.tracks[0]) {
        playTrack(releases[0].tracks[0], releases[0]);
      }
      return;
    }
    startAudioTone();
    setIsPlaying((prev) => !prev);
  };

  const pause = () => setIsPlaying(false);

  const seek = (seconds: number) => {
    setCurrentTime(Math.min(Math.max(0, seconds), duration));
  };

  const setVolumeLevel = (vol: number) => {
    setVolume(vol);
    if (vol > 0 && isMuted) setIsMuted(false);
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const playNext = () => {
    if (!currentRelease || !currentTrack) return;
    const currentIndex = currentRelease.tracks.findIndex((t) => t.id === currentTrack.id);
    if (currentIndex < currentRelease.tracks.length - 1) {
      playTrack(currentRelease.tracks[currentIndex + 1], currentRelease);
    } else {
      // Loop or go to next release
      const currentRelIndex = releases.findIndex((r) => r.id === currentRelease.id);
      const nextRel = releases[(currentRelIndex + 1) % releases.length];
      playTrack(nextRel.tracks[0], nextRel);
    }
  };

  const playPrev = () => {
    if (!currentRelease || !currentTrack) return;
    const currentIndex = currentRelease.tracks.findIndex((t) => t.id === currentTrack.id);
    if (currentIndex > 0) {
      playTrack(currentRelease.tracks[currentIndex - 1], currentRelease);
    } else {
      playTrack(currentRelease.tracks[0], currentRelease);
    }
  };

  // Progression timer for cinematic playback
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            playNext();
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, duration, currentTrack, currentRelease]);

  return (
    <MusicPlayerContext.Provider
      value={{
        currentTrack,
        currentRelease,
        isPlaying,
        currentTime,
        duration,
        volume,
        isMuted,
        playTrack,
        togglePlay,
        pause,
        seek,
        setVolumeLevel,
        toggleMute,
        playNext,
        playPrev,
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
}

export function useMusicPlayer() {
  const context = useContext(MusicPlayerContext);
  if (!context) {
    throw new Error("useMusicPlayer must be used within a MusicPlayerProvider");
  }
  return context;
}
