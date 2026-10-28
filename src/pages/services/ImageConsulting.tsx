
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { PenTool, User, Lightbulb, Smile } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';

const ImageConsulting = () => {
  const { language } = useLanguage();
  
  // Content organized by section first, then by language
  const content = {
    meta: {
      en: {
        title: "Image Consulting Services | looptica Barcelona",
        description: "Professional image consulting for eyewear at looptica Barcelona. Find frames that enhance your appearance and complement your personal style."
      },
      es: {
        title: "Servicios de Asesoramiento de Imagen | looptica Barcelona",
        description: "Asesoramiento de imagen profesional para gafas en looptica Barcelona. Encuentra monturas que realcen tu apariencia y complementen tu estilo personal."
      },
      ca: {
        title: "Serveis d'Assessorament d'Imatge | looptica Barcelona",
        description: "Assessorament d'imatge professional per a ulleres a looptica Barcelona. Troba muntures que realcin la teva aparença i complementin el teu estil personal."
      },
      de: {
        title: "Imageberatung für Brillen | looptica Barcelona",
        description: "Professionelle Imageberatung für Brillen bei looptica Barcelona. Finden Sie Fassungen, die Ihr Aussehen verbessern und Ihren persönlichen Stil ergänzen."
      }
    },
    hero: {
      en: {
        title: "Image Consulting",
        subtitle: "Find the style that best suits your personality",
        appointmentSubject: "Image Consulting at looptica"
      },
      es: {
        title: "Asesoramiento de Imagen",
        subtitle: "Encuentra el estilo que mejor se adapta a tu personalidad",
        appointmentSubject: "Asesoramiento de Imagen en looptica"
      },
      ca: {
        title: "Assessorament d'Imatge",
        subtitle: "Troba l'estil que millor s'adapta a la teva personalitat",
        appointmentSubject: "Assessorament d'Imatge a looptica"
      },
      de: {
        title: "Imageberatung",
        subtitle: "Finden Sie den Stil, der am besten zu Ihrer Persönlichkeit passt",
        appointmentSubject: "Imageberatung bei looptica"
      }
    },
    serviceIntro: {
      title: {
        en: "Our Image Consulting Service",
        es: "Nuestro servicio de asesoramiento de imagen",
        ca: "El nostre servei d'assessorament d'imatge",
        de: "Unser Imageberatungsservice"
      },
      paragraphs: {
        en: [
          "At looptica, we understand that eyeglasses are more than just a visual corrective tool; they're an essential part of your personal image. Our image consulting service is designed to help you find the perfect eyewear that not only enhances your vision but also complements your personal style, face shape, and lifestyle.",
          "Our style consultants are specially trained to provide expert guidance on frame selection, combining their knowledge of current trends with a deep understanding of how different eyewear styles suit different face types and personalities."
        ],
        es: [
          "En looptica, entendemos que las gafas son más que una herramienta correctiva visual; son una parte esencial de tu imagen personal. Nuestro servicio de asesoramiento de imagen está diseñado para ayudarte a encontrar las gafas perfectas que no solo mejoren tu visión, sino que también complementen tu estilo personal, la forma de tu rostro y tu estilo de vida.",
          "Nuestros consultores de estilo están especialmente formados para ofrecer orientación experta sobre la selección de monturas, combinando su conocimiento de las tendencias actuales con una comprensión profunda de cómo diferentes estilos de gafas se adaptan a diferentes tipos de rostros y personalidades."
        ],
        ca: [
          "A looptica, entenem que les ulleres són més que una eina correctiva visual; són una part essencial de la teva imatge personal. El nostre servei d'assessorament d'imatge està dissenyat per ajudar-te a trobar les ulleres perfectes que no només millorin la teva visió, sinó que també complementin el teu estil personal, la forma del teu rostre i el teu estil de vida.",
          "Els nostres consultors d'estil estan especialment formats per oferir orientació experta sobre la selecció de muntures, combinant el seu coneixement de les tendències actuals amb una comprensió profunda de com diferents estils de ulleres s'adapten a diferents tipus de rostres i personalitats."
        ],
        de: [
          "Bei looptica verstehen wir, dass Brillen mehr als nur ein visuelles Korrekturinstrument sind; sie sind ein wesentlicher Teil Ihres persönlichen Images. Unser Imageberatungsservice ist darauf ausgelegt, Ihnen dabei zu helfen, die perfekte Brille zu finden, die nicht nur Ihr Sehvermögen verbessert, sondern auch Ihren persönlichen Stil, Ihre Gesichtsform und Ihren Lebensstil ergänzt.",
          "Unsere Stilberater sind speziell geschult, um fachkundige Beratung bei der Brillenfassung zu bieten, wobei sie ihr Wissen über aktuelle Trends mit einem tiefen Verständnis dafür kombinieren, wie verschiedene Brillenstile zu verschiedenen Gesichtstypen und Persönlichkeiten passen."
        ]
      }
    },
    consultationProcess: {
      title: {
        en: "Our Image Consultation Process",
        es: "Nuestro proceso de consulta de imagen",
        ca: "El nostre procés de consulta d'imatge",
        de: "Unser Imageberatungsprozess"
      },
      steps: [
        {
          title: {
            en: "Face Shape Analysis",
            es: "Análisis de la forma del rostro",
            ca: "Anàlisi de la forma del rostre",
            de: "Gesichtsform-Analyse"
          },
          description: {
            en: "We determine your face shape to recommend frame styles that enhance your natural features and provide visual balance.",
            es: "Determinamos la forma de tu rostro para recomendar estilos de montura que realcen tus rasgos naturales y proporcionen un equilibrio visual.",
            ca: "Determinem la forma del teu rostre per recomanar estils de muntura que realcin els teus trets naturals i proporcionin un equilibri visual.",
            de: "Wir bestimmen Ihre Gesichtsform, um Fassungsstile zu empfehlen, die Ihre natürlichen Züge hervorheben und visuelles Gleichgewicht schaffen."
          },
          icon: <User className="w-6 h-6 text-white" />
        },
        {
          title: {
            en: "Color Assessment",
            es: "Evaluación del color",
            ca: "Avaluació del color",
            de: "Farbbewertung"
          },
          description: {
            en: "We analyze your skin tone, hair color, and eye color to suggest frame colors that best complement your personal palette.",
            es: "Analizamos tu tono de piel, color de cabello y ojos para sugerir colores de montura que mejor complementen tu paleta personal.",
            ca: "Analitzem el teu to de pell, color de cabell i ulls per suggerir colors de muntura que millor complementin la teva paleta personal.",
            de: "Wir analysieren Ihren Hautton, Ihre Haar- und Augenfarbe, um Fassungsfarben vorzuschlagen, die am besten zu Ihrer persönlichen Farbpalette passen."
          },
          icon: <PenTool className="w-6 h-6 text-white" />
        },
        {
          title: {
            en: "Lifestyle Considerations",
            es: "Consideraciones de estilo de vida",
            ca: "Consideracions d'estil de vida",
            de: "Lifestyle-Überlegungen"
          },
          description: {
            en: "We discuss your daily habits, profession, and leisure activities to recommend frames that suit your specific lifestyle.",
            es: "Discutimos tus hábitos diarios, profesión y actividades de ocio para recomendar monturas que se adapten a tu estilo de vida específico.",
            ca: "Discutim els teus hàbits diaris, professió i activitats d'oci per recomanar muntures que s'adaptin al teu estil de vida específic.",
            de: "Wir besprechen Ihre täglichen Gewohnheiten, Ihren Beruf und Ihre Freizeitaktivitäten, um Fassungen zu empfehlen, die zu Ihrem spezifischen Lebensstil passen."
          },
          icon: <Lightbulb className="w-6 h-6 text-white" />
        },
        {
          title: {
            en: "Personalized Selection",
            es: "Selección personalizada",
            ca: "Selecció personalitzada",
            de: "Personalisierte Auswahl"
          },
          description: {
            en: "Based on our analysis, we present you with a curated selection of frames that meet all criteria, allowing you to try various options to find the one that makes you feel most comfortable and confident.",
            es: "Basándonos en nuestro análisis, te presentamos una selección curada de monturas que cumplen todos los criterios, permitiéndote probar varias opciones para encontrar la que te haga sentir más cómodo y seguro.",
            ca: "Basant-nos en la nostra anàlisi, et presentem una selecció curada de muntures que compleixen tots els criteris, permetent-te provar diverses opcions per trobar la que et faci sentir més còmode i segur.",
            de: "Basierend auf unserer Analyse präsentieren wir Ihnen eine kuratierte Auswahl von Fassungen, die alle Kriterien erfüllen, sodass Sie verschiedene Optionen ausprobieren können, um diejenige zu finden, die Sie am wohlsten und selbstbewusstesten fühlen lässt."
          },
          icon: <Smile className="w-6 h-6 text-white" />
        }
      ]
    },
    benefits: {
      title: {
        en: "Benefits of Our Image Consulting",
        es: "Beneficios de nuestro asesoramiento de imagen",
        ca: "Beneficis del nostre assessorament d'imatge",
        de: "Vorteile unserer Imageberatung"
      },
      items: [
        {
          title: {
            en: "Enhanced Confidence",
            es: "Confianza mejorada",
            ca: "Confiança millorada",
            de: "Gestärktes Selbstvertrauen"
          },
          description: {
            en: "When you wear eyewear that perfectly complements your appearance and personality, you experience a natural boost in confidence.",
            es: "Cuando llevas gafas que complementan perfectamente tu apariencia y personalidad, experimentas un aumento natural de la confianza.",
            ca: "Quan portes ulleres que complementen perfectament la teva aparença i personalitat, experimentes un augment natural de la confiança.",
            de: "Wenn Sie eine Brille tragen, die perfekt zu Ihrem Aussehen und Ihrer Persönlichkeit passt, erleben Sie einen natürlichen Vertrauensschub."
          }
        },
        {
          title: {
            en: "Time Savings",
            es: "Ahorro de tiempo",
            ca: "Estalvi de temps",
            de: "Zeitersparnis"
          },
          description: {
            en: "Our expert guidance eliminates the confusion and stress of navigating through hundreds of options, making the selection process efficient and enjoyable.",
            es: "Nuestra orientación experta elimina la confusión y el estrés de navegar entre cientos de opciones, haciendo que el proceso de selección sea eficiente y agradable.",
            ca: "La nostra orientació experta elimina la confusió i l'estrès de navegar entre centenars de opcions, fent que el procés de selecció sigui eficient i agradable.",
            de: "Unsere fachkundige Beratung beseitigt die Verwirrung und den Stress beim Navigieren durch Hunderte von Optionen und macht den Auswahlprozess effizient und angenehm."
          }
        },
        {
          title: {
            en: "Versatility",
            es: "Versatilidad",
            ca: "Versatilitat",
            de: "Vielseitigkeit"
          },
          description: {
            en: "We can help you select multiple pairs of eyewear for different occasions, ensuring you have the perfect accessory for every setting and activity.",
            es: "Podemos ayudarte a seleccionar múltiples pares de gafas para diferentes ocasiones, asegurando que tengas el accesorio perfecto para cada entorno y actividad.",
            ca: "Podem ajudar-te a seleccionar múltiples parells d'ulleres per a diferents ocasions, assegurant que tinguis l'accessori perfecte per a cada entorn i activitat.",
            de: "Wir können Ihnen dabei helfen, mehrere Brillenpaare für verschiedene Anlässe auszuwählen, damit Sie das perfekte Accessoire für jede Umgebung und Aktivität haben."
          }
        },
        {
          title: {
            en: "Long-term Investment",
            es: "Inversión a largo plazo",
            ca: "Inversió a llarg termini",
            de: "Langfristige Investition"
          },
          description: {
            en: "Proper image consulting ensures your eyewear is not just a visual solution but also a lasting investment in your appearance and well-being.",
            es: "El asesoramiento de imagen adecuado asegura que tus gafas no solo sean una solución visual, sino también una inversión duradera en tu apariencia y bienestar.",
            ca: "L'assessorament d'imatge adequat assegura que les teves ulleres no només siguin una solució visual, sinó també una inversió duradora en la teva aparença i benestar.",
            de: "Eine ordnungsgemäße Imageberatung stellt sicher, dass Ihre Brille nicht nur eine visuelle Lösung ist, sondern auch eine dauerhafte Investition in Ihr Aussehen und Wohlbefinden."
          }
        }
      ]
    },
    designerCollections: {
      title: {
        en: "Our Designer Collections",
        es: "Nuestras colecciones de diseñador",
        ca: "Les nostres col·leccions de dissenyador",
        de: "Unsere Designer-Kollektionen"
      },
      intro: {
        en: "At looptica, we pride ourselves on offering an exceptional selection of frames from prestigious designers and exclusive independent brands. Our collection includes:",
        es: "En looptica, nos enorgullecemos de ofrecer una selección excepcional de monturas de diseñadores prestigiosos y marcas independientes exclusivas. Nuestra colección incluye:",
        ca: "A looptica, ens enorgullim d'oferir una selecció excepcional de muntures de dissenyadors prestigiosos i marques independents exclusives. La nostra col·lecció inclou:",
        de: "Bei looptica sind wir stolz darauf, eine außergewöhnliche Auswahl an Fassungen von renommierten Designern und exklusiven unabhängigen Marken zu bieten. Unsere Kollektion umfasst:"
      },
      brands: ["Etnia Barcelona", "Woodys Barcelona", "Xavier Garcia", "Kaleos", "Talla Eyewear", "Garrett Leight", "Moscot", "Ray-Ban", "Tom Ford"],
      conclusion: {
        en: "Each brand has been carefully curated for its quality, style, and commitment to design excellence, ensuring our clientele has access to the finest eyewear options available.",
        es: "Cada marca ha sido cuidadosamente seleccionada por su calidad, estilo y compromiso con la excelencia en diseño, asegurando que nuestra clientela tenga acceso a las mejores opciones de gafas disponibles.",
        ca: "Cada marca ha estat acuradament seleccionada per la seva qualitat, estil i compromís amb l'excel·lència en disseny, assegurant que la nostra clientela tingui accés a les millors opcions d'ulleres disponibles.",
        de: "Jede Marke wurde sorgfältig aufgrund ihrer Qualität, ihres Stils und ihres Engagements für Design-Exzellenz ausgewählt, um sicherzustellen, dass unsere Kunden Zugang zu den besten verfügbaren Brillenoptionen haben."
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
        title={content.hero[language].title}
        subtitle={content.hero[language].subtitle}
        image="/lovable-uploads/45087a9c-489a-4d48-82fb-d857e7bf306a.jpg"
        appointmentSubject={content.hero[language].appointmentSubject}
      >
        <ScrollReveal>
          <div className="prose prose-lg max-w-none mb-12">
            <h2>{content.serviceIntro.title[language]}</h2>
            {content.serviceIntro.paragraphs[language].map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-semibold mb-6">{content.consultationProcess.title[language]}</h3>
            
            <div className="space-y-6">
              {content.consultationProcess.steps.map((step, index) => (
                <div className="flex gap-4" key={index}>
                  <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">{step.title[language]}</h4>
                    <p>{step.description[language]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="prose prose-lg max-w-none mb-12">
            <h2>{content.benefits.title[language]}</h2>
            <ul>
              {content.benefits.items.map((benefit, index) => (
                <li key={index}>
                  <strong>{benefit.title[language]}</strong>
                  <p>{benefit.description[language]}</p>
                </li>
              ))}
            </ul>
            <h3>{content.designerCollections.title[language]}</h3>
            <p>{content.designerCollections.intro[language]}</p>
            <ul>
              {content.designerCollections.brands.map((brand, index) => (
                <li key={index}>{brand}</li>
              ))}
            </ul>
            <p>{content.designerCollections.conclusion[language]}</p>
          </div>
        </ScrollReveal>
      </ServiceLayout>
    </>
  );
};

export default ImageConsulting;
