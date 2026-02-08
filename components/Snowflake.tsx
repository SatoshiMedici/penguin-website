// Snowflake component for reusable snow particles
const Snowflake = ({ style, size, parallaxMultiplier, smoothMouse }: {
  style: React.CSSProperties;
  size: number;
  parallaxMultiplier: number;
  smoothMouse: { x: number; y: number };
}) => (
  <div
    className="absolute rounded-full bg-white/70 shadow-sm shadow-white/50"
    style={{
      ...style,
      width: size,
      height: size,
      transform: `translate(${smoothMouse.x * parallaxMultiplier}px, ${smoothMouse.y * parallaxMultiplier}px)`,
    }}
  />
);

export default Snowflake;
