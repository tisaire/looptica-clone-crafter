import React from 'react';
import ServiceLayout from '@/components/layout/ServiceLayout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GoogleCalendarButton from '@/components/ui/GoogleCalendarButton';
import StoreLocation from '@/components/home/StoreLocation';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Language } from '@/config/languages';
import heroAsset from '@/assets/lents-multifocals-hero.jpg.asset.json';
import { Eye, Search, Glasses, RefreshCw, CalendarCheck, Monitor, Contact, BadgeCheck } from 'lucide-react';

type Copy = {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  breadcrumbLabel: string;
  parentCrumb: string;
  appointmentSubject: string;
  introParagraph: string;
  ctaPrimary: string;
  ctaSecondary: string;
  authorityTitle: string;
  authorityIntro: string;
  authorityFactors: string[];
  authorityMessage: string;
  audienceTitle: string;
  audience: { title: string; text: string }[];
  processTitle: string;
  processSteps: { title: string; text: string }[];
  comparisonTitle: string;
  comparisonIntro: string;
  comparisonColumns: [string, string, string];
  comparisonRows: [string, string, string][];
  comparisonNote: string;
  typesTitle: string;
  typesIntro: string;
  types: string[];
  typesMessage: string;
  specialistTitle: string;
  specialistParagraphs: string[];
  specialistCredentials: string;
  specialistLink: string;
  faqTitle: string;
  faqs: { q: string; a: string }[];
  localTitle: string;
  localText: string;
  relatedText: React.ReactNode;
};

const LentsContacteMultifocals = () => {
  const { language } = useLanguage();

  const link = (path: string, label: string) => (
    <Link to={`/${language}${path}`} className="text-[#55afa9] underline font-medium">
      {label}
    </Link>
  );

  const copy: Record<Language, Copy> = {
    ca: {
      metaTitle: 'Lents de Contacte Multifocals Barcelona | Presbícia · Looptica',
      metaDescription:
        "Adaptació personalitzada de lents de contacte multifocals i progressives a Barcelona. Estudi visual, proves i seguiment a Looptica Poblenou. Demana cita.",
      heroTitle: 'Lents de contacte multifocals a Barcelona',
      heroSubtitle: 'Veure de lluny i de prop sense dependre de les ulleres',
      breadcrumbLabel: 'Lents multifocals',
      parentCrumb: 'Lents de contacte',
      appointmentSubject: "Adaptació de lents de contacte multifocals a Looptica",
      introParagraph:
        "A Looptica fem adaptacions personalitzades de lents de contacte multifocals per a persones amb presbícia. Tenim en compte la teva graduació, les teves necessitats visuals i com utilitzes la vista cada dia per proposar-te el disseny que t'encaixi millor.",
      ctaPrimary: 'Demana cita',
      ctaSecondary: "Com funciona l'adaptació?",
      authorityTitle: 'No totes les lents multifocals funcionen igual',
      authorityIntro:
        "Una lent de contacte multifocal no es tria només per la graduació. Cada disseny reparteix la visió de manera diferent, i per això l'adaptació pot requerir valorar:",
      authorityFactors: [
        'visió de lluny',
        'visió intermèdia',
        'visió de prop',
        'ull dominant',
        'graduació',
        "astigmatisme, si n'hi ha",
        'necessitats visuals quotidianes',
        'comoditat',
        'resposta als diferents dissenys de lent',
      ],
      authorityMessage:
        "L'objectiu no és simplement donar-te unes lents multifocals, sinó trobar la combinació que millor s'adapti a la teva visió i al teu dia a dia.",
      audienceTitle: 'Per a qui són?',
      audience: [
        {
          title: 'Utilitzes ulleres progressives',
          text: 'I vols poder fer determinades activitats sense dependre de les ulleres.',
        },
        {
          title: 'Ja utilitzes lents de contacte',
          text: 'Però la presbícia comença a dificultar-te la lectura o la visió de prop.',
        },
        {
          title: 'Ja has provat lents multifocals',
          text: "Però el resultat no ha estat satisfactori i vols valorar altres opcions o ajustos.",
        },
        {
          title: 'Necessites lluny + ordinador + prop',
          text: 'I busques un equilibri raonable entre les diferents distàncies al llarg del dia.',
        },
      ],
      processTitle: 'Com adaptem les lents multifocals a Looptica',
      processSteps: [
        {
          title: 'Estudiem la teva visió',
          text: 'Graduació, visió de prop, intermèdia i de lluny, ull dominant i necessitats visuals del teu dia a dia.',
        },
        {
          title: 'Seleccionem la lent',
          text: 'Escollim disseny, material, addició i paràmetres inicials a partir de la valoració.',
        },
        {
          title: 'Provem i ajustem',
          text: 'Comprovem com hi veus realment amb les lents posades i fem els ajustos que calgui.',
        },
        {
          title: 'Seguiment',
          text: "Revisem visió, comoditat i comportament de les lents durant tot el procés d'adaptació.",
        },
      ],
      comparisonTitle: 'Ulleres progressives vs lents de contacte multifocals',
      comparisonIntro:
        'Són solucions diferents, no millors ni pitjors. Aquesta comparació ajuda a entendre què aporta cada opció.',
      comparisonColumns: ['', 'Ulleres progressives', 'Lents multifocals'],
      comparisonRows: [
        ['Visió de lluny', 'Nítida a la zona superior de la lent', 'Visió global sense muntura al davant'],
        ['Visió intermèdia', 'Zona intermèdia definida', 'Depèn del disseny escollit'],
        ['Visió de prop', 'Cal orientar la mirada a la zona inferior', 'Sense necessitat de moure el cap'],
        ["Llibertat sense ulleres", 'Depens de portar-les posades', 'Pots fer el dia sense ulleres'],
        ['Esport i activitat', 'Poden molestar o moure’s', 'Solen ser més còmodes en moviment'],
        ['Camp visual', 'Limitat per la muntura', 'Camp visual més ampli'],
        ["Necessitat d'adaptació", 'Període curt en la majoria de casos', 'Pot requerir proves i ajustos'],
      ],
      comparisonNote:
        'Moltes persones acaben combinant les dues opcions i utilitzen cada solució segons el moment i l’activitat.',
      typesTitle: 'Diferents lents per a diferents ulls',
      typesIntro: 'Dins de les lents multifocals hi ha opcions i geometries molt diverses:',
      types: [
        'lents diàries',
        'lents mensuals',
        'lents multifocals',
        'lents multifocals tòriques quan cal corregir astigmatisme',
        'diferents addicions',
        'diferents geometries i materials',
      ],
      typesMessage:
        "No existeix una única lent multifocal que sigui la millor per a tothom. L'objectiu de l'adaptació és trobar l'opció adequada per a les característiques visuals i les necessitats de cada persona.",
      specialistTitle: "La teva adaptació, en mans d'un especialista en contactologia",
      specialistParagraphs: [
        "Les lents de contacte multifocals poden necessitar més proves i ajustos que unes lents convencionals. Per això a Looptica fem la valoració, la prova i el seguiment al centre, al Poblenou de Barcelona.",
        "Elena Sentís, directora tècnica de Looptica, supervisa les adaptacions de contactologia avançada del centre, incloent-hi Orto-K, control de miopia i lents multifocals.",
      ],
      specialistCredentials: 'Elena Sentís — Òptica Optometrista · Col. 18568 · Directora Tècnica de Looptica',
      specialistLink: "Veure perfil de l'equip",
      faqTitle: 'Preguntes freqüents sobre les lents multifocals',
      faqs: [
        {
          q: 'Quina diferència hi ha entre lents progressives i multifocals?',
          a: "En lents de contacte, tots dos termes s'utilitzen sovint per referir-se al mateix: lents que permeten veure a diferents distàncies. \"Progressives\" és el terme més habitual en ulleres, i \"multifocals\" el més utilitzat en lents de contacte.",
        },
        {
          q: 'Puc utilitzar lents multifocals si tinc astigmatisme?',
          a: "En molts casos sí, mitjançant lents multifocals tòriques. Cal valorar la graduació i les característiques de cada ull per veure quines opcions hi ha disponibles.",
        },
        {
          q: 'A quina edat es poden començar a utilitzar?',
          a: "Solen començar a interessar quan apareix la presbícia, habitualment a partir dels 40-45 anys, però no hi ha una edat fixa: depèn de com et molesti la visió de prop.",
        },
        {
          q: 'Es veu igual que amb unes ulleres progressives?',
          a: "No exactament. La forma de repartir la visió és diferent i cada persona ho percep a la seva manera. Per això fem proves abans de decidir res.",
        },
        {
          q: "Quant dura el procés d'adaptació?",
          a: "Varia segons la persona. Sovint calen unes setmanes amb una o més visites de seguiment per acabar d'ajustar els paràmetres.",
        },
        {
          q: 'Existeixen lents multifocals diàries?',
          a: "Sí, hi ha opcions diàries i també mensuals. L'elecció depèn de la freqüència d'ús, la comoditat i les preferències de cada persona.",
        },
        {
          q: "Què passa si ja les he provat i no m'hi he adaptat?",
          a: "Val la pena tornar-ho a valorar. Un disseny diferent, una altra addició o un ajust de paràmetres poden canviar el resultat, tot i que no sempre és possible aconseguir l'adaptació.",
        },
      ],
      localTitle: 'Adaptació de lents multifocals a Poblenou, Barcelona',
      localText:
        "Vine a Looptica i valorem junts quin disseny de lent multifocal pot encaixar millor amb la teva visió i les teves necessitats.",
      relatedText: (
        <>
          Aquesta pàgina forma part de la nostra secció de {link('/services/lents-contacte', 'lents de contacte')}. Si el que
          et preocupa és la miopia, també pots consultar les {link('/services/orto-k', 'lents Orto-K nocturnes')}.
        </>
      ),
    },
    es: {
      metaTitle: 'Lentillas Progresivas en Barcelona | Adaptación · Looptica',
      metaDescription:
        'Adaptación personalizada de lentillas progresivas y multifocales en Barcelona. Estudio visual, pruebas y seguimiento en Looptica Poblenou. Pide cita.',
      heroTitle: 'Lentillas progresivas y multifocales en Barcelona',
      heroSubtitle: 'Ver de lejos y de cerca sin depender de las gafas',
      breadcrumbLabel: 'Lentillas multifocales',
      parentCrumb: 'Lentillas',
      appointmentSubject: 'Adaptación de lentillas multifocales en Looptica',
      introParagraph:
        'En Looptica realizamos adaptaciones personalizadas de lentillas multifocales para personas con presbicia. Tenemos en cuenta tu graduación, tus necesidades visuales y cómo usas la vista cada día para proponerte el diseño que mejor te encaje.',
      ctaPrimary: 'Pide cita',
      ctaSecondary: '¿Cómo funciona la adaptación?',
      authorityTitle: 'No todas las lentillas multifocales funcionan igual',
      authorityIntro:
        'Una lentilla multifocal no se elige solo por la graduación. Cada diseño reparte la visión de forma distinta, y por eso la adaptación puede requerir valorar:',
      authorityFactors: [
        'visión de lejos',
        'visión intermedia',
        'visión de cerca',
        'ojo dominante',
        'graduación',
        'astigmatismo, si existe',
        'necesidades visuales cotidianas',
        'comodidad',
        'respuesta a los distintos diseños de lente',
      ],
      authorityMessage:
        'El objetivo no es simplemente darte unas lentillas multifocales, sino encontrar la combinación que mejor se adapte a tu visión y a tu día a día.',
      audienceTitle: '¿Para quién son?',
      audience: [
        {
          title: 'Usas gafas progresivas',
          text: 'Y quieres poder realizar determinadas actividades sin depender de las gafas.',
        },
        {
          title: 'Ya usas lentillas',
          text: 'Pero la presbicia empieza a dificultarte la lectura o la visión cercana.',
        },
        {
          title: 'Ya has probado lentillas multifocales',
          text: 'Pero el resultado no fue satisfactorio y quieres valorar otras opciones o ajustes.',
        },
        {
          title: 'Necesitas lejos + ordenador + cerca',
          text: 'Y buscas un equilibrio razonable entre las distintas distancias a lo largo del día.',
        },
      ],
      processTitle: 'Cómo adaptamos las lentillas multifocales en Looptica',
      processSteps: [
        {
          title: 'Estudiamos tu visión',
          text: 'Graduación, visión cercana, intermedia y lejana, ojo dominante y necesidades visuales de tu día a día.',
        },
        {
          title: 'Seleccionamos la lente',
          text: 'Elegimos diseño, material, adición y parámetros iniciales a partir de la valoración.',
        },
        {
          title: 'Probamos y ajustamos',
          text: 'Comprobamos cómo ves realmente con las lentillas puestas y realizamos los ajustes necesarios.',
        },
        {
          title: 'Seguimiento',
          text: 'Revisamos visión, comodidad y comportamiento de las lentillas durante todo el proceso de adaptación.',
        },
      ],
      comparisonTitle: 'Gafas progresivas vs lentillas multifocales',
      comparisonIntro:
        'Son soluciones diferentes, no mejores ni peores. Esta comparación ayuda a entender qué aporta cada opción.',
      comparisonColumns: ['', 'Gafas progresivas', 'Lentillas multifocales'],
      comparisonRows: [
        ['Visión de lejos', 'Nítida en la zona superior de la lente', 'Visión global sin montura delante'],
        ['Visión intermedia', 'Zona intermedia definida', 'Depende del diseño elegido'],
        ['Visión de cerca', 'Hay que dirigir la mirada a la zona inferior', 'Sin necesidad de mover la cabeza'],
        ['Libertad sin gafas', 'Dependes de llevarlas puestas', 'Puedes hacer el día sin gafas'],
        ['Deporte y actividad', 'Pueden molestar o moverse', 'Suelen ser más cómodas en movimiento'],
        ['Campo visual', 'Limitado por la montura', 'Campo visual más amplio'],
        ['Necesidad de adaptación', 'Periodo corto en la mayoría de casos', 'Puede requerir pruebas y ajustes'],
      ],
      comparisonNote:
        'Muchas personas acaban combinando ambas opciones y usan cada solución según el momento y la actividad.',
      typesTitle: 'Diferentes lentillas para diferentes ojos',
      typesIntro: 'Dentro de las lentillas multifocales existen opciones y geometrías muy diversas:',
      types: [
        'lentillas diarias',
        'lentillas mensuales',
        'lentillas multifocales',
        'lentillas multifocales tóricas cuando hay astigmatismo',
        'diferentes adiciones',
        'diferentes geometrías y materiales',
      ],
      typesMessage:
        'No existe una única lentilla multifocal que sea la mejor para todo el mundo. El objetivo de la adaptación es encontrar la opción adecuada para las características visuales y las necesidades de cada persona.',
      specialistTitle: 'Tu adaptación, en manos de un especialista en contactología',
      specialistParagraphs: [
        'Las lentillas multifocales pueden necesitar más pruebas y ajustes que unas lentillas convencionales. Por eso en Looptica realizamos la valoración, la prueba y el seguimiento en el centro, en el Poblenou de Barcelona.',
        'Elena Sentís, directora técnica de Looptica, supervisa las adaptaciones de contactología avanzada del centro, incluyendo Orto-K, control de miopía y lentillas multifocales.',
      ],
      specialistCredentials: 'Elena Sentís — Óptica Optometrista · Col. 18568 · Directora Técnica de Looptica',
      specialistLink: 'Ver el perfil del equipo',
      faqTitle: 'Preguntas frecuentes sobre las lentillas multifocales',
      faqs: [
        {
          q: '¿Qué diferencia hay entre lentillas progresivas y multifocales?',
          a: 'En lentillas, ambos términos se usan a menudo para lo mismo: lentes que permiten ver a distintas distancias. "Progresivas" es el término habitual en gafas, y "multifocales" el más usado en lentes de contacto.',
        },
        {
          q: '¿Puedo usar lentillas multifocales si tengo astigmatismo?',
          a: 'En muchos casos sí, mediante lentillas multifocales tóricas. Hay que valorar la graduación y las características de cada ojo para ver qué opciones están disponibles.',
        },
        {
          q: '¿A qué edad se pueden empezar a usar?',
          a: 'Suelen interesar cuando aparece la presbicia, habitualmente a partir de los 40-45 años, aunque no hay una edad fija: depende de cuánto te moleste la visión cercana.',
        },
        {
          q: '¿Se ve igual que con unas gafas progresivas?',
          a: 'No exactamente. La forma de repartir la visión es distinta y cada persona lo percibe a su manera. Por eso hacemos pruebas antes de decidir nada.',
        },
        {
          q: '¿Cuánto dura el proceso de adaptación?',
          a: 'Varía según la persona. A menudo son necesarias unas semanas con una o más visitas de seguimiento para terminar de ajustar los parámetros.',
        },
        {
          q: '¿Existen lentillas multifocales diarias?',
          a: 'Sí, hay opciones diarias y también mensuales. La elección depende de la frecuencia de uso, la comodidad y las preferencias de cada persona.',
        },
        {
          q: '¿Qué pasa si ya las he probado y no me he adaptado?',
          a: 'Merece la pena volver a valorarlo. Un diseño distinto, otra adición o un ajuste de parámetros pueden cambiar el resultado, aunque no siempre es posible lograr la adaptación.',
        },
      ],
      localTitle: 'Adaptación de lentillas multifocales en Poblenou, Barcelona',
      localText:
        'Ven a Looptica y valoramos juntos qué diseño de lentilla multifocal puede encajar mejor con tu visión y tus necesidades.',
      relatedText: (
        <>
          Esta página forma parte de nuestra sección de {link('/services/lents-contacte', 'lentillas')}. Si lo que te
          preocupa es la miopía, también puedes consultar las {link('/services/orto-k', 'lentillas Orto-K nocturnas')}.
        </>
      ),
    },
    en: {
      metaTitle: 'Multifocal Contact Lenses Barcelona | Presbyopia · Looptica',
      metaDescription:
        'Personalised fitting of multifocal (progressive) contact lenses in Barcelona. Visual assessment, trial lenses and follow-up at Looptica Poblenou. Book now.',
      heroTitle: 'Multifocal contact lenses in Barcelona',
      heroSubtitle: 'See far and near without depending on glasses',
      breadcrumbLabel: 'Multifocal lenses',
      parentCrumb: 'Contact lenses',
      appointmentSubject: 'Multifocal contact lens fitting at Looptica',
      introParagraph:
        'At Looptica we carry out personalised multifocal contact lens fittings for people with presbyopia. We take into account your prescription, your visual needs and how you use your eyes every day to suggest the design that suits you best.',
      ctaPrimary: 'Book an appointment',
      ctaSecondary: 'How does the fitting work?',
      authorityTitle: 'Not all multifocal lenses work the same way',
      authorityIntro:
        'A multifocal contact lens is not chosen on prescription alone. Each design distributes vision differently, so the fitting may involve assessing:',
      authorityFactors: [
        'distance vision',
        'intermediate vision',
        'near vision',
        'dominant eye',
        'prescription',
        'astigmatism, if present',
        'everyday visual needs',
        'comfort',
        'response to different lens designs',
      ],
      authorityMessage:
        'The goal is not simply to give you multifocal lenses, but to find the combination that best fits your vision and your daily routine.',
      audienceTitle: 'Who are they for?',
      audience: [
        {
          title: 'You wear progressive glasses',
          text: 'And you would like to do certain activities without depending on them.',
        },
        {
          title: 'You already wear contact lenses',
          text: 'But presbyopia is starting to make reading or near vision harder.',
        },
        {
          title: 'You have already tried multifocal lenses',
          text: 'But the result was not satisfactory and you want to explore other options or adjustments.',
        },
        {
          title: 'You need distance + screen + near',
          text: 'And you are looking for a reasonable balance between distances throughout the day.',
        },
      ],
      processTitle: 'How we fit multifocal lenses at Looptica',
      processSteps: [
        {
          title: 'We study your vision',
          text: 'Prescription, near, intermediate and distance vision, dominant eye and your everyday visual needs.',
        },
        {
          title: 'We select the lens',
          text: 'We choose design, material, addition and initial parameters based on the assessment.',
        },
        {
          title: 'We trial and adjust',
          text: 'We check how you actually see with the lenses on and make any adjustments needed.',
        },
        {
          title: 'Follow-up',
          text: 'We review vision, comfort and lens behaviour throughout the fitting process.',
        },
      ],
      comparisonTitle: 'Progressive glasses vs multifocal contact lenses',
      comparisonIntro:
        'They are different solutions, not better or worse. This comparison helps to understand what each option offers.',
      comparisonColumns: ['', 'Progressive glasses', 'Multifocal lenses'],
      comparisonRows: [
        ['Distance vision', 'Sharp through the upper part of the lens', 'Full field with no frame in front'],
        ['Intermediate vision', 'Defined intermediate corridor', 'Depends on the chosen design'],
        ['Near vision', 'You look through the lower part of the lens', 'No need to tilt your head'],
        ['Freedom from glasses', 'You depend on wearing them', 'You can go through the day without glasses'],
        ['Sport and activity', 'Can slip or get in the way', 'Usually more comfortable when moving'],
        ['Field of view', 'Limited by the frame', 'Wider field of view'],
        ['Fitting period', 'Short in most cases', 'May require trials and adjustments'],
      ],
      comparisonNote:
        'Many people end up combining both options, using each solution depending on the moment and the activity.',
      typesTitle: 'Different lenses for different eyes',
      typesIntro: 'Within multifocal lenses there are many options and geometries:',
      types: [
        'daily lenses',
        'monthly lenses',
        'multifocal lenses',
        'toric multifocal lenses when astigmatism needs correcting',
        'different additions',
        'different geometries and materials',
      ],
      typesMessage:
        'There is no single multifocal lens that is best for everyone. The purpose of the fitting is to find the right option for each person’s visual characteristics and needs.',
      specialistTitle: 'Your fitting, in the hands of a contact lens specialist',
      specialistParagraphs: [
        'Multifocal contact lenses may need more trials and adjustments than conventional lenses. That is why at Looptica we carry out the assessment, the trial and the follow-up at our practice in Poblenou, Barcelona.',
        'Elena Sentís, Technical Director of Looptica, oversees the practice’s advanced contact lens fittings, including Ortho-K, myopia control and multifocal lenses.',
      ],
      specialistCredentials: 'Elena Sentís — Optician Optometrist · Col. 18568 · Technical Director of Looptica',
      specialistLink: 'See the team profile',
      faqTitle: 'Frequently asked questions about multifocal lenses',
      faqs: [
        {
          q: 'What is the difference between progressive and multifocal contact lenses?',
          a: 'With contact lenses both terms are often used for the same thing: lenses that let you see at different distances. "Progressive" is the usual term for spectacles, while "multifocal" is more common for contact lenses.',
        },
        {
          q: 'Can I wear multifocal lenses if I have astigmatism?',
          a: 'In many cases yes, using toric multifocal lenses. Your prescription and the characteristics of each eye need to be assessed to see which options are available.',
        },
        {
          q: 'At what age can they be used?',
          a: 'They usually become of interest when presbyopia appears, typically from around 40-45, although there is no fixed age: it depends on how much near vision bothers you.',
        },
        {
          q: 'Does it look the same as with progressive glasses?',
          a: 'Not exactly. Vision is distributed differently and each person perceives it in their own way. That is why we run trials before deciding anything.',
        },
        {
          q: 'How long does the fitting process take?',
          a: 'It varies from person to person. It often takes a few weeks with one or more follow-up visits to finish adjusting the parameters.',
        },
        {
          q: 'Are there daily multifocal lenses?',
          a: 'Yes, there are daily options as well as monthly ones. The choice depends on how often you wear them, comfort and personal preference.',
        },
        {
          q: 'What if I have already tried them and could not adapt?',
          a: 'It is worth reassessing. A different design, another addition or a parameter adjustment can change the outcome, although a successful fitting is not always possible.',
        },
      ],
      localTitle: 'Multifocal lens fitting in Poblenou, Barcelona',
      localText:
        'Visit Looptica and we will assess together which multifocal lens design may suit your vision and your needs best.',
      relatedText: (
        <>
          This page is part of our {link('/services/lents-contacte', 'contact lenses')} section. If myopia is your main
          concern, you can also read about {link('/services/orto-k', 'Ortho-K overnight lenses')}.
        </>
      ),
    },
    de: {
      metaTitle: 'Multifokale Kontaktlinsen Barcelona | Alterssichtigkeit · Looptica',
      metaDescription:
        'Individuelle Anpassung multifokaler (Gleitsicht-)Kontaktlinsen in Barcelona. Sehanalyse, Testlinsen und Nachsorge bei Looptica Poblenou. Termin buchen.',
      heroTitle: 'Multifokale Kontaktlinsen in Barcelona',
      heroSubtitle: 'In der Ferne und in der Nähe sehen, ohne von der Brille abhängig zu sein',
      breadcrumbLabel: 'Multifokale Linsen',
      parentCrumb: 'Kontaktlinsen',
      appointmentSubject: 'Anpassung multifokaler Kontaktlinsen bei Looptica',
      introParagraph:
        'Bei Looptica passen wir multifokale Kontaktlinsen individuell für Menschen mit Alterssichtigkeit an. Wir berücksichtigen Ihre Sehstärke, Ihre visuellen Anforderungen und Ihren Alltag, um das passende Design vorzuschlagen.',
      ctaPrimary: 'Termin vereinbaren',
      ctaSecondary: 'Wie läuft die Anpassung ab?',
      authorityTitle: 'Nicht alle multifokalen Linsen funktionieren gleich',
      authorityIntro:
        'Eine multifokale Kontaktlinse wird nicht nur nach der Sehstärke ausgewählt. Jedes Design verteilt das Sehen anders, daher kann die Anpassung folgende Punkte umfassen:',
      authorityFactors: [
        'Fernsicht',
        'Zwischenbereich',
        'Nahsicht',
        'dominantes Auge',
        'Sehstärke',
        'Astigmatismus, falls vorhanden',
        'alltägliche Sehanforderungen',
        'Komfort',
        'Reaktion auf unterschiedliche Linsendesigns',
      ],
      authorityMessage:
        'Das Ziel ist nicht einfach, Ihnen multifokale Linsen zu geben, sondern die Kombination zu finden, die am besten zu Ihrem Sehen und Ihrem Alltag passt.',
      audienceTitle: 'Für wen sind sie geeignet?',
      audience: [
        {
          title: 'Sie tragen eine Gleitsichtbrille',
          text: 'Und möchten bestimmte Aktivitäten ohne Brille ausüben.',
        },
        {
          title: 'Sie tragen schon Kontaktlinsen',
          text: 'Aber die Alterssichtigkeit erschwert das Lesen oder die Nahsicht.',
        },
        {
          title: 'Sie haben multifokale Linsen schon probiert',
          text: 'Das Ergebnis war nicht zufriedenstellend und Sie möchten andere Optionen oder Anpassungen prüfen.',
        },
        {
          title: 'Sie brauchen Ferne + Bildschirm + Nähe',
          text: 'Und suchen ein sinnvolles Gleichgewicht zwischen den Distanzen im Tagesverlauf.',
        },
      ],
      processTitle: 'So passen wir multifokale Linsen bei Looptica an',
      processSteps: [
        {
          title: 'Wir analysieren Ihr Sehen',
          text: 'Sehstärke, Nah-, Zwischen- und Fernsicht, dominantes Auge und Ihre alltäglichen Anforderungen.',
        },
        {
          title: 'Wir wählen die Linse',
          text: 'Design, Material, Addition und Ausgangsparameter werden auf Basis der Analyse ausgewählt.',
        },
        {
          title: 'Wir testen und justieren',
          text: 'Wir prüfen, wie Sie mit den Linsen tatsächlich sehen, und nehmen nötige Anpassungen vor.',
        },
        {
          title: 'Nachsorge',
          text: 'Wir kontrollieren Sehen, Komfort und Sitz der Linsen während des gesamten Anpassungsprozesses.',
        },
      ],
      comparisonTitle: 'Gleitsichtbrille vs multifokale Kontaktlinsen',
      comparisonIntro:
        'Es sind unterschiedliche Lösungen, nicht besser oder schlechter. Der Vergleich zeigt, was jede Option bietet.',
      comparisonColumns: ['', 'Gleitsichtbrille', 'Multifokale Linsen'],
      comparisonRows: [
        ['Fernsicht', 'Scharf im oberen Glasbereich', 'Volles Sehfeld ohne Fassung davor'],
        ['Zwischenbereich', 'Definierter Zwischenkorridor', 'Abhängig vom gewählten Design'],
        ['Nahsicht', 'Blick in den unteren Glasbereich nötig', 'Ohne den Kopf zu bewegen'],
        ['Freiheit ohne Brille', 'Sie müssen sie tragen', 'Der Tag ist ohne Brille möglich'],
        ['Sport und Bewegung', 'Kann verrutschen oder störend sein', 'Meist angenehmer in Bewegung'],
        ['Sehfeld', 'Durch die Fassung begrenzt', 'Weiteres Sehfeld'],
        ['Anpassungsphase', 'Meist kurz', 'Kann Tests und Anpassungen erfordern'],
      ],
      comparisonNote:
        'Viele Menschen kombinieren beide Lösungen und nutzen je nach Situation und Aktivität die passende.',
      typesTitle: 'Verschiedene Linsen für verschiedene Augen',
      typesIntro: 'Bei multifokalen Linsen gibt es sehr unterschiedliche Optionen und Geometrien:',
      types: [
        'Tageslinsen',
        'Monatslinsen',
        'multifokale Linsen',
        'torische multifokale Linsen bei Astigmatismus',
        'verschiedene Additionen',
        'verschiedene Geometrien und Materialien',
      ],
      typesMessage:
        'Es gibt keine einzige multifokale Linse, die für alle die beste ist. Ziel der Anpassung ist, die passende Option für die Seheigenschaften und Bedürfnisse jeder Person zu finden.',
      specialistTitle: 'Ihre Anpassung in den Händen einer Kontaktlinsen-Spezialistin',
      specialistParagraphs: [
        'Multifokale Kontaktlinsen benötigen oft mehr Tests und Anpassungen als herkömmliche Linsen. Deshalb erfolgen Analyse, Test und Nachsorge bei Looptica direkt im Geschäft in Poblenou, Barcelona.',
        'Elena Sentís, technische Leiterin von Looptica, betreut die anspruchsvollen Kontaktlinsenanpassungen des Zentrums, darunter Ortho-K, Myopiekontrolle und multifokale Linsen.',
      ],
      specialistCredentials: 'Elena Sentís — Optikerin Optometristin · Col. 18568 · Technische Leiterin von Looptica',
      specialistLink: 'Team-Profil ansehen',
      faqTitle: 'Häufige Fragen zu multifokalen Linsen',
      faqs: [
        {
          q: 'Was ist der Unterschied zwischen Gleitsicht- und multifokalen Linsen?',
          a: 'Bei Kontaktlinsen werden beide Begriffe häufig gleichbedeutend verwendet: Linsen, die Sehen in verschiedenen Entfernungen ermöglichen. "Gleitsicht" ist bei Brillen üblich, "multifokal" bei Kontaktlinsen.',
        },
        {
          q: 'Kann ich multifokale Linsen mit Astigmatismus tragen?',
          a: 'In vielen Fällen ja, mit torischen multifokalen Linsen. Sehstärke und Eigenschaften jedes Auges müssen geprüft werden, um die möglichen Optionen zu sehen.',
        },
        {
          q: 'Ab welchem Alter sind sie sinnvoll?',
          a: 'Meist wenn die Alterssichtigkeit beginnt, typischerweise ab etwa 40-45 Jahren. Ein festes Alter gibt es nicht, es hängt davon ab, wie stark die Nahsicht störend ist.',
        },
        {
          q: 'Sieht man damit genauso wie mit einer Gleitsichtbrille?',
          a: 'Nicht genau. Das Sehen wird anders verteilt und jede Person empfindet es individuell. Deshalb testen wir, bevor wir etwas entscheiden.',
        },
        {
          q: 'Wie lange dauert die Anpassung?',
          a: 'Das ist individuell. Häufig sind einige Wochen mit einem oder mehreren Nachsorgeterminen nötig, um die Parameter fertig einzustellen.',
        },
        {
          q: 'Gibt es multifokale Tageslinsen?',
          a: 'Ja, es gibt Tages- und Monatsoptionen. Die Wahl hängt von der Tragehäufigkeit, dem Komfort und den persönlichen Vorlieben ab.',
        },
        {
          q: 'Was, wenn ich sie schon probiert habe und mich nicht angepasst habe?',
          a: 'Eine erneute Prüfung lohnt sich. Ein anderes Design, eine andere Addition oder angepasste Parameter können das Ergebnis verändern, auch wenn eine erfolgreiche Anpassung nicht immer möglich ist.',
        },
      ],
      localTitle: 'Anpassung multifokaler Linsen in Poblenou, Barcelona',
      localText:
        'Besuchen Sie Looptica und wir prüfen gemeinsam, welches multifokale Linsendesign zu Ihrem Sehen und Ihren Bedürfnissen passt.',
      relatedText: (
        <>
          Diese Seite gehört zu unserem Bereich {link('/services/lents-contacte', 'Kontaktlinsen')}. Wenn Kurzsichtigkeit
          Ihr Hauptthema ist, lesen Sie auch über {link('/services/orto-k', 'Ortho-K Nachtlinsen')}.
        </>
      ),
    },
  };

  const c = copy[language];

  const audienceIcons = [Glasses, Contact, RefreshCw, Monitor];
  const processIcons = [Search, Eye, RefreshCw, CalendarCheck];

  const metaTitles = Object.fromEntries(
    (Object.keys(copy) as Language[]).map((l) => [l, copy[l].metaTitle])
  ) as Record<Language, string>;
  const metaDescriptions = Object.fromEntries(
    (Object.keys(copy) as Language[]).map((l) => [l, copy[l].metaDescription])
  ) as Record<Language, string>;

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: c.heroTitle,
    serviceType: 'Multifocal contact lens fitting',
    description: c.metaDescription,
    areaServed: { '@type': 'City', name: 'Barcelona' },
    provider: {
      '@type': 'Optician',
      name: 'Looptica',
      telephone: '+34933009064',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rambla del Poblenou, 48',
        postalCode: '08005',
        addressLocality: 'Barcelona',
        addressRegion: 'Poblenou',
        addressCountry: 'ES',
      },
      url: 'https://looptica.com/',
    },
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(serviceJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      <ServiceLayout
        title={c.heroTitle}
        subtitle={c.heroSubtitle}
        image={heroAsset.url}
        appointmentSubject={c.appointmentSubject}
        pageTitle={metaTitles}
        pageDescription={metaDescriptions}
        breadcrumbLabel={c.breadcrumbLabel}
        breadcrumbParents={[{ label: c.parentCrumb, path: '/services/lents-contacte' }]}
        hideCTA
      >
        {/* Intro + CTAs */}
        <ScrollReveal>
          <div className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">{c.introParagraph}</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <GoogleCalendarButton subject={c.appointmentSubject} description={`Appointment for ${c.heroTitle} at Looptica`}>
                {c.ctaPrimary}
              </GoogleCalendarButton>
              <a
                href="#adaptacio"
                className="inline-flex items-center justify-center border border-[#55afa9] text-[#55afa9] hover:bg-[#55afa9]/10 py-3 px-6 rounded-md font-medium transition-colors"
              >
                {c.ctaSecondary}
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Authority */}
        <ScrollReveal>
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold mb-4">{c.authorityTitle}</h2>
            <p className="text-gray-700 mb-6">{c.authorityIntro}</p>
            <ul className="grid sm:grid-cols-2 gap-3 mb-6">
              {c.authorityFactors.map((f) => (
                <li key={f} className="flex items-start gap-2 text-gray-700">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#55afa9] shrink-0" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
            <p className="text-lg font-medium text-gray-900">{c.authorityMessage}</p>
          </div>
        </ScrollReveal>

        {/* Audience */}
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">{c.audienceTitle}</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {c.audience.map((item, i) => {
                const Icon = audienceIcons[i];
                return (
                  <div key={item.title} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="bg-[#55afa9]/10 rounded-full w-11 h-11 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[#55afa9]" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Process */}
        <ScrollReveal>
          <div id="adaptacio" className="bg-gray-50 p-8 rounded-lg mb-12 scroll-mt-28">
            <h2 className="text-2xl font-semibold mb-6">{c.processTitle}</h2>
            <div className="space-y-6">
              {c.processSteps.map((step, i) => {
                const Icon = processIcons[i];
                return (
                  <div className="flex gap-4" key={step.title}>
                    <div className="bg-[#55afa9] rounded-full p-3 h-fit">
                      <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">
                        {i + 1}. {step.title}
                      </h3>
                      <p className="text-gray-700">{step.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Comparison */}
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">{c.comparisonTitle}</h2>
            <p className="text-gray-700 mb-6">{c.comparisonIntro}</p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 shadow-sm">
              <table className="w-full text-left text-sm md:text-base">
                <thead className="bg-gray-50">
                  <tr>
                    {c.comparisonColumns.map((col, i) => (
                      <th key={i} scope="col" className="p-4 font-semibold text-gray-900">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {c.comparisonRows.map((row) => (
                    <tr key={row[0]} className="border-t border-gray-100">
                      <th scope="row" className="p-4 font-medium text-gray-900 align-top">
                        {row[0]}
                      </th>
                      <td className="p-4 text-gray-600 align-top">{row[1]}</td>
                      <td className="p-4 text-gray-600 align-top">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-gray-700">{c.comparisonNote}</p>
          </div>
        </ScrollReveal>

        {/* Types */}
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">{c.typesTitle}</h2>
            <p className="text-gray-700 mb-4">{c.typesIntro}</p>
            <ul className="grid sm:grid-cols-2 gap-3 mb-6">
              {c.types.map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#ca6664] shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-700">{c.typesMessage}</p>
          </div>
        </ScrollReveal>

        {/* Specialist */}
        <ScrollReveal>
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold mb-4">{c.specialistTitle}</h2>
            {c.specialistParagraphs.map((p, i) => (
              <p key={i} className="text-gray-700 mb-4">
                {p}
              </p>
            ))}
            <div className="flex items-start gap-3 mt-6">
              <BadgeCheck className="w-6 h-6 text-[#55afa9] shrink-0" aria-hidden="true" />
              <div>
                <p className="text-sm md:text-base text-gray-700">{c.specialistCredentials}</p>
                <Link
                  to={`/${language}/about`}
                  className="inline-block mt-2 text-sm font-medium text-[#55afa9] hover:text-[#ca6664] transition-colors underline-offset-2 hover:underline"
                >
                  {c.specialistLink}
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* FAQ */}
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">{c.faqTitle}</h2>
            <div className="space-y-4">
              {c.faqs.map((f) => (
                <div key={f.q} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-lg font-medium mb-2">{f.q}</h3>
                  <p className="text-gray-600">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Local conversion */}
        <ScrollReveal>
          <div className="mb-4 text-center">
            <h2 className="text-2xl font-semibold mb-4">{c.localTitle}</h2>
            <p className="text-gray-700 mb-6">{c.localText}</p>
            <GoogleCalendarButton
              subject={c.appointmentSubject}
              description={`Appointment for ${c.heroTitle} at Looptica`}
              className="mx-auto"
            >
              {c.ctaPrimary}
            </GoogleCalendarButton>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-gray-700 mt-8">{c.relatedText}</p>
        </ScrollReveal>

        <div className="-mx-4 md:-mx-8 mt-12">
          <StoreLocation />
        </div>
      </ServiceLayout>
    </>
  );
};

export default LentsContacteMultifocals;
