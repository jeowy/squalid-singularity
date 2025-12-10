import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowLeft, Loader2 } from "lucide-react";
import { MobileCarousel } from "./MobileCarousel"; 

interface AstroInputImage {
  src: string;
  width: number;
  height: number;
  format: string;
}

interface DigitizeGalleryProps {
  headerImage: AstroInputImage;
  gridImages: AstroInputImage[];
}

export default function DigitizeGallery({ headerImage, gridImages }: DigitizeGalleryProps) {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [isFocusedImageLoaded, setIsFocusedImageLoaded] = useState(false);

  const focusableImages = gridImages.map((img, i) => ({
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
      <div className="block md:hidden w-full mt-0">
        <MobileCarousel images={gridImages.map(img => ({ ...img, alt: 'Gallery Image' }))} />
      </div>

      <div className="hidden md:block relative w-full max-w-6xl mx-auto mt-0">
        
        {/* NAVIGATION ARROWS (Inside container) */}
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

        {/* MAIN CONTAINER */}
        <div className="relative w-full rounded-2xl border border-primary/20 bg-white/50 shadow-custom-lg backdrop-blur-sm overflow-hidden leading-none text-[0px]">
          
          {/* 1. GRID VIEW (The Anchor)
             Always rendered to keep container size stable. 
             Fades out when zoomed.
          */}
          <motion.div
            animate={{ opacity: focusedIndex !== null ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="w-full flex flex-col"
          >
            <div className="w-full relative">
              <FadeInImage 
                src={headerImage.src} 
                alt="Dashboard Header" 
                className="w-full h-auto block"
              />
            </div>

            <div className="grid grid-cols-3 gap-0 w-full">
              {gridImages.map((img, i) => (
                <div 
                  key={i} 
                  className="relative group cursor-pointer overflow-hidden"
                  onClick={() => {
                    setIsFocusedImageLoaded(false);
                    setFocusedIndex(i);
                  }} 
                >
                  <FadeInImage 
                    src={img.src} 
                    alt={`Slice ${i}`}
                    className="w-full h-auto block transition-transform duration-300 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 transition-colors pointer-events-none" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* 2. FOCUSED VIEW (The Overlay)
             Absolute inset-0 sits exactly on top of the Grid.
          */}
          <AnimatePresence>
            {focusedIndex !== null && (
              <motion.div
                key="focused-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 z-20 flex items-center justify-center bg-white/50 backdrop-blur-sm"
              >
                {!isFocusedImageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center z-30">
                    <Loader2 className="animate-spin text-primary w-8 h-8" />
                  </div>
                )}

                <motion.img
                  key={focusedIndex}
                  src={focusableImages[focusedIndex].src}
                  // object-contain ensures it respects the aspect ratio of the grid container
                  className={`w-full h-full object-contain block transition-opacity duration-300 ${isFocusedImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setIsFocusedImageLoaded(true)}
                />

                <button 
                  onClick={() => setFocusedIndex(null)}
                  className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-white/90 hover:bg-white border border-border shadow-sm text-sm text-foreground rounded-full font-medium transition-all z-40"
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

function FadeInImage({ src, alt, className }: { src: string, alt: string, className?: string }) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  }, []);
  
  return (
    <img 
      ref={imgRef}
      src={src} 
      alt={alt} 
      loading="eager"
      onLoad={() => setLoaded(true)}
      className={`${className} transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
    />
  );
}