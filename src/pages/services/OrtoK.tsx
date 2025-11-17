
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Moon, Sun, Target, Clock } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';

const OrtoK = () => {
  const { language } = useLanguage();
  
  // Content organized by section first, then by language
  const content = {
    meta: {
      en: {
        title: "Ortho-K in Barcelona · Looptica Poblenou | Overnight Vision Correction",
        description: "Ortho-K treatment in Barcelona with overnight vision correction. Certified specialists in Looptica Poblenou. Safe, reversible and ideal for myopia. Book now."
      },
      es: {
        title: "Orto-K en Barcelona · Looptica Poblenou | Corrección Visual Nocturna",
        description: "Tratamiento Orto-K en Barcelona con corrección visual nocturna. Especialistas certificados en Looptica Poblenou. Seguro, reversible e ideal para miopía."
      },
      ca: {
        title: "Orto-K a Barcelona · Looptica Poblenou | Correcció Visual Nocturna",
        description: "Tractament Orto-K a Barcelona amb correcció visual nocturna. Especialistes certificats a Looptica Poblenou. Segur, reversible i ideal per a miopia."
      },
      de: {
        title: "Ortho-K in Barcelona · Looptica Poblenou | Nächtliche Sehkorrektur",
        description: "Ortho-K-Behandlung in Barcelona mit nächtlicher Sehkorrektur. Zertifizierte Spezialisten bei Looptica Poblenou. Sicher, reversibel und ideal für Kurzsichtigkeit."
      }
    },
    hero: {
      en: {
        title: "Orthokeratology (Ortho-K)",
        subtitle: "Clear vision without glasses or lenses during the day",
        appointmentSubject: "Orthokeratology Consultation at Looptica"
      },
      es: {
        title: "Ortoqueratología (Orto-K)",
        subtitle: "Visión clara sin gafas ni lentes durante el día",
        appointmentSubject: "Consulta de Ortoqueratología en Looptica"
      },
      ca: {
        title: "Ortoqueratologia (Orto-K)",
        subtitle: "Visió clara sense ulleres ni lents durant el dia",
        appointmentSubject: "Consulta d'Ortoqueratologia a Looptica"
      },
      de: {
        title: "Orthokeratologie (Ortho-K)",
        subtitle: "Klares Sehen ohne Brille oder Linsen tagsüber",
        appointmentSubject: "Orthokeratologie-Beratung bei Looptica"
      }
    },
    intro: {
      title: {
        en: "What is Orthokeratology?",
        es: "¿Qué es la Ortoqueratología?",
        ca: "Què és l'Ortoqueratologia?",
        de: "Was ist Orthokeratologie?"
      },
      paragraphs: {
        en: [
          "Orthokeratology, commonly known as Ortho-K, is an advanced technique that uses specially designed contact lenses that are worn during sleep. These lenses temporarily reshape the cornea (the front surface of the eye), thus correcting refractive errors such as myopia, hyperopia, and astigmatism.",
          "The result? Clear vision during the day without the need for glasses or conventional contact lenses. It's like \"orthodontics\" for your eyes, but with temporary results that are achieved while you sleep."
        ],
        es: [
          "La Ortoqueratología, comúnmente conocida como Orto-K, es una técnica avanzada que utiliza lentes de contacto especialmente diseñadas que se usan durante la noche mientras se duerme. Estas lentes remodelan temporalmente la córnea (la superficie frontal del ojo), corrigiendo así errores de refracción como la miopía, la hipermetropía y el astigmatismo.",
          "¿El resultado? Una visión clara durante el día sin necesidad de gafas o lentes de contacto convencionales. Es como una \"ortodoncia\" para sus ojos, pero con resultados temporales que se logran mientras duerme."
        ],
        ca: [
          "L'Ortoqueratologia, comunament coneguda com Orto-K, és una tècnica avançada que utilitza lents de contacte especialment dissenyades que es porten durant la nit mentre es dorm. Aquestes lents remodelten temporalment la còrnia (la superfície frontal de l'ull), corregint així errors de refracció com la miopia, l'hipermetropia i l'astigmatisme.",
          "El resultat? Una visió clara durant el dia sense necessitat d'ulleres o lents de contacte convencionals. És com una \"ortodòncia\" per als seus ulls, però amb resultats temporals que s'aconsegueixen mentre dorm."
        ],
        de: [
          "Orthokeratologie, allgemein bekannt als Ortho-K, ist eine fortschrittliche Technik, die speziell entwickelte Kontaktlinsen verwendet, die während des Schlafs getragen werden. Diese Linsen formen vorübergehend die Hornhaut (die vordere Oberfläche des Auges) um und korrigieren so Brechungsfehler wie Kurzsichtigkeit, Weitsichtigkeit und Astigmatismus.",
          "Das Ergebnis? Klares Sehen tagsüber ohne die Notwendigkeit einer Brille oder herkömmlicher Kontaktlinsen. Es ist wie eine \"Kieferorthopädie\" für Ihre Augen, aber mit vorübergehenden Ergebnissen, die während des Schlafs erreicht werden."
        ]
      }
    },
    process: {
      title: {
        en: "How does Ortho-K work?",
        es: "¿Cómo funciona Orto-K?",
        ca: "Com funciona l'Orto-K?"
      },
      steps: [
        {
          title: {
            en: "During the night",
            es: "Durante la noche",
            ca: "Durant la nit"
          },
          description: {
            en: "Ortho-K lenses apply gentle pressure on the cornea, altering its contour. They are made with high DK (highly oxygen permeable) materials, allowing the eyes to breathe while sleeping.",
            es: "Las lentes Orto-K aplican una presión suave sobre la córnea, alterando su contorno. Están fabricadas con materiales de alto DK (altamente permeable al oxígeno), permitiendo que los ojos respiren mientras duermen.",
            ca: "Les lents Orto-K apliquen una pressió suau sobre la còrnia, alterant el seu contorn. Són fabricades amb materials d'alt DK (altament permeable a l'oxigen), permetent que els ulls respirin mentre dormen."
          },
          icon: <Moon className="w-6 h-6 text-white" />
        },
        {
          title: {
            en: "During the day",
            es: "Durante el día",
            ca: "Durant el dia"
          },
          description: {
            en: "Upon waking and removing the lenses, the cornea maintains its new shape, providing clear vision throughout the day without the need for additional visual correction.",
            es: "Al despertar y retirar las lentes, la córnea mantiene su nueva forma, proporcionando una visión clara durante todo el día sin necesidad de corrección visual adicional.",
            ca: "En despertar i retirar les lents, la còrnia manté la seva nova forma, proporcionant una visió clara durant tot el dia sense necessitat de correcció visual addicional."
          },
          icon: <Sun className="w-6 h-6 text-white" />
        },
        {
          title: {
            en: "Cumulative results",
            es: "Resultados acumulativos",
            ca: "Resultats acumulatius"
          },
          description: {
            en: "With continued use, many patients experience more stable and lasting results. Some may even space out the use of lenses to every other night while maintaining good vision.",
            es: "Con el uso continuado, muchos pacientes experimentan resultados más estables y duraderos. Algunos pueden incluso espaciar el uso de las lentes a cada dos noches manteniendo una buena visión.",
            ca: "Amb l'ús continuat, molts pacients experimenten resultats més estables i duradors. Alguns poden fins i tot espaiar l'ús de les lents a cada dues nits mantenint una bona visió."
          },
          icon: <Target className="w-6 h-6 text-white" />
        },
        {
          title: {
            en: "Temporary effects",
            es: "Efectos temporales",
            ca: "Efectes temporals"
          },
          description: {
            en: "The effects are completely reversible. If you stop using Ortho-K lenses, the cornea will gradually return to its original shape and vision will return to its previous state.",
            es: "Los efectos son completamente reversibles. Si deja de utilizar las lentes Orto-K, la córnea volverá gradualmente a su forma original y la visión volverá a su estado previo.",
            ca: "Els efectes són completament reversibles. Si deixa d'utilitzar les lents Orto-K, la còrnia tornarà gradualment a la seva forma original i la visió tornarà al seu estat previ."
          },
          icon: <Clock className="w-6 h-6 text-white" />
        }
      ]
    },
    benefits: {
      title: {
        en: "Benefits of Ortho-K",
        es: "Beneficios de Orto-K",
        ca: "Beneficis de l'Orto-K"
      },
      items: [
        {
          title: {
            en: "Freedom from glasses",
            es: "Libertad de las gafas",
            ca: "Llibertat de les ulleres"
          },
          description: {
            en: "Ideal for athletes, swimmers, and people with active lifestyles who find glasses or contact lenses uncomfortable during certain activities.",
            es: "Ideal para deportistas, nadadores y personas con estilos de vida activos que encuentran las gafas o lentes de contacto incómodas durante ciertas actividades.",
            ca: "Ideal per a esportistes, nedadors i persones amb estils de vida actius que troben les ulleres o lents de contacte incòmodes durant certes activitats."
          }
        },
        {
          title: {
            en: "Myopia control",
            es: "Control de la miopía",
            ca: "Control de la miopia"
          },
          description: {
            en: "Studies have shown that Ortho-K can help slow the progression of myopia in children and adolescents, making it a valuable tool for myopia management.",
            es: "Estudios han demostrado que Orto-K puede ayudar a frenar la progresión de la miopía en niños y adolescentes, convirtiéndose en una herramienta valiosa para la gestión de la miopía.",
            ca: "Estudis han demostrat que l'Orto-K pot ajudar a frenar la progressió de la miopia en nens i adolescents, convertint-se en una eina valuosa per a la gestió de la miopia."
          }
        },
        {
          title: {
            en: "Alternative to surgery",
            es: "Alternativa a la cirugía",
            ca: "Alternativa a la cirurgia"
          },
          description: {
            en: "Provides many of the benefits of refractive surgery without the risks associated with surgical procedures and with completely reversible results.",
            es: "Proporciona muchos de los beneficios de la cirugía refractiva sin los riesgos asociados a los procedimientos quirúrgicos y con resultados completamente reversibles.",
            ca: "Proporciona molts dels beneficis de la cirurgia refractiva sense els riscos associats als procediments quirúrgics i amb resultats completament reversibles."
          }
        },
        {
          title: {
            en: "Improved quality of life",
            es: "Mejora de la calidad de vida",
            ca: "Millora de la qualitat de vida"
          },
          description: {
            en: "Frees patients from the constant dependence on glasses or daytime contact lenses, simplifying their daily routine.",
            es: "Libera a los pacientes de la dependencia constante de gafas o lentes de contacto diurnas, simplificando su rutina diaria.",
            ca: "Allibera als pacients de la dependència constant d'ulleres o lents de contacte diürnes, simplificant la seva rutina diària."
          }
        }
      ]
    },
    adaptationProcess: {
      title: {
        en: "The adaptation process at Looptica",
        es: "El proceso de adaptación en Looptica",
        ca: "El procés d'adaptació a Looptica"
      },
      intro: {
        en: "At Looptica, we have highly specialized optometrists in orthokeratology who have helped numerous patients achieve clear vision without daytime corrections. Our adaptation process includes:",
        es: "En Looptica, contamos con optometristas altamente especializados en ortoqueratología que han ayudado a numerosos pacientes a conseguir una visión clara sin correcciones diurnas. Nuestro proceso de adaptación incluye:",
        ca: "A Looptica, comptem amb optometristes altament especialitzats en ortoqueratologia que han ajudat nombrosos pacients a aconseguir una visió clara sense correccions diürnes. El nostre procés d'adaptació inclou:"
      },
      steps: {
        en: [
          {
            title: "Initial assessment:",
            description: "An exhaustive eye exam to determine if you are a good candidate for Ortho-K. We assess corneal topography, eye health, and your prescription."
          },
          {
            title: "Custom design:",
            description: "Using advanced corneal topography technology, we design Ortho-K lenses specifically for your eyes."
          },
          {
            title: "Instructions for use:",
            description: "We teach you how to insert, remove, and maintain your Ortho-K lenses properly."
          },
          {
            title: "Regular monitoring:",
            description: "We schedule follow-up visits to monitor your progress and make adjustments if necessary."
          },
          {
            title: "Continuous support:",
            description: "Our team is always available to address any questions or concerns you may have."
          }
        ],
        es: [
          {
            title: "Evaluación inicial:",
            description: "Un examen ocular exhaustivo para determinar si usted es un buen candidato para Orto-K. Evaluamos la topografía corneal, la salud ocular y su prescripción."
          },
          {
            title: "Diseño personalizado:",
            description: "Utilizando tecnología avanzada de topografía corneal, diseñamos lentes Orto-K específicamente para sus ojos."
          },
          {
            title: "Instrucciones de uso:",
            description: "Le enseñamos cómo insertar, retirar y mantener sus lentes Orto-K adecuadamente."
          },
          {
            title: "Seguimiento regular:",
            description: "Programamos visitas de seguimiento para monitorear su progreso y realizar ajustes si es necesario."
          },
          {
            title: "Soporte continuo:",
            description: "Nuestro equipo está siempre disponible para atender cualquier consulta o inquietud que pueda tener."
          }
        ],
        ca: [
          {
            title: "Avaluació inicial:",
            description: "Un examen ocular exhaustiu per determinar si vostè és un bon candidat per a l'Orto-K. Avaluem la topografia corneal, la salut ocular i la seva prescripció."
          },
          {
            title: "Disseny personalitzat:",
            description: "Utilitzant tecnologia avançada de topografia corneal, dissenyem lents Orto-K específicament per als seus ulls."
          },
          {
            title: "Instruccions d'ús:",
            description: "Li ensenyem com insertar, retirar i mantenir les seves lents Orto-K adequadament."
          },
          {
            title: "Seguiment regular:",
            description: "Programem visites de seguiment per monitorar el seu progrés i realitzar ajustos si és necessari."
          },
          {
            title: "Suport continu:",
            description: "El nostre equip està sempre disponible per atendre qualsevol consulta o preocupació que pugui tenir."
          }
        ]
      },
      candidateInfo: {
        title: {
          en: "Are you a good candidate for Ortho-K?",
          es: "¿Es usted un buen candidato para Orto-K?",
          ca: "És vostè un bon candidat per a l'Orto-K?"
        },
        suitableFor: {
          intro: {
            en: "Ortho-K is suitable for people with:",
            es: "Orto-K es adecuado para personas con:",
            ca: "L'Orto-K és adequat per a persones amb:"
          },
          conditions: {
            en: [
              "Mild to moderate myopia (up to -6.00 diopters)",
              "Mild astigmatism (up to -1.75 diopters)",
              "Mild hyperopia (up to +3.00 diopters)",
              "Healthy corneas and eyes free of disease"
            ],
            es: [
              "Miopía leve a moderada (hasta -6.00 dioptrías)",
              "Astigmatismo leve (hasta -1.75 dioptrías)",
              "Hipermetropía leve (hasta +3.00 dioptrías)",
              "Córneas saludables y ojos libres de enfermedad"
            ],
            ca: [
              "Miopia lleu a moderada (fins a -6.00 diòptries)",
              "Astigmatisme lleu (fins a -1.75 diòptries)",
              "Hipermetropia lleu (fins a +3.00 diòptries)",
              "Còrnies saludables i ulls lliures de malalties"
            ]
          }
        },
        beneficialFor: {
          intro: {
            en: "It is especially beneficial for:",
            es: "Es especialmente beneficioso para:",
            ca: "És especialment beneficiós per a:"
          },
          profiles: {
            en: [
              "Children and adolescents with progressive myopia",
              "Athletes and people with active lifestyles",
              "People who work in dusty or dry environments that make conventional contact lenses uncomfortable",
              "Those who are not suitable candidates for refractive surgery"
            ],
            es: [
              "Niños y adolescentes con miopía progresiva",
              "Deportistas y personas con estilos de vida activos",
              "Personas que trabajan en entornos polvorientos o secos que hacen incómodo el uso de lentes de contacto convencionales",
              "Aquellos que no son candidatos adecuados para la cirugía refractiva"
            ],
            ca: [
              "Nens i adolescents amb miopia progressiva",
              "Esportistes i persones amb estils de vida actius",
              "Persones que treballen en entorns polsosos o secs que fan incòmode l'ús de lents de contacte convencionals",
              "Aquells que no són candidats adequats per a la cirurgia refractiva"
            ]
          }
        }
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
            <h2>{content.intro.title[language]}</h2>
            {content.intro.paragraphs[language].map((paragraph, index) => (
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
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">{content.benefits.title[language]}</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {content.benefits.items.map((benefit, index) => (
                <div className="bg-white p-6 rounded-lg shadow-sm" key={index}>
                  <h4 className="text-xl font-medium mb-2">{benefit.title[language]}</h4>
                  <p>{benefit.description[language]}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="prose prose-lg max-w-none mb-12">
            <h2>{content.adaptationProcess.title[language]}</h2>
            <p>{content.adaptationProcess.intro[language]}</p>
            <ol>
              {content.adaptationProcess.steps[language].map((step, index) => (
                <li key={index}>
                  <strong>{step.title}</strong> {step.description}
                </li>
              ))}
            </ol>
            <h3>{content.adaptationProcess.candidateInfo.title[language]}</h3>
            <p>{content.adaptationProcess.candidateInfo.suitableFor.intro[language]}</p>
            <ul>
              {content.adaptationProcess.candidateInfo.suitableFor.conditions[language].map((condition, index) => (
                <li key={index}>{condition}</li>
              ))}
            </ul>
            <p>{content.adaptationProcess.candidateInfo.beneficialFor.intro[language]}</p>
            <ul>
              {content.adaptationProcess.candidateInfo.beneficialFor.profiles[language].map((profile, index) => (
                <li key={index}>{profile}</li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </ServiceLayout>
    </>
  );
};

export default OrtoK;
