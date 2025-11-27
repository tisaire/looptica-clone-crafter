
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import GoogleCalendarButton from '@/components/ui/GoogleCalendarButton';

// Optimized Hero component to improve LCP
const Hero = () => {
  const { t } = useLanguage();
  const [imageLoaded, setImageLoaded] = useState(false);
  const heroImageRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    // Check if image is already loaded from cache
    if (heroImageRef.current && heroImageRef.current.complete) {
      setImageLoaded(true);
    }
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center pt-24 pb-16 px-6 lg:px-12 overflow-hidden">
      {/* Replace background image with proper img element for better LCP */}
      <img
        ref={heroImageRef}
        src="/images/DSC4608_compressed.jpg"
        alt="Looptica Hero"
        onLoad={() => setImageLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
        fetchPriority="high"
        style={{ opacity: imageLoaded ? 1 : 0, transition: 'opacity 0.3s' }}
      />
      
      {/* Semi-transparent overlay with reduced opacity */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-white/30"></div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        {/* Hero Text and CTA */}
        <div className="order-2 lg:order-1">
          <div className="glass px-8 py-10 rounded-xl shadow-md w-[80%]">
            <h1 className="text-balance font-bold text-4xl sm:text-5xl lg:text-5xl leading-tight mb-6 text-gray-900 drop-shadow-sm">
              {t('heroTitle')}
            </h1>
            
            <p className="text-gray-800 text-lg mb-8 max-w-xl text-balance drop-shadow-sm">
              {t('heroDescription')}
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <GoogleCalendarButton 
                size="lg" 
                className="group bg-[#55afa9] hover:bg-[#ca6664] text-white"
              >
                {t('demanaCita')}
              </GoogleCalendarButton>
              <Button 
                variant="outline" 
                size="lg"
                className="border-[#55afa9] text-[#55afa9] hover:bg-[#55afa9]/10"
                onClick={() => {
                  const opticalSection = document.getElementById('optical');
                  if (opticalSection) {
                    opticalSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {t('viewCollection')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
