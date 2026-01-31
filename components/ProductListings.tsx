import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const ProductListings: React.FC = () => {
  return (
    <section id="products" className="py-24 md:py-32 px-6 bg-[#1a1612]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-[#c4a574] uppercase tracking-[0.3em] font-semibold text-xs">
            The Collection
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4 text-[#f5f0e8]">
            All <span className="text-[#c4a574]">Products</span>
          </h2>
          <p className="text-[#e8e4dc]/70 mt-6 leading-relaxed">
            Browse our full range of furniture—dining, seating, storage, and more.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 8) * 0.06 }}
            >
              <Link to={`/product/${product.id}`} className="group block">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#252019] mb-4">
                  <motion.img
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.4 }}
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs text-[#c4a574]/80 uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="text-lg font-heading font-bold text-[#f5f0e8] mt-1 group-hover:text-[#c4a574] transition-colors line-clamp-2">
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

export default ProductListings;
