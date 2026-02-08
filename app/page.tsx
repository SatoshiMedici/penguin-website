'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Lenis from 'lenis';
import { ZoomParallax } from '@/components/ui/zoom-parallax';
import Snowflake from '@/components/Snowflake';
import Navigation from '@/components/Navigation';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [smoothMouse, setSmoothMouse] = useState({ x: 0, y: 0 });
  const mousePosRef = useRef({ x: 0, y: 0 });
  const smoothMouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const handleScroll = () => {
      setScrollY(window.scrollY);
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
      mousePosRef.current = { x, y };
    };

    const animate = () => {
      const prev = smoothMouseRef.current;
      const target = mousePosRef.current;
      const next = {
        x: prev.x + (target.x - prev.x) * 0.08,
        y: prev.y + (target.y - prev.y) * 0.08,
      };
      smoothMouseRef.current = next;
      setSmoothMouse({ x: next.x, y: next.y });
      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll();
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      lenis.destroy();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded">
        Skip to main content
      </a>

      <Navigation scrollY={scrollY} />

      <div id="main-content">
        {/* ═══════════════════════════════════════════════════════════════
            HERO SECTION
            ═══════════════════════════════════════════════════════════════ */}
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: '#5DD9C1' }}>
          {/* Subtle snowflakes */}
          <div className="absolute inset-0 pointer-events-none">
            <Snowflake style={{ top: '8%', left: '12%' }} size={3} parallaxMultiplier={-20} smoothMouse={smoothMouse} />
            <Snowflake style={{ top: '15%', left: '25%' }} size={4} parallaxMultiplier={-15} smoothMouse={smoothMouse} />
            <Snowflake style={{ top: '22%', right: '18%' }} size={3} parallaxMultiplier={-18} smoothMouse={smoothMouse} />
            <Snowflake style={{ top: '12%', right: '30%' }} size={3} parallaxMultiplier={-22} smoothMouse={smoothMouse} />
            <Snowflake style={{ top: '30%', left: '8%' }} size={4} parallaxMultiplier={-14} smoothMouse={smoothMouse} />
            <Snowflake style={{ top: '35%', right: '12%' }} size={3} parallaxMultiplier={-20} smoothMouse={smoothMouse} />
            <Snowflake style={{ top: '50%', right: '25%' }} size={4} parallaxMultiplier={-16} smoothMouse={smoothMouse} />
            <Snowflake style={{ top: '18%', left: '55%' }} size={3} parallaxMultiplier={-22} smoothMouse={smoothMouse} />
            <Snowflake style={{ top: '60%', left: '35%' }} size={3} parallaxMultiplier={-14} smoothMouse={smoothMouse} />
            <Snowflake style={{ top: '70%', right: '40%' }} size={4} parallaxMultiplier={-18} smoothMouse={smoothMouse} />
          </div>

          {/* Very subtle mountains at 10% opacity */}
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none opacity-[0.08]">
            <svg viewBox="0 0 1440 200" className="absolute bottom-0 w-full" preserveAspectRatio="none">
              <polygon fill="#FFFFFF" points="0,200 0,160 100,140 200,120 300,105 400,90 500,80 600,75 700,65 800,60 900,55 1000,50 1100,48 1200,45 1300,55 1400,60 1440,80 1440,200" />
            </svg>
          </div>

          {/* Hero Content */}
          <div className="container mx-auto px-6 pt-[72px] relative z-10 text-center">
            {/* Penguin Mascot */}
            <div className="mb-12 md:mb-16 flex justify-center" style={{ transform: `translate(${smoothMouse.x * 5}px, ${smoothMouse.y * 5}px)` }}>
              <div className="w-[280px] h-[280px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] border-4 border-black rounded-2xl overflow-hidden relative shadow-2xl shadow-black/30 animate-breathing">
                <Image src="/hero-penguin.png" alt="Krypto Pengus Hero" fill className="object-cover" priority />
              </div>
            </div>

            <h1 className="text-[48px] md:text-[72px] lg:text-[96px] font-bold mb-6 uppercase text-black leading-[1.1]" style={{ letterSpacing: '0.02em' }}>
              KRYPTO PENGUS
            </h1>

            <p className="text-xl md:text-2xl mb-16 text-black/80 max-w-3xl mx-auto" style={{ letterSpacing: '0.1em' }}>
              Never Give Up. Never Stop Marching.
            </p>

            <div className="flex justify-center mb-20">
              <a href="#mint" className="btn-primary text-lg px-16 min-w-[280px]">
                MINT NOW
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-[14px] text-black/60">
              <span>3,333 unique penguins</span>
              <span className="hidden md:inline">•</span>
              <span>Sui Network</span>
              <span className="hidden md:inline">•</span>
              <span>Walrus Storage</span>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            STORY SECTION
            ═══════════════════════════════════════════════════════════════ */}
        <section id="story" className="relative overflow-hidden" style={{ background: '#0A0A0A', padding: '80px 0' }}>
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'4\' height=\'4\' viewBox=\'0 0 4 4\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 3h1v1H1V3zm2-2h1v1H3V1z\' fill=\'%23ffffff\' fill-opacity=\'1\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat' }} />

          <div className="container mx-auto px-6 max-w-[900px] text-center relative z-10">
            <h2 className="text-[36px] md:text-[64px] font-bold mb-16 md:mb-20 text-[#5DD9C1] fade-in leading-[1.2]" style={{ letterSpacing: '0.02em' }}>
              THE MARCH
            </h2>

            <div className="space-y-8 text-[18px] md:text-[20px] text-white/85 max-w-[700px] mx-auto fade-in" style={{ lineHeight: '1.8' }}>
              <p>In the frozen wilderness, one penguin stands alone. Not because it is lost. Not because it is weak. But because it chose the braver path.</p>
              <p>While others huddle together for warmth, it steps forward, guided by instinct, toward the mountain that pierces the ice-grey sky. Each footprint in the snow is a decision. Each breath, a test of resolve.</p>
              <p>3,333 penguins. 3,333 journeys. No two are the same. But all begin with the courage to move forward.</p>
            </div>

            <div className="mt-20 fade-in">
              <p className="text-[32px] md:text-[48px] font-bold text-[#FF8533] leading-[1.3]" style={{ letterSpacing: '0.02em' }}>
                NEVER. GIVE. UP.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            COLLECTION SECTION
            ═══════════════════════════════════════════════════════════════ */}
        <section id="collection" className="relative" style={{ background: '#0A0A0A' }}>
          <div className="text-center py-12 relative z-10">
            <h2 className="text-[36px] md:text-[64px] font-bold text-[#5DD9C1] fade-in leading-[1.2]" style={{ letterSpacing: '0.02em' }}>
              THE COLLECTION
            </h2>
            <p className="text-[16px] md:text-[18px] text-white/60 mt-4 fade-in">3,333 unique pixel penguins on Sui</p>
          </div>

          <ZoomParallax
            images={[
              { src: '/nft-5.jpg', alt: 'Krypto Pengus NFT #5' },
              { src: '/nft-2.jpg', alt: 'Krypto Pengus NFT #2' },
              { src: '/nft-8.jpg', alt: 'Krypto Pengus NFT #8' },
              { src: '/nft-1.jpg', alt: 'Krypto Pengus NFT #1' },
              { src: '/nft-10.jpg', alt: 'Krypto Pengus NFT #10' },
              { src: '/nft-3.jpg', alt: 'Krypto Pengus NFT #3' },
              { src: '/nft-7.jpg', alt: 'Krypto Pengus NFT #7' },
            ]}
          />
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            MINT SECTION
            ═══════════════════════════════════════════════════════════════ */}
        <section id="mint" className="relative overflow-hidden" style={{ background: '#0A0A0A', padding: '80px 0' }}>
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-center text-[36px] md:text-[64px] font-bold mb-16 md:mb-20 text-[#5DD9C1] fade-in leading-[1.2]" style={{ letterSpacing: '0.02em' }}>
              MINT YOUR PENGUIN
            </h2>

            <div className="max-w-[600px] mx-auto">
              <div className="fade-in rounded-xl" style={{
                padding: '40px',
                border: '3px solid #5DD9C1',
                background: 'rgba(93, 217, 193, 0.03)',
              }}>
                <div className="text-center space-y-4 mb-10">
                  <div className="text-2xl md:text-[32px] font-bold text-white">WHITELIST MINT LIVE</div>
                  <div className="text-[40px] md:text-[48px] font-bold text-[#5DD9C1]">10 SUI</div>
                  <div className="text-[16px] text-white/50">per NFT</div>
                  <div className="text-[14px] text-white/40">847 / 1,000 Remaining</div>
                </div>

                <div className="border-t border-white/10 mb-10"></div>

                <div className="mb-8">
                  <div className="flex items-center justify-center gap-6 mb-3">
                    <button aria-label="Decrease quantity" className="w-[60px] h-[60px] rounded-xl text-white text-2xl font-bold transition-all duration-300 hover:bg-[#5DD9C1] hover:text-black" style={{ border: '3px solid #5DD9C1' }}>-</button>
                    <div className="text-[32px] font-bold w-20 text-center text-white">1</div>
                    <button aria-label="Increase quantity" className="w-[60px] h-[60px] rounded-xl text-white text-2xl font-bold transition-all duration-300 hover:bg-[#5DD9C1] hover:text-black" style={{ border: '3px solid #5DD9C1' }}>+</button>
                  </div>
                  <div className="text-center text-[14px] text-white/40">(Max: 3 per wallet)</div>
                </div>

                <div className="text-center mb-8">
                  <div className="text-[14px] text-white/50 mb-1">Total:</div>
                  <div className="text-[28px] md:text-[32px] font-bold text-[#5DD9C1]">10 SUI</div>
                </div>

                <button className="w-full font-bold text-white text-[18px] uppercase tracking-wide rounded-xl transition-all duration-300 hover:translate-y-[-4px]" style={{
                  height: '64px',
                  background: '#FF8533',
                  border: '4px solid #000000',
                  boxShadow: '0 8px 24px rgba(255, 133, 51, 0.3)',
                }}>
                  MINT NOW
                </button>

                <div className="text-center text-[14px] text-white/40 mt-6 pt-6 border-t border-white/10">
                  ✓ Instant reveal &nbsp;•&nbsp; Sui Network &nbsp;•&nbsp; Walrus Storage
                </div>
              </div>

              {/* Progress bar outside card */}
              <div className="mt-10 fade-in">
                <div className="flex justify-between text-[14px] mb-3 text-white/60">
                  <span>MINTED: 2,153 / 3,333</span>
                  <span>64.7%</span>
                </div>
                <div className="h-8 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(93, 217, 193, 0.15)' }}>
                  <div className="h-full rounded-full transition-all duration-1000" style={{ width: '64.7%', background: 'linear-gradient(90deg, #5DD9C1, #4A90A4)' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            COMMUNITY / FOOTER
            ═══════════════════════════════════════════════════════════════ */}
        <footer className="relative overflow-hidden" style={{ background: '#0A0A0A', padding: '80px 0' }}>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-[36px] md:text-[64px] font-bold mb-16 text-[#5DD9C1] fade-in leading-[1.2]" style={{ letterSpacing: '0.02em' }}>
              JOIN THE MARCH
            </h2>

            <div className="flex flex-wrap justify-center gap-8 mb-16">
              {[
                { name: 'X', href: 'https://x.com/KryptoPengus', label: '@KryptoPengus' },
                { name: 'Discord', href: 'https://discord.gg/kryptopengus', label: 'Join Server' },
                { name: 'Instagram', href: 'https://instagram.com/kryptopengus', label: 'Follow Us' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-[240px] rounded-xl text-center transition-all duration-400 hover:translate-y-[-4px]"
                  style={{
                    padding: '48px 24px',
                    border: '2px solid #5DD9C1',
                    background: 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(93, 217, 193, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  <div className="text-[18px] font-bold text-white mb-2">{social.name}</div>
                  <div className="text-[14px] text-white/50">{social.label}</div>
                </a>
              ))}
            </div>

            <p className="text-[14px] text-white/30">© 2026 Krypto Pengus. All rights reserved.</p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes breathing {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        .animate-breathing { animation: breathing 2s ease-in-out infinite; }
      `}</style>
    </main>
  );
}
