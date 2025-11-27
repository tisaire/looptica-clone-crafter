
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Eye, Shield, CheckSquare, Award } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';

const SalutVisual = () => {
  const { language } = useLanguage();
  
  // Content organized by section first, then by language
  const content = {
    meta: {
      en: {
        title: "Visual Health Services | Looptica Barcelona",
        description: "Comprehensive visual health exams and eye care at Looptica Barcelona. Expert optometrists, advanced technology, and personalized vision solutions."
      },
      es: {
        title: "Servicios de Salud Visual | Looptica Barcelona",
        description: "Exámenes completos de salud visual y cuidado ocular en Looptica Barcelona. Optometristas expertos, tecnología avanzada y soluciones de visión personalizadas."
      },
      ca: {
        title: "Serveis de Salut Visual | Looptica Barcelona",
        description: "Exàmens complets de salut visual i cura ocular a Looptica Barcelona. Optometristes experts, tecnologia avançada i solucions de visió personalitzades."
      },
      de: {
        title: "Sehgesundheitsdienste | Looptica Barcelona",
        description: "Umfassende Sehgesundheitsuntersuchungen und Augenpflege bei Looptica Barcelona. Experten-Optometristen, fortschrittliche Technologie und personalisierte Sehlösungen."
      }
    },
    hero: {
      en: {
        title: "Visual Health",
        subtitle: "We take care of your eyes with the best technology and professionals",
        appointmentSubject: "Visual Health Exam at Looptica"
      },
      es: {
        title: "Salud Visual",
        subtitle: "Cuidamos de tus ojos con la mejor tecnología y profesionales",
        appointmentSubject: "Examen de Salud Visual en Looptica"
      },
      ca: {
        title: "Salut Visual",
        subtitle: "Cuidem dels teus ulls amb la millor tecnologia i professionals",
        appointmentSubject: "Examen de Salut Visual a Looptica"
      },
      de: {
        title: "Sehgesundheit",
        subtitle: "Wir kümmern uns um Ihre Augen mit der besten Technologie und Fachkräften",
        appointmentSubject: "Sehgesundheitsuntersuchung bei Looptica"
      }
    },
    whatIs: {
      title: {
        en: "What is a visual health exam?",
        es: "¿Qué es un examen de salud visual?",
        ca: "Què és un examen de salut visual?",
        de: "Was ist eine Sehgesundheitsuntersuchung?"
      },
      paragraphs: {
        en: [
          "A visual health exam is a comprehensive assessment of the state of your eyes and vision performed by eye health professionals. It goes beyond a simple vision test; it's a complete review that examines general eye health, visual function, and detects possible eye problems or systemic diseases that can affect the eyes.",
          "At Looptica, we believe that preventive care is essential to maintaining good vision throughout life. Our comprehensive vision exams use cutting-edge technology to provide a detailed assessment of all aspects of your eye health."
        ],
        es: [
          "Un examen de salud visual es una evaluación integral del estado de sus ojos y de su visión realizada por profesionales de la salud ocular. Va más allá de una simple prueba de visión; es una revisión completa que examina la salud ocular general, la función visual y detecta posibles problemas oculares o enfermedades sistémicas que pueden afectar los ojos.",
          "En Looptica, creemos que la atención preventiva es fundamental para mantener una buena visión durante toda la vida. Nuestros exámenes visuales completos utilizan tecnología de vanguardia para proporcionar una evaluación detallada de todos los aspectos de su salud ocular."
        ],
        ca: [
          "Un examen de salut visual és una avaluació integral de l'estat dels seus ulls i de la seva visió realitzada per professionals de la salut ocular. Va més enllà d'una simple prova de visió; és una revisió completa que examina la salut ocular general, la funció visual i detecta possibles problemes oculars o malalties sistèmiques que poden afectar els ulls.",
          "A Looptica, creiem que l'atenció preventiva és fonamental per mantenir una bona visió durant tota la vida. Els nostres exàmens visuals complets utilitzen tecnologia d'avantguarda per proporcionar una avaluació detallada de tots els aspectes de la seva salut ocular."
        ],
        de: [
          "Eine Sehgesundheitsuntersuchung ist eine umfassende Bewertung des Zustands Ihrer Augen und Ihres Sehvermögens, die von Augengesundheitsfachkräften durchgeführt wird. Sie geht über einen einfachen Sehtest hinaus; es ist eine vollständige Überprüfung, die die allgemeine Augengesundheit, die Sehfunktion untersucht und mögliche Augenprobleme oder systemische Krankheiten erkennt, die die Augen beeinträchtigen können.",
          "Bei Looptica glauben wir, dass Vorsorge wesentlich ist, um ein Leben lang gutes Sehen zu erhalten. Unsere umfassenden Sehuntersuchungen verwenden modernste Technologie, um eine detaillierte Bewertung aller Aspekte Ihrer Augengesundheit zu bieten."
        ]
      }
    },
    process: {
      title: {
        en: "Our visual examination process",
        es: "Nuestro proceso de examen visual",
        ca: "El nostre procés d'examen visual",
        de: "Unser Sehuntersuchungsprozess"
      },
      steps: [
        {
          title: {
            en: "Medical history",
            es: "Anamnesis",
            ca: "Anamnesi",
            de: "Anamnese"
          },
          description: {
            en: "Detailed review of your medical, ocular, and family history, including current medications and lifestyle that might affect your vision.",
            es: "Revisión detallada de su historial médico, ocular y familiar, incluyendo medicamentos actuales y estilo de vida que podrían afectar su visión.",
            ca: "Revisió detallada del seu historial mèdic, ocular i familiar, incloent medicaments actuals i estil de vida que podrien afectar la seva visió.",
            de: "Detaillierte Überprüfung Ihrer medizinischen, okularen und Familiengeschichte, einschließlich aktueller Medikamente und Lebensstil, die Ihr Sehvermögen beeinflussen könnten."
          },
          icon: <Eye className="w-6 h-6 text-white" />
        },
        {
          title: {
            en: "Preliminary exams",
            es: "Exámenes preliminares",
            ca: "Exàmens preliminars",
            de: "Voruntersuchungen"
          },
          description: {
            en: "Assessment of visual acuity, color perception, peripheral vision, and intraocular pressure to detect early signs of problems.",
            es: "Evaluación de la agudeza visual, percepción de colores, visión periférica y presión intraocular para detectar signos tempranos de problemas.",
            ca: "Avaluació de l'agudesa visual, percepció de colors, visió perifèrica i pressió intraocular per detectar signes primerencs de problemes.",
            de: "Bewertung der Sehschärfe, Farbwahrnehmung, peripheren Sicht und des Augeninnendrucks zur Erkennung früher Anzeichen von Problemen."
          },
          icon: <CheckSquare className="w-6 h-6 text-white" />
        },
        {
          title: {
            en: "Refraction",
            es: "Refracción",
            ca: "Refracció",
            de: "Refraktion"
          },
          description: {
            en: "Precise determination of your lens prescription using objective and subjective methods to ensure the best possible visual correction.",
            es: "Determinación precisa de su prescripción de lentes utilizando métodos objetivos y subjetivos para garantizar la mejor corrección visual posible.",
            ca: "Determinació precisa de la seva prescripció de lents utilitzant mètodes objectius i subjectius per garantir la millor correcció visual possible.",
            de: "Präzise Bestimmung Ihrer Linsenverordnung unter Verwendung objektiver und subjektiver Methoden, um die bestmögliche Sehkorrektur zu gewährleisten."
          },
          icon: <Shield className="w-6 h-6 text-white" />
        },
        {
          title: {
            en: "Eye health evaluation",
            es: "Evaluación de la salud ocular",
            ca: "Avaluació de la salut ocular",
            de: "Augengesundheitsbewertung"
          },
          description: {
            en: "Comprehensive examination of the internal and external structures of the eye to detect diseases such as glaucoma, cataracts, macular degeneration, and diabetic retinopathy.",
            es: "Examen completo de las estructuras internas y externas del ojo para detectar enfermedades como glaucoma, cataratas, degeneración macular y retinopatía diabética.",
            ca: "Examen complet de les estructures internes i externes de l'ull per detectar malalties com glaucoma, cataractes, degeneració macular i retinopatia diabètica.",
            de: "Umfassende Untersuchung der inneren und äußeren Strukturen des Auges zur Erkennung von Krankheiten wie Glaukom, Katarakt, Makuladegeneration und diabetischer Retinopathie."
          },
          icon: <Award className="w-6 h-6 text-white" />
        }
      ]
    },
    importance: {
      title: {
        en: "Why are regular eye exams important?",
        es: "¿Por qué son importantes los exámenes visuales regulares?",
        ca: "Per què són importants els exàmens visuals regulars?",
        de: "Warum sind regelmäßige Augenuntersuchungen wichtig?"
      },
      paragraphs: {
        en: [
          "Many eye diseases do not present symptoms in their early stages. Regular exams can detect problems before they cause irreversible damage or vision loss. In addition, the eyes can reveal signs of systemic health conditions such as diabetes, hypertension, and high cholesterol."
        ],
        es: [
          "Muchas enfermedades oculares no presentan síntomas en sus etapas iniciales. Los exámenes regulares pueden detectar problemas antes de que causen daños irreversibles o pérdida de visión. Además, los ojos pueden revelar signos de condiciones de salud sistémicas como diabetes, hipertensión y colesterol alto."
        ],
        ca: [
          "Moltes malalties oculars no presenten símptomes en les seves etapes inicials. Els exàmens regulars poden detectar problemes abans que causin danys irreversibles o pèrdua de visió. A més, els ulls poden revelar signes de condicions de salut sistèmiques com diabetis, hipertensió i colesterol alt."
        ],
        de: [
          "Viele Augenkrankheiten zeigen in ihren frühen Stadien keine Symptome. Regelmäßige Untersuchungen können Probleme erkennen, bevor sie irreversible Schäden oder Sehverlust verursachen. Darüber hinaus können die Augen Anzeichen systemischer Gesundheitszustände wie Diabetes, Bluthochdruck und hohem Cholesterinspiegel offenbaren."
        ]
      },
      recommendations: {
        intro: {
          en: "We recommend comprehensive eye exams:",
          es: "Recomendamos exámenes visuales completos:",
          ca: "Recomanem exàmens visuals complets:",
          de: "Wir empfehlen umfassende Augenuntersuchungen:"
        },
        items: {
          en: [
            "Every 2 years for adults 18-60 years without visual problems or risk factors",
            "Annually for people over 60 years old",
            "Annually for people of any age who wear contact lenses, have risk factors or existing medical conditions",
            "According to the recommendations of your optometrist or ophthalmologist for children and adolescents"
          ],
          es: [
            "Cada 2 años para adultos de 18 a 60 años sin problemas visuales o factores de riesgo",
            "Anualmente para personas de más de 60 años",
            "Anualmente para personas de cualquier edad que usen lentes de contacto, tengan factores de riesgo o condiciones médicas existentes",
            "Según las recomendaciones de su optometrista u oftalmólogo para niños y adolescentes"
          ],
          ca: [
            "Cada 2 anys per a adults de 18 a 60 anys sense problemes visuals o factors de risc",
            "Anualment per a persones de més de 60 anys",
            "Anualment per a persones de qualsevol edat que portin lents de contacte, tinguin factors de risc o condicions mèdiques existents",
            "Segons les recomanacions del seu optometrista o oftalmòleg per a nens i adolescents"
          ],
          de: [
            "Alle 2 Jahre für Erwachsene im Alter von 18-60 Jahren ohne Sehprobleme oder Risikofaktoren",
            "Jährlich für Menschen über 60 Jahre",
            "Jährlich für Menschen jeden Alters, die Kontaktlinsen tragen, Risikofaktoren haben oder bestehende medizinische Zustände",
            "Gemäß den Empfehlungen Ihres Optometristen oder Augenarztes für Kinder und Jugendliche"
          ]
        }
      }
    },
    technology: {
      title: {
        en: "Advanced Technology at Looptica",
        es: "Tecnología avanzada en Looptica",
        ca: "Tecnologia avançada a Looptica",
        de: "Fortschrittliche Technologie bei Looptica"
      },
      items: [
        {
          title: {
            en: "Optical Coherence Tomography (OCT)",
            es: "Tomografía de Coherencia Óptica (OCT)",
            ca: "Tomografia de Coherència Òptica (OCT)",
            de: "Optische Kohärenztomographie (OCT)"
          },
          description: {
            en: "Allows us to obtain cross-sectional images of the retina, providing details about its structure with microscopic precision.",
            es: "Nos permite obtener imágenes de la retina en secciones transversales, proporcionando detalles sobre su estructura con precisión microscópica.",
            ca: "Ens permet obtenir imatges de la retina en seccions transversals, proporcionant detalls sobre la seva estructura amb precisió microscòpica.",
            de: "Ermöglicht es uns, Querschnittsbilder der Netzhaut zu erhalten und Details über ihre Struktur mit mikroskopischer Präzision zu liefern."
          }
        },
        {
          title: {
            en: "Corneal Topography",
            es: "Topografía Corneal",
            ca: "Topografia Corneal",
            de: "Hornhauttopographie"
          },
          description: {
            en: "Creates a 3D map of the cornea's surface, essential for contact lens fitting and detection of corneal disorders.",
            es: "Crea un mapa 3D de la superficie de la córnea, esencial para la adaptación de lentes de contacto y la detección de trastornos corneales.",
            ca: "Crea un mapa 3D de la superfície de la còrnia, essencial per a l'adaptació de lents de contacte i la detecció de trastorns corneals.",
            de: "Erstellt eine 3D-Karte der Hornhautoberfläche, wesentlich für die Anpassung von Kontaktlinsen und die Erkennung von Hornhautstörungen."
          }
        },
        {
          title: {
            en: "State-of-the-art Autorefractometers",
            es: "Autorrefractómetros de última generación",
            ca: "Autorefractòmetres d'última generació",
            de: "Modernste Autorefraktometer"
          },
          description: {
            en: "Provides objective measurements of the eye's refractive error, speeding up and improving the accuracy of the prescription process.",
            es: "Proporciona mediciones objetivas del error de refracción del ojo, acelerando y mejorando la precisión del proceso de prescripción.",
            ca: "Proporciona mesuraments objectius de l'error de refracció de l'ull, accelerant i millorant la precisió del procés de prescripció.",
            de: "Liefert objektive Messungen des Brechungsfehlers des Auges, beschleunigt und verbessert die Genauigkeit des Verschreibungsprozesses."
          }
        },
        {
          title: {
            en: "Digital Slit Lamp Examination",
            es: "Examen con lámpara de hendidura digital",
            ca: "Examen amb làmpada de fenedura digital",
            de: "Digitale Spaltlampenuntersuchung"
          },
          description: {
            en: "Allows detailed examination and photographic documentation of anterior and posterior eye structures.",
            es: "Permite el examen detallado y documentación fotográfica de las estructuras oculares anteriores y posteriores.",
            ca: "Permet l'examen detallat i documentació fotogràfica de les estructures oculars anteriors i posteriors.",
            de: "Ermöglicht eine detaillierte Untersuchung und fotografische Dokumentation der vorderen und hinteren Augenstrukturen."
          }
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
        image="/images/_DSC4696.jpg"
        appointmentSubject={content.hero[language].appointmentSubject}
      >
        <ScrollReveal>
          <div className="prose prose-lg max-w-none mb-12">
            <h2>{content.whatIs.title[language]}</h2>
            {content.whatIs.paragraphs[language].map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-semibold mb-6">{content.process.title[language]}</h3>
            
            <div className="space-y-6">
              {content.process.steps.map((step, index) => (
                <div className="flex gap-4" key={index}>
                  <div className="bg-[#55afa9] rounded-full p-3 h-fit">
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
            <h2>{content.importance.title[language]}</h2>
            {content.importance.paragraphs[language].map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <p>{content.importance.recommendations.intro[language]}</p>
            <ul>
              {content.importance.recommendations.items[language].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">{content.technology.title[language]}</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {content.technology.items.map((tech, index) => (
                <div className="bg-white p-6 rounded-lg shadow-sm" key={index}>
                  <h4 className="text-xl font-medium mb-2">{tech.title[language]}</h4>
                  <p>{tech.description[language]}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </ServiceLayout>
    </>
  );
};

export default SalutVisual;
