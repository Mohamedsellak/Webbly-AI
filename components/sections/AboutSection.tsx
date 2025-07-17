"use client";
import React from "react";
import { motion } from "motion/react";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function AboutSection() {
  const aboutText = "Webbly AI is a leading technology company specializing in artificial intelligence, cloud solutions, and digital transformation services. We empower businesses to harness the power of AI and modern technology to achieve unprecedented growth and efficiency.";

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Happy Clients" },
    { number: "50+", label: "AI Solutions Deployed" },
    { number: "99.9%", label: "Uptime Guarantee" },
  ];

  return (
    <div className="py-20 px-4 relative" id="about">
      {/* Background Sparkles */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="about-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#a855f7"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            About Webbly AI
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <TextGenerateEffect
              words={aboutText}
              className="text-lg md:text-xl text-purple-200 leading-relaxed"
            />
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-purple-900/30 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-6 hover:border-purple-400/40 transition-all duration-300 group-hover:scale-105">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {stat.number}
                </div>
                <div className="text-purple-200 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-purple-900/20 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-purple-200 leading-relaxed">
              To democratize artificial intelligence and make cutting-edge technology 
              accessible to businesses of all sizes, enabling them to compete and thrive 
              in the digital economy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-purple-900/20 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-purple-200 leading-relaxed">
              To be the global leader in AI-powered business solutions, creating a future 
              where intelligent technology seamlessly integrates with human creativity 
              and innovation.
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-xl text-purple-200 mb-8">
            Ready to transform your business with AI-powered solutions?
          </p>
          <HoverBorderGradient
            containerClassName="rounded-full"
            className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-10 py-4 font-medium text-lg hover:from-purple-700 hover:to-violet-700"
          >
            Start Your Journey
          </HoverBorderGradient>
        </motion.div>
      </div>
    </div>
  );
}
