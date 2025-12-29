
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -right-20 w-[600px] h-[600px] border border-white/5 rounded-full"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-20 w-[500px] h-[500px] border border-[#DB6923]/10 rounded-full"
        />
      </div>

      <motion.div 
        style={{ y: textY, opacity }}
        className="container mx-auto text-center z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-4 py-1 rounded-full border border-white/20 mb-8 glass text-xs font-bold uppercase tracking-widest text-[#DB6923]"
        >
          Redefining Attention
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-6xl md:text-9xl font-extrabold tracking-tight leading-none mb-8"
        >
          IMMERSIVE <br />
          <span className="text-[#DB6923]">BRANDS</span> FOR THE <br />
          DIGITAL ELITE.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-[#EFEEEA]/60 mb-12 font-light leading-relaxed"
        >
          We merge high-end visual storytelling with cutting-edge AI strategy to craft digital experiences that demand silence and attention.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <button className="px-10 py-5 bg-[#EFEEEA] text-[#202020] rounded-full font-bold text-lg hover:bg-white transition-colors">
            Our Portfolio
          </button>
          <button className="px-10 py-5 border border-white/20 rounded-full font-bold text-lg glass hover:bg-white/10 transition-colors">
            Contact Agent
          </button>
        </motion.div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30"
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
