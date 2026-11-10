import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ServiceLayout from '@/components/layout/ServiceLayout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/config/languages';

const pageTitle: { [key in Language]: string } = {
  ca: "Ull Gandul (Ambliopia) a Barcelona Poblenou | looptica",
  es: "Ojo Vago (Ambliopía) en Barcelona Poblenou | looptica",
  en: "Lazy Eye (Amblyopia) in Barcelona Poblenou | looptica",
  de: "Schwachsichtigkeit (Amblyopie) in Barcelona Poblenou | looptica",
  it: "Occhio Pigro (Ambliopia) a Barcellona Poblenou | looptica",
};

const pageDescription: { [key in Language]: string } = {
  ca: "Ull gandul (ambliopia) infantil: senyals a casa i quina correcció òptica adaptem a Poblenou un cop l'oftalmòleg ha fet el diagnòstic.",
  es: "Ojo vago (ambliopía) infantil: señales en casa y qué corrección óptica adaptamos en Poblenou una vez el oftalmólogo ha hecho el diagnóstico.",
  en: "Childhood lazy eye (amblyopia): signs at home and the optical correction we fit in Poblenou, Barcelona once the ophthalmologist has diagnosed it.",
  de: "Schwachsichtigkeit (Amblyopie) bei Kindern: Anzeichen zu Hause und welche optische Korrektion wir in Poblenou nach der Diagnose anpassen.",
  it: "Occhio pigro (ambliopia) infantile: segnali a casa e la correzione ottica che adattiamo a Poblenou dopo la diagnosi dell'oculista.",
};

const hero = {
  ca: { title: "Ull gandul (ambliopia)", subtitle: "Detectar-ho aviat és clau. El diagnòstic és de l'oftalmòleg; la solució òptica, nostra." },
  es: { title: "Ojo vago (ambliopía)", subtitle: "Detectarlo pronto es clave. El diagnóstico es del oftalmólogo; la solución óptica, nuestra." },
  en: { title: "Lazy eye (amblyopia)", subtitle: "Spotting it early matters. The diagnosis is the ophthalmologist's; the optical solution is ours." },
  de: { title: "Schwachsichtigkeit (Amblyopie)", subtitle: "Früh erkennen ist entscheidend. Die Diagnose stellt der Augenarzt; die optische Lösung kommt von uns." },
  it: { title: "Occhio pigro (ambliopia)", subtitle: "Individuarlo presto è fondamentale. La diagnosi spetta all'oculista; la soluzione ottica a noi." },
};

const intro = {
  ca: [
    "L'ull gandul, o ambliopia, és la pèrdua de capacitat visual d'un ull que estructuralment està sa. Passa quan, durant els primers anys de vida, el cervell rep una imatge pitjor d'un ull i acaba prioritzant l'altre. Les causes més habituals són una diferència de graduació entre els dos ulls, un estrabisme o una obstrucció visual.",
    "El problema és que és silenciós: el nen hi veu bé amb l'ull dominant i no es queixa de res. Sovint només es descobreix quan un professional l'explora, o quan es tapa un ull per casualitat i s'adona que amb l'altre no hi veu.",
    "Si sospites que el teu fill pot tenir un ull gandul, el primer pas és l'oftalmòleg: és qui ha d'explorar, descartar patologies, fer el diagnòstic i pautar el tractament.",
  ],
  es: [
    "El ojo vago, o ambliopía, es la pérdida de capacidad visual de un ojo que estructuralmente está sano. Ocurre cuando, durante los primeros años de vida, el cerebro recibe una imagen peor de un ojo y acaba priorizando el otro. Las causas más habituales son una diferencia de graduación entre ambos ojos, un estrabismo o una obstrucción visual.",
    "El problema es que es silencioso: el niño ve bien con el ojo dominante y no se queja de nada. A menudo solo se descubre cuando un profesional lo explora, o cuando se tapa un ojo por casualidad y se da cuenta de que con el otro no ve.",
    "Si sospechas que tu hijo puede tener un ojo vago, el primer paso es el oftalmólogo: es quien debe explorar, descartar patologías, hacer el diagnóstico y pautar el tratamiento.",
  ],
  en: [
    "Lazy eye, or amblyopia, is reduced vision in an eye that is structurally healthy. It happens when, in the first years of life, the brain receives a poorer image from one eye and starts favouring the other. The usual causes are a difference in prescription between the eyes, a squint, or a visual obstruction.",
    "The problem is that it is silent: the child sees well with the dominant eye and doesn't complain. It is often found only when a professional examines them, or by chance when one eye gets covered.",
    "If you suspect your child has a lazy eye, the first step is the ophthalmologist: they are the ones who must examine, rule out pathology, diagnose and prescribe treatment.",
  ],
  de: [
    "Schwachsichtigkeit (Amblyopie) ist die verminderte Sehleistung eines strukturell gesunden Auges. Sie entsteht, wenn das Gehirn in den ersten Lebensjahren von einem Auge ein schlechteres Bild erhält und das andere bevorzugt. Häufige Ursachen sind unterschiedliche Werte beider Augen, Schielen oder eine Sichtbehinderung.",
    "Das Tückische: Sie verläuft unbemerkt. Das Kind sieht mit dem dominanten Auge gut und klagt nicht. Oft wird sie erst bei einer fachlichen Untersuchung entdeckt.",
    "Bei Verdacht auf ein schwaches Auge ist der Augenarzt der erste Schritt: Er untersucht, schließt Erkrankungen aus, stellt die Diagnose und legt die Behandlung fest.",
  ],
  it: [
    "L'occhio pigro, o ambliopia, è la riduzione della capacità visiva di un occhio strutturalmente sano. Si verifica quando, durante i primi anni di vita, il cervello riceve un'immagine peggiore da un occhio e finisce per privilegiare l'altro. Le cause più comuni sono una differenza di gradazione tra i due occhi, uno strabismo o un'ostruzione visiva.",
    "Il problema è che è silenzioso: il bambino vede bene con l'occhio dominante e non lamenta nulla. Spesso viene scoperto solo durante una visita specialistica, o per caso quando si copre un occhio e si rende conto di non vederci con l'altro.",
    "Se sospetti che tuo figlio possa avere un occhio pigro, il primo passo è l'oculista: è lui che deve esaminare, escludere patologie, formulare la diagnosi e stabilire il trattamento.",
  ],
};

const signsTitle = {
  ca: "Com detectar-ho a casa",
  es: "Cómo detectarlo en casa",
  en: "How to spot it at home",
  de: "Woran Sie es zu Hause erkennen",
  it: "Come riconoscerlo a casa",
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
  it: [
    "Un occhio devia verso l'interno o verso l'esterno, anche solo occasionalmente.",
    "Il bambino inclina o gira la testa per guardare la TV o leggere.",
    "Si copre o chiude un occhio in presenza di luce forte o quando si concentra.",
    "Rifiuta chiaramente che gli si copra un occhio specifico (perché con l'altro non vede bene).",
    "Goffaggine con la palla o nel calcolare le distanze.",
  ],
};

const signsNote = {
  ca: "Davant qualsevol d'aquests senyals, demana visita amb l'oftalmòleg. És qui pot confirmar o descartar una ambliopia i indicar el tractament.",
  es: "Ante cualquiera de estas señales, pide visita con el oftalmólogo. Es quien puede confirmar o descartar una ambliopía e indicar el tratamiento.",
  en: "If you see any of these signs, book an appointment with an ophthalmologist. They are the ones who can confirm or rule out amblyopia and indicate treatment.",
  de: "Bei einem dieser Anzeichen vereinbaren Sie einen Termin beim Augenarzt. Er kann eine Amblyopie bestätigen oder ausschließen und die Behandlung festlegen.",
  it: "In presenza di uno qualsiasi di questi segnali, fissa una visita con l'oculista. È l'unico a poter confermare o escludere un'ambliopia e indicare il trattamento.",
};

const ageTitle = {
  ca: "Per què importa tant l'edat",
  es: "Por qué importa tanto la edad",
  en: "Why age matters so much",
  de: "Warum das Alter so wichtig ist",
  it: "Perché l'età è così importante",
};

const ageText = {
  ca: "El sistema visual es desenvolupa sobretot durant els primers anys de vida. Com més aviat es detecta i es tracta una ambliopia, millor sol ser la recuperació. Això no vol dir que a partir d'una certa edat no es pugui fer res —hi ha casos que milloren més tard—, però sí que el temps juga a favor de la detecció precoç. Per això, davant el mínim dubte, val la pena una visita a l'oftalmòleg.",
  es: "El sistema visual se desarrolla sobre todo durante los primeros años de vida. Cuanto antes se detecta y se trata una ambliopía, mejor suele ser la recuperación. Esto no significa que a partir de cierta edad no se pueda hacer nada —hay casos que mejoran más tarde—, pero sí que el tiempo juega a favor de la detección precoz. Por eso, ante la mínima duda, vale la pena una visita al oftalmólogo.",
  en: "The visual system develops mainly in the first years of life. The earlier amblyopia is found and treated, the better the recovery usually is. That doesn't mean nothing can be done later — some cases improve at older ages — but time favours early detection. So at the slightest doubt, a visit to the ophthalmologist is worth it.",
  de: "Das Sehsystem entwickelt sich vor allem in den ersten Lebensjahren. Je früher eine Amblyopie erkannt und behandelt wird, desto besser ist meist das Ergebnis. Das heißt nicht, dass später nichts mehr geht — manche Fälle verbessern sich auch dann —, aber Früherkennung zahlt sich aus. Beim kleinsten Zweifel lohnt daher der Weg zum Augenarzt.",
  it: "Il sistema visivo si sviluppa soprattutto durante i primi anni di vita. Prima viene individuata e trattata un'ambliopia, migliore tende a essere il recupero. Questo non significa che dopo una certa età non si possa fare nulla — ci sono casi che migliorano anche più tardi —, ma il tempo gioca a favore della diagnosi precoce. Per questo, al minimo dubbio, vale la pena consultare un oculista.",
};

const roleTitle = {
  ca: "Què podem fer a looptica",
  es: "Qué podemos hacer en looptica",
  en: "What we can do at looptica",
  de: "Was wir bei looptica tun können",
  it: "Cosa possiamo fare da looptica",
};

const role = {
  ca: [
    "La nostra feina comença quan ja hi ha un diagnòstic i una prescripció de l'oftalmòleg. A partir d'aquí ens ocupem de la solució òptica i del seguiment, sempre segons les seves indicacions.",
    "Adaptem la correcció òptica prescrita amb lents ben calculades i centrades, muntades en una muntura còmoda i estable: en una ambliopia, que les ulleres estiguin sempre a la posició correcta és part del tractament que ha pautat l'oftalmòleg.",
    "Quan l'especialista ho indica, adaptem lentilles en lloc d'ulleres, i controlem l'evolució de la graduació amb revisions periòdiques, informant-lo del que anem observant.",
    "Aquestes actuacions les lidera l'oftalmòleg: explorar per primera vegada un nen que no s'ha examinat mai, diagnosticar o descartar patologies, aplicar tractaments mèdics i fer teràpia visual.",
  ],
  es: [
    "Nuestro trabajo empieza cuando ya hay un diagnóstico y una prescripción del oftalmólogo. A partir de ahí nos ocupamos de la solución óptica y del seguimiento, siempre según sus indicaciones.",
    "Adaptamos la corrección óptica prescrita con lentes bien calculadas y centradas, montadas en una montura cómoda y estable: en una ambliopía, que las gafas estén siempre en la posición correcta es parte del tratamiento pautado por el oftalmólogo.",
    "Cuando el especialista lo indica, adaptamos lentillas en lugar de gafas, y controlamos la evolución de la graduación con revisiones periódicas, informándole de lo que observamos.",
    "Estas actuaciones las lidera el oftalmólogo: explorar por primera vez a un niño que nunca ha sido examinado, diagnosticar o descartar patologías, aplicar tratamientos médicos y hacer terapia visual.",
  ],
  en: [
    "Our work starts once there is a diagnosis and a prescription from the ophthalmologist. From there we handle the optical solution and the follow-up, always according to their instructions.",
    "We fit the prescribed correction with accurately calculated and centred lenses in a comfortable, stable frame: with amblyopia, keeping the glasses in the right position is part of the treatment the ophthalmologist has set.",
    "When the specialist indicates it, we fit contact lenses instead of glasses, and we monitor how the prescription evolves with regular check-ups, reporting back what we observe.",
    "These actions are led by the ophthalmologist: examining a child for the first time, diagnosing or ruling out pathology, applying medical treatments, or providing vision therapy.",
  ],
  de: [
    "Unsere Arbeit beginnt, wenn Diagnose und Verordnung des Augenarztes vorliegen. Danach übernehmen wir die optische Lösung und die Nachbetreuung, stets nach seinen Vorgaben.",
    "Wir setzen die verordnete Korrektion mit korrekt berechneten und zentrierten Gläsern in einer bequemen, stabilen Fassung um: Bei Amblyopie gehört der richtige Sitz der Brille zur vom Augenarzt festgelegten Behandlung.",
    "Wenn der Facharzt es vorsieht, passen wir Kontaktlinsen statt einer Brille an und kontrollieren die Werteentwicklung regelmäßig, mit Rückmeldung an ihn.",
    "Diese Maßnahmen führt der Augenarzt durch: ein noch nie untersuchtes Kind erstmals untersuchen, Erkrankungen diagnostizieren oder ausschließen, medizinische Behandlungen anwenden oder Sehtherapie anbieten.",
  ],
  it: [
    "Il nostro lavoro inizia quando sono già presenti la diagnosi e la prescrizione dell'oculista. Da quel momento ci occupiamo della soluzione ottica e del monitoraggio, sempre secondo le sue indicazioni.",
    "Adattiamo la correzione ottica prescritta con lenti ben calcolate e centrate, montate su una montatura comoda e stabile: nell'ambliopia, il fatto che gli occhiali siano sempre nella posizione corretta fa parte del trattamento indicato dall'oculista.",
    "Quando lo specialista lo richiede, applichiamo lenti a contatto al posto degli occhiali e monitoriamo l'evoluzione della gradazione con controlli periodici, informandolo di ciò che osserviamo.",
    "Questi interventi sono di competenza dell'oculista: visitare per la prima volta un bambino mai esaminato prima, diagnosticare o escludere patologie, applicare trattamenti medici ed eseguire terapia visiva.",
  ],
};

const learningTitle = {
  ca: "Visió i aprenentatge",
  es: "Visión y aprendizaje",
  en: "Vision and learning",
  de: "Sehen und Lernen",
  it: "Visione e apprendimento",
};

const learning = {
  ca: "Un nen pot tenir una agudesa visual perfecta i, tot i així, cansar-se en llegir, saltar-se línies o perdre la concentració als deu minuts. Passa quan els ulls no coordinen bé o l'enfocament no és estable. No és un problema d'intel·ligència ni d'actitud. Si a l'escola han comentat dificultats de lectura, val la pena que ho valori l'oftalmòleg; si el resultat és que cal una correcció òptica, nosaltres l'adaptem i en fem el seguiment.",
  es: "Un niño puede tener una agudeza visual perfecta y, aun así, cansarse al leer, saltarse líneas o perder la concentración a los diez minutos. Ocurre cuando los ojos no coordinan bien o el enfoque no es estable. No es un problema de inteligencia ni de actitud. Si en el colegio han comentado dificultades de lectura, vale la pena que lo valore el oftalmólogo; si el resultado es que hace falta una corrección óptica, nosotros la adaptamos y hacemos el seguimiento.",
  en: "A child can have perfect visual acuity and still tire when reading, skip lines or lose concentration after ten minutes. That happens when the eyes don't team well or focusing isn't stable. It isn't about intelligence or attitude. If school has flagged reading difficulties, it is worth having the ophthalmologist assess it; if the outcome is that an optical correction is needed, we fit it and follow it up.",
  de: "Ein Kind kann perfekte Sehschärfe haben und trotzdem beim Lesen ermüden, Zeilen überspringen oder nach zehn Minuten die Konzentration verlieren. Das passiert, wenn die Augen nicht gut zusammenarbeiten oder die Fokussierung instabil ist. Das ist keine Frage von Intelligenz oder Einstellung. Wurden in der Schule Leseschwierigkeiten angesprochen, sollte der Augenarzt das beurteilen; ist eine optische Korrektion nötig, passen wir sie an und begleiten sie.",
  it: "Un bambino può avere un'acuità visiva perfetta e, nonostante ciò, affaticarsi quando legge, saltare le righe o perdere la concentrazione dopo dieci minuti. Succede quando gli occhi non coordinano bene o la messa a fuoco non è stabile. Non è una questione di intelligenza né di impegno. Se a scuola hanno segnalato difficoltà di lettura, vale la pena far valutare la situazione dall'oculista; se l'esito prevede una correzione ottica, noi la adattiamo e ne seguiamo l'evoluzione.",
};

const faqTitle = {
  ca: "Preguntes freqüents",
  es: "Preguntas frecuentes",
  en: "Frequently asked questions",
  de: "Häufige Fragen",
  it: "Domande frequenti",
};

const faqs = {
  ca: [
    { q: "Feu teràpia visual?", a: "A looptica ens centrem en la part òptica: ulleres i lents per a la correcció i el control de la miopia, lentilles i lents nocturnes Orto-K, ajust i seguiment, sempre segons la prescripció de l'oftalmòleg." },
    { q: "L'ull gandul es cura només amb el pegat?", a: "El pegat (oclusió) és una part habitual del tractament que pauta l'oftalmòleg, però normalment cal, a més, portar la correcció òptica adequada i ben adaptada. D'aquesta part ens encarreguem nosaltres." },
    { q: "Qui ha de fer el diagnòstic?", a: "L'oftalmòleg. És qui explora el nen, descarta patologies, confirma l'ambliopia i decideix el tractament. Nosaltres som òptics optometristes i treballem després, de manera coordinada i segons les seves indicacions." },
    { q: "Fins a quina edat es pot tractar?", a: "Com més aviat, millor pronòstic; tot i això, hi ha casos que milloren també en edats més avançades. Aquesta valoració la fa l'oftalmòleg en la seva exploració." },
  ],
  es: [
    { q: "¿Hacéis terapia visual?", a: "En looptica nos centramos en la parte óptica: gafas y lentes para la corrección y el control de la miopía, lentillas y lentes nocturnas Orto-K, ajuste y seguimiento, siempre según la prescripción del oftalmólogo." },
    { q: "¿El ojo vago se cura solo con el parche?", a: "El parche (oclusión) es una parte habitual del tratamiento que pauta el oftalmólogo, pero normalmente hace falta además llevar la corrección óptica adecuada y bien adaptada. De esa parte nos encargamos nosotros." },
    { q: "¿Quién debe hacer el diagnóstico?", a: "El oftalmólogo. Es quien explora al niño, descarta patologías, confirma la ambliopía y decide el tratamiento. Nosotros somos ópticos optometristas y trabajamos después, de forma coordinada y según sus indicaciones." },
    { q: "¿Hasta qué edad se puede tratar?", a: "Cuanto antes, mejor pronóstico; aun así, hay casos que mejoran también en edades más avanzadas. Esa valoración la hace el oftalmólogo en su exploración." },
  ],
  en: [
    { q: "Do you offer vision therapy?", a: "At looptica we focus on the optical side: glasses and lenses for correction and myopia control, contact lenses and Ortho-K overnight lenses, fitting and follow-up, always following the ophthalmologist's prescription." },
    { q: "Is patching enough to fix a lazy eye?", a: "Patching (occlusion) is a common part of the treatment the ophthalmologist prescribes, but wearing the right, well-fitted optical correction is usually needed too. That part is ours." },
    { q: "Who should make the diagnosis?", a: "The ophthalmologist. They examine the child, rule out pathology, confirm the amblyopia and decide the treatment. We are optometrists and step in afterwards, working in coordination and to their instructions." },
    { q: "Up to what age can it be treated?", a: "The earlier the better the prognosis; even so, some cases improve at older ages. That assessment is made by the ophthalmologist during their examination." },
  ],
  de: [
    { q: "Bieten Sie Sehtherapie an?", a: "Bei looptica konzentrieren wir uns auf die optische Seite: Brillen und Gläser zur Korrektion und Myopiekontrolle, Kontaktlinsen und Ortho-K-Nachtlinsen, Anpassung und Nachsorge, immer nach augenärztlicher Verordnung." },
    { q: "Reicht das Abkleben beim schwachen Auge?", a: "Okklusion ist ein üblicher Teil der vom Augenarzt verordneten Behandlung, meist braucht es zusätzlich die passende und gut angepasste optische Korrektion. Dafür sind wir zuständig." },
    { q: "Wer stellt die Diagnose?", a: "Der Augenarzt. Er untersucht das Kind, schließt Erkrankungen aus, bestätigt die Amblyopie und legt die Behandlung fest. Wir sind Optometristen und kommen danach hinzu, abgestimmt und nach seinen Vorgaben." },
    { q: "Bis zu welchem Alter ist eine Behandlung möglich?", a: "Je früher, desto besser die Prognose; dennoch verbessern sich manche Fälle auch später. Diese Beurteilung trifft der Augenarzt bei seiner Untersuchung." },
  ],
  it: [
    { q: "Fate terapia visiva?", a: "Da looptica ci concentriamo sulla parte ottica: occhiali e lenti per la correzione e il controllo della miopia, lenti a contatto e lenti notturne Orto-K, regolazione e monitoraggio, sempre secondo la prescrizione dell'oculista." },
    { q: "L'occhio pigro si risolve solo con la benda?", a: "Il bendaggio (occlusione) è una parte consueta del trattamento prescritto dall'oculista, ma di solito è necessario indossare anche la correzione ottica adeguata e ben adattata. Di questa parte ci occupiamo noi." },
    { q: "Chi deve fare la diagnosi?", a: "L'oculista. È lui a visitare il bambino, escludere patologie, confermare l'ambliopia e stabilire il trattamento. Noi siamo ottici optometristi e interveniamo dopo, in modo coordinato e secondo le sue indicazioni." },
    { q: "Fino a che età si può trattare?", a: "Prima si interviene, migliore è la prognosi; tuttavia, ci sono casi che migliorano anche in età più avanzata. Questa valutazione viene effettuata dall'oculista durante la visita." },
  ],
};

const hubLink = {
  ca: <>Vols veure totes les opcions òptiques per a nens? Consulta la nostra pàgina de <Link to="/ca/visio-infantil" className="text-[#55afa9] underline font-medium">visió infantil</Link>.</>,
  es: <>¿Quieres ver todas las opciones ópticas para niños? Consulta nuestra página de <Link to="/es/visio-infantil" className="text-[#55afa9] underline font-medium">visión infantil</Link>.</>,
  en: <>Want to see all the optical options for children? See our <Link to="/en/visio-infantil" className="text-[#55afa9] underline font-medium">children's vision</Link> page.</>,
  de: <>Alle optischen Optionen für Kinder? Siehe unsere Seite <Link to="/de/visio-infantil" className="text-[#55afa9] underline font-medium">Kindersehen</Link>.</>,
  it: <>Vuoi conoscere tutte le opzioni ottiche per bambini? Consulta la nostra pagina sulla <Link to="/it/visio-infantil" className="text-[#55afa9] underline font-medium">visione infantile</Link>.</>,
};

const parentCrumb = {
  ca: "Visió infantil",
  es: "Visión infantil",
  en: "Children's vision",
  de: "Kindersehen",
  it: "Visione infantile",
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
        appointmentSubject="Correcció òptica per ambliopia a looptica"
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
            <p className="text-gray-700 mt-4">{signsNote[lang]}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="prose prose-lg max-w-none mb-12">
            <h2>{ageTitle[lang]}</h2>
            <p>{ageText[lang]}</p>
            <h2>{roleTitle[lang]}</h2>
            {role[lang].map((p, i) => (
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
