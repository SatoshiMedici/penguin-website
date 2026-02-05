"use client";
import React from "react";

interface MarchSectionProps {
  heading?: string;
  description?: string;
  endingText?: string;
  headingColor?: string;
  textColor?: string;
  endingTextColor?: string;
}

export const MarchSection: React.FC<MarchSectionProps> = ({
  heading = "The March",
  description = "In the harsh Antarctic winter, Emperor Penguins undertake an incredible journey—marching up to 75 miles across frozen tundra to reach their breeding grounds. They huddle together for warmth, taking turns at the center to survive temperatures as low as -60°F.",
  endingText = "Keep Waddling.",
  headingColor = "#FF8533",
  textColor = "#FFFFFF",
  endingTextColor = "#FF8533",
}) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden bg-gradient-to-b from-[#2d5a6b] via-[#1a3d4a] to-[#0a1a20] py-20">
      <div className="relative z-10 max-w-4xl mx-auto px-8">
        <h2
          className="text-5xl md:text-7xl font-bold mb-12"
          style={{ color: headingColor }}
        >
          {heading}
        </h2>
        <p
          className="text-lg md:text-xl leading-relaxed mb-16 opacity-90"
          style={{ color: textColor }}
        >
          {description}
        </p>
        <p
          className="text-3xl md:text-5xl font-bold drop-shadow-lg"
          style={{ color: endingTextColor }}
        >
          {endingText}
        </p>
      </div>
    </section>
  );
};

export default MarchSection;
