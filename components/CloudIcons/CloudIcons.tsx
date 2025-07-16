import React from 'react';
import { motion } from 'framer-motion';

interface CloudIconsProps {
  className?: string;
}

const CloudIcons = ({ className = '' }: CloudIconsProps) => {
  const icons = [
    {
      icon: '🌥️',
      delay: 0,
      position: 'top-10 left-10',
      size: 'text-5xl',
      duration: 4
    },
    {
      icon: '⚡️',
      delay: 0.2,
      position: 'top-20 right-20',
      size: 'text-4xl',
      duration: 3.5
    },
    {
      icon: '☁️',
      delay: 0.4,
      position: 'bottom-20 left-1/4',
      size: 'text-6xl',
      duration: 5
    },
    {
      icon: '🌩️',
      delay: 0.6,
      position: 'top-1/3 right-1/4',
      size: 'text-5xl',
      duration: 4.5
    },
    {
      icon: '✨',
      delay: 0.8,
      position: 'bottom-10 right-10',
      size: 'text-4xl',
      duration: 3
    },
    {
      icon: '💫',
      delay: 1,
      position: 'top-1/2 left-1/3',
      size: 'text-5xl',
      duration: 4
    },
    {
      icon: '⭐️',
      delay: 1.2,
      position: 'bottom-1/3 right-1/3',
      size: 'text-4xl',
      duration: 3.5
    }
  ];

  return (
    <div className={`relative w-full h-full ${className}`}>
      {icons.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: [0, 1, 0.5],
            y: [20, -20, 20],
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className={`absolute ${item.position} ${item.size} transform-gpu`}
          style={{
            filter: 'blur(0px)',
            WebkitFilter: 'blur(0px)'
          }}
        >
          {item.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default CloudIcons;
