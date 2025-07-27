'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export default function AboutLink() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  return (
    <motion.div
      style={{ opacity }}
      className="fixed top-8 right-8 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
    >
      <Link href="/about">
        <motion.button
          onHoverStart={() => setIsExpanded(true)}
          onHoverEnd={() => setIsExpanded(false)}
          className="group relative bg-artist-brown/90 backdrop-blur-sm text-gallery-50 rounded-full p-4 shadow-gallery hover:shadow-painting transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
        {/* Icon */}
        <div className="w-6 h-6 flex items-center justify-center">
          <svg 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
        </div>

        {/* Expanded Content */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={isExpanded ? { 
            opacity: 1, 
            width: 'auto',
          } : { 
            opacity: 0, 
            width: 0 
          }}
          transition={{ duration: 0.3 }}
          className="absolute right-full top-0 mr-3 bg-artist-brown/95 backdrop-blur-sm rounded-lg shadow-painting overflow-hidden"
        >
          <div className="p-6 w-80">
            <h3 className="font-crimson font-semibold text-lg mb-3 text-gallery-50">
              About Alter Metzger
            </h3>
            
            <div className="space-y-3 text-gallery-100 text-sm leading-relaxed">
              <p>
                <strong className="text-gallery-50">1926-1989</strong> • Polish-Israeli Artist
              </p>
              
              <p>
                Born in Poland, Alter Metzger survived the Holocaust and immigrated 
                to Israel in 1948. He began painting in his late thirties as a way 
                to process his experiences and preserve the memory of those who perished.
              </p>
              
              <p>
                His work evolved from documentary realism to more abstract expressions 
                of memory and emotion, spanning over three decades of artistic creation.
              </p>
              
              <div className="border-t border-gallery-300/30 pt-3 mt-4">
                <p className="text-xs text-gallery-200 italic">
                  &ldquo;Through art, we transform pain into beauty and ensure that 
                  memory becomes a bridge to hope.&rdquo;
                </p>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-gallery-300/30">
              <div className="text-center">
                <div className="text-lg font-crimson font-bold text-museum-gold">50</div>
                <div className="text-xs text-gallery-300">Works</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-crimson font-bold text-museum-gold">30</div>
                <div className="text-xs text-gallery-300">Years</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-crimson font-bold text-museum-gold">1948</div>
                <div className="text-xs text-gallery-300">Started</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Connection line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isExpanded ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute right-full top-1/2 transform -translate-y-1/2 w-3 h-px bg-gallery-300 origin-right"
        />
        </motion.button>
      </Link>

      {/* Pulsing indicator */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-artist-brown rounded-full -z-10"
      />
    </motion.div>
  );
}