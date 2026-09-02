import { Baby, Eye, Glasses } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import controlMiopiaImage from '@/assets/control-miopia-card.jpg';
import ulleresNensImage from '@/assets/ulleres-nens-hero.jpg';

const content = {
  ca: {
    tag: 'Visió infantil',
    heading: 'Cuidem la visió dels més petits',
    description:
      'Control de la miopia, correcció òptica de l\'ull gandul i ulleres i lentilles adaptades a nens, sempre en coordinació amb l\'oftalmòleg.',
    cards: [
      { title: 'Control de la miopia', text: 'Orto-K, lents de desenfocament perifèric i lentilles de control.', to: '/visio-infantil/control-miopia' },
      { title: 'Ull gandul (ambliopia)', text: 'La correcció òptica que aportem un cop hi ha diagnòstic mèdic.', to: '/visio-infantil/ull-gandul' },
      { title: 'Ulleres i lentilles per a nens', text: 'Muntures Nano, Polaroid i Centrostyle, i lentilles per prescripció.', to: '/visio-infantil/ulleres-nens' },
    ],
    cta: 'Veure tot el que fem en visió infantil',
    details: 'Veure detalls',
  },
  es: {
    tag: 'Visión infantil',
    heading: 'Cuidamos la visión de los más pequeños',
    description:
      'Control de la miopía, corrección óptica del ojo vago y gafas y lentillas adaptadas a niños, siempre en coordinación con el oftalmólogo.',
    cards: [
      { title: 'Control de la miopía', text: 'Orto-K, lentes de desenfoque periférico y lentillas de control.', to: '/visio-infantil/control-miopia' },
      { title: 'Ojo vago (ambliopía)', text: 'La corrección óptica que aportamos una vez hay diagnóstico médico.', to: '/visio-infantil/ull-gandul' },
      { title: 'Gafas y lentillas para niños', text: 'Monturas Nano, Polaroid y Centrostyle, y lentillas por prescripción.', to: '/visio-infantil/ulleres-nens' },
    ],
    cta: 'Ver todo lo que hacemos en visión infantil',
    details: 'Ver detalles',
  },
  en: {
    tag: "Children's vision",
    heading: 'Caring for children\u2019s eyesight',
    description:
      'Myopia control, optical correction for lazy eye, and glasses and contact lenses fitted for children, always alongside the ophthalmologist.',
    cards: [
      { title: 'Myopia control', text: 'Ortho-K, peripheral defocus lenses and control contact lenses.', to: '/visio-infantil/control-miopia' },
      { title: 'Lazy eye (amblyopia)', text: 'The optical correction we provide once there is a medical diagnosis.', to: '/visio-infantil/ull-gandul' },
      { title: "Children's glasses and contact lenses", text: 'Nano, Polaroid and Centrostyle frames, and lenses by prescription.', to: '/visio-infantil/ulleres-nens' },
    ],
    cta: "See everything we do in children's vision",
    details: 'View details',
  },
  de: {
    tag: 'Kindersehen',
    heading: 'Wir kümmern uns um das Sehen der Kleinsten',
    description:
      'Myopiekontrolle, optische Korrektion bei Amblyopie sowie Brillen und Kontaktlinsen für Kinder \u2013 immer in Abstimmung mit dem Augenarzt.',
    cards: [
      { title: 'Myopiekontrolle', text: 'Ortho-K, Linsen mit peripherem Defokus und Kontrolllinsen.', to: '/visio-infantil/control-miopia' },
      { title: 'Schwachsichtigkeit (Amblyopie)', text: 'Die optische Korrektion nach der medizinischen Diagnose.', to: '/visio-infantil/ull-gandul' },
      { title: 'Brillen und Kontaktlinsen für Kinder', text: 'Nano-, Polaroid- und Centrostyle-Fassungen sowie Linsen auf Rezept.', to: '/visio-infantil/ulleres-nens' },
    ],
    cta: 'Alles zum Kindersehen ansehen',
    details: 'Details ansehen',
  },
};

const icons = [
  <Eye key="eye" className="w-10 h-10 text-[#55afa9]" />,
  <Baby key="baby" className="w-10 h-10 text-[#55afa9]" />,
  <Glasses key="glasses" className="w-10 h-10 text-[#55afa9]" />,
];

const images = [controlMiopiaImage, '/images/_DSC4696.jpg', ulleresNensImage];

const ChildrenVision = () => {
  const { language } = useLanguage();
  const c = content[language as keyof typeof content] ?? content.ca;

  return (
    <section className="py-16 bg-gray-50" id="children-vision">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#55afa9]/10 text-[#55afa9] mb-4">
              {c.tag}
            </span>
            <h2 className="text-3xl font-bold mb-3 text-gray-900">{c.heading}</h2>
            <div className="w-16 h-1 bg-[#55afa9] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600">{c.description}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {c.cards.map((card, index) => (
              <Link
                key={card.to}
                to={`/${language}${card.to}`}
                className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden"
              >
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={images[index]}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col items-center text-center flex-grow">
                  <div className="mb-4">{icons[index]}</div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{card.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{card.text}</p>
                  <span className="mt-auto inline-flex items-center justify-center h-9 px-3 rounded-md border border-[#55afa9] text-[#55afa9] text-sm font-medium group-hover:bg-[#55afa9]/10 transition-colors">
                    {c.details}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="text-center">
            <Link to={`/${language}/visio-infantil`} className="text-[#55afa9] font-medium hover:underline">
              {c.cta}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ChildrenVision;
