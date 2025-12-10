interface AstroInputImage {
  src: string;
  width: number;
  height: number;
  format: string;
}

interface CapacityGalleryProps {
  image: AstroInputImage;
}

export default function CapacityGallery({ image }: CapacityGalleryProps) {
  return (
    <div className="relative w-full h-full flex justify-center items-center">
        {/* Simple static display for now, ready for gallery features later */}
        <img 
            src={image.src} 
            alt="Capacity Schedule View" 
            className="w-full h-auto max-h-[600px] object-contain rounded-lg shadow-xl"
            loading="eager" 
        />
    </div>
  );
}