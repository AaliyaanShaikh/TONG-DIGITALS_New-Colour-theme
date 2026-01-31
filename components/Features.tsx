import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Truck, RefreshCw, Ruler, Palette, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Lifetime Warranty',
    description: 'We stand behind every piece. Structural frames and joinery are covered for life.',
  },
  {
    icon: Truck,
    title: 'White-Glove Delivery',
    description: 'Professional delivery, unpacking, and placement. We take care of the heavy lifting.',
  },
  {
    icon: RefreshCw,
    title: 'Easy Returns',
    description: 'Not the right fit? Return within 30 days for a full refund. No hassle.',
  },
  {
    icon: Ruler,
    title: 'Custom Dimensions',
    description: 'Many pieces can be made to your exact dimensions. Consult our team for quotes.',
  },
  {
    icon: Palette,
    title: 'Finishes & Fabrics',
    description: 'Choose from a range of woods, stains, and upholstery to match your space.',
  },
  {
    icon: Sparkles,
    title: 'Handcrafted Quality',
    description: 'Skilled artisans and quality materials ensure furniture that lasts decades.',
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 md:py-32 px-6 bg-[#1a1612]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-[#c4a574] uppercase tracking-[0.3em] font-semibold text-xs">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4 text-[#f5f0e8]">
            Built to Last, <span className="text-[#c4a574]">Designed to Live</span>
          </h2>
          <p className="text-[#e8e4dc]/70 mt-6 leading-relaxed">
            From warranty to delivery to customization, we make buying furniture simple and satisfying.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-8 rounded-2xl bg-[#252019]/50 border border-[#3d3529] hover:border-[#c4a574]/40 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-[#c4a574]/10 text-[#c4a574] w-fit mb-6 group-hover:bg-[#c4a574]/20 transition-colors">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-heading font-bold text-[#f5f0e8] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#e8e4dc]/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
