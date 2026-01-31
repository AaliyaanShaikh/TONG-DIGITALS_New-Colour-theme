import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'About', href: '/', hash: 'about' },
    { name: 'Features', href: '/', hash: 'features' },
    { name: 'Featured', href: '/', hash: 'featured' },
    { name: 'Products', href: '/', hash: 'products' },
  ];

  const isHome = location.pathname === '/';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div
          className={`px-6 py-3 rounded-2xl flex items-center justify-between transition-all duration-500 ${
            scrolled ? 'bg-[#1a1612]/95 backdrop-blur-xl border border-[#3d3529]/50 shadow-xl' : 'bg-transparent'
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-[#c4a574] flex items-center justify-center group-hover:bg-[#d4b584] transition-colors">
              <span className="text-[#1a1612] font-heading font-bold text-sm">T</span>
            </div>
            <span className="text-xl font-heading font-bold tracking-tight text-[#f5f0e8]">
              Timber & Oak
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              isHome ? (
                <a
                  key={link.name}
                  href={`#${link.hash}`}
                  className="text-sm font-medium text-[#e8e4dc]/80 hover:text-[#c4a574] transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={{ pathname: '/', hash: link.hash }}
                  className="text-sm font-medium text-[#e8e4dc]/80 hover:text-[#c4a574] transition-colors"
                >
                  {link.name}
                </Link>
              )
            )}
            <Link
              to="/"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#c4a574] text-[#1a1612] text-sm font-heading font-bold hover:bg-[#d4b584] transition-colors"
            >
              <ShoppingBag size={18} /> Shop
            </Link>
          </div>

          <button
            className="md:hidden text-[#f5f0e8] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full mt-2 mx-6 py-6 px-6 rounded-2xl bg-[#1a1612]/98 backdrop-blur-xl border border-[#3d3529] overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) =>
                isHome ? (
                  <a
                    key={link.name}
                    href={`#${link.hash}`}
                    className="text-lg font-medium text-[#f5f0e8] py-2 hover:text-[#c4a574] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={{ pathname: '/', hash: link.hash }}
                    className="text-lg font-medium text-[#f5f0e8] py-2 hover:text-[#c4a574] transition-colors"
                  >
                    {link.name}
                  </Link>
                )
              )}
              <Link
                to="/"
                className="mt-4 w-full py-4 rounded-xl bg-[#c4a574] text-[#1a1612] font-heading font-bold text-center flex items-center justify-center gap-2"
              >
                <ShoppingBag size={20} /> Shop All
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
