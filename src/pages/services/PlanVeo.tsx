import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import { useLanguage } from '@/contexts/LanguageContext';
import ServiceLayout from '@/components/layout/ServiceLayout';
import { Card, CardContent } from '@/components/ui/card';
import { BadgeEuro, Users, FileText, ClipboardCheck, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GoogleCalendarButton from '@/components/ui/GoogleCalendarButton';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ScrollReveal from '@/components/ui/ScrollReveal';

const PlanVeo = () => {
  const { language } = useLanguage();

  const content = {
    meta: {
      en: {
        title: 'Plan VEO - Subsidies for Children\'s Glasses | Looptica Barcelona',
        description: 'Get up to €100/year for glasses or contact lenses for children up to 16 years. Plan VEO government subsidy available at Looptica Barcelona.',
      },
      es: {
        title: 'Plan VEO - Ayudas para Gafas Infantiles | Looptica Barcelona',
        description: 'Obtén hasta 100€/año para gafas o lentillas para menores de 16 años. Subvención del Plan VEO disponible en Looptica Barcelona.',
      },
      ca: {
        title: 'Plan VEO - Ajudes per a Ulleres Infantils | Looptica Barcelona',
        description: 'Obtén fins a 100€/any per a ulleres o lents de contacte per a menors de 16 anys. Subvenció del Plan VEO disponible a Looptica Barcelona.',
      },
      de: {
        title: 'Plan VEO - Zuschüsse für Kinderbrillen | Looptica Barcelona',
        description: 'Erhalten Sie bis zu 100€/Jahr für Brillen oder Kontaktlinsen für Kinder bis 16 Jahre. Plan VEO Beihilfe bei Looptica Barcelona.',
      },
    },
    hero: {
      en: {
        title: 'Plan VEO',
        subtitle: 'Subsidies for Children\'s Eyewear',
      },
      es: {
        title: 'Plan VEO',
        subtitle: 'Ayudas para Gafas y Lentillas Infantiles',
      },
      ca: {
        title: 'Plan VEO',
        subtitle: 'Ajudes per a Ulleres i Lents de Contacte Infantils',
      },
      de: {
        title: 'Plan VEO',
        subtitle: 'Zuschüsse für Kinderbrillen und Kontaktlinsen',
      },
    },
    intro: {
      en: 'Plan VEO is a Spanish government initiative providing financial assistance of up to €100 per year for glasses or contact lenses for children and teenagers up to 16 years of age with vision problems. At Looptica, we are an authorized participating optician where you can directly apply for this subsidy.',
      es: 'El Plan VEO es una iniciativa del gobierno español que ofrece una ayuda económica de hasta 100€ al año para gafas o lentillas para niños y adolescentes de hasta 16 años con problemas de visión. En Looptica, somos una óptica participante autorizada donde puedes solicitar directamente esta subvención.',
      ca: 'El Plan VEO és una iniciativa del govern espanyol que ofereix una ajuda econòmica de fins a 100€ l\'any per a ulleres o lents de contacte per a nens i adolescents de fins a 16 anys amb problemes de visió. A Looptica, som una òptica participant autoritzada on pots sol·licitar directament aquesta subvenció.',
      de: 'Plan VEO ist eine spanische Regierungsinitiative, die finanzielle Unterstützung von bis zu 100€ pro Jahr für Brillen oder Kontaktlinsen für Kinder und Jugendliche bis 16 Jahre mit Sehproblemen bietet. Bei Looptica sind wir ein autorisierter teilnehmender Optiker, bei dem Sie diese Beihilfe direkt beantragen können.',
    },
    whatIs: {
      en: {
        title: 'What is Plan VEO?',
        description: 'Plan VEO (Visión y Equipamiento Óptico) is a government program that covers up to €100 per year for corrective eyewear for minors. The program is valid until December 31, 2026.',
      },
      es: {
        title: '¿Qué es el Plan VEO?',
        description: 'El Plan VEO (Visión y Equipamiento Óptico) es un programa gubernamental que cubre hasta 100€ al año para equipamiento óptico correctivo para menores. El programa es válido hasta el 31 de diciembre de 2026.',
      },
      ca: {
        title: 'Què és el Plan VEO?',
        description: 'El Plan VEO (Visión y Equipamiento Óptico) és un programa governamental que cobreix fins a 100€ l\'any per a equipament òptic correctiu per a menors. El programa és vàlid fins al 31 de desembre de 2026.',
      },
      de: {
        title: 'Was ist Plan VEO?',
        description: 'Plan VEO (Visión y Equipamiento Óptico) ist ein Regierungsprogramm, das bis zu 100€ pro Jahr für korrigierende Sehhilfen für Minderjährige abdeckt. Das Programm ist bis zum 31. Dezember 2026 gültig.',
      },
    },
    cards: {
      en: [
        {
          icon: Users,
          title: 'Who Can Apply?',
          description: 'Children and teenagers up to 16 years old with refractive errors (myopia, hyperopia, astigmatism) who are beneficiaries of the Spanish National Health System (SNS), or members of MUFACE, MUGEJU, or ISFAS mutual funds.',
        },
        {
          icon: FileText,
          title: 'Required Documents',
          description: 'For children ≤5 years: Health card with CIPA code. For children 6-16 years: Health card, optical prescription, and ID of the legal representative.',
        },
        {
          icon: ClipboardCheck,
          title: 'How to Apply',
          description: 'Visit Looptica with the required documents. We will process the subsidy directly at our store. No need to apply online or visit government offices.',
        },
      ],
      es: [
        {
          icon: Users,
          title: '¿Quién Puede Solicitar?',
          description: 'Niños y adolescentes de hasta 16 años con errores refractivos (miopía, hipermetropía, astigmatismo) que sean beneficiarios del Sistema Nacional de Salud (SNS), o mutualistas de MUFACE, MUGEJU o ISFAS.',
        },
        {
          icon: FileText,
          title: 'Documentos Necesarios',
          description: 'Para menores de ≤5 años: Tarjeta sanitaria con código CIPA. Para niños de 6-16 años: Tarjeta sanitaria, prescripción óptica y DNI del representante legal.',
        },
        {
          icon: ClipboardCheck,
          title: 'Cómo Solicitarlo',
          description: 'Visita Looptica con los documentos necesarios. Tramitamos la subvención directamente en nuestra tienda. No es necesario solicitar online ni visitar oficinas gubernamentales.',
        },
      ],
      ca: [
        {
          icon: Users,
          title: 'Qui Pot Sol·licitar?',
          description: 'Nens i adolescents de fins a 16 anys amb errors refractius (miopia, hipermetropia, astigmatisme) que siguin beneficiaris del Sistema Nacional de Salut (SNS), o mutualistes de MUFACE, MUGEJU o ISFAS.',
        },
        {
          icon: FileText,
          title: 'Documents Necessaris',
          description: 'Per a menors de ≤5 anys: Targeta sanitària amb codi CIPA. Per a nens de 6-16 anys: Targeta sanitària, prescripció òptica i DNI del representant legal.',
        },
        {
          icon: ClipboardCheck,
          title: 'Com Sol·licitar-ho',
          description: 'Visita Looptica amb els documents necessaris. Tramitem la subvenció directament a la nostra botiga. No cal sol·licitar online ni visitar oficines governamentals.',
        },
      ],
      de: [
        {
          icon: Users,
          title: 'Wer Kann Beantragen?',
          description: 'Kinder und Jugendliche bis 16 Jahre mit Refraktionsfehlern (Kurzsichtigkeit, Weitsichtigkeit, Astigmatismus), die Begünstigte des spanischen Nationalen Gesundheitssystems (SNS) sind, oder Mitglieder der MUFACE, MUGEJU oder ISFAS Versicherungen.',
        },
        {
          icon: FileText,
          title: 'Erforderliche Dokumente',
          description: 'Für Kinder ≤5 Jahre: Gesundheitskarte mit CIPA-Code. Für Kinder 6-16 Jahre: Gesundheitskarte, optische Verordnung und Ausweis des gesetzlichen Vertreters.',
        },
        {
          icon: ClipboardCheck,
          title: 'Wie Beantragen',
          description: 'Besuchen Sie Looptica mit den erforderlichen Dokumenten. Wir bearbeiten die Beihilfe direkt in unserem Geschäft. Kein Online-Antrag oder Behördenbesuch erforderlich.',
        },
      ],
    },
    eligibility: {
      en: {
        title: 'Eligibility Criteria',
        items: [
          'Children and teenagers from 0 to 16 years old',
          'Diagnosed with myopia, hyperopia, astigmatism, or presbyopia',
          'Beneficiaries of the Spanish National Health System (SNS)',
          'Members of MUFACE, MUGEJU, or ISFAS mutual funds',
          'One subsidy per person per year (maximum €100)',
          'Valid for glasses or contact lenses (not both in the same year)',
        ],
      },
      es: {
        title: 'Criterios de Elegibilidad',
        items: [
          'Niños y adolescentes de 0 a 16 años',
          'Diagnosticados con miopía, hipermetropía, astigmatismo o presbicia',
          'Beneficiarios del Sistema Nacional de Salud (SNS)',
          'Mutualistas de MUFACE, MUGEJU o ISFAS',
          'Una subvención por persona al año (máximo 100€)',
          'Válido para gafas o lentillas (no ambos en el mismo año)',
        ],
      },
      ca: {
        title: 'Criteris d\'Elegibilitat',
        items: [
          'Nens i adolescents de 0 a 16 anys',
          'Diagnosticats amb miopia, hipermetropia, astigmatisme o presbícia',
          'Beneficiaris del Sistema Nacional de Salut (SNS)',
          'Mutualistes de MUFACE, MUGEJU o ISFAS',
          'Una subvenció per persona a l\'any (màxim 100€)',
          'Vàlid per a ulleres o lents de contacte (no ambdós el mateix any)',
        ],
      },
      de: {
        title: 'Berechtigungskriterien',
        items: [
          'Kinder und Jugendliche von 0 bis 16 Jahren',
          'Diagnostiziert mit Kurzsichtigkeit, Weitsichtigkeit, Astigmatismus oder Presbyopie',
          'Begünstigte des spanischen Nationalen Gesundheitssystems (SNS)',
          'Mitglieder der MUFACE, MUGEJU oder ISFAS Versicherungen',
          'Eine Beihilfe pro Person und Jahr (maximal 100€)',
          'Gültig für Brillen oder Kontaktlinsen (nicht beides im selben Jahr)',
        ],
      },
    },
    faq: {
      en: {
        title: 'Frequently Asked Questions',
        questions: [
          {
            question: 'What is Plan VEO?',
            answer: 'Plan VEO (Visión y Equipamiento Óptico) is a Spanish government program that provides up to €100 per year for corrective eyewear (glasses or contact lenses) for children and teenagers up to 16 years old with vision problems.',
          },
          {
            question: 'Who can apply for the Plan VEO subsidy?',
            answer: 'Children and teenagers from 0 to 16 years old who are diagnosed with refractive errors (myopia, hyperopia, astigmatism) and are beneficiaries of the Spanish National Health System (SNS) or members of MUFACE, MUGEJU, or ISFAS mutual funds.',
          },
          {
            question: 'What products are covered by Plan VEO?',
            answer: 'The subsidy covers prescription glasses (frames and lenses) or contact lenses. You can choose one or the other, but not both in the same year.',
          },
          {
            question: 'What documents do I need to apply?',
            answer: 'For children up to 5 years: Health card with CIPA code. For children 6-16 years: Health card, optical prescription from an ophthalmologist or optometrist, and ID of the legal representative.',
          },
          {
            question: 'Can I buy products costing more than €100?',
            answer: 'Yes, you can purchase eyewear costing more than €100. The Plan VEO subsidy will cover up to €100, and you pay the difference.',
          },
          {
            question: 'Can I save unused balance for later purchases?',
            answer: 'No, the €100 subsidy cannot be accumulated. It must be used in a single purchase within the calendar year. Any unused amount is forfeited.',
          },
          {
            question: 'Can I apply for the subsidy again next year?',
            answer: 'Yes, the Plan VEO subsidy can be requested once per calendar year until the child turns 17 years old, as long as the program remains active.',
          },
          {
            question: 'Until when is Plan VEO valid?',
            answer: 'Plan VEO is currently valid until December 31, 2026. The program may be extended by the government.',
          },
        ],
      },
      es: {
        title: 'Preguntas Frecuentes',
        questions: [
          {
            question: '¿Qué es el Plan VEO?',
            answer: 'El Plan VEO (Visión y Equipamiento Óptico) es un programa del gobierno español que proporciona hasta 100€ al año para equipamiento óptico correctivo (gafas o lentillas) para niños y adolescentes de hasta 16 años con problemas de visión.',
          },
          {
            question: '¿Quién puede solicitar la subvención del Plan VEO?',
            answer: 'Niños y adolescentes de 0 a 16 años diagnosticados con errores refractivos (miopía, hipermetropía, astigmatismo) que sean beneficiarios del Sistema Nacional de Salud (SNS) o mutualistas de MUFACE, MUGEJU o ISFAS.',
          },
          {
            question: '¿Qué productos cubre el Plan VEO?',
            answer: 'La subvención cubre gafas graduadas (monturas y cristales) o lentes de contacto. Puedes elegir uno u otro, pero no ambos en el mismo año.',
          },
          {
            question: '¿Qué documentos necesito para solicitar?',
            answer: 'Para menores de hasta 5 años: Tarjeta sanitaria con código CIPA. Para niños de 6-16 años: Tarjeta sanitaria, prescripción óptica de un oftalmólogo u optometrista, y DNI del representante legal.',
          },
          {
            question: '¿Puedo comprar productos de más de 100€?',
            answer: 'Sí, puedes comprar gafas que cuesten más de 100€. La subvención del Plan VEO cubrirá hasta 100€ y tú pagas la diferencia.',
          },
          {
            question: '¿Puedo guardar el saldo no utilizado para otras compras?',
            answer: 'No, la subvención de 100€ no se puede acumular. Debe utilizarse en una sola compra dentro del año natural. Cualquier cantidad no utilizada se pierde.',
          },
          {
            question: '¿Puedo volver a solicitar la subvención el próximo año?',
            answer: 'Sí, la subvención del Plan VEO se puede solicitar una vez por año natural hasta que el niño cumpla 17 años, siempre que el programa siga activo.',
          },
          {
            question: '¿Hasta cuándo está vigente el Plan VEO?',
            answer: 'El Plan VEO está vigente actualmente hasta el 31 de diciembre de 2026. El programa puede ser extendido por el gobierno.',
          },
        ],
      },
      ca: {
        title: 'Preguntes Freqüents',
        questions: [
          {
            question: 'Què és el Plan VEO?',
            answer: 'El Plan VEO (Visión y Equipamiento Óptico) és un programa del govern espanyol que proporciona fins a 100€ l\'any per a equipament òptic correctiu (ulleres o lents de contacte) per a nens i adolescents de fins a 16 anys amb problemes de visió.',
          },
          {
            question: 'Qui pot sol·licitar la subvenció del Plan VEO?',
            answer: 'Nens i adolescents de 0 a 16 anys diagnosticats amb errors refractius (miopia, hipermetropia, astigmatisme) que siguin beneficiaris del Sistema Nacional de Salut (SNS) o mutualistes de MUFACE, MUGEJU o ISFAS.',
          },
          {
            question: 'Quins productes cobreix el Plan VEO?',
            answer: 'La subvenció cobreix ulleres graduades (muntures i vidres) o lents de contacte. Pots triar l\'un o l\'altre, però no ambdós el mateix any.',
          },
          {
            question: 'Quins documents necessito per sol·licitar?',
            answer: 'Per a menors de fins a 5 anys: Targeta sanitària amb codi CIPA. Per a nens de 6-16 anys: Targeta sanitària, prescripció òptica d\'un oftalmòleg o optometrista, i DNI del representant legal.',
          },
          {
            question: 'Puc comprar productes de més de 100€?',
            answer: 'Sí, pots comprar ulleres que costin més de 100€. La subvenció del Plan VEO cobrirà fins a 100€ i tu pagues la diferència.',
          },
          {
            question: 'Puc guardar el saldo no utilitzat per a altres compres?',
            answer: 'No, la subvenció de 100€ no es pot acumular. S\'ha d\'utilitzar en una sola compra dins de l\'any natural. Qualsevol quantitat no utilitzada es perd.',
          },
          {
            question: 'Puc tornar a sol·licitar la subvenció l\'any vinent?',
            answer: 'Sí, la subvenció del Plan VEO es pot sol·licitar una vegada per any natural fins que el nen compleixi 17 anys, sempre que el programa segueixi actiu.',
          },
          {
            question: 'Fins quan està vigent el Plan VEO?',
            answer: 'El Plan VEO està vigent actualment fins al 31 de desembre de 2026. El programa pot ser estès pel govern.',
          },
        ],
      },
      de: {
        title: 'Häufig Gestellte Fragen',
        questions: [
          {
            question: 'Was ist Plan VEO?',
            answer: 'Plan VEO (Visión y Equipamiento Óptico) ist ein spanisches Regierungsprogramm, das bis zu 100€ pro Jahr für korrigierende Sehhilfen (Brillen oder Kontaktlinsen) für Kinder und Jugendliche bis 16 Jahre mit Sehproblemen bereitstellt.',
          },
          {
            question: 'Wer kann die Plan VEO Beihilfe beantragen?',
            answer: 'Kinder und Jugendliche von 0 bis 16 Jahren, die mit Refraktionsfehlern (Kurzsichtigkeit, Weitsichtigkeit, Astigmatismus) diagnostiziert wurden und Begünstigte des spanischen Nationalen Gesundheitssystems (SNS) sind oder Mitglieder der MUFACE, MUGEJU oder ISFAS Versicherungen.',
          },
          {
            question: 'Welche Produkte werden von Plan VEO abgedeckt?',
            answer: 'Die Beihilfe deckt Korrekturbrillen (Fassungen und Gläser) oder Kontaktlinsen ab. Sie können das eine oder das andere wählen, aber nicht beides im selben Jahr.',
          },
          {
            question: 'Welche Dokumente benötige ich für den Antrag?',
            answer: 'Für Kinder bis 5 Jahre: Gesundheitskarte mit CIPA-Code. Für Kinder 6-16 Jahre: Gesundheitskarte, optische Verordnung eines Augenarztes oder Optometristen und Ausweis des gesetzlichen Vertreters.',
          },
          {
            question: 'Kann ich Produkte über 100€ kaufen?',
            answer: 'Ja, Sie können Brillen kaufen, die mehr als 100€ kosten. Die Plan VEO Beihilfe deckt bis zu 100€ ab und Sie zahlen die Differenz.',
          },
          {
            question: 'Kann ich nicht genutztes Guthaben für spätere Käufe aufbewahren?',
            answer: 'Nein, die 100€ Beihilfe kann nicht angespart werden. Sie muss in einem einzigen Kauf innerhalb des Kalenderjahres verwendet werden. Jeder nicht genutzte Betrag verfällt.',
          },
          {
            question: 'Kann ich die Beihilfe nächstes Jahr erneut beantragen?',
            answer: 'Ja, die Plan VEO Beihilfe kann einmal pro Kalenderjahr beantragt werden, bis das Kind 17 Jahre alt wird, solange das Programm aktiv bleibt.',
          },
          {
            question: 'Bis wann ist Plan VEO gültig?',
            answer: 'Plan VEO ist derzeit bis zum 31. Dezember 2026 gültig. Das Programm kann von der Regierung verlängert werden.',
          },
        ],
      },
    },
    cta: {
      en: {
        title: 'Apply for Plan VEO at Looptica',
        description: 'Visit our store in Barcelona Poblenou to apply for the Plan VEO subsidy. Our team will guide you through the process and help you choose the perfect eyewear for your child.',
        button: 'Schedule Appointment',
        contact: 'Contact Us for More Information',
      },
      es: {
        title: 'Solicita el Plan VEO en Looptica',
        description: 'Visita nuestra tienda en Barcelona Poblenou para solicitar la subvención del Plan VEO. Nuestro equipo te guiará en el proceso y te ayudará a elegir las gafas perfectas para tu hijo.',
        button: 'Programar Cita',
        contact: 'Contáctanos para Más Información',
      },
      ca: {
        title: 'Sol·licita el Plan VEO a Looptica',
        description: 'Visita la nostra botiga a Barcelona Poblenou per sol·licitar la subvenció del Plan VEO. El nostre equip et guiarà en el procés i t\'ajudarà a escollir les ulleres perfectes pel teu fill.',
        button: 'Programar Cita',
        contact: 'Contacta\'ns per a Més Informació',
      },
      de: {
        title: 'Beantragen Sie Plan VEO bei Looptica',
        description: 'Besuchen Sie unser Geschäft in Barcelona Poblenou, um die Plan VEO Beihilfe zu beantragen. Unser Team führt Sie durch den Prozess und hilft Ihnen, die perfekte Brille für Ihr Kind auszuwählen.',
        button: 'Termin vereinbaren',
        contact: 'Kontaktieren Sie Uns für Weitere Informationen',
      },
    },
  };

  const currentContent = {
    meta: content.meta[language as keyof typeof content.meta],
    hero: content.hero[language as keyof typeof content.hero],
    intro: content.intro[language as keyof typeof content.intro],
    whatIs: content.whatIs[language as keyof typeof content.whatIs],
    cards: content.cards[language as keyof typeof content.cards],
    eligibility: content.eligibility[language as keyof typeof content.eligibility],
    faq: content.faq[language as keyof typeof content.faq],
    cta: content.cta[language as keyof typeof content.cta],
  };

  const languages = ['en', 'es', 'ca', 'de'];

  // Generate FAQ schema for JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": currentContent.faq.questions.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>{currentContent.meta.title}</title>
        <meta name="description" content={currentContent.meta.description} />
        <link rel="canonical" href={`https://www.looptica.com/${language}/services/plan-veo`} />
        {languages.map((lang) => (
          <link
            key={lang}
            rel="alternate"
            hrefLang={lang}
            href={`https://www.looptica.com/${lang}/services/plan-veo`}
          />
        ))}
        <link rel="alternate" hrefLang="x-default" href="https://www.looptica.com/ca/services/plan-veo" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <ServiceLayout
        title={currentContent.hero.title}
        subtitle={currentContent.hero.subtitle}
        image="/images/veo_crop_square.jpeg"
        hideCTA={true}
      >
        {/* Introduction */}
        <div className="prose max-w-none mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {currentContent.intro}
          </p>
        </div>

        {/* What is Plan VEO */}
        <div className="bg-muted/50 rounded-lg p-6 mb-12">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <BadgeEuro className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">{currentContent.whatIs.title}</h2>
              <p className="text-muted-foreground">{currentContent.whatIs.description}</p>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {currentContent.cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Eligibility */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{currentContent.eligibility.title}</h2>
          <ul className="space-y-3">
            {currentContent.eligibility.items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="bg-primary/10 p-1 rounded-full mt-1">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/5 rounded-lg p-8 text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">{currentContent.cta.title}</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {currentContent.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GoogleCalendarButton size="lg">
              {currentContent.cta.button}
            </GoogleCalendarButton>
            <Button asChild variant="outline" size="lg">
              <a href={`/${language}/#contact`}>
                {currentContent.cta.contact}
              </a>
            </Button>
          </div>
        </div>

        {/* FAQ Section */}
        <ScrollReveal>
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-primary" />
              {currentContent.faq.title}
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {currentContent.faq.questions.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </ServiceLayout>
    </>
  );
};

export default PlanVeo;
