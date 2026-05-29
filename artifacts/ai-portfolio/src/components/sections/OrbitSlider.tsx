import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiOpenai, SiTensorflow, SiPytorch, SiHuggingface, SiPython, SiGoogle, SiDocker, SiKubernetes } from "react-icons/si";

const orbitProjects = [
  {
    id: 1,
    name: "AI Voice Chat Bot",
    icon: SiPython,
    status: "Completed",
    tags: ["Python", "OpenAI", "TTS"],
    desc: "Conversational voice AI that understands natural speech and responds with human-like voice output in real-time.",
  },
  {
    id: 2,
    name: "ATS Resume Formatter",
    icon: SiOpenai,
    status: "Completed",
    tags: ["Python", "NLP", "spaCy"],
    desc: "Optimizes resumes for Applicant Tracking Systems with smart keyword matching and content restructuring.",
  },
  {
    id: 3,
    name: "Agent Trip Planner",
    icon: SiHuggingface,
    status: "Completed",
    tags: ["LangChain", "AI Agents", "LLM"],
    desc: "Autonomous travel agent that plans full itineraries using multi-step AI reasoning and live web data.",
  },
  {
    id: 4,
    name: "Audio to Text Summarizer",
    icon: SiPytorch,
    status: "Completed",
    tags: ["Whisper", "Python", "NLP"],
    desc: "Transcribes audio and generates structured summaries with key points and action items using Whisper.",
  },
  {
    id: 5,
    name: "Vision Pipeline",
    icon: SiTensorflow,
    status: "In Progress",
    tags: ["TensorFlow", "OpenCV"],
    desc: "Real-time computer vision pipeline for object detection and scene understanding at the edge.",
  },
  {
    id: 6,
    name: "DataMind Analytics",
    icon: SiGoogle,
    status: "In Progress",
    tags: ["Analytics", "Python"],
    desc: "Predictive analytics dashboard using ML models to surface actionable business intelligence.",
  },
  {
    id: 7,
    name: "ML Inference API",
    icon: SiDocker,
    status: "In Progress",
    tags: ["Docker", "FastAPI"],
    desc: "Containerized model serving API with auto-scaling and low-latency inference endpoints.",
  },
  {
    id: 8,
    name: "RAG Knowledge Base",
    icon: SiKubernetes,
    status: "In Progress",
    tags: ["RAG", "Embeddings"],
    desc: "Retrieval-augmented generation system for intelligent document Q&A over large knowledge bases.",
  },
];

export default function OrbitSlider() {
  const [activeProject, setActiveProject] = useState<typeof orbitProjects[0] | null>(null);

  return (
    <div className="relative w-full max-w-6xl mx-auto h-[600px] md:h-[800px] flex items-center justify-center overflow-hidden">

      {/* Central Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-10 pointer-events-none">
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-primary/20 blur-2xl animate-pulse-glow" />
        <div className="absolute text-center">
          <h3 className="text-2xl md:text-4xl font-bold text-white tracking-widest uppercase opacity-80">navin</h3>
          <p className="text-xs text-secondary mt-2 tracking-widest">.ai</p>
        </div>
      </div>

      {/* Orbit Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full border border-white/5 border-dashed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[450px] md:h-[450px] rounded-full border border-white/5 border-dashed" />

      {/* Orbiting Nodes */}
      <div className="absolute w-[350px] h-[350px] md:w-[600px] md:h-[600px] animate-[spin_40s_linear_infinite] group hover:[animation-play-state:paused]">
        {orbitProjects.map((p, i) => {
          const angle = (i / orbitProjects.length) * 360;
          const radius = window.innerWidth < 768 ? 175 : 300;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <div
              key={p.id}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20"
              style={{ transform: `translate(${x}px, ${y}px)` }}
              onClick={() => setActiveProject(p)}
            >
              <div
                title={p.name}
                className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-card border flex items-center justify-center animate-[spin_40s_linear_infinite_reverse] group-hover:[animation-play-state:paused] hover:scale-110 transition-all hover:shadow-[0_0_20px_rgba(111,66,193,0.5)] ${
                  p.status === "Completed"
                    ? "border-primary/40 hover:border-primary"
                    : "border-white/10 hover:border-secondary/60"
                }`}
              >
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
                  <span className={`w-2 h-2 rounded-full ${activeProject.status === "Completed" ? "bg-green-500" : "bg-yellow-500 animate-pulse"}`} />
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
