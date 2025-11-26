
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Zap, Headphones, Radio, Wifi, Smartphone, Award, Monitor, Bluetooth, Ear } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
// Removed Footer import as it's handled globally by App.tsx
import { Link } from 'react-router-dom';

const TechnicalAids = () => {
  const { t, language } = useLanguage();
  
  // Page content organized by language
  const content = {
    meta: {
      en: {
        title: "Technical Aids for Hearing Loss | Looptica Barcelona",
        description: "Discover our range of specialized technical aids for hearing loss including Oticon EduMic, ConnectClip, TV Adapter, Remote Control and more at Looptica Barcelona."
      },
      es: {
        title: "Ayudas Técnicas para Pérdida Auditiva | Looptica Barcelona",
        description: "Descubra nuestra gama de ayudas técnicas especializadas para pérdida auditiva, incluyendo Oticon EduMic, ConnectClip, TV Adapter, Control Remoto y más en Looptica Barcelona."
      },
      ca: {
        title: "Ajudes Tècniques per a Pèrdua Auditiva | Looptica Barcelona",
        description: "Descobreix la nostra gamma d'ajudes tècniques especialitzades per a pèrdua auditiva, incloent Oticon EduMic, ConnectClip, TV Adapter, Control Remot i més a Looptica Barcelona."
      }
    },
    audiofonsDigitals: {
      en: {
        title: "Digital Hearing Aids",
        description: "State-of-the-art digital hearing aids that offer advanced sound processing, connectivity features, and personalized listening experiences for various hearing loss needs.",
        features: [
          "Advanced digital sound processing technology",
          "Bluetooth connectivity for seamless device pairing",
          "Rechargeable options with long battery life",
          "Discreet and comfortable designs for all-day wear"
        ],
        benefits: [
          "Improved speech understanding even in noisy environments",
          "Personalized sound profiles tailored to individual hearing needs",
          "Direct streaming from smartphones and other digital devices",
          "Reduced listening effort and fatigue",
          "Enhanced overall quality of life"
        ],
        buttonText: "Explore Digital Hearing Aids"
      },
      es: {
        title: "Audífonos Digitales",
        description: "Audífonos digitales de última generación que ofrecen procesamiento avanzado del sonido, funciones de conectividad y experiencias de escucha personalizadas para diversas necesidades de pérdida auditiva.",
        features: [
          "Tecnología avanzada de procesamiento digital de sonido",
          "Conectividad Bluetooth para emparejamiento perfecto con dispositivos",
          "Opciones recargables con larga duración de batería",
          "Diseños discretos y cómodos para uso durante todo el día"
        ],
        benefits: [
          "Mejor comprensión del habla incluso en entornos ruidosos",
          "Perfiles de sonido personalizados adaptados a necesidades auditivas individuales",
          "Transmisión directa desde smartphones y otros dispositivos digitales",
          "Menor esfuerzo de escucha y fatiga",
          "Mejor calidad de vida en general"
        ],
        buttonText: "Explorar Audífonos Digitales"
      },
      ca: {
        title: "Audiòfons Digitals",
        description: "Audiòfons digitals d'última generació que ofereixen processament avançat del so, funcions de connectivitat i experiències d'escolta personalitzades per a diverses necessitats de pèrdua auditiva.",
        features: [
          "Tecnologia avançada de processament digital de so",
          "Connectivitat Bluetooth per a emparellament perfecte amb dispositius",
          "Opcions recarregables amb llarga durada de bateria",
          "Dissenys discrets i còmodes per a ús durant tot el dia"
        ],
        benefits: [
          "Millor comprensió de la parla fins i tot en entorns sorollosos",
          "Perfils de so personalitzats adaptats a necessitats auditives individuals",
          "Transmissió directa des de smartphones i altres dispositius digitals",
          "Menor esforç d'escolta i fatiga",
          "Millor qualitat de vida en general"
        ],
        buttonText: "Explorar Audiòfons Digitals"
      }
    },
    edumic: {
      en: {
        title: "Oticon EduMic",
        description: "EduMic is a wireless remote microphone designed specifically for educational environments, helping students with hearing loss stay connected to their teacher's voice in the classroom.",
        features: [
          "Directional microphone technology focused on the speaker's voice",
          "Streams high-quality sound directly to Oticon hearing aids",
          "Connects to classroom audio systems, computers, and tablets",
          "Rechargeable battery with a full day of classroom use"
        ],
        benefits: [
          "Improves speech understanding in noisy classrooms",
          "Reduces listening effort for students with hearing loss",
          "Supports better learning outcomes through clear communication",
          "Simple to use with an intuitive interface",
          "Durable design for daily classroom use"
        ]
      },
      es: {
        title: "Oticon EduMic",
        description: "EduMic es un micrófono remoto inalámbrico diseñado específicamente para entornos educativos, ayudando a estudiantes con pérdida auditiva a mantenerse conectados con la voz de su profesor en el aula.",
        features: [
          "Tecnología de micrófono direccional enfocada en la voz del hablante",
          "Transmite sonido de alta calidad directamente a los audífonos Oticon",
          "Se conecta a sistemas de audio de aulas, computadoras y tabletas",
          "Batería recargable con un día completo de uso en el aula"
        ],
        benefits: [
          "Mejora la comprensión del habla en aulas ruidosas",
          "Reduce el esfuerzo de escucha para estudiantes con pérdida auditiva",
          "Apoya mejores resultados de aprendizaje a través de una comunicación clara",
          "Fácil de usar con una interfaz intuitiva",
          "Diseño duradero para uso diario en el aula"
        ]
      },
      ca: {
        title: "Oticon EduMic",
        description: "EduMic és un micròfon remot sense fils dissenyat específicament per a entorns educatius, ajudant a estudiants amb pèrdua auditiva a mantenir-se connectats amb la veu del seu professor a l'aula.",
        features: [
          "Tecnologia de micròfon direccional enfocada en la veu del parlant",
          "Transmet so d'alta qualitat directament als audiòfons Oticon",
          "Es connecta a sistemes d'àudio d'aules, ordinadors i tauletes",
          "Bateria recarregable amb un dia complet d'ús a l'aula"
        ],
        benefits: [
          "Millora la comprensió de la parla en aules sorolloses",
          "Redueix l'esforç d'escolta per a estudiants amb pèrdua auditiva",
          "Dóna suport a millors resultats d'aprenentatge a través d'una comunicació clara",
          "Fàcil d'utilitzar amb una interfície intuïtiva",
          "Disseny durador per a ús diari a l'aula"
        ]
      }
    },
    connectClip: {
      en: {
        title: "Oticon ConnectClip",
        description: "ConnectClip is a versatile accessory that transforms Oticon hearing aids into a high-quality headset for hands-free calls and audio streaming.",
        features: [
          "Streams phone calls directly to both hearing aids",
          "Functions as a remote microphone for better hearing at a distance",
          "Enables hands-free calls from almost any smartphone",
          "Streams music, GPS directions, and other audio content"
        ],
        benefits: [
          "Clear sound for calls and conversations even in noisy environments",
          "Extends hearing range by up to 20 meters in clear line of sight",
          "Easy to use with simple button controls",
          "Long battery life with up to 8 hours of streaming time"
        ]
      },
      es: {
        title: "Oticon ConnectClip",
        description: "ConnectClip es un accesorio versátil que transforma los audífonos Oticon en auriculares de alta calidad para llamadas manos libres y transmisión de audio.",
        features: [
          "Transmite llamadas telefónicas directamente a ambos audífonos",
          "Funciona como micrófono remoto para mejor audición a distancia",
          "Permite llamadas manos libres desde casi cualquier smartphone",
          "Transmite música, indicaciones GPS y otro contenido de audio"
        ],
        benefits: [
          "Sonido claro para llamadas y conversaciones incluso en entornos ruidosos",
          "Amplía el rango de audición hasta 20 metros con línea de visión clara",
          "Fácil de usar con controles de botones simples",
          "Larga duración de batería con hasta 8 horas de tiempo de transmisión"
        ]
      },
      ca: {
        title: "Oticon ConnectClip",
        description: "ConnectClip és un accessori versàtil que transforma els audiòfons Oticon en auriculars d'alta qualitat per a trucades mans lliures i transmissió d'àudio.",
        features: [
          "Transmet trucades telefòniques directament a ambdós audiòfons",
          "Funciona com a micròfon remot per a millor audició a distància",
          "Permet trucades mans lliures des de gairebé qualsevol smartphone",
          "Transmet música, indicacions GPS i altre contingut d'àudio"
        ],
        benefits: [
          "So clar per a trucades i converses fins i tot en entorns sorollosos",
          "Amplia el rang d'audició fins a 20 metres amb línia de visió clara",
          "Fàcil d'utilitzar amb controls de botons simples",
          "Llarga durada de bateria amb fins a 8 hores de temps de transmissió"
        ]
      }
    },
    tvAdapter: {
      en: {
        title: "Oticon TV Adapter",
        description: "The TV Adapter enables direct wireless streaming from your TV to your Oticon hearing aids, providing a personalized sound experience without affecting the TV volume for others.",
        features: [
          "Streams high-quality Dolby Digital stereo sound",
          "Connects to virtually any audio device with digital or analog output",
          "Allows personal volume adjustment independent of the TV speaker",
          "Supports multiple hearing aid users simultaneously"
        ],
        benefits: [
          "Crystal clear TV sound delivered directly to hearing aids",
          "No need to turn up the TV volume to uncomfortable levels for others",
          "Enjoy conversations during TV watching without removing hearing aids",
          "Simple one-time setup with no daily adjustments needed"
        ]
      },
      es: {
        title: "Oticon TV Adapter",
        description: "El TV Adapter permite la transmisión inalámbrica directa desde su televisor a sus audífonos Oticon, proporcionando una experiencia de sonido personalizada sin afectar el volumen del televisor para los demás.",
        features: [
          "Transmite sonido estéreo Dolby Digital de alta calidad",
          "Se conecta prácticamente a cualquier dispositivo de audio con salida digital o analógica",
          "Permite ajuste de volumen personal independiente del altavoz del televisor",
          "Soporta múltiples usuarios de audífonos simultáneamente"
        ],
        benefits: [
          "Sonido de TV cristalino entregado directamente a los audífonos",
          "No hay necesidad de subir el volumen del TV a niveles incómodos para los demás",
          "Disfrute de conversaciones durante la visualización de TV sin quitarse los audífonos",
          "Configuración simple de una sola vez sin ajustes diarios necesarios"
        ]
      },
      ca: {
        title: "Oticon TV Adapter",
        description: "L'adaptador de TV permet la transmissió sense fil directa des del seu televisor als seus audiòfons Oticon, proporcionant una experiència de so personalitzada sense afectar el volum del televisor per als altres.",
        features: [
          "Transmet so estèreo Dolby Digital d'alta qualitat",
          "Es connecta pràcticament a qualsevol dispositiu d'àudio amb sortida digital o analògica",
          "Permet ajust de volum personal independent de l'altaveu del televisor",
          "Suporta múltiples usuaris d'audiòfons simultàniament"
        ],
        benefits: [
          "So de TV cristal·lí lliurat directament als audiòfons",
          "No hi ha necessitat de pujar el volum del TV a nivells incòmodes per als altres",
          "Gaudeixi de converses durant la visualització de TV sense treure's els audiòfons",
          "Configuració simple d'una sola vegada sense ajustos diaris necessaris"
        ]
      }
    },
    remoteControl: {
      en: {
        title: "Oticon Remote Control",
        description: "The Remote Control offers a discreet way to adjust your Oticon hearing aids without touching them, providing easy access to volume controls and program changes.",
        features: [
          "Simple, intuitive interface with large, tactile buttons",
          "Control volume, switch programs, and mute hearing aids",
          "Small, pocket-sized design for discreet use",
          "Compatible with all wireless Oticon hearing aids"
        ],
        benefits: [
          "Easy control for users with limited dexterity",
          "Discreet adjustment without drawing attention",
          "Visual confirmation of hearing aid settings via LED indicators",
          "Long battery life using standard coin cell battery"
        ]
      },
      es: {
        title: "Control Remoto Oticon",
        description: "El Control Remoto ofrece una forma discreta de ajustar sus audífonos Oticon sin tocarlos, proporcionando fácil acceso a los controles de volumen y cambios de programa.",
        features: [
          "Interfaz simple e intuitiva con botones grandes y táctiles",
          "Controle el volumen, cambie programas y silencie los audífonos",
          "Diseño pequeño, de bolsillo para uso discreto",
          "Compatible con todos los audífonos inalámbricos Oticon"
        ],
        benefits: [
          "Control fácil para usuarios con destreza limitada",
          "Ajuste discreto sin llamar la atención",
          "Confirmación visual de la configuración del audífono mediante indicadores LED",
          "Larga duración de la batería utilizando batería estándar de botón"
        ]
      },
      ca: {
        title: "Control Remot Oticon",
        description: "El Control Remot ofereix una forma discreta d'ajustar els seus audiòfons Oticon sense tocar-los, proporcionant fàcil accés als controls de volum i canvis de programa.",
        features: [
          "Interfície simple i intuïtiva amb botons grans i tàctils",
          "Controli el volum, canviï programes i silenciï els audiòfons",
          "Disseny petit, de butxaca per a ús discret",
          "Compatible amb tots els audiòfons sense fil Oticon"
        ],
        benefits: [
          "Control fàcil per a usuaris amb destresa limitada",
          "Ajust discret sense cridar l'atenció",
          "Confirmació visual de la configuració de l'audiòfon mitjançant indicadors LED",
          "Llarga durada de la bateria utilitzant bateria estàndard de botó"
        ]
      }
    },
    charger: {
      en: {
        title: "Oticon SmartCharger",
        description: "The SmartCharger is a portable power bank and charger for Oticon rechargeable hearing aids, providing up to three full charges without access to a power outlet.",
        features: [
          "Portable charging case with built-in power bank",
          "Quick 30-minute charge provides 6 hours of use",
          "Full charge in 3 hours provides full day of hearing",
          "Drying function removes moisture from hearing aids"
        ],
        benefits: [
          "Freedom to travel without worrying about power outlets",
          "Three full charges for your hearing aids when on the go",
          "Automatic drying to extend the life of your hearing aids",
          "Compact design fits easily in pocket or purse"
        ]
      },
      es: {
        title: "Oticon SmartCharger",
        description: "El SmartCharger es un banco de energía portátil y cargador para audífonos recargables Oticon, proporcionando hasta tres cargas completas sin acceso a una toma de corriente.",
        features: [
          "Estuche de carga portátil con banco de energía incorporado",
          "Carga rápida de 30 minutos proporciona 6 horas de uso",
          "Carga completa en 3 horas proporciona un día completo de audición",
          "Función de secado elimina la humedad de los audífonos"
        ],
        benefits: [
          "Libertad para viajar sin preocuparse por tomas de corriente",
          "Tres cargas completas para sus audífonos cuando está en movimiento",
          "Secado automático para extender la vida de sus audífonos",
          "Diseño compacto cabe fácilmente en el bolsillo o bolso"
        ]
      },
      ca: {
        title: "Oticon SmartCharger",
        description: "L'SmartCharger és un banc d'energia portàtil i carregador per a audiòfons recarregables Oticon, proporcionant fins a tres càrregues completes sense accés a una presa de corrent.",
        features: [
          "Estoig de càrrega portàtil amb banc d'energia incorporat",
          "Càrrega ràpida de 30 minuts proporciona 6 hores d'ús",
          "Càrrega completa en 3 hores proporciona un dia complet d'audició",
          "Funció d'assecat elimina la humitat dels audiòfons"
        ],
        benefits: [
          "Llibertat per viatjar sense preocupar-se per preses de corrent",
          "Tres càrregues completes per als seus audiòfons quan està en moviment",
          "Assecat automàtic per estendre la vida dels seus audiòfons",
          "Disseny compacte cap fàcilment a la butxaca o bossa"
        ]
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>{content.meta[language].title}</title>
        <meta name="description" content={content.meta[language].description} />
      </Helmet>
      <ServiceLayout
        title={t('technicalAids')}
        subtitle={t('technicalAidsIntro')}
        image="/images/edumic-press-release.jpg"
        appointmentSubject="Technical Aids Consultation at Looptica"
      >
        <div className="prose max-w-none mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('technicalAidsTitle')}</h2>
          <p className="text-gray-700 mb-8">
            {t('technicalAidsIntro')}
          </p>
          
          <ScrollReveal>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Ear className="mr-2 h-6 w-6 text-[#55afa9]" /> 
                  {content.audiofonsDigitals[language].title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-gray-700 mb-4">{content.audiofonsDigitals[language].description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <Zap className="mr-2 h-5 w-5 text-[#55afa9]" /> 
                        {language === 'en' ? 'Key Features' : (language === 'es' ? 'Características Principales' : 'Característiques Principals')}
                      </h3>
                      <ul className="space-y-2">
                        {content.audiofonsDigitals[language].features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-[#55afa9] mr-2">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <Headphones className="mr-2 h-5 w-5 text-[#55afa9]" /> 
                        {language === 'en' ? 'Benefits' : (language === 'es' ? 'Beneficios' : 'Beneficis')}
                      </h3>
                      <ul className="space-y-2">
                        {content.audiofonsDigitals[language].benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-[#55afa9] mr-2">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <img 
                    src="/images/oticonmoreminiritet.jpg" 
                    alt="Digital hearing aids"
                    className="w-full h-64 object-contain rounded-lg shadow-md my-8"
                    loading="lazy"
                  />
                </div>
                
                <div className="flex justify-center">
                  <Link to={`/${language}/services/hearing-aids`}>
                    <Button className="bg-[#55afa9] hover:bg-[#3d7d78]">
                      {content.audiofonsDigitals[language].buttonText}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
          
          <Separator className="my-12" />
          
          <ScrollReveal>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Radio className="mr-2 h-6 w-6 text-[#55afa9]" /> 
                  {content.edumic[language].title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-gray-700 mb-4">{content.edumic[language].description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <Zap className="mr-2 h-5 w-5 text-[#55afa9]" /> 
                        {language === 'en' ? 'Key Features' : (language === 'es' ? 'Características Principales' : 'Característiques Principals')}
                      </h3>
                      <ul className="space-y-2">
                        {content.edumic[language].features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-[#55afa9] mr-2">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <Headphones className="mr-2 h-5 w-5 text-[#55afa9]" /> 
                        {language === 'en' ? 'Benefits' : (language === 'es' ? 'Beneficios' : 'Beneficis')}
                      </h3>
                      <ul className="space-y-2">
                        {content.edumic[language].benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-[#55afa9] mr-2">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <img 
                    src="/images/brands/oticon/Oticon_EduMic_1000x1000.webp" 
                    alt="Oticon EduMic device"
                    className="w-full h-64 object-contain rounded-lg shadow-md my-8"
                    loading="lazy"
                  />
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
          
          <Separator className="my-12" />
          
          <ScrollReveal>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Smartphone className="mr-2 h-6 w-6 text-[#55afa9]" /> 
                  {content.connectClip[language].title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-gray-700 mb-4">{content.connectClip[language].description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <Zap className="mr-2 h-5 w-5 text-[#55afa9]" /> 
                        {language === 'en' ? 'Key Features' : (language === 'es' ? 'Características Principales' : 'Característiques Principals')}
                      </h3>
                      <ul className="space-y-2">
                        {content.connectClip[language].features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-[#55afa9] mr-2">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <Headphones className="mr-2 h-5 w-5 text-[#55afa9]" /> 
                        {language === 'en' ? 'Benefits' : (language === 'es' ? 'Beneficios' : 'Beneficis')}
                      </h3>
                      <ul className="space-y-2">
                        {content.connectClip[language].benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-[#55afa9] mr-2">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <img 
                    src="/images/brands/oticon/connectclip-2-900-638x638.jpg" 
                    alt="Oticon ConnectClip device"
                    className="w-full h-64 object-contain rounded-lg shadow-md my-8"
                    loading="lazy"
                  />
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
          
          <Separator className="my-12" />
          
          <ScrollReveal>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Monitor className="mr-2 h-6 w-6 text-[#55afa9]" /> 
                  {content.tvAdapter[language].title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-gray-700 mb-4">{content.tvAdapter[language].description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <Zap className="mr-2 h-5 w-5 text-[#55afa9]" /> 
                        {language === 'en' ? 'Key Features' : (language === 'es' ? 'Características Principales' : 'Característiques Principals')}
                      </h3>
                      <ul className="space-y-2">
                        {content.tvAdapter[language].features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-[#55afa9] mr-2">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <Headphones className="mr-2 h-5 w-5 text-[#55afa9]" /> 
                        {language === 'en' ? 'Benefits' : (language === 'es' ? 'Beneficios' : 'Beneficis')}
                      </h3>
                      <ul className="space-y-2">
                        {content.tvAdapter[language].benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-[#55afa9] mr-2">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <img 
                    src="/images/brands/oticon/connect-tv-3.0-1.webp" 
                    alt="Oticon TV Adapter device"
                    className="w-full h-64 object-contain rounded-lg shadow-md my-8"
                    loading="lazy"
                  />
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
          
          <Separator className="my-12" />
          
          <ScrollReveal>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bluetooth className="mr-2 h-6 w-6 text-[#55afa9]" /> 
                  {content.remoteControl[language].title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-gray-700 mb-4">{content.remoteControl[language].description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <Zap className="mr-2 h-5 w-5 text-[#55afa9]" /> 
                        {language === 'en' ? 'Key Features' : (language === 'es' ? 'Características Principales' : 'Característiques Principals')}
                      </h3>
                      <ul className="space-y-2">
                        {content.remoteControl[language].features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-[#55afa9] mr-2">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <Headphones className="mr-2 h-5 w-5 text-[#55afa9]" /> 
                        {language === 'en' ? 'Benefits' : (language === 'es' ? 'Beneficios' : 'Beneficis')}
                      </h3>
                      <ul className="space-y-2">
                        {content.remoteControl[language].benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-[#55afa9] mr-2">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <img 
                    src="/images/brands/oticon/oticon-oticon-remote-control-30-remote-control.webp" 
                    alt="Oticon Remote Control device"
                    className="w-full h-64 object-contain rounded-lg shadow-md my-8"
                    loading="lazy"
                  />
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
          
          <Separator className="my-12" />
          
          <ScrollReveal>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="mr-2 h-6 w-6 text-[#55afa9]" /> 
                  {content.charger[language].title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-gray-700 mb-4">{content.charger[language].description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <Zap className="mr-2 h-5 w-5 text-[#55afa9]" /> 
                        {language === 'en' ? 'Key Features' : (language === 'es' ? 'Características Principales' : 'Característiques Principals')}
                      </h3>
                      <ul className="space-y-2">
                        {content.charger[language].features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-[#55afa9] mr-2">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <Headphones className="mr-2 h-5 w-5 text-[#55afa9]" /> 
                        {language === 'en' ? 'Benefits' : (language === 'es' ? 'Beneficios' : 'Beneficis')}
                      </h3>
                      <ul className="space-y-2">
                        {content.charger[language].benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-[#55afa9] mr-2">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <img 
                    src="/images/brands/oticon/Oticon-Smart_Charger_angled.png" 
                    alt="Oticon SmartCharger device"
                    className="w-full h-64 object-contain rounded-lg shadow-md my-8"
                    loading="lazy"
                  />
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </ServiceLayout>
      {/* Footer component removed from here, as App.tsx handles it globally */}
    </>
  );
};

export default TechnicalAids;
