"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import FeaturedRelease from "@/components/FeaturedRelease";
import TracklistSection from "@/components/TracklistSection";
import ReleaseGrid from "@/components/ReleaseGrid";
import HorizontalStory from "@/components/HorizontalStory";
import VideoSection from "@/components/VideoSection";
import Marquee from "@/components/Marquee";
import ArtistStatement from "@/components/ArtistStatement";
import ArtistIntro from "@/components/ArtistIntro";
import Gallery from "@/components/Gallery";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  const [preloaderFinished, setPreloaderFinished] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#080808]">
      {/* Cinematic Preloader Sequence */}
      <Preloader onComplete={() => setPreloaderFinished(true)} />

      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. MARQUEE TRANSITION */}
      <Marquee
        text="NOVA — MIDNIGHT ECHOES — ARCHIVAL SOUNDSCAPES — ERA IV —"
        speed={32}
        direction="left"
        className="border-y border-white/[0.05] bg-[#060606]"
      />

      {/* 3. FEATURED RELEASE SECTION */}
      <FeaturedRelease />

      {/* 4. MUSIC / TRACKLIST SECTION */}
      <TracklistSection />

      {/* 5. RELEASE GRID / DISCOGRAPHY */}
      <ReleaseGrid />

      {/* 6. HORIZONTAL STORY / ERA SECTION */}
      <HorizontalStory />

      {/* 7. CINEMATOGRAPHY / VIDEO SECTION */}
      <VideoSection />

      {/* 8. ARTIST STATEMENT / MANIFESTO */}
      <ArtistStatement />

      {/* 9. ABOUT / SOUND ARCHITECT */}
      <ArtistIntro />

      {/* 10. REVERSE SPEED MARQUEE */}
      <Marquee
        text="35MM VISUALS — ANALOGUE SYNTHESIS — ORCHESTRAL CHAMBER —"
        speed={40}
        direction="right"
        className="border-y border-white/[0.05] bg-[#060606]"
      />

      {/* 11. GALLERY / ARCHIVAL PHOTOGRAPHY */}
      <Gallery />

      {/* 12. NEWSLETTER / PRIVATE DISPATCHES */}
      <Newsletter />
    </div>
  );
}
