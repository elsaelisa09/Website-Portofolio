"use client";

import React, { useCallback } from "react";
import { ChevronRight } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";

const AboutSection = () => {
  const allSkills = [
    "User Research",
    "Wireframing",
    "Prototyping",
    "Figma",
    "User Testing",
    "Design Systems",
    "TensorFlow",
    "NLP",
    "Python",
    "Prompt Engineering",
    "Pandas",
    "Scikit-learn",
    "SQL",
    "Tableau",
    "Data Visualization",
    "Jupyter",
    "Git/GitHub",
  ];

  return (
    <section
      id="about"
      className="relative w-full min-h-screen overflow-hidden bg-dark-bg/95 px-4 sm:px-6 py-8 md:py-12 scroll-mt-24"
    >
      {/* Particle Background Layer */}
      <ParticlesBackground />

      <div className="container relative z-10 max-w-6xl mx-auto flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          About <span className="text-accent-purple">Me</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          {/* Left Column */}
          <div className="lg:w-2/3 space-y-6">
            <div className="card p-5 md:p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-accent-cyan">
                <ChevronRight className="w-5 h-5" />
                My Journey
              </h3>
              <div className="space-y-3 text-white/80 text-sm leading-relaxed">
                <p>
                  I'm a 6th-semester Informatics Engineering student at ITERA
                  and a recipient of the 2024 Pertamina Sobat Bumi Scholarship.
                  Passionate about technology and information systems, I'm
                  currently focusing on:
                </p>
                <ul className="space-y-2 pl-5">
                  {[
                    "Developing expertise in AI and Data Engineering",
                    "Creating intuitive UI/UX designs with Figma",
                    "Staying current with emerging tech trends",
                    "Contributing to innovative tech projects",
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent-purple">▹</span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Skills Overview */}
          <div className="lg:w-1/3">
            <div className="card p-5 overflow-y-auto max-h-[calc(100vh-250px)] scrollbar-hide">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-accent-cyan">
                <ChevronRight className="w-5 h-5" />
                Skills Overview
              </h3>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 text-xs">
                {allSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-1.5 rounded-full bg-[#1a2b3a] text-[#a78bfa] font-medium tracking-wide shadow-md transition-colors duration-300 hover:bg-[#3f2b63] hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
