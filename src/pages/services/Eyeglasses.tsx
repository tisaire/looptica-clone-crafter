import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Glasses, PenTool, Shapes, BarChart3 } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';

const Eyeglasses = () => {
  const { language } = useLanguage();
  
  // Translations for this page
  const content = {
    meta: {
      en: {
        title: 'Prescription glasses in Poblenou, Barcelona | Looptica',
        description: 'Prescription glasses in Poblenou, Barcelona: designer frames, progressive and anti-fatigue lenses. Eye exam included and expert advice at Looptica.',
      },
      es: {
        title: 'Gafas graduadas en Poblenou, Barcelona | Looptica',
        description: 'Gafas graduadas en Poblenou, Barcelona: monturas de diseño, lentes progresivas y antifatiga. Examen visual incluido y asesoramiento experto en Looptica.',
      },
      ca: {
        title: 'Ulleres graduades a Poblenou, Barcelona | Looptica',
        description: 'Ulleres graduades a Poblenou, Barcelona: muntures de disseny, lents progressives i antifatiga. Examen visual inclòs i assessorament expert a Looptica.',
      },
      de: {
        title: 'Brillen in Poblenou, Barcelona | Looptica',
        description: 'Brillen mit Sehstärke in Poblenou, Barcelona: Designerfassungen, Gleitsicht- und Entspannungsgläser. Sehtest inklusive und Expertenberatung bei Looptica.',
      },
    },
    title: {
      en: 'Premium Eyeglasses Collection',
      es: 'Colección Premium de Gafas',
      ca: 'Col·lecció Premium d\'Ulleres',
      de: 'Premium-Brillenkollektion',
    },
    subtitle: {
      en: 'Find the perfect frames to match your style and vision needs',
      es: 'Encuentra las monturas perfectas para tu estilo y necesidades visuales',
      ca: 'Troba les muntures perfectes per al teu estil i necessitats visuals',
      de: 'Finden Sie die perfekten Fassungen für Ihren Stil und Ihre Sehbedürfnisse',
    },
    appointmentSubject: {
      en: 'Eyeglasses Consultation at Looptica',
      es: 'Consulta de Gafas en Looptica',
      ca: 'Consulta d\'Ulleres a Looptica',
      de: 'Brillenberatung bei Looptica',
    },
    intro1: {
      en: 'At Looptica, we believe that eyeglasses are more than just a visual aid—they\'re an extension of your personality and style. Our carefully curated collection features frames from the world\'s most prestigious designers and brands, ensuring that you\'ll find the perfect pair that complements your face shape, lifestyle, and personal aesthetic.',
      es: 'En Looptica, creemos que las gafas son mucho más que una ayuda visual; son una extensión de tu personalidad y estilo. Nuestra colección cuidadosamente seleccionada presenta monturas de los diseñadores y marcas más prestigiosos del mundo, asegurando que encontrarás el par perfecto que complementa la forma de tu rostro, estilo de vida y estética personal.',
      ca: 'A Looptica, creiem que les ulleres són molt més que una ajuda visual; són una extensió de la teva personalitat i estil. La nostra col·lecció acuradament seleccionada presenta muntures dels dissenyadors i marques més prestigiosos del món, assegurant que trobaràs el parell perfecte que complementa la forma del teu rostre, estil de vida i estètica personal.',
      de: 'Bei Looptica glauben wir, dass Brillen mehr als nur eine Sehhilfe sind – sie sind eine Erweiterung Ihrer Persönlichkeit und Ihres Stils. Unsere sorgfältig kuratierte Kollektion umfasst Fassungen von den prestigeträchtigsten Designern und Marken der Welt und stellt sicher, dass Sie das perfekte Paar finden, das Ihre Gesichtsform, Ihren Lebensstil und Ihre persönliche Ästhetik ergänzt.',
    },
    intro2: {
      en: 'Each frame in our collection is selected for its exceptional quality, innovative design, and comfortable fit. Whether you\'re looking for something classic and understated or bold and fashion-forward, our extensive range has options to suit every preference.',
      es: 'Cada montura de nuestra colección es seleccionada por su calidad excepcional, diseño innovador y ajuste cómodo. Ya sea que busques algo clásico y discreto o atrevido y a la moda, nuestra amplia gama tiene opciones para satisfacer todas las preferencias.',
      ca: 'Cada muntura de la nostra col·lecció és seleccionada per la seva qualitat excepcional, disseny innovador i ajust còmode. Ja sigui que busquis alguna cosa clàssica i discreta o atrevida i a la moda, la nostra àmplia gamma té opcions per satisfer totes les preferències.',
      de: 'Jede Fassung in unserer Kollektion wird für ihre außergewöhnliche Qualität, ihr innovatives Design und ihre bequeme Passform ausgewählt. Ob Sie etwas Klassisches und Dezentes oder Gewagtes und Modisches suchen, unser umfangreiches Sortiment bietet Optionen für jeden Geschmack.',
    },
    lensTitle: {
      en: 'Our Premium Lens Technology',
      es: 'Nuestra Tecnología Premium de Lentes',
      ca: 'La Nostra Tecnologia Premium de Lents',
      de: 'Unsere Premium-Linsentechnologie',
    },
    hdLenses: {
      en: 'High-Definition Digital Lenses',
      es: 'Lentes Digitales de Alta Definición',
      ca: 'Lents Digitals d\'Alta Definició',
      de: 'Hochauflösende Digitallinsen',
    },
    hdLensesDesc: {
      en: 'Our digitally-surfaced lenses provide superior clarity and visual comfort compared to traditional lenses, reducing eye strain and fatigue even after long hours of wear.',
      es: 'Nuestras lentes con superficie digital proporcionan una claridad superior y comodidad visual en comparación con las lentes tradicionales, reduciendo la fatiga ocular incluso después de largas horas de uso.',
      ca: 'Les nostres lents amb superfície digital proporcionen una claredat superior i comoditat visual en comparació amb les lents tradicionals, reduint la fatiga ocular fins i tot després de llargues hores d\'ús.',
      de: 'Unsere digital oberflächenbehandelten Linsen bieten überlegene Klarheit und visuellen Komfort im Vergleich zu herkömmlichen Linsen und reduzieren Augenbelastung und Ermüdung auch nach langen Tragezeiten.',
    },
    progressive: {
      en: 'Progressive Lenses',
      es: 'Lentes Progresivas',
      ca: 'Lents Progressives',
      de: 'Gleitsichtgläser',
    },
    progressiveDesc: {
      en: 'Our advanced progressive lenses provide seamless transition between distances without visible lines, offering natural vision correction for presbyopia.',
      es: 'Nuestras lentes progresivas avanzadas proporcionan una transición sin problemas entre distancias sin líneas visibles, ofreciendo una corrección natural de la visión para la presbicia.',
      ca: 'Les nostres lents progressives avançades proporcionen una transició sense problemes entre distàncies sense línies visibles, oferint una correcció natural de la visió per a la presbícia.',
      de: 'Unsere fortschrittlichen Gleitsichtgläser bieten nahtlose Übergänge zwischen Entfernungen ohne sichtbare Linien und eine natürliche Sehkorrektur bei Presbyopie.',
    },
    antiReflective: {
      en: 'Anti-Reflective Coatings',
      es: 'Revestimientos Antirreflejantes',
      ca: 'Revestiments Antireflectants',
      de: 'Entspiegelungsbeschichtungen',
    },
    antiReflectiveDesc: {
      en: 'Eliminate distracting reflections, reduce glare, and improve night vision while enhancing the appearance of your glasses by making the lenses nearly invisible.',
      es: 'Elimina los reflejos molestos, reduce el deslumbramiento y mejora la visión nocturna, a la vez que mejora la apariencia de tus gafas al hacer que las lentes sean casi invisibles.',
      ca: 'Elimina els reflexos molestos, redueix l\'enlluernament i millora la visió nocturna, alhora que millora l\'aparença de les teves ulleres en fer que les lents siguin gairebé invisibles.',
      de: 'Eliminieren Sie störende Reflexionen, reduzieren Sie Blendung und verbessern Sie das Nachtsehen, während Sie das Aussehen Ihrer Brille verbessern, indem Sie die Gläser nahezu unsichtbar machen.',
    },
    blueLight: {
      en: 'Blue Light Protection',
      es: 'Protección Contra Luz Azul',
      ca: 'Protecció Contra Llum Blava',
      de: 'Blaulichtschutz',
    },
    blueLightDesc: {
      en: 'Our specialized lenses filter out harmful blue light from digital screens, reducing eye strain and potentially improving sleep patterns for heavy computer users.',
      es: 'Nuestras lentes especializadas filtran la luz azul dañina de las pantallas digitales, reduciendo la fatiga ocular y potencialmente mejorando los patrones de sueño para los usuarios frecuentes de computadoras.',
      ca: 'Les nostres lents especialitzades filtren la llum blava nociva de les pantalles digitals, reduint la fatiga ocular i potencialment millorant els patrons de son per als usuaris freqüents d\'ordinadors.',
      de: 'Unsere spezialisierten Linsen filtern schädliches blaues Licht von digitalen Bildschirmen heraus, reduzieren Augenbelastung und können möglicherweise die Schlafmuster für starke Computernutzer verbessern.',
    },
    brandsTitle: {
      en: 'Featured Designer Brands',
      es: 'Marcas de Diseñador Destacadas',
      ca: 'Marques de Dissenyador Destacades',
      de: 'Ausgewählte Designer-Marken',
    },
    brandEtnia: {
      en: 'Known for bold colors and patterns, celebrating Mediterranean culture with vibrant designs and premium materials.',
      es: 'Conocida por sus colores y patrones audaces, celebrando la cultura mediterránea con diseños vibrantes y materiales premium.',
      ca: 'Coneguda pels seus colors i patrons audaços, celebrant la cultura mediterrània amb dissenys vibrants i materials premium.',
      de: 'Bekannt für kräftige Farben und Muster, feiert die mediterrane Kultur mit lebendigen Designs und Premium-Materialien.',
    },
    brandWoodys: {
      en: 'Innovative frames combining wood elements with contemporary designs for a unique, eco-conscious aesthetic.',
      es: 'Monturas innovadoras que combinan elementos de madera con diseños contemporáneos para una estética única y ecológica.',
      ca: 'Muntures innovadores que combinen elements de fusta amb dissenys contemporanis per a una estètica única i ecològica.',
      de: 'Innovative Fassungen, die Holzelemente mit zeitgenössischen Designs für eine einzigartige, umweltbewusste Ästhetik kombinieren.',
    },
    brandXavier: {
      en: 'Elegant, minimalist frames that focus on clean lines and sophisticated color palettes for a timeless look.',
      es: 'Monturas elegantes y minimalistas que se centran en líneas limpias y paletas de colores sofisticadas para un aspecto atemporal.',
      ca: 'Muntures elegants i minimalistes que es centren en línies netes i paletes de colors sofisticades per a un aspecte atemporal.',
      de: 'Elegante, minimalistische Fassungen, die sich auf klare Linien und raffinierte Farbpaletten für einen zeitlosen Look konzentrieren.',
    },
    brandKaleos: {
      en: 'Fashion-forward and versatile frames that blend vintage inspiration with contemporary trends.',
      es: 'Monturas vanguardistas y versátiles que mezclan inspiración vintage con tendencias contemporáneas.',
      ca: 'Muntures avantguardistes i versàtils que barregen inspiració vintage amb tendències contemporànies.',
      de: 'Modische und vielseitige Fassungen, die Vintage-Inspiration mit zeitgenössischen Trends verbinden.',
    },
    brandRayBan: {
      en: 'Iconic frames known worldwide for their classic designs and exceptional quality that never goes out of style.',
      es: 'Monturas icónicas conocidas en todo el mundo por sus diseños clásicos y calidad excepcional que nunca pasa de moda.',
      ca: 'Muntures icónicas conegudes arreu del món pels seus dissenys clàssics i qualitat excepcional que mai passa de moda.',
      de: 'Ikonische Fassungen, die weltweit für ihre klassischen Designs und außergewöhnliche Qualität bekannt sind, die nie aus der Mode kommt.',
    },
    brandTomFord: {
      en: 'Luxury frames featuring sophisticated designs, premium materials, and attention to detail for the discerning customer.',
      es: 'Monturas de lujo con diseños sofisticados, materiales premium y atención al detalle para el cliente exigente.',
      ca: 'Muntures de luxe amb dissenys sofisticats, materials premium i atenció al detall per al client exigent.',
      de: 'Luxusfassungen mit raffinierten Designs, Premium-Materialien und Liebe zum Detail für den anspruchsvollen Kunden.',
    },
    fittingTitle: {
      en: 'Our Personalized Fitting Process',
      es: 'Nuestro Proceso de Adaptación Personalizado',
      ca: 'El Nostre Procés d\'Adaptació Personalitzat',
      de: 'Unser personalisierter Anpassungsprozess',
    },
    fittingDesc: {
      en: 'At Looptica, we understand that properly fitted eyeglasses are essential not only for optimal vision but also for comfort and appearance. Our comprehensive fitting process ensures that your new eyeglasses will work perfectly for your specific needs:',
      es: 'En Looptica, entendemos que unas gafas correctamente ajustadas son esenciales no solo para una visión óptima, sino también para la comodidad y la apariencia. Nuestro proceso de adaptación integral asegura que sus nuevas gafas funcionarán perfectamente para sus necesidades específicas:',
      ca: 'A Looptica, entenem que unes ulleres correctament ajustades són essencials no només per a una visió òptima, sinó també per a la comoditat i l\'aparença. El nostre procés d\'adaptació integral assegura que les seves noves ulleres funcionaran perfectament per a les seves necessitats específiques:',
      de: 'Bei Looptica verstehen wir, dass richtig angepasste Brillen nicht nur für optimales Sehen, sondern auch für Komfort und Aussehen unerlässlich sind. Unser umfassender Anpassungsprozess stellt sicher, dass Ihre neue Brille perfekt für Ihre spezifischen Bedürfnisse funktioniert:',
    },
    faceShape: {
      en: 'Face Shape Analysis',
      es: 'Análisis de la Forma del Rostro',
      ca: 'Anàlisi de la Forma del Rostre',
      de: 'Gesichtsformanalyse',
    },
    faceShapeDesc: {
      en: 'Our experts will analyze your face shape to recommend frame styles that complement your natural features.',
      es: 'Nuestros expertos analizarán la forma de su rostro para recomendar estilos de montura que complementen sus rasgos naturales.',
      ca: 'Els nostres experts analitzaran la forma del seu rostre per recomanar estils de muntura que complementin els seus trets naturals.',
      de: 'Unsere Experten analysieren Ihre Gesichtsform, um Fassungsstile zu empfehlen, die Ihre natürlichen Gesichtszüge ergänzen.',
    },
    lifestyle: {
      en: 'Lifestyle Assessment',
      es: 'Evaluación del Estilo de Vida',
      ca: 'Avaluació de l\'Estil de Vida',
      de: 'Lebensstil-Bewertung',
    },
    lifestyleDesc: {
      en: 'We\'ll discuss your daily activities, work environment, and hobbies to suggest frames and lens options that suit your lifestyle.',
      es: 'Discutiremos sus actividades diarias, entorno de trabajo y pasatiempos para sugerir monturas y opciones de lentes que se adapten a su estilo de vida.',
      ca: 'Discutirem les seves activitats diàries, entorn de treball i aficions per suggerir muntures i opcions de lents que s\'adaptin al seu estil de vida.',
      de: 'Wir besprechen Ihre täglichen Aktivitäten, Arbeitsumgebung und Hobbys, um Fassungen und Linsenoptionen vorzuschlagen, die zu Ihrem Lebensstil passen.',
    },
    measurements: {
      en: 'Precise Measurements',
      es: 'Medidas Precisas',
      ca: 'Mesures Precises',
      de: 'Präzise Messungen',
    },
    measurementsDesc: {
      en: 'Using advanced digital technology, we\'ll take detailed measurements to ensure your lenses are perfectly centered for optimal vision.',
      es: 'Utilizando tecnología digital avanzada, tomaremos medidas detalladas para asegurar que sus lentes estén perfectamente centradas para una visión óptima.',
      ca: 'Utilitzant tecnologia digital avançada, prendrem mesures detallades per assegurar que les seves lents estiguin perfectament centrades per a una visió òptima.',
      de: 'Mit fortschrittlicher Digitaltechnologie nehmen wir detaillierte Messungen vor, um sicherzustellen, dass Ihre Linsen perfekt zentriert sind für optimales Sehen.',
    },
    comfort: {
      en: 'Comfort Adjustment',
      es: 'Ajuste de Comodidad',
      ca: 'Ajust de Comoditat',
      de: 'Komfort-Anpassung',
    },
    comfortDesc: {
      en: 'Once your glasses are ready, we\'ll make final adjustments to ensure they fit comfortably without pinching or sliding.',
      es: 'Una vez que sus gafas estén listas, haremos ajustes finales para asegurar que se ajusten cómodamente sin pellizcar o deslizarse.',
      ca: 'Un cop les seves ulleres estiguin llestes, farem ajustos finals per assegurar que s\'ajustin còmodament sense pessigollejar o lliscar.',
      de: 'Sobald Ihre Brille fertig ist, nehmen wir finale Anpassungen vor, um sicherzustellen, dass sie bequem sitzt, ohne zu drücken oder zu rutschen.',
    },
    support: {
      en: 'Ongoing Support',
      es: 'Apoyo Continuo',
      ca: 'Suport Continu',
      de: 'Fortlaufende Unterstützung',
    },
    supportDesc: {
      en: 'We provide complimentary adjustments and minor repairs to keep your eyeglasses fitting perfectly throughout their lifetime.',
      es: 'Proporcionamos ajustes complementarios y reparaciones menores para mantener sus gafas en perfecto estado durante toda su vida útil.',
      ca: 'Proporcionem ajustos complementaris i reparacions menors per mantenir les seves ulleres en perfecte estat durant tota la seva vida útil.',
      de: 'Wir bieten kostenlose Anpassungen und kleinere Reparaturen, um Ihre Brille während ihrer gesamten Lebensdauer perfekt passend zu halten.',
    },
    guaranteeTitle: {
      en: 'Quality Guarantee',
      es: 'Garantía de Calidad',
      ca: 'Garantia de Qualitat',
      de: 'Qualitätsgarantie',
    },
    guaranteeDesc: {
      en: 'Every pair of eyeglasses from Looptica comes with our comprehensive quality guarantee:',
      es: 'Cada par de gafas de Looptica incluye nuestra garantía de calidad integral:',
      ca: 'Cada parell d\'ulleres de Looptica inclou la nostra garantia de qualitat integral:',
      de: 'Jede Brille von Looptica kommt mit unserer umfassenden Qualitätsgarantie:',
    },
    guarantee1: {
      en: '30-day adaptation guarantee for progressive lenses',
      es: 'Garantía de adaptación de 30 días para lentes progresivas',
      ca: 'Garantia d\'adaptació de 30 dies per a lents progressives',
      de: '30-Tage-Anpassungsgarantie für Gleitsichtgläser',
    },
    guarantee2: {
      en: 'One-year warranty against manufacturing defects',
      es: 'Un año de garantía para defectos de fabricación',
      ca: 'Un any de garantia per defectes de fabricació',
      de: 'Ein Jahr Garantie gegen Herstellungsfehler',
    },
    guarantee3: {
      en: 'Six months of free adjustments and maintenance',
      es: 'Seis meses de ajustes y mantenimiento gratuitos',
      ca: 'Sis mesos d\'ajustos i manteniment gratuïts',
      de: 'Sechs Monate kostenlose Anpassungen und Wartung',
    },
    guarantee4: {
      en: 'Prescription accuracy guarantee',
      es: 'Garantía de precisión de la prescripción',
      ca: 'Garantia de precisió de la prescripció',
      de: 'Garantie für Verschreibungsgenauigkeit',
    },
  };
  
  return (
    <>
      <Helmet>
        <title>{content.meta[language].title}</title>
        <meta name="description" content={content.meta[language].description} />
        <meta property="og:title" content={content.meta[language].title} />
        <meta property="og:description" content={content.meta[language].description} />
      </Helmet>
    <ServiceLayout
      title={content.title[language]}
      subtitle={content.subtitle[language]}
      image="/lovable-uploads/45087a9c-489a-4d48-82fb-d857e7bf306a.png"
      appointmentSubject={content.appointmentSubject[language]}
    >
      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>{content.title[language]}</h2>
          <p>{content.intro1[language]}</p>
          <p>{content.intro2[language]}</p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-semibold mb-6">{content.lensTitle[language]}</h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-[#55afa9] rounded-full p-3 h-fit">
                <Glasses className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.hdLenses[language]}</h4>
                <p>{content.hdLensesDesc[language]}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#55afa9] rounded-full p-3 h-fit">
                <PenTool className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.progressive[language]}</h4>
                <p>{content.progressiveDesc[language]}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#55afa9] rounded-full p-3 h-fit">
                <Shapes className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.antiReflective[language]}</h4>
                <p>{content.antiReflectiveDesc[language]}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#55afa9] rounded-full p-3 h-fit">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.blueLight[language]}</h4>
                <p>{content.blueLightDesc[language]}</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">{content.brandsTitle[language]}</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h4 className="text-xl font-medium mb-2">Etnia Barcelona</h4>
              <p>{content.brandEtnia[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h4 className="text-xl font-medium mb-2">Woodys Barcelona</h4>
              <p>{content.brandWoodys[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h4 className="text-xl font-medium mb-2">Xavier Garcia</h4>
              <p>{content.brandXavier[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h4 className="text-xl font-medium mb-2">Kaleos</h4>
              <p>{content.brandKaleos[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h4 className="text-xl font-medium mb-2">Ray-Ban</h4>
              <p>{content.brandRayBan[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h4 className="text-xl font-medium mb-2">Tom Ford</h4>
              <p>{content.brandTomFord[language]}</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>{content.fittingTitle[language]}</h2>
          <p>
            {content.fittingDesc[language]}
          </p>
          <ol>
            <li>
              <strong>{content.faceShape[language]}:</strong> {content.faceShapeDesc[language]}
            </li>
            <li>
              <strong>{content.lifestyle[language]}:</strong> {content.lifestyleDesc[language]}
            </li>
            <li>
              <strong>{content.measurements[language]}:</strong> {content.measurementsDesc[language]}
            </li>
            <li>
              <strong>{content.comfort[language]}:</strong> {content.comfortDesc[language]}
            </li>
            <li>
              <strong>{content.support[language]}:</strong> {content.supportDesc[language]}
            </li>
          </ol>
          
          <h3>{content.guaranteeTitle[language]}</h3>
          <p>
            {content.guaranteeDesc[language]}
          </p>
          <ul>
            <li>{content.guarantee1[language]}</li>
            <li>{content.guarantee2[language]}</li>
            <li>{content.guarantee3[language]}</li>
            <li>{content.guarantee4[language]}</li>
          </ul>
        </div>
      </ScrollReveal>
    </ServiceLayout>
  );
};

export default Eyeglasses;
