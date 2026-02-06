import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

interface StatItemProps {
  label: string;
  value: string;
  delay: number;
  frame: number;
  fps: number;
  color: string;
}

const StatItem: React.FC<StatItemProps> = ({
  label,
  value,
  delay,
  frame,
  fps,
  color,
}) => {
  const scale = spring({
    frame: frame - delay,
    fps,
    config: { damping: 12, stiffness: 80 },
  });

  const opacity = interpolate(frame, [delay, delay + 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity,
        transform: `scale(${scale})`,
        textAlign: "center",
        padding: "24px 32px",
        backgroundColor: "rgba(255,255,255,0.12)",
        borderRadius: 20,
        border: `3px solid ${color}`,
        backdropFilter: "blur(10px)",
        minWidth: 220,
      }}
    >
      <div
        style={{
          fontFamily: "'Press Start 2P', monospace",
          fontSize: 40,
          color,
          marginBottom: 12,
          textShadow: `0 0 20px ${color}40`,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 18,
          color: "#FFFFFF",
          fontWeight: 500,
          letterSpacing: 2,
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
    </div>
  );
};

const STATS = [
  { label: "Total Supply", value: "3,333", color: "#FF8533" },
  { label: "Mint Price", value: "10 SUI", color: "#5DD9C1" },
  { label: "Network", value: "SUI", color: "#FFD93D" },
  { label: "Storage", value: "WALRUS", color: "#FF6B9D" },
];

const TIERS = [
  { name: "Whitelist", amount: "1,000", price: "10 SUI", color: "#5DD9C1" },
  { name: "Early Public", amount: "1,000", price: "15 SUI", color: "#FF8533" },
  { name: "Final Public", amount: "1,000", price: "20 SUI", color: "#FFD93D" },
  { name: "Treasury", amount: "333", price: "Reserved", color: "#FF6B9D" },
];

export const Stats: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Title
  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const titleY = interpolate(frame, [0, 20], [-30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Background pulse
  const pulse = Math.sin(frame * 0.04) * 5;

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(${135 + pulse}deg, #1A5F7A, #2C5F75, #3D6B7D)`,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Animated background circles */}
      {[...Array(6)].map((_, i) => {
        const circleX = 20 + (i * 30) % 80;
        const circleY = 15 + (i * 25) % 70;
        const circleSize = 100 + i * 50;
        const circleFloat = Math.sin(frame * 0.02 + i * 1.5) * 20;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${circleX}%`,
              top: `${circleY}%`,
              width: circleSize,
              height: circleSize,
              borderRadius: "50%",
              background: `radial-gradient(circle, rgba(93,217,193,0.08), transparent 70%)`,
              transform: `translate(-50%, -50%) translateY(${circleFloat}px)`,
            }}
          />
        );
      })}

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: 50,
          width: "100%",
          textAlign: "center",
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
        }}
      >
        <h2
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 44,
            color: "#FFFFFF",
            textShadow: "3px 3px 0 rgba(0,0,0,0.3)",
            margin: 0,
          }}
        >
          MINT DETAILS
        </h2>
      </div>

      {/* Stats Row */}
      <div
        style={{
          position: "absolute",
          top: 160,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: 40,
        }}
      >
        {STATS.map((stat, i) => (
          <StatItem
            key={stat.label}
            {...stat}
            delay={15 + i * 10}
            frame={frame}
            fps={fps}
          />
        ))}
      </div>

      {/* Tier Breakdown */}
      <div
        style={{
          position: "absolute",
          bottom: 60,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: 30,
        }}
      >
        {TIERS.map((tier, i) => {
          const tierDelay = 60 + i * 12;
          const tierScale = spring({
            frame: frame - tierDelay,
            fps,
            config: { damping: 14, stiffness: 70 },
          });
          const tierOpacity = interpolate(
            frame,
            [tierDelay, tierDelay + 15],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );

          // Progress bar fill animation
          const fillWidth = interpolate(
            frame,
            [tierDelay + 15, tierDelay + 45],
            [0, 100],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );

          return (
            <div
              key={tier.name}
              style={{
                opacity: tierOpacity,
                transform: `scale(${tierScale})`,
                backgroundColor: "rgba(255,255,255,0.08)",
                borderRadius: 16,
                padding: "20px 28px",
                border: `2px solid ${tier.color}40`,
                minWidth: 200,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'Silkscreen', monospace",
                  fontSize: 16,
                  color: tier.color,
                  marginBottom: 8,
                  fontWeight: 700,
                }}
              >
                {tier.name}
              </div>
              <div
                style={{
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: 22,
                  color: "#FFFFFF",
                  marginBottom: 6,
                }}
              >
                {tier.amount}
              </div>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.7)",
                  marginBottom: 10,
                }}
              >
                {tier.price}
              </div>
              {/* Mini progress bar */}
              <div
                style={{
                  width: "100%",
                  height: 4,
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${fillWidth}%`,
                    height: "100%",
                    backgroundColor: tier.color,
                    borderRadius: 2,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
