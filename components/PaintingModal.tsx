'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Painting } from '@/types';

interface PaintingModalProps {
  painting: Painting | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PaintingModal({ painting, isOpen, onClose }: PaintingModalProps) {
  const [showImage, setShowImage] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setShowImage(false);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 200); // Reduced from 300ms for faster response
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      
      // Trigger fade-in with shorter delay for faster response
      const timer = setTimeout(() => {
        setShowImage(true);
      }, 50); // Reduced from 100ms
      
      return () => {
        clearTimeout(timer);
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    } else {
      setShowImage(false);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if ((!isOpen && !isClosing) || !painting) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-in fade-in duration-200">
      <div 
        className="absolute inset-0 bg-gallery-50 bg-opacity-85 backdrop-blur-sm animate-in fade-in duration-200 will-change-opacity"
        onClick={handleClose}
      />
      
      
      <div className="relative w-[95vw] h-[95vh] pointer-events-none">
        <Image
          src={painting.imageUrl}
          alt={painting.altText}
          fill
          className={`object-contain transition-opacity duration-200 ease-out will-change-opacity ${
            showImage ? 'opacity-100' : 'opacity-0'
          }`}
          sizes="95vw"
          priority
        />
      </div>
    </div>
  );
}