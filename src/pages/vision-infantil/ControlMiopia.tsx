import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ServiceLayout from '@/components/layout/ServiceLayout';
import GoogleCalendarButton from '@/components/ui/GoogleCalendarButton';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/config/languages';
import content from '@/content/controlMiopia.json';

const pageTitle: { [key in Language]: string } = {
  ca: "Control de la Miopia Infantil a Barcelona Poblenou",
  es: "Control de la Miopía Infantil en Barcelona Poblenou",
  en: "Childhood Myopia Control in Barcelona Poblenou",
  de: "Myopiekontrolle bei Kindern in Barcelona Poblenou",
};

const pageDescription: { [key in Language]: string } = {
  ca: "Control de miopia infantil a Poblenou, Barcelona: lents Stellest, MyoCare i MiYOSMART, Orto-K i lentilles, amb seguiment coordinat amb l'oftalmòleg.",
  es: "Control de miopía infantil en Poblenou, Barcelona: lentes Stellest, MyoCare y MiYOSMART, Orto-K y lentillas, con seguimiento junto al oftalmólogo.",
  en: "Childhood myopia control in Poblenou, Barcelona: Stellest, MyoCare and MiYOSMART glasses, Ortho-K and contact lenses, with ophthalmologist follow-up.",
  de: "Myopiekontrolle für Kinder in Poblenou, Barcelona: Stellest, MyoCare und MiYOSMART, Ortho-K und Kontaktlinsen, mit Nachsorge in Abstimmung mit dem Augenarzt.",
};

const atropineNote = {
  ca: "A looptica no utilitzem atropina en baixa concentració. El nostre enfocament és òptic: Orto-K, lents de desenfocament perifèric i lentilles de control. Si el cas requereix tractament farmacològic, et derivem a l'oftalmòleg i seguim col·laborant en el control òptic.",
  es: "En looptica no utilizamos atropina en baja concentración. Nuestro enfoque es óptico: Orto-K, lentes de desenfoque periférico y lentillas de control. Si el caso requiere tratamiento farmacológico, te derivamos al oftalmólogo y seguimos colaborando en el control óptico.",
  en: "At looptica we do not use low-dose atropine. Our approach is optical: Ortho-K, peripheral defocus lenses and control contact lenses. If a case calls for pharmacological treatment, we refer to an ophthalmologist and keep collaborating on the optical side.",
  de: "Bei looptica setzen wir kein niedrig dosiertes Atropin ein. Unser Ansatz ist optisch: Ortho-K, Defokus-Brillengläser und Kontrolllinsen. Ist eine medikamentöse Behandlung nötig, überweisen wir an den Augenarzt und begleiten weiterhin die optische Kontrolle.",
};

const parentCrumb = {
  ca: "Visió infantil",
  es: "Visión infantil",
  en: "Children's vision",
  de: "Kindersehen",
};


type Block = { t: string; x?: string; items?: string[] };

const inline = (text: string) =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> : <React.Fragment key={i}>{part}</React.Fragment>
  );

const ControlMiopia = () => {
  const { language } = useLanguage();
  const lang = language as Language;
  const c = (content as Record<string, { title: string; subtitle: string; blocks: Block[]; faqTitle: string; faqs: { q: string; a: string }[] }>)[lang] ?? content.ca;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const faqIndex = c.blocks.findIndex((b, i) => b.t === 'h2' && i > 0 && c.blocks.slice(i + 1).every((x) => x.t !== 'h2'));

  const renderBlock = (b: Block, i: number) => {
    switch (b.t) {
      case 'h2': return <h2 key={i}>{b.x}</h2>;
      case 'h3': return <h3 key={i}>{b.x}</h3>;
      case 'ul': return <ul key={i}>{b.items!.map((it) => <li key={it}>{inline(it)}</li>)}</ul>;
      case 'book':
        return (
          <div key={i} className="not-prose my-6">
            <GoogleCalendarButton subject="Control de la miopia infantil a looptica">{b.x}</GoogleCalendarButton>
          </div>
        );
      case 'orto':
        return (
          <p key={i}>
            <Link to={`/${lang}/services/orto-k`} className="text-primary underline font-medium">{b.x}</Link>
          </p>
        );
      case 'atropine':
        return (
          <div key={i} className="not-prose bg-muted p-6 rounded-lg my-8">
            <p className="text-muted-foreground">{atropineNote[lang]}</p>
          </div>
        );
      default: return <p key={i}>{inline(b.x ?? '')}</p>;
    }
  };

  const before = faqIndex > 0 ? c.blocks.slice(0, faqIndex) : c.blocks;
  const after = faqIndex > 0 ? c.blocks.slice(faqIndex) : [];

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <ServiceLayout
        title={c.title}
        subtitle={c.subtitle}
        image="/__l5e/assets-v1/c0456b82-6ddb-4984-82e9-4121642db3ae/control-miopia-hero.jpg"
        hideCTA
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        appointmentSubject="Control de la miopia infantil a looptica"
        breadcrumbParents={[{ label: parentCrumb[lang], path: '/visio-infantil' }]}
      >
        <div className="prose prose-lg max-w-none mb-12">{before.map(renderBlock)}</div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{c.faqTitle}</h2>
          <div className="space-y-4">
            {c.faqs.map((faq, index) => (
              <details key={index} className="bg-card p-5 rounded-lg shadow-sm group">
                <summary className="font-medium text-lg cursor-pointer list-none flex justify-between items-center">
                  <span>{faq.q}</span>
                  <span className="ml-4 text-primary group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="prose prose-lg max-w-none text-center mt-16 mb-8">{after.map(renderBlock)}</section>
      </ServiceLayout>
    </>
  );
};

export default ControlMiopia;
