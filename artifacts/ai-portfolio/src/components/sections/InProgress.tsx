import React from "react";
import { motion } from "framer-motion";

const inProgressProjects = [
  {
    id: 1,
    name: "LingoBridge",
    desc: "Real-time multilingual translation with 97 language support. Building custom transformer.",
    progress: 75,
  },
  {
    id: 2,
    name: "CloudBrain",
    desc: "AWS Lambda-based inference serving 10k req/sec with sub-50ms latency.",
    progress: 50,
  },
  {
    id: 3,
    name: "MetaLearn",
    desc: "Meta-learning framework for rapid task adaptation using MAML.",
    progress: 30,
  },
  {
    id: 4,
    name: "NeuroSynth",
    desc: "Brain-computer interface signal classifier using EEG data streams.",
    progress: 20,
  },
];

export default function InProgress() {
  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 flex items-center justify-between flex-wrap gap-6"
      >
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Research & <span className="text-secondary">Development.</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl">What's currently cooking in the lab.</p>
        </div>
        
        <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
          </span>
          <span className="text-sm font-mono text-white/80 uppercase">Active Threads</span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {inProgressProjects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="p-6 rounded-2xl bg-card border border-white/5 hover:bg-white/[0.02] transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">{p.name}</h3>
              <span className="text-sm font-mono text-secondary">{p.progress}%</span>
            </div>
            
            <p className="text-sm text-white/60 mb-6 h-10">{p.desc}</p>
            
            <div className="w-full bg-black/50 rounded-full h-2 overflow-hidden border border-white/5">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${p.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
