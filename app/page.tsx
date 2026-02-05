'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mouseVelocity, setMouseVelocity] = useState({ x: 0, y: 0 });
  const lastMousePos = useRef({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

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

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / window.innerWidth;
      const y = (e.clientY - window.innerHeight / 2) / window.innerHeight;

      // Calculate velocity (how fast the mouse is moving)
      const vx = (x - lastMousePos.current.x) * 10;
      const vy = (y - lastMousePos.current.y) * 10;

      lastMousePos.current = { x, y };
      setMousePos({ x, y });
      setMouseVelocity({ x: vx, y: vy });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <main className="min-h-screen">
      {/* Ultra-Minimal Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        scrollY > 50
          ? 'bg-[#FF8533] border-[#FF8533]/50'
          : 'bg-[#0A0A0A]/98 border-[rgba(93,217,193,0.15)]'
      }`}>
        <nav className="container mx-auto px-6 md:px-20 h-18 md:h-20 flex justify-between items-center">
          <div className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${
            scrollY > 50 ? 'text-black' : 'text-white'
          }`}>KRYPTO PENGUS</div>
          <div className="hidden md:flex gap-10 text-base items-center">
            <a href="#home" className={`opacity-70 hover:opacity-100 transition-all duration-300 leading-none ${scrollY > 50 ? 'text-black' : ''}`}>Home</a>
            <a href="#story" className={`opacity-70 hover:opacity-100 transition-all duration-300 leading-none ${scrollY > 50 ? 'text-black' : ''}`}>Story</a>
            <a href="#mint" className={`opacity-70 hover:opacity-100 transition-all duration-300 leading-none ${scrollY > 50 ? 'text-black' : ''}`}>Mint</a>
            <button className={`text-sm px-6 py-1.5 border-2 rounded-lg transition-all duration-300 leading-none flex items-center justify-center ${
              scrollY > 50
                ? 'border-black text-black hover:bg-black hover:text-white'
                : 'border-[#5DD9C1] text-[#5DD9C1] hover:bg-[#5DD9C1] hover:text-black'
            }`}>Connect</button>
          </div>
          <button className={`md:hidden text-2xl transition-colors duration-300 ${scrollY > 50 ? 'text-black' : ''}`}>☰</button>
        </nav>
      </header>

      {/* HERO SECTION - Premium Redesign */}
      <section ref={heroRef} id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#87CEEB] via-[#5DD9C1] to-[#4A90A4] overflow-hidden">
        {/* Animated floating pixel squares - AGGRESSIVE & REACTIVE */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Large glowing orbs - react to velocity */}
          <div
            className="absolute w-40 h-40 rounded-full bg-white/50 blur-3xl top-[15%] left-[10%] transition-transform duration-150 ease-out"
            style={{ transform: `translate(${mousePos.x * -80 + mouseVelocity.x * -200}px, ${mousePos.y * -80 + mouseVelocity.y * -200}px)` }}
          ></div>
          <div
            className="absolute w-56 h-56 rounded-full bg-[#FF8533]/40 blur-3xl top-[60%] right-[10%] transition-transform duration-200 ease-out"
            style={{ transform: `translate(${mousePos.x * -60 + mouseVelocity.x * -150}px, ${mousePos.y * -60 + mouseVelocity.y * -150}px)` }}
          ></div>
          <div
            className="absolute w-32 h-32 rounded-full bg-[#5DD9C1]/30 blur-3xl top-[40%] left-[60%] transition-transform duration-100 ease-out"
            style={{ transform: `translate(${mousePos.x * -100 + mouseVelocity.x * -250}px, ${mousePos.y * -100 + mouseVelocity.y * -250}px)` }}
          ></div>

          {/* Pixel squares - Aggressive movement based on velocity */}
          <div
            className="absolute w-8 h-8 bg-white/70 top-[10%] left-[10%] shadow-lg shadow-white/40 transition-transform duration-75 ease-out"
            style={{ transform: `translate(${mousePos.x * -120 + mouseVelocity.x * -300}px, ${mousePos.y * -120 + mouseVelocity.y * -300}px) rotate(${mouseVelocity.x * 20}deg)` }}
          ></div>
          <div
            className="absolute w-10 h-10 bg-white/60 top-[20%] right-[15%] shadow-lg shadow-white/30 transition-transform duration-100 ease-out"
            style={{ transform: `translate(${mousePos.x * -150 + mouseVelocity.x * -350}px, ${mousePos.y * -150 + mouseVelocity.y * -350}px) rotate(${mouseVelocity.x * -15}deg)` }}
          ></div>
          <div
            className="absolute w-6 h-6 bg-[#FF8533]/80 top-[30%] left-[25%] shadow-lg shadow-orange-500/40 transition-transform duration-50 ease-out"
            style={{ transform: `translate(${mousePos.x * -180 + mouseVelocity.x * -400}px, ${mousePos.y * -180 + mouseVelocity.y * -400}px) rotate(${mouseVelocity.x * 25}deg)` }}
          ></div>
          <div
            className="absolute w-12 h-12 bg-white/55 top-[15%] right-[30%] shadow-lg shadow-white/30 transition-transform duration-125 ease-out"
            style={{ transform: `translate(${mousePos.x * -100 + mouseVelocity.x * -250}px, ${mousePos.y * -100 + mouseVelocity.y * -250}px) rotate(${mouseVelocity.x * -10}deg)` }}
          ></div>
          <div
            className="absolute w-7 h-7 bg-[#5DD9C1]/70 top-[40%] left-[5%] shadow-lg shadow-teal-500/40 transition-transform duration-75 ease-out"
            style={{ transform: `translate(${mousePos.x * -140 + mouseVelocity.x * -320}px, ${mousePos.y * -140 + mouseVelocity.y * -320}px) rotate(${mouseVelocity.x * 18}deg)` }}
          ></div>
          <div
            className="absolute w-14 h-14 bg-white/50 top-[25%] right-[5%] shadow-lg shadow-white/25 transition-transform duration-150 ease-out"
            style={{ transform: `translate(${mousePos.x * -90 + mouseVelocity.x * -200}px, ${mousePos.y * -90 + mouseVelocity.y * -200}px) rotate(${mouseVelocity.x * -12}deg)` }}
          ></div>
          <div
            className="absolute w-5 h-5 bg-[#FF8533]/65 top-[35%] right-[40%] shadow-lg shadow-orange-500/30 transition-transform duration-50 ease-out"
            style={{ transform: `translate(${mousePos.x * -200 + mouseVelocity.x * -450}px, ${mousePos.y * -200 + mouseVelocity.y * -450}px) rotate(${mouseVelocity.x * 30}deg)` }}
          ></div>
          <div
            className="absolute w-9 h-9 bg-white/65 top-[5%] left-[40%] shadow-lg shadow-white/35 transition-transform duration-100 ease-out"
            style={{ transform: `translate(${mousePos.x * -160 + mouseVelocity.x * -380}px, ${mousePos.y * -160 + mouseVelocity.y * -380}px) rotate(${mouseVelocity.x * -20}deg)` }}
          ></div>
          <div
            className="absolute w-8 h-8 bg-[#2C5F75]/60 top-[50%] right-[20%] shadow-lg shadow-blue-500/30 transition-transform duration-75 ease-out"
            style={{ transform: `translate(${mousePos.x * -130 + mouseVelocity.x * -300}px, ${mousePos.y * -130 + mouseVelocity.y * -300}px) rotate(${mouseVelocity.x * 15}deg)` }}
          ></div>
          <div
            className="absolute w-6 h-6 bg-white/75 top-[45%] left-[30%] shadow-lg shadow-white/40 transition-transform duration-50 ease-out"
            style={{ transform: `translate(${mousePos.x * -220 + mouseVelocity.x * -500}px, ${mousePos.y * -220 + mouseVelocity.y * -500}px) rotate(${mouseVelocity.x * -25}deg)` }}
          ></div>
          <div
            className="absolute w-4 h-4 bg-[#5DD9C1]/80 top-[60%] left-[20%] shadow-lg shadow-teal-500/40 transition-transform duration-50 ease-out"
            style={{ transform: `translate(${mousePos.x * -250 + mouseVelocity.x * -550}px, ${mousePos.y * -250 + mouseVelocity.y * -550}px) rotate(${mouseVelocity.x * 35}deg)` }}
          ></div>
        </div>

        {/* Pixel iceberg mountains - parallax on scroll */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          {/* Back layer - darker, moves slower */}
          <svg
            viewBox="0 0 1440 200"
            className="absolute bottom-0 w-full opacity-40"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <polygon fill="#2C5F75" points="0,200 100,100 200,150 300,80 400,120 500,60 600,100 700,40 800,90 900,50 1000,80 1100,30 1200,70 1300,100 1440,50 1440,200" />
          </svg>
          {/* Front layer - lighter, moves faster */}
          <svg
            viewBox="0 0 1440 150"
            className="absolute bottom-0 w-full opacity-70"
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          >
            <polygon fill="#FFFFFF" points="0,150 150,80 250,120 400,60 550,100 700,40 850,90 1000,50 1150,80 1300,40 1440,70 1440,150" />
          </svg>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 py-32 md:py-40 relative z-10 text-center">
          {/* Massive Pixel Penguin Mascot - reactive to mouse */}
          <div
            className="mb-12 md:mb-16 flex justify-center transition-transform duration-150 ease-out"
            style={{ transform: `translate(${mousePos.x * 30 + mouseVelocity.x * 50}px, ${mousePos.y * 30 + mouseVelocity.y * 50}px)` }}
          >
            <div className="w-72 h-72 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] border-4 border-black rounded-2xl overflow-hidden animate-breathing relative shadow-2xl shadow-black/30">
              <Image
                src="/hero-penguin.png"
                alt="Krypto Pengus Hero"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 uppercase tracking-tight text-black drop-shadow-lg">
            KRYPTO<br className="md:hidden" /> PENGUS
          </h1>

          <p className="text-xl md:text-2xl mb-16 text-black/90 tracking-wide max-w-3xl mx-auto" style={{ letterSpacing: '0.1em' }}>
            Never Give Up. Never Stop Marching.
          </p>

          <div className="flex justify-center mb-20">
            <a href="#mint" className="btn-primary text-lg px-16 min-w-[280px] shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-shadow">
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

      {/* STORY SECTION - Blends from hero */}
      <section id="story" className="relative py-20 md:py-40 overflow-hidden">
        {/* Gradient background blending from hero */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#4A90A4] via-[#1a3a4a] to-[#0d1f2a]"></div>

        {/* Ambient glows with hero colors */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#5DD9C1]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#87CEEB]/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#FF8533]/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-[#4A90A4]/20 rounded-full blur-3xl pointer-events-none"></div>

        {/* Floating pixels */}
        <div className="absolute w-4 h-4 bg-[#5DD9C1]/50 top-[20%] left-[5%] animate-float-slow"></div>
        <div className="absolute w-5 h-5 bg-[#FF8533]/40 top-[60%] right-[8%] animate-float-medium"></div>
        <div className="absolute w-3 h-3 bg-[#87CEEB]/40 top-[40%] left-[90%] animate-float-fast"></div>
        <div className="absolute w-4 h-4 bg-white/30 top-[80%] left-[15%] animate-float-medium"></div>

        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 md:mb-20 text-[#5DD9C1] fade-in">
            THE MARCH
          </h2>

          <div className="space-y-10 text-lg md:text-xl opacity-85 mb-16 md:mb-20 max-w-2xl mx-auto fade-in">
            <p>
              In the frozen wilderness, one penguin stands alone.
            </p>
            <p>
              Not because it&apos;s lost. Not because it&apos;s weak.
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
            <div className="w-full max-w-2xl aspect-[3/2] bg-gradient-to-br from-[#4A90A4] to-[#2C5F75] rounded-2xl border-3 border-[#5DD9C1] flex items-center justify-center shadow-2xl shadow-[#5DD9C1]/20">
              <div className="text-7xl md:text-9xl">🐧🏔️</div>
            </div>
          </div>

          <div className="space-y-6 text-lg md:text-xl opacity-85 mb-12 fade-in">
            <p className="text-[#5DD9C1] font-semibold">
              3,333 penguins. 3,333 journeys.
            </p>
          </div>

          <p className="text-3xl md:text-5xl font-bold text-[#FF8533] fade-in drop-shadow-lg">
            NEVER. GIVE. UP.
          </p>
        </div>
      </section>

      {/* COLLECTION GALLERY - Seamless flow */}
      <section id="collection" className="relative py-20 md:py-40 overflow-hidden">
        {/* Gradient background continuing the flow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1f2a] via-[#0a1620] to-[#0d1a24]"></div>

        {/* Ambient glows with hero palette */}
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-[#4A90A4]/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#5DD9C1]/12 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-[#FF8533]/12 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#87CEEB]/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Floating pixels */}
        <div className="absolute w-4 h-4 bg-[#5DD9C1]/40 top-[10%] right-[15%] animate-float-medium"></div>
        <div className="absolute w-3 h-3 bg-[#87CEEB]/30 top-[70%] left-[10%] animate-float-slow"></div>
        <div className="absolute w-3 h-3 bg-[#FF8533]/35 top-[50%] right-[5%] animate-float-fast"></div>

        <div className="container mx-auto px-6 relative z-10">
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
                className="card cursor-pointer fade-in aspect-square relative overflow-hidden group hover:shadow-xl hover:shadow-[#5DD9C1]/20"
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
            <button className="btn-secondary px-12 py-4 hover:shadow-lg hover:shadow-[#5DD9C1]/20 transition-shadow">VIEW ALL 3,333</button>
          </div>
        </div>
      </section>

      {/* MINT INTERFACE - Seamless flow */}
      <section id="mint" className="relative py-20 md:py-40 overflow-hidden">
        {/* Gradient background continuing the flow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1a24] via-[#0f1c28] to-[#0a1520]"></div>

        {/* Central glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#5DD9C1]/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Ambient glows with hero palette */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#4A90A4]/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-[#FF8533]/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#87CEEB]/12 rounded-full blur-3xl pointer-events-none"></div>

        {/* Floating pixels */}
        <div className="absolute w-5 h-5 bg-[#5DD9C1]/45 top-[15%] left-[10%] animate-float-slow"></div>
        <div className="absolute w-4 h-4 bg-[#FF8533]/40 bottom-[20%] right-[12%] animate-float-medium"></div>
        <div className="absolute w-3 h-3 bg-[#87CEEB]/35 top-[60%] left-[85%] animate-float-fast"></div>
        <div className="absolute w-3 h-3 bg-white/25 top-[30%] right-[8%] animate-float-slow"></div>

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-center text-4xl md:text-6xl font-bold mb-16 md:mb-20 text-[#5DD9C1] fade-in">
            MINT YOUR PENGUIN
          </h2>

          <div className="max-w-2xl mx-auto">
            <div className="card p-10 md:p-16 space-y-10 fade-in bg-[rgba(93,217,193,0.03)] hover:shadow-2xl hover:shadow-[#5DD9C1]/10 transition-shadow duration-500">
              {/* Tier Display */}
              <div className="text-center space-y-4">
                <div className="text-2xl md:text-3xl font-bold">WHITELIST MINT LIVE</div>
                <div className="text-4xl md:text-5xl font-bold text-[#5DD9C1] drop-shadow-lg">10 SUI</div>
                <div className="text-base opacity-70">per NFT</div>
                <div className="text-sm opacity-60">847 / 1,000 Remaining</div>
              </div>

              <div className="border-t border-gray-800"></div>

              {/* Quantity Selector */}
              <div>
                <div className="flex items-center justify-center gap-6 mb-4">
                  <button className="w-16 h-16 border-3 border-[#5DD9C1] rounded-xl hover:bg-[#5DD9C1] hover:text-black transition-all duration-300 text-2xl font-bold hover:shadow-lg hover:shadow-[#5DD9C1]/30">-</button>
                  <div className="text-4xl font-bold w-20 text-center">1</div>
                  <button className="w-16 h-16 border-3 border-[#5DD9C1] rounded-xl hover:bg-[#5DD9C1] hover:text-black transition-all duration-300 text-2xl font-bold hover:shadow-lg hover:shadow-[#5DD9C1]/30">+</button>
                </div>
                <div className="text-center text-sm opacity-60">(Max: 3 per wallet)</div>
              </div>

              {/* Total */}
              <div className="text-center py-6">
                <div className="text-base opacity-70 mb-2">Total:</div>
                <div className="text-3xl md:text-4xl font-bold text-[#5DD9C1]">10 SUI</div>
              </div>

              {/* Mint Button */}
              <button className="btn-primary w-full text-center justify-center py-6 text-xl shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-shadow">
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
                <div className="h-full bg-gradient-to-r from-[#5DD9C1] to-[#4A90A4] rounded-full transition-all duration-1000 shadow-lg shadow-[#5DD9C1]/30" style={{ width: '64.7%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY SECTION - Seamless flow */}
      <section id="community" className="relative py-20 md:py-40 overflow-hidden">
        {/* Gradient background continuing the flow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1520] via-[#0c1822] to-[#081018]"></div>

        {/* Ambient glows with hero palette */}
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#5DD9C1]/12 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#4A90A4]/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-[#FF8533]/12 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[#87CEEB]/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Floating pixels */}
        <div className="absolute w-4 h-4 bg-[#5DD9C1]/45 top-[25%] right-[20%] animate-float-slow"></div>
        <div className="absolute w-5 h-5 bg-[#FF8533]/35 bottom-[30%] left-[15%] animate-float-medium"></div>
        <div className="absolute w-3 h-3 bg-[#87CEEB]/30 top-[60%] left-[5%] animate-float-fast"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 md:mb-20 text-[#5DD9C1] fade-in">
            JOIN THE MARCH
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10 max-w-4xl mx-auto">
            {/* X/Twitter */}
            <a
              href="https://x.com/KryptoPengus"
              target="_blank"
              rel="noopener noreferrer"
              className="card p-12 hover:scale-105 transition-all duration-400 fade-in group hover:shadow-xl hover:shadow-[#5DD9C1]/20"
            >
              <div className="text-7xl mb-6 text-[#5DD9C1] group-hover:scale-110 transition-transform">𝕏</div>
              <div className="text-xl font-bold mb-2">@KryptoPengus</div>
              <div className="text-base opacity-70">Follow us on X</div>
            </a>

            {/* Discord */}
            <a
              href="https://discord.gg/kryptopengus"
              target="_blank"
              rel="noopener noreferrer"
              className="card p-12 hover:scale-105 transition-all duration-400 fade-in group hover:shadow-xl hover:shadow-[#5DD9C1]/20"
            >
              <div className="text-7xl mb-6 text-[#5DD9C1] group-hover:scale-110 transition-transform">💬</div>
              <div className="text-xl font-bold mb-2">Discord</div>
              <div className="text-base opacity-70">Join the server</div>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/kryptopengus"
              target="_blank"
              rel="noopener noreferrer"
              className="card p-12 hover:scale-105 transition-all duration-400 fade-in group hover:shadow-xl hover:shadow-[#5DD9C1]/20"
            >
              <div className="text-7xl mb-6 text-[#5DD9C1] group-hover:scale-110 transition-transform">📸</div>
              <div className="text-xl font-bold mb-2">Instagram</div>
              <div className="text-base opacity-70">Follow us</div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Seamless ending */}
      <footer className="relative py-16 overflow-hidden">
        {/* Gradient background blending to dark */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#081018] to-[#050a0f]"></div>

        {/* Subtle ambient glows */}
        <div className="absolute top-0 left-1/4 w-64 h-32 bg-[#5DD9C1]/8 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#4A90A4]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="text-2xl md:text-3xl font-bold mb-6">KRYPTO PENGUS</div>
          <p className="opacity-60 mb-8 text-lg">Never Give Up. Never Stop Marching.</p>
          <div className="flex justify-center gap-8 mb-8 text-base">
            <a href="https://x.com/KryptoPengus" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 hover:text-[#5DD9C1] transition">X</a>
            <a href="https://discord.gg/kryptopengus" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 hover:text-[#5DD9C1] transition">Discord</a>
            <a href="https://instagram.com/kryptopengus" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 hover:text-[#5DD9C1] transition">Instagram</a>
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

        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-25px) rotate(5deg); opacity: 1; }
        }

        @keyframes float-medium {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.5; }
          50% { transform: translateY(-35px) rotate(-5deg); opacity: 0.9; }
        }

        @keyframes float-fast {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.4; }
          50% { transform: translateY(-20px) rotate(3deg); opacity: 0.8; }
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float-fast 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
