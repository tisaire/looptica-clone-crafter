
import React, { useEffect } from 'react';
import { useParams, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language, SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from '@/config/languages';

const LanguageWrapper: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();
  const { setLanguage, language: currentContextLang } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (import.meta.env.DEV) console.log(`LanguageWrapper: Processing route with lang=${lang}, path=${location.pathname}`);
    
    const newLang = lang as Language;
    if (lang && SUPPORTED_LANGUAGES.includes(newLang)) {
      if (newLang !== currentContextLang) {
        if (import.meta.env.DEV) console.log(`LanguageWrapper: Setting language to ${newLang} from URL`);
        setLanguage(newLang, true); 
      }
    } else {
      // Invalid lang param (e.g., '/xyz/foo' where 'xyz' is not 'en', 'es', 'ca')
      // or lang param is missing and this component is somehow reached.
      // We want to redirect to /${DEFAULT_LANGUAGE}/${original_full_path}
      // Example: if URL was /services/lents-contacte, lang would be "services" (invalid).
      // location.pathname would be "/services/lents-contacte".
      // We need to redirect to /ca/services/lents-contacte.

      const fullPathToPreserve = location.pathname; 

      // Construct the new path: /<default_lang>/<preserved_path_including_invalid_first_segment_if_any>
      // Special handling for the root of the default language 'ca' to be /ca instead of /ca/
      const newRedirectPath = `/${DEFAULT_LANGUAGE}${fullPathToPreserve === '/' && DEFAULT_LANGUAGE === 'ca' ? '' : fullPathToPreserve}${location.search}${location.hash}`;
      
      if (import.meta.env.DEV) console.warn(`LanguageWrapper: Invalid language segment "${lang}" in URL "${location.pathname}". Redirecting to "${newRedirectPath}".`);
      navigate(newRedirectPath, { replace: true });
    }
  }, [lang, setLanguage, navigate, location, currentContextLang, DEFAULT_LANGUAGE]); // Added DEFAULT_LANGUAGE to dependencies

  // Render Outlet as soon as language is valid to avoid flickering
  // This allows the page to render while the context is being updated
  if (lang && SUPPORTED_LANGUAGES.includes(lang as Language)) {
    return <Outlet />;
  }
  
  // Render nothing or a loader while redirecting
  return null; 
};

export default LanguageWrapper;

