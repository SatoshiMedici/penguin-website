import React from "react";
import {
  AbsoluteFill,
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

// Grid layout: positions for 7 cards in a visually appealing arrangement
const CARD_LAYOUTS = [
  { x: 12, y: 18, rotate: -6 },
  { x: 38, y: 12, rotate: 3 },
  { x: 64, y: 20, rotate: -4 },
  { x: 5, y: 55, rotate: 5 },
  { x: 30, y: 52, rotate: -3 },
  { x: 56, y: 48, rotate: 6 },
  { x: 78, y: 55, rotate: -5 },
];

export const NftGallery: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Section title entrance
  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const titleY = interpolate(frame, [0, 20], [-30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Subtitle entrance
  const subtitleOpacity = interpolate(frame, [15, 35], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #5DD9C1, #6ECFCF, #87CEEB)",
        overflow: "hidden",
      }}
    >
      {/* Background pattern - subtle grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: 40,
          width: "100%",
          textAlign: "center",
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
        }}
      >
        <h2
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 48,
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
            marginTop: 12,
            fontWeight: 500,
          }}
        >
          3,333 unique pixel penguins on the Sui Network
        </p>
      </div>

      {/* NFT Cards */}
      {NFT_IMAGES.map((nft, i) => {
        const layout = CARD_LAYOUTS[i];
        const delay = 20 + i * 8;

        const cardScale = spring({
          frame: frame - delay,
          fps,
          config: { damping: 12, stiffness: 80 },
        });

        const cardOpacity = interpolate(frame, [delay, delay + 15], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });

        const floatY = Math.sin(frame * 0.03 + i * 1.5) * 6;
        const floatRotate = Math.sin(frame * 0.02 + i * 2) * 2;

        // Highlight effect that sweeps across cards
        const highlightDelay = 70 + i * 6;
        const highlight = interpolate(
          frame,
          [highlightDelay, highlightDelay + 15, highlightDelay + 30],
          [0, 1, 0],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        );

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${layout.x}%`,
              top: `${layout.y}%`,
              opacity: cardOpacity,
              transform: `scale(${cardScale}) rotate(${layout.rotate + floatRotate}deg) translateY(${floatY}px)`,
            }}
          >
            <div
              style={{
                width: 220,
                height: 220,
                borderRadius: 16,
                border: "4px solid #000",
                overflow: "hidden",
                boxShadow: `0 8px 30px rgba(0,0,0,0.25), 0 0 ${highlight * 20}px rgba(255,133,51,${highlight * 0.6})`,
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
            {/* Card label */}
            <div
              style={{
                textAlign: "center",
                marginTop: 8,
                fontFamily: "'Silkscreen', monospace",
                fontSize: 12,
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
