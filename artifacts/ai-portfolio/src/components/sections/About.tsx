import React from "react";
import { motion } from "framer-motion";
import { SiPython, SiTensorflow, SiPytorch, SiOpenai, SiHuggingface, SiReact, SiDocker } from "react-icons/si";

const skills = [
  { name: "Machine Learning", icon: <SiPython /> },
  { name: "Deep Learning", icon: <SiTensorflow /> },
  { name: "NLP", icon: <SiHuggingface /> },
  { name: "Generative AI", icon: <SiOpenai /> },
  { name: "Computer Vision", icon: <SiPytorch /> },
  { name: "Edge AI", icon: <SiReact /> },
  { name: "Cloud MLOps", icon: <SiDocker /> }
];

export default function About() {
  return (
    <div className="container mx-auto px-6 py-24 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Bridging the gap between <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">research and reality.</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am a Machine Learning Engineer with a passion for designing systems that can perceive, understand, and generate. With over 5 years of experience deploying models to production, I believe AI should be invisible, powerful, and accessible. My core philosophy is that the best models are the ones that actually ship.
          </p>
        </motion.div>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 15,
                delay: index * 0.1 
              }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-colors shadow-lg cursor-default"
            >
              <span className="text-xl text-secondary">{skill.icon}</span>
              <span className="font-medium text-sm text-white/90">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
