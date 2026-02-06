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

export const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Background animation
  const bgShift = interpolate(frame, [0, 120], [0, 20], {
    extrapolateRight: "clamp",
  });

  // Logo pop-in
  const logoScale = spring({
    frame: frame - 5,
    fps,
    config: { damping: 10, stiffness: 100, mass: 0.6 },
  });

  // CTA entrance
  const ctaOpacity = interpolate(frame, [30, 50], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const ctaY = interpolate(frame, [30, 50], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Mint button pulse
  const buttonPulse = interpolate(
    frame,
    [55, 65, 75, 85, 95, 105, 115],
    [1, 1.05, 1, 1.05, 1, 1.05, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Social links entrance
  const socialsOpacity = interpolate(frame, [60, 80], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const socialsY = interpolate(frame, [60, 80], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Glow effect behind penguin
  const glowSize = interpolate(frame, [0, 60], [200, 260], {
    extrapolateRight: "clamp",
  });
  const glowOpacity = 0.15 + Math.sin(frame * 0.05) * 0.05;

  // Floating particles
  const particles = Array.from({ length: 15 }, (_, i) => ({
    x: (i * 137.5 + 20) % 100,
    y: (i * 89.3 + 10) % 100,
    size: 3 + (i % 3) * 2,
    speed: 0.02 + (i % 4) * 0.01,
    color: i % 3 === 0 ? "#FF8533" : i % 3 === 1 ? "#5DD9C1" : "#FFD93D",
  }));

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(${150 + bgShift}deg, #1A5F7A, #2C5F75, #4A90A4)`,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Floating particles */}
      {particles.map((p, i) => {
        const pFloat = Math.sin(frame * p.speed + i * 2) * 15;
        const pOpacity = 0.3 + Math.sin(frame * 0.03 + i) * 0.2;
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

      {/* Glow circle behind penguin */}
      <div
        style={{
          position: "absolute",
          width: glowSize,
          height: glowSize,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(93,217,193,0.2), transparent 70%)",
          opacity: glowOpacity,
        }}
      />

      {/* Penguin image */}
      <div
        style={{
          transform: `scale(${logoScale})`,
          marginBottom: 24,
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
          transform: `scale(${logoScale})`,
          textAlign: "center",
          marginBottom: 8,
        }}
      >
        <h2
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 52,
            color: "#FFFFFF",
            textShadow:
              "3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000",
            margin: 0,
          }}
        >
          KRYPTO PENGUS
        </h2>
      </div>

      {/* CTA Section */}
      <div
        style={{
          opacity: ctaOpacity,
          transform: `translateY(${ctaY}px)`,
          textAlign: "center",
          marginTop: 16,
        }}
      >
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 24,
            color: "rgba(255,255,255,0.9)",
            marginBottom: 24,
            fontWeight: 500,
          }}
        >
          Join the march. Mint your penguin today.
        </p>

        {/* Mint Now Button */}
        <div
          style={{
            display: "inline-block",
            transform: `scale(${buttonPulse})`,
          }}
        >
          <div
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: 24,
              color: "#FFFFFF",
              backgroundColor: "#FF8533",
              padding: "18px 60px",
              borderRadius: 12,
              border: "4px solid #000",
              boxShadow:
                "0 6px 0 #CC6A29, 0 8px 30px rgba(255,133,51,0.4)",
              letterSpacing: 2,
            }}
          >
            MINT NOW
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div
        style={{
          position: "absolute",
          bottom: 60,
          display: "flex",
          gap: 40,
          opacity: socialsOpacity,
          transform: `translateY(${socialsY}px)`,
          alignItems: "center",
        }}
      >
        {["discord", "x", "instagram"].map((social, i) => {
          const iconFloat = Math.sin(frame * 0.04 + i * 2) * 4;
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
                  backgroundColor: "rgba(255,255,255,0.15)",
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid rgba(255,255,255,0.2)",
                }}
              >
                <Img
                  src={staticFile(`social/${social}.svg`)}
                  style={{
                    width: 28,
                    height: 28,
                    filter: "brightness(0) invert(1)",
                  }}
                />
              </div>
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 12,
                  color: "rgba(255,255,255,0.6)",
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
          bottom: 20,
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 12,
          color: "rgba(255,255,255,0.3)",
        }}
      >
        &copy; 2026 Krypto Pengus &bull; Sui Network
      </div>
    </AbsoluteFill>
  );
};
