
import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import FloatingElement from './components/FloatingElement';

const StatItem = ({ val, label, index }: { val: string; label: string; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Parsing logic for numbers and suffixes (e.g., "150+", "99%")
  const numericPart = parseInt(val.replace(/\D/g, '')) || 0;
  const suffix = val.replace(/[0-9]/g, '');

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 40,
    damping: 20,
    restDelta: 0.001
  });
  
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericPart);
    }
  }, [isInView, numericPart, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 80, opacity: 0, scale: 0.9 }}
      animate={isInView ? { y: 0, opacity: 1, scale: 1 } : {}}
      transition={{ 
        duration: 1, 
        delay: index * 0.15, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      whileHover={{ y: -20, scale: 1.05 }}
      className="group cursor-default py-8"
    >
      <div className="text-5xl md:text-8xl font-extrabold text-[#DB6923] mb-4 tracking-tighter drop-shadow-2xl transition-all duration-500 group-hover:text-white">
        {displayValue}{suffix}
      </div>
      <div className="text-xs md:text-sm uppercase tracking-[0.4em] text-[#EFEEEA]/30 font-bold group-hover:text-[#DB6923] transition-colors duration-300">
        {label}
      </div>
      <motion.div 
        className="h-1 w-0 bg-[#DB6923] mx-auto mt-4 rounded-full group-hover:w-12 transition-all duration-500"
      />
    </motion.div>
  );
};

const App: React.FC = () => {
  // Smooth scroll implementation helper
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  const stats = [
    { val: '150+', label: 'Brands Transformed' },
    { val: '24', label: 'Global Awards' },
    { val: '99%', label: 'Growth Retention' },
    { val: '5k+', label: 'Simulations Run' },
  ];

  return (
    <div className="relative min-h-screen bg-[#202020]">
      {/* Global Background UI Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <FloatingElement top="10%" left="5%" color="#DB6923" size="400px" parallaxSpeed={0.2} />
        <FloatingElement top="60%" right="5%" color="#EFEEEA" size="350px" parallaxSpeed={0.4} />
        <FloatingElement bottom="-10%" left="20%" color="#DB6923" size="500px" parallaxSpeed={0.3} />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        
        {/* Manifest Section */}
        <section id="manifesto" className="py-32 px-6 flex items-center justify-center">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="text-3xl md:text-5xl font-light leading-relaxed"
              >
                WE BELIEVE THAT THE BEST MARKETING <span className="text-[#DB6923] font-bold">DOESN'T FEEL LIKE MARKETING.</span> IT FEELS LIKE AN EXPERIENCE. A GIFT. AN UNFORGETTABLE MOMENT OF <span className="italic">CLARITY.</span>
              </motion.h2>
            </div>
          </div>
        </section>

        <Services />
        <Portfolio />
        
        {/* Statistics Section with the requested Raise Animation */}
        <section className="py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-white/[0.02] -skew-y-3 transform origin-right pointer-events-none" />
          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              {stats.map((stat, i) => (
                <StatItem key={i} val={stat.val} label={stat.label} index={i} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
