
import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Moon, Sun, Target, Clock } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const OrtoK = () => {
  const { language } = useLanguage();
  
  // Content organized by section first, then by language
  const content = {
    meta: {
      en: {
        title: "Ortho-K Lenses Barcelona | Overnight Contact Lenses | Looptica",
        description: "Ortho-K overnight contact lenses in Barcelona: correct myopia and astigmatism while you sleep. Certified Ortho-K specialists in Poblenou. Free consultation."
      },
      es: {
        title: "Lentillas Orto-K Barcelona | Lentes Nocturnas | Looptica Poblenou",
        description: "Lentillas Orto-K en Barcelona: corrige miopía y astigmatismo mientras duermes. Especialistas en ortoqueratología en Poblenou. Consulta y presupuesto sin compromiso."
      },
      ca: {
        title: "Lents Orto-K Barcelona | Lentilles Nocturnes | Looptica Poblenou",
        description: "Lents Orto-K a Barcelona: corregeix miopia i astigmatisme mentre dorms. Especialistes en ortoqueratologia a Poblenou. Consulta i pressupost sense compromís."
      },
      de: {
        title: "Ortho-K Linsen Barcelona | Nachtlinsen | Looptica Poblenou",
        description: "Ortho-K Nachtlinsen in Barcelona: Korrektur von Kurzsichtigkeit und Astigmatismus im Schlaf. Zertifizierte Spezialisten in Poblenou. Kostenlose Beratung."
      }
    },
    hero: {
      en: {
        title: "Ortho-K Lenses: Overnight Contact Lenses in Barcelona",
        subtitle: "Correct myopia while you sleep — see clearly all day without glasses or daytime contact lenses.",
        appointmentSubject: "Orthokeratology Consultation at Looptica"
      },
      es: {
        title: "Lentillas Orto-K: lentes de contacto nocturnas en Barcelona",
        subtitle: "Corrige la miopía mientras duermes — ve con claridad todo el día sin gafas ni lentillas diurnas.",
        appointmentSubject: "Consulta de Ortoqueratología en Looptica"
      },
      ca: {
        title: "Lents Orto-K: lentilles de contacte nocturnes a Barcelona",
        subtitle: "Corregeix la miopia mentre dorms — hi veus amb claredat tot el dia sense ulleres ni lentilles diürnes.",
        appointmentSubject: "Consulta d'Ortoqueratologia a Looptica"
      },
      de: {
        title: "Ortho-K Linsen: Nachtkontaktlinsen in Barcelona",
        subtitle: "Korrigieren Sie Kurzsichtigkeit im Schlaf — sehen Sie den ganzen Tag klar ohne Brille oder Tageslinsen.",
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
        ca: "Com funciona l'Orto-K?",
        de: "Wie funktioniert Ortho-K?"
      },
      steps: [
        {
          title: {
            en: "During the night",
            es: "Durante la noche",
            ca: "Durant la nit",
            de: "Während der Nacht"
          },
          description: {
            en: "Ortho-K lenses apply gentle pressure on the cornea, altering its contour. They are made with high DK (highly oxygen permeable) materials, allowing the eyes to breathe while sleeping.",
            es: "Las lentes Orto-K aplican una presión suave sobre la córnea, alterando su contorno. Están fabricadas con materiales de alto DK (altamente permeable al oxígeno), permitiendo que los ojos respiren mientras duermen.",
            ca: "Les lents Orto-K apliquen una pressió suau sobre la còrnia, alterant el seu contorn. Són fabricades amb materials d'alt DK (altament permeable a l'oxigen), permetent que els ulls respirin mentre dormen.",
            de: "Ortho-K-Linsen üben sanften Druck auf die Hornhaut aus und verändern deren Kontur. Sie bestehen aus Materialien mit hohem DK-Wert (hochsauerstoffdurchlässig), wodurch die Augen während des Schlafs atmen können."
          },
          icon: <Moon className="w-6 h-6 text-white" />
        },
        {
          title: {
            en: "During the day",
            es: "Durante el día",
            ca: "Durant el dia",
            de: "Während des Tages"
          },
          description: {
            en: "Upon waking and removing the lenses, the cornea maintains its new shape, providing clear vision throughout the day without the need for additional visual correction.",
            es: "Al despertar y retirar las lentes, la córnea mantiene su nueva forma, proporcionando una visión clara durante todo el día sin necesidad de corrección visual adicional.",
            ca: "En despertar i retirar les lents, la còrnia manté la seva nova forma, proporcionant una visió clara durant tot el dia sense necessitat de correcció visual addicional.",
            de: "Nach dem Aufwachen und Entfernen der Linsen behält die Hornhaut ihre neue Form bei und bietet den ganzen Tag über klares Sehen ohne zusätzliche Sehkorrektur."
          },
          icon: <Sun className="w-6 h-6 text-white" />
        },
        {
          title: {
            en: "Cumulative results",
            es: "Resultados acumulativos",
            ca: "Resultats acumulatius",
            de: "Kumulative Ergebnisse"
          },
          description: {
            en: "With continued use, many patients experience more stable and lasting results. Some may even space out the use of lenses to every other night while maintaining good vision.",
            es: "Con el uso continuado, muchos pacientes experimentan resultados más estables y duraderos. Algunos pueden incluso espaciar el uso de las lentes a cada dos noches manteniendo una buena visión.",
            ca: "Amb l'ús continuat, molts pacients experimenten resultats més estables i duradors. Alguns poden fins i tot espaiar l'ús de les lents a cada dues nits mantenint una bona visió.",
            de: "Bei fortgesetzter Anwendung erleben viele Patienten stabilere und länger anhaltende Ergebnisse. Einige können die Linsen sogar nur jede zweite Nacht tragen und dabei gutes Sehen beibehalten."
          },
          icon: <Target className="w-6 h-6 text-white" />
        },
        {
          title: {
            en: "Temporary effects",
            es: "Efectos temporales",
            ca: "Efectes temporals",
            de: "Temporäre Effekte"
          },
          description: {
            en: "The effects are completely reversible. If you stop using Ortho-K lenses, the cornea will gradually return to its original shape and vision will return to its previous state.",
            es: "Los efectos son completamente reversibles. Si deja de utilizar las lentes Orto-K, la córnea volverá gradualmente a su forma original y la visión volverá a su estado previo.",
            ca: "Els efectes són completament reversibles. Si deixa d'utilitzar les lents Orto-K, la còrnia tornarà gradualment a la seva forma original i la visió tornarà al seu estat previ.",
            de: "Die Effekte sind vollständig reversibel. Wenn Sie die Ortho-K-Linsen nicht mehr verwenden, kehrt die Hornhaut allmählich zu ihrer ursprünglichen Form zurück und das Sehvermögen kehrt in seinen vorherigen Zustand zurück."
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
            ca: "Ideal per a esportistes, nedadors i persones amb estils de vida actius que troben les ulleres o lents de contacte incòmodes durant certes activitats.",
            de: "Ideal für Sportler, Schwimmer und Menschen mit aktiven Lebensstilen, die Brillen oder Kontaktlinsen bei bestimmten Aktivitäten als unbequem empfinden."
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
            ca: "Estudis han demostrat que l'Orto-K pot ajudar a frenar la progressió de la miopia en nens i adolescents, convertint-se en una eina valuosa per a la gestió de la miopia.",
            de: "Studien haben gezeigt, dass Ortho-K helfen kann, das Fortschreiten der Kurzsichtigkeit bei Kindern und Jugendlichen zu verlangsamen, was es zu einem wertvollen Werkzeug für das Myopie-Management macht."
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
            ca: "Proporciona molts dels beneficis de la cirurgia refractiva sense els riscos associats als procediments quirúrgics i amb resultats completament reversibles.",
            de: "Bietet viele Vorteile der refraktiven Chirurgie ohne die mit chirurgischen Eingriffen verbundenen Risiken und mit vollständig reversiblen Ergebnissen."
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
            ca: "Allibera als pacients de la dependència constant d'ulleres o lents de contacte diürnes, simplificant la seva rutina diària.",
            de: "Befreit Patienten von der ständigen Abhängigkeit von Brillen oder Tages-Kontaktlinsen und vereinfacht ihre tägliche Routine."
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
        ca: "A Looptica, comptem amb optometristes altament especialitzats en ortoqueratologia que han ajudat nombrosos pacients a aconseguir una visió clara sense correccions diürnes. El nostre procés d'adaptació inclou:",
        de: "Bei Looptica haben wir hochspezialisierte Optometristen für Orthokeratologie, die zahlreichen Patienten geholfen haben, klares Sehen ohne Tageskorrekturen zu erreichen. Unser Anpassungsprozess umfasst:"
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
        ],
        de: [
          {
            title: "Erstbewertung:",
            description: "Eine umfassende Augenuntersuchung, um festzustellen, ob Sie ein guter Kandidat für Ortho-K sind. Wir bewerten die Hornhauttopographie, Augengesundheit und Ihre Verschreibung."
          },
          {
            title: "Individuelles Design:",
            description: "Mit fortschrittlicher Hornhauttopographie-Technologie entwerfen wir Ortho-K-Linsen speziell für Ihre Augen."
          },
          {
            title: "Gebrauchsanweisung:",
            description: "Wir zeigen Ihnen, wie Sie Ihre Ortho-K-Linsen richtig einsetzen, entfernen und pflegen."
          },
          {
            title: "Regelmäßige Überwachung:",
            description: "Wir planen Nachsorgetermine, um Ihren Fortschritt zu überwachen und bei Bedarf Anpassungen vorzunehmen."
          },
          {
            title: "Kontinuierliche Unterstützung:",
            description: "Unser Team steht Ihnen jederzeit zur Verfügung, um alle Fragen oder Bedenken zu beantworten."
          }
        ]
      },
      candidateInfo: {
        title: {
          en: "Are you a good candidate for Ortho-K?",
          es: "¿Es usted un buen candidato para Orto-K?",
          ca: "És vostè un bon candidat per a l'Orto-K?",
          de: "Sind Sie ein guter Kandidat für Ortho-K?"
        },
        suitableFor: {
          intro: {
            en: "Ortho-K is suitable for people with:",
            es: "Orto-K es adecuado para personas con:",
            ca: "L'Orto-K és adequat per a persones amb:",
            de: "Ortho-K ist geeignet für Menschen mit:"
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
            ],
            de: [
              "Leichte bis mittlere Kurzsichtigkeit (bis zu -6,00 Dioptrien)",
              "Leichter Astigmatismus (bis zu -1,75 Dioptrien)",
              "Leichte Weitsichtigkeit (bis zu +3,00 Dioptrien)",
              "Gesunde Hornhäute und krankheitsfreie Augen"
            ]
          }
        },
        beneficialFor: {
          intro: {
            en: "It is especially beneficial for:",
            es: "Es especialmente beneficioso para:",
            ca: "És especialment beneficiós per a:",
            de: "Es ist besonders vorteilhaft für:"
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
            ],
            de: [
              "Kinder und Jugendliche mit fortschreitender Kurzsichtigkeit",
              "Sportler und Menschen mit aktiven Lebensstilen",
              "Menschen, die in staubigen oder trockenen Umgebungen arbeiten, die herkömmliche Kontaktlinsen unbequem machen",
              "Diejenigen, die keine geeigneten Kandidaten für refraktive Chirurgie sind"
            ]
          }
        }
      }
    },
    faqs: {
      title: {
        en: "Frequently asked questions about Ortho-K",
        es: "Preguntas frecuentes sobre las lentillas Orto-K",
        ca: "Preguntes freqüents sobre les lents Orto-K",
        de: "Häufige Fragen zu Ortho-K-Linsen"
      },
      items: {
        en: [
          { q: "How much do Ortho-K lenses cost in Barcelona?", a: "At Looptica we offer a free initial consultation. The Ortho-K programme price depends on your prescription and includes the custom lenses, fitting, follow-up visits and ongoing support during the first year." },
          { q: "Can Ortho-K correct astigmatism?", a: "Yes. Ortho-K corrects mild to moderate myopia (up to -6.00 D), astigmatism up to -1.75 D and mild hyperopia. We check candidacy with a corneal topography during the first visit." },
          { q: "Are overnight contact lenses safe for children?", a: "Ortho-K is especially recommended for children and teenagers with progressive myopia. Clinical studies show it slows myopia progression. Our optometrists supervise the entire process." },
          { q: "What is Ortho-K used for?", a: "Ortho-K reshapes the cornea while you sleep so you can see clearly during the day without glasses or daytime contact lenses. The effect is temporary and fully reversible." },
          { q: "Is the Ortho-K effect permanent?", a: "No. The corneal reshaping is reversible. If you stop wearing the lenses, your vision gradually returns to its original prescription within days or weeks." }
        ],
        es: [
          { q: "¿Cuánto cuestan las lentillas Orto-K en Barcelona?", a: "En Looptica ofrecemos una primera consulta gratuita. El precio del programa Orto-K depende de tu graduación e incluye las lentillas personalizadas, la adaptación, las visitas de seguimiento y el soporte durante el primer año." },
          { q: "¿Las lentillas Orto-K corrigen el astigmatismo?", a: "Sí. La Orto-K corrige miopía leve y moderada (hasta -6,00 D), astigmatismo hasta -1,75 D e hipermetropía leve. Verificamos tu candidatura con una topografía corneal en la primera visita." },
          { q: "¿Son seguras las lentillas nocturnas para niños?", a: "La Orto-K está especialmente recomendada para niños y adolescentes con miopía progresiva. Los estudios clínicos demuestran que frena el avance de la miopía. Nuestros optometristas supervisan todo el proceso." },
          { q: "¿Para qué sirven las lentillas Orto-K?", a: "Las lentillas Orto-K remodelan la córnea mientras duermes para que veas con nitidez durante el día sin gafas ni lentillas diurnas. El efecto es temporal y completamente reversible." },
          { q: "¿El efecto de la Orto-K es permanente?", a: "No. La remodelación corneal es reversible. Si dejas de usar las lentillas, tu visión vuelve poco a poco a su graduación original en pocos días o semanas." }
        ],
        ca: [
          { q: "Quant costen les lents Orto-K a Barcelona?", a: "A Looptica oferim una primera consulta gratuïta. El preu del programa Orto-K depèn de la teva graduació i inclou les lents personalitzades, l'adaptació, les visites de seguiment i el suport durant el primer any." },
          { q: "Les lents Orto-K corregeixen l'astigmatisme?", a: "Sí. L'Orto-K corregeix miopia lleu i moderada (fins a -6,00 D), astigmatisme fins a -1,75 D i hipermetropia lleu. Verifiquem la teva candidatura amb una topografia corneal a la primera visita." },
          { q: "Són segures les lentilles nocturnes per a nens?", a: "L'Orto-K està especialment recomanada per a nens i adolescents amb miopia progressiva. Els estudis clínics demostren que frena l'avenç de la miopia. Els nostres optometristes supervisen tot el procés." },
          { q: "Per a què serveixen les lents Orto-K?", a: "Les lents Orto-K remodelen la còrnia mentre dorms perquè hi vegis amb nitidesa durant el dia sense ulleres ni lentilles diürnes. L'efecte és temporal i completament reversible." },
          { q: "L'efecte de l'Orto-K és permanent?", a: "No. La remodelació corneal és reversible. Si deixes d'utilitzar les lents, la teva visió torna a poc a poc a la graduació original en pocs dies o setmanes." }
        ],
        de: [
          { q: "Was kosten Ortho-K Linsen in Barcelona?", a: "Bei Looptica bieten wir eine kostenlose Erstberatung an. Der Preis des Ortho-K-Programms hängt von Ihrer Sehstärke ab und umfasst die maßgefertigten Linsen, die Anpassung, die Nachsorgetermine und die Unterstützung im ersten Jahr." },
          { q: "Können Ortho-K Linsen Astigmatismus korrigieren?", a: "Ja. Ortho-K korrigiert leichte bis mittlere Kurzsichtigkeit (bis -6,00 D), Astigmatismus bis -1,75 D und leichte Weitsichtigkeit. Wir prüfen die Eignung mit einer Hornhauttopographie." },
          { q: "Sind Nachtlinsen für Kinder sicher?", a: "Ortho-K wird besonders für Kinder und Jugendliche mit fortschreitender Kurzsichtigkeit empfohlen. Klinische Studien zeigen, dass es das Fortschreiten verlangsamt. Unsere Optometristen begleiten den gesamten Prozess." },
          { q: "Wofür wird Ortho-K verwendet?", a: "Ortho-K formt die Hornhaut im Schlaf um, sodass Sie tagsüber klar sehen — ohne Brille oder Tageskontaktlinsen. Der Effekt ist vorübergehend und vollständig reversibel." },
          { q: "Ist der Ortho-K-Effekt dauerhaft?", a: "Nein. Die Umformung der Hornhaut ist reversibel. Wenn Sie die Linsen nicht mehr tragen, kehrt Ihr Sehvermögen innerhalb weniger Tage oder Wochen zur ursprünglichen Sehstärke zurück." }
        ]
      }
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": content.faqs.items[language].map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  const procedureJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": content.hero[language].title,
    "alternateName": ["Orto-K", "Ortoqueratología", "Orthokeratology", "Lentillas nocturnas"],
    "procedureType": "https://schema.org/TherapeuticProcedure",
    "description": content.meta[language].description,
    "bodyLocation": "Cornea",
    "howPerformed": "Custom-designed gas-permeable contact lenses are worn overnight to gently reshape the cornea, correcting refractive errors during the day.",
    "indication": [
      { "@type": "MedicalIndication", "name": "Myopia" },
      { "@type": "MedicalIndication", "name": "Astigmatism" },
      { "@type": "MedicalIndication", "name": "Progressive myopia in children" }
    ],
    "performedBy": {
      "@type": "Optician",
      "name": "Looptica",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Barcelona",
        "addressRegion": "Poblenou",
        "addressCountry": "ES"
      },
      "url": "https://looptica.com/"
    }
  };

  return (
    <>
      <Helmet>
        <title>{content.meta[language].title}</title>
        <meta name="description" content={content.meta[language].description} />
        <script type="application/ld+json">{JSON.stringify(procedureJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      <ServiceLayout
        title={content.hero[language].title}
        subtitle={content.hero[language].subtitle}
        image="/images/ortok.jpg"
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

        <ScrollReveal>
          <div className="bg-[#e8f6f5] p-6 rounded-lg mb-12">
            <p className="text-lg">
              {language === 'en' && <>Interested in daytime contact lenses? Explore our <Link to={`/${language}/services/contact-lenses`} className="text-[#55afa9] underline font-medium">full range of contact lenses</Link> — from daily disposables to toric and multifocal options.</>}
              {language === 'es' && <>¿Te interesan las lentillas diurnas? Descubre nuestra <Link to={`/${language}/services/contact-lenses`} className="text-[#55afa9] underline font-medium">amplia gama de lentes de contacto</Link> — desde desechables diarias hasta opciones tóricas y multifocales.</>}
              {language === 'ca' && <>T'interessen les lentilles diürnes? Descobreix la nostra <Link to={`/${language}/services/lents-contacte`} className="text-[#55afa9] underline font-medium">àmplia gamma de lents de contacte</Link> — des d'opcions d'un sol ús diàries fins a tòriques i multifocals.</>}
              {language === 'de' && <>Interessieren Sie sich für Tageskontaktlinsen? Entdecken Sie unser <Link to={`/${language}/services/contact-lenses`} className="text-[#55afa9] underline font-medium">vollständiges Sortiment an Kontaktlinsen</Link> — von Tageslinsen bis hin zu torischen und multifokalen Optionen.</>}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">{content.faqs.title[language]}</h2>
            <div className="space-y-4">
              {content.faqs.items[language].map((faq, index) => (
                <details key={index} className="bg-white p-5 rounded-lg shadow-sm group">
                  <summary className="font-medium text-lg cursor-pointer list-none flex justify-between items-center">
                    <span>{faq.q}</span>
                    <span className="ml-4 text-[#55afa9] group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-gray-700">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-[#e8f6f5] p-6 rounded-lg mb-12 text-center">
            <p className="text-lg">
              {language === 'en' && <>More information: </>}
              {language === 'es' && <>Más información: </>}
              {language === 'ca' && <>Més informació: </>}
              {language === 'de' && <>Weitere Informationen: </>}
              <a
                href="https://ortok-barcelona.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#55afa9] underline font-medium"
              >
                ortok barcelona
              </a>
            </p>
          </div>
        </ScrollReveal>
      </ServiceLayout>
    </>
  );
};

export default OrtoK;
