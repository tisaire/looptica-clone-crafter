import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ServiceLayout from '@/components/layout/ServiceLayout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/config/languages';
import heroImage from '@/assets/vision-infantil-hero.jpg';

const pageTitle: { [key in Language]: string } = {
  ca: "Òptica Infantil Barcelona Poblenou | Ulleres i Lentilles de Nens",
  es: "Óptica Infantil en Poblenou, Barcelona | Gafas y Lentillas de Niños",
  en: "Children's Optician Barcelona Poblenou | Kids' Glasses & Lenses",
  de: "Kinderoptik Barcelona Poblenou | Kinderbrillen und Kontaktlinsen",
};

const pageDescription: { [key in Language]: string } = {
  ca: "Òptica infantil a Poblenou: control de miopia, ulleres per a nens i lentilles adaptades segons la prescripció de l'oftalmòleg. Seguiment coordinat.",
  es: "Óptica infantil en Poblenou: control de miopía, gafas para niños y lentillas adaptadas según la prescripción del oftalmólogo. Seguimiento coordinado.",
  en: "Children's optician in Poblenou, Barcelona: myopia control, kids' glasses and contact lenses fitted to the ophthalmologist's prescription.",
  de: "Kinderoptik in Poblenou, Barcelona: Myopiekontrolle, Kinderbrillen und Kontaktlinsen nach augenärztlicher Verordnung. Koordinierte Betreuung.",
};

const hero = {
  ca: { title: "Visió infantil", subtitle: "Control de la miopia, ulleres i lentilles per a nens, a Poblenou." },
  es: { title: "Visión infantil", subtitle: "Control de la miopía, gafas y lentillas para niños, en Poblenou." },
  en: { title: "Children's vision", subtitle: "Myopia control, glasses and contact lenses for children, in Poblenou." },
  de: { title: "Kindersehen", subtitle: "Myopiekontrolle, Brillen und Kontaktlinsen für Kinder, in Poblenou." },
};

const intro = {
  ca: [
    "Els nens no diuen que hi veuen malament: s'hi acostumen. Per això bona part dels problemes visuals de la infància es detecten a l'escola, quan ja fa temps que hi són. Estar atent als senyals i actuar aviat és la manera més senzilla d'evitar-ho.",
    "A Looptica no fem la primera exploració visual d'un nen petit que no s'ha examinat mai. En aquests casos recomanem i derivem primer a l'oftalmòleg, que és qui ha de descartar possibles patologies i establir el diagnòstic i el tractament.",
    "A partir d'aquí és on entrem nosaltres: proporcionem la solució òptica adequada segons la prescripció —ulleres i lents per a la correcció i el control de la miopia, lentilles i lents nocturnes Orto-K— i fem el seguiment de manera coordinada amb l'oftalmòleg i seguint les seves indicacions. La teràpia visual i els tractaments mèdics són responsabilitat de l'oftalmòleg.",
  ],
  es: [
    "Los niños no dicen que ven mal: se acostumbran. Por eso buena parte de los problemas visuales de la infancia se detectan en el colegio, cuando ya llevan tiempo ahí. Estar atento a las señales y actuar pronto es la forma más sencilla de evitarlo.",
    "En Looptica no realizamos la primera exploración visual de un niño pequeño que nunca ha sido examinado. En estos casos recomendamos y derivamos primero al oftalmólogo, que es quien debe descartar posibles patologías y establecer el diagnóstico y el tratamiento.",
    "A partir de ahí entramos nosotros: proporcionamos la solución óptica adecuada según la prescripción —gafas y lentes para la corrección y el control de la miopía, lentillas y lentes nocturnas Orto-K— y hacemos el seguimiento de forma coordinada con el oftalmólogo y según sus indicaciones. La terapia visual y los tratamientos médicos son responsabilidad del oftalmólogo.",
  ],
  en: [
    "Children rarely say they can't see well — they simply adapt. That is why many childhood vision problems are only spotted at school, long after they started. Watching for the warning signs and acting early is the simplest way to avoid that.",
    "At Looptica we do not carry out the first eye examination of a young child who has never been examined. In those cases we recommend and refer to an ophthalmologist first, as they are the ones who must rule out any pathology and set the diagnosis and treatment.",
    "That is where we come in afterwards: we provide the right optical solution according to the prescription — glasses and lenses for correction and myopia control, contact lenses and Ortho-K overnight lenses — and follow up in coordination with the ophthalmologist and according to their instructions. Vision therapy and medical treatments are the ophthalmologist's responsibility.",
  ],
  de: [
    "Kinder sagen nicht, dass sie schlecht sehen — sie gewöhnen sich daran. Deshalb werden viele Sehprobleme erst in der Schule bemerkt. Auf Warnzeichen zu achten und früh zu handeln ist der einfachste Weg, das zu vermeiden.",
    "Bei Looptica führen wir die erste Augenuntersuchung eines noch nie untersuchten kleinen Kindes nicht durch. In solchen Fällen empfehlen wir und überweisen zunächst an den Augenarzt, der mögliche Erkrankungen ausschließen und Diagnose sowie Behandlung festlegen muss.",
    "Danach kommen wir ins Spiel: Wir liefern die passende optische Lösung gemäß Verordnung — Brillen und Gläser zur Korrektion und Myopiekontrolle, Kontaktlinsen und Ortho-K-Nachtlinsen — und begleiten den Verlauf in Abstimmung mit dem Augenarzt und nach seinen Vorgaben. Sehtherapie und medizinische Behandlungen liegen in der Verantwortung des Augenarztes.",
  ],
};

const signalsTitle = {
  ca: "Senyals d'alerta segons l'edat",
  es: "Señales de alerta según la edad",
  en: "Warning signs by age",
  de: "Warnzeichen nach Alter",
};

const signalsNote = {
  ca: "Si detectes qualsevol d'aquests senyals, el primer pas és una visita a l'oftalmòleg per descartar patologies. Amb el seu diagnòstic a la mà, nosaltres ens ocupem de la solució òptica.",
  es: "Si detectas cualquiera de estas señales, el primer paso es una visita al oftalmólogo para descartar patologías. Con su diagnóstico en la mano, nosotros nos ocupamos de la solución óptica.",
  en: "If you notice any of these signs, the first step is a visit to the ophthalmologist to rule out pathology. With their diagnosis in hand, we take care of the optical solution.",
  de: "Bei einem dieser Anzeichen ist der erste Schritt ein Termin beim Augenarzt, um Erkrankungen auszuschließen. Mit seiner Diagnose übernehmen wir die optische Versorgung.",
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
    { to: "/visio-infantil/ull-gandul", title: "Ull gandul (ambliopia)", text: "Què és, com detectar-ho a casa i quina correcció òptica aportem un cop l'oftalmòleg ha fet el diagnòstic." },
    { to: "/visio-infantil/ulleres-nens", title: "Ulleres i lentilles per a nens", text: "Muntures Nano, Polaroid i Centrostyle, i adaptació de lentilles des dels 0 anys per prescripció mèdica." },
  ],
  es: [
    { to: "/visio-infantil/control-miopia", title: "Control de la miopía", text: "Orto-K, lentes de desenfoque periférico y lentillas de control para frenar el avance de la miopía." },
    { to: "/visio-infantil/ull-gandul", title: "Ojo vago (ambliopía)", text: "Qué es, cómo detectarlo en casa y qué corrección óptica aportamos una vez el oftalmólogo ha hecho el diagnóstico." },
    { to: "/visio-infantil/ulleres-nens", title: "Gafas y lentillas para niños", text: "Monturas Nano, Polaroid y Centrostyle, y adaptación de lentillas desde los 0 años por prescripción médica." },
  ],
  en: [
    { to: "/visio-infantil/control-miopia", title: "Myopia control", text: "Ortho-K, peripheral defocus lenses and control contact lenses to slow myopia progression." },
    { to: "/visio-infantil/ull-gandul", title: "Lazy eye (amblyopia)", text: "What it is, how to spot it at home, and the optical correction we provide once the ophthalmologist has made the diagnosis." },
    { to: "/visio-infantil/ulleres-nens", title: "Kids' glasses and contact lenses", text: "Nano, Polaroid and Centrostyle frames, and contact lens fitting from age 0 on medical prescription." },
  ],
  de: [
    { to: "/visio-infantil/control-miopia", title: "Myopiekontrolle", text: "Ortho-K, Brillengläser mit peripherem Defokus und Kontrolllinsen gegen fortschreitende Kurzsichtigkeit." },
    { to: "/visio-infantil/ull-gandul", title: "Schwachsichtigkeit (Amblyopie)", text: "Was sie ist, wie man sie zu Hause erkennt und welche optische Korrektion wir nach der augenärztlichen Diagnose liefern." },
    { to: "/visio-infantil/ulleres-nens", title: "Kinderbrillen und Kontaktlinsen", text: "Fassungen von Nano, Polaroid und Centrostyle sowie Kontaktlinsenanpassung ab 0 Jahren auf Verordnung." },
  ],
};

const examTitle = {
  ca: "Com treballem amb l'oftalmòleg",
  es: "Cómo trabajamos con el oftalmólogo",
  en: "How we work with the ophthalmologist",
  de: "So arbeiten wir mit dem Augenarzt",
};

const exam = {
  ca: [
    "Derivació prèvia: si el nen no ha estat examinat mai, el primer pas és l'oftalmòleg, que descarta patologies i estableix el diagnòstic.",
    "Adaptació de la correcció òptica segons la prescripció mèdica: ulleres, lents de control de miopia, lentilles o Orto-K.",
    "Mesures òptiques necessàries per a l'adaptació: distància interpupil·lar, centratge, alçada de muntatge i, en lentilles, paràmetres de la còrnia.",
    "Ajust de la muntura perquè aguanti bé el dia a dia del nen i les lents quedin sempre en la posició correcta.",
    "Control de l'evolució de la graduació amb revisions periòdiques.",
    "Informe per als pares i comunicació amb l'oftalmòleg per seguir les seves indicacions.",
  ],
  es: [
    "Derivación previa: si el niño no ha sido examinado nunca, el primer paso es el oftalmólogo, que descarta patologías y establece el diagnóstico.",
    "Adaptación de la corrección óptica según la prescripción médica: gafas, lentes de control de miopía, lentillas u Orto-K.",
    "Medidas ópticas necesarias para la adaptación: distancia interpupilar, centrado, altura de montaje y, en lentillas, parámetros de la córnea.",
    "Ajuste de la montura para que aguante el día a día del niño y las lentes queden siempre en la posición correcta.",
    "Control de la evolución de la graduación con revisiones periódicas.",
    "Informe para los padres y comunicación con el oftalmólogo para seguir sus indicaciones.",
  ],
  en: [
    "Referral first: if the child has never been examined, the first step is the ophthalmologist, who rules out pathology and makes the diagnosis.",
    "Fitting the optical correction according to the medical prescription: glasses, myopia control lenses, contact lenses or Ortho-K.",
    "The optical measurements needed for the fitting: interpupillary distance, centring, fitting height and, for contact lenses, corneal parameters.",
    "Frame adjustment so it survives a child's daily life and the lenses always sit in the right position.",
    "Monitoring how the prescription evolves with regular check-ups.",
    "A report for the parents and communication with the ophthalmologist to follow their instructions.",
  ],
  de: [
    "Überweisung zuerst: War das Kind noch nie untersucht, ist der Augenarzt der erste Schritt — er schließt Erkrankungen aus und stellt die Diagnose.",
    "Anpassung der optischen Korrektion nach ärztlicher Verordnung: Brille, Myopiekontrollgläser, Kontaktlinsen oder Ortho-K.",
    "Die für die Anpassung nötigen optischen Messungen: Pupillendistanz, Zentrierung, Einschleifhöhe und bei Kontaktlinsen die Hornhautparameter.",
    "Anpassung der Fassung, damit sie den Kinderalltag übersteht und die Gläser stets richtig sitzen.",
    "Kontrolle der Werteentwicklung mit regelmäßigen Terminen.",
    "Bericht für die Eltern und Austausch mit dem Augenarzt, um seinen Vorgaben zu folgen.",
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
    { q: "Feu la primera revisió visual als nens petits?", a: "No. Si el nen no s'ha examinat mai, recomanem i derivem primer a l'oftalmòleg per descartar possibles patologies. Un cop tenim el seu diagnòstic i la prescripció, ens ocupem de la solució òptica i del seguiment." },
    { q: "Com us coordineu amb l'oftalmòleg?", a: "Treballem segons les seves indicacions: adaptem la correcció prescrita, controlem l'evolució de la graduació i li fem arribar la informació de les revisions perquè pugui valorar el cas amb dades actualitzades." },
    { q: "Feu teràpia visual?", a: "No. A Looptica no fem teràpia visual. La nostra intervenció es limita a la solució òptica: ulleres i lents per a la correcció i el control de la miopia, lentilles i lents nocturnes Orto-K." },
    { q: "En quins idiomes atendreu la família?", a: "Atenem en català, castellà, anglès i alemany." },
  ],
  es: [
    { q: "¿Hacéis la primera revisión visual a los niños pequeños?", a: "No. Si el niño nunca ha sido examinado, recomendamos y derivamos primero al oftalmólogo para descartar posibles patologías. Una vez tenemos su diagnóstico y la prescripción, nos ocupamos de la solución óptica y del seguimiento." },
    { q: "¿Cómo os coordináis con el oftalmólogo?", a: "Trabajamos según sus indicaciones: adaptamos la corrección prescrita, controlamos la evolución de la graduación y le hacemos llegar la información de las revisiones para que pueda valorar el caso con datos actualizados." },
    { q: "¿Hacéis terapia visual?", a: "No. En Looptica no realizamos terapia visual. Nuestra intervención se limita a la solución óptica: gafas y lentes para la corrección y el control de la miopía, lentillas y lentes nocturnas Orto-K." },
    { q: "¿En qué idiomas atendéis a la familia?", a: "Atendemos en catalán, castellano, inglés y alemán." },
  ],
  en: [
    { q: "Do you carry out a young child's first eye exam?", a: "No. If the child has never been examined, we recommend and refer to an ophthalmologist first to rule out any pathology. Once we have their diagnosis and prescription, we take care of the optical solution and the follow-up." },
    { q: "How do you coordinate with the ophthalmologist?", a: "We work to their instructions: we fit the prescribed correction, monitor how the prescription evolves and pass on the information from our check-ups so they can review the case with up-to-date data." },
    { q: "Do you offer vision therapy?", a: "At Looptica we focus on the optical side: glasses and lenses for correction and myopia control, contact lenses and Ortho-K overnight lenses, fitting and follow-up, always following the ophthalmologist's prescription. Vision therapy and medical treatments are the ophthalmologist's responsibility." },
    { q: "Which languages do you work in?", a: "Catalan, Spanish, English and German." },
  ],
  de: [
    { q: "Führen Sie die erste Augenuntersuchung bei kleinen Kindern durch?", a: "Nein. War das Kind noch nie untersucht, empfehlen wir und überweisen zunächst an den Augenarzt, um Erkrankungen auszuschließen. Mit seiner Diagnose und Verordnung übernehmen wir die optische Lösung und die Nachbetreuung." },
    { q: "Wie stimmen Sie sich mit dem Augenarzt ab?", a: "Wir arbeiten nach seinen Vorgaben: Wir passen die verordnete Korrektion an, kontrollieren die Werteentwicklung und übermitteln die Ergebnisse unserer Kontrollen, damit er den Fall mit aktuellen Daten beurteilen kann." },
    { q: "Bieten Sie Sehtherapie an?", a: "Bei Looptica konzentrieren wir uns auf die optische Seite: Brillen und Gläser zur Korrektion und Myopiekontrolle, Kontaktlinsen und Ortho-K-Nachtlinsen, Anpassung und Nachsorge, immer nach augenärztlicher Verordnung. Sehtherapie und medizinische Behandlungen liegen in der Verantwortung des Augenarztes." },
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
        appointmentSubject="Ulleres i lentilles per a nens a Looptica"
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
            <h2 className="text-2xl font-semibold mb-4">{signalsTitle[lang]}</h2>
            <p className="text-gray-700 mb-6">{signalsNote[lang]}</p>
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
