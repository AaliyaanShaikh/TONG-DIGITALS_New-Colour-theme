import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProducts } from '../data/products';

const FeaturedProducts: React.FC = () => {
  const featured = getFeaturedProducts();

  return (
    <section id="featured" className="py-24 md:py-32 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <span className="text-[#c4a574] uppercase tracking-[0.3em] font-semibold text-xs">
              Curated Picks
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4 text-[#f5f0e8]">
              Featured <span className="text-[#c4a574]">Products</span>
            </h2>
          </div>
          <Link
            to="/"
            state={{ scrollTo: 'products' }}
            className="inline-flex items-center gap-2 text-[#c4a574] font-semibold hover:text-[#e8d4a8] transition-colors"
          >
            View All Products <ArrowRight size={18} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={`/product/${product.id}`} className="group block">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#252019] mb-5">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs text-[#c4a574]/80 uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="text-xl font-heading font-bold text-[#f5f0e8] mt-1 group-hover:text-[#c4a574] transition-colors">
                  {product.name}
                </h3>
                <p className="text-[#c4a574] font-semibold mt-2">
                  ${product.price.toLocaleString()}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
