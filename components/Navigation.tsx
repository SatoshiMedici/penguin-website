'use client';

interface NavigationProps {
  scrollY: number;
}

export default function Navigation({ scrollY }: NavigationProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[72px]"
      style={{
        background: 'rgba(10, 10, 10, 0.98)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(93, 217, 193, 0.15)',
      }}>
      <nav role="navigation" className="container mx-auto px-6 h-full flex justify-between items-center">
        <div className="text-base font-bold tracking-tight text-white">KRYPTO PENGUS</div>
        <div className="hidden md:flex gap-10 items-center">
          <a href="#home" className="text-white/70 hover:text-white transition-opacity duration-300 text-[16px]">Home</a>
          <a href="#story" className="text-white/70 hover:text-white transition-opacity duration-300 text-[16px]">Story</a>
          <a href="#mint" className="text-white/70 hover:text-white transition-opacity duration-300 text-[16px]">Mint</a>
          <button className="text-sm px-5 py-2 h-9 border border-[#5DD9C1] text-[#5DD9C1] rounded-lg hover:bg-[#5DD9C1] hover:text-black transition-all duration-300">
            Connect
          </button>
        </div>
        <button aria-label="Open mobile menu" className="md:hidden text-2xl text-white/70">☰</button>
      </nav>
    </header>
  );
}
