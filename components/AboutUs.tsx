import React from 'react';
import { motion } from 'framer-motion';
import { Award, Leaf, Users } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1612]/50 to-transparent pointer-events-none" />
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800"
                alt="Craftsmanship"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#1a1612]/20" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-40 md:h-40 border-2 border-[#c4a574]/40 rounded-2xl -z-10" />
          </motion.div>

          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#c4a574] uppercase tracking-[0.3em] font-semibold text-xs"
            >
              Our Story
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mt-4 mb-8 text-[#f5f0e8] leading-tight"
            >
              Crafting Spaces <br />
              <span className="text-[#c4a574]">Since 1987</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#e8e4dc]/80 leading-relaxed text-lg mb-6"
            >
              We are a family-owned furniture house dedicated to bringing warmth, quality, and timeless design into your home. For over three decades, we have partnered with skilled artisans and sustainable forests to create pieces that last generations.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-[#e8e4dc]/70 leading-relaxed mb-10"
            >
              Our brand stands for integrity in materials, respect for craft, and a belief that good furniture should feel like part of the family—beautiful, reliable, and made to age with grace.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {[
                { icon: Award, label: '24 Awards', sub: 'Design & Craft' },
                { icon: Leaf, label: 'Sustainable', sub: 'Sourced Materials' },
                { icon: Users, label: '50K+', sub: 'Happy Homes' },
              ].map(({ icon: Icon, label, sub }, i) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#252019]/60 border border-[#3d3529]"
                >
                  <div className="p-2 rounded-lg bg-[#c4a574]/15 text-[#c4a574]">
                    <Icon size={24} />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-[#f5f0e8]">{label}</p>
                    <p className="text-xs text-[#e8e4dc]/60 uppercase tracking-wider">{sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
