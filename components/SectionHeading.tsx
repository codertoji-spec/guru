import React from "react";

interface SectionHeadingProps {
  label: string;
  title: string;
  number?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  number,
  subtitle,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignmentClass =
    align === "center"
      ? "text-center items-center"
      : align === "right"
      ? "text-right items-end"
      : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 mb-12 md:mb-16 ${alignmentClass} ${className}`}>
      {/* Editorial eyebrow with category number */}
      <div className="flex items-center gap-3 text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-[#C5A880]">
        {number && <span className="opacity-60">{number} /</span>}
        <span>{label}</span>
      </div>

      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tight font-serif text-[#F5F2EC]">
        {title}
      </h2>

      {/* Optional subtitle */}
      {subtitle && (
        <p className="max-w-xl text-sm md:text-base text-[#8E8D8A] font-light tracking-wide leading-relaxed mt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
}
