
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'thumbnail' | 'full';
}

const Logo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
  const sizeMap = {
    sm: "h-8 md:h-10",
    md: "h-12 md:h-16",
    lg: "h-20 md:h-24"
  };

  const logoUrl = "https://i.ibb.co/N2QBPDFB/METRO-4.png";

  return (
    <div className={`flex items-center justify-start transition-all duration-500 ${className} ${sizeMap[size]}`}>
      <img 
        src={logoUrl} 
        alt="Metro Virtual Tours" 
        className="h-full w-auto object-contain transition-all duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
        style={{ filter: 'brightness(0) invert(1)' }}
      />
    </div>
  );
};

export default Logo;
