// src/utils/imagePreloader.ts

interface PreloadOptions {
  priority?: 'high' | 'low';
  sizes?: string;
  type?: 'image/webp' | 'image/avif' | 'image/jpeg' | 'image/png';
}

class ImagePreloader {
  private static preloadedImages = new Set<string>();

  static preload(src: string, options: PreloadOptions = {}): void {
    if (this.preloadedImages.has(src)) return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    
    if (options.sizes) {
      link.setAttribute('imagesizes', options.sizes);
    }
    
    if (options.type) {
      link.type = options.type;
    }
    
    if (options.priority === 'high') {
      link.setAttribute('fetchpriority', 'high');
    }

    document.head.appendChild(link);
    this.preloadedImages.add(src);
  }

  static preloadMultiple(images: Array<{ src: string; options?: PreloadOptions }>): void {
    images.forEach(({ src, options }) => {
      this.preload(src, options);
    });
  }

  static preloadWebP(src: string, options: PreloadOptions = {}): void {
    // Check WebP support before preloading
    const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    this.preload(webpSrc, { ...options, type: 'image/webp' });
  }

  static async generateWebPVersion(imageSrc: string): Promise<string | null> {
    try {
      // This would typically be handled by your build process
      // For now, just assume WebP versions exist with .webp extension
      const webpSrc = imageSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      
      // Test if WebP version exists
      const response = await fetch(webpSrc, { method: 'HEAD' });
      return response.ok ? webpSrc : null;
    } catch {
      return null;
    }
  }

  static createImageSizes(breakpoints: Array<{ width: number; size: string }>): string {
    return breakpoints
      .map(bp => `(max-width: ${bp.width}px) ${bp.size}`)
      .join(', ');
  }

  static getBestFormat(originalSrc: string): { webp: string; avif: string; original: string } {
    const baseName = originalSrc.replace(/\.[^/.]+$/, '');
    return {
      avif: `${baseName}.avif`,
      webp: `${baseName}.webp`, 
      original: originalSrc
    };
  }
}

export default ImagePreloader;

// Preload critical images immediately
export const preloadCriticalImages = () => {
  // Hero background - highest priority
  ImagePreloader.preload('/src/assets/hero-background.webp', { 
    priority: 'high',
    sizes: '100vw'
  });

  // Logo - high priority
  ImagePreloader.preload('/src/assets/logo.webp', { 
    priority: 'high',
    sizes: '(max-width: 768px) 48px, 56px'
  });

  // Featured spice images - medium priority  
  const criticalSpices = [
    '/src/assets/spice-cumin.webp',
    '/src/assets/spice-coriander.webp',
    '/src/assets/spice-red-chilly.webp'
  ];

  ImagePreloader.preloadMultiple(
    criticalSpices.map(src => ({
      src,
      options: { 
        priority: 'low',
        sizes: '(max-width: 768px) 80vw, 40vw'
      }
    }))
  );
};