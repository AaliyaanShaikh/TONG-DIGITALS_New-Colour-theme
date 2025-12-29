
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface FloatingElementProps {
  className?: string;
  color?: string;
  size?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  parallaxSpeed?: number;
}

const FloatingElement: React.FC<FloatingElementProps> = ({ 
  className = "", 
  color = "#DB6923", 
  size = "200px", 
  top, left, right, bottom,
  parallaxSpeed = 0.5 
}) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200 * parallaxSpeed]);

  return (
    <motion.div
      style={{
        position: 'absolute',
        width: size,
        height: size,
        top, left, right, bottom,
        background: `radial-gradient(circle, ${color}33 0%, transparent 70%)`,
        borderRadius: '50%',
        zIndex: 0,
        filter: 'blur(40px)',
        y,
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={className}
    />
  );
};

export default FloatingElement;
