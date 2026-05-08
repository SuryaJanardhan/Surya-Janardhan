"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Terminal, BrainCircuit, Globe, Layout, Database, Wrench } from "lucide-react";
import { FaJava, FaRobot, FaBrain, FaNodeJs, FaReact, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiPython, SiJavascript, SiTypescript, SiExpress, SiFlask, SiNextdotjs, SiTailwindcss, SiRedux, SiMongodb, SiPostgresql, SiRedis, SiRabbitmq, SiApachekafka, SiPostman, SiGithubactions } from "react-icons/si";

const skillCategories = [
  {
    category: "Languages",
    icon: <Terminal size={20} className="text-primary" />,
    skills: [
      { name: "Python", icon: <SiPython /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Java", icon: <FaJava /> },
      { name: "C", icon: null },
      { name: "R", icon: null }
    ]
  },
  {
    category: "AI / ML",
    icon: <BrainCircuit size={20} className="text-primary" />,
    skills: [
      { name: "LangChain", icon: <FaRobot /> },
      { name: "LLMs", icon: <FaBrain /> },
      { name: "LangGraph", icon: <FaRobot /> },
      { name: "AI Agents", icon: <FaRobot /> },
      { name: "RAG", icon: <FaBrain /> },
      { name: "Deep Learning", icon: <FaBrain /> },
      { name: "Machine Learning", icon: <FaRobot /> }
    ]
  },
  {
    category: "Web Frameworks",
    icon: <Globe size={20} className="text-primary" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "RESTful APIs", icon: <Globe size={14} /> },
      { name: "Flask", icon: <SiFlask /> }
    ]
  },
  {
    category: "Frontend",
    icon: <Layout size={20} className="text-primary" />,
    skills: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React Native", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Redux", icon: <SiRedux /> }
    ]
  },
  {
    category: "Databases & Messaging",
    icon: <Database size={20} className="text-primary" />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "SQL", icon: <Database size={14} /> },
      { name: "Redis", icon: <SiRedis /> },
      { name: "RabbitMQ", icon: <SiRabbitmq /> },
      { name: "Kafka", icon: <SiApachekafka /> }
    ]
  },
  {
    category: "Developer Tools",
    icon: <Wrench size={20} className="text-primary" />,
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "VS Code", icon: <Wrench size={14} /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "GitHub Actions", icon: <SiGithubactions /> }
    ]
  }
];

// Horizontal scrolling ticker
function SkillTicker({ skills, direction = 1 }: { skills: { name: string; icon: React.ReactNode }[]; direction?: number }) {
  const doubled = [...skills, ...skills, ...skills];
  return (
    <div className="overflow-hidden py-3">
      <motion.div
        className="flex gap-4 whitespace-nowrap"
        animate={{ x: direction > 0 ? [0, -(skills.length * 160)] : [-(skills.length * 160), 0] }}
        transition={{ duration: skills.length * 5, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((skill, i) => (
          <span
            key={`${skill.name}-${i}`}
            className="flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/[0.06] rounded-full text-sm font-medium text-white/60 hover:text-primary hover:border-primary/30 transition-colors shrink-0"
          >
            {skill.icon}
            {skill.name}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgX = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section ref={sectionRef} id="skills" className="py-32 relative z-10 bg-[#030303] overflow-hidden">
      {/* Parallax background text */}
      <motion.div
        className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none select-none"
        style={{ x: bgX }}
      >
        <span className="text-[18vw] font-black text-white/[0.015] tracking-tighter whitespace-nowrap">
          SKILLS & TOOLS
        </span>
      </motion.div>

      <div className="container px-6 mx-auto relative z-10">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4 block"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* {"// tech stack"} */}
          </motion.span>
          <motion.h2
            className="text-4xl md:text-6xl font-black tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Technical <span className="text-primary">Arsenal</span>
          </motion.h2>
        </motion.div>

        {/* Category blocks with horizontal ticker strips */}
        <div className="space-y-12 max-w-6xl mx-auto">
          {skillCategories.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  {group.icon}
                </div>
                <h3 className="text-lg font-bold text-white/80">{group.category}</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-white/[0.06] to-transparent ml-4" />
              </div>
              <SkillTicker skills={group.skills} direction={idx % 2 === 0 ? 1 : -1} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
