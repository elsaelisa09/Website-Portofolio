
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import AchievementsSection from '@/components/AchievementsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Simulate a loader effect
  useEffect(() => {
    const body = document.body;
    body.classList.add('overflow-hidden');
    
    // Remove loader after timeout
    const timeout = setTimeout(() => {
      body.classList.remove('overflow-hidden');
    }, 1000);
    
    return () => {
      clearTimeout(timeout);
      body.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <div className="bg-dark-bg text-white min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AchievementsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
