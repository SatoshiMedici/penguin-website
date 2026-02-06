import React from "react";
import {
  AbsoluteFill,
  Audio,
  interpolate,
  spring,
  staticFile,
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
    config: { damping: 16, stiffness: 50, mass: 1 },
  });

  const opacity = interpolate(frame, [delay, delay + 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity,
        transform: `scale(${scale})`,
        textAlign: "center",
        padding: "28px 36px",
        backgroundColor: "rgba(255,255,255,0.1)",
        borderRadius: 20,
        border: `3px solid ${color}`,
        width: 220,
      }}
    >
      <div
        style={{
          fontFamily: "'Press Start 2P', monospace",
          fontSize: 36,
          color,
          marginBottom: 14,
          textShadow: `0 0 20px ${color}40`,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 16,
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

  // Scene fade
  const sceneFade = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Title (slower)
  const titleOpacity = interpolate(frame, [5, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const titleY = interpolate(frame, [5, 40], [-25, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const pulse = Math.sin(frame * 0.025) * 4;

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(${135 + pulse}deg, #1A5F7A, #2C5F75, #3D6B7D)`,
        overflow: "hidden",
        opacity: sceneFade,
      }}
    >
      {/* Whoosh on entry */}
      <Audio src={staticFile("audio/whoosh.wav")} startFrom={0} volume={0.2} />

      {/* Background glow circles */}
      {[...Array(5)].map((_, i) => {
        const cx = 15 + i * 20;
        const cy = 30 + (i % 3) * 20;
        const size = 120 + i * 40;
        const drift = Math.sin(frame * 0.015 + i * 1.2) * 15;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${cx}%`,
              top: `${cy}%`,
              width: size,
              height: size,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(93,217,193,0.07), transparent 70%)",
              transform: `translate(-50%, -50%) translateY(${drift}px)`,
            }}
          />
        );
      })}

      {/* Title - fixed at top */}
      <div
        style={{
          position: "absolute",
          top: 60,
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
            fontSize: 44,
            color: "#FFFFFF",
            textShadow: "3px 3px 0 rgba(0,0,0,0.3)",
            margin: 0,
          }}
        >
          MINT DETAILS
        </h2>
      </div>

      {/* Stats Row - vertically centered at ~35% from top */}
      <div
        style={{
          position: "absolute",
          top: 200,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          gap: 40,
        }}
      >
        {STATS.map((stat, i) => (
          <StatItem
            key={stat.label}
            {...stat}
            delay={30 + i * 15}
            frame={frame}
            fps={fps}
          />
        ))}
      </div>

      {/* Divider line */}
      <div
        style={{
          position: "absolute",
          top: 440,
          left: "10%",
          right: "10%",
          height: 1,
          backgroundColor: "rgba(255,255,255,0.1)",
        }}
      />

      {/* Tier label */}
      <div
        style={{
          position: "absolute",
          top: 470,
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: interpolate(frame, [90, 120], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 18,
            color: "rgba(255,255,255,0.5)",
            letterSpacing: 4,
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Mint Tiers
        </p>
      </div>

      {/* Tier Breakdown - positioned below stats with clear gap */}
      <div
        style={{
          position: "absolute",
          top: 520,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          gap: 30,
        }}
      >
        {TIERS.map((tier, i) => {
          const tierDelay = 100 + i * 18;
          const tierScale = spring({
            frame: frame - tierDelay,
            fps,
            config: { damping: 18, stiffness: 45, mass: 1 },
          });
          const tierOpacity = interpolate(
            frame,
            [tierDelay, tierDelay + 25],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );

          const fillWidth = interpolate(
            frame,
            [tierDelay + 25, tierDelay + 70],
            [0, 100],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );

          return (
            <div
              key={tier.name}
              style={{
                opacity: tierOpacity,
                transform: `scale(${tierScale})`,
                backgroundColor: "rgba(255,255,255,0.06)",
                borderRadius: 16,
                padding: "22px 28px",
                border: `2px solid ${tier.color}30`,
                width: 210,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'Silkscreen', monospace",
                  fontSize: 15,
                  color: tier.color,
                  marginBottom: 10,
                  fontWeight: 700,
                }}
              >
                {tier.name}
              </div>
              <div
                style={{
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: 20,
                  color: "#FFFFFF",
                  marginBottom: 8,
                }}
              >
                {tier.amount}
              </div>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.6)",
                  marginBottom: 12,
                }}
              >
                {tier.price}
              </div>
              <div
                style={{
                  width: "100%",
                  height: 4,
                  backgroundColor: "rgba(255,255,255,0.08)",
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

      {/* Total revenue at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 60,
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: interpolate(frame, [180, 210], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 16,
            color: "rgba(255,255,255,0.4)",
            margin: 0,
          }}
        >
          Total Revenue Target: 45,000 SUI &bull; Instant Reveal
        </p>
      </div>
    </AbsoluteFill>
  );
};
