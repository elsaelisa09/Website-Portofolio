
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils";
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
      
      // Determine which section is in view
      const sections = ['home', 'about', 'achievements', 'projects', 'contact'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'MyWork', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      isScrolled ? "py-4 bg-dark-bg/80 backdrop-blur-lg shadow-md" : "py-6 bg-transparent"
    )}>
      <div className="container flex items-center justify-between">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              className={cn('nav-link', activeSection === link.href.substring(1) && 'active')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="flex md:hidden text-white focus:outline-none"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Scroll Progress Indicator */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent-purple to-accent-cyan w-full">
        <div className="h-full max-w-full origin-left scale-x-0 transform bg-gradient-to-r from-accent-purple to-accent-cyan" style={{
          transform: `scaleX(${typeof window !== 'undefined' ? window.scrollY / (document.body.scrollHeight - window.innerHeight) : 0})`
        }}></div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 bg-dark-bg/95 backdrop-blur-md flex flex-col justify-center items-center md:hidden transform transition-transform duration-300 ease-in-out",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col items-center space-y-6 text-center">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              className={cn(
                'text-xl font-medium transition-colors duration-300',
                activeSection === link.href.substring(1) 
                  ? 'text-white' 
                  : 'text-white/70 hover:text-white'
              )}
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
