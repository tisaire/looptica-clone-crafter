import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ServiceLayout from '@/components/layout/ServiceLayout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GoogleCalendarButton from '@/components/ui/GoogleCalendarButton';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/config/languages';

const pageTitle: { [key in Language]: string } = {
  ca: "Control de la Miopia Infantil a Barcelona Poblenou",
  es: "Control de la Miopía Infantil en Barcelona Poblenou",
  en: "Childhood Myopia Control in Barcelona Poblenou",
  de: "Myopiekontrolle bei Kindern in Barcelona Poblenou",
};

const pageDescription: { [key in Language]: string } = {
  ca: "Control de miopia infantil a Poblenou, Barcelona: lents Stellest, MyoCare i MiYOSMART, Orto-K i lentilles, amb seguiment coordinat amb l'oftalmòleg.",
  es: "Control de miopía infantil en Poblenou, Barcelona: lentes Stellest, MyoCare y MiYOSMART, Orto-K y lentillas, con seguimiento junto al oftalmólogo.",
  en: "Childhood myopia control in Poblenou, Barcelona: Stellest, MyoCare and MiYOSMART glasses, Ortho-K and contact lenses, with ophthalmologist follow-up.",
  de: "Myopiekontrolle für Kinder in Poblenou, Barcelona: Stellest, MyoCare und MiYOSMART, Ortho-K und Kontaktlinsen, mit Nachsorge in Abstimmung mit dem Augenarzt.",
};

const hero = {
  "ca": {
    "title": "Control de la miopia infantil al Poblenou",
    "subtitle": "La miopia del teu fill augmenta cada any? Podem ajudar a alentir-ne la progressió."
  },
  "es": {
    "title": "Control de la miopía infantil en Poblenou",
    "subtitle": "¿La miopía de tu hijo aumenta cada año? Podemos ayudar a ralentizar su progresión."
  },
  "en": {
    "title": "Childhood myopia control in Poblenou",
    "subtitle": "Does your child’s myopia increase each year? We can help slow its progression."
  },
  "de": {
    "title": "Myopiekontrolle bei Kindern in Poblenou",
    "subtitle": "Nimmt die Kurzsichtigkeit Ihres Kindes jedes Jahr zu? Wir können helfen, ihr Fortschreiten zu verlangsamen."
  }
};

const intro = {
  "ca": [
    "Les ulleres convencionals permeten veure-hi bé, però no estan dissenyades per frenar l’augment de la miopia. Avui disposem de lents especials, lentilles i lents nocturnes que poden ajudar a reduir-ne la progressió durant la infància.",
    "A Looptica t’ajudem a trobar l’opció òptica més adequada per al teu fill i a fer-ne el seguiment, en coordinació amb l’oftalmòleg."
  ],
  "es": [
    "Las gafas convencionales permiten ver bien, pero no están diseñadas para frenar el aumento de la miopía. Hoy disponemos de lentes especiales, lentillas y lentes nocturnas que pueden ayudar a reducir su progresión durante la infancia.",
    "En Looptica te ayudamos a encontrar la opción óptica más adecuada para tu hijo y a realizar su seguimiento, en coordinación con el oftalmólogo."
  ],
  "en": [
    "Conventional glasses provide clear vision, but are not designed to slow increasing myopia. Special spectacle lenses, contact lenses and overnight lenses can help reduce its progression during childhood.",
    "At Looptica we help you find the most suitable optical option for your child and arrange follow-up in coordination with the ophthalmologist."
  ],
  "de": [
    "Herkömmliche Brillen ermöglichen gutes Sehen, sind aber nicht dafür ausgelegt, die Zunahme der Kurzsichtigkeit zu bremsen. Spezielle Brillengläser, Kontaktlinsen und Nachtlinsen können helfen, ihr Fortschreiten im Kindesalter zu verlangsamen.",
    "Bei Looptica helfen wir Ihnen, die passende optische Lösung für Ihr Kind zu finden, und begleiten den Verlauf in Abstimmung mit dem Augenarzt."
  ]
};


const explanations = {
  "ca": [
    {
      "title": "Què és la miopia infantil?",
      "paragraphs": [
        "La miopia és un problema visual que fa que els objectes llunyans es vegin borrosos, mentre que els propers es poden veure clarament.",
        "En molts nens, això passa perquè l’ull creix més del compte en longitud. Quan s’allarga, les imatges dels objectes llunyans s’enfoquen per davant de la retina, en lloc de fer-ho directament sobre aquesta. Durant la infància, l’ull encara està creixent i la miopia pot augmentar amb els anys, especialment durant l’etapa escolar.",
        "Com més alta és la miopia, més augmenta el risc de determinades complicacions oculars en l’edat adulta, com el despreniment de retina o altres alteracions de la retina. L’objectiu del control és intentar que aquest augment sigui més lent."
      ]
    },
    {
      "title": "Corregir la miopia no és el mateix que controlar-la",
      "paragraphs": [
        "Les ulleres convencionals corregeixen la visió: permeten veure nítidament la pissarra i els objectes llunyans, però no estan dissenyades per alentir el creixement de l’ull.",
        "Les lents de control, a més de corregir la visió, incorporen dissenys òptics especials que poden ajudar a alentir la progressió de la miopia. Això no significa que desaparegui ni que deixi d’augmentar completament. Els resultats varien segons cada nen i el tractament escollit."
      ]
    },
    {
      "title": "Quan convé començar el control de la miopia?",
      "paragraphs": [
        "És recomanable valorar les opcions quan es detecta miopia durant la infància, especialment si:",
        "No cal esperar que el nen tingui molta miopia per informar-se sobre les opcions de control."
      ],
      "items": [
        "La graduació augmenta d’un any a l’altre.",
        "La miopia ha començat a una edat primerenca.",
        "Un o tots dos progenitors tenen miopia.",
        "L’oftalmòleg ha detectat una progressió significativa."
      ]
    }
  ],
  "es": [
    {
      "title": "¿Qué es la miopía infantil?",
      "paragraphs": [
        "La miopía es un problema visual que hace que los objetos lejanos se vean borrosos, mientras que los cercanos pueden verse claramente.",
        "En muchos niños ocurre porque el ojo crece demasiado en longitud. Al alargarse, las imágenes de los objetos lejanos se enfocan por delante de la retina, en lugar de hacerlo directamente sobre ella. Durante la infancia, el ojo sigue creciendo y la miopía puede aumentar con los años, especialmente en la etapa escolar.",
        "Cuanto mayor es la miopía, mayor es el riesgo de determinadas complicaciones oculares en la edad adulta, como el desprendimiento de retina u otras alteraciones de la retina. El objetivo del control es intentar que ese aumento sea más lento."
      ]
    },
    {
      "title": "Corregir la miopía no es lo mismo que controlarla",
      "paragraphs": [
        "Las gafas convencionales corrigen la visión: permiten ver con nitidez la pizarra y los objetos lejanos, pero no están diseñadas para ralentizar el crecimiento del ojo.",
        "Las lentes de control, además de corregir la visión, incorporan diseños ópticos especiales que pueden ayudar a ralentizar la progresión de la miopía. Esto no significa que desaparezca ni que deje de aumentar por completo. Los resultados varían según cada niño y el tratamiento elegido."
      ]
    },
    {
      "title": "¿Cuándo conviene empezar el control de la miopía?",
      "paragraphs": [
        "Es recomendable valorar las opciones cuando se detecta miopía durante la infancia, especialmente si:",
        "No hace falta esperar a que el niño tenga mucha miopía para informarse sobre las opciones de control."
      ],
      "items": [
        "La graduación aumenta de un año a otro.",
        "La miopía ha comenzado a una edad temprana.",
        "Uno o ambos progenitores tienen miopía.",
        "El oftalmólogo ha detectado una progresión significativa."
      ]
    }
  ],
  "en": [
    {
      "title": "What is childhood myopia?",
      "paragraphs": [
        "Myopia, or short-sightedness, makes distant objects appear blurred, while nearby objects may remain clear.",
        "In many children, this happens because the eye grows too long. As it lengthens, images of distant objects focus in front of the retina rather than directly on it. The eye is still growing during childhood, so myopia may increase over the years, particularly during school age.",
        "Higher myopia is associated with a greater risk of certain eye complications in adulthood, such as retinal detachment and other retinal changes. Myopia control aims to make this increase slower."
      ]
    },
    {
      "title": "Correcting myopia is not the same as controlling it",
      "paragraphs": [
        "Conventional glasses correct vision, allowing children to see the board and distant objects clearly, but are not designed to slow eye growth.",
        "Myopia control lenses also correct vision, but include special optical designs that can help slow myopia progression. This does not mean myopia disappears or stops increasing altogether. Results vary with each child and the chosen treatment."
      ]
    },
    {
      "title": "When should myopia control be considered?",
      "paragraphs": [
        "It is advisable to consider control options when myopia is detected in childhood, especially if:",
        "There is no need to wait until a child has high myopia to ask about control options."
      ],
      "items": [
        "The prescription increases from year to year.",
        "Myopia began at an early age.",
        "One or both parents have myopia.",
        "The ophthalmologist has identified significant progression."
      ]
    }
  ],
  "de": [
    {
      "title": "Was ist Kurzsichtigkeit bei Kindern?",
      "paragraphs": [
        "Bei Kurzsichtigkeit erscheinen entfernte Gegenstände unscharf, während nahe Gegenstände klar gesehen werden können.",
        "Bei vielen Kindern entsteht sie, weil das Auge zu stark in die Länge wächst. Dadurch werden Bilder entfernter Gegenstände vor der Netzhaut statt direkt auf ihr fokussiert. Im Kindesalter wächst das Auge noch, weshalb die Kurzsichtigkeit mit den Jahren, besonders im Schulalter, zunehmen kann.",
        "Mit zunehmender Myopie steigt das Risiko bestimmter Augenkomplikationen im Erwachsenenalter, etwa einer Netzhautablösung oder anderer Netzhautveränderungen. Ziel der Myopiekontrolle ist es, diese Zunahme möglichst zu verlangsamen."
      ]
    },
    {
      "title": "Myopie zu korrigieren ist nicht dasselbe wie sie zu kontrollieren",
      "paragraphs": [
        "Herkömmliche Brillen korrigieren das Sehen und ermöglichen einen scharfen Blick auf die Tafel und entfernte Gegenstände. Sie sind jedoch nicht dafür ausgelegt, das Augenwachstum zu verlangsamen.",
        "Gläser zur Myopiekontrolle korrigieren ebenfalls das Sehen und enthalten spezielle optische Designs, die das Fortschreiten verlangsamen können. Das bedeutet nicht, dass die Myopie verschwindet oder vollständig aufhört zuzunehmen. Die Ergebnisse hängen vom Kind und der gewählten Behandlung ab."
      ]
    },
    {
      "title": "Wann sollte eine Myopiekontrolle erwogen werden?",
      "paragraphs": [
        "Wird im Kindesalter Kurzsichtigkeit festgestellt, sollten die Möglichkeiten geprüft werden, besonders wenn:",
        "Man muss nicht warten, bis ein Kind stark kurzsichtig ist, um sich über die Möglichkeiten zu informieren."
      ],
      "items": [
        "Die Sehstärke sich von Jahr zu Jahr verändert.",
        "Die Kurzsichtigkeit früh begonnen hat.",
        "Ein oder beide Elternteile kurzsichtig sind.",
        "Der Augenarzt ein deutliches Fortschreiten festgestellt hat."
      ]
    }
  ]
};

const optionsTitle = {
  ca: "Les opcions que treballem a Looptica",
  es: "Las opciones que trabajamos en Looptica",
  en: "The options we work with at Looptica",
  de: "Die Optionen, mit denen wir bei Looptica arbeiten",
};

const optionsIntro = {
  "ca": "A Looptica treballem amb tres alternatives òptiques. La més adequada dependrà de l’edat, la graduació, l’evolució de la miopia i els hàbits del nen.",
  "es": "En Looptica trabajamos con tres alternativas ópticas. La más adecuada dependerá de la edad, la graduación, la evolución de la miopía y los hábitos del niño.",
  "en": "At Looptica we offer three optical alternatives. The most suitable depends on the child’s age, prescription, myopia progression and habits.",
  "de": "Bei Looptica bieten wir drei optische Möglichkeiten an. Die passende Wahl hängt von Alter, Sehstärke, Verlauf der Myopie und Gewohnheiten des Kindes ab."
};

const options = {
  "ca": [
    {
      "name": "Ulleres especials de control de miopia",
      "when": "Segons la indicació de la lent i el cas",
      "use": "Ús diürn, com unes ulleres habituals",
      "care": "Manteniment habitual i revisions"
    },
    {
      "name": "Lentilles toves de control",
      "when": "Segons maduresa i capacitat d’higiene",
      "use": "Ús diürn; una opció per a l’esport",
      "care": "Higiene i recanvi segons la lent prescrita"
    },
    {
      "name": "Orto-K (lents nocturnes)",
      "when": "Valoració individual i adaptació específica",
      "use": "Durant el son; pot permetre veure-hi de dia sense ulleres",
      "care": "Higiene estricta i revisions periòdiques"
    }
  ],
  "es": [
    {
      "name": "Gafas especiales de control de miopía",
      "when": "Según la indicación de la lente y el caso",
      "use": "Uso diurno, como unas gafas habituales",
      "care": "Mantenimiento habitual y revisiones"
    },
    {
      "name": "Lentillas blandas de control",
      "when": "Según madurez y capacidad de higiene",
      "use": "Uso diurno; una opción para el deporte",
      "care": "Higiene y recambio según la lente prescrita"
    },
    {
      "name": "Orto-K (lentes nocturnas)",
      "when": "Valoración individual y adaptación específica",
      "use": "Durante el sueño; puede permitir ver de día sin gafas",
      "care": "Higiene estricta y revisiones periódicas"
    }
  ],
  "en": [
    {
      "name": "Special myopia control glasses",
      "when": "According to lens indications and the individual case",
      "use": "Daytime wear, like regular glasses",
      "care": "Standard care and check-ups"
    },
    {
      "name": "Soft myopia control contact lenses",
      "when": "Depending on maturity and hygiene skills",
      "use": "Daytime wear; an option for sport",
      "care": "Hygiene and replacement as prescribed"
    },
    {
      "name": "Ortho-K (overnight lenses)",
      "when": "Individual assessment and specialist fitting",
      "use": "During sleep; may allow daytime vision without glasses",
      "care": "Strict hygiene and regular check-ups"
    }
  ],
  "de": [
    {
      "name": "Spezielle Brillen zur Myopiekontrolle",
      "when": "Je nach Indikation des Glases und Einzelfall",
      "use": "Tagsüber, wie eine gewöhnliche Brille",
      "care": "Übliche Pflege und Kontrollen"
    },
    {
      "name": "Weiche Kontaktlinsen zur Myopiekontrolle",
      "when": "Je nach Reife und Fähigkeit zur hygienischen Handhabung",
      "use": "Tagsüber; eine Möglichkeit beim Sport",
      "care": "Hygiene und Austausch nach Verordnung"
    },
    {
      "name": "Ortho-K (Nachtlinsen)",
      "when": "Individuelle Beurteilung und spezielle Anpassung",
      "use": "Im Schlaf; kann tagsüber Sehen ohne Brille ermöglichen",
      "care": "Strenge Hygiene und regelmäßige Kontrollen"
    }
  ]
};

const tableHeads = {
  "ca": [
    "Opció",
    "Com es valora",
    "Com s’utilitza",
    "Manteniment"
  ],
  "es": [
    "Opción",
    "Cómo se valora",
    "Cómo se utiliza",
    "Mantenimiento"
  ],
  "en": [
    "Option",
    "Suitability",
    "How it is used",
    "Care"
  ],
  "de": [
    "Option",
    "Eignung",
    "Anwendung",
    "Pflege"
  ]
};

const spectacleLenses = {
  ca: {
    title: "Stellest, MyoCare i MiYOSMART a Poblenou",
    intro: "A Looptica adaptem lents d'ulleres per al control de la miopia infantil com Stellest d'Essilor, MyoCare de ZEISS i MiYOSMART de HOYA. Estan dissenyades per corregir la visió i ajudar a alentir la progressió de la miopia; no la curen ni garanteixen el mateix resultat en tots els nens.",
    selection: "Cada marca utilitza un disseny òptic propi de desenfocament perifèric: H.A.L.T. (Stellest), C.A.R.E. (MyoCare) i D.I.M.S. (MiYOSMART). La tria parteix del diagnòstic i la prescripció de l'oftalmòleg i es valora segons la graduació, l'evolució de la miopia i les necessitats del nen. T'ajudem amb l'elecció de la muntura, el centrat i l'adaptació, i programem el seguiment coordinat amb l'oftalmòleg.",
  },
  es: {
    title: "Stellest, MyoCare y MiYOSMART en Poblenou",
    intro: "En Looptica adaptamos lentes de gafas para el control de la miopía infantil como Stellest de Essilor, MyoCare de ZEISS y MiYOSMART de HOYA. Están diseñadas para corregir la visión y ayudar a ralentizar la progresión de la miopía; no la curan ni garantizan el mismo resultado en todos los niños.",
    selection: "Cada marca utiliza un diseño óptico propio de desenfoque periférico: H.A.L.T. (Stellest), C.A.R.E. (MyoCare) y D.I.M.S. (MiYOSMART). La elección parte del diagnóstico y la prescripción del oftalmólogo y se valora según la graduación, la evolución de la miopía y las necesidades del niño. Te ayudamos con la elección de la montura, el centrado y la adaptación, y programamos el seguimiento coordinado con el oftalmólogo.",
  },
  en: {
    title: "Stellest, MyoCare and MiYOSMART in Poblenou",
    intro: "At Looptica we fit spectacle lenses for childhood myopia control, including Essilor Stellest, ZEISS MyoCare and HOYA MiYOSMART. They are designed to correct vision and help slow myopia progression; they do not cure it or guarantee the same result for every child.",
    selection: "Each brand uses its own peripheral defocus design: H.A.L.T. (Stellest), C.A.R.E. (MyoCare) and D.I.M.S. (MiYOSMART). Selection starts with the ophthalmologist's diagnosis and prescription and takes into account the prescription, myopia progression and the child's needs. We help with frame selection, lens centration and fitting, and arrange follow-up in coordination with the ophthalmologist.",
  },
  de: {
    title: "Stellest, MyoCare und MiYOSMART in Poblenou",
    intro: "Bei Looptica passen wir Brillengläser zur Myopiekontrolle bei Kindern an, darunter Stellest von Essilor, MyoCare von ZEISS und MiYOSMART von HOYA. Sie sollen die Sicht korrigieren und das Fortschreiten der Myopie verlangsamen; sie heilen sie nicht und garantieren nicht bei jedem Kind dasselbe Ergebnis.",
    selection: "Jede Marke verwendet ein eigenes Defokus-Design: H.A.L.T. (Stellest), C.A.R.E. (MyoCare) und D.I.M.S. (MiYOSMART). Die Auswahl basiert auf Diagnose und Verordnung des Augenarztes und berücksichtigt die Sehstärke, den Verlauf der Myopie und die Bedürfnisse des Kindes. Wir helfen bei Fassungswahl, Zentrierung und Anpassung und planen die Nachsorge in Abstimmung mit dem Augenarzt.",
  },
};

const atropineNote = {
  ca: "A Looptica no utilitzem atropina en baixa concentració. El nostre enfocament és òptic: Orto-K, lents de desenfocament perifèric i lentilles de control. Si el cas requereix tractament farmacològic, et derivem a l'oftalmòleg i seguim col·laborant en el control òptic.",
  es: "En Looptica no utilizamos atropina en baja concentración. Nuestro enfoque es óptico: Orto-K, lentes de desenfoque periférico y lentillas de control. Si el caso requiere tratamiento farmacológico, te derivamos al oftalmólogo y seguimos colaborando en el control óptico.",
  en: "At Looptica we do not use low-dose atropine. Our approach is optical: Ortho-K, peripheral defocus lenses and control contact lenses. If a case calls for pharmacological treatment, we refer to an ophthalmologist and keep collaborating on the optical side.",
  de: "Bei Looptica setzen wir kein niedrig dosiertes Atropin ein. Unser Ansatz ist optisch: Ortho-K, Defokus-Brillengläser und Kontrolllinsen. Ist eine medikamentöse Behandlung nötig, überweisen wir an den Augenarzt und begleiten weiterhin die optische Kontrolle.",
};

const contactExplanations = {
  "ca": [
    {
      "title": "Lentilles toves de control de miopia",
      "paragraphs": [
        "Són lents de contacte especialment dissenyades per corregir la visió i ajudar a alentir la progressió de la miopia. S’utilitzen durant el dia i poden ser una bona opció per a nens que practiquen esport o prefereixen no portar ulleres.",
        "Cal valorar si el nen té prou maduresa per manipular-les i mantenir una higiene correcta."
      ]
    },
    {
      "title": "Orto-K: lentilles nocturnes",
      "paragraphs": [
        "L’Orto-K utilitza lents de contacte especials que es porten mentre es dorm. Modifiquen temporalment la forma de la còrnia, de manera que molts usuaris poden veure-hi durant el dia sense ulleres ni lentilles.",
        "A més de corregir temporalment la miopia, l’Orto-K pot ajudar a alentir-ne la progressió. Requereix una adaptació específica, higiene estricta i revisions periòdiques."
      ]
    }
  ],
  "es": [
    {
      "title": "Lentillas blandas de control de miopía",
      "paragraphs": [
        "Son lentes de contacto especialmente diseñadas para corregir la visión y ayudar a ralentizar la progresión de la miopía. Se utilizan durante el día y pueden ser una buena opción para niños que practican deporte o prefieren no llevar gafas.",
        "Hay que valorar si el niño tiene suficiente madurez para manipularlas y mantener una higiene correcta."
      ]
    },
    {
      "title": "Orto-K: lentillas nocturnas",
      "paragraphs": [
        "La Orto-K utiliza lentes de contacto especiales que se llevan mientras se duerme. Modifican temporalmente la forma de la córnea, de modo que muchos usuarios pueden ver durante el día sin gafas ni lentillas.",
        "Además de corregir temporalmente la miopía, la Orto-K puede ayudar a ralentizar su progresión. Requiere una adaptación específica, higiene estricta y revisiones periódicas."
      ]
    }
  ],
  "en": [
    {
      "title": "Soft myopia control contact lenses",
      "paragraphs": [
        "These contact lenses are specially designed to correct vision and help slow myopia progression. They are worn during the day and may suit children who play sport or prefer not to wear glasses.",
        "The child’s maturity, ability to handle lenses and capacity to maintain good hygiene must be assessed."
      ]
    },
    {
      "title": "Ortho-K: overnight contact lenses",
      "paragraphs": [
        "Ortho-K uses special contact lenses worn during sleep. They temporarily reshape the cornea, allowing many users to see during the day without glasses or contact lenses.",
        "As well as temporarily correcting myopia, Ortho-K can help slow its progression. Specialist fitting, strict hygiene and regular check-ups are essential."
      ]
    }
  ],
  "de": [
    {
      "title": "Weiche Kontaktlinsen zur Myopiekontrolle",
      "paragraphs": [
        "Diese Kontaktlinsen sind speziell dafür entwickelt, das Sehen zu korrigieren und das Fortschreiten der Myopie zu verlangsamen. Sie werden tagsüber getragen und können für Kinder geeignet sein, die Sport treiben oder keine Brille tragen möchten.",
        "Es muss beurteilt werden, ob das Kind reif genug ist, die Linsen zu handhaben und auf gute Hygiene zu achten."
      ]
    },
    {
      "title": "Ortho-K: Nachtlinsen",
      "paragraphs": [
        "Ortho-K verwendet spezielle Kontaktlinsen, die im Schlaf getragen werden. Sie verändern vorübergehend die Form der Hornhaut, sodass viele Nutzer tagsüber ohne Brille oder Kontaktlinsen sehen können.",
        "Neben der vorübergehenden Korrektur kann Ortho-K das Fortschreiten der Myopie verlangsamen. Eine spezielle Anpassung, strenge Hygiene und regelmäßige Kontrollen sind erforderlich."
      ]
    }
  ]
};

const habitsTitle = {
  "ca": "Què poden fer els pares per cuidar la visió dels fills?",
  "es": "¿Qué pueden hacer los padres para cuidar la visión de sus hijos?",
  "en": "What can parents do to care for their children’s vision?",
  "de": "Was können Eltern für das Sehen ihrer Kinder tun?"
};

const habits = {
  "ca": [
    "Passar temps a l’aire lliure: afavorir aproximadament dues hores diàries d’activitats a l’exterior, sempre que sigui possible, amb la protecció solar adequada.",
    "Evitar distàncies de lectura massa curtes: els llibres i les pantalles no haurien d’estar enganxats als ulls.",
    "Fer descansos del treball de prop, alternant la lectura i les pantalles amb moments mirant de lluny.",
    "Mantenir una bona il·luminació per llegir i estudiar.",
    "Fer les revisions visuals recomanades, especialment si ja hi ha miopia o antecedents familiars."
  ],
  "es": [
    "Pasar tiempo al aire libre: favorecer aproximadamente dos horas diarias de actividades en el exterior, siempre que sea posible, con la protección solar adecuada.",
    "Evitar distancias de lectura demasiado cortas: los libros y las pantallas no deberían estar pegados a los ojos.",
    "Hacer descansos del trabajo de cerca, alternando la lectura y las pantallas con momentos mirando de lejos.",
    "Mantener una buena iluminación para leer y estudiar.",
    "Realizar las revisiones visuales recomendadas, especialmente si ya hay miopía o antecedentes familiares."
  ],
  "en": [
    "Spend time outdoors: aim for approximately two hours of outdoor activities a day where possible, with suitable sun protection.",
    "Avoid very short reading distances: books and screens should not be held too close to the eyes.",
    "Take breaks from close work, alternating reading and screen use with looking into the distance.",
    "Use adequate lighting for reading and studying.",
    "Attend recommended eye examinations, especially if there is already myopia or a family history."
  ],
  "de": [
    "Zeit im Freien verbringen: wenn möglich etwa zwei Stunden täglich draußen aktiv sein, mit geeignetem Sonnenschutz.",
    "Sehr kurze Leseabstände vermeiden: Bücher und Bildschirme nicht zu nah an die Augen halten.",
    "Pausen bei Naharbeit einlegen und zwischen Lesen oder Bildschirmnutzung und Blicken in die Ferne wechseln.",
    "Für ausreichende Beleuchtung beim Lesen und Lernen sorgen.",
    "Empfohlene Sehkontrollen wahrnehmen, besonders bei bestehender Myopie oder familiärer Vorbelastung."
  ]
};

const habitsNote = {
  "ca": "Aquests hàbits són recomanables, però no substitueixen els tractaments específics quan estan indicats. El benefici del temps a l’aire lliure és especialment clar per prevenir l’aparició de la miopia; el seu efecte sobre la progressió d’una miopia ja establerta és menys segur.",
  "es": "Estos hábitos son recomendables, pero no sustituyen los tratamientos específicos cuando están indicados. El beneficio del tiempo al aire libre es especialmente claro para prevenir la aparición de la miopía; su efecto sobre la progresión de una miopía ya establecida es menos seguro.",
  "en": "These habits are recommended, but do not replace specific treatment when indicated. The benefit of outdoor time is clearest for preventing myopia onset; its effect on progression of established myopia is less certain.",
  "de": "Diese Gewohnheiten sind empfehlenswert, ersetzen aber keine gezielte Behandlung, wenn diese angezeigt ist. Der Nutzen von Zeit im Freien ist für die Vorbeugung des Auftretens von Myopie am klarsten; die Wirkung auf bereits bestehende Myopie ist weniger gesichert."
};

const followTitle = {
  "ca": "Com fem el control de la miopia a Looptica?",
  "es": "¿Cómo hacemos el control de la miopía en Looptica?",
  "en": "How do we manage myopia control at Looptica?",
  "de": "Wie begleiten wir die Myopiekontrolle bei Looptica?"
};

const follow = {
  "ca": [
    {
      "title": "Valoració inicial",
      "text": "Partim de l’exploració, el diagnòstic i la prescripció de l’oftalmòleg. Si el nen encara no s’ha examinat, t’orientem perquè disposi d’aquesta valoració mèdica."
    },
    {
      "title": "Elecció de la solució òptica",
      "text": "Estudiem la graduació, les necessitats visuals, l’edat i la rutina diària del nen per valorar quina opció de control és més adequada."
    },
    {
      "title": "Adaptació personalitzada",
      "text": "Prenem les mesures necessàries per adaptar correctament les ulleres o lentilles. En el cas de l’Orto-K, fem les proves específiques d’adaptació, inclosa la topografia corneal."
    },
    {
      "title": "Seguiment periòdic",
      "text": "Programem revisions per comprovar l’adaptació, valorar l’evolució i fer els ajustos necessaris, coordinant el seguiment amb l’oftalmòleg."
    }
  ],
  "es": [
    {
      "title": "Valoración inicial",
      "text": "Partimos de la exploración, el diagnóstico y la prescripción del oftalmólogo. Si el niño aún no ha sido examinado, te orientamos para que disponga de esa valoración médica."
    },
    {
      "title": "Elección de la solución óptica",
      "text": "Estudiamos la graduación, las necesidades visuales, la edad y la rutina diaria del niño para valorar qué opción de control es más adecuada."
    },
    {
      "title": "Adaptación personalizada",
      "text": "Tomamos las medidas necesarias para adaptar correctamente las gafas o lentillas. En el caso de la Orto-K, realizamos las pruebas específicas de adaptación, incluida la topografía corneal."
    },
    {
      "title": "Seguimiento periódico",
      "text": "Programamos revisiones para comprobar la adaptación, valorar la evolución y realizar los ajustes necesarios, coordinando el seguimiento con el oftalmólogo."
    }
  ],
  "en": [
    {
      "title": "Initial assessment",
      "text": "We start with the ophthalmologist’s examination, diagnosis and prescription. If the child has not yet been examined, we guide you towards this medical assessment."
    },
    {
      "title": "Choosing the optical solution",
      "text": "We consider the prescription, visual needs, age and daily routine to assess the most suitable control option."
    },
    {
      "title": "Personalised fitting",
      "text": "We take the measurements needed to fit glasses or contact lenses correctly. For Ortho-K, we perform specialist fitting assessments, including corneal topography."
    },
    {
      "title": "Regular follow-up",
      "text": "We arrange check-ups to assess fitting and progression and make necessary adjustments, coordinating follow-up with the ophthalmologist."
    }
  ],
  "de": [
    {
      "title": "Erste Beurteilung",
      "text": "Ausgangspunkt sind Untersuchung, Diagnose und Verordnung des Augenarztes. Wurde Ihr Kind noch nicht untersucht, helfen wir Ihnen, diese ärztliche Beurteilung zu erhalten."
    },
    {
      "title": "Wahl der optischen Lösung",
      "text": "Wir berücksichtigen Sehstärke, Sehbedürfnisse, Alter und Alltag des Kindes, um die passende Möglichkeit zu beurteilen."
    },
    {
      "title": "Individuelle Anpassung",
      "text": "Wir nehmen die nötigen Messungen für die korrekte Anpassung von Brille oder Kontaktlinsen vor. Bei Ortho-K führen wir spezielle Anpassungsuntersuchungen einschließlich Hornhauttopographie durch."
    },
    {
      "title": "Regelmäßige Nachbetreuung",
      "text": "Wir planen Kontrollen, um die Anpassung und den Verlauf zu beurteilen und nötige Änderungen vorzunehmen, in Abstimmung mit dem Augenarzt."
    }
  ]
};


const faqTitle = {
  ca: "Preguntes freqüents",
  es: "Preguntas frecuentes",
  en: "Frequently asked questions",
  de: "Häufige Fragen",
};

const faqs = {
  "ca": [
    {
      "q": "Quina diferència hi ha entre Stellest, MyoCare i MiYOSMART?",
      "a": "Són lents d'ulleres d'Essilor, ZEISS i HOYA, respectivament, amb dissenys òptics diferents per ajudar a alentir la progressió de la miopia infantil. No hi ha una opció millor per a tots els nens: la tria es valora segons el diagnòstic, la prescripció i l'evolució de cada cas, amb seguiment coordinat amb l'oftalmòleg."
    },
    {
      "q": "Es pot curar la miopia infantil?",
      "a": "Actualment no disposem d’un tractament que curi la miopia. Les tècniques de control busquen alentir-ne la progressió durant els anys de creixement; els resultats varien segons cada nen."
    },
    {
      "q": "A quina edat es pot començar?",
      "a": "Depèn de la tècnica, de la indicació de cada lent i de les característiques del nen. Per a les lentilles, també cal tenir en compte la maduresa, la higiene i la capacitat d’adaptació."
    },
    {
      "q": "Les lentilles nocturnes Orto-K són segures?",
      "a": "L’Orto-K és una tècnica establerta, però, com qualsevol ús de lents de contacte, comporta riscos, inclòs el d’infecció ocular. Per això són imprescindibles una bona adaptació, la higiene i el seguiment professional."
    },
    {
      "q": "Cal continuar visitant l’oftalmòleg?",
      "a": "Sí. El seguiment oftalmològic és important per controlar la salut ocular i l’evolució de la miopia. A Looptica ens ocupem de l’adaptació i el seguiment òptic, en coordinació amb l’oftalmòleg."
    },
    {
      "q": "Feu servir atropina?",
      "a": "No. A Looptica treballem amb mètodes òptics. Si el cas requereix tractament farmacològic, el derivem a l'oftalmòleg."
    },
    {
      "q": "Feu teràpia visual?",
      "a": "A Looptica ens centrem en la part òptica: lents i lentilles de control de la miopia, ajust i seguiment, sempre a partir del diagnòstic i la prescripció de l'oftalmòleg."
    },
    {
      "q": "Quantes revisions calen?",
      "a": "Programem controls periòdics durant tot el procés per mesurar la progressió i ajustar el tractament. La freqüència exacta la definim en la primera visita segons el cas."
    }
  ],
  "es": [
    {
      "q": "¿Qué diferencia hay entre Stellest, MyoCare y MiYOSMART?",
      "a": "Son lentes de gafas de Essilor, ZEISS y HOYA, respectivamente, con diseños ópticos diferentes para ayudar a ralentizar la progresión de la miopía infantil. No hay una opción mejor para todos los niños: la elección se valora según el diagnóstico, la prescripción y la evolución de cada caso, con seguimiento coordinado con el oftalmólogo."
    },
    {
      "q": "¿Se puede curar la miopía infantil?",
      "a": "Actualmente no disponemos de un tratamiento que cure la miopía. Las técnicas de control buscan ralentizar su progresión durante los años de crecimiento; los resultados varían según cada niño."
    },
    {
      "q": "¿A qué edad se puede empezar?",
      "a": "Depende de la técnica, de la indicación de cada lente y de las características del niño. Para las lentillas, también hay que tener en cuenta la madurez, la higiene y la capacidad de adaptación."
    },
    {
      "q": "¿Las lentillas nocturnas Orto-K son seguras?",
      "a": "La Orto-K es una técnica establecida, pero, como cualquier uso de lentes de contacto, conlleva riesgos, incluido el de infección ocular. Por eso son imprescindibles una buena adaptación, la higiene y el seguimiento profesional."
    },
    {
      "q": "¿Hay que seguir visitando al oftalmólogo?",
      "a": "Sí. El seguimiento oftalmológico es importante para controlar la salud ocular y la evolución de la miopía. En Looptica nos ocupamos de la adaptación y el seguimiento óptico, en coordinación con el oftalmólogo."
    },
    {
      "q": "¿Usáis atropina?",
      "a": "No. En Looptica trabajamos con métodos ópticos. Si el caso requiere tratamiento farmacológico, lo derivamos al oftalmólogo."
    },
    {
      "q": "¿Hacéis terapia visual?",
      "a": "En Looptica nos centramos en la parte óptica: lentes y lentillas de control de la miopía, ajuste y seguimiento, siempre a partir del diagnóstico y la prescripción del oftalmólogo."
    },
    {
      "q": "¿Cuántas revisiones hacen falta?",
      "a": "Programamos controles periódicos durante todo el proceso para medir la progresión y ajustar el tratamiento. La frecuencia exacta la definimos en la primera visita según el caso."
    }
  ],
  "en": [
    {
      "q": "What is the difference between Stellest, MyoCare and MiYOSMART?",
      "a": "They are spectacle lenses from Essilor, ZEISS and HOYA respectively, using different optical designs to help slow childhood myopia progression. No single option is best for every child: selection considers the diagnosis, prescription and progression in each case, with follow-up coordinated with the ophthalmologist."
    },
    {
      "q": "Can childhood myopia be cured?",
      "a": "There is currently no treatment that cures myopia. Control techniques aim to slow its progression during the growing years; results vary with each child."
    },
    {
      "q": "At what age can we start?",
      "a": "It depends on the technique, the indications for each lens and the child’s circumstances. For contact lenses, maturity, hygiene and the ability to adapt must also be considered."
    },
    {
      "q": "Are Ortho-K overnight lenses safe?",
      "a": "Ortho-K is an established technique, but like all contact lens wear it involves risks, including eye infection. Proper fitting, hygiene and professional follow-up are therefore essential."
    },
    {
      "q": "Should my child keep seeing the ophthalmologist?",
      "a": "Yes. Ophthalmological follow-up is important to monitor eye health and myopia progression. At Looptica we handle optical fitting and follow-up in coordination with the ophthalmologist."
    },
    {
      "q": "Do you use atropine?",
      "a": "No. At Looptica we work with optical methods. If a case requires pharmacological treatment, we refer to an ophthalmologist."
    },
    {
      "q": "Do you offer vision therapy?",
      "a": "At Looptica we focus on the optical side: myopia control spectacle and contact lenses, fitting and follow-up, always based on the ophthalmologist's diagnosis and prescription."
    },
    {
      "q": "How many check-ups are needed?",
      "a": "We schedule regular reviews throughout the process to measure progression and adjust the treatment. The exact frequency is set at the first visit."
    }
  ],
  "de": [
    {
      "q": "Was unterscheidet Stellest, MyoCare und MiYOSMART?",
      "a": "Es handelt sich um Brillengläser von Essilor, ZEISS beziehungsweise HOYA mit unterschiedlichen optischen Designs, die das Fortschreiten der Myopie bei Kindern verlangsamen sollen. Es gibt keine für alle Kinder beste Option: Die Auswahl berücksichtigt Diagnose, Verordnung und Verlauf im Einzelfall, mit Nachsorge in Abstimmung mit dem Augenarzt."
    },
    {
      "q": "Kann Kurzsichtigkeit bei Kindern geheilt werden?",
      "a": "Derzeit gibt es keine Behandlung, die Myopie heilt. Kontrollverfahren sollen ihr Fortschreiten während der Wachstumsjahre verlangsamen; die Ergebnisse variieren je nach Kind."
    },
    {
      "q": "Ab welchem Alter kann man beginnen?",
      "a": "Das hängt vom Verfahren, der Indikation der jeweiligen Linse und den Eigenschaften des Kindes ab. Bei Kontaktlinsen müssen auch Reife, Hygiene und Anpassungsfähigkeit berücksichtigt werden."
    },
    {
      "q": "Sind Ortho-K-Nachtlinsen sicher?",
      "a": "Ortho-K ist ein etabliertes Verfahren, birgt aber wie jede Kontaktlinsennutzung Risiken, einschließlich einer Augeninfektion. Eine gute Anpassung, Hygiene und professionelle Nachbetreuung sind deshalb unverzichtbar."
    },
    {
      "q": "Sollte mein Kind weiterhin zum Augenarzt gehen?",
      "a": "Ja. Augenärztliche Kontrollen sind wichtig, um Augengesundheit und Verlauf der Myopie zu überwachen. Bei Looptica übernehmen wir die optische Anpassung und Nachbetreuung in Abstimmung mit dem Augenarzt."
    },
    {
      "q": "Verwenden Sie Atropin?",
      "a": "Nein. Wir arbeiten mit optischen Methoden. Ist eine medikamentöse Behandlung nötig, überweisen wir an den Augenarzt."
    },
    {
      "q": "Bieten Sie Sehtherapie an?",
      "a": "Bei Looptica konzentrieren wir uns auf die optische Seite: Brillengläser und Kontaktlinsen zur Myopiekontrolle, Anpassung und Nachsorge — stets auf Basis von Diagnose und Verordnung des Augenarztes."
    },
    {
      "q": "Wie viele Kontrollen sind nötig?",
      "a": "Wir planen regelmäßige Kontrollen, um die Progression zu messen und die Versorgung anzupassen. Die genaue Frequenz legen wir beim Ersttermin fest."
    }
  ]
};

const cta = {
  "ca": {
    "button": "Demana una visita de control de miopia",
    "title": "Ajuda el teu fill a cuidar la seva visió de futur",
    "text": "Si el teu fill té miopia, o has observat que la graduació augmenta, podem ajudar-te a entendre quines opcions òptiques existeixen i quina pot adaptar-se millor a les seves necessitats."
  },
  "es": {
    "button": "Pide una visita de control de miopía",
    "title": "Ayuda a tu hijo a cuidar su visión de futuro",
    "text": "Si tu hijo tiene miopía, o has observado que la graduación aumenta, podemos ayudarte a entender qué opciones ópticas existen y cuál puede adaptarse mejor a sus necesidades."
  },
  "en": {
    "button": "Book a myopia control appointment",
    "title": "Help your child care for their future vision",
    "text": "If your child has myopia, or you have noticed their prescription increasing, we can help you understand the optical options and which may best suit their needs."
  },
  "de": {
    "button": "Termin zur Myopiekontrolle vereinbaren",
    "title": "Helfen Sie Ihrem Kind, sein zukünftiges Sehen zu schützen",
    "text": "Wenn Ihr Kind kurzsichtig ist oder seine Werte zunehmen, helfen wir Ihnen, die optischen Möglichkeiten zu verstehen und eine passende Lösung zu finden."
  }
};

const ortoKLink = {
  ca: <>Vols saber com funcionen les lents nocturnes? Consulta la nostra pàgina d'<Link to="/ca/services/orto-k" className="text-primary underline font-medium">Orto-K a Barcelona</Link>.</>,
  es: <>¿Quieres saber cómo funcionan las lentes nocturnas? Consulta nuestra página de <Link to="/es/services/orto-k" className="text-primary underline font-medium">Orto-K en Barcelona</Link>.</>,
  en: <>Want to know how overnight lenses work? See our page on <Link to="/en/services/orto-k" className="text-primary underline font-medium">Ortho-K in Barcelona</Link>.</>,
  de: <>Wie funktionieren Nachtlinsen? Siehe unsere Seite zu <Link to="/de/services/orto-k" className="text-primary underline font-medium">Ortho-K in Barcelona</Link>.</>,
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
        image="/__l5e/assets-v1/c0456b82-6ddb-4984-82e9-4121642db3ae/control-miopia-hero.jpg"
        hideCTA
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
            <GoogleCalendarButton subject="Control de la miopia infantil a Looptica">
              {cta[lang].button}
            </GoogleCalendarButton>
          </div>
        </ScrollReveal>

        {explanations[lang].map((section) => (
          <ScrollReveal key={section.title}>
            <section className="prose prose-lg max-w-none mb-12">
              <h2>{section.title}</h2>
              <p>{section.paragraphs[0]}</p>
              {'items' in section && (
                <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>
              )}
              {section.paragraphs.slice(1).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          </ScrollReveal>
        ))}

        <ScrollReveal>
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">{optionsTitle[lang]}</h2>
            <p className="text-lg mb-6">{optionsIntro[lang]}</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm md:text-base">
                <thead>
                  <tr className="bg-muted">
                    {tableHeads[lang].map((h) => (
                      <th key={h} className="py-3 px-4 font-medium text-foreground">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {options[lang].map((opt) => (
                    <tr key={opt.name} className="border-b border-border last:border-0">
                      <th scope="row" className="py-3 px-4 align-top font-medium text-primary">{opt.name}</th>
                      <td className="py-3 px-4 align-top text-muted-foreground">{opt.when}</td>
                      <td className="py-3 px-4 align-top text-muted-foreground">{opt.use}</td>
                      <td className="py-3 px-4 align-top text-muted-foreground">{opt.care}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-muted p-6 rounded-lg mb-12">
            <p className="text-muted-foreground">{atropineNote[lang]}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <section className="prose prose-lg max-w-none mb-12" aria-labelledby="myopia-spectacle-lenses">
            <h2 id="myopia-spectacle-lenses">{spectacleLenses[lang].title}</h2>
            <p>{spectacleLenses[lang].intro}</p>
            <p>{spectacleLenses[lang].selection}</p>
          </section>
        </ScrollReveal>


        {contactExplanations[lang].map((section) => (
          <ScrollReveal key={section.title}>
            <section className="prose prose-lg max-w-none mb-12">
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          </ScrollReveal>
        ))}

        <ScrollReveal>
          <section className="prose prose-lg max-w-none mb-12">
            <h2>{followTitle[lang]}</h2>
            <ol>
              {follow[lang].map((step) => (
                <li key={step.title}>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <div className="prose prose-lg max-w-none mb-12">
            <h2>{habitsTitle[lang]}</h2>
            <ul>
              {habits[lang].map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            <p>{habitsNote[lang]}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-primary/10 p-6 rounded-lg mb-12">
            <p className="text-lg">{ortoKLink[lang]}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">{faqTitle[lang]}</h2>
            <div className="space-y-4">
              {faqs[lang].map((faq, index) => (
                <details key={index} className="bg-card p-5 rounded-lg shadow-sm group">
                  <summary className="font-medium text-lg cursor-pointer list-none flex justify-between items-center">
                    <span>{faq.q}</span>
                    <span className="ml-4 text-primary group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-muted-foreground">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <section className="text-center mt-16 mb-8">
            <h2 className="text-2xl font-semibold mb-4">{cta[lang].title}</h2>
            <p className="text-lg mb-6">{cta[lang].text}</p>
            <GoogleCalendarButton subject="Control de la miopia infantil a Looptica">
              {cta[lang].button}
            </GoogleCalendarButton>
          </section>
        </ScrollReveal>
      </ServiceLayout>
    </>
  );
};

export default ControlMiopia;
