'use client';

import { useEffect, useState } from 'react';

interface PixelPenguinProps {
  mouseX?: number;
  mouseY?: number;
  className?: string;
}

export default function PixelPenguin({ mouseX = 0, mouseY = 0, className = '' }: PixelPenguinProps) {
  const [isBlinking, setIsBlinking] = useState(false);

  // Random blink effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 150);
      }
    }, 2000);

    return () => clearInterval(blinkInterval);
  }, []);

  // Pixel size for the grid
  const px = 16;

  // Colors
  const colors = {
    bg: '#87CEEB',
    black: '#1A1A1A',
    darkGray: '#2D2D2D',
    white: '#FFFFFF',
    cream: '#F5F0E6',
    red: '#CC3333',
    darkRed: '#992222',
    orange: '#E65C00',
    darkOrange: '#CC4400',
    blue: '#4466AA',
    darkBlue: '#334488',
    lightBlue: '#5577BB',
  };

  // Eye tracking based on mouse position
  const eyeOffsetX = mouseX * 2;
  const eyeOffsetY = mouseY * 2;

  return (
    <svg
      viewBox="0 0 384 384"
      className={`${className}`}
      style={{ imageRendering: 'pixelated' }}
    >
      {/* Background */}
      <rect width="384" height="384" fill={colors.bg} />

      {/* === HAT GROUP - Animated bounce === */}
      <g className="hat-group">
        {/* Hat pompom */}
        <rect x={px * 8} y={px * 0} width={px * 2} height={px} fill={colors.darkRed} />
        <rect x={px * 7} y={px * 1} width={px * 4} height={px} fill={colors.red} />
        <rect x={px * 8} y={px * 2} width={px * 2} height={px} fill={colors.darkRed} />

        {/* Hat main body */}
        <rect x={px * 5} y={px * 3} width={px * 10} height={px} fill={colors.red} />
        <rect x={px * 4} y={px * 4} width={px * 12} height={px} fill={colors.red} />
        <rect x={px * 4} y={px * 5} width={px * 12} height={px} fill={colors.darkRed} />
        <rect x={px * 3} y={px * 6} width={px * 14} height={px} fill={colors.red} />

        {/* Hat band */}
        <rect x={px * 3} y={px * 7} width={px * 14} height={px} fill={colors.darkRed} />
      </g>

      {/* === HEAD/BODY GROUP - Breathing animation === */}
      <g className="body-group">
        {/* Black head outline - top */}
        <rect x={px * 2} y={px * 8} width={px} height={px} fill={colors.black} />
        <rect x={px * 3} y={px * 8} width={px * 14} height={px} fill={colors.black} />
        <rect x={px * 17} y={px * 8} width={px} height={px} fill={colors.black} />

        {/* Head row 2 */}
        <rect x={px * 1} y={px * 9} width={px * 2} height={px} fill={colors.black} />
        <rect x={px * 3} y={px * 9} width={px * 2} height={px} fill={colors.black} />
        <rect x={px * 5} y={px * 9} width={px * 10} height={px} fill={colors.white} />
        <rect x={px * 15} y={px * 9} width={px * 2} height={px} fill={colors.black} />
        <rect x={px * 17} y={px * 9} width={px * 2} height={px} fill={colors.black} />

        {/* Face row with eyes */}
        <rect x={px * 1} y={px * 10} width={px * 2} height={px} fill={colors.black} />
        <rect x={px * 3} y={px * 10} width={px * 2} height={px} fill={colors.black} />
        <rect x={px * 5} y={px * 10} width={px * 10} height={px} fill={colors.white} />
        <rect x={px * 15} y={px * 10} width={px * 2} height={px} fill={colors.black} />
        <rect x={px * 17} y={px * 10} width={px * 2} height={px} fill={colors.black} />

        {/* Eyes - animated */}
        <g className="eyes-group" style={{ transform: `translate(${eyeOffsetX}px, ${eyeOffsetY}px)` }}>
          {/* Left eye white */}
          <rect x={px * 6} y={px * 10} width={px * 2} height={isBlinking ? px * 0.3 : px} fill={colors.white} />
          {/* Left pupil */}
          {!isBlinking && <rect x={px * 6.5} y={px * 10.3} width={px * 0.8} height={px * 0.5} fill={colors.black} />}

          {/* Right eye white */}
          <rect x={px * 12} y={px * 10} width={px * 2} height={isBlinking ? px * 0.3 : px} fill={colors.white} />
          {/* Right pupil */}
          {!isBlinking && <rect x={px * 12.5} y={px * 10.3} width={px * 0.8} height={px * 0.5} fill={colors.black} />}
        </g>

        {/* Face row 3 */}
        <rect x={px * 1} y={px * 11} width={px * 2} height={px} fill={colors.black} />
        <rect x={px * 3} y={px * 11} width={px} height={px} fill={colors.black} />
        <rect x={px * 4} y={px * 11} width={px * 12} height={px} fill={colors.white} />
        <rect x={px * 16} y={px * 11} width={px} height={px} fill={colors.black} />
        <rect x={px * 17} y={px * 11} width={px * 2} height={px} fill={colors.black} />

        {/* Beak row */}
        <rect x={px * 1} y={px * 12} width={px * 2} height={px} fill={colors.black} />
        <rect x={px * 3} y={px * 12} width={px * 2} height={px} fill={colors.black} />
        <rect x={px * 5} y={px * 12} width={px * 3} height={px} fill={colors.white} />

        {/* Beak - animated */}
        <g className="beak-group">
          <rect x={px * 8} y={px * 12} width={px * 3} height={px} fill={colors.orange} />
          <rect x={px * 11} y={px * 12} width={px} height={px} fill={colors.darkOrange} />
        </g>

        <rect x={px * 12} y={px * 12} width={px * 3} height={px} fill={colors.white} />
        <rect x={px * 15} y={px * 12} width={px * 2} height={px} fill={colors.black} />
        <rect x={px * 17} y={px * 12} width={px * 2} height={px} fill={colors.black} />

        {/* Below beak */}
        <rect x={px * 1} y={px * 13} width={px * 2} height={px} fill={colors.black} />
        <rect x={px * 3} y={px * 13} width={px * 2} height={px} fill={colors.black} />
        <rect x={px * 5} y={px * 13} width={px * 10} height={px} fill={colors.white} />
        <rect x={px * 15} y={px * 13} width={px * 2} height={px} fill={colors.black} />
        <rect x={px * 17} y={px * 13} width={px * 2} height={px} fill={colors.black} />
      </g>

      {/* === SCARF GROUP - Wave animation === */}
      <g className="scarf-group">
        {/* Scarf top row */}
        <rect x={px * 2} y={px * 14} width={px} height={px} fill={colors.black} />
        <rect x={px * 3} y={px * 14} width={px * 2} height={px} fill={colors.blue} />
        <rect x={px * 5} y={px * 14} width={px * 10} height={px} fill={colors.lightBlue} />
        <rect x={px * 15} y={px * 14} width={px * 2} height={px} fill={colors.blue} />
        <rect x={px * 17} y={px * 14} width={px} height={px} fill={colors.black} />

        {/* Scarf middle */}
        <rect x={px * 2} y={px * 15} width={px * 2} height={px} fill={colors.blue} />
        <rect x={px * 4} y={px * 15} width={px * 12} height={px} fill={colors.blue} />
        <rect x={px * 16} y={px * 15} width={px * 2} height={px} fill={colors.darkBlue} />

        {/* Scarf bottom with knot */}
        <rect x={px * 3} y={px * 16} width={px * 2} height={px} fill={colors.blue} />
        <rect x={px * 5} y={px * 16} width={px * 2} height={px} fill={colors.lightBlue} />
        <rect x={px * 7} y={px * 16} width={px * 6} height={px} fill={colors.blue} />
        <rect x={px * 13} y={px * 16} width={px * 2} height={px} fill={colors.darkBlue} />
        <rect x={px * 15} y={px * 16} width={px * 2} height={px} fill={colors.blue} />

        {/* Scarf hanging part */}
        <rect x={px * 4} y={px * 17} width={px * 3} height={px} fill={colors.blue} />
        <rect x={px * 7} y={px * 17} width={px} height={px} fill={colors.darkBlue} />
      </g>

      {/* === BODY/BELLY === */}
      <g className="belly-group">
        {/* Body sides and belly */}
        <rect x={px * 1} y={px * 17} width={px * 3} height={px} fill={colors.black} />
        <rect x={px * 8} y={px * 17} width={px * 6} height={px} fill={colors.cream} />
        <rect x={px * 14} y={px * 17} width={px * 4} height={px} fill={colors.black} />

        <rect x={px * 0} y={px * 18} width={px * 3} height={px} fill={colors.black} />
        <rect x={px * 3} y={px * 18} width={px} height={px} fill={colors.darkGray} />
        <rect x={px * 4} y={px * 18} width={px * 3} height={px} fill={colors.black} />
        <rect x={px * 7} y={px * 18} width={px * 6} height={px} fill={colors.cream} />
        <rect x={px * 13} y={px * 18} width={px * 5} height={px} fill={colors.black} />

        <rect x={px * 0} y={px * 19} width={px * 2} height={px} fill={colors.black} />
        <rect x={px * 2} y={px * 19} width={px * 2} height={px} fill={colors.darkGray} />
        <rect x={px * 4} y={px * 19} width={px * 2} height={px} fill={colors.black} />
        <rect x={px * 6} y={px * 19} width={px * 8} height={px} fill={colors.cream} />
        <rect x={px * 14} y={px * 19} width={px * 4} height={px} fill={colors.black} />

        {/* Lower body */}
        <rect x={px * 1} y={px * 20} width={px * 3} height={px} fill={colors.black} />
        <rect x={px * 4} y={px * 20} width={px * 2} height={px} fill={colors.darkGray} />
        <rect x={px * 6} y={px * 20} width={px * 8} height={px} fill={colors.cream} />
        <rect x={px * 14} y={px * 20} width={px * 3} height={px} fill={colors.black} />

        <rect x={px * 2} y={px * 21} width={px * 3} height={px} fill={colors.black} />
        <rect x={px * 5} y={px * 21} width={px * 10} height={px} fill={colors.cream} />
        <rect x={px * 15} y={px * 21} width={px * 2} height={px} fill={colors.black} />

        {/* Bottom edge */}
        <rect x={px * 3} y={px * 22} width={px * 4} height={px} fill={colors.black} />
        <rect x={px * 7} y={px * 22} width={px * 6} height={px} fill={colors.cream} />
        <rect x={px * 13} y={px * 22} width={px * 3} height={px} fill={colors.black} />

        <rect x={px * 5} y={px * 23} width={px * 10} height={px} fill={colors.black} />
      </g>

      {/* CSS Animations */}
      <style>{`
        .hat-group {
          transform-origin: center 120px;
          animation: hatBounce 2s ease-in-out infinite;
        }

        .body-group {
          transform-origin: center center;
          animation: breathe 3s ease-in-out infinite;
        }

        .scarf-group {
          transform-origin: center 240px;
          animation: scarfWave 4s ease-in-out infinite;
        }

        .beak-group {
          transform-origin: center center;
          animation: beakMove 5s ease-in-out infinite;
        }

        @keyframes hatBounce {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-3px) rotate(-1deg); }
          75% { transform: translateY(-2px) rotate(1deg); }
        }

        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.01); }
        }

        @keyframes scarfWave {
          0%, 100% { transform: skewX(0deg); }
          25% { transform: skewX(1deg); }
          75% { transform: skewX(-1deg); }
        }

        @keyframes beakMove {
          0%, 90%, 100% { transform: scaleX(1); }
          93% { transform: scaleX(1.1); }
          96% { transform: scaleX(1); }
        }
      `}</style>
    </svg>
  );
}
