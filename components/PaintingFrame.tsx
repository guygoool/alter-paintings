'use client';

import Image from 'next/image';
import { useState, useMemo, useCallback } from 'react';
import { Painting } from '@/types';

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
  const [imageError, setImageError] = useState(false);

  const calculateDimensions = useCallback((size: 'small' | 'medium' | 'large') => {
    const dimensions = painting.dimensions;

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
  }, [painting.dimensions]);

  const frameDimensions = useMemo(() => calculateDimensions(size), [calculateDimensions, size]);

  const layoutClasses = {
    left: 'justify-start',
    right: 'justify-end',
    center: 'justify-center'
  };

  const handleImageError = useCallback(() => {
    setImageError(true);
  }, []);

  return (
    <div className={`flex ${layoutClasses[layout]} w-full`}>
      <div
        className="group cursor-pointer museum-frame"
        style={{
          width: `${frameDimensions.width}px`,
          height: `${frameDimensions.height}px`,
        }}
        onClick={() => onSelect(painting)}
      >
        <div className="painting-content h-full relative overflow-hidden">
          {!imageError ? (
            <Image
              src={painting.imageUrl}
              alt={painting.altText}
              fill
              className="object-cover"
              onError={handleImageError}
              sizes="(max-width: 768px) 256px, (max-width: 1200px) 320px, 384px"
              priority={index < 6}
            />
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
        </div>
      </div>
    </div>
  );
}
