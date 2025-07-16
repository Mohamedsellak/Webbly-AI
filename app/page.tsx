'use client';

import React from 'react';
import type { ReactElement } from 'react';
import { motion } from 'framer-motion';
import Aurora from '@/components/Aurora/Aurora';
import Orb from '@/components/Orb/Orb';
import SplashCursor from '@/components/SplashCursor/SplashCursor';
import SplitText from '@/components/SplitText/SplitText';
import BlurText from '@/components/BlurText/BlurText';
import CurvedLoop from '@/components/CurvedLoop/CurvedLoop';
import GradientText from '@/components/GradientText/GradientText';
import DecryptedText from '@/components/DecryptedText/DecryptedText';
// import RotatingText from '@/components/RotatingText/RotatingText';
// import ProfileCard from '@/components/ProfileCard/ProfileCard';
import Navbar from '@/components/Navbar/Navbar';
import { HeroParallaxDemo } from '@/components/HeroParallax/HeroParallax';
import { IconCloudDemo } from '@/components/magicui/IconCloudDemo';
// import TextGenerateEffectDemo from '@/components/TextGenerateEffect/TextGenerateEffectDemo';

export default function Home(): ReactElement {
  return (
    <main className="relative min-h-screen bg-[#0A0A0F] text-white overflow-x-hidden">
      {/* Global Elements */}
      <SplashCursor />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-purple-900/20 via-transparent to-emerald-900/20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10" />
        <Aurora />
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center px-4 pt-20">
          <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
              className="relative text-left space-y-10"
            >
              <div className="space-y-8">
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-emerald-500/10 border border-purple-500/20 relative overflow-hidden group hover:scale-105 transform transition-transform duration-300"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-emerald-500/10 to-purple-500/10 rounded-full"
                      animate={{
                        backgroundPosition: ['200% 50%', '-100% 50%'],
                      }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    <span className="relative flex items-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-400 to-emerald-400"
                      />
                      <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-emerald-400 text-transparent bg-clip-text">
                        Next-Gen Enterprise AI
                      </span>
                    </span>
                  </motion.div>
                </div>

                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="relative z-10"
                  >
                    <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight">
                      Elevate Business with{' '}
                      <span className="relative inline-block">
                        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-emerald-400 to-purple-400 animate-gradient-x">
                          Intelligent Solutions
                        </span>
                        <motion.span
                          className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-emerald-400/20 to-purple-400/20 blur-2xl"
                          animate={{
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                        />
                      </span>
                    </h1>
                  </motion.div>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-gray-300 max-w-xl leading-relaxed"
                >
                  Transform your business landscape with our enterprise-grade AI solutions. 
                  We combine cutting-edge technology with deep industry expertise to deliver 
                  measurable results and drive sustainable growth.
                </motion.p>
              </div>

              {/* Enhanced CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <button className="group relative px-8 py-4 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-full" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                  <span className="relative font-semibold">Start Your Project</span>
                </button>
                <button className="group relative px-8 py-4 rounded-full border border-white/10 text-white font-medium hover:border-white/20 transition-all duration-300">
                  <span className="relative z-10 flex items-center gap-2">
                    Schedule Demo
                    <motion.span
                      className="inline-block"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                </button>
              </motion.div>
            </motion.div>

            {/* Right Column - Visual Elements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative h-[600px] w-full flex items-center justify-center">
                {/* Main Orb */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: 360
                  }}
                  transition={{ 
                    scale: {
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "reverse"
                    },
                    rotate: {
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }
                  }}
                  className="relative w-[500px] h-[500px]"
                >
                  <Orb />
                </motion.div>

                {/* Secondary Orbs */}
                <motion.div
                  initial={{ x: -100, y: -100 }}
                  animate={{ 
                    scale: [0.6, 0.8, 0.6],
                    rotate: -360,
                    x: -100,
                    y: -100
                  }}
                  transition={{ 
                    scale: {
                      duration: 12,
                      repeat: Infinity,
                      repeatType: "reverse"
                    },
                    rotate: {
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear"
                    }
                  }}
                  className="absolute w-[300px] h-[300px] opacity-60"
                >
                  <Orb />
                </motion.div>
                <motion.div
                  initial={{ x: 80, y: 80 }}
                  animate={{ 
                    scale: [0.5, 0.7, 0.5],
                    rotate: 360,
                    x: 80,
                    y: 80
                  }}
                  transition={{ 
                    scale: {
                      duration: 10,
                      repeat: Infinity,
                      repeatType: "reverse"
                    },
                    rotate: {
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear"
                    }
                  }}
                  className="absolute w-[250px] h-[250px] opacity-50"
                >
                  <Orb />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="flex flex-col items-center gap-2">
            <SplitText
              text="Scroll to explore"
              className="text-sm text-gray-400"
              splitType="chars"
            />
            <div className="relative">
              <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start p-1">
                <div className="w-1 h-2 bg-white/60 rounded-full animate-scroll" />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-white/10 blur-sm" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* About Section */}
      <div className="relative py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <div className="relative inline-block">
              <div className="absolute -inset-x-10 -inset-y-4 bg-gradient-to-r from-purple-500/10 to-emerald-500/10 rounded-xl blur-xl" />
              <GradientText className="relative text-4xl lg:text-6xl font-bold tracking-tight leading-tight px-4 py-2">
                Pioneering Tomorrow&apos;s
                <br />
                Digital Landscape
              </GradientText>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/5 to-emerald-500/5 rounded-lg blur-lg" />
                  <BlurText
                    text="Enterprise Technology Excellence"
                    className="relative text-4xl font-bold text-white bg-clip-text"
                    animateBy="words"
                  />
                </div>
                <div className="relative backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
                  <DecryptedText 
                    text="We leverage cutting-edge technologies to deliver transformative enterprise solutions. Our comprehensive tech stack enables us to tackle complex challenges and drive innovation across industries."
                    className="text-xl text-gray-300 leading-relaxed"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Column - Icon Cloud */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative min-h-[600px] flex items-center justify-center group"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/10 via-emerald-500/10 to-purple-500/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-full h-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 transition-all duration-300 group-hover:border-white/20">
                <IconCloudDemo />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center space-y-6 mb-20"
          >
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-emerald-400"
              />
              <span className="text-sm font-medium text-gray-300">Enterprise Solutions</span>
            </div>
            <GradientText className="relative text-4xl lg:text-6xl font-bold tracking-tight leading-tight px-4 py-2">
              Our Services
            </GradientText>
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Empowering businesses with innovative technology solutions that drive growth and transformation
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 mb-16">
            {[
              {
                title: "Web Development",
                desc: "Modern web applications built with cutting-edge technologies for optimal performance and user experience",
                stack: ["Next.js", "React", "Node.js"],
                icon: "🌐",
                features: ["Responsive Design", "SEO Optimization", "Performance Tuning"]
              },
              {
                title: "Mobile Development",
                desc: "Native and cross-platform mobile experiences that delight users across all devices",
                stack: ["React Native", "Flutter", "Swift"],
                icon: "📱",
                features: ["Native Performance", "Cross-Platform", "Offline Support"]
              },
              {
                title: "AI Solutions",
                desc: "Intelligent systems powered by machine learning to automate and enhance business processes",
                stack: ["TensorFlow", "PyTorch", "OpenAI"],
                icon: "🤖",
                features: ["Machine Learning", "Natural Language", "Computer Vision"]
              },
              {
                title: "Cloud Architecture",
                desc: "Scalable and secure cloud infrastructure designed for enterprise needs",
                stack: ["AWS", "Azure", "GCP"],
                icon: "☁️",
                features: ["Auto Scaling", "Security", "Cost Optimization"]
              },
              {
                title: "DevOps Services",
                desc: "Streamline development and operations with modern CI/CD practices",
                stack: ["Docker", "Kubernetes", "Jenkins"],
                icon: "⚡",
                features: ["CI/CD Pipeline", "Container Management", "Monitoring"]
              },
              {
                title: "Cybersecurity",
                desc: "Protect your digital assets with advanced security solutions",
                stack: ["Penetration Testing", "Security Audits", "Compliance"],
                icon: "🔒",
                features: ["Threat Detection", "Risk Assessment", "Compliance"]
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-emerald-600/5 to-purple-600/10 rounded-3xl transform transition-all duration-500 group-hover:scale-[1.02] group-hover:opacity-100 opacity-50" />
                <div className="relative p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-emerald-400/20 blur-xl" />
                      <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10">
                        <span className="text-2xl">{service.icon}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-8 leading-relaxed">{service.desc}</p>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.stack.map((tech, j) => (
                          <span
                            key={j}
                            className="px-3 py-1.5 rounded-full bg-white/5 text-sm border border-white/10 hover:border-white/20 transition-colors duration-300 flex items-center gap-1.5"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-emerald-400" />
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, k) => (
                          <li key={k} className="flex items-center text-sm text-gray-300">
                            <span className="mr-2 text-purple-400/80">⟡</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="relative h-32 overflow-hidden">
            <CurvedLoop />
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="relative py-32">
        <HeroParallaxDemo />
      </div>
    </main>
  );
}
