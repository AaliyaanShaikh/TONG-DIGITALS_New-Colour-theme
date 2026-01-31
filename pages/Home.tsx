import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Features from '../components/Features';
import FeaturedProducts from '../components/FeaturedProducts';
import ProductListings from '../components/ProductListings';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      const id = state.scrollTo;
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      window.history.replaceState({}, '', window.location.pathname + window.location.search);
    }
  }, [location.state]);

  return (
    <div className="relative min-h-screen bg-[#1a1612]">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <AboutUs />
        <Features />
        <FeaturedProducts />
        <ProductListings />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
