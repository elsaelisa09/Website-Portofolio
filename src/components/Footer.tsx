
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
    <footer className="bg-dark-bg py-10 border-t border-white/10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Logo className="mb-3" />
            <p className="text-white/60 text-sm">
              UI/UX Designer | AI Enthusiast | Data Analyst
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button 
              onClick={scrollToTop}
              className="mb-4 p-3 rounded-full bg-dark-highlight text-white/70 hover:text-white hover:bg-dark-card transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
            
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Alex Chen. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
