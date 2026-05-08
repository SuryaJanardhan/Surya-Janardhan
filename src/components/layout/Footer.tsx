export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-black border-t border-white/[0.04]">
      <div className="container px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/40 text-xs font-mono tracking-wider">
          &copy; {currentYear} Surya Janardhan.
        </p>
        <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-[0.15em]">
          <a href="#about" className="text-white/40 hover:text-primary transition-colors">About</a>
          <a href="#skills" className="text-white/40 hover:text-primary transition-colors">Skills</a>
          <a href="#projects" className="text-white/40 hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="text-white/40 hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
