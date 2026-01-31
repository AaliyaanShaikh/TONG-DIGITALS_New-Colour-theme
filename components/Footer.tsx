import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-24 pb-12 px-6 bg-[#1a1612] border-t border-[#3d3529]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
          <div className="max-w-md">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-8 text-[#f5f0e8]">
              Find Your <br />
              <span className="text-[#c4a574]">Perfect Piece</span>
            </h2>
            <a
              href="mailto:hello@timberandoak.com"
              className="inline-flex items-center gap-3 text-xl md:text-2xl font-light text-[#e8e4dc]/80 hover:text-[#c4a574] transition-colors group"
            >
              hello@timberandoak.com
              <span className="w-10 h-10 rounded-full border border-[#3d3529] flex items-center justify-center group-hover:border-[#c4a574] group-hover:bg-[#c4a574]/10 transition-all">
                <ArrowUpRight size={18} />
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h4 className="text-[#c4a574]/80 text-xs font-semibold uppercase tracking-[0.2em] mb-6">
                Visit
              </h4>
              <ul className="space-y-4 text-[#e8e4dc]/70">
                <li className="flex items-center gap-3">
                  <MapPin size={18} className="text-[#c4a574] flex-shrink-0" />
                  <span>123 Design District, Brooklyn, NY</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-[#c4a574] flex-shrink-0" />
                  <span>hello@timberandoak.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#c4a574]/80 text-xs font-semibold uppercase tracking-[0.2em] mb-6">
                Follow
              </h4>
              <ul className="space-y-4 text-[#e8e4dc]/70">
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-3 hover:text-[#c4a574] transition-colors"
                  >
                    <Instagram size={18} className="text-[#c4a574] flex-shrink-0" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-3 hover:text-[#c4a574] transition-colors"
                  >
                    <span className="w-[18px] h-[18px] flex items-center justify-center text-[#c4a574] text-xs font-bold">
                      P
                    </span>
                    Pinterest
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-[#3d3529] text-[#e8e4dc]/40 text-sm uppercase tracking-wider">
          <p>© {new Date().getFullYear()} Timber & Oak. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/#about" className="hover:text-[#c4a574] transition-colors">
              About
            </Link>
            <a href="#" className="hover:text-[#c4a574] transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-[#c4a574] transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
