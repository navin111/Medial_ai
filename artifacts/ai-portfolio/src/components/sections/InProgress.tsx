import React from "react";
import { motion } from "framer-motion";

const inProgressProjects = [
  {
    id: 1,
    name: "Vision Pipeline",
    desc: "Real-time computer vision system for object detection and scene understanding on edge devices.",
    progress: 65,
    tags: ["TensorFlow", "OpenCV", "Python"],
  },
  {
    id: 2,
    name: "ML Inference API",
    desc: "Containerized model serving API with auto-scaling for low-latency AI inference at scale.",
    progress: 50,
    tags: ["Docker", "FastAPI", "Python"],
  },
  {
    id: 3,
    name: "RAG Knowledge Base",
    desc: "Retrieval-augmented generation system for intelligent Q&A over large document collections.",
    progress: 35,
    tags: ["RAG", "Embeddings", "LLM"],
  },
  {
    id: 4,
    name: "DataMind Analytics",
    desc: "Predictive analytics dashboard powered by ML models to surface actionable business insights.",
    progress: 20,
    tags: ["scikit-learn", "Plotly", "Python"],
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4">In the <span className="text-secondary">Lab.</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl">What's currently in development — next generation AI tools being built right now.</p>
        </div>

        <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
          </span>
          <span className="text-sm font-mono text-white/80 uppercase">Active Build</span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {inProgressProjects.map((p, i) => (
          <motion.div
            key={p.id}
            data-testid={`card-inprogress-${p.id}`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="p-6 rounded-2xl bg-card border border-white/5 hover:bg-white/[0.02] hover:border-secondary/20 transition-all"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-white">{p.name}</h3>
              <span className="text-sm font-mono text-secondary">{p.progress}%</span>
            </div>

            <p className="text-sm text-white/60 mb-4 leading-relaxed">{p.desc}</p>

            <div className="flex flex-wrap gap-2 mb-5">
              {p.tags.map(tag => (
                <span key={tag} className="px-2 py-1 rounded-md bg-white/5 text-[10px] font-mono text-white/50">
                  {tag}
                </span>
              ))}
            </div>

            <div className="w-full bg-black/50 rounded-full h-2 overflow-hidden border border-white/5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${p.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
