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

export const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Background gradient animation
  const bgShift = interpolate(frame, [0, 150], [0, 30], {
    extrapolateRight: "clamp",
  });

  // Logo entrance spring
  const logoScale = spring({
    frame: frame - 10,
    fps,
    config: { damping: 12, stiffness: 80, mass: 0.8 },
  });

  // Title entrance
  const titleY = spring({
    frame: frame - 25,
    fps,
    config: { damping: 14, stiffness: 60 },
  });

  const titleOpacity = interpolate(frame, [25, 45], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Tagline entrance
  const taglineOpacity = interpolate(frame, [50, 70], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const taglineY = interpolate(frame, [50, 70], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Snowflake particles
  const snowflakes = Array.from({ length: 20 }, (_, i) => ({
    x: (i * 137.5) % 100,
    delay: i * 3,
    size: 4 + (i % 4) * 2,
    speed: 0.3 + (i % 3) * 0.2,
  }));

  // Penguin image breathing
  const breathe = Math.sin(frame * 0.05) * 3;

  // Pixel squares floating in
  const pixelSquares = [
    { x: 15, y: 20, color: "#FF8533", delay: 5 },
    { x: 85, y: 25, color: "#5DD9C1", delay: 10 },
    { x: 10, y: 70, color: "#FFFFFF", delay: 15 },
    { x: 90, y: 75, color: "#FF8533", delay: 8 },
    { x: 25, y: 85, color: "#FFD93D", delay: 12 },
    { x: 75, y: 15, color: "#FF6B9D", delay: 18 },
  ];

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(${160 + bgShift}deg, #87CEEB, #6ECFCF, #5DD9C1)`,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Snowflakes */}
      {snowflakes.map((flake, i) => {
        const flakeY = interpolate(
          frame,
          [flake.delay, flake.delay + 200],
          [-10, 110],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        );
        const flakeX = flake.x + Math.sin(frame * 0.02 + i) * 5;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${flakeX}%`,
              top: `${flakeY}%`,
              width: flake.size,
              height: flake.size,
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              filter: "blur(0.5px)",
            }}
          />
        );
      })}

      {/* Floating pixel squares */}
      {pixelSquares.map((sq, i) => {
        const sqScale = spring({
          frame: frame - sq.delay,
          fps,
          config: { damping: 10, stiffness: 100 },
        });
        const sqFloat = Math.sin(frame * 0.03 + i * 2) * 8;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${sq.x}%`,
              top: `${sq.y + sqFloat * 0.3}%`,
              width: 16,
              height: 16,
              backgroundColor: sq.color,
              border: "2px solid #000",
              transform: `scale(${sqScale}) rotate(${frame * 0.5 + i * 45}deg)`,
              boxShadow: `0 0 12px ${sq.color}60`,
            }}
          />
        );
      })}

      {/* Mountain silhouettes at bottom */}
      <svg
        style={{ position: "absolute", bottom: 0, width: "100%", height: "30%" }}
        viewBox="0 0 1920 300"
        preserveAspectRatio="none"
      >
        <polygon
          points="0,300 200,80 400,180 600,50 800,150 1000,30 1200,120 1400,70 1600,160 1800,40 1920,130 1920,300"
          fill="#3D6B7D"
          opacity={0.4}
        />
        <polygon
          points="0,300 150,140 350,200 550,120 750,200 950,100 1150,180 1350,130 1550,210 1750,90 1920,180 1920,300"
          fill="#4A90A4"
          opacity={0.5}
        />
      </svg>

      {/* Hero penguin image */}
      <div
        style={{
          transform: `scale(${logoScale}) translateY(${breathe}px)`,
          marginBottom: 20,
        }}
      >
        <Img
          src={staticFile("hero-penguin.png")}
          style={{
            width: 280,
            height: 280,
            borderRadius: 24,
            border: "4px solid #000",
            boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
          }}
        />
      </div>

      {/* Title */}
      <div
        style={{
          transform: `translateY(${interpolate(titleY, [0, 1], [40, 0])}px)`,
          opacity: titleOpacity,
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 72,
            color: "#FFFFFF",
            textShadow:
              "4px 4px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000",
            margin: 0,
            letterSpacing: 4,
          }}
        >
          KRYPTO PENGUS
        </h1>
      </div>

      {/* Tagline */}
      <div
        style={{
          opacity: taglineOpacity,
          transform: `translateY(${taglineY}px)`,
          marginTop: 16,
        }}
      >
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 28,
            color: "#2C5F75",
            fontWeight: 600,
            letterSpacing: 8,
            textTransform: "uppercase",
          }}
        >
          Never Give Up.
        </p>
      </div>
    </AbsoluteFill>
  );
};
