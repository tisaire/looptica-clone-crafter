
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t, language } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      let successMessage = "Subscripció completada!";
      let descMessage = "Gràcies per subscriure't al nostre butlletí.";
      
      if (language === 'en') {
        successMessage = "Subscription complete!";
        descMessage = "Thank you for subscribing to our newsletter.";
      } else if (language === 'es') {
        successMessage = "¡Suscripción completada!";
        descMessage = "Gracias por suscribirte a nuestro boletín.";
      } else if (language === 'de') {
        successMessage = "Abonnement abgeschlossen!";
        descMessage = "Vielen Dank für Ihr Abonnement unseres Newsletters.";
      }
      
      toast({
        title: successMessage,
        description: descMessage,
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-20 px-6 lg:px-12 relative overflow-hidden bg-[#e6faea]" id="about">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-white rounded-xl shadow-md p-8 md:p-16 flex flex-col md:flex-row gap-16 items-center">
          {/* Left Side (Text) */}
          <div className="md:w-1/2">
            <ScrollReveal origin="left">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#55afa9]/10 text-[#55afa9] mb-4">
                {t('stayUpdated')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                {t('newsletter')}
              </h2>
              <div className="w-16 h-1 bg-[#55afa9] mb-6"></div>
              <p className="text-gray-600 mb-8">
                {t('newsletterDesc')}
              </p>
            </ScrollReveal>
          </div>
          
          {/* Right Side (Form) */}
          <div className="md:w-1/2 w-full">
            <ScrollReveal origin="right">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    {t('emailAddress')}
                  </label>
                  <div className="flex gap-2">
                    <Input
                      id="email"
                      type="email"
                      placeholder="el-teu@correu.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 border-gray-300 focus:border-[#55afa9] focus:ring-[#55afa9]"
                    />
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#55afa9] hover:bg-[#ca6664] text-white"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      {isSubmitting ? t('subscribing') : t('subscribe')}
                    </Button>
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  {t('privacyConsent')}
                </p>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
      
      {/* Background Gradients */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#55afa9]/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#55afa9]/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Newsletter;
