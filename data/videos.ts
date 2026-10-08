export interface VideoItem {
  id: string;
  title: string;
  year: number;
  role: string;
  duration: string;
  thumbnail: string;
  director: string;
  dop: string;
  description: string;
  aspectRatio: string;
  embedUrl: string; // Simulated high-definition video embed / stream
}

export const videos: VideoItem[] = [
  {
    id: "midnight-echoes-film",
    title: "MIDNIGHT ECHOES (OFFICIAL SHORT FILM)",
    year: 2026,
    role: "DIRECTED / SCENIC VISUALS",
    duration: "08:14",
    thumbnail: "/images/gallery/film-1.svg",
    director: "Elena Rostova & NOVA",
    dop: "Kasper Tuxen (35mm Anamorphic)",
    description:
      "Captured in the desolate volcanic salt flats of Atacama. A woman walks towards an inverted black monolith as frequencies bend the atmospheric light.",
    aspectRatio: "2.39:1 CINEMASCOPE",
    embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "afterglow-live",
    title: "AFTERGLOW — LIVE AT PHILHARMONIE BERLIN",
    year: 2025,
    role: "LIVE PERFORMANCE",
    duration: "06:45",
    thumbnail: "/images/gallery/film-2.svg",
    director: "Vincent Haycock",
    dop: "Robbie Ryan",
    description:
      "A 36-piece string ensemble accompanying NOVA on an illuminated transparent grand piano beneath hanging brutalist light fixtures.",
    aspectRatio: "16:9",
    embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "static-heart-mv",
    title: "STATIC HEART (CONCEPTUAL VISUAL)",
    year: 2025,
    role: "OFFICIAL MUSIC VIDEO",
    duration: "05:12",
    thumbnail: "/images/gallery/film-3.svg",
    director: "Floria Sigismondi",
    dop: "Bradford Young",
    description:
      "Slow-motion studies of kinetic liquid ferrofluid and sculptural silhouettes reacting to sub-bass sound pulses.",
    aspectRatio: "4:3 ACADEMY RATIO",
    embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "first-light-doc",
    title: "FIRST LIGHT: CHRONICLES OF DAWN",
    year: 2023,
    role: "STUDIO DOCUMENTARY",
    duration: "14:20",
    thumbnail: "/images/gallery/film-4.svg",
    director: "NOVA",
    dop: "Lukas Feigelfeld",
    description:
      "Raw 16mm behind-the-scenes footage tracking the sleepless winter nights inside Funkhaus recording studios.",
    aspectRatio: "1.66:1",
    embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
  },
];
