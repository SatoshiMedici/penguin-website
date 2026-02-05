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
        if (rect.top < window.innerHeight * 0.8) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-[rgba(93,217,193,0.2)]">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight">KRYPTO PENGUS</div>
          <div className="hidden md:flex gap-8 text-sm items-center">
            <a href="#home" className="opacity-80 hover:opacity-100 transition">Home</a>
            <a href="#story" className="opacity-80 hover:opacity-100 transition">Story</a>
            <a href="#collection" className="opacity-80 hover:opacity-100 transition">Collection</a>
            <a href="#mint" className="opacity-80 hover:opacity-100 transition">Mint</a>
            <button className="btn-secondary text-xs px-4 py-2">Connect Wallet</button>
          </div>
          {/* Mobile menu button */}
          <button className="md:hidden text-2xl">☰</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#5DD9C1] to-[#2C5F75]">
        {/* Parallax Mountains */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Layer 1 - Horizon */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-2 bg-[#1A5F7A]"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          />
          
          {/* Layer 2 - Distant Mountains */}
          <div 
            className="absolute bottom-0 left-0 right-0"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          >
            <svg viewBox="0 0 1440 320" className="w-full" style={{ opacity: 0.2 }}>
              <path fill="#2C5F75" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,90.7C960,96,1056,128,1152,138.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
          
          {/* Layer 3 - Mid Mountains */}
          <div 
            className="absolute bottom-0 left-0 right-0"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          >
            <svg viewBox="0 0 1440 320" className="w-full" style={{ opacity: 0.4 }}>
              <path fill="#4A90A4" d="M0,224L48,213.3C96,203,192,181,288,176C384,171,480,181,576,197.3C672,213,768,235,864,229.3C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
          
          {/* Layer 4 - Closest Mountains */}
          <div 
            className="absolute bottom-0 left-0 right-0"
            style={{ transform: `translateY(${scrollY * 0.8}px)` }}
          >
            <svg viewBox="0 0 1440 320" className="w-full" style={{ opacity: 0.6 }}>
              <path fill="#2C5F75" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,149.3C672,139,768,149,864,165.3C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 py-20 relative z-10 text-center">
          {/* Penguin Character Placeholder */}
          <div className="mb-8 flex justify-center">
            <div className="w-64 h-64 md:w-96 md:h-96 bg-white/10 border-4 border-black rounded-lg flex items-center justify-center backdrop-blur-sm animate-bounce-slow">
              <div className="text-6xl">🐧</div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase tracking-wider text-white drop-shadow-lg">
            THE JOURNEY<br />BEGINS
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 opacity-90 max-w-2xl mx-auto">
            One Penguin. 3,333 Stories.
          </p>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto">
            Never Give Up. Never Stop Marching.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#mint" className="btn-primary">MINT NOW</a>
            <a href="https://discord.gg/kryptopengus" target="_blank" rel="noopener noreferrer" className="btn-secondary">JOIN DISCORD</a>
          </div>

          <div className="mt-16 animate-bounce">
            <p className="text-sm opacity-60">Scroll to explore ↓</p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="bg-[#0A0A0A] py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-4xl md:text-5xl font-bold mb-16 text-[#5DD9C1] fade-in">
            THE MARCH
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Illustration Placeholder */}
            <div className="fade-in">
              <div className="aspect-square bg-gradient-to-br from-[#4A90A4] to-[#2C5F75] rounded-lg border-2 border-[#5DD9C1] flex items-center justify-center">
                <div className="text-8xl">🐧🏔️</div>
              </div>
            </div>

            {/* Story Text */}
            <div className="space-y-6 text-lg opacity-80 fade-in">
              <p>
                In the frozen wilderness, one penguin stands alone.
              </p>
              <p>
                Not because it's lost.<br />
                Not because it's weak.
              </p>
              <p>
                But because it chose the harder path.
              </p>
              <p>
                While others huddle for warmth, it marches toward the mountain.
              </p>
              <p>
                <strong className="text-[#5DD9C1]">3,333 penguins.</strong><br />
                <strong className="text-[#5DD9C1]">3,333 journeys of persistence.</strong><br />
                One shared truth:
              </p>
              <p className="text-2xl md:text-3xl font-bold text-[#FF8533]">
                Never. Give. Up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Gallery */}
      <section id="collection" className="bg-[#0A0A0A] py-24 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-4xl md:text-5xl font-bold mb-4 text-[#5DD9C1] fade-in">
            THE COLLECTION
          </h2>
          <p className="text-center text-lg opacity-70 mb-16 fade-in">
            3,333 unique pixel penguins on Sui
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <div 
                key={num}
                className="card pixel-glitch cursor-pointer fade-in aspect-square relative overflow-hidden group"
              >
                <Image
                  src={`/nft-${num}.jpg`}
                  alt={`Krypto Pengus #${num}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-sm font-bold">#{num}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 fade-in">
            <button className="btn-primary">EXPLORE FULL COLLECTION</button>
          </div>
        </div>
      </section>

      {/* Mint Interface */}
      <section id="mint" className="bg-[#0A0A0A] py-24 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-4xl md:text-5xl font-bold mb-16 text-[#5DD9C1] fade-in">
            MINT YOUR PENGUIN
          </h2>

          <div className="max-w-lg mx-auto">
            <div className="card p-8 md:p-12 space-y-6 fade-in">
              {/* Tier Display */}
              <div className="bg-[#FF8533]/10 border-2 border-[#FF8533] rounded-lg p-6 text-center">
                <div className="text-sm opacity-70 mb-2">CURRENT TIER</div>
                <div className="text-2xl font-bold mb-4">WHITELIST</div>
                <div className="text-lg">Price: <strong>10 SUI</strong> per NFT</div>
                <div className="text-sm mt-2 opacity-80">Remaining: 847 / 1,000</div>
              </div>

              {/* Wallet Connection */}
              <div className="bg-[#5DD9C1]/10 border-2 border-[#5DD9C1] rounded-lg p-4 flex items-center justify-between">
                <div>
                  <div className="text-xs opacity-70">Wallet Status</div>
                  <div className="font-bold">Not Connected</div>
                </div>
                <button className="btn-secondary text-xs px-4 py-2">Connect</button>
              </div>

              {/* Quantity Selector */}
              <div>
                <div className="text-sm mb-2 opacity-70">Quantity:</div>
                <div className="flex items-center gap-4">
                  <button className="w-12 h-12 border-2 border-[#5DD9C1] rounded-lg hover:bg-[#5DD9C1] hover:text-black transition">-</button>
                  <div className="flex-1 text-center text-2xl font-bold">1</div>
                  <button className="w-12 h-12 border-2 border-[#5DD9C1] rounded-lg hover:bg-[#5DD9C1] hover:text-black transition">+</button>
                </div>
                <div className="text-xs mt-2 opacity-60 text-center">(Max: 3 per wallet)</div>
              </div>

              {/* Total */}
              <div className="text-center py-4">
                <div className="text-sm opacity-70">Total:</div>
                <div className="text-3xl font-bold text-[#5DD9C1]">10 SUI</div>
              </div>

              {/* Mint Button */}
              <button className="btn-primary w-full text-center justify-center py-4">
                MINT NOW
              </button>

              {/* Features */}
              <div className="space-y-2 text-sm opacity-70 pt-4 border-t border-gray-800">
                <div>✓ Instant reveal</div>
                <div>✓ Secured on Sui Network</div>
                <div>✓ Stored on Walrus Protocol</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-12 fade-in">
              <div className="flex justify-between text-sm mb-2">
                <span>MINTED: 2,153 / 3,333</span>
                <span>64.7%</span>
              </div>
              <div className="h-6 bg-[rgba(93,217,193,0.1)] rounded-full overflow-hidden">
                <div className="h-full bg-[#5DD9C1] rounded-full" style={{ width: '64.7%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="bg-[#0A0A0A] py-24 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#5DD9C1] fade-in">
            JOIN THE MARCH
          </h2>
          <p className="text-lg opacity-70 mb-16 fade-in">
            Connect with the community across platforms
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* X/Twitter */}
            <a 
              href="https://x.com/KryptoPengus" 
              target="_blank" 
              rel="noopener noreferrer"
              className="card p-8 hover:scale-105 transition-transform fade-in group"
            >
              <div className="text-6xl mb-4">𝕏</div>
              <div className="text-xl font-bold mb-2">@KryptoPengus</div>
              <div className="text-sm opacity-70">Follow us on X</div>
            </a>

            {/* Discord */}
            <a 
              href="https://discord.gg/kryptopengus" 
              target="_blank" 
              rel="noopener noreferrer"
              className="card p-8 hover:scale-105 transition-transform fade-in group"
            >
              <div className="text-6xl mb-4">💬</div>
              <div className="text-xl font-bold mb-2">Discord</div>
              <div className="text-sm opacity-70">Join the server</div>
            </a>

            {/* Instagram */}
            <a 
              href="https://instagram.com/kryptopengus" 
              target="_blank" 
              rel="noopener noreferrer"
              className="card p-8 hover:scale-105 transition-transform fade-in group"
            >
              <div className="text-6xl mb-4">📸</div>
              <div className="text-xl font-bold mb-2">Instagram</div>
              <div className="text-sm opacity-70">Follow us</div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-bold mb-4">KRYPTO PENGUS</div>
          <p className="opacity-60 mb-6">Never Give Up. Never Stop Marching.</p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="https://x.com/KryptoPengus" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition">X</a>
            <a href="https://discord.gg/kryptopengus" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition">Discord</a>
            <a href="https://instagram.com/kryptopengus" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition">Instagram</a>
          </div>
          <p className="text-sm opacity-40">© 2026 Krypto Pengus. Built on Sui Network.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
