import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface FloatingWhatsAppProps {
  phoneNumber: string;
  accountName: string;
  statusMessage: string;
  chatMessage: string;
  placeholder: string;
}

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
  >
    <path d="M12.001 2C6.479 2 2.012 6.467 2.012 12c0 2.03.611 3.925 1.661 5.484L2 22l4.64-1.604A9.955 9.955 0 0 0 12.001 22c5.522 0 9.989-4.467 9.989-10S17.523 2 12.001 2Zm5.824 13.439c-.242.682-1.452 1.312-2.016 1.384-.564.072-1.08.322-3.645-.801-3.05-1.267-4.74-4.454-4.878-4.659-.138-.205-1.116-1.484-1.116-2.83 0-1.346.705-2.013.968-2.288.264-.275.578-.343.774-.343.195 0 .391.001.562.008.179.008.528-.086.823.628l.754 1.778c.088.165.145.357.03.578-.116.22-.173.357-.345.548-.171.19-.362.425-.517.57-.172.172-.352.359-.151.705.2.346.893 1.504 1.92 2.434 1.319 1.184 2.4 1.563 2.76 1.735.36.172.574.145.786-.088.212-.232.91-.956 1.153-1.284.242-.328.484-.273.81-.164.326.11 2.078.979 2.436 1.151.358.172.595.258.683.4.088.142.088.817-.154 1.5Z"/>
  </svg>
);

const closeLabels: Record<string, string> = {
  ca: 'Tanca el missatge',
  es: 'Cerrar el mensaje',
  en: 'Close message',
  de: 'Nachricht schließen',
};

const BUBBLE_DELAY_MS = 4000;
const PULSE_DURATION_MS = 2000;
const STORAGE_KEY = 'wa-bubble-shown';

const FloatingWhatsApp = ({
  phoneNumber,
  accountName,
  statusMessage,
  chatMessage,
  placeholder
}: FloatingWhatsAppProps) => {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);
  const [cookieBannerVisible, setCookieBannerVisible] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Initial state: banner shows only when no consent stored yet
    setCookieBannerVisible(!localStorage.getItem('cookieConsent'));

    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ visible: boolean }>).detail;
      setCookieBannerVisible(Boolean(detail?.visible));
    };
    window.addEventListener('cookie-consent-change', handler);
    return () => window.removeEventListener('cookie-consent-change', handler);
  }, []);

  // Show the invitation bubble once per page view, after a short delay.
  // The flag is cleared on unload so a page refresh shows it again,
  // while SPA navigation (no unload) keeps it hidden.
  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const showTimer = setTimeout(() => {
      setShowBubble(true);
      setIsPulsing(true);
      sessionStorage.setItem(STORAGE_KEY, '1');
    }, BUBBLE_DELAY_MS);

    const clearOnUnload = () => sessionStorage.removeItem(STORAGE_KEY);
    window.addEventListener('beforeunload', clearOnUnload);

    return () => {
      clearTimeout(showTimer);
      window.removeEventListener('beforeunload', clearOnUnload);
    };
  }, []);

  // Stop the pulse shortly after it starts
  useEffect(() => {
    if (!isPulsing) return;
    const stopTimer = setTimeout(() => setIsPulsing(false), PULSE_DURATION_MS);
    return () => clearTimeout(stopTimer);
  }, [isPulsing]);

  const dismissBubble = () => {
    setShowBubble(false);
    setIsPulsing(false);
  };

  const bottomClass = cookieBannerVisible ? 'bottom-40 md:bottom-28' : 'bottom-6';

  return (
    <div className={`fixed right-6 z-[70] flex items-end gap-3 transition-all duration-300 ${bottomClass}`}>
      {showBubble && (
        <div
          role="status"
          className="animate-scale-in relative mb-1 max-w-[240px] rounded-2xl rounded-br-sm bg-white p-4 shadow-xl border border-gray-100"
        >
          <button
            type="button"
            onClick={dismissBubble}
            aria-label={closeLabels[language] ?? closeLabels.en}
            className="absolute right-2 top-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
          <p className="text-sm font-semibold text-gray-900 pr-5">{accountName}</p>
          <p className="text-xs text-gray-500 mb-1.5">{statusMessage}</p>
          <p className="text-sm text-gray-700">{chatMessage}</p>
        </div>
      )}
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          dismissBubble();
          window.gtag?.('event', 'whatsapp_click', {
            location: window.location.pathname
          });
        }}
        className={`bg-[#25D366] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:bg-[#128C7E] hover:scale-110 ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
        } ${
          isPulsing ? 'motion-safe:animate-[pulse_1s_cubic-bezier(0.4,0,0.6,1)_2]' : ''
        }`}
        aria-label={t('contactViaWhatsApp')}
        title={`${chatMessage} - ${accountName}`}
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
