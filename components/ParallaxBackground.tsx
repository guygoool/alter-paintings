'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useParallax } from '@/hooks/useParallax';
import { ParallaxOptions } from '@/types';

interface ParallaxBackgroundProps extends ParallaxOptions {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function ParallaxBackground({
  children,
  className = '',
  style = {},
  speed = 0.5,
  direction = 'up',
  disabled = false,
}: ParallaxBackgroundProps) {
  const { ref, y, opacity } = useParallax({ speed, direction, disabled });

  return (
    <div ref={ref} className={`parallax-container ${className}`} style={style}>
      <motion.div
        style={{ y, opacity }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}

interface ParallaxElementProps extends ParallaxOptions {
  children: ReactNode;
  className?: string;
}

export function ParallaxElement({
  children,
  className = '',
  speed = 0.3,
  direction = 'up',
  disabled = false,
}: ParallaxElementProps) {
  const { ref, y } = useParallax({ speed, direction, disabled });

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`parallax-element will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxLayerProps {
  speed: number;
  className?: string;
  children: ReactNode;
}

export function ParallaxLayer({ speed, className = '', children }: ParallaxLayerProps) {
  const { ref, y } = useParallax({ speed });

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`absolute inset-0 will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}

// Pre-built decorative parallax elements
export function ParallaxDecorations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <ParallaxLayer speed={0.2} className="opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-museum-gold/30 rounded-full blur-3xl" />
        <div className="absolute top-60 right-20 w-40 h-40 bg-artist-sage/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-1/3 w-48 h-48 bg-museum-bronze/20 rounded-full blur-3xl" />
      </ParallaxLayer>
      
      <ParallaxLayer speed={0.4} className="opacity-10">
        <div className="absolute top-40 right-1/4 w-24 h-24 bg-artist-blue-green/40 rounded-full blur-2xl" />
        <div className="absolute bottom-60 left-20 w-36 h-36 bg-artist-warm-gray/30 rounded-full blur-2xl" />
      </ParallaxLayer>
      
      <ParallaxLayer speed={0.6} className="opacity-5">
        <div className="absolute top-80 left-1/2 w-20 h-20 bg-museum-gold/50 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-artist-earth/40 rounded-full blur-xl" />
      </ParallaxLayer>
    </div>
  );
}

export default ParallaxBackground;