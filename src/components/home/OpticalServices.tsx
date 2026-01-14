
import React from 'react';
import { Eye, Contact, Moon, User, Glasses, BadgeEuro } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GoogleCalendarButton from '@/components/ui/GoogleCalendarButton';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const OpticalServices = () => {
  const { t, language } = useLanguage();

  const opticalServices = [
    {
      icon: <Eye className="w-10 h-10 text-[#55afa9]" />,
      title: t('visualHealth'),
      description: t('visualHealthDesc'),
      image: "/images/_DSC4696.jpg",
      path: `/${language}/services/salut-visual`
    },
    {
      icon: <Contact className="w-10 h-10 text-[#55afa9]" />,
      title: t('contactLenses'),
      description: t('contactLensesDesc'),
      image: "/images/adobestock-226007711_orig.jpeg",
      path: `/${language}/services/lents-contacte`
    },
    {
      icon: <Moon className="w-10 h-10 text-[#55afa9]" />,
      title: t('orthoK'),
      description: t('orthoKDesc'),
      image: "/images/ortok_resize.jpg",
      path: `/${language}/services/orto-k`
    },
    {
      icon: <User className="w-10 h-10 text-[#55afa9]" />,
      title: t('imageConsulting'),
      description: t('imageConsultingDesc'),
      image: "/lovable-uploads/45087a9c-489a-4d48-82fb-d857e7bf306a.jpg",
      path: `/${language}/services/image-consulting`
    },
    {
      icon: <Glasses className="w-10 h-10 text-[#55afa9]" />,
      title: t('lensConsulting'),
      description: t('lensConsultingDesc'),
      image: "/lovable-uploads/a99c44aa-a4a4-45a4-9616-1ef080bd49db.jpeg",
      path: `/${language}/services/lens-consulting`
    },
    {
      icon: <BadgeEuro className="w-10 h-10 text-[#55afa9]" />,
      title: t('planVeo'),
      description: t('planVeoDesc'),
      image: "/images/veo_crop_square.jpeg",
      path: `/${language}/services/plan-veo`
    }
  ];

  return (
    <section className="py-16 bg-white" id="optical">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#55afa9]/10 text-[#55afa9] mb-4">
              {t('opticalServices')}
            </span>
            <h2 className="text-3xl font-bold mb-3 text-gray-900">{t('visualCare')}</h2>
            <div className="w-16 h-1 bg-[#55afa9] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              {t('opticalDescription')}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {opticalServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden"
              >
                <Link to={service.path} className="w-full h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    loading="lazy"
                    onError={(e) => {
                      console.error(`Failed to load image: ${service.image}`);
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                </Link>
                <div className="p-6 flex flex-col items-center text-center flex-grow">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <Link to={service.path} className="mt-auto">
                    <Button variant="outline" size="sm" className="border-[#55afa9] text-[#55afa9] hover:bg-[#55afa9]/10">
                      {t('viewDetails')}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="text-center">
            <GoogleCalendarButton 
              size="lg" 
              className="bg-[#55afa9] hover:bg-[#ca6664] text-white"
              subject="Vision Consultation at Looptica"
              description="Appointment for optical services at Looptica"
              durationMinutes={30}
            >
              {t('demanaCita')}
            </GoogleCalendarButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default OpticalServices;
