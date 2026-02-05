'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [smoothMouse, setSmoothMouse] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number>();

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
      setMousePos({ x, y });
    };

    // Smooth lerping animation for buttery movement
    const animate = () => {
      setSmoothMouse(prev => ({
        x: prev.x + (mousePos.x - prev.x) * 0.08,
        y: prev.y + (mousePos.y - prev.y) * 0.08
      }));
      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll();
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [mousePos]);

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        scrollY > 50
          ? 'bg-[#FF8533] border-[#FF8533]/50'
          : 'bg-[#0A0A0A]/90 border-white/10'
      }`}>
        <nav className="container mx-auto px-6 md:px-20 h-16 md:h-20 flex justify-between items-center">
          <div className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${
            scrollY > 50 ? 'text-black' : 'text-white'
          }`}>KRYPTO PENGUS</div>
          <div className="hidden md:flex gap-10 text-base items-center">
            <a href="#home" className={`opacity-70 hover:opacity-100 transition-all duration-300 ${scrollY > 50 ? 'text-black' : 'text-white'}`}>Home</a>
            <a href="#story" className={`opacity-70 hover:opacity-100 transition-all duration-300 ${scrollY > 50 ? 'text-black' : 'text-white'}`}>Story</a>
            <a href="#mint" className={`opacity-70 hover:opacity-100 transition-all duration-300 ${scrollY > 50 ? 'text-black' : 'text-white'}`}>Mint</a>
            <button className={`text-sm px-6 py-2 border-2 rounded-lg transition-all duration-300 ${
              scrollY > 50
                ? 'border-black text-black hover:bg-black hover:text-white'
                : 'border-white text-white opacity-70 hover:opacity-100 hover:bg-white hover:text-black'
            }`}>Connect</button>
          </div>
          <button className={`md:hidden text-2xl transition-colors duration-300 ${scrollY > 50 ? 'text-black' : 'text-white'}`}>☰</button>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#87CEEB] via-[#7EC8E3] to-[#5DD9C1] overflow-hidden">
        {/* Floating elements - subtle, smooth parallax */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Soft glowing orbs */}
          <div
            className="absolute w-64 h-64 rounded-full bg-white/30 blur-3xl top-[10%] left-[5%]"
            style={{ transform: `translate(${smoothMouse.x * -20}px, ${smoothMouse.y * -20}px)` }}
          />
          <div
            className="absolute w-80 h-80 rounded-full bg-[#FF8533]/20 blur-3xl top-[50%] right-[5%]"
            style={{ transform: `translate(${smoothMouse.x * -15}px, ${smoothMouse.y * -15}px)` }}
          />
          <div
            className="absolute w-48 h-48 rounded-full bg-[#5DD9C1]/25 blur-3xl top-[30%] left-[50%]"
            style={{ transform: `translate(${smoothMouse.x * -25}px, ${smoothMouse.y * -25}px)` }}
          />

          {/* Pixel squares - gentle movement */}
          <div
            className="absolute w-6 h-6 bg-white/50 top-[15%] left-[15%] shadow-lg shadow-white/20"
            style={{ transform: `translate(${smoothMouse.x * -30}px, ${smoothMouse.y * -30}px)` }}
          />
          <div
            className="absolute w-8 h-8 bg-white/40 top-[25%] right-[20%] shadow-lg shadow-white/15"
            style={{ transform: `translate(${smoothMouse.x * -35}px, ${smoothMouse.y * -35}px)` }}
          />
          <div
            className="absolute w-5 h-5 bg-[#FF8533]/50 top-[35%] left-[30%] shadow-lg shadow-orange-400/20"
            style={{ transform: `translate(${smoothMouse.x * -40}px, ${smoothMouse.y * -40}px)` }}
          />
          <div
            className="absolute w-10 h-10 bg-white/35 top-[20%] right-[35%] shadow-lg shadow-white/15"
            style={{ transform: `translate(${smoothMouse.x * -25}px, ${smoothMouse.y * -25}px)` }}
          />
          <div
            className="absolute w-4 h-4 bg-[#5DD9C1]/60 top-[45%] left-[8%] shadow-lg shadow-teal-400/25"
            style={{ transform: `translate(${smoothMouse.x * -45}px, ${smoothMouse.y * -45}px)` }}
          />
          <div
            className="absolute w-7 h-7 bg-white/45 top-[10%] left-[45%] shadow-lg shadow-white/20"
            style={{ transform: `translate(${smoothMouse.x * -30}px, ${smoothMouse.y * -30}px)` }}
          />
          <div
            className="absolute w-5 h-5 bg-[#FF8533]/40 top-[40%] right-[15%] shadow-lg shadow-orange-400/15"
            style={{ transform: `translate(${smoothMouse.x * -35}px, ${smoothMouse.y * -35}px)` }}
          />
          <div
            className="absolute w-6 h-6 bg-white/50 top-[55%] right-[40%] shadow-lg shadow-white/20"
            style={{ transform: `translate(${smoothMouse.x * -28}px, ${smoothMouse.y * -28}px)` }}
          />
        </div>

        {/* Detailed Pixel Mountains - 3 layers */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          {/* Layer 3 - Furthest back, dark blue-gray */}
          <svg
            viewBox="0 0 1440 280"
            className="absolute bottom-0 w-full"
            style={{ transform: `translateY(${scrollY * 0.08}px)` }}
            preserveAspectRatio="none"
          >
            <polygon
              fill="#3D6B7D"
              fillOpacity="0.6"
              points="0,280 0,180 40,160 80,175 120,140 160,155 200,120 240,135 280,95 320,115 360,80 400,100 440,65 480,85 520,50 560,75 600,45 640,70 680,40 720,60 760,35 800,55 840,30 880,50 920,25 960,45 1000,30 1040,50 1080,35 1120,55 1160,40 1200,60 1240,45 1280,65 1320,50 1360,70 1400,55 1440,75 1440,280"
            />
          </svg>

          {/* Layer 2 - Middle, medium blue with snow caps */}
          <svg
            viewBox="0 0 1440 220"
            className="absolute bottom-0 w-full"
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
            preserveAspectRatio="none"
          >
            <polygon
              fill="#4A90A4"
              fillOpacity="0.8"
              points="0,220 0,150 60,130 100,145 140,110 180,125 220,90 260,105 300,70 340,90 380,60 420,80 460,50 500,70 540,45 580,65 620,40 660,60 700,35 740,55 780,30 820,50 860,28 900,48 940,32 980,52 1020,38 1060,58 1100,42 1140,62 1180,48 1220,68 1260,52 1300,72 1340,58 1380,78 1440,60 1440,220"
            />
            {/* Snow caps */}
            <polygon fill="#E8F4F8" fillOpacity="0.9" points="220,90 240,95 260,105 240,100" />
            <polygon fill="#E8F4F8" fillOpacity="0.9" points="380,60 400,65 420,80 400,72" />
            <polygon fill="#E8F4F8" fillOpacity="0.9" points="540,45 560,50 580,65 560,55" />
            <polygon fill="#E8F4F8" fillOpacity="0.9" points="700,35 720,40 740,55 720,45" />
            <polygon fill="#E8F4F8" fillOpacity="0.9" points="860,28 880,33 900,48 880,38" />
            <polygon fill="#E8F4F8" fillOpacity="0.9" points="1020,38 1040,43 1060,58 1040,48" />
          </svg>

          {/* Layer 1 - Front, white/light ice */}
          <svg
            viewBox="0 0 1440 180"
            className="absolute bottom-0 w-full"
            style={{ transform: `translateY(${scrollY * 0.02}px)` }}
            preserveAspectRatio="none"
          >
            <polygon
              fill="#FFFFFF"
              fillOpacity="0.95"
              points="0,180 0,140 80,120 120,135 180,100 220,115 280,85 320,100 380,70 420,90 480,60 520,80 580,55 620,75 680,50 720,70 780,48 820,68 880,45 920,65 980,42 1020,62 1080,40 1120,60 1180,38 1220,58 1280,45 1320,65 1380,50 1440,70 1440,180"
            />
          </svg>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 py-32 md:py-40 relative z-10 text-center">
          {/* Penguin Mascot - subtle movement */}
          <div
            className="mb-12 md:mb-16 flex justify-center"
            style={{ transform: `translate(${smoothMouse.x * 8}px, ${smoothMouse.y * 8}px)` }}
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

      {/* STORY SECTION - Penguin Village */}
      <section id="story" className="relative py-20 md:py-40 overflow-hidden">
        {/* Light gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#5DD9C1] via-[#6ECFCF] to-[#7EC8E3]"></div>

        {/* Village silhouettes - subtle background */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          {/* Igloos */}
          <svg className="absolute bottom-20 left-[5%] w-24 h-16" viewBox="0 0 100 60">
            <ellipse cx="50" cy="50" rx="45" ry="25" fill="#2C5F75"/>
            <rect x="35" y="35" width="20" height="25" rx="10" fill="#4A90A4"/>
          </svg>
          <svg className="absolute bottom-32 left-[15%] w-20 h-14" viewBox="0 0 100 60">
            <ellipse cx="50" cy="50" rx="45" ry="25" fill="#2C5F75"/>
            <rect x="35" y="35" width="20" height="25" rx="10" fill="#4A90A4"/>
          </svg>
          <svg className="absolute bottom-16 right-[10%] w-28 h-18" viewBox="0 0 100 60">
            <ellipse cx="50" cy="50" rx="45" ry="25" fill="#2C5F75"/>
            <rect x="35" y="35" width="20" height="25" rx="10" fill="#4A90A4"/>
          </svg>

          {/* Distant penguin silhouettes */}
          <div className="absolute bottom-24 left-[25%] w-3 h-5 bg-[#1A1A1A] rounded-t-full"></div>
          <div className="absolute bottom-24 left-[27%] w-3 h-5 bg-[#1A1A1A] rounded-t-full"></div>
          <div className="absolute bottom-24 left-[29%] w-3 h-5 bg-[#1A1A1A] rounded-t-full"></div>
          <div className="absolute bottom-28 right-[25%] w-3 h-5 bg-[#1A1A1A] rounded-t-full"></div>
          <div className="absolute bottom-28 right-[27%] w-3 h-5 bg-[#1A1A1A] rounded-t-full"></div>
        </div>

        {/* Ambient glows */}
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-white/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#FF8533]/15 rounded-full blur-3xl pointer-events-none"></div>

        {/* Floating pixels */}
        <div className="absolute w-4 h-4 bg-white/60 top-[20%] left-[5%] animate-float-slow"></div>
        <div className="absolute w-5 h-5 bg-[#FF8533]/50 top-[60%] right-[8%] animate-float-medium"></div>
        <div className="absolute w-3 h-3 bg-white/50 top-[40%] left-[90%] animate-float-fast"></div>

        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 md:mb-20 text-[#2C5F75] fade-in drop-shadow-lg">
            THE MARCH
          </h2>

          <div className="space-y-10 text-lg md:text-xl text-[#1A3A4A] mb-16 md:mb-20 max-w-2xl mx-auto fade-in">
            <p>In the frozen wilderness, one penguin stands alone.</p>
            <p>Not because it&apos;s lost. Not because it&apos;s weak.</p>
            <p>But because it chose the harder path.</p>
            <p>While others huddle for warmth, it marches toward the mountain.</p>
          </div>

          {/* Story Illustration */}
          <div className="mb-16 md:mb-20 fade-in flex justify-center">
            <div className="w-full max-w-2xl aspect-[3/2] bg-gradient-to-br from-[#87CEEB] to-[#4A90A4] rounded-2xl border-4 border-white/50 flex items-center justify-center shadow-2xl">
              <div className="text-7xl md:text-9xl">🐧🏔️</div>
            </div>
          </div>

          <div className="space-y-6 text-lg md:text-xl mb-12 fade-in">
            <p className="text-[#2C5F75] font-semibold">3,333 penguins. 3,333 journeys.</p>
          </div>

          <p className="text-3xl md:text-5xl font-bold text-[#FF8533] fade-in drop-shadow-lg">
            NEVER. GIVE. UP.
          </p>
        </div>
      </section>

      {/* COLLECTION GALLERY - Ice Crystal Gallery */}
      <section id="collection" className="relative py-20 md:py-40 overflow-hidden">
        {/* Light gradient continuing */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#7EC8E3] via-[#87CEEB] to-[#9DD5ED]"></div>

        {/* Ice crystal decorations */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          {/* Crystal shapes on edges */}
          <svg className="absolute top-20 left-0 w-32 h-48" viewBox="0 0 100 150">
            <polygon fill="#FFFFFF" points="0,75 30,0 60,75 30,150"/>
            <polygon fill="#E8F4F8" points="0,75 30,30 30,120"/>
          </svg>
          <svg className="absolute top-40 right-0 w-28 h-40" viewBox="0 0 100 150">
            <polygon fill="#FFFFFF" points="100,75 70,0 40,75 70,150"/>
            <polygon fill="#E8F4F8" points="100,75 70,30 70,120"/>
          </svg>
          <svg className="absolute bottom-20 left-10 w-20 h-32" viewBox="0 0 100 150">
            <polygon fill="#FFFFFF" points="50,0 80,50 50,150 20,50"/>
          </svg>
        </div>

        {/* Aurora shimmer effect */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#5DD9C1]/20 to-transparent pointer-events-none"></div>

        {/* Ambient glows */}
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-white/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#5DD9C1]/20 rounded-full blur-3xl pointer-events-none"></div>

        {/* Floating pixels */}
        <div className="absolute w-4 h-4 bg-white/70 top-[10%] right-[15%] animate-float-medium"></div>
        <div className="absolute w-3 h-3 bg-[#5DD9C1]/60 top-[70%] left-[10%] animate-float-slow"></div>

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-center text-4xl md:text-6xl font-bold mb-6 text-[#2C5F75] fade-in drop-shadow-lg">
            THE COLLECTION
          </h2>
          <p className="text-center text-lg md:text-xl text-[#3D6B7D] mb-16 md:mb-20 fade-in">
            3,333 unique pixel penguins on Sui
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto mb-16">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div
                key={num}
                className="cursor-pointer fade-in aspect-square relative overflow-hidden rounded-xl border-4 border-white/60 bg-white/20 backdrop-blur-sm group hover:scale-105 hover:shadow-xl hover:shadow-[#5DD9C1]/30 transition-all duration-300"
              >
                <Image
                  src={`/nft-${num}.jpg`}
                  alt={`Krypto Pengus #${num}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C5F75]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-lg font-bold text-white">#{num}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center fade-in">
            <button className="px-12 py-4 bg-white/80 text-[#2C5F75] font-bold rounded-xl border-2 border-[#5DD9C1] hover:bg-[#5DD9C1] hover:text-white transition-all duration-300 shadow-lg">
              VIEW ALL 3,333
            </button>
          </div>
        </div>
      </section>

      {/* MINT INTERFACE - Digital Portal */}
      <section id="mint" className="relative py-20 md:py-40 overflow-hidden">
        {/* Light gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#9DD5ED] via-[#A8E0F0] to-[#B5E8F7]"></div>

        {/* Digital portal effect - central glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#5DD9C1]/30 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>

        {/* Pixelation particles flowing inward */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute w-2 h-2 bg-[#5DD9C1] top-[20%] left-[20%] animate-float-slow"></div>
          <div className="absolute w-3 h-3 bg-white top-[30%] right-[25%] animate-float-medium"></div>
          <div className="absolute w-2 h-2 bg-[#FF8533] bottom-[25%] left-[30%] animate-float-fast"></div>
          <div className="absolute w-3 h-3 bg-[#5DD9C1] top-[40%] right-[15%] animate-float-slow"></div>
          <div className="absolute w-2 h-2 bg-white bottom-[35%] right-[30%] animate-float-medium"></div>
        </div>

        {/* Ambient glows */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#FF8533]/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-center text-4xl md:text-6xl font-bold mb-16 md:mb-20 text-[#2C5F75] fade-in drop-shadow-lg">
            MINT YOUR PENGUIN
          </h2>

          <div className="max-w-2xl mx-auto">
            <div className="p-10 md:p-16 space-y-10 fade-in bg-white/70 backdrop-blur-md rounded-2xl border-4 border-[#5DD9C1]/50 shadow-2xl hover:shadow-[#5DD9C1]/30 transition-shadow duration-500">
              {/* Tier Display */}
              <div className="text-center space-y-4">
                <div className="text-2xl md:text-3xl font-bold text-[#2C5F75]">WHITELIST MINT LIVE</div>
                <div className="text-4xl md:text-5xl font-bold text-[#5DD9C1] drop-shadow-lg">10 SUI</div>
                <div className="text-base text-[#3D6B7D]">per NFT</div>
                <div className="text-sm text-[#4A90A4]">847 / 1,000 Remaining</div>
              </div>

              <div className="border-t border-[#5DD9C1]/30"></div>

              {/* Quantity Selector */}
              <div>
                <div className="flex items-center justify-center gap-6 mb-4">
                  <button className="w-16 h-16 border-3 border-[#5DD9C1] rounded-xl bg-white hover:bg-[#5DD9C1] hover:text-white text-[#2C5F75] transition-all duration-300 text-2xl font-bold shadow-lg">-</button>
                  <div className="text-4xl font-bold w-20 text-center text-[#2C5F75]">1</div>
                  <button className="w-16 h-16 border-3 border-[#5DD9C1] rounded-xl bg-white hover:bg-[#5DD9C1] hover:text-white text-[#2C5F75] transition-all duration-300 text-2xl font-bold shadow-lg">+</button>
                </div>
                <div className="text-center text-sm text-[#4A90A4]">(Max: 3 per wallet)</div>
              </div>

              {/* Total */}
              <div className="text-center py-6">
                <div className="text-base text-[#3D6B7D] mb-2">Total:</div>
                <div className="text-3xl md:text-4xl font-bold text-[#5DD9C1]">10 SUI</div>
              </div>

              {/* Mint Button */}
              <button className="w-full py-6 text-xl font-bold bg-[#FF8533] text-white rounded-xl hover:bg-[#E5722E] transition-all duration-300 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50">
                MINT NOW
              </button>

              {/* Features */}
              <div className="text-center text-sm text-[#4A90A4] pt-6 border-t border-[#5DD9C1]/30">
                <div>✓ Instant reveal  •  Sui Network  •  Walrus Storage</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-12 fade-in">
              <div className="flex justify-between text-base mb-3 text-[#2C5F75]">
                <span>MINTED: 2,153 / 3,333</span>
                <span>64.7%</span>
              </div>
              <div className="h-8 bg-white/50 rounded-full overflow-hidden border-2 border-[#5DD9C1]/30">
                <div className="h-full bg-gradient-to-r from-[#5DD9C1] to-[#4A90A4] rounded-full transition-all duration-1000 shadow-lg" style={{ width: '64.7%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY SECTION - Summit Gathering */}
      <section id="community" className="relative py-20 md:py-40 overflow-hidden">
        {/* Light gradient with warm tones */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#B5E8F7] via-[#C5EEF9] to-[#D5F3FB]"></div>

        {/* Mountain silhouettes in background */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none opacity-20">
          <svg viewBox="0 0 1440 200" className="w-full" preserveAspectRatio="none">
            <polygon fill="#4A90A4" points="0,200 200,100 400,150 600,80 800,130 1000,60 1200,110 1440,70 1440,200"/>
          </svg>
        </div>

        {/* Penguin gathering silhouettes */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-4 opacity-15 pointer-events-none">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="w-4 h-6 bg-[#1A1A1A] rounded-t-full"></div>
          ))}
        </div>

        {/* Warm sunset glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF8533]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#5DD9C1]/20 rounded-full blur-3xl pointer-events-none"></div>

        {/* Floating pixels */}
        <div className="absolute w-4 h-4 bg-white/60 top-[25%] right-[20%] animate-float-slow"></div>
        <div className="absolute w-5 h-5 bg-[#FF8533]/40 bottom-[30%] left-[15%] animate-float-medium"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 md:mb-20 text-[#2C5F75] fade-in drop-shadow-lg">
            JOIN THE MARCH
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10 max-w-4xl mx-auto">
            {/* X/Twitter */}
            <a
              href="https://x.com/KryptoPengus"
              target="_blank"
              rel="noopener noreferrer"
              className="p-12 bg-white/60 backdrop-blur-sm rounded-2xl border-4 border-white/80 hover:scale-105 transition-all duration-300 fade-in group shadow-xl hover:shadow-2xl"
            >
              <div className="text-7xl mb-6 text-[#2C5F75] group-hover:scale-110 transition-transform">𝕏</div>
              <div className="text-xl font-bold text-[#2C5F75] mb-2">@KryptoPengus</div>
              <div className="text-base text-[#4A90A4]">Follow us on X</div>
            </a>

            {/* Discord */}
            <a
              href="https://discord.gg/kryptopengus"
              target="_blank"
              rel="noopener noreferrer"
              className="p-12 bg-white/60 backdrop-blur-sm rounded-2xl border-4 border-white/80 hover:scale-105 transition-all duration-300 fade-in group shadow-xl hover:shadow-2xl"
            >
              <div className="text-7xl mb-6 text-[#2C5F75] group-hover:scale-110 transition-transform">💬</div>
              <div className="text-xl font-bold text-[#2C5F75] mb-2">Discord</div>
              <div className="text-base text-[#4A90A4]">Join the server</div>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/kryptopengus"
              target="_blank"
              rel="noopener noreferrer"
              className="p-12 bg-white/60 backdrop-blur-sm rounded-2xl border-4 border-white/80 hover:scale-105 transition-all duration-300 fade-in group shadow-xl hover:shadow-2xl"
            >
              <div className="text-7xl mb-6 text-[#2C5F75] group-hover:scale-110 transition-transform">📸</div>
              <div className="text-xl font-bold text-[#2C5F75] mb-2">Instagram</div>
              <div className="text-base text-[#4A90A4]">Follow us</div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 overflow-hidden">
        {/* Light gradient ending */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#D5F3FB] to-[#E5F7FD]"></div>

        {/* Subtle glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#5DD9C1]/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="text-2xl md:text-3xl font-bold mb-6 text-[#2C5F75]">KRYPTO PENGUS</div>
          <p className="text-[#4A90A4] mb-8 text-lg">Never Give Up. Never Stop Marching.</p>
          <div className="flex justify-center gap-8 mb-8 text-base">
            <a href="https://x.com/KryptoPengus" target="_blank" rel="noopener noreferrer" className="text-[#4A90A4] hover:text-[#2C5F75] transition">X</a>
            <a href="https://discord.gg/kryptopengus" target="_blank" rel="noopener noreferrer" className="text-[#4A90A4] hover:text-[#2C5F75] transition">Discord</a>
            <a href="https://instagram.com/kryptopengus" target="_blank" rel="noopener noreferrer" className="text-[#4A90A4] hover:text-[#2C5F75] transition">Instagram</a>
          </div>
          <p className="text-sm text-[#87CEEB]">© 2026 Krypto Pengus. Built on Sui Network.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes breathing {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.015); }
        }

        .animate-breathing {
          animation: breathing 4s ease-in-out infinite;
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @keyframes float-medium {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes float-fast {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.1); }
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
