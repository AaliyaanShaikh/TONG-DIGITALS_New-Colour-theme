
import React from 'react';
import { Instagram, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-32 pb-12 px-6 bg-[#202020] border-t border-white/5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-16 mb-32">
          <div className="max-w-2xl">
            <h2 className="text-6xl md:text-8xl font-bold leading-tight mb-12">
              READY TO <br /> <span className="text-[#DB6923]">ASCEND?</span>
            </h2>
            <button className="flex items-center gap-4 text-2xl md:text-4xl font-light hover:text-[#DB6923] transition-colors group">
              hello@tong.digital
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#DB6923] group-hover:border-[#DB6923] transition-all">
                <ArrowUpRight />
              </div>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-x-20 gap-y-10">
            <div>
              <h4 className="text-[#EFEEEA]/30 text-xs font-bold uppercase tracking-widest mb-6">Offices</h4>
              <ul className="space-y-4 text-sm">
                <li>Los Angeles</li>
                <li>London</li>
                <li>Tokyo</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#EFEEEA]/30 text-xs font-bold uppercase tracking-widest mb-6">Social</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-2 cursor-pointer hover:text-[#DB6923] transition-colors">
                  <Instagram size={16} /> Instagram
                </li>
                <li className="flex items-center gap-2 cursor-pointer hover:text-[#DB6923] transition-colors">
                  <Twitter size={16} /> Twitter
                </li>
                <li className="flex items-center gap-2 cursor-pointer hover:text-[#DB6923] transition-colors">
                  <Linkedin size={16} /> LinkedIn
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-[#EFEEEA]/20 text-xs uppercase tracking-widest">
          <p>© 2024 TONG DIGITALS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
