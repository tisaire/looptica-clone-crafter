
import React, { useEffect } from 'react';

// This component manages critical CSS loading and optimization
const CriticalStyles: React.FC = () => {
  useEffect(() => {
    // Function to load non-critical CSS after main content is loaded
    const loadNonCriticalCSS = () => {
      // Create link for main stylesheet with non-blocking loading
      const mainStylesheet = document.createElement('link');
      mainStylesheet.rel = 'stylesheet';
      mainStylesheet.href = '/assets/index-Dr1koqt0.css'; // Update this to match your actual CSS filename
      mainStylesheet.media = 'print';
      mainStylesheet.onload = () => {
        mainStylesheet.media = 'all';
      };
      document.head.appendChild(mainStylesheet);
      
      // Add other non-critical stylesheets here if needed
      const nonCriticalStyles = [
        // Add paths to non-critical stylesheets here if needed
      ];
      
      nonCriticalStyles.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
      });
    };
    
    // Optimize image loading strategy
    const optimizeImages = () => {
      // Find all images that aren't explicitly marked with loading attributes
      const images = document.querySelectorAll('img:not([loading])');
      
      // Check if we're in the viewport for each image
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const image = entry.target as HTMLImageElement;
            // Set source only when in viewport
            if (image.dataset.src) {
              image.src = image.dataset.src;
              delete image.dataset.src;
            }
            // Stop observing once loaded
            io.unobserve(image);
          }
        });
      }, {
        rootMargin: '200px 0px', // Start loading 200px before they come into view
        threshold: 0.01
      });
      
      // Start observing each image
      images.forEach(image => {
        if (!image.hasAttribute('fetchpriority') && !image.hasAttribute('loading')) {
          image.setAttribute('loading', 'lazy');
        }
        io.observe(image);
      });
    };
    
    // Load non-critical CSS after the main content is loaded
    if (typeof window !== 'undefined') {
      // Use requestIdleCallback if available, otherwise setTimeout
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(() => {
          loadNonCriticalCSS();
          optimizeImages();
        });
      } else {
        setTimeout(() => {
          loadNonCriticalCSS();
          optimizeImages();
        }, 200);
      }
    }

    // Add a class to the body when critical styles are loaded
    document.body.classList.add('critical-loaded');
    
    // This helps with debugging
    console.log('Critical styles and optimizations applied');
  }, []);

  return null; // This component doesn't render anything
};

export default CriticalStyles;
