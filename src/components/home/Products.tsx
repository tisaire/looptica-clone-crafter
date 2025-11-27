
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ShoppingBag } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Products = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: t('eyeglasses'),
      category: t('eyeglasses'),
      price: '89€',
      image: '/lovable-uploads/45087a9c-489a-4d48-82fb-d857e7bf306a.jpg',
      link: `/${language}/services/eyeglasses`
    },
    {
      id: 2,
      name: t('contactLenses'),
      category: t('contactLenses'),
      price: '26€',
      image: '/images/adobestock-226007711_orig.jpeg',
      link: `/${language}/services/contact-lenses`
    },
    {
      id: 3,
      name: t('sunglasses'),
      category: t('sunglasses'),
      price: '49€',
      image: '/lovable-uploads/e288806f-89cb-4ae0-9a88-6b52ee0ccc4b.png',
      link: `/${language}/services/sunglasses`
    },
    {
      id: 4,
      name: t('hearingAids'),
      category: t('audiologyServices'),
      price: '90€/mes',
      image: '/images/oticon_xceed_connectivity_iphone_x_nds_199359.jpg',
      link: `/${language}/services/hearing-aids`
    },
  ];

  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <section className="py-16 px-6 lg:px-12 bg-white" id="products">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#55afa9]/10 text-[#55afa9] mb-4">
            {t('ourCollection')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            {t('curatedDesigns')}
          </h2>
          <div className="w-16 h-1 bg-[#55afa9] mx-auto mb-6"></div>
          <p className="text-gray-600">
            {t('productsDescription')}
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={product.id} className="animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
              <a 
                href={product.link}
                onClick={(e) => handleNavigate(e, product.link)}
                className="block group relative bg-white rounded-lg overflow-hidden border border-gray-200 hover-lift"
              >
                {/* Product Image */}
                <div className="aspect-[3/2] overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    width={400}
                    height={267}
                  />
                </div>
                
                {/* Product Info */}
                <div className="p-4">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="font-medium text-lg mt-1 mb-2 text-gray-900">
                    {product.name}
                  </h3>
                  <p className="font-bold text-[#55afa9]">Des de {product.price}</p>
                  
                  <Button 
                    variant="outline"
                    className="w-full mt-4 transition-all border-[#55afa9] text-[#55afa9] group-hover:bg-[#55afa9] group-hover:text-white"
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    {t('viewDetails')}
                  </Button>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
