import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  isOpen: boolean;
  images: { src: string; alt: string }[]; // Accepts standard image objects
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox = ({ isOpen, images, currentIndex, onClose, onNavigate }: LightboxProps) => {
  
  // Handle Keyboard Navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
      if (e.key === "ArrowRight") onNavigate(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, currentIndex, onNavigate]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm" onClick={onClose}>
          
          {/* Close Button */}
          <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white p-2">
            <X size={32} />
          </button>

          {/* Image Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full h-full max-w-7xl max-h-screen p-4 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent close on image click
          >
            <img 
              src={images[currentIndex].src} 
              alt={images[currentIndex].alt} 
              className="max-w-full max-h-full object-contain shadow-2xl"
            />
          </motion.div>

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-white/20 transition-all"
                onClick={(e) => { e.stopPropagation(); onNavigate(currentIndex === 0 ? images.length - 1 : currentIndex - 1); }}
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-white/20 transition-all"
                onClick={(e) => { e.stopPropagation(); onNavigate(currentIndex === images.length - 1 ? 0 : currentIndex + 1); }}
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>
      )}
    </AnimatePresence>
  );
};