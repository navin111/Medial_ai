import React from "react";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";

const completedProjects = [
  {
    id: 1,
    name: "NeuralChat",
    desc: "GPT-4 powered enterprise chatbot with 95% resolution rate. Deployed to 50k+ active daily users.",
    tags: ["GPT-4", "Node.js", "React"],
    gradient: "from-blue-600 to-violet-600",
  },
  {
    id: 2,
    name: "VisionAI",
    desc: "Real-time object detection at 60fps on edge devices. Optimized MobileNet architecture.",
    tags: ["TensorFlow", "Python", "OpenCV"],
    gradient: "from-emerald-500 to-teal-700",
  },
  {
    id: 3,
    name: "SentimentPulse",
    desc: "Processes 1M+ tweets/day with 92% accuracy. Real-time brand monitoring dashboard.",
    tags: ["PyTorch", "FastAPI", "Redis"],
    gradient: "from-rose-500 to-pink-700",
  },
  {
    id: 4,
    name: "DeepDreamer",
    desc: "Stable Diffusion fine-tuning pipeline for custom art styles. Includes automated LoRA training.",
    tags: ["Diffusion Models", "CUDA", "Python"],
    gradient: "from-indigo-500 to-purple-800",
  },
  {
    id: 5,
    name: "DataMind",
    desc: "Predictive churn analytics with 89% AUC. End-to-end data pipeline.",
    tags: ["scikit-learn", "Plotly", "PostgreSQL"],
    gradient: "from-amber-500 to-orange-700",
  },
  {
    id: 6,
    name: "AutoLabel",
    desc: "Semi-supervised data labeling tool saving 80% annotation time via active learning.",
    tags: ["Active Learning", "React", "Python"],
    gradient: "from-cyan-500 to-blue-700",
  },
];

export default function Projects() {
  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Production <span className="text-primary">Deployments.</span></h2>
        <p className="text-muted-foreground text-lg max-w-2xl">Completed projects that are currently operating in the wild, serving real users and crunching real data.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {completedProjects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group relative rounded-2xl bg-card border border-white/5 overflow-hidden hover:border-primary/50 transition-all hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(111,66,193,0.15)]"
          >
            <div className={`h-48 w-full bg-gradient-to-br ${p.gradient} opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center`}>
              {/* Abstract shape placeholder for project visual */}
              <div className="w-24 h-24 rounded-full bg-black/20 backdrop-blur-sm border border-white/20" />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{p.name}</h3>
              <p className="text-sm text-white/70 mb-6 line-clamp-2">{p.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 rounded-md bg-white/5 text-[11px] font-mono text-white/60">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <a href="#" className="text-sm font-medium text-secondary hover:text-white transition-colors flex items-center gap-1">
                  View Case Study <span>→</span>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors">
                  <SiGithub />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
