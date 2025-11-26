import React from 'react'; // Keep React for React.MouseEvent
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ui'; // Standardized import
import { Instagram, Twitter, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  // Dynamic navigation sections with translations
  const getFooterLinks = () => {
    return [
      {
        title: language === 'en' ? 'Visual Services' : language === 'es' ? 'Servicios Visuales' : language === 'de' ? 'Visuelle Dienste' : 'Serveis Visuals',
        links: [
          { name: t('eyeglasses'), path: `/${language}/services/eyeglasses` },
          { name: t('sunglasses'), path: `/${language}/services/sunglasses` },
          { name: t('contactLenses'), path: `/${language}/services/contact-lenses` },
          { name: t('visualHealth'), path: `/${language}/services/salut-visual` },
          { name: t('ortoK'), path: `/${language}/services/orto-k` },
          { name: t('imageConsulting'), path: `/${language}/services/image-consulting` },
          { name: t('lensConsulting'), path: `/${language}/services/lens-consulting` },
        ],
      },
      {
        title: language === 'en' ? 'Auditory Services' : language === 'es' ? 'Servicios Auditivos' : language === 'de' ? 'Auditive Dienste' : 'Serveis Auditius',
        links: [
          { name: t('hearingTest'), path: `/${language}/services/hearing-test` },
          { name: t('hearingAids'), path: `/${language}/services/hearing-aids` },
          { name: t('customEarProtection'), path: `/${language}/services/ear-protection` },
          { name: t('technicalAids'), path: `/${language}/services/technical-aids` },
          { name: t('subvenciones'), path: `/${language}/services/subvenciones` },
        ],
      },
      {
        title: language === 'en' ? 'Support' : language === 'es' ? 'Soporte' : language === 'de' ? 'Unterstützung' : 'Suport',
        links: [
          { name: t('contact'), path: `/${language}/#contact` },
          { name: t('shopNow'), path: `/${language}/#products` },
          { name: language === 'en' ? 'FAQ' : language === 'es' ? 'Preguntas frecuentes' : language === 'de' ? 'Häufig gestellte Fragen' : 'Preguntes freqüents', path: `/${language}/#contact` },
          { name: language === 'en' ? 'Where we are' : language === 'es' ? 'Dónde estamos' : language === 'de' ? 'Wo wir sind' : 'On som', path: `/${language}/#contact` },
        ],
      },
    ];
  };

  const footerLinks = getFooterLinks();
  
  const socialLinks = [
    { name: 'Instagram', icon: <Instagram className="h-5 w-5" />, path: 'https://www.instagram.com/' },
    { name: 'Twitter', icon: <Twitter className="h-5 w-5" />, path: 'https://twitter.com/' },
    { name: 'Facebook', icon: <Facebook className="h-5 w-5" />, path: 'https://www.facebook.com/' },
  ];

  // Function to handle anchor link clicks
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    
    if (href && href.includes('#') && window.location.pathname === `/${language}`) {
      e.preventDefault();
      const targetId = href.substring(href.indexOf('#') + 1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  return (
    <footer className="bg-[#1a2b3c] text-white pt-20 pb-10 px-6 lg:px-12" id="contact">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            <div>
              <Link to={`/${language}`} className="mb-6 inline-block">
                <img 
                  src="/images/looptica_logo_text.png" 
                  alt="Looptica" 
                  className="h-10 mb-6 filter brightness-0 invert"
                  style={{ objectFit: 'contain' }}
                />
              </Link>
              <p className="text-gray-300 mb-6 max-w-xs">
                {language === 'en' 
                  ? 'High-quality visual and auditory solutions for those who value professionalism and good service.' 
                  : language === 'es' 
                    ? 'Soluciones visuales y auditivas de alta calidad para quienes valoran la profesionalidad y el buen servicio.'
                    : language === 'de'
                    ? 'Hochwertige visuelle und auditive Lösungen für diejenigen, die Professionalität und guten Service schätzen.'
                    : 'Solucions visuals i auditives d\'alta qualitat per a aquells que valoren la professionalitat i el bon servei.'}
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.path}
                    className="hover:text-[#55afa9] text-gray-300 transition-colors duration-200"
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((footerSection) => (
              <div key={footerSection.title}>
                <h4 className="font-medium text-lg mb-6 text-white">{footerSection.title}</h4>
                <ul className="space-y-3">
                  {footerSection.links.map((link) => (
                    <li key={link.name}>
                      {link.path.includes('#') ? (
                        <a
                          href={link.path}
                          className="text-gray-300 hover:text-[#55afa9] transition-colors duration-200"
                          onClick={handleAnchorClick}
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          to={link.path}
                          className="text-gray-300 hover:text-[#55afa9] transition-colors duration-200"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Info */}
            <div>
              <h4 className="font-medium text-lg mb-6 text-white">
                {language === 'en' ? 'Contact Us' : (language === 'es' ? 'Contáctanos' : 'Contacta\'ns')}
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-[#ca6664] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Rambla del Poblenou, 48, 08005 Barcelona</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-[#ca6664] mr-3 flex-shrink-0" />
                  <a href="tel:+34933009064" className="text-gray-300 hover:text-[#55afa9]">933 00 90 64</a>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-[#ca6664] mr-3 flex-shrink-0" />
                  <a href="tel:+34699594064" className="text-gray-300 hover:text-[#55afa9]">699 59 40 64</a>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-[#ca6664] mr-3 flex-shrink-0" />
                  <a href="mailto:info@looptica.com" className="text-gray-300 hover:text-[#55afa9]">info@looptica.com</a>
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom Bar */}
        <ScrollReveal>
          <div className="pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-gray-400">
                © {currentYear} Looptica. {language === 'en' ? 'All rights reserved.' : language === 'es' ? 'Todos los derechos reservados.' : language === 'de' ? 'Alle Rechte vorbehalten.' : 'Tots els drets reservats.'}
              </p>

              <div className="flex space-x-6 text-sm text-gray-400">
                <Link to={`/${language}/legal/privacy-policy`} className="hover:text-[#55afa9] transition-colors duration-200">
                  {language === 'en' ? 'Privacy Policy' : language === 'es' ? 'Política de Privacidad' : language === 'de' ? 'Datenschutzrichtlinie' : 'Política de Privacitat'}
                </Link>
                <Link to={`/${language}/legal/terms-conditions`} className="hover:text-[#55afa9] transition-colors duration-200">
                  {language === 'en' ? 'Terms & Conditions' : language === 'es' ? 'Términos y Condiciones' : language === 'de' ? 'Allgemeine Geschäftsbedingungen' : 'Termes i Condicions'}
                </Link>
                <Link to={`/${language}/legal/cookies-policy`} className="hover:text-[#55afa9] transition-colors duration-200">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
