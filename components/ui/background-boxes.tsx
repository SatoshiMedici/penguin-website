"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BoxesProps {
  className?: string;
  images?: string[];
}

export const BoxesCore = ({ className, images = [] }: BoxesProps) => {
  const rows = new Array(30).fill(1);
  const cols = new Array(20).fill(1);

  // Icy color palette matching Krypto Pengus theme
  const colors = [
    "rgb(93, 217, 193)",   // #5DD9C1 - icy teal
    "rgb(135, 206, 235)",  // #87CEEB - sky blue
    "rgb(74, 144, 164)",   // #4A90A4 - ocean blue
    "rgb(255, 133, 51)",   // #FF8533 - orange accent
    "rgb(126, 200, 227)",  // #7EC8E3 - light blue
    "rgb(110, 207, 207)",  // #6ECFCF - cyan
    "rgb(180, 220, 255)",  // light icy blue
    "rgb(255, 255, 255)",  // white
  ];

  // Predefined positions for NFT images (row, col)
  const imagePositions = [
    { row: 5, col: 3 },
    { row: 8, col: 8 },
    { row: 3, col: 12 },
    { row: 12, col: 5 },
    { row: 6, col: 15 },
    { row: 15, col: 10 },
    { row: 10, col: 2 },
    { row: 18, col: 7 },
    { row: 4, col: 18 },
    { row: 20, col: 14 },
  ];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const getImageForPosition = (rowIndex: number, colIndex: number) => {
    const posIndex = imagePositions.findIndex(
      (pos) => pos.row === rowIndex && pos.col === colIndex
    );
    if (posIndex !== -1 && images[posIndex]) {
      return images[posIndex];
    }
    return null;
  };

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute left-1/4 p-4 -top-1/4 flex -translate-x-1/2 -translate-y-1/2 w-full h-full z-0",
        className
      )}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="w-20 h-12 border-l border-[#3D6B7D]/40 relative"
        >
          {cols.map((_, j) => {
            const imageSrc = getImageForPosition(i, j);

            return (
              <motion.div
                whileHover={{
                  backgroundColor: getRandomColor(),
                  transition: { duration: 0 },
                }}
                animate={{
                  transition: { duration: 2 },
                }}
                key={`col` + j}
                className={cn(
                  "w-20 h-12 border-r border-t border-[#3D6B7D]/40 relative",
                  imageSrc && "overflow-hidden"
                )}
              >
                {imageSrc && (
                  <motion.img
                    src={imageSrc}
                    alt="Krypto Pengus NFT"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                      transform: "skewX(48deg) skewY(-14deg) scale(1.8)",
                    }}
                    whileHover={{
                      scale: 2,
                      transition: { duration: 0.3 },
                    }}
                  />
                )}
                {j % 2 === 0 && i % 2 === 0 && !imageSrc ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="absolute h-6 w-10 -top-[14px] -left-[22px] text-[#4A90A4]/30 stroke-[1px] pointer-events-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                ) : null}
              </motion.div>
            );
          })}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
