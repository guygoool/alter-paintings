'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useMemo } from 'react';
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
  const [naturalDimensions, setNaturalDimensions] = useState<{width: number, height: number} | null>(null);
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
    rootMargin: '-50px',
  });

  const calculateDimensions = (size: 'small' | 'medium' | 'large') => {
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
  };

  const frameDimensions = useMemo(() => calculateDimensions(size), [size, naturalDimensions]);

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
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        animate={isIntersecting ? { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          rotate: [0, 1, -1, 0]
        } : {}}
        transition={{ 
          duration: 0.8, 
          delay: index * 0.1,
          rotate: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        whileHover={{ 
          scale: 1.05, 
          rotate: 0,
          transition: { duration: 0.3 }
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
                className={`object-cover transition-all duration-500 group-hover:scale-110 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={handleImageLoad}
                onError={handleImageError}
                sizes="(max-width: 768px) 256px, (max-width: 1200px) 320px, 384px"
              />
              
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gallery-100 animate-pulse" />
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

          {/* Painting Info Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-white"
            >
              {painting.year && (
                <span className="text-gallery-200 text-xl font-medium">{painting.year}</span>
              )}
            </motion.div>
          </div>

          {/* Frame Number */}
          <div className="absolute top-4 right-4 bg-museum-bronze text-gallery-50 px-2 py-1 rounded-sm text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            #{index + 1}
          </div>
        </div>

        {/* Museum Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
          className="absolute -bottom-12 left-4 right-4 bg-gallery-50 border border-gallery-200 p-3 rounded-sm shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div className="text-center text-artist-brown text-sm font-medium">
            {painting.year || 'Date unknown'}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}