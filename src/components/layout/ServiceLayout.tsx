
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { ScrollReveal, FloatingWhatsApp } from '@/components/ui';
import GoogleCalendarButton from '@/components/ui/GoogleCalendarButton';
import { useLanguage } from '@/contexts/LanguageContext';
import { whatsappTranslations } from '@/config/whatsappConfig';
import { Helmet } from 'react-helmet-async';
import { useLocation, useParams } from 'react-router-dom';
import { SUPPORTED_LANGUAGES, Language } from '@/config/languages';

interface ServiceLayoutProps {
  children: React.ReactNode;
  title: string; // This is the title in the current language
  subtitle: string; // This is the subtitle in the current language
  image: string;
  appointmentSubject?: string;
  pageTitle?: { [key in Language]: string }; // SEO titles for each language
  pageDescription?: { [key in Language]: string }; // SEO descriptions for each language
  hideCTA?: boolean; // Hide the appointment CTA section at the bottom
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({
  children,
  title,
  subtitle,
  image,
  appointmentSubject = 'Looptica Consultation',
  pageTitle, // Use this for <title> tag
  pageDescription, // Use this for meta description
  hideCTA = false,
}) => {
  const { language } = useLanguage();
  const [loadedImage, setLoadedImage] = useState('');
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const location = useLocation();
  const { lang: langFromParams } = useParams<{ lang: string }>();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoadedImage(image);
    setIsImageLoaded(true);
    
    // Debug log to help diagnose issues
    console.log(`ServiceLayout mounted: language=${language}, path=${location.pathname}, params lang=${langFromParams}`);
  }, [image, language, location.pathname, langFromParams]);

  const ctaContent = {
    readyToSchedule: {
      en: "Ready to Schedule Your Appointment?",
      es: "¿Listo para Programar su Cita?",
      ca: "Preparat per Programar la Seva Cita?",
      de: "Bereit, Ihren Termin zu vereinbaren?",
    },
    scheduleDescription: {
      en: "Book your appointment today to experience our personalized service and expert care.",
      es: "Reserve su cita hoy para experimentar nuestro servicio personalizado y atención experta.",
      ca: "Reservi la seva cita avui per experimentar el nostre servei personalitzat i atenció experta.",
      de: "Buchen Sie heute Ihren Termin, um unseren personalisierten Service und fachkundige Betreuung zu erleben.",
    },
    buttonText: {
      en: "Schedule Appointment",
      es: "Programar Cita",
      ca: "Programar Cita",
      de: "Termin vereinbaren",
    },
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLElement, Event>) => {
    const imgElement = e.target as HTMLImageElement;
    imgElement.src = '/placeholder.svg';
    imgElement.style.filter = 'blur(8px)';
    imgElement.style.opacity = '0.8';
  };

  // Determine base path for hreflang and canonical links
  let basePath = location.pathname;
  if (langFromParams && basePath.startsWith(`/${langFromParams}`)) {
    basePath = basePath.substring(`/${langFromParams}`.length) || "/";
  }
  if (basePath === "") basePath = "/";

  const currentSeoTitle = pageTitle?.[language] || title; // Fallback to hero title
  const currentSeoDescription = pageDescription?.[language] || subtitle; // Fallback to hero subtitle

  return (
    <>
      <Helmet>
        <title>{currentSeoTitle} - Looptica</title>
        <meta name="description" content={currentSeoDescription} />
        <link rel="canonical" href={`https://www.looptica.com/${language}${basePath === "/" ? "" : basePath}`} />
        {SUPPORTED_LANGUAGES.map(langCode => (
          <link
            key={langCode}
            rel="alternate"
            hrefLang={langCode}
            href={`https://www.looptica.com/${langCode}${basePath === "/" ? "" : basePath}`}
          />
        ))}
        <link
            rel="alternate"
            hrefLang="x-default"
            href={`https://www.looptica.com/ca${basePath === "/" ? "" : basePath}`} 
        />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-24">
          {/* Hero Banner */}
          <section 
            className="relative h-[50vh] flex items-center justify-center"
            style={{
              backgroundImage: `url(${loadedImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: isImageLoaded ? 'background-image 0.5s ease-in' : 'none'
            }}
          >
            {/* Add an img tag for error handling if direct bg image error handling is tricky */}
            <img src={loadedImage} alt="" onError={handleImageError} style={{display: 'none'}} />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 text-center px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">{subtitle}</p>
            </div>
          </section>

          {/* Content */}
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              {children}
              
              {/* Appointment CTA */}
              {!hideCTA && (
                <ScrollReveal>
                  <div className="mt-16 bg-gray-50 rounded-xl p-8 text-center shadow-sm">
                    <h3 className="text-2xl font-semibold mb-4">{ctaContent.readyToSchedule[language as keyof typeof ctaContent.readyToSchedule]}</h3>
                    <p className="text-gray-600 mb-6">{ctaContent.scheduleDescription[language as keyof typeof ctaContent.scheduleDescription]}</p>
                    <GoogleCalendarButton
                      subject={appointmentSubject}
                      description={`Appointment for ${title} at Looptica`}
                      className="mx-auto"
                    >
                      {ctaContent.buttonText[language as keyof typeof ctaContent.buttonText]}
                    </GoogleCalendarButton>
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>
        </main>
        
        <FloatingWhatsApp 
          phoneNumber="34699594064"
          accountName="Looptica"
          statusMessage={whatsappTranslations.statusMessage[language as keyof typeof whatsappTranslations.statusMessage]}
          chatMessage={whatsappTranslations.chatMessage[language as keyof typeof whatsappTranslations.chatMessage]}
          placeholder={whatsappTranslations.placeholder[language as keyof typeof whatsappTranslations.placeholder]}
        />
      </div>
    </>
  );
};

export default ServiceLayout;
