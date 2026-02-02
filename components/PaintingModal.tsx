'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Painting } from '@/types';

interface PaintingModalProps {
  painting: Painting | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PaintingModal({ painting, isOpen, onClose }: PaintingModalProps) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  }, [onClose]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';

      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleClose]);

  if ((!isOpen && !isClosing) || !painting) return null;

  return (
    <AnimatePresence mode="wait">
      {(isOpen || isClosing) && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <motion.div 
            className="absolute inset-0 bg-gallery-50 bg-opacity-85 backdrop-blur-sm will-change-opacity"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={handleClose}
          />
          
          <motion.div 
            className="relative w-[95vw] h-[95vh] pointer-events-none"
            initial={{ scale: 0.9, opacity: 0 }}     // More pronounced initial scale for mobile
            animate={{ 
              scale: 1, 
              opacity: 1, 
              transition: {
                duration: 0.5,                        // Slightly faster for mobile
                ease: [0.25, 0.46, 0.45, 0.94]      // Custom cubic-bezier for elegance
              }
            }}
            exit={{ 
              scale: 0.95,                           // More pronounced scale-down for mobile
              opacity: 0, 
              transition: {
                duration: 0.3,                        // Faster exit for mobile
                ease: "easeIn"
              }
            }}
            // Add pinch-to-zoom support for mobile
            drag={false}
            whileTap={{ scale: 0.99 }}               // Subtle feedback on tap
          >
            {/* Image with smooth reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              transition={{ 
                duration: 0.6,
                ease: "easeOut"
              }}
              className="w-full h-full"
            >
              <Image
                src={painting.imageUrl}
                alt={painting.altText}
                fill
                className="object-contain"
                sizes="95vw"
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}