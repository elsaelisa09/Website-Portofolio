import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-24 md:pt-32 lg:pt-40 pb-10 px-4 sm:px-6">
      <div className="container mx-auto">
        {/* Mobile: Photo at the top */}
        <div className="md:hidden mb-12 flex justify-center opacity-0 animate-fade-in">
          <img 
            src="/fotoelsa.jpg" 
            alt="Foto Elsa" 
            className="w-64 h-64 rounded-full object-cover shadow-lg border-4 border-accent-purple/30"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-10 md:gap-12">
          {/* Left: Text content */}
          <div className="md:w-2/3 order-2 md:order-1">
            <div className="mb-8 opacity-0 animate-fade-in">
              <span className="inline-block py-2 px-4 rounded-full bg-accent-purple/10 text-accent-purple text-sm font-medium mb-6">
                UI/UX Designer | AI Enthusiast | Data Analyst
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
                Creating <span className="text-gradient">meaningful</span> digital experiences
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-8">
                Hi, I'm Elsa. I design intuitive interfaces, explore AI possibilities, and translate data into actionable insights.
              </p>
            </div>

            <div className="flex flex-col items-center gap-6 opacity-0 animate-fade-in animation-delay-200">
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <a href="#projects" className="button-primary">View My Work</a>
                <a href="#contact" className="button-outline">Get In Touch</a>
              </div>
              
              {/* Centered Scroll Down */}
              <div className="w-full flex justify-center mt-2">
                <a 
                  href="#about" 
                  className="flex flex-col items-center text-white/50 hover:text-white transition-colors duration-300 group"
                  aria-label="Scroll to About section"
                >
                  <span className="text-sm mb-1 group-hover:text-accent-purple transition-colors">Scroll Down</span>
                  <ArrowDown size={20} className="animate-bounce group-hover:text-accent-purple transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Photo - hidden on mobile */}
          <div className="hidden md:block opacity-0 animate-fade-in animation-delay-300 order-1 md:order-2">
            <img 
              src="/fotoelsa.jpg" 
              alt="Foto Elsa" 
              className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-lg border-4 border-accent-purple/30"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;