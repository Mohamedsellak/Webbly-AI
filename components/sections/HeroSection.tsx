"use client";
import React from "react";
import { motion } from "motion/react";
import { Highlight } from "@/components/ui/hero-highlight";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { GlobeDemo } from "@/components/ui/globe";



export default function HeroSection() {

  return (
    <div className="min-h-screen relative flex items-center px-4 lg:px-8 xl:px-16 py-20">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-around gap-8 lg:gap-16">
        {/* Left Column - Content */}
        <div className="flex flex-col space-y-8 flex-1 max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 backdrop-blur-sm">
              <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mr-2 animate-pulse" />
              <span className="text-sm font-medium text-green-300">AI-Powered Solutions</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [20, -5, 0] }}
            transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.2] tracking-tight">
              <span className="text-neutral-700 dark:text-white block">
                Transform Your
              </span>
              <span className="text-neutral-700 dark:text-white">
                Business with{" "}
              </span>
              <Highlight className="text-black dark:text-white">
                Webbly AI
              </Highlight>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl lg:text-2xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl"
          >
            Intelligent IT Services & AI Solutions for the Modern Enterprise
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-12 py-4 text-lg shadow-xl"
            >
              Get Started
            </HoverBorderGradient>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-4 border-2 border-green-400/30 text-green-400 rounded-full hover:border-green-400/60 hover:bg-green-400/5 transition-all duration-300 font-semibold text-lg backdrop-blur-sm"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Stats or Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="pt-8 flex items-center gap-8 text-sm text-neutral-500 dark:text-neutral-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Trusted by 500+ companies</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span>99.9% Uptime</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Globe */}
        <div className="flex justify-center lg:justify-end flex-1 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="relative w-full max-w-[500px] h-[400px] md:h-[500px] lg:h-[550px]"
          >
            <GlobeDemo />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Bottom Center */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-green-400/40 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-gradient-to-b from-green-400 to-transparent rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
