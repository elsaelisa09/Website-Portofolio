
import React, { useRef } from 'react';
import { Award, ChevronLeft, ChevronRight } from 'lucide-react';

const AchievementsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const achievements = [
    {
      title: "Awardee of the 2024 Pertamina Sobat Bumi Scholarship",
      organization: "Pertamina Foundation",
      year: "2024",
      description: "Recognized for academic excellence and commitment to environmental sustainability."
    },
    {
      title: "2nd Place Winner at Point Project 2.0 by HMIF 2024",
      organization: "HMIF ITERA",
      year: "2024",
      description: "Designed the UI/UX for a mobile application called KiddieSafe, which enables parents to fully manage and control their child's smartphone usage to help prevent cyberbullying"
    },
    {
      title: "Guest Speaker | Pertamina Sobat Bumi Scholarship Talk",
      organization: "HMIF ITERA",
      year: "2024",
      description: "Invited as a guest speaker to share scholarship experiences and insights at the 'Informatics Goes to TPB (IGFTB)' event, representing the Pertamina Sobat Bumi Scholarship awardees"
    },
    {
      title: "Recipient of DEB Grant by Pertamina",
      organization: "Pertamina Foundation",
      year: "2024",
      description: "Awarded funding through Pertamina's Desa Energi Berdikari (DEB) program in 2024 for a community-based PLTS (Solar Power Plant) proposal submitted by the Sobat Bumi ITERA team."
    },
    {
      title: "Staff of PDD Division ",
      organization: "HMIF ITERA",
      year: "2024",
      description: "Contributed as a staff member in the Public Relations and Documentation (PDD) Division of HMIF ITERA under the 2024 Sinergi Cabinet, focusing on media content creation, event coverage, and organizational branding."
    },
  ];
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === 'left' ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="achievements" className="py-20 bg-dark-highlight">
      <div className="container">
        <div className="flex items-center justify-between mb-10">
          <h2 className="section-title mb-0 opacity-0 animate-fade-in">Achievements</h2>
          
          <div className="flex items-center space-x-2 opacity-0 animate-fade-in">
            <button 
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-dark-card text-white/70 hover:text-white hover:bg-dark-card transition-colors duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-dark-card text-white/70 hover:text-white hover:bg-dark-card transition-colors duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide gap-6 pb-4 -mx-4 px-4 opacity-0 animate-fade-in animation-delay-100"
        >
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[320px] card flex flex-col h-full"
            >
              <div className="flex items-start mb-4">
                <Award className="w-6 h-6 text-accent-purple mr-2 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-lg">{achievement.title}</h3>
                  <div className="flex items-center text-sm text-white/70 space-x-2">
                    <span>{achievement.organization}</span>
                    <span className="w-1 h-1 rounded-full bg-white/40"></span>
                    <span>{achievement.year}</span>
                  </div>
                </div>
              </div>
              <p className="text-white/80 text-sm flex-grow">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
