
import { useLanguage } from '@/contexts/LanguageContext';
import { Star } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const Testimonials = () => {
  const { t } = useLanguage();
  
  // Sample testimonials from Google Maps reviews
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Maria R. N.",
      rating: 5,
      comment: "El nivel de profesionalidad es excelente! Gran vocación por el sector de la visión y de la audición. Siempre ha sido mi óptica de referencia, porque te aconsejan y te ofrecen las mejores calidades para tus necesidades. Con el centro auditivo, me han acabado de ganar. El servicio es exquisito, la calidad de los audífonos inmejorable y la facilidad en el pago aún mejor. He podido probar los audífonos antes de comprarlos y ha sido la mejor experiencia que he tenido.",
      date: "2025-10-12"
    },
    {
      id: 2,
      name: "Merve B.",
      rating: 5,
      comment: "Excelente atención, super recomendable! Me hice la revisión visual y posteriormente las gafas con Elena, Lorena e Irene. Las tres son muy amables y profesionales. Gracias a ellas pude tener las gafas listas el mismo día.",
      date: "2026-02-18"
    },
    {
      id: 3,
      name: "Mariana A. V.",
      rating: 5,
      comment: "Lorena ha sido un amor! Me ha atendido increíble y me ha ayudado mucho para saber el porqué de algunos síntomas que tenía. Me han hecho los lentes en tiempo récord! Muy recomendado.",
      date: "2026-04-05"
    },
    {
      id: 4,
      name: "Jordi C. I.",
      rating: 5,
      comment: "He vingut tres vegades a que m'ajustin les ulleres i cadascuna d'elles me les han deixat perfectes i m'han donat un tracte excel·lent. Són molt professionals i tenen l'art (o do) de saber tractar les ulleres, a diferència d'altres òptiques on només són venedores, no expertes. Les pròximes ulleres sens dubte les compraré aquí.",
      date: "2025-12-09"
    },
    {
      id: 5,
      name: "Odol B.",
      rating: 5,
      comment: "Que gran atención! El ejemplo claro de porque hay que apostar más por tiendas de barrio y no por grandes superficies. Rapidez, precio, material de calidad destacando una vez más, la atención. Mil gracias!",
      date: "2026-05-22"
    }
    
  ];

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-16 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal origin="bottom" delay={100}>
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#55afa9]/10 text-[#55afa9] mb-3">
              {t('customerReviews')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t('whatCustomersSay')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('reviewsDescription')}</p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {testimonials.map((testimonial) => (
            <ScrollReveal key={testimonial.id} origin="bottom" delay={200 + testimonial.id * 100}>
              <div className="p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {renderStars(testimonial.rating)}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">
                    {new Date(testimonial.date).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-gray-700 mb-4 flex-grow overflow-y-auto max-h-64 text-sm">&ldquo;{testimonial.comment}&rdquo;</p>
                <div className="mt-auto">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <div className="flex items-center mt-2">
                    <img 
                      src="/images/google-logo.svg" 
                      alt="Google" 
                      className="h-5 mr-2"
                    />
                    <span className="text-xs text-gray-500">Google Maps</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal origin="bottom" delay={600}>
          <div className="text-center mt-10">
            <a 
              href="https://maps.app.goo.gl/pCsdcon4p9GewN7e6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-[#55afa9] hover:text-[#55afa9]"
            >
              {t('viewAllReviews')} 
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Testimonials;
