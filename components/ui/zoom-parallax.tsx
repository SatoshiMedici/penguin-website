"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ZoomParallaxProps {
  children?: React.ReactNode;
  className?: string;
  baseScale?: number;
  targetScale?: number;
}

export function ZoomParallax({
  children,
  className,
  baseScale = 1,
  targetScale = 1.5,
}: ZoomParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [baseScale, targetScale]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

  return (
    <div ref={containerRef} className={cn("relative h-[150vh]", className)}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ scale, opacity }}
          className="h-full w-full origin-center"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}

interface ZoomParallaxLayerProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  scale?: [number, number];
  opacity?: [number, number, number];
}

export function ZoomParallaxLayer({
  children,
  className,
  speed = 1,
  scale: scaleRange = [1, 1.2],
  opacity: opacityRange = [1, 1, 0.5],
}: ZoomParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleRange);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], opacityRange);

  return (
    <motion.div
      ref={ref}
      style={{ y, scale, opacity }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}

interface ZoomParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  speed?: number;
  zoomAmount?: number;
}

export function ZoomParallaxImage({
  src,
  alt,
  className,
  containerClassName,
  speed = 0.5,
  zoomAmount = 0.2,
}: ZoomParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-speed * 50, speed * 50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1 + zoomAmount, 1]);

  return (
    <div ref={ref} className={cn("overflow-hidden", containerClassName)}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale }}
        className={cn("w-full h-full object-cover will-change-transform", className)}
      />
    </div>
  );
}

// Gallery variant with multiple zoom layers
interface ZoomParallaxGalleryProps {
  images: { src: string; alt: string; scale?: number }[];
  className?: string;
}

export function ZoomParallaxGallery({
  images,
  className,
}: ZoomParallaxGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className={cn("relative h-[300vh]", className)}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {images.map((image, index) => {
          const baseScale = 1 + index * 0.5;
          const targetScale = baseScale + (image.scale || 0.5);

          return (
            <ZoomParallaxGalleryImage
              key={index}
              src={image.src}
              alt={image.alt}
              scrollProgress={scrollYProgress}
              baseScale={baseScale}
              targetScale={targetScale}
              index={index}
              total={images.length}
            />
          );
        })}
      </div>
    </div>
  );
}

function ZoomParallaxGalleryImage({
  src,
  alt,
  scrollProgress,
  baseScale,
  targetScale,
  index,
  total,
}: {
  src: string;
  alt: string;
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  baseScale: number;
  targetScale: number;
  index: number;
  total: number;
}) {
  const scale = useTransform(scrollProgress, [0, 1], [baseScale, targetScale]);
  const opacity = useTransform(
    scrollProgress,
    [0, 0.3, 0.6, 1],
    index === 0 ? [1, 1, 1, 0] : [0, 1, 1, index === total - 1 ? 1 : 0]
  );

  return (
    <motion.div
      style={{ scale, opacity }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <img
        src={src}
        alt={alt}
        className="w-1/2 h-auto rounded-xl shadow-2xl object-cover"
      />
    </motion.div>
  );
}
