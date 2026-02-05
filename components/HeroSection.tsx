"use client";
import React from "react";

interface HeroSectionProps {
  title?: string;
  tagline?: string;
  buttonText?: string;
  backgroundColor?: string;
  textColor?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Krypto Pengus",
  tagline = "Never Give Up.",
  buttonText = "Join the March",
  backgroundColor = "#4A90A4",
  textColor = "#000000",
}) => {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden"
      style={{ backgroundColor }}
    >
      <div className="relative z-10 px-4">
        <h1
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-wider"
          style={{ color: textColor, textShadow: "2px 2px 4px rgba(0,0,0,0.2)" }}
        >
          {title}
        </h1>
        <p
          className="text-xl md:text-2xl mb-16 tracking-wide max-w-3xl mx-auto"
          style={{ color: `${textColor}e6`, letterSpacing: "0.1em" }}
        >
          {tagline}
        </p>
        <button className="bg-[#FF8533] text-white px-12 py-4 rounded-full text-xl font-bold hover:bg-[#E6762E] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
