import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ServiceLayout from '@/components/layout/ServiceLayout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/config/languages';
import heroImage from '@/assets/ulleres-nens-hero.jpg';

const pageTitle: { [key in Language]: string } = {
  ca: "Ulleres i Lentilles per a Nens a Barcelona Poblenou",
  es: "Gafas y Lentillas para Niños en Barcelona Poblenou",
  en: "Kids' Glasses and Contact Lenses in Barcelona Poblenou",
  de: "Kinderbrillen und Kontaktlinsen in Barcelona Poblenou",
};

const pageDescription: { [key in Language]: string } = {
  ca: "Ulleres graduades infantils a Poblenou amb muntures Nano, Polaroid i Centrostyle. Adaptem lentilles des dels 0 anys, incloses lents pediàtriques.",
  es: "Gafas graduadas infantiles en Poblenou con monturas Nano, Polaroid y Centrostyle. Adaptamos lentillas desde los 0 años, incluidas lentes pediátricas.",
  en: "Children's prescription glasses in Poblenou with Nano, Polaroid and Centrostyle frames. Contact lens fitting from age 0, including paediatric lenses.",
  de: "Kinderbrillen in Poblenou mit Fassungen von Nano, Polaroid und Centrostyle. Kontaktlinsenanpassung ab 0 Jahren, auch pädiatrische Linsen.",
};

const hero = {
  ca: { title: "Ulleres i lentilles per a nens", subtitle: "Muntures que aguanten el dia a dia i lentilles adaptades des dels 0 anys." },
  es: { title: "Gafas y lentillas para niños", subtitle: "Monturas que aguantan el día a día y lentillas adaptadas desde los 0 años." },
  en: { title: "Kids' glasses and contact lenses", subtitle: "Frames that survive everyday life, and contact lenses fitted from age 0." },
  de: { title: "Kinderbrillen und Kontaktlinsen", subtitle: "Fassungen, die den Alltag aushalten, und Kontaktlinsen ab 0 Jahren." },
};

const intro = {
  ca: [
    "Unes ulleres infantils no són unes ulleres d'adult més petites. Han d'aguantar caigudes i patis, no han de relliscar quan el nen corre i, sobretot, s'han de portar: si molesten, acaben a la motxilla i la correcció no serveix de res.",
    "Per això, a Looptica dediquem temps a l'ajust: mesurem bé el centrat, adaptem el pont i les varetes al cap del nen i revisem l'ajust cada vegada que veniu, perquè el cap creix.",
  ],
  es: [
    "Unas gafas infantiles no son unas gafas de adulto más pequeñas. Tienen que aguantar caídas y patios, no deben resbalar cuando el niño corre y, sobre todo, se tienen que llevar puestas: si molestan, acaban en la mochila y la corrección no sirve de nada.",
    "Por eso, en Looptica dedicamos tiempo al ajuste: medimos bien el centrado, adaptamos el puente y las varillas a la cabeza del niño y revisamos el ajuste cada vez que venís, porque la cabeza crece.",
  ],
  en: [
    "Children's glasses are not smaller adult glasses. They have to survive drops and playgrounds, they mustn't slip when the child runs and, above all, they have to be worn: if they are uncomfortable, they end up in the backpack and the correction is useless.",
    "That is why we take time over the fit: we measure the centring carefully, adapt the bridge and temples to the child's head, and check the fit every time you come, because heads grow.",
  ],
  de: [
    "Kinderbrillen sind keine verkleinerten Erwachsenenbrillen. Sie müssen Stürze und Pausenhof aushalten, dürfen beim Rennen nicht rutschen und vor allem: Sie müssen getragen werden. Drücken sie, landen sie im Rucksack.",
    "Deshalb nehmen wir uns Zeit für die Anpassung: sorgfältige Zentrierung, Steg und Bügel passend zum Kopf des Kindes, und bei jedem Besuch eine Kontrolle der Passform, denn der Kopf wächst.",
  ],
};

const brandsTitle = {
  ca: "Muntures infantils que treballem",
  es: "Monturas infantiles que trabajamos",
  en: "Children's frames we work with",
  de: "Kinderfassungen, die wir führen",
};

const brands = {
  ca: [
    { name: "Nano", text: "Som distribuïdors oficials de Nano. Muntures flexibles i molt resistents, pensades específicament per a nens, amb sistemes de subjecció que no rellisquen." },
    { name: "Polaroid", text: "Ulleres graduades i de sol amb lents polaritzades, una bona opció per a la platja, la neu i les activitats a l'exterior." },
    { name: "Centrostyle", text: "Àmplia gamma infantil, amb models per a nadons i primeres ulleres amb cinta elàstica." },
  ],
  es: [
    { name: "Nano", text: "Somos distribuidores oficiales de Nano. Monturas flexibles y muy resistentes, pensadas específicamente para niños, con sistemas de sujeción que no resbalan." },
    { name: "Polaroid", text: "Gafas graduadas y de sol con lentes polarizadas, una buena opción para la playa, la nieve y las actividades al aire libre." },
    { name: "Centrostyle", text: "Amplia gama infantil, con modelos para bebés y primeras gafas con cinta elástica." },
  ],
  en: [
    { name: "Nano", text: "We are official Nano distributors. Flexible, very resistant frames designed specifically for children, with retention systems that don't slip." },
    { name: "Polaroid", text: "Prescription and sun frames with polarised lenses — a good option for the beach, the snow and outdoor activities." },
    { name: "Centrostyle", text: "A wide children's range, including models for babies and first glasses with an elastic strap." },
  ],
  de: [
    { name: "Nano", text: "Wir sind offizieller Nano-Händler. Flexible, sehr robuste Fassungen speziell für Kinder, mit rutschfesten Haltesystemen." },
    { name: "Polaroid", text: "Korrektions- und Sonnenbrillen mit polarisierten Gläsern — gut für Strand, Schnee und Outdoor-Aktivitäten." },
    { name: "Centrostyle", text: "Breites Kindersortiment, auch Modelle für Babys und erste Brillen mit Gummiband." },
  ],
};

const choosingTitle = {
  ca: "Com triar les ulleres del teu fill",
  es: "Cómo elegir las gafas de tu hijo",
  en: "How to choose your child's glasses",
  de: "So wählen Sie die Brille Ihres Kindes",
};

const choosing = {
  ca: [
    "Material: prioritzem materials flexibles i lleugers, que suporten torsions sense trencar-se.",
    "Subjecció: pont adaptat (els nens petits encara no tenen os nasal desenvolupat), varetes corbades o cinta elàstica segons l'edat.",
    "Lents: material resistent a l'impacte, imprescindible en nens, amb tractament antiratlles i protecció ultraviolada.",
    "Mida: la muntura ha de cobrir bé el camp visual; ni tan gran que llisqui ni tan petita que el nen miri per fora.",
    "Que li agradi: si tria ell la muntura entre les opcions adequades, se la posarà molt més.",
  ],
  es: [
    "Material: priorizamos materiales flexibles y ligeros, que soportan torsiones sin romperse.",
    "Sujeción: puente adaptado (los niños pequeños aún no tienen el hueso nasal desarrollado), varillas curvadas o cinta elástica según la edad.",
    "Lentes: material resistente al impacto, imprescindible en niños, con tratamiento antirrayado y protección ultravioleta.",
    "Tamaño: la montura debe cubrir bien el campo visual; ni tan grande que resbale ni tan pequeña que el niño mire por fuera.",
    "Que le guste: si elige él la montura entre las opciones adecuadas, se la pondrá mucho más.",
  ],
  en: [
    "Material: we favour flexible, lightweight materials that bend without breaking.",
    "Fit: adapted bridge (small children don't yet have a developed nasal bone), curved temples or an elastic strap depending on age.",
    "Lenses: impact-resistant material — essential for children — with scratch-resistant coating and UV protection.",
    "Size: the frame should cover the visual field; not so big it slips, not so small the child looks over it.",
    "They should like it: if the child picks the frame from suitable options, they will wear it far more.",
  ],
  de: [
    "Material: flexible, leichte Materialien, die sich verwinden lassen, ohne zu brechen.",
    "Sitz: angepasster Steg (kleine Kinder haben noch kein ausgeprägtes Nasenbein), gebogene Bügel oder Gummiband je nach Alter.",
    "Gläser: schlagfestes Material — bei Kindern unverzichtbar —, mit Hartschicht und UV-Schutz.",
    "Größe: Die Fassung sollte das Blickfeld abdecken; nicht zu groß, nicht zu klein.",
    "Gefallen: Wählt das Kind aus geeigneten Modellen selbst aus, trägt es die Brille deutlich häufiger.",
  ],
};

const lensesTitle = {
  ca: "Lentilles per a nens: des dels 0 anys",
  es: "Lentillas para niños: desde los 0 años",
  en: "Contact lenses for children: from age 0",
  de: "Kontaktlinsen für Kinder: ab 0 Jahren",
};

const lenses = {
  ca: [
    "A Looptica adaptem lentilles de contacte a nens des dels 0 anys, sempre per prescripció i indicació de l'oftalmòleg. Això inclou lents pediàtriques per a casos com la catarata congènita, en què després de la cirurgia cal compensar òpticament l'ull operat perquè el sistema visual es pugui desenvolupar amb normalitat.",
    "Són adaptacions delicades, que fem en coordinació amb l'oftalmòleg i amb un seguiment estret: els paràmetres de l'ull d'un nadó canvien ràpid i cal revisar-los sovint. També ensenyem als pares a manipular i mantenir les lents amb seguretat.",
    "En nens més grans, les lentilles solen aparèixer per l'esport, per una diferència de graduació important entre els dos ulls o com a part d'un programa de control de la miopia. No hi ha una edat màgica: el que compta és la responsabilitat i la higiene, i això ho valorem cas per cas.",
  ],
  es: [
    "En Looptica adaptamos lentes de contacto a niños desde los 0 años, siempre por prescripción e indicación del oftalmólogo. Esto incluye lentes pediátricas para casos como la catarata congénita, en los que tras la cirugía hay que compensar ópticamente el ojo operado para que el sistema visual pueda desarrollarse con normalidad.",
    "Son adaptaciones delicadas, que hacemos en coordinación con el oftalmólogo y con un seguimiento estrecho: los parámetros del ojo de un bebé cambian rápido y hay que revisarlos a menudo. También enseñamos a los padres a manipular y mantener las lentes con seguridad.",
    "En niños más mayores, las lentillas suelen aparecer por el deporte, por una diferencia de graduación importante entre ambos ojos o como parte de un programa de control de la miopía. No hay una edad mágica: lo que cuenta es la responsabilidad y la higiene, y eso lo valoramos caso por caso.",
  ],
  en: [
    "At Looptica we fit contact lenses for children from age 0, always on the ophthalmologist's prescription and indication. That includes paediatric lenses for cases such as congenital cataract, where after surgery the operated eye must be optically compensated so the visual system can develop normally.",
    "These are delicate fittings, done in coordination with the ophthalmologist and with close follow-up: a baby's eye parameters change quickly and need frequent review. We also teach parents to handle and care for the lenses safely.",
    "In older children, contact lenses usually come up for sport, for a significant difference in prescription between the eyes, or as part of a myopia control programme. There is no magic age: what counts is responsibility and hygiene, assessed case by case.",
  ],
  de: [
    "Bei Looptica passen wir Kontaktlinsen für Kinder ab 0 Jahren an — immer auf Verordnung und Anweisung des Augenarztes. Dazu gehören pädiatrische Linsen bei angeborenem Katarakt, wo das operierte Auge nach dem Eingriff optisch ausgeglichen werden muss, damit sich das Sehsystem normal entwickeln kann.",

    "Das sind anspruchsvolle Anpassungen, die wir in Abstimmung mit dem Augenarzt und mit enger Nachkontrolle durchführen: Die Augenwerte eines Säuglings ändern sich schnell. Wir zeigen den Eltern außerdem den sicheren Umgang und die Pflege.",
    "Bei älteren Kindern kommen Kontaktlinsen meist wegen Sport, großer Werteunterschiede zwischen den Augen oder im Rahmen der Myopiekontrolle ins Spiel. Ein magisches Alter gibt es nicht: Entscheidend sind Verantwortung und Hygiene.",
  ],
};

const faqTitle = {
  ca: "Preguntes freqüents",
  es: "Preguntas frecuentes",
  en: "Frequently asked questions",
  de: "Häufige Fragen",
};

const faqs = {
  ca: [
    { q: "El meu fill no es vol posar les ulleres. Què faig?", a: "Gairebé sempre és una qüestió d'ajust o d'elecció. Revisem que no premin ni rellisquin i deixem que triï la muntura entre opcions adequades. Passa't per la botiga i ho ajustem sense compromís." },
    { q: "Quantes vegades cal canviar les ulleres?", a: "Depèn del creixement i dels canvis de graduació. En nens en edat de creixement recomanem una revisió anual amb l'oftalmòleg; a l'òptica comprovem l'ajust i actualitzem les lents segons la seva prescripció." },
    { q: "A partir de quina edat pot portar lentilles?", a: "Adaptem lentilles des dels 0 anys quan hi ha una indicació clínica, com la catarata congènita. Per a ús habitual en nens sans, valorem la maduresa i la higiene de cada cas." },
    { q: "Feu lents pediàtriques per a catarata congènita?", a: "Sí. És una de les adaptacions especials que fem, sempre en coordinació amb l'oftalmòleg i amb revisions freqüents." },
  ],
  es: [
    { q: "Mi hijo no se quiere poner las gafas. ¿Qué hago?", a: "Casi siempre es una cuestión de ajuste o de elección. Revisamos que no aprieten ni resbalen y dejamos que elija la montura entre opciones adecuadas. Pásate por la tienda y lo ajustamos sin compromiso." },
    { q: "¿Cada cuánto hay que cambiar las gafas?", a: "Depende del crecimiento y de los cambios de graduación. En niños en edad de crecimiento recomendamos una revisión anual con el oftalmólogo; en la óptica comprobamos el ajuste y actualizamos las lentes según su prescripción." },
    { q: "¿A partir de qué edad puede llevar lentillas?", a: "Adaptamos lentillas desde los 0 años cuando hay una indicación clínica, como la catarata congénita. Para uso habitual en niños sanos, valoramos la madurez y la higiene de cada caso." },
    { q: "¿Hacéis lentes pediátricas para catarata congénita?", a: "Sí. Es una de las adaptaciones especiales que hacemos, siempre en coordinación con el oftalmólogo y con revisiones frecuentes." },
  ],
  en: [
    { q: "My child refuses to wear their glasses. What can I do?", a: "It is almost always a matter of fit or of choice. We check they don't pinch or slip, and let the child pick the frame from suitable options. Drop by the shop and we'll adjust them, no obligation." },
    { q: "How often should glasses be replaced?", a: "It depends on growth and prescription changes. For growing children we recommend a yearly review with the ophthalmologist; in store we check the fit and update the lenses to their prescription." },
    { q: "From what age can a child wear contact lenses?", a: "We fit contact lenses from age 0 when there is a clinical indication, such as congenital cataract. For routine wear in healthy children, we assess maturity and hygiene case by case." },
    { q: "Do you fit paediatric lenses for congenital cataract?", a: "Yes. It is one of the special fittings we do, always coordinated with the ophthalmologist and with frequent reviews." },
  ],
  de: [
    { q: "Mein Kind will die Brille nicht tragen. Was tun?", a: "Fast immer liegt es an der Passform oder an der Auswahl. Wir prüfen, dass nichts drückt oder rutscht, und lassen das Kind aus geeigneten Modellen wählen. Kommen Sie unverbindlich vorbei." },
    { q: "Wie oft muss die Brille gewechselt werden?", a: "Das hängt vom Wachstum und von Werteänderungen ab. Bei wachsenden Kindern empfehlen wir eine jährliche Kontrolle beim Augenarzt; im Geschäft prüfen wir die Passform und aktualisieren die Gläser gemäß Verordnung." },
    { q: "Ab welchem Alter sind Kontaktlinsen möglich?", a: "Bei klinischer Indikation wie angeborenem Katarakt ab 0 Jahren. Für den Alltagsgebrauch bei gesunden Kindern beurteilen wir Reife und Hygiene individuell." },
    { q: "Fertigen Sie pädiatrische Linsen bei angeborenem Katarakt an?", a: "Ja. Das ist eine unserer Spezialanpassungen, immer in Abstimmung mit dem Augenarzt und mit engmaschigen Kontrollen." },
  ],
};

const relatedLinks = {
  ca: <>Més informació sobre <Link to="/ca/services/eyeglasses" className="text-[#55afa9] underline font-medium">ulleres graduades</Link> i <Link to="/ca/services/lents-contacte" className="text-[#55afa9] underline font-medium">lents de contacte</Link>.</>,
  es: <>Más información sobre <Link to="/es/services/eyeglasses" className="text-[#55afa9] underline font-medium">gafas graduadas</Link> y <Link to="/es/services/lents-contacte" className="text-[#55afa9] underline font-medium">lentes de contacto</Link>.</>,
  en: <>More about <Link to="/en/services/eyeglasses" className="text-[#55afa9] underline font-medium">prescription glasses</Link> and <Link to="/en/services/lents-contacte" className="text-[#55afa9] underline font-medium">contact lenses</Link>.</>,
  de: <>Mehr zu <Link to="/de/services/eyeglasses" className="text-[#55afa9] underline font-medium">Korrektionsbrillen</Link> und <Link to="/de/services/lents-contacte" className="text-[#55afa9] underline font-medium">Kontaktlinsen</Link>.</>,
};

const parentCrumb = {
  ca: "Visió infantil",
  es: "Visión infantil",
  en: "Children's vision",
  de: "Kindersehen",
};

const UlleresNens = () => {
  const { language } = useLanguage();
  const lang = language as Language;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs[lang].map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <ServiceLayout
        title={hero[lang].title}
        subtitle={hero[lang].subtitle}
        image={heroImage}
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        appointmentSubject="Ulleres i lentilles infantils a Looptica"
        breadcrumbParents={[{ label: parentCrumb[lang], path: '/visio-infantil' }]}
      >
        <ScrollReveal>
          <div className="prose prose-lg max-w-none mb-12">
            {intro[lang].map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">{brandsTitle[lang]}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {brands[lang].map((b) => (
                <div key={b.name} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-medium mb-2 text-[#55afa9]">{b.name}</h3>
                  <p className="text-gray-700">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="prose prose-lg max-w-none mb-12">
            <h2>{choosingTitle[lang]}</h2>
            <ul>
              {choosing[lang].map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-[#e8f6f5] p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold mb-4">{lensesTitle[lang]}</h2>
            <div className="space-y-4 text-gray-700">
              {lenses[lang].map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <p className="text-lg">{relatedLinks[lang]}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">{faqTitle[lang]}</h2>
            <div className="space-y-4">
              {faqs[lang].map((faq, index) => (
                <details key={index} className="bg-white p-5 rounded-lg shadow-sm group">
                  <summary className="font-medium text-lg cursor-pointer list-none flex justify-between items-center">
                    <span>{faq.q}</span>
                    <span className="ml-4 text-[#55afa9] group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-gray-700">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </ServiceLayout>
    </>
  );
};

export default UlleresNens;
