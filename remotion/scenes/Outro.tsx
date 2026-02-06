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

export const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Background slow shift
  const bgShift = interpolate(frame, [0, 240], [0, 15], {
    extrapolateRight: "clamp",
  });

  // Scene fade
  const sceneFade = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Penguin entrance (gentle)
  const penguinScale = spring({
    frame: frame - 10,
    fps,
    config: { damping: 18, stiffness: 40, mass: 1 },
  });
  const penguinOpacity = interpolate(frame, [10, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Title entrance
  const titleOpacity = interpolate(frame, [40, 70], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const titleScale = spring({
    frame: frame - 40,
    fps,
    config: { damping: 18, stiffness: 40 },
  });

  // CTA text
  const ctaOpacity = interpolate(frame, [80, 110], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const ctaY = interpolate(frame, [80, 110], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Mint button
  const buttonOpacity = interpolate(frame, [110, 140], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const buttonScale = spring({
    frame: frame - 110,
    fps,
    config: { damping: 12, stiffness: 60 },
  });
  // Gentle pulse after appearing
  const buttonPulse =
    frame > 160
      ? 1 + Math.sin((frame - 160) * 0.06) * 0.03
      : 1;

  // Social links
  const socialsOpacity = interpolate(frame, [150, 180], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const socialsY = interpolate(frame, [150, 180], [15, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Glow behind penguin
  const glowPulse = 0.15 + Math.sin(frame * 0.03) * 0.05;

  // Particles
  const particles = Array.from({ length: 12 }, (_, i) => ({
    x: (i * 137.5 + 25) % 100,
    y: (i * 89.3 + 15) % 100,
    size: 3 + (i % 3) * 2,
    speed: 0.015 + (i % 4) * 0.008,
    color: i % 3 === 0 ? "#FF8533" : i % 3 === 1 ? "#5DD9C1" : "#FFD93D",
  }));

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(${150 + bgShift}deg, #1A5F7A, #2C5F75, #4A90A4)`,
        overflow: "hidden",
        opacity: sceneFade,
      }}
    >
      {/* Chime + whoosh */}
      <Audio src={staticFile("audio/whoosh.wav")} startFrom={0} volume={0.2} />
      <Audio src={staticFile("audio/chime.wav")} startFrom={Math.floor(fps * 0.3)} volume={0.25} />

      {/* Particles */}
      {particles.map((p, i) => {
        const pFloat = Math.sin(frame * p.speed + i * 2) * 12;
        const pOpacity = 0.25 + Math.sin(frame * 0.025 + i) * 0.15;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              borderRadius: p.size > 4 ? 2 : "50%",
              opacity: pOpacity,
              transform: `translateY(${pFloat}px)`,
            }}
          />
        );
      })}

      {/* Center content */}
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
        {/* Glow circle */}
        <div
          style={{
            position: "absolute",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(93,217,193,0.2), transparent 70%)",
            opacity: glowPulse,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -60%)",
          }}
        />

        {/* Penguin */}
        <div
          style={{
            opacity: penguinOpacity,
            transform: `scale(${penguinScale})`,
          }}
        >
          <Img
            src={staticFile("hero-penguin.png")}
            style={{
              width: 200,
              height: 200,
              borderRadius: 20,
              border: "4px solid #000",
              boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
            }}
          />
        </div>

        {/* Title */}
        <div
          style={{
            marginTop: 24,
            opacity: titleOpacity,
            transform: `scale(${titleScale})`,
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: 50,
              color: "#FFFFFF",
              textShadow:
                "3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000",
              margin: 0,
            }}
          >
            KRYPTO PENGUS
          </h2>
        </div>

        {/* CTA text */}
        <div
          style={{
            marginTop: 20,
            opacity: ctaOpacity,
            transform: `translateY(${ctaY}px)`,
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 24,
              color: "rgba(255,255,255,0.85)",
              fontWeight: 500,
              margin: 0,
            }}
          >
            Join the march. Mint your penguin today.
          </p>
        </div>

        {/* Mint button */}
        <div
          style={{
            marginTop: 30,
            opacity: buttonOpacity,
            transform: `scale(${buttonScale * buttonPulse})`,
          }}
        >
          <div
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: 22,
              color: "#FFFFFF",
              backgroundColor: "#FF8533",
              padding: "18px 56px",
              borderRadius: 12,
              border: "4px solid #000",
              boxShadow: "0 6px 0 #CC6A29, 0 8px 30px rgba(255,133,51,0.4)",
              letterSpacing: 2,
            }}
          >
            MINT NOW
          </div>
        </div>
      </div>

      {/* Social links - absolute bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 70,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          gap: 44,
          opacity: socialsOpacity,
          transform: `translateY(${socialsY}px)`,
        }}
      >
        {["discord", "x", "instagram"].map((social, i) => {
          const iconFloat = Math.sin(frame * 0.03 + i * 2) * 3;
          return (
            <div
              key={social}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                transform: `translateY(${iconFloat}px)`,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  backgroundColor: "rgba(255,255,255,0.12)",
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid rgba(255,255,255,0.15)",
                }}
              >
                <Img
                  src={staticFile(`social/${social}.svg`)}
                  style={{
                    width: 26,
                    height: 26,
                    filter: "brightness(0) invert(1)",
                  }}
                />
              </div>
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 11,
                  color: "rgba(255,255,255,0.5)",
                  textTransform: "capitalize",
                }}
              >
                {social}
              </span>
            </div>
          );
        })}
      </div>

      {/* Copyright */}
      <div
        style={{
          position: "absolute",
          bottom: 24,
          left: 0,
          right: 0,
          textAlign: "center",
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 12,
          color: "rgba(255,255,255,0.25)",
        }}
      >
        &copy; 2026 Krypto Pengus &bull; Sui Network
      </div>
    </AbsoluteFill>
  );
};
