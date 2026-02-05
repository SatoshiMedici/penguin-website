'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Fade-in animations
      const fadeElements = document.querySelectorAll('.fade-in');
      fadeElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Ultra-Minimal Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/98 backdrop-blur-md border-b border-[rgba(93,217,193,0.15)]">
        <nav className="container mx-auto px-6 md:px-20 h-18 md:h-20 flex justify-between items-center">
          <div className="text-lg md:text-xl font-bold tracking-tight">KRYPTO PENGUS</div>
          <div className="hidden md:flex gap-10 text-base items-center">
            <a href="#home" className="opacity-70 hover:opacity-100 transition-opacity duration-300">Home</a>
            <a href="#story" className="opacity-70 hover:opacity-100 transition-opacity duration-300">Story</a>
            <a href="#mint" className="opacity-70 hover:opacity-100 transition-opacity duration-300">Mint</a>
            <button className="btn-secondary text-sm px-6 py-2 min-h-0 h-9">Connect</button>
          </div>
          <button className="md:hidden text-2xl">☰</button>
        </nav>
      </header>

      {/* HERO SECTION - Premium Redesign */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-[#5DD9C1] overflow-hidden">
        {/* Subtle mountain backdrop (10% opacity, static) */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full">
            <path fill="#2C5F75" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,149.3C672,139,768,149,864,165.3C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 py-32 md:py-40 relative z-10 text-center">
          {/* Massive Pixel Penguin Mascot */}
          <div className="mb-12 md:mb-16 flex justify-center">
            <div className="w-72 h-72 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] bg-white/20 border-4 border-black rounded-2xl flex items-center justify-center backdrop-blur-sm animate-breathing">
              <div className="text-8xl md:text-9xl">🐧</div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 uppercase tracking-tight text-black">
            KRYPTO<br className="md:hidden" /> PENGUS
          </h1>
          
          <p className="text-xl md:text-2xl mb-16 text-black/90 tracking-wide max-w-3xl mx-auto" style={{ letterSpacing: '0.1em' }}>
            Never Give Up. Never Stop Marching.
          </p>

          <div className="flex justify-center mb-20">
            <a href="#mint" className="btn-primary text-lg px-16 min-w-[280px]">
              MINT NOW
            </a>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base opacity-70 text-black">
            <span>3,333 unique penguins</span>
            <span className="hidden md:inline">•</span>
            <span>Sui Network</span>
            <span className="hidden md:inline">•</span>
            <span>Walrus Storage</span>
          </div>
        </div>
      </section>

      {/* STORY SECTION - Simplified & Centered */}
      <section id="story" className="bg-[#0A0A0A] py-20 md:py-40">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 md:mb-20 text-[#5DD9C1] fade-in">
            THE MARCH
          </h2>

          <div className="space-y-10 text-lg md:text-xl opacity-85 mb-16 md:mb-20 max-w-2xl mx-auto fade-in">
            <p>
              In the frozen wilderness, one penguin stands alone.
            </p>
            <p>
              Not because it's lost. Not because it's weak.
            </p>
            <p>
              But because it chose the harder path.
            </p>
            <p>
              While others huddle for warmth, it marches toward the mountain.
            </p>
          </div>

          {/* Story Illustration */}
          <div className="mb-16 md:mb-20 fade-in flex justify-center">
            <div className="w-full max-w-2xl aspect-[3/2] bg-gradient-to-br from-[#4A90A4] to-[#2C5F75] rounded-2xl border-3 border-[#5DD9C1] flex items-center justify-center">
              <div className="text-7xl md:text-9xl">🐧🏔️</div>
            </div>
          </div>

          <div className="space-y-6 text-lg md:text-xl opacity-85 mb-12 fade-in">
            <p className="text-[#5DD9C1] font-semibold">
              3,333 penguins. 3,333 journeys.
            </p>
          </div>

          <p className="text-3xl md:text-5xl font-bold text-[#FF8533] fade-in">
            NEVER. GIVE. UP.
          </p>
        </div>
      </section>

      {/* COLLECTION GALLERY - Premium Grid */}
      <section id="collection" className="bg-[#0A0A0A] py-20 md:py-40 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-4xl md:text-6xl font-bold mb-6 text-[#5DD9C1] fade-in">
            THE COLLECTION
          </h2>
          <p className="text-center text-lg md:text-xl opacity-70 mb-16 md:mb-20 fade-in">
            3,333 unique pixel penguins on Sui
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto mb-16">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div 
                key={num}
                className="card cursor-pointer fade-in aspect-square relative overflow-hidden group"
              >
                <Image
                  src={`/nft-${num}.jpg`}
                  alt={`Krypto Pengus #${num}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6">
                  <span className="text-lg font-bold">#{num}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center fade-in">
            <button className="btn-secondary px-12 py-4">VIEW ALL 3,333</button>
          </div>
        </div>
      </section>

      {/* MINT INTERFACE - Premium Card */}
      <section id="mint" className="bg-[#0A0A0A] py-20 md:py-40 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-4xl md:text-6xl font-bold mb-16 md:mb-20 text-[#5DD9C1] fade-in">
            MINT YOUR PENGUIN
          </h2>

          <div className="max-w-2xl mx-auto">
            <div className="card p-10 md:p-16 space-y-10 fade-in bg-[rgba(93,217,193,0.03)]">
              {/* Tier Display */}
              <div className="text-center space-y-4">
                <div className="text-2xl md:text-3xl font-bold">WHITELIST MINT LIVE</div>
                <div className="text-4xl md:text-5xl font-bold text-[#5DD9C1]">10 SUI</div>
                <div className="text-base opacity-70">per NFT</div>
                <div className="text-sm opacity-60">847 / 1,000 Remaining</div>
              </div>

              <div className="border-t border-gray-800"></div>

              {/* Quantity Selector */}
              <div>
                <div className="flex items-center justify-center gap-6 mb-4">
                  <button className="w-16 h-16 border-3 border-[#5DD9C1] rounded-xl hover:bg-[#5DD9C1] hover:text-black transition-all duration-300 text-2xl font-bold">-</button>
                  <div className="text-4xl font-bold w-20 text-center">1</div>
                  <button className="w-16 h-16 border-3 border-[#5DD9C1] rounded-xl hover:bg-[#5DD9C1] hover:text-black transition-all duration-300 text-2xl font-bold">+</button>
                </div>
                <div className="text-center text-sm opacity-60">(Max: 3 per wallet)</div>
              </div>

              {/* Total */}
              <div className="text-center py-6">
                <div className="text-base opacity-70 mb-2">Total:</div>
                <div className="text-3xl md:text-4xl font-bold text-[#5DD9C1]">10 SUI</div>
              </div>

              {/* Mint Button */}
              <button className="btn-primary w-full text-center justify-center py-6 text-xl">
                MINT NOW
              </button>

              {/* Features */}
              <div className="text-center space-y-2 text-sm opacity-70 pt-6 border-t border-gray-800">
                <div>✓ Instant reveal  •  Sui Network  •  Walrus Storage</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-12 fade-in">
              <div className="flex justify-between text-base mb-3 opacity-80">
                <span>MINTED: 2,153 / 3,333</span>
                <span>64.7%</span>
              </div>
              <div className="h-8 bg-[rgba(93,217,193,0.1)] rounded-full overflow-hidden">
                <div className="h-full bg-[#5DD9C1] rounded-full transition-all duration-1000" style={{ width: '64.7%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY SECTION - Clean Icons */}
      <section id="community" className="bg-[#0A0A0A] py-20 md:py-40 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 md:mb-20 text-[#5DD9C1] fade-in">
            JOIN THE MARCH
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10 max-w-4xl mx-auto">
            {/* X/Twitter */}
            <a 
              href="https://x.com/KryptoPengus" 
              target="_blank" 
              rel="noopener noreferrer"
              className="card p-12 hover:scale-105 transition-all duration-400 fade-in group"
            >
              <div className="text-7xl mb-6 text-[#5DD9C1]">𝕏</div>
              <div className="text-xl font-bold mb-2">@KryptoPengus</div>
              <div className="text-base opacity-70">Follow us on X</div>
            </a>

            {/* Discord */}
            <a 
              href="https://discord.gg/kryptopengus" 
              target="_blank" 
              rel="noopener noreferrer"
              className="card p-12 hover:scale-105 transition-all duration-400 fade-in group"
            >
              <div className="text-7xl mb-6 text-[#5DD9C1]">💬</div>
              <div className="text-xl font-bold mb-2">Discord</div>
              <div className="text-base opacity-70">Join the server</div>
            </a>

            {/* Instagram */}
            <a 
              href="https://instagram.com/kryptopengus" 
              target="_blank" 
              rel="noopener noreferrer"
              className="card p-12 hover:scale-105 transition-all duration-400 fade-in group"
            >
              <div className="text-7xl mb-6 text-[#5DD9C1]">📸</div>
              <div className="text-xl font-bold mb-2">Instagram</div>
              <div className="text-base opacity-70">Follow us</div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl md:text-3xl font-bold mb-6">KRYPTO PENGUS</div>
          <p className="opacity-60 mb-8 text-lg">Never Give Up. Never Stop Marching.</p>
          <div className="flex justify-center gap-8 mb-8 text-base">
            <a href="https://x.com/KryptoPengus" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition">X</a>
            <a href="https://discord.gg/kryptopengus" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition">Discord</a>
            <a href="https://instagram.com/kryptopengus" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition">Instagram</a>
          </div>
          <p className="text-sm opacity-40">© 2026 Krypto Pengus. Built on Sui Network.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes breathing {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        
        .animate-breathing {
          animation: breathing 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
