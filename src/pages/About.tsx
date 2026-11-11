import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { ScrollReveal, FloatingWhatsApp } from '@/components/ui';
import { Helmet } from 'react-helmet-async';
import { whatsappTranslations } from '@/config/whatsappConfig';
import { SUPPORTED_LANGUAGES } from '@/config/languages';

const About = () => {
  const { language, t } = useLanguage();
  
  // Content organized by section first, then by language
  const content = {
    meta: {
      en: {
        title: "About looptica | Optics and audiology in Poblenou, Barcelona",
        description: "Meet the looptica team in Poblenou, Barcelona: optometrists and audiologists offering personalized vision and hearing care since 2018."
      },
      es: {
        title: "Sobre looptica | Óptica y audiología en Poblenou, Barcelona",
        description: "Conoce al equipo de looptica en Poblenou, Barcelona: ópticos optometristas y audiólogos con atención personalizada en visión y audición desde 2018."
      },
      ca: {
        title: "Sobre looptica | Òptica i audiologia a Poblenou, Barcelona",
        description: "Coneix l'equip de looptica a Poblenou, Barcelona: òptics optometristes i audiòlegs amb atenció personalitzada en visió i audició des de 2018."
      },
      de: {
        title: "Über looptica | Optik und Audiologie in Poblenou, Barcelona",
        description: "Lernen Sie das looptica-Team in Poblenou, Barcelona kennen: Optometristen und Audiologen mit persönlicher Seh- und Hörberatung seit 2018."
      },
      it: {
        title: "Su looptica | Ottica e audiologia a Poblenou, Barcellona",
        description: "Incontra il team di looptica a Poblenou, Barcellona: ottici optometristi e audioprotesisti con attenzione personalizzata per vista e udito dal 2018."
      }
    },
    page: {
      title: {
        en: "About Us",
        es: "Quien somos",
        ca: "Qui som",
        de: "Über Uns",
        it: "Chi siamo"
      }
    },
    teamMembers: [
      {
        name: "Elena",
        role: {
          en: "Owner\n\nOptician Optometrist",
          es: "Propietaria\n\nÓptica Optometrista",
          ca: "Propietària\n\nÒptica Optometrista",
          de: "Inhaberin\n\nOptikerin Optometristin",
          it: "Titolare\n\nOttica Optometrista"
        },
        image: "/images/_DSC4776.jpg",
        bio: {
          en: [
            "As the owner of looptica, Elena brings over 15 years of experience in optometry. With her extensive knowledge and dedication to customer care, she has built looptica into a trusted name for optical and audiological services in Barcelona.",
            "Elena specializes in providing personalized eye care solutions for each client.",
            "Licensed Optician Optometrist — Col. 18568."
          ],
          es: [
            "Como propietaria de looptica, Elena aporta más de 15 años de experiencia en optometría. Con su amplio conocimiento y dedicación, ha convertido a looptica en un centro optométrico y audiológico de referencia en el barrio del Poblenou en Barcelona.",
            "Le apasiona brindar soluciones personalizadas de cuidado ocular para cada cliente.",
            "Óptica Optometrista Colegiada — Col. 18568."
          ],
          ca: [
            "Com a propietària de looptica, Elena aporta més de 15 anys d'experiència en optometria. Amb el seu ampli coneixement i dedicació, ha convertit looptica en un centre optomètric i audiològic de referència al barri del Poblenou a Barcelona.",
            "Li apassiona oferir solucions personalitzades de cura ocular per a cada client.",
            "Òptica Optometrista Col·legiada — Col. 18568."
          ],
          de: [
            "Als Inhaberin von looptica bringt Elena über 15 Jahre Erfahrung in der Optometrie mit. Mit ihrem umfassenden Wissen und ihrer Hingabe an die Kundenbetreuung hat sie looptica zu einem vertrauenswürdigen Namen für optische und audiologische Dienstleistungen in Barcelona gemacht.",
            "Elena ist spezialisiert auf die Bereitstellung personalisierter Augenpflegelösungen für jeden Kunden.",
            "Optikerin Optometristin, Mitglied der Berufskammer — Col. 18568."
          ],
          it: [
            "Come titolare di looptica, Elena porta con sé oltre 15 anni di esperienza in optometria. Con la sua vasta conoscenza e dedizione, ha reso looptica un centro ottico e audiologico di riferimento nel quartiere del Poblenou a Barcellona.",
            "È appassionata nell'offrire soluzioni personalizzate per la cura della vista di ogni cliente.",
            "Ottica Optometrista Iscritta all'Albo — Col. 18568."
          ]
        }
      },
      {
        name: "Irene",
        role: {
          en: "Contactologist\n\nOptician Optometrist",
          es: "Contactóloga\n\nÓptica Optometrista",
          ca: "Contactòloga\n\nÒptica Optometrista",
          de: "Kontaktologin\n\nOptikerin Optometristin",
          it: "Contattologa\n\nOttica Optometrista"
        },
        image: "/images/irene.jpg",
        bio: {
          en: [
            "Irene is our optical optometrist specialized in advanced contactology. Her extensive career has focused on pediatric contactology and special adaptations such as ortho-k, keratoconus, myopia control, scleral contact lenses, and other individualized solutions. With great knowledge of the current market, she offers excellent advice according to the patient's visual needs.",
            "Licensed Optician Optometrist — Col. 17739."
          ],
          es: [
            "Irene es nuestra óptica optometrista especializada en contactología avanzada. Su amplia trayectoria se ha centrado en la contactología pediátrica y adaptaciones especiales como orto-k, queratocono, control de miopía, lentes de contacto esclerales, y otras soluciones individualizadas. Con gran conocimiento del mercado actual, ofrece un excelente asesoramiento segun las necesidades visuales del paciente.",
            "Óptica Optometrista Colegiada — Col. 17739."
          ],
          ca: [
            "Irene és la nostra òptica optometrista especialitzada en contactologia avançada. La seva àmplia trajectòria s'ha centrat en contactologia pediàtrica i adaptacions especials com orto-k, queratocon, control de miopia, lents de contacte esclerals i altres solucions individualitzades. Amb gran coneixement del mercat actual, ofereix un excel·lent assessorament segons les necessitats visuals del pacient.",
            "Òptica Optometrista Col·legiada — Col. 17739."
          ],
          de: [
            "Irene ist unsere Optikerin und Optometristin, spezialisiert auf fortgeschrittene Kontaktologie. Ihre umfangreiche Karriere konzentrierte sich auf pädiatrische Kontaktologie und spezielle Anpassungen wie Ortho-K, Keratokonus, Myopiekontrolle, sklerale Kontaktlinsen und andere individualisierte Lösungen. Mit großem Wissen über den aktuellen Markt bietet sie hervorragende Beratung entsprechend den visuellen Bedürfnissen des Patienten.",
            "Optikerin Optometristin, Mitglied der Berufskammer — Col. 17739."
          ],
          it: [
            "Irene è la nostra ottica optometrista specializzata in contattologia avanzata. La sua vasta carriera si è concentrata sulla contattologia pediatrica e su adattamenti speciali come orto-k, cheratocono, controllo della miopia, lenti a contatto sclerali e altre soluzioni individualizzate. Con una profonda conoscenza del mercato attuale, offre un'eccellente consulenza in base alle esigenze visive del paziente.",
            "Ottica Optometrista Iscritta all'Albo — Col. 17739."
          ]
        }
      },
      {
        name: "Esther",
        role: {
          en: "Hearing Aid Specialist",
          es: "Audioprotesista",
          ca: "Audioprotesista",
          de: "Hörgeräteakustikerin",
          it: "Audioprotesista"
        },
        image: "/images/esther_resize.jpeg",
        bio: {
          en: [
            "Esther is our hearing aid specialist with a special interest in hearing rehabilitation. Her kind and patient approach helps clients feel comfortable when addressing their specific needs. With advanced training in the latest technologies and her interest in trends, she is able to provide a comprehensive approach to her patients' hearing health.",
            "Member of the Spanish National Association of Hearing Aid Specialists — No. 2458."
          ],
          es: [
            "Esther es nuestra audioprotesista con un interés especial en la rehabilitación auditiva. Su enfoque amable y paciente ayuda a los clientes a sentirse cómodos al abordar sus necesidades específicas. Con formación avanzada en las últimas tecnologías y su interés por las tendencias, le permiten ofrecer un enfoque integral a la salud auditiva de sus pacientes.",
            "Miembro de la Asociación Nacional de Audioprotesistas — Nº 2458."
          ],
          ca: [
            "L'Esther és la nostra audioprotesista amb un interès especial en la rehabilitació auditiva. El seu enfocament amable i pacient ajuda els clients a sentir-se còmodes en abordar les seves necessitats específiques. Amb formació avançada en les últimes tecnologies i el seu interès per les tendències, li permeten oferir un enfocament integral a la salut auditiva dels seus pacients.",
            "Membre de l'Associació Nacional d'Audioprotesistes — Nº 2458."
          ],
          de: [
            "Esther ist unsere Hörgeräteakustikerin mit besonderem Interesse an Hörrehabilitation. Ihr freundlicher und geduldiger Ansatz hilft den Klienten, sich wohl zu fühlen, wenn sie ihre spezifischen Bedürfnisse ansprechen. Mit fortgeschrittener Ausbildung in den neuesten Technologien und ihrem Interesse an Trends kann sie einen umfassenden Ansatz für die Hörgesundheit ihrer Patienten bieten.",
            "Mitglied des spanischen Berufsverbands der Hörakustiker — Nr. 2458."
          ],
          it: [
            "Esther è la nostra audioprotesista con un interesse particolare per la riabilitazione uditiva. Il suo approccio gentile e paziente aiuta i clienti a sentirsi a proprio agio nell'affrontare le loro esigenze specifiche. La formazione avanzata nelle ultime tecnologie e l'attenzione alle tendenze le consentono di offrire un approccio completo alla salute dell'udito dei suoi pazienti.",
            "Membro dell'Associazione Nazionale Spagnola degli Audioprotesisti — Nº 2458."
          ]
        }
      },
    ],


    philosophy: {
      title: {
        en: "Our Philosophy",
        es: "Nuestra Filosofía",
        ca: "La Nostra Filosofia",
        de: "Unsere Philosophie",
        it: "La Nostra Filosofia"
      },
      content: {
        en: [
          "At looptica, we believe that quality eye and ear care should be accessible, personalized, and delivered with the highest level of professionalism. Our team is committed to continuous learning and staying updated with the latest advancements in optical and audiological care.",
          "We take pride in our patient-centered approach, focusing on building long-term relationships with our clients based on trust, expertise, and exceptional service."
        ],
        es: [
          "En looptica, creemos que el cuidado ocular y auditivo de calidad debe ser accesible, personalizado y entregado con el más alto nivel de profesionalismo. Nuestro equipo está comprometido con el aprendizaje continuo y mantenerse actualizado con los últimos avances en cuidado óptico y audiológico.",
          "Nos enorgullecemos de nuestro enfoque centrado en el paciente, enfocándonos en construir relaciones a largo plazo con nuestros clientes basadas en la confianza, la experiencia y el servicio excepcional."
        ],
        ca: [
          "A looptica, creiem que la cura ocular i auditiva de qualitat ha de ser accessible, personalitzada i lliurada amb el més alt nivell de professionalisme. El nostre equip està compromès amb l'aprenentatge continu i mantenir-se actualitzat amb els últims avenços en cura òptica i audiològica.",
          "Ens enorgullim del nostre enfocament centrat en el pacient, enfocant-nos a construir relacions a llarg termini amb els nostres clients basades en la confiança, l'experiència i el servei excepcional."
        ],
        de: [
          "Bei looptica glauben wir, dass qualitativ hochwertige Augen- und Ohrenpflege zugänglich, personalisiert und mit höchstem Professionalitätsniveau geliefert werden sollte. Unser Team ist dem kontinuierlichen Lernen und der Aktualisierung mit den neuesten Fortschritten in der optischen und audiologischen Versorgung verpflichtet.",
          "Wir sind stolz auf unseren patientenzentrierten Ansatz und konzentrieren uns darauf, langfristige Beziehungen zu unseren Kunden aufzubauen, die auf Vertrauen, Fachwissen und außergewöhnlichem Service basieren."
        ],
        it: [
          "In looptica crediamo che la cura della vista e dell'udito di qualità debba essere accessibile, personalizzata e offerta con il massimo livello di professionalità. Il nostro team è impegnato nell'apprendimento continuo e nell'aggiornamento costante con gli ultimi progressi nel campo ottico e audiologico.",
          "Siamo orgogliosi del nostro approccio incentrato sul paziente, orientato a costruire relazioni a lungo termine con i nostri clienti basate su fiducia, competenza e un servizio eccezionale."
        ]
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{content.meta[language as keyof typeof content.meta].title}</title>
        <meta name="description" content={content.meta[language as keyof typeof content.meta].description} />
        <meta property="og:title" content={content.meta[language as keyof typeof content.meta].title} />
        <meta property="og:description" content={content.meta[language as keyof typeof content.meta].description} />
        <meta property="og:url" content={`https://looptica.com/${language}/about`} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://looptica.com/${language}/about`} />
        {SUPPORTED_LANGUAGES.map((lang) => (
          <link
            key={lang}
            rel="alternate"
            hrefLang={lang}
            href={`https://looptica.com/${lang}/about`}
          />
        ))}
        <link rel="alternate" hrefLang="x-default" href="https://looptica.com/ca/about" />
      </Helmet>
      <Navbar />
      <div className="pt-24">
        <Breadcrumbs
          currentPath="/about"
          items={[{ label: t('about') }]}
        />
      </div>
      <main className="flex-grow">
        <section className="py-16 px-6 lg:px-12" id="about">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900">
                {content.page.title[language as keyof typeof content.page.title]}
              </h1>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
              {content.teamMembers.map((member, index) => (
                <ScrollReveal key={member.name} origin={index === 0 ? "left" : "right"}>
                  <div className="bg-white p-8 rounded-xl shadow-md h-full flex flex-col">
                    <div className="flex-shrink-0 flex justify-center">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-48 h-48 object-cover rounded-full mb-6"
                      />
                    </div>
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center">{member.name}</h2>
                    <p className="text-sm text-center text-[#55afa9] font-medium mb-4 whitespace-pre-line">{member.role[language as keyof typeof member.role]}</p>
                    <div className="flex-grow">
                      {member.bio[language as keyof typeof member.bio].map((paragraph, idx) => (
                        <p key={idx} className="text-gray-700 mb-4">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            
            <ScrollReveal>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">{content.philosophy.title[language as keyof typeof content.philosophy.title]}</h2>
                {content.philosophy.content[language as keyof typeof content.philosophy.content].map((paragraph, index) => (
                  <p key={index} className="text-gray-700 mb-4">{paragraph}</p>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <FloatingWhatsApp 
        phoneNumber="34699594064"
        accountName="looptica"
        statusMessage={whatsappTranslations.statusMessage[language as keyof typeof whatsappTranslations.statusMessage]}
        chatMessage={whatsappTranslations.chatMessage[language as keyof typeof whatsappTranslations.chatMessage]}
        placeholder={whatsappTranslations.placeholder[language as keyof typeof whatsappTranslations.placeholder]}
      />
    </div>
  );
};

export default About;
