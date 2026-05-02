"use client";

import { motion } from "framer-motion";
import { Code } from "lucide-react";

const projects = [
  {
    title: "Dreams - Autonomous AI Video Production",
    description: "Architected an autonomous system producing 60+ monthly lip-synced videos across YT and IG, eliminating 100% manual effort using Gemini 2.0 Pro and Qwen3-TTS.",
    tech: ["Node.js", "Python", "React", "Gemini 2.0", "FFmpeg"],
    image: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif", 
    github: "https://github.com/Surya2004-janardhan/Dreams"
  },
  {
    title: "Aditya Foods",
    description: "Developed a full-stack mobile food ordering app with a secure Node.js backend, REST APIs, Razorpay integration, and an optimized Redis caching layer.",
    tech: ["React Native", "Node.js", "SQL", "Redis", "Expo"],
    image: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif", 
    github: "https://github.com/Surya2004-janardhan/AdtFoods"
  },
  {
    title: "AI Sensei",
    description: "Leveraged Groq API for instant context-aware Japanese tutoring via vector similarity search, coupled with Socket.IO real-time language exchange.",
    tech: ["React.js", "Node.js", "MongoDB", "Groq API", "Socket.IO"],
    image: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif", 
    github: "https://github.com/Surya2004-janardhan/AI-sensei"
  },
  {
    title: "Redis Game Leaderboard",
    description: "A production-style backend service for real-time game leaderboards powered by Redis, Express, and TypeScript.",
    tech: ["TypeScript", "Redis", "Express"],
    image: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
    github: "https://github.com/Surya2004-janardhan/Redis-Powered-Game-Leaderboard-with-Atomic-Operations-and-Real-Time-Updates"
  },
  {
    title: "High-Performance File Transfer",
    description: "A robust, production-grade file transfer service for large files (1GB+) with chunked uploading, resumability, and memory-efficient streaming.",
    tech: ["TypeScript", "API", "Streaming"],
    image: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
    github: "https://github.com/Surya2004-janardhan/High-Performance-Large-File-Transfer-Service-with-Chunked-Uploads"
  },
  {
    title: "Emotion Stress Analyzer",
    description: "Train a CNN and LSTM for cognitive layer-based emotion detection using audio and video from the RAVDESS dataset.",
    tech: ["Python", "CNN", "LSTM", "RAVDESS"],
    image: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
    github: "https://github.com/Surya2004-janardhan/emotion-based-stress-analyzer-desktop-app"
  },
  {
    title: "IoT Sensor Analytics",
    description: "A containerized IoT backend for ingesting, storing, and analyzing large-scale time-series sensor data using TimescaleDB and a TypeScript API.",
    tech: ["TypeScript", "TimescaleDB", "IoT", "Docker"],
    image: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
    github: "https://github.com/Surya2004-janardhan/An-ioT-Sensor-Analytics-Platform-with-TimescaleDB"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10 bg-black">
      <div className="container px-6 mx-auto">
        {/* Heading with gradient wipe animation */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, type: "spring" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-white w-fit">Featured Projects</h2>
          <motion.p
            className="text-muted-foreground text-lg max-w-2xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Some of the recent things I&apos;ve built, solving real user problems.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                type: "spring",
                stiffness: 80,
              }}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="glass rounded-3xl p-6 group transition-all duration-300 flex flex-col h-full hover:border-primary/50 relative overflow-hidden"
              style={{ perspective: 800 }}
            >
              {/* Animated gradient overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/10 z-0 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-0 pointer-events-none" />
              
              {/* Image with clip-path reveal */}
              <motion.div
                className="w-full h-56 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center border border-white/10 z-10 bg-black"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.05, ease: "easeOut" }}
              >
                <img src={project.image} alt={project.title} loading="lazy" className="object-cover w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-3 z-10 leading-tight group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted-foreground mb-6 flex-grow z-10">{project.description}</p>
              
              {/* Tech tags with staggered pop-in */}
              <div className="flex flex-wrap gap-2 mb-6 z-10">
                {project.tech.map((t, ti) => (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + ti * 0.06, type: "spring" }}
                    className="text-xs font-semibold px-3 py-1.5 bg-background/50 backdrop-blur-md border border-white/10 rounded-lg group-hover:border-primary/30 group-hover:text-primary transition-colors"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-auto z-10 pt-4 border-t border-white/10">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  whileHover={{ x: 5 }}
                >
                  <Code size={20} />
                  <span className="font-medium">View Source Code</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
