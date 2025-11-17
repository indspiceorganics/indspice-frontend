// src/components/common/OptimizedImage.tsx
import React, { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  onLoad?: () => void;
  onError?: () => void;
  sizes?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  placeholder = 'blur',
  onLoad,
  onError,
  sizes,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const [imageSrc, setImageSrc] = useState<string>('');

  // Generate WebP and fallback URLs
  const generateImageUrls = (originalSrc: string) => {
    const baseSrc = originalSrc.replace(/\.[^/.]+$/, ''); // Remove extension
    
    return {
      webp: `${baseSrc}.webp`,
      avif: `${baseSrc}.avif`,
      original: originalSrc,
    };
  };

  const imageUrls = generateImageUrls(src);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Image format detection and loading
  useEffect(() => {
    if (!isInView) return;

    const loadImage = async () => {
      // Check for AVIF support
      const supportsAVIF = await checkImageSupport('data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=');
      
      // Check for WebP support
      const supportsWebP = await checkImageSupport('data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA');

      if (supportsAVIF) {
        setImageSrc(imageUrls.avif);
      } else if (supportsWebP) {
        setImageSrc(imageUrls.webp);
      } else {
        setImageSrc(imageUrls.original);
      }
    };

    loadImage();
  }, [isInView, imageUrls]);

  const checkImageSupport = (dataUrl: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = dataUrl;
    });
  };

  const handleImageLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleImageError = () => {
    setError(true);
    // Fallback to original image
    if (imageSrc !== imageUrls.original) {
      setImageSrc(imageUrls.original);
      setError(false);
    } else {
      onError?.();
    }
  };

  const getPlaceholderClass = () => {
    if (placeholder === 'blur') {
      return 'bg-gradient-to-br from-stone-200 to-stone-300';
    }
    return 'bg-stone-200';
  };

  return (
    <div className={`relative overflow-hidden ${className}`} ref={imgRef}>
      {/* Placeholder */}
      {!isLoaded && isInView && (
        <div
          className={`absolute inset-0 animate-pulse ${getPlaceholderClass()}`}
          style={{ aspectRatio: width && height ? `${width}/${height}` : undefined }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        </div>
      )}

      {/* Actual Image */}
      {isInView && imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          className={`transition-opacity duration-300 ease-in-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          sizes={sizes}
        />
      )}

      {/* Error state */}
      {error && (
        <div className="absolute inset-0 bg-stone-200 flex items-center justify-center">
          <span className="text-stone-500 text-sm">Image unavailable</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;