import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-white/5 shadow-[0_0_20px_rgba(111,66,193,0.1)] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold tracking-tighter text-white flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-primary to-secondary animate-pulse-glow" />
          <span>N<span className="text-primary">.</span>AI</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 text-sm font-medium rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all hover:border-primary/50 hover:shadow-[0_0_15px_rgba(111,66,193,0.4)]"
          >
            Hire Me
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
