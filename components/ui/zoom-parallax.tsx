'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

interface Image {
  src: string;
  alt?: string;
}

interface ZoomParallaxProps {
  images: Image[];
  className?: string;
}

export function ZoomParallax({ images, className }: ZoomParallaxProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);

  // Image configurations: position, size, and scale
  const imageConfigs = [
    // Center - main focus (largest, slowest zoom)
    { top: '50%', left: '50%', w: '25vw', h: '25vw', scale: scale4, translate: '-50%, -50%' },
    // Top left
    { top: '20%', left: '15%', w: '18vw', h: '18vw', scale: scale6, translate: '-50%, -50%' },
    // Top right
    { top: '15%', left: '80%', w: '16vw', h: '16vw', scale: scale5, translate: '-50%, -50%' },
    // Middle left
    { top: '50%', left: '8%', w: '14vw', h: '14vw', scale: scale7, translate: '-50%, -50%' },
    // Middle right
    { top: '45%', left: '88%', w: '15vw', h: '15vw', scale: scale6, translate: '-50%, -50%' },
    // Bottom left
    { top: '80%', left: '20%', w: '16vw', h: '16vw', scale: scale8, translate: '-50%, -50%' },
    // Bottom right
    { top: '85%', left: '75%', w: '14vw', h: '14vw', scale: scale7, translate: '-50%, -50%' },
    // Top center
    { top: '8%', left: '45%', w: '12vw', h: '12vw', scale: scale8, translate: '-50%, -50%' },
    // Bottom center
    { top: '88%', left: '50%', w: '13vw', h: '13vw', scale: scale6, translate: '-50%, -50%' },
    // Far left middle-bottom
    { top: '70%', left: '5%', w: '11vw', h: '11vw', scale: scale8, translate: '-50%, -50%' },
  ];

  return (
    <div ref={container} className={`relative h-[300vh] ${className || ''}`}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {images.slice(0, 10).map(({ src, alt }, index) => {
          const config = imageConfigs[index];
          if (!config) return null;

          return (
            <motion.div
              key={index}
              style={{
                scale: config.scale,
                position: 'absolute',
                top: config.top,
                left: config.left,
                transform: `translate(${config.translate})`,
              }}
              className="flex items-center justify-center"
            >
              <div
                style={{
                  width: config.w,
                  height: config.h,
                }}
              >
                <img
                  src={src || '/placeholder.svg'}
                  alt={alt || `Penguin NFT ${index + 1}`}
                  className="h-full w-full object-cover rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
