'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { Painting } from '@/types';

interface PaintingModalProps {
  painting: Painting | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PaintingModal({ painting, isOpen, onClose }: PaintingModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !painting) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative max-w-6xl max-h-[90vh] mx-4 bg-white rounded-lg shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/3 relative">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[70vh]">
              <Image
                src={painting.imageUrl}
                alt={painting.altText}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
              />
            </div>
          </div>
          
          <div className="lg:w-1/3 p-8 overflow-y-auto">
            <div className="space-y-6">
              <div>
                <h2 className="font-playfair text-3xl font-bold text-neutral-800 mb-2">
                  {painting.title}
                </h2>
                {painting.year && (
                  <p className="text-lg text-neutral-600 mb-4">{painting.year}</p>
                )}
              </div>

              <div className="space-y-3 text-sm">
                {painting.medium && (
                  <div>
                    <span className="font-semibold text-neutral-800">Medium: </span>
                    <span className="text-neutral-600">{painting.medium}</span>
                  </div>
                )}
                
                {painting.dimensions && (
                  <div>
                    <span className="font-semibold text-neutral-800">Dimensions: </span>
                    <span className="text-neutral-600">
                      {painting.dimensions.width} × {painting.dimensions.height} {painting.dimensions.unit}
                    </span>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}