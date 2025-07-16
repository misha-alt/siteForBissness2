import React, { useState, useEffect, ReactNode } from 'react';

interface MouseParallaxProps {
  children: ReactNode;
  strength?: number;
}

const MouseParallax: React.FC<MouseParallaxProps> = ({ 
  children, 
  strength = 0.05 
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.clientX) * strength;
      const y = (window.innerHeight / 2 - e.clientY) * strength;
      
      setPosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [strength]);
  
  return (
    <div 
      className="mouse-parallax"
      style={{ 
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {children}
    </div>
  );
};

export default MouseParallax;