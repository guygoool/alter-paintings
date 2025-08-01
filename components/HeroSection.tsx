'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Painting } from '@/types';
import { usePaintingRotation } from '@/hooks/usePaintingRotation';
import { ParallaxBackground, ParallaxDecorations } from './ParallaxBackground';

interface HeroSectionProps {
  featuredPaintings: Painting[];
  onScrollToGallery: () => void;
}

// Animation configurations
const baseDelay = 0.1;

export default function HeroSection({ featuredPaintings, onScrollToGallery }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Detect mobile devices to use more subtle animations
  useEffect(() => {
    const checkIsMobile = () => {
      const isMobileScreen = window.innerWidth < 768;
      const isAndroid = /Android/i.test(navigator.userAgent);
      // Use more conservative animations on mobile, especially Android
      setIsMobile(isMobileScreen || isAndroid);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const {
    currentPainting,
    handleMouseEnter,
    handleMouseLeave,
  } = usePaintingRotation({
    paintings: featuredPaintings,
    autoRotate: true,
    rotationInterval: 5000,
    pauseOnHover: true,
  });

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gallery-50 paper-bg overflow-visible">
      {/* Parallax Background with Decorations */}
      <ParallaxBackground speed={0.3} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gallery-100 via-gallery-50 to-museum-parchment" />
        <ParallaxDecorations />
      </ParallaxBackground>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen flex items-center pt-safe-top">
          <div className="grid lg:grid-cols-12 gap-12 items-center w-full">
            
            {/* Left Column - Text Content */}
            <motion.div 
              style={{ opacity }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="space-y-6">
                <motion.h1 
                  initial={{ 
                    opacity: isMobile ? 0.3 : 0,  // Start more visible on mobile
                    y: isMobile ? 2 : 30  // Almost no movement on mobile
                  }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: isMobile ? 0.2 : 0.8,  // Much faster on mobile
                    delay: isMobile ? 0 : baseDelay,  // No delay on mobile
                    ease: isMobile ? "easeOut" : "easeInOut"  // Smoother easing on mobile
                  }}
                  className="gallery-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center lg:text-left leading-tight pt-4 pb-2"
                >
                  The Paintings of{' '}
                  <Link href="/about" className="relative inline-block mt-2 group">
                    <motion.span 
                      className="block text-museum-gold cursor-pointer transition-all duration-300 hover:text-museum-gold-light relative"
                      whileHover={{ scale: isMobile ? 1.01 : 1.02 }}  // Less scaling on mobile
                    >
                      Alter Metzger
                      {/* Subtle underline that becomes more prominent on hover */}
                      <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-museum-gold-muted opacity-40 transition-all duration-300 group-hover:opacity-80 group-hover:h-1" />
                      
                      {/* Mobile-friendly tap indicator */}
                      <span className="absolute -inset-2 rounded-lg bg-museum-gold/5 opacity-0 transition-opacity duration-200 group-hover:opacity-100 md:hidden" />
                    </motion.span>
                  </Link>
                </motion.h1>

              </div>

            </motion.div>

            {/* Right Column - Auto-Rotating Slideshow */}
            <motion.div 
              style={{ opacity }}
              className="lg:col-span-5 relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative w-full h-[600px] lg:h-[700px]">
                {/* Main Featured Painting */}
                <motion.div
                  key={currentPainting?.id}
                  initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    rotate: [2, 4, 0, 2],
                  }}
                  className="absolute top-8 left-8 w-80 h-96 z-30 museum-frame"
                >
                  <div className="painting-content h-full">
                    <Image
                      src={currentPainting?.imageUrl || ''}
                      alt={currentPainting?.altText || ''}
                      fill
                      className="object-cover transition-opacity duration-500"
                      sizes="320px"
                      priority
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4">
                      <p className="text-white text-lg font-medium">{currentPainting?.year}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Background Paintings for Depth */}
                {featuredPaintings.slice(1, 3).map((painting, index) => (
                  <motion.div
                    key={painting.id}
                    initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                    animate={{
                      opacity: 0.8,
                      scale: 1,
                      rotate: index === 0 ? [-8, -6, -10, -8] : [5, 7, 3, 5],
                    }}
                    className={`absolute museum-frame ${
                      index === 0 ? 'top-32 right-4 w-48 h-64 z-20' : 'bottom-16 left-16 w-56 h-72 z-10'
                    }`}
                  >
                    <div className="painting-content h-full">
                      <Image
                        src={painting.imageUrl}
                        alt={painting.altText}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 256px, 320px"
                      />
                    </div>
                  </motion.div>
                ))}

              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden lg:block"
      >
        <button
          onClick={onScrollToGallery}
          className="scroll-indicator flex flex-col items-center space-y-2 text-artist-warm-gray hover:text-artist-brown transition-colors duration-300"
        >
          <span className="text-sm font-medium tracking-wider uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-current rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-current rounded-full mt-2"
            />
          </motion.div>
        </button>
      </motion.div>
    </div>
  );
}