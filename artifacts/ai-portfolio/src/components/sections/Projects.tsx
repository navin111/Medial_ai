import React from "react";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { Mic, FileText, Map, AudioLines, ImagePlay, BrainCircuit, MessagesSquare, Code2, Layers, Wand2 } from "lucide-react";

const completedProjects = [
  {
    id: 1,
    name: "AI Voice Chat Bot",
    desc: "Conversational voice AI bot built with Python that understands natural speech, processes queries in real-time, and responds with human-like voice output using speech synthesis.",
    tags: ["Python", "OpenAI", "Speech Recognition", "TTS"],
    gradient: "from-blue-600 to-violet-700",
    icon: Mic,
  },
  {
    id: 2,
    name: "ATS Resume Formatter",
    desc: "Intelligent resume parser and formatter that optimizes CVs for Applicant Tracking Systems, scoring keyword matches and restructuring content for maximum visibility.",
    tags: ["Python", "NLP", "PDF Parsing", "spaCy"],
    gradient: "from-emerald-500 to-teal-700",
    icon: FileText,
  },
  {
    id: 3,
    name: "Agent Trip Planner",
    desc: "Autonomous AI travel agent that plans complete itineraries — flights, hotels, activities — using multi-step reasoning and live web data, powered by LangChain agents.",
    tags: ["Python", "LangChain", "AI Agents", "LLM"],
    gradient: "from-rose-500 to-pink-700",
    icon: Map,
  },
  {
    id: 4,
    name: "Audio to Text Summarizer",
    desc: "End-to-end pipeline that transcribes audio files using Whisper and produces concise, structured summaries with key points, action items, and sentiment analysis.",
    tags: ["Python", "Whisper", "OpenAI", "NLP"],
    gradient: "from-amber-500 to-orange-700",
    icon: AudioLines,
  },
  {
    id: 5,
    name: "AI Image Generation Studio",
    desc: "Creative studio powered by Stable Diffusion and ControlNet that generates high-quality images from text prompts with style control, inpainting, and batch processing.",
    tags: ["Stable Diffusion", "ControlNet", "Python", "CUDA"],
    gradient: "from-fuchsia-600 to-purple-800",
    icon: ImagePlay,
  },
  {
    id: 6,
    name: "RAG Document Chat",
    desc: "Chat with any document — PDFs, URLs, or text files — using Retrieval-Augmented Generation. Provides accurate, source-cited answers from large private knowledge bases.",
    tags: ["LangChain", "FAISS", "OpenAI", "Python"],
    gradient: "from-cyan-500 to-blue-700",
    icon: MessagesSquare,
  },
  {
    id: 7,
    name: "LLM Fine-Tuning Pipeline",
    desc: "End-to-end platform for fine-tuning open-source LLMs on custom datasets using LoRA and QLoRA. Supports Llama, Mistral, and Falcon with automated evaluation metrics.",
    tags: ["LoRA", "QLoRA", "Llama", "HuggingFace"],
    gradient: "from-indigo-600 to-violet-800",
    icon: BrainCircuit,
  },
  {
    id: 8,
    name: "AI Code Review Assistant",
    desc: "GPT-4 powered code review tool that analyzes pull requests for bugs, security flaws, and performance issues, then suggests precise fixes with explanations.",
    tags: ["GPT-4", "Python", "GitHub API", "FastAPI"],
    gradient: "from-green-600 to-emerald-800",
    icon: Code2,
  },
  {
    id: 9,
    name: "Multi-Modal Content Generator",
    desc: "Unified GenAI pipeline that creates blog posts, social media content, images, and video scripts from a single brief — orchestrated across GPT-4, DALL-E, and ElevenLabs.",
    tags: ["GPT-4", "DALL-E", "ElevenLabs", "Python"],
    gradient: "from-orange-500 to-red-700",
    icon: Wand2,
  },
  {
    id: 10,
    name: "Semantic Search Engine",
    desc: "Vector-powered search engine that understands meaning, not just keywords. Built on embeddings and Pinecone to deliver context-aware results across millions of documents.",
    tags: ["Embeddings", "Pinecone", "OpenAI", "FastAPI"],
    gradient: "from-sky-500 to-indigo-700",
    icon: Layers,
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
        <h2 className="text-3xl md:text-5xl font-bold mb-4">My <span className="text-primary">Projects.</span></h2>
        <p className="text-muted-foreground text-lg max-w-2xl">Real AI systems built and shipped — each one solving a genuine problem with cutting-edge technology.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {completedProjects.map((p, i) => (
          <motion.div
            key={p.id}
            data-testid={`card-project-${p.id}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group relative rounded-2xl bg-card border border-white/5 overflow-hidden hover:border-primary/50 transition-all hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(111,66,193,0.15)]"
          >
            <div className={`h-44 w-full bg-gradient-to-br ${p.gradient} opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center`}>
              <div className="w-20 h-20 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <p.icon className="w-9 h-9 text-white/90" />
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{p.name}</h3>
              <p className="text-sm text-white/70 mb-6 leading-relaxed">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 rounded-md bg-white/5 text-[11px] font-mono text-white/60">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-xs text-green-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  Completed
                </span>
                <a
                  href="https://www.linkedin.com/in/navin-sharma-85034030/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`link-github-${p.id}`}
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                >
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
