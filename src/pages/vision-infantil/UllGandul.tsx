import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ServiceLayout from '@/components/layout/ServiceLayout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/config/languages';

const pageTitle: { [key in Language]: string } = {
  ca: "Ull Gandul i Teràpia Visual a Barcelona Poblenou",
  es: "Ojo Vago y Terapia Visual en Barcelona Poblenou",
  en: "Lazy Eye and Vision Therapy in Barcelona Poblenou",
  de: "Schwachsichtigkeit und Sehtherapie in Barcelona Poblenou",
};

const pageDescription: { [key in Language]: string } = {
  ca: "Detecció de l'ull gandul (ambliopia) i teràpia visual a Poblenou, Barcelona. Millora la coordinació ocular, la lectura i el rendiment escolar.",
  es: "Detección del ojo vago (ambliopía) y terapia visual en Poblenou, Barcelona. Mejora la coordinación ocular, la lectura y el rendimiento escolar.",
  en: "Lazy eye (amblyopia) detection and vision therapy in Poblenou, Barcelona. Improve eye coordination, reading and school performance.",
  de: "Erkennung von Schwachsichtigkeit (Amblyopie) und Sehtherapie in Poblenou, Barcelona. Bessere Augenkoordination, Lesen und Schulleistung.",
};

const hero = {
  ca: { title: "Ull gandul i teràpia visual", subtitle: "Un ull que no acaba de desenvolupar-se es pot entrenar. Com abans, millor." },
  es: { title: "Ojo vago y terapia visual", subtitle: "Un ojo que no acaba de desarrollarse se puede entrenar. Cuanto antes, mejor." },
  en: { title: "Lazy eye and vision therapy", subtitle: "An eye that hasn't fully developed can be trained. The earlier, the better." },
  de: { title: "Schwachsichtigkeit und Sehtherapie", subtitle: "Ein nicht voll entwickeltes Auge lässt sich trainieren. Je früher, desto besser." },
};

const intro = {
  ca: [
    "L'ull gandul, o ambliopia, és la pèrdua de capacitat visual d'un ull que estructuralment està sa. Passa quan, durant els primers anys de vida, el cervell rep una imatge pitjor d'un ull i acaba prioritzant l'altre. Les causes més habituals són una diferència de graduació entre els dos ulls, un estrabisme o una obstrucció visual.",
    "El problema és que és silenciós: el nen hi veu bé amb l'ull dominant i no es queixa de res. Sovint només es descobreix en una revisió visual, o quan es tapa un ull per casualitat i s'adona que amb l'altre no hi veu.",
  ],
  es: [
    "El ojo vago, o ambliopía, es la pérdida de capacidad visual de un ojo que estructuralmente está sano. Ocurre cuando, durante los primeros años de vida, el cerebro recibe una imagen peor de un ojo y acaba priorizando el otro. Las causas más habituales son una diferencia de graduación entre ambos ojos, un estrabismo o una obstrucción visual.",
    "El problema es que es silencioso: el niño ve bien con el ojo dominante y no se queja de nada. A menudo solo se descubre en una revisión visual, o cuando se tapa un ojo por casualidad y se da cuenta de que con el otro no ve.",
  ],
  en: [
    "Lazy eye, or amblyopia, is reduced vision in an eye that is structurally healthy. It happens when, in the first years of life, the brain receives a poorer image from one eye and starts favouring the other. The usual causes are a difference in prescription between the eyes, a squint, or a visual obstruction.",
    "The problem is that it is silent: the child sees well with the dominant eye and doesn't complain. It is often found only at an eye exam, or by chance when one eye gets covered.",
  ],
  de: [
    "Schwachsichtigkeit (Amblyopie) ist die verminderte Sehleistung eines strukturell gesunden Auges. Sie entsteht, wenn das Gehirn in den ersten Lebensjahren von einem Auge ein schlechteres Bild erhält und das andere bevorzugt. Häufige Ursachen sind unterschiedliche Werte beider Augen, Schielen oder eine Sichtbehinderung.",
    "Das Tückische: Sie verläuft unbemerkt. Das Kind sieht mit dem dominanten Auge gut und klagt nicht. Oft wird sie erst bei einer Untersuchung entdeckt.",
  ],
};

const signsTitle = {
  ca: "Com detectar-ho a casa",
  es: "Cómo detectarlo en casa",
  en: "How to spot it at home",
  de: "Woran Sie es zu Hause erkennen",
};

const signs = {
  ca: [
    "Un ull es desvia cap endins o cap enfora, encara que sigui de tant en tant.",
    "El nen tomba o gira el cap per mirar la televisió o llegir.",
    "Es tapa o tanca un ull quan hi ha molta llum o quan es concentra.",
    "Rebuig clar quan li tapes un ull en concret (perquè amb l'altre no hi veu bé).",
    "Maldestresa amb la pilota o en calcular distàncies.",
  ],
  es: [
    "Un ojo se desvía hacia dentro o hacia fuera, aunque sea de vez en cuando.",
    "El niño ladea o gira la cabeza para mirar la televisión o leer.",
    "Se tapa o cierra un ojo cuando hay mucha luz o cuando se concentra.",
    "Rechazo claro cuando le tapas un ojo en concreto (porque con el otro no ve bien).",
    "Torpeza con la pelota o al calcular distancias.",
  ],
  en: [
    "One eye drifts in or out, even occasionally.",
    "The child tilts or turns the head to watch TV or read.",
    "Covers or closes one eye in bright light or when concentrating.",
    "Clearly objects when you cover one particular eye (because the other doesn't see well).",
    "Clumsiness with a ball or when judging distances.",
  ],
  de: [
    "Ein Auge weicht nach innen oder außen ab, auch nur gelegentlich.",
    "Das Kind neigt oder dreht den Kopf beim Fernsehen oder Lesen.",
    "Verdeckt oder schließt ein Auge bei hellem Licht oder bei Konzentration.",
    "Wehrt sich deutlich, wenn ein bestimmtes Auge abgedeckt wird.",
    "Ungeschicklichkeit beim Ballspiel oder beim Abschätzen von Entfernungen.",
  ],
};

const ageTitle = {
  ca: "Per què importa tant l'edat",
  es: "Por qué importa tanto la edad",
  en: "Why age matters so much",
  de: "Warum das Alter so wichtig ist",
};

const ageText = {
  ca: "El sistema visual es desenvolupa sobretot durant els primers anys de vida. Com més aviat es detecta i es tracta una ambliopia, millor sol ser la recuperació. Això no vol dir que a partir d'una certa edat no es pugui fer res —hi ha casos que milloren més tard—, però sí que el temps juga a favor de la detecció precoç. Per això insistim en la revisió visual als 3 anys.",
  es: "El sistema visual se desarrolla sobre todo durante los primeros años de vida. Cuanto antes se detecta y se trata una ambliopía, mejor suele ser la recuperación. Esto no significa que a partir de cierta edad no se pueda hacer nada —hay casos que mejoran más tarde—, pero sí que el tiempo juega a favor de la detección precoz. Por eso insistimos en la revisión visual a los 3 años.",
  en: "The visual system develops mainly in the first years of life. The earlier amblyopia is found and treated, the better the recovery usually is. That doesn't mean nothing can be done later — some cases improve at older ages — but time favours early detection. That is why we insist on an eye exam at age 3.",
  de: "Das Sehsystem entwickelt sich vor allem in den ersten Lebensjahren. Je früher eine Amblyopie erkannt und behandelt wird, desto besser ist meist das Ergebnis. Das heißt nicht, dass später nichts mehr geht — manche Fälle verbessern sich auch dann —, aber Früherkennung zahlt sich aus. Deshalb empfehlen wir die Untersuchung mit 3 Jahren.",
};

const therapyTitle = {
  ca: "En què consisteix la teràpia visual",
  es: "En qué consiste la terapia visual",
  en: "What vision therapy involves",
  de: "Was Sehtherapie beinhaltet",
};

const therapy = {
  ca: [
    "La teràpia visual és un entrenament pautat de les habilitats visuals: no es tracta de veure més lletres, sinó que els dos ulls treballin junts i de manera eficient. A Looptica dissenyem el programa a partir d'una avaluació prèvia i el revisem periòdicament.",
    "Treballem, entre altres coses, la coordinació dels dos ulls (binocularitat), l'enfocament o acomodació, els moviments oculars de seguiment i salt —els que fem servir per llegir— i la coordinació ull-mà.",
    "Sovint la teràpia es combina amb una correcció òptica adequada, i en els casos que ho requereixen es coordina amb el tractament de l'oftalmòleg.",
  ],
  es: [
    "La terapia visual es un entrenamiento pautado de las habilidades visuales: no se trata de ver más letras, sino de que ambos ojos trabajen juntos y de manera eficiente. En Looptica diseñamos el programa a partir de una evaluación previa y lo revisamos periódicamente.",
    "Trabajamos, entre otras cosas, la coordinación de ambos ojos (binocularidad), el enfoque o acomodación, los movimientos oculares de seguimiento y salto —los que usamos al leer— y la coordinación ojo-mano.",
    "A menudo la terapia se combina con una corrección óptica adecuada, y en los casos que lo requieren se coordina con el tratamiento del oftalmólogo.",
  ],
  en: [
    "Vision therapy is a structured training of visual skills: it isn't about reading more letters, but about getting both eyes to work together efficiently. At Looptica we design the programme from a prior assessment and review it regularly.",
    "We work on eye teaming (binocularity), focusing, tracking and saccadic eye movements — the ones used for reading — and eye-hand coordination.",
    "Therapy is often combined with the right optical correction, and coordinated with ophthalmological treatment where needed.",
  ],
  de: [
    "Sehtherapie ist ein strukturiertes Training visueller Fähigkeiten: Es geht nicht darum, mehr Buchstaben zu lesen, sondern darum, dass beide Augen effizient zusammenarbeiten. Bei Looptica erstellen wir das Programm nach einer Voruntersuchung und überprüfen es regelmäßig.",
    "Wir trainieren unter anderem beidäugiges Sehen, Akkommodation, Folge- und Sprungbewegungen der Augen — die wir beim Lesen nutzen — sowie Auge-Hand-Koordination.",
    "Häufig wird die Therapie mit der passenden optischen Korrektion kombiniert und bei Bedarf mit der augenärztlichen Behandlung abgestimmt.",
  ],
};

const learningTitle = {
  ca: "Visió i aprenentatge",
  es: "Visión y aprendizaje",
  en: "Vision and learning",
  de: "Sehen und Lernen",
};

const learning = {
  ca: "Un nen pot tenir una agudesa visual perfecta i, tot i així, cansar-se en llegir, saltar-se línies o perdre la concentració als deu minuts. Passa quan els ulls no coordinen bé o l'enfocament no és estable. No és un problema d'intel·ligència ni d'actitud: és eficàcia visual, i es pot avaluar i entrenar. Si a l'escola han comentat dificultats de lectura, val la pena descartar-ho.",
  es: "Un niño puede tener una agudeza visual perfecta y, aun así, cansarse al leer, saltarse líneas o perder la concentración a los diez minutos. Ocurre cuando los ojos no coordinan bien o el enfoque no es estable. No es un problema de inteligencia ni de actitud: es eficacia visual, y se puede evaluar y entrenar. Si en el colegio han comentado dificultades de lectura, vale la pena descartarlo.",
  en: "A child can have perfect visual acuity and still tire when reading, skip lines or lose concentration after ten minutes. That happens when the eyes don't team well or focusing isn't stable. It isn't about intelligence or attitude: it is visual efficiency, and it can be assessed and trained. If school has flagged reading difficulties, it is worth ruling out.",
  de: "Ein Kind kann perfekte Sehschärfe haben und trotzdem beim Lesen ermüden, Zeilen überspringen oder nach zehn Minuten die Konzentration verlieren. Das passiert, wenn die Augen nicht gut zusammenarbeiten oder die Fokussierung instabil ist. Das ist keine Frage von Intelligenz oder Einstellung, sondern visueller Effizienz — und lässt sich prüfen und trainieren.",
};

const faqTitle = {
  ca: "Preguntes freqüents",
  es: "Preguntas frecuentes",
  en: "Frequently asked questions",
  de: "Häufige Fragen",
};

const faqs = {
  ca: [
    { q: "L'ull gandul es cura només amb el pegat?", a: "El pegat (oclusió) és una part habitual del tractament, però normalment cal, a més, la correcció òptica adequada i, en molts casos, teràpia visual perquè els dos ulls acabin treballant junts." },
    { q: "Fins a quina edat es pot tractar?", a: "Com més aviat, millor pronòstic. Tot i això, hi ha casos que milloren també en edats més avançades. Ho valorem cas per cas a la primera visita." },
    { q: "La teràpia visual substitueix l'oftalmòleg?", a: "No. Som òptics optometristes: avaluem i entrenem les habilitats visuals. Quan hi ha una patologia o cal tractament mèdic o quirúrgic, derivem a l'oftalmòleg i treballem coordinadament." },
    { q: "Quantes sessions calen?", a: "Depèn del cas i de la constància amb els exercicis. Després de l'avaluació inicial et donem una previsió i fem revisions periòdiques per anar mesurant els avenços." },
  ],
  es: [
    { q: "¿El ojo vago se cura solo con el parche?", a: "El parche (oclusión) es una parte habitual del tratamiento, pero normalmente hace falta además la corrección óptica adecuada y, en muchos casos, terapia visual para que ambos ojos acaben trabajando juntos." },
    { q: "¿Hasta qué edad se puede tratar?", a: "Cuanto antes, mejor pronóstico. Aun así, hay casos que mejoran también en edades más avanzadas. Lo valoramos caso por caso en la primera visita." },
    { q: "¿La terapia visual sustituye al oftalmólogo?", a: "No. Somos ópticos optometristas: evaluamos y entrenamos las habilidades visuales. Cuando hay una patología o hace falta tratamiento médico o quirúrgico, derivamos al oftalmólogo y trabajamos de forma coordinada." },
    { q: "¿Cuántas sesiones hacen falta?", a: "Depende del caso y de la constancia con los ejercicios. Tras la evaluación inicial te damos una previsión y hacemos revisiones periódicas para ir midiendo los avances." },
  ],
  en: [
    { q: "Is patching enough to fix a lazy eye?", a: "Patching (occlusion) is a common part of treatment, but the right optical correction is usually needed too, and in many cases vision therapy so that both eyes end up working together." },
    { q: "Up to what age can it be treated?", a: "The earlier the better the prognosis. Even so, some cases improve at older ages. We assess this case by case at the first visit." },
    { q: "Does vision therapy replace the ophthalmologist?", a: "No. We are optometrists: we assess and train visual skills. When there is pathology or medical or surgical treatment is needed, we refer to an ophthalmologist and work together." },
    { q: "How many sessions are needed?", a: "It depends on the case and on consistency with the exercises. After the initial assessment we give you an estimate and review progress regularly." },
  ],
  de: [
    { q: "Reicht das Abkleben beim schwachen Auge?", a: "Okklusion ist ein üblicher Teil der Behandlung, meist braucht es zusätzlich die passende optische Korrektion und in vielen Fällen Sehtherapie, damit beide Augen zusammenarbeiten." },
    { q: "Bis zu welchem Alter ist eine Behandlung möglich?", a: "Je früher, desto besser die Prognose. Dennoch verbessern sich manche Fälle auch später. Wir beurteilen das individuell beim Ersttermin." },
    { q: "Ersetzt Sehtherapie den Augenarzt?", a: "Nein. Wir sind Optometristen: Wir prüfen und trainieren visuelle Fähigkeiten. Bei Erkrankungen oder medizinischem bzw. chirurgischem Bedarf überweisen wir an den Augenarzt." },
    { q: "Wie viele Sitzungen sind nötig?", a: "Das hängt vom Fall und der Konsequenz bei den Übungen ab. Nach der Erstuntersuchung geben wir eine Einschätzung und messen den Fortschritt regelmäßig." },
  ],
};

const hubLink = {
  ca: <>Vols començar per una revisió completa? Consulta la nostra pàgina de <Link to="/ca/visio-infantil" className="text-[#55afa9] underline font-medium">visió infantil</Link>.</>,
  es: <>¿Quieres empezar por una revisión completa? Consulta nuestra página de <Link to="/es/visio-infantil" className="text-[#55afa9] underline font-medium">visión infantil</Link>.</>,
  en: <>Want to start with a full exam? See our <Link to="/en/visio-infantil" className="text-[#55afa9] underline font-medium">children's vision</Link> page.</>,
  de: <>Lieber mit einer vollständigen Untersuchung starten? Siehe unsere Seite <Link to="/de/visio-infantil" className="text-[#55afa9] underline font-medium">Kindersehen</Link>.</>,
};

const parentCrumb = {
  ca: "Visió infantil",
  es: "Visión infantil",
  en: "Children's vision",
  de: "Kindersehen",
};

const UllGandul = () => {
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
        image="/images/_DSC4696.jpg"
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        appointmentSubject="Avaluació d'ull gandul i teràpia visual a Looptica"
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
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold mb-4">{signsTitle[lang]}</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {signs[lang].map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="prose prose-lg max-w-none mb-12">
            <h2>{ageTitle[lang]}</h2>
            <p>{ageText[lang]}</p>
            <h2>{therapyTitle[lang]}</h2>
            {therapy[lang].map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <h2>{learningTitle[lang]}</h2>
            <p>{learning[lang]}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-[#e8f6f5] p-6 rounded-lg mb-12">
            <p className="text-lg">{hubLink[lang]}</p>
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

export default UllGandul;
