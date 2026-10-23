
import React from 'react';
import { Ear, HeadphonesIcon, Zap, ShieldCheck, BadgeDollarSign, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Audiology = () => {
  const { t, language } = useLanguage();

  const centre = {
    ca: {
      title: "Centre d’Audiologia a Poblenou",
      role: 'Esther · Audiòloga i Audioprotesista',
      description: "Proves auditives, adaptació d’audiòfons i seguiment continuat amb l’Esther, amb un tracte proper i pacient.",
      link: "Coneix el Centre d’Audiologia",
    },
    es: {
      title: 'Centro de Audiología en Poblenou',
      role: 'Esther · Audióloga y Audioprotesista',
      description: 'Pruebas auditivas, adaptación de audífonos y seguimiento continuado con Esther, con un trato cercano y paciente.',
      link: 'Conoce el Centro de Audiología',
    },
    en: {
      title: 'Audiology Centre in Poblenou',
      role: 'Esther · Audiologist & Hearing Aid Specialist',
      description: 'Hearing tests, hearing aid fitting and ongoing follow-up with Esther, with a kind and patient approach.',
      link: 'Explore our Audiology Centre',
    },
    de: {
      title: 'Audiologie-Zentrum in Poblenou',
      role: 'Esther · Audiologin & Hörakustikerin',
      description: 'Hörtests, Hörgeräteanpassung und kontinuierliche Nachbetreuung mit Esther – persönlich und geduldig.',
      link: 'Unser Audiologie-Zentrum kennenlernen',
    },
  }[language];

  const audiologyServices = [
    {
      icon: <Ear className="w-10 h-10 text-[#55afa9]" />,
      title: t('hearingTest'),
      description: t('hearingTestDesc'),
      image: "/images/oticon_act_key_visual_woman_in-anechoic_chamber_as_453913390_as_190510297.jpg",
      path: `/${language}/services/hearing-test`
    },
    {
      icon: <HeadphonesIcon className="w-10 h-10 text-[#55afa9]" />,
      title: t('hearingAids'),
      description: t('hearingAidsDesc'),
      image: "/images/oticon_xceed_connectivity_iphone_x_nds_199359.jpg",
      path: `/${language}/services/hearing-aids`
    },
    {
      icon: <Zap className="w-10 h-10 text-[#55afa9]" />,
      title: t('technicalAids'),
      description: t('technicalAidsDesc'),
      image: "/images/edumic-press-release.jpg",
      path: `/${language}/services/technical-aids`
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#55afa9]" />,
      title: t('customEarProtection'),
      description: t('earProtectionDesc'),
      image: "/images/moldes-a-medida-1.jpg",
      path: `/${language}/services/ear-protection`
    },
    {
      icon: <BadgeDollarSign className="w-10 h-10 text-[#55afa9]" />,
      title: t('subvenciones'),
      description: t('subvencionesDesc'),
      image: "/images/oticonopnscoupleincitymg9377300dpicoticon2.jpg",
      path: `/${language}/services/subvenciones`
    }
  ];

  return (
    <section className="py-16 bg-muted/40 scroll-mt-24" id="audiology">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#55afa9]/10 text-[#55afa9] mb-4">
              {t('audiologyServices')}
            </span>
            <h2 className="text-3xl font-bold mb-3 text-gray-900">{t('hearingCare')}</h2>
            <div className="w-16 h-1 bg-[#55afa9] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              {t('audiologyDescription')}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 border-y border-border py-8 mb-12">
            <Link to={`/${language}/services/audiologia-centro`} className="shrink-0 rounded-lg overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <img
                src="/images/esther_resize.jpeg"
                alt={centre.role}
                loading="lazy"
                className="w-44 h-52 sm:w-48 sm:h-56 object-cover"
              />
            </Link>
            <div className="min-w-0 text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-semibold text-foreground mb-3">{centre.title}</h3>
              <p className="font-medium text-foreground mb-3">{centre.role}</p>
              <p className="text-muted-foreground max-w-2xl mb-5">{centre.description}</p>
              <Button asChild size="lg" className="h-auto min-h-11 whitespace-normal text-left hover:bg-secondary">
                <Link to={`/${language}/services/audiologia-centro`}>
                  {centre.link}
                  <ArrowRight className="ml-2 h-4 w-4 shrink-0" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {audiologyServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden"
                onClick={() => {
                  window.gtag?.('event', 'service_card_click', {
                    location: 'audiology_services',
                    service_name: service.title
                  });
                }}
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

      </div>
    </section>
  );
};

export default Audiology;
