import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MessageCircle, Calendar as CalendarIcon } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import StoreLocation from '@/components/home/StoreLocation';
import GoogleCalendarButton from '@/components/ui/GoogleCalendarButton';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/config/languages';
const trackEvent = (name: string, params: Record<string, unknown>) => { (window as any).gtag?.('event', name, params); };
import heroImg from '@/assets/computer-glasses-hero.jpg';

type L = Record<Language, string>;
type LL = Record<Language, string[]>;

const WHATSAPP = '34699594064';

const c = {
  metaTitle: {
    es: 'Gafas para ordenador en Barcelona | looptica',
    ca: 'Ulleres per a l’ordinador a Barcelona | looptica',
    en: 'Computer Glasses in Barcelona | looptica',
    de: 'Bildschirmbrillen in Barcelona | looptica',
  } as L,
  metaDesc: {
    es: 'Gafas para ordenador y lentes ocupacionales graduadas en Barcelona. Mayor comodidad visual para trabajar con pantallas. Asesoramiento en looptica.',
    ca: 'Ulleres per a l’ordinador i lents ocupacionals graduades a Barcelona. Comoditat visual per treballar amb pantalles. Assessorament a looptica.',
    en: 'Prescription computer glasses and occupational lenses in Barcelona. Personalised optical solutions for comfortable screen work at looptica.',
    de: 'Bildschirmbrillen und Arbeitsplatzgläser mit Sehstärke in Barcelona. Individuelle Beratung und komfortables Sehen am Computer bei looptica.',
  } as L,
  eyebrow: {
    es: 'GAFAS PARA ORDENADOR EN BARCELONA',
    ca: 'ULLERES PER A L’ORDINADOR A BARCELONA',
    en: 'COMPUTER GLASSES IN BARCELONA',
    de: 'BILDSCHIRMBRILLEN IN BARCELONA',
  } as L,
  h1: {
    es: 'Gafas para ordenador. Trabaja cómodamente, mira con claridad.',
    ca: 'Ulleres per a l’ordinador. Treballa còmodament, mira amb claredat.',
    en: 'Computer glasses. Work comfortably, see clearly.',
    de: 'Bildschirmbrillen. Entspannt arbeiten, klar sehen.',
  } as L,
  heroText: {
    es: [
      '¿Pasas muchas horas frente al ordenador? Las lentes ocupacionales están diseñadas para ofrecer una visión cómoda a distancias cercanas e intermedias, adaptándose a las necesidades de tu espacio de trabajo.',
      'En looptica te ayudamos a encontrar las gafas más adecuadas para tu día a día.',
    ],
    ca: [
      'Passes moltes hores davant de l’ordinador? Les lents ocupacionals estan dissenyades per oferir una visió còmoda a distàncies properes i intermèdies, adaptant-se a les necessitats del teu espai de treball.',
      'A looptica t’ajudem a trobar les ulleres més adequades per al teu dia a dia.',
    ],
    en: [
      'Spend long hours at your computer? Occupational lenses are designed to provide comfortable vision at near and intermediate distances, tailored to your working environment.',
      'At looptica, we help you find glasses suited to your everyday needs.',
    ],
    de: [
      'Verbringen Sie viele Stunden am Computer? Arbeitsplatzgläser sind für komfortables Sehen im Nah- und Zwischenbereich konzipiert und können an Ihre Arbeitsumgebung angepasst werden.',
      'Bei looptica helfen wir Ihnen, die passende Brille für Ihren Alltag zu finden.',
    ],
  } as LL,
  heroCta: {
    es: 'Reserva tu asesoramiento personalizado',
    ca: 'Reserva el teu assessorament personalitzat',
    en: 'Book your personalised consultation',
    de: 'Persönlichen Beratungstermin vereinbaren',
  } as L,
  heroTrust: {
    es: 'looptica · Poblenou, Barcelona',
    ca: 'looptica · Poblenou, Barcelona',
    en: 'looptica · Poblenou, Barcelona',
    de: 'looptica · Poblenou, Barcelona',
  } as L,
  problemsH2: {
    es: '¿Te cuesta encontrar una posición cómoda frente al ordenador?',
    ca: 'Et costa trobar una posició còmoda davant de l’ordinador?',
    en: 'Struggling to find a comfortable position at your computer?',
    de: 'Fällt es Ihnen schwer, am Computer eine bequeme Haltung zu finden?',
  } as L,
  problemsText: {
    es: [
      'Trabajar durante horas con pantallas exige enfocar continuamente a diferentes distancias.',
      'Si utilizas gafas de lectura o progresivas convencionales, puede que no encuentres la zona de visión más cómoda para tu puesto de trabajo.',
    ],
    ca: [
      'Treballar durant hores amb pantalles exigeix enfocar contínuament a diferents distàncies.',
      'Si utilitzes ulleres de lectura o progressives convencionals, pot ser que no trobis la zona de visió més còmoda per al teu lloc de treball.',
    ],
    en: [
      'Working for hours with screens requires you to focus at different distances throughout the day.',
      'If you wear reading glasses or standard progressive lenses, you may find that they do not provide the most comfortable viewing area for your workstation.',
    ],
    de: [
      'Langes Arbeiten am Bildschirm erfordert häufiges Fokussieren auf unterschiedliche Entfernungen.',
      'Wenn Sie eine Lesebrille oder herkömmliche Gleitsichtbrille tragen, finden Sie möglicherweise nicht immer den optimalen Sehbereich für Ihren Arbeitsplatz.',
    ],
  } as LL,
  problems: {
    es: [
      ['Muchas horas frente a pantallas', 'Trabajas con uno o varios monitores y necesitas enfocar cómodamente durante largos periodos.'],
      ['Cambios constantes de distancia', 'Alternas entre documentos, teclado, pantalla y otras personas en tu espacio de trabajo.'],
      ['Posturas incómodas', 'Necesitas levantar o inclinar la cabeza para encontrar la zona adecuada de visión con tus gafas actuales.'],
    ],
    ca: [
      ['Moltes hores davant de pantalles', 'Treballes amb un o diversos monitors i necessites enfocar còmodament durant períodes llargs.'],
      ['Canvis constants de distància', 'Alternes entre documents, teclat, pantalla i altres persones al teu espai de treball.'],
      ['Postures incòmodes', 'Necessites aixecar o inclinar el cap per trobar la zona de visió adequada amb les teves ulleres actuals.'],
    ],
    en: [
      ['Long hours in front of screens', 'You work with one or more monitors and need comfortable vision for extended periods.'],
      ['Constant changes in viewing distance', 'You switch between documents, your keyboard, your screen and people around your workspace.'],
      ['Uncomfortable posture', 'You need to raise or tilt your head to find the right viewing area through your current glasses.'],
    ],
    de: [
      ['Viele Stunden vor dem Bildschirm', 'Sie arbeiten mit einem oder mehreren Monitoren und benötigen über längere Zeit komfortables Sehen.'],
      ['Häufig wechselnde Sehabstände', 'Sie wechseln zwischen Dokumenten, Tastatur, Bildschirm und Personen an Ihrem Arbeitsplatz.'],
      ['Unbequeme Körperhaltung', 'Sie müssen den Kopf heben oder neigen, um durch Ihre bisherige Brille den passenden Sehbereich zu finden.'],
    ],
  } as Record<Language, string[][]>,
  problemsClose: {
    es: 'Unas gafas adaptadas a las distancias de tu puesto de trabajo pueden ayudarte a conseguir una experiencia visual más cómoda.',
    ca: 'Unes ulleres adaptades a les distàncies del teu lloc de treball poden ajudar-te a aconseguir una experiència visual més còmoda.',
    en: 'Glasses adapted to your working distances may help make your visual experience more comfortable.',
    de: 'Eine Brille, die auf Ihre Arbeitsabstände abgestimmt ist, kann zu einem angenehmeren Seherlebnis beitragen.',
  } as L,
  lensesH2: {
    es: 'Lentes ocupacionales: gafas diseñadas para trabajar con ordenador.',
    ca: 'Lents ocupacionals: ulleres dissenyades per treballar amb ordinador.',
    en: 'Occupational lenses: glasses designed for computer work.',
    de: 'Arbeitsplatzgläser: Brillengläser für die Arbeit am Computer.',
  } as L,
  lensesText: {
    es: [
      'Las lentes ocupacionales son lentes graduadas especialmente diseñadas para enfocar a distancias cercanas e intermedias.',
      'A diferencia de las lentes progresivas de uso general, los diseños ocupacionales pueden ofrecer zonas de visión más amplias para trabajar con pantallas, leer documentos y realizar tareas de oficina.',
      'La elección del diseño depende de tus necesidades visuales y de las distancias a las que trabajas.',
    ],
    ca: [
      'Les lents ocupacionals són lents graduades especialment dissenyades per enfocar a distàncies properes i intermèdies.',
      'A diferència de les lents progressives d’ús general, els dissenys ocupacionals poden oferir zones de visió més àmplies per treballar amb pantalles, llegir documents i fer tasques d’oficina.',
      'L’elecció del disseny depèn de les teves necessitats visuals i de les distàncies a les quals treballes.',
    ],
    en: [
      'Occupational lenses are prescription lenses specifically designed for near and intermediate viewing distances.',
      'Unlike general-purpose progressive lenses, occupational lens designs can provide wider clear vision areas for computer work, reading documents and office tasks.',
      'The appropriate design depends on your visual needs and typical working distances.',
    ],
    de: [
      'Arbeitsplatzgläser sind speziell für das Sehen im Nah- und Zwischenbereich entwickelte Korrektionsgläser.',
      'Im Vergleich zu herkömmlichen Gleitsichtgläsern können Arbeitsplatzglasdesigns größere klare Sehbereiche für Bildschirmarbeit, das Lesen von Dokumenten und Bürotätigkeiten bieten.',
      'Die Auswahl des passenden Designs hängt von Ihren Sehbedürfnissen und üblichen Arbeitsabständen ab.',
    ],
  } as LL,
  lensesBenefits: {
    es: [
      ['Visión adaptada a tu espacio de trabajo', 'Las lentes se seleccionan teniendo en cuenta la distancia a tu ordenador, documentos y otros elementos del entorno.'],
      ['Comodidad visual', 'Su diseño busca facilitar la visión durante las tareas de cerca y a distancias intermedias.'],
      ['Una postura más natural', 'Una zona de visión adaptada a tu pantalla puede reducir la necesidad de levantar o inclinar la cabeza para enfocar.'],
    ],
    ca: [
      ['Visió adaptada al teu espai de treball', 'Les lents se seleccionen tenint en compte la distància a l’ordinador, els documents i altres elements de l’entorn.'],
      ['Comoditat visual', 'El seu disseny busca facilitar la visió en les tasques de prop i a distàncies intermèdies.'],
      ['Una postura més natural', 'Una zona de visió adaptada a la pantalla pot reduir la necessitat d’aixecar o inclinar el cap per enfocar.'],
    ],
    en: [
      ['Vision tailored to your workplace', 'Lenses are selected according to the distance to your computer, documents and other elements of your workspace.'],
      ['Visual comfort', 'Their design aims to make near and intermediate tasks more comfortable.'],
      ['More natural posture', 'A viewing area adapted to your screen position may reduce the need to raise or tilt your head to focus.'],
    ],
    de: [
      ['Sehen passend zu Ihrem Arbeitsplatz', 'Die Gläser werden entsprechend dem Abstand zu Ihrem Computer, Ihren Dokumenten und anderen Arbeitsmitteln ausgewählt.'],
      ['Sehkomfort', 'Ihr Design ist darauf ausgelegt, Sehaufgaben im Nah- und Zwischenbereich angenehmer zu gestalten.'],
      ['Natürlichere Körperhaltung', 'Ein auf die Bildschirmposition abgestimmter Sehbereich kann die Notwendigkeit verringern, den Kopf zum Scharfsehen anzuheben oder zu neigen.'],
    ],
  } as Record<Language, string[][]>,
  lensesNote: {
    es: 'Las lentes ocupacionales no están diseñadas para todas las distancias y no deben utilizarse para conducir.',
    ca: 'Les lents ocupacionals no estan dissenyades per a totes les distàncies i no s’han d’utilitzar per conduir.',
    en: 'Occupational lenses are not designed for all distances and should not be used for driving.',
    de: 'Arbeitsplatzgläser sind nicht für alle Sehentfernungen ausgelegt und dürfen nicht zum Autofahren verwendet werden.',
  } as L,
  compareH2: {
    es: '¿Gafas para ordenador, progresivas o gafas de lectura?',
    ca: 'Ulleres per a l’ordinador, progressives o de lectura?',
    en: 'Computer glasses, progressive lenses or reading glasses?',
    de: 'Bildschirmbrille, Gleitsichtbrille oder Lesebrille?',
  } as L,
  compareIntro: {
    es: 'No todas las gafas ofrecen las mismas prestaciones.',
    ca: 'No totes les ulleres ofereixen les mateixes prestacions.',
    en: 'Not all glasses provide the same visual performance.',
    de: 'Nicht alle Brillengläser bieten die gleichen Eigenschaften.',
  } as L,
  compare: {
    es: [
      ['Gafas ocupacionales', 'Están diseñadas para tareas a distancias cercanas e intermedias. Pueden ofrecer zonas de visión especialmente útiles para trabajar con ordenador, leer y realizar tareas de oficina. Su alcance visual depende del diseño seleccionado.'],
      ['Gafas progresivas', 'Permiten combinar visión de cerca, intermedia y de lejos en una misma gafa. Son una solución más versátil para distintas actividades cotidianas.'],
      ['Gafas de lectura', 'Están diseñadas principalmente para enfocar a una distancia cercana. No siempre resultan adecuadas para mirar una pantalla de ordenador situada más lejos.'],
    ],
    ca: [
      ['Ulleres ocupacionals', 'Estan dissenyades per a tasques a distàncies properes i intermèdies. Poden oferir zones de visió especialment útils per treballar amb ordinador, llegir i fer tasques d’oficina. El seu abast visual depèn del disseny escollit.'],
      ['Ulleres progressives', 'Permeten combinar la visió de prop, a distàncies intermèdies i de lluny amb unes mateixes ulleres. Són una solució més versàtil per a diferents activitats quotidianes.'],
      ['Ulleres de lectura', 'Estan dissenyades principalment per enfocar a una sola distància. No sempre són adequades per mirar una pantalla d’ordinador situada més lluny.'],
    ],
    en: [
      ['Occupational glasses', 'Designed for near and intermediate tasks. They may offer viewing areas particularly useful for computer work, reading and office activities. Their viewing range depends on the selected design.'],
      ['Progressive glasses', 'Combine near, intermediate and distance vision in one pair, offering greater versatility for everyday activities.'],
      ['Reading glasses', 'Primarily designed for focusing at a particular near distance. They may not be suitable for viewing a computer monitor positioned further away.'],
    ],
    de: [
      ['Arbeitsplatzbrillen', 'Für Tätigkeiten im Nah- und Zwischenbereich entwickelt. Sie können besonders geeignete Sehbereiche für Bildschirmarbeit, Lesen und Bürotätigkeiten bieten. Der nutzbare Sehbereich hängt vom gewählten Glasdesign ab.'],
      ['Gleitsichtbrillen', 'Kombinieren Nah-, Zwischen- und Fernsicht in einer Brille und bieten dadurch eine vielseitige Lösung für den Alltag.'],
      ['Lesebrillen', 'Sind hauptsächlich für eine bestimmte kurze Sehentfernung vorgesehen. Für einen weiter entfernten Computermonitor sind sie nicht immer geeignet.'],
    ],
  } as Record<Language, string[][]>,
  compareClose: {
    es: 'Las lentes ocupacionales pueden ser un excelente complemento a tus gafas habituales, especialmente si trabajas muchas horas con pantallas.',
    ca: 'Les lents ocupacionals poden ser un complement excel·lent a les teves ulleres habituals, especialment si treballes moltes hores amb pantalles.',
    en: 'Occupational lenses can be an excellent complement to your everyday glasses, particularly if you spend many hours working with screens.',
    de: 'Arbeitsplatzgläser können Ihre Alltagsbrille sinnvoll ergänzen, insbesondere wenn Sie viele Stunden am Bildschirm arbeiten.',
  } as L,
  compareCta: {
    es: 'Descubre qué lentes necesitas',
    ca: 'Descobreix quines lents necessites',
    en: 'Find the right lenses for you',
    de: 'Passende Brillengläser entdecken',
  } as L,
  zeissLink: {
    es: '¿Buscas unas gafas para todas las distancias? Descubre nuestros progresivos ZEISS.',
    ca: 'Busques unes ulleres per a totes les distàncies? Descobreix les nostres lents progressives ZEISS.',
    en: 'Looking for glasses for all distances? Discover our ZEISS progressive lenses.',
    de: 'Suchen Sie eine Brille für alle Entfernungen? Entdecken Sie unsere ZEISS Gleitsichtgläser.',
  } as L,
  adviceH2: {
    es: 'Tus gafas deberían adaptarse a tu trabajo. No al revés.',
    ca: 'Les teves ulleres s’haurien d’adaptar a la teva feina. No al revés.',
    en: 'Your glasses should adapt to your work. Not the other way around.',
    de: 'Ihre Brille sollte sich Ihrer Arbeit anpassen. Nicht umgekehrt.',
  } as L,
  adviceText: {
    es: [
      'No todos los puestos de trabajo son iguales.',
      'La distancia a la pantalla, la altura del monitor, el tamaño del escritorio y las tareas que realizas influyen en tus necesidades visuales.',
      'En looptica estudiamos cómo utilizas tu visión para ayudarte a escoger las lentes más adecuadas.',
    ],
    ca: [
      'No tots els llocs de treball són iguals.',
      'La distància a la pantalla, l’alçada del monitor, la mida de l’escriptori i les tasques que fas influeixen en les teves necessitats visuals.',
      'A looptica estudiem com utilitzes la visió per ajudar-te a escollir les lents més adequades.',
    ],
    en: [
      'No two workplaces are exactly alike.',
      'Screen distance, monitor height, desk size and daily activities all influence your visual needs.',
      'At looptica, we assess how you use your vision to help you choose appropriate lenses.',
    ],
    de: [
      'Kein Arbeitsplatz ist wie der andere.',
      'Der Abstand zum Bildschirm, die Monitorhöhe, die Größe des Schreibtisches und Ihre täglichen Aufgaben beeinflussen Ihre Sehbedürfnisse.',
      'Bei looptica berücksichtigen wir Ihre Sehgewohnheiten, um Ihnen bei der Auswahl geeigneter Gläser zu helfen.',
    ],
  } as LL,
  adviceSteps: {
    es: [
      ['1. Analizamos tus necesidades', 'Valoramos tu graduación, tus hábitos visuales y las distancias habituales de trabajo.'],
      ['2. Seleccionamos tus lentes', 'Te asesoramos sobre los diferentes diseños de lentes ocupacionales y las opciones disponibles.'],
      ['3. Ajustamos tus gafas', 'Realizamos las mediciones necesarias y comprobamos el ajuste para facilitar una visión cómoda en tu entorno de trabajo.'],
    ],
    ca: [
      ['1. Analitzem les teves necessitats', 'Valorem la teva graduació, els teus hàbits visuals i les distàncies habituals de treball.'],
      ['2. Seleccionem les teves lents', 'T’assessorem sobre els diferents dissenys de lents ocupacionals i les opcions disponibles.'],
      ['3. Ajustem les teves ulleres', 'Fem les mesures necessàries i comprovem l’ajust per facilitar una visió còmoda al teu entorn de treball.'],
    ],
    en: [
      ['1. We assess your needs', 'We consider your prescription, visual habits and typical working distances.'],
      ['2. We select your lenses', 'We explain the different occupational lens designs and available options.'],
      ['3. We fit your glasses', 'We take the necessary measurements and check the fit to support comfortable vision at work.'],
    ],
    de: [
      ['1. Wir analysieren Ihre Bedürfnisse', 'Wir berücksichtigen Ihre Sehstärke, Sehgewohnheiten und üblichen Arbeitsabstände.'],
      ['2. Wir wählen Ihre Gläser aus', 'Wir beraten Sie zu verschiedenen Arbeitsplatzglasdesigns und verfügbaren Optionen.'],
      ['3. Wir passen Ihre Brille an', 'Wir führen die notwendigen Messungen durch und überprüfen den Sitz Ihrer Brille, damit Sie am Arbeitsplatz möglichst komfortabel sehen können.'],
    ],
  } as Record<Language, string[][]>,
  faqTitle: {
    es: 'Preguntas frecuentes',
    ca: 'Preguntes freqüents',
    en: 'Frequently asked questions',
    de: 'Häufig gestellte Fragen',
  } as L,
  faq: {
    es: [
      ['¿Las gafas para ordenador y las lentes ocupacionales son lo mismo?', 'No necesariamente. «Gafas para ordenador» es una expresión general que puede referirse a diferentes tipos de gafas utilizadas frente a pantallas. Las lentes ocupacionales son un tipo específico de lentes graduadas, diseñadas para facilitar la visión a distancias cercanas e intermedias. Su diseño puede proporcionar zonas de visión más amplias para trabajar con ordenador y realizar tareas de oficina. En looptica valoramos tus necesidades para recomendarte la solución más adecuada.'],
      ['¿Qué diferencia hay entre unas lentes ocupacionales y unas progresivas?', 'Las lentes progresivas convencionales permiten ver de cerca, a distancias intermedias y de lejos con unas mismas gafas. Las lentes ocupacionales están optimizadas para las distancias de trabajo, especialmente la visión cercana e intermedia. Esto puede proporcionar zonas de visión más amplias para determinadas tareas, como trabajar con pantallas o leer. Sin embargo, las ocupacionales no sustituyen a unas progresivas de uso general para todas las actividades.'],
      ['¿Puedo utilizar gafas ocupacionales si ya tengo progresivas?', 'Sí. Muchas personas utilizan lentes ocupacionales como segundo par de gafas, especialmente para trabajar con ordenador. Las progresivas de uso general ofrecen versatilidad a diferentes distancias, mientras que las ocupacionales pueden ofrecer zonas de visión más adecuadas para un puesto de trabajo concreto. Ambos tipos de lentes pueden complementarse.'],
      ['¿Las gafas para ordenador reducen la fatiga visual?', 'Unas gafas con la graduación y el diseño adecuados para tus distancias de trabajo pueden mejorar el confort visual y facilitar una postura más natural. Sin embargo, la fatiga visual también puede relacionarse con factores como la iluminación, el uso prolongado de pantallas, la sequedad ocular o una graduación inadecuada. Por eso es importante realizar una valoración personalizada antes de elegir unas gafas.'],
      ['¿Necesito gafas con filtro de luz azul para trabajar con ordenador?', 'No necesariamente. El filtro de luz azul y el diseño óptico de unas lentes ocupacionales son características diferentes. Las lentes ocupacionales se diseñan para proporcionar una corrección visual adecuada a determinadas distancias de trabajo. Los filtros de luz azul no sustituyen una graduación correcta ni un diseño de lentes adaptado a tus necesidades.'],
      ['¿Puedo conducir con lentes ocupacionales?', 'No. Las lentes ocupacionales habituales están diseñadas para distancias cercanas e intermedias y no proporcionan necesariamente una corrección adecuada para ver de lejos. Para conducir debes utilizar gafas apropiadas para la visión lejana, según tu graduación y las recomendaciones del profesional de la visión.'],
      ['¿Cuánto cuestan unas gafas para ordenador graduadas?', 'El precio depende del diseño de la lente, su nivel de personalización, el material, los tratamientos seleccionados y la montura. En looptica te asesoramos sobre las alternativas disponibles y te preparamos un presupuesto personalizado, sin compromiso de compra.'],
    ],
    ca: [
      ['Les ulleres per a l’ordinador i les lents ocupacionals són el mateix?', 'No necessàriament. «Ulleres per a l’ordinador» és una expressió general que pot referir-se a diferents tipus d’ulleres utilitzades davant de pantalles. Les lents ocupacionals són un tipus específic de lents graduades, dissenyades per facilitar la visió a distàncies properes i intermèdies. El seu disseny pot proporcionar zones de visió més àmplies per treballar amb ordinador i fer tasques d’oficina. A looptica valorem les teves necessitats per recomanar-te la solució més adequada.'],
      ['Quina diferència hi ha entre les lents ocupacionals i les progressives?', 'Les lents progressives convencionals permeten veure-hi de prop, a distàncies intermèdies i de lluny amb unes mateixes ulleres. Les lents ocupacionals estan optimitzades per a les distàncies de treball, especialment la visió propera i a distàncies intermèdies. Això pot proporcionar zones de visió més àmplies per a determinades tasques, com treballar amb pantalles o llegir. Tanmateix, les ocupacionals no substitueixen unes progressives d’ús general per a totes les activitats.'],
      ['Puc utilitzar ulleres ocupacionals si ja tinc progressives?', 'Sí. Moltes persones utilitzen lents ocupacionals com a segon parell d’ulleres, especialment per treballar amb ordinador. Les progressives d’ús general ofereixen versatilitat a diferents distàncies, mentre que les ocupacionals poden oferir zones de visió més adequades per a un lloc de treball concret. Tots dos tipus de lents es poden complementar.'],
      ['Les ulleres per a l’ordinador redueixen la fatiga visual?', 'Unes ulleres amb la graduació i el disseny adequats per a les teves distàncies de treball poden millorar el confort visual i facilitar una postura més natural. Tanmateix, la fatiga visual també pot estar relacionada amb factors com la il·luminació, l’ús prolongat de pantalles, la sequedat ocular o una graduació inadequada. Per això és important fer una valoració personalitzada abans d’escollir unes ulleres.'],
      ['Necessito ulleres amb filtre de llum blava per treballar amb ordinador?', 'No necessàriament. El filtre de llum blava i el disseny òptic d’unes lents ocupacionals són característiques diferents. Les lents ocupacionals es dissenyen per proporcionar una correcció visual adequada a determinades distàncies de treball. Els filtres de llum blava no substitueixen una graduació correcta ni un disseny de lents adaptat a les teves necessitats.'],
      ['Puc conduir amb lents ocupacionals?', 'No. Les lents ocupacionals habituals estan dissenyades per a distàncies properes i intermèdies i no proporcionen necessàriament una correcció adequada per veure-hi de lluny. Per conduir has d’utilitzar unes ulleres apropiades per a la visió llunyana, segons la teva graduació i les recomanacions del professional de la visió.'],
      ['Quant costen unes ulleres graduades per a l’ordinador?', 'El preu depèn del disseny de la lent, el nivell de personalització, el material, els tractaments seleccionats i la muntura. A looptica t’assessorem sobre les alternatives disponibles i et preparem un pressupost personalitzat, sense compromís de compra.'],
    ],
    en: [
      ['Are computer glasses and occupational lenses the same thing?', 'Not necessarily. "Computer glasses" is a broad term that can describe different types of glasses used when working with screens. Occupational lenses are a specific type of prescription lens designed to support near and intermediate vision. Their design can provide wider clear vision areas for computer work and office tasks. At looptica, we assess your needs to recommend the most appropriate solution.'],
      ['What is the difference between occupational and progressive lenses?', 'Standard progressive lenses allow you to see at near, intermediate and far distances through one pair of glasses. Occupational lenses are optimised for working distances, particularly near and intermediate vision. This can provide wider clear vision areas for activities such as computer work and reading. However, occupational lenses do not replace general-purpose progressive glasses for every activity.'],
      ['Can I wear occupational glasses if I already have progressives?', 'Yes. Many people use occupational glasses as a second pair, especially for computer work. General-purpose progressives provide versatility across different distances, while occupational lenses can offer viewing areas better suited to a particular workstation. The two lens types can complement each other.'],
      ['Can computer glasses reduce eye strain?', 'Glasses with the right prescription and design for your working distances may improve visual comfort and help you maintain a more natural posture. However, eye strain can also be associated with lighting, prolonged screen use, dry eyes or an unsuitable prescription. This is why a personalised assessment is important before choosing glasses.'],
      ['Do I need blue-light-filtering glasses for computer work?', 'Not necessarily. Blue-light filters and the optical design of occupational lenses are different features. Occupational lenses are designed to provide appropriate optical correction for specific working distances. Blue-light filters do not replace an accurate prescription or suitable lens design.'],
      ['Can I drive while wearing occupational lenses?', 'No. Standard occupational lenses are designed for near and intermediate distances and do not necessarily provide the correction needed for clear distance vision. When driving, you should wear glasses suitable for distance vision, according to your prescription and your eye care professional’s recommendations.'],
      ['How much do prescription computer glasses cost?', 'Prices depend on the lens design, level of personalisation, material, selected treatments and frame. At looptica, we explain the available options and provide a personalised quotation with no obligation to purchase.'],
    ],
    de: [
      ['Sind Bildschirmbrillen und Arbeitsplatzgläser dasselbe?', 'Nicht unbedingt. „Bildschirmbrille“ ist ein allgemeiner Begriff für verschiedene Arten von Brillen, die bei der Bildschirmarbeit verwendet werden. Arbeitsplatzgläser sind spezielle Korrektionsgläser für das Sehen im Nah- und Zwischenbereich. Ihr Design kann größere klare Sehbereiche für Computerarbeit und Bürotätigkeiten bieten. Bei looptica prüfen wir Ihre individuellen Sehbedürfnisse und empfehlen Ihnen die passende Lösung.'],
      ['Was ist der Unterschied zwischen Arbeitsplatzgläsern und Gleitsichtgläsern?', 'Herkömmliche Gleitsichtgläser ermöglichen das Sehen im Nah-, Zwischen- und Fernbereich mit einer einzigen Brille. Arbeitsplatzgläser sind speziell für Arbeitsabstände optimiert, insbesondere für das Sehen im Nah- und Zwischenbereich. Dadurch können sie bei bestimmten Tätigkeiten, etwa bei der Bildschirmarbeit oder beim Lesen, größere klare Sehbereiche bieten. Arbeitsplatzgläser ersetzen jedoch keine universell einsetzbare Gleitsichtbrille für alle Alltagssituationen.'],
      ['Kann ich eine Arbeitsplatzbrille verwenden, wenn ich bereits eine Gleitsichtbrille habe?', 'Ja. Viele Menschen nutzen eine Arbeitsplatzbrille als Zweitbrille, insbesondere für die Arbeit am Computer. Herkömmliche Gleitsichtgläser bieten Flexibilität für unterschiedliche Entfernungen, während Arbeitsplatzgläser größere Sehbereiche für einen bestimmten Arbeitsplatz ermöglichen können. Beide Glasarten können sich sinnvoll ergänzen.'],
      ['Können Bildschirmbrillen die Augenbelastung verringern?', 'Eine Brille mit der richtigen Sehstärke und einem geeigneten Design für Ihre Arbeitsabstände kann den Sehkomfort verbessern und eine natürlichere Körperhaltung unterstützen. Augenbelastung kann jedoch auch mit Beleuchtung, langen Bildschirmzeiten, trockenen Augen oder einer ungeeigneten Sehstärke zusammenhängen. Deshalb ist eine individuelle Beurteilung vor der Auswahl der Brille wichtig.'],
      ['Brauche ich eine Bildschirmbrille mit Blaulichtfilter?', 'Nicht unbedingt. Blaulichtfilter und das optische Design von Arbeitsplatzgläsern sind unterschiedliche Eigenschaften. Arbeitsplatzgläser sind dafür entwickelt, eine geeignete Sehkorrektur für bestimmte Arbeitsabstände zu bieten. Blaulichtfilter ersetzen weder eine korrekte Sehstärke noch ein passendes Glasdesign.'],
      ['Darf ich mit einer Arbeitsplatzbrille Auto fahren?', 'Nein. Herkömmliche Arbeitsplatzgläser sind für den Nah- und Zwischenbereich ausgelegt und bieten nicht unbedingt die notwendige Korrektur für klares Sehen in der Ferne. Zum Autofahren benötigen Sie eine geeignete Brille für die Fernsicht, entsprechend Ihrer Sehstärke und den Empfehlungen Ihres Augenoptikers.'],
      ['Was kostet eine Bildschirmbrille mit Sehstärke?', 'Der Preis hängt vom Glasdesign, dem Individualisierungsgrad, dem Material, den gewählten Beschichtungen und der Fassung ab. Bei looptica beraten wir Sie persönlich und erstellen ein unverbindliches Angebot.'],
    ],
  } as Record<Language, string[][]>,
  finalH2: {
    es: 'Descubre una forma más cómoda de trabajar.',
    ca: 'Descobreix una manera més còmoda de treballar.',
    en: 'Discover a more comfortable way to work.',
    de: 'Entdecken Sie eine angenehmere Art zu arbeiten.',
  } as L,
  finalText: {
    es: 'Tus ojos pasan muchas horas concentrados en el trabajo. Descubre unas gafas graduadas para ordenador adaptadas a tus necesidades.',
    ca: 'Els teus ulls passen moltes hores concentrats en la feina. Descobreix unes ulleres graduades per a l’ordinador adaptades a les teves necessitats.',
    en: 'Your eyes spend many hours focused on your work. Discover prescription computer glasses tailored to your needs.',
    de: 'Ihre Augen leisten jeden Tag konzentrierte Arbeit. Entdecken Sie individuell abgestimmte Bildschirmbrillen mit Sehstärke.',
  } as L,
  finalCta: {
    es: 'Reserva tu visita personalizada',
    ca: 'Reserva la teva visita personalitzada',
    en: 'Book your personalised appointment',
    de: 'Persönlichen Termin vereinbaren',
  } as L,
  waCta: {
    es: 'Consultar por WhatsApp',
    ca: 'Consulta’ns per WhatsApp',
    en: 'Ask us on WhatsApp',
    de: 'Fragen Sie uns per WhatsApp',
  } as L,
  waMsg: {
    es: 'Hola, me gustaría recibir asesoramiento sobre gafas para ordenador y lentes ocupacionales.',
    ca: 'Hola, m’agradaria rebre assessorament sobre ulleres per a l’ordinador i lents ocupacionals.',
    en: 'Hello, I would like some advice about computer glasses and occupational lenses.',
    de: 'Guten Tag, ich möchte mich gerne zu Bildschirmbrillen und Arbeitsplatzgläsern beraten lassen.',
  } as L,
  crumb: {
    es: 'Gafas para ordenador',
    ca: 'Ulleres per a l’ordinador',
    en: 'Computer glasses',
    de: 'Bildschirmbrillen',
  } as L,
  heroAlt: {
    es: 'Persona con gafas trabajando cómodamente frente al ordenador',
    ca: 'Persona amb ulleres treballant còmodament davant de l’ordinador',
    en: 'Person wearing glasses working comfortably at a computer',
    de: 'Person mit Brille bei entspannter Arbeit am Computer',
  } as L,
  storeAlt: {
    es: 'Interior de looptica en Poblenou, Barcelona',
    ca: 'Interior de looptica al Poblenou, Barcelona',
    en: 'Interior of looptica in Poblenou, Barcelona',
    de: 'Innenansicht von looptica in Poblenou, Barcelona',
  } as L,
  bookSticky: {
    es: 'Reservar cita',
    ca: 'Reservar cita',
    en: 'Book appointment',
    de: 'Termin buchen',
  } as L,
  bookingSubject: {
    es: 'Asesoramiento gafas para ordenador / lentes ocupacionales',
    ca: 'Assessorament ulleres per a l’ordinador / lents ocupacionals',
    en: 'Computer glasses / occupational lenses consultation',
    de: 'Beratung Bildschirmbrillen / Arbeitsplatzgläser',
  } as L,
};

const ComputerGlasses: React.FC = () => {
  const { language } = useLanguage();
  const lang = language as Language;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
      trackEvent('computer_glasses_page_view', { language: lang });
  }, [lang]);


  const waHref = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(c.waMsg[lang])}`;
  const bookingParams = { language: lang, service: 'computer_glasses_occupational_lenses' };
  const onWa = (location: string) => () =>
    trackEvent('computer_glasses_whatsapp_click', { language: lang, location });

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faq[lang].map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: c.metaTitle[lang],
    description: c.metaDesc[lang],
    url: `https://looptica.com/${lang}/services/computer-glasses`,
    inLanguage: lang,
  };

  const BookingBtn = ({ location, label, className = '' }: { location: string; label: string; className?: string }) => (
    <GoogleCalendarButton
      eventName={location === 'comparison' ? 'computer_glasses_cta_click' : 'computer_glasses_booking_start'}
      subject={c.bookingSubject[lang]}
      className={`!bg-[#55afa9] hover:!bg-[#3d8a85] text-white px-7 py-6 text-sm font-semibold tracking-wide ${className}`}
    >
      {label}
    </GoogleCalendarButton>
  );

  const WaLink = ({ location, className = '' }: { location: string; className?: string }) => (
    <a
      href={waHref}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onWa(location)}
      className={`inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white hover:border-[#55afa9] text-gray-900 font-semibold px-6 py-3.5 text-sm tracking-wide transition-colors ${className}`}
    >
      <MessageCircle className="h-5 w-5 text-[#25D366]" />
      {c.waCta[lang]}
    </a>
  );

  return (
    <>
      <Helmet>
        <title>{c.metaTitle[lang]}</title>
        <meta name="description" content={c.metaDesc[lang]} />
        <meta property="og:title" content={c.metaTitle[lang]} />
        <meta property="og:description" content={c.metaDesc[lang]} />
        <link rel="canonical" href={`https://looptica.com/${lang}/services/computer-glasses`} />
        {(['ca','es','en','de'] as const).map((l) => (<link key={l} rel="alternate" hrefLang={l} href={`https://looptica.com/${l}/services/computer-glasses`} />))}
        <link rel="alternate" hrefLang="x-default" href={`https://looptica.com/ca/services/computer-glasses`} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
      </Helmet>
      <Navbar />

      <main className="pt-16 md:pt-20 pb-20 md:pb-0 bg-white">
        {/* 1. Hero */}
        <section className="relative bg-white overflow-hidden border-b border-gray-100">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-stretch">
            <div className="px-6 lg:px-12 py-14 md:py-24 flex flex-col justify-center">
              <p className={`text-xs font-semibold tracking-[0.25em] text-[#55afa9] mb-5`}>{c.eyebrow[lang]}</p>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5 text-gray-900">{c.h1[lang]}</h1>
              {c.heroText[lang].map((p) => (
                <p key={p} className="text-gray-600 text-base md:text-lg mb-4 max-w-md">{p}</p>
              ))}
              <div className="mt-4">
                <BookingBtn location="hero" label={c.heroCta[lang]} className="w-full sm:w-auto whitespace-normal text-center h-auto" />
              </div>
              <p className="text-xs text-gray-400 mt-8 tracking-wide">{c.heroTrust[lang]}</p>
            </div>
            <div className="relative min-h-[280px] md:min-h-[520px]">
              <img
                src={heroImg}
                alt={c.heroAlt[lang]}
                width={1920}
                height={1280}
                fetchPriority="high"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Breadcrumbs
            items={[{ label: c.crumb[lang] }]}
            currentPath={'/services/computer-glasses'}
          />
        </div>

        {/* 2. Common problems */}
        <section className="px-6 lg:px-12 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">{c.problemsH2[lang]}</h2>
            {c.problemsText[lang].map((p) => (
              <p key={p} className="text-gray-600 text-base md:text-lg mb-4 max-w-3xl">{p}</p>
            ))}
            <div className="grid md:grid-cols-3 gap-10 mt-14">
              {c.problems[lang].map(([t, d]) => (
                <div key={t} className={`border-t-2 border-[#55afa9] pt-5`}>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{t}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-900 font-semibold text-base md:text-lg mt-12 max-w-3xl">{c.problemsClose[lang]}</p>
          </div>
        </section>

        {/* 3. Occupational lenses — light band */}
        <section className="bg-gray-50 px-6 lg:px-12 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">{c.lensesH2[lang]}</h2>
            {c.lensesText[lang].map((p) => (
              <p key={p} className="text-gray-600 text-base md:text-lg mb-4 max-w-3xl">{p}</p>
            ))}
            <div className="grid md:grid-cols-3 gap-10 mt-14">
              {c.lensesBenefits[lang].map(([t, d]) => (
                <div key={t} className={`border-t-2 border-[#55afa9] pt-5`}>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{t}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-12 max-w-3xl border-l-2 border-gray-300 pl-4">{c.lensesNote[lang]}</p>
          </div>
        </section>

        {/* 4. Comparison */}
        <section className="px-6 lg:px-12 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">{c.compareH2[lang]}</h2>
            <p className="text-gray-600 text-base md:text-lg mb-4 max-w-3xl">{c.compareIntro[lang]}</p>
            <div className="grid md:grid-cols-3 gap-10 mt-14">
              {c.compare[lang].map(([t, d]) => (
                <div key={t} className="border-t border-gray-200 pt-5">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{t}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-900 font-semibold text-base md:text-lg mt-12 max-w-3xl">{c.compareClose[lang]}</p>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6">
              <BookingBtn location="comparison" label={c.compareCta[lang]} />
              <Link
                to={`/${lang}/services/zeiss-progressive-lenses`}
                className={`text-[#55afa9] font-semibold underline underline-offset-4 hover:no-underline`}
              >
                {c.zeissLink[lang]}
              </Link>
            </div>
          </div>
        </section>

        {/* 5. Personalised advice */}
        <section className="bg-gray-50 px-6 lg:px-12 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">{c.adviceH2[lang]}</h2>
            {c.adviceText[lang].map((p) => (
              <p key={p} className="text-gray-600 text-base md:text-lg mb-4 max-w-3xl">{p}</p>
            ))}
            <ol className="grid md:grid-cols-3 gap-10 mt-14">
              {c.adviceSteps[lang].map(([t, d]) => (
                <li key={t} className="border-t border-gray-200 pt-5">
                  <h3 className="font-bold text-gray-900 mb-2">{t}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{d}</p>
                </li>
              ))}
            </ol>
            <div className="mt-12">
              <BookingBtn location="advice" label={c.heroCta[lang]} />
            </div>
          </div>
        </section>

        {/* 6. FAQ — accessible accordion, indexable content */}
        <section className="px-6 lg:px-12 py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-10">{c.faqTitle[lang]}</h2>
            <div className="divide-y divide-gray-200 border-y border-gray-200">
              {c.faq[lang].map(([q, a]) => (
                <details key={q} className="group py-5">
                  <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between gap-4 text-base md:text-lg">
                    {q}
                    <span className={`text-[#55afa9] text-xl leading-none transition-transform group-open:rotate-45`}>+</span>
                  </summary>
                  <p className="text-gray-600 mt-4 leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Final CTA + contact */}
        <section className="bg-gray-50 px-6 lg:px-12 py-16 md:py-24 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-5">{c.finalH2[lang]}</h2>
            <p className="text-gray-600 text-base md:text-lg mb-10">{c.finalText[lang]}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookingBtn location="final" label={c.finalCta[lang]} />
              <WaLink location="final" />
            </div>
          </div>
        </section>

        <StoreLocation />
      </main>

      {/* Discreet sticky mobile booking button */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-gray-200 p-2">
        <GoogleCalendarButton
          subject={c.bookingSubject[lang]}
          className={`!bg-[#55afa9] hover:!bg-[#3d8a85] text-white w-full py-5 text-sm font-semibold tracking-wide`}
        >
          <span className="inline-flex items-center gap-2">
            <CalendarIcon className="h-4 w-4" />
            {c.bookSticky[lang]}
          </span>
        </GoogleCalendarButton>
      </div>
    </>
  );
};

export default ComputerGlasses;
