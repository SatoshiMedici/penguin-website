import React from "react";
import {
  AbsoluteFill,
  Audio,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const NFT_IMAGES = [
  "nft-1.jpg",
  "nft-2.jpg",
  "nft-3.jpg",
  "nft-5.jpg",
  "nft-7.jpg",
  "nft-8.jpg",
  "nft-10.jpg",
];

// Card size 200x200 on a 1920x1080 canvas
// Positions as percentage of (1920 - 200) and (1080 - 200) to prevent overflow
const CARD_LAYOUTS = [
  // Row 1: 3 cards centered
  { x: 180, y: 170, rotate: -4 },
  { x: 580, y: 150, rotate: 2 },
  { x: 980, y: 165, rotate: -3 },
  // Row 2: 4 cards centered
  { x: 80, y: 520, rotate: 3 },
  { x: 440, y: 510, rotate: -2 },
  { x: 800, y: 525, rotate: 4 },
  { x: 1160, y: 515, rotate: -3 },
];

const CARD_SIZE = 200;

export const NftGallery: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Scene fade-in
  const sceneFade = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Title entrance (slower)
  const titleOpacity = interpolate(frame, [5, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const titleY = interpolate(frame, [5, 40], [-20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Subtitle
  const subtitleOpacity = interpolate(frame, [30, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(170deg, #5DD9C1, #6ECFCF, #87CEEB)",
        overflow: "hidden",
        opacity: sceneFade,
      }}
    >
      {/* Whoosh on entry */}
      <Audio src={staticFile("audio/whoosh.wav")} startFrom={0} volume={0.25} />

      {/* Subtle dot grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: 50,
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
        }}
      >
        <h2
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 46,
            color: "#2C5F75",
            textShadow: "2px 2px 0 rgba(0,0,0,0.1)",
            margin: 0,
          }}
        >
          THE COLLECTION
        </h2>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 22,
            color: "#FFFFFF",
            opacity: subtitleOpacity,
            marginTop: 14,
            fontWeight: 500,
          }}
        >
          3,333 unique pixel penguins on the Sui Network
        </p>
      </div>

      {/* NFT Cards - pixel positioned to prevent overflow */}
      {NFT_IMAGES.map((nft, i) => {
        const layout = CARD_LAYOUTS[i];
        const delay = 40 + i * 15; // slower stagger

        const cardScale = spring({
          frame: frame - delay,
          fps,
          config: { damping: 16, stiffness: 50, mass: 1 },
        });

        const cardOpacity = interpolate(
          frame,
          [delay, delay + 25],
          [0, 1],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        );

        const floatY = Math.sin(frame * 0.02 + i * 1.5) * 5;
        const floatRotate = Math.sin(frame * 0.015 + i * 2) * 1.5;

        // Highlight sweep
        const highlightDelay = 140 + i * 10;
        const highlight = interpolate(
          frame,
          [highlightDelay, highlightDelay + 20, highlightDelay + 40],
          [0, 1, 0],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        );

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: layout.x,
              top: layout.y,
              opacity: cardOpacity,
              transform: `scale(${cardScale}) rotate(${layout.rotate + floatRotate}deg) translateY(${floatY}px)`,
              transformOrigin: "center center",
            }}
          >
            <div
              style={{
                width: CARD_SIZE,
                height: CARD_SIZE,
                borderRadius: 16,
                border: "4px solid #000",
                overflow: "hidden",
                boxShadow: `0 8px 30px rgba(0,0,0,0.2), 0 0 ${highlight * 20}px rgba(255,133,51,${highlight * 0.5})`,
                backgroundColor: "#1a1a2e",
              }}
            >
              <Img
                src={staticFile(nft)}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div
              style={{
                textAlign: "center",
                marginTop: 8,
                fontFamily: "'Silkscreen', monospace",
                fontSize: 11,
                color: "#2C5F75",
                fontWeight: 700,
              }}
            >
              #{String(i * 471 + 1).padStart(4, "0")}
            </div>
          </div>
        );
      })}
    </AbsoluteFill>
  );
};
