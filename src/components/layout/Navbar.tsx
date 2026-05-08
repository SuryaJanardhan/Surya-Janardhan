"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import { 
  Home, 
  User, 
  Cpu, 
  Briefcase, 
  Mail
} from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
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
  ];

  return (
    <motion.div 
      className="fixed bottom-6 left-0 right-0 z-50 flex justify-center items-center pointer-events-none"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1, type: "spring", stiffness: 100 }}
    >
      <div className="pointer-events-auto">
        <FloatingDock
          items={links}
          desktopClassName="bg-black/20 backdrop-blur-2xl border-white/10 px-6 py-4 rounded-[2rem]"
          mobileClassName="bg-black/20 backdrop-blur-2xl border-white/10"
        />
      </div>
    </motion.div>
  );
}
