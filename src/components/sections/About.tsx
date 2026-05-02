"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Briefcase, Code2 } from "lucide-react";
import { useRef } from "react";

const cards = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "B.Tech in AI & ML at Aditya College of Engineering.",
    badge: "CGPA: 8.5/10.0",
  },
  {
    icon: Briefcase,
    title: "Experience",
    description: "AI Intern at GrowStack.ai. Deployed 20+ production AI agents and RAG pipelines.",
    badge: "70% Manual Effort Slashed",
    featured: true,
  },
  {
    icon: Code2,
    title: "Problem Solving",
    description: "Deep love for algorithmic challenges. Strong analytical abilities.",
    badge: "800+ Problems Solved",
  },
];

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

  // Arc path: cards fan out in an arc as user scrolls
  const card0Rotate = useTransform(scrollYProgress, [0.1, 0.5], [-15, 0]);
  const card0X = useTransform(scrollYProgress, [0.1, 0.5], [-80, 0]);
  const card1Y = useTransform(scrollYProgress, [0.1, 0.5], [60, 0]);
  const card2Rotate = useTransform(scrollYProgress, [0.1, 0.5], [15, 0]);
  const card2X = useTransform(scrollYProgress, [0.1, 0.5], [80, 0]);

  const cardTransforms = [
    { rotate: card0Rotate, x: card0X, y: 0 },
    { rotate: 0, x: 0, y: card1Y },
    { rotate: card2Rotate, x: card2X, y: 0 },
  ];

  return (
    <section ref={containerRef} id="about" className="py-32 relative z-10 bg-[#060606] overflow-hidden">
      {/* Large faded background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[15vw] font-black text-white/[0.02] tracking-tighter whitespace-nowrap">ABOUT ME</span>
      </div>

      <div className="container px-6 mx-auto relative z-10">
        {/* Section heading - left aligned, editorial style */}
        <motion.div
          className="mb-20 max-w-3xl"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <motion.span
            className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4 block"
            initial={{ opacity: 0, letterSpacing: "0.6em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* {"// who am i"} No need */}
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Bridging AI <span className="text-primary">&</span> Engineering
          </h2>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed">
            I build things end-to-end — from schema design to deployment. Specializing in 
            intelligent systems that solve real problems at scale.
          </p>
        </motion.div>

        {/* Arc-fanning cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto" style={{ perspective: 1200 }}>
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              style={{
                rotate: cardTransforms[i].rotate,
                x: cardTransforms[i].x,
                y: cardTransforms[i].y,
              }}
              initial={{ opacity: 0, y: 100, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.15, type: "spring", stiffness: 70 }}
              whileHover={{ y: -20, rotateZ: 0, scale: 1.04, transition: { duration: 0.3 } }}
              className={`relative p-10 rounded-3xl flex flex-col items-start text-left cursor-default
                ${card.featured 
                  ? 'bg-primary/[0.08] border-2 border-primary/30 hover:border-primary' 
                  : 'bg-white/[0.03] border border-white/[0.06] hover:border-primary/40'
                } transition-colors duration-300 group`}
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-3xl">
                <div className={`absolute top-0 right-0 w-px h-full ${card.featured ? 'bg-gradient-to-b from-primary/50 to-transparent' : 'bg-gradient-to-b from-white/10 to-transparent'}`} />
                <div className={`absolute top-0 right-0 h-px w-full ${card.featured ? 'bg-gradient-to-l from-primary/50 to-transparent' : 'bg-gradient-to-l from-white/10 to-transparent'}`} />
              </div>

              <motion.div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${card.featured ? 'bg-primary/20' : 'bg-white/[0.06]'}`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <card.icon size={32} className={card.featured ? "text-primary" : "text-white/60"} />
              </motion.div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{card.title}</h3>
              <p className="text-white/60 mb-8 text-base leading-relaxed flex-grow">{card.description}</p>
              
              <motion.span
                className={`font-bold px-5 py-2 rounded-full text-xs tracking-wider uppercase
                  ${card.featured ? 'bg-primary text-black' : 'bg-white/[0.06] text-white/60 group-hover:bg-primary group-hover:text-black'} transition-all`}
                whileHover={{ scale: 1.1 }}
              >
                {card.badge}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
