import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, Outlet, useParams } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
// Removed Navbar import, it will be part of LanguageWrapper's Outlet or specific page layouts
import Footer from './components/layout/Footer';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import { Toaster } from './components/ui/sonner';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import CookieConsent from './components/CookieConsent';
import CriticalStyles from './components/CriticalStyles';
import RedirectHandler from './components/RedirectHandler';
import LanguageWrapper from './components/layout/LanguageWrapper'; // Import the new wrapper
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES, Language } from './config/languages';

// Lazy load non-critical pages
import { lazy, Suspense } from 'react';
import './App.css';

// Create a loading component for Suspense
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-pulse h-4 w-24 bg-gray-200 rounded"></div>
  </div>
);

// lazy loaded component imports
const SalutVisual = lazy(() => import('./pages/services/SalutVisual'));
const LentsContacte = lazy(() => import('./pages/services/LentsContacte'));
const OrtoK = lazy(() => import('./pages/services/OrtoK'));
const Eyeglasses = lazy(() => import('./pages/services/Eyeglasses'));
const Sunglasses = lazy(() => import('./pages/services/Sunglasses'));
const ContactLenses = lazy(() => import('./pages/services/ContactLenses'));
const HearingTest = lazy(() => import('./pages/services/HearingTest'));
const HearingAids = lazy(() => import('./pages/services/HearingAids'));
const TinnitusTreatment = lazy(() => import('./pages/services/TinnitusTreatment'));
const EarProtection = lazy(() => import('./pages/services/EarProtection'));
const TechnicalAids = lazy(() => import('./pages/services/TechnicalAids'));
const Subvenciones = lazy(() => import('./pages/services/Subvenciones'));
const ImageConsulting = lazy(() => import('./pages/services/ImageConsulting'));
const LensConsulting = lazy(() => import('./pages/services/LensConsulting'));
const PlanVeo = lazy(() => import('./pages/services/PlanVeo'));
const About = lazy(() => import('./pages/About'));
const AudiologiaCentro = lazy(() => import('./pages/services/AudiologiaCentro'));
const PrivacyPolicy = lazy(() => import('./pages/legal/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/legal/TermsConditions'));
const CookiesPolicy = lazy(() => import('./pages/legal/CookiesPolicy'));
const OticonModels = lazy(() => import('./pages/products/OticonModels'));
const OticonModelPage = lazy(() => import('./pages/products/OticonModelPage'));


// Google Analytics page tracker component
const PageTracker = () => {
  const location = useLocation();
  const { lang } = useParams<{ lang: string }>(); // Get lang to potentially strip it for analytics
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.gtag) {
        // Path for GA: location.pathname already includes the language.
        // If you need to report without lang prefix:
        // const pathForAnalytics = lang ? location.pathname.substring(lang.length + 1) || '/' : location.pathname;
        // window.gtag('event', 'page_view', { page_path: pathForAnalytics + location.search });
        window.gtag('event', 'page_view', {
          page_path: location.pathname + location.search,
          language: lang // Optionally send language as a parameter
        });
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, [location, lang]);
  
  return null;
};

// Layout component that includes Footer, Toaster, CookieConsent
// This helps to ensure these are applied consistently within language-wrapped routes
const MainLayout = () => {
  return (
    <>
      <Outlet /> {/* Page content will be rendered here */}
      <Footer />
      <Toaster />
      <CookieConsent />
    </>
  );
};

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <CriticalStyles />
        <Router>
          <RedirectHandler /> {/* Handles old URL redirects */}
          <Routes>
            {/* Redirect root to default language */}
            <Route path="/" element={<Navigate to={`/${DEFAULT_LANGUAGE}`} replace />} />
            
            {/* Language-prefixed routes */}
            <Route path="/:lang" element={<LanguageWrapper />}>
              {/* PageTracker inside LanguageWrapper to have access to validated 'lang' */}
              <Route element={<><PageTracker /><MainLayout /></>}> {/* Wrap with MainLayout */}
                <Route index element={<Index />} />
                <Route path="about" element={<Suspense fallback={<PageLoader />}><About /></Suspense>} />
                
                {/* Optical Services */}
                <Route path="services/salut-visual" element={<Suspense fallback={<PageLoader />}><SalutVisual /></Suspense>} />
                <Route path="services/lents-contacte" element={<Suspense fallback={<PageLoader />}><LentsContacte /></Suspense>} />
                <Route path="services/orto-k" element={<Suspense fallback={<PageLoader />}><OrtoK /></Suspense>} />
                <Route path="services/eyeglasses" element={<Suspense fallback={<PageLoader />}><Eyeglasses /></Suspense>} />
                <Route path="services/sunglasses" element={<Suspense fallback={<PageLoader />}><Sunglasses /></Suspense>} />
                <Route path="services/contact-lenses" element={<Suspense fallback={<PageLoader />}><ContactLenses /></Suspense>} />
                <Route path="services/image-consulting" element={<Suspense fallback={<PageLoader />}><ImageConsulting /></Suspense>} />
                <Route path="services/lens-consulting" element={<Suspense fallback={<PageLoader />}><LensConsulting /></Suspense>} />
                <Route path="services/plan-veo" element={<Suspense fallback={<PageLoader />}><PlanVeo /></Suspense>} />

                {/* Audiology Services */}
                <Route path="services/hearing-test" element={<Suspense fallback={<PageLoader />}><HearingTest /></Suspense>} />
                <Route path="services/hearing-aids" element={<Suspense fallback={<PageLoader />}><HearingAids /></Suspense>} />
                <Route path="services/tinnitus-treatment" element={<Suspense fallback={<PageLoader />}><TinnitusTreatment /></Suspense>} />
                <Route path="services/ear-protection" element={<Suspense fallback={<PageLoader />}><EarProtection /></Suspense>} />
                <Route path="services/technical-aids" element={<Suspense fallback={<PageLoader />}><TechnicalAids /></Suspense>} />
                <Route path="services/subvenciones" element={<Suspense fallback={<PageLoader />}><Subvenciones /></Suspense>} />
                <Route path="services/audiologia-centro" element={<Suspense fallback={<PageLoader />}><AudiologiaCentro /></Suspense>} />

                {/* Oticon Models Pages */}
                <Route path="products/oticon-models" element={<Suspense fallback={<PageLoader />}><OticonModels /></Suspense>} />
                <Route path="products/oticon-models/:id" element={<Suspense fallback={<PageLoader />}><OticonModelPage /></Suspense>} />

                {/* Legal Pages */}
                <Route path="legal/privacy-policy" element={<Suspense fallback={<PageLoader />}><PrivacyPolicy /></Suspense>} />
                <Route path="legal/terms-conditions" element={<Suspense fallback={<PageLoader />}><TermsConditions /></Suspense>} />
                <Route path="legal/cookies-policy" element={<Suspense fallback={<PageLoader />}><CookiesPolicy /></Suspense>} />
                
                {/* Catch-all for unknown paths under a language prefix */}
                <Route path="*" element={<NotFound />} />
              </Route>
            </Route>
            
            {/* Fallback for non-language-prefixed paths not caught by root redirect (e.g. if someone types /xyz directly) */}
            {/* This could also redirect to a generic 404 or a language-prefixed 404 */}
            <Route path="*" element={<Navigate to={`/${DEFAULT_LANGUAGE}/404`} replace />} /> 
          </Routes>
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
