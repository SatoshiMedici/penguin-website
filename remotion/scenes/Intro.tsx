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

export const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Background gradient - slow rotation
  const bgShift = interpolate(frame, [0, 240], [0, 20], {
    extrapolateRight: "clamp",
  });

  // Scene fade-in
  const sceneFade = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Hero penguin entrance (delayed, gentle spring)
  const penguinScale = spring({
    frame: frame - 20,
    fps,
    config: { damping: 18, stiffness: 40, mass: 1.2 },
  });
  const penguinOpacity = interpolate(frame, [20, 50], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const breathe = Math.sin(frame * 0.03) * 3;

  // Title entrance (slower)
  const titleOpacity = interpolate(frame, [60, 100], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const titleY = spring({
    frame: frame - 60,
    fps,
    config: { damping: 20, stiffness: 30 },
  });

  // Tagline entrance (even later)
  const taglineOpacity = interpolate(frame, [110, 150], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const taglineY = interpolate(frame, [110, 150], [25, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Stats bar at bottom
  const statsOpacity = interpolate(frame, [160, 200], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Snowflakes - gentler, fewer
  const snowflakes = Array.from({ length: 15 }, (_, i) => ({
    x: (i * 137.5 + 10) % 100,
    delay: i * 6,
    size: 3 + (i % 3) * 2,
  }));

  // Pixel squares - positioned to avoid content area
  const pixelSquares = [
    { x: 6, y: 12, color: "#FF8533", delay: 15 },
    { x: 92, y: 15, color: "#5DD9C1", delay: 25 },
    { x: 4, y: 80, color: "#FFFFFF", delay: 35 },
    { x: 94, y: 82, color: "#FF8533", delay: 20 },
    { x: 8, y: 50, color: "#FFD93D", delay: 30 },
    { x: 91, y: 48, color: "#FF6B9D", delay: 40 },
  ];

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(${160 + bgShift}deg, #87CEEB, #6ECFCF, #5DD9C1)`,
        overflow: "hidden",
        opacity: sceneFade,
      }}
    >
      {/* Chime on scene start */}
      <Audio src={staticFile("audio/chime.wav")} startFrom={0} volume={0.3} />

      {/* Snowflakes */}
      {snowflakes.map((flake, i) => {
        const flakeY = interpolate(
          frame,
          [flake.delay, flake.delay + 400],
          [-5, 105],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        );
        const flakeX = flake.x + Math.sin(frame * 0.012 + i) * 4;
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
              backgroundColor: "rgba(255, 255, 255, 0.6)",
              filter: "blur(0.5px)",
            }}
          />
        );
      })}

      {/* Floating pixel squares - far edges only */}
      {pixelSquares.map((sq, i) => {
        const sqScale = spring({
          frame: frame - sq.delay,
          fps,
          config: { damping: 14, stiffness: 50 },
        });
        const sqFloat = Math.sin(frame * 0.02 + i * 2) * 6;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${sq.x}%`,
              top: `${sq.y}%`,
              width: 14,
              height: 14,
              backgroundColor: sq.color,
              border: "2px solid #000",
              transform: `scale(${sqScale}) rotate(${frame * 0.3 + i * 45}deg) translateY(${sqFloat}px)`,
              boxShadow: `0 0 10px ${sq.color}50`,
            }}
          />
        );
      })}

      {/* Mountain silhouettes */}
      <svg
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "25%",
        }}
        viewBox="0 0 1920 300"
        preserveAspectRatio="none"
      >
        <polygon
          points="0,300 200,100 400,190 600,70 800,160 1000,50 1200,130 1400,80 1600,170 1800,60 1920,140 1920,300"
          fill="#3D6B7D"
          opacity={0.35}
        />
        <polygon
          points="0,300 150,160 350,210 550,140 750,210 950,120 1150,190 1350,150 1550,220 1750,110 1920,190 1920,300"
          fill="#4A90A4"
          opacity={0.45}
        />
      </svg>

      {/* Center content - explicit positioning */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Hero penguin */}
        <div
          style={{
            opacity: penguinOpacity,
            transform: `scale(${penguinScale}) translateY(${breathe}px)`,
          }}
        >
          <Img
            src={staticFile("hero-penguin.png")}
            style={{
              width: 300,
              height: 300,
              borderRadius: 24,
              border: "4px solid #000",
              boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
            }}
          />
        </div>

        {/* Title */}
        <div
          style={{
            marginTop: 30,
            opacity: titleOpacity,
            transform: `translateY(${interpolate(titleY, [0, 1], [30, 0])}px)`,
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: 68,
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
            marginTop: 20,
            opacity: taglineOpacity,
            transform: `translateY(${taglineY}px)`,
          }}
        >
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 30,
              color: "#2C5F75",
              fontWeight: 600,
              letterSpacing: 10,
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            Never Give Up.
          </p>
        </div>
      </div>

      {/* Stats bar at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 80,
          width: "100%",
          textAlign: "center",
          opacity: statsOpacity,
        }}
      >
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 18,
            color: "#2C5F75",
            fontWeight: 500,
            letterSpacing: 3,
            margin: 0,
          }}
        >
          3,333 unique penguins &bull; Sui Network &bull; Walrus Storage
        </p>
      </div>
    </AbsoluteFill>
  );
};
