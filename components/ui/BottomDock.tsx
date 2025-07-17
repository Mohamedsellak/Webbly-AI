"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  User, 
  Briefcase, 
  Beaker, 
  Mail,
  Sparkles
} from 'lucide-react';

const navItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'services', icon: Briefcase, label: 'Services' },
  { id: 'global', icon: Mail, label: 'Global' },
  { id: 'innovation', icon: Beaker, label: 'Innovation' },
  { id: 'contact', icon: Sparkles, label: 'Contact' },
];

const BottomDock: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveTab(sectionId);
    }
  };

  return (
    <motion.div 
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl rounded-full px-4 py-3 flex justify-center items-center gap-2 w-fit"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      style={{
        boxShadow: `
          0 25px 50px -12px rgba(0, 0, 0, 0.8),
          0 0 0 1px rgba(255, 255, 255, 0.05),
          inset 0 1px 0 rgba(255, 255, 255, 0.1)
        `
      }}
    >
      {navItems.map((item) => {
        const IconComponent = item.icon;
        const isActive = activeTab === item.id;
        
        return (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`relative p-3 rounded-full transition-all duration-500 group overflow-hidden ${
              isActive 
                ? 'text-white scale-105 bg-white/10' 
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Glowing background for active state */}
            {isActive && (
              <>
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-b from-green-500 via-emerald-400 to-green-500/20 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
                <motion.div
                  className="absolute inset-0 bg-white/5 rounded-full border border-green-500/30"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              </>
            )}
            
            {/* Hover glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 rounded-full opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
            
            <IconComponent 
              size={22} 
              className={`relative z-10 transition-all duration-500 ${
                isActive 
                  ? 'drop-shadow-[0_0_12px_rgba(34,197,94,0.8)] filter' 
                  : 'group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]'
              }`}
            />
            
            {/* Enhanced tooltip */}
            <motion.div 
              className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-white/10 shadow-lg"
              initial={{ y: 10, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              style={{
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)'
              }}
            >
              {item.label}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90" />
            </motion.div>
            
            {/* Active indicator dot */}
            {isActive && (
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring", 
                  bounce: 0.6, 
                  duration: 0.8,
                  delay: 0.2 
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"
                  animate={{ 
                    boxShadow: [
                      "0 0 5px rgba(34,197,94,0.5)",
                      "0 0 15px rgba(34,197,94,0.8)",
                      "0 0 5px rgba(34,197,94,0.5)"
                    ]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
              </motion.div>
            )}
            
            {/* Ripple effect on click */}
            <motion.div
              className="absolute inset-0 rounded-full"
              whileTap={{
                background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)"
              }}
              transition={{ duration: 0.2 }}
            />
          </motion.button>
        );
      })}
    </motion.div>
  );
};

export default BottomDock;
