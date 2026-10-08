import Image from "next/image";
import Link from "next/link";
import { archiveEras, timelineMilestones } from "@/data/archive";
import SectionHeading from "@/components/SectionHeading";
import ImageReveal from "@/components/ImageReveal";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Archival Eras & Chronology — NOVA",
  description: "Explore the developmental eras, recording archives, and historical milestones of NOVA.",
};

export default function ArchivePage() {
  return (
    <div className="pt-32 pb-32 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <SectionHeading
        number="03"
        label="HISTORICAL CHRONOLOGY // 2023 — 2026"
        title="THE ARCHIVE"
        subtitle="Deconstructing four developmental eras through studio notes, tour logs, and analogue production metrics."
      />

      {/* Eras Anthology */}
      <div className="space-y-20 mt-12 mb-28">
        {archiveEras.map((era) => (
          <div
            key={era.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center pb-16 border-b border-white/[0.08]"
          >
            <div className="lg:col-span-5">
              <ImageReveal className="relative w-full aspect-[16/10] rounded-xs border border-white/[0.08] overflow-hidden">
                <Image
                  src={era.artwork}
                  alt={era.title}
                  fill
                  className="object-cover"
                />
              </ImageReveal>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-3 font-mono text-xs text-[#C5A880]">
                <span>{era.year}</span>
                <span>•</span>
                <span>{era.category}</span>
                <span>•</span>
                <span className="text-[#8E8D8A]">{era.location}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-light text-[#F5F2EC] tracking-tight mt-2 mb-3">
                {era.era}
              </h2>

              <p className="text-sm md:text-base text-[#8E8D8A] font-light leading-relaxed mb-4">
                {era.summary}
              </p>

              <blockquote className="border-l border-[#C5A880] pl-3 py-1 text-xs font-mono text-[#F5F2EC]/80 mb-6">
                "{era.notes}"
              </blockquote>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 border-t border-white/[0.08] pt-4 font-mono text-xs">
                <div>
                  <span className="text-[#C5A880] text-[10px] block uppercase">RECORDED TRACKS</span>
                  <span className="text-[#F5F2EC] text-base">{era.metrics.tracksRecorded}</span>
                </div>
                <div>
                  <span className="text-[#C5A880] text-[10px] block uppercase">CITIES VISITED</span>
                  <span className="text-[#F5F2EC] text-base">{era.metrics.citiesVisited || "N/A"}</span>
                </div>
                <div>
                  <span className="text-[#C5A880] text-[10px] block uppercase">ANALOGUE TAPES</span>
                  <span className="text-[#F5F2EC] text-base">{era.metrics.analogueTapesUsed}</span>
                </div>
              </div>

              {era.slug && (
                <div className="mt-6">
                  <Link
                    href={`/music/${era.slug}`}
                    className="inline-flex items-center gap-2 font-mono text-xs text-[#8E8D8A] hover:text-[#C5A880] tracking-wider uppercase transition-colors"
                  >
                    <span>OPEN ERA ALBUM FILE</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Vertical Timeline */}
      <div className="pt-12">
        <span className="font-mono text-xs text-[#C5A880] tracking-widest uppercase block mb-2">
          CHRONOLOGY TIMELINE
        </span>
        <h2 className="text-3xl font-serif font-light text-[#F5F2EC] mb-12">
          THE ARTISTIC PROGRESSION
        </h2>

        <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-8 sm:pl-12 space-y-16">
          {timelineMilestones.map((milestone, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Node Point */}
              <div className="absolute -left-[37px] sm:-left-[53px] top-1.5 w-3 h-3 rounded-full bg-[#080808] border-2 border-[#C5A880] group-hover:scale-125 transition-transform" />

              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs text-[#C5A880] tracking-widest uppercase">
                  {milestone.date}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#F5F2EC]">
                  {milestone.title}
                </h3>
                <p className="text-xs font-mono text-[#8E8D8A] uppercase tracking-wider mb-2">
                  {milestone.subtitle}
                </p>
                <p className="text-sm text-[#8E8D8A] font-light max-w-2xl leading-relaxed">
                  {milestone.description}
                </p>
                <div className="mt-3 p-3 bg-white/[0.02] border border-white/[0.05] rounded-xs text-xs font-mono text-[#F5F2EC]/90 inline-block">
                  HIGHLIGHT: {milestone.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
