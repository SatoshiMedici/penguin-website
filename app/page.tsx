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
    <main className="min-h-screen bg-[#87CEEB]">
      {/* Navigation - Transparent initially */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrollY > 50
          ? 'bg-[#FF8533] backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-6 md:px-20 h-16 md:h-20 flex justify-between items-center">
          <div className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${
            scrollY > 50 ? 'text-black' : 'text-white drop-shadow-md'
          }`}>KRYPTO PENGUS</div>
          <div className="hidden md:flex gap-10 text-base items-center">
            <a href="#home" className={`hover:opacity-100 transition-all duration-300 ${scrollY > 50 ? 'text-black opacity-70' : 'text-white opacity-90 drop-shadow-md'}`}>Home</a>
            <a href="#story" className={`hover:opacity-100 transition-all duration-300 ${scrollY > 50 ? 'text-black opacity-70' : 'text-white opacity-90 drop-shadow-md'}`}>Story</a>
            <a href="#mint" className={`hover:opacity-100 transition-all duration-300 ${scrollY > 50 ? 'text-black opacity-70' : 'text-white opacity-90 drop-shadow-md'}`}>Mint</a>
            <button className={`text-sm px-6 py-2 border-2 rounded-lg transition-all duration-300 ${
              scrollY > 50
                ? 'border-black text-black hover:bg-black hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-[#87CEEB] drop-shadow-md'
            }`}>Connect</button>
          </div>
          <button className={`md:hidden text-2xl transition-colors duration-300 ${scrollY > 50 ? 'text-black' : 'text-white drop-shadow-md'}`}>☰</button>
        </nav>
      </header>

      {/* ═══════════════════════════════════════════════════════════════
          HERO SECTION - Sky & Mountains
          ═══════════════════════════════════════════════════════════════ */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#87CEEB] via-[#7EC8E3] to-[#6ECFCF] overflow-hidden">
        {/* Floating elements - smooth parallax */}
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
          <div className="absolute w-6 h-6 bg-white/50 top-[15%] left-[15%] shadow-lg shadow-white/20" style={{ transform: `translate(${smoothMouse.x * -30}px, ${smoothMouse.y * -30}px)` }} />
          <div className="absolute w-8 h-8 bg-white/40 top-[25%] right-[20%] shadow-lg shadow-white/15" style={{ transform: `translate(${smoothMouse.x * -35}px, ${smoothMouse.y * -35}px)` }} />
          <div className="absolute w-5 h-5 bg-[#FF8533]/50 top-[35%] left-[30%] shadow-lg shadow-orange-400/20" style={{ transform: `translate(${smoothMouse.x * -40}px, ${smoothMouse.y * -40}px)` }} />
          <div className="absolute w-10 h-10 bg-white/35 top-[20%] right-[35%] shadow-lg shadow-white/15" style={{ transform: `translate(${smoothMouse.x * -25}px, ${smoothMouse.y * -25}px)` }} />
          <div className="absolute w-4 h-4 bg-[#5DD9C1]/60 top-[45%] left-[8%] shadow-lg shadow-teal-400/25" style={{ transform: `translate(${smoothMouse.x * -45}px, ${smoothMouse.y * -45}px)` }} />
          <div className="absolute w-7 h-7 bg-white/45 top-[10%] left-[45%] shadow-lg shadow-white/20" style={{ transform: `translate(${smoothMouse.x * -30}px, ${smoothMouse.y * -30}px)` }} />
          <div className="absolute w-5 h-5 bg-[#FF8533]/40 top-[40%] right-[15%] shadow-lg shadow-orange-400/15" style={{ transform: `translate(${smoothMouse.x * -35}px, ${smoothMouse.y * -35}px)` }} />
          <div className="absolute w-6 h-6 bg-white/50 top-[55%] right-[40%] shadow-lg shadow-white/20" style={{ transform: `translate(${smoothMouse.x * -28}px, ${smoothMouse.y * -28}px)` }} />
        </div>

        {/* Detailed Pixel Mountains - 3 layers */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          {/* Layer 3 - Furthest back, dark blue-gray */}
          <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full" style={{ transform: `translateY(${smoothMouse.y * 8}px)` }} preserveAspectRatio="none">
            <polygon fill="#3D6B7D" fillOpacity="0.5" points="0,320 0,200 50,180 100,195 150,160 200,175 250,140 300,155 350,120 400,140 450,100 500,120 550,85 600,105 650,70 700,90 750,60 800,80 850,50 900,70 950,45 1000,65 1050,40 1100,60 1150,35 1200,55 1250,30 1300,50 1350,40 1400,60 1440,45 1440,320" />
          </svg>

          {/* Layer 2 - Middle, medium blue with snow caps */}
          <svg viewBox="0 0 1440 260" className="absolute bottom-0 w-full" style={{ transform: `translateY(${smoothMouse.y * 5}px)` }} preserveAspectRatio="none">
            <polygon fill="#4A90A4" fillOpacity="0.7" points="0,260 0,180 80,160 120,175 180,140 220,155 280,120 320,135 380,100 420,120 480,85 520,105 580,70 620,90 680,60 720,80 780,50 820,70 880,45 920,65 980,40 1020,60 1080,35 1120,55 1180,30 1220,50 1280,40 1320,60 1380,45 1440,65 1440,260" />
            {/* Snow caps - more visible */}
            <polygon fill="#FFFFFF" fillOpacity="0.9" points="280,120 300,125 320,135 300,128" />
            <polygon fill="#FFFFFF" fillOpacity="0.9" points="480,85 500,90 520,105 500,95" />
            <polygon fill="#FFFFFF" fillOpacity="0.9" points="680,60 700,65 720,80 700,70" />
            <polygon fill="#FFFFFF" fillOpacity="0.9" points="880,45 900,50 920,65 900,55" />
            <polygon fill="#FFFFFF" fillOpacity="0.9" points="1080,35 1100,40 1120,55 1100,45" />
          </svg>

          {/* Layer 1 - Front, white/light ice with detail */}
          <svg viewBox="0 0 1440 200" className="absolute bottom-0 w-full" style={{ transform: `translateY(${smoothMouse.y * 2}px)` }} preserveAspectRatio="none">
            <polygon fill="#FFFFFF" fillOpacity="0.95" points="0,200 0,160 100,140 140,155 200,120 240,135 300,105 340,120 400,90 440,110 500,80 540,100 600,75 640,95 700,65 740,85 800,60 840,80 900,55 940,75 1000,50 1040,70 1100,48 1140,68 1200,45 1240,65 1300,55 1340,75 1400,60 1440,80 1440,200" />
            {/* Ice details */}
            <polygon fill="#E8F4F8" fillOpacity="0.6" points="200,120 220,125 240,135 220,128" />
            <polygon fill="#E8F4F8" fillOpacity="0.6" points="500,80 520,85 540,100 520,90" />
            <polygon fill="#E8F4F8" fillOpacity="0.6" points="800,60 820,65 840,80 820,70" />
          </svg>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 py-32 md:py-40 relative z-10 text-center">
          <div className="mb-12 md:mb-16 flex justify-center" style={{ transform: `translate(${smoothMouse.x * 8}px, ${smoothMouse.y * 8}px)` }}>
            <div className="w-72 h-72 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] border-4 border-black rounded-2xl overflow-hidden animate-breathing relative shadow-2xl shadow-black/30">
              <Image src="/hero-penguin.png" alt="Krypto Pengus Hero" fill className="object-cover" priority />
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

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base opacity-70 text-black">
            <span>3,333 unique penguins</span>
            <span className="hidden md:inline">•</span>
            <span>Sui Network</span>
            <span className="hidden md:inline">•</span>
            <span>Walrus Storage</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          STORY SECTION - The Penguin Village
          Background continues seamlessly from hero (#6ECFCF → #5DD9C1)
          ═══════════════════════════════════════════════════════════════ */}
      <section id="story" className="relative py-20 md:py-40 overflow-hidden bg-gradient-to-b from-[#6ECFCF] via-[#5DD9C1] to-[#6ECFCF]">
        {/* Parallax glowing orbs */}
        <div className="absolute w-96 h-96 rounded-full bg-white/25 blur-3xl top-[10%] left-[5%]" style={{ transform: `translate(${smoothMouse.x * -18}px, ${smoothMouse.y * -18}px)` }} />
        <div className="absolute w-80 h-80 rounded-full bg-[#FF8533]/15 blur-3xl top-[60%] right-[10%]" style={{ transform: `translate(${smoothMouse.x * -22}px, ${smoothMouse.y * -22}px)` }} />
        <div className="absolute w-64 h-64 rounded-full bg-[#87CEEB]/20 blur-3xl bottom-[20%] left-[40%]" style={{ transform: `translate(${smoothMouse.x * -15}px, ${smoothMouse.y * -15}px)` }} />

        {/* LORE: Penguin Village - Enhanced visibility */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large igloos with parallax */}
          <svg className="absolute bottom-10 left-[3%] w-40 h-28 opacity-40" viewBox="0 0 100 60" style={{ transform: `translate(${smoothMouse.x * -12}px, ${smoothMouse.y * -8}px)` }}>
            <ellipse cx="50" cy="48" rx="48" ry="22" fill="#4A90A4"/>
            <ellipse cx="50" cy="45" rx="42" ry="18" fill="#5DD9C1"/>
            <rect x="38" y="32" width="24" height="28" rx="12" fill="#3D6B7D"/>
            <rect x="42" y="36" width="16" height="24" rx="8" fill="#2C5F75"/>
          </svg>
          <svg className="absolute bottom-20 left-[18%] w-32 h-22 opacity-35" viewBox="0 0 100 60" style={{ transform: `translate(${smoothMouse.x * -15}px, ${smoothMouse.y * -10}px)` }}>
            <ellipse cx="50" cy="48" rx="48" ry="22" fill="#4A90A4"/>
            <ellipse cx="50" y="45" rx="42" ry="18" fill="#5DD9C1"/>
            <rect x="38" y="32" width="24" height="28" rx="12" fill="#3D6B7D"/>
          </svg>
          <svg className="absolute bottom-8 right-[8%] w-44 h-30 opacity-45" viewBox="0 0 100 60" style={{ transform: `translate(${smoothMouse.x * -10}px, ${smoothMouse.y * -6}px)` }}>
            <ellipse cx="50" cy="48" rx="48" ry="22" fill="#4A90A4"/>
            <ellipse cx="50" cy="45" rx="42" ry="18" fill="#5DD9C1"/>
            <rect x="38" y="32" width="24" height="28" rx="12" fill="#3D6B7D"/>
            <rect x="42" y="36" width="16" height="24" rx="8" fill="#2C5F75"/>
          </svg>
          <svg className="absolute bottom-24 right-[22%] w-28 h-20 opacity-30" viewBox="0 0 100 60" style={{ transform: `translate(${smoothMouse.x * -18}px, ${smoothMouse.y * -12}px)` }}>
            <ellipse cx="50" cy="48" rx="48" ry="22" fill="#4A90A4"/>
            <rect x="38" y="32" width="24" height="28" rx="12" fill="#3D6B7D"/>
          </svg>

          {/* Penguin colony silhouettes - multiple groups with parallax */}
          <div className="absolute bottom-16 left-[28%] flex gap-2 opacity-35" style={{ transform: `translate(${smoothMouse.x * -20}px, ${smoothMouse.y * -10}px)` }}>
            {[6, 8, 7, 9, 6, 8, 7].map((h, i) => (
              <div key={i} className="bg-[#1A3A4A] rounded-t-full" style={{ width: `${h}px`, height: `${h * 1.5}px` }} />
            ))}
          </div>
          <div className="absolute bottom-12 left-[40%] flex gap-1.5 opacity-25" style={{ transform: `translate(${smoothMouse.x * -25}px, ${smoothMouse.y * -15}px)` }}>
            {[5, 6, 5, 7, 6].map((h, i) => (
              <div key={i} className="bg-[#1A3A4A] rounded-t-full" style={{ width: `${h}px`, height: `${h * 1.5}px` }} />
            ))}
          </div>
          <div className="absolute bottom-20 right-[35%] flex gap-2 opacity-30" style={{ transform: `translate(${smoothMouse.x * -15}px, ${smoothMouse.y * -8}px)` }}>
            {[7, 9, 8, 10, 8, 9].map((h, i) => (
              <div key={i} className="bg-[#1A3A4A] rounded-t-full" style={{ width: `${h}px`, height: `${h * 1.5}px` }} />
            ))}
          </div>

          {/* Ice formations */}
          <svg className="absolute bottom-0 left-[60%] w-20 h-32 opacity-30" viewBox="0 0 50 80" style={{ transform: `translate(${smoothMouse.x * -12}px, ${smoothMouse.y * -6}px)` }}>
            <polygon fill="#FFFFFF" points="25,0 40,40 35,80 15,80 10,40" />
            <polygon fill="#E8F4F8" points="25,0 10,40 15,80 25,50" />
          </svg>
          <svg className="absolute bottom-0 left-[8%] w-16 h-24 opacity-25" viewBox="0 0 50 80" style={{ transform: `translate(${smoothMouse.x * -15}px, ${smoothMouse.y * -8}px)` }}>
            <polygon fill="#FFFFFF" points="25,0 38,35 32,80 18,80 12,35" />
          </svg>
        </div>

        {/* Floating pixel squares with parallax */}
        <div className="absolute w-5 h-5 bg-white/50 top-[15%] left-[10%]" style={{ transform: `translate(${smoothMouse.x * -35}px, ${smoothMouse.y * -35}px)` }} />
        <div className="absolute w-6 h-6 bg-[#FF8533]/40 top-[70%] right-[12%]" style={{ transform: `translate(${smoothMouse.x * -28}px, ${smoothMouse.y * -28}px)` }} />
        <div className="absolute w-4 h-4 bg-white/45 top-[40%] right-[5%]" style={{ transform: `translate(${smoothMouse.x * -40}px, ${smoothMouse.y * -40}px)` }} />
        <div className="absolute w-7 h-7 bg-[#87CEEB]/50 top-[25%] left-[85%]" style={{ transform: `translate(${smoothMouse.x * -32}px, ${smoothMouse.y * -32}px)` }} />

        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 md:mb-20 text-[#2C5F75] fade-in drop-shadow-lg">THE MARCH</h2>

          <div className="space-y-10 text-lg md:text-xl text-[#1A3A4A] mb-16 md:mb-20 max-w-2xl mx-auto fade-in">
            <p>In the frozen wilderness, one penguin stands alone.</p>
            <p>Not because it&apos;s lost. Not because it&apos;s weak.</p>
            <p>But because it chose the harder path.</p>
            <p>While others huddle for warmth, it marches toward the mountain.</p>
          </div>

          <div className="mb-16 md:mb-20 fade-in flex justify-center">
            <div className="w-full max-w-2xl aspect-[3/2] bg-gradient-to-br from-[#87CEEB] to-[#4A90A4] rounded-2xl border-4 border-white/50 flex items-center justify-center shadow-2xl">
              <div className="text-7xl md:text-9xl">🐧🏔️</div>
            </div>
          </div>

          <p className="text-[#2C5F75] font-semibold text-lg md:text-xl mb-12 fade-in">3,333 penguins. 3,333 journeys.</p>
          <p className="text-3xl md:text-5xl font-bold text-[#FF8533] fade-in drop-shadow-lg">NEVER. GIVE. UP.</p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          COLLECTION SECTION - Ice Crystal Gallery
          Background continues seamlessly (#6ECFCF → #7EC8E3)
          ═══════════════════════════════════════════════════════════════ */}
      <section id="collection" className="relative py-20 md:py-40 overflow-hidden bg-gradient-to-b from-[#6ECFCF] via-[#7EC8E3] to-[#87CEEB]">
        {/* Parallax glowing orbs */}
        <div className="absolute w-80 h-80 rounded-full bg-white/30 blur-3xl top-[20%] right-[5%]" style={{ transform: `translate(${smoothMouse.x * -20}px, ${smoothMouse.y * -20}px)` }} />
        <div className="absolute w-96 h-96 rounded-full bg-[#5DD9C1]/20 blur-3xl bottom-[10%] left-[10%]" style={{ transform: `translate(${smoothMouse.x * -15}px, ${smoothMouse.y * -15}px)` }} />

        {/* LORE: Ice Crystal formations with parallax */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute top-10 left-0 w-40 h-64 opacity-35" viewBox="0 0 100 160" style={{ transform: `translate(${smoothMouse.x * -10}px, ${smoothMouse.y * -8}px)` }}>
            <polygon fill="#FFFFFF" points="0,80 35,0 70,80 35,160" />
            <polygon fill="#E8F4F8" points="0,80 35,20 35,140" />
            <polygon fill="#D5F3FB" points="35,0 50,40 35,80 20,40" />
          </svg>
          <svg className="absolute top-20 right-0 w-36 h-56 opacity-40" viewBox="0 0 100 160" style={{ transform: `translate(${smoothMouse.x * -12}px, ${smoothMouse.y * -10}px)` }}>
            <polygon fill="#FFFFFF" points="100,80 65,0 30,80 65,160" />
            <polygon fill="#E8F4F8" points="100,80 65,20 65,140" />
          </svg>
          <svg className="absolute bottom-10 left-[15%] w-24 h-40 opacity-30" viewBox="0 0 100 160" style={{ transform: `translate(${smoothMouse.x * -18}px, ${smoothMouse.y * -12}px)` }}>
            <polygon fill="#FFFFFF" points="50,0 85,60 50,160 15,60" />
          </svg>
          <svg className="absolute bottom-20 right-[12%] w-28 h-44 opacity-25" viewBox="0 0 100 160" style={{ transform: `translate(${smoothMouse.x * -15}px, ${smoothMouse.y * -10}px)` }}>
            <polygon fill="#FFFFFF" points="50,0 80,50 50,160 20,50" />
            <polygon fill="#E8F4F8" points="50,0 20,50 50,100" />
          </svg>

          {/* Aurora shimmer at top */}
          <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#5DD9C1]/15 via-[#87CEEB]/10 to-transparent" />
        </div>

        {/* Floating pixels with parallax */}
        <div className="absolute w-5 h-5 bg-white/60 top-[15%] right-[20%]" style={{ transform: `translate(${smoothMouse.x * -38}px, ${smoothMouse.y * -38}px)` }} />
        <div className="absolute w-4 h-4 bg-[#5DD9C1]/50 top-[65%] left-[8%]" style={{ transform: `translate(${smoothMouse.x * -30}px, ${smoothMouse.y * -30}px)` }} />
        <div className="absolute w-6 h-6 bg-white/50 bottom-[25%] right-[8%]" style={{ transform: `translate(${smoothMouse.x * -25}px, ${smoothMouse.y * -25}px)` }} />

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-center text-4xl md:text-6xl font-bold mb-6 text-[#2C5F75] fade-in drop-shadow-lg">THE COLLECTION</h2>
          <p className="text-center text-lg md:text-xl text-[#3D6B7D] mb-16 md:mb-20 fade-in">3,333 unique pixel penguins on Sui</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto mb-16">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div key={num} className="cursor-pointer fade-in aspect-square relative overflow-hidden rounded-xl border-4 border-white/60 bg-white/20 backdrop-blur-sm group hover:scale-105 hover:shadow-xl hover:shadow-[#5DD9C1]/30 transition-all duration-300">
                <Image src={`/nft-${num}.jpg`} alt={`Krypto Pengus #${num}`} fill className="object-cover" sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C5F75]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-lg font-bold text-white">#{num}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center fade-in">
            <button className="px-12 py-4 bg-white/80 text-[#2C5F75] font-bold rounded-xl border-2 border-[#5DD9C1] hover:bg-[#5DD9C1] hover:text-white transition-all duration-300 shadow-lg">VIEW ALL 3,333</button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          MINT SECTION - Digital Transformation Portal
          Background continues seamlessly (#87CEEB → #9DD5ED)
          ═══════════════════════════════════════════════════════════════ */}
      <section id="mint" className="relative py-20 md:py-40 overflow-hidden bg-gradient-to-b from-[#87CEEB] via-[#9DD5ED] to-[#A8E0F0]">
        {/* Central portal glow with parallax */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#5DD9C1]/25 rounded-full blur-3xl pointer-events-none animate-pulse-slow" style={{ transform: `translate(calc(-50% + ${smoothMouse.x * 10}px), calc(-50% + ${smoothMouse.y * 10}px))` }} />

        {/* Parallax orbs */}
        <div className="absolute w-80 h-80 rounded-full bg-white/30 blur-3xl top-[10%] left-[5%]" style={{ transform: `translate(${smoothMouse.x * -18}px, ${smoothMouse.y * -18}px)` }} />
        <div className="absolute w-72 h-72 rounded-full bg-[#FF8533]/15 blur-3xl bottom-[15%] right-[8%]" style={{ transform: `translate(${smoothMouse.x * -22}px, ${smoothMouse.y * -22}px)` }} />

        {/* LORE: Digital particles flowing */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-3 h-3 bg-[#5DD9C1]/60 top-[15%] left-[15%]" style={{ transform: `translate(${smoothMouse.x * -45}px, ${smoothMouse.y * -45}px)` }} />
          <div className="absolute w-4 h-4 bg-white/50 top-[25%] right-[20%]" style={{ transform: `translate(${smoothMouse.x * -35}px, ${smoothMouse.y * -35}px)` }} />
          <div className="absolute w-3 h-3 bg-[#FF8533]/50 bottom-[30%] left-[25%]" style={{ transform: `translate(${smoothMouse.x * -40}px, ${smoothMouse.y * -40}px)` }} />
          <div className="absolute w-5 h-5 bg-[#5DD9C1]/45 top-[45%] right-[10%]" style={{ transform: `translate(${smoothMouse.x * -30}px, ${smoothMouse.y * -30}px)` }} />
          <div className="absolute w-4 h-4 bg-white/55 bottom-[20%] right-[30%]" style={{ transform: `translate(${smoothMouse.x * -38}px, ${smoothMouse.y * -38}px)` }} />
          <div className="absolute w-3 h-3 bg-[#87CEEB]/60 top-[60%] left-[8%]" style={{ transform: `translate(${smoothMouse.x * -42}px, ${smoothMouse.y * -42}px)` }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-center text-4xl md:text-6xl font-bold mb-16 md:mb-20 text-[#2C5F75] fade-in drop-shadow-lg">MINT YOUR PENGUIN</h2>

          <div className="max-w-2xl mx-auto">
            <div className="p-10 md:p-16 space-y-10 fade-in bg-white/70 backdrop-blur-md rounded-2xl border-4 border-[#5DD9C1]/50 shadow-2xl hover:shadow-[#5DD9C1]/30 transition-shadow duration-500">
              <div className="text-center space-y-4">
                <div className="text-2xl md:text-3xl font-bold text-[#2C5F75]">WHITELIST MINT LIVE</div>
                <div className="text-4xl md:text-5xl font-bold text-[#5DD9C1] drop-shadow-lg">10 SUI</div>
                <div className="text-base text-[#3D6B7D]">per NFT</div>
                <div className="text-sm text-[#4A90A4]">847 / 1,000 Remaining</div>
              </div>

              <div className="border-t border-[#5DD9C1]/30"></div>

              <div>
                <div className="flex items-center justify-center gap-6 mb-4">
                  <button className="w-16 h-16 border-3 border-[#5DD9C1] rounded-xl bg-white hover:bg-[#5DD9C1] hover:text-white text-[#2C5F75] transition-all duration-300 text-2xl font-bold shadow-lg">-</button>
                  <div className="text-4xl font-bold w-20 text-center text-[#2C5F75]">1</div>
                  <button className="w-16 h-16 border-3 border-[#5DD9C1] rounded-xl bg-white hover:bg-[#5DD9C1] hover:text-white text-[#2C5F75] transition-all duration-300 text-2xl font-bold shadow-lg">+</button>
                </div>
                <div className="text-center text-sm text-[#4A90A4]">(Max: 3 per wallet)</div>
              </div>

              <div className="text-center py-6">
                <div className="text-base text-[#3D6B7D] mb-2">Total:</div>
                <div className="text-3xl md:text-4xl font-bold text-[#5DD9C1]">10 SUI</div>
              </div>

              <button className="w-full py-6 text-xl font-bold bg-[#FF8533] text-white rounded-xl hover:bg-[#E5722E] transition-all duration-300 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50">MINT NOW</button>

              <div className="text-center text-sm text-[#4A90A4] pt-6 border-t border-[#5DD9C1]/30">
                <div>✓ Instant reveal  •  Sui Network  •  Walrus Storage</div>
              </div>
            </div>

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

      {/* ═══════════════════════════════════════════════════════════════
          COMMUNITY SECTION - Summit Gathering
          Background continues seamlessly (#A8E0F0 → #B5E8F7)
          ═══════════════════════════════════════════════════════════════ */}
      <section id="community" className="relative py-20 md:py-40 overflow-hidden bg-gradient-to-b from-[#A8E0F0] via-[#B5E8F7] to-[#C5EEF9]">
        {/* Parallax orbs */}
        <div className="absolute w-96 h-96 rounded-full bg-[#FF8533]/10 blur-3xl top-[10%] right-[5%]" style={{ transform: `translate(${smoothMouse.x * -15}px, ${smoothMouse.y * -15}px)` }} />
        <div className="absolute w-80 h-80 rounded-full bg-[#5DD9C1]/15 blur-3xl bottom-[20%] left-[10%]" style={{ transform: `translate(${smoothMouse.x * -20}px, ${smoothMouse.y * -20}px)` }} />

        {/* LORE: Summit mountains and penguin gathering */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Distant mountain range */}
          <svg viewBox="0 0 1440 200" className="absolute bottom-0 w-full opacity-25" preserveAspectRatio="none" style={{ transform: `translateY(${smoothMouse.y * 5}px)` }}>
            <polygon fill="#4A90A4" points="0,200 150,120 300,160 450,100 600,140 750,80 900,130 1050,70 1200,110 1350,90 1440,120 1440,200" />
          </svg>

          {/* Penguin gathering at summit */}
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-3 opacity-30" style={{ transform: `translate(calc(-50% + ${smoothMouse.x * -8}px), ${smoothMouse.y * -5}px)` }}>
            {[8, 10, 9, 12, 11, 10, 9, 11, 8, 10, 9].map((h, i) => (
              <div key={i} className="bg-[#1A3A4A] rounded-t-full" style={{ width: `${h}px`, height: `${h * 1.6}px` }} />
            ))}
          </div>
        </div>

        {/* Floating pixels with parallax */}
        <div className="absolute w-5 h-5 bg-white/50 top-[20%] right-[15%]" style={{ transform: `translate(${smoothMouse.x * -35}px, ${smoothMouse.y * -35}px)` }} />
        <div className="absolute w-6 h-6 bg-[#FF8533]/35 bottom-[35%] left-[12%]" style={{ transform: `translate(${smoothMouse.x * -28}px, ${smoothMouse.y * -28}px)` }} />
        <div className="absolute w-4 h-4 bg-[#5DD9C1]/50 top-[55%] left-[8%]" style={{ transform: `translate(${smoothMouse.x * -40}px, ${smoothMouse.y * -40}px)` }} />

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 md:mb-20 text-[#2C5F75] fade-in drop-shadow-lg">JOIN THE MARCH</h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10 max-w-4xl mx-auto">
            <a href="https://x.com/KryptoPengus" target="_blank" rel="noopener noreferrer" className="p-12 bg-white/60 backdrop-blur-sm rounded-2xl border-4 border-white/80 hover:scale-105 transition-all duration-300 fade-in group shadow-xl hover:shadow-2xl">
              <div className="text-7xl mb-6 text-[#2C5F75] group-hover:scale-110 transition-transform">𝕏</div>
              <div className="text-xl font-bold text-[#2C5F75] mb-2">@KryptoPengus</div>
              <div className="text-base text-[#4A90A4]">Follow us on X</div>
            </a>

            <a href="https://discord.gg/kryptopengus" target="_blank" rel="noopener noreferrer" className="p-12 bg-white/60 backdrop-blur-sm rounded-2xl border-4 border-white/80 hover:scale-105 transition-all duration-300 fade-in group shadow-xl hover:shadow-2xl">
              <div className="text-7xl mb-6 text-[#2C5F75] group-hover:scale-110 transition-transform">💬</div>
              <div className="text-xl font-bold text-[#2C5F75] mb-2">Discord</div>
              <div className="text-base text-[#4A90A4]">Join the server</div>
            </a>

            <a href="https://instagram.com/kryptopengus" target="_blank" rel="noopener noreferrer" className="p-12 bg-white/60 backdrop-blur-sm rounded-2xl border-4 border-white/80 hover:scale-105 transition-all duration-300 fade-in group shadow-xl hover:shadow-2xl">
              <div className="text-7xl mb-6 text-[#2C5F75] group-hover:scale-110 transition-transform">📸</div>
              <div className="text-xl font-bold text-[#2C5F75] mb-2">Instagram</div>
              <div className="text-base text-[#4A90A4]">Follow us</div>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FOOTER
          Background continues seamlessly (#C5EEF9 → #D5F3FB)
          ═══════════════════════════════════════════════════════════════ */}
      <footer className="relative py-16 overflow-hidden bg-gradient-to-b from-[#C5EEF9] to-[#D5F3FB]">
        <div className="absolute w-96 h-32 rounded-full bg-[#5DD9C1]/10 blur-3xl bottom-0 left-1/2 -translate-x-1/2" />

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
        .animate-breathing { animation: breathing 4s ease-in-out infinite; }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 0.4; }
        }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
      `}</style>
    </main>
  );
}
