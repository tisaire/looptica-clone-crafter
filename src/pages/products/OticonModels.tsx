
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

// Oticon model data
const oticonModels = [
  {
    id: 'real',
    name: 'Oticon Real™',
    image: '/images/brands/oticon/oticon-real.jpg',
    description: {
      en: 'Next-generation technology that helps you hear better in noisy environments.',
      es: 'Tecnología de última generación que te ayuda a escuchar mejor en entornos ruidosos.',
      ca: 'Tecnologia de darrera generació que t\'ajuda a escoltar millor en entorns sorollosos.'
    },
    features: ['BrainHearing™ Technology', 'Deep Neural Network', 'Rechargeable']
  },
  {
    id: 'more',
    name: 'Oticon More™',
    image: '/images/brands/oticon/oticon-more.jpg',
    description: {
      en: 'Designed to work with your brain to help you hear better in challenging environments.',
      es: 'Diseñado para trabajar con tu cerebro y ayudarte a escuchar mejor en entornos desafiantes.',
      ca: 'Dissenyat per treballar amb el teu cervell per ajudar-te a escoltar millor en entorns desafiants.'
    },
    features: ['BrainHearing™ Technology', 'MoreSound Intelligence', 'Rechargeable']
  },
  {
    id: 'xceed',
    name: 'Oticon Xceed',
    image: '/images/brands/oticon/oticon-xceed.jpg',
    description: {
      en: 'The world\'s most powerful hearing aid for severe to profound hearing loss.',
      es: 'El audífono más potente del mundo para pérdidas auditivas severas a profundas.',
      ca: 'L\'audiòfon més potent del món per a pèrdues auditives severes a profundes.'
    },
    features: ['OpenSound Navigator', 'BrainHearing™ Technology', 'High Power']
  },
  {
    id: 'opn-s',
    name: 'Oticon Opn S',
    image: '/images/brands/oticon/oticon-opn-s.jpg',
    description: {
      en: 'Experience 360° sound with reduced listening effort.',
      es: 'Experimenta un sonido de 360° con menor esfuerzo auditivo.',
      ca: 'Experimenta un so de 360° amb menor esforç auditiu.'
    },
    features: ['OpenSound Navigator', 'Speech Guard LX', 'Rechargeable Option']
  },
  {
    id: 'ruby',
    name: 'Oticon Ruby',
    image: '/images/brands/oticon/oticon-ruby.jpg',
    description: {
      en: 'Excellent sound quality with great connectivity and convenience.',
      es: 'Excelente calidad de sonido con gran conectividad y comodidad.',
      ca: 'Excel·lent qualitat de so amb gran connectivitat i comoditat.'
    },
    features: ['OpenSound Navigator', '2.4 GHz Bluetooth', 'Rechargeable Option']
  },
  {
    id: 'siya',
    name: 'Oticon Siya',
    image: '/images/brands/oticon/oticon-siya.jpg',
    description: {
      en: 'Affordable technology with essential features for better hearing.',
      es: 'Tecnología asequible con características esenciales para una mejor audición.',
      ca: 'Tecnologia assequible amb característiques essencials per a una millor audició.'
    },
    features: ['Speech Enhancement', '2.4 GHz Bluetooth', 'Multiple Styles']
  },
  {
    id: 'cros',
    name: 'Oticon CROS',
    image: '/images/brands/oticon/oticon-cros.jpg',
    description: {
      en: 'Solution for single-sided deafness, transmitting sound from the poorer to the better ear.',
      es: 'Solución para sordera unilateral, transmitiendo sonido desde el oído con peor audición al mejor.',
      ca: 'Solució per a sordesa unilateral, transmetent so des de l\'oïda amb pitjor audició a la millor.'
    },
    features: ['TwinLink Technology', 'OpenSound Navigator', 'Dual-Radio Transmission']
  },
  {
    id: 'pediatric',
    name: 'Oticon Pediatric',
    image: '/images/brands/oticon/oticon-pediatric.jpg',
    description: {
      en: 'Specifically designed for children\'s developing brains and unique needs.',
      es: 'Específicamente diseñado para cerebros en desarrollo y necesidades únicas de los niños.',
      ca: 'Específicament dissenyat per a cervells en desenvolupament i necessitats úniques dels nens.'
    },
    features: ['BrainHearing™ Technology', 'Safety Features', 'Durable Design']
  }
];

// Accessories data
const accessories = [
  {
    id: 'tv-adapter',
    name: 'TV Adapter 3.0',
    image: '/images/brands/oticon/Oticon_TV_adapter-3.0.webp',
    description: {
      en: 'Stream high-quality TV sound directly to your hearing aids.',
      es: 'Transmite sonido de TV de alta calidad directamente a tus audífonos.',
      ca: 'Transmet so de TV d\'alta qualitat directament als teus audiòfons.'
    }
  },
  {
    id: 'remote-control',
    name: 'Remote Control 3.0',
    image: '/images/brands/oticon/oticon-oticon-remote-control-30-remote-control.webp',
    description: {
      en: 'Discreetly adjust volume and change programs.',
      es: 'Ajusta discretamente el volumen y cambia programas.',
      ca: 'Ajusta discretament el volum i canvia programes.'
    }
  },
  {
    id: 'connect-clip',
    name: 'ConnectClip',
    image: '/images/brands/oticon/connectclip-2-900-638x638.jpg',
    description: {
      en: 'Transform your hearing aids into a wireless headset for hands-free calls and music streaming.',
      es: 'Transforma tus audífonos en auriculares inalámbricos para llamadas manos libres y streaming de música.',
      ca: 'Transforma els teus audiòfons en auriculars sense fils per a trucades mans lliures i streaming de música.'
    }
  },
  {
    id: 'edumic',
    name: 'EduMic',
    image: '/images/brands/oticon/Oticon_EduMic_1000x1000.webp',
    description: {
      en: 'Improve speech understanding in educational settings.',
      es: 'Mejora la comprensión del habla en entornos educativos.',
      ca: 'Millora la comprensió de la parla en entorns educatius.'
    }
  },
  {
    id: 'charger',
    name: 'Smart Charger',
    image: '/images/brands/oticon/Oticon-Smart_Charger_angled.png',
    description: {
      en: 'Convenient charging solution for rechargeable hearing aids.',
      es: 'Solución de carga conveniente para audífonos recargables.',
      ca: 'Solució de càrrega convenient per a audiòfons recarregables.'
    }
  }
];

const OticonModels = () => {
  const { language } = useLanguage();
  
  const content = {
    title: {
      en: "Oticon Hearing Aids Models and Prices",
      es: "Modelos y Precios de Audífonos Oticon",
      ca: "Models i Preus d'Audiòfons Oticon"
    },
    subtitle: {
      en: "Complete guide to Oticon hearing aids in 2025",
      es: "Guía completa de audífonos Oticon en 2025",
      ca: "Guia completa d'audiòfons Oticon al 2025"
    },
    introduction: {
      en: "Discover the complete range of Oticon hearing aids available at Looptica. From premium models with advanced features to more affordable options, find the perfect solution for your hearing needs.",
      es: "Descubre la gama completa de audífonos Oticon disponibles en Looptica. Desde modelos premium con características avanzadas hasta opciones más asequibles, encuentra la solución perfecta para tus necesidades auditivas.",
      ca: "Descobreix la gamma completa d'audiòfons Oticon disponibles a Looptica. Des de models premium amb característiques avançades fins a opcions més assequibles, troba la solució perfecta per a les teves necessitats auditives."
    },
    models: {
      en: "Oticon Models",
      es: "Modelos Oticon",
      ca: "Models Oticon"
    },
    accessories: {
      en: "Accessories and Connectivity",
      es: "Accesorios y Conectividad",
      ca: "Accessoris i Connectivitat"
    },
    viewDetails: {
      en: "View Details",
      es: "Ver Detalles",
      ca: "Veure Detalls"
    },
    features: {
      en: "Features",
      es: "Características",
      ca: "Característiques"
    },
    whatsapp: {
      statusMessage: {
        en: "Typically replies within 1 hour",
        es: "Normalmente responde en 1 hora",
        ca: "Normalment respon en 1 hora"
      },
      chatMessage: {
        en: "Hello! 👋🏼 Interested in learning more about Oticon hearing aids? I'm here to help!",
        es: "¡Hola! 👋🏼 ¿Interesado en saber más sobre los audífonos Oticon? ¡Estoy aquí para ayudar!",
        ca: "Hola! 👋🏼 Interessat en saber més sobre els audiòfons Oticon? Estic aquí per ajudar!"
      },
      placeholder: {
        en: "Type a message...",
        es: "Escribe un mensaje...",
        ca: "Escriu un missatge..."
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>{content.title[language]} | Looptica</title>
        <meta name="description" content={content.subtitle[language]} />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href={`https://www.looptica.com/${language}/products/oticon-models`} />
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{content.title[language]}</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">{content.subtitle[language]}</p>
            </div>

            <div className="prose prose-lg max-w-4xl mx-auto mb-12">
              <p>{content.introduction[language]}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-semibold mb-8 text-center">{content.models[language]}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {oticonModels.map((model) => (
                <Card key={model.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="relative h-48 rounded-t-lg overflow-hidden">
                      <img
                        src={model.image} 
                        alt={model.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback image if the original fails to load
                          e.currentTarget.src = '/placeholder.svg';
                          e.currentTarget.style.filter = 'blur(8px)';
                          e.currentTarget.style.opacity = '0.8';
                        }}
                      />
                    </div>
                    <CardTitle className="mt-4">{model.name}</CardTitle>
                    <CardDescription>{model.description[language]}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-medium text-gray-700 mb-2">{content.features[language]}:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      {model.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link 
                      to={`/products/oticon-models/${model.id}`}
                      className="w-full bg-[#55afa9] hover:bg-[#4a9e98] text-white py-2 px-4 rounded text-center transition-colors"
                    >
                      {content.viewDetails[language]}
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-semibold mb-8 text-center">{content.accessories[language]}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {accessories.map((accessory) => (
                <Card key={accessory.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="relative h-40 rounded-t-lg overflow-hidden">
                      <img
                        src={accessory.image} 
                        alt={accessory.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder.svg';
                          e.currentTarget.style.filter = 'blur(8px)';
                          e.currentTarget.style.opacity = '0.8';
                        }}
                      />
                    </div>
                    <CardTitle className="mt-4">{accessory.name}</CardTitle>
                    <CardDescription>{accessory.description[language]}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp 
        phoneNumber="34699594064"
        accountName="Looptica"
        statusMessage={content.whatsapp.statusMessage[language]}
        chatMessage={content.whatsapp.chatMessage[language]}
        placeholder={content.whatsapp.placeholder[language]}
      />
    </div>
  );
};

export default OticonModels;
