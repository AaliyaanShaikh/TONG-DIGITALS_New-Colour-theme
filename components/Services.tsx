
import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Globe, Megaphone, Zap, Layers, Cpu } from 'lucide-react';

const serviceList = [
  {
    icon: <Palette size={32} />,
    title: "Brand Alchemy",
    desc: "We don't just design logos; we create visual ecosystems that evoke visceral responses."
  },
  {
    icon: <Globe size={32} />,
    title: "Digital Architectures",
    desc: "High-performance interfaces built for immersion and conversion across all devices."
  },
  {
    icon: <Megaphone size={32} />,
    title: "Growth Engineering",
    desc: "Data-driven marketing that scales impact without sacrificing brand integrity."
  },
  {
    icon: <Zap size={32} />,
    title: "AI Synthesis",
    desc: "Leveraging custom neural models to personalize consumer experiences at scale."
  },
  {
    icon: <Layers size={32} />,
    title: "Content Mastery",
    desc: "Cinematic production and storytelling that turns browsers into true believers."
  },
  {
    icon: <Cpu size={32} />,
    title: "Future Proofing",
    desc: "Strategic consultancy for brands entering the Web3 and Metaverse space."
  }
];

const ServiceCard: React.FC<{ service: typeof serviceList[0], index: number }> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
      className="perspective-1000"
    >
      <div className="glass h-full p-8 rounded-3xl border border-white/5 group hover:border-[#DB6923]/40 transition-all duration-500 flex flex-col items-start gap-6">
        <div className="p-4 rounded-2xl bg-[#DB6923]/10 text-[#DB6923] group-hover:bg-[#DB6923] group-hover:text-white transition-all">
          {service.icon}
        </div>
        <h3 className="text-2xl font-bold">{service.title}</h3>
        <p className="text-[#EFEEEA]/50 leading-relaxed font-light">
          {service.desc}
        </p>
        <div className="mt-auto pt-6 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="text-[#DB6923] text-sm font-bold flex items-center gap-2">
            Explore Service →
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6 bg-[#202020]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#DB6923] uppercase tracking-[0.3em] font-bold text-xs"
            >
              Our Capabilities
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mt-4"
            >
              CRAFTING THE <br /> <span className="text-[#EFEEEA]/20">UNFORGETTABLE</span>
            </motion.h2>
          </div>
          <div className="hidden md:block">
            <div className="w-24 h-[1px] bg-white/20 mb-4" />
            <p className="text-sm text-[#EFEEEA]/40 uppercase tracking-widest">Est. 2024</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
