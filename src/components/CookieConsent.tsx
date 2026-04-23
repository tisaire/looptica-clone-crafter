import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check, Settings } from 'lucide-react';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const { language } = useLanguage();

  // Cookie preferences state
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true, // Always enabled
    analytics: true,
    marketing: true,
  });

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      // Show the banner after a short delay for better UX
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // If user has already consented, apply their preferences
      try {
        const savedPreferences = JSON.parse(hasConsented);
        if (typeof savedPreferences === 'object') {
          setCookiePreferences(prev => ({
            ...prev,
            ...(savedPreferences as { analytics?: boolean; marketing?: boolean })
          }));
          
          // Initialize Google Analytics based on saved preferences
          if (savedPreferences.analytics) {
            enableGoogleAnalytics();
          }
        } else if (hasConsented === 'all') {
          enableGoogleAnalytics();
        }
      } catch (e) {
        console.error('Error parsing cookie consent:', e);
      }
    }
  }, []);

  const enableGoogleAnalytics = () => {
    // Enable Google Analytics tracking
    if (window.gtag && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  };

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setShowConsent(false);
    // Initialize all cookies/tracking
    enableGoogleAnalytics();
    if (import.meta.env.DEV) console.log('All cookies accepted');
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(cookiePreferences));
    setShowSettings(false);
    setShowConsent(false);
    
    // Initialize cookies based on preferences
    if (cookiePreferences.analytics) {
      enableGoogleAnalytics();
    }
    if (import.meta.env.DEV) console.log('Saved cookie preferences:', cookiePreferences);
  };

  const togglePreference = (key: 'analytics' | 'marketing') => {
    setCookiePreferences({
      ...cookiePreferences,
      [key]: !cookiePreferences[key],
    });
  };

  const getTranslation = () => {
    const translations = {
      title: {
        en: 'Cookie Consent',
        es: 'Consentimiento de Cookies',
        ca: 'Consentiment de Cookies',
      },
      description: {
        en: 'We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.',
        es: 'Utilizamos cookies para mejorar su experiencia de navegación, mostrar anuncios o contenido personalizados y analizar nuestro tráfico. Al hacer clic en "Aceptar Todo", consiente nuestro uso de cookies.',
        ca: 'Utilitzem cookies per millorar la seva experiència de navegació, mostrar anuncis o contingut personalitzat i analitzar el nostre tràfic. En fer clic a "Acceptar Tot", consent el nostre ús de cookies.',
      },
      acceptAll: {
        en: 'Accept All',
        es: 'Aceptar Todo',
        ca: 'Acceptar Tot',
      },
      customize: {
        en: 'Customize',
        es: 'Personalizar',
        ca: 'Personalitzar',
      },
      savePreferences: {
        en: 'Save Preferences',
        es: 'Guardar Preferencias',
        ca: 'Desar Preferències',
      },
      preferences: {
        en: 'Cookie Preferences',
        es: 'Preferencias de Cookies',
        ca: 'Preferències de Cookies',
      },
      necessary: {
        en: 'Necessary Cookies',
        es: 'Cookies Necesarias',
        ca: 'Cookies Necessàries',
      },
      necessaryDescription: {
        en: 'These cookies are essential for the website to function properly.',
        es: 'Estas cookies son esenciales para que el sitio web funcione correctamente.',
        ca: 'Aquestes cookies són essencials perquè el lloc web funcioni correctament.',
      },
      analytics: {
        en: 'Analytics Cookies',
        es: 'Cookies Analíticas',
        ca: 'Cookies Analítiques',
      },
      analyticsDescription: {
        en: 'These cookies help us understand how visitors interact with the website.',
        es: 'Estas cookies nos ayudan a entender cómo los visitantes interactúan con el sitio web.',
        ca: 'Aquestes cookies ens ajuden a entendre com els visitants interactuen amb el lloc web.',
      },
      marketing: {
        en: 'Marketing Cookies',
        es: 'Cookies de Marketing',
        ca: 'Cookies de Màrqueting',
      },
      marketingDescription: {
        en: 'These cookies are used to track visitors across websites for targeted advertising.',
        es: 'Estas cookies se utilizan para rastrear visitantes en sitios web para publicidad dirigida.',
        ca: 'Aquestes cookies s\'utilitzen per rastrejar visitants en llocs web per a publicitat dirigida.',
      },
      always: {
        en: 'Always active',
        es: 'Siempre activo',
        ca: 'Sempre actiu',
      },
    };

    return {
      title: translations.title[language as keyof typeof translations.title] || translations.title.en,
      description: translations.description[language as keyof typeof translations.description] || translations.description.en,
      acceptAll: translations.acceptAll[language as keyof typeof translations.acceptAll] || translations.acceptAll.en,
      customize: translations.customize[language as keyof typeof translations.customize] || translations.customize.en,
      savePreferences: translations.savePreferences[language as keyof typeof translations.savePreferences] || translations.savePreferences.en,
      preferences: translations.preferences[language as keyof typeof translations.preferences] || translations.preferences.en,
      necessary: translations.necessary[language as keyof typeof translations.necessary] || translations.necessary.en,
      necessaryDescription: translations.necessaryDescription[language as keyof typeof translations.necessaryDescription] || translations.necessaryDescription.en,
      analytics: translations.analytics[language as keyof typeof translations.analytics] || translations.analytics.en,
      analyticsDescription: translations.analyticsDescription[language as keyof typeof translations.analyticsDescription] || translations.analyticsDescription.en,
      marketing: translations.marketing[language as keyof typeof translations.marketing] || translations.marketing.en,
      marketingDescription: translations.marketingDescription[language as keyof typeof translations.marketingDescription] || translations.marketingDescription.en,
      always: translations.always[language as keyof typeof translations.always] || translations.always.en,
    };
  };

  const t = getTranslation();

  // Main banner
  if (showConsent && !showSettings) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-gray-200 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-1">{t.title}</h3>
              <p className="text-sm text-gray-600 pr-4">{t.description}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <Button
                variant="outline"
                className="border-[#55afa9] text-[#55afa9] hover:bg-[#55afa9] hover:text-white"
                onClick={() => setShowSettings(true)}
              >
                <Settings className="mr-2 h-4 w-4" />
                {t.customize}
              </Button>
              <Button
                variant="default"
                className="bg-[#55afa9] hover:bg-[#ca6664]"
                onClick={handleAcceptAll}
              >
                <Check className="mr-2 h-4 w-4" />
                {t.acceptAll}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Settings dialog
  return (
    <Dialog open={showSettings} onOpenChange={setShowSettings}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{t.preferences}</DialogTitle>
          <DialogDescription>
            {t.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* Necessary cookies */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">{t.necessary}</h4>
                <p className="text-sm text-muted-foreground">{t.necessaryDescription}</p>
              </div>
              <span className="text-xs text-[#55afa9] font-medium">{t.always}</span>
            </div>
          </div>

          {/* Analytics cookies */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">{t.analytics}</h4>
                <p className="text-sm text-muted-foreground">{t.analyticsDescription}</p>
              </div>
              <div className="h-6 w-11 cursor-pointer" onClick={() => togglePreference('analytics')}>
                <div className={`h-6 w-11 rounded-full p-1 transition-colors duration-200 ease-in-out ${cookiePreferences.analytics ? 'bg-[#55afa9]' : 'bg-gray-200'}`}>
                  <div className={`h-4 w-4 rounded-full bg-white transition-transform duration-200 ease-in-out ${cookiePreferences.analytics ? 'translate-x-5' : 'translate-x-0'}`} />
                </div>
              </div>
            </div>
          </div>

          {/* Marketing cookies */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">{t.marketing}</h4>
                <p className="text-sm text-muted-foreground">{t.marketingDescription}</p>
              </div>
              <div className="h-6 w-11 cursor-pointer" onClick={() => togglePreference('marketing')}>
                <div className={`h-6 w-11 rounded-full p-1 transition-colors duration-200 ease-in-out ${cookiePreferences.marketing ? 'bg-[#55afa9]' : 'bg-gray-200'}`}>
                  <div className={`h-4 w-4 rounded-full bg-white transition-transform duration-200 ease-in-out ${cookiePreferences.marketing ? 'translate-x-5' : 'translate-x-0'}`} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button 
            variant="default" 
            className="w-full bg-[#55afa9] hover:bg-[#ca6664]"
            onClick={handleSavePreferences}
          >
            {t.savePreferences}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CookieConsent;
