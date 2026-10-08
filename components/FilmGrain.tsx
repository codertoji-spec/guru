export default function FilmGrain() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] select-none opacity-[0.035] mix-blend-overlay"
      style={{
        backgroundImage: `radial-gradient(circle at 50% 50%, #fff 1px, transparent 1px)`,
        backgroundSize: "4px 4px",
      }}
    />
  );
}
