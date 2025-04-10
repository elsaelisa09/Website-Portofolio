
import React from 'react';
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex items-center", className)}>
      <img 
        src="/Logo.png" 
        alt="Logo" 
        className="w-10 h-10 rounded-full object-cover"
      />
      <span className="ml-2 font-heading font-bold text-white">Elsa Elisa Yohana Sianturi</span>
    </div>
  );
};

export default Logo;
