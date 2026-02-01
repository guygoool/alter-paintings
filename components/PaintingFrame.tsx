'use client';

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

  return (
    <div className={`flex ${layoutClasses[layout]} w-full`}>
      <div
        style={{
          width: `${frameDimensions.width}px`,
          height: `${frameDimensions.height}px`,
          cursor: 'pointer',
        }}
        onClick={() => onSelect(painting)}
      >
        {!imageError ? (
          <img
            src={painting.imageUrl}
            alt={painting.altText}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            onError={() => setImageError(true)}
          />
        ) : (
          <div style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            Image Unavailable
          </div>
        )}
      </div>
    </div>
  );
}
