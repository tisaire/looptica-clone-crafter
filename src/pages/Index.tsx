
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Products from '@/components/home/Products';
import Audiology from '@/components/home/Audiology';
import Newsletter from '@/components/home/Newsletter';

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Products />
        <Audiology />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
