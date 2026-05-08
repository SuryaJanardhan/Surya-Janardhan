"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useRef } from "react";

const links = [
  {
    icon: Mail,
    title: "Email",
    value: "chintalajanardhan2004@gmail.com",
    href: "mailto:chintalajanardhan2004@gmail.com",
    label: "Send Message",
    color: "#FFD700",
  },
  {
    icon: FaGithub,
    title: "GitHub",
    value: "SuryaJanardhan",
    href: "https://github.com/SuryaJanardhan",
    label: "View Repos",
    color: "#ffffff",
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    value: "surya-janardhan",
    href: "https://www.linkedin.com/in/surya-janardhan/",
    label: "Connect",
    color: "#0077b5",
  },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  
  const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const bgRotate = useTransform(springScroll, [0, 1], [0, 360]);
  const scale = useTransform(springScroll, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={sectionRef} id="contact" className="py-40 relative z-10 bg-black overflow-hidden">
      {/* Dynamic 3D-like background elements */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full pointer-events-none"
        style={{ rotate: bgRotate, scale }}
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <svg className="w-full h-full opacity-[0.03]" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.1" strokeDasharray="1 2" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.1" strokeDasharray="2 4" />
        </svg>
      </motion.div>

      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main CTA Section */}
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 text-left">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, type: "spring" }}
              >
                <span className="text-primary font-mono text-xs tracking-[0.5em] uppercase mb-6 block">
                  Available for hire
                </span>
                <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-10">
                  LET&apos;S BUILD <br />
                  <span className="text-primary">SOMETHING</span> <br />
                  LEGENDARY.
                </h2>
                <p className="text-white/40 text-xl max-w-md leading-relaxed font-medium">
                  Currently seeking a challenging role where I can push the boundaries of AI and Full-Stack development.
                </p>
              </motion.div>
            </div>

            <div className="flex-1 w-full space-y-6">
              {links.map((link, i) => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="group relative flex items-center justify-between p-8 rounded-[2.5rem] bg-white/[0.01] border border-white/5 hover:bg-white/[0.05] hover:border-primary/40 transition-all duration-700 overflow-hidden shadow-2xl"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1, type: "spring" }}
                  whileHover={{ 
                    x: 10,
                    transition: { duration: 0.3 }
                  }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5,
                    }
                  }}
                >
                  {/* Wavy Background Effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  
                  <div className="flex items-center gap-6 relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-inner">
                      <link.icon size={28} className="text-white/70 group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xs font-mono tracking-widest text-white/20 uppercase mb-1">{link.title}</h3>
                      <p className="text-xl font-bold tracking-tight text-white/90 group-hover:text-primary transition-all duration-500">{link.label}</p>
                    </div>
                  </div>

                  <div className="relative z-10 flex flex-col items-end">
                    <motion.div
                      animate={{
                        x: [0, 5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <ExternalLink size={20} className="text-white/20 group-hover:text-primary transition-all" />
                    </motion.div>
                    <span className="hidden md:block text-[9px] font-mono text-white/10 mt-3 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                      {link.value}
                    </span>
                  </div>

                  {/* Reflection line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-primary/30 transition-all duration-700" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Big background "CONTACT" text */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 pointer-events-none select-none opacity-[0.015]">
            <h2 className="text-[30vw] font-black tracking-tighter">CONTACT</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
