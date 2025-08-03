'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useMemo, useEffect, useCallback } from 'react';
import { Painting } from '@/types';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
// import { useMobileAnimations } from '@/hooks/useMobileAnimations';

interface PaintingFrameProps {
  painting: Painting;
  layout?: 'left' | 'right' | 'center';
  size?: 'small' | 'medium' | 'large';
  index: number;
  onSelect: (painting: Painting) => void;
}

export default function PaintingFrame({ 
  painting, 
  layout = 'center', 
  size = 'medium',
  index,
  onSelect 
}: PaintingFrameProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [naturalDimensions, setNaturalDimensions] = useState<{width: number, height: number} | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: isMobile ? 0.2 : 0.3,
    rootMargin: isMobile ? '0px' : '-50px',
    triggerOnce: true, // Ensure animations only happen once
  });

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const calculateDimensions = useCallback((size: 'small' | 'medium' | 'large') => {
    // Use natural image dimensions if available, otherwise fall back to metadata
    const dimensions = naturalDimensions || painting.dimensions;
    
    if (!dimensions) {
      return {
        small: { width: 256, height: 320 },
        medium: { width: 320, height: 384 },
        large: { width: 384, height: 448 }
      }[size];
    }

    const aspectRatio = dimensions.width / dimensions.height;
    
    // Responsive base sizes - smaller on mobile
    const baseSizes = isMobile ? {
      small: 200,
      medium: 260,
      large: 320
    } : {
      small: 280,
      medium: 350,
      large: 420
    };

    const baseSize = baseSizes[size];
    
    if (aspectRatio > 1) {
      return {
        width: baseSize,
        height: Math.round(baseSize / aspectRatio)
      };
    } else {
      return {
        width: Math.round(baseSize * aspectRatio),
        height: baseSize
      };
    }
  }, [naturalDimensions, painting.dimensions, isMobile]);

  const frameDimensions = useMemo(() => calculateDimensions(size), [calculateDimensions, size]);

  const layoutClasses = {
    left: 'justify-start',
    right: 'justify-end',
    center: 'justify-center'
  };

  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const img = event.currentTarget;
    setNaturalDimensions({
      width: img.naturalWidth,
      height: img.naturalHeight
    });
    setImageLoaded(true);
  };
  
  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <div className={`flex ${layoutClasses[layout]} w-full`}>
      <motion.div
        ref={elementRef}
        initial={{ 
          opacity: 0, 
          y: isMobile ? 20 : 30, 
          scale: isMobile ? 0.98 : 0.95 
        }}
        animate={isIntersecting ? { 
          opacity: 1, 
          y: 0, 
          scale: 1
        } : {}}
        transition={{ 
          duration: isMobile ? 0.4 : 0.5,     
          delay: (index * 0.05) * (isMobile ? 0.6 : 1),
          ease: "easeOut",
          stiffness: 100,
          damping: 30,
          restDelta: 0.001
        }}
        whileHover={{ 
          scale: 1.015,      // Even more subtle for museum-appropriate feel
          rotate: 0,
          transition: { 
            duration: 0.4,   // Slower, more deliberate
            ease: "easeOut"
          }
        }}
        whileTap={{
          scale: isTouchDevice ? 0.96 : 0.97,  // More pronounced feedback for touch devices
          rotate: 0,
          transition: {
            duration: isMobile ? 0.1 : 0.12,  // Responsive to mobile settings
            type: "tween",       // Smoother than spring for memorial context
            ease: "easeOut"      // Respectful deceleration
          }
        }}
        className="group cursor-pointer museum-frame transition-all duration-300 hover:shadow-painting"
        style={{
          width: `${frameDimensions.width}px`,
          height: `${frameDimensions.height}px`,
          transform: `rotate(${layout === 'left' ? '2deg' : layout === 'right' ? '-2deg' : '0deg'})`,
        }}
        onClick={() => onSelect(painting)}
      >
        <div className="painting-content h-full relative overflow-hidden">
          {!imageError ? (
            <>
              <Image
                src={painting.imageUrl}
                alt={painting.altText}
                fill
                className={`object-cover transition-opacity duration-300 group-hover:scale-103 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={handleImageLoad}
                onError={handleImageError}
                sizes="(max-width: 768px) 256px, (max-width: 1200px) 320px, 384px"
              />
              
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gallery-100" />
              )}
            </>
          ) : (
            <div className="flex items-center justify-center h-full bg-gallery-100">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gallery-200 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gallery-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm text-gallery-500 font-medium">Image Unavailable</p>
              </div>
            </div>
          )}

          {/* Painting Info Overlay - Enhanced for mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <div className="text-white">
              {painting.year && (
                <span className="text-gallery-200 text-xl font-medium">{painting.year}</span>
              )}
            </div>
          </div>

        </div>

      </motion.div>
    </div>
  );
}