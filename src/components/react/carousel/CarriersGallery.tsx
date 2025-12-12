import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MobileCarousel } from "./MobileCarousel"; 
import Lightbox from "./Lightbox";

interface AstroInputImage {
  src: string;
  width: number;
  height: number;
  format: string;
}

interface Hotspot {
  left: string;
  top: string;
  width: string;
  height: string;
  targetIndex: number;
}

interface CarriersGalleryProps {
  masterImage: AstroInputImage;
  mobileImages: AstroInputImage[];
  galleryImages: AstroInputImage[];
  hotspots: Hotspot[];
}

export default function CarriersGallery({ masterImage, mobileImages, galleryImages, hotspots }: CarriersGalleryProps) {
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
      {/* MOBILE: Standard Carousel */}
      <div className="block md:hidden w-full mt-0">
        <MobileCarousel images={mobileImages.map((img, i) => ({ 
          src: img.src, 
          alt: `Mobile Portal View ${i}`,
          width: img.width,
          height: img.height
        }))} />
      </div>

      {/* DESKTOP: Hotspot Map */}
      <div className="hidden md:block relative w-full max-w-6xl mx-auto mt-0">
        <div className="relative w-full rounded-2xl border border-primary/20 bg-white shadow-custom-lg overflow-hidden leading-none text-[0px]">
          
          {/* 1. MASTER IMAGE (The Anchor) */}
          <motion.div
            animate={{ opacity: focusedIndex !== null ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-full"
          >
            <img 
              src={masterImage.src} 
              alt="Carrier Portal Dashboard" 
              className="w-full h-auto block" 
              loading="eager"
            />

            {/* 2. HOTSPOTS (Invisible Buttons) */}
            {hotspots.map((spot, i) => (
              <div
                key={i}
                className="absolute cursor-pointer group z-10"
                style={{
                  left: spot.left,
                  top: spot.top,
                  width: spot.width,
                  height: spot.height,
                }}
                onClick={() => setFocusedIndex(spot.targetIndex)}
              >
                {/* Hover Effect: Show border/glow when hovering this zone */}
                <div className="w-full h-full border-2 border-transparent group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-200 rounded-sm" />
              </div>
            ))}
          </motion.div>

          {/* 3. LIGHTBOX */}
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