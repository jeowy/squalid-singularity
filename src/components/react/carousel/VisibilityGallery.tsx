import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowLeft, Loader2, ZoomIn } from "lucide-react";
import { MobileCarousel } from "./MobileCarousel"; 

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
  const [isFocusedImageLoaded, setIsFocusedImageLoaded] = useState(false);

  const focusableImages = galleryImages.map((img, i) => ({
    src: img.src,
    alt: `Detail View ${i}`,
    width: img.width,
    height: img.height
  }));

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (focusedIndex === null) return;
    setIsFocusedImageLoaded(false);
    setFocusedIndex((prev) => (prev === focusableImages.length - 1 ? 0 : (prev || 0) + 1));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (focusedIndex === null) return;
    setIsFocusedImageLoaded(false);
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
        
        {/* LIGHTBOX ARROWS (Inside the container) */}
        <AnimatePresence>
          {focusedIndex !== null && (
            <>
              <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                onClick={prevImage}
                className="absolute top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 shadow-md border border-gray-100 text-primary hover:scale-105 transition-all z-50 left-4"
              >
                <ChevronLeft size={24} />
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                onClick={nextImage}
                className="absolute top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 shadow-md border border-gray-100 text-primary hover:scale-105 transition-all z-50 right-4"
              >
                <ChevronRight size={24} />
              </motion.button>
            </>
          )}
        </AnimatePresence>

        {/* CONTAINER */}
        <div className="relative inline-block align-top">
          
          {/* 1. THE ANCHOR (Base Image)
              This defines the container size. It never unmounts.
              We constrain height to 500px so it doesn't get huge.
          */}
          <motion.img 
            src={baseImage.src} 
            alt="Property Overview" 
            className="block w-auto h-auto max-h-[500px] rounded-lg shadow-xl"
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
                  <img 
                    src={overlayImage.src} 
                    alt="Mobile App View" 
                    className="w-full h-auto block" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <ZoomIn className="text-primary w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 3. THE LIGHTBOX (Zoom Layer)
              Absolute inset-0 matches the Base Image size exactly.
          */}
          <AnimatePresence>
            {focusedIndex !== null && (
              <motion.div
                key="lightbox-layer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 z-30 flex items-center justify-center"
              >
                {!isFocusedImageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center z-40">
                    <Loader2 className="animate-spin text-primary w-8 h-8" />
                  </div>
                )}

                <motion.img
                  key={focusedIndex}
                  src={focusableImages[focusedIndex].src}
                  // object-contain ensures it fits perfectly within the bounds without clipping
                  className={`w-full h-full object-contain drop-shadow-2xl transition-opacity duration-300 ${isFocusedImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setIsFocusedImageLoaded(true)}
                />

                <button 
                  onClick={() => setFocusedIndex(null)}
                  className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-white/90 hover:bg-white border border-border shadow-sm text-sm text-foreground rounded-full font-medium transition-all z-50"
                >
                  <ArrowLeft size={14} className="text-primary" /> Back
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </>
  );
}