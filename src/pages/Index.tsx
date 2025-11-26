
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import Products from '@/components/home/Products';
import OpticalServices from '@/components/home/OpticalServices';
import Audiology from '@/components/home/Audiology';
import Testimonials from '@/components/home/Testimonials';
import Brands from '@/components/home/Brands';
import StoreLocation from '@/components/home/StoreLocation';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link, useNavigate } from 'react-router-dom';

// Version tracking for development
const CURRENT_VERSION = "v2.1.0-multilingual-de"; // Updated: Added German language support

// Create a new component for SEO content to avoid it blocking rendering
const SeoContent = ({ language }: { language: string }) => {
  const content = {
    seo: {
      title: {
        en: "Barcelona Poblenou Audiology Center - Hearing Tests and Digital Hearing Aids",
        es: "Centro de Audiología Barcelona Poblenou - Pruebas Auditivas y Audífonos Digitales",
        ca: "Centre d'Audiologia Barcelona Poblenou - Proves Auditives i Audiòfons Digitals",
        de: "Audiologie-Zentrum Barcelona Poblenou - Hörtests und Digitale Hörgeräte"
      },
      text: {
        en: "At Looptica we offer comprehensive audiology services in Barcelona Poblenou, including professional hearing tests, hearing loss treatment, digital hearing aids fitting, audiometry Barcelona Poblenou and tinnitus solutions. Our hearing center in Barcelona Poblenou features high-quality clinical audiology and specialists in pediatric audiology.",
        es: "En Looptica ofrecemos servicios completos de audiología en Barcelona Poblenou, incluyendo pruebas auditivas profesionales, tratamiento de pérdida auditiva, adaptación de audífonos digitales, audiometría Barcelona Poblenou y soluciones para acúfenos. Nuestro centro auditivo en Barcelona Poblenou cuenta con audiología clínica de alta calidad y especialistas en audiología pediátrica.",
        ca: "A Looptica oferim serveis complets d'audiologia a Barcelona Poblenou, incloent proves auditives professionals, tractament de pèrdua auditiva, adaptació d'audiòfons digitals, audiometria Barcelona Poblenou i solucions per a acúfens. El nostre centre auditiu a Barcelona Poblenou compta amb audiologia clínica d'alta qualitat i especialistes en audiologia pediàtrica.",
        de: "Bei Looptica bieten wir umfassende Audiologie-Dienstleistungen in Barcelona Poblenou, einschließlich professioneller Hörtests, Behandlung von Hörverlust, Anpassung digitaler Hörgeräte, Audiometrie Barcelona Poblenou und Tinnitus-Lösungen. Unser Hörzentrum in Barcelona Poblenou bietet hochwertige klinische Audiologie und Spezialisten für Pädaudiologie."
      }
    },
  };

  return (
    <div className="sr-only">
      <h2>{content.seo.title[language as keyof typeof content.seo.title]}</h2>
      <p>
        {content.seo.text[language as keyof typeof content.seo.text]}
      </p>
      {/* Version tracking for development debugging */}
      <span data-version={CURRENT_VERSION}>Version: {CURRENT_VERSION}</span>
    </div>
  );
};

// Create a component for non-critical sections that will be loaded after hero
const DeferredContent = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const content = {
    audiologyLink: {
      en: "Visit our Audiology Page",
      es: "Visitar nuestra página de Audiología",
      ca: "Visitar la nostra pàgina d'Audiología",
      de: "Besuchen Sie unsere Audiologie-Seite"
    },
  };

  useEffect(() => {
    // Lazy load all images except for critical ones
    const lazyLoadImages = () => {
      const allImages = document.querySelectorAll('img:not([fetchpriority="high"])');
      
      allImages.forEach(img => {
        // Add loading="lazy" attribute to all other images
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
      });
    };
    
    // Call the function after a short delay to ensure DOM is fully loaded
    const lazyLoadTimer = setTimeout(lazyLoadImages, 100);
    
    // Handle hash navigation after page load
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          // Add a slight delay to ensure all elements are loaded
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };
    
    handleHashNavigation();
    
    // Override default link behavior for service/product page links
    const handleLinkClicks = () => {
      const pageLinks = document.querySelectorAll('a[href^="/services/"], a[href^="/products/"]');
      
      pageLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
          if (href) {
            // Use navigate from react-router-dom
            navigate(href);
            // Manually set scroll position to top
            window.scrollTo(0, 0);
          }
        });
      });
    };
    
    const linkTimer = setTimeout(handleLinkClicks, 300);
    
    return () => {
      clearTimeout(lazyLoadTimer);
      clearTimeout(linkTimer);
    };
  }, [navigate]);

  return (
    <>
      <div id="products">
        <Products />
      </div>
      <div id="optical">
        <OpticalServices />
      </div>
      <div id="audiology">
        <Audiology />
        <div className="container mx-auto px-4 mt-4 text-center">
          <Link to={`/${language}/services/audiologia-centro`} className="text-[#55afa9] hover:underline">
            {content.audiologyLink[language as keyof typeof content.audiologyLink]}
          </Link>
        </div>
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="brands">
        <Brands />
      </div>
      <div id="contact">
        <StoreLocation />
      </div>
    </>
  );
};

const Index = () => {
  const { language } = useLanguage();
  
  // Content organized by section first, then by language
  const content = {
    meta: {
      en: {
        title: "Looptica - Optical and Audiology Services in Barcelona Poblenou | Glasses, Contact Lenses, and Hearing Aids",
        description: "Specialized center for optical and audiological services in Barcelona Poblenou. We offer eye exams, prescription glasses, contact lenses, hearing tests, hearing loss treatment, and high-quality digital hearing aids.",
        keywords: "optical, audiology, eyeglasses, contactLenses, hearingAids, barcelona, poblenou, audiology barcelona poblenou, hearing aids barcelona poblenou, hearing loss, hearing test barcelona poblenou, clinical audiology barcelona poblenou, hearing center barcelona poblenou"
      },
      es: {
        title: "Óptica en Poblenou, Barcelona · Looptica | Revisión Visual y Lentillas",
        description: "Óptica en Poblenou con revisión visual profesional, lentillas, gafas graduadas y Orto-K. Looptica en Barcelona: atención personalizada y reserva fácil online.",
        keywords: "optica poblenou, looptica, optica barcelona, audiología barcelona poblenou, audífonos barcelona poblenou, pérdida auditiva, prueba auditiva barcelona poblenou, audiología clínica barcelona poblenou, centro auditivo barcelona poblenou"
      },
      ca: {
        title: "Òptica a Poblenou Barcelona · Revisió Visual i Lentilles | Looptica",
        description: "Òptica a Poblenou amb revisió visual completa, lentilles, ulleres graduades i tractament Orto-K. Servei personalitzat a Barcelona. Demana hora online.",
        keywords: "optica poblenou, looptica, optica barcelona, audiologia barcelona poblenou, audiòfons barcelona poblenou, pèrdua auditiva, prova auditiva barcelona poblenou, audiologia clínica barcelona poblenou, centre auditiu barcelona poblenou"
      },
      de: {
        title: "Looptica - Optik und Audiologie in Barcelona Poblenou | Brillen, Kontaktlinsen und Hörgeräte",
        description: "Spezialisiertes Zentrum für optische und audiologische Dienstleistungen in Barcelona Poblenou. Wir bieten Augenuntersuchungen, Brillen mit Sehstärke, Kontaktlinsen, Hörtests, Behandlung von Hörverlust und hochwertige digitale Hörgeräte.",
        keywords: "optical, audiology, eyeglasses, contactLenses, hearingAids, barcelona, poblenou, audiologie barcelona poblenou, hörgeräte barcelona poblenou, hörverlust, hörtest barcelona poblenou, klinische audiologie barcelona poblenou, hörzentrum barcelona poblenou"
      }
    },
    whatsapp: {
      statusMessage: {
        en: "Typically replies within 1 hour",
        es: "Normalmente responde en 1 hora",
        ca: "Normalment respon en 1 hora",
        de: "Antwortet normalerweise innerhalb 1 Stunde"
      },
      chatMessage: {
        en: "Hello! 👋🏼 How can we help you with your vision or hearing?",
        es: "¡Hola! 👋🏼 ¿En qué podemos ayudarte con tu visión o audición?",
        ca: "Hola! 👋🏼 En què podem ajudar-te amb la teva visió o audició?",
        de: "Hallo! 👋🏼 Wie können wir Ihnen mit Ihrem Sehen oder Hören helfen?"
      },
      placeholder: {
        en: "Type a message...",
        es: "Escribe un mensaje...",
        ca: "Escriu un missatge...",
        de: "Nachricht eingeben..."
      }
    }
  };
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Log version and component mounting
    console.log(`Index component mounted - ${CURRENT_VERSION}`);
  }, []);

  return (
    <>
      <Helmet>
        <title>{content.meta[language as keyof typeof content.meta].title}</title>
        <meta name="description" content={content.meta[language as keyof typeof content.meta].description} />
        <meta name="keywords" content={content.meta[language as keyof typeof content.meta].keywords} />
        <link rel="canonical" href="https://www.looptica.com/" />
        <meta property="og:title" content={content.meta[language as keyof typeof content.meta].title} />
        <meta property="og:description" content={content.meta[language as keyof typeof content.meta].description} />
        <meta property="og:url" content="https://www.looptica.com/" />
      </Helmet>
      <Navbar />
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <Hero />
          <SeoContent language={language} />
          <DeferredContent />
        </main>
        {/* <Footer /> Removed Footer component instance */}
        <FloatingWhatsApp 
          phoneNumber="34699594064"
          accountName="Looptica"
          statusMessage={content.whatsapp.statusMessage[language as keyof typeof content.whatsapp.statusMessage]}
          chatMessage={content.whatsapp.chatMessage[language as keyof typeof content.whatsapp.chatMessage]}
          placeholder={content.whatsapp.placeholder[language as keyof typeof content.whatsapp.placeholder]}
        />
      </div>
    </>
  );
};

export default Index;
