import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 500], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.95]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#1a1612]" />
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1612]/60 via-[#1a1612]/40 to-[#1a1612]" />
      </div>

      <motion.div
        style={{ y: textY, opacity, scale }}
        className="container mx-auto text-center z-10 relative"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-5 py-2 rounded-full border border-[#c4a574]/40 bg-[#252019]/60 text-xs font-semibold uppercase tracking-[0.2em] text-[#c4a574] mb-8"
        >
          Crafted for Living
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight leading-[1.05] mb-8 text-[#f5f0e8]"
        >
          Furniture That <br />
          <span className="text-[#c4a574]">Feels Like Home</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-xl mx-auto text-lg md:text-xl text-[#e8e4dc]/70 mb-12 font-light leading-relaxed"
        >
          Timeless design, sustainable materials, and craftsmanship that lasts generations. Discover pieces built for how you live.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/#featured"
            className="px-10 py-4 rounded-xl bg-[#c4a574] text-[#1a1612] font-heading font-bold text-lg hover:bg-[#d4b584] transition-colors"
          >
            Shop Featured
          </Link>
          <a
            href="#about"
            className="px-10 py-4 rounded-xl border-2 border-[#3d3529] text-[#f5f0e8] font-heading font-bold text-lg hover:border-[#c4a574]/50 hover:text-[#c4a574] transition-colors"
          >
            Our Story
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#c4a574]/50 hover:text-[#c4a574] transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={28} />
      </motion.a>
    </section>
  );
};

export default Hero;
