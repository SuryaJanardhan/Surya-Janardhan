export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 bg-black overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          {/* Logo / Brand */}
          <div className="text-2xl font-black tracking-tighter text-white">
            SJ<span className="text-primary">.</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <p className="text-white/30 text-[10px] font-mono uppercase tracking-[0.4em] mb-4">
              Designed & Built with precision
            </p>
            <p className="text-white/20 text-[9px] font-mono tracking-widest">
              &copy; {currentYear} SURYA JANARDHAN — ALL RIGHTS RESERVED
            </p>
          </div>

          {/* Bottom space for dock padding */}
          <div className="h-20 md:h-24" />
        </div>
      </div>
    </footer>
  );
}
