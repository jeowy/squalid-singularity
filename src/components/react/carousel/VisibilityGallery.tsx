import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn } from "lucide-react";
import { MobileCarousel } from "./MobileCarousel"; 
import Lightbox from "./Lightbox";

interface AstroInputImage {
  src: string;
  width: number;
  height: number;
  format: string;
}

interface VisibilityGalleryProps {
  baseImage: AstroInputImage;
  overlayImage: AstroInputImage;
  galleryImages: AstroInputImage[];
}

export default function VisibilityGallery({ baseImage, overlayImage, galleryImages }: VisibilityGalleryProps) {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const focusableImages = galleryImages.map((img, i) => ({
    src: img.src,
    alt: `Detail View ${i}`,
  }));

  const nextImage = (e: any) => {
    e?.stopPropagation();
    setFocusedIndex((prev) => (prev === focusableImages.length - 1 ? 0 : (prev || 0) + 1));
  };

  const prevImage = (e: any) => {
    e?.stopPropagation();
    setFocusedIndex((prev) => (prev === 0 ? focusableImages.length - 1 : (prev || 0) - 1));
  };

  return (
    <>
      {/* --- MOBILE VIEW --- */}
      <div className="block md:hidden w-full mt-0">
        <MobileCarousel 
          images={[...galleryImages, baseImage].map((img, i) => ({ 
            src: img.src, 
            alt: i === galleryImages.length ? 'Property View' : `App Screen ${i}`,
            width: img.width,
            height: img.height 
          }))} 
        />
      </div>

      {/* --- DESKTOP VIEW --- */}
      <div className="hidden md:block relative w-full h-full">
        <div className="relative w-full max-w-2xl mx-auto">
          
          {/* 1. THE ANCHOR (Base Image) */}
          <motion.img 
            src={baseImage.src} 
            alt="Property Overview" 
            className="w-full h-auto block rounded-lg shadow-xl"
            animate={{ opacity: focusedIndex !== null ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />

          {/* 2. THE OVERLAY (Interactive Mobile Cutout) */}
          <AnimatePresence>
            {focusedIndex === null && (
              <motion.div 
                key="overlay-layer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-0 right-8 w-[28%] max-w-[280px] cursor-pointer z-20"
                onClick={() => setFocusedIndex(0)} 
              >
                <div className="relative rounded-t-xl overflow-hidden shadow-2xl transition-transform duration-200 group hover:scale-[1.02] origin-bottom">
                  <img src={overlayImage.src} alt="Mobile App View" className="w-full h-auto block" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <ZoomIn className="text-primary w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 3. THE LIGHTBOX (Shared Component) */}
          <AnimatePresence>
            {focusedIndex !== null && (
              <Lightbox 
                image={focusableImages[focusedIndex]}
                onNext={nextImage}
                onPrev={prevImage}
                onClose={() => setFocusedIndex(null)}
              />
            )}
          </AnimatePresence>

        </div>
      </div>
    </>
  );
}