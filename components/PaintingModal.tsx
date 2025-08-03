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
  const [showImage, setShowImage] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setShowImage(false);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300); // Increased to match animation duration
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
      
      // Trigger fade-in with shorter delay for faster response
      const timer = setTimeout(() => {
        setShowImage(true);
      }, 100); // Slightly increased for smoother transition
      
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
            <motion.div
              initial={{ opacity: 0 }}              // Simplified image reveal
              animate={{ 
                opacity: showImage ? 1 : 0 
              }}
              transition={{ 
                duration: 0.8,                       // Longer, more respectful fade-in
                delay: 0.2,                          // Reduced delay for smoother flow
                ease: "easeOut"
              }}
              className="w-full h-full"
            >
              <Image
                src={painting.imageUrl}
                alt={painting.altText}
                fill
                className="object-contain will-change-transform"
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