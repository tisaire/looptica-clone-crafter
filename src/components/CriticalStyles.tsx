import { useEffect } from 'react';

/**
 * CriticalStyles - Optimizes CSS and image loading for better FCP
 * Defers all operations to after first paint using requestAnimationFrame
 */
const CriticalStyles = () => {
  useEffect(() => {
    // Defer all operations to after first paint
    requestAnimationFrame(() => {
      // Then use requestIdleCallback for non-critical work
      const runOptimizations = () => {
        // Optimize image loading - add lazy loading to unmarked images
        const images = document.querySelectorAll('img:not([loading]):not([fetchpriority])');
        images.forEach(image => {
          image.setAttribute('loading', 'lazy');
        });

        // Add critical-loaded class
        document.body.classList.add('critical-loaded');
      };

      if ('requestIdleCallback' in window) {
        (window as Window & { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(runOptimizations);
      } else {
        setTimeout(runOptimizations, 1);
      }
    });
  }, []);

  return null;
};

export default CriticalStyles;

