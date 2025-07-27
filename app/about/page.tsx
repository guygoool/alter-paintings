'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gallery-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gallery-50/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 text-artist-warm-gray hover:text-artist-brown transition-colors duration-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-medium">Gallery</span>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="min-h-screen bg-gallery-50 paper-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="max-w-4xl mx-auto">
            
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-20 text-center"
            >
              <h1 className="gallery-title text-5xl md:text-6xl lg:text-7xl text-artist-brown mb-6">
                Alter Metzger
              </h1>
              <p className="text-xl text-artist-warm-gray font-crimson">1926 — 1989</p>
            </motion.div>

            {/* Biography */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-16"
            >
              
              <div className="space-y-8">
                <p className="gallery-body text-lg md:text-xl text-artist-brown leading-relaxed">
                  Alter Metzger (1926–1989) was an Israeli painter and Holocaust survivor who specialized in oil portraits, lithographs, stamps, and illustrations. He was known for his works dealing with the memory of the Holocaust, landscapes of the Land of Israel, and portraits of Israeli public figures.
                </p>
                
                <p className="gallery-body text-lg leading-relaxed text-artist-warm-gray">
                  Born in Łódź, Poland, to his parents Malka and Israel Metzger. In 1939, with the Nazi German invasion, he was separated from his family at age 13. His family perished at the Chełmno extermination camp.
                </p>
                
                <p className="gallery-body text-lg leading-relaxed text-artist-warm-gray">
                  Between 1939 and 1945, Metzger survived alone in the Łódź Ghetto labor camp. Near the war's end, he was transferred to Auschwitz. During transport, he jumped from the train with a friend. His friend was killed; Metzger was wounded but later found by American soldiers.
                </p>
              </div>

              {/* Elegant divider */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.8 }}
                className="flex justify-center"
              >
                <div className="flex items-center space-x-6">
                  <div className="w-20 h-px bg-gradient-to-r from-transparent via-museum-bronze to-transparent" />
                  <div className="w-2 h-2 bg-museum-gold rounded-full" />
                  <div className="w-20 h-px bg-gradient-to-r from-transparent via-museum-bronze to-transparent" />
                </div>
              </motion.div>

              <div className="space-y-8">
                <p className="gallery-body text-lg leading-relaxed text-artist-warm-gray">
                  After rehabilitation, he studied painting at the Academy of Art in Munich in 1945. In 1948, he immigrated to Israel, enlisted in the IDF, and served as a map draftsman, creating posters, postcards, and stamps.
                </p>
                
                <p className="gallery-body text-lg leading-relaxed text-artist-warm-gray">
                  His works were exhibited at the White House, the President's Residence, and Yad Vashem. He married Yocheved Metzger during his service, and they settled in Holon where their children were born.
                </p>
                
                <p className="gallery-body text-lg leading-relaxed text-artist-warm-gray">
                  Metzger passed away in 1989, leaving behind a collection documenting the Holocaust, Israeli landscapes, and portraits of daily life.
                </p>
              </div>

            </motion.div>

            {/* Gallery link with same styling as gallery footer */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-32 text-center"
            >
              <div className="w-24 h-1 bg-museum-gold mx-auto mb-8" />
              <Link 
                href="/"
                className="inline-flex items-center space-x-2 text-artist-brown hover:text-museum-gold transition-colors duration-300 font-medium"
              >
                <span>View Gallery</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}