'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { alterMetzgerGallery, generateLoopedPaintings, shufflePaintings } from '@/utils/galleryData';
import HeroSection from '@/components/HeroSection';
import GallerySection from '@/components/GallerySection';
import PaintingModal from '@/components/PaintingModal';
import { Painting } from '@/types';

const basePaintings = [
  ...alterMetzgerGallery.paintings,
  ...generateLoopedPaintings(40)
];

export default function Home() {
  const [allPaintings] = useState<Painting[]>(() => shufflePaintings(basePaintings));
  const [selectedPainting, setSelectedPainting] = useState<Painting | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const handleScrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const handleSelectPainting = (painting: Painting) => {
    setSelectedPainting(painting);
  };

  const handleClosePainting = () => {
    setSelectedPainting(null);
  };

  return (
    <div className="min-h-screen bg-gallery-50">
      {/* Hero Section */}
      <HeroSection 
        featuredPaintings={allPaintings.slice(0, 3)}
        onScrollToGallery={handleScrollToGallery}
      />

      {/* Gallery Section */}
      <div ref={galleryRef}>
        <GallerySection 
          paintings={allPaintings}
          onSelectPainting={handleSelectPainting}
        />
      </div>

      {/* Modal */}
      <PaintingModal
        painting={selectedPainting}
        isOpen={!!selectedPainting}
        onClose={handleClosePainting}
      />

      {/* Footer */}
      <motion.footer 
        className="bg-artist-brown text-gallery-50 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="w-24 h-1 bg-museum-gold mx-auto" />
            
            <h3 className="font-crimson text-2xl font-semibold">
              In Loving Memory
            </h3>
            
            <p className="font-body text-gallery-100 max-w-2xl mx-auto leading-relaxed">
              In memory of Alter Metzger and all Holocaust survivors who shared their stories 
              through art. This digital gallery preserves and honors their legacy for future generations.
            </p>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-gallery-200">
              <span>1926 — 1989</span>
              <span className="w-1 h-1 bg-gallery-200 rounded-full" />
              <span>Polish-Israeli Artist</span>
              <span className="w-1 h-1 bg-gallery-200 rounded-full" />
              <span>50 Works Preserved</span>
            </div>
            
            <div className="pt-8 border-t border-gallery-300/30">
              <p className="text-xs text-gallery-300 italic">
                &ldquo;Through art, we transform pain into beauty and ensure that memory becomes a bridge to hope.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}
