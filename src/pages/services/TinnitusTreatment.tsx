import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Volume2, Music, Zap, Brain } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';

const TinnitusTreatment = () => {
  const { language } = useLanguage();
  
  const content = {
    meta: {
      en: {
        title: 'Tinnitus treatment in Poblenou, Barcelona | looptica',
        description: 'Tinnitus treatment in Poblenou, Barcelona: audiological assessment, sound therapy and hearing aids with tinnitus relief. Personalized care at looptica.',
      },
      es: {
        title: 'Tratamiento de tinnitus en Poblenou, Barcelona | looptica',
        description: 'Tratamiento del tinnitus en Poblenou, Barcelona: evaluación audiológica, terapia sonora y audífonos con generador. Alivio personalizado en looptica.',
      },
      ca: {
        title: 'Tractament de tinnitus a Poblenou, Barcelona | looptica',
        description: 'Tractament del tinnitus a Poblenou, Barcelona: avaluació audiològica, teràpia sonora i audiòfons amb generador. Alleujament personalitzat a looptica.',
      },
      de: {
        title: 'Tinnitus-Behandlung in Poblenou, Barcelona | looptica',
        description: 'Tinnitus-Behandlung in Poblenou, Barcelona: audiologische Untersuchung, Klangtherapie und Hörgeräte mit Tinnitus-Noiser. Persönliche Betreuung bei looptica.',
      },
      it: {
        title: 'Trattamento dell\'acufene a Poblenou, Barcellona | looptica',
        description: 'Trattamento dell\'acufene a Poblenou, Barcellona: valutazione audiologica, terapia sonora e apparecchi acustici con mascheratore. Cura su misura da looptica.',
      },
    },
    title: {
      en: 'Tinnitus Treatment',
      es: 'Tratamiento del Tinnitus',
      ca: 'Tractament del Tinnitus',
      de: 'Tinnitus-Behandlung',
      it: 'Trattamento dell\'Acufene',
    },
    subtitle: {
      en: 'Effective solutions for ringing in the ears',
      es: 'Soluciones efectivas para el zumbido en los oídos',
      ca: 'Solucions efectives per al brunzit a les orelles',
      de: 'Wirksame Lösungen für Ohrensausen',
      it: 'Soluzioni efficaci per i fischi e i ronzii alle orecchie',
    },
    appointmentSubject: {
      en: 'Tinnitus Consultation at looptica',
      es: 'Consulta de Tinnitus en looptica',
      ca: 'Consulta de Tinnitus a looptica',
      de: 'Tinnitus-Beratung bei looptica',
      it: 'Consulenza per Acufene da looptica',
    },
    understanding: {
      en: 'Understanding Tinnitus',
      es: 'Entendiendo el Tinnitus',
      ca: 'Entenent el Tinnitus',
      de: 'Tinnitus verstehen',
      it: 'Comprendere l\'Acufene',
    },
    understandingP1: {
      en: 'Tinnitus is the perception of sound in the ears or head when no external sound is present. Often described as ringing, buzzing, hissing, or clicking, tinnitus can range from occasionally bothersome to severely disruptive of daily life. While tinnitus is common—affecting approximately 15-20% of people—its impact varies greatly from person to person.',
      es: 'El tinnitus es la percepción de sonido en los oídos o la cabeza cuando no hay sonido externo presente. A menudo descrito como un zumbido, pitido, silbido o chasquido, el tinnitus puede variar desde ocasionalmente molesto hasta severamente disruptivo de la vida diaria. Aunque el tinnitus es común —afectando aproximadamente al 15-20% de las personas— su impacto varía enormemente de persona a persona.',
      ca: 'El tinnitus és la percepció de so a les orelles o al cap quan no hi ha cap so extern present. Sovint descrit com un brunzit, xiulet, sibilància o clic, el tinnitus pot variar des d\'ocasionalment molest fins a severament disruptiu de la vida diària. Tot i que el tinnitus és comú —afectant aproximadament al 15-20% de les persones— el seu impacte varia enormement de persona a persona.',
      de: 'Tinnitus ist die Wahrnehmung von Geräuschen in den Ohren oder im Kopf, wenn kein externes Geräusch vorhanden ist. Oft als Klingeln, Summen, Zischen oder Klicken beschrieben, kann Tinnitus von gelegentlich störend bis stark beeinträchtigend für den Alltag reichen. Obwohl Tinnitus häufig ist – etwa 15-20% der Menschen betroffen sind – variiert seine Auswirkung stark von Person zu Person.',
      it: 'L\'acufene è la percezione di un suono nelle orecchie o nella testa in assenza di una sorgente sonora esterna. Spesso descritto come un fischio, ronzio, sibilo o scatto, l\'acufene può variare da occasionalmente fastidioso a gravemente invalidante nella vita quotidiana. Sebbene l\'acufene sia comune — colpisce circa il 15-20% delle persone — il suo impatto varia notevolmente da persona a persona.',
    },
    understandingP2: {
      en: 'At looptica, we understand that living with tinnitus can be challenging and frustrating. Our specialized tinnitus management program offers evidence-based approaches to help you find relief and regain control over your auditory experience. We focus not just on addressing the sound itself, but also on minimizing its impact on your quality of life.',
      es: 'En looptica, entendemos que vivir con tinnitus puede ser desafiante y frustrante. Nuestro programa especializado de manejo del tinnitus ofrece enfoques basados en evidencia para ayudarle a encontrar alivio y recuperar el control sobre su experiencia auditiva. Nos enfocamos no solo en abordar el sonido mismo, sino también en minimizar su impacto en su calidad de vida.',
      ca: 'A looptica, entenem que viure amb tinnitus pot ser desafiant i frustrant. El nostre programa especialitzat de gestió del tinnitus ofereix enfocaments basats en evidència per ajudar-li a trobar alleujament i recuperar el control sobre la seva experiència auditiva. Ens enfoquem no només en abordar el so mateix, sinó també en minimitzar el seu impacte en la seva qualitat de vida.',
      de: 'Bei looptica verstehen wir, dass das Leben mit Tinnitus herausfordernd und frustrierend sein kann. Unser spezialisiertes Tinnitus-Management-Programm bietet evidenzbasierte Ansätze, um Ihnen Erleichterung zu verschaffen und die Kontrolle über Ihr Hörerlebnis zurückzugewinnen. Wir konzentrieren uns nicht nur darauf, das Geräusch selbst anzugehen, sondern auch darauf, seine Auswirkungen auf Ihre Lebensqualität zu minimieren.',
      it: 'Da looptica, comprendiamo che convivere con l\'acufene possa essere impegnativo e frustrante. Il nostro programma specializzato di gestione dell\'acufene offre approcci basati sull\'evidenza per aiutarti a trovare sollievo e riprendere il controllo della tua esperienza uditiva. Ci concentriamo non solo sull\'affrontare il suono in sé, ma anche sul ridurre al minimo il suo impatto sulla qualità della tua vita.',
    },
    assessmentTitle: {
      en: 'Our Comprehensive Tinnitus Assessment',
      es: 'Nuestra Evaluación Integral del Tinnitus',
      ca: 'La Nostra Avaluació Integral del Tinnitus',
      de: 'Unsere umfassende Tinnitus-Bewertung',
      it: 'La Nostra Valutazione Approfondita dell\'Acufene',
    },
    tinnitusEvaluation: {
      en: 'Tinnitus Evaluation',
      es: 'Evaluación del Tinnitus',
      ca: 'Avaluació del Tinnitus',
      de: 'Tinnitus-Bewertung',
      it: 'Valutazione dell\'Acufene',
    },
    tinnitusEvaluationDesc: {
      en: 'We conduct specialized tests to measure and characterize your tinnitus, including its pitch, volume, and pattern, helping us develop a targeted management approach.',
      es: 'Realizamos pruebas especializadas para medir y caracterizar su tinnitus, incluyendo su tono, volumen y patrón, ayudándonos a desarrollar un enfoque de manejo dirigido.',
      ca: 'Realitzem proves especialitzades per mesurar i caracteritzar el seu tinnitus, incloent el seu to, volum i patró, ajudant-nos a desenvolupar un enfocament de gestió dirigit.',
      de: 'Wir führen spezialisierte Tests durch, um Ihren Tinnitus zu messen und zu charakterisieren, einschließlich seiner Tonhöhe, Lautstärke und seines Musters, um einen gezielten Management-Ansatz zu entwickeln.',
      it: 'Eseguiamo test specialistici per misurare e caratterizzare il tuo acufene, inclusi tonalità, volume e schema temporale, per sviluppare un approccio gestionale mirato.',
    },
    hearingAssessment: {
      en: 'Hearing Assessment',
      es: 'Evaluación Auditiva',
      ca: 'Avaluació Auditiva',
      de: 'Hörbewertung',
      it: 'Valutazione Uditiva',
    },
    hearingAssessmentDesc: {
      en: 'A comprehensive hearing evaluation helps identify any hearing loss that may be contributing to your tinnitus, as the two conditions often occur together.',
      es: 'Una evaluación auditiva completa ayuda a identificar cualquier pérdida auditiva que pueda estar contribuyendo a su tinnitus, ya que las dos condiciones a menudo ocurren juntas.',
      ca: 'Una avaluació auditiva completa ajuda a identificar qualsevol pèrdua auditiva que pugui estar contribuint al seu tinnitus, ja que les dues condicions sovint ocorren juntes.',
      de: 'Eine umfassende Hörbewertung hilft, jeden Hörverlust zu identifizieren, der zu Ihrem Tinnitus beitragen könnte, da beide Zustände häufig zusammen auftreten.',
      it: 'Una valutazione uditiva completa aiuta a identificare qualsiasi calo uditivo che possa contribuire all\'acufene, poiché le due condizioni spesso si presentano insieme.',
    },
    impactAssessment: {
      en: 'Impact Assessment',
      es: 'Evaluación del Impacto',
      ca: 'Avaluació de l\'Impacte',
      de: 'Auswirkungsbewertung',
      it: 'Valutazione dell\'Impatto',
    },
    impactAssessmentDesc: {
      en: 'Using validated questionnaires, we evaluate how tinnitus affects your sleep, concentration, emotional well-being, and daily activities to guide our treatment recommendations.',
      es: 'Usando cuestionarios validados, evaluamos cómo el tinnitus afecta su sueño, concentración, bienestar emocional y actividades diarias para guiar nuestras recomendaciones de tratamiento.',
      ca: 'Utilitzant qüestionaris validats, avaluem com el tinnitus afecta el seu son, concentració, benestar emocional i activitats diàries per guiar les nostres recomanacions de tractament.',
      de: 'Mit validierten Fragebögen bewerten wir, wie Tinnitus Ihren Schlaf, Ihre Konzentration, Ihr emotionales Wohlbefinden und Ihre täglichen Aktivitäten beeinflusst, um unsere Behandlungsempfehlungen zu leiten.',
      it: 'Attraverso questionari validati, valutiamo come l\'acufene influisce sul sonno, sulla concentrazione, sul benessere emotivo e sulle attività quotidiane per orientare le raccomandazioni di trattamento.',
    },
    triggerIdentification: {
      en: 'Trigger Identification',
      es: 'Identificación de Desencadenantes',
      ca: 'Identificació de Desencadenants',
      de: 'Trigger-Identifizierung',
      it: 'Identificazione dei Fattori Scatenanti',
    },
    triggerIdentificationDesc: {
      en: 'We help you identify factors that may worsen your tinnitus, such as certain foods, stress, or environmental sounds, so you can better manage these triggers.',
      es: 'Le ayudamos a identificar factores que pueden empeorar su tinnitus, como ciertos alimentos, estrés o sonidos ambientales, para que pueda manejar mejor estos desencadenantes.',
      ca: 'L\'ajudem a identificar factors que poden empitjorar el seu tinnitus, com certs aliments, estrès o sons ambientals, perquè pugui gestionar millor aquests desencadenants.',
      de: 'Wir helfen Ihnen, Faktoren zu identifizieren, die Ihren Tinnitus verschlimmern können, wie bestimmte Lebensmittel, Stress oder Umgebungsgeräusche, damit Sie diese Auslöser besser bewältigen können.',
      it: 'Ti aiutiamo a identificare i fattori che possono peggiorare l\'acufene, come determinati alimenti, stress o rumori ambientali, per gestire al meglio questi stimoli.',
    },
    solutionsTitle: {
      en: 'Tinnitus Management Solutions',
      es: 'Soluciones de Manejo del Tinnitus',
      ca: 'Solucions de Gestió del Tinnitus',
      de: 'Tinnitus-Management-Lösungen',
      it: 'Soluzioni per la Gestione dell\'Acufene',
    },
    soundTherapy: {
      en: 'Sound Therapy',
      es: 'Terapia de Sonido',
      ca: 'Teràpia de So',
      de: 'Klangtherapie',
      it: 'Terapia Sonora',
    },
    soundTherapyDesc: {
      en: 'Utilizing specialized sound generators or hearing aids with tinnitus masking features to introduce pleasant or neutral sounds that reduce the perceived loudness and distress of tinnitus.',
      es: 'Utilizando generadores de sonido especializados o audífonos con características de enmascaramiento de tinnitus para introducir sonidos agradables o neutrales que reducen la intensidad percibida y la angustia del tinnitus.',
      ca: 'Utilitzant generadors de so especialitzats o audiòfons amb característiques d\'emmascarament de tinnitus per introduir sons agradables o neutrals que redueixen la intensitat percebuda i l\'angoixa del tinnitus.',
      de: 'Verwendung von spezialisierten Klanggeneratoren oder Hörgeräten mit Tinnitus-Maskierungsfunktionen, um angenehme oder neutrale Geräusche einzuführen, die die wahrgenommene Lautstärke und den Stress durch Tinnitus reduzieren.',
      it: 'Utilizzo di generatori di suono dedicati o apparecchi acustici con funzioni di mascheramento dell\'acufene per introdurre suoni piacevoli o neutri che riducono l\'intensità percepita e il disagio.',
    },
    trt: {
      en: 'Tinnitus Retraining Therapy (TRT)',
      es: 'Terapia de Reentrenamiento del Tinnitus (TRT)',
      ca: 'Teràpia de Reentrenament del Tinnitus (TRT)',
      de: 'Tinnitus-Retraining-Therapie (TRT)',
      it: 'Terapia di Riattenuazione dell\'Acufene (TRT)',
    },
    trtDesc: {
      en: 'A structured approach combining sound therapy with educational counseling to help your brain learn to reclassify tinnitus as a neutral rather than negative signal.',
      es: 'Un enfoque estructurado que combina terapia de sonido con asesoramiento educativo para ayudar a su cerebro a aprender a reclasificar el tinnitus como una señal neutral en lugar de negativa.',
      ca: 'Un enfocament estructurat que combina teràpia de so amb assessorament educatiu per ajudar al seu cervell a aprendre a reclassificar el tinnitus com un senyal neutral en lloc de negatiu.',
      de: 'Ein strukturierter Ansatz, der Klangtherapie mit pädagogischer Beratung kombiniert, um Ihrem Gehirn zu helfen, Tinnitus als neutrales statt als negatives Signal zu klassifizieren.',
      it: 'Un approccio strutturato che combina la terapia sonora con il counseling educativo per aiutare il cervello a riclassificare l\'acufene come un segnale neutro anziché negativo.',
    },
    cbt: {
      en: 'Cognitive Behavioral Therapy (CBT)',
      es: 'Terapia Cognitivo-Conductual (TCC)',
      ca: 'Teràpia Cognitiu-Conductual (TCC)',
      de: 'Kognitive Verhaltenstherapie (KVT)',
      it: 'Terapia Cognitivo-Comportamentale (TCC)',
    },
    cbtDesc: {
      en: 'Working with our partner psychologists specializing in tinnitus, CBT helps change negative thought patterns and develop coping strategies to reduce tinnitus-related distress.',
      es: 'Trabajando con nuestros psicólogos asociados especializados en tinnitus, la TCC ayuda a cambiar patrones de pensamiento negativos y desarrollar estrategias de afrontamiento para reducir la angustia relacionada con el tinnitus.',
      ca: 'Treballant amb els nostres psicòlegs associats especialitzats en tinnitus, la TCC ajuda a canviar patrons de pensament negatius i desenvolupar estratègies d\'afrontament per reduir l\'angoixa relacionada amb el tinnitus.',
      de: 'In Zusammenarbeit mit unseren Partnerpsychologen, die auf Tinnitus spezialisiert sind, hilft KVT dabei, negative Denkmuster zu ändern und Bewältigungsstrategien zu entwickeln, um tinnitusbedingten Stress zu reduzieren.',
      it: 'In collaborazione con psicologi partner specializzati in acufeni, la TCC aiuta a modificare i modelli di pensiero negativi e a sviluppare strategie di adattamento per ridurre il disagio correlato.',
    },
    hearingAids: {
      en: 'Hearing Aids',
      es: 'Audífonos',
      ca: 'Audiòfons',
      de: 'Hörgeräte',
      it: 'Apparecchi Acustici',
    },
    hearingAidsDesc: {
      en: 'For those with hearing loss and tinnitus, properly fitted hearing aids can provide relief by amplifying external sounds, making tinnitus less noticeable and reducing auditory strain.',
      es: 'Para aquellos con pérdida auditiva y tinnitus, los audífonos correctamente adaptados pueden proporcionar alivio al amplificar los sonidos externos, haciendo que el tinnitus sea menos perceptible y reduciendo la tensión auditiva.',
      ca: 'Per a aquells amb pèrdua auditiva i tinnitus, els audiòfons correctament adaptats poden proporcionar alleujament en amplificar els sons externs, fent que el tinnitus sigui menys perceptible i reduint la tensió auditiva.',
      de: 'Für Menschen mit Hörverlust und Tinnitus können richtig angepasste Hörgeräte Erleichterung bieten, indem sie externe Geräusche verstärken, wodurch der Tinnitus weniger wahrnehmbar wird und die Hörbelastung verringert wird.',
      it: 'Per chi presenta ipoacusia e acufene, apparecchi acustici adattati correttamente possono offrire sollievo amplificando i suoni esterni, rendendo l\'acufene meno percepibile e riducendo l\'affaticamento uditivo.',
    },
    relaxation: {
      en: 'Relaxation Techniques',
      es: 'Técnicas de Relajación',
      ca: 'Tècniques de Relaxació',
      de: 'Entspannungstechniken',
      it: 'Tecniche di Rilassamento',
    },
    relaxationDesc: {
      en: 'Stress often exacerbates tinnitus, so we provide training in progressive muscle relaxation, deep breathing, and mindfulness meditation to help reduce tinnitus intensity.',
      es: 'El estrés a menudo exacerba el tinnitus, por lo que proporcionamos entrenamiento en relajación muscular progresiva, respiración profunda y meditación de atención plena para ayudar a reducir la intensidad del tinnitus.',
      ca: 'L\'estrès sovint exacerba el tinnitus, per la qual cosa proporcionem entrenament en relaxació muscular progressiva, respiració profunda i meditació de plena consciència per ajudar a reduir la intensitat del tinnitus.',
      de: 'Stress verschlimmert oft Tinnitus, daher bieten wir Training in progressiver Muskelentspannung, tiefer Atmung und Achtsamkeitsmeditation an, um die Tinnitus-Intensität zu reduzieren.',
      it: 'Lo stress spesso aggrava l\'acufene; pertanto offriamo percorsi di rilassamento muscolare progressivo, respirazione profonda e meditazione mindfulness per contribuire a ridurne l\'intensità.',
    },
    lifestyle: {
      en: 'Lifestyle Modifications',
      es: 'Modificaciones de Estilo de Vida',
      ca: 'Modificacions d\'Estil de Vida',
      de: 'Lebensstiländerungen',
      it: 'Modifiche dello Stile di Vita',
    },
    lifestyleDesc: {
      en: 'Guidance on sleep hygiene, diet adjustments, physical activity, and stress management that can positively impact tinnitus perception and overall well-being.',
      es: 'Orientación sobre higiene del sueño, ajustes en la dieta, actividad física y manejo del estrés que pueden impactar positivamente en la percepción del tinnitus y el bienestar general.',
      ca: 'Orientació sobre higiene del son, ajustos en la dieta, activitat física i gestió de l\'estrès que poden impactar positivament en la percepció del tinnitus i el benestar general.',
      de: 'Anleitung zu Schlafhygiene, Ernährungsanpassungen, körperlicher Aktivität und Stressmanagement, die sich positiv auf die Tinnitus-Wahrnehmung und das allgemeine Wohlbefinden auswirken können.',
      it: 'Consigli su igiene del sonno, alimentazione, attività fisica e gestione dello stress che possono influire positivamente sulla percezione dell\'acufene e sul benessere generale.',
    },
    expectTitle: {
      en: 'What to Expect: Our Tinnitus Management Process',
      es: 'Qué Esperar: Nuestro Proceso de Manejo del Tinnitus',
      ca: 'Què Esperar: El Nostre Procés de Gestió del Tinnitus',
      de: 'Was Sie erwartet: Unser Tinnitus-Management-Prozess',
      it: 'Cosa Aspettarsi: Il Nostro Percorso di Gestione dell\'Acufene',
    },
    expectP1: {
      en: 'At looptica, we take a personalized, step-by-step approach to tinnitus management:',
      es: 'En looptica, adoptamos un enfoque personalizado, paso a paso, para el manejo del tinnitus:',
      ca: 'A looptica, adoptem un enfocament personalitzat, pas a pas, per a la gestió del tinnitus:',
      de: 'Bei looptica verfolgen wir einen personalisierten, schrittweisen Ansatz für das Tinnitus-Management:',
      it: 'Da looptica, adottiamo un approccio personalizzato e graduale alla gestione dell\'acufene:',
    },
    factsTitle: {
      en: 'Important Facts About Tinnitus',
      es: 'Datos Importantes Sobre el Tinnitus',
      ca: 'Dades Importants Sobre el Tinnitus',
      de: 'Wichtige Fakten über Tinnitus',
      it: 'Fatti Importanti sull\'Acufene',
    },
    factsP1: {
      en: 'Understanding tinnitus is an important part of managing it effectively:',
      es: 'Entender el tinnitus es una parte importante para manejarlo eficazmente:',
      ca: 'Entendre el tinnitus és una part important per gestionar-lo eficaçment:',
      de: 'Tinnitus zu verstehen ist ein wichtiger Teil des effektiven Managements:',
      it: 'Comprendere l\'acufene è un passaggio fondamentale per gestirlo in modo efficace:',
    },
    finalP: {
      en: 'If you\'re experiencing tinnitus, know that you\'re not alone and help is available. Our compassionate team at looptica is dedicated to helping you find relief and improving your quality of life.',
      es: 'Si está experimentando tinnitus, sepa que no está solo y que hay ayuda disponible. Nuestro compasivo equipo en looptica está dedicado a ayudarle a encontrar alivio y mejorar su calidad de vida.',
      ca: 'Si està experimentant tinnitus, sàpiga que no està sol i que hi ha ajuda disponible. El nostre compassiu equip a looptica està dedicat a ajudar-li a trobar alleujament i millorar la seva qualitat de vida.',
      de: 'Wenn Sie unter Tinnitus leiden, wissen Sie, dass Sie nicht allein sind und Hilfe verfügbar ist. Unser mitfühlendes Team bei looptica widmet sich der Hilfe, Erleichterung zu finden und Ihre Lebensqualität zu verbessern.',
      it: 'Se soffri di acufene, sappi che non sei solo e che un aiuto concreto è possibile. Il nostro team da looptica è dedicato ad aiutarti a trovare sollievo e a migliorare la qualità della tua vita.',
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
      image="/lovable-uploads/b5661196-c8c2-4fad-9207-094e65ba3642.png"
      appointmentSubject={content.appointmentSubject[language]}
    >
      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>{content.understanding[language]}</h2>
          <p>
            {content.understandingP1[language]}
          </p>
          <p>
            {content.understandingP2[language]}
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-semibold mb-6">{content.assessmentTitle[language]}</h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-[#55afa9] rounded-full p-3 h-fit">
                <Volume2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.tinnitusEvaluation[language]}</h4>
                <p>{content.tinnitusEvaluationDesc[language]}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#55afa9] rounded-full p-3 h-fit">
                <Music className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.hearingAssessment[language]}</h4>
                <p>{content.hearingAssessmentDesc[language]}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#55afa9] rounded-full p-3 h-fit">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.impactAssessment[language]}</h4>
                <p>{content.impactAssessmentDesc[language]}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#55afa9] rounded-full p-3 h-fit">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.triggerIdentification[language]}</h4>
                <p>{content.triggerIdentificationDesc[language]}</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">{content.solutionsTitle[language]}</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.soundTherapy[language]}</h4>
              <p>{content.soundTherapyDesc[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.trt[language]}</h4>
              <p>{content.trtDesc[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.cbt[language]}</h4>
              <p>{content.cbtDesc[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.hearingAids[language]}</h4>
              <p>{content.hearingAidsDesc[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.relaxation[language]}</h4>
              <p>{content.relaxationDesc[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.lifestyle[language]}</h4>
              <p>{content.lifestyleDesc[language]}</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="prose prose-lg max-w-none mb-12">
          <h2>{content.expectTitle[language]}</h2>
          <p>
            {content.expectP1[language]}
          </p>
          <ol>
            <li>
              <strong>{language === 'en' ? 'Initial Consultation' : language === 'es' ? 'Consulta Inicial' : language === 'de' ? 'Erstberatung' : language === 'it' ? 'Consulenza Iniziale' : 'Consulta Inicial'}:</strong> {language === 'en' ? 'We begin with a thorough discussion of your tinnitus experience, its impact on your life, and your treatment goals.' : language === 'es' ? 'Comenzamos con una discusión exhaustiva de su experiencia con el tinnitus, su impacto en su vida y sus objetivos de tratamiento.' : language === 'de' ? 'Wir beginnen mit einem ausführlichen Gespräch über Ihre Tinnitus-Erfahrung, die Auswirkungen auf Ihr Leben und Ihre Behandlungsziele.' : language === 'it' ? 'Iniziamo con una discussione approfondita della tua esperienza con l\'acufene, del suo impatto sulla vita quotidiana e dei tuoi obiettivi di trattamento.' : 'Comencem amb una discussió exhaustiva de la seva experiència amb el tinnitus, el seu impacte en la seva vida i els seus objectius de tractament.'}
            </li>
            <li>
              <strong>{language === 'en' ? 'Comprehensive Assessment' : language === 'es' ? 'Evaluación Exhaustiva' : language === 'de' ? 'Umfassende Bewertung' : language === 'it' ? 'Valutazione Approfondita' : 'Avaluació Exhaustiva'}:</strong> {language === 'en' ? 'Our specialized tinnitus evaluation helps us understand the characteristics of your tinnitus and any related hearing issues.' : language === 'es' ? 'Nuestra evaluación especializada del tinnitus nos ayuda a comprender las características de su tinnitus y cualquier problema auditivo relacionado.' : language === 'de' ? 'Unsere spezialisierte Tinnitus-Untersuchung hilft uns, die Eigenschaften Ihres Tinnitus und etwaige damit verbundene Hörprobleme zu verstehen.' : language === 'it' ? 'La nostra valutazione specialistica dell\'acufene ci aiuta a comprendere le caratteristiche del disturbo e gli eventuali problemi uditivi associati.' : 'La nostra avaluació especialitzada del tinnitus ens ajuda a comprendre les característiques del seu tinnitus i qualsevol problema auditiu relacionat.'}
            </li>
            <li>
              <strong>{language === 'en' ? 'Personalized Treatment Plan' : language === 'es' ? 'Plan de Tratamiento Personalizado' : language === 'de' ? 'Personalisierter Behandlungsplan' : language === 'it' ? 'Piano di Trattamento Personalizzato' : 'Pla de Tractament Personalitzat'}:</strong> {language === 'en' ? 'Based on your assessment results, we develop a customized management strategy that addresses your specific needs and preferences.' : language === 'es' ? 'Basado en los resultados de su evaluación, desarrollamos una estrategia de manejo personalizada que aborda sus necesidades y preferencias específicas.' : language === 'de' ? 'Basierend auf den Ergebnissen Ihrer Untersuchung entwickeln wir eine maßgeschneiderte Behandlungsstrategie, die auf Ihre spezifischen Bedürfnisse und Vorlieben eingeht.' : language === 'it' ? 'Sulla base dei risultati della valutazione, sviluppiamo una strategia di gestione personalizzata che risponde alle tue esigenze e preferenze specifiche.' : 'Basat en els resultats de la seva avaluació, desenvolupem una estratègia de gestió personalitzada que aborda les seves necessitats i preferències específiques.'}
            </li>
            <li>
              <strong>{language === 'en' ? 'Treatment Implementation' : language === 'es' ? 'Implementación del Tratamiento' : language === 'de' ? 'Durchführung der Behandlung' : language === 'it' ? 'Attuazione del Trattamento' : 'Implementació del Tractament'}:</strong> {language === 'en' ? 'We provide all necessary devices, instructions, and support as you begin your tinnitus management journey.' : language === 'es' ? 'Proporcionamos todos los dispositivos necesarios, instrucciones y apoyo a medida que comienza su viaje de manejo del tinnitus.' : language === 'de' ? 'Wir stellen alle erforderlichen Geräte, Anleitungen und Unterstützung bereit, während Sie Ihren Weg zur Tinnitus-Bewältigung beginnen.' : language === 'it' ? 'Forniamo tutti i dispositivi necessari, le istruzioni e il supporto mentre intraprendi il percorso di gestione dell\'acufene.' : 'Proporcionem tots els dispositius necessaris, instruccions i suport a mesura que comença el seu viatge de gestió del tinnitus.'}
            </li>
            <li>
              <strong>{language === 'en' ? 'Regular Follow-Up' : language === 'es' ? 'Seguimiento Regular' : language === 'de' ? 'Regelmäßige Nachsorge' : language === 'it' ? 'Monitoraggio Regolare' : 'Seguiment Regular'}:</strong> {language === 'en' ? 'Scheduled check-ins allow us to monitor your progress, make adjustments to your treatment plan, and provide ongoing support.' : language === 'es' ? 'Las visitas programadas nos permiten monitorear su progreso, hacer ajustes a su plan de tratamiento y proporcionar apoyo continuo.' : language === 'de' ? 'Geplante Kontrolltermine ermöglichen es uns, Ihre Fortschritte zu überwachen, Anpassungen an Ihrem Behandlungsplan vorzunehmen und kontinuierliche Unterstützung zu bieten.' : language === 'it' ? 'Gli appuntamenti programmati ci consentono di monitorare i progressi, apportare modifiche al piano di trattamento e fornire supporto continuo.' : 'Les visites programades ens permeten monitoritzar el seu progrés, fer ajustaments al seu pla de tractament i proporcionar suport continu.'}
            </li>
            <li>
              <strong>{language === 'en' ? 'Long-Term Management' : language === 'es' ? 'Manejo a Largo Plazo' : language === 'de' ? 'Langfristige Betreuung' : language === 'it' ? 'Gestione a Lungo Termine' : 'Gestió a Llarg Termini'}:</strong> {language === 'en' ? 'We continue to work with you to refine your tinnitus management strategies as your needs evolve over time.' : language === 'es' ? 'Continuamos trabajando con usted para refinar sus estrategias de manejo del tinnitus a medida que sus necesidades evolucionan con el tiempo.' : language === 'de' ? 'Wir arbeiten weiterhin mit Ihnen zusammen, um Ihre Tinnitus-Management-Strategien zu verfeinern, während sich Ihre Bedürfnisse im Laufe der Zeit weiterentwickeln.' : language === 'it' ? 'Continuiamo a lavorare con te per perfezionare le strategie di gestione dell\'acufene man mano che le tue esigenze evolvono nel tempo.' : 'Continuem treballant amb vostè per refinar les seves estratègies de gestió del tinnitus a mesura que les seves necessitats evolucionen amb el temps.'}
            </li>
          </ol>
          <h3>{content.factsTitle[language]}</h3>
          <p>
            {content.factsP1[language]}
          </p>
          <ul>
            <li>{language === 'en' ? 'Tinnitus is a symptom, not a disease itself, and can be associated with various underlying conditions.' : language === 'es' ? 'El tinnitus es un síntoma, no una enfermedad en sí, y puede estar asociado con diversas condiciones subyacentes.' : language === 'de' ? 'Tinnitus ist ein Symptom, keine eigenständige Krankheit, und kann mit verschiedenen Grunderkrankungen verbunden sein.' : language === 'it' ? 'L\'acufene è un sintomo, non una malattia in sé, e può essere associato a diverse condizioni sottostanti.' : 'El tinnitus és un símptoma, no una malaltia en si, i pot estar associat amb diverses condicions subjacents.'}</li>
            <li>{language === 'en' ? 'While there is currently no "cure" for most forms of tinnitus, effective management strategies can significantly reduce its impact.' : language === 'es' ? 'Aunque actualmente no existe una "cura" para la mayoría de las formas de tinnitus, las estrategias de manejo efectivas pueden reducir significativamente su impacto.' : language === 'de' ? 'Obwohl es derzeit für die meisten Formen von Tinnitus keine „Heilung“ gibt, können wirksame Bewältigungsstrategien dessen Auswirkungen erheblich reduzieren.' : language === 'it' ? 'Sebbene attualmente non esista una "cura" per la maggior parte delle forme di acufene, strategie di gestione efficaci possono ridurne significativamente l\'impatto.' : 'Tot i que actualment no hi ha una "cura" per a la majoria de les formes de tinnitus, les estratègies de gestió efectives poden reduir significativament el seu impacte.'}</li>
            <li>{language === 'en' ? 'Tinnitus perception often fluctuates, with periods of greater and lesser intensity influenced by factors like stress, fatigue, and noise exposure.' : language === 'es' ? 'La percepción del tinnitus a menudo fluctúa, con períodos de mayor y menor intensidad influenciados por factores como el estrés, la fatiga y la exposición al ruido.' : language === 'de' ? 'Die Wahrnehmung von Tinnitus schwankt oft, mit Phasen höherer und geringerer Intensität, beeinflusst durch Faktoren wie Stress, Müdigkeit und Lärmexposition.' : language === 'it' ? 'La percezione dell\'acufene spesso fluttua, con periodi di maggiore o minore intensità influenzati da fattori come stress, affaticamento ed esposizione al rumore.' : 'La percepció del tinnitus sovint fluctua, amb períodes de major i menor intensitat influenciats per factors com l\'estrès, la fatiga i l\'exposició al soroll.'}</li>
            <li>{language === 'en' ? 'Many people with tinnitus find that their brain naturally habituates to the sound over time, especially with proper management.' : language === 'es' ? 'Muchas personas con tinnitus encuentran que su cerebro se habitúa naturalmente al sonido con el tiempo, especialmente con un manejo adecuado.' : language === 'de' ? 'Viele Menschen mit Tinnitus stellen fest, dass sich ihr Gehirn mit der Zeit natürlich an das Geräusch gewöhnt, insbesondere bei angemessener Behandlung.' : language === 'it' ? 'Molte persone con acufene scoprono che il cervello si abitua naturalmente al suono nel tempo, soprattutto con una gestione adeguata.' : 'Moltes persones amb tinnitus troben que el seu cervell s\'habitua naturalment al so amb el temps, especialment amb una gestió adequada.'}</li>
            <li>{language === 'en' ? 'Protecting your hearing from loud noise is important to prevent tinnitus from worsening.' : language === 'es' ? 'Proteger su audición del ruido fuerte es importante para evitar que el tinnitus empeore.' : language === 'de' ? 'Der Schutz Ihres Gehörs vor lautem Lärm ist wichtig, um eine Verschlimmerung des Tinnitus zu verhindern.' : language === 'it' ? 'Proteggere l\'udito dai rumori forti è importante per evitare che l\'acufene peggiori.' : 'Protegir la seva audició del soroll fort és important per evitar que el tinnitus empitjori.'}</li>
          </ul>
          <p>
            {content.finalP[language]}
          </p>
        </div>
      </ScrollReveal>
    </ServiceLayout>
    </>
  );
};

export default TinnitusTreatment;
