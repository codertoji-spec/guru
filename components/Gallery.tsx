"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { galleryItems, GalleryItemData } from "@/data/gallery";
import SectionHeading from "@/components/SectionHeading";
import ImageReveal from "@/components/ImageReveal";

export default function Gallery() {
  const [activePhoto, setActivePhoto] = useState<GalleryItemData | null>(null);

  const openLightbox = (photo: GalleryItemData) => setActivePhoto(photo);
  const closeLightbox = () => setActivePhoto(null);

  const currentIndex = activePhoto ? galleryItems.findIndex((i) => i.id === activePhoto.id) : -1;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex >= 0) {
      setActivePhoto(galleryItems[(currentIndex + 1) % galleryItems.length]);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex >= 0) {
      setActivePhoto(galleryItems[(currentIndex - 1 + galleryItems.length) % galleryItems.length]);
    }
  };

  return (
    <section className="relative w-full py-28 px-6 md:px-12 bg-[#080808] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="08"
          label="ARCHIVAL PHOTOGRAPHY / ARCHITECTURE"
          title="THE VISUAL ARCHIVE"
          subtitle="Moments captured on medium format film, large format cameras, and 35mm monochrome stock during recording odysseys."
        />

        {/* Irregular High-End Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {galleryItems.map((item, index) => {
            // Asymmetric sizing
            const colSpan =
              index === 0
                ? "md:col-span-4"
                : index === 1
                ? "md:col-span-8"
                : index === 2
                ? "md:col-span-4"
                : index === 3
                ? "md:col-span-4"
                : index === 4
                ? "md:col-span-4"
                : "md:col-span-12";

            const aspectClass =
              item.aspect === "tall"
                ? "aspect-[3/4]"
                : item.aspect === "square"
                ? "aspect-square"
                : item.aspect === "landscape"
                ? "aspect-[16/10]"
                : "aspect-[4/5]";

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(item)}
                data-cursor="VIEW"
                className={`${colSpan} group cursor-pointer relative overflow-hidden rounded-xs border border-white/[0.08]`}
              >
                <ImageReveal className={`relative w-full ${aspectClass}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale contrast-110 group-hover:grayscale-0 group-hover:contrast-100"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />

                  {/* Corner Label */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-[#8E8D8A] pointer-events-none">
                    <span className="text-[#F5F2EC] tracking-wider uppercase text-[11px] group-hover:text-[#C5A880] transition-colors">
                      {item.title}
                    </span>
                    <span className="text-[10px] tracking-widest text-[#8E8D8A]">
                      0{index + 1}
                    </span>
                  </div>
                </ImageReveal>
              </div>
            );
          })}
        </div>
      </div>

      {/* High-End Lightbox Modal */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
          className="fixed inset-0 z-[120] bg-black/95 flex flex-col justify-between p-6 md:p-12 animate-in fade-in duration-300"
        >
          {/* Top Bar with Camera Spec & Close */}
          <div className="w-full flex items-center justify-between text-xs font-mono text-[#8E8D8A]">
            <div className="flex items-center gap-3">
              <Camera className="w-4 h-4 text-[#C5A880]" />
              <span className="text-[#F5F2EC] tracking-wider uppercase">{activePhoto.title}</span>
              <span className="hidden sm:inline">• {activePhoto.camera}</span>
            </div>

            <button
              onClick={closeLightbox}
              className="p-2 rounded-full border border-white/15 text-[#F5F2EC] hover:text-[#C5A880] hover:border-[#C5A880] transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Central Image with Next/Prev Arrows */}
          <div
            className="relative w-full max-w-5xl h-[65vh] mx-auto flex items-center justify-center my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handlePrev}
              className="absolute left-2 md:-left-14 p-3 rounded-full bg-black/60 border border-white/15 text-[#F5F2EC] hover:text-[#C5A880] hover:border-[#C5A880] transition-colors z-20"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="relative w-full h-full">
              <Image
                src={activePhoto.image}
                alt={activePhoto.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            <button
              onClick={handleNext}
              className="absolute right-2 md:-right-14 p-3 rounded-full bg-black/60 border border-white/15 text-[#F5F2EC] hover:text-[#C5A880] hover:border-[#C5A880] transition-colors z-20"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Lightbox Metadata */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8E8D8A] border-t border-white/10 pt-4">
            <span className="text-[11px] text-[#F5F2EC] font-sans italic">
              "{activePhoto.caption}"
            </span>

            <div className="flex items-center gap-6 uppercase tracking-widest text-[10px]">
              <span>PHOTOGRAPHY BY {activePhoto.photographer}</span>
              <span>
                {String(currentIndex + 1).padStart(2, "0")} / {String(galleryItems.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
