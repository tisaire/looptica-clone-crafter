
import { useLanguage } from '@/contexts/LanguageContext';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Globe } from 'lucide-react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { Language, SUPPORTED_LANGUAGES } from '@/config/languages';
import { ZEISS_SLUGS } from '@/config/zeissSlugs';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const { lang: currentUrlLang } = useParams<{ lang: string }>();

  const handleLanguageChange = (newLang: Language) => {
    // Update context and localStorage
    setLanguage(newLang);

    // Construct new path
    // Remove current language prefix if it exists
    let basePath = location.pathname;
    if (currentUrlLang && basePath.startsWith(`/${currentUrlLang}`)) {
      basePath = basePath.substring(`/${currentUrlLang}`.length) || "/"; // ensure it's at least "/"
    }
    if (basePath === "") basePath = "/"; // if it became empty string

    // Ensure basePath starts with a slash if it's not just "/"
    if (basePath !== "/" && !basePath.startsWith("/")) {
        basePath = `/${basePath}`;
    }
    
    // Localized ZEISS slug: swap to the target language's slug
    if (Object.values(ZEISS_SLUGS).includes(basePath.replace(/^\//, '').replace(/\/$/, ''))) {
      basePath = `/${ZEISS_SLUGS[newLang]}`;
    }

    // For the root path of the default language 'ca', we want /ca not /ca/
    const finalPath = `/${newLang}${basePath === "/" ? "" : basePath}${location.search}${location.hash}`;
    
    if (import.meta.env.DEV) console.log(`LanguageSwitcher: Navigating from ${location.pathname} to ${finalPath}`);
    navigate(finalPath);
  };

  return (
    <div className="flex items-center">
      <Globe className="h-4 w-4 mr-2 text-gray-700" />
      <Select value={language} onValueChange={(value) => handleLanguageChange(value as Language)}>
        <SelectTrigger className="w-24 border-none bg-transparent h-8 focus:ring-0 text-gray-700">
          <SelectValue placeholder="Idioma" />
        </SelectTrigger>
        <SelectContent>
          {SUPPORTED_LANGUAGES.map((langCode) => (
            <SelectItem key={langCode} value={langCode}>
              {langCode === 'ca' ? 'Català' : 
               langCode === 'es' ? 'Español' : 
               langCode === 'en' ? 'English' : 
               'Deutsch'}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSwitcher;
