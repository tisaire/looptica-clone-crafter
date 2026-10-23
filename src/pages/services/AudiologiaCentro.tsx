import React from 'react';
import { Link } from 'react-router-dom';
import ServiceLayout from '@/components/layout/ServiceLayout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import TeamSpotlight from '@/components/TeamSpotlight';
import { Button } from '@/components/ui/button';
import { ArrowRight, Ear, Headphones, HandCoins, Activity, ShieldCheck, Radio } from 'lucide-react';
import centreAuditiuHero from '@/assets/centre_auditiu.webp.asset.json';

const AudiologiaCentro = () => {
  const { language } = useLanguage();
  
  const content = {
    seoTitle: {
      en: "Audiologist in Barcelona | Hearing Tests & Hearing Aids | Looptica",
      es: "Audiólogo en Barcelona | Audífonos y prueba auditiva | Looptica",
      ca: "Audiòleg a Barcelona | Audiòfons i prova auditiva | Looptica",
      de: "Audiologe in Barcelona | Hörtest & Hörgeräte | Looptica"
    },
    seoDescription: {
      en: "Professional hearing tests, hearing aid fitting and follow-up in Barcelona. Audiologist in Poblenou with advanced technology and personalized care.",
      es: "Audiólogo en Poblenou, Barcelona: pruebas auditivas, adaptación de audífonos y seguimiento personalizado con tecnología avanzada en Looptica.",
      ca: "Proves auditives, adaptació d'audiòfons i seguiment professional a Barcelona. Audiòleg a Poblenou amb tecnologia avançada i atenció personalitzada.",
      de: "Professionelle Hörtests, Hörgeräte-Anpassung und Nachsorge in Barcelona. Audiologe in Poblenou mit fortschrittlicher Technologie und persönlicher Betreuung."
    },
    title: {
      en: "Audiology centre in Barcelona",
      es: "Centro de audiología en Barcelona",
      ca: "Centre d'audiologia a Barcelona",
      de: "Audiologie-Zentrum in Barcelona"
    },
    subtitle: {
      en: "Comprehensive hearing care solutions",
      es: "Soluciones integrales para el cuidado auditivo",
      ca: "Solucions integrals per a la cura auditiva",
      de: "Umfassende Hörlösungen"
    },
    appointmentSubject: {
      en: "Audiology Consultation at Looptica",
      es: "Consulta de Audiología en Looptica",
      ca: "Consulta d'Audiologia a Looptica",
      de: "Audiologie-Beratung bei Looptica"
    },
    servicesTitle: {
      en: "Our Audiology Services",
      es: "Nuestros Servicios de Audiología",
      ca: "Els nostres Serveis d'Audiologia",
      de: "Unsere Audiologie-Dienstleistungen"
    },
    servicesDescription: {
      en: "At Looptica, we offer a wide range of audiology services to help you maintain and improve your hearing health. Our team of experienced audiologists is dedicated to providing personalized care and the latest technology to meet your individual needs.",
      es: "En Looptica, ofrecemos una amplia gama de servicios de audiología para ayudarle a mantener y mejorar su salud auditiva. Nuestro equipo de audiólogos experimentados se dedica a proporcionar atención personalizada y la última tecnología para satisfacer sus necesidades individuales.",
      ca: "A Looptica, oferim una àmplia gamma de serveis d'audiologia per ajudar-vos a mantenir i millorar la vostra salut auditiva. El nostre equip d'audiòlegs experimentats es dedica a proporcionar atenció personalitzada i l'última tecnologia per satisfer les vostres necessitats individuals.",
      de: "Bei Looptica bieten wir eine breite Palette von Audiologie-Dienstleistungen, um Ihnen zu helfen, Ihre Hörgesundheit zu erhalten und zu verbessern. Unser Team erfahrener Audiologen ist darauf spezialisiert, personalisierte Betreuung und neueste Technologie zu bieten, um Ihre individuellen Bedürfnisse zu erfüllen."
    },
    hearingTests: {
      en: "Hearing Tests",
      es: "Pruebas de Audición",
      ca: "Proves d'Audició",
      de: "Hörtests"
    },
    hearingTestsDesc: {
      en: "Comprehensive hearing evaluations to assess your hearing ability and identify any potential issues.",
      es: "Evaluaciones auditivas completas para evaluar su capacidad auditiva e identificar cualquier problema potencial.",
      ca: "Avaluacions auditives completes per avaluar la vostra capacitat auditiva i identificar qualsevol problema potencial.",
      de: "Umfassende Hörbewertungen zur Beurteilung Ihrer Hörfähigkeit und Identifizierung möglicher Probleme."
    },
    hearingAids: {
      en: "Hearing Aids",
      es: "Audífonos",
      ca: "Audiòfons",
      de: "Hörgeräte"
    },
    hearingAidsDesc: {
      en: "Advanced digital hearing aids from leading brands, tailored to your specific hearing loss and lifestyle.",
      es: "Audífonos digitales avanzados de marcas líderes, adaptados a su pérdida auditiva y estilo de vida específicos.",
      ca: "Audiòfons digitals avançats de marques líders, adaptats a la vostra pèrdua auditiva i estil de vida específics.",
      de: "Fortschrittliche digitale Hörgeräte führender Marken, angepasst an Ihren spezifischen Hörverlust und Lebensstil."
    },
    tinnitusTreatment: {
      en: "Tinnitus Treatment",
      es: "Tratamiento de Tinnitus",
      ca: "Tractament de Tinnitus",
      de: "Tinnitus-Behandlung"
    },
    tinnitusTreatmentDesc: {
      en: "Effective strategies and therapies to manage and reduce the impact of tinnitus on your daily life.",
      es: "Estrategias y terapias eficaces para controlar y reducir el impacto del tinnitus en su vida diaria.",
      ca: "Estratègies i teràpies eficaces per controlar i reduir l'impacte del tinnitus en la vostra vida diària.",
      de: "Wirksame Strategien und Therapien zur Bewältigung und Reduzierung der Auswirkungen von Tinnitus auf Ihr tägliches Leben."
    },
    earProtection: {
      en: "Custom Ear Protection",
      es: "Protección Auditiva Personalizada",
      ca: "Protecció Auditiva Personalitzada",
      de: "Maßgeschneiderter Gehörschutz"
    },
    earProtectionDesc: {
      en: "Custom-fitted earplugs and earmolds for musicians, industrial workers, and anyone exposed to loud noise.",
      es: "Tapones para los oídos y moldes para los oídos hechos a medida para músicos, trabajadores industriales y cualquier persona expuesta a ruidos fuertes.",
      ca: "Taps per a les orelles i motlles per a les orelles fets a mida per a músics, treballadors industrials i qualsevol persona exposada a sorolls forts.",
      de: "Maßgefertigte Ohrstöpsel und Ohrpassstücke für Musiker, Industriearbeiter und alle, die lauten Geräuschen ausgesetzt sind."
    },
    technicalAids: {
      ca: "Ajudes tècniques i accessoris",
      es: "Ayudas técnicas y accesorios",
      en: "Assistive devices and accessories",
      de: "Technische Hilfen und Zubehör"
    },
    technicalAidsDesc: {
      ca: "Accessoris per escoltar millor la televisió, el telèfon i les converses, i per cuidar els teus audiòfons.",
      es: "Accesorios para escuchar mejor la televisión, el teléfono y las conversaciones, y para cuidar tus audífonos.",
      en: "Accessories for hearing the TV, phone and conversations more clearly, and for caring for your hearing aids.",
      de: "Zubehör für besseres Hören beim Fernsehen, Telefonieren und in Gesprächen sowie zur Pflege Ihrer Hörgeräte."
    },
    subsidiesTitle: {
      ca: "Ajudes i subvencions",
      es: "Ayudas y subvenciones",
      en: "Financial aid and subsidies",
      de: "Finanzielle Hilfen und Zuschüsse"
    },
    subsidiesDesc: {
      ca: "T'orientem sobre les ajudes per a audiòfons i els tràmits necessaris per sol·licitar-les.",
      es: "Te orientamos sobre las ayudas para audífonos y los trámites necesarios para solicitarlas.",
      en: "Guidance on hearing aid funding and the paperwork needed to apply.",
      de: "Beratung zu Zuschüssen für Hörgeräte und den erforderlichen Antragsunterlagen."
    },
    subsidiesHeading: {
      ca: "Ajudes per a audiòfons: t'acompanyem amb els tràmits",
      es: "Ayudas para audífonos: te acompañamos con los trámites",
      en: "Hearing aid funding: support with your application",
      de: "Hörgeräte-Zuschüsse: Unterstützung bei Ihrem Antrag"
    },
    subsidiesSummary: {
      ca: "Les ajudes de CatSalut i altres programes tenen requisits específics segons l'edat, la pèrdua auditiva i la situació personal. A Looptica t'orientem sobre les opcions disponibles i la documentació necessària. Consulta la guia completa per conèixer les condicions de cada programa.",
      es: "Las ayudas de CatSalut y otros programas tienen requisitos específicos según la edad, la pérdida auditiva y la situación personal. En Looptica te orientamos sobre las opciones disponibles y la documentación necesaria. Consulta la guía completa para conocer las condiciones de cada programa.",
      en: "CatSalut funding and other programmes have specific requirements depending on age, hearing loss and personal circumstances. At Looptica, we guide you through the available options and required documents. See the full guide for the conditions of each programme.",
      de: "CatSalut-Zuschüsse und andere Programme haben spezifische Voraussetzungen je nach Alter, Hörverlust und persönlicher Situation. Bei Looptica beraten wir Sie zu den verfügbaren Möglichkeiten und erforderlichen Unterlagen. Die vollständige Übersicht erklärt die Bedingungen der einzelnen Programme."
    },
    subsidiesLink: {
      ca: "Consulta les ajudes i els requisits",
      es: "Consulta las ayudas y los requisitos",
      en: "View funding and requirements",
      de: "Zuschüsse und Voraussetzungen ansehen"
    }

  };

  const services = [
    { path: 'hearing-test', title: content.hearingTests[language], description: content.hearingTestsDesc[language], icon: Ear },
    { path: 'hearing-aids', title: content.hearingAids[language], description: content.hearingAidsDesc[language], icon: Headphones },
    { path: 'subvenciones', title: content.subsidiesTitle[language], description: content.subsidiesDesc[language], icon: HandCoins },
    { path: 'tinnitus-treatment', title: content.tinnitusTreatment[language], description: content.tinnitusTreatmentDesc[language], icon: Activity },
    { path: 'ear-protection', title: content.earProtection[language], description: content.earProtectionDesc[language], icon: ShieldCheck },
    { path: 'technical-aids', title: content.technicalAids[language], description: content.technicalAidsDesc[language], icon: Radio }
  ];

  return (
    <ServiceLayout
      title={content.title[language]}
      subtitle={content.subtitle[language]}
      image={centreAuditiuHero.url}
      appointmentSubject={content.appointmentSubject[language]}
      pageTitle={content.seoTitle}
      pageDescription={content.seoDescription}
    >
      <TeamSpotlight
        heading={{ en: 'Your audiologist in Poblenou', es: 'Tu audióloga en Poblenou', ca: 'La teva audiòloga a Poblenou', de: 'Ihre Audiologin in Poblenou' }}
        name="Esther"
        image="/images/esther_resize.jpeg"
        role={{ en: 'Audiologist & Hearing Aid Specialist', es: 'Audióloga y Audioprotesista', ca: 'Audiòloga i Audioprotesista', de: 'Audiologin & Hörakustikerin' }}
        bio={{
          en: 'Esther specialises in hearing rehabilitation. She performs the hearing test, fits your hearing aids and follows up with you, with a kind and patient approach.',
          es: 'Esther está especializada en rehabilitación auditiva. Realiza la prueba auditiva, adapta tus audífonos y te acompaña en el seguimiento, con un trato cercano y paciente.',
          ca: "L'Esther està especialitzada en rehabilitació auditiva. Fa la prova auditiva, adapta els teus audiòfons i t'acompanya en el seguiment, amb un tracte proper i pacient.",
          de: 'Esther ist auf Hörrehabilitation spezialisiert. Sie führt den Hörtest durch, passt Ihre Hörgeräte an und begleitet Sie in der Nachsorge – freundlich und geduldig.'
        }}
      />

      <ScrollReveal>
        <section aria-labelledby="audiology-services-title" className="mb-12">
          <h2 id="audiology-services-title" className="text-2xl font-semibold tracking-normal mb-4">
            {content.servicesTitle[language]}
          </h2>
          <p className="text-muted-foreground mb-6">{content.servicesDescription[language]}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ path, title, description, icon: Icon }) => (
              <Button
                key={path}
                asChild
                variant="outline"
                className="group h-auto min-w-0 whitespace-normal items-stretch justify-start p-6 rounded-lg border-border bg-card text-card-foreground hover:border-primary hover:bg-accent motion-reduce:transition-none"
              >
                <Link to={`/${language}/services/${path}`} className="flex flex-col text-left">
                  <Icon aria-hidden="true" className="mb-4 text-primary !size-7" />
                  <h3 className="text-xl font-medium tracking-normal mb-3">{title}</h3>
                  <p className="text-sm font-normal text-muted-foreground mb-5">{description}</p>
                  <ArrowRight aria-hidden="true" className="mt-auto self-end text-primary motion-safe:transition-transform motion-safe:group-hover:translate-x-1" />
                </Link>
              </Button>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section id="subsidies" className="border-t border-border py-8 scroll-mt-24">
          <div className="flex items-start gap-4 mb-4">
            <HandCoins aria-hidden="true" className="size-8 shrink-0 text-secondary" />
            <h2 className="text-2xl font-semibold tracking-normal">{content.subsidiesHeading[language]}</h2>
          </div>
          <p className="text-muted-foreground mb-6">{content.subsidiesSummary[language]}</p>
          <Button asChild className="h-auto min-h-11 whitespace-normal text-left">
            <Link to={`/${language}/services/subvenciones`}>
              {content.subsidiesLink[language]}
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </section>
      </ScrollReveal>
    </ServiceLayout>
  );
};

export default AudiologiaCentro;
