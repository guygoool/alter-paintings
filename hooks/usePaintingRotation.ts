'use client';

import { useState, useEffect, useCallback } from 'react';
import { Painting } from '@/types';

interface UsePaintingRotationOptions {
  paintings: Painting[];
  autoRotate?: boolean;
  rotationInterval?: number;
  pauseOnHover?: boolean;
}

export function usePaintingRotation({
  paintings,
  autoRotate = true,
  rotationInterval = 4000,
  pauseOnHover = true,
}: UsePaintingRotationOptions) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const currentPainting = paintings[currentIndex];
  const totalPaintings = paintings.length;

  const nextPainting = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPaintings);
  }, [totalPaintings]);

  const previousPainting = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalPaintings - 1 : prevIndex - 1
    );
  }, [totalPaintings]);

  const goToPainting = useCallback((index: number) => {
    if (index >= 0 && index < totalPaintings) {
      setCurrentIndex(index);
    }
  }, [totalPaintings]);

  const toggleRotation = useCallback(() => {
    setIsPaused(prev => !prev);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    if (pauseOnHover) {
      setIsPaused(true);
    }
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (pauseOnHover) {
      setIsPaused(false);
    }
  }, [pauseOnHover]);

  // Auto-rotation effect
  useEffect(() => {
    if (!autoRotate || isPaused || totalPaintings <= 1) {
      return;
    }

    const interval = setInterval(nextPainting, rotationInterval);

    return () => {
      clearInterval(interval);
    };
  }, [autoRotate, isPaused, rotationInterval, nextPainting, totalPaintings]);

  // Preload next images for smoother transitions
  useEffect(() => {
    const preloadImages = () => {
      const nextIndex = (currentIndex + 1) % totalPaintings;
      const prevIndex = currentIndex === 0 ? totalPaintings - 1 : currentIndex - 1;
      
      [nextIndex, prevIndex].forEach(index => {
        const img = new Image();
        img.src = paintings[index]?.imageUrl;
      });
    };

    preloadImages();
  }, [currentIndex, paintings, totalPaintings]);

  return {
    currentPainting,
    currentIndex,
    totalPaintings,
    isPaused,
    isHovered,
    nextPainting,
    previousPainting,
    goToPainting,
    toggleRotation,
    handleMouseEnter,
    handleMouseLeave,
  };
}

export default usePaintingRotation;