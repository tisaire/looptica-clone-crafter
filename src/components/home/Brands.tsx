import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { LazyCarousel } from "@/components/ui/LazyCarousel";
import { CarouselItem } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Updated brands array using JPG files
const brands = [
  { 
    id: 1, 
    name: "Woodys", 
    logo: "/lovable-uploads/9fbf92da-415f-43d4-a177-3de7dcb1195a.jpg" 
  },
  { 
    id: 2, 
    name: "Etnia Barcelona", 
    logo: "/lovable-uploads/4e50b490-59f3-40a9-a3a6-a1c02cf017a3.jpg" 
  },
  { 
    id: 3, 
    name: "Woodys", 
    logo: "/lovable-uploads/0cb156b5-17ce-4173-aa0c-c9c92d478dd6.jpg" 
  },
  { 
    id: 4, 
    name: "Kaleos", 
    logo: "/lovable-uploads/061283d4-a89e-4a50-9883-393a64c34e4e.jpg" 
  },
  { 
    id: 5, 
    name: "Xavier Garcia", 
    logo: "/lovable-uploads/fbb3f53d-cb3a-4b23-bf37-ee5a9fb68e8f.jpg" 
    
  },
  { 
    id: 6, 
    name: "Woodys", 
    logo: "/lovable-uploads/b5e53adf-aa39-4826-ae3e-61dc5721b6ea.png" 
  },
  { 
    id: 7, 
    name: "PaperEyes", 
    logo: "/lovable-uploads/3e7cc4b1-38d3-4374-ad90-9b7aff598cf4.png" 
  },
];

const Brands = () => {
  const { t } = useLanguage();
  
  return (
    <section id="brands" className="py-16 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal origin="bottom" delay={100}>
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#55afa9]/10 text-[#55afa9] mb-3">
              {t('topBrands')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t('ourBrands')}</h2>
            <div className="w-16 h-1 bg-[#55afa9] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('brandsDescription')}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal origin="bottom" delay={200} className="w-full max-w-5xl mx-auto">
          <LazyCarousel 
            className="w-full pb-10"
            opts={{
              align: "start",
              loop: true,
            }}
            previousClassName="absolute left-0 top-1/2 -translate-y-1/2"
            nextClassName="absolute right-0 top-1/2 -translate-y-1/2"
          >
            {brands.map((brand) => (
              <CarouselItem key={brand.id} className="basis-full md:basis-1/2 lg:basis-1/3 p-4">
                <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                  <div className="group relative cursor-pointer">
                    <AspectRatio ratio={4/3}>
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
                    </AspectRatio>
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 flex items-center justify-center transition-all duration-300 group-hover:bg-black/60">
                      <h3 className="text-white font-semibold text-xl opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        {brand.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </LazyCarousel>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Brands;
