"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-28 relative z-10 bg-[#060606] border-y border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-black/0 to-black/0 pointer-events-none" />
      <div className="container px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">About <span className="text-primary">Me</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Bridging the gap between intelligent AI systems and robust Full-Stack architecture.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Education Card */}
          <motion.div
            className="glass p-10 rounded-3xl flex flex-col items-center text-center hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2 bg-gradient-to-b from-white/5 to-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-[0_0_30px_-5px_rgba(255,215,0,0.3)]">
              <GraduationCap size={40} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Education</h3>
            <p className="text-muted-foreground mb-8 text-lg">B.Tech in Artificial Intelligence & Machine Learning at Aditya College of Engineering.</p>
            <span className="font-bold text-black px-6 py-2 bg-primary rounded-full text-sm shadow-[0_0_20px_rgba(255,215,0,0.4)] mt-auto">CGPA: 8.5/10.0</span>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            className="glass relative p-10 rounded-3xl flex flex-col items-center text-center overflow-hidden border-primary/30 hover:border-primary transition-all duration-300 group hover:-translate-y-2 bg-gradient-to-b from-primary/10 to-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors pointer-events-none" />
            <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mb-8 z-10 group-hover:scale-110 group-hover:-rotate-6 transition-transform shadow-[0_0_40px_-5px_rgba(255,215,0,0.5)]">
              <Briefcase size={40} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 z-10">Experience</h3>
            <p className="text-muted-foreground mb-8 text-lg z-10">AI Intern at <span className="text-white">GrowStack.ai</span>. Deployed 20+ production-ready AI agents and RAG pipelines.</p>
            <span className="font-bold text-black px-6 py-2 bg-primary rounded-full text-sm z-10 shadow-[0_0_20px_rgba(255,215,0,0.4)] mt-auto">70% Manual Effort Slashed</span>
          </motion.div>

          {/* Problem Solving Card */}
          <motion.div
            className="glass p-10 rounded-3xl flex flex-col items-center text-center hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2 bg-gradient-to-b from-white/5 to-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-[0_0_30px_-5px_rgba(255,215,0,0.3)]">
              <Code2 size={40} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Algorithmic Excellence</h3>
            <p className="text-muted-foreground mb-8 text-lg">A deep love for coding challenges. Demonstrated strong analytical abilities in algorithms.</p>
            <span className="font-bold text-black px-6 py-2 bg-primary rounded-full text-sm shadow-[0_0_20px_rgba(255,215,0,0.4)] mt-auto">800+ Problems Solved</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
