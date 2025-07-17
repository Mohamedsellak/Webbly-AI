"use client";
import React from "react";
import { motion } from "motion/react";
import { EvervaultCard } from "@/components/ui/evervault-card";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { 
  Cloud, 
  Brain, 
  Shield, 
  Zap, 
  Code, 
  Database,
  Settings,
  TrendingUp 
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "AI & Machine Learning",
      description: "Custom AI solutions, predictive analytics, and intelligent automation to transform your business processes.",
      icon: Brain,
      gradient: "from-purple-500 to-violet-600",
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions, migration services, and infrastructure optimization for modern businesses.",
      icon: Cloud,
      gradient: "from-violet-500 to-purple-600",
    },
    {
      title: "Cybersecurity",
      description: "Advanced security solutions, threat detection, and compliance management to protect your digital assets.",
      icon: Shield,
      gradient: "from-purple-600 to-indigo-600",
    },
    {
      title: "Web Development",
      description: "Modern web applications, responsive design, and cutting-edge frontend technologies.",
      icon: Code,
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      title: "Data Analytics",
      description: "Business intelligence, data visualization, and insights to drive informed decision-making.",
      icon: Database,
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation services to modernize your business operations.",
      icon: TrendingUp,
      gradient: "from-violet-600 to-purple-500",
    },
  ];

  return (
    <div className="py-20 px-4" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our IT Services
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth 
            and digital transformation journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full">
                <EvervaultCard 
                  text={service.title}
                  className="h-full"
                >
                  <div className="p-6 h-full flex flex-col">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-purple-200 leading-relaxed flex-grow">
                      {service.description}
                    </p>
                    
                    <div className="mt-6">
                      <HoverBorderGradient
                        containerClassName="rounded-lg"
                        className="bg-black/50 text-white hover:bg-purple-600/20 transition-colors duration-300"
                      >
                        Learn More
                      </HoverBorderGradient>
                    </div>
                  </div>
                </EvervaultCard>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <HoverBorderGradient
            containerClassName="rounded-full"
            className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-8 py-3 font-medium hover:from-purple-700 hover:to-violet-700"
          >
            View All Services
          </HoverBorderGradient>
        </motion.div>
      </div>
    </div>
  );
}
