import type { Metadata } from "next";
import { Suspense } from "react";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import MusicPlayer from "@/components/MusicPlayer";
import FilmGrain from "@/components/FilmGrain";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { MusicPlayerProvider } from "@/lib/MusicPlayerContext";
import PageTransition from "@/components/PageTransition";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "NOVA — Midnight Echoes | Official Artist Experience",
  description:
    "The official cinematic digital experience for musical artist and sound architect NOVA. Discover Midnight Echoes, discography, visual films, and archival recordings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${cormorant.variable} ${jakarta.variable} ${spaceMono.variable} antialiased bg-[#080808] text-[#F5F2EC] selection:bg-[#C5A880] selection:text-[#080808] overflow-x-hidden`}
      >
        <MusicPlayerProvider>
          <SmoothScrollProvider>
            <CustomCursor />
            <ScrollProgress />
            <FilmGrain />
            <Suspense fallback={<div className="h-20" />}>
              <Navbar />
            </Suspense>
            <main className="min-h-screen">
              <Suspense fallback={null}>
                <PageTransition>{children}</PageTransition>
              </Suspense>
            </main>
            <Footer />
            <MusicPlayer />
          </SmoothScrollProvider>
        </MusicPlayerProvider>
      </body>
    </html>
  );
}
