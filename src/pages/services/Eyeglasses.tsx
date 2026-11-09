import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GoogleCalendarButton from '@/components/ui/GoogleCalendarButton';
import { Button } from '@/components/ui/button';
import BrandGallery, { BrandEntry } from '@/components/eyewear/BrandGallery';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/config/languages';

import kaleosCohen from '@/assets/eyewear/kaleos-cohen.webp.asset.json';
import kaleosAbbott from '@/assets/eyewear/kaleos-abbott.webp.asset.json';
import kaleosEarnshaw from '@/assets/eyewear/kaleos-earnshaw.webp.asset.json';
import woodysVerena from '@/assets/eyewear/woodys-verena.webp.asset.json';
import woodysMarant from '@/assets/eyewear/woodys-marant.webp.asset.json';
import woodysTina from '@/assets/eyewear/woodys-tina.webp.asset.json';
import etniaKore from '@/assets/eyewear/etnia-kore.webp.asset.json';
import etniaMao from '@/assets/eyewear/etnia-mao.webp.asset.json';
import etniaXylo from '@/assets/eyewear/etnia-xylo.webp.asset.json';
import look10442 from '@/assets/eyewear/look-10442.webp.asset.json';
import look04601 from '@/assets/eyewear/look-04601.webp.asset.json';
import look04675 from '@/assets/eyewear/look-04675.webp.asset.json';
import nanoReplay from '@/assets/eyewear/nano-replay.webp.asset.json';
import nanoQuest from '@/assets/eyewear/nano-quest.webp.asset.json';
import nanoReplayGlow from '@/assets/eyewear/nano-replayglow.webp.asset.json';
import polaroid2176 from '@/assets/eyewear/polaroid-2176.webp.asset.json';
import polaroid6256 from '@/assets/eyewear/polaroid-6256.webp.asset.json';
import polaroid7060 from '@/assets/eyewear/polaroid-7060.webp.asset.json';
import rayban5228 from '@/assets/eyewear/rayban-5228.webp.asset.json';
import rayban3447 from '@/assets/eyewear/rayban-3447.webp.asset.json';
import rayban7140 from '@/assets/eyewear/rayban-7140.webp.asset.json';

const models: Record<string, { name: string; src: string }[]> = {
  Kaleos: [
    { name: 'Cohen Black', src: kaleosCohen.url },
    { name: 'Abbott Spotted Havana', src: kaleosAbbott.url },
    { name: 'Earnshaw Crystal Nude', src: kaleosEarnshaw.url },
  ],
  Woodys: [
    { name: 'Verena', src: woodysVerena.url },
    { name: 'Marant', src: woodysMarant.url },
    { name: 'Tina', src: woodysTina.url },
  ],
  'Etnia Barcelona': [
    { name: 'Kore', src: etniaKore.url },
    { name: 'Mao', src: etniaMao.url },
    { name: 'Xylo', src: etniaXylo.url },
  ],
  LOOK: [
    { name: '10442 M8', src: look10442.url },
    { name: '04601 C3', src: look04601.url },
    { name: '04675 W1', src: look04675.url },
  ],
  'Nano Vista': [
    { name: 'Replay', src: nanoReplay.url },
    { name: 'Quest', src: nanoQuest.url },
    { name: 'Replay Glow', src: nanoReplayGlow.url },
  ],
  Polaroid: [
    { name: 'PLD 2176/S/X', src: polaroid2176.url },
    { name: 'PLD 6256/S/X', src: polaroid6256.url },
    { name: 'PLD 7060/S', src: polaroid7060.url },
  ],
  'Ray-Ban': [
    { name: 'RB5228', src: rayban5228.url },
    { name: 'Round Metal RB3447V', src: rayban3447.url },
    { name: 'RB7140', src: rayban7140.url },
  ],
};

type BrandText = { brand: string; tagline: string; description: string; badge?: string };
type PageText = {
  title: string; subtitle: string; intro: string[]; heroCta: string;
  brandsTitle: string; brandsIntro: string; enlarge: string; galleryNote: string; brands: BrandText[];
  sportTitle: string; sportLead: string; sportText: string[]; sportListIntro: string; sportList: [string, string][]; sportOutro: string; sportCta: string;
  stepsTitle: string; stepsIntro: string; stepsLead: string; steps: [string, string][];
  lensTitle: string; lensLead: string; lensListIntro: string; lensList: [string, string][]; lensCta: string;
  visitTitle: string; visitText: string[]; visitCta: string;
};

const T: Record<Language, PageText> = {
  ca: {
    title: 'Ulleres graduades i muntures a Poblenou',
    subtitle: "Troba unes ulleres que t'agradin, et quedin bé i siguin còmodes cada dia.",
    intro: [
      "A Looptica seleccionem marques d'ulleres que combinen disseny, qualitat i comoditat. Des de muntures originals i plenes de color fins a models clàssics, lleugers o especialment pensats per als més petits.",
      "Vine a la nostra òptica de la Rambla del Poblenou i descobreix les nostres col·leccions.",
    ],
    heroCta: "Vine a provar-te les nostres ulleres",
    brandsTitle: "Les nostres marques d'ulleres",
    brandsIntro: "Treballem amb marques que ofereixen estils i característiques diferents, perquè cadascú pugui trobar unes ulleres que encaixin amb la seva personalitat i les seves necessitats.",
    enlarge: 'Amplia la foto',
    galleryNote: "Models de referència de cada marca. Consulta'ns la disponibilitat a la botiga.",
    brands: [
      { brand: 'Kaleos', tagline: 'Disseny contemporani amb personalitat.', description: "Muntures que destaquen per les formes originals, les combinacions de materials i una estètica actual. Una proposta per a qui busca unes ulleres de disseny que no passin desapercebudes." },
      { brand: 'Woodys', tagline: 'Color, elegància i detalls que marquen la diferència.', description: "Una marca que combina disseny contemporani, colors treballats i formes sofisticades. Ideal per a qui vol unes ulleres amb personalitat, sense renunciar a l'elegància." },
      { brand: 'Etnia Barcelona', tagline: 'Creativitat i color amb caràcter barceloní.', description: "Inspirades en l'art i la cultura, les muntures d'Etnia Barcelona destaquen per l'ús del color i les seves combinacions originals. Des de models discrets fins a propostes més atrevides." },
      { brand: 'LOOK', tagline: 'Disseny italià, lleugeresa i funcionalitat.', description: "Muntures que combinen materials tècnics, comoditat i una estètica cuidada. Una alternativa interessant per a qui busca unes ulleres lleugeres i pràctiques per al dia a dia." },
      { brand: 'Nano Vista', badge: 'Infantil', tagline: 'Ulleres infantils preparades per seguir el seu ritme.', description: "Muntures especialment pensades per a nadons, nens i adolescents. Flexibles, resistents i amb sistemes de subjecció adaptats a les necessitats dels més petits." },
      { brand: 'Polaroid', badge: 'Sol', tagline: "Ulleres de sol polaritzades per gaudir de l'exterior.", description: "Models pràctics i actuals que combinen estil i protecció solar. Les lents polaritzades ajuden a reduir els reflexos molestos en situacions quotidianes com conduir o passejar." },
      { brand: 'Ray-Ban', tagline: 'Clàssics que mai passen de moda.', description: "Una de les marques més reconegudes del món de les ulleres. Dissenys icònics i versàtils, disponibles en diferents estils tant per a ulleres graduades com de sol." },
    ],
    sportTitle: 'Ulleres esportives: comoditat i visió en moviment',
    sportLead: "Unes bones ulleres esportives han d'adaptar-se a tu i a l'activitat que practiques.",
    sportText: [
      "Quan corres, vas en bicicleta, fas senderisme o practiques activitats a l'aire lliure, les necessitats visuals són diferents de les del dia a dia.",
      "Les ulleres esportives poden oferir una millor subjecció, un camp de visió ampli i protecció davant del sol, el vent i altres factors ambientals, segons el model.",
    ],
    sportListIntro: "A Looptica t'assessorem per trobar la solució més adequada tenint en compte:",
    sportList: [
      ['Subjecció i estabilitat', 'muntures que es mantinguin ben col·locades durant el moviment.'],
      ['Lleugeresa i comoditat', 'materials i formes adaptats a un ús prolongat.'],
      ['Protecció solar', "lents amb protecció UV per a activitats a l'exterior."],
      ['Lents polaritzades', 'per reduir els reflexos en determinades situacions.'],
      ['Graduació personalitzada', "possibilitat d'incorporar lents graduades en els models compatibles."],
    ],
    sportOutro: "Cada esport té unes necessitats diferents. T'ajudem a valorar les opcions disponibles segons la teva activitat i graduació.",
    sportCta: "Consulta'ns les opcions d'ulleres esportives",
    stepsTitle: "No totes les ulleres queden igual. T'ajudem a trobar les teves.",
    stepsIntro: "Escollir unes ulleres no és només una qüestió d'estil. La forma de la cara, la graduació, el pes de la muntura i l'ús que en faràs influeixen en la comoditat i el resultat final.",
    stepsLead: "A Looptica t'ajudem en tres passos:",
    steps: [
      ["T'escoltem", 'Ens expliques què busques, quin estil t\'agrada i en quines situacions utilitzes les ulleres.'],
      ["T'ajudem a escollir", "Et recomanem muntures que s'adaptin al teu rostre, a la teva graduació i a les teves preferències. Pots provar-te diferents models i comparar-los amb tranquil·litat."],
      ['Les adaptem a tu', 'Prenem les mesures necessàries per al muntatge de les lents i ajustem la muntura perquè sigui còmoda i quedi ben col·locada.'],
    ],
    lensTitle: 'La muntura és important. Les lents també.',
    lensLead: 'Unes bones ulleres combinen una muntura adequada amb unes lents ben escollides.',
    lensListIntro: 'T\'assessorem segons la teva graduació i les activitats que fas habitualment:',
    lensList: [
      ['Lents monofocals', 'per corregir la visió de lluny o de prop.'],
      ['Lents progressives', 'per veure-hi a diferents distàncies amb unes mateixes ulleres.'],
      ['Lents per a ordinador', 'adaptades a les distàncies habituals de treball.'],
      ['Lents de control de miopia infantil', 'dissenyades per ajudar a alentir la progressió de la miopia en nens.'],
      ['Lents solars graduades', "per gaudir de l'exterior amb la correcció visual necessària."],
    ],
    lensCta: 'Descobreix les nostres lents i serveis visuals',
    visitTitle: 'Vine a descobrir les nostres ulleres al Poblenou',
    visitText: [
      'Hi ha ulleres que cal veure i provar-se per saber si són les adequades.',
      "T'esperem a Looptica, a la Rambla del Poblenou, 48, perquè puguis descobrir les nostres marques, provar-te diferents muntures i trobar les que millor encaixin amb tu.",
    ],
    visitCta: 'Demana cita',
  },
  es: {
    title: 'Gafas graduadas y monturas en Poblenou',
    subtitle: 'Encuentra unas gafas que te gusten, te sienten bien y sean cómodas cada día.',
    intro: [
      'En Looptica seleccionamos marcas de gafas que combinan diseño, calidad y comodidad. Desde monturas originales y llenas de color hasta modelos clásicos, ligeros o especialmente pensados para los más pequeños.',
      'Ven a nuestra óptica de la Rambla del Poblenou y descubre nuestras colecciones.',
    ],
    heroCta: 'Ven a probarte nuestras gafas',
    brandsTitle: 'Nuestras marcas de gafas',
    brandsIntro: 'Trabajamos con marcas que ofrecen diferentes estilos y características, para que cada persona pueda encontrar unas gafas que encajen con su personalidad y sus necesidades.',
    enlarge: 'Ampliar la foto',
    galleryNote: 'Modelos de referencia de cada marca. Consúltanos la disponibilidad en tienda.',
    brands: [
      { brand: 'Kaleos', tagline: 'Diseño contemporáneo con personalidad.', description: 'Monturas que destacan por sus formas originales, combinaciones de materiales y una estética actual. Una propuesta para quienes buscan unas gafas de diseño que no pasen desapercibidas.' },
      { brand: 'Woodys', tagline: 'Color, elegancia y detalles que marcan la diferencia.', description: 'Una marca que combina diseño contemporáneo, colores cuidadosamente seleccionados y formas sofisticadas. Ideal para quienes quieren unas gafas con personalidad, sin renunciar a la elegancia.' },
      { brand: 'Etnia Barcelona', tagline: 'Creatividad y color con carácter barcelonés.', description: 'Inspiradas en el arte y la cultura, las monturas de Etnia Barcelona destacan por el uso del color y sus combinaciones originales. Desde modelos discretos hasta propuestas más atrevidas.' },
      { brand: 'LOOK', tagline: 'Diseño italiano, ligereza y funcionalidad.', description: 'Monturas que combinan materiales técnicos, comodidad y una estética cuidada. Una alternativa interesante para quienes buscan unas gafas ligeras y prácticas para el día a día.' },
      { brand: 'Nano Vista', badge: 'Infantil', tagline: 'Gafas infantiles preparadas para seguir su ritmo.', description: 'Monturas especialmente pensadas para bebés, niños y adolescentes. Flexibles, resistentes y con sistemas de sujeción adaptados a las necesidades de los más pequeños.' },
      { brand: 'Polaroid', badge: 'Sol', tagline: 'Gafas de sol polarizadas para disfrutar del exterior.', description: 'Modelos prácticos y actuales que combinan estilo y protección solar. Las lentes polarizadas ayudan a reducir los reflejos molestos en situaciones cotidianas como conducir o pasear.' },
      { brand: 'Ray-Ban', tagline: 'Clásicos que nunca pasan de moda.', description: 'Una de las marcas más reconocidas del mundo de las gafas. Diseños icónicos y versátiles, disponibles en diferentes estilos tanto para gafas graduadas como de sol.' },
    ],
    sportTitle: 'Gafas deportivas: comodidad y visión en movimiento',
    sportLead: 'Unas buenas gafas deportivas deben adaptarse a ti y a la actividad que practicas.',
    sportText: [
      'Cuando corres, vas en bicicleta, haces senderismo o practicas actividades al aire libre, tus necesidades visuales son diferentes a las del día a día.',
      'Las gafas deportivas pueden ofrecer una mejor sujeción, un campo de visión amplio y protección frente al sol, el viento y otros factores ambientales, según el modelo.',
    ],
    sportListIntro: 'En Looptica te asesoramos para encontrar la solución más adecuada teniendo en cuenta:',
    sportList: [
      ['Sujeción y estabilidad', 'monturas que se mantengan bien colocadas durante el movimiento.'],
      ['Ligereza y comodidad', 'materiales y formas adaptados a un uso prolongado.'],
      ['Protección solar', 'lentes con protección UV para actividades al aire libre.'],
      ['Lentes polarizadas', 'para reducir los reflejos en determinadas situaciones.'],
      ['Graduación personalizada', 'posibilidad de incorporar lentes graduadas en los modelos compatibles.'],
    ],
    sportOutro: 'Cada deporte tiene unas necesidades diferentes. Te ayudamos a valorar las opciones disponibles según tu actividad y graduación.',
    sportCta: 'Consúltanos las opciones de gafas deportivas',
    stepsTitle: 'No todas las gafas sientan igual. Te ayudamos a encontrar las tuyas.',
    stepsIntro: 'Elegir unas gafas no es solo una cuestión de estilo. La forma de la cara, la graduación, el peso de la montura y el uso que les darás influyen en la comodidad y el resultado final.',
    stepsLead: 'En Looptica te ayudamos en tres pasos:',
    steps: [
      ['Te escuchamos', 'Nos explicas qué buscas, qué estilo te gusta y en qué situaciones utilizas las gafas.'],
      ['Te ayudamos a elegir', 'Te recomendamos monturas que se adapten a tu rostro, a tu graduación y a tus preferencias. Puedes probarte diferentes modelos y compararlos con tranquilidad.'],
      ['Las adaptamos a ti', 'Tomamos las medidas necesarias para el montaje de las lentes y ajustamos la montura para que resulte cómoda y quede bien colocada.'],
    ],
    lensTitle: 'La montura es importante. Las lentes también.',
    lensLead: 'Unas buenas gafas combinan una montura adecuada con unas lentes bien elegidas.',
    lensListIntro: 'Te asesoramos según tu graduación y las actividades que realizas habitualmente:',
    lensList: [
      ['Lentes monofocales', 'para corregir la visión de lejos o de cerca.'],
      ['Lentes progresivas', 'para ver a diferentes distancias con unas mismas gafas.'],
      ['Lentes para ordenador', 'adaptadas a las distancias habituales de trabajo.'],
      ['Lentes de control de miopía infantil', 'diseñadas para ayudar a frenar la progresión de la miopía en niños.'],
      ['Lentes solares graduadas', 'para disfrutar del exterior con la corrección visual necesaria.'],
    ],
    lensCta: 'Descubre nuestras lentes y servicios visuales',
    visitTitle: 'Ven a descubrir nuestras gafas en Poblenou',
    visitText: [
      'Hay gafas que hay que ver y probarse para saber si son las adecuadas.',
      'Te esperamos en Looptica, en la Rambla del Poblenou, 48, para que puedas descubrir nuestras marcas, probarte diferentes monturas y encontrar las que mejor encajen contigo.',
    ],
    visitCta: 'Pide cita',
  },
  en: {
    title: 'Prescription Glasses and Eyewear Brands in Poblenou, Barcelona',
    subtitle: 'Find glasses that suit your style, fit comfortably and feel great every day.',
    intro: [
      'At Looptica, we carefully select eyewear brands that combine design, quality and comfort. From distinctive, colourful frames to classic, lightweight styles and collections specially designed for children.',
      'Visit our optical store on Rambla del Poblenou and explore our collections.',
    ],
    heroCta: 'Come and Try Our Glasses',
    brandsTitle: 'Our Eyewear Brands',
    brandsIntro: 'We work with brands offering a wide range of styles and features, helping everyone find glasses that reflect their personality and meet their individual needs.',
    enlarge: 'Enlarge photo',
    galleryNote: 'Reference models from each brand. Ask us about in-store availability.',
    brands: [
      { brand: 'Kaleos', tagline: 'Contemporary design with personality.', description: 'Frames featuring distinctive shapes, creative material combinations and a modern aesthetic. An excellent choice for anyone looking for designer eyewear that stands out.' },
      { brand: 'Woodys', tagline: 'Colour, elegance and distinctive details.', description: 'A brand that combines contemporary design, carefully chosen colours and sophisticated shapes. Ideal for those who want eyewear with personality without compromising on elegance.' },
      { brand: 'Etnia Barcelona', tagline: 'Creativity and colour with a Barcelona spirit.', description: 'Inspired by art and culture, Etnia Barcelona frames are known for their creative use of colour and distinctive combinations. From understated designs to bold statement pieces.' },
      { brand: 'LOOK', tagline: 'Italian design, lightweight comfort and functionality.', description: 'Frames combining innovative materials, comfort and refined aesthetics. A great option for anyone looking for lightweight, practical glasses for everyday wear.' },
      { brand: 'Nano Vista', badge: 'Kids', tagline: "Children's glasses designed to keep up with them.", description: 'Frames specially designed for babies, children and teenagers. Flexible, durable and equipped with fitting features adapted to the needs of younger wearers.' },
      { brand: 'Polaroid', badge: 'Sun', tagline: 'Polarised sunglasses for enjoying the outdoors.', description: 'Practical, contemporary designs combining style and sun protection. Polarised lenses help reduce distracting reflections during everyday activities such as driving or walking.' },
      { brand: 'Ray-Ban', tagline: 'Timeless classics that never go out of style.', description: "One of the world's most recognisable eyewear brands. Iconic, versatile designs available in a variety of styles, both as prescription glasses and sunglasses." },
    ],
    sportTitle: 'Sports Glasses: Comfort and Clear Vision on the Move',
    sportLead: 'The right sports eyewear should suit both you and your activity.',
    sportText: [
      'Whether you enjoy running, cycling, hiking or other outdoor activities, your visual needs can be different from those of everyday life.',
      'Depending on the model, sports glasses can provide a more secure fit, a wider field of vision and protection from sunlight, wind and other environmental factors.',
    ],
    sportListIntro: 'At Looptica, we help you find a suitable option by considering:',
    sportList: [
      ['Secure fit and stability', 'frames designed to stay comfortably in place during movement.'],
      ['Lightweight comfort', 'materials and shapes suitable for extended wear.'],
      ['Sun protection', 'lenses with UV protection for outdoor activities.'],
      ['Polarised lenses', 'to reduce glare in certain conditions.'],
      ['Prescription options', 'the possibility of fitting prescription lenses in compatible frames.'],
    ],
    sportOutro: 'Different sports call for different features. We can help you explore the available options based on your activity and prescription.',
    sportCta: 'Ask Us About Sports Eyewear',
    stepsTitle: "Not All Glasses Fit the Same. We'll Help You Find Yours.",
    stepsIntro: 'Choosing glasses is about more than style. Your face shape, prescription, frame weight and intended use all influence comfort and the final result.',
    stepsLead: 'At Looptica, we guide you through three simple steps:',
    steps: [
      ['We Listen', "Tell us what you're looking for, which styles you like and how you use your glasses in everyday life."],
      ['We Help You Choose', 'We recommend frames that suit your face, prescription and personal preferences. You can try on different styles and compare them at your own pace.'],
      ['We Fit Them to You', 'We take the measurements needed to fit your lenses correctly and adjust the frames to ensure a comfortable, secure fit.'],
    ],
    lensTitle: 'Frames Matter. So Do the Lenses.',
    lensLead: 'Great glasses combine the right frames with the right lenses.',
    lensListIntro: 'We help you choose lenses according to your prescription and everyday activities:',
    lensList: [
      ['Single-vision lenses', 'to correct distance or near vision.'],
      ['Progressive lenses', 'to provide clear vision at different distances with one pair of glasses.'],
      ['Computer lenses', 'designed for common working distances.'],
      ["Children's myopia control lenses", 'designed to help slow the progression of myopia in children.'],
      ['Prescription sunglass lenses', 'for enjoying outdoor activities with the vision correction you need.'],
    ],
    lensCta: 'Explore Our Lenses and Eye Care Services',
    visitTitle: 'Discover Our Eyewear Collections in Poblenou',
    visitText: [
      "Some glasses need to be seen and tried on to find out if they're the right fit.",
      'Visit Looptica at Rambla del Poblenou, 48, to explore our brands, try on different frames and find the pair that suits you best.',
    ],
    visitCta: 'Book an Appointment',
  },
  de: {
    title: 'Brillen und Brillenmarken in Poblenou, Barcelona',
    subtitle: 'Entdecken Sie Brillen, die zu Ihrem Stil passen, gut sitzen und jeden Tag bequem sind.',
    intro: [
      'Bei Looptica wählen wir Brillenmarken aus, die Design, Qualität und Tragekomfort miteinander verbinden. Von außergewöhnlichen, farbenfrohen Fassungen über klassische, leichte Modelle bis hin zu Kollektionen speziell für Kinder.',
      'Besuchen Sie unser Optikgeschäft an der Rambla del Poblenou und entdecken Sie unsere Kollektionen.',
    ],
    heroCta: 'Unsere Brillen anprobieren',
    brandsTitle: 'Unsere Brillenmarken',
    brandsIntro: 'Wir führen Marken mit unterschiedlichen Stilrichtungen und Eigenschaften, damit jeder eine Brille finden kann, die zur eigenen Persönlichkeit und den individuellen Bedürfnissen passt.',
    enlarge: 'Foto vergrößern',
    galleryNote: 'Referenzmodelle der einzelnen Marken. Fragen Sie uns nach der Verfügbarkeit im Geschäft.',
    brands: [
      { brand: 'Kaleos', tagline: 'Modernes Design mit Persönlichkeit.', description: 'Brillenfassungen mit außergewöhnlichen Formen, kreativen Materialkombinationen und einer zeitgemäßen Ästhetik. Eine attraktive Wahl für alle, die eine Designerbrille suchen, die auffällt.' },
      { brand: 'Woodys', tagline: 'Farbe, Eleganz und besondere Details.', description: 'Eine Marke, die modernes Design, sorgfältig abgestimmte Farben und raffinierte Formen miteinander verbindet. Ideal für alle, die eine Brille mit Charakter suchen, ohne auf Eleganz zu verzichten.' },
      { brand: 'Etnia Barcelona', tagline: 'Kreativität und Farbe mit dem Charakter Barcelonas.', description: 'Inspiriert von Kunst und Kultur zeichnen sich die Fassungen von Etnia Barcelona durch ihre kreative Farbgestaltung und originellen Kombinationen aus. Von dezenten Modellen bis hin zu ausdrucksstarken Designs.' },
      { brand: 'LOOK', tagline: 'Italienisches Design, Leichtigkeit und Funktionalität.', description: 'Brillenfassungen, die innovative Materialien, hohen Tragekomfort und eine anspruchsvolle Gestaltung verbinden. Eine interessante Wahl für alle, die eine leichte und praktische Alltagsbrille suchen.' },
      { brand: 'Nano Vista', badge: 'Kinder', tagline: 'Kinderbrillen, die mit jedem Abenteuer mithalten.', description: 'Speziell für Babys, Kinder und Jugendliche entwickelte Fassungen. Flexibel, widerstandsfähig und mit Haltesystemen ausgestattet, die auf die Bedürfnisse junger Brillenträger abgestimmt sind.' },
      { brand: 'Polaroid', badge: 'Sonne', tagline: 'Polarisierte Sonnenbrillen für unbeschwerte Stunden im Freien.', description: 'Praktische, moderne Modelle, die Stil und Sonnenschutz miteinander verbinden. Polarisierte Gläser helfen, störende Reflexionen bei alltäglichen Aktivitäten wie Autofahren oder Spaziergängen zu reduzieren.' },
      { brand: 'Ray-Ban', tagline: 'Zeitlose Klassiker, die nie aus der Mode kommen.', description: 'Eine der weltweit bekanntesten Brillenmarken. Ikonische und vielseitige Designs in unterschiedlichen Stilrichtungen, sowohl als Korrektionsbrillen als auch als Sonnenbrillen erhältlich.' },
    ],
    sportTitle: 'Sportbrillen: Komfort und gutes Sehen in Bewegung',
    sportLead: 'Die richtige Sportbrille sollte zu Ihnen und Ihrer Sportart passen.',
    sportText: [
      'Ob beim Laufen, Radfahren, Wandern oder bei anderen Outdoor-Aktivitäten: Die Anforderungen an Ihre Brille können sich deutlich von denen im Alltag unterscheiden.',
      'Je nach Modell bieten Sportbrillen einen besonders sicheren Sitz, ein weites Sichtfeld und Schutz vor Sonne, Wind und weiteren Umwelteinflüssen.',
    ],
    sportListIntro: 'Bei Looptica beraten wir Sie bei der Auswahl und berücksichtigen dabei:',
    sportList: [
      ['Sicherer Halt und Stabilität', 'Fassungen, die auch bei Bewegung gut sitzen.'],
      ['Leichtigkeit und Komfort', 'Materialien und Formen für längere Tragezeiten.'],
      ['Sonnenschutz', 'Gläser mit UV-Schutz für Aktivitäten im Freien.'],
      ['Polarisierte Gläser', 'zur Verringerung störender Reflexionen in bestimmten Situationen.'],
      ['Individuelle Sehstärke', 'die Möglichkeit, geeignete Sportbrillenfassungen mit Korrektionsgläsern auszustatten.'],
    ],
    sportOutro: 'Jede Sportart stellt unterschiedliche Anforderungen. Wir helfen Ihnen, die verfügbaren Möglichkeiten entsprechend Ihrer Aktivität und Sehstärke zu beurteilen.',
    sportCta: 'Beratung zu Sportbrillen anfragen',
    stepsTitle: 'Nicht jede Brille sitzt gleich gut. Wir helfen Ihnen, die richtige zu finden.',
    stepsIntro: 'Bei der Auswahl einer Brille geht es um mehr als nur um Stil. Gesichtsform, Sehstärke, Gewicht der Fassung und Verwendungszweck beeinflussen den Tragekomfort und das Ergebnis.',
    stepsLead: 'Bei Looptica begleiten wir Sie in drei Schritten:',
    steps: [
      ['Wir hören Ihnen zu', 'Sie erzählen uns, was Sie suchen, welche Stilrichtungen Ihnen gefallen und in welchen Situationen Sie Ihre Brille tragen.'],
      ['Wir helfen Ihnen bei der Auswahl', 'Wir empfehlen Fassungen, die zu Ihrem Gesicht, Ihrer Sehstärke und Ihren persönlichen Vorlieben passen. Sie können verschiedene Modelle in Ruhe anprobieren und vergleichen.'],
      ['Wir passen Ihre Brille individuell an', 'Wir nehmen die notwendigen Messungen für die korrekte Einarbeitung der Brillengläser vor und passen die Fassung so an, dass sie bequem und sicher sitzt.'],
    ],
    lensTitle: 'Die Fassung ist wichtig. Die Brillengläser auch.',
    lensLead: 'Eine gute Brille verbindet eine passende Fassung mit sorgfältig ausgewählten Brillengläsern.',
    lensListIntro: 'Wir beraten Sie entsprechend Ihrer Sehstärke und Ihren täglichen Aktivitäten:',
    lensList: [
      ['Einstärkengläser', 'zur Korrektur des Sehens in der Ferne oder Nähe.'],
      ['Gleitsichtgläser', 'für klares Sehen in unterschiedlichen Entfernungen mit einer einzigen Brille.'],
      ['Bildschirmarbeitsplatzgläser', 'angepasst an typische Sehentfernungen am Arbeitsplatz.'],
      ['Brillengläser zur Myopiekontrolle bei Kindern', 'entwickelt, um das Fortschreiten der Kurzsichtigkeit bei Kindern zu verlangsamen.'],
      ['Sonnenbrillengläser mit Sehstärke', 'für Aktivitäten im Freien mit der benötigten Sehkorrektur.'],
    ],
    lensCta: 'Unsere Brillengläser und Sehdienstleistungen entdecken',
    visitTitle: 'Entdecken Sie unsere Brillenkollektionen in Poblenou',
    visitText: [
      'Manche Brillen muss man sehen und anprobieren, um herauszufinden, ob sie wirklich passen.',
      'Besuchen Sie Looptica an der Rambla del Poblenou, 48. Entdecken Sie unsere Marken, probieren Sie verschiedene Fassungen an und finden Sie die Brille, die am besten zu Ihnen passt.',
    ],
    visitCta: 'Termin vereinbaren',
  },
};

// SEO title and description are unchanged from the previous version of this page.
const meta: Record<Language, { title: string; description: string }> = {
  en: { title: 'Prescription glasses in Poblenou, Barcelona | looptica', description: 'Prescription glasses in Poblenou, Barcelona: designer frames, progressive and anti-fatigue lenses. Eye exam included and expert advice at looptica.' },
  es: { title: 'Gafas graduadas en Poblenou, Barcelona | looptica', description: 'Gafas graduadas en Poblenou, Barcelona: monturas de diseño, lentes progresivas y antifatiga. Examen visual incluido y asesoramiento experto en looptica.' },
  ca: { title: 'Ulleres graduades a Poblenou, Barcelona | looptica', description: 'Ulleres graduades a Poblenou, Barcelona: muntures de disseny, lents progressives i antifatiga. Examen visual inclòs i assessorament expert a looptica.' },
  de: { title: 'Brillen in Poblenou, Barcelona | looptica', description: 'Brillen mit Sehstärke in Poblenou, Barcelona: Designerfassungen, Gleitsicht- und Entspannungsgläser. Sehtest inklusive und Expertenberatung bei looptica.' },
};

const appointmentSubject: Record<Language, string> = {
  en: 'Eyeglasses Consultation at looptica',
  es: 'Consulta de Gafas en looptica',
  ca: "Consulta d'Ulleres a looptica",
  de: 'Brillenberatung bei looptica',
};

const BoldList = ({ items }: { items: [string, string][] }) => (
  <ul className="space-y-2 list-disc pl-6">
    {items.map(([b, t]) => (
      <li key={b}><strong>{b}:</strong> {t}</li>
    ))}
  </ul>
);

const Eyeglasses = () => {
  const { language } = useLanguage();
  const lang = (language as Language) in T ? (language as Language) : 'ca';
  const c = T[lang];
  const subject = appointmentSubject[lang];
  const brands: BrandEntry[] = c.brands.map((b) => ({ ...b, models: models[b.brand] }));

  return (
    <>
      <Helmet>
        <title>{meta[lang].title}</title>
        <meta name="description" content={meta[lang].description} />
        <meta property="og:title" content={meta[lang].title} />
        <meta property="og:description" content={meta[lang].description} />
      </Helmet>
      <ServiceLayout
        title={c.title}
        subtitle={c.subtitle}
        image="/lovable-uploads/45087a9c-489a-4d48-82fb-d857e7bf306a.png"
        appointmentSubject={subject}
        hideCTA
      >
        <ScrollReveal>
          <div className="prose prose-lg max-w-none mb-8">
            {c.intro.map((p) => <p key={p}>{p}</p>)}
          </div>
          <div className="mb-16">
            <GoogleCalendarButton subject={subject}>{c.heroCta}</GoogleCalendarButton>
          </div>
        </ScrollReveal>

        <section className="mb-16" aria-labelledby="brands-title">
          <h2 id="brands-title" className="text-3xl font-semibold mb-4">{c.brandsTitle}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl">{c.brandsIntro}</p>
          <BrandGallery brands={brands} enlargeLabel={c.enlarge} />
          <p className="mt-6 text-sm text-muted-foreground">{c.galleryNote}</p>
        </section>

        <ScrollReveal>
          <section className="bg-muted p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-semibold mb-4">{c.sportTitle}</h2>
            <p className="text-lg font-medium mb-4">{c.sportLead}</p>
            {c.sportText.map((p) => <p key={p} className="mb-4">{p}</p>)}
            <p className="mb-3">{c.sportListIntro}</p>
            <BoldList items={c.sportList} />
            <p className="mt-4 mb-6">{c.sportOutro}</p>
            <GoogleCalendarButton subject={subject}>{c.sportCta}</GoogleCalendarButton>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-4">{c.stepsTitle}</h2>
            <p className="mb-4">{c.stepsIntro}</p>
            <p className="mb-6 font-medium">{c.stepsLead}</p>
            <ol className="grid gap-6 md:grid-cols-3">
              {c.steps.map(([title, text], i) => (
                <li key={title} className="bg-card p-6 rounded-lg shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold mb-4">{i + 1}</span>
                  <h3 className="text-xl font-medium mb-2">{title}</h3>
                  <p className="text-muted-foreground">{text}</p>
                </li>
              ))}
            </ol>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-4">{c.lensTitle}</h2>
            <p className="mb-4">{c.lensLead}</p>
            <p className="mb-3">{c.lensListIntro}</p>
            <BoldList items={c.lensList} />
            <Button asChild variant="outline" className="mt-6">
              <Link to={`/${lang}/services/lens-consulting`}>
                {c.lensCta} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="bg-primary/10 p-8 rounded-lg mb-12 text-center">
            <h2 className="text-3xl font-semibold mb-4">{c.visitTitle}</h2>
            {c.visitText.map((p) => <p key={p} className="mb-4 max-w-2xl mx-auto">{p}</p>)}
            <div className="my-6">
              <GoogleCalendarButton subject={subject}>{c.visitCta}</GoogleCalendarButton>
            </div>
            <p className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" /> Looptica · Rambla del Poblenou, 48 · 08005 Barcelona
            </p>
            <p className="flex items-center justify-center gap-2 text-muted-foreground mt-1">
              <Phone className="h-4 w-4" /> <a href="tel:+34933009064" className="hover:text-primary">933 00 90 64</a>
            </p>
          </section>
        </ScrollReveal>
      </ServiceLayout>
    </>
  );
};

export default Eyeglasses;
