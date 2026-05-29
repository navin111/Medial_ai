import React, { useState } from "react";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { Linkedin, Mail, Send, MapPin, CheckCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
    const body = encodeURIComponent(`Hi Navin,\n\nMy name is ${form.name} (${form.email}).\n\n${form.message}`);
    window.open(`mailto:navin.sharma780@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <footer id="contact" className="relative bg-black pt-32 pb-12 border-t border-white/10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-[100%] blur-[100px] opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Open for new opportunities, collaborations, and interesting conversations. Drop me a message and I'll get back to you shortly.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Navin Sharma</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                AI Engineer specializing in Deep Learning, NLP, and scalable machine learning systems. Based and available worldwide for remote work.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <a
                href="mailto:navin.sharma780@gmail.com"
                data-testid="link-email"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5 uppercase tracking-widest">Email</p>
                  <p className="text-white text-sm font-medium group-hover:text-primary transition-colors">navin.sharma780@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/navin-sharma-85034030/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-linkedin"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5 uppercase tracking-widest">LinkedIn</p>
                  <p className="text-white text-sm font-medium group-hover:text-secondary transition-colors">navin-sharma-85034030</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white/50" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5 uppercase tracking-widest">Availability</p>
                  <p className="text-white text-sm font-medium">Open to Remote Worldwide</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <a
                href="https://www.linkedin.com/in/navin-sharma-85034030/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="icon-linkedin"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(111,66,193,0.4)] transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:navin.sharma780@gmail.com"
                data-testid="icon-email"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-secondary/50 hover:shadow-[0_0_15px_rgba(0,212,255,0.3)] transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="bg-white/3 border border-white/10 rounded-2xl p-8 backdrop-blur-sm flex flex-col gap-5"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-4 py-12 text-center"
              >
                <CheckCircle className="w-14 h-14 text-green-400" />
                <h4 className="text-xl font-bold text-white">Message Sent!</h4>
                <p className="text-muted-foreground text-sm">Your email client has opened. Navin will reply soon.</p>
              </motion.div>
            ) : (
              <>
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    data-testid="input-name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/60 focus:shadow-[0_0_15px_rgba(111,66,193,0.2)] transition-all text-sm"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Your Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    data-testid="input-email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/60 focus:shadow-[0_0_15px_rgba(111,66,193,0.2)] transition-all text-sm"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    data-testid="input-message"
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/60 focus:shadow-[0_0_15px_rgba(111,66,193,0.2)] transition-all text-sm resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  data-testid="button-submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(111,66,193,0.5)] transition-shadow"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </motion.button>
              </>
            )}
          </motion.form>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/10">
          <div className="text-white/50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} navin.ai. Built with React & Framer Motion.
          </div>
          <div className="flex items-center gap-2 text-white/30 text-xs">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for new projects
          </div>
        </div>
      </div>
    </footer>
  );
}
