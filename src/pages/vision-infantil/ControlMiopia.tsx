import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ServiceLayout from '@/components/layout/ServiceLayout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/config/languages';

const pageTitle: { [key in Language]: string } = {
  ca: "Control de la Miopia Infantil a Barcelona | Looptica Poblenou",
  es: "Control de la Miopía Infantil en Barcelona | Looptica Poblenou",
  en: "Childhood Myopia Control in Barcelona | Looptica Poblenou",
  de: "Myopiekontrolle bei Kindern in Barcelona | Looptica Poblenou",
};

const pageDescription: { [key in Language]: string } = {
  ca: "Frena l'avanç de la miopia dels teus fills a Poblenou: Orto-K, lents de desenfocament perifèric i lentilles de control. Sense atropina.",
  es: "Frena el avance de la miopía de tus hijos en Poblenou: Orto-K, lentes de desenfoque periférico y lentillas de control. Sin atropina.",
  en: "Slow your child's myopia in Poblenou, Barcelona: Ortho-K, peripheral defocus spectacle lenses and control contact lenses. No atropine.",
  de: "Bremsen Sie die Kurzsichtigkeit Ihres Kindes in Poblenou: Ortho-K, Brillengläser mit peripherem Defokus und Kontrolllinsen. Ohne Atropin.",
};

const hero = {
  ca: { title: "Control de la miopia infantil", subtitle: "La miopia dels nens avança. Hi ha maneres provades de frenar-la." },
  es: { title: "Control de la miopía infantil", subtitle: "La miopía de los niños avanza. Hay formas probadas de frenarla." },
  en: { title: "Childhood myopia control", subtitle: "Children's myopia progresses. There are proven ways to slow it down." },
  de: { title: "Myopiekontrolle bei Kindern", subtitle: "Kurzsichtigkeit bei Kindern schreitet fort. Es gibt erprobte Wege, sie zu bremsen." },
};

const intro = {
  ca: [
    "Quan un nen es fa miop, la graduació sol continuar pujant any rere any mentre l'ull creix. No es tracta només de canviar d'ulleres més sovint: una miopia elevada a l'edat adulta s'associa a més risc de problemes oculars al llarg de la vida, com el despreniment de retina o la miopia magna.",
    "Per això el control de la miopia no busca només veure-hi bé avui, sinó que la graduació final sigui la més baixa possible. Com abans es comença, més marge hi ha.",
  ],
  es: [
    "Cuando un niño se hace miope, la graduación suele seguir subiendo año tras año mientras el ojo crece. No se trata solo de cambiar de gafas más a menudo: una miopía elevada en la edad adulta se asocia a más riesgo de problemas oculares a lo largo de la vida, como el desprendimiento de retina o la miopía magna.",
    "Por eso el control de la miopía no busca solo ver bien hoy, sino que la graduación final sea la más baja posible. Cuanto antes se empieza, más margen hay.",
  ],
  en: [
    "Once a child becomes short-sighted, the prescription usually keeps rising year after year while the eye grows. It isn't only about changing glasses more often: high myopia in adulthood is linked to a higher lifetime risk of eye problems such as retinal detachment.",
    "Myopia control is therefore not only about seeing well today, but about ending up with the lowest possible final prescription. The earlier you start, the more room there is.",
  ],
  de: [
    "Wird ein Kind kurzsichtig, steigen die Werte meist Jahr für Jahr weiter, während das Auge wächst. Es geht nicht nur um häufigere Brillenwechsel: Hohe Myopie im Erwachsenenalter ist mit einem höheren Risiko für Augenerkrankungen wie Netzhautablösung verbunden.",
    "Myopiekontrolle zielt daher nicht nur auf gutes Sehen heute ab, sondern auf möglichst niedrige Endwerte. Je früher man beginnt, desto größer der Spielraum.",
  ],
};

const optionsTitle = {
  ca: "Les opcions que treballem a Looptica",
  es: "Las opciones que trabajamos en Looptica",
  en: "The options we work with at Looptica",
  de: "Die Optionen, mit denen wir bei Looptica arbeiten",
};

const options = {
  ca: [
    { name: "Orto-K (lents nocturnes)", when: "A partir dels 8-9 anys, segons maduresa", use: "Es porten dormint; el dia és lliure d'ulleres", care: "Neteja diària i revisions periòdiques" },
    { name: "Lents de gafa de desenfocament perifèric", when: "Des dels 6 anys", use: "Ús diürn, com unes ulleres normals", care: "Manteniment habitual d'unes ulleres" },
    { name: "Lentilles toves de control", when: "Des dels 8 anys, o abans amb bona rutina", use: "Ús diürn, ideal per a esport", care: "Recanvi diari o mensual segons el tipus" },
  ],
  es: [
    { name: "Orto-K (lentes nocturnas)", when: "A partir de los 8-9 años, según madurez", use: "Se llevan durmiendo; el día es libre de gafas", care: "Limpieza diaria y revisiones periódicas" },
    { name: "Lentes de gafa de desenfoque periférico", when: "Desde los 6 años", use: "Uso diurno, como unas gafas normales", care: "Mantenimiento habitual de unas gafas" },
    { name: "Lentillas blandas de control", when: "Desde los 8 años, o antes con buena rutina", use: "Uso diurno, ideal para deporte", care: "Recambio diario o mensual según el tipo" },
  ],
  en: [
    { name: "Ortho-K (overnight lenses)", when: "From age 8-9, depending on maturity", use: "Worn while sleeping; glasses-free days", care: "Daily cleaning and regular check-ups" },
    { name: "Peripheral defocus spectacle lenses", when: "From age 6", use: "Daytime wear, like ordinary glasses", care: "Standard spectacle care" },
    { name: "Soft control contact lenses", when: "From age 8, earlier with a good routine", use: "Daytime wear, ideal for sport", care: "Daily or monthly replacement" },
  ],
  de: [
    { name: "Ortho-K (Nachtlinsen)", when: "Ab 8-9 Jahren, je nach Reife", use: "Werden im Schlaf getragen; brillenfreier Tag", care: "Tägliche Reinigung, regelmäßige Kontrollen" },
    { name: "Brillengläser mit peripherem Defokus", when: "Ab 6 Jahren", use: "Tagsüber, wie eine normale Brille", care: "Übliche Brillenpflege" },
    { name: "Weiche Kontrolllinsen", when: "Ab 8 Jahren, früher bei guter Routine", use: "Tagsüber, ideal für Sport", care: "Tages- oder Monatsaustausch" },
  ],
};

const tableHeads = {
  ca: ["Opció", "Edat orientativa", "Com s'utilitza", "Manteniment"],
  es: ["Opción", "Edad orientativa", "Cómo se utiliza", "Mantenimiento"],
  en: ["Option", "Typical age", "How it's used", "Care"],
  de: ["Option", "Richtalter", "Anwendung", "Pflege"],
};

const atropineNote = {
  ca: "A Looptica no utilitzem atropina en baixa concentració. El nostre enfocament és òptic: Orto-K, lents de desenfocament perifèric i lentilles de control. Si el cas requereix tractament farmacològic, et derivem a l'oftalmòleg i seguim col·laborant en el control òptic.",
  es: "En Looptica no utilizamos atropina en baja concentración. Nuestro enfoque es óptico: Orto-K, lentes de desenfoque periférico y lentillas de control. Si el caso requiere tratamiento farmacológico, te derivamos al oftalmólogo y seguimos colaborando en el control óptico.",
  en: "At Looptica we do not use low-dose atropine. Our approach is optical: Ortho-K, peripheral defocus lenses and control contact lenses. If a case calls for pharmacological treatment, we refer to an ophthalmologist and keep collaborating on the optical side.",
  de: "Bei Looptica setzen wir kein niedrig dosiertes Atropin ein. Unser Ansatz ist optisch: Ortho-K, Defokus-Brillengläser und Kontrolllinsen. Ist eine medikamentöse Behandlung nötig, überweisen wir an den Augenarzt und begleiten weiterhin die optische Kontrolle.",
};

const habitsTitle = {
  ca: "Hàbits que ajuden (i no costen res)",
  es: "Hábitos que ayudan (y no cuestan nada)",
  en: "Habits that help (and cost nothing)",
  de: "Gewohnheiten, die helfen (und nichts kosten)",
};

const habits = {
  ca: [
    "Temps a l'aire lliure: com més estona de llum natural al dia, millor per frenar l'aparició de la miopia.",
    "Distància de treball: llegir i escriure a la distància del colze, no amb el nas al paper.",
    "Descansos amb la mirada llunyana cada 20-30 minuts de treball de prop o de pantalla.",
    "Bona il·luminació i evitar llegir estirat o en moviment.",
  ],
  es: [
    "Tiempo al aire libre: cuanto más rato de luz natural al día, mejor para frenar la aparición de la miopía.",
    "Distancia de trabajo: leer y escribir a la distancia del codo, no con la nariz en el papel.",
    "Descansos mirando de lejos cada 20-30 minutos de trabajo cercano o de pantalla.",
    "Buena iluminación y evitar leer tumbado o en movimiento.",
  ],
  en: [
    "Time outdoors: more daily natural light helps delay the onset of myopia.",
    "Working distance: read and write at elbow distance, not with the nose on the page.",
    "Distance breaks every 20-30 minutes of near or screen work.",
    "Good lighting, and avoid reading lying down or in a moving vehicle.",
  ],
  de: [
    "Zeit im Freien: mehr Tageslicht pro Tag verzögert das Auftreten von Kurzsichtigkeit.",
    "Arbeitsabstand: Lesen und Schreiben im Ellbogenabstand, nicht mit der Nase auf dem Papier.",
    "Fernblick-Pausen alle 20-30 Minuten Nah- oder Bildschirmarbeit.",
    "Gute Beleuchtung; nicht im Liegen oder in Bewegung lesen.",
  ],
};

const followTitle = {
  ca: "Com fem el seguiment",
  es: "Cómo hacemos el seguimiento",
  en: "How we follow up",
  de: "So begleiten wir den Verlauf",
};

const follow = {
  ca: "El control de la miopia és un procés, no una compra. Fem una avaluació inicial completa (graduació, topografia corneal i salut ocular), triem l'opció que millor encaixa amb l'edat i la rutina del nen, i programem revisions periòdiques per comprovar si la progressió s'està frenant i ajustar el que calgui.",
  es: "El control de la miopía es un proceso, no una compra. Hacemos una evaluación inicial completa (graduación, topografía corneal y salud ocular), elegimos la opción que mejor encaja con la edad y la rutina del niño, y programamos revisiones periódicas para comprobar si la progresión se está frenando y ajustar lo que haga falta.",
  en: "Myopia control is a process, not a purchase. We run a full initial assessment (prescription, corneal topography and eye health), choose the option that best fits the child's age and routine, and schedule regular reviews to check whether progression is slowing and adjust as needed.",
  de: "Myopiekontrolle ist ein Prozess, kein Kauf. Wir führen eine vollständige Erstuntersuchung durch (Werte, Hornhauttopographie, Augengesundheit), wählen die zum Alter und Alltag passende Option und planen regelmäßige Kontrollen, um die Progression zu prüfen und anzupassen.",
};

const faqTitle = {
  ca: "Preguntes freqüents",
  es: "Preguntas frecuentes",
  en: "Frequently asked questions",
  de: "Häufige Fragen",
};

const faqs = {
  ca: [
    { q: "Es pot curar la miopia d'un nen?", a: "No. La miopia no es cura, però sí que es pot frenar la seva progressió amb mètodes òptics de control i amb hàbits visuals adequats. L'objectiu és arribar a l'edat adulta amb la graduació més baixa possible." },
    { q: "A quina edat es pot començar?", a: "Depèn del mètode. Les lents de gafa de desenfocament perifèric es poden posar des dels 6 anys; l'Orto-K i les lentilles de control acostumen a començar cap als 8-9 anys, quan el nen té prou autonomia per manipular-les amb higiene." },
    { q: "Feu servir atropina?", a: "No. A Looptica treballem amb mètodes òptics. Si el cas requereix tractament farmacològic, el derivem a l'oftalmòleg." },
    { q: "Quantes revisions calen?", a: "Programem controls periòdics durant tot el procés per mesurar la progressió i ajustar el tractament. La freqüència exacta la definim en la primera visita segons el cas." },
  ],
  es: [
    { q: "¿Se puede curar la miopía de un niño?", a: "No. La miopía no se cura, pero sí se puede frenar su progresión con métodos ópticos de control y con hábitos visuales adecuados. El objetivo es llegar a la edad adulta con la graduación más baja posible." },
    { q: "¿A qué edad se puede empezar?", a: "Depende del método. Las lentes de gafa de desenfoque periférico se pueden poner desde los 6 años; la Orto-K y las lentillas de control suelen empezar hacia los 8-9 años, cuando el niño tiene suficiente autonomía para manipularlas con higiene." },
    { q: "¿Usáis atropina?", a: "No. En Looptica trabajamos con métodos ópticos. Si el caso requiere tratamiento farmacológico, lo derivamos al oftalmólogo." },
    { q: "¿Cuántas revisiones hacen falta?", a: "Programamos controles periódicos durante todo el proceso para medir la progresión y ajustar el tratamiento. La frecuencia exacta la definimos en la primera visita según el caso." },
  ],
  en: [
    { q: "Can a child's myopia be cured?", a: "No. Myopia cannot be cured, but its progression can be slowed with optical control methods and good visual habits. The goal is to reach adulthood with the lowest possible prescription." },
    { q: "At what age can we start?", a: "It depends on the method. Peripheral defocus spectacle lenses can be fitted from age 6; Ortho-K and control contact lenses usually start around 8-9, when the child can handle them hygienically." },
    { q: "Do you use atropine?", a: "No. At Looptica we work with optical methods. If a case requires pharmacological treatment, we refer to an ophthalmologist." },
    { q: "How many check-ups are needed?", a: "We schedule regular reviews throughout the process to measure progression and adjust the treatment. The exact frequency is set at the first visit." },
  ],
  de: [
    { q: "Kann Kurzsichtigkeit bei Kindern geheilt werden?", a: "Nein. Myopie ist nicht heilbar, aber ihr Fortschreiten lässt sich mit optischen Kontrollmethoden und guten Sehgewohnheiten bremsen. Ziel sind möglichst niedrige Werte im Erwachsenenalter." },
    { q: "Ab welchem Alter kann man beginnen?", a: "Je nach Methode. Defokus-Brillengläser ab 6 Jahren; Ortho-K und Kontrolllinsen meist ab 8-9 Jahren, wenn das Kind sie hygienisch handhaben kann." },
    { q: "Verwenden Sie Atropin?", a: "Nein. Wir arbeiten mit optischen Methoden. Ist eine medikamentöse Behandlung nötig, überweisen wir an den Augenarzt." },
    { q: "Wie viele Kontrollen sind nötig?", a: "Wir planen regelmäßige Kontrollen, um die Progression zu messen und die Versorgung anzupassen. Die genaue Frequenz legen wir beim Ersttermin fest." },
  ],
};

const ortoKLink = {
  ca: <>Vols saber com funcionen les lents nocturnes? Consulta la nostra pàgina d'<Link to="/ca/services/orto-k" className="text-[#55afa9] underline font-medium">Orto-K a Barcelona</Link>.</>,
  es: <>¿Quieres saber cómo funcionan las lentes nocturnas? Consulta nuestra página de <Link to="/es/services/orto-k" className="text-[#55afa9] underline font-medium">Orto-K en Barcelona</Link>.</>,
  en: <>Want to know how overnight lenses work? See our page on <Link to="/en/services/orto-k" className="text-[#55afa9] underline font-medium">Ortho-K in Barcelona</Link>.</>,
  de: <>Wie funktionieren Nachtlinsen? Siehe unsere Seite zu <Link to="/de/services/orto-k" className="text-[#55afa9] underline font-medium">Ortho-K in Barcelona</Link>.</>,
};

const parentCrumb = {
  ca: "Visió infantil",
  es: "Visión infantil",
  en: "Children's vision",
  de: "Kindersehen",
};

const ControlMiopia = () => {
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
        image="/images/ortok_resize.jpg"
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        appointmentSubject="Control de la miopia infantil a Looptica"
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
            <h2 className="text-2xl font-semibold mb-6">{optionsTitle[lang]}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm md:text-base">
                <thead>
                  <tr className="bg-gray-50">
                    {tableHeads[lang].map((h) => (
                      <th key={h} className="py-3 px-4 font-medium text-gray-900">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {options[lang].map((opt) => (
                    <tr key={opt.name} className="border-b border-gray-200 last:border-0">
                      <th scope="row" className="py-3 px-4 align-top font-medium text-[#55afa9]">{opt.name}</th>
                      <td className="py-3 px-4 align-top text-gray-700">{opt.when}</td>
                      <td className="py-3 px-4 align-top text-gray-700">{opt.use}</td>
                      <td className="py-3 px-4 align-top text-gray-700">{opt.care}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <p className="text-gray-700">{atropineNote[lang]}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="prose prose-lg max-w-none mb-12">
            <h2>{habitsTitle[lang]}</h2>
            <ul>
              {habits[lang].map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            <h2>{followTitle[lang]}</h2>
            <p>{follow[lang]}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-[#e8f6f5] p-6 rounded-lg mb-12">
            <p className="text-lg">{ortoKLink[lang]}</p>
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

export default ControlMiopia;
