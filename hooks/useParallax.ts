'use client';

import { useTransform, useScroll, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import { ParallaxOptions } from '@/types';

export function useParallax({
  speed = 0.5,
  direction = 'up',
  disabled = false,
}: ParallaxOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const multiplier = direction === 'up' ? -speed : speed;
  const range = disabled ? [0, 0] : [0, multiplier * 100];
  
  const y = useTransform(scrollYProgress, [0, 1], range.map(val => `${val}%`));
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return {
    ref,
    y,
    opacity,
    scrollYProgress,
  };
}

export function useParallaxTransform(
  scrollYProgress: MotionValue<number>,
  inputRange: number[] = [0, 1],
  outputRange: string[] = ['0%', '50%']
) {
  return useTransform(scrollYProgress, inputRange, outputRange);
}

export default useParallax;