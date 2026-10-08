import { videos } from "@/data/videos";
import SectionHeading from "@/components/SectionHeading";
import VideoSection from "@/components/VideoSection";

export const metadata = {
  title: "Visual Films & Cinematography — NOVA",
  description: "Official visual essays, 35mm music films, and live acoustic chamber recordings by NOVA.",
};

export default function VideosPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <SectionHeading
        number="02"
        label="THE MOVING IMAGE // ARCHIVE"
        title="CINEMATOGRAPHY & VISUALS"
        subtitle="A collection of short films, live concert recordings, and studio documentaries produced between 2023 and 2026."
      />

      <VideoSection />
    </div>
  );
}
