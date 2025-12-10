interface AstroInputImage {
  src: string;
  width: number;
  height: number;
  format: string;
}

interface CarriersGalleryProps {
  image: AstroInputImage;
}

export default function CarriersGallery({ image }: CarriersGalleryProps) {
  return (
    <div className="relative w-full h-full flex justify-center items-center">
        <img 
            src={image.src} 
            alt="Carriers Portal View" 
            className="w-full h-auto max-h-[600px] object-contain rounded-lg shadow-xl"
            loading="eager" 
        />
    </div>
  );
}