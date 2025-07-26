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
    }, 300);
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
      
      // Trigger fade-in after a short delay
      const timer = setTimeout(() => {
        setShowImage(true);
      }, 100);
      
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
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-in fade-in duration-300">
      <div 
        className="absolute inset-0 bg-gallery-50 bg-opacity-85 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={handleClose}
      />
      
      
      <div className="relative w-[95vw] h-[95vh] pointer-events-none">
        <Image
          src={painting.imageUrl}
          alt={painting.altText}
          fill
          className={`object-contain transition-opacity duration-300 ease-out ${
            showImage ? 'opacity-100' : 'opacity-0'
          }`}
          sizes="95vw"
          priority
        />
      </div>
    </div>
  );
}