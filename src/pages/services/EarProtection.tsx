import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Shield, Music, Droplet, Headphones } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const EarProtection = () => {
  const { t, language } = useLanguage();
  
  const content = {
    title: {
      en: "Custom Ear Protection",
      es: "Protección Auditiva Personalizada",
      ca: "Protecció Auditiva Personalitzada",
      de: "Individueller Gehörschutz",
      it: "Protezione Uditiva Personalizzata",
    },
    subtitle: {
      en: "Custom-made ear plugs designed for comfort and optimal noise protection",
      es: "Tapones para los oídos hechos a medida diseñados para comodidad y protección óptima contra el ruido",
      ca: "Taps per a les orelles fets a mida dissenyats per a comoditat i protecció òptima contra el soroll",
      de: "Maßgefertigte Ohrstöpsel für Komfort und optimalen Lärmschutz",
      it: "Tappi per le orecchie su misura progettati per il massimo comfort e una protezione ottimale dal rumore",
    },
    introTitle: {
      en: "Protecting Your Most Valuable Sense",
      es: "Protegiendo Tu Sentido Más Valioso",
      ca: "Protegint El Teu Sentit Més Valuós",
      de: "Schutz Ihres Wertvollsten Sinns",
      it: "Proteggere il Tuo Senso Più Prezioso",
    },
    intro1: {
      en: "Hearing loss from noise exposure is permanent but entirely preventable. At looptica, we specialize in custom-fitted ear protection solutions that effectively shield your ears from harmful noise levels while maintaining sound clarity and comfort.",
      es: "La pérdida auditiva por exposición al ruido es permanente pero totalmente prevenible. En looptica, nos especializamos en soluciones de protección auditiva personalizadas que protegen eficazmente sus oídos de niveles de ruido dañinos, manteniendo la claridad del sonido y la comodidad.",
      ca: "La pèrdua auditiva per exposició al soroll és permanent però totalment prevenible. A looptica, ens especialitzem en solucions de protecció auditiva personalitzades que protegeixen eficaçment les seves orelles de nivells de soroll nocius, mantenint la claredat del so i la comoditat.",
      de: "Hörverlust durch Lärmbelastung ist dauerhaft, aber vollständig vermeidbar. Bei looptica sind wir auf maßgefertigte Gehörschutzlösungen spezialisiert, die Ihre Ohren wirksam vor schädlichen Lärmpegeln schützen und gleichzeitig Klangklarheit und Komfort bewahren.",
      it: "La perdita uditiva dovuta all'esposizione al rumore è permanente ma del tutto prevenibile. Da looptica siamo specializzati in soluzioni di protezione uditiva su misura che proteggono efficacemente le tue orecchie da livelli di rumore dannosi, preservando al contempo la chiarezza del suono e il comfort.",
    },
    intro2: {
      en: "Unlike one-size-fits-all ear protection options, our custom solutions are precisely molded to the unique contours of your ears, providing a perfect seal, superior comfort for extended wear, and targeted protection tailored to your specific activities and environments.",
      es: "A diferencia de las opciones de protección auditiva de talla única, nuestras soluciones personalizadas se moldean con precisión a los contornos únicos de sus oídos, proporcionando un sellado perfecto, mayor comodidad para uso prolongado y protección específica adaptada a sus actividades y entornos específicos.",
      ca: "A diferència de les opcions de protecció auditiva de talla única, les nostres solucions personalitzades es modelen amb precisió als contorns únics de les seves orelles, proporcionant un segellat perfecte, major comoditat per a ús prolongat i protecció específica adaptada a les seves activitats i entorns específics.",
      de: "Im Gegensatz zu Einheitslösungen werden unsere maßgefertigten Lösungen präzise an die einzigartigen Konturen Ihrer Ohren angepasst und bieten eine perfekte Abdichtung, überlegenen Komfort für längeres Tragen und gezielten Schutz, der auf Ihre spezifischen Aktivitäten und Umgebungen zugeschnitten ist.",
      it: "A differenza delle soluzioni a taglia unica, le nostre protezioni su misura vengono modellate con precisione sui contorni unici delle tue orecchie, garantendo una sigillatura perfetta, un comfort superiore per un uso prolungato e una protezione mirata per le tue attività e i tuoi ambienti specifici.",
    },
    importanceTitle: {
      en: "The Importance of Custom Ear Protection",
      es: "La Importancia de la Protección Auditiva Personalizada",
      ca: "La Importància de la Protecció Auditiva Personalitzada",
      de: "Die Bedeutung von Individuellem Gehörschutz",
      it: "L'Importanza della Protezione Uditiva Su Misura",
    },
    precisionTitle: {
      en: "Precision Protection",
      es: "Protección de Precisión",
      ca: "Protecció de Precisió",
      de: "Präziser Schutz",
      it: "Protezione di Precisione",
    },
    precisionDesc: {
      en: "Custom-fit earplugs provide a perfect acoustic seal, ensuring consistent noise reduction and eliminating the gaps that allow harmful sounds to reach your inner ear.",
      es: "Los tapones auditivos personalizados proporcionan un sellado acústico perfecto, asegurando una reducción constante del ruido y eliminando los espacios que permiten que los sonidos dañinos lleguen al oído interno.",
      ca: "Els taps auditius personalitzats proporcionen un segellat acústic perfecte, assegurant una reducció constant del soroll i eliminant els espais que permeten que els sons nocius arribin a l'oïda interna.",
      de: "Maßgefertigte Ohrstöpsel bieten eine perfekte akustische Abdichtung, gewährleisten eine konsistente Geräuschreduzierung und eliminieren Lücken, durch die schädliche Geräusche zu Ihrem Innenohr gelangen können.",
      it: "I tappi per le orecchie su misura offrono una sigillatura acustica perfetta, garantendo una riduzione costante del rumore ed eliminando gli spazi che consentono ai suoni dannosi di raggiungere l'orecchio interno.",
    },
    soundTitle: {
      en: "Sound Quality",
      es: "Calidad de Sonido",
      ca: "Qualitat de So",
      de: "Klangqualität",
      it: "Qualità del Suono",
    },
    soundDesc: {
      en: "Specialized filters can reduce volume while preserving sound clarity and speech intelligibility, unlike foam earplugs that muffle sound indiscriminately.",
      es: "Los filtros especializados pueden reducir el volumen mientras preservan la claridad del sonido y la inteligibilidad del habla, a diferencia de los tapones de espuma que amortiguan el sonido indiscriminadamente.",
      ca: "Els filtres especialitzats poden reduir el volum mentre preserven la claredat del so i la intel·ligibilitat de la parla, a diferència dels taps d'escuma que esmorteeixen el so indiscriminadament.",
      de: "Spezialisierte Filter können die Lautstärke reduzieren, während sie Klangklarheit und Sprachverständlichkeit bewahren, im Gegensatz zu Schaumstoff-Ohrstöpseln, die den Klang wahllos dämpfen.",
      it: "I filtri specializzati possono ridurre il volume preservando la chiarezza del suono e l'intelligibilità della voce, a differenza dei tappi in schiuma che attenuano il suono indistintamente.",
    },
    comfortTitle: {
      en: "All-Day Comfort",
      es: "Comodidad Durante Todo el Día",
      ca: "Comoditat Durant Tot el Dia",
      de: "Ganztägiger Komfort",
      it: "Comfort per Tutto il Giorno",
    },
    comfortDesc: {
      en: "Precisely molded to your ear's unique shape, custom ear protection eliminates pressure points and irritation, allowing for comfortable extended wear.",
      es: "Moldeados con precisión a la forma única de su oído, la protección auditiva personalizada elimina los puntos de presión y la irritación, permitiendo un uso prolongado y cómodo.",
      ca: "Modelats amb precisió a la forma única de la seva orella, la protecció auditiva personalitzada elimina els punts de pressió i la irritació, permetent un ús prolongat i còmode.",
      de: "Präzise an die einzigartige Form Ihres Ohrs angepasst, eliminiert individueller Gehörschutz Druckstellen und Irritationen und ermöglicht komfortables längeres Tragen.",
      it: "Modellata con precisione sulla forma unica del tuo orecchio, la protezione uditiva su misura elimina i punti di pressione e le irritazioni, consentendo un uso prolungato e confortevole.",
    },
    durabilityTitle: {
      en: "Longevity",
      es: "Longevidad",
      ca: "Longevitat",
      de: "Langlebigkeit",
      it: "Longevità e Durata",
    },
    durabilityDesc: {
      en: "Made from durable, medical-grade materials, custom ear protection provides years of reliable use with proper care, making them a sound investment in your hearing health.",
      es: "Fabricados con materiales duraderos de grado médico, la protección auditiva personalizada proporciona años de uso confiable con el cuidado adecuado, convirtiéndolos en una inversión sólida para su salud auditiva.",
      ca: "Fabricats amb materials duradors de grau mèdic, la protecció auditiva personalitzada proporciona anys d'ús confiable amb la cura adequada, convertint-los en una inversió sòlida per a la seva salut auditiva.",
      de: "Aus langlebigen medizinischen Materialien hergestellt, bietet individueller Gehörschutz bei richtiger Pflege jahrelange zuverlässige Nutzung und ist damit eine solide Investition in Ihre Hörgesundheit.",
      it: "Realizzati con materiali resistenti di grado medicale, i dispositivi di protezione su misura offrono anni di utilizzo affidabile con la corretta cura, costituendo un solido investimento per la salute dell'udito.",
    },
    solutionsTitle: {
      en: "Specialized Custom Ear Protection Solutions",
      es: "Soluciones Especializadas de Protección Auditiva Personalizada",
      ca: "Solucions Especialitzades de Protecció Auditiva Personalitzada",
      de: "Spezialisierte Maßgefertigte Gehörschutzlösungen",
      it: "Soluzioni Specializzate di Protezione Uditiva Su Misura",
    },
    musiciansTitle: {
      en: "Musician's Earplugs",
      es: "Tapones para Músicos",
      ca: "Taps per a Músics",
      de: "Musiker-Ohrstöpsel",
      it: "Tappi per Musicisti",
    },
    musiciansDesc: {
      en: "Designed for musicians, concert-goers, and music enthusiasts, these earplugs reduce volume while maintaining sound quality across all frequencies, preserving musical clarity and detail.",
      es: "Diseñados para músicos, asistentes a conciertos y entusiastas de la música, estos tapones reducen el volumen mientras mantienen la calidad del sonido en todas las frecuencias, preservando la claridad y el detalle musical.",
      ca: "Dissenyats per a músics, assistents a concerts i entusiastes de la música, aquests taps redueixen el volum mentre mantenen la qualitat del so en totes les freqüències, preservant la claredat i el detall musical.",
      de: "Entwickelt für Musiker, Konzertbesucher und Musikliebhaber, reduzieren diese Ohrstöpsel die Lautstärke, während sie die Klangqualität über alle Frequenzen hinweg beibehalten und musikalische Klarheit und Details bewahren.",
      it: "Progettati per musicisti, appassionati di concerti e amanti della musica, questi tappi riducono il volume mantenendo inalterata la qualità del suono su tutte le frequenze, preservando chiarezza e dettagli musicali.",
    },
    industrialTitle: {
      en: "Industrial Hearing Protection",
      es: "Protección Auditiva Industrial",
      ca: "Protecció Auditiva Industrial",
      de: "Industrieller Gehörschutz",
      it: "Protezione Uditiva per l'Industria",
    },
    industrialDesc: {
      en: "Robust protection for construction, manufacturing, and other high-noise workplaces, offering high noise reduction ratings while maintaining communication ability when needed.",
      es: "Protección robusta para construcción, fabricación y otros lugares de trabajo con alto ruido, ofreciendo altas calificaciones de reducción de ruido mientras mantiene la capacidad de comunicación cuando es necesario.",
      ca: "Protecció robusta per a construcció, fabricació i altres llocs de treball amb alt soroll, oferint altes qualificacions de reducció de soroll mentre manté la capacitat de comunicació quan és necessari.",
      de: "Robuster Schutz für Baustellen, Fertigung und andere lärmintensive Arbeitsplätze, der hohe Lärmreduzierungswerte bietet und gleichzeitig bei Bedarf die Kommunikationsfähigkeit aufrechterhält.",
      it: "Protezione robusta per edilizia, produzione e altri ambienti di lavoro ad alto rumore, con elevati livelli di attenuazione che consentono comunque la comunicazione quando necessario.",
    },
    shootingTitle: {
      en: "Shooting and Hunting Protection",
      es: "Protección para Tiro y Caza",
      ca: "Protecció per a Tir i Caça",
      de: "Schieß- und Jagdschutz",
      it: "Protezione per Tiro e Caccia",
    },
    shootingDesc: {
      en: "Specialized acoustic filters that instantly close upon detecting gunshot impulse noise while allowing normal conversation and environmental awareness during quieter periods.",
      es: "Filtros acústicos especializados que se cierran instantáneamente al detectar ruido de impulso de disparo mientras permiten la conversación normal y la conciencia ambiental durante períodos más silenciosos.",
      ca: "Filtres acústics especialitzats que es tanquen instantàniament en detectar soroll d'impuls de tret mentre permeten la conversa normal i la consciència ambiental durant períodes més silenciosos.",
      de: "Spezialisierte akustische Filter, die sich sofort schließen, wenn Schussimpulsgeräusche erkannt werden, während sie normale Gespräche und Umgebungsbewusstsein in ruhigeren Phasen ermöglichen.",
      it: "Filtri acustici specializzati che si chiudono istantaneamente al rilevamento del rumore impulsivo dello sparo, consentendo comunque la normale conversazione e la consapevolezza dell'ambiente nei momenti più silenziosi.",
    },
    motorTitle: {
      en: "Motorcycle and Motorsport Earplugs",
      es: "Tapones para Motocicletas y Deportes de Motor",
      ca: "Taps per a Motocicletes i Esports de Motor",
      de: "Motorrad- und Motorsport-Ohrstöpsel",
      it: "Tappi per Moto e Sport Motociclistici",
    },
    motorDesc: {
      en: "Reduce wind noise and engine roar while maintaining awareness of traffic and communication systems, preventing fatigue and protecting hearing during long rides.",
      es: "Reducen el ruido del viento y el rugido del motor mientras mantienen la conciencia del tráfico y los sistemas de comunicación, previniendo la fatiga y protegiendo la audición durante viajes largos.",
      ca: "Redueixen el soroll del vent i el rugit del motor mentre mantenen la consciència del trànsit i els sistemes de comunicació, prevenint la fatiga i protegint l'audició durant viatges llargs.",
      de: "Reduzieren Windgeräusche und Motorenlärm, während das Bewusstsein für Verkehr und Kommunikationssysteme erhalten bleibt, verhindern Ermüdung und schützen das Gehör bei langen Fahrten.",
      it: "Riducono il rumore del vento e del motore mantenendo la percezione del traffico e dei sistemi di comunicazione, prevenendo l'affaticamento e proteggendo l'udito durante i viaggi lunghi.",
    },
    swimTitle: {
      en: "Swimmer's Earplugs",
      es: "Tapones para Nadadores",
      ca: "Taps per a Nedadors",
      de: "Schwimmer-Ohrstöpsel",
      it: "Tappi per Nuotatori",
    },
    swimDesc: {
      en: "Waterproof protection that prevents water entry while swimming, showering, or participating in water sports, particularly beneficial for those prone to ear infections or who have ear tubes.",
      es: "Protección impermeable que evita la entrada de agua mientras nada, se ducha o participa en deportes acuáticos, particularmente beneficiosa para aquellos propensos a infecciones de oído o que tienen tubos de ventilación.",
      ca: "Protecció impermeable que evita l'entrada d'aigua mentre neda, es dutxa o participa en esports aquàtics, particularment beneficiosa per a aquells propensos a infeccions d'orella o que tenen tubs de ventilació.",
      de: "Wasserdichter Schutz, der das Eindringen von Wasser beim Schwimmen, Duschen oder bei Wassersportarten verhindert, besonders vorteilhaft für Personen, die zu Ohrinfektionen neigen oder Paukenröhrchen haben.",
      it: "Protezione impermeabile che impedisce l'ingresso dell'acqua durante il nuoto, la doccia o gli sport acquatici, particolarmente utile per chi è soggetto a infezioni dell'orecchio o porta tubicini di ventilazione.",
    },
    sleepTitle: {
      en: "Sleep and Concentration Earplugs",
      es: "Tapones para Dormir y Concentración",
      ca: "Taps per a Dormir i Concentració",
      de: "Schlaf- und Konzentrations-Ohrstöpsel",
      it: "Tappi per Dormire e Concentrarsi",
    },
    sleepDesc: {
      en: "Designed for comfortable overnight wear or extended use during study or work, these earplugs reduce ambient noise while allowing you to hear important sounds like alarm clocks or doorbells.",
      es: "Diseñados para uso cómodo durante la noche o uso prolongado durante el estudio o trabajo, estos tapones reducen el ruido ambiental mientras le permiten escuchar sonidos importantes como despertadores o timbres.",
      ca: "Dissenyats per a ús còmode durant la nit o ús prolongat durant l'estudi o treball, aquests taps redueixen el soroll ambiental mentre li permeten escoltar sons importants com a despertadors o timbres.",
      de: "Entwickelt für komfortables nächtliches Tragen oder längere Nutzung beim Lernen oder Arbeiten, reduzieren diese Ohrstöpsel Umgebungsgeräusche, während Sie wichtige Geräusche wie Wecker oder Türklingeln hören können.",
      it: "Progettati per un uso confortevole durante la notte o prolungato durante lo studio o il lavoro, questi tappi riducono il rumore ambientale consentendo comunque di sentire suoni importanti come sveglie o campanelli.",
    },
    processTitle: {
      en: "Our Custom Ear Protection Process",
      es: "Nuestro Proceso de Protección Auditiva Personalizada",
      ca: "El Nostre Procés de Protecció Auditiva Personalitzada",
      de: "Unser Individueller Gehörschutz-Prozess",
      it: "Il Nostro Processo per la Protezione Uditiva Su Misura",
    },
    processIntro: {
      en: "Creating your perfect custom ear protection involves a straightforward process:",
      es: "La creación de su protección auditiva personalizada perfecta implica un proceso sencillo:",
      ca: "La creació de la seva protecció auditiva personalitzada perfecta implica un procés senzill:",
      de: "Die Erstellung Ihres perfekten individuellen Gehörschutzes umfasst einen unkomplizierten Prozess:",
      it: "La realizzazione della tua protezione uditiva su misura prevede un processo semplice e lineare:",
    },
    consultation: {
      en: "Consultation: We discuss your specific protection needs, environments, and preferences to recommend the appropriate type of custom ear protection.",
      es: "Consulta: Discutimos sus necesidades específicas de protección, entornos y preferencias para recomendar el tipo apropiado de protección auditiva personalizada.",
      ca: "Consulta: Discutim les seves necessitats específiques de protecció, entorns i preferències per recomanar el tipus apropiat de protecció auditiva personalitzada.",
      de: "Beratung: Wir besprechen Ihre spezifischen Schutzbedürfnisse, Umgebungen und Vorlieben, um die geeignete Art des individuellen Gehörschutzes zu empfehlen.",
      it: "Consulenza: Valutiamo le tue esigenze specifiche di protezione, gli ambienti di utilizzo e le preferenze per consigliarti il tipo di protezione più adatto.",
    },
    impression: {
      en: "Ear Impression: Our audiologist takes precise silicone impressions of your ear canals and outer ears, a quick and comfortable process that captures every contour.",
      es: "Impresión del Oído: Nuestro audiólogo toma impresiones precisas de silicona de sus canales auditivos y orejas externas, un proceso rápido y cómodo que captura cada contorno.",
      ca: "Impressió de l'Orella: El nostre audiòleg pren impressions precises de silicona dels seus canals auditius i orelles externes, un procés ràpid i còmode que captura cada contorn.",
      de: "Ohrabdruck: Unser Audiologe nimmt präzise Silikonabdrücke Ihrer Gehörgänge und Außenohren, ein schneller und komfortabler Prozess, der jede Kontur erfasst.",
      it: "Rilevamento dell'impronta: Il nostro audioprotesista rileva un'impronta precisa in silicone del condotto uditivo e del padiglione, un processo rapido e confortevole che cattura ogni dettaglio anatomico.",
    },
    design: {
      en: "Design Selection: You choose the appropriate sound filter technology, color options, and any additional features for your custom earplugs.",
      es: "Selección de Diseño: Usted elige la tecnología de filtro de sonido adecuada, opciones de color y cualquier característica adicional para sus tapones personalizados.",
      ca: "Selecció de Disseny: Vostè tria la tecnologia de filtre de so adequada, opcions de color i qualsevol característica addicional per als seus taps personalitzats.",
      de: "Design-Auswahl: Sie wählen die geeignete Schallfiltertechnologie, Farboptionen und alle zusätzlichen Funktionen für Ihre maßgefertigten Ohrstöpsel.",
      it: "Scelta del modello: Scegli la tecnologia di filtro acustico più adeguata, i colori e le eventuali opzioni aggiuntive per i tuoi tappi su misura.",
    },
    manufacturing: {
      en: "Manufacturing: Your ear impressions are sent to a specialized laboratory where your custom ear protection is precision-crafted using medical-grade materials.",
      es: "Fabricación: Sus impresiones de oído se envían a un laboratorio especializado donde su protección auditiva personalizada se fabrica con precisión utilizando materiales de grado médico.",
      ca: "Fabricació: Les seves impressions d'orella s'envien a un laboratori especialitzat on la seva protecció auditiva personalitzada es fabrica amb precisió utilitzant materials de grau mèdic.",
      de: "Herstellung: Ihre Ohrabdrücke werden an ein spezialisiertes Labor geschickt, wo Ihr individueller Gehörschutz präzise aus medizinischen Materialien gefertigt wird.",
      it: "Fabbricazione: Le impronte vengono inviate a un laboratorio specializzato dove la protezione viene realizzata su misura con materiali di grado medicale ad alta precisione.",
    },
    fitting: {
      en: "Fitting and Instruction: When your custom ear protection is ready (typically within 2-3 weeks), we ensure a perfect fit and provide detailed care and usage instructions.",
      es: "Ajuste e Instrucción: Cuando su protección auditiva personalizada está lista (típicamente dentro de 2-3 semanas), nos aseguramos de un ajuste perfecto y proporcionamos instrucciones detalladas de cuidado y uso.",
      ca: "Ajust i Instrucció: Quan la seva protecció auditiva personalitzada està llesta (típicament dins de 2-3 setmanes), ens assegurem d'un ajust perfecte i proporcionem instruccions detallades de cura i ús.",
      de: "Anpassung und Anleitung: Wenn Ihr individueller Gehörschutz fertig ist (normalerweise innerhalb von 2-3 Wochen), stellen wir eine perfekte Passform sicher und geben detaillierte Pflege- und Nutzungsanweisungen.",
      it: "Adattamento e istruzioni: Quando i tuoi dispositivi sono pronti (generalmente in 2-3 settimane), ne verifichiamo la perfetta tenuta e forniamo istruzioni dettagliate sull'uso e la manutenzione.",
    },
    followup: {
      en: "Follow-up Support: We offer ongoing support, adjustments if needed, and regular check-ups to ensure your ear protection continues to provide optimal protection.",
      es: "Soporte de Seguimiento: Ofrecemos soporte continuo, ajustes si es necesario y chequeos regulares para asegurar que su protección auditiva continúe proporcionando una protección óptima.",
      ca: "Suport de Seguiment: Oferim suport continu, ajustos si és necessari i controls regulars per assegurar que la seva protecció auditiva continuï proporcionant una protecció òptima.",
      de: "Nachsorge: Wir bieten fortlaufende Unterstützung, Anpassungen bei Bedarf und regelmäßige Kontrollen, um sicherzustellen, dass Ihr Gehörschutz weiterhin optimalen Schutz bietet.",
      it: "Assistenza post-vendita: Offriamo supporto continuo, regolazioni in caso di necessità e controlli periodici per garantire sempre una protezione ottimale.",
    },
    whenTitle: {
      en: "When Hearing Protection Is Essential",
      es: "Cuándo la Protección Auditiva Es Esencial",
      ca: "Quan la Protecció Auditiva És Essencial",
      de: "Wann Gehörschutz Unerlässlich Ist",
      it: "Quando la Protezione Uditiva è Indispensabile",
    },
    whenIntro: {
      en: "Hearing protection should be used in any environment where noise levels exceed 85 decibels (dB) for extended periods. Common situations requiring hearing protection include:",
      es: "La protección auditiva debe usarse en cualquier entorno donde los niveles de ruido excedan los 85 decibelios (dB) durante períodos prolongados. Las situaciones comunes que requieren protección auditiva incluyen:",
      ca: "La protecció auditiva s'ha d'utilitzar en qualsevol entorn on els nivells de soroll excedeixin els 85 decibels (dB) durant períodes prolongats. Les situacions comunes que requereixen protecció auditiva inclouen:",
      de: "Gehörschutz sollte in jeder Umgebung verwendet werden, in der Lärmpegel über längere Zeiträume 85 Dezibel (dB) überschreiten. Häufige Situationen, die Gehörschutz erfordern, umfassen:",
      it: "La protezione uditiva deve essere utilizzata in qualsiasi ambiente in cui i livelli di rumore superino gli 85 decibel (dB) per periodi prolungati. Le situazioni più frequenti che richiedono protezione includono:",
    },
    situation1: {
      en: "Concert venues and music festivals (typically 100-120 dB)",
      es: "Lugares de conciertos y festivales de música (típicamente 100-120 dB)",
      ca: "Llocs de concerts i festivals de música (típicament 100-120 dB)",
      de: "Konzertorte und Musikfestivals (typischerweise 100-120 dB)",
      it: "Concerti e festival musicali (tipicamente 100-120 dB)",
    },
    situation2: {
      en: "Sporting events (90-110 dB)",
      es: "Eventos deportivos (90-110 dB)",
      ca: "Esdeveniments esportius (90-110 dB)",
      de: "Sportveranstaltungen (90-110 dB)",
      it: "Eventi sportivi (90-110 dB)",
    },
    situation3: {
      en: "Construction sites (90-110 dB)",
      es: "Sitios de construcción (90-110 dB)",
      ca: "Llocs de construcció (90-110 dB)",
      de: "Baustellen (90-110 dB)",
      it: "Cantieri edili (90-110 dB)",
    },
    situation4: {
      en: "Manufacturing facilities (90-115 dB)",
      es: "Instalaciones de fabricación (90-115 dB)",
      ca: "Instal·lacions de fabricació (90-115 dB)",
      de: "Fertigungsanlagen (90-115 dB)",
      it: "Impianti industriali e produttivi (90-115 dB)",
    },
    situation5: {
      en: "Shooting ranges (140-170 dB impulse noise)",
      es: "Campos de tiro (140-170 dB ruido de impulso)",
      ca: "Camps de tir (140-170 dB soroll d'impuls)",
      de: "Schießstände (140-170 dB Impulslärm)",
      it: "Poligoni di tiro (140-170 dB di rumore impulsivo)",
    },
    situation6: {
      en: "Motorcycling (80-105 dB from wind and engine noise)",
      es: "Motociclismo (80-105 dB de ruido de viento y motor)",
      ca: "Motociclisme (80-105 dB de soroll de vent i motor)",
      de: "Motorradfahren (80-105 dB durch Wind- und Motorenlärm)",
      it: "Guida della moto (80-105 dB di rumore da vento e motore)",
    },
    situation7: {
      en: "Power tools and lawn equipment (90-110 dB)",
      es: "Herramientas eléctricas y equipos de jardín (90-110 dB)",
      ca: "Eines elèctriques i equips de jardí (90-110 dB)",
      de: "Elektrowerkzeuge und Gartengeräte (90-110 dB)",
      it: "Utensili elettrici e attrezzature da giardinaggio (90-110 dB)",
    },
    situation8: {
      en: "Nightclubs and bars (95-115 dB)",
      es: "Discotecas y bares (95-115 dB)",
      ca: "Discoteques i bars (95-115 dB)",
      de: "Nachtclubs und Bars (95-115 dB)",
      it: "Discoteche e locali notturni (95-115 dB)",
    },
    outro: {
      en: "Remember that noise-induced hearing loss is cumulative and irreversible. Investing in quality custom ear protection now is an investment in your lifelong hearing health and quality of life.",
      es: "Recuerde que la pérdida auditiva inducida por ruido es acumulativa e irreversible. Invertir en protección auditiva personalizada de calidad ahora es una inversión en su salud auditiva y calidad de vida de por vida.",
      ca: "Recordi que la pèrdua auditiva induïda pel soroll és acumulativa i irreversible. Invertir en protecció auditiva personalitzada de qualitat ara és una inversió en la seva salut auditiva i qualitat de vida de per vida.",
      de: "Denken Sie daran, dass lärmbedingter Hörverlust kumulativ und irreversibel ist. Die Investition in hochwertigen individuellen Gehörschutz ist jetzt eine Investition in Ihre lebenslange Hörgesundheit und Lebensqualität.",
      it: "Ricorda che la perdita uditiva causata dal rumore è cumulativa e irreversibile. Investire oggi in una protezione uditiva su misura di qualità significa tutelare la salute dell'udito e la qualità della vita per il futuro.",
    },
    appointmentSubject: {
      en: "Custom Ear Protection Consultation at looptica",
      es: "Consulta de Protección Auditiva Personalizada en looptica",
      ca: "Consulta de Protecció Auditiva Personalitzada a looptica",
      de: "Individueller Gehörschutz-Beratung bei looptica",
      it: "Consulenza per Protezione Uditiva Su Misura presso looptica",
    },
  };
  
  return (
    <ServiceLayout
      title={content.title[language]}
      subtitle={content.subtitle[language]}
      image="/images/moldes-a-medida-1.jpg"
      appointmentSubject={content.appointmentSubject[language]}
    >
      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{content.introTitle[language]}</h2>
          <p>{content.intro1[language]}</p>
          <p>{content.intro2[language]}</p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">{content.importanceTitle[language]}</h3>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="bg-[#55afa9] rounded-full p-3 h-fit">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">{content.precisionTitle[language]}</h4>
                <p>{content.precisionDesc[language]}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#55afa9] rounded-full p-3 h-fit">
                <Music className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">{content.soundTitle[language]}</h4>
                <p>{content.soundDesc[language]}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#55afa9] rounded-full p-3 h-fit">
                <Headphones className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">{content.comfortTitle[language]}</h4>
                <p>{content.comfortDesc[language]}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#55afa9] rounded-full p-3 h-fit">
                <Droplet className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">{content.durabilityTitle[language]}</h4>
                <p>{content.durabilityDesc[language]}</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">{content.solutionsTitle[language]}</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold mb-3">{content.musiciansTitle[language]}</h4>
              <p>{content.musiciansDesc[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold mb-3">{content.industrialTitle[language]}</h4>
              <p>{content.industrialDesc[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold mb-3">{content.shootingTitle[language]}</h4>
              <p>{content.shootingDesc[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold mb-3">{content.motorTitle[language]}</h4>
              <p>{content.motorDesc[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold mb-3">{content.swimTitle[language]}</h4>
              <p>{content.swimDesc[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold mb-3">{content.sleepTitle[language]}</h4>
              <p>{content.sleepDesc[language]}</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{content.processTitle[language]}</h2>
          <p className="mb-6">
            {content.processIntro[language]}
          </p>
          <ol className="space-y-4 list-decimal pl-5">
            <li>
              <p className="m-0"><span className="font-bold">{content.consultation[language].split(':')[0]}:</span> {content.consultation[language].split(':')[1]}</p>
            </li>
            <li>
              <p className="m-0"><span className="font-bold">{content.impression[language].split(':')[0]}:</span> {content.impression[language].split(':')[1]}</p>
            </li>
            <li>
              <p className="m-0"><span className="font-bold">{content.design[language].split(':')[0]}:</span> {content.design[language].split(':')[1]}</p>
            </li>
            <li>
              <p className="m-0"><span className="font-bold">{content.manufacturing[language].split(':')[0]}:</span> {content.manufacturing[language].split(':')[1]}</p>
            </li>
            <li>
              <p className="m-0"><span className="font-bold">{content.fitting[language].split(':')[0]}:</span> {content.fitting[language].split(':')[1]}</p>
            </li>
            <li>
              <p className="m-0"><span className="font-bold">{content.followup[language].split(':')[0]}:</span> {content.followup[language].split(':')[1]}</p>
            </li>
          </ol>
          
          <h3 className="text-xl font-bold text-gray-800 mt-10 mb-4">{content.whenTitle[language]}</h3>
          <p className="mb-6">
            {content.whenIntro[language]}
          </p>
          <ul className="space-y-2 list-disc pl-5">
            <li>{content.situation1[language]}</li>
            <li>{content.situation2[language]}</li>
            <li>{content.situation3[language]}</li>
            <li>{content.situation4[language]}</li>
            <li>{content.situation5[language]}</li>
            <li>{content.situation6[language]}</li>
            <li>{content.situation7[language]}</li>
            <li>{content.situation8[language]}</li>
          </ul>
          <p className="mt-6">
            <strong>{content.outro[language]}</strong>
          </p>
        </div>
      </ScrollReveal>
    </ServiceLayout>
  );
};

export default EarProtection;
