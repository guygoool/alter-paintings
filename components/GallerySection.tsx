'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useMemo, useEffect, useState } from 'react';
import { Painting } from '@/types';
import PaintingFrame from './PaintingFrame';
import { ParallaxBackground, ParallaxDecorations } from './ParallaxBackground';

interface GallerySectionProps {
  paintings: Painting[];
  onSelectPainting: (painting: Painting) => void;
}

// Optimized animation variants for better performance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04, // Reduced from 0.08 for faster reveal
      delayChildren: 0.1,    // Reduced from 0.2
      duration: 0.4,         // Reduced from 0.6
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,              // Reduced from 80 for subtler movement
    scale: 0.98,        // Reduced from 0.95 for subtler scaling
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      damping: 30,      // Increased for faster settling
      stiffness: 100,   // Reduced for smoother motion
      restDelta: 0.001, // Added for better performance
      duration: 0.5,    // Reduced from 0.8
    },
  },
};


const statisticVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      damping: 15,
      stiffness: 200,
    },
  },
};

export default function GallerySection({ paintings, onSelectPainting }: GallerySectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [viewportConfig, setViewportConfig] = useState<{ once: boolean; margin?: string; amount?: number }>({ once: true, margin: '-200px' });

  // Detect mobile and configure viewport settings
  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent);
    const isAndroid = /Android/i.test(userAgent);
    const isMobile = window.innerWidth < 768;
    
    if (isIOS || isAndroid || isMobile) {
      // Use optimized settings for mobile devices
      setViewportConfig({ 
        once: true, 
        margin: '100px',  // Less aggressive than before
        amount: 0.1       // Higher threshold for better user experience
      });
    } else {
      // Keep original settings for desktop
      setViewportConfig({ once: true, margin: '-200px' });
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Smooth spring physics for parallax
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const backgroundY = useTransform(smoothProgress, [0, 1], ['0%', '40%']);
  const backgroundScale = useTransform(smoothProgress, [0, 1], [1, 1.1]);
  const backgroundOpacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0.3, 0.5, 0.5, 0.2]);


  // Sophisticated layout patterns for visual rhythm
  const getLayoutPattern = useMemo(() => {
    const patterns = [
      { layout: 'center' as const, size: 'large' as const, featured: true },
      { layout: 'left' as const, size: 'medium' as const, featured: false },
      { layout: 'right' as const, size: 'medium' as const, featured: false },
      { layout: 'center' as const, size: 'small' as const, featured: false },
      { layout: 'right' as const, size: 'large' as const, featured: true },
      { layout: 'left' as const, size: 'small' as const, featured: false },
      { layout: 'center' as const, size: 'medium' as const, featured: false },
      { layout: 'left' as const, size: 'large' as const, featured: true },
    ];
    
    return (index: number) => patterns[index % patterns.length];
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gallery-50 paper-bg overflow-hidden mt-[140px]">
      {/* Advanced Parallax Background */}
      <motion.div
        style={{ 
          y: backgroundY, 
          scale: backgroundScale,
          opacity: backgroundOpacity,
        }}
        className="absolute inset-0 -z-10"
      >
        <ParallaxBackground speed={0.2} className="absolute inset-0">
          <div className="bg-gradient-museum opacity-40" />
        </ParallaxBackground>
        
        <ParallaxDecorations />
        
        {/* Optimized floating elements with reduced animation frequency */}
        <motion.div
          animate={{ 
            x: [0, 20, 0],     // Reduced movement range
            y: [0, -10, 0],    // Reduced movement range
            rotate: [0, 2, 0], // Reduced rotation
          }}
          transition={{ 
            duration: 30,      // Increased duration for slower, more subtle movement
            repeat: Infinity,
            ease: "easeInOut",
            restDelta: 0.01,   // Added for performance
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-museum-gold/3 rounded-full blur-2xl will-change-transform"
        />
        
        <motion.div
          animate={{ 
            x: [0, -25, 0],    // Reduced movement range
            y: [0, 15, 0],     // Reduced movement range
            rotate: [0, -1.5, 0], // Reduced rotation
          }}
          transition={{ 
            duration: 35,      // Increased duration
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8,
            restDelta: 0.01,   // Added for performance
          }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-artist-sage/3 rounded-full blur-2xl will-change-transform"
        />
      </motion.div>

      <div className="relative z-10">

        {/* Sophisticated Paintings Grid with Staggered Animations */}
        <div>
            <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-24 md:space-y-32 lg:space-y-40 mt-[200px]"
            >
            {paintings.map((painting, index) => {
              const { layout, size, featured } = getLayoutPattern(index);
              
              return (
                <motion.div
                  key={painting.id}
                  variants={itemVariants}
                  className="relative gpu-accelerated px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-[100px]"
                  custom={index}
                >
                  {/* Enhanced background decoration for featured paintings */}
                  {featured && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="absolute inset-0 -z-10 transform -translate-x-8 -translate-y-8 translate-x-8 translate-y-8"
                  >
                    <div className="absolute inset-0 bg-gradient-radial from-museum-gold/10 via-museum-bronze/5 to-transparent rounded-3xl blur-xl" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-museum-gold/30 to-transparent" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-full bg-gradient-to-b from-transparent via-museum-gold/30 to-transparent" />
                  </motion.div>
                  )}

                  <PaintingFrame
                  painting={painting}
                  layout={layout}
                  size={size}
                  index={index}
                  onSelect={onSelectPainting}
                  />

                  {/* Elegant section dividers */}
                  {index < paintings.length - 1 && (index + 1) % 8 === 0 && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex justify-center mt-24 lg:mt-32"
                  >
                    <div className="flex items-center space-x-6">
                    <motion.div 
                      className="w-20 h-px bg-gradient-to-r from-transparent via-museum-bronze to-transparent"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                    />
                    <motion.div 
                      className="w-4 h-4 bg-museum-gold rounded-full shadow-inner-glow"
                      initial={{ scale: 0, rotate: 0 }}
                      whileInView={{ scale: 1, rotate: 360 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                    />
                    <motion.div 
                      className="w-32 h-px bg-gradient-to-r from-transparent via-museum-bronze to-transparent"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 0.8 }}
                    />
                    <motion.div 
                      className="w-4 h-4 bg-museum-gold rounded-full shadow-inner-glow"
                      initial={{ scale: 0, rotate: 0 }}
                      whileInView={{ scale: 1, rotate: -360 }}
                      transition={{ duration: 0.6, delay: 1.1 }}
                    />
                    <motion.div 
                      className="w-20 h-px bg-gradient-to-r from-transparent via-museum-bronze to-transparent"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 1 }}
                    />
                    </div>
                  </motion.div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Enhanced Collection Summary with Glass Morphism */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className=""
        >
          <div className="relative overflow-hidden rounded-2xl">
            {/* Glass morphism background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gallery-100/80 via-museum-parchment/70 to-gallery-200/80 backdrop-blur-xl border border-gallery-300/30" />
            <div className="absolute inset-0 bg-gradient-shimmer opacity-20 animate-shimmer" />
            
            <div className="relative z-10 p-12 lg:p-16 text-center">
              <motion.h3 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="gallery-title text-3xl md:text-5xl lg:text-6xl mb-8 bg-gradient-to-r from-artist-brown via-artist-brown-light to-artist-brown bg-clip-text text-transparent"
              >
                A Legacy Preserved
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="gallery-body text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-12"
              >
                Through these fifty paintings, Alter Metzger&apos;s artistic journey serves as a 
                testament to the power of creativity to heal, preserve memory, and transform 
                trauma into beauty. His work reminds us that art can emerge from the deepest 
                suffering and serve as a bridge between past and present.
              </motion.p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 max-w-4xl mx-auto">
                {[
                  { number: '50', label: 'Paintings' },
                  { number: '30', label: 'Years' },
                  { number: '1949', label: 'First Work' },
                  { number: '1979', label: 'Final Work' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={statisticVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center group"
                  >
                    <motion.div 
                      className="text-4xl md:text-5xl font-crimson font-bold text-artist-brown mb-2 group-hover:text-museum-gold transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm md:text-base text-artist-warm-gray uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}