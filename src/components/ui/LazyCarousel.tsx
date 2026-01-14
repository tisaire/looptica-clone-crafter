import * as React from "react";
import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

type CarouselOptions = Parameters<typeof Carousel>[0]["opts"];
type CarouselPlugins = Parameters<typeof Carousel>[0]["plugins"];

interface LazyCarouselProps {
  children: React.ReactNode;
  className?: string;
  opts?: CarouselOptions;
  plugins?: CarouselPlugins;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
  showControls?: boolean;
  controlsClassName?: string;
  previousClassName?: string;
  nextClassName?: string;
  rootMargin?: string;
  threshold?: number;
}

/**
 * LazyCarousel - A wrapper around Carousel that only initializes when entering viewport
 * This reduces forced reflows by deferring embla-carousel initialization
 */
const LazyCarousel = ({
  children,
  className = "",
  opts,
  plugins,
  orientation = "horizontal",
  setApi,
  showControls = true,
  controlsClassName = "",
  previousClassName = "",
  nextClassName = "",
  rootMargin = "100px",
  threshold = 0.1,
}: LazyCarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    // Use IntersectionObserver to detect when carousel enters viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            // Use requestIdleCallback for non-blocking initialization
            if ("requestIdleCallback" in window) {
              (window as Window & { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(() => {
                setShouldRender(true);
              });
            } else {
              // Fallback for browsers without requestIdleCallback
              setTimeout(() => setShouldRender(true), 0);
            }
            observer.disconnect();
          }
        });
      },
      {
        rootMargin,
        threshold,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [isVisible, rootMargin, threshold]);

  // Placeholder skeleton while carousel is not yet visible
  const PlaceholderSkeleton = () => (
    <div className={`w-full ${className}`}>
      <div className="flex gap-4 overflow-hidden">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex-shrink-0 basis-full md:basis-1/2 lg:basis-1/3 p-4"
          >
            <div className="bg-gray-200 animate-pulse rounded-lg aspect-[4/3]" />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div ref={containerRef}>
      {shouldRender ? (
        <Carousel
          className={className}
          opts={opts}
          plugins={plugins}
          orientation={orientation}
          setApi={setApi}
        >
          <CarouselContent>{children}</CarouselContent>
          {showControls && (
            <>
              <CarouselPrevious className={previousClassName || controlsClassName} />
              <CarouselNext className={nextClassName || controlsClassName} />
            </>
          )}
        </Carousel>
      ) : (
        <PlaceholderSkeleton />
      )}
    </div>
  );
};

export { LazyCarousel, type LazyCarouselProps };
