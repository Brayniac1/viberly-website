import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

interface PromptImage {
  id: string;
  url: string;
  filename: string;
}

interface PromptImageGalleryProps {
  images: PromptImage[];
  className?: string;
}

export const PromptImageGallery: React.FC<PromptImageGalleryProps> = ({ 
  images, 
  className 
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [thumbsRef, thumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaApi || !thumbsApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi, thumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi || !thumbsApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    thumbsApi.scrollTo(emblaApi.selectedScrollSnap());
  }, [emblaApi, thumbsApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const nextLightboxImage = () => {
    setLightboxIndex((prev) => (prev + 1) % images.length);
  };

  const prevLightboxImage = () => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) {
    return (
      <div className={cn("aspect-video bg-muted rounded-lg flex items-center justify-center", className)}>
        <p className="text-muted-foreground">No images available</p>
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <div className={cn("space-y-4", className)}>
        <div 
          className="aspect-video rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
          onClick={() => openLightbox(0)}
        >
          <img
            src={images[0].url}
            alt={images[0].filename}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Lightbox */}
        <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <DialogContent className="max-w-4xl w-full h-full max-h-[90vh] p-0 border-0">
            <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                onClick={() => setLightboxOpen(false)}
              >
                <X className="w-6 h-6" />
              </Button>
              <img
                src={images[0].url}
                alt={images[0].filename}
                className="w-full h-full object-contain"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  return (
    <div className={cn("space-y-4", className)}>
      {/* Main Carousel */}
      <div className="relative">
        <div className="overflow-hidden rounded-lg" ref={emblaRef}>
          <div className="flex">
            {images.map((image, index) => (
              <div 
                key={image.id} 
                className="flex-[0_0_100%] min-w-0"
              >
                <div 
                  className="aspect-video cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.url}
                    alt={image.filename}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
          onClick={scrollPrev}
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
          onClick={scrollNext}
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Thumbnail Navigation */}
      <div className="overflow-hidden" ref={thumbsRef}>
        <div className="flex gap-2">
          {images.map((image, index) => (
            <button
              key={image.id}
              className={cn(
                "flex-[0_0_80px] aspect-square rounded-md overflow-hidden transition-opacity",
                index === selectedIndex ? "opacity-100 ring-2 ring-primary" : "opacity-60 hover:opacity-80"
              )}
              onClick={() => onThumbClick(index)}
            >
              <img
                src={image.url}
                alt={image.filename}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-4xl w-full h-full max-h-[90vh] p-0 border-0">
          <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
              onClick={() => setLightboxOpen(false)}
            >
              <X className="w-6 h-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
              onClick={prevLightboxImage}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
              onClick={nextLightboxImage}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
            
            <img
              src={images[lightboxIndex]?.url}
              alt={images[lightboxIndex]?.filename}
              className="w-full h-full object-contain"
            />
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded">
              {lightboxIndex + 1} / {images.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};