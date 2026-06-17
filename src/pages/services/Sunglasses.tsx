import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Sun, Shield, Zap, Heart } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';

const Sunglasses = () => {
  const { t, language } = useLanguage();
  
  const content = {
    meta: {
      en: {
        title: 'Sunglasses in Poblenou, Barcelona | Looptica',
        description: 'Prescription and designer sunglasses in Poblenou, Barcelona. 100% UV protection, style consulting and a wide selection at Looptica. Book your visit.',
      },
      es: {
        title: 'Gafas de sol en Poblenou, Barcelona | Looptica',
        description: 'Gafas de sol graduadas y de marca en Poblenou, Barcelona. Protección UV 100%, asesoramiento de estilo y amplia selección en Looptica. Pide cita.',
      },
      ca: {
        title: 'Ulleres de sol a Poblenou, Barcelona | Looptica',
        description: "Ulleres de sol graduades i de marca a Poblenou, Barcelona. Protecció UV 100%, assessorament d'estil i àmplia selecció a Looptica. Demana cita.",
      },
      de: {
        title: 'Sonnenbrillen in Poblenou, Barcelona | Looptica',
        description: 'Sonnenbrillen mit Sehstärke und Designermarken in Poblenou, Barcelona. 100% UV-Schutz, Stilberatung und große Auswahl bei Looptica. Termin buchen.',
      },
    },
    subtitle: {
      en: "Protection and style for every season",
      es: "Protección y estilo para cada temporada",
      ca: "Protecció i estil per a cada temporada",
      de: "Schutz und Stil für jede Jahreszeit",
    },
    title: {
      en: "Premium Sunglasses Collection",
      es: "Colección Premium de Gafas de Sol",
      ca: "Col·lecció Premium d'Ulleres de Sol",
      de: "Premium-Sonnenbrillenkollektion",
    },
    intro1: {
      en: "At Looptica, we understand that sunglasses are much more than a fashion accessory—they're essential for protecting your eyes from harmful UV radiation while expressing your personal style. Our extensive collection features high-quality sunglasses from renowned designers and trusted brands, ensuring both optimal protection and fashion-forward design.",
      es: "En Looptica, entendemos que las gafas de sol son mucho más que un accesorio de moda; son esenciales para proteger tus ojos de la radiación UV dañina mientras expresas tu estilo personal. Nuestra amplia colección presenta gafas de sol de alta calidad de diseñadores reconocidos y marcas de confianza, garantizando tanto una protección óptima como un diseño a la moda.",
      ca: "A Looptica, entenem que les ulleres de sol són molt més que un accessori de moda; són essencials per protegir els teus ulls de la radiació UV nociva mentre expresses el teu estil personal. La nostra àmplia col·lecció presenta ulleres de sol d'alta qualitat de dissenyadors reconeguts i marques de confiança, garantint tant una protecció òptima com un disseny a la moda.",
      de: "Bei Looptica verstehen wir, dass Sonnenbrillen viel mehr als ein Modeaccessoire sind – sie sind unverzichtbar, um Ihre Augen vor schädlicher UV-Strahlung zu schützen und gleichzeitig Ihren persönlichen Stil auszudrücken. Unsere umfangreiche Kollektion umfasst hochwertige Sonnenbrillen von renommierten Designern und vertrauenswürdigen Marken und gewährleistet sowohl optimalen Schutz als auch modisches Design.",
    },
    intro2: {
      en: "Whether you're looking for classic aviators, trendy oversized frames, sporty wraparounds, or sophisticated designer pieces, our diverse selection caters to all preferences and face shapes. We prioritize quality materials, superior craftsmanship, and lenses that provide 100% UV protection.",
      es: "Ya sea que busques aviadores clásicos, monturas extragrandes de moda, envolventes deportivas o piezas sofisticadas de diseñador, nuestra diversa selección atiende a todas las preferencias y formas de cara. Priorizamos materiales de calidad, artesanía superior y lentes que proporcionan 100% de protección UV.",
      ca: "Ja sigui que busquis aviadors clàssics, muntures extragrandes de moda, envoltants esportives o peces sofisticades de dissenyador, la nostra diversa selecció atén a totes les preferències i formes de cara. Prioritzem materials de qualitat, artesania superior i lents que proporcionen 100% de protecció UV.",
      de: "Ob Sie klassische Pilotenbrillen, trendige übergroße Fassungen, sportliche Wraparound-Brillen oder raffinierte Designer-Stücke suchen, unsere vielfältige Auswahl bedient alle Vorlieben und Gesichtsformen. Wir priorisieren Qualitätsmaterialien, überlegene Handwerkskunst und Gläser, die 100% UV-Schutz bieten.",
    },
    protectionTitle: {
      en: "The Importance of Quality Sun Protection",
      es: "La Importancia de una Protección Solar de Calidad",
      ca: "La Importància d'una Protecció Solar de Qualitat",
      de: "Die Bedeutung von qualitativem Sonnenschutz",
    },
    uvProtection: {
      en: "UV Protection",
      es: "Protección UV",
      ca: "Protecció UV",
      de: "UV-Schutz",
    },
    uvProtectionDesc: {
      en: "All our sunglasses provide 100% UVA and UVB protection to shield your eyes from harmful rays that can cause cataracts, macular degeneration, and other eye conditions.",
      es: "Todas nuestras gafas de sol proporcionan 100% de protección UVA y UVB para proteger tus ojos de los rayos dañinos que pueden causar cataratas, degeneración macular y otras condiciones oculares.",
      ca: "Totes les nostres ulleres de sol proporcionen 100% de protecció UVA i UVB per protegir els teus ulls dels raigs nocius que poden causar cataractes, degeneració macular i altres condicions oculars.",
      de: "Alle unsere Sonnenbrillen bieten 100% UVA- und UVB-Schutz, um Ihre Augen vor schädlichen Strahlen zu schützen, die Katarakte, Makuladegeneration und andere Augenerkrankungen verursachen können.",
    },
    glareReduction: {
      en: "Glare Reduction",
      es: "Reducción del Deslumbramiento",
      ca: "Reducció de l'Enlluernament",
      de: "Blendungsreduzierung",
    },
    glareReductionDesc: {
      en: "Our polarized lens options reduce glare from reflective surfaces like water, snow, and roads, providing clearer vision and greater comfort while driving or enjoying outdoor activities.",
      es: "Nuestras opciones de lentes polarizadas reducen el deslumbramiento de superficies reflectantes como agua, nieve y carreteras, proporcionando una visión más clara y mayor comodidad mientras conduces o disfrutas de actividades al aire libre.",
      ca: "Les nostres opcions de lents polaritzades redueixen l'enlluernament de superfícies reflectants com aigua, neu i carreteres, proporcionant una visió més clara i major comoditat mentre condueixes o gaudeixes d'activitats a l'aire lliure.",
      de: "Unsere polarisierten Glasoptionen reduzieren Blendung von reflektierenden Oberflächen wie Wasser, Schnee und Straßen und bieten klarere Sicht und größeren Komfort beim Fahren oder bei Outdoor-Aktivitäten.",
    },
    impactResistance: {
      en: "Impact Resistance",
      es: "Resistencia al Impacto",
      ca: "Resistència a l'Impacte",
      de: "Stoßfestigkeit",
    },
    impactResistanceDesc: {
      en: "Many of our sunglasses feature impact-resistant lenses that provide an extra layer of protection for active lifestyles, sports, and outdoor adventures.",
      es: "Muchas de nuestras gafas de sol cuentan con lentes resistentes al impacto que proporcionan una capa adicional de protección para estilos de vida activos, deportes y aventuras al aire libre.",
      ca: "Moltes de les nostres ulleres de sol compten amb lents resistents a l'impacte que proporcionen una capa addicional de protecció per a estils de vida actius, esports i aventures a l'aire lliure.",
      de: "Viele unserer Sonnenbrillen verfügen über stoßfeste Gläser, die eine zusätzliche Schutzschicht für aktive Lebensstile, Sport und Outdoor-Abenteuer bieten.",
    },
    eyeComfort: {
      en: "Eye Comfort",
      es: "Comodidad Visual",
      ca: "Comoditat Visual",
      de: "Augenkomfort",
    },
    eyeComfortDesc: {
      en: "Quality sunglasses reduce eye strain and fatigue by limiting the amount of bright light entering your eyes, providing comfort even during prolonged outdoor exposure.",
      es: "Las gafas de sol de calidad reducen la fatiga visual limitando la cantidad de luz brillante que entra en tus ojos, proporcionando comodidad incluso durante exposiciones prolongadas al aire libre.",
      ca: "Les ulleres de sol de qualitat redueixen la fatiga visual limitant la quantitat de llum brillant que entra als teus ulls, proporcionant comoditat fins i tot durant exposicions prolongades a l'aire lliure.",
      de: "Qualitätssonnenbrillen reduzieren Augenbelastung und Ermüdung, indem sie die Menge an hellem Licht begrenzen, das in Ihre Augen eindringt, und bieten Komfort auch bei längerer Sonneneinstrahlung.",
    },
    lensOptionsTitle: {
      en: "Specialized Lens Options",
      es: "Opciones de Lentes Especializadas",
      ca: "Opcions de Lents Especialitzades",
      de: "Spezialisierte Glasoptionen",
    },
    polarizedLenses: {
      en: "Polarized Lenses",
      es: "Lentes Polarizadas",
      ca: "Lents Polaritzades",
      de: "Polarisierte Gläser",
    },
    polarizedLensesDesc: {
      en: "Eliminate glare from reflective surfaces, perfect for driving, water sports, and snow activities. Our polarized lenses provide enhanced visual clarity and reduced eye strain.",
      es: "Eliminan el deslumbramiento de superficies reflectantes, perfectas para conducir, deportes acuáticos y actividades en la nieve. Nuestras lentes polarizadas proporcionan mayor claridad visual y reducen la fatiga ocular.",
      ca: "Eliminen l'enlluernament de superfícies reflectants, perfectes per conduir, esports aquàtics i activitats a la neu. Les nostres lents polaritzades proporcionen major claredat visual i redueixen la fatiga ocular.",
      de: "Eliminieren Blendung von reflektierenden Oberflächen, perfekt zum Fahren, für Wassersport und Schneeaktivitäten. Unsere polarisierten Gläser bieten verbesserte visuelle Klarheit und reduzierte Augenbelastung.",
    },
    gradientTint: {
      en: "Gradient Tint Lenses",
      es: "Lentes con Tinte Degradado",
      ca: "Lents amb Tint Degradat",
      de: "Verlaufstönung-Gläser",
    },
    gradientTintDesc: {
      en: "Featuring a smooth transition from darker at the top to lighter at the bottom, ideal for driving where you need protection from overhead sun but clearer vision of the dashboard.",
      es: "Presentan una transición suave de más oscuro en la parte superior a más claro en la parte inferior, ideal para conducir donde se necesita protección del sol superior pero una visión más clara del tablero.",
      ca: "Presenten una transició suau de més fosc a la part superior a més clar a la part inferior, ideal per conduir on es necessita protecció del sol superior però una visió més clara del tauler.",
      de: "Mit einem sanften Übergang von dunkler oben zu heller unten, ideal zum Fahren, wo Sie Schutz vor Sonneneinstrahlung von oben benötigen, aber klarere Sicht auf das Armaturenbrett.",
    },
    mirroredLenses: {
      en: "Mirrored Lenses",
      es: "Lentes Espejadas",
      ca: "Lents Reflectants",
      de: "Verspiegelte Gläser",
    },
    mirroredLensesDesc: {
      en: "A reflective coating on the outside of the lens reduces glare and light transmission while adding a stylish look. Popular for bright, high-altitude environments.",
      es: "Un recubrimiento reflectante en el exterior de la lente reduce el deslumbramiento y la transmisión de luz mientras añade un aspecto elegante. Popular para entornos brillantes y de gran altitud.",
      ca: "Un recobriment reflectant a l'exterior de la lent redueix l'enlluernament i la transmissió de llum mentre afegeix un aspecte elegant. Popular per a entorns brillants i d'alta altitud.",
      de: "Eine reflektierende Beschichtung auf der Außenseite des Glases reduziert Blendung und Lichtübertragung und verleiht gleichzeitig ein stilvolles Aussehen. Beliebt für helle, hochgelegene Umgebungen.",
    },
    photochromic: {
      en: "Photochromic Lenses",
      es: "Lentes Fotocromáticas",
      ca: "Lents Fotocromàtiques",
      de: "Photochromatische Gläser",
    },
    photochromicDesc: {
      en: "These adaptive lenses darken in bright conditions and lighten in low light, providing versatile protection in changing environments with a single pair of glasses.",
      es: "Estas lentes adaptativas se oscurecen en condiciones brillantes y se aclaran con poca luz, proporcionando una protección versátil en entornos cambiantes con un solo par de gafas.",
      ca: "Aquestes lents adaptatives s'enfosqueixen en condicions brillants i s'aclareixen amb poca llum, proporcionant una protecció versàtil en entorns canviants amb un sol parell d'ulleres.",
      de: "Diese adaptiven Gläser verdunkeln sich bei hellen Bedingungen und hellen sich bei schwachem Licht auf und bieten vielseitigen Schutz in wechselnden Umgebungen mit einer einzigen Brille.",
    },
    sportLenses: {
      en: "Sport-Specific Lenses",
      es: "Lentes Específicas para Deportes",
      ca: "Lents Específiques per a Esports",
      de: "Sportspezifische Gläser",
    },
    sportLensesDesc: {
      en: "Designed for particular activities like golf, cycling, or fishing, these specialized lenses enhance contrast and visibility for specific environments.",
      es: "Diseñadas para actividades particulares como golf, ciclismo o pesca, estas lentes especializadas mejoran el contraste y la visibilidad para entornos específicos.",
      ca: "Dissenyades per a activitats particulars com golf, ciclisme o pesca, aquestes lents especialitzades milloren el contrast i la visibilitat per a entorns específics.",
      de: "Entwickelt für bestimmte Aktivitäten wie Golf, Radfahren oder Angeln, verbessern diese spezialisierten Gläser Kontrast und Sichtbarkeit für spezifische Umgebungen.",
    },
    prescriptionSunglasses: {
      en: "Prescription Sunglasses",
      es: "Gafas de Sol con Prescripción",
      ca: "Ulleres de Sol amb Prescripció",
      de: "Sonnenbrillen mit Sehstärke",
    },
    prescriptionSunglassesDesc: {
      en: "Combine vision correction with sun protection in one stylish package. Available with all lens types and in virtually any frame style in our collection.",
      es: "Combinan la corrección de la visión con la protección solar en un paquete elegante. Disponibles con todos los tipos de lentes y prácticamente en cualquier estilo de montura de nuestra colección.",
      ca: "Combinen la correcció de la visió amb la protecció solar en un paquet elegant. Disponibles amb tots els tipus de lents i pràcticament en qualsevol estil de muntura de la nostra col·lecció.",
      de: "Kombinieren Sehkorrektur mit Sonnenschutz in einem stilvollen Paket. Verfügbar mit allen Glastypen und in praktisch jedem Fassungsstil unserer Kollektion.",
    },
    brandsTitle: {
      en: "Our Premium Sunglasses Brands",
      es: "Nuestras Marcas Premium de Gafas de Sol",
      ca: "Les Nostres Marques Premium d'Ulleres de Sol",
      de: "Unsere Premium-Sonnenbrillenmarken",
    },
    brandsIntro: {
      en: "Our collection features renowned brands known for their quality, style, and innovation:",
      es: "Nuestra colección presenta marcas reconocidas por su calidad, estilo e innovación:",
      ca: "La nostra col·lecció presenta marques reconegudes per la seva qualitat, estil i innovació:",
      de: "Unsere Kollektion umfasst renommierte Marken, die für ihre Qualität, ihren Stil und ihre Innovation bekannt sind:",
    },
    rayban: {
      en: "Ray-Ban - Iconic designs with timeless appeal and reliable protection",
      es: "Ray-Ban - Diseños icónicos con atractivo atemporal y protección confiable",
      ca: "Ray-Ban - Dissenys icònics amb atractiu atemporal i protecció confiable",
      de: "Ray-Ban - Ikonische Designs mit zeitlosem Appeal und zuverlässigem Schutz",
    },
    etnia: {
      en: "Etnia Barcelona - Bold, colorful frames with Mediterranean flair",
      es: "Etnia Barcelona - Monturas audaces y coloridas con estilo mediterráneo",
      ca: "Etnia Barcelona - Muntures audaces i colorides amb estil mediterrani",
      de: "Etnia Barcelona - Kühne, farbenfrohe Fassungen mit mediterranem Flair",
    },
    oakley: {
      en: "Oakley - Performance-oriented sunglasses with cutting-edge lens technology",
      es: "Oakley - Gafas de sol orientadas al rendimiento con tecnología de lentes de vanguardia",
      ca: "Oakley - Ulleres de sol orientades al rendiment amb tecnologia de lents d'avantguarda",
      de: "Oakley - Leistungsorientierte Sonnenbrillen mit modernster Glastechnologie",
    },
    maui: {
      en: "Maui Jim - Superior polarized lenses with exceptional color enhancement",
      es: "Maui Jim - Lentes polarizadas superiores con mejora excepcional del color",
      ca: "Maui Jim - Lents polaritzades superiors amb millora excepcional del color",
      de: "Maui Jim - Überlegene polarisierte Gläser mit außergewöhnlicher Farbverbesserung",
    },
    tomford: {
      en: "Tom Ford - Luxury sunglasses with sophisticated design and premium materials",
      es: "Tom Ford - Gafas de sol de lujo con diseño sofisticado y materiales premium",
      ca: "Tom Ford - Ulleres de sol de luxe amb disseny sofisticat i materials premium",
      de: "Tom Ford - Luxus-Sonnenbrillen mit raffiniertem Design und Premium-Materialien",
    },
    persol: {
      en: "Persol - Italian craftsmanship with classic styling and patented technologies",
      es: "Persol - Artesanía italiana con estilo clásico y tecnologías patentadas",
      ca: "Persol - Artesania italiana amb estil clàssic i tecnologies patentades",
      de: "Persol - Italienische Handwerkskunst mit klassischem Stil und patentierten Technologien",
    },
    woodys: {
      en: "Woodys Barcelona - Eco-conscious designs with unique wooden elements",
      es: "Woodys Barcelona - Diseños eco-conscientes con elementos únicos de madera",
      ca: "Woodys Barcelona - Dissenys eco-conscients amb elements únics de fusta",
      de: "Woodys Barcelona - Umweltbewusste Designs mit einzigartigen Holzelementen",
    },
    fittingProcessTitle: {
      en: "Our Sunglasses Fitting Process",
      es: "Nuestro Proceso de Adaptación de Gafas de Sol",
      ca: "El Nostre Procés d'Adaptació d'Ulleres de Sol",
      de: "Unser Sonnenbrillen-Anpassungsprozess",
    },
    fittingIntro: {
      en: "Finding the perfect pair of sunglasses involves more than just selecting a style you like. Our expert consultants will help you consider:",
      es: "Encontrar el par perfecto de gafas de sol implica más que simplemente seleccionar un estilo que te guste. Nuestros consultores expertos te ayudarán a considerar:",
      ca: "Trobar el parell perfecte d'ulleres de sol implica més que simplement seleccionar un estil que t'agradi. Els nostres consultors experts t'ajudaran a considerar:",
      de: "Die perfekte Sonnenbrille zu finden, bedeutet mehr als nur einen Stil auszuwählen, der Ihnen gefällt. Unsere Expertenberater helfen Ihnen dabei, Folgendes zu berücksichtigen:",
    },
    faceShape: {
      en: "Face Shape Compatibility - We'll recommend styles that complement your unique facial features",
      es: "Compatibilidad con la Forma de la Cara - Recomendaremos estilos que complementen tus características faciales únicas",
      ca: "Compatibilitat amb la Forma de la Cara - Recomanarem estils que complementin les teves característiques facials úniques",
      de: "Gesichtsform-Kompatibilität - Wir empfehlen Stile, die Ihre einzigartigen Gesichtszüge ergänzen",
    },
    lifestyle: {
      en: "Lifestyle Requirements - Different activities call for different lens types and frame constructions",
      es: "Requisitos de Estilo de Vida - Diferentes actividades requieren diferentes tipos de lentes y construcciones de monturas",
      ca: "Requisits d'Estil de Vida - Diferents activitats requereixen diferents tipus de lents i construccions de muntures",
      de: "Lebensstil-Anforderungen - Verschiedene Aktivitäten erfordern verschiedene Glastypen und Fassungskonstruktionen",
    },
    fit: {
      en: "Proper Fit and Coverage - We ensure your sunglasses provide adequate coverage for optimal protection",
      es: "Ajuste y Cobertura Adecuados - Nos aseguramos de que tus gafas de sol proporcionen una cobertura adecuada para una protección óptima",
      ca: "Ajust i Cobertura Adequats - Ens assegurem que les teves ulleres de sol proporcionin una cobertura adequada per a una protecció òptima",
      de: "Richtige Passform und Abdeckung - Wir stellen sicher, dass Ihre Sonnenbrille ausreichende Abdeckung für optimalen Schutz bietet",
    },
    style: {
      en: "Personal Style Preferences - Your sunglasses should reflect your personal aesthetic and make you feel confident",
      es: "Preferencias de Estilo Personal - Tus gafas de sol deben reflejar tu estética personal y hacerte sentir seguro",
      ca: "Preferències d'Estil Personal - Les teves ulleres de sol han de reflectir la teva estètica personal i fer-te sentir segur",
      de: "Persönliche Stilvorlieben - Ihre Sonnenbrille sollte Ihre persönliche Ästhetik widerspiegeln und Ihnen Selbstvertrauen geben",
    },
    warranty: {
      en: "All our sunglasses come with a protective case, cleaning cloth, and our quality guarantee. We also offer adjustments to ensure your sunglasses fit perfectly and stay comfortable throughout their lifetime.",
      es: "Todas nuestras gafas de sol vienen con un estuche protector, paño de limpieza y nuestra garantía de calidad. También ofrecemos ajustes para asegurar que tus gafas de sol se ajusten perfectamente y se mantengan cómodas durante toda su vida útil.",
      ca: "Totes les nostres ulleres de sol venen amb un estoig protector, drap de neteja i la nostra garantia de qualitat. També oferim ajustos per assegurar que les teves ulleres de sol s'ajustin perfectament i es mantinguin còmodes durant tota la seva vida útil.",
      de: "Alle unsere Sonnenbrillen werden mit einem Schutzetui, Reinigungstuch und unserer Qualitätsgarantie geliefert. Wir bieten auch Anpassungen an, um sicherzustellen, dass Ihre Sonnenbrille perfekt passt und während ihrer gesamten Lebensdauer bequem bleibt.",
    },
    appointmentSubject: {
      en: "Sunglasses Consultation at Looptica",
      es: "Consulta de Gafas de Sol en Looptica",
      ca: "Consulta d'Ulleres de Sol a Looptica",
      de: "Sonnenbrillen-Beratung bei Looptica",
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
      title={t('sunglasses')}
      subtitle={content.subtitle[language]}
      image="/lovable-uploads/e288806f-89cb-4ae0-9a88-6b52ee0ccc4b.png"
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
          <h3 className="text-2xl font-semibold mb-6">{content.protectionTitle[language]}</h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-[#55afa9] rounded-full p-3 h-fit">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.uvProtection[language]}</h4>
                <p>{content.uvProtectionDesc[language]}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#55afa9] rounded-full p-3 h-fit">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.glareReduction[language]}</h4>
                <p>{content.glareReductionDesc[language]}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#55afa9] rounded-full p-3 h-fit">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.impactResistance[language]}</h4>
                <p>{content.impactResistanceDesc[language]}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#55afa9] rounded-full p-3 h-fit">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.eyeComfort[language]}</h4>
                <p>{content.eyeComfortDesc[language]}</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">{content.lensOptionsTitle[language]}</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.polarizedLenses[language]}</h4>
              <p>{content.polarizedLensesDesc[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.gradientTint[language]}</h4>
              <p>{content.gradientTintDesc[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.mirroredLenses[language]}</h4>
              <p>{content.mirroredLensesDesc[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.photochromic[language]}</h4>
              <p>{content.photochromicDesc[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.sportLenses[language]}</h4>
              <p>{content.sportLensesDesc[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.prescriptionSunglasses[language]}</h4>
              <p>{content.prescriptionSunglassesDesc[language]}</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>{content.brandsTitle[language]}</h2>
          <p>
            {content.brandsIntro[language]}
          </p>
          <ul>
            <li>{content.rayban[language]}</li>
            <li>{content.etnia[language]}</li>
            <li>{content.oakley[language]}</li>
            <li>{content.maui[language]}</li>
            <li>{content.tomford[language]}</li>
            <li>{content.persol[language]}</li>
            <li>{content.woodys[language]}</li>
          </ul>
          <h3>{content.fittingProcessTitle[language]}</h3>
          <p>
            {content.fittingIntro[language]}
          </p>
          <ul>
            <li><strong>{content.faceShape[language]}</strong></li>
            <li><strong>{content.lifestyle[language]}</strong></li>
            <li><strong>{content.fit[language]}</strong></li>
            <li><strong>{content.style[language]}</strong></li>
          </ul>
          <p>
            {content.warranty[language]}
          </p>
        </div>
      </ScrollReveal>
    </ServiceLayout>
  );
};

export default Sunglasses;
