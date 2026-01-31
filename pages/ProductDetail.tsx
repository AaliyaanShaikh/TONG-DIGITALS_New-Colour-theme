import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ShoppingBag, Truck, Check } from 'lucide-react';
import { getProductById } from '../data/products';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#1a1612] flex flex-col items-center justify-center px-6">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl font-heading font-bold text-[#f5f0e8] mb-4">Product not found</h1>
          <Link to="/" className="text-[#c4a574] font-semibold hover:underline">
            Back to Home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#1a1612]">
      <Navbar />
      <main className="pt-24 md:pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#e8e4dc]/80 hover:text-[#c4a574] transition-colors mb-12 font-medium"
          >
            <ArrowLeft size={20} /> Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#252019]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                        selectedImage === i
                          ? 'border-[#c4a574] ring-2 ring-[#c4a574]/30'
                          : 'border-transparent hover:border-[#3d3529]'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:sticky lg:top-32"
            >
              <span className="text-xs text-[#c4a574] uppercase tracking-[0.3em] font-semibold">
                {product.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-[#f5f0e8] mt-2 mb-6 leading-tight">
                {product.name}
              </h1>
              <p className="text-2xl md:text-3xl font-heading font-bold text-[#c4a574] mb-8">
                ${product.price.toLocaleString()}
              </p>
              <p className="text-[#e8e4dc]/80 leading-relaxed text-lg mb-10">
                {product.longDescription}
              </p>

              {product.material && (
                <div className="grid grid-cols-2 gap-4 mb-10 text-sm">
                  {product.material && (
                    <div className="p-4 rounded-xl bg-[#252019]/60 border border-[#3d3529]">
                      <p className="text-[#e8e4dc]/50 uppercase tracking-wider mb-1">Material</p>
                      <p className="text-[#f5f0e8] font-medium">{product.material}</p>
                    </div>
                  )}
                  {product.dimensions && (
                    <div className="p-4 rounded-xl bg-[#252019]/60 border border-[#3d3529]">
                      <p className="text-[#e8e4dc]/50 uppercase tracking-wider mb-1">Dimensions</p>
                      <p className="text-[#f5f0e8] font-medium">{product.dimensions}</p>
                    </div>
                  )}
                  {product.color && (
                    <div className="p-4 rounded-xl bg-[#252019]/60 border border-[#3d3529]">
                      <p className="text-[#e8e4dc]/50 uppercase tracking-wider mb-1">Color</p>
                      <p className="text-[#f5f0e8] font-medium">{product.color}</p>
                    </div>
                  )}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center border border-[#3d3529] rounded-xl overflow-hidden bg-[#252019]/50">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-4 py-3 text-[#e8e4dc]/80 hover:text-[#c4a574] hover:bg-[#3d3529] transition-colors"
                  >
                    −
                  </button>
                  <span className="px-6 py-3 font-heading font-bold text-[#f5f0e8] min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-4 py-3 text-[#e8e4dc]/80 hover:text-[#c4a574] hover:bg-[#3d3529] transition-colors"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#c4a574] text-[#1a1612] font-heading font-bold hover:bg-[#d4b584] transition-colors disabled:opacity-70"
                >
                  {addedToCart ? (
                    <>
                      <Check size={22} /> Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={22} /> Add to Cart
                    </>
                  )}
                </button>
              </div>

              <div className="mt-8 flex items-center gap-3 text-[#e8e4dc]/70 text-sm">
                <Truck size={20} className="text-[#c4a574] flex-shrink-0" />
                <span>Free white-glove delivery on orders over $1,000. 30-day returns.</span>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
