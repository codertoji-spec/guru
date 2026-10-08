export interface Track {
  id: string;
  number: string;
  title: string;
  duration: string;
  durationSec: number;
  featured?: string;
  audioUrl?: string;
  lyrics?: string[];
}

export interface Release {
  id: string;
  slug: string;
  title: string;
  type: "ALBUM" | "EP" | "SINGLE";
  year: number;
  releaseDate: string;
  artwork: string;
  coverAspect?: "square" | "portrait" | "landscape";
  tagline: string;
  description: string;
  concept: string;
  credits: {
    producedBy: string;
    mixedBy: string;
    masteredBy: string;
    writtenBy: string;
    recordedAt: string;
  };
  streamingLinks: {
    spotify: string;
    appleMusic: string;
    bandcamp: string;
    vinylOrder?: string;
  };
  featuredTrack: Track;
  tracks: Track[];
}

export const releases: Release[] = [
  {
    id: "midnight-echoes",
    slug: "midnight-echoes",
    title: "MIDNIGHT ECHOES",
    type: "ALBUM",
    year: 2026,
    releaseDate: "OCTOBER 24, 2026",
    artwork: "/images/releases/midnight-echoes.svg",
    coverAspect: "square",
    tagline: "EIGHT HYMNS FOR THE NOCTURNAL MIND",
    description:
      "A monumental sonic architecture constructed between midnight hours in isolation. Layering resonant analogue synthesis, visceral cinematic strings, and deeply vulnerable vocal confessions, Midnight Echoes defines a daring new aesthetic chapter for NOVA.",
    concept:
      "Recorded exclusively between 00:00 and 05:00 in an abandoned mountain observatory, Midnight Echoes studies the psychological shifts that occur when society sleeps and memory becomes acoustic reality.",
    credits: {
      producedBy: "NOVA & Marcel Vane",
      mixedBy: "Alan Moulder",
      masteredBy: "Bob Ludwig",
      writtenBy: "NOVA",
      recordedAt: "Observatory Studio 4, Black Forest",
    },
    streamingLinks: {
      spotify: "https://spotify.com",
      appleMusic: "https://apple.com",
      bandcamp: "https://bandcamp.com",
      vinylOrder: "https://store.novamusic.com/vinyl",
    },
    featuredTrack: {
      id: "track-1",
      number: "01",
      title: "MIDNIGHT ECHOES",
      duration: "04:32",
      durationSec: 272,
    },
    tracks: [
      {
        id: "me-01",
        number: "01",
        title: "MIDNIGHT ECHOES",
        duration: "04:32",
        durationSec: 272,
        lyrics: [
          "The static rises from the marble floor",
          "A frequency I haven't known before",
          "Hold your breath until the shadows break",
          "Everything we give is what we take",
        ],
      },
      {
        id: "me-02",
        number: "02",
        title: "AFTERGLOW",
        duration: "03:58",
        durationSec: 238,
        lyrics: [
          "Burn the daylight down to copper dust",
          "In hollow iron echoes that we trust",
          "You look at me like winter looking back",
          "A silhouette against the endless black",
        ],
      },
      {
        id: "me-03",
        number: "03",
        title: "STATIC HEART",
        duration: "05:14",
        durationSec: 314,
        lyrics: [
          "Can you feel the pulse across the line?",
          "A quiet tremor born of lost design",
          "We speak in whispers that the city drowns",
          "Under the weight of subterranean sounds",
        ],
      },
      {
        id: "me-04",
        number: "04",
        title: "NO SIGNAL",
        duration: "04:09",
        durationSec: 249,
      },
      {
        id: "me-05",
        number: "05",
        title: "OBSERVATORY HYMN",
        duration: "06:21",
        durationSec: 381,
      },
      {
        id: "me-06",
        number: "06",
        title: "VELVET TAPE",
        duration: "03:42",
        durationSec: 222,
      },
      {
        id: "me-07",
        number: "07",
        title: "ASTRONOMER'S DAUGHTER",
        duration: "04:47",
        durationSec: 287,
      },
      {
        id: "me-08",
        number: "08",
        title: "FIRST LIGHT (OUTRO)",
        duration: "05:55",
        durationSec: 355,
      },
    ],
  },
  {
    id: "static-heart",
    slug: "static-heart",
    title: "STATIC HEART",
    type: "SINGLE",
    year: 2025,
    releaseDate: "NOVEMBER 12, 2025",
    artwork: "/images/releases/static-heart.svg",
    coverAspect: "portrait",
    tagline: "PULSING ANALOGUE ELEGANCE",
    description:
      "A brooding electronic ballad built around tape loops, modular arpeggios, and intimate close-mic vocals.",
    concept:
      "A visceral exploration of emotional detachment during hyper-connected modern isolation.",
    credits: {
      producedBy: "NOVA",
      mixedBy: "Sylvia Massy",
      masteredBy: "Randy Merrill",
      writtenBy: "NOVA",
      recordedAt: "The Vault, Berlin",
    },
    streamingLinks: {
      spotify: "https://spotify.com",
      appleMusic: "https://apple.com",
      bandcamp: "https://bandcamp.com",
    },
    featuredTrack: {
      id: "sh-01",
      number: "01",
      title: "STATIC HEART",
      duration: "05:14",
      durationSec: 314,
    },
    tracks: [
      {
        id: "sh-01",
        number: "01",
        title: "STATIC HEART",
        duration: "05:14",
        durationSec: 314,
      },
      {
        id: "sh-02",
        number: "02",
        title: "STATIC HEART (MINIMAL AMBIENT)",
        duration: "06:30",
        durationSec: 390,
      },
    ],
  },
  {
    id: "afterglow",
    slug: "afterglow",
    title: "AFTERGLOW",
    type: "EP",
    year: 2024,
    releaseDate: "JUNE 19, 2024",
    artwork: "/images/releases/afterglow.svg",
    coverAspect: "square",
    tagline: "FOUR PIECES ON DECAY AND RENEWAL",
    description:
      "Warm tape saturation blends with sweeping cellos and soaring dream-pop vocal peaks.",
    concept:
      "Reflections on twilight, coastal mist, and the lingering warmth of forgotten encounters.",
    credits: {
      producedBy: "NOVA & Jon Hopkins",
      mixedBy: "Garth Richardson",
      masteredBy: "Emily Lazar",
      writtenBy: "NOVA",
      recordedAt: "Cliffside Sound, Reykjavik",
    },
    streamingLinks: {
      spotify: "https://spotify.com",
      appleMusic: "https://apple.com",
      bandcamp: "https://bandcamp.com",
    },
    featuredTrack: {
      id: "ag-01",
      number: "01",
      title: "AFTERGLOW",
      duration: "03:58",
      durationSec: 238,
    },
    tracks: [
      { id: "ag-01", number: "01", title: "AFTERGLOW", duration: "03:58", durationSec: 238 },
      { id: "ag-02", number: "02", title: "CHAMBER DUSK", duration: "04:15", durationSec: 255 },
      { id: "ag-03", number: "03", title: "GLASS HORIZON", duration: "03:32", durationSec: 212 },
      { id: "ag-04", number: "04", title: "RETURN TO ASH", duration: "05:01", durationSec: 301 },
    ],
  },
  {
    id: "first-light",
    slug: "first-light",
    title: "FIRST LIGHT",
    type: "ALBUM",
    year: 2023,
    releaseDate: "JANUARY 15, 2023",
    artwork: "/images/releases/first-light.svg",
    coverAspect: "landscape",
    tagline: "THE GENESIS OF THE SHADOW AESTHETIC",
    description:
      "The debut studio album that announced NOVA to the world. A rare juxtaposition of classical piano minimalism and harsh industrial distortion.",
    concept:
      "A conceptual journey through the four phases of dawn, written during seven sleepless winter weeks.",
    credits: {
      producedBy: "NOVA",
      mixedBy: "Nils Frahm",
      masteredBy: "Mandy Parnell",
      writtenBy: "NOVA",
      recordedAt: "Funkhaus, Berlin",
    },
    streamingLinks: {
      spotify: "https://spotify.com",
      appleMusic: "https://apple.com",
      bandcamp: "https://bandcamp.com",
    },
    featuredTrack: {
      id: "fl-01",
      number: "01",
      title: "FIRST LIGHT",
      duration: "05:55",
      durationSec: 355,
    },
    tracks: [
      { id: "fl-01", number: "01", title: "FIRST LIGHT", duration: "05:55", durationSec: 355 },
      { id: "fl-02", number: "02", title: "SUBTERRANEAN", duration: "04:12", durationSec: 252 },
      { id: "fl-03", number: "03", title: "IRON LUNG", duration: "03:48", durationSec: 228 },
      { id: "fl-04", number: "04", title: "PALE MONOLITH", duration: "06:10", durationSec: 370 },
    ],
  },
];
