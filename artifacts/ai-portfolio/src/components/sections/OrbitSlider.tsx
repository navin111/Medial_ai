import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiOpenai, SiTensorflow, SiPytorch, SiHuggingface, SiPython, SiGoogle, SiDocker, SiKubernetes } from "react-icons/si";

const orbitProjects = [
  { id: 1, name: "NeuralChat", icon: SiOpenai, status: "Completed", tags: ["GPT-4", "Node.js"], desc: "GPT-powered enterprise customer support chatbot." },
  { id: 2, name: "VisionAI", icon: SiTensorflow, status: "Completed", tags: ["TensorFlow", "OpenCV"], desc: "Real-time object detection system for edge devices." },
  { id: 3, name: "SentimentPulse", icon: SiPytorch, status: "Completed", tags: ["PyTorch", "NLP"], desc: "Social media sentiment analysis engine." },
  { id: 4, name: "LingoBridge", icon: SiHuggingface, status: "In Progress", tags: ["Transformers"], desc: "Multi-language translation model." },
  { id: 5, name: "DeepDreamer", icon: SiPython, status: "Completed", tags: ["Diffusion", "CUDA"], desc: "Image generation with diffusion models." },
  { id: 6, name: "DataMind", icon: SiGoogle, status: "Completed", tags: ["Analytics"], desc: "Predictive analytics dashboard." },
  { id: 7, name: "CloudBrain", icon: SiDocker, status: "In Progress", tags: ["Serverless"], desc: "Serverless AI inference pipeline." },
  { id: 8, name: "MetaLearn", icon: SiKubernetes, status: "In Progress", tags: ["Few-shot"], desc: "Few-shot learning framework." },
];

export default function OrbitSlider() {
  const [activeProject, setActiveProject] = useState<typeof orbitProjects[0] | null>(null);

  return (
    <div className="relative w-full max-w-6xl mx-auto h-[600px] md:h-[800px] flex items-center justify-center overflow-hidden">
      
      {/* Central Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-10 pointer-events-none">
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-primary/20 blur-2xl animate-pulse-glow" />
        <div className="absolute text-center">
          <h3 className="text-2xl md:text-4xl font-bold text-white tracking-widest uppercase opacity-80">Core</h3>
          <p className="text-xs text-secondary mt-2 tracking-widest">ECOSYSTEM</p>
        </div>
      </div>

      {/* Orbit Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full border border-white/5 border-dashed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[450px] md:h-[450px] rounded-full border border-white/5 border-dashed" />

      {/* Orbiting Nodes (Static positioning with CSS animation for orbit) */}
      <div className="absolute w-[350px] h-[350px] md:w-[600px] md:h-[600px] animate-[spin_40s_linear_infinite] group hover:[animation-play-state:paused]">
        {orbitProjects.map((p, i) => {
          const angle = (i / orbitProjects.length) * 360;
          const radius = window.innerWidth < 768 ? 175 : 300;
          // Calculate x,y for static placement on the ring, then we reverse spin the contents
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);
          
          return (
            <div 
              key={p.id}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20"
              style={{ transform: `translate(${x}px, ${y}px)` }}
              onClick={() => setActiveProject(p)}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-card border border-white/10 flex items-center justify-center animate-[spin_40s_linear_infinite_reverse] group-hover:[animation-play-state:paused] hover:scale-110 hover:border-primary transition-all hover:shadow-[0_0_20px_rgba(111,66,193,0.5)]">
                <p.icon className="text-xl md:text-2xl text-white/70" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Details Card Panel */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            className="absolute z-50 md:right-10 top-1/2 -translate-y-1/2 w-[90%] md:w-80 bg-card/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl"
          >
            <button 
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 text-white/50 hover:text-white"
            >
              ✕
            </button>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <activeProject.icon className="text-2xl" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">{activeProject.name}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`w-2 h-2 rounded-full ${activeProject.status === 'Completed' ? 'bg-green-500' : 'bg-yellow-500 animate-pulse'}`} />
                  <span className="text-xs text-muted-foreground">{activeProject.status}</span>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-white/80 mb-6 leading-relaxed">
              {activeProject.desc}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {activeProject.tags.map(tag => (
                <span key={tag} className="px-2 py-1 rounded bg-white/5 text-[10px] font-mono text-secondary">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
