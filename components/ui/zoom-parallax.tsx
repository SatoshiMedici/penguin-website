'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

interface Image {
  src: string;
  alt?: string;
}

interface ZoomParallaxProps {
  /** Array of images to be displayed in the parallax effect - supports up to 10 images */
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
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
  const scale10 = useTransform(scrollYProgress, [0, 1], [1, 10]);

  // Varied scales for depth - center image scales less, outer images scale more
  const scales = [scale4, scale6, scale5, scale7, scale5, scale8, scale6, scale9, scale7, scale10];

  // Positioning classes for each image - spread out to avoid overlapping
  const getPositionClass = (index: number) => {
    switch (index) {
      // Center image (main focus)
      case 0: return '[&>div]:!h-[28vh] [&>div]:!w-[28vw]';
      // Top row - spread across
      case 1: return '[&>div]:!-top-[32vh] [&>div]:!-left-[28vw] [&>div]:!h-[22vh] [&>div]:!w-[22vw]';
      case 2: return '[&>div]:!-top-[35vh] [&>div]:!left-[2vw] [&>div]:!h-[20vh] [&>div]:!w-[20vw]';
      case 3: return '[&>div]:!-top-[30vh] [&>div]:!left-[30vw] [&>div]:!h-[18vh] [&>div]:!w-[18vw]';
      // Middle row - left and right sides
      case 4: return '[&>div]:!top-[5vh] [&>div]:!-left-[38vw] [&>div]:!h-[20vh] [&>div]:!w-[20vw]';
      case 5: return '[&>div]:!top-[0vh] [&>div]:!left-[38vw] [&>div]:!h-[18vh] [&>div]:!w-[18vw]';
      // Bottom row - spread across
      case 6: return '[&>div]:!top-[32vh] [&>div]:!-left-[30vw] [&>div]:!h-[18vh] [&>div]:!w-[18vw]';
      case 7: return '[&>div]:!top-[35vh] [&>div]:!left-[0vw] [&>div]:!h-[16vh] [&>div]:!w-[16vw]';
      case 8: return '[&>div]:!top-[30vh] [&>div]:!left-[28vw] [&>div]:!h-[20vh] [&>div]:!w-[20vw]';
      // Extra corners
      case 9: return '[&>div]:!top-[38vh] [&>div]:!left-[40vw] [&>div]:!h-[14vh] [&>div]:!w-[14vw]';
      default: return '';
    }
  };

  return (
    <div ref={container} className={`relative h-[300vh] ${className || ''}`}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {images.map(({ src, alt }, index) => {
          const scale = scales[index % scales.length];

          return (
            <motion.div
              key={index}
              style={{ scale }}
              className={`absolute top-0 flex h-full w-full items-center justify-center ${getPositionClass(index)}`}
            >
              <div className="relative h-[25vh] w-[25vw]">
                <img
                  src={src || '/placeholder.svg'}
                  alt={alt || `Parallax image ${index + 1}`}
                  className="h-full w-full object-cover rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
