"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Menu, X, Disc3 } from "lucide-react";
import { ARTIST_NAME, NAV_LINKS } from "@/lib/constants";
import { useMusicPlayer } from "@/lib/MusicPlayerContext";

export default function Navbar() {
  const pathname = usePathname();
  const { isPlaying, togglePlay, currentTrack } = useMusicPlayer();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "py-4 bg-[#080808]/85 backdrop-blur-md border-b border-white/[0.06]"
            : "py-7 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Artist Name */}
          <Link
            href="/"
            className="group flex items-center gap-3 select-none"
            data-cursor="HOME"
          >
            <span className="text-xl md:text-2xl font-serif font-light tracking-[0.35em] text-[#F5F2EC] group-hover:text-[#C5A880] transition-colors">
              {ARTIST_NAME}
            </span>
            <span className="hidden sm:inline-block text-[9px] font-mono tracking-widest text-[#8E8D8A] uppercase border border-white/10 px-1.5 py-0.5 rounded-xs">
              ERA IV
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-xs font-mono tracking-[0.25em] uppercase text-[#F5F2EC]/80 hover:text-[#F5F2EC] transition-colors py-1 group"
                  data-cursor="GO"
                >
                  {link.label}
                  {/* Subtle underline reveal */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[1px] bg-[#C5A880] transition-transform duration-300 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Ambient Audio Status + Mobile Trigger */}
          <div className="flex items-center gap-4">
            {/* Quick mini sound trigger in nav */}
            <button
              onClick={togglePlay}
              className="flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] text-[#8E8D8A] hover:text-[#C5A880] transition-colors px-3 py-1.5 rounded-full border border-white/10 hover:border-[#C5A880]/50"
              title={isPlaying ? "Pause ambient sound" : "Play ambient sound"}
              data-cursor={isPlaying ? "PAUSE" : "PLAY"}
            >
              <Disc3
                className={`w-3.5 h-3.5 text-[#C5A880] ${
                  isPlaying ? "animate-spin [animation-duration:4s]" : ""
                }`}
              />
              <span className="hidden lg:inline">
                {isPlaying ? "SOUND ON" : "SOUND OFF"}
              </span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-[#F5F2EC] p-1.5 hover:text-[#C5A880] transition-colors focus:outline-none"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Overlay Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            exit={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-[#080808] flex flex-col justify-between px-8 py-10 text-[#F5F2EC]"
          >
            {/* Top Bar inside menu */}
            <div className="flex items-center justify-between">
              <span className="text-xl font-serif tracking-[0.3em] font-light">
                {ARTIST_NAME}
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#F5F2EC] hover:text-[#C5A880] p-2 transition-colors"
                aria-label="Close Navigation Menu"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Large Staggered Navigation Items */}
            <nav className="flex flex-col gap-6 my-auto">
              {NAV_LINKS.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + idx * 0.08, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl sm:text-5xl font-serif font-light tracking-tight hover:text-[#C5A880] transition-colors flex items-center justify-between group"
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-xs text-[#8E8D8A] tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      0{idx + 1}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom metadata and current track */}
            <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#8E8D8A]">
              <div>
                <p className="text-[10px] tracking-widest uppercase text-[#C5A880]">NOW LOADED</p>
                <p className="text-[#F5F2EC] mt-0.5 font-sans font-light">
                  {currentTrack ? currentTrack.title : "MIDNIGHT ECHOES"}
                </p>
              </div>

              <div className="flex items-center gap-4 text-[11px] tracking-wider">
                <a href="https://spotify.com" target="_blank" rel="noreferrer" className="hover:text-[#F5F2EC]">
                  SPOTIFY
                </a>
                <span>/</span>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#F5F2EC]">
                  INSTAGRAM
                </a>
                <span>/</span>
                <a href="https://apple.com" target="_blank" rel="noreferrer" className="hover:text-[#F5F2EC]">
                  APPLE
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
