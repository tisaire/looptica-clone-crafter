import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Eye, RotateCcw, ThumbsUp, AlertCircle } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const LentsContacte = () => {
  const { language } = useLanguage();
  
  const content = {
    seoTitle: {
      en: "Contact Lenses in Barcelona · Looptica Poblenou",
      es: "Lentillas en Barcelona · Óptica en Poblenou | Looptica",
      ca: "Lents de Contacte a Barcelona · Òptica a Poblenou | Looptica",
      de: "Kontaktlinsen in Barcelona · Optik in Poblenou | Looptica",
    },
    seoDescription: {
      en: "Contact lenses in Barcelona with professional fitting and complete eye exam. Looptica Poblenou offers daily, monthly, toric and Ortho-K lenses. Book online.",
      es: "Adaptación de lentillas en Barcelona con revisión visual completa. En Looptica Poblenou ofrecemos lentes diarias, mensuales, tóricas y Orto-K. Reserva online.",
      ca: "Adaptació de lents de contacte a Barcelona amb revisió visual completa. A Looptica Poblenou oferim lents diàries, mensuals, tòriques i Orto-K. Reserva online.",
      de: "Kontaktlinsen in Barcelona mit professioneller Anpassung und kompletter Augenuntersuchung. Looptica Poblenou bietet tägliche, monatliche, torische und Ortho-K-Linsen.",
    },
    title: {
      en: "Contact Lenses",
      es: "Lentes de Contacto",
      ca: "Lents de Contacte",
      de: "Kontaktlinsen"
    },
    subtitle: {
      en: "Personalized solutions for every lifestyle",
      es: "Soluciones personalizadas para cada estilo de vida",
      ca: "Solucions personalitzades per a cada estil de vida",
      de: "Personalisierte Lösungen für jeden Lebensstil"
    },
    appointmentSubject: {
      en: "Contact Lens Fitting at Looptica",
      es: "Adaptación de Lentes de Contacto en Looptica",
      ca: "Adaptació de Lents de Contacte a Looptica",
      de: "Kontaktlinsenanpassung bei Looptica"
    },
    solutionsTitle: {
      en: "Our contact lens solutions",
      es: "Nuestras soluciones en lentes de contacto",
      ca: "Les nostres solucions en lents de contacte",
      de: "Unsere Kontaktlinsenlösungen"
    },
    solutionsP1: {
      en: "At Looptica, we specialize in personalized contact lens fitting to meet the unique needs of each patient. We know that contact lenses are not just an alternative to glasses; for many of our clients, they are an essential tool that improves their quality of life.",
      es: "En Looptica, nos especializamos en la adaptación personalizada de lentes de contacto para satisfacer las necesidades únicas de cada paciente. Sabemos que las lentes de contacto no son solo una alternativa a las gafas; para muchos de nuestros clientes, son una herramienta esencial que mejora su calidad de vida.",
      ca: "A Looptica, ens especialitzem en l'adaptació personalitzada de lents de contacte per satisfer les necessitats úniques de cada pacient. Sabem que les lents de contacte no són només una alternativa a les ulleres; per a molts dels nostres clients, són una eina essencial que millora la seva qualitat de vida.",
      de: "Bei Looptica spezialisieren wir uns auf die personalisierte Kontaktlinsenanpassung, um die einzigartigen Bedürfnisse jedes Patienten zu erfüllen. Wir wissen, dass Kontaktlinsen nicht nur eine Alternative zur Brille sind; für viele unserer Kunden sind sie ein wesentliches Werkzeug, das ihre Lebensqualität verbessert."
    },
    solutionsP2: {
      en: "Our team of highly qualified optometrists uses cutting-edge technology and their specialized knowledge to ensure that you receive the most suitable contact lenses for your lifestyle, personal preferences, and eye health.",
      es: "Nuestro equipo de optometristas altamente calificados utiliza tecnología de vanguardia y sus conocimientos especializados para asegurar que usted reciba las lentes de contacto más adecuadas para su estilo de vida, preferencias personales y salud ocular.",
      ca: "El nostre equip d'optometristes altament qualificats utilitza tecnologia d'avantguarda i els seus coneixements especialitzats per assegurar que vostè rebi les lents de contacte més adequades per al seu estil de vida, preferències personals i salut ocular.",
      de: "Unser Team hochqualifizierter Optometristen verwendet modernste Technologie und ihr spezialisiertes Wissen, um sicherzustellen, dass Sie die am besten geeigneten Kontaktlinsen für Ihren Lebensstil, Ihre persönlichen Vorlieben und Ihre Augengesundheit erhalten."
    },
    typesTitle: {
      en: "Types of contact lenses we offer",
      es: "Tipos de lentes de contacto que ofrecemos",
      ca: "Tipus de lents de contacte que oferim",
      de: "Arten von Kontaktlinsen, die wir anbieten"
    },
    softLenses: {
      en: "Soft contact lenses",
      es: "Lentes de contacto blandas",
      ca: "Lents de contacte toves",
      de: "Weiche Kontaktlinsen"
    },
    softLensesDesc: {
      en: "The most popular for their immediate comfort. Available in daily, bi-weekly and monthly formats, they adapt to various lifestyles and needs.",
      es: "Las más populares por su confort inmediato. Disponibles en formatos diarios, quincenales y mensuales, se adaptan a diversos estilos de vida y necesidades.",
      ca: "Les més populars pel seu confort immediat. Disponibles en formats diaris, quinzenals i mensuals, s'adapten a diversos estils de vida i necessitats.",
      de: "Die beliebtesten wegen ihres sofortigen Komforts. Erhältlich in Tages-, 14-Tages- und Monatsformaten, passen sie sich verschiedenen Lebensstilen und Bedürfnissen an."
    },
    rgpLenses: {
      en: "Gas permeable contact lenses (RPG)",
      es: "Lentes de contacto permeables al gas (RPG)",
      ca: "Lents de contacte permeables al gas (RPG)",
      de: "Gasdurchlässige Kontaktlinsen (RPG)"
    },
    rgpLensesDesc: {
      en: "They offer sharper vision and superior durability. Ideal for irregular corneas and conditions such as keratoconus.",
      es: "Ofrecen una visión más nítida y durabilidad superior. Ideales para córneas irregulares y condiciones como el queratocono.",
      ca: "Ofereixen una visió més nítida i durabilitat superior. Ideals per a còrnies irregulars i condicions com el queratocon.",
      de: "Sie bieten schärfere Sicht und überlegene Haltbarkeit. Ideal für unregelmäßige Hornhäute und Erkrankungen wie Keratokonus."
    },
    toricLenses: {
      en: "Toric contact lenses",
      es: "Lentes de contacto tóricas",
      ca: "Lents de contacte tòriques",
      de: "Torische Kontaktlinsen"
    },
    toricLensesDesc: {
      en: "Designed specifically to correct astigmatism, providing clear and stable vision all day.",
      es: "Diseñadas específicamente para corregir el astigmatismo, proporcionando una visión clara y estable todo el día.",
      ca: "Dissenyades específicament per corregir l'astigmatisme, proporcionant una visió clara i estable tot el dia.",
      de: "Speziell zur Korrektur von Astigmatismus entwickelt, bieten sie den ganzen Tag über eine klare und stabile Sicht."
    },
    multifocalLenses: {
      en: "Multifocal contact lenses",
      es: "Lentes de contacto multifocales",
      ca: "Lents de contacte multifocals",
      de: "Multifokale Kontaktlinsen"
    },
    multifocalLensesDesc: {
      en: "Perfect for people with presbyopia, they allow you to see clearly at multiple distances without the need for reading glasses.",
      es: "Perfectas para personas con presbicia, permiten ver claramente a múltiples distancias sin necesidad de gafas de lectura.",
      ca: "Perfectes per a persones amb presbícia, permiten veure clarament a múltiples distàncies sense necessitat d'ulleres de lectura.",
      de: "Perfekt für Menschen mit Presbyopie, ermöglichen sie es Ihnen, in mehreren Entfernungen klar zu sehen, ohne dass eine Lesebrille erforderlich ist."
    },
    cosmeticLenses: {
      en: "Cosmetic contact lenses",
      es: "Lentes de contacto cosméticas",
      ca: "Lents de contacte cosmètiques",
      de: "Kosmetische Kontaktlinsen"
    },
    cosmeticLensesDesc: {
      en: "They change or enhance the color of the eyes while maintaining a natural look. We have a wide range of colors and designs.",
      es: "Cambian o mejoran el color de los ojos manteniendo un aspecto natural. Disponemos de una amplia gama de colores y diseños.",
      ca: "Canvien o milloren el color dels ulls mantenint un aspecte natural. Disposem d'una àmplia gamma de colors i dissenys.",
      de: "Sie verändern oder verbessern die Farbe der Augen und erhalten gleichzeitig ein natürliches Aussehen. Wir haben eine große Auswahl an Farben und Designs."
    },
    orthoKLenses: {
      en: "Orthokeratology (Ortho-K)",
      es: "Ortoqueratología (Orto-K)",
      ca: "Ortoqueratologia (Orto-K)",
      de: "Orthokeratologie (Ortho-K)"
    },
    orthoKLensesDesc: {
      en: "Special lenses that are worn overnight to temporarily reshape the cornea, allowing clear vision during the day without lenses.",
      es: "Lentes especiales que se usan durante la noche para remodelar temporalmente la córnea, permitiendo una visión clara durante el día sin lentillas.",
      ca: "Lents especials que es porten durant la nit per remodelar temporalment la còrnia, permetent una visió clara durant el dia sense lents.",
      de: "Spezielle Linsen, die über Nacht getragen werden, um die Hornhaut vorübergehend umzuformen und so tagsüber ein klares Sehen ohne Linsen zu ermöglichen."
    },
    fittingTitle: {
      en: "Our personalized fitting process",
      es: "Nuestro proceso de adaptación personalizado",
      ca: "El nostre procés d'adaptació personalitzat",
      de: "Unser personalisierter Anpassungsprozess"
    },
    assessment: {
      en: "Comprehensive assessment",
      es: "Evaluación completa",
      ca: "Avaluació completa",
      de: "Umfassende Beurteilung"
    },
    assessmentDesc: {
      en: "We conduct a complete eye exam to assess your visual health, determine your prescription, and measure the shape and moisture of your eyes.",
      es: "Realizamos un examen ocular completo para evaluar su salud visual, determinar su prescripción y medir la forma y humedad de sus ojos.",
      ca: "Realitzem un examen ocular complet per avaluar la seva salut visual, determinar la seva prescripció i mesurar la forma i humitat dels seus ulls.",
      de: "Wir führen eine vollständige Augenuntersuchung durch, um Ihre Sehgesundheit zu beurteilen, Ihre Sehstärke zu bestimmen und die Form und Feuchtigkeit Ihrer Augen zu messen."
    },
    selection: {
      en: "Personalized selection",
      es: "Selección personalizada",
      ca: "Selecció personalitzada",
      de: "Personalisierte Auswahl"
    },
    selectionDesc: {
      en: "Based on the results of the assessment and your specific needs, we recommend the most suitable types of lenses for you.",
      es: "Basándonos en los resultados de la evaluación y sus necesidades específicas, recomendamos los tipos de lentes más adecuados para usted.",
      ca: "Basant-nos en els resultats de l'avaluació i les seves necessitats específiques, recomanem els tipus de lents més adequats per a vostè.",
      de: "Basierend auf den Ergebnissen der Beurteilung und Ihren spezifischen Bedürfnissen empfehlen wir Ihnen die am besten geeigneten Linsenarten."
    },
    adaptation: {
      en: "Adaptation and monitoring",
      es: "Adaptación y seguimiento",
      ca: "Adaptació i seguiment",
      de: "Anpassung und Überwachung"
    },
    adaptationDesc: {
      en: "We teach you how to handle and care for your lenses, and schedule follow-up visits to ensure the adaptation is optimal.",
      es: "Le enseñamos cómo manipular y cuidar sus lentes, y programamos visitas de seguimiento para asegurarnos de que la adaptación sea óptima.",
      ca: "Li ensenyem com manipular i cuidar les seves lents, i programem visites de seguiment per assegurar-nos que l'adaptació sigui òptima.",
      de: "Wir zeigen Ihnen, wie Sie Ihre Linsen handhaben und pflegen, und vereinbaren Folgetermine, um sicherzustellen, dass die Anpassung optimal ist."
    },
    continuousCare: {
      en: "Continuous care",
      es: "Atención continua",
      ca: "Atenció contínua",
      de: "Kontinuierliche Betreuung"
    },
    continuousCareDesc: {
      en: "We offer ongoing support to answer any questions and make adjustments as your needs change.",
      es: "Ofrecemos soporte continuo para responder a cualquier pregunta y realizar ajustes a medida que cambian sus necesidades.",
      ca: "Oferim suport continu per respondre a qualsevol pregunta i realitzar ajustos a mesura que canvien les seves necessitats.",
      de: "Wir bieten fortlaufende Unterstützung, um alle Fragen zu beantworten und Anpassungen vorzunehmen, wenn sich Ihre Bedürfnisse ändern."
    },
    lensCareTtl: {
      en: "Contact lens care",
      es: "Cuidado de las lentes de contacto",
      ca: "Cura de les lents de contacte",
      de: "Kontaktlinsenpflege"
    },
    lensCareP1: {
      en: "Proper care of contact lenses is essential to maintain eye health and prevent infections. At Looptica, we provide detailed instructions on how to handle, clean, and store your contact lenses. In addition, we offer all the cleaning and maintenance products you will need.",
      es: "El cuidado adecuado de las lentes de contacto es esencial para mantener la salud ocular y prevenir infecciones. En Looptica, proporcionamos instrucciones detalladas sobre cómo manipular, limpiar y almacenar sus lentes de contacto. Además, ofrecemos todos los productos de limpieza y mantenimiento que necesitará.",
      ca: "La cura adequada de les lents de contacte és essencial per mantenir la salut ocular i prevenir infeccions. A Looptica, proporcionem instruccions detallades sobre com manipular, netejar i emmagatzemar les seves lents de contacte. A més, oferim tots els productes de neteja i manteniment que necessitarà.",
      de: "Die richtige Pflege von Kontaktlinsen ist unerlässlich, um die Augengesundheit zu erhalten und Infektionen vorzubeugen. Bei Looptica geben wir Ihnen detaillierte Anweisungen zur Handhabung, Reinigung und Aufbewahrung Ihrer Kontaktlinsen. Darüber hinaus bieten wir alle Reinigungs- und Pflegeprodukte an, die Sie benötigen."
    },
    congenitalCataract: {
      title: {
        en: "Congenital Cataracts and Contact Lenses",
        es: "Cataratas Congénitas y Lentes de Contacto",
        ca: "Cataractes Congènites i Lents de Contacte",
        de: "Angeborene Katarakte und Kontaktlinsen"
      },
      content: {
        en: [
          "Congenital cataracts are opacities of the lens that are present at birth or develop in the first months of life. Early detection and treatment are essential to avoid permanent visual impairment.",
          "After surgical removal of the cataract, visual rehabilitation is crucial. Contact lenses are often the preferred option for optical correction in children with aphakia (absence of the natural lens) following cataract surgery.",
          "The visual stimulation of these children is essential and must be carried out properly. The ophthalmologist will determine when to start visual rehabilitation, which should begin as soon as possible after surgery."
        ],
        es: [
          "Las cataratas congénitas son opacidades del cristalino que están presentes en el nacimiento o se desarrollan en los primeros meses de vida. La detección y el tratamiento temprano son esenciales para evitar la discapacidad visual permanente.",
          "Tras la extirpación quirúrgica de la catarata, la rehabilitación visual es crucial. Las lentes de contacto suelen ser la opción preferida para la corrección óptica en niños con afaquia (ausencia del cristalino natural) tras la cirugía de cataratas.",
          "La estimulación visual de estos niños es esencial y debe llevarse a cabo adecuadamente. El oftalmólogo determinará cuándo comenzar la rehabilitación visual, que debe iniciarse lo antes posible después de la cirugía."
        ],
        ca: [
          "Les cataractes congènites són opacitats del cristal·lí que estan presents en el naixement o es desenvolupen en els primers mesos de vida. La detecció i el tractament primerenc són essencials per evitar la discapacitat visual permanent.",
          "Després de l'extirpació quirúrgica de la cataracta, la rehabilitació visual és crucial. Les lents de contacte solen ser l'opció preferida per a la correcció òptica en nens amb afàquia (absència del cristal·lí natural) després de la cirurgia de cataractes.",
          "L'estimulació visual d'aquests nens és essencial i s'ha de dur a terme adequadament. L'oftalmòleg determinarà quan començar la rehabilitació visual, que ha d'iniciar-se el més aviat possible després de la cirurgia."
        ],
        de: [
          "Angeborene Katarakte sind Trübungen der Linse, die bei der Geburt vorhanden sind oder sich in den ersten Lebensmonaten entwickeln. Eine frühzeitige Erkennung und Behandlung sind unerlässlich, um dauerhafte Sehbehinderungen zu vermeiden.",
          "Nach der chirurgischen Entfernung des Katarakts ist die visuelle Rehabilitation von entscheidender Bedeutung. Kontaktlinsen sind oft die bevorzugte Option für die optische Korrektur bei Kindern mit Aphakie (Fehlen der natürlichen Linse) nach einer Kataraktoperation.",
          "Die visuelle Stimulation dieser Kinder ist essentiell und muss korrekt durchgeführt werden. Der Augenarzt wird bestimmen, wann mit der visuellen Rehabilitation begonnen werden soll, die so bald wie möglich nach der Operation beginnen sollte."
        ]
      },
      benefits: {
        en: [
          "Better visual quality compared to glasses in cases of aphakia",
          "Better peripheral vision",
          "No magnification of objects that can be disorienting",
          "Superior visual development support",
          "More natural appearance for the child"
        ],
        es: [
          "Mejor calidad visual en comparación con las gafas en casos de afaquia",
          "Mejor visión periférica",
          "Sin aumento de objetos que puede ser desorientador",
          "Mejor apoyo al desarrollo visual",
          "Apariencia más natural para el niño"
        ],
        ca: [
          "Millor qualitat visual en comparació amb les ulleres en casos d'afàquia",
          "Millor visió perifèrica",
          "Sense augment d'objectes que pot ser desorientador",
          "Millor suport al desenvolupament visual",
          "Aparença més natural pel nen"
        ],
        de: [
          "Bessere Sehqualität im Vergleich zu Brillen bei Aphakie",
          "Besseres peripheres Sehen",
          "Keine Vergrößerung von Objekten, die desorientierend sein können",
          "Überlegene Unterstützung der visuellen Entwicklung",
          "Natürlicheres Aussehen für das Kind"
        ]
      }
    }
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
        <div className="prose prose-lg max-w-none mb-12">
          <h2>{content.solutionsTitle[language]}</h2>
          <p>
            {content.solutionsP1[language]}
          </p>
          <p>
            {content.solutionsP2[language]}
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-semibold mb-6">{content.typesTitle[language]}</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.softLenses[language]}</h4>
              <p>{content.softLensesDesc[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.rgpLenses[language]}</h4>
              <p>{content.rgpLensesDesc[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.toricLenses[language]}</h4>
              <p>{content.toricLensesDesc[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.multifocalLenses[language]}</h4>
              <p>{content.multifocalLensesDesc[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.cosmeticLenses[language]}</h4>
              <p>{content.cosmeticLensesDesc[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.orthoKLenses[language]}</h4>
              <p>{content.orthoKLensesDesc[language]}</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">{content.fittingTitle[language]}</h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.assessment[language]}</h4>
                <p>{content.assessmentDesc[language]}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <ThumbsUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.selection[language]}</h4>
                <p>{content.selectionDesc[language]}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <RotateCcw className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.adaptation[language]}</h4>
                <p>{content.adaptationDesc[language]}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#2ecc71] rounded-full p-3 h-fit">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.continuousCare[language]}</h4>
                <p>{content.continuousCareDesc[language]}</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>{content.lensCareTtl[language]}</h2>
          <p>
            {content.lensCareP1[language]}
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>{content.congenitalCataract.title[language]}</h2>
          {content.congenitalCataract.content[language].map((paragraph, idx) => (
            <p key={idx}>
              {paragraph}
            </p>
          ))}
          
          <h3 className="text-xl font-medium mt-6 mb-4">
            {language === 'en' ? 'Benefits of contact lenses for congenital cataracts:' : 
             language === 'es' ? 'Beneficios de las lentes de contacto para cataratas congénitas:' : 
             language === 'ca' ? 'Beneficis de les lents de contacte per a cataractes congènites:' :
             'Vorteile von Kontaktlinsen bei angeborenen Katarakten:'}
          </h3>
          
          <ul className="list-disc pl-6 space-y-2">
            {content.congenitalCataract.benefits[language].map((benefit, idx) => (
              <li key={idx}>{benefit}</li>
            ))}
          </ul>
          
          <p className="mt-4">
            {language === 'en' ? 'At Looptica, our team of specialists has experience in the adaptation of contact lenses for children with congenital cataracts. We work closely with ophthalmologists to provide the best optical solution for each case.' : 
             language === 'es' ? 'En Looptica, nuestro equipo de especialistas tiene experiencia en la adaptación de lentes de contacto para niños con cataratas congénitas. Trabajamos estrechamente con oftalmólogos para proporcionar la mejor solución óptica para cada caso.' : 
             language === 'ca' ? 'A Looptica, el nostre equip d\'especialistes té experiència en l\'adaptació de lents de contacte per a nens amb cataractes congènites. Treballem estretament amb oftalmòlegs per proporcionar la millor solució òptica per a cada cas.' :
             'Bei Looptica verfügt unser Spezialistenteam über Erfahrung in der Anpassung von Kontaktlinsen für Kinder mit angeborenen Katarakten. Wir arbeiten eng mit Augenärzten zusammen, um für jeden Fall die beste optische Lösung zu bieten.'}
          </p>
        </div>
      </ScrollReveal>
    </ServiceLayout>
  );
};

export default LentsContacte;
