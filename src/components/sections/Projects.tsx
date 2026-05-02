"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Code } from "lucide-react";

const projects = [
  {
    title: "Dreams",
    subtitle: "Autonomous AI Video Production",
    description: "60+ monthly lip-synced videos across YT & IG. Zero manual effort. Gemini 2.0 Pro + Qwen3-TTS.",
    tech: ["Node.js", "Python", "React", "Gemini 2.0", "FFmpeg"],
    image: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif", 
    github: "https://github.com/Surya2004-janardhan/Dreams",
    num: "01",
  },
  {
    title: "Aditya Foods",
    subtitle: "Full-Stack Mobile App",
    description: "Food ordering app with Node.js backend, REST APIs, Razorpay, and Redis caching.",
    tech: ["React Native", "Node.js", "SQL", "Redis", "Expo"],
    image: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif", 
    github: "https://github.com/Surya2004-janardhan/AdtFoods",
    num: "02",
  },
  {
    title: "AI Sensei",
    subtitle: "Intelligent Language Tutor",
    description: "Groq API for instant context-aware Japanese tutoring with vector search & Socket.IO exchange.",
    tech: ["React.js", "Node.js", "MongoDB", "Groq API", "Socket.IO"],
    image: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif", 
    github: "https://github.com/Surya2004-janardhan/AI-sensei",
    num: "03",
  },
  {
    title: "Redis Leaderboard",
    subtitle: "Real-Time Game Backend",
    description: "Production-style leaderboard service with atomic operations and real-time updates.",
    tech: ["TypeScript", "Redis", "Express"],
    image: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
    github: "https://github.com/Surya2004-janardhan/Redis-Powered-Game-Leaderboard-with-Atomic-Operations-and-Real-Time-Updates",
    num: "04",
  },
  {
    title: "Chunked Transfer",
    subtitle: "High-Performance File Service",
    description: "Production-grade 1GB+ file transfer with chunked uploads, resumability & streaming.",
    tech: ["TypeScript", "API", "Streaming"],
    image: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
    github: "https://github.com/Surya2004-janardhan/High-Performance-Large-File-Transfer-Service-with-Chunked-Uploads",
    num: "05",
  },
  {
    title: "Emotion Analyzer",
    subtitle: "CNN+LSTM Stress Detection",
    description: "Cognitive emotion detection from audio & video using RAVDESS dataset.",
    tech: ["Python", "CNN", "LSTM", "RAVDESS"],
    image: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
    github: "https://github.com/Surya2004-janardhan/emotion-based-stress-analyzer-desktop-app",
    num: "06",
  },
  {
    title: "IoT Analytics",
    subtitle: "Sensor Data Platform",
    description: "Containerized IoT backend for time-series sensor analytics with TimescaleDB.",
    tech: ["TypeScript", "TimescaleDB", "IoT", "Docker"],
    image: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
    github: "https://github.com/Surya2004-janardhan/An-ioT-Sensor-Analytics-Platform-with-TimescaleDB",
    num: "07",
  }
];

// Individual project card with scroll-driven horizontal + arc movement
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  // Each card arcs in from a different angle
  const isEven = index % 2 === 0;
  const arcX = useTransform(scrollYProgress, [0, 1], [isEven ? -200 : 200, 0]);
  const arcRotate = useTransform(scrollYProgress, [0, 1], [isEven ? -8 : 8, 0]);
  const arcScale = useTransform(scrollYProgress, [0, 0.8], [0.8, 1]);
  const arcOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ x: arcX, rotate: arcRotate, scale: arcScale, opacity: arcOpacity }}
      className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center py-12 md:py-16 border-b border-white/[0.04] group ${
        isEven ? '' : 'md:direction-rtl'
      }`}
    >
      {/* Number + Image side */}
      <div className={`col-span-5 relative ${isEven ? 'md:order-1' : 'md:order-2'}`} style={{ direction: 'ltr' }}>
        <span className="absolute -top-6 -left-2 text-[8rem] font-black text-white/[0.03] leading-none select-none z-0">
          {project.num}
        </span>
        <motion.div
          className="relative rounded-2xl overflow-hidden border border-white/[0.06] aspect-video bg-black z-10"
          whileHover={{ scale: 1.03, borderColor: "rgba(255,215,0,0.3)" }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="object-cover w-full h-full opacity-50 group-hover:opacity-80 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </motion.div>
      </div>

      {/* Content side */}
      <div className={`col-span-7 ${isEven ? 'md:order-2 md:pl-6' : 'md:order-1 md:pr-6'}`} style={{ direction: 'ltr' }}>
        <motion.span className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-2 block">
          {project.subtitle}
        </motion.span>
        <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-white/60 mb-6 text-base leading-relaxed max-w-lg">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="text-[11px] font-mono px-3 py-1.5 bg-white/[0.04] border border-white/[0.08] rounded-full text-white/50 group-hover:border-primary/30 group-hover:text-primary/80 transition-colors">
              {t}
            </span>
          ))}
        </div>

        <motion.a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-white/60 hover:text-primary transition-colors font-mono text-sm group/link"
          whileHover={{ x: 5 }}
        >
          <Code size={16} />
          <span>View Source</span>
          <motion.span
            className="inline-block"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >→</motion.span>
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative z-10 bg-black overflow-hidden">
      {/* Giant background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="text-[20vw] font-black text-white/[0.015] tracking-tighter whitespace-nowrap">WORK</span>
      </div>

      <div className="container px-6 mx-auto relative z-10">
        <motion.div
          className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <motion.span
              className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4 block"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* {"// selected work"} */}
            </motion.span>
            <motion.h2
              className="text-4xl md:text-6xl font-black tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Featured <span className="text-primary">Projects</span>
            </motion.h2>
          </div>
          <motion.p
            className="text-white/50 font-mono text-sm max-w-xs"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {projects.length} projects · Real problems · Production code
          </motion.p>
        </motion.div>

        {/* Alternating arc-scrolling project cards */}
        <div className="max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <ProjectCard key={project.num} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
