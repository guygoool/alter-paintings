'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Painting } from '@/types';

interface PaintingCardProps {
  painting: Painting;
  onSelect: (painting: Painting) => void;
}

export default function PaintingCard({ painting, onSelect }: PaintingCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <div 
      className="group cursor-pointer bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
      onClick={() => onSelect(painting)}
    >
      <div className="relative aspect-[4/3] bg-neutral-100">
        {!imageError ? (
          <Image
            src={painting.imageUrl}
            alt={painting.altText}
            fill
            className={`object-cover transition-all duration-300 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-neutral-200">
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto mb-2 bg-neutral-300 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm text-neutral-500">Image unavailable</p>
            </div>
          </div>
        )}
        
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-neutral-100 animate-pulse" />
        )}
        
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
      </div>
      
      <div className="p-4">
        <h3 className="font-playfair text-lg font-semibold text-neutral-800 mb-1 line-clamp-1">
          {painting.title}
        </h3>
        {painting.year && (
          <p className="text-sm text-neutral-600 mb-2">{painting.year}</p>
        )}
        {painting.description && (
          <p className="text-sm text-neutral-700 line-clamp-2 leading-relaxed">
            {painting.description}
          </p>
        )}
        {painting.medium && (
          <p className="text-xs text-neutral-500 mt-2 italic">{painting.medium}</p>
        )}
      </div>
    </div>
  );
}