import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ZoomIn, ArrowLeft } from "lucide-react";
import { MobileCarousel } from "./MobileCarousel"; 

// 1. FIX: Define a type that matches Astro's raw imports (No 'alt')
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

  // 2. NORMALIZE: We add the 'alt' tag here, inside the component
  const allImages = [headerImage, ...gridImages].map((img, i) => ({
    src: img.src,
    // Auto-generate alt text since raw imports don't have it
    alt: i === 0 ? "Dashboard Header" : `Detail View ${i}`,
    width: img.width,
    height: img.height
  }));

  // Navigation Logic
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (focusedIndex === null) return;
    setFocusedIndex((prev) => (prev === allImages.length - 1 ? 0 : (prev || 0) + 1));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (focusedIndex === null) return;
    setFocusedIndex((prev) => (prev === 0 ? allImages.length - 1 : (prev || 0) - 1));
  };

  return (
    <>
      {/* MOBILE VIEW (< md) */}
      <div className="block md:hidden w-full max-w-sm mx-auto mt-8">
        {/* MobileCarousel accepts the normalized 'allImages' which now has 'alt' */}
        <MobileCarousel images={allImages} />
      </div>

      {/* DESKTOP VIEW (md+) */}
      <div className="hidden md:block relative w-full max-w-5xl mx-auto mt-12 h-[600px]">
        
        <div className="absolute inset-0 rounded-2xl border border-primary-foreground/20 bg-primary-foreground/5 shadow-custom-lg backdrop-blur-sm overflow-hidden">
          
          {focusedIndex !== null ? (
            
            // FOCUSED VIEW
            <div className="w-full h-full bg-white relative flex items-center justify-center animate-in fade-in zoom-in duration-300">
              
              <AnimatePresence mode="wait">
                <motion.img
                  key={focusedIndex}
                  src={allImages[focusedIndex].src}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="max-w-full max-h-full object-contain p-8"
                />
              </AnimatePresence>

              <button 
                onClick={() => setFocusedIndex(null)}
                className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-full text-sm font-medium transition-colors z-20"
              >
                <ArrowLeft size={16} /> Back to Grid
              </button>

              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/5 hover:bg-black/10 text-black transition-colors z-20"
              >
                <ChevronLeft size={24} />
              </button>

              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/5 hover:bg-black/10 text-black transition-colors z-20"
              >
                <ChevronRight size={24} />
              </button>
            </div>

          ) : (

            // GRID VIEW
            <div className="w-full h-full flex flex-col bg-white animate-in fade-in duration-500">
              
              {/* Header Image */}
              <div 
                className="relative flex-[0.8] overflow-hidden cursor-pointer group border-b border-gray-100"
                onClick={() => setFocusedIndex(0)}
              >
                <img src={headerImage.src} className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-white/90 text-black px-3 py-1 rounded-full text-xs font-medium shadow-sm flex items-center gap-2">
                    <ZoomIn size={14} /> Expand
                  </span>
                </div>
              </div>

              {/* Grid Items */}
              <div className="flex-1 grid grid-cols-3 grid-rows-2">
                {gridImages.map((img, i) => (
                  <div 
                    key={i} 
                    className="relative group cursor-pointer overflow-hidden border-r border-b border-gray-100 last:border-0"
                    onClick={() => setFocusedIndex(i + 1)} 
                  >
                    <img src={img.src} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <ZoomIn className="text-white drop-shadow-md" size={24} />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

        </div>
      </div>
    </>
  );
}