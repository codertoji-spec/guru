"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { releases } from "@/data/releases";
import ImageReveal from "@/components/ImageReveal";
import SectionHeading from "@/components/SectionHeading";

export default function ReleaseGrid() {
  return (
    <section className="relative w-full py-28 px-6 md:px-12 bg-[#080808] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="03"
          label="DISCOGRAPHY / CATALOGUE"
          title="THE RELEASES"
          subtitle="An asymmetrical editorial anthology of studio records, conceptual EPs, and rare lathe-cut releases."
        />

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {releases.map((release, index) => {
            // Asymmetric layout sizing
            const colSpan =
              index === 0
                ? "md:col-span-8"
                : index === 1
                ? "md:col-span-4"
                : index === 2
                ? "md:col-span-5 md:mt-8"
                : "md:col-span-7 md:mt-8";

            const heightClass =
              index === 0
                ? "aspect-[16/10]"
                : index === 1
                ? "aspect-[3/4]"
                : index === 2
                ? "aspect-[4/3]"
                : "aspect-[16/9]";

            return (
              <div key={release.id} className={`${colSpan} group flex flex-col`}>
                <Link
                  href={`/music/${release.slug}`}
                  data-cursor="VIEW"
                  className="relative overflow-hidden rounded-xs border border-white/[0.08] block"
                >
                  <ImageReveal className={`relative w-full ${heightClass}`}>
                    <Image
                      src={release.artwork}
                      alt={release.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 font-mono text-[9px] tracking-widest uppercase bg-black/60 px-2.5 py-1 rounded-full border border-white/10 text-[#C5A880]">
                      {release.type}
                    </div>

                    <div className="absolute top-4 right-4 font-mono text-[10px] tracking-widest text-[#F5F2EC]/80 bg-black/60 px-2.5 py-1 rounded-full border border-white/10">
                      {release.year}
                    </div>
                  </ImageReveal>
                </Link>

                {/* Release metadata beneath */}
                <div className="flex items-start justify-between pt-5 pb-2">
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl font-light text-[#F5F2EC] group-hover:text-[#C5A880] transition-colors">
                      <Link href={`/music/${release.slug}`}>{release.title}</Link>
                    </h3>
                    <p className="font-mono text-xs text-[#8E8D8A] mt-1 tracking-wider uppercase">
                      {release.tagline}
                    </p>
                  </div>

                  <Link
                    href={`/music/${release.slug}`}
                    className="p-2 rounded-full border border-white/10 group-hover:border-[#C5A880] text-[#8E8D8A] group-hover:text-[#C5A880] transition-colors"
                    aria-label={`View ${release.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
