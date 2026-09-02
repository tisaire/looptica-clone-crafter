import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ServiceLayout from '@/components/layout/ServiceLayout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/config/languages';
import heroImage from '@/assets/vision-infantil-hero.jpg';

const pageTitle: { [key in Language]: string } = {
  ca: "Òptica Infantil Barcelona Poblenou | Revisió Visual de Nens",
  es: "Óptica Infantil en Poblenou, Barcelona | Revisión Visual de Niños",
  en: "Children's Optician Barcelona Poblenou | Kids' Eye Exams",
  de: "Kinderoptik Barcelona Poblenou | Sehtest für Kinder",
};

const pageDescription: { [key in Language]: string } = {
  ca: "Revisió visual infantil a Poblenou: detecció precoç, control de miopia, ull gandul i ulleres per a nens. Adaptem lentilles des dels 0 anys.",
  es: "Revisión visual infantil en Poblenou: detección precoz, control de miopía, ojo vago y gafas para niños. Adaptamos lentillas desde los 0 años.",
  en: "Children's eye exams in Poblenou, Barcelona: early detection, myopia control, lazy eye and kids' glasses. Contact lens fitting from age 0.",
  de: "Sehtests für Kinder in Poblenou, Barcelona: Früherkennung, Myopiekontrolle, Schwachsichtigkeit und Kinderbrillen. Kontaktlinsen ab 0 Jahren.",
};

const hero = {
  ca: { title: "Visió infantil", subtitle: "Detecció precoç, control de la miopia i ulleres pensades per a nens, a Poblenou." },
  es: { title: "Visión infantil", subtitle: "Detección precoz, control de la miopía y gafas pensadas para niños, en Poblenou." },
  en: { title: "Children's vision", subtitle: "Early detection, myopia control and glasses designed for children, in Poblenou." },
  de: { title: "Kindersehen", subtitle: "Früherkennung, Myopiekontrolle und Brillen für Kinder, in Poblenou." },
};

const intro = {
  ca: [
    "Els nens no diuen que hi veuen malament: s'hi acostumen. Per això bona part dels problemes visuals de la infància es detecten a l'escola, quan ja fa temps que hi són. Una revisió visual completa abans de començar P3 i després cada any és la manera més senzilla d'evitar-ho.",
    "A Looptica fem revisions visuals infantils adaptades a cada edat, amb proves que no requereixen que el nen sàpiga llegir. Si detectem alguna cosa que necessita atenció mèdica, ho derivem a l'oftalmòleg i fem el seguiment conjuntament.",
  ],
  es: [
    "Los niños no dicen que ven mal: se acostumbran. Por eso buena parte de los problemas visuales de la infancia se detectan en el colegio, cuando ya llevan tiempo ahí. Una revisión visual completa antes de empezar P3 y después cada año es la forma más sencilla de evitarlo.",
    "En Looptica hacemos revisiones visuales infantiles adaptadas a cada edad, con pruebas que no requieren que el niño sepa leer. Si detectamos algo que necesita atención médica, lo derivamos al oftalmólogo y hacemos el seguimiento conjuntamente.",
  ],
  en: [
    "Children rarely say they can't see well — they simply adapt. That is why many childhood vision problems are only spotted at school, long after they started. A full eye exam before starting nursery, and once a year afterwards, is the simplest way to avoid that.",
    "At Looptica we run children's eye exams adapted to each age, with tests that don't require the child to read. If we find something that needs medical attention, we refer to an ophthalmologist and follow up together.",
  ],
  de: [
    "Kinder sagen nicht, dass sie schlecht sehen — sie gewöhnen sich daran. Deshalb werden viele Sehprobleme erst in der Schule bemerkt. Eine vollständige Augenuntersuchung vor dem Kindergarten und danach jährlich ist der einfachste Weg, das zu vermeiden.",
    "Bei Looptica führen wir altersgerechte Sehtests für Kinder durch, mit Verfahren, die kein Lesen voraussetzen. Wenn wir etwas finden, das ärztliche Betreuung braucht, überweisen wir an den Augenarzt und begleiten den Verlauf gemeinsam.",
  ],
};

const signalsTitle = {
  ca: "Senyals d'alerta segons l'edat",
  es: "Señales de alerta según la edad",
  en: "Warning signs by age",
  de: "Warnzeichen nach Alter",
};

const signals = {
  ca: [
    { age: "0-2 anys", items: "No segueix objectes amb la mirada, un ull es desvia, llagrimeig constant, pupil·la blanquinosa." },
    { age: "3-5 anys", items: "S'acosta molt als objectes, tanca o tapa un ull, tomba el cap, es queixa de mal de cap." },
    { age: "6-12 anys", items: "Baixada de rendiment escolar, es salta línies llegint, es frega els ulls, evita llegir de prop." },
    { age: "Adolescència", items: "Augment ràpid de la graduació, visió borrosa de lluny, molèsties amb pantalles." },
  ],
  es: [
    { age: "0-2 años", items: "No sigue objetos con la mirada, un ojo se desvía, lagrimeo constante, pupila blanquecina." },
    { age: "3-5 años", items: "Se acerca mucho a los objetos, cierra o tapa un ojo, ladea la cabeza, se queja de dolor de cabeza." },
    { age: "6-12 años", items: "Bajada de rendimiento escolar, se salta líneas al leer, se frota los ojos, evita leer de cerca." },
    { age: "Adolescencia", items: "Aumento rápido de la graduación, visión borrosa de lejos, molestias con pantallas." },
  ],
  en: [
    { age: "0-2 years", items: "Doesn't follow objects, one eye drifts, constant watering, whitish pupil." },
    { age: "3-5 years", items: "Sits very close to objects, closes or covers one eye, tilts the head, complains of headaches." },
    { age: "6-12 years", items: "Drop in school performance, skips lines when reading, rubs eyes, avoids close reading." },
    { age: "Teens", items: "Prescription rising fast, blurry distance vision, discomfort with screens." },
  ],
  de: [
    { age: "0-2 Jahre", items: "Folgt Objekten nicht, ein Auge weicht ab, ständiges Tränen, weißliche Pupille." },
    { age: "3-5 Jahre", items: "Geht sehr nah heran, schließt oder verdeckt ein Auge, neigt den Kopf, klagt über Kopfschmerzen." },
    { age: "6-12 Jahre", items: "Schlechtere Schulleistung, überspringt Zeilen beim Lesen, reibt die Augen, meidet Nahlesen." },
    { age: "Jugend", items: "Schnell steigende Werte, unscharfes Fernsehen, Beschwerden bei Bildschirmarbeit." },
  ],
};

const topicsTitle = {
  ca: "Els nostres serveis per a nens",
  es: "Nuestros servicios para niños",
  en: "Our services for children",
  de: "Unsere Leistungen für Kinder",
};

const topics = {
  ca: [
    { to: "/visio-infantil/control-miopia", title: "Control de la miopia", text: "Orto-K, lents de desenfocament perifèric i lentilles de control per frenar l'avanç de la miopia." },
    { to: "/visio-infantil/ull-gandul", title: "Ull gandul i teràpia visual", text: "Detecció de l'ambliopia i teràpia visual per millorar l'eficàcia visual i la lectura." },
    { to: "/visio-infantil/ulleres-nens", title: "Ulleres i lentilles per a nens", text: "Muntures Nano, Polaroid i Centrostyle, i adaptació de lentilles des dels 0 anys." },
  ],
  es: [
    { to: "/visio-infantil/control-miopia", title: "Control de la miopía", text: "Orto-K, lentes de desenfoque periférico y lentillas de control para frenar el avance de la miopía." },
    { to: "/visio-infantil/ull-gandul", title: "Ojo vago y terapia visual", text: "Detección de la ambliopía y terapia visual para mejorar la eficacia visual y la lectura." },
    { to: "/visio-infantil/ulleres-nens", title: "Gafas y lentillas para niños", text: "Monturas Nano, Polaroid y Centrostyle, y adaptación de lentillas desde los 0 años." },
  ],
  en: [
    { to: "/visio-infantil/control-miopia", title: "Myopia control", text: "Ortho-K, peripheral defocus lenses and control contact lenses to slow myopia progression." },
    { to: "/visio-infantil/ull-gandul", title: "Lazy eye and vision therapy", text: "Amblyopia detection and vision therapy to improve visual efficiency and reading." },
    { to: "/visio-infantil/ulleres-nens", title: "Kids' glasses and contact lenses", text: "Nano, Polaroid and Centrostyle frames, and contact lens fitting from age 0." },
  ],
  de: [
    { to: "/visio-infantil/control-miopia", title: "Myopiekontrolle", text: "Ortho-K, Brillengläser mit peripherem Defokus und Kontrolllinsen gegen fortschreitende Kurzsichtigkeit." },
    { to: "/visio-infantil/ull-gandul", title: "Schwachsichtigkeit und Sehtherapie", text: "Amblyopie-Erkennung und Sehtherapie für bessere visuelle Effizienz und Lesefähigkeit." },
    { to: "/visio-infantil/ulleres-nens", title: "Kinderbrillen und Kontaktlinsen", text: "Fassungen von Nano, Polaroid und Centrostyle sowie Kontaktlinsenanpassung ab 0 Jahren." },
  ],
};

const examTitle = {
  ca: "Què inclou la revisió visual infantil",
  es: "Qué incluye la revisión visual infantil",
  en: "What the children's eye exam includes",
  de: "Was die Kinderuntersuchung umfasst",
};

const exam = {
  ca: [
    "Historial visual i antecedents familiars (la miopia dels pares és un factor de risc).",
    "Mesura de la graduació amb tècniques objectives, sense necessitat que el nen respongui.",
    "Avaluació de la salut ocular i de la motilitat dels dos ulls.",
    "Visió binocular, acomodació i coordinació ull-mà, claus per a la lectura.",
    "Visió del color i estereopsi (visió en tres dimensions).",
    "Informe per als pares i, si cal, derivació a l'oftalmòleg.",
  ],
  es: [
    "Historial visual y antecedentes familiares (la miopía de los padres es un factor de riesgo).",
    "Medida de la graduación con técnicas objetivas, sin necesidad de que el niño responda.",
    "Evaluación de la salud ocular y de la motilidad de ambos ojos.",
    "Visión binocular, acomodación y coordinación ojo-mano, claves para la lectura.",
    "Visión del color y estereopsis (visión en tres dimensiones).",
    "Informe para los padres y, si es necesario, derivación al oftalmólogo.",
  ],
  en: [
    "Visual history and family background (parental myopia is a risk factor).",
    "Objective measurement of the prescription, with no need for the child to respond.",
    "Assessment of eye health and eye movement in both eyes.",
    "Binocular vision, focusing and eye-hand coordination, key for reading.",
    "Colour vision and stereopsis (three-dimensional vision).",
    "A report for the parents and, if needed, referral to an ophthalmologist.",
  ],
  de: [
    "Sehgeschichte und familiäre Vorbelastung (Kurzsichtigkeit der Eltern ist ein Risikofaktor).",
    "Objektive Messung der Werte, ohne dass das Kind antworten muss.",
    "Beurteilung der Augengesundheit und der Beweglichkeit beider Augen.",
    "Binokulares Sehen, Akkommodation und Auge-Hand-Koordination — entscheidend beim Lesen.",
    "Farbsehen und Stereopsis (räumliches Sehen).",
    "Bericht für die Eltern und bei Bedarf Überweisung an den Augenarzt.",
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
    { q: "A quina edat s'ha de fer la primera revisió visual?", a: "Recomanem una primera revisió cap als 3 anys, abans de començar l'escola, i després un control anual. Si hi ha antecedents familiars o alguna senyal d'alerta, es pot fer abans: tenim proves per a nadons i nens que encara no parlen." },
    { q: "El nen ha de saber llegir per fer-se la revisió?", a: "No. Utilitzem proves objectives i optotips amb dibuixos i símbols, adaptats a l'edat i al nivell de col·laboració del nen." },
    { q: "Quant dura la visita?", a: "Una revisió visual infantil completa acostuma a durar entre 30 i 45 minuts, segons l'edat i les proves necessàries." },
    { q: "Feu la revisió en català?", a: "Sí. Atenem en català, castellà, anglès i alemany." },
  ],
  es: [
    { q: "¿A qué edad hay que hacer la primera revisión visual?", a: "Recomendamos una primera revisión hacia los 3 años, antes de empezar el colegio, y después un control anual. Si hay antecedentes familiares o alguna señal de alerta, puede hacerse antes: tenemos pruebas para bebés y niños que aún no hablan." },
    { q: "¿El niño tiene que saber leer para hacerse la revisión?", a: "No. Utilizamos pruebas objetivas y optotipos con dibujos y símbolos, adaptados a la edad y al nivel de colaboración del niño." },
    { q: "¿Cuánto dura la visita?", a: "Una revisión visual infantil completa suele durar entre 30 y 45 minutos, según la edad y las pruebas necesarias." },
    { q: "¿Atendéis en castellano?", a: "Sí. Atendemos en catalán, castellano, inglés y alemán." },
  ],
  en: [
    { q: "At what age should the first eye exam be?", a: "We recommend a first exam around age 3, before starting school, and a yearly check afterwards. With family history or warning signs it can be earlier: we have tests for babies and children who don't speak yet." },
    { q: "Does the child need to be able to read?", a: "No. We use objective tests and charts with pictures and symbols, adapted to the child's age and level of cooperation." },
    { q: "How long does the visit take?", a: "A complete children's eye exam usually takes 30 to 45 minutes, depending on age and the tests needed." },
    { q: "Which languages do you work in?", a: "Catalan, Spanish, English and German." },
  ],
  de: [
    { q: "In welchem Alter sollte die erste Untersuchung stattfinden?", a: "Wir empfehlen eine erste Untersuchung mit etwa 3 Jahren, vor der Einschulung, danach jährlich. Bei familiärer Vorbelastung oder Warnzeichen auch früher: Wir haben Tests für Babys und noch nicht sprechende Kinder." },
    { q: "Muss das Kind lesen können?", a: "Nein. Wir verwenden objektive Verfahren und Sehzeichen mit Bildern und Symbolen, passend zu Alter und Mitarbeit des Kindes." },
    { q: "Wie lange dauert der Termin?", a: "Eine vollständige Kinderuntersuchung dauert in der Regel 30 bis 45 Minuten, je nach Alter und benötigten Tests." },
    { q: "In welchen Sprachen beraten Sie?", a: "Katalanisch, Spanisch, Englisch und Deutsch." },
  ],
};

const VisioInfantil = () => {
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
        appointmentSubject="Revisió visual infantil a Looptica"
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
            <h2 className="text-2xl font-semibold mb-6">{topicsTitle[lang]}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {topics[lang].map((topic) => (
                <Link
                  key={topic.to}
                  to={`/${language}${topic.to}`}
                  className="block bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-[#55afa9] transition-colors"
                >
                  <h3 className="text-xl font-medium mb-2 text-[#55afa9]">{topic.title}</h3>
                  <p className="text-gray-700">{topic.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold mb-6">{signalsTitle[lang]}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <tbody>
                  {signals[lang].map((row) => (
                    <tr key={row.age} className="border-b border-gray-200 last:border-0">
                      <th scope="row" className="py-3 pr-6 align-top font-medium text-[#55afa9] whitespace-nowrap">
                        {row.age}
                      </th>
                      <td className="py-3 text-gray-700">{row.items}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="prose prose-lg max-w-none mb-12">
            <h2>{examTitle[lang]}</h2>
            <ul>
              {exam[lang].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
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

export default VisioInfantil;
