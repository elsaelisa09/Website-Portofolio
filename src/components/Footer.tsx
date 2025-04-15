import React from 'react';
import { ArrowUp } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-dark-bg py-4 border-t border-white/10 relative z-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left Side */}
        <div className="text-center md:text-left">
          <Logo className="mb-1" />
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center md:items-end gap-1">
          <button 
            onClick={scrollToTop}
            className="p-2 rounded-full bg-dark-highlight text-white/70 hover:text-white hover:bg-dark-card transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Elsa. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
