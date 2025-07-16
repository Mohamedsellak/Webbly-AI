"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import "./Navbar.css";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-5xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
        className="bg-black/75 backdrop-blur-2xl rounded-full border border-white/10 shadow-[0_0_25px_-5px_rgba(129,140,248,0.1)] hover:shadow-[0_0_35px_-5px_rgba(129,140,248,0.2)] transition-all duration-500"
      >
        <div className="flex items-center justify-between px-6 py-4">
          {/* Brand Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-3"
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="p-2 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl shadow-lg group-hover:shadow-[0_0_25px_-5px_rgba(139,92,246,0.5)] group-hover:scale-110 transition-all duration-500">
                <svg
                  className="w-5 h-5 text-white group-hover:animate-pulse"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex items-center space-x-3">
                <div className="relative z-10 group-hover:scale-105 transition-transform duration-500">
                  <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 group-hover:bg-gradient-to-r group-hover:from-violet-300 group-hover:via-fuchsia-300 group-hover:to-indigo-300 transition-all duration-500">
                    Webbly AI
                  </span>
                </div>
                <span className="text-[10px] text-gray-400 tracking-[0.2em] uppercase opacity-75 group-hover:opacity-100 transition-opacity duration-500 pl-2 border-l border-white/10">
                  Web • Mobile • AI
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden lg:flex items-center space-x-1"
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`group relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-500 overflow-hidden ${
                  pathname === item.href
                    ? "text-white bg-gradient-to-r from-violet-600/20 via-fuchsia-600/20 to-indigo-600/20 border border-white/10 shadow-[0_0_20px_-5px_rgba(139,92,246,0.3)] after:absolute after:inset-x-0 after:h-px after:-bottom-0.5 after:bg-gradient-to-r after:from-violet-400 after:via-fuchsia-400 after:to-indigo-400 after:opacity-75 before:absolute before:inset-0 before:bg-gradient-to-r before:from-violet-500/10 before:via-fuchsia-500/10 before:to-indigo-500/10 before:opacity-0 before:group-hover:opacity-100 before:transition-opacity before:duration-500"
                    : "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-violet-600/10 hover:via-fuchsia-600/10 hover:to-indigo-600/10 hover:shadow-[0_0_15px_-5px_rgba(139,92,246,0.2)] hover:border hover:border-white/5"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </motion.nav>

          {/* Desktop CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="hidden lg:block"
          >
            <Button className="relative overflow-hidden group bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-violet-500/40 transition-all duration-500 border border-white/10">
              <span className="relative z-10 group-hover:text-white transition-colors">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-x-[1.5] blur-xl"></div>
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-white transform transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-white transform transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="lg:hidden mt-2 overflow-hidden bg-black/75 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-[0_0_25px_-5px_rgba(129,140,248,0.1)]"
      >
        <div className="px-4 py-6 space-y-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`group relative block px-4 py-3 text-sm font-medium rounded-full transition-all duration-500 overflow-hidden ${
                pathname === item.href
                  ? "text-white bg-gradient-to-r from-violet-600/20 via-fuchsia-600/20 to-indigo-600/20 border border-white/10 shadow-[0_0_20px_-5px_rgba(139,92,246,0.3)] after:absolute after:inset-x-0 after:h-px after:-bottom-0.5 after:bg-gradient-to-r after:from-violet-400 after:via-fuchsia-400 after:to-indigo-400 after:opacity-75 after:scale-x-100 after:origin-left after:transition-transform after:duration-500 before:absolute before:inset-0 before:bg-gradient-to-r before:from-violet-500/10 before:via-fuchsia-500/10 before:to-indigo-500/10 before:opacity-0 before:group-hover:opacity-100 before:transition-opacity before:duration-500"
                  : "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-violet-600/10 hover:via-fuchsia-600/10 hover:to-indigo-600/10 hover:shadow-[0_0_15px_-5px_rgba(139,92,246,0.2)] hover:border hover:border-white/5 after:absolute after:inset-x-0 after:h-px after:-bottom-0.5 after:bg-gradient-to-r after:from-violet-400 after:via-fuchsia-400 after:to-indigo-400 after:opacity-75 after:scale-x-0 after:origin-left after:transition-transform after:duration-500 group-hover:after:scale-x-100"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button className="w-full mt-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300">
            Get Started
          </Button>
        </div>
      </motion.div>
    </header>
  );
}
