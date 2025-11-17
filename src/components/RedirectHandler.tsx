
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { DEFAULT_LANGUAGE } from '@/config/languages'; // Import default language

const RedirectHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname, search } = location;

  useEffect(() => {
    // Define all redirects mapping (old path -> new language-prefixed path)
    // For paths without explicit language, we redirect to Spanish 'es' or Catalan 'ca' as appropriate.
    // New structure is /:lang/path
    const redirects: Record<string, string> = {
      // Language root redirects handled by App.tsx's root path redirect and LanguageWrapper
      // '/cat': `/${DEFAULT_LANGUAGE}/`, (example, but better handled by server or initial app logic)
      // '/en': `/en/`,
      
      // Contact lenses redirects
      '/en/contact-lenses-poblenou-barcelona': '/en/services/contact-lenses',
      '/en/contact-lenses-poblenou-barcelona/': '/en/services/contact-lenses',
      '/lentillas-poblenou-barcelona': '/es/services/contact-lenses',
      '/lentillas-poblenou-barcelona/': '/es/services/contact-lenses',
      '/kontaktlinsen-poblenou-barcelona': '/de/services/contact-lenses',
      '/kontaktlinsen-poblenou-barcelona/': '/de/services/contact-lenses',
      '/lentilles-poblenou-barcelona': '/ca/services/lents-contacte',
      '/lentilles-poblenou-barcelona/': '/ca/services/lents-contacte',
      
      // Orto-K redirects
      '/orto-k-poblenou-barcelona': '/es/services/orto-k', // Assuming Spanish
      '/orto-k-poblenou-barcelona/': '/es/services/orto-k',
      '/en/orto-k-in-poblenou-barcelona': '/en/services/orto-k',
      '/en/orto-k-in-poblenou-barcelona/': '/en/services/orto-k',
      '/de/orto-k-in-poblenou-barcelona': '/de/services/orto-k', // German
      '/de/orto-k-in-poblenou-barcelona/': '/de/services/orto-k',
      
      // Salud visual redirect
      '/salud-visual-poblenou-barcelona': '/es/services/salut-visual', // Assuming Spanish
      '/salud-visual-poblenou-barcelona/': '/es/services/salut-visual',
      '/sehgesundheit-poblenou-barcelona': '/de/services/salut-visual', // German
      '/sehgesundheit-poblenou-barcelona/': '/de/services/salut-visual',

      // Technical Aids redirect (adding these to handle potential legacy URLs)
      '/technical-aids': `/${DEFAULT_LANGUAGE}/services/technical-aids`,
      '/ayudas-tecnicas': '/es/services/technical-aids',
      '/ajudes-tecniques': '/ca/services/technical-aids',
      '/technische-hilfsmittel': '/de/services/technical-aids', // German

      // Specific query parameter redirects
      // These are tricky, ensure they don't conflict with new structure.
      // Example: if '/cat/?noredirect=ca-ES' used to go to old homepage, now it should go to new default lang homepage
      // This one might be obsolete or needs to be handled carefully:
      // '/cat/?noredirect=ca-ES': `/${DEFAULT_LANGUAGE}/` - check this rule's intent
    };
    
    // Special case from .htaccess, should be removed if .htaccess handles it
    // This type of redirect should ideally be a 301 in .htaccess or server config.
    if (pathname === '/cat/' && search === '?noredirect=ca-ES') {
        console.log(`RedirectHandler: Special query redirect from ${pathname}${search} to /${DEFAULT_LANGUAGE}/`);
        navigate(`/${DEFAULT_LANGUAGE}/`, { replace: true });
        return;
    }

    // Path-based redirects
    let normalizedPathname = pathname;
    if (pathname.endsWith('/') && pathname.length > 1) {
      normalizedPathname = pathname.slice(0, -1); // Remove trailing slash for matching
    }

    if (redirects[pathname] || redirects[normalizedPathname]) {
      const targetPath = redirects[pathname] || redirects[normalizedPathname];
      console.log(`RedirectHandler: Redirecting from ${pathname} to ${targetPath}`);
      navigate(targetPath, { replace: true });
    }
    
    // Debug
    console.log(`RedirectHandler: Checking path '${pathname}', no redirect applied`);
    
  }, [pathname, search, navigate]);

  return null;
};

export default RedirectHandler;
