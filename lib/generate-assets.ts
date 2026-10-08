import fs from "fs";
import path from "path";

// Function to generate aesthetic, luxury monochrome SVG artworks
function createSvgArtwork({
  title,
  subtitle,
  width = 1200,
  height = 1200,
  variant = "monolith",
}: {
  title: string;
  subtitle: string;
  width?: number;
  height?: number;
  variant?: "monolith" | "orbit" | "wave" | "minimal" | "portrait" | "cinema";
}) {
  let innerGraphic = "";

  if (variant === "monolith") {
    innerGraphic = `
      <defs>
        <radialGradient id="monolithGlow" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stop-color="#C5A880" stop-opacity="0.22" />
          <stop offset="60%" stop-color="#141414" stop-opacity="0.6" />
          <stop offset="100%" stop-color="#080808" stop-opacity="1" />
        </radialGradient>
        <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#3a3835" />
          <stop offset="50%" stop-color="#181818" />
          <stop offset="100%" stop-color="#0c0c0c" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#monolithGlow)" />
      <!-- Subtle architectural grid -->
      <g stroke="#ffffff" stroke-opacity="0.04" stroke-width="1">
        <line x1="20%" y1="0" x2="20%" y2="100%" />
        <line x1="80%" y1="0" x2="80%" y2="100%" />
        <line x1="0" y1="30%" x2="100%" y2="30%" />
        <line x1="0" y1="70%" x2="100%" y2="70%" />
      </g>
      <!-- Central sculptural monolithic block -->
      <g transform="translate(${width * 0.5}, ${height * 0.48})">
        <rect x="-160" y="-240" width="320" height="480" rx="4" fill="url(#metalGrad)" stroke="#C5A880" stroke-opacity="0.3" stroke-width="1.5" />
        <!-- Inner shadow / slit -->
        <rect x="-6" y="-210" width="12" height="420" rx="6" fill="#080808" stroke="#C5A880" stroke-opacity="0.5" stroke-width="0.75" />
        <circle cx="0" cy="0" r="110" stroke="#C5A880" stroke-opacity="0.25" stroke-width="1" fill="none" stroke-dasharray="4 8" />
        <circle cx="0" cy="0" r="180" stroke="#ffffff" stroke-opacity="0.07" stroke-width="1" fill="none" />
      </g>
    `;
  } else if (variant === "portrait") {
    innerGraphic = `
      <defs>
        <radialGradient id="portraitGlow" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stop-color="#C5A880" stop-opacity="0.28" />
          <stop offset="70%" stop-color="#121212" stop-opacity="0.9" />
          <stop offset="100%" stop-color="#080808" stop-opacity="1" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#portraitGlow)" />
      <!-- Stylized silhouette portrait geometry -->
      <g transform="translate(${width * 0.5}, ${height * 0.45})">
        <path d="M-120 220 C -140 120, -100 -80, 0 -130 C 100 -80, 140 120, 120 220 Z" fill="#141414" stroke="#C5A880" stroke-opacity="0.35" stroke-width="1.5" />
        <path d="M-80 160 C -90 90, -70 -40, 0 -80 C 70 -40, 90 90, 80 160 Z" fill="#0c0c0c" opacity="0.8" />
        <!-- Ray of editorial golden light across face -->
        <line x1="-220" y1="-40" x2="220" y2="-40" stroke="#C5A880" stroke-opacity="0.6" stroke-width="1.5" />
        <circle cx="0" cy="-40" r="3" fill="#C5A880" />
      </g>
    `;
  } else if (variant === "wave") {
    innerGraphic = `
      <defs>
        <radialGradient id="waveGlow" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stop-color="#1a1816" />
          <stop offset="100%" stop-color="#080808" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#waveGlow)" />
      <g stroke="#C5A880" stroke-opacity="0.3" stroke-width="1.2" fill="none">
        ${[...Array(16)]
          .map((_, i) => {
            const y = height * 0.3 + i * 22;
            const amp = 30 + (i % 5) * 12;
            return `<path d="M0 ${y} Q ${width * 0.25} ${y - amp}, ${width * 0.5} ${y} T ${width} ${y}" stroke-opacity="${0.08 + (i / 16) * 0.35}" />`;
          })
          .join("\n")}
      </g>
    `;
  } else if (variant === "cinema") {
    innerGraphic = `
      <defs>
        <linearGradient id="cinemaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#181716" />
          <stop offset="50%" stop-color="#101010" />
          <stop offset="100%" stop-color="#060606" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#cinemaGrad)" />
      <!-- Letterbox cinemascope bars -->
      <rect x="0" y="0" width="${width}" height="${height * 0.12}" fill="#050505" />
      <rect x="0" y="${height * 0.88}" width="${width}" height="${height * 0.12}" fill="#050505" />
      <line x1="0" y1="${height * 0.12}" x2="${width}" y2="${height * 0.12}" stroke="#ffffff" stroke-opacity="0.08" />
      <line x1="0" y1="${height * 0.88}" x2="${width}" y2="${height * 0.88}" stroke="#ffffff" stroke-opacity="0.08" />
      <!-- Cinematic lens focal ring -->
      <circle cx="${width * 0.5}" cy="${height * 0.5}" r="160" stroke="#C5A880" stroke-opacity="0.3" stroke-width="1.5" fill="none" />
      <circle cx="${width * 0.5}" cy="${height * 0.5}" r="220" stroke="#ffffff" stroke-opacity="0.06" stroke-width="1" fill="none" stroke-dasharray="6 12" />
      <circle cx="${width * 0.5}" cy="${height * 0.5}" r="6" fill="#C5A880" />
    `;
  } else {
    // Minimal / Orbit
    innerGraphic = `
      <rect width="100%" height="100%" fill="#0a0a0a" />
      <circle cx="${width * 0.5}" cy="${height * 0.5}" r="260" stroke="#ffffff" stroke-opacity="0.05" stroke-width="1" fill="none" />
      <circle cx="${width * 0.5}" cy="${height * 0.5}" r="190" stroke="#C5A880" stroke-opacity="0.25" stroke-width="1.5" fill="none" stroke-dasharray="1 8" />
      <circle cx="${width * 0.5}" cy="${height * 0.5}" r="90" stroke="#C5A880" stroke-opacity="0.4" stroke-width="1.5" fill="none" />
      <line x1="${width * 0.15}" y1="${height * 0.5}" x2="${width * 0.85}" y2="${height * 0.5}" stroke="#C5A880" stroke-opacity="0.3" stroke-width="1" />
    `;
  }

  return `<?xml version="1.0" encoding="utf-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <rect width="100%" height="100%" fill="#080808" />
  ${innerGraphic}

  <!-- Grain overlay simulation & luxury typography -->
  <g font-family="'Helvetica Neue', 'Arial', sans-serif">
    <!-- Top label -->
    <text x="60" y="80" fill="#999999" font-size="13" letter-spacing="4" font-weight="500">NOVA ARCHIVAL SOUND</text>
    <text x="${width - 60}" y="80" text-anchor="end" fill="#999999" font-size="13" letter-spacing="4">MMXXVI</text>

    <!-- Bottom metadata -->
    <text x="60" y="${height - 100}" fill="#C5A880" font-size="12" letter-spacing="5" font-weight="600">${subtitle}</text>
    <text x="60" y="${height - 60}" fill="#F5F2EC" font-size="28" letter-spacing="6" font-weight="700">${title}</text>
    <text x="${width - 60}" y="${height - 60}" text-anchor="end" fill="#777777" font-size="12" letter-spacing="3">CAT. NV-409-LP</text>
  </g>
</svg>`;
}

const assets = [
  // Releases
  {
    path: "public/images/releases/midnight-echoes.svg",
    title: "MIDNIGHT ECHOES",
    subtitle: "ALBUM IV / NOCTURNE HYMNS",
    variant: "monolith" as const,
  },
  {
    path: "public/images/releases/static-heart.svg",
    title: "STATIC HEART",
    subtitle: "SINGLE / MODULAR ANALOGUE",
    variant: "wave" as const,
    height: 1500,
  },
  {
    path: "public/images/releases/afterglow.svg",
    title: "AFTERGLOW",
    subtitle: "EXTENDED PLAY / DUSK CHAMBER",
    variant: "orbit" as const,
  },
  {
    path: "public/images/releases/first-light.svg",
    title: "FIRST LIGHT",
    subtitle: "DEBUT ALBUM / GENESIS",
    variant: "monolith" as const,
    width: 1600,
    height: 1000,
  },
  // Artist Hero and Portrait
  {
    path: "public/images/artist/hero-portrait.svg",
    title: "NOVA",
    subtitle: "STUDY IN OBSIDIAN & BRONZE",
    variant: "portrait" as const,
    width: 1400,
    height: 1800,
  },
  {
    path: "public/images/artist/artist-bio.svg",
    title: "THE SOUND ARCHITECT",
    subtitle: "DOCUMENTARY / BERLIN",
    variant: "portrait" as const,
    width: 1200,
    height: 1600,
  },
  // Gallery / Video visuals
  {
    path: "public/images/gallery/film-1.svg",
    title: "MIDNIGHT ECHOES FILM",
    subtitle: "35MM CINEMASCOPE",
    variant: "cinema" as const,
    width: 1920,
    height: 1080,
  },
  {
    path: "public/images/gallery/film-2.svg",
    title: "PHILHARMONIE BERLIN",
    subtitle: "36-PIECE STRINGS & SYNTH",
    variant: "cinema" as const,
    width: 1920,
    height: 1080,
  },
  {
    path: "public/images/gallery/film-3.svg",
    title: "STATIC HEART VISUAL",
    subtitle: "FERROFLUID & BRONZE",
    variant: "cinema" as const,
    width: 1920,
    height: 1080,
  },
  {
    path: "public/images/gallery/film-4.svg",
    title: "CHRONICLES OF DAWN",
    subtitle: "FUNKHAUS STUDIOS",
    variant: "cinema" as const,
    width: 1920,
    height: 1080,
  },
  // Photo gallery
  {
    path: "public/images/gallery/photo-1.svg",
    title: "OBSERVATORY STONE",
    subtitle: "PHOTO I / HASSELBLAD",
    variant: "monolith" as const,
    width: 1000,
    height: 1400,
  },
  {
    path: "public/images/gallery/photo-2.svg",
    title: "DESERT MONOLITH",
    subtitle: "PHOTO II / ATACAMA",
    variant: "cinema" as const,
    width: 1600,
    height: 1000,
  },
  {
    path: "public/images/gallery/photo-3.svg",
    title: "CONCERT GRAND PIANO",
    subtitle: "PHOTO III / LEICA MONOCHROM",
    variant: "minimal" as const,
    width: 1200,
    height: 1200,
  },
  {
    path: "public/images/gallery/photo-4.svg",
    title: "ACOUSTIC DUSK",
    subtitle: "PHOTO IV / CONTAX T2",
    variant: "monolith" as const,
    width: 1000,
    height: 1400,
  },
  {
    path: "public/images/gallery/photo-5.svg",
    title: "PATCH MATRIX",
    subtitle: "PHOTO V / MAMIYA RZ67",
    variant: "wave" as const,
    width: 1600,
    height: 1000,
  },
  {
    path: "public/images/gallery/photo-6.svg",
    title: "OBSIDIAN SILHOUETTE",
    subtitle: "PHOTO VI / LINHOF 4X5",
    variant: "portrait" as const,
    width: 1200,
    height: 1600,
  },
];

for (const asset of assets) {
  const filePath = path.resolve(process.cwd(), asset.path);
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const content = createSvgArtwork({
    title: asset.title,
    subtitle: asset.subtitle,
    width: asset.width || 1200,
    height: asset.height || 1200,
    variant: asset.variant,
  });
  fs.writeFileSync(filePath, content, "utf-8");
  console.log("Created artwork:", asset.path);
}
