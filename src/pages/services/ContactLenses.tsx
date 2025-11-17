import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Eye, Shield, Clock, ThumbsUp } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactLenses = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  
  const content = {
    seoTitle: {
      en: "Contact Lenses in Barcelona · Looptica Poblenou | Eye Exams & Fitting",
      es: "Lentes de Contacto en Barcelona · Looptica Poblenou",
      ca: "Lents de Contacte a Barcelona · Looptica Poblenou",
      de: "Kontaktlinsen in Barcelona · Looptica Poblenou",
    },
    seoDescription: {
      en: "Contact lenses in Barcelona with professional fitting, eye exam, soft lenses, Ortho-K and daily/monthly options. Looptica Poblenou: book your appointment online.",
      es: "Lentes de contacto en Barcelona con adaptación profesional, examen visual y opciones diarias/mensuales. Looptica Poblenou: reserve su cita online.",
      ca: "Lents de contacte a Barcelona amb adaptació professional, examen visual i opcions diàries/mensuals. Looptica Poblenou: reservi la seva cita online.",
      de: "Kontaktlinsen in Barcelona mit professioneller Anpassung, Augenuntersuchung und täglichen/monatlichen Optionen. Looptica Poblenou: Termin online buchen.",
    },
    title: {
      en: "Contact Lenses",
      es: "Lentes de Contacto",
      ca: "Lents de Contacte",
      de: "Kontaktlinsen",
    },
    subtitle: {
      en: "Comfortable, clear vision without glasses",
      es: "Visión cómoda y clara sin gafas",
      ca: "Visió còmoda i clara sense ulleres",
      de: "Komfortable, klare Sicht ohne Brille",
    },
    appointmentSubject: {
      en: "Contact Lens Consultation at Looptica",
      es: "Consulta de Lentes de Contacto en Looptica",
      ca: "Consulta de Lents de Contacte a Looptica",
      de: "Kontaktlinsen-Beratung bei Looptica",
    },
    advancedTitle: {
      en: "Advanced Contact Lens Solutions",
      es: "Soluciones Avanzadas de Lentes de Contacto",
      ca: "Solucions Avançades de Lents de Contacte",
      de: "Fortschrittliche Kontaktlinsenlösungen",
    },
    intro1: {
      en: "At Looptica, we offer a comprehensive range of contact lens options to suit your unique vision needs, lifestyle, and preferences. Our expert optometrists use the latest technology to ensure your contact lenses provide optimal vision correction while maintaining eye health and all-day comfort.",
      es: "En Looptica, ofrecemos una amplia gama de opciones de lentes de contacto para adaptarse a sus necesidades visuales únicas, estilo de vida y preferencias. Nuestros optometristas expertos utilizan la última tecnología para asegurar que sus lentes de contacto proporcionen una corrección visual óptima mientras mantienen la salud ocular y la comodidad durante todo el día.",
      ca: "A Looptica, oferim una àmplia gamma d'opcions de lents de contacte per adaptar-se a les seves necessitats visuals úniques, estil de vida i preferències. Els nostres optometristes experts utilitzen l'última tecnologia per assegurar que les seves lents de contacte proporcionin una correcció visual òptima mentre mantenen la salut ocular i el confort durant tot el dia.",
      de: "Bei Looptica bieten wir eine umfassende Palette von Kontaktlinsenoptionen, um Ihren einzigartigen Sehbedürfnissen, Ihrem Lebensstil und Ihren Vorlieben gerecht zu werden. Unsere erfahrenen Optometristen verwenden die neueste Technologie, um sicherzustellen, dass Ihre Kontaktlinsen optimale Sehkorrektur bieten und gleichzeitig die Augengesundheit und ganztägigen Komfort erhalten.",
    },
    viewCatalan: {
      en: "View in Catalan",
      es: "Ver en Catalán",
      ca: "Veure en Català",
    },
    fittingTitle: {
      en: "Our Contact Lens Fitting Process",
      es: "Nuestro Proceso de Adaptación de Lentes de Contacto",
      ca: "El Nostre Procés d'Adaptació de Lents de Contacte",
      de: "Unser Kontaktlinsen-Anpassungsprozess",
    },
    examination: {
      en: "Comprehensive Eye Examination",
      es: "Examen Ocular Completo",
      ca: "Examen Ocular Complet",
      de: "Umfassende Augenuntersuchung",
    },
    examinationDesc: {
      en: "We start with a thorough assessment of your eye health, vision needs, and lifestyle to determine the most appropriate contact lens options for you.",
      es: "Comenzamos con una evaluación exhaustiva de la salud de sus ojos, necesidades visuales y estilo de vida para determinar las opciones de lentes de contacto más apropiadas para usted.",
      ca: "Comencem amb una avaluació exhaustiva de la salut dels seus ulls, necessitats visuals i estil de vida per determinar les opcions de lents de contacte més apropiades per a vostè.",
      de: "Wir beginnen mit einer gründlichen Bewertung Ihrer Augengesundheit, Sehbedürfnisse und Ihres Lebensstils, um die am besten geeigneten Kontaktlinsenoptionen für Sie zu bestimmen.",
    },
    mapping: {
      en: "Advanced Corneal Mapping",
      es: "Mapeo Corneal Avanzado",
      ca: "Mapatge Corneal Avançat",
      de: "Fortschrittliche Hornhautvermessung",
    },
    mappingDesc: {
      en: "Using state-of-the-art technology, we create a detailed map of your cornea's shape to ensure the most precise fit for your contact lenses.",
      es: "Utilizando tecnología de vanguardia, creamos un mapa detallado de la forma de su córnea para asegurar el ajuste más preciso para sus lentes de contacto.",
      ca: "Utilitzant tecnologia d'avantguarda, creem un mapa detallat de la forma de la seva còrnia per assegurar l'ajust més precís per a les seves lents de contacte.",
      de: "Mit modernster Technologie erstellen wir eine detaillierte Karte Ihrer Hornhautform, um die präziseste Passform für Ihre Kontaktlinsen zu gewährleisten.",
    },
    lensSelection: {
      en: "Personalized Lens Selection",
      es: "Selección Personalizada de Lentes",
      ca: "Selecció Personalitzada de Lents",
      de: "Personalisierte Linsenauswahl",
    },
    lensSelectionDesc: {
      en: "Based on your examination results, we'll recommend the best contact lens options and provide trial lenses so you can experience them before making a decision.",
      es: "Basado en los resultados de su examen, recomendaremos las mejores opciones de lentes de contacto y proporcionaremos lentes de prueba para que pueda experimentarlas antes de tomar una decisión.",
      ca: "Basat en els resultats del seu examen, recomanarem les millors opcions de lents de contacte i proporcionarem lents de prova perquè pugui experimentar-les abans de prendre una decisió.",
      de: "Basierend auf Ihren Untersuchungsergebnissen empfehlen wir die besten Kontaktlinsenoptionen und stellen Testlinsen zur Verfügung, damit Sie sie vor einer Entscheidung ausprobieren können.",
    },
    training: {
      en: "Expert Training",
      es: "Entrenamiento Experto",
      ca: "Entrenament Expert",
      de: "Fachkundige Schulung",
    },
    trainingDesc: {
      en: "We provide comprehensive instruction on proper lens insertion, removal, and care techniques, ensuring you feel comfortable and confident with your new contact lenses.",
      es: "Proporcionamos instrucción completa sobre las técnicas adecuadas de inserción, extracción y cuidado de las lentes, asegurando que se sienta cómodo y confiado con sus nuevas lentes de contacto.",
      ca: "Proporcionem instrucció completa sobre les tècniques adequades d'inserció, extracció i cura de les lents, assegurant que se senti còmode i confiat amb les seves noves lents de contacte.",
      de: "Wir bieten umfassende Anweisungen zu ordnungsgemäßen Techniken für das Einsetzen, Entfernen und Pflegen von Linsen und stellen sicher, dass Sie sich mit Ihren neuen Kontaktlinsen wohl und sicher fühlen.",
    },
    typesTitle: {
      en: "Types of Contact Lenses We Offer",
      es: "Tipos de Lentes de Contacto que Ofrecemos",
      ca: "Tipus de Lents de Contacte que Oferim",
      de: "Arten von Kontaktlinsen, die wir anbieten",
    },
    dailyDisposable: {
      en: "Daily Disposable Lenses",
      es: "Lentes Desechables Diarias",
      ca: "Lents d'Un Sol Ús Diàries",
      de: "Tägliche Einweglinsen",
    },
    dailyDisposableDesc: {
      en: "The healthiest option for most wearers, these fresh lenses are worn once and discarded, eliminating the need for cleaning solutions and reducing the risk of deposits and infections.",
      es: "La opción más saludable para la mayoría de los usuarios, estas lentes frescas se usan una vez y se descartan, eliminando la necesidad de soluciones de limpieza y reduciendo el riesgo de depósitos e infecciones.",
      ca: "L'opció més saludable per a la majoria dels usuaris, aquestes lents fresques es porten una vegada i es descarten, eliminant la necessitat de solucions de neteja i reduint el risc de dipòsits i infeccions.",
      de: "Die gesündeste Option für die meisten Träger, diese frischen Linsen werden einmal getragen und entsorgt, wodurch die Notwendigkeit von Reinigungslösungen entfällt und das Risiko von Ablagerungen und Infektionen reduziert wird.",
    },
    monthly: {
      en: "Monthly Replacement Lenses",
      es: "Lentes de Reemplazo Mensual",
      ca: "Lents de Reemplaçament Mensual",
      de: "Monatliche Austauschlinsen",
    },
    monthlyDesc: {
      en: "Cost-effective options that provide excellent vision and comfort when properly maintained. Ideal for consistent wearers who don't mind a simple cleaning routine.",
      es: "Opciones rentables que proporcionan excelente visión y comodidad cuando se mantienen adecuadamente. Ideal para usuarios constantes que no les importa una rutina de limpieza simple.",
      ca: "Opcions rendibles que proporcionen excel·lent visió i comoditat quan es mantenen adequadament. Ideal per a usuaris constants que no els importa una rutina de neteja simple.",
      de: "Kostengünstige Optionen, die bei ordnungsgemäßer Pflege ausgezeichnete Sicht und Komfort bieten. Ideal für konstante Träger, die nichts gegen eine einfache Reinigungsroutine haben.",
    },
    toric: {
      en: "Toric Lenses for Astigmatism",
      es: "Lentes Tóricas para Astigmatismo",
      ca: "Lents Tòriques per a Astigmatisme",
      de: "Torische Linsen für Astigmatismus",
    },
    toricDesc: {
      en: "Specially designed lenses that correct astigmatism, providing stable, clear vision throughout the day without the rotation issues of regular lenses.",
      es: "Lentes especialmente diseñadas que corrigen el astigmatismo, proporcionando una visión estable y clara durante todo el día sin los problemas de rotación de las lentes regulares.",
      ca: "Lents especialment dissenyades que corregeixen l'astigmatisme, proporcionant una visió estable i clara durant tot el dia sense els problemes de rotació de les lents regulars.",
      de: "Speziell entwickelte Linsen, die Astigmatismus korrigieren und den ganzen Tag über stabile, klare Sicht bieten, ohne die Rotationsprobleme herkömmlicher Linsen.",
    },
    multifocal: {
      en: "Multifocal Contact Lenses",
      es: "Lentes de Contacto Multifocales",
      ca: "Lents de Contacte Multifocals",
      de: "Multifokale Kontaktlinsen",
    },
    multifocalDesc: {
      en: "Advanced designs that correct both near and distance vision, eliminating the need for reading glasses or bifocals as you age.",
      es: "Diseños avanzados que corrigen tanto la visión cercana como la lejana, eliminando la necesidad de gafas de lectura o bifocales a medida que envejece.",
      ca: "Dissenys avançats que corregeixen tant la visió propera com la llunyana, eliminant la necessitat d'ulleres de lectura o bifocals a mesura que envelleix.",
      de: "Fortschrittliche Designs, die sowohl Nah- als auch Fernsicht korrigieren und die Notwendigkeit einer Lesebrille oder Bifokalbrille im Alter eliminieren.",
    },
    rgp: {
      en: "Rigid Gas Permeable (RGP) Lenses",
      es: "Lentes Rígidas Permeables al Gas (RPG)",
      ca: "Lents Rígides Permeables al Gas (RPG)",
      de: "Formstabile gasdurchlässige (RGP) Linsen",
    },
    rgpDesc: {
      en: "Durable lenses that provide exceptionally crisp vision, especially for complex prescriptions or conditions like keratoconus.",
      es: "Lentes duraderas que proporcionan una visión excepcionalmente nítida, especialmente para prescripciones complejas o condiciones como el queratocono.",
      ca: "Lents duradores que proporcionen una visió excepcionalment nítida, especialment per a prescripcions complexes o condicions com el queratocon.",
      de: "Langlebige Linsen, die außergewöhnlich scharfe Sicht bieten, besonders für komplexe Verschreibungen oder Zustände wie Keratokonus.",
    },
    specialty: {
      en: "Specialty Lenses",
      es: "Lentes Especializadas",
      ca: "Lents Especialitzades",
      de: "Speziallinsen",
    },
    specialtyDesc: {
      en: "Including scleral lenses for irregular corneas, prosthetic lenses for cosmetic concerns, and orthokeratology lenses for vision correction while you sleep.",
      es: "Incluyendo lentes esclerales para córneas irregulares, lentes protésicas para preocupaciones cosméticas y lentes de ortoqueratología para corrección de la visión mientras duerme.",
      ca: "Incloent lents esclerals per a còrnies irregulars, lents protèsiques per a preocupacions cosmètiques i lents d'ortoqueratologia per a correcció de la visió mentre dorm.",
      de: "Einschließlich Sklerallinsen für unregelmäßige Hornhäute, Prothesen-Linsen für kosmetische Anliegen und Orthokeratologie-Linsen zur Sehkorrektur während des Schlafs.",
    },
    careTitle: {
      en: "Contact Lens Care and Compliance",
      es: "Cuidado y Cumplimiento de Lentes de Contacto",
      ca: "Cura i Compliment de Lents de Contacte",
      de: "Kontaktlinsenpflege und -einhaltung",
    },
    careP1: {
      en: "Proper care and compliance are essential for comfortable, safe contact lens wear. At Looptica, we provide:",
      es: "El cuidado y cumplimiento adecuados son esenciales para un uso cómodo y seguro de lentes de contacto. En Looptica, proporcionamos:",
      ca: "La cura i compliment adequats són essencials per a un ús còmode i segur de lents de contacte. A Looptica, proporcionem:",
      de: "Ordnungsgemäße Pflege und Einhaltung sind für das komfortable, sichere Tragen von Kontaktlinsen unerlässlich. Bei Looptica bieten wir:",
    },
    careLi1: {
      en: "Detailed instructions on cleaning and storage procedures specific to your lens type",
      es: "Instrucciones detalladas sobre procedimientos de limpieza y almacenamiento específicos para su tipo de lente",
      ca: "Instruccions detallades sobre procediments de neteja i emmagatzematge específics per al seu tipus de lent",
      de: "Detaillierte Anweisungen zu Reinigungs- und Aufbewahrungsverfahren, die spezifisch für Ihren Linsentyp sind",
    },
    careLi2: {
      en: "Recommendations for the most effective contact lens solutions",
      es: "Recomendaciones para las soluciones de lentes de contacto más efectivas",
      ca: "Recomanacions per a les solucions de lents de contacte més efectives",
      de: "Empfehlungen für die wirksamsten Kontaktlinsenlösungen",
    },
    careLi3: {
      en: "Guidelines for healthy wearing schedules",
      es: "Pautas para horarios de uso saludables",
      ca: "Pautes per a horaris d'ús saludables",
      de: "Richtlinien für gesunde Tragezeiten",
    },
    careLi4: {
      en: "Warning signs of potential complications to watch for",
      es: "Señales de advertencia de posibles complicaciones a tener en cuenta",
      ca: "Senyals d'advertència de possibles complicacions a tenir en compte",
      de: "Warnsignale möglicher Komplikationen, auf die zu achten ist",
    },
    careLi5: {
      en: "Regular follow-up appointments to ensure your lenses continue to fit well and your eyes remain healthy",
      es: "Citas de seguimiento regulares para asegurar que sus lentes continúen ajustándose bien y sus ojos permanezcan saludables",
      ca: "Cites de seguiment regulars per assegurar que les seves lents continuïn ajustant-se bé i els seus ulls romanguin saludables",
      de: "Regelmäßige Nachuntersuchungen, um sicherzustellen, dass Ihre Linsen weiterhin gut passen und Ihre Augen gesund bleiben",
    },
    commitmentTitle: {
      en: "Our Commitment to Ongoing Care",
      es: "Nuestro Compromiso con el Cuidado Continuo",
      ca: "El Nostre Compromís amb la Cura Contínua",
      de: "Unser Engagement für kontinuierliche Betreuung",
    },
    commitmentP1: {
      en: "Your journey with contact lenses doesn't end after your initial fitting. We provide:",
      es: "Su viaje con lentes de contacto no termina después de su adaptación inicial. Proporcionamos:",
      ca: "El seu viatge amb lents de contacte no acaba després de la seva adaptació inicial. Proporcionem:",
      de: "Ihre Reise mit Kontaktlinsen endet nicht nach der ersten Anpassung. Wir bieten:",
    },
    commitmentLi1: {
      en: "Regular contact lens check-ups to assess fit and eye health",
      es: "Chequeos regulares de lentes de contacto para evaluar el ajuste y la salud ocular",
      ca: "Revisions regulars de lents de contacte per avaluar l'ajust i la salut ocular",
      de: "Regelmäßige Kontaktlinsen-Kontrollen zur Bewertung von Passform und Augengesundheit",
    },
    commitmentLi2: {
      en: "Updates on the latest lens technologies that might benefit you",
      es: "Actualizaciones sobre las últimas tecnologías de lentes que podrían beneficiarle",
      ca: "Actualitzacions sobre les últimes tecnologies de lents que podrien beneficiar-li",
      de: "Updates zu den neuesten Linsentechnologien, die Ihnen zugute kommen könnten",
    },
    commitmentLi3: {
      en: "Adjustment of your prescription as your vision needs change",
      es: "Ajuste de su prescripción a medida que cambian sus necesidades visuales",
      ca: "Ajustament de la seva prescripció a mesura que canvien les seves necessitats visuals",
      de: "Anpassung Ihrer Verschreibung, wenn sich Ihre Sehbedürfnisse ändern",
    },
    commitmentLi4: {
      en: "Convenient reordering options for replacement lenses",
      es: "Opciones convenientes de pedido para lentes de reemplazo",
      ca: "Opcions convenients de comanda per a lents de reemplaçament",
      de: "Bequeme Nachbestellungsoptionen für Ersatzlinsen",
    },
    commitmentLi5: {
      en: "Immediate attention if you experience any discomfort or vision changes",
      es: "Atención inmediata si experimenta cualquier molestia o cambios en la visión",
      ca: "Atenció immediata si experimenta qualsevol molèstia o canvis en la visió",
      de: "Sofortige Aufmerksamkeit, wenn Sie Beschwerden oder Sehveränderungen erleben",
    },
    finalP: {
      en: "Whether you're a first-time wearer or have been enjoying contact lenses for years, our expertise ensures you'll receive the most appropriate, comfortable, and healthy contact lens solution for your unique needs.",
      es: "Ya sea que sea un usuario por primera vez o haya estado disfrutando de lentes de contacto durante años, nuestra experiencia garantiza que recibirá la solución de lentes de contacto más apropiada, cómoda y saludable para sus necesidades únicas.",
      ca: "Ja sigui que sigui un usuari per primera vegada o hagi estat gaudint de lents de contacte durant anys, la nostra experiència garanteix que rebrà la solució de lents de contacte més apropiada, còmoda i saludable per a les seves necessitats úniques.",
      de: "Ob Sie zum ersten Mal Kontaktlinsen tragen oder schon seit Jahren Kontaktlinsen genießen, unsere Expertise gewährleistet, dass Sie die am besten geeignete, bequemste und gesündeste Kontaktlinsenlösung für Ihre einzigartigen Bedürfnisse erhalten.",
    },
  };
  
  return (
    <ServiceLayout
      title={content.title[language]}
      subtitle={content.subtitle[language]}
      image="/images/adobestock-226007711_orig.jpeg"
      appointmentSubject={content.appointmentSubject[language]}
      pageTitle={content.seoTitle}
      pageDescription={content.seoDescription}
    >
      <ScrollReveal>
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-semibold mb-6">{content.fittingTitle[language]}</h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-[#55afa9] rounded-full p-3 h-fit">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.examination[language]}</h4>
                <p>{content.examinationDesc[language]}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#55afa9] rounded-full p-3 h-fit">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.mapping[language]}</h4>
                <p>{content.mappingDesc[language]}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#55afa9] rounded-full p-3 h-fit">
                <ThumbsUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.lensSelection[language]}</h4>
                <p>{content.lensSelectionDesc[language]}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#55afa9] rounded-full p-3 h-fit">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.training[language]}</h4>
                <p>{content.trainingDesc[language]}</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">{content.typesTitle[language]}</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.dailyDisposable[language]}</h4>
              <p>{content.dailyDisposableDesc[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.monthly[language]}</h4>
              <p>{content.monthlyDesc[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.toric[language]}</h4>
              <p>{content.toricDesc[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.multifocal[language]}</h4>
              <p>{content.multifocalDesc[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.rgp[language]}</h4>
              <p>{content.rgpDesc[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.specialty[language]}</h4>
              <p>{content.specialtyDesc[language]}</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>{content.careTitle[language]}</h2>
          <p>
            {content.careP1[language]}
          </p>
          <ul>
            <li>{content.careLi1[language]}</li>
            <li>{content.careLi2[language]}</li>
            <li>{content.careLi3[language]}</li>
            <li>{content.careLi4[language]}</li>
            <li>{content.careLi5[language]}</li>
          </ul>
          
          <h3>{content.commitmentTitle[language]}</h3>
          <p>
            {content.commitmentP1[language]}
          </p>
          <ul>
            <li>{content.commitmentLi1[language]}</li>
            <li>{content.commitmentLi2[language]}</li>
            <li>{content.commitmentLi3[language]}</li>
            <li>{content.commitmentLi4[language]}</li>
            <li>{content.commitmentLi5[language]}</li>
          </ul>
          
          <p>
            {content.finalP[language]}
          </p>
        </div>
      </ScrollReveal>
    </ServiceLayout>
  );
};

export default ContactLenses;
