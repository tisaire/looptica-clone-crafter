import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ServiceLayout from '@/components/layout/ServiceLayout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/config/languages';
import heroAsset from '@/assets/catarata-congenita-barcelona-hero.jpg.asset.json';

const pageTitle: { [key in Language]: string } = {
  ca: "Cataracta Congènita Barcelona Poblenou | Lentilles Pediàtriques per a Nadons",
  es: "Catarata Congénita Barcelona Poblenou | Lentes Pediátricas para Bebés",
  en: "Congenital Cataract Barcelona Poblenou | Paediatric Contact Lenses for Babies",
  de: "Angeborener Katarakt Barcelona Poblenou | Pädiatrische Kontaktlinsen für Babys",
};

const pageDescription: { [key in Language]: string } = {
  ca: "Adaptació de lentilles pediàtriques per a nadons amb cataracta congènita a Poblenou. Treballem sota prescripció de l'oftalmòleg, amb seguiment continuat des dels 0 anys.",
  es: "Adaptación de lentes pediátricas para bebés con catarata congénita en Poblenou. Trabajamos bajo prescripción del oftalmólogo, con seguimiento estrecho desde los 0 años.",
  en: "Paediatric contact lens fitting for babies with congenital cataract in Poblenou. We work to the ophthalmologist's prescription with close follow-up from age 0.",
  de: "Pädiatrische Kontaktlinsenanpassung für Babys mit angeborenem Katarakt in Poblenou. Wir arbeiten nach augenärztlicher Verordnung mit enger Nachbetreuung ab 0 Jahren.",
};

const hero = {
  ca: { title: "Catarata congènita", subtitle: "Lentilles pediàtriques per a nadons, adaptades des dels 0 anys sota prescripció oftalmològica." },
  es: { title: "Catarata congénita", subtitle: "Lentes pediátricas para bebés, adaptadas desde los 0 años bajo prescripción oftalmológica." },
  en: { title: "Congenital cataract", subtitle: "Paediatric contact lenses for babies, fitted from age 0 on the ophthalmologist's prescription." },
  de: { title: "Angeborener Katarakt", subtitle: "Pädiatrische Kontaktlinsen für Babys, ab 0 Jahren auf augenärztliche Verordnung." },
};

const intro = {
  ca: [
    "La catarata congènita és l'opacitat del cristal·lí d'un nadó. Pot ser present ja al néixer o aparèixer durant els primers mesos de vida, i afecta el desenvolupament normal de la visió.",
    "La decisió de si cal cirurgia i quan fer-la correspon sempre a l'oftalmòleg. Un cop operat l'ull, el bebè necessita una correcció òptica que compensi el cristal·lí extret i permeti que el sistema visual es desenvolupi amb normalitat.",
    "A Looptica fem aquesta correcció amb lentilles pediàtriques de contacte, adaptades des dels 0 anys, sempre seguint la prescripció i les indicacions de l'oftalmòleg.",
  ],
  es: [
    "La catarata congénita es la opacidad del cristalino de un bebé. Puede estar presente ya al nacer o aparecer durante los primeros meses de vida, y afecta el desarrollo normal de la visión.",
    "La decisión de si es necesaria cirugía y cuándo realizarla corresponde siempre al oftalmólogo. Una vez operado el ojo, el bebé necesita una corrección óptica que compense el cristalino extraído y permita que el sistema visual se desarrolle con normalidad.",
    "En Looptica realizamos esa corrección con lentes pediátricas de contacto, adaptadas desde los 0 años, siempre siguiendo la prescripción y las indicaciones del oftalmólogo.",
  ],
  en: [
    "Congenital cataract is clouding of the lens in a baby's eye. It may be present at birth or appear during the first months of life, and it affects normal visual development.",
    "The decision whether surgery is needed, and when, is always the ophthalmologist's. Once the eye has been operated on, the baby needs an optical correction that compensates for the removed lens and lets the visual system develop normally.",
    "At Looptica we provide that correction with paediatric contact lenses, fitted from age 0, always following the ophthalmologist's prescription and instructions.",
  ],
  de: [
    "Angeborener Katarakt ist eine Trübung der Augenlinse eines Babys. Sie kann bereits bei der Geburt vorhanden sein oder sich in den ersten Lebensmonaten entwickeln und beeinträchtigt die normale Sehentwicklung.",
    "Die Entscheidung, ob eine Operation nötig ist und wann sie erfolgt, liegt immer beim Augenarzt. Nach dem Eingriff braucht das Baby eine optische Korrektion, die die entfernte Linse ausgleicht und dem Sehsystem eine normale Entwicklung ermöglicht.",
    "Bei Looptica übernehmen wir diese Korrektion mit pädiatrischen Kontaktlinsen, ab 0 Jahren angepasst, immer nach augenärztlicher Verordnung und Anweisung.",
  ],
};

const whatWeDoTitle = {
  ca: "Què fem a Looptica",
  es: "Qué hacemos en Looptica",
  en: "What we do at Looptica",
  de: "Was wir bei Looptica tun",
};

const whatWeDo = {
  ca: [
    "Adaptació de lentilles pediàtriques segons la prescripció de l'oftalmòleg.",
    "Mesura dels paràmetres de la còrnia amb instruments adaptats als nadons.",
    "Seguiment estret: els valors de l'ull d'un bebè canvien ràpid i cal revisar-los sovint.",
    "Formació dels pares en la manipulació, la col·locació i la higiene de les lents.",
    "Comunicació constant amb l'oftalmòleg per ajustar la correcció segons l'evolució.",
  ],
  es: [
    "Adaptación de lentes pediátricas según la prescripción del oftalmólogo.",
    "Medida de los parámetros de la córnea con instrumentos adaptados a los bebés.",
    "Seguimiento estrecho: los valores del ojo de un bebé cambian rápido y hay que revisarlos a menudo.",
    "Formación de los padres en la manipulación, la colocación y la higiene de las lentes.",
    "Comunicación constante con el oftalmólogo para ajustar la corrección según la evolución.",
  ],
  en: [
    "Fitting paediatric contact lenses according to the ophthalmologist's prescription.",
    "Measuring corneal parameters with instruments suitable for babies.",
    "Close follow-up: a baby's eye changes quickly, so frequent reviews are needed.",
    "Teaching parents how to handle, insert and clean the lenses safely.",
    "Ongoing communication with the ophthalmologist to adjust the correction as the case evolves.",
  ],
  de: [
    "Anpassung pädiatrischer Kontaktlinsen nach augenärztlicher Verordnung.",
    "Messung der Hornhautparameter mit für Babys geeigneten Geräten.",
    "Enge Nachbetreuung: Das Auge eines Babys verändert sich schnell, daher sind häufige Kontrollen nötig.",
    "Anleitung der Eltern zum sicheren Einsetzen, Entfernen und Reinigen der Linsen.",
    "Kontinuierlicher Austausch mit dem Augenarzt, um die Korrektion an die Entwicklung anzupassen.",
  ],
};

const followUpTitle = {
  ca: "Per què el seguiment és tan important",
  es: "Por qué el seguimiento es tan importante",
  en: "Why follow-up matters so much",
  de: "Warum die Nachbetreuung so wichtig ist",
};

const followUp = {
  ca: [
    "En els primers anys de vida l'ull del nadó creix ràpidament. Una lentilla que encaixava bé fa tres mesos pot necessitar canvis de paràmetres, diàmetre o graduació.",
    "Per això treballem amb revisions programades i en coordinació amb l'oftalmòleg: cada control aporta dades que ajuden a decidir si la correcció òptica cal ajustar-la o si l'evolució és la correcta.",
    "Els pares també tenen un paper clínic: el compliment de les hores de portada de la lentilla i la cura diària influeixen directament en el desenvolupament visual del nadó.",
  ],
  es: [
    "En los primeros años de vida el ojo del bebé crece rápidamente. Una lentilla que encajaba bien hace tres meses puede necesitar cambios de parámetros, diámetro o graduación.",
    "Por eso trabajamos con revisiones programadas y en coordinación con el oftalmólogo: cada control aporta datos que ayudan a decidir si la corrección óptica debe ajustarse o si la evolución es la correcta.",
    "Los padres también tienen un papel clave: el cumplimiento de las horas de uso de la lentilla y el cuidado diario influyen directamente en el desarrollo visual del bebé.",
  ],
  en: [
    "In the first years of life a baby's eye grows rapidly. A lens that fitted well three months ago may need changes to its parameters, diameter or power.",
    "That is why we work to a scheduled review plan in coordination with the ophthalmologist: each check-up provides data that helps decide whether the optical correction needs adjusting or whether progress is on track.",
    "Parents also play a key role: keeping to the wearing hours and daily care routine directly influence the baby's visual development.",
  ],
  de: [
    "In den ersten Lebensjahren wächst das Auge eines Babys schnell. Eine Linse, die vor drei Monaten noch gut passte, kann Änderungen von Parametern, Durchmesser oder Stärke erfordern.",
    "Deshalb arbeiten wir nach einem festen Kontrollplan in Abstimmung mit dem Augenarzt: Jede Untersuchung liefert Daten, anhand derer entschieden wird, ob die optische Korrektion angepasst werden muss oder ob die Entwicklung im richtigen Verlauf ist.",
    "Auch die Eltern spielen eine Schlüsselrolle: Die Einhaltung der Tragezeit und der tägliche Pflegeroutine beeinflussen die Sehentwicklung des Babys direkt.",
  ],
};

const relatedLinks = {
  ca: <>Més informació sobre <Link to="/ca/visio-infantil/ulleres-nens" className="text-[#55afa9] underline font-medium">ulleres i lentilles per a nens</Link> i sobre <Link to="/ca/services/lents-contacte" className="text-[#55afa9] underline font-medium">lents de contacte</Link>.</>,
  es: <>Más información sobre <Link to="/es/visio-infantil/ulleres-nens" className="text-[#55afa9] underline font-medium">gafas y lentillas para niños</Link> y sobre <Link to="/es/services/lents-contacte" className="text-[#55afa9] underline font-medium">lentes de contacto</Link>.</>,
  en: <>More about <Link to="/en/visio-infantil/ulleres-nens" className="text-[#55afa9] underline font-medium">kids' glasses and contact lenses</Link> and <Link to="/en/services/lents-contacte" className="text-[#55afa9] underline font-medium">contact lenses</Link>.</>,
  de: <>Mehr zu <Link to="/de/visio-infantil/ulleres-nens" className="text-[#55afa9] underline font-medium">Kinderbrillen und Kontaktlinsen</Link> und zu <Link to="/de/services/lents-contacte" className="text-[#55afa9] underline font-medium">Kontaktlinsen</Link>.</>,
};

const faqTitle = {
  ca: "Preguntes freqüents",
  es: "Preguntas frecuentes",
  en: "Frequently asked questions",
  de: "Häufige Fragen",
};

const faqs = {
  ca: [
    { q: "Què és la catarata congènita?", a: "És l'opacitat del cristal·lí d'un nadó. Pot ser congènita (present al néixer) o desenvolupar-se durant els primers mesos. La detecció i el tractament els gestiona l'oftalmòleg." },
    { q: "Qui decideix si cal cirurgia?", a: "La cirurgia la decideix i la realitza l'oftalmòleg. A Looptica entrem després, quan cal adaptar la correcció òptica amb lentilles pediàtriques." },
    { q: "Des de quina edat podeu adaptar lentilles?", a: "Des dels 0 anys, sempre amb prescripció i indicació de l'oftalmòleg." },
    { q: "Quin seguiment necessita un bebè amb lentilles?", a: "Un seguiment freqüent, ja que l'ull del nadó creix i els paràmetres canvien. Treballem coordinadament amb l'oftalmòleg per revisar i ajustar la lentilla." },
    { q: "Els pares poden aprendre a posar la lentilla?", a: "Sí. Dediquem temps a ensenyar als pares la tècnica de col·locació, retirada i neteja amb la màxima seguretat." },
  ],
  es: [
    { q: "¿Qué es la catarata congénita?", a: "Es la opacidad del cristalino de un bebé. Puede ser congénita (presente al nacer) o desarrollarse durante los primeros meses. La detección y el tratamiento los gestiona el oftalmólogo." },
    { q: "¿Quién decide si es necesaria cirugía?", a: "La cirugía la decide y la realiza el oftalmólogo. En Looptica entramos después, cuando hay que adaptar la corrección óptica con lentes pediátricas." },
    { q: "¿Desde qué edad podéis adaptar lentillas?", a: "Desde los 0 años, siempre con prescripción e indicación del oftalmólogo." },
    { q: "¿Qué seguimiento necesita un bebé con lentillas?", a: "Un seguimiento frecuente, ya que el ojo del bebé crece y los parámetros cambian. Trabajamos coordinadamente con el oftalmólogo para revisar y ajustar la lentilla." },
    { q: "¿Los padres pueden aprender a poner la lentilla?", a: "Sí. Dedicamos tiempo a enseñar a los padres la técnica de colocación, retirada y limpieza con la máxima seguridad." },
  ],
  en: [
    { q: "What is congenital cataract?", a: "It is clouding of the lens in a baby's eye. It may be present at birth or develop during the first months. Detection and treatment are managed by the ophthalmologist." },
    { q: "Who decides if surgery is needed?", a: "The ophthalmologist decides and performs the surgery. Looptica comes in afterwards, when the optical correction with paediatric lenses needs to be fitted." },
    { q: "From what age can you fit contact lenses?", a: "From age 0, always on the ophthalmologist's prescription and indication." },
    { q: "What follow-up does a baby with lenses need?", a: "Frequent follow-up, because a baby's eye grows and the parameters change. We work in coordination with the ophthalmologist to review and adjust the lens." },
    { q: "Can parents learn to put the lens in?", a: "Yes. We take time to teach parents how to insert, remove and clean the lens as safely as possible." },
  ],
  de: [
    { q: "Was ist angeborener Katarakt?", a: "Es ist eine Trübung der Augenlinse eines Babys. Sie kann bei der Geburt vorhanden sein oder sich in den ersten Monaten entwickeln. Diagnose und Behandlung liegen beim Augenarzt." },
    { q: "Wer entscheidet, ob eine Operation nötig ist?", a: "Der Augenarzt entscheidet und führt die Operation durch. Looptica kommt danach ins Spiel, wenn die optische Korrektion mit pädiatrischen Linsen angepasst werden muss." },
    { q: "Ab welchem Alter können Sie Kontaktlinsen anpassen?", a: "Ab 0 Jahren, immer auf Verordnung und Anweisung des Augenarztes." },
    { q: "Welche Nachbetreuung braucht ein Baby mit Linsen?", a: "Häufige Kontrollen, denn das Auge eines Babys wächst und die Werte ändern sich. Wir arbeiten mit dem Augenarzt zusammen, um die Linse zu überprüfen und anzupassen." },
    { q: "Können die Eltern lernen, die Linse einzusetzen?", a: "Ja. Wir nehmen uns Zeit, den Eltern das sichere Einsetzen, Entfernen und Reinigen der Linse beizubringen." },
  ],
};

const parentCrumb = {
  ca: "Visió infantil",
  es: "Visión infantil",
  en: "Children's vision",
  de: "Kindersehen",
};

const CatarataCongenita = () => {
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
        image={heroAsset.url}
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        appointmentSubject="Catarata congènita i lentilles pediàtriques a Looptica"
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
            <h2 className="text-2xl font-semibold mb-6">{whatWeDoTitle[lang]}</h2>
            <div className="bg-[#e8f6f5] p-8 rounded-lg">
              <ul className="space-y-3 text-gray-700">
                {whatWeDo[lang].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#55afa9] mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="prose prose-lg max-w-none mb-12">
            <h2>{followUpTitle[lang]}</h2>
            {followUp[lang].map((p, i) => (
              <p key={i}>{p}</p>
            ))}
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

export default CatarataCongenita;
