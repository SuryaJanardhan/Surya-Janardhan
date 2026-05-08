"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ 
    target: ref, 
    offset: ["start start", "end start"] 
  });

  const smoothScroll = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });
  
  // Slow zoom in then gone effect
  const scale = useTransform(smoothScroll, [0, 0.5, 1], [1, 1.2, 0.8]);
  const opacity = useTransform(smoothScroll, [0, 0.8, 1], [1, 1, 0]);
  const blur = useTransform(smoothScroll, [0, 0.8], [0, 10]);
  const yText = useTransform(smoothScroll, [0, 1], ["0%", "30%"]);

  const nameLetters = "SURYA".split("");
  const lastNameLetters = "JANARDHAN".split("");

  return (
    <section ref={ref} className="relative min-h-[150vh] flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Background Atmosphere */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[1000px] h-[1000px] rounded-full border border-primary/5 shadow-[0_0_100px_rgba(255,215,0,0.02)]"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.03),transparent_70%)]" />
      </div>

      <motion.div
        className="container relative z-10 px-6 mx-auto text-center"
        style={{ scale, opacity, filter: `blur(${blur}px)`, y: yText, perspective: 1200 }}
      >
        {/* macOS Style Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="inline-flex items-center gap-2 py-2 px-4 mb-12 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-2xl"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/60">
            Available for new challenges
          </span>
        </motion.div>

        {/* Name with elegant staggered reveal */}
        <div className="relative mb-8">
          <div className="flex items-center justify-center gap-1 md:gap-3 mb-2">
            {nameLetters.map((letter, i) => (
              <motion.span
                key={`f-${i}`}
                className="text-7xl md:text-[12rem] font-black leading-none text-white tracking-tighter drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                initial={{ y: 100, opacity: 0, rotateX: -90 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{ duration: 1, delay: 0.8 + i * 0.08, type: "spring", stiffness: 50 }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
          <div className="flex items-center justify-center gap-1 md:gap-2">
            {lastNameLetters.map((letter, i) => (
              <motion.span
                key={`l-${i}`}
                className="text-4xl md:text-[6rem] font-black leading-none text-primary/80 tracking-[0.05em]"
                initial={{ y: 100, opacity: 0, rotateX: 90 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{ duration: 1, delay: 1.2 + i * 0.05, type: "spring", stiffness: 50 }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.div
          className="max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
        >
          <p className="text-lg md:text-xl text-white/40 font-medium leading-relaxed mb-12">
            Engineering high-performance AI systems and <span className="text-white/80">autonomous agent fleets</span>. 
            Bridging the gap between raw research and production-grade applications.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="#projects"
              className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-white text-black rounded-2xl font-black tracking-tight hover:bg-primary transition-all overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              EXPLORE WORK
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/1iHSh3v_KGjj8Ay1q2IqePfb1LvzFmzg0/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center gap-3 px-10 py-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl font-black text-white/70 hover:text-white hover:border-white/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
              GET CV
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Editorial Scroll Cue */}
      <motion.div
        className="absolute bottom-12 left-12 hidden lg:flex flex-col gap-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 0.3, x: 0 }}
        transition={{ delay: 3 }}
      >
        <div className="w-px h-24 bg-gradient-to-b from-primary to-transparent" />
        <span className="text-[9px] font-mono uppercase tracking-[0.5em] [writing-mode:vertical-lr]">Scroll Down</span>
      </motion.div>
    </section>
  );
}
