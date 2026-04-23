
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from '@/contexts/LanguageContext';

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    // Log the 404 error to console
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  // Multi-language content for 404 page
  const content = {
    title: {
      en: "Page Not Found",
      es: "Página No Encontrada",
      ca: "Pàgina No Trobada",
      de: "Seite Nicht Gefunden"
    },
    message: {
      en: "We're sorry, the page you were looking for doesn't exist or has been moved.",
      es: "Lo sentimos, la página que buscabas no existe o ha sido movida.",
      ca: "Ho sentim, la pàgina que cercaves no existeix o ha estat moguda.",
      de: "Es tut uns leid, die gesuchte Seite existiert nicht oder wurde verschoben."
    },
    button: {
      en: "Return to Home",
      es: "Volver al Inicio",
      ca: "Tornar a l'Inici",
      de: "Zurück zur Startseite"
    },
    debug: {
      en: "Technical details: Looking for path",
      es: "Detalles técnicos: Buscando ruta",
      ca: "Detalls tècnics: Cercant ruta",
      de: "Technische Details: Suche nach Pfad"
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-32 px-4">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-6xl font-bold mb-8 text-[#1a2b3c]">404</h1>
        <h2 className="text-2xl font-medium mb-4 text-[#1a2b3c]">{content.title[language]}</h2>
        <p className="text-lg text-gray-600 mb-8">{content.message[language]}</p>
        <Link 
          to={`/${language}`} 
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#55afa9] hover:bg-[#ca6664] transition-colors"
        >
          {content.button[language]}
        </Link>
        
        {/* Add a small debug note that shows the path in development */}
        {import.meta.env.DEV && (
          <div className="mt-16 text-xs text-gray-400">
            <p>{content.debug[language]}: {location.pathname}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotFound;
