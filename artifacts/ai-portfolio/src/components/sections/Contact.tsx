import React from "react";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <footer className="relative bg-black pt-32 pb-12 border-t border-white/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-[100%] blur-[100px] opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Ready to build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">impossible?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground mb-10 max-w-xl"
          >
            I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </motion.p>
          
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href="mailto:hello@example.com"
            className="px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            Say Hello
          </motion.a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/10">
          <div className="text-white/50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Visionary AI Portfolio. Built with React & Framer Motion.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/50 hover:text-white hover:scale-110 transition-all">
              <SiGithub className="text-xl" />
            </a>
            <a href="#" className="text-white/50 hover:text-white hover:scale-110 transition-all">
              <Linkedin className="text-xl w-5 h-5" />
            </a>
            <a href="#" className="text-white/50 hover:text-white hover:scale-110 transition-all">
              <Twitter className="text-xl w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
