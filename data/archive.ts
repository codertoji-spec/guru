export interface ArchiveItemData {
  id: string;
  year: number;
  era: string;
  codename: string;
  category: "STUDIO" | "TOUR" | "ARTIFACT" | "EXHIBIT";
  title: string;
  summary: string;
  notes: string;
  artwork: string;
  location: string;
  slug?: string;
  metrics: {
    tracksRecorded: number;
    citiesVisited?: number;
    analogueTapesUsed: number;
  };
}

export const archiveEras: ArchiveItemData[] = [
  {
    id: "era-2026",
    year: 2026,
    era: "ERA IV — THE NOCTURNE FREQUENCIES",
    codename: "MIDNIGHT ECHOES",
    category: "STUDIO",
    title: "MIDNIGHT ECHOES",
    summary: "Monolithic analogue synthesis and orchestral chamber minimalism.",
    notes: "Mastered at Abbey Road on custom 1/2-inch ATR-102 tape heads. Includes the iconic 8-movement nocturnal suite.",
    artwork: "/images/releases/midnight-echoes.svg",
    location: "Black Forest & London",
    slug: "midnight-echoes",
    metrics: {
      tracksRecorded: 24,
      citiesVisited: 14,
      analogueTapesUsed: 38,
    },
  },
  {
    id: "era-2025",
    year: 2025,
    era: "ERA III — THE MODULAR PULSE",
    codename: "STATIC HEART",
    category: "ARTIFACT",
    title: "STATIC & RESONANCE",
    summary: "Explorations into Eurorack tape loops, broken transducers, and vocal friction.",
    notes: "A limited 200-copy lathe-cut polycarbonate 10-inch run accompanied by an editorial photographic lookbook.",
    artwork: "/images/releases/static-heart.svg",
    location: "Berlin & Tokyo",
    slug: "static-heart",
    metrics: {
      tracksRecorded: 18,
      citiesVisited: 8,
      analogueTapesUsed: 22,
    },
  },
  {
    id: "era-2024",
    year: 2024,
    era: "ERA II — TWILIGHT RESIDUALS",
    codename: "AFTERGLOW",
    category: "TOUR",
    title: "AFTERGLOW EUROPEAN RESIDENCY",
    summary: "Intimate 9-city acoustic chamber tour across brutalist concert halls.",
    notes: "No amplification aside from ribbon microphones positioned 12 feet above acoustic shell arches.",
    artwork: "/images/releases/afterglow.svg",
    location: "Reykjavik, Paris, Oslo, Milan",
    slug: "afterglow",
    metrics: {
      tracksRecorded: 12,
      citiesVisited: 9,
      analogueTapesUsed: 16,
    },
  },
  {
    id: "era-2023",
    year: 2023,
    era: "ERA I — THE GENESIS DAWN",
    codename: "FIRST LIGHT",
    category: "EXHIBIT",
    title: "FIRST LIGHT MONOLITH",
    summary: "The arrival of NOVA. Dual grand pianos played simultaneously against distortion amplifiers.",
    notes: "Debuted unannounced at midnight in a disused subterranean power station in Berlin-Mitte.",
    artwork: "/images/releases/first-light.svg",
    location: "Funkhaus, Berlin",
    slug: "first-light",
    metrics: {
      tracksRecorded: 31,
      citiesVisited: 4,
      analogueTapesUsed: 44,
    },
  },
];

export interface TimelineMilestone {
  year: string;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
}

export const timelineMilestones: TimelineMilestone[] = [
  {
    year: "2023",
    date: "JANUARY 2023",
    title: "THE FIRST LIGHT MONOLOGUE",
    subtitle: "GENESIS RECORDING",
    description: "NOVA retreats to an unheated Funkhaus studio with two Steinway grands and an 8-track Studer reel-to-reel.",
    highlight: "Debut album enters worldwide underground streaming charts at #1.",
  },
  {
    year: "2024",
    date: "JULY 2024",
    title: "AFTERGLOW ACOUSTIC RESIDENCY",
    subtitle: "SYMPHONIC EXPERIMENTATION",
    description: "Collaboration with the Icelandic Chamber Orchestra creates the four movements of Afterglow.",
    highlight: "Sold out 9 brutalist architectural venues across Northern Europe.",
  },
  {
    year: "2025",
    date: "NOVEMBER 2025",
    title: "STATIC HEART & MODULAR ARCHITECTURE",
    subtitle: "SONIC METAMORPHOSIS",
    description: "Transitioning toward raw industrial electronic textures and intimate micro-tonal arrangements.",
    highlight: "Nominated for Best Independent Sound Design at London Music Awards.",
  },
  {
    year: "2026",
    date: "PRESENT ERA",
    title: "MIDNIGHT ECHOES (ALBUM IV)",
    subtitle: "THE MASTERWORK ERA",
    description: "The culmination of three years of solitary composition and world-scale cinematic vision.",
    highlight: "Headline worldwide stadium & historic theatre tour announced.",
  },
];
