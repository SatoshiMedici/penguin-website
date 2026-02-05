"use client";
import React from "react";

interface FooterSectionProps {
  projectName?: string;
  tagline?: string;
  copyright?: string;
  socialLinks?: Array<{ name: string; url: string }>;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  projectName = "Krypto Pengus",
  tagline = "Never Give Up. Never Stop Marching.",
  copyright = "Krypto Pengus. All rights reserved.",
  socialLinks = [
    { name: "Twitter", url: "#" },
    { name: "Discord", url: "#" },
    { name: "OpenSea", url: "#" },
  ],
}) => {
  return (
    <footer className="bg-[#0a1a20] text-white py-16 text-center relative overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-8">
        <h3 className="text-3xl font-bold mb-4 text-[#4A90A4]">{projectName}</h3>
        <p className="text-[#4A90A4] mb-8 text-lg">{tagline}</p>
        
        <div className="flex justify-center gap-8 mb-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="text-[#4A90A4] hover:text-[#FF8533] transition-colors duration-300 text-lg"
            >
              {link.name}
            </a>
          ))}
        </div>
        
        <p className="text-[#4A90A4]/60 text-sm">© 2024 {copyright}</p>
      </div>
    </footer>
  );
};

export default FooterSection;
