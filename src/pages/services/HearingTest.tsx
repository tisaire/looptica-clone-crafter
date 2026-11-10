import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Ear, FileText, Activity, BarChart3 } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';

const HearingTest = () => {
  const { language } = useLanguage();
  
  const content = {
    title: {
      en: 'Professional Hearing Tests',
      es: 'Pruebas Auditivas Profesionales',
      ca: 'Proves Auditives Professionals',
      de: 'Professionelle Hörtests',
      it: 'Test dell\'Udito Professionali',
    },
    subtitle: {
      en: 'Comprehensive audiological assessments by experienced specialists at our Barcelona Poblenou hearing center',
      es: 'Evaluaciones audiológicas completas por especialistas experimentados en nuestro centro auditivo de Barcelona Poblenou',
      ca: 'Avaluacions audiològiques completes per especialistes experimentats al nostre centre auditiu de Barcelona Poblenou',
      de: 'Umfassende audiologische Untersuchungen durch erfahrene Spezialisten in unserem Hörzentrum Barcelona Poblenou',
      it: 'Valutazioni audiologiche complete da parte di specialisti esperti nel nostro centro acustico di Barcellona Poblenou',
    },
    appointmentSubject: {
      en: 'Hearing Test at looptica Barcelona Poblenou Audiology Center',
      es: 'Prueba Auditiva en looptica Centro de Audiología Barcelona Poblenou',
      ca: 'Prova Auditiva a looptica Centre d\'Audiologia Barcelona Poblenou',
      de: 'Hörtest im looptica Audiologiezentrum Barcelona Poblenou',
      it: 'Test dell\'Udito presso looptica Centro di Audiologia Barcellona Poblenou',
    },
    understanding: {
      en: 'Understanding Our Clinical Audiology Tests',
      es: 'Comprendiendo Nuestras Pruebas de Audiología Clínica',
      ca: 'Entenent Les Nostres Proves d\'Audiologia Clínica',
      de: 'Unsere Klinischen Audiologietests Verstehen',
      it: 'Comprendere i Nostri Test di Audiologia Clinica',
    },
    understandingP1: {
      en: 'At looptica Barcelona Poblenou Audiology Center, we provide comprehensive hearing evaluations conducted by our experienced audiologists. Our tests go beyond basic screenings to thoroughly assess your hearing ability across different frequencies and sound levels, helping to identify any potential hearing loss and their causes.',
      es: 'En looptica Centro de Audiología Barcelona Poblenou, proporcionamos evaluaciones auditivas completas realizadas por nuestros audiólogos con experiencia. Nuestras pruebas van más allá de los exámenes básicos para evaluar minuciosamente su capacidad auditiva en diferentes frecuencias y niveles de sonido, ayudando a identificar posibles problemas de pérdida auditiva y sus causas.',
      ca: 'A looptica Centre d\'Audiologia Barcelona Poblenou, proporcionem avaluacions auditives completes realitzades pels nostres audiòlegs amb experiència. Les nostres proves van més enllà dels exàmens bàsics per avaluar minuciosament la seva capacitat auditiva en diferents freqüències i nivells de so, ajudant a identificar possibles problemes de pèrdua auditiva i les seves causes.',
      de: 'Im looptica Barcelona Poblenou Audiologiezentrum bieten wir umfassende Höruntersuchungen an, die von unseren erfahrenen Audiologen durchgeführt werden. Unsere Tests gehen über grundlegende Screenings hinaus, um Ihre Hörfähigkeit über verschiedene Frequenzen und Schallpegel hinweg gründlich zu bewerten und dabei mögliche Hörverluste und deren Ursachen zu identifizieren.',
      it: 'Nel centro di audiologia looptica a Barcellona Poblenou, offriamo valutazioni dell\'udito complete eseguite dai nostri audioprotesisti esperti. I nostri test vanno oltre lo screening di base per valutare a fondo la vostra capacità uditiva attraverso diverse frequenze e livelli sonori, aiutando a identificare eventuali cali dell\'udito e le loro cause.',
    },
    understandingP2: {
      en: 'Regular hearing tests are essential for monitoring your auditory health, especially if you\'re experiencing symptoms like difficulty understanding conversations, asking people to repeat themselves frequently, or hearing ringing in your ears (tinnitus). Early detection of hearing loss allows for more effective treatment options and better outcomes with digital hearing aids or other solutions.',
      es: 'Las pruebas auditivas regulares son esenciales para monitorizar su salud auditiva, especialmente si está experimentando síntomas como dificultad para entender conversaciones, pedir a las personas que se repitan con frecuencia o escuchar zumbidos en los oídos (acúfenos). La detección temprana de la pérdida auditiva permite opciones de tratamiento más efectivas y mejores resultados con audífonos digitales u otras soluciones.',
      ca: 'Les proves auditivas regulars són essenciales per monitoritzar la seva salut auditiva, especialment si està experimentant símptomes com dificultat per entendre converses, demanar a les persones que es repeteixin amb freqüència o escoltar brunzits a les orelles (acúfens). La detecció primerenca de la pèrdua auditiva permet opcions de tractament més efectives i millors resultats amb audiòfons digitals o altres solucions.',
      de: 'Regelmäßige Hörtests sind unerlässlich zur Überwachung Ihrer Hörgesundheit, insbesondere wenn Sie Symptome wie Schwierigkeiten beim Verstehen von Gesprächen, häufiges Bitten um Wiederholung oder Ohrgeräusche (Tinnitus) erleben. Die frühzeitige Erkennung von Hörverlust ermöglicht effektivere Behandlungsoptionen und bessere Ergebnisse mit digitalen Hörgeräten oder anderen Lösungen.',
      it: 'I controlli periodici dell\'udito sono essenziali per monitorare la salute uditiva, soprattutto in presenza di sintomi come difficoltà nel comprendere le conversazioni, la necessità frequente di chiedere di ripetere o la presenza di ronzii alle orecchie (acufeni). La diagnosi precoce del calo dell\'udito consente soluzioni più efficaci e migliori risultati con apparecchi acustici digitali o altri ausili.',
    },
    processTitle: {
      en: 'Our Comprehensive Audiometry Process',
      es: 'Nuestro Proceso de Audiometría Completo',
      ca: 'El Nostre Procés d\'Audiometria Complet',
      de: 'Unser Umfassender Audiometrie-Prozess',
      it: 'Il Nostro Processo di Audiometria Completo',
    },
    initialConsultation: {
      en: 'Initial Audiological Consultation',
      es: 'Consulta Audiológica Inicial',
      ca: 'Consulta Audiològica Inicial',
      de: 'Erste Audiologische Beratung',
      it: 'Consulenza Audiologica Iniziale',
    },
    initialConsultationDesc: {
      en: 'We begin with a detailed discussion about your hearing concerns, medical history, and lifestyle factors that may affect your auditory health at our Barcelona Poblenou hearing center.',
      es: 'Comenzamos con una discusión detallada sobre sus preocupaciones auditivas, historial médico y factores de estilo de vida que pueden afectar su salud auditiva en nuestro centro auditivo de Barcelona Poblenou.',
      ca: 'Comencem amb una discussió detallada sobre les seves preocupacions auditives, historial mèdic i factors d\'estil de vida que poden afectar la seva salut auditiva al nostre centre auditiu de Barcelona Poblenou.',
      de: 'Wir beginnen mit einer detaillierten Besprechung Ihrer Hörprobleme, Krankengeschichte und Lebensstilfaktoren, die Ihre Hörgesundheit in unserem Hörzentrum Barcelona Poblenou beeinflussen können.',
      it: 'Iniziamo con un colloquio dettagliato sulle vostre esigenze uditive, anamnesi e fattori legati allo stile di vita che possono influenzare la salute uditiva nel nostro centro acustico di Barcellona Poblenou.',
    },
    otoscopicExamination: {
      en: 'Otoscopic Examination',
      es: 'Examen Otoscópico',
      ca: 'Examen Otoscòpic',
      de: 'Otoskopische Untersuchung',
      it: 'Esame Otoscopico',
    },
    otoscopicExaminationDesc: {
      en: 'A visual inspection of your ear canal and eardrum to check for physical abnormalities, earwax blockage, or signs of infection that could affect your hearing or cause hearing loss.',
      es: 'Una inspección visual de su canal auditivo y tímpano para verificar anormalidades físicas, bloqueo de cerumen o signos de infección que podrían afectar su audición o causar pérdida auditiva.',
      ca: 'Una inspecció visual del seu canal auditiu i timpà per verificar anomalies físiques, bloqueig de cerumen o signes d\'infecció que podrien afectar la seva audició o causar pèrdua auditiva.',
      de: 'Eine visuelle Inspektion Ihres Gehörgangs und Trommelfells zur Überprüfung auf physische Anomalien, Ohrenschmalzblockaden oder Anzeichen von Infektionen, die Ihr Gehör beeinträchtigen oder Hörverlust verursachen könnten.',
      it: 'Un\'ispezione visiva del canale uditivo e della membrana timpanica per verificare la presenza di anomalie anatomiche, tappi di cerume o segni di infezione che potrebbero influenzare l\'udito o provocare cali uditivi.',
    },
    pureToneAudio: {
      en: 'Pure Tone Audiometry',
      es: 'Audiometría de Tono Puro',
      ca: 'Audiometria de To Pur',
      de: 'Reinton-Audiometrie',
      it: 'Audiometria Tonale Liminare',
    },
    pureToneAudioDesc: {
      en: 'This clinical audiology test measures your ability to hear sounds of different volumes and frequencies, determining the quietest sounds you can hear across the speech spectrum and diagnosing hearing loss levels.',
      es: 'Esta prueba de audiología clínica mide su capacidad para escuchar sonidos de diferentes volúmenes y frecuencias, determinando los sonidos más silenciosos que puede escuchar en todo el espectro del habla y diagnosticando niveles de pérdida auditiva.',
      ca: 'Aquesta prova d\'audiologia clínica mesura la seva capacitat per escoltar sons de diferents volums i freqüències, determinant els sons més silenciosos que pot escoltar en tot l\'espectre de la parla i diagnosticant nivells de pèrdua auditiva.',
      de: 'Dieser klinische Audiologietest misst Ihre Fähigkeit, Geräusche verschiedener Lautstärken und Frequenzen zu hören, bestimmt die leisesten Geräusche, die Sie im gesamten Sprachspektrum hören können, und diagnostiziert Hörverlustgrade.',
      it: 'Questo test di audiologia clinica misura la capacità di percepire suoni a diverse intensità e frequenze, determinando i suoni più deboli udibili lungo tutto lo spettro vocale e quantificando il livello di perdita uditiva.',
    },
    speechRecognition: {
      en: 'Speech Recognition Testing',
      es: 'Prueba de Reconocimiento del Habla',
      ca: 'Prova de Reconeixement de la Parla',
      de: 'Sprachverständnistest',
      it: 'Audiometria Vocale',
    },
    speechRecognitionDesc: {
      en: 'Evaluates your ability to distinguish speech from background noise and to understand spoken words at different volumes, critical for determining if hearing aids might be beneficial.',
      es: 'Evalúa su capacidad para distinguir el habla del ruido de fondo y para entender palabras habladas a diferentes volúmenes, crítico para determinar si los audífonos podrían ser beneficiosos.',
      ca: 'Avalua la seva capacitat per distingir la parla del soroll de fons i per entendre paraules parlades a diferents volums, crític per determinar si els audiòfons podrien ser beneficiosos.',
      de: 'Bewertet Ihre Fähigkeit, Sprache von Hintergrundgeräuschen zu unterscheiden und gesprochene Wörter bei verschiedenen Lautstärken zu verstehen, entscheidend für die Bestimmung, ob Hörgeräte vorteilhaft sein könnten.',
      it: 'Valuta la capacità di distinguere la voce dal rumore di fondo e di comprendere le parole a volumi differenti, elemento chiave per stabilire l\'efficacia e l\'utilità degli apparecchi acustici.',
    },
    advancedTitle: {
      en: 'Advanced Audiological Diagnostic Tests',
      es: 'Pruebas Diagnósticas Audiológicas Avanzadas',
      ca: 'Proves Diagnòstiques Audiològiques Avançades',
      de: 'Erweiterte Audiologische Diagnosetests',
      it: 'Test Diagnostici Audiologici Avanzati',
    },
    tympanometry: {
      en: 'Tympanometry',
      es: 'Timpanometría',
      ca: 'Timpanometria',
      de: 'Tympanometrie',
      it: 'Timpanometria',
    },
    tympanometryDesc: {
      en: 'Measures the movement of your eardrum in response to air pressure changes, helping to identify middle ear problems such as fluid buildup or eardrum perforation that may contribute to hearing loss.',
      es: 'Mide el movimiento de su tímpano en respuesta a cambios de presión de aire, ayudando a identificar problemas del oído medio como acumulación de líquido o perforación del tímpano que pueden contribuir a la pérdida auditiva.',
      ca: 'Mesura el moviment del seu timpà en resposta a canvis de pressió d\'aire, ajudant a identificar problemes de l\'oïda mitjana com acumulació de líquid o perforació del timpà que poden contribuir a la pèrdua auditiva.',
      de: 'Misst die Bewegung Ihres Trommelfells als Reaktion auf Luftdruckveränderungen und hilft bei der Identifizierung von Mittelohrproblemen wie Flüssigkeitsansammlung oder Trommelfellperforation, die zu Hörverlust beitragen können.',
      it: 'Misura il movimento della membrana timpanica in risposta alle variazioni di pressione dell\'aria, aiutando a identificare problemi dell\'orecchio medio come versamenti endotimpanici o perforazioni che possono incidere sull\'udito.',
    },
    acousticReflex: {
      en: 'Acoustic Reflex Testing',
      es: 'Prueba de Reflejo Acústico',
      ca: 'Prova de Reflex Acústic',
      de: 'Akustischer Reflex-Test',
      it: 'Riflessometria Stapediale',
    },
    acousticReflexDesc: {
      en: 'Evaluates how certain muscles in your middle ear respond to loud sounds, which can help identify the location of hearing problems within the auditory system and determine appropriate hearing aid selection.',
      es: 'Evalúa cómo ciertos músculos en su oído medio responden a sonidos fuertes, lo que puede ayudar a identificar la ubicación de problemas auditivos dentro del sistema auditivo y determinar la selección apropiada de audífonos.',
      ca: 'Avalua com certs músculs en la seva oïda mitjana responen a sons forts, el que pot ajudar a identificar la ubicació de problemes auditius dins del sistema auditiu i determinar la selecció apropiada d\'audiòfons.',
      de: 'Bewertet, wie bestimmte Muskeln in Ihrem Mittelohr auf laute Geräusche reagieren, was helfen kann, den Ort von Hörproblemen im Hörsystem zu identifizieren und die geeignete Hörgeräteauswahl zu bestimmen.',
      it: 'Valuta la risposta di specifici muscoli dell\'orecchio medio ai suoni intensi, contribuendo a localizzare la sede delle problematiche uditive all\'interno del sistema uditivo e a selezionare l\'apparecchio acustico più indicato.',
    },
    otoacoustic: {
      en: 'Otoacoustic Emissions (OAE)',
      es: 'Emisiones Otoacústicas (EOA)',
      ca: 'Emissions Otoacústiques (EOA)',
      de: 'Otoakustische Emissionen (OAE)',
      it: 'Emissioni Otoacustiche (OAE)',
    },
    otoacousticDesc: {
      en: 'Measures sounds produced by the inner ear in response to stimuli, helping to assess cochlear function and identify hearing loss in its earliest stages, allowing for timely intervention with digital hearing aids when necessary.',
      es: 'Mide los sonidos producidos por el oído interno en respuesta a estímulos, ayudando a evaluar la función coclear e identificar la pérdida auditiva en sus primeras etapas, permitiendo una intervención oportuna con audífonos digitales cuando sea necesario.',
      ca: 'Mesura els sons produïts per l\'oïda interna en resposta a estímuls, ajudant a avaluar la funció coclear i identificar la pèrdua auditiva en les seves primeres etapes, permetent una intervenció oportuna amb audiòfons digitals quan sigui necessari.',
      de: 'Misst Geräusche, die vom Innenohr als Reaktion auf Stimuli produziert werden, hilft bei der Beurteilung der Cochlea-Funktion und der Identifizierung von Hörverlust in seinen frühesten Stadien, was bei Bedarf rechtzeitige Intervention mit digitalen Hörgeräten ermöglicht.',
      it: 'Misura i suoni generati dall\'orecchio interno in risposta a stimoli, valutando la funzionalità cocleare e identificando cali uditivi fin dalle prime fasi per intervenire tempestivamente con apparecchi acustici digitali quando opportuno.',
    },
    realWorld: {
      en: 'Real-World Listening Assessment',
      es: 'Evaluación de Escucha en Entorno Real',
      ca: 'Avaluació d\'Escolta en Entorn Real',
      de: 'Real-World-Hörbeurteilung',
      it: 'Valutazione dell\'Ascolto in Ambienti Reali',
    },
    realWorldDesc: {
      en: 'Evaluates how you hear in everyday environments with background noise, multiple speakers, or different acoustic settings to provide practical insights into your hearing challenges and determine the most appropriate audiological solutions.',
      es: 'Evalúa cómo escucha en entornos cotidianos con ruido de fondo, múltiples hablantes o diferentes configuraciones acústicas para proporcionar información práctica sobre sus desafíos auditivos y determinar las soluciones audiológicas más apropiadas.',
      ca: 'Avalua com escolta en entorns quotidians amb soroll de fons, múltiples parlants o diferents configuracions acústiques per proporcionar informació pràctica sobre els seus desafiaments auditius i determinar les solucions audiològiques més apropiades.',
      de: 'Bewertet, wie Sie in alltäglichen Umgebungen mit Hintergrundgeräuschen, mehreren Sprechern oder verschiedenen akustischen Einstellungen hören, um praktische Einblicke in Ihre Hörherausforderungen zu bieten und die am besten geeigneten audiologischen Lösungen zu bestimmen.',
      it: 'Valuta l\'ascolto nei contesti quotidiani con rumore di fondo, più interlocutori o acustiche differenti, offrendo indicazioni pratiche sulle difficoltà uditive per consigliare le soluzioni audioprotesiche più adeguate.',
    },
    expectTitle: {
      en: 'What to Expect During Your Appointment at Our Barcelona Poblenou Audiology Center',
      es: 'Qué Esperar Durante Su Cita en Nuestro Centro de Audiología en Barcelona Poblenou',
      ca: 'Què Esperar Durant La Seva Cita al Nostre Centre d\'Audiologia a Barcelona Poblenou',
      de: 'Was Sie Bei Ihrem Termin In Unserem Audiologiezentrum Barcelona Poblenou Erwarten Können',
      it: 'Cosa Aspettarsi Durante l\'Appuntamento al Nostro Centro di Audiologia a Barcellona Poblenou',
    },
    expectP1: {
      en: 'Your hearing evaluation at looptica Barcelona Poblenou Audiology Center is a comfortable, non-invasive process that typically takes about 60 minutes. Here\'s what you can expect:',
      es: 'Su evaluación auditiva en looptica Centro de Audiología Barcelona Poblenou es un proceso cómodo, no invasivo que generalmente toma unos 60 minutos. Esto es lo que puede esperar:',
      ca: 'La seva avaluació auditiva a looptica Centre d\'Audiologia Barcelona Poblenou és un procés còmode, no invasiu que generalment pren uns 60 minuts. Això és el que pot esperar:',
      de: 'Ihre Hörbeurteilung im looptica Barcelona Poblenou Audiologiezentrum ist ein komfortabler, nicht-invasiver Prozess, der normalerweise etwa 60 Minuten dauert. Das können Sie erwarten:',
      it: 'La valutazione uditiva presso looptica Centro di Audiologia Barcellona Poblenou è un esame confortevole e non invasivo che richiede circa 60 minuti. Ecco cosa aspettarsi:',
    },
    welcomingEnv: {
      en: 'Welcoming Environment',
      es: 'Ambiente Acogedor',
      ca: 'Ambient Acollidor',
      de: 'Einladende Umgebung',
      it: 'Ambiente Accogliente',
    },
    welcomingEnvDesc: {
      en: 'Our sound-treated testing rooms ensure accurate audiometry results without distracting background noise, providing the optimal setting for precise hearing loss diagnosis.',
      es: 'Nuestras salas de pruebas tratadas acústicamente garantizan resultados de audiometría precisos sin ruido de fondo que distraiga, proporcionando el entorno óptimo para un diagnóstico preciso de pérdida auditiva.',
      ca: 'Les nostres sales de proves tractades acústicament garanteixen resultats d\'audiometria precisos sense soroll de fons que distregui, proporcionant l\'entorn òptim per a un diagnòstic precís de pèrdua auditiva.',
      de: 'Unsere akustisch behandelten Testräume gewährleisten genaue Audiometrie-Ergebnisse ohne ablenkende Hintergrundgeräusche und bieten die optimale Umgebung für eine präzise Hörverlustsdiagnose.',
      it: 'Le nostre sale di prova insonorizzate garantiscono risultati audiometrici precisi senza rumori di fondo disturbanti, offrendo l\'ambiente ideale per una corretta valutazione del calo uditivo.',
    },
    simpleInstructions: {
      en: 'Simple Instructions',
      es: 'Instrucciones Simples',
      ca: 'Instruccions Simples',
      de: 'Einfache Anweisungen',
      it: 'Istruzioni Semplici',
    },
    simpleInstructionsDesc: {
      en: 'You\'ll be asked to respond to sounds or repeat words as part of the various audiological tests, with clear guidance from our Barcelona-based audiologist.',
      es: 'Se le pedirá que responda a sonidos o repita palabras como parte de las diversas pruebas audiológicas, con orientación clara de nuestro audiólogo en Barcelona.',
      ca: 'Se li demanarà que respongui a sons o repeteixi paraules com a part de les diverses proves audiològiques, amb orientació clara del nostre audiòleg a Barcelona.',
      de: 'Sie werden gebeten, auf Geräusche zu reagieren oder Wörter als Teil der verschiedenen audiologischen Tests zu wiederholen, mit klarer Anleitung von unserem in Barcelona ansässigen Audiologen.',
      it: 'Vi verrà richiesto di segnalare i suoni percepiti o di ripetere parole durante i vari test audiologici, sempre con la guida chiara del nostro audioprotesista a Barcellona.',
    },
    comprehensiveResults: {
      en: 'Comprehensive Results',
      es: 'Resultados Completos',
      ca: 'Resultats Complets',
      de: 'Umfassende Ergebnisse',
      it: 'Risultati Completi',
    },
    comprehensiveResultsDesc: {
      en: 'After completing the tests, your audiologist will explain your results using easy-to-understand audiograms and charts, discussing any hearing loss findings and potential solutions.',
      es: 'Después de completar las pruebas, su audiólogo explicará sus resultados utilizando audiogramas y gráficos fáciles de entender, discutiendo cualquier hallazgo de pérdida auditiva y soluciones potenciales.',
      ca: 'Después de completar les proves, el seu audiòleg explicarà els seus resultats utilitzant audiogrames i gràfics fàcils d\'entendre, discutint qualsevol troballa de pèrdua auditiva i solucions potencials.',
      de: 'Nach Abschluss der Tests erklärt Ihr Audiologe Ihre Ergebnisse anhand leicht verständlicher Audiogramme und Diagramme und bespricht alle Hörverlustsbe funds und mögliche Lösungen.',
      it: 'Al termine dei test, il nostro specialista vi spiegherà i risultati attraverso audiogrammi e grafici semplici da comprendere, analizzando eventuali cali uditivi e le soluzioni disponibili.',
    },
    personalizedRecommendations: {
      en: 'Personalized Recommendations',
      es: 'Recomendaciones Personalizadas',
      ca: 'Recomanacions Personalitzades',
      de: 'Personalisierte Empfehlungen',
      it: 'Raccomandazioni Personalizzate',
    },
    personalizedRecommendationsDesc: {
      en: 'Based on your results, we\'ll discuss appropriate next steps, whether that\'s monitoring your hearing, exploring digital hearing aids options, or referring you to a medical specialist if necessary.',
      es: 'Basado en sus resultados, discutiremos los próximos pasos apropiados, ya sea monitoreando su audición, explorando opciones de audífonos digitales o refiriéndolo a un especialista médico si es necesario.',
      ca: 'Basat en els seus resultats, discutirem els propers passos apropiats, ja sigui monitoritzant la seva audició, explorant opcions d\'audiòfons digitals o referint-lo a un especialista mèdic si és necessari.',
      de: 'Basierend auf Ihren Ergebnissen besprechen wir die entsprechenden nächsten Schritte, sei es die Überwachung Ihres Gehörs, die Erkundung digitaler Hörgeräteoptionen oder die Überweisung an einen medizinischen Spezialisten, falls erforderlich.',
      it: 'In base ai risultati, valuteremo insieme i passi successivi più indicati: dal semplice monitoraggio uditivo alla scelta di apparecchi acustici digitali, fino all\'eventuale invio a un medico specialista se necessario.',
    },
    noPressure: {
      en: 'No Pressure Consultations',
      es: 'Consultas Sin Presión',
      ca: 'Consultes Sense Pressió',
      de: 'Beratungen Ohne Druck',
      it: 'Consulenze Senza Pressione',
    },
    noPressureDesc: {
      en: 'Our focus at our Barcelona Poblenou audiology clinic is on providing information and support, not selling products. You\'ll have time to ask questions and consider your options without any pressure.',
      es: 'Nuestro enfoque en nuestra clínica de audiología en Barcelona Poblenou está en proporcionar información y apoyo, no en vender productos. Tendrá tiempo para hacer preguntas y considerar sus opciones sin ninguna presión.',
      ca: 'El nostre enfocament a la nostra clínica d\'audiologia a Barcelona Poblenou està en proporcionar informació i suport, no en vendre productes. Tindrà temps per fer preguntes i considerar les seves opcions sense cap pressió.',
      de: 'Unser Fokus in unserer Audiologieklinik Barcelona Poblenou liegt auf der Bereitstellung von Informationen und Unterstützung, nicht auf dem Verkauf von Produkten. Sie haben Zeit, Fragen zu stellen und Ihre Optionen ohne Druck zu erwägen.',
      it: 'Nel nostro centro audiologico di Barcellona Poblenou ci dedichiamo a fornire informazioni e assistenza, non a vendere prodotti. Avrete tutto il tempo necessario per porre domande e valutare le vostre opzioni senza alcuna pressione.',
    },
    whenToGetTitle: {
      en: 'When Should You Get Your Hearing Tested?',
      es: '¿Cuándo Debería Hacerse una Prueba Auditiva?',
      ca: 'Quan Hauria de Fer-se una Prova Auditiva?',
      de: 'Wann Sollten Sie Ihr Gehör Testen Lassen?',
      it: 'Quando Dovreste Sottoporvi a un Test dell\'Udito?',
    },
    whenToGetP1: {
      en: 'We recommend audiological tests for:',
      es: 'Recomendamos pruebas audiológicas para:',
      ca: 'Recomanem proves audiològiques per a:',
      de: 'Wir empfehlen audiologische Tests für:',
      it: 'Raccomandiamo i test audiologici per:',
    },
    hearingTestsP1: {
      en: 'Remember that hearing loss often occurs gradually, making it difficult to notice until it significantly impacts your quality of life. Regular hearing tests at our Barcelona Poblenou audiology center allow for early intervention and better outcomes with appropriate solutions like digital hearing aids.',
      es: 'Recuerde que la pérdida auditiva a menudo ocurre gradualmente, lo que dificulta notarla hasta que afecta significativamente su calidad de vida. Las pruebas auditivas regulares en nuestro centro de audiología en Barcelona Poblenou permiten una intervención temprana y mejores resultados con soluciones apropiadas como audífonos digitales.',
      ca: 'Recordi que la pèrdua auditiva sovint ocorre gradualment, el que dificulta notar-la fins que afecta significativament la seva qualitat de vida. Les proves auditives regulars al nostre centre d\'audiologia a Barcelona Poblenou permeten una intervenció primerenca i millors resultats amb solucions apropiades com audiòfons digitals.',
      de: 'Denken Sie daran, dass Hörverlust oft allmählich auftritt, was es schwierig macht, ihn zu bemerken, bis er Ihre Lebensqualität erheblich beeinträchtigt. Regelmäßige Hörtests in unserem Audiologiezentrum Barcelona Poblenou ermöglichen eine frühe Intervention und bessere Ergebnisse mit geeigneten Lösungen wie digitalen Hörgeräten.',
      it: 'Ricordate che il calo uditivo spesso insorge in modo graduale, rendendolo difficile da notare fino a quando non influisce sensibilmente sulla qualità della vita. I controlli regolari dell\'udito nel nostro centro audiologico a Barcellona Poblenou permettono un intervento tempestivo e risultati migliori con soluzioni adeguate come gli apparecchi acustici digitali.',
    },
  };
  
  const baseUrl = 'https://looptica.com';

  const medicalProcedureSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: content.title[language],
    description: content.subtitle[language],
    procedureType: 'Diagnostic Procedure',
    medicalSpecialty: {
      '@type': 'MedicalSpecialty',
      name: 'Audiology'
    },
    provider: {
      '@type': 'MedicalBusiness',
      name: 'looptica',
      url: baseUrl,
      telephone: '+34933009064',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rambla del Poblenou 48',
        addressLocality: 'Barcelona',
        postalCode: '08005',
        addressCountry: 'ES'
      }
    }
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(medicalProcedureSchema)}</script>
      </Helmet>
      <ServiceLayout
        title={content.title[language]}
        subtitle={content.subtitle[language]}
        image="/images/oticon_act_key_visual_woman_in-anechoic_chamber_as_453913390_as_190510297.jpg"
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
          <h3 className="text-2xl font-semibold mb-6">{content.processTitle[language]}</h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-[#55afa9] rounded-full p-3 h-fit">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.initialConsultation[language]}</h4>
                <p>{content.initialConsultationDesc[language]}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#55afa9] rounded-full p-3 h-fit">
                <Ear className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.otoscopicExamination[language]}</h4>
                <p>{content.otoscopicExaminationDesc[language]}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#55afa9] rounded-full p-3 h-fit">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.pureToneAudio[language]}</h4>
                <p>{content.pureToneAudioDesc[language]}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-[#55afa9] rounded-full p-3 h-fit">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{content.speechRecognition[language]}</h4>
                <p>{content.speechRecognitionDesc[language]}</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">{content.advancedTitle[language]}</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.tympanometry[language]}</h4>
              <p>{content.tympanometryDesc[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.acousticReflex[language]}</h4>
              <p>{content.acousticReflexDesc[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.otoacoustic[language]}</h4>
              <p>{content.otoacousticDesc[language]}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2">{content.realWorld[language]}</h4>
              <p>{content.realWorldDesc[language]}</p>
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
              <strong>{content.welcomingEnv[language]}:</strong> {content.welcomingEnvDesc[language]}
            </li>
            <li>
              <strong>{content.simpleInstructions[language]}:</strong> {content.simpleInstructionsDesc[language]}
            </li>
            <li>
              <strong>{content.comprehensiveResults[language]}:</strong> {content.comprehensiveResultsDesc[language]}
            </li>
            <li>
              <strong>{content.personalizedRecommendations[language]}:</strong> {content.personalizedRecommendationsDesc[language]}
            </li>
            <li>
              <strong>{content.noPressure[language]}:</strong> {content.noPressureDesc[language]}
            </li>
          </ol>
          <h3>{content.whenToGetTitle[language]}</h3>
          <p>
            {content.whenToGetP1[language]}
          </p>
          <ul>
            <li>{language === 'en' ? 'Adults over 50, as part of regular health check-ups' : (language === 'es' ? 'Adultos mayores de 50 años, como parte de chequeos regulares de salud' : (language === 'it' ? 'Adulti con più di 50 anni, nell\'ambito dei controlli sanitari regolari' : 'Adults majors de 50 anys, com a part de revisions regulars de salut'))}</li>
            <li>{language === 'en' ? 'Anyone experiencing difficulty hearing conversations or frequently asking people to repeat themselves' : (language === 'es' ? 'Cualquier persona que experimente dificultad para escuchar conversaciones o pida frecuentemente a las personas que se repitan' : (language === 'it' ? 'Chiunque riscontri difficoltà a seguire le conversazioni o chieda frequentemente di ripetere' : 'Qualsevol persona que experimenti dificultat per escoltar converses o demani freqüentment a les persones que es repeteixin'))}</li>
            <li>{language === 'en' ? 'Individuals with a family history of hearing loss' : (language === 'es' ? 'Personas con antecedentes familiares de pérdida auditiva' : (language === 'it' ? 'Persone con familiarità di calo uditivo o ipoacusia' : 'Persones amb antecedents familiars de pèrdua auditiva'))}</li>
            <li>{language === 'en' ? 'People exposed to loud noises at work or during recreational activities' : (language === 'es' ? 'Personas expuestas a ruidos fuertes en el trabajo o durante actividades recreativas' : (language === 'it' ? 'Persone esposte a rumori forti sul lavoro o durante il tempo libero' : 'Persones exposades a sorolls forts a la feina o durant activitats recreatives'))}</li>
            <li>{language === 'en' ? 'Those experiencing ringing or buzzing in the ears (tinnitus)' : (language === 'es' ? 'Aquellos que experimentan zumbidos o pitidos en los oídos (tinnitus)' : (language === 'it' ? 'Chi avverte fischi o ronzii nelle orecchie (acufeni)' : 'Aquells que experimenten brunzits o xiulets a les orelles (tinnitus)'))}</li>
            <li>{language === 'en' ? 'Anyone who has had previous ear infections, surgeries, or treatments' : (language === 'es' ? 'Cualquier persona que haya tenido infecciones de oído, cirugías o tratamientos previos' : (language === 'it' ? 'Chiunque abbia avuto precedenti infezioni all\'orecchio, interventi chirurgici o trattamenti' : 'Qualsevol persona que hagi tingut infeccions d\'oïda, cirurgies o tractaments previs'))}</li>
          </ul>
          <p>
            {content.hearingTestsP1[language]}
          </p>
        </div>
      </ScrollReveal>
    </ServiceLayout>
    </>
  );
};

export default HearingTest;
