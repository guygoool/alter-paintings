'use client';

import { useState, useEffect } from 'react';

interface MobileAnimationConfig {
  isMobile: boolean;
  isTouch: boolean;
  reducedMotion: boolean;
  animationDuration: (baseDuration: number) => number;
  animationDelay: (baseDelay: number) => number;
  springConfig: {
    stiffness: number;
    damping: number;
    restDelta: number;
  };
}

export function useMobileAnimations(): MobileAnimationConfig {
  const [config, setConfig] = useState<MobileAnimationConfig>(() => ({
    isMobile: false,
    isTouch: false,
    reducedMotion: false,
    animationDuration: (base) => base,
    animationDelay: (base) => base,
    springConfig: {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    },
  }));

  useEffect(() => {
    const checkEnvironment = () => {
      // Ensure we're in the browser environment
      if (typeof window === 'undefined' || typeof navigator === 'undefined') return;
      
      const isMobileScreen = window.innerWidth < 768;
      const isAndroid = /Android/i.test(navigator.userAgent);
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      const isMobile = isMobileScreen || isAndroid || isIOS;
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      
      // Check for reduced motion preference
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      // Mobile-optimized animation configuration
      const mobileConfig: MobileAnimationConfig = {
        isMobile,
        isTouch,
        reducedMotion,
        animationDuration: (baseDuration: number) => {
          if (reducedMotion) return baseDuration * 0.3;
          if (isMobile) return baseDuration * 0.8; // Slightly faster on mobile
          return baseDuration;
        },
        animationDelay: (baseDelay: number) => {
          if (reducedMotion) return 0;
          if (isMobile) return baseDelay * 0.6; // Shorter delays on mobile
          return baseDelay;
        },
        springConfig: {
          stiffness: isMobile ? 120 : 100,  // Slightly snappier on mobile
          damping: isMobile ? 25 : 30,      // Less damping for faster settling
          restDelta: 0.01,                  // Consistent across devices
        },
      };
      
      setConfig(mobileConfig);
    };

    // Only run on the client side
    if (typeof window !== 'undefined') {
      try {
        checkEnvironment();
        
        // Listen for resize events to detect orientation changes
        window.addEventListener('resize', checkEnvironment);
        
        // Listen for reduced motion changes
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        mediaQuery.addEventListener('change', checkEnvironment);
        
        return () => {
          window.removeEventListener('resize', checkEnvironment);
          mediaQuery.removeEventListener('change', checkEnvironment);
        };
      } catch (error) {
        console.warn('Error in useMobileAnimations:', error);
      }
    }
  }, []);

  return config;
}

// Utility function to get mobile-optimized animation variants
export function getMobileVariants(baseVariants: any, config: MobileAnimationConfig) {
  if (config.reducedMotion) {
    // Minimal animations for reduced motion
    return {
      ...baseVariants,
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };
  }

  if (config.isMobile) {
    // Enhanced mobile variants
    return {
      ...baseVariants,
      hidden: {
        ...baseVariants.hidden,
        y: (baseVariants.hidden?.y || 0) * 0.7, // Reduce movement distance
        scale: Math.max(baseVariants.hidden?.scale || 1, 0.95), // Ensure minimum scale
      },
      visible: {
        ...baseVariants.visible,
        transition: {
          ...baseVariants.visible?.transition,
          duration: config.animationDuration(baseVariants.visible?.transition?.duration || 0.5),
          delay: config.animationDelay(baseVariants.visible?.transition?.delay || 0),
          ...config.springConfig,
        },
      },
    };
  }

  return baseVariants;
}

export default useMobileAnimations;