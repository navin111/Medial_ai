import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const headline = "Architecting the future through applied intelligence.";
  const words = headline.split(" ");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Particles/Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] mix-blend-screen opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_10%,transparent_100%)]" />
      </div>

      <div className="container px-6 relative z-10 mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-secondary mb-8 shadow-[0_0_20px_rgba(0,212,255,0.2)]"
        >
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          SYSTEM ONLINE. READY FOR INPUT.
        </motion.div>

        <motion.h1 
          variants={container}
          initial="hidden"
          animate="show"
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.1]"
        >
          {words.map((word, i) => (
            <motion.span key={i} variants={item} className="inline-block mr-[0.25em]">
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl"
        >
          I build scalable AI systems, generative models, and intelligent agents that solve real-world problems. 
          <span className="text-white block mt-2">Specializing in Deep Learning, NLP, and Edge AI.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-6"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-20 transition-opacity" />
            <span className="relative z-10">View My Work</span>
          </a>
          
          <a
            href="#contact"
            className="text-white/70 hover:text-white font-medium tracking-wide transition-colors flex items-center gap-2"
          >
            Initialize Contact <span className="text-secondary group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
