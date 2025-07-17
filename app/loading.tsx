"use client";

import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center z-50">
      <div className="text-center">
        {/* Enhanced Spinner with Multiple Rings */}
        <div className="relative w-20 h-20 mx-auto mb-8">
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 w-20 h-20 border-4 border-green-500/20 border-t-green-500 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          {/* Middle ring */}
          <motion.div
            className="absolute inset-2 w-16 h-16 border-3 border-emerald-400/30 border-r-emerald-400 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          {/* Inner ring */}
          <motion.div
            className="absolute inset-4 w-12 h-12 border-2 border-green-300/40 border-b-green-300 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          {/* Center dot */}
          <motion.div
            className="absolute inset-8 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Brand Name with Enhanced Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-3xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-emerald-500 bg-clip-text text-transparent mb-4"
        >
          Webbly AI
        </motion.h2>

        {/* Loading Text with Typewriter Effect */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-green-200/80 text-lg font-medium"
        >
          <motion.span
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            Initializing AI Systems...
          </motion.span>
        </motion.p>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-green-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
