import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import ImageReveal from "@/components/ImageReveal";

export const metadata = {
  title: "Biography & Artist Statement — NOVA",
  description: "The biography, acoustic manifesto, and studio origins of sound architect NOVA.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-32 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <SectionHeading
        number="04"
        label="THE COMPOSER // ORIGIN"
        title="ABOUT NOVA"
        subtitle="Exploring the philosophy, sonic architecture, and analog processes shaping her work."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start my-12 pb-24 border-b border-white/[0.08]">
        {/* Left Column: Portrait */}
        <div className="lg:col-span-5 relative">
          <ImageReveal className="relative w-full aspect-[3/4] rounded-xs border border-white/[0.08] overflow-hidden">
            <Image
              src="/images/artist/hero-portrait.svg"
              alt="NOVA Portrait"
              fill
              className="object-cover"
              priority
            />
          </ImageReveal>

          <div className="mt-4 font-mono text-xs text-[#8E8D8A] flex items-center justify-between">
            <span>FIGURE 01 // PORTRAIT IN OBSIDIAN</span>
            <span className="text-[#C5A880]">MMXXVI</span>
          </div>
        </div>

        {/* Right Column: Bio Narrative */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#F5F2EC] leading-snug">
            "We treat reverberation not as an acoustic side-effect, but as an emotional instrument."
          </h2>

          <p className="text-sm md:text-base text-[#8E8D8A] font-light leading-relaxed">
            NOVA is a composer, producer, and multi-instrumentalist operating between the acoustic heritage of classical performance and the textural extremity of modern electronic experimentation.
          </p>

          <p className="text-sm md:text-base text-[#8E8D8A] font-light leading-relaxed">
            Having studied micro-tonality and score composition, she turned towards obsolete magnetic tape mechanisms, modular synthesizer arrays, and cavernous brutalist spaces to capture frequencies that standard modern digital production compresses away.
          </p>

          <p className="text-sm md:text-base text-[#8E8D8A] font-light leading-relaxed">
            With four studio records released since 2023, her work has been described as a bridge between atmospheric cinema scores and intimate, vulnerable chamber songcraft.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-white/[0.08] font-mono text-xs">
            <div>
              <span className="text-[#C5A880] text-[10px] block uppercase">ORIGIN</span>
              <span className="text-[#F5F2EC] mt-1 block">BERLIN / EUROPE</span>
            </div>
            <div>
              <span className="text-[#C5A880] text-[10px] block uppercase">PRIMARY RECORDERS</span>
              <span className="text-[#F5F2EC] mt-1 block">STUDER A800 / NAGRA IV-S</span>
            </div>
            <div>
              <span className="text-[#C5A880] text-[10px] block uppercase">KEY INFLUENCES</span>
              <span className="text-[#F5F2EC] mt-1 block">ARVO PÄRT, TIM HECKER</span>
            </div>
          </div>
        </div>
      </div>

      {/* Acoustic Manifesto */}
      <div className="max-w-4xl mx-auto text-center py-12">
        <span className="font-mono text-xs text-[#C5A880] tracking-widest uppercase block mb-4">
          MANIFESTO
        </span>
        <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-[#F5F2EC] leading-relaxed italic">
          "Do not produce for the speed of modern life. Create sounds dense enough to slow time down to an absolute standstill."
        </blockquote>
        <span className="font-mono text-xs text-[#8E8D8A] mt-6 block uppercase tracking-wider">
          — NOVA, OBSERVATORY SOUND NOTES (2026)
        </span>
      </div>
    </div>
  );
}
