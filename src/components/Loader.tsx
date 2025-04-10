
import React, { useEffect, useState } from 'react';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!isLoading) return null;
  
  return (
    <div className={`fixed inset-0 bg-dark-bg z-50 flex items-center justify-center transition-opacity duration-500 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full border-4 border-white/10 border-t-accent-purple animate-spin mb-4"></div>
        <div className="text-gradient font-heading font-bold text-2xl">Alex Chen</div>
      </div>
    </div>
  );
};

export default Loader;
