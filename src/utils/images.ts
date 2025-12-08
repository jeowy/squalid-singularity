import { getImage } from "astro:assets";

export interface CarouselImage {
  src: string;      
  fullSrc: string;  
  alt: string;
  width: number;
  height: number;
}

export async function optimizeSlides(rawSlides: any[]) {
  return await Promise.all(
    rawSlides.map(async (slide) => {
      // If the slide has no images, return it as-is to prevent crashes
      if (!slide.images) return slide;

      const optimizedImages = await Promise.all(
        slide.images.map(async (img: any) => {
          // Generate Thumbnail (800px WebP)
          const thumb = await getImage({ src: img, width: 800, format: 'webp' });
          // Generate Lightbox Version (Full resolution WebP)
          const full = await getImage({ src: img, format: 'webp' }); 
          
          return {
            src: thumb.src,
            fullSrc: full.src,
            alt: "App Screenshot",
            width: img.width,
            height: img.height
          };
        })
      );

      return {
        ...slide,
        images: optimizedImages
      };
    })
  );
}