export interface GalleryItemData {
  id: string;
  title: string;
  year: number;
  location: string;
  photographer: string;
  aspect: "portrait" | "landscape" | "tall" | "square";
  image: string;
  caption: string;
  camera: string;
}

export const galleryItems: GalleryItemData[] = [
  {
    id: "g-01",
    title: "STUDIO REFLECTIONS (TAPE I)",
    year: 2026,
    location: "OBSERVATORY 4",
    photographer: "Mikael Jansson",
    aspect: "tall",
    image: "/images/gallery/photo-1.svg",
    caption: "NOVA testing resonance in the stone dome at 03:22 AM.",
    camera: "Hasselblad H6D-100c / 80mm f/2.2",
  },
  {
    id: "g-02",
    title: "MONOLITH SILHOUETTE",
    year: 2026,
    location: "ATACAMA DESERT",
    photographer: "Elena Rostova",
    aspect: "landscape",
    image: "/images/gallery/photo-2.svg",
    caption: "Cinematography stills for the Midnight Echoes visual suite.",
    camera: "Arri Alexa Mini LF / Panavision C-Series",
  },
  {
    id: "g-03",
    title: "KEYBOARD ANATOMY",
    year: 2025,
    location: "BERLIN VAULT",
    photographer: "Vincent Haycock",
    aspect: "square",
    image: "/images/gallery/photo-3.svg",
    caption: "Custom brass damping system built into the concert grand.",
    camera: "Leica M11 Monochrom / Summilux 50mm",
  },
  {
    id: "g-04",
    title: "ARCHITECTURAL DUSK",
    year: 2025,
    location: "PHILHARMONIE BERLIN",
    photographer: "Robbie Ryan",
    aspect: "tall",
    image: "/images/gallery/photo-4.svg",
    caption: "Acoustic rehearsal moments before audience doors opened.",
    camera: "Contax T2 / Kodak Tri-X 400",
  },
  {
    id: "g-05",
    title: "MODULAR FRICTION",
    year: 2024,
    location: "FUNKHAUS",
    photographer: "Lukas Feigelfeld",
    aspect: "landscape",
    image: "/images/gallery/photo-5.svg",
    caption: "Patch cable matrix connecting 4 vintage Serge synthesizer bays.",
    camera: "Mamiya RZ67 Pro II / 110mm f/2.8",
  },
  {
    id: "g-06",
    title: "ECHOES IN OBSIDIAN",
    year: 2026,
    location: "BLACK FOREST",
    photographer: "Mikael Jansson",
    aspect: "portrait",
    image: "/images/gallery/photo-6.svg",
    caption: "NOVA draped in tailored archival wool beside the acoustic reflection wall.",
    camera: "Linof Technika 4x5 Large Format",
  },
];
