
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Eye, Zap, Shield, Layers } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';

const LensConsulting = () => {
  const { language } = useLanguage();
  
  // Content organized by section first, then by language
  const content = {
    meta: {
      en: {
        title: "Advanced Lens Consulting Services | Looptica Barcelona",
        description: "Expert lens consulting and high-tech ophthalmic lens solutions at Looptica Barcelona. Find the perfect lenses for your prescription and lifestyle."
      },
      es: {
        title: "Asesoramiento de Lentes | Looptica Barcelona",
        description: "Asesoramiento experto en lentes y soluciones oftálmicas de alta tecnología en Looptica Barcelona. Encuentra las lentes perfectas para tu prescripción y estilo de vida."
      },
      ca: {
        title: "Assessorament de Lents | Looptica Barcelona",
        description: "Assessorament expert en lents i solucions oftàlmiques d'alta tecnologia a Looptica Barcelona. Troba les lents perfectes per a la teva prescripció i estil de vida."
      },
      de: {
        title: "Erweiterte Linsenberatung | Looptica Barcelona",
        description: "Expertenberatung für Linsen und hochmoderne ophthalmische Linsenlösungen bei Looptica Barcelona. Finden Sie die perfekten Linsen für Ihre Verschreibung und Ihren Lebensstil."
      }
    },
    hero: {
      en: {
        title: "Lens Consulting",
        subtitle: "Advanced solutions for your visual needs",
        appointmentSubject: "Lens Consulting Appointment at Looptica"
      },
      es: {
        title: "Asesoramiento de Lentes",
        subtitle: "Soluciones avanzadas para tus necesidades visuales",
        appointmentSubject: "Consulta de Asesoramiento de Lentes en Looptica"
      },
      ca: {
        title: "Assessorament de Lents",
        subtitle: "Solucions avançades per a les teves necessitats visuals",
        appointmentSubject: "Consulta d'Assessorament de Lents a Looptica"
      },
      de: {
        title: "Linsenberatung",
        subtitle: "Erweiterte Lösungen für Ihre visuellen Bedürfnisse",
        appointmentSubject: "Linsenberatungstermin bei Looptica"
      }
    },
    intro: {
      title: {
        en: "Advanced Lens Technology",
        es: "Tecnología de lentes avanzada",
        ca: "Tecnologia de lents avançada",
        de: "Erweiterte Linsentechnologie"
      },
      paragraphs: {
        en: [
          "At Looptica, we specialize in high-tech ophthalmic lenses designed to deliver the best visual clarity, comfort, and protection. Modern lenses are much more than simple pieces of glass or plastic; they are precision products that integrate advanced technologies to meet the specific visual needs of each individual.",
          "Our lens consulting service is designed to guide you through the numerous options available, ensuring you get the most suitable lenses for your prescription, lifestyle, and personal preferences. Using cutting-edge technology and our expert knowledge, we customize lens solutions to deliver an optimal visual experience."
        ],
        es: [
          "En Looptica, somos especialistas en lentes oftálmicas de alta tecnología diseñadas para ofrecer la mejor claridad visual, comodidad y protección. Las lentes modernas son mucho más que simples piezas de vidrio o plástico; son productos de precisión que integran tecnologías avanzadas para satisfacer las necesidades visuales específicas de cada individuo.",
          "Nuestro servicio de asesoramiento de lentes está diseñado para guiarte a través de las numerosas opciones disponibles, asegurando que obtengas las lentes más adecuadas para tu prescripción, estilo de vida y preferencias personales. Utilizando tecnología de vanguardia y nuestro conocimiento experto, personalizamos las soluciones de lentes para ofrecer una experiencia visual óptima."
        ],
        ca: [
          "A Looptica, som especialistes en lents oftàlmiques d'alta tecnologia dissenyades per oferir la millor claredat visual, comoditat i protecció. Les lents modernes són molt més que simples peces de vidre o plàstic; són productes de precisió que integren tecnologies avançades per satisfer les necessitats visuals específiques de cada individu.",
          "El nostre servei d'assessorament de lents està dissenyat per guiar-te a través de les nombroses opcions disponibles, assegurant que obtinguis les lents més adequades per a la teva prescripció, estil de vida i preferències personals. Utilitzant tecnologia d'avantguarda i el nostre coneixement expert, personalitzem les solucions de lents per oferir una experiència visual òptima."
        ],
        de: [
          "Bei Looptica sind wir Spezialisten für hochmoderne ophthalmische Linsen, die beste Sehschärfe, Komfort und Schutz bieten. Moderne Linsen sind viel mehr als einfache Glas- oder Kunststoffstücke; sie sind Präzisionsprodukte, die fortschrittliche Technologien integrieren, um die spezifischen visuellen Bedürfnisse jedes Einzelnen zu erfüllen.",
          "Unser Linsenberatungsservice ist darauf ausgelegt, Sie durch die zahlreichen verfügbaren Optionen zu führen und sicherzustellen, dass Sie die am besten geeigneten Linsen für Ihre Verschreibung, Ihren Lebensstil und Ihre persönlichen Vorlieben erhalten. Mit modernster Technologie und unserem Expertenwissen passen wir Linsenlösungen an, um ein optimales Seherlebnis zu liefern."
        ]
      }
    },
    technologies: {
      title: {
        en: "Our Advanced Lens Technologies",
        es: "Nuestras tecnologías de lentes avanzadas",
        ca: "Les nostres tecnologies de lents avançades",
        de: "Unsere fortschrittlichen Linsentechnologien"
      },
      items: [
        {
          title: {
            en: "High-Definition Lenses",
            es: "Lentes de alta definición",
            ca: "Lents d'alta definició",
            de: "High-Definition Linsen"
          },
          description: {
            en: "Developed using digital surfacing technology, these lenses offer superior visual clarity with a wider field of vision and significantly reduced peripheral distortions.",
            es: "Desarrolladas mediante tecnología de fresado digital, estas lentes ofrecen una claridad visual superior con un campo visual más amplio y una reducción significativa de las distorsiones periféricas.",
            ca: "Desenvolupades mitjançant tecnologia de fresat digital, aquestes lents ofereixen una claredat visual superior amb un camp visual més ampli i una reducció significativa de les distorsions perifèriques.",
            de: "Mit digitaler Oberflächentechnologie entwickelt, bieten diese Linsen überlegene Sehschärfe mit einem breiteren Sichtfeld und erheblich reduzierten peripheren Verzerrungen."
          },
          icon: <Eye className="w-6 h-6 text-white" />
        },
        {
          title: {
            en: "Advanced Progressive Lenses",
            es: "Lentes progresivas avanzadas",
            ca: "Lents progressives avançades",
            de: "Fortschrittliche Gleitsichtgläser"
          },
          description: {
            en: "Our state-of-the-art progressive lenses provide seamless transition between distance, intermediate, and near vision, with minimal distortion zones and a shorter adaptation period.",
            es: "Nuestras lentes progresivas de última generación proporcionan una transición perfecta entre visión de lejos, intermedia y cercana, con zonas de distorsión mínimas y un período de adaptación más corto.",
            ca: "Les nostres lents progressives d'última generació proporcionen una transició perfecta entre visió de lluny, intermèdia i propera, amb zones de distorsió mínimes i un període d'adaptació més curt.",
            de: "Unsere hochmodernen Gleitsichtgläser bieten nahtlose Übergänge zwischen Fern-, Zwischen- und Nahsicht mit minimalen Verzerrungszonen und einer kürzeren Anpassungszeit."
          },
          icon: <Zap className="w-6 h-6 text-white" />
        },
        {
          title: {
            en: "Blue Light Protection",
            es: "Protección de luz azul",
            ca: "Protecció de llum blava",
            de: "Blaulichtschutz"
          },
          description: {
            en: "Specialized lenses that filter harmful blue light from digital devices, reducing eye strain, improving visual comfort during prolonged screen use, and potentially improving sleep patterns.",
            es: "Lentes especializadas que filtran la luz azul nociva de los dispositivos digitales, reduciendo la fatiga ocular, mejorando el confort visual durante el uso prolongado de pantallas y potencialmente mejorando los patrones de sueño.",
            ca: "Lents especialitzades que filtren la llum blava nociva dels dispositius digitals, reduint la fatiga ocular, millorant el confort visual durant l'ús prolongat de pantalles i potencialment millorant els patrons de son.",
            de: "Spezialisierte Linsen, die schädliches blaues Licht von digitalen Geräten filtern, Augenermüdung reduzieren, den visuellen Komfort bei längerer Bildschirmnutzung verbessern und möglicherweise Schlafmuster verbessern."
          },
          icon: <Shield className="w-6 h-6 text-white" />
        },
        {
          title: {
            en: "Premium Coatings",
            es: "Revestimientos premium",
            ca: "Revestiments premium",
            de: "Premium-Beschichtungen"
          },
          description: {
            en: "We offer high-performance anti-reflective coatings, scratch-resistant layers, hydrophobic treatments, and UV protection to enhance the durability, clarity, and protection of your lenses.",
            es: "Ofrecemos revestimientos anti-reflectantes de alto rendimiento, capas resistentes a los arañazos, tratamientos hidrófobos y protección UV para mejorar la durabilidad, claridad y protección de tus lentes.",
            ca: "Oferim revestiments anti-reflectants d'alt rendiment, capes resistents als ratllats, tractaments hidròfobs i protecció UV per millorar la durabilitat, claredat i protecció de les teves lents.",
            de: "Wir bieten hochleistungsfähige Antireflexbeschichtungen, kratzfeste Schichten, hydrophobe Behandlungen und UV-Schutz, um die Haltbarkeit, Klarheit und den Schutz Ihrer Linsen zu verbessern."
          },
          icon: <Layers className="w-6 h-6 text-white" />
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>{content.meta[language].title}</title>
        <meta name="description" content={content.meta[language].description} />
      </Helmet>
      <ServiceLayout
        title={content.hero[language].title}
        subtitle={content.hero[language].subtitle}
        image="/lovable-uploads/a99c44aa-a4a4-45a4-9616-1ef080bd49db.jpeg"
        appointmentSubject={content.hero[language].appointmentSubject}
      >
        <ScrollReveal>
          <div className="prose prose-lg max-w-none mb-12">
            <h2>{content.intro.title[language]}</h2>
            {content.intro.paragraphs[language].map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-semibold mb-6">{content.technologies.title[language]}</h3>
            
            <div className="space-y-6">
              {content.technologies.items.map((tech, index) => (
                <div className="flex gap-4" key={index}>
                  <div className="bg-[#55afa9] rounded-full p-3 h-fit">
                    {tech.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">{tech.title[language]}</h4>
                    <p>{tech.description[language]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </ServiceLayout>
    </>
  );
};

export default LensConsulting;
