import { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Menu, X, ShoppingBag, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/config/languages';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language } = useLanguage(); // Get current language
  const location = useLocation();
  // const { lang: langFromParams } = useParams<{ lang: string }>(); // lang from URL
  // const currentLang = (langFromParams || language) as Language; // Prioritize URL lang

  // Check if we're on the homepage for the current language
  const isHomePage = location.pathname === `/${language}` || location.pathname === `/${language}/`;

  const navLinks = [
    { name: t('home'), path: `/${language}` },
    { name: t('products'), path: isHomePage ? `/${language}/#products` : `/${language}/#products` },
    { name: t('opticalServices'), path: isHomePage ? `/${language}/#optical` : `/${language}/#optical` },
    { name: t('audiologyServices'), path: isHomePage ? `/${language}/#audiology` : `/${language}/#audiology` },
    { name: t('about'), path: `/${language}/about` },
    { name: t('contact'), path: isHomePage ? `/${language}/#contact` : `/${language}/#contact` },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href'); // Full path like /ca/#products
    closeMenu(); // Close menu on any click

    if (href) {
      const [pathPart, hashPart] = href.split('#');
      
      // Check if clicking home link while already on homepage - scroll to top
      if (!hashPart && (pathPart === `/${language}` || pathPart === `/${language}/`)) {
        if (location.pathname === `/${language}` || location.pathname === `/${language}/`) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }
      
      // Check if it's an internal link to the current page's language root with a hash
      if (hashPart && (pathPart === `/${language}` || pathPart === `/${language}/` || pathPart === '')) {
         // If current page is already the target language's homepage
        if (location.pathname === `/${language}` || location.pathname === `/${language}/`) {
          e.preventDefault();
          const targetElement = document.getElementById(hashPart);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
          return;
        }
        // If navigating to homepage section from another page, Link component will handle navigation, 
        // and Index.tsx's useEffect will handle scrolling.
      }
      // For regular page links (e.g., /ca/about), Link component handles it.
    }
  };

  return (
    <nav 
      className={cn(
        "fixed w-full top-0 left-0 z-50 transition-all duration-300 px-6 lg:px-12",
        scrolled 
          ? "py-2 bg-white shadow-md" 
          : "py-4 bg-white shadow-sm text-gray-900"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          to={`/${language}`} 
          className="relative z-50 transition-all"
          onClick={closeMenu}
        >
          <img 
            src="/images/looptica_logo_text.png" 
            alt="Looptica" 
            className={cn(
              "h-8 md:h-10 transition-all",
              scrolled ? "opacity-100" : "opacity-100"
            )}
            style={{ objectFit: 'contain' }}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-medium transition-all hover:text-[#55afa9] text-gray-900 drop-shadow-sm"
              onClick={handleAnchorClick} // Use unified handler
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Call to Action Buttons and Language Switcher */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:+34933009064" className="flex items-center text-gray-900 hover:text-[#55afa9] drop-shadow-sm">
            <Phone className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">933 00 90 64</span>
          </a>
          <LanguageSwitcher /> {/* LanguageSwitcher will need to navigate to /newlang/currentpath_without_oldlang */}
          <Button 
            variant="default" 
            size="sm" 
            className="bg-[#55afa9] hover:bg-[#ca6664] text-white transition-all"
            // onClick={() => navigate(`/${language}/#contact`)} // Example if button leads to a page/section
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            {t('shopNow')}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-50 p-2 text-gray-900"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 transition-all duration-300" />
          ) : (
            <Menu className="h-6 w-6 transition-all duration-300" />
          )}
        </button>

        {/* Mobile Menu */}
        <div 
          className={cn(
            "fixed inset-0 bg-white md:hidden transition-transform duration-500 ease-in-out",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="h-full flex flex-col items-center justify-center space-y-8 p-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-xl font-medium transition-all hover:text-[#55afa9] text-gray-800"
                onClick={handleAnchorClick} // Use unified handler
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:+34933009064" className="flex items-center text-gray-700 hover:text-[#55afa9]">
              <Phone className="h-5 w-5 mr-2" />
              <span className="text-lg font-medium">933 00 90 64</span>
            </a>
            <LanguageSwitcher />
            <Button 
              variant="default" 
              className="mt-4 w-full max-w-[200px] bg-[#55afa9] hover:bg-[#ca6664] text-white"
              onClick={() => {
                // navigate(`/${language}/#contact`); // Example
                closeMenu();
              }}
            >
              <ShoppingBag className="h-5 w-5 mr-2" />
              {t('shopNow')}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
