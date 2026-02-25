import { useState, useEffect } from 'react';
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

const FloatingWhatsApp = ({
  phoneNumber,
  accountName,
  statusMessage,
  chatMessage,
  placeholder
}: FloatingWhatsAppProps) => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        window.gtag?.('event', 'whatsapp_click', {
          location: window.location.pathname
        });
      }}
      className={`fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:bg-[#128C7E] hover:scale-110 ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
      }`}
      aria-label={t('contactViaWhatsApp')}
      title={`${chatMessage} - ${accountName}`}
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
};

export default FloatingWhatsApp;
