"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import { 
  Home, 
  User, 
  Cpu, 
  Briefcase, 
  Mail, 
  Github, 
  Linkedin 
} from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  // Auto-hide navbar container on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 200) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const links = [
    {
      title: "Home",
      icon: <Home className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "About",
      icon: <User className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#about",
    },
    {
      title: "Skills",
      icon: <Cpu className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#skills",
    },
    {
      title: "Projects",
      icon: <Briefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#projects",
    },
    {
      title: "Contact",
      icon: <Mail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#contact",
    },
    {
      title: "GitHub",
      icon: <Github className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://github.com/Surya2004-janardhan",
    },
    {
      title: "LinkedIn",
      icon: <Linkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://www.linkedin.com/in/surya-janardhan/",
    },
  ];

  return (
    <motion.div 
      className="fixed bottom-10 left-0 right-0 z-50 flex justify-center items-center pointer-events-none"
      animate={{ y: hidden ? 100 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="pointer-events-auto">
        <FloatingDock
          items={links}
          desktopClassName="bg-black/40 backdrop-blur-md border-white/10"
          mobileClassName="bg-black/40 backdrop-blur-md border-white/10"
        />
      </div>
    </motion.div>
  );
}
