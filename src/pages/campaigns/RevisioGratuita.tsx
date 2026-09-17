import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { Eye, Gift, HandHeart } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import StoreLocation from '@/components/home/StoreLocation';
import GoogleCalendarButton from '@/components/ui/GoogleCalendarButton';
import ScrollReveal from '@/components/ui/ScrollReveal';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';
import { useLanguage } from '@/contexts/LanguageContext';
import { whatsappTranslations } from '@/config/whatsappConfig';
import { SUPPORTED_LANGUAGES, Language } from '@/config/languages';

const PATH = '/revisio-gratuita';

type Copy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  highlight: string;
  cta: string;
  ctaNote: string;
  benefitsTitle: string;
  benefits: { title: string; text: string }[];
  contextTitle: string;
  contextText: string[];
  finalTitle: string;
  finalText: string;
  closingText: string;
  closingSignature: string;
  appointmentSubject: string;
};

const copy: Record<Language, Copy> = {
  ca: {
    metaTitle: 'Revisió visual gratuïta a Looptica | Poblenou, Barcelona',
    metaDescription:
      "Fa més de 2 anys que no et revises la vista? A Looptica Poblenou t'convidem a una revisió visual gratuïta, sense compromís. Reserva la teva cita.",
    eyebrow: 'Una invitació per a tu',
    h1: 'Fa més de 2 anys que no et revises la vista?',
    intro:
      'A Looptica volem assegurar-nos que continues veient tan bé com et mereixes. Per això, et convidem a fer una:',
    highlight: 'Revisió visual gratuïta',
    cta: 'Reserva la teva cita',
    ctaNote: 'Sense cost i sense compromís.',
    benefitsTitle: 'La teva revisió inclou',
    benefits: [
      {
        title: 'Revisió completa de la vista',
        text: 'Comprovarem com estàs veient actualment i si hi ha hagut canvis des de la teva última visita.',
      },
      {
        title: 'Sense cap cost',
        text: 'Aquesta revisió és una invitació de Looptica per tornar a cuidar de la teva visió.',
      },
      {
        title: 'Sense compromís',
        text: 'No implica cap compra ni obligació posterior.',
      },
    ],
    contextTitle: 'Han passat més de 2 anys?',
    contextText: [
      'La visió pot canviar amb el temps, fins i tot quan no notes cap problema evident.',
      'Si fa temps que no ens visites, aquesta és una bona ocasió per comprovar que tot continua bé.',
    ],
    finalTitle: 'Cuida la teva vista.',
    finalText: 'Reserva ara la teva revisió visual gratuïta.',
    closingText: "T'esperem a Looptica.",
    closingSignature: 'Irene i Elena',
    appointmentSubject: 'Revisió visual gratuïta a Looptica',
  },
  es: {
    metaTitle: 'Revisión visual gratuita en Looptica | Poblenou, Barcelona',
    metaDescription:
      '¿Hace más de 2 años que no revisas tu vista? En Looptica Poblenou te invitamos a una revisión visual gratuita, sin compromiso. Reserva tu cita.',
    eyebrow: 'Una invitación para ti',
    h1: '¿Hace más de 2 años que no revisas tu vista?',
    intro:
      'En Looptica queremos asegurarnos de que sigues viendo tan bien como te mereces. Por eso, queremos invitarte a realizar una:',
    highlight: 'Revisión visual gratuita',
    cta: 'Reserva tu cita',
    ctaNote: 'Sin coste y sin compromiso.',
    benefitsTitle: 'Tu revisión incluye',
    benefits: [
      {
        title: 'Revisión completa de la vista',
        text: 'Comprobaremos cómo estás viendo actualmente y si ha habido cambios desde tu última visita.',
      },
      {
        title: 'Sin ningún coste',
        text: 'Esta revisión es una invitación de Looptica para volver a cuidar de tu visión.',
      },
      {
        title: 'Sin compromiso',
        text: 'No implica ninguna compra ni obligación posterior.',
      },
    ],
    contextTitle: '¿Han pasado más de 2 años?',
    contextText: [
      'La visión puede cambiar con el tiempo, incluso cuando no notas ningún problema evidente.',
      'Si hace tiempo que no nos visitas, esta es una buena ocasión para comprobar que todo sigue bien.',
    ],
    finalTitle: 'Cuida tu vista.',
    finalText: 'Reserva ahora tu revisión visual gratuita.',
    closingText: 'Te esperamos en Looptica.',
    closingSignature: 'Irene y Elena',
    appointmentSubject: 'Revisión visual gratuita en Looptica',
  },
  en: {
    metaTitle: 'Free eye exam at Looptica | Poblenou, Barcelona',
    metaDescription:
      'Has it been more than 2 years since your last eye exam? Looptica Poblenou invites you to a free eye exam, with no obligation. Book your appointment.',
    eyebrow: 'An invitation for you',
    h1: 'Has it been more than 2 years since your last eye exam?',
    intro:
      'At Looptica, we want to make sure you continue to see as well as you deserve. That is why we would like to invite you to a:',
    highlight: 'Free eye exam',
    cta: 'Book your appointment',
    ctaNote: 'Free of charge and with no obligation.',
    benefitsTitle: 'Your eye exam includes',
    benefits: [
      {
        title: 'Complete eye exam',
        text: 'We will check how you are seeing now and whether anything has changed since your last visit.',
      },
      {
        title: 'Completely free',
        text: 'This eye exam is an invitation from Looptica to help you take care of your vision.',
      },
      {
        title: 'No obligation',
        text: 'There is no requirement to make a purchase afterwards.',
      },
    ],
    contextTitle: 'Has it been more than 2 years?',
    contextText: [
      'Your vision can change over time, even when you do not notice any obvious problems.',
      'If it has been a while since your last visit, this is a good opportunity to check that everything is still fine.',
    ],
    finalTitle: 'Take care of your vision.',
    finalText: 'Book your free eye exam now.',
    closingText: 'We look forward to seeing you at Looptica.',
    closingSignature: 'Irene & Elena',
    appointmentSubject: 'Free eye exam at Looptica',
  },
  de: {
    metaTitle: 'Kostenloser Sehtest bei Looptica | Poblenou, Barcelona',
    metaDescription:
      'Ist dein letzter Sehtest mehr als 2 Jahre her? Looptica Poblenou lädt dich zu einem kostenlosen und unverbindlichen Sehtest ein. Termin vereinbaren.',
    eyebrow: 'Eine Einladung für dich',
    h1: 'Ist dein letzter Sehtest mehr als 2 Jahre her?',
    intro:
      'Bei Looptica möchten wir sicherstellen, dass du weiterhin so gut siehst, wie du es verdienst. Deshalb laden wir dich ein zu einem:',
    highlight: 'Kostenlosen Sehtest',
    cta: 'Termin vereinbaren',
    ctaNote: 'Kostenlos und unverbindlich.',
    benefitsTitle: 'Dein Sehtest beinhaltet',
    benefits: [
      {
        title: 'Umfassender Sehtest',
        text: 'Wir überprüfen, wie du aktuell siehst und ob sich seit deinem letzten Besuch etwas verändert hat.',
      },
      {
        title: 'Kostenlos',
        text: 'Dieser Sehtest ist eine Einladung von Looptica, deine Sehkraft wieder überprüfen zu lassen.',
      },
      {
        title: 'Unverbindlich',
        text: 'Es besteht keine Verpflichtung zu einem anschließenden Kauf.',
      },
    ],
    contextTitle: 'Sind mehr als 2 Jahre vergangen?',
    contextText: [
      'Das Sehvermögen kann sich mit der Zeit verändern, auch wenn du selbst keine offensichtlichen Veränderungen bemerkst.',
      'Wenn dein letzter Besuch schon eine Weile zurückliegt, ist dies eine gute Gelegenheit zu überprüfen, ob weiterhin alles in Ordnung ist.',
    ],
    finalTitle: 'Kümmere dich um deine Sehkraft.',
    finalText: 'Vereinbare jetzt deinen kostenlosen Sehtest.',
    closingText: 'Wir freuen uns auf dich bei Looptica.',
    closingSignature: 'Irene & Elena',
    appointmentSubject: 'Kostenloser Sehtest bei Looptica',
  },
};

const benefitIcons = [Eye, Gift, HandHeart];

const RevisioGratuita = () => {
  const { language } = useLanguage();
  const { lang: langFromParams } = useParams<{ lang: string }>();
  const c = copy[language] ?? copy.ca;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const canonical = `https://looptica.com/${langFromParams || language}${PATH}`;

  return (
    <>
      <Helmet>
        <title>{c.metaTitle}</title>
        <meta name="description" content={c.metaDescription} />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content={c.metaTitle} />
        <meta property="og:description" content={c.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <link rel="canonical" href={canonical} />
        {SUPPORTED_LANGUAGES.map((code) => (
          <link key={code} rel="alternate" hrefLang={code} href={`https://looptica.com/${code}${PATH}`} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={`https://looptica.com/ca${PATH}`} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow pt-20">
          {/* Hero */}
          <section className="px-6 lg:px-12 pt-10 pb-12 bg-gradient-to-b from-[#55afa9]/10 to-white">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full bg-[#55afa9]/15 text-[#55afa9] mb-4">
                {c.eyebrow}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
                {c.h1}
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-5">{c.intro}</p>
              <p className="text-xl sm:text-2xl font-bold text-[#55afa9] uppercase tracking-wide mb-8">
                {c.highlight}
              </p>
              <GoogleCalendarButton
                subject={c.appointmentSubject}
                description={c.appointmentSubject}
                size="lg"
                className="w-full sm:w-auto text-base px-8 py-6 h-auto"
              >
                {c.cta}
              </GoogleCalendarButton>
              <p className="mt-4 text-sm text-gray-500">{c.ctaNote}</p>
            </div>
          </section>

          {/* Benefits */}
          <section className="px-6 lg:px-12 py-14">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
                {c.benefitsTitle}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {c.benefits.map((benefit, index) => {
                  const Icon = benefitIcons[index] ?? Eye;
                  return (
                    <ScrollReveal key={benefit.title} origin="bottom" delay={100 * (index + 1)}>
                      <div className="h-full bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                        <div className="w-11 h-11 rounded-full bg-[#55afa9]/10 flex items-center justify-center mb-4">
                          <Icon className="h-5 w-5 text-[#55afa9]" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.text}</p>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Context */}
          <section className="px-6 lg:px-12 py-14 bg-gray-50">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">{c.contextTitle}</h2>
              {c.contextText.map((paragraph) => (
                <p key={paragraph} className="text-gray-600 text-base sm:text-lg mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="px-6 lg:px-12 py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{c.finalTitle}</h2>
              <p className="text-gray-600 text-base sm:text-lg mb-8">{c.finalText}</p>
              <GoogleCalendarButton
                subject={c.appointmentSubject}
                description={c.appointmentSubject}
                size="lg"
                className="w-full sm:w-auto text-base px-8 py-6 h-auto"
              >
                {c.cta}
              </GoogleCalendarButton>
              <p className="mt-4 text-sm text-gray-500">{c.ctaNote}</p>
            </div>
          </section>

          {/* Closing — personal */}
          <section className="px-6 lg:px-12 pb-16">
            <div className="max-w-xl mx-auto text-center bg-white rounded-xl border border-gray-100 shadow-sm p-8">
              <div className="flex items-center justify-center gap-4 mb-5">
                <img
                  src="/images/irene.jpg"
                  alt="Irene, òptica optometrista a Looptica"
                  loading="lazy"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <img
                  src="/images/_DSC4776.jpg"
                  alt="Elena, òptica optometrista a Looptica"
                  loading="lazy"
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>
              <p className="text-lg text-gray-700">{c.closingText}</p>
              <p className="text-lg font-semibold text-[#55afa9] mt-1">{c.closingSignature}</p>
            </div>
          </section>

          <StoreLocation />
        </main>

        <FloatingWhatsApp
          phoneNumber="34699594064"
          accountName="Looptica"
          statusMessage={whatsappTranslations.statusMessage[language as keyof typeof whatsappTranslations.statusMessage]}
          chatMessage={whatsappTranslations.chatMessage[language as keyof typeof whatsappTranslations.chatMessage]}
          placeholder={whatsappTranslations.placeholder[language as keyof typeof whatsappTranslations.placeholder]}
        />
      </div>
    </>
  );
};

export default RevisioGratuita;
