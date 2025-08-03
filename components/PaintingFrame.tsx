'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useMemo, useCallback, useRef } from 'react';
import { Painting } from '@/types';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

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
  const [imageStartedLoading, setImageStartedLoading] = useState(false);
  const [naturalDimensions, setNaturalDimensions] = useState<{width: number, height: number} | null>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '100px',
    triggerOnce: true,
  });

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
    
    // Base sizes
    const baseSizes = {
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
  }, [naturalDimensions, painting.dimensions]);

  const frameDimensions = useMemo(() => calculateDimensions(size), [calculateDimensions, size]);

  const layoutClasses = {
    left: 'justify-start',
    right: 'justify-end',
    center: 'justify-center'
  };

  const handleImageLoad = useCallback((event: React.SyntheticEvent<HTMLImageElement>) => {
    const img = event.currentTarget;
    setNaturalDimensions({
      width: img.naturalWidth,
      height: img.naturalHeight
    });
    // Small delay to ensure smooth transition
    setTimeout(() => {
      setImageLoaded(true);
    }, 50);
  }, []);
  
  const handleImageError = useCallback(() => {
    setImageError(true);
    setImageLoaded(true);
  }, []);

  const handleImageLoadStart = useCallback(() => {
    setImageStartedLoading(true);
  }, []);

  return (
    <div className={`flex ${layoutClasses[layout]} w-full`}>
      <motion.div
        ref={elementRef}
        initial={{ 
          opacity: 0, 
          y: 30, 
          scale: 0.95 
        }}
        animate={isIntersecting ? { 
          opacity: 1, 
          y: 0, 
          scale: 1
        } : {}}
        transition={{ 
          duration: 0.5,     
          delay: index * 0.05,
          ease: "easeOut"
        }}
        whileHover={{ 
          scale: 1.008,      // Much more subtle to prevent jumpiness
          transition: { 
            duration: 0.6,   // Slower, more elegant
            ease: "easeOut"
          }
        }}
        whileTap={{
          scale: 0.995,
          transition: {
            duration: 0.1,
            type: "tween",
            ease: "easeOut"
          }
        }}
        className="group cursor-pointer museum-frame transition-all duration-300 hover:shadow-painting"
        style={{
          width: `${frameDimensions.width}px`,
          height: `${frameDimensions.height}px`,
        }}
        onClick={() => onSelect(painting)}
      >
        <div className="painting-content h-full relative overflow-hidden">
          {!imageError ? (
            <>
              {/* Elegant skeleton loader with subtle animation */}
              {!imageLoaded && (
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-gallery-50 via-gallery-100 to-gallery-150"
                  initial={{ opacity: 1 }}
                  animate={{ 
                    opacity: imageStartedLoading ? [1, 0.7, 1] : 1
                  }}
                  transition={{
                    duration: 2,
                    repeat: imageStartedLoading ? Infinity : 0,
                    ease: "easeInOut"
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                </motion.div>
              )}
              
              {/* Image with smooth fade-in */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: imageLoaded ? 1 : 0 }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeOut",
                  delay: 0.1
                }}
                className="absolute inset-0"
              >
                <Image
                  ref={imageRef}
                  src={painting.imageUrl}
                  alt={painting.altText}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  onLoadStart={handleImageLoadStart}
                  sizes="(max-width: 768px) 256px, (max-width: 1200px) 320px, 384px"
                  priority={index < 6}
                />
              </motion.div>
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