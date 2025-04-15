import React from "react";
import { ArrowDown } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-24 md:pt-32 lg:pt-40 pb-10 px-4 sm:px-6"
    >
      {/* Particle Background Layer */}
      <ParticlesBackground />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/90 via-dark-bg/50 to-dark-bg/90 z-[1]" />

      <div className="container mx-auto relative z-10">
        {/* Mobile Photo */}
        <div className="md:hidden mb-12 flex justify-center opacity-0 animate-fade-in">
          <div className="relative">
            <div className="absolute -inset-3 bg-accent-purple/20 rounded-full blur-lg animate-pulse" />
            <img
              src="/fotoelsa.jpg"
              alt="Elsa Profile"
              className="relative z-10 w-64 h-64 rounded-full object-cover shadow-xl border-4 border-accent-purple/20"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-8 md:gap-12">
          {/* Text Content */}
          <div className="md:w-2/3 order-2 md:order-1">
            <div className="mb-8 opacity-0 animate-fade-in">
              <span className="inline-block py-2 px-4 rounded-full bg-accent-purple/10 text-accent-purple text-sm font-medium mb-6 backdrop-blur-sm border border-accent-purple/20">
                UI/UX Designer | AI Enthusiast | Data Analyst
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight text-white">
                Creating{" "}
                <span className="text-gradient bg-gradient-to-r from-accent-purple to-accent-cyan">
                  meaningful
                </span>{" "}
                digital experiences
              </h1>
              <p className="text-sm text-white/80 mb-8">Hi, I'm Elsa.</p>
            </div>

            <div className="flex flex-col items-center gap-6 opacity-0 animate-fade-in animation-delay-200">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a
                  href="#projects"
                  className="button-primary hover:shadow-lg hover:shadow-accent-purple/30 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="button-outline hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Say Hello
                </a>
              </div>

              <div className="w-full flex justify-center pt-4">
                <a
                  href="#about"
                  className="flex flex-col items-center group"
                  aria-label="Scroll down"
                >
                  <span className="text-sm text-white/70 mb-2 group-hover:text-accent-purple transition-colors duration-300">
                    Scroll Down
                  </span>
                  <ArrowDown
                    size={20}
                    className="animate-bounce text-white/70 group-hover:text-accent-purple transition-colors duration-300"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Photo */}
          <div className="hidden md:block opacity-0 animate-fade-in animation-delay-300 order-1 md:order-2 relative">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent-purple/30 rounded-full blur-xl animate-pulse" />
              <img
                src="/fotoelsa.jpg"
                alt="Elsa Profile"
                className="relative z-10 w-72 h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full object-cover shadow-2xl border-4 border-accent-purple/30 transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
