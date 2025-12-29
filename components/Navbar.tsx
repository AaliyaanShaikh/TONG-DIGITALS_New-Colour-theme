
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Manifesto', href: '#manifesto' },
    { name: 'Services', href: '#services' },
    { name: 'Works', href: '#works' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className={`glass px-6 py-3 rounded-full flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'shadow-2xl scale-[0.98]' : 'scale-100'
        }`}>
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 orange-gradient rounded-md rotate-45 flex items-center justify-center">
              <span className="text-white font-bold text-xs -rotate-45">T</span>
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase">Tong Digitals</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-[#DB6923] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="px-6 py-2 orange-gradient rounded-full text-white text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-opacity">
              Start Project <ArrowUpRight size={16} />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-[#EFEEEA]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass absolute top-full left-0 w-full mt-2 py-8 px-6 overflow-hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-bold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full py-4 orange-gradient rounded-xl text-white font-bold">
                Work With Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
