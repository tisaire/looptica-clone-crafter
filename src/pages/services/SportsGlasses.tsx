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
import { SPORT_FIT_LABELS, SPORT_MODELS, SportBrand } from '@/data/sportsEyewear';
import heroImg from '@/assets/sports-glasses-hero.jpg';

type BrandText = { brand: SportBrand; tagline: string; description: string };
type PageText = {
  metaTitle: string; metaDescription: string; crumb: string; glassesCrumb: string; subject: string;
  title: string; subtitle: string; intro: string[]; heroCta: string;
  waysTitle: string; ways: [string, string][]; waysNote: string;
  brandsTitle: string; brandsIntro: string; enlarge: string; galleryNote: string; brands: BrandText[];
  visitTitle: string; visitText: string[]; visitCta: string; glassesLink: string;
};

const T: Record<Language, PageText> = {
  ca: {
    metaTitle: 'Ulleres esportives graduades a Poblenou | looptica',
    metaDescription: 'Ulleres esportives graduades a Poblenou, Barcelona: Polaroid Sport, VerSport i Centrostyle amb graduació directa, clip òptic o inserció. Assessorament a looptica, Poblenou.',
    crumb: 'Ulleres esportives', glassesCrumb: 'Ulleres', subject: "Consulta d'ulleres esportives a looptica",
    title: 'Ulleres esportives graduades a Poblenou, Barcelona',
    subtitle: 'Practica el teu esport amb la correcció visual que necessites.',
    intro: [
      "Córrer, anar en bicicleta, jugar a pàdel o fer muntanya amb les ulleres de cada dia no sempre és còmode ni segur. Unes ulleres esportives graduades s'adapten al moviment i et permeten veure-hi bé mentre practiques la teva activitat.",
      "A looptica, a la Rambla del Poblenou, et mostrem models de Polaroid Sport, VerSport i Centrostyle que admeten graduació i t'ajudem a escollir el que millor encaixa amb el teu esport i la teva graduació.",
    ],
    heroCta: 'Demana cita per a ulleres esportives',
    waysTitle: "Tres maneres de portar la teva graduació a l'esport",
    ways: [
      ['Graduació directa', 'Les lents graduades es munten directament a la muntura o a les ulleres de sol esportives.'],
      ['Clip o inserció òptica', 'Un clip interior porta les lents graduades, i les lents solars o de protecció queden per davant.'],
      ['Clip solar o lents abatibles', "Muntures graduades amb un clip solar que s'hi acobla, o lents solars que s'aixequen i deixen a la vista les lents graduades."],
    ],
    waysNote: "La graduació que es pot muntar depèn de cada model. T'ho revisem a la botiga abans d'encarregar les lents.",
    brandsTitle: "Les nostres marques d'ulleres esportives",
    brandsIntro: 'Tots els models admeten graduació directa, clip òptic o inserció graduada, segons la fitxa del fabricant.',
    enlarge: 'Amplia la foto',
    galleryNote: "Models de referència de cada marca. Consulta'ns la disponibilitat a la botiga.",
    brands: [
      { brand: 'Polaroid Sport', tagline: 'Disseny esportiu de la col·lecció Active Sport.', description: 'Muntures graduables, muntures amb clip solar polaritzat i ulleres de sol que admeten lents graduades.' },
      { brand: 'VerSport', tagline: 'Especialistes en ulleres esportives graduables.', description: "Ulleres de protecció per a esports de pilota i raqueta, i ulleres de sol Sun RX per córrer, anar en bicicleta i fer esport a l'aire lliure." },
      { brand: 'Centrostyle', tagline: 'Solucions esportives per a cada activitat.', description: 'Muntures esportives i de temps lliure, i ulleres de sol esportives amb clip interior per a lents graduades.' },
    ],
    visitTitle: "Vine a provar-te-les a l'Poblenou",
    visitText: ["Explica'ns quin esport practiques i et mostrarem les opcions que millor s'hi adapten.", "T'esperem a looptica, a la Rambla del Poblenou, 48."],
    visitCta: 'Demana cita',
    glassesLink: "Veure totes les nostres marques d'ulleres",
  },
  es: {
    metaTitle: 'Gafas deportivas graduadas en Poblenou | looptica',
    metaDescription: 'Gafas deportivas graduadas en Poblenou, Barcelona: Polaroid Sport, VerSport y Centrostyle con graduación directa, clip óptico o inserto. Asesoramiento en looptica, Poblenou.',
    crumb: 'Gafas deportivas', glassesCrumb: 'Gafas', subject: 'Consulta de gafas deportivas en looptica',
    title: 'Gafas deportivas graduadas en Poblenou, Barcelona',
    subtitle: 'Practica tu deporte con la corrección visual que necesitas.',
    intro: [
      'Correr, ir en bici, jugar al pádel o hacer montaña con las gafas de diario no siempre es cómodo ni seguro. Unas gafas deportivas graduadas se adaptan al movimiento y te permiten ver bien mientras practicas tu actividad.',
      'En looptica, en la Rambla del Poblenou, te enseñamos modelos de Polaroid Sport, VerSport y Centrostyle que admiten graduación y te ayudamos a elegir el que mejor encaja con tu deporte y tu graduación.',
    ],
    heroCta: 'Pide cita para gafas deportivas',
    waysTitle: 'Tres formas de llevar tu graduación al deporte',
    ways: [
      ['Graduación directa', 'Las lentes graduadas se montan directamente en la montura o en las gafas de sol deportivas.'],
      ['Clip o inserto óptico', 'Un clip interior lleva las lentes graduadas, y las lentes solares o de protección quedan por delante.'],
      ['Clip solar o lentes abatibles', 'Monturas graduadas con un clip solar que se acopla, o lentes solares que se levantan y dejan a la vista las lentes graduadas.'],
    ],
    waysNote: 'La graduación que se puede montar depende de cada modelo. Te lo revisamos en tienda antes de encargar las lentes.',
    brandsTitle: 'Nuestras marcas de gafas deportivas',
    brandsIntro: 'Todos los modelos admiten graduación directa, clip óptico o inserto graduado, según la ficha del fabricante.',
    enlarge: 'Ampliar la foto',
    galleryNote: 'Modelos de referencia de cada marca. Consúltanos la disponibilidad en tienda.',
    brands: [
      { brand: 'Polaroid Sport', tagline: 'Diseño deportivo de la colección Active Sport.', description: 'Monturas graduables, monturas con clip solar polarizado y gafas de sol que admiten lentes graduadas.' },
      { brand: 'VerSport', tagline: 'Especialistas en gafas deportivas graduables.', description: 'Gafas de protección para deportes de pelota y raqueta, y gafas de sol Sun RX para correr, ir en bici y hacer deporte al aire libre.' },
      { brand: 'Centrostyle', tagline: 'Soluciones deportivas para cada actividad.', description: 'Monturas deportivas y de tiempo libre, y gafas de sol deportivas con clip interior para lentes graduadas.' },
    ],
    visitTitle: 'Ven a probártelas en el Poblenou',
    visitText: ['Cuéntanos qué deporte practicas y te enseñaremos las opciones que mejor se adaptan.', 'Te esperamos en looptica, en la Rambla del Poblenou, 48.'],
    visitCta: 'Pide cita',
    glassesLink: 'Ver todas nuestras marcas de gafas',
  },
  en: {
    metaTitle: 'Prescription Sports Glasses in Poblenou | looptica',
    metaDescription: 'Prescription sports glasses in Poblenou, Barcelona: Polaroid Sport, VerSport and Centrostyle with direct lenses, optical clip-in or insert. Expert advice at looptica, Poblenou.',
    crumb: 'Sports glasses', glassesCrumb: 'Glasses', subject: 'Sports Eyewear Consultation at looptica',
    title: 'Prescription Sports Glasses in Poblenou, Barcelona',
    subtitle: 'Enjoy your sport with the vision correction you need.',
    intro: [
      'Running, cycling, playing padel or hiking in your everyday glasses is not always comfortable or safe. Prescription sports glasses move with you and help you see clearly while you train or play.',
      'At looptica on Rambla del Poblenou, we show you prescription-ready models from Polaroid Sport, VerSport and Centrostyle and help you choose the one that best suits your sport and prescription.',
    ],
    heroCta: 'Book a Sports Eyewear Appointment',
    waysTitle: 'Three Ways to Bring Your Prescription to Sport',
    ways: [
      ['Direct prescription lenses', 'Prescription lenses are fitted directly into the frame or the sports sunglasses.'],
      ['Optical clip-in or insert', 'An inner clip holds the prescription lenses, with the sun or protective lenses in front.'],
      ['Sun clip or flip-up lenses', 'Prescription frames with an attachable sun clip, or sun lenses that flip up to reveal the prescription lenses underneath.'],
    ],
    waysNote: 'The prescription range depends on each model. We check it with you in store before ordering your lenses.',
    brandsTitle: 'Our Sports Eyewear Brands',
    brandsIntro: "Every model accepts direct prescription lenses, an optical clip or a prescription insert, according to the manufacturer's specifications.",
    enlarge: 'Enlarge photo',
    galleryNote: 'Reference models from each brand. Ask us about in-store availability.',
    brands: [
      { brand: 'Polaroid Sport', tagline: 'Sporty design from the Active Sport collection.', description: 'Prescription frames, frames with polarised sun clips and sunglasses that accept prescription lenses.' },
      { brand: 'VerSport', tagline: 'Specialists in prescription sports eyewear.', description: 'Protective eyewear for ball and racket sports, and Sun RX sunglasses for running, cycling and outdoor sports.' },
      { brand: 'Centrostyle', tagline: 'Sports solutions for every activity.', description: 'Sports and leisure frames, plus sports sunglasses with an inner clip for prescription lenses.' },
    ],
    visitTitle: 'Come and Try Them On in Poblenou',
    visitText: ['Tell us which sport you play and we will show you the options that suit it best.', 'Visit looptica at Rambla del Poblenou, 48.'],
    visitCta: 'Book an Appointment',
    glassesLink: 'See all our eyewear brands',
  },
  de: {
    metaTitle: 'Sportbrillen mit Sehstärke in Poblenou | looptica',
    metaDescription: 'Sportbrillen mit Sehstärke in Poblenou, Barcelona: Polaroid Sport, VerSport und Centrostyle mit direkter Verglasung, Korrektionsclip oder -einsatz. Beratung bei looptica, Poblenou.',
    crumb: 'Sportbrillen', glassesCrumb: 'Brillen', subject: 'Sportbrillenberatung bei looptica',
    title: 'Sportbrillen mit Sehstärke in Poblenou, Barcelona',
    subtitle: 'Treiben Sie Sport mit der Sehkorrektur, die Sie brauchen.',
    intro: [
      'Laufen, Radfahren, Padel oder Wandern mit der Alltagsbrille ist nicht immer bequem oder sicher. Eine Sportbrille mit Sehstärke passt sich Ihren Bewegungen an und sorgt beim Sport für klare Sicht.',
      'Bei looptica an der Rambla del Poblenou zeigen wir Ihnen Modelle von Polaroid Sport, VerSport und Centrostyle, die sich mit Korrektionsgläsern ausstatten lassen, und helfen Ihnen, das passende Modell für Ihre Sportart und Sehstärke zu finden.',
    ],
    heroCta: 'Termin für Sportbrillen vereinbaren',
    waysTitle: 'Drei Wege, Ihre Sehstärke beim Sport zu tragen',
    ways: [
      ['Direkte Verglasung', 'Die Korrektionsgläser werden direkt in die Fassung oder die Sportsonnenbrille eingesetzt.'],
      ['Korrektionsclip oder -einsatz', 'Ein innenliegender Clip trägt die Korrektionsgläser, davor sitzen die Sonnen- oder Schutzgläser.'],
      ['Sonnenclip oder hochklappbare Gläser', 'Korrektionsfassungen mit aufsteckbarem Sonnenclip oder Sonnengläser, die sich hochklappen lassen und die Korrektionsgläser freigeben.'],
    ],
    waysNote: 'Welche Sehstärke möglich ist, hängt vom Modell ab. Wir prüfen das mit Ihnen im Geschäft, bevor wir die Gläser bestellen.',
    brandsTitle: 'Unsere Sportbrillenmarken',
    brandsIntro: 'Laut Herstellerangaben lassen sich alle Modelle direkt verglasen oder mit Korrektionsclip bzw. -einsatz tragen.',
    enlarge: 'Foto vergrößern',
    galleryNote: 'Referenzmodelle der einzelnen Marken. Fragen Sie uns nach der Verfügbarkeit im Geschäft.',
    brands: [
      { brand: 'Polaroid Sport', tagline: 'Sportliches Design aus der Active-Sport-Kollektion.', description: 'Korrektionsfassungen, Fassungen mit polarisiertem Sonnenclip und Sonnenbrillen, die sich mit Korrektionsgläsern verglasen lassen.' },
      { brand: 'VerSport', tagline: 'Spezialist für Sportbrillen mit Sehstärke.', description: 'Schutzbrillen für Ball- und Schlägersportarten sowie Sun-RX-Sonnenbrillen für Laufen, Radfahren und Outdoor-Sport.' },
      { brand: 'Centrostyle', tagline: 'Sportliche Lösungen für jede Aktivität.', description: 'Sport- und Freizeitfassungen sowie Sportsonnenbrillen mit innenliegendem Clip für Korrektionsgläser.' },
    ],
    visitTitle: 'Probieren Sie sie in Poblenou an',
    visitText: ['Erzählen Sie uns, welchen Sport Sie treiben, und wir zeigen Ihnen die passenden Möglichkeiten.', 'Besuchen Sie looptica an der Rambla del Poblenou, 48.'],
    visitCta: 'Termin vereinbaren',
    glassesLink: 'Alle unsere Brillenmarken ansehen',
  },
  it: {
    metaTitle: 'Occhiali sportivi graduati a Poblenou | looptica',
    metaDescription: 'Occhiali sportivi graduati a Poblenou, Barcellona: Polaroid Sport, VerSport e Centrostyle con graduazione diretta, clip ottico o inserto. Consulenza da looptica.',
    crumb: 'Occhiali sportivi', glassesCrumb: 'Occhiali', subject: 'Consulenza occhiali sportivi da looptica',
    title: 'Occhiali sportivi graduati a Poblenou, Barcellona',
    subtitle: 'Pratica il tuo sport con la correzione visiva di cui hai bisogno.',
    intro: [
      'Correre, andare in bici, giocare a padel o fare trekking con gli occhiali di tutti i giorni non è sempre comodo né sicuro. Gli occhiali sportivi graduati si adattano al movimento e ti permettono di vedere bene mentre pratichi la tua attività.',
      'Da looptica, sulla Rambla del Poblenou, ti mostriamo modelli Polaroid Sport, VerSport e Centrostyle che accettano la graduazione e ti aiutiamo a scegliere quello più adatto al tuo sport e alla tua graduazione.',
    ],
    heroCta: 'Prenota per occhiali sportivi',
    waysTitle: 'Tre modi di portare la tua graduazione nello sport',
    ways: [
      ['Graduazione diretta', 'Le lenti graduate vengono montate direttamente sulla montatura o sugli occhiali da sole sportivi.'],
      ['Clip o inserto ottico', 'Un clip interno porta le lenti graduate, mentre le lenti solari o protettive restano davanti.'],
      ['Clip solare o lenti ribaltabili', 'Montature graduate con clip solare applicabile, o lenti solari che si sollevano lasciando visibili le lenti graduate.'],
    ],
    waysNote: 'La graduazione montabile dipende da ogni modello. La verifichiamo con te in negozio prima di ordinare le lenti.',
    brandsTitle: 'I nostri marchi di occhiali sportivi',
    brandsIntro: 'Tutti i modelli accettano graduazione diretta, clip ottico o inserto graduato, secondo la scheda del produttore.',
    enlarge: 'Ingrandisci la foto',
    galleryNote: 'Modelli di riferimento di ogni marchio. Chiedici la disponibilità in negozio.',
    brands: [
      { brand: 'Polaroid Sport', tagline: 'Design sportivo della collezione Active Sport.', description: 'Montature graduabili, montature con clip solare polarizzato e occhiali da sole che accettano lenti graduate.' },
      { brand: 'VerSport', tagline: 'Specialisti in occhiali sportivi graduabili.', description: "Occhiali protettivi per sport con palla e racchetta, e occhiali da sole Sun RX per corsa, ciclismo e sport all'aria aperta." },
      { brand: 'Centrostyle', tagline: 'Soluzioni sportive per ogni attività.', description: 'Montature sportive e per il tempo libero, e occhiali da sole sportivi con clip interno per lenti graduate.' },
    ],
    visitTitle: 'Vieni a provarli a Poblenou',
    visitText: ['Raccontaci quale sport pratichi e ti mostreremo le opzioni più adatte.', 'Ti aspettiamo da looptica, Rambla del Poblenou, 48.'],
    visitCta: 'Prenota un appuntamento',
    glassesLink: 'Vedi tutti i nostri marchi di occhiali',
  },
};

const SportsGlasses: React.FC = () => {
  const { language, t } = useLanguage();
  const lang = (language as Language) in T ? (language as Language) : 'ca';

  const c = T[lang];
  const brands: BrandEntry[] = c.brands.map((b) => ({
    ...b,
    models: SPORT_MODELS[b.brand].map((m) => ({ src: m.src, name: `${m.name} · ${SPORT_FIT_LABELS[m.fit][lang]}` })),
  }));
  // ServiceLayout adds the brand suffix itself, so page titles are passed without it.
  const pick = (k: 'metaTitle' | 'metaDescription') => {
    const v = (l: Language) => (k === 'metaTitle' ? T[l][k].replace(/\s*\|\s*looptica$/i, '') : T[l][k]);
    return { ca: v('ca'), es: v('es'), en: v('en'), de: v('de'), it: v('it') };
  };

  return (
    <>
      <Helmet>
        <title>{c.metaTitle}</title>
        <meta name="description" content={c.metaDescription} />
        <meta property="og:title" content={c.metaTitle} />
        <meta property="og:description" content={c.metaDescription} />
      </Helmet>
      <ServiceLayout
        title={c.title}
        subtitle={c.subtitle}
        image={heroImg}
        appointmentSubject={c.subject}
        hideCTA
        breadcrumbLabel={c.crumb}
        breadcrumbParents={[{ label: t('breadcrumbServices') }, { label: c.glassesCrumb, path: `/${lang}/services/eyeglasses` }]}
        pageTitle={pick('metaTitle')}
        pageDescription={pick('metaDescription')}
      >
        <ScrollReveal>
          <div className="prose prose-lg max-w-none mb-8">
            {c.intro.map((p) => <p key={p}>{p}</p>)}
          </div>
          <div className="mb-16">
            <GoogleCalendarButton subject={c.subject}>{c.heroCta}</GoogleCalendarButton>
          </div>
        </ScrollReveal>

        <section className="mb-16" aria-labelledby="sport-brands-title">
          <h2 id="sport-brands-title" className="text-3xl font-semibold mb-4">{c.brandsTitle}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl">{c.brandsIntro}</p>
          <BrandGallery brands={brands} enlargeLabel={c.enlarge} />
          <p className="mt-6 text-sm text-muted-foreground">{c.galleryNote}</p>
        </section>

        <ScrollReveal>
          <section className="border-y border-border py-8 mb-16">
            <h2 className="text-3xl font-semibold mb-6">{c.waysTitle}</h2>
            <ol className="grid gap-6 md:grid-cols-3">
              {c.ways.map(([title, text], i) => (
                <li key={title} className="bg-card p-6 rounded-lg shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold mb-4">{i + 1}</span>
                  <h3 className="text-xl font-medium mb-2">{title}</h3>
                  <p className="text-muted-foreground">{text}</p>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-muted-foreground">{c.waysNote}</p>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="mb-12 text-center">
            <h2 className="text-3xl font-semibold mb-4">{c.visitTitle}</h2>
            {c.visitText.map((p) => <p key={p} className="mb-4 max-w-2xl mx-auto">{p}</p>)}
            <div className="my-6 flex flex-col items-center gap-4">
              <GoogleCalendarButton subject={c.subject}>{c.visitCta}</GoogleCalendarButton>
              <Button asChild variant="outline" className="h-auto whitespace-normal text-center">
                <Link to={`/${lang}/services/eyeglasses`}>
                  {c.glassesLink} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <p className="flex items-center justify-center gap-2 text-muted-foreground flex-wrap">
              <MapPin className="h-4 w-4" /> looptica · Rambla del Poblenou, 48 · 08005 Barcelona
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

export default SportsGlasses;
