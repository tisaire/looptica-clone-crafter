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
import zeissHero from '@/assets/zeiss-hero.jpg';
import zeissLens from '@/assets/zeiss-lens.jpg';

type L = Record<Language, string>;
type LL = Record<Language, string[]>;

const WHATSAPP = '34699594064';
const ZEISS_BLUE = '#0057b8';

const c = {
  metaTitle: {
    es: 'Lentes progresivas ZEISS en Barcelona | looptica',
    ca: 'Lents progressives ZEISS a Barcelona | looptica',
    en: 'ZEISS Progressive Lenses in Barcelona | looptica',
    de: 'ZEISS Gleitsichtgläser in Barcelona | looptica',
  } as L,
  metaDesc: {
    es: 'Descubre las lentes progresivas ZEISS en Barcelona. Tecnología óptica avanzada, personalización y asesoramiento profesional en looptica.',
    ca: 'Descobreix les lents progressives ZEISS a Barcelona. Tecnologia òptica avançada i assessorament personalitzat a looptica.',
    en: 'Discover premium ZEISS progressive lenses in Barcelona. Advanced optical technology and personalised expert advice at looptica.',
    de: 'Entdecken Sie ZEISS Premium-Gleitsichtgläser in Barcelona. Moderne Brillenglastechnologie und persönliche Beratung bei looptica.',
  } as L,
  eyebrow: {
    es: 'LENTES PROGRESIVAS ZEISS',
    ca: 'LENTS PROGRESSIVES ZEISS',
    en: 'ZEISS PREMIUM PROGRESSIVE LENSES',
    de: 'ZEISS PREMIUM-GLEITSICHTGLÄSER',
  } as L,
  h1: {
    es: 'La precisión se nota en cada mirada.',
    ca: 'La precisió es nota en cada mirada.',
    en: 'Precision in every glance.',
    de: 'Präzision in jedem Augenblick.',
  } as L,
  heroText: {
    es: 'Descubre una visión adaptada a ti con las lentes progresivas ZEISS y el asesoramiento personalizado de looptica.',
    ca: "Descobreix una visió adaptada a tu amb les lents progressives ZEISS i l'assessorament personalitzat de l'equip d'looptica.",
    en: 'Discover vision tailored to you with ZEISS progressive lenses and personalised optical care at looptica.',
    de: 'Entdecken Sie individuell abgestimmtes Sehen mit ZEISS Gleitsichtgläsern und persönlicher Beratung bei looptica.',
  } as L,
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
  benefitsH2: {
    es: 'Tu forma de ver es única. Tus lentes también deberían serlo.',
    ca: 'La teva manera de veure-hi és única. Les teves lents també ho podrien ser.',
    en: 'Your vision is unique. Your lenses should be too.',
    de: 'Ihr Sehen ist einzigartig. Ihre Brillengläser sollten es auch sein.',
  } as L,
  benefitsText: {
    es: [
      'Cada persona utiliza su visión de manera diferente. Leer, trabajar frente a una pantalla o mirar a lo lejos requiere enfocar a distintas distancias.',
      'Las lentes progresivas ZEISS combinan tecnología óptica avanzada y opciones de personalización para adaptarse a las necesidades de tu día a día.',
    ],
    ca: [
      'Cada persona utilitza la visió de manera diferent. Llegir, treballar davant d’una pantalla o mirar de lluny requereix enfocar a distàncies diferents.',
      'Les lents progressives ZEISS combinen tecnologia òptica avançada i opcions de personalització per adaptar-se a les necessitats del teu dia a dia.',
    ],
    en: [
      'Everyone uses their vision differently. Reading, working at a computer and looking into the distance all place different demands on your eyes.',
      'ZEISS progressive lenses combine advanced optical technology with personalisation options designed around your everyday visual needs.',
    ],
    de: [
      'Jeder Mensch nutzt seine Augen anders. Lesen, Arbeiten am Computer und der Blick in die Ferne stellen unterschiedliche Anforderungen an das Sehen.',
      'ZEISS Gleitsichtgläser verbinden moderne optische Technologie mit individuellen Anpassungsmöglichkeiten für Ihre täglichen Sehbedürfnisse.',
    ],
  } as LL,
  benefits: {
    es: [
      ['Visión a diferentes distancias', 'Una solución óptica para ver de cerca, de lejos y a distancias intermedias sin cambiar constantemente de gafas.'],
      ['Precisión óptica ZEISS', 'Diseños desarrollados para optimizar las zonas de visión y favorecer transiciones suaves entre distancias.'],
      ['Personalización', 'Lentes seleccionadas teniendo en cuenta tu graduación, tus hábitos visuales y las características de tu montura.'],
    ],
    ca: [
      ['Visió a diferents distàncies', 'Una solució òptica per veure-hi de prop, de lluny i a distàncies intermèdies sense haver de canviar constantment d’ulleres.'],
      ['Precisió òptica ZEISS', 'Dissenys desenvolupats per optimitzar les zones de visió i afavorir transicions suaus entre distàncies.'],
      ['Personalització', 'Lents seleccionades tenint en compte la teva graduació, els teus hàbits visuals i les característiques de la muntura.'],
    ],
    en: [
      ['Vision at different distances', 'One optical solution for near, intermediate and distance vision, without constantly switching between glasses.'],
      ['ZEISS optical precision', 'Lens designs developed to optimise clear vision zones and support smooth transitions between viewing distances.'],
      ['Personalisation', 'Lenses selected with your prescription, visual habits and frame characteristics in mind.'],
    ],
    de: [
      ['Sehen in verschiedenen Entfernungen', 'Eine optische Lösung für Nah-, Zwischen- und Fernsicht, ohne ständig die Brille wechseln zu müssen.'],
      ['Optische Präzision von ZEISS', 'Brillenglasdesigns zur Optimierung der Sehbereiche und für weiche Übergänge zwischen verschiedenen Entfernungen.'],
      ['Individuelle Anpassung', 'Brillengläser, die unter Berücksichtigung Ihrer Sehstärke, Sehgewohnheiten und Fassungseigenschaften ausgewählt werden.'],
    ],
  } as Record<Language, string[][]>,
  techH2: {
    es: 'ZEISS Progressive ClearMind. Tecnología diseñada para tu visión.',
    ca: 'ZEISS Progressive ClearMind. Tecnologia dissenyada per a la teva visió.',
    en: 'ZEISS Progressive ClearMind. Technology designed around your vision.',
    de: 'ZEISS Progressive ClearMind. Technologie für Ihr individuelles Sehen.',
  } as L,
  techText: {
    es: [
      'Las lentes progresivas ZEISS ClearMind incorporan tecnología de diseño óptico desarrollada a partir del estudio de cómo utilizamos nuestros ojos en situaciones cotidianas.',
      'Su diseño está pensado para proporcionar amplias zonas de visión clara y transiciones suaves entre las distancias de cerca, intermedia y lejos.',
      'La gama incluye diferentes niveles de personalización, entre ellos ZEISS ClearMind Individual 3.',
      'En looptica estudiamos tus necesidades para recomendarte la solución ZEISS más adecuada.',
    ],
    ca: [
      'Les lents progressives ZEISS ClearMind incorporen tecnologia de disseny òptic desenvolupada a partir de l’estudi de com utilitzem els ulls en situacions quotidianes.',
      'El seu disseny està pensat per proporcionar zones àmplies de visió nítida i transicions suaus entre les distàncies properes, intermèdies i llunyanes.',
      'La gamma inclou diferents nivells de personalització, entre els quals ZEISS ClearMind Individual 3.',
      'A looptica estudiem les teves necessitats per recomanar-te la solució ZEISS més adequada.',
    ],
    en: [
      'ZEISS Progressive ClearMind lenses incorporate optical design technology developed using research into how people use their eyes during everyday activities.',
      'Their design aims to provide wide areas of clear vision and smooth transitions between near, intermediate and far distances.',
      'The range offers different levels of personalisation, including ZEISS ClearMind Individual 3.',
      'At looptica, we assess your visual needs to recommend the most suitable ZEISS solution.',
    ],
    de: [
      'ZEISS Progressive ClearMind Gleitsichtgläser nutzen eine optische Designtechnologie, die auf Untersuchungen des Sehverhaltens im Alltag basiert.',
      'Ihr Design ist darauf ausgelegt, breite klare Sehbereiche und weiche Übergänge zwischen Nah-, Zwischen- und Fernsicht zu ermöglichen.',
      'Die Produktfamilie bietet unterschiedliche Individualisierungsstufen, darunter ZEISS ClearMind Individual 3.',
      'Bei looptica analysieren wir Ihre Sehbedürfnisse und empfehlen Ihnen die passende ZEISS Lösung.',
    ],
  } as LL,
  techCta: {
    es: 'Descubre tus progresivos ZEISS',
    ca: 'Descobreix les teves lents progressives ZEISS',
    en: 'Discover your ZEISS progressive lenses',
    de: 'ZEISS Gleitsichtgläser entdecken',
  } as L,
  adviceH2: {
    es: 'La tecnología importa. El asesoramiento también.',
    ca: 'La tecnologia importa. L’assessorament també.',
    en: 'Technology matters. So does expert advice.',
    de: 'Technologie ist wichtig. Persönliche Beratung ebenso.',
  } as L,
  adviceText: {
    es: [
      'Elegir unas lentes progresivas va más allá de conocer tu graduación.',
      'En looptica dedicamos tiempo a entender cómo utilizas tu visión y qué necesitas de tus gafas.',
    ],
    ca: [
      'Escollir unes lents progressives va més enllà de conèixer la teva graduació.',
      'A looptica dediquem temps a entendre com utilitzes la visió i què necessites de les teves ulleres.',
    ],
    en: [
      'Choosing progressive lenses involves more than simply knowing your prescription.',
      'At looptica, we take time to understand how you use your eyes and what you expect from your glasses.',
    ],
    de: [
      'Die Auswahl von Gleitsichtgläsern erfordert mehr als nur die Kenntnis Ihrer Sehstärke.',
      'Bei looptica nehmen wir uns Zeit, Ihre Sehgewohnheiten kennenzulernen und herauszufinden, welche Anforderungen Sie an Ihre Brille stellen.',
    ],
  } as LL,
  adviceSteps: {
    es: [
      ['1. Conocemos tu visión', 'Valoramos tu graduación, tus necesidades visuales y tus hábitos cotidianos.'],
      ['2. Personalizamos tus gafas', 'Te ayudamos a elegir las lentes y la montura adecuadas, y realizamos las mediciones necesarias.'],
      ['3. Te acompañamos en la adaptación', 'Realizamos los ajustes y el seguimiento necesarios para ayudarte a disfrutar de tus nuevas gafas.'],
    ],
    ca: [
      ['1. Coneixem la teva visió', 'Valorem la teva graduació, les teves necessitats visuals i els teus hàbits quotidians.'],
      ['2. Personalitzem les teves ulleres', 'T’ajudem a escollir les lents i la muntura adequades, i fem les mesures necessàries.'],
      ['3. T’acompanyem en l’adaptació', 'Fem els ajustos i el seguiment necessaris perquè puguis gaudir de les teves ulleres noves.'],
    ],
    en: [
      ['1. We understand your vision', 'We assess your prescription, everyday visual needs and lifestyle.'],
      ['2. We personalise your glasses', 'We help you choose suitable lenses and frames, taking the measurements needed for an accurate fit.'],
      ['3. We support your adaptation', 'We provide adjustments and follow-up care to help you get comfortable with your new glasses.'],
    ],
    de: [
      ['1. Wir verstehen Ihr Sehen', 'Wir berücksichtigen Ihre Sehstärke, Ihre individuellen Sehbedürfnisse und Ihren Alltag.'],
      ['2. Wir passen Ihre Brille individuell an', 'Wir beraten Sie bei der Auswahl geeigneter Gläser und Fassungen und führen die erforderlichen Messungen durch.'],
      ['3. Wir begleiten Ihre Eingewöhnung', 'Wir bieten Anpassungen und Nachbetreuung, damit Sie sich mit Ihrer neuen Brille wohlfühlen.'],
    ],
  } as Record<Language, string[][]>,
  trustH2: {
    es: 'Óptica y audiología de proximidad en Poblenou.',
    ca: 'Òptica i audiologia de proximitat al Poblenou.',
    en: 'Your neighbourhood optician and audiology centre in Poblenou.',
    de: 'Ihr Optiker und Hörzentrum in Poblenou.',
  } as L,
  trustText: {
    es: 'En looptica combinamos nuestra trayectoria como óptica independiente de Barcelona con las últimas tecnologías ópticas y una atención cercana y personalizada.',
    ca: 'A looptica combinem la nostra trajectòria com a òptica independent de Barcelona amb les últimes tecnologies òptiques i una atenció propera i personalitzada.',
    en: 'At looptica, we combine our heritage as an independent optician in Barcelona with advanced optical technology and friendly, personalised service.',
    de: 'Bei looptica verbinden wir unsere langjährige Erfahrung als unabhängiges Augenoptikfachgeschäft in Barcelona mit moderner optischer Technologie und persönlichem Service.',
  } as L,
  faqTitle: {
    es: 'Preguntas frecuentes',
    ca: 'Preguntes freqüents',
    en: 'Frequently asked questions',
    de: 'Häufig gestellte Fragen',
  } as L,
  faq: {
    es: [
      ['¿Qué diferencia hay entre unas lentes progresivas convencionales y unas ZEISS prémium?', 'Las lentes progresivas permiten ver a diferentes distancias con unas mismas gafas. La principal diferencia entre los distintos diseños está en cómo se distribuyen las zonas de visión y se gestionan las áreas de desenfoque lateral. Las lentes ZEISS prémium pueden incorporar diseños ópticos más avanzados y mayores posibilidades de personalización, teniendo en cuenta aspectos como tu graduación, tus hábitos visuales, tu montura y sus parámetros de ajuste. El beneficio dependerá de tus necesidades visuales y del diseño elegido. En looptica te ayudamos a valorar qué opción se adapta mejor a ti.'],
      ['¿Cuánto cuestan las lentes progresivas ZEISS?', 'El precio depende de la gama elegida, el nivel de personalización, el material de la lente y los tratamientos adicionales. ZEISS dispone de diferentes diseños de lentes progresivas, por lo que no existe un precio único. Como referencia, el precio se sitúa entre X € y Y €. En looptica te asesoramos sobre las opciones disponibles y te preparamos un presupuesto personalizado, sin compromiso de compra.'],
      ['¿Cuánto tiempo se tarda en adaptarse a unas gafas progresivas?', 'La adaptación es diferente para cada persona. Algunos usuarios se acostumbran en pocas horas o días, mientras que otros necesitan más tiempo. Durante los primeros días puedes notar diferencias al mover los ojos o la cabeza, especialmente en las zonas laterales de las lentes. Una graduación correcta, unas mediciones precisas y una montura bien ajustada son importantes para facilitar la adaptación. Si las molestias persisten, conviene revisar las gafas con el óptico-optometrista. Además, nuestras lentes progresivas incluyen garantía de adaptación: si no consigues adaptarte, te devolvemos el dinero.'],
      ['¿Son adecuadas las lentes progresivas ZEISS para trabajar con ordenador?', 'Sí. Las lentes progresivas incorporan una zona de visión intermedia que permite enfocar pantallas y otros objetos situados a distancias medias. Sin embargo, si pasas muchas horas trabajando con ordenador, unas lentes específicas de oficina pueden resultar más adecuadas para esas distancias y para tu postura de trabajo. En looptica valoramos cómo utilizas tus pantallas para recomendarte la solución más apropiada.'],
      ['¿Puedo utilizar mi montura actual con lentes progresivas ZEISS?', 'En muchos casos sí, siempre que la montura esté en buen estado y tenga las dimensiones y características adecuadas para el diseño de lente elegido. La altura disponible, el ajuste de la montura y su posición respecto a los ojos influyen en el resultado. Revisaremos tu montura para confirmar si es compatible y si permite realizar las mediciones necesarias.'],
      ['¿Qué sucede si nunca he utilizado gafas progresivas?', 'No es necesario haber utilizado progresivos anteriormente. Si empiezas a tener dificultades para enfocar de cerca, pero también necesitas ver bien a distancias intermedias y lejanas, las lentes progresivas pueden ser una buena opción. En looptica valoramos tus necesidades, te explicamos cómo utilizar las diferentes zonas de visión y te acompañamos durante la adaptación.'],
    ],
    ca: [
      ['Quina diferència hi ha entre unes lents progressives convencionals i unes ZEISS prèmium?', 'Les lents progressives permeten veure-hi a diferents distàncies amb unes mateixes ulleres. La principal diferència entre els diversos dissenys és com es distribueixen les zones de visió i es gestionen les àrees de desenfocament lateral. Les lents ZEISS prèmium poden incorporar dissenys òptics més avançats i més possibilitats de personalització, tenint en compte aspectes com la graduació, els hàbits visuals, la muntura i els seus paràmetres d’ajust. El benefici dependrà de les teves necessitats visuals i del disseny escollit. A looptica t’ajudem a valorar quina opció s’adapta millor a tu.'],
      ['Quant costen les lents progressives ZEISS?', 'El preu depèn de la gamma escollida, el nivell de personalització, el material de la lent i els tractaments addicionals. ZEISS disposa de diferents dissenys de lents progressives, de manera que no hi ha un preu únic. Com a referència, el preu se situa entre X € i Y €. A looptica t’assessorem sobre les opcions disponibles i et preparem un pressupost personalitzat, sense compromís de compra.'],
      ['Quant de temps es triga a adaptar-se a unes ulleres progressives?', 'L’adaptació és diferent per a cada persona. Alguns usuaris s’hi acostumen en poques hores o dies, mentre que d’altres necessiten més temps. Durant els primers dies pots notar diferències en moure els ulls o el cap, especialment a les zones laterals de les lents. Una graduació correcta, unes mesures precises i una muntura ben ajustada són importants per facilitar l’adaptació. Si les molèsties persisteixen, convé revisar les ulleres amb l’òptic-optometrista. A més, les nostres lents progressives inclouen garantia d’adaptació: si no t’hi adaptes, et retornem els diners.'],
      ['Les lents progressives ZEISS són adequades per treballar amb ordinador?', 'Sí. Les lents progressives incorporen una zona de visió intermèdia que permet enfocar pantalles i altres objectes situats a distàncies mitjanes. Tanmateix, si passes moltes hores treballant amb ordinador, unes lents específiques d’oficina poden ser més adequades per a aquestes distàncies i per a la teva postura de treball. A looptica valorem com utilitzes les pantalles per recomanar-te la solució més apropiada.'],
      ['Puc utilitzar la meva muntura actual amb lents progressives ZEISS?', 'En molts casos sí, sempre que la muntura estigui en bon estat i tingui les dimensions i les característiques adequades per al disseny de lent escollit. L’alçada disponible, l’ajust de la muntura i la seva posició respecte als ulls influeixen en el resultat. Revisarem la teva muntura per confirmar si és compatible i si permet fer les mesures necessàries.'],
      ['Què passa si no he utilitzat mai ulleres progressives?', 'No cal haver utilitzat lents progressives anteriorment. Si comences a tenir dificultats per enfocar de prop, però també necessites veure-hi bé a distàncies intermèdies i llunyanes, les lents progressives poden ser una bona opció. A looptica valorem les teves necessitats, t’expliquem com utilitzar les diferents zones de visió i t’acompanyem durant l’adaptació.'],
    ],
    en: [
      ['What is the difference between standard progressive lenses and premium ZEISS progressive lenses?', 'Progressive lenses allow you to see at different distances through a single pair of glasses. The main differences between lens designs lie in how the clear vision zones are distributed and how peripheral blur is managed. Premium ZEISS lenses can incorporate more advanced optical designs and additional personalisation options, considering factors such as your prescription, visual habits, frame and fitting parameters. The benefits depend on your individual visual needs and the lens design selected. At looptica, we help you evaluate which option is most suitable for you.'],
      ['How much do ZEISS progressive lenses cost?', 'The price depends on the lens range, level of personalisation, lens material and any additional coatings or treatments. ZEISS offers different progressive lens designs, so there is no single standard price. As a guide, prices range from €X to €Y. At looptica, we explain the available options and provide a personalised quotation, with no obligation to purchase.'],
      ['How long does it take to adapt to progressive glasses?', 'Adaptation varies from person to person. Some people become comfortable within a few hours or days, while others need longer. During the first few days, you may notice differences when moving your eyes or head, particularly around the sides of the lenses. An accurate prescription, precise measurements and properly adjusted frames all help with adaptation. If discomfort persists, your optometrist should check your glasses. Our progressive lenses also include an adaptation guarantee: if you cannot adapt, we refund your money.'],
      ['Are ZEISS progressive lenses suitable for computer work?', 'Yes. Progressive lenses include an intermediate vision area designed for viewing screens and other objects at medium distances. However, if you spend many hours working at a computer, dedicated office lenses may be better suited to your working distances and posture. At looptica, we assess your screen use and recommend the most appropriate solution.'],
      ['Can I use my existing frames with ZEISS progressive lenses?', 'In many cases, yes, provided your frames are in good condition and have the appropriate dimensions and characteristics for the chosen lens design. The available lens height, frame fit and position relative to your eyes can affect the result. We will inspect your frames to confirm compatibility and whether the necessary fitting measurements can be obtained.'],
      ['What if I have never worn progressive lenses before?', 'You do not need any previous experience with progressive lenses. If you are beginning to have difficulty focusing on nearby objects but also need clear vision at intermediate and longer distances, progressive lenses may be a suitable option. At looptica, we assess your needs, explain how to use the different viewing zones and support you throughout the adaptation process.'],
    ],
    de: [
      ['Was ist der Unterschied zwischen herkömmlichen Gleitsichtgläsern und Premium-Gleitsichtgläsern von ZEISS?', 'Gleitsichtgläser ermöglichen das Sehen in unterschiedlichen Entfernungen mit einer einzigen Brille. Die wesentlichen Unterschiede zwischen den Glasdesigns liegen in der Verteilung der Sehbereiche und im Umgang mit seitlichen Unschärfen. Premium-Gleitsichtgläser von ZEISS können modernere optische Designs und zusätzliche Möglichkeiten zur Individualisierung bieten. Dabei werden unter anderem Ihre Sehstärke, Ihre Sehgewohnheiten, die Fassung und ihre Anpassungsparameter berücksichtigt. Der Nutzen hängt von Ihren individuellen Sehbedürfnissen und dem gewählten Glasdesign ab. Bei looptica helfen wir Ihnen, die passende Lösung zu finden.'],
      ['Was kosten ZEISS Gleitsichtgläser?', 'Der Preis hängt von der Produktlinie, dem Individualisierungsgrad, dem Glasmaterial und zusätzlichen Beschichtungen oder Veredelungen ab. ZEISS bietet verschiedene Gleitsichtglasdesigns an. Deshalb gibt es keinen einheitlichen Preis. Als Richtwert liegt der Preis zwischen X € und Y €. Bei looptica erläutern wir Ihnen die verfügbaren Möglichkeiten und erstellen ein individuelles, unverbindliches Angebot.'],
      ['Wie lange dauert die Eingewöhnung an eine Gleitsichtbrille?', 'Die Eingewöhnung ist von Person zu Person unterschiedlich. Manche Menschen gewöhnen sich innerhalb weniger Stunden oder Tage an ihre neue Brille, andere benötigen mehr Zeit. In den ersten Tagen können Sie Unterschiede bei Augen- oder Kopfbewegungen bemerken, insbesondere in den seitlichen Glasbereichen. Eine korrekte Sehstärke, präzise Messungen und eine gut angepasste Fassung erleichtern die Eingewöhnung. Sollten die Beschwerden anhalten, empfiehlt sich eine Überprüfung durch einen Augenoptiker. Zudem beinhalten unsere Gleitsichtgläser eine Anpassungsgarantie: Wenn Sie sich nicht daran gewöhnen, erstatten wir Ihnen Ihr Geld.'],
      ['Sind ZEISS Gleitsichtgläser für die Arbeit am Computer geeignet?', 'Ja. Gleitsichtgläser verfügen über einen Zwischenbereich, mit dem Bildschirme und andere Objekte in mittlerer Entfernung betrachtet werden können. Wenn Sie jedoch viele Stunden am Computer arbeiten, können spezielle Arbeitsplatzgläser für Ihre Arbeitsentfernungen und Körperhaltung besser geeignet sein. Bei looptica berücksichtigen wir Ihre Bildschirmnutzung und empfehlen Ihnen die passende Lösung.'],
      ['Kann ich meine bisherige Brillenfassung mit ZEISS Gleitsichtgläsern weiterverwenden?', 'In vielen Fällen ist das möglich, sofern sich Ihre Fassung in gutem Zustand befindet und die erforderlichen Maße und Eigenschaften für das gewählte Glasdesign aufweist. Die verfügbare Glashöhe, der Sitz der Fassung und ihre Position vor den Augen beeinflussen das Ergebnis. Wir prüfen Ihre Fassung und stellen fest, ob sie geeignet ist und die notwendigen Anpassungsmessungen ermöglicht.'],
      ['Was ist, wenn ich noch nie eine Gleitsichtbrille getragen habe?', 'Sie müssen bisher keine Gleitsichtbrille getragen haben. Wenn Ihnen das Scharfsehen in der Nähe zunehmend schwerfällt und Sie gleichzeitig in mittleren und größeren Entfernungen gut sehen möchten, können Gleitsichtgläser eine geeignete Lösung sein. Bei looptica prüfen wir Ihre Sehbedürfnisse, erklären Ihnen die verschiedenen Sehbereiche und begleiten Sie während der Eingewöhnung.'],
    ],
  } as Record<Language, string[][]>,
  finalH2: {
    es: 'Descubre una nueva forma de ver.',
    ca: 'Descobreix una nova manera de veure-hi.',
    en: 'Discover a new way of seeing.',
    de: 'Entdecken Sie eine neue Art des Sehens.',
  } as L,
  finalText: {
    es: 'Visítanos en looptica y descubre qué lentes progresivas ZEISS se adaptan mejor a ti.',
    ca: 'Visita’ns a looptica i descobreix quines lents progressives ZEISS s’adapten millor a tu.',
    en: 'Visit looptica and discover which ZEISS progressive lenses are best suited to your vision.',
    de: 'Besuchen Sie looptica und entdecken Sie, welche ZEISS Gleitsichtgläser am besten zu Ihren Sehbedürfnissen passen.',
  } as L,
  finalCta: {
    es: 'Reserva tu visita personalizada',
    ca: 'Reserva la teva visita personalitzada',
    en: 'Book your personalised appointment',
    de: 'Persönlichen Beratungstermin vereinbaren',
  } as L,
  waCta: {
    es: 'Consultar por WhatsApp',
    ca: 'Consulta’ns per WhatsApp',
    en: 'Ask us on WhatsApp',
    de: 'Fragen Sie uns per WhatsApp',
  } as L,
  waMsg: {
    es: 'Hola, me gustaría recibir asesoramiento sobre las lentes progresivas ZEISS.',
    ca: "Hola, m'agradaria rebre assessorament sobre les lents progressives ZEISS.",
    en: 'Hello, I would like some advice about ZEISS progressive lenses.',
    de: 'Guten Tag, ich möchte mich gerne zu ZEISS Gleitsichtgläsern beraten lassen.',
  } as L,
  crumb: {
    es: 'Lentes progresivas ZEISS',
    ca: 'Lents progressives ZEISS',
    en: 'ZEISS progressive lenses',
    de: 'ZEISS Gleitsichtgläser',
  } as L,
  heroAlt: {
    es: 'Persona con gafas progresivas premium en una fotografía editorial de looptica',
    ca: 'Persona amb ulleres progressives premium en una fotografia editorial de looptica',
    en: 'Person wearing premium progressive glasses in an editorial photograph for looptica',
    de: 'Person mit hochwertiger Gleitsichtbrille in einem redaktionellen Foto für looptica',
  } as L,
  lensAlt: {
    es: 'Detalle de una lente progresiva premium con tratamiento antirreflejante',
    ca: 'Detall d’una lent progressiva premium amb tractament antireflectant',
    en: 'Close-up of a premium progressive lens with anti-reflective coating',
    de: 'Detailaufnahme eines Premium-Gleitsichtglases mit Antireflexbeschichtung',
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
};

const ZeissProgressive: React.FC = () => {
  const { language } = useLanguage();
  const lang = language as Language;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
      trackEvent('zeiss_landing_view', { language: lang });
  }, [lang]);


  const waHref = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(c.waMsg[lang])}`;
  const bookingParams = { language: lang, service: 'zeiss_progressive_lenses' };
  const onWa = (location: string) => () =>
    trackEvent('zeiss_whatsapp_click', { language: lang, location });

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faq[lang].map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  const WaLink = ({ location, className = '' }: { location: string; className?: string }) => (
    <a
      href={waHref}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onWa(location)}
      className={`inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white hover:border-[${ZEISS_BLUE}] text-gray-900 font-semibold px-6 py-3.5 text-sm tracking-wide transition-colors ${className}`}
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
        <link rel="canonical" href={`https://looptica.com/${lang}/services/zeiss-progressive-lenses`} />
        {(['ca','es','en','de'] as const).map((l) => (<link key={l} rel="alternate" hrefLang={l} href={`https://looptica.com/${l}/services/zeiss-progressive-lenses`} />))}
        <link rel="alternate" hrefLang="x-default" href={`https://looptica.com/ca/services/zeiss-progressive-lenses`} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Navbar />

      <main className="pt-16 md:pt-20 pb-20 md:pb-0 bg-white">
        {/* 1. Hero — editorial, ZEISS blue accent */}
        <section className="relative bg-[#0a0a0a] text-white overflow-hidden">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-stretch">
            <div className="px-6 lg:px-12 py-14 md:py-24 flex flex-col justify-center">
              <p className="text-xs font-semibold tracking-[0.25em] text-[#4d9fff] mb-5">{c.eyebrow[lang]}</p>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5">{c.h1[lang]}</h1>
              <p className="text-gray-300 text-base md:text-lg mb-8 max-w-md">{c.heroText[lang]}</p>
              <div>
                <GoogleCalendarButton
                  className="!bg-[#0057b8] hover:!bg-[#004a9e] text-white px-7 py-6 text-sm font-semibold tracking-wide w-full sm:w-auto whitespace-normal text-center h-auto"
                >
                  {c.heroCta[lang]}
                </GoogleCalendarButton>
              </div>
              <p className="text-xs text-gray-400 mt-8 tracking-wide">{c.heroTrust[lang]}</p>
            </div>
            <div className="relative min-h-[280px] md:min-h-[520px]">
              <img
                src={zeissHero}
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
            currentPath={'/services/zeiss-progressive-lenses'}
          />
        </div>

        {/* 2. Benefits */}
        <section className="px-6 lg:px-12 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">{c.benefitsH2[lang]}</h2>
            {c.benefitsText[lang].map((p) => (
              <p key={p} className="text-gray-600 text-base md:text-lg mb-4 max-w-3xl">{p}</p>
            ))}
            <div className="grid md:grid-cols-3 gap-10 mt-14">
              {c.benefits[lang].map(([t, d]) => (
                <div key={t} className="border-t-2 border-[#0057b8] pt-5">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{t}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Technology — dark editorial band */}
        <section className="bg-[#0a0a0a] text-white px-6 lg:px-12 py-16 md:py-24">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-6">{c.techH2[lang]}</h2>
              {c.techText[lang].map((p) => (
                <p key={p} className="text-gray-300 mb-4 leading-relaxed">{p}</p>
              ))}
              <div className="mt-8">
                <GoogleCalendarButton
                  className="!bg-[#0057b8] hover:!bg-[#004a9e] text-white px-7 py-6 text-sm font-semibold tracking-wide"
                >
                  {c.techCta[lang]}
                </GoogleCalendarButton>
              </div>
            </div>
            <img
              src={zeissLens}
              alt={c.lensAlt[lang]}
              width={1600}
              height={1067}
              loading="lazy"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </section>

        {/* 4. Advice */}
        <section className="px-6 lg:px-12 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">{c.adviceH2[lang]}</h2>
            {c.adviceText[lang].map((p) => (
              <p key={p} className="text-gray-600 text-base md:text-lg mb-4 max-w-3xl">{p}</p>
            ))}
            <Link
              to={`/${lang}/services/lens-consulting`}
              className="inline-block text-[#0057b8] font-semibold underline underline-offset-4 hover:no-underline"
            >
              {({ es: 'Más sobre nuestro asesoramiento de lentes →', ca: 'Més sobre el nostre assessorament de lents →', en: 'More about our lens consulting →', de: 'Mehr über unsere Brillenglasberatung →' } as L)[lang]}
            </Link>
            <ol className="grid md:grid-cols-3 gap-10 mt-14">
              {c.adviceSteps[lang].map(([t, d]) => (
                <li key={t} className="border-t border-gray-200 pt-5">
                  <h3 className="font-bold text-gray-900 mb-2">{t}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 5. Trust */}
        <section className="bg-gray-50 px-6 lg:px-12 py-16 md:py-24">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <img
              src="/images/_DSC4776.jpg"
              alt={c.storeAlt[lang]}
              loading="lazy"
              className="w-full h-72 md:h-96 object-cover rounded-lg shadow-lg"
            />
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">{c.trustH2[lang]}</h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">{c.trustText[lang]}</p>
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
                    <span className="text-[#0057b8] text-xl leading-none transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="text-gray-600 mt-4 leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Final CTA + contact */}
        <section className="bg-[#0a0a0a] text-white px-6 lg:px-12 py-16 md:py-24 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-5">{c.finalH2[lang]}</h2>
            <p className="text-gray-300 text-base md:text-lg mb-10">{c.finalText[lang]}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GoogleCalendarButton
                className="!bg-[#0057b8] hover:!bg-[#004a9e] text-white px-7 py-6 text-sm font-semibold tracking-wide"
              >
                {c.finalCta[lang]}
              </GoogleCalendarButton>
              <WaLink location="final" />
            </div>
          </div>
        </section>

        <StoreLocation />
      </main>

      {/* Discreet sticky mobile booking button */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-gray-200 p-2">
        <GoogleCalendarButton
          className="!bg-[#0057b8] hover:!bg-[#004a9e] text-white w-full py-5 text-sm font-semibold tracking-wide"
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

export default ZeissProgressive;
