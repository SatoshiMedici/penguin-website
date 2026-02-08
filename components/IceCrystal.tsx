// Ice Crystal component
const IceCrystal = ({ className, parallaxMultiplier, smoothMouse, opacity = 0.3 }: {
  className: string;
  parallaxMultiplier: number;
  smoothMouse: { x: number; y: number };
  opacity?: number;
}) => (
  <svg
    className={`absolute ${className}`}
    viewBox="0 0 40 60"
    style={{
      transform: `translate(${smoothMouse.x * parallaxMultiplier}px, ${smoothMouse.y * parallaxMultiplier}px)`,
      opacity
    }}
  >
    <polygon fill="#FFFFFF" points="20,0 30,20 25,60 15,60 10,20" />
    <polygon fill="#E8F4F8" points="20,0 10,20 15,60 20,30" />
  </svg>
);

export default IceCrystal;
