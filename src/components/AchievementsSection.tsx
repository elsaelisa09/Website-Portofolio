import React, { useRef, useEffect, useState } from 'react';
import { Award } from 'lucide-react';

const AchievementsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollIntervalRef = useRef<NodeJS.Timeout>();
  
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
      description: "Designed the UI/UX for a mobile application called KiddieSafe, which enables parents to fully control their child's smartphone"
    },
    {
      title: "Guest Speaker | Pertamina Sobat Bumi Scholarship Talk",
      organization: "HMIF ITERA",
      year: "2024",
      description: "Invited as a guest speaker to share scholarship experiences and insights at the 'Informatics Goes to TPB (IGFTB)' event"
    },
    {
      title: "Recipient of DEB Grant by Pertamina",
      organization: "Pertamina Foundation",
      year: "2024",
      description: "Awarded funding through Pertamina's Desa Energi Berdikari (DEB) program in 2024 by the Sobat Bumi ITERA team."
    },
    {
      title: "Staff of PDD Division",
      organization: "HMIF ITERA",
      year: "2024",
      description: "Contributed as a staff member in the Public Relations and Documentation (PDD) Division of HMIF ITERA under the 2024 Sinergi Cabinet."
    },
  ];

  // Auto-scroll effect
  useEffect(() => {
    const startAutoScroll = () => {
      scrollIntervalRef.current = setInterval(() => {
        if (!isPaused && scrollContainerRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
          const isAtEnd = scrollLeft + clientWidth >= scrollWidth;
          
          if (isAtEnd) {
            scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            scrollContainerRef.current.scrollBy({ 
              left: 250, // Reduced scroll distance
              behavior: 'smooth' 
            });
          }
        }
      }, 3000);
    };

    startAutoScroll();
    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, [isPaused]);

  return (
    <section id="achievements" className="py-12 md:py-16 bg-dark-highlight">
      <div className="container px-4">
        <div className="mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-0 opacity-0 animate-fade-in">Achievements</h2>
        </div>
        
        <div 
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex overflow-x-auto scrollbar-hide gap-4 pb-2 opacity-0 animate-fade-in animation-delay-100"
        >
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[260px] h-[180px] md:w-[280px] md:h-[200px] bg-dark-card rounded-lg flex flex-col p-4"
            >
              <div className="flex items-start mb-2">
                <Award className="w-4 h-4 md:w-5 md:h-5 text-accent-purple mr-2 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-sm md:text-base leading-tight line-clamp-2 text-white">
                    {achievement.title}
                  </h3>
                  <div className="flex items-center text-xs text-white/70 space-x-1.5 mt-1">
                    <span className="truncate">{achievement.organization}</span>
                    <span className="w-1 h-1 rounded-full bg-white/40 flex-shrink-0"></span>
                    <span className="flex-shrink-0">{achievement.year}</span>
                  </div>
                </div>
              </div>
              <p className="text-white/80 text-xs md:text-sm flex-grow line-clamp-3 md:line-clamp-4 mt-1 break-words overflow-hidden">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;