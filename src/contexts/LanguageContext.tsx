
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Language, SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from '@/config/languages';

type Translations = {
  [key: string]: {
    [key in Language]: string;
  };
};

// Common translations used across components
export const translations: Translations = {
  // Navbar
  home: {
    en: 'Home',
    es: 'Inicio',
    ca: 'Inici',
    de: 'Startseite',
  },
  products: {
    en: 'Products',
    es: 'Productos',
    ca: 'Productes',
    de: 'Produkte',
  },
  about: {
    en: 'About',
    es: 'Sobre',
    ca: 'Qui som',
    de: 'Über uns',
  },
  contact: {
    en: 'Contact',
    es: 'Contacto',
    ca: 'Contacte',
    de: 'Kontakt',
  },
  shopNow: {
    en: 'Book Appointment',
    es: 'Pedir Cita',
    ca: 'Demana Cita',
    de: 'Termin buchen',
  },
  demanaCita: {
    en: 'Book Appointment',
    es: 'Pedir Cita',
    ca: 'Demana Cita',
    de: 'Termin buchen',
  },
  // Hero
  premiumEyewear: {
    en: 'Looptica',
    es: 'Looptica',
    ca: 'Looptica',
    de: 'Looptica',
  },
  heroTitle: {
    en: 'Your visual and auditory solution',
    es: 'Tu solución auditiva y visual',
    ca: 'La teva solució auditiva i visual',
    de: 'Ihre Seh- und Hörlösung',
  },
  heroDescription: {
    en: 'Comprehensive advice for your visual and auditory needs. Discover our optical and audiology services.',
    es: 'Asesoramiento integral para tus necesidades visuales y auditivas. Descubre nuestros servicios de óptica y audiología.',
    ca: 'Assessorament integral per a les teves necessitats visuals i auditives. Descobreix els nostres serveis d\'òptica i audiologia.',
    de: 'Umfassende Beratung für Ihre Seh- und Hörbedürfnisse. Entdecken Sie unsere Optik- und Audiologie-Dienstleistungen.',
  },
  viewCollection: {
    en: 'Our Services',
    es: 'Nuestros Servicios',
    ca: 'Els nostres serveis',
    de: 'Unsere Dienstleistungen',
  },
  // Products
  ourCollection: {
    en: 'Our Products',
    es: 'Nuestros Productos',
    ca: 'Els Nostres Productes',
    de: 'Unsere Produkte',
  },
  curatedDesigns: {
    en: 'Solutions for your visual and auditory health',
    es: 'Soluciones para tu salud visual y auditiva',
    ca: 'Solucions per a la teva salut visual i auditiva',
    de: 'Lösungen für Ihre Seh- und Hörgesundheit',
  },
  productsDescription: {
    en: 'At Looptica you will find everything you need to take care of your vision and hearing with high quality products and advice from our optical and audiology specialists.',
    es: 'En Looptica encontrarás todo lo que necesitas para cuidar tu visión y audición con productos y asesoramiento de alta calidad de nuestros especialistas en óptica y audiología.',
    ca: 'A Looptica trobaràs tot el que necessites per cuidar la teva visió i audició amb productes i assessorament d\'alta qualitat dels nostres especialistes en òptica i audiologia.',
    de: 'Bei Looptica finden Sie alles, was Sie für die Pflege Ihres Sehens und Hörens benötigen, mit hochwertigen Produkten und Beratung unserer Optik- und Audiologie-Spezialisten.',
  },
  addToCart: {
    en: 'More Information',
    es: 'Más Información',
    ca: 'Més informació',
    de: 'Mehr Informationen',
  },
  viewDetails: {
    en: 'View Details',
    es: 'Ver Detalles',
    ca: 'Veure Detalls',
    de: 'Details anzeigen',
  },
  // Optical Services Section
  opticalServices: {
    en: 'Optical Services',
    es: 'Servicios Ópticos',
    ca: 'Serveis Òptics',
    de: 'Optische Dienstleistungen',
  },
  visualCare: {
    en: 'Visual Health Care',
    es: 'Cuidamos tu salud visual',
    ca: 'Cuidem la teva salut visual',
    de: 'Wir kümmern uns um Ihre Sehgesundheit',
  },
  opticalDescription: {
    en: 'Our certified opticians provide comprehensive visual assessments and personalized solutions to improve your visual health.',
    es: 'Nuestros ópticos optometristas graduados ofrecen servicios completos y soluciones personalizadas para mejorar tu salud visual.',
    ca: 'Els nostres òptics optometristes graduats ofereixen serveis complets i solucions personalitzades per millorar la teva salut visual.',
    de: 'Unsere zertifizierten Optiker bieten umfassende Sehbewertungen und personalisierte Lösungen zur Verbesserung Ihrer Sehgesundheit.',
  },
  visualHealth: {
    en: 'Visual Health',
    es: 'Salud Visual',
    ca: 'Salut Visual',
    de: 'Sehgesundheit',
  },
  visualHealthDesc: {
    en: 'Optometric visual examination, retinoscopy, tired eyesight, cornea topography, dry eye, etc.',
    es: 'Exámen visual optométrico, retinoscopia, vista cansada, topografia corneal, ojo seco, etc.',
    ca: 'Examen visual optomètric, retinoscòpia, topografia corneal, vista cansada, ull sec, etc.',
    de: 'Optometrische Sehuntersuchung, Retinoskopie, müde Augen, Hornhauttopographie, trockene Augen, etc.',
  },
  contactLenses: {
    en: 'Contact Lenses',
    es: 'Lentes de Contacto',
    ca: 'Lents de Contacte',
    de: 'Kontaktlinsen',
  },
  contactLensesDesc: {
    en: 'Adaptation of contact lenses for myopia, hyperopia, astigmatism, progressive, customized, myopia control, congenital cataracts, queratoconus and ortho-k.',
    es: 'Adaptación de lentes de contacto para miopia, hipermetropia, astigmatismo, progresivas, individualizadas, de catarata congénita, control de miopía, queratocono y orto-k.',
    ca: 'Adaptació de lents de contacte per miopia, hipermetropia, astigmatisme, progressives, individualitzades, per cataracta congènita, control de miopia, queratocono i orto-k.',
    de: 'Anpassung von Kontaktlinsen für Kurzsichtigkeit, Weitsichtigkeit, Astigmatismus, progressive, individualisierte, Katarakt-Kontrolle, Myopie-Kontrolle, Keratokonus und Ortho-K.',
  },
  orthoK: {
    en: 'Ortho-K',
    es: 'Orto-K',
    ca: 'Orto-K',
    de: 'Ortho-K',
  },
  orthoKDesc: {
    en: 'Correct your vision with overnight contact lenses and forget about glasses during the day.',
    es: 'Corrige tu vision con lentes de contacto nocturnas y olvidate de las gafas durante el día.',
    ca: 'Corregeix la teva visió amb lents de contacte nocturnes i oblida\'t de les ulleres durant el dia.',
    de: 'Korrigieren Sie Ihr Sehvermögen mit Nacht-Kontaktlinsen und vergessen Sie tagsüber die Brille.',
  },
  imageConsulting: {
    en: 'Image Consulting',
    es: 'Asesoramiento de Imagen',
    ca: 'Assessorament d\'Imatge',
    de: 'Imageberatung',
  },
  imageConsultingDesc: {
    en: 'We offer a selection of stylish frames designed in Barcelona.',
    es: 'Te ofrecemos una selección de monturas con estilo diseñadas en Barcelona.',
    ca: 'T\'oferim una selecció de muntures amb estil dissenyades a Barcelona.',
    de: 'Wir bieten eine Auswahl stilvoller, in Barcelona entworfener Brillenfassungen.',
  },
  lensConsulting: {
    en: 'Lens Consulting',
    es: 'Asesoramiento de Lentes',
    ca: 'Assessorament de Lents',
    de: 'Linsenberatung',
  },
  lensConsultingDesc: {
    en: 'We find the best option for your vision problem with the latest generation lenses from the best brands.',
    es: 'Buscamos la mejor opción para tu problema visual con lentes de última generación de las mejores marcas.',
    ca: 'Busquem la millor opció pel teu problema visual amb lents d\'última generació de les millors marques.',
    de: 'Wir finden die beste Option für Ihr Sehproblem mit modernsten Linsen der besten Marken.',
  },
  sunglassesService: {
    en: 'Sunglasses',
    es: 'Gafas de Sol',
    ca: 'Ulleres de Sol',
    de: 'Sonnenbrillen',
  },
  sunglassesServiceDesc: {
    en: 'Exclusive sunglasses that convey personality from local designers.',
    es: 'Gafas de sol exclusivas que transmiten personalidad de diseñadores locales.',
    ca: 'Ulleres de sol exclusives que transmeten personalitat de dissenyadors locals.',
    de: 'Exklusive Sonnenbrillen mit Persönlichkeit von lokalen Designern.',
  },
  scheduleConsult: {
    en: 'Schedule a Consultation',
    es: 'Solicita una consulta',
    ca: 'Sol·licita una consulta',
    de: 'Beratungstermin vereinbaren',
  },
  // Audiology Section
  audiologyServices: {
    en: 'Audiology Services',
    es: 'Servicios de Audiología',
    ca: 'Serveis d\'Audiologia',
    de: 'Audiologie-Dienstleistungen',
  },
  hearingCare: {
    en: 'Expert Hearing Care',
    es: 'Cuidado Auditivo Experto',
    ca: 'Cura Auditiva Experta',
    de: 'Experte Hörbetreuung',
  },
  audiologyDescription: {
    en: 'Our certified audiologists in Barcelona Poblenou provide comprehensive hearing assessments and personalized solutions to improve your hearing health and treat hearing loss.',
    es: 'Nuestros audiólogos certificados en Barcelona Poblenou ofrecen evaluaciones auditivas completas y soluciones personalizadas para mejorar su salud auditiva y tratar la pérdida auditiva.',
    ca: 'Els nostres audioprotessistes titulats ofereixen avaluacions auditives completes i solucions personalitzades per millorar la teva salut auditiva i tractar la pèrdua auditiva.',
    de: 'Unsere zertifizierten Audiologen in Barcelona Poblenou bieten umfassende Hörbewertungen und personalisierte Lösungen zur Verbesserung Ihrer Hörgesundheit und Behandlung von Hörverlust.',
  },
  hearingTest: {
    en: 'Professional Hearing Tests',
    es: 'Pruebas Auditivas Profesionales',
    ca: 'Proves Auditives Professionals',
    de: 'Professionelle Hörtests',
  },
  hearingTestDesc: {
    en: 'Comprehensive audiometric assessment of your hearing ability using state-of-the-art equipment at our Barcelona Poblenou audiology center.',
    es: 'Evaluación audiométrica completa de su capacidad auditiva utilizando equipos de última generación en nuestro centro de audiología en Barcelona Poblenou.',
    ca: 'Avaluació audiomètrica completa de la seva capacitat auditiva utilitzant equips d\'última generació al nostre centre d\'audiologia a Barcelona Poblenou.',
    de: 'Umfassende audiometrische Bewertung Ihrer Hörfähigkeit mit modernster Ausrüstung in unserem Audiologie-Zentrum in Barcelona Poblenou.',
  },
  hearingAids: {
    en: 'Digital Hearing Aids',
    es: 'Audífonos Digitales',
    ca: 'Audiòfons Digitals',
    de: 'Digitale Hörgeräte',
  },
  hearingAidsDesc: {
    en: 'High-quality digital hearing aids tailored to your specific hearing loss profile and lifestyle at our hearing center in Barcelona Poblenou.',
    es: 'Audífonos digitales de alta calidad adaptados a su perfil específico de pérdida auditiva y estilo de vida en nuestro centro auditivo en Barcelona Poblenou.',
    ca: 'Audiòfons digitals d\'alta qualitat adaptats a les seves necessitats específiques de pèrdua auditiva i estil de vida al nostre centre auditiu a Barcelona Poblenou.',
    de: 'Hochwertige digitale Hörgeräte, die auf Ihr spezifisches Hörverlustprofil und Ihren Lebensstil in unserem Hörzentrum in Barcelona Poblenou zugeschnitten sind.',
  },
  tinnitusTreatment: {
    en: 'Tinnitus Treatment',
    es: 'Tratamiento de Acúfenos',
    ca: 'Tractament d\'Acúfens',
    de: 'Tinnitus-Behandlung',
  },
  tinnitusDesc: {
    en: 'Specialized solutions at our Barcelona Poblenou audiology clinic to help manage and reduce tinnitus symptoms associated with hearing loss.',
    es: 'Soluciones especializadas en nuestro centro auditivo en Barcelona Poblenou para ayudar a controlar y reducir los síntomas de acúfenos asociados con la pérdida auditiva.',
    ca: 'Solucions especialitzades al nostre centre auditiu a Barcelona Poblenou per ajudar a controlar i reduir els símptomes d\'acúfens associats amb la pèrdua auditiva.',
    de: 'Spezialisierte Lösungen in unserer Audiologie-Klinik in Barcelona Poblenou zur Behandlung und Reduzierung von Tinnitus-Symptomen im Zusammenhang mit Hörverlust.',
  },
  customEarProtection: {
    en: 'Custom Ear Protection',
    es: 'Protección Auditiva Personalizada',
    ca: 'Protecció Auditiva Personalitzada',
    de: 'Individueller Gehörschutz',
  },
  earProtectionDesc: {
    en: 'Custom-made ear plugs at our Barcelona Poblenou audiology center designed for comfort and optimal noise protection to prevent hearing loss.',
    es: 'Tapones para los oídos hechos a medida en nuestro centro de audiología en Barcelona Poblenou diseñados para comodidad y protección óptima contra el ruido para prevenir la pérdida auditiva.',
    ca: 'Taps per a les orelles fets a mida al nostre centre d\'audiologia a Barcelona Poblenou dissenyats per a comoditat i protecció òptima contra el soroll per prevenir la pèrdua auditiva.',
    de: 'Maßgefertigte Ohrstöpsel in unserem Audiologie-Zentrum in Barcelona Poblenou, entwickelt für Komfort und optimalen Lärmschutz zur Vorbeugung von Hörverlust.',
  },
  subvenciones: {
    en: 'Hearing Aid Subsidies',
    es: 'Subvenciones para Audífonos',
    ca: 'Subvencions per a Audiòfons',
    de: 'Hörgeräte-Zuschüsse',
  },
  subvencionesDesc: {
    en: 'Information about available subsidies and financial aid for hearing aids and hearing assistance devices in Barcelona.',
    es: 'Información sobre ayudas y subvenciones disponibles para audífonos y dispositivos de ayuda auditiva en Barcelona.',
    ca: 'Informació sobre ajudes i subvencions disponibles per a audiòfons i dispositius d\'ajuda auditiva a Barcelona.',
    de: 'Informationen über verfügbare Zuschüsse und finanzielle Unterstützung für Hörgeräte und Hörhilfen in Barcelona.',
  },
  scheduleConsultation: {
    en: 'Schedule a Hearing Consultation',
    es: 'Programar una Consulta Auditiva',
    ca: 'Programar una Consulta Auditiva',
    de: 'Hörberatung vereinbaren',
  },
  // Testimonials Section
  customerReviews: {
    en: 'Customer Reviews',
    es: 'Opiniones de Clientes',
    ca: 'Opinions de Clients',
    de: 'Kundenbewertungen',
  },
  whatCustomersSay: {
    en: 'What Our Customers Say',
    es: 'Lo Que Dicen Nuestros Clientes',
    ca: 'El Que Diuen Els Nostres Clients',
    de: 'Was Unsere Kunden Sagen',
  },
  reviewsDescription: {
    en: 'Read what our customers have to say about their experiences with our eyewear, hearing aids, and audiology services.',
    es: 'Lea lo que nuestros clientes tienen que decir sobre sus experiencias con nuestras gafas, audífonos y servicios de audiología.',
    ca: 'Llegiu el que els nostres clients diuen sobre les seves experiències amb les nostres ulleres, audiòfons i serveis d\'audiologia.',
    de: 'Lesen Sie, was unsere Kunden über ihre Erfahrungen mit unseren Brillen, Hörgeräten und Audiologie-Dienstleistungen sagen.',
  },
  viewAllReviews: {
    en: 'View All Reviews on Google',
    es: 'Ver Todas las Opiniones en Google',
    ca: 'Veure Totes les Opinions a Google',
    de: 'Alle Bewertungen auf Google anzeigen',
  },
  // Brands Section
  topBrands: {
    en: 'Top Brands',
    es: 'Mejores Marcas',
    ca: 'Millors Marques',
    de: 'Top-Marken',
  },
  ourBrands: {
    en: 'Our Featured Brands',
    es: 'Nuestras Marcas Destacadas',
    ca: 'Les Nostres Marques Destacades',
    de: 'Unsere Ausgewählten Marken',
  },
  brandsDescription: {
    en: 'We partner with the world\'s leading eyewear and hearing aid brands to provide you with the best quality products for vision and hearing health.',
    es: 'Nos asociamos con las principales marcas de gafas y audífonos del mundo para ofrecerle productos de la mejor calidad para la salud visual y auditiva.',
    ca: 'Ens associem amb les principals marques d\'ulleres i audiòfons del món per oferir-vos productes de la millor qualitat per a la salut visual i auditiva.',
    de: 'Wir arbeiten mit den weltweit führenden Brillen- und Hörgerätemarken zusammen, um Ihnen die besten Qualitätsprodukte für Seh- und Hörgesundheit zu bieten.',
  },
  // Store Location Section
  findUs: {
    en: 'Find Our Barcelona Center',
    es: 'Encuentra Nuestro Centro en Barcelona',
    ca: 'Troba El Nostre Centre a Barcelona',
    de: 'Finden Sie Unser Barcelona-Zentrum',
  },
  visitOurStore: {
    en: 'Visit Our Barcelona Store',
    es: 'Visita Nuestra Tienda en Barcelona',
    ca: 'Visita La Nostra Botiga a Barcelona',
    de: 'Besuchen Sie Unser Barcelona-Geschäft',
  },
  storeLocationDesc: {
    en: 'Come visit our optical and audiology center in Barcelona for a personalized consultation with our vision and hearing experts.',
    es: 'Venga a visitar nuestro centro de óptica y audiología en Barcelona para una consulta personalizada con nuestros expertos en visión y audición.',
    ca: 'Vine a visitar el nostre centre d\'òptica i audiologia a Barcelona per a una consulta personalitzada amb els nostres experts en visió i audició.',
    de: 'Besuchen Sie unser Optik- und Audiologie-Zentrum in Barcelona für eine persönliche Beratung mit unseren Seh- und Hörexperten.',
  },
  address: {
    en: 'Address',
    es: 'Dirección',
    ca: 'Adreça',
    de: 'Adresse',
  },
  openingHours: {
    en: 'Opening Hours',
    es: 'Horario de Apertura',
    ca: 'Horari d\'Obertura',
    de: 'Öffnungszeiten',
  },
  mondayThursday: {
    en: 'Monday-Thursday',
    es: 'Lunes-Jueves',
    ca: 'Dilluns-Dijous',
    de: 'Montag-Donnerstag',
  },
  friday: {
    en: 'Friday',
    es: 'Viernes',
    ca: 'Divendres',
    de: 'Freitag',
  },
  mondayFriday: {
    en: 'Monday-Friday',
    es: 'Lunes-Viernes',
    ca: 'Dilluns-Divendres',
    de: 'Montag-Freitag',
  },
  saturday: {
    en: 'Saturday',
    es: 'Sábado',
    ca: 'Dissabte',
    de: 'Samstag',
  },
  sunday: {
    en: 'Sunday',
    es: 'Domingo',
    ca: 'Diumenge',
    de: 'Sonntag',
  },
  closed: {
    en: 'Closed',
    es: 'Cerrado',
    ca: 'Tancat',
    de: 'Geschlossen',
  },
  getDirections: {
    en: 'Get Directions',
    es: 'Obtener Indicaciones',
    ca: 'Obtenir Indicacions',
    de: 'Wegbeschreibung',
  },
  // Newsletter
  stayUpdated: {
    en: 'Stay Updated',
    es: 'Mantente Informado',
    ca: 'Mantén-te Informat',
    de: 'Bleiben Sie Informiert',
  },
  newsletter: {
    en: 'Subscribe to our newsletter',
    es: 'Suscríbete a nuestro boletín',
    ca: 'Subscriu-te al nostre butlletí',
    de: 'Abonnieren Sie unseren Newsletter',
  },
  newsletterDesc: {
    en: 'Join our community and be the first to know about new collections, hearing health tips, exclusive offers, and eyewear trends.',
    es: 'Únete a nuestra comunidad y sé el primero en conocer las nuevas colecciones, consejos sobre salud auditiva, ofertas exclusivas y tendencias en gafas.',
    ca: 'Uneix-te a la nostra comunitat i sigues el primer en conèixer les noves col·leccions, consells sobre salut auditiva, ofertes exclusives i tendències en ulleres.',
    de: 'Treten Sie unserer Community bei und erfahren Sie als Erste von neuen Kollektionen, Hörgesundheitstipps, exklusiven Angeboten und Brillentrends.',
  },
  emailAddress: {
    en: 'Email Address',
    es: 'Correo Electrónico',
    ca: 'Adreça de Correu',
    de: 'E-Mail-Adresse',
  },
  subscribe: {
    en: 'Subscribe',
    es: 'Suscribirse',
    ca: 'Subscriu-te',
    de: 'Abonnieren',
  },
  subscribing: {
    en: 'Subscribing...',
    es: 'Suscribiendo...',
    ca: 'Subscrivint...',
    de: 'Abonniere...',
  },
  privacyConsent: {
    en: 'By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.',
    es: 'Al suscribirte, aceptas nuestra Política de Privacidad y consientes recibir actualizaciones de nuestra empresa.',
    ca: 'En subscriure\'t, acceptes la nostra Política de Privacitat i consents rebre actualitzacions de la nostra empresa.',
    de: 'Durch das Abonnieren stimmen Sie unserer Datenschutzrichtlinie zu und willigen ein, Updates von unserem Unternehmen zu erhalten.',
  },
  // Categories
  eyeglasses: {
    en: 'Eyeglasses',
    es: 'Gafas',
    ca: 'Ulleres',
    de: 'Brillen',
  },
  eyeglassesSubtitle: {
    en: 'Find your perfect frames with our premium collection',
    es: 'Encuentra tu montura perfecta con nuestra colección premium',
    ca: 'Troba la teva muntura perfecta amb la nostra col·lecció premium',
    de: 'Finden Sie Ihre perfekte Fassung mit unserer Premium-Kollektion',
  },
  sunglasses: {
    en: 'Sunglasses',
    es: 'Gafas de Sol',
    ca: 'Ulleres de Sol',
    de: 'Sonnenbrillen',
  },
  // Service Pages
  readyToSchedule: {
    en: 'Ready to Schedule Your Appointment in Barcelona?',
    es: '¿Listo para programar tu cita en Barcelona?',
    ca: 'Preparat per programar la teva cita a Barcelona?',
    de: 'Bereit, Ihren Termin in Barcelona zu vereinbaren?',
  },
  scheduleDescription: {
    en: 'Contact us today to schedule your consultation with our expert team at our Barcelona center.',
    es: 'Contáctenos hoy para programar su consulta con nuestro equipo de expertos en nuestro centro de Barcelona.',
    ca: 'Contacta\'ns avui per programar la teva consulta amb el nostre equip d\'experts al nostre centre de Barcelona.',
    de: 'Kontaktieren Sie uns heute, um Ihre Beratung mit unserem Expertenteam in unserem Barcelona-Zentrum zu vereinbaren.',
  },
  // Add the missing translation key
  contactViaWhatsApp: {
    en: 'Contact via WhatsApp',
    es: 'Contactar por WhatsApp',
    ca: 'Contactar per WhatsApp',
    de: 'Kontakt über WhatsApp',
  },
  // Additional Audiology Terms
  audiologyCenter: {
    en: 'Audiology Center',
    es: 'Centro Auditivo',
    ca: 'Centre Auditiu',
    de: 'Audiologie-Zentrum',
  },
  hearingLoss: {
    en: 'Hearing Loss Treatment',
    es: 'Tratamiento de Pérdida Auditiva',
    ca: 'Tractament de la Pèrdua Auditiva',
    de: 'Hörverlust-Behandlung',
  },
  audiometry: {
    en: 'Audiometry in Barcelona Poblenou',
    es: 'Audiometría en Barcelona Poblenou',
    ca: 'Audiometria a Barcelona Poblenou',
    de: 'Audiometrie in Barcelona Poblenou',
  },
  pediatricAudiology: {
    en: 'Pediatric Audiology',
    es: 'Audiología Pediátrica',
    ca: 'Audiologia Pediàtrica',
    de: 'Pädiatrie-Audiologie',
  },
  digitalHearingAids: {
    en: 'Digital Hearing Aids',
    es: 'Audífonos Digitales',
    ca: 'Audiòfons Digitals',
    de: 'Digitale Hörgeräte',
  },
  // Technical Aids
  technicalAids: {
    en: 'Technical Aids',
    es: 'Ayudas Técnicas',
    ca: 'Ajudes Tècniques',
    de: 'Technische Hilfsmittel',
  },
  technicalAidsDesc: {
    en: 'Specialized solutions to improve communication in different environments for people with hearing loss.',
    es: 'Soluciones especializadas para mejorar la comunicación en diferentes entornos para personas con pérdida auditiva.',
    ca: 'Solucions especialitzades per millorar la comunicació en diferents entorns per a persones amb pèrdua auditiva.',
    de: 'Spezialisierte Lösungen zur Verbesserung der Kommunikation in verschiedenen Umgebungen für Menschen mit Hörverlust.',
  },
  technicalAidsTitle: {
    en: 'Technical Aid Solutions for Hearing Loss',
    es: 'Soluciones de Ayuda Técnica para Pérdida Auditiva',
    ca: 'Solucions d\'Ajuda Tècnica per a Pèrdua Auditiva',
    de: 'Technische Hilfslösungen für Hörverlust',
  },
  technicalAidsIntro: {
    en: 'Discover our range of technical aid solutions designed to enhance communication for people with hearing loss in various environments.',
    es: 'Descubra nuestra gama de soluciones de ayuda técnica diseñadas para mejorar la comunicación de personas con pérdida auditiva en diversos entornos.',
    ca: 'Descobreix la nostra gamma de solucions d\'ajuda tècnica dissenyades per millorar la comunicació de persones amb pèrdua auditiva en diversos entorns.',
    de: 'Entdecken Sie unser Sortiment an technischen Hilfslösungen, die entwickelt wurden, um die Kommunikation für Menschen mit Hörverlust in verschiedenen Umgebungen zu verbessern.',
  },
  twinlinkTitle: {
    en: 'Oticon TwinLink',
    es: 'Oticon TwinLink',
    ca: 'Oticon TwinLink',
    de: 'Oticon TwinLink',
  },
  twinlinkDesc: {
    en: 'Dual communication technology that provides simultaneous binaural processing and wireless connectivity for hearing aids.',
    es: 'Tecnología de comunicación dual que proporciona procesamiento binaural simultáneo y conectividad inalámbrica para audífonos.',
    ca: 'Tecnologia de comunicació dual que proporciona processament binaural simultani i connectivitat sense fils per a audiòfons.',
    de: 'Duale Kommunikationstechnologie, die gleichzeitige binaurale Verarbeitung und drahtlose Konnektivität für Hörgeräte bietet.',
  },
  edumicTitle: {
    en: 'Oticon EduMic',
    es: 'Oticon EduMic',
    ca: 'Oticon EduMic',
    de: 'Oticon EduMic',
  },
  edumicDesc: {
    en: 'A versatile wireless remote microphone system designed for educational settings, helping students with hearing loss.',
    es: 'Un sistema versátil de micrófono remoto inalámbrico diseñado para entornos educativos, ayudando a estudiantes con pérdida auditiva.',
    ca: 'Un sistema versàtil de micròfon remot sense fils dissenyat per a entorns educatius, ajudant a estudiants amb pèrdua auditiva.',
    de: 'Ein vielseitiges drahtloses Fernmikrofonsystem für Bildungseinrichtungen, das Schülern mit Hörverlust hilft.',
  },
  planVeo: {
    en: 'Plan VEO',
    es: 'Plan VEO',
    ca: 'Pla VEO',
    de: 'Plan VEO',
  },
  planVeoDesc: {
    en: 'Up to €100/year subsidy for glasses and contact lenses for children up to 16 years',
    es: 'Hasta 100€/año de ayuda para gafas y lentillas para menores de 16 años',
    ca: 'Fins a 100€/any d\'ajuda per a ulleres i lents de contacte per a menors de 16 anys',
    de: 'Bis zu 100€/Jahr Beihilfe für Brillen und Kontaktlinsen für Kinder bis 16 Jahre',
  },
};


interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language, skipLocalStorage?: boolean) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize with default language, LanguageWrapper will update it from URL
  const [language, setCurrentLanguage] = useState<Language>(DEFAULT_LANGUAGE);

  // Load language from localStorage on initial mount as a fallback
  // This is useful if user visits `/` and gets redirected, remembers their last lang choice
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') as Language | null;
    if (storedLanguage && SUPPORTED_LANGUAGES.includes(storedLanguage)) {
      setCurrentLanguage(storedLanguage);
    }
  }, []);
  
  const setLanguage = (lang: Language, skipLocalStorage: boolean = false) => {
    if (SUPPORTED_LANGUAGES.includes(lang)) {
      setCurrentLanguage(lang);
      if(!skipLocalStorage) {
        localStorage.setItem('language', lang);
      }
    } else {
      setCurrentLanguage(DEFAULT_LANGUAGE);
      if(!skipLocalStorage) {
        localStorage.setItem('language', DEFAULT_LANGUAGE);
      }
    }
  };

  const t = (key: string): string => {
    if (translations[key]) {
      return translations[key][language] || translations[key][DEFAULT_LANGUAGE];
    }
    console.warn(`Translation key not found: ${key}`);
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
