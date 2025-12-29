
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { id: 1, title: 'NEURA LUXURY', cat: 'Branding', img: 'https://picsum.photos/seed/neura/800/600' },
  { id: 2, title: 'ZENITH LABS', cat: 'Interface', img: 'https://picsum.photos/seed/zenith/800/600' },
  { id: 3, title: 'ORACLE RETAIL', cat: 'Growth', img: 'https://picsum.photos/seed/oracle/800/600' },
  { id: 4, title: 'VELOCITY OS', cat: 'Product', img: 'https://picsum.photos/seed/velocity/800/600' },
];

const Portfolio: React.FC = () => {
  return (
    <section id="works" className="py-32 px-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl font-bold">SELECTED WORKS</h2>
          <button className="text-[#DB6923] font-bold uppercase tracking-widest text-xs hover:underline">
            View Archive
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl aspect-[4/3] cursor-pointer"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8 }}
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#202020] to-transparent opacity-60" />
              <div className="absolute bottom-10 left-10 transition-transform duration-500 group-hover:-translate-y-2">
                <span className="text-[#DB6923] text-sm font-bold uppercase tracking-widest">{p.cat}</span>
                <h3 className="text-3xl font-bold text-white mt-2">{p.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
