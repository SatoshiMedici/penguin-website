"use client";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { FlipWords } from "@/components/ui/flip-words";

/* ─── Animated counter ─── */
function Counter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    const steps = 50;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(
          decimals > 0
            ? Number(current.toFixed(decimals))
            : Math.floor(current)
        );
      }
    }, 30);
    return () => clearInterval(timer);
  }, [isInView, value, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : count}
      {suffix}
    </span>
  );
}

/* ─── Scroll reveal wrapper ─── */
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Icons ─── */
function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function ArrowDown() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="w-6 h-6"
    >
      <path d="M12 5v14M19 12l-7 7-7-7" />
    </svg>
  );
}

/* ─── Shared styles ─── */
const headingFont = {
  fontFamily: "'Space Grotesk', system-ui, sans-serif",
};

/* ─── Data ─── */
const roles = [
  "Build Communities",
  "Drive Growth",
  "Scale Ecosystems",
  "Leverage AI",
];

const stats = [
  { value: 7, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "K+", label: "Community Built" },
  { value: 2.5, suffix: "M", prefix: "$", label: "Raised", decimals: 1 },
  { value: 3, suffix: "", label: "Languages" },
];

const experiences = [
  {
    company: "Sui Foundation",
    role: "Ambassador",
    period: "2024 \u2014 Present",
    highlight: "1,000+ event attendees",
    brief:
      "Regional expansion strategy for Sui Network ecosystem in Portugal",
    tags: ["Web3", "Community", "Events", "Partnerships"],
  },
  {
    company: "Interest Labs",
    role: "Marketing Manager",
    period: "2021 \u2014 Present",
    highlight: "100K+ community members",
    brief: "End-to-end marketing and ecosystem growth for Web3 protocols",
    tags: ["Growth", "Go-to-Market", "DeFi", "Content"],
  },
  {
    company: "DeepSquare",
    role: "Community Lead",
    period: "2020 \u2014 2021",
    highlight: "$2.5M fundraise",
    brief: "Built decentralized cloud computing community from scratch",
    tags: ["Community", "Content", "Crisis Comms"],
  },
  {
    company: "Tourvest Group",
    role: "Marketing Executive",
    period: "2019 \u2014 2020",
    highlight: "3 brands managed",
    brief:
      "Integrated marketing campaigns across travel brands in Namibia",
    tags: ["Digital", "SEO", "Email", "Branding"],
  },
];

const expertise = [
  {
    title: "Community Building",
    description:
      "Discord, Telegram, X \u2014 from 0 to 100K+ with genuine engagement",
  },
  {
    title: "Web3 & Blockchain",
    description:
      "DeFi protocols, NFT ecosystems, Sui Network, ecosystem growth",
  },
  {
    title: "Growth Marketing",
    description:
      "Multi-channel strategy, paid & organic, measurable ROI",
  },
  {
    title: "AI & Automation",
    description:
      "Vibecoding, AI-powered workflows \u2014 a one-person marketing department",
  },
  {
    title: "Business Development",
    description:
      "Strategic partnerships, university & tech hub collaborations",
  },
  {
    title: "Content Strategy",
    description:
      "Technical narratives, educational content, social media planning",
  },
];

/* ─── Animation variants ─── */
const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

/* ─────────────────────────────────────────
   Page
   ───────────────────────────────────────── */
export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  useEffect(() => {
    setMounted(true);
    const handler = (e: MouseEvent) => {
      setMouse({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative bg-[#0a0a0a] min-h-screen">
      {/* ── Nav ── */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8"
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between backdrop-blur-md bg-white/[0.03] border border-white/[0.06] rounded-full px-5 py-2.5">
          <span
            className="text-sm font-bold tracking-widest text-white/70"
            style={headingFont}
          >
            MV
          </span>
          <div className="hidden md:flex items-center gap-6 text-sm text-white/40">
            <a
              href="#experience"
              className="hover:text-white/80 transition-colors duration-300"
              style={headingFont}
            >
              Experience
            </a>
            <a
              href="#expertise"
              className="hover:text-white/80 transition-colors duration-300"
              style={headingFont}
            >
              Skills
            </a>
            <a
              href="#contact"
              className="hover:text-white/80 transition-colors duration-300"
              style={headingFont}
            >
              Contact
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://x.com/satoshimedici"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#5DD9C1] transition-colors duration-300"
              aria-label="X (Twitter)"
            >
              <XIcon />
            </a>
            <a
              href="https://linkedin.com/in/mario-vasconcelos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#5DD9C1] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="mailto:super.mario.jorge@icloud.com"
              className="text-white/40 hover:text-[#5DD9C1] transition-colors duration-300"
              aria-label="Email"
            >
              <EmailIcon />
            </a>
          </div>
        </div>
      </motion.nav>

      {/* ── Hero ── */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, padding: 0 }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated gradient blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-[#5DD9C1]/[0.07] blur-[120px] animate-first" />
          <div className="absolute bottom-1/4 -right-1/4 w-[400px] h-[400px] rounded-full bg-[#FF8533]/[0.05] blur-[100px] animate-second" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#3B82F6]/[0.04] blur-[140px] animate-third" />
          {/* Mouse-following glow */}
          <div
            className="absolute w-[400px] h-[400px] rounded-full bg-[#5DD9C1]/[0.06] blur-[100px] pointer-events-none"
            style={{
              left: `${mouse.x * 100}%`,
              top: `${mouse.y * 100}%`,
              transform: "translate(-50%, -50%)",
              transition: "left 2s ease-out, top 2s ease-out",
            }}
          />
        </div>

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <motion.div
          style={{ y: heroY }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#5DD9C1]/20 bg-[#5DD9C1]/[0.04] mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5DD9C1] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5DD9C1]" />
            </span>
            <span className="text-xs font-medium tracking-widest text-[#5DD9C1]/80 uppercase">
              Open to opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight mb-4 leading-[1.05]"
            style={{ ...headingFont, textTransform: "none" }}
          >
            <span className="bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">
              Mario
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#5DD9C1] via-[#4AACDB] to-[#3B82F6] bg-clip-text text-transparent">
              Vasconcelos
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-base md:text-lg text-white/40 font-medium tracking-wide mb-8"
            style={headingFont}
          >
            Digital Strategist & Business Developer
          </motion.p>

          {/* Flip words */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-lg md:text-2xl text-white/80 h-12 flex items-center justify-center relative"
          >
            <span className="text-white/30 mr-1">I</span>
            <FlipWords
              words={roles}
              duration={2500}
              className="text-[#FF8533] font-semibold"
            />
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="absolute -bottom-24 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
              className="text-white/15"
            >
              <ArrowDown />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ── Stats ── */}
      <section className="relative py-16 md:py-20 border-y border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {stats.map((s, i) => (
              <motion.div key={i} variants={fadeUp} className="text-center">
                <div
                  className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#5DD9C1] to-[#3B82F6] bg-clip-text text-transparent mb-2"
                  style={headingFont}
                >
                  <Counter
                    value={s.value}
                    suffix={s.suffix}
                    prefix={s.prefix || ""}
                    decimals={s.decimals || 0}
                  />
                </div>
                <div className="text-xs md:text-sm text-white/30 tracking-wider uppercase">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section id="experience" className="py-20 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p
              className="text-sm text-[#5DD9C1]/60 tracking-widest uppercase mb-3"
              style={headingFont}
            >
              Track Record
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight"
              style={{ ...headingFont, textTransform: "none" }}
            >
              Experience
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#5DD9C1] to-[#3B82F6] rounded-full mb-14" />
          </Reveal>

          <div className="space-y-4">
            {experiences.map((exp, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="group relative p-6 md:p-8 rounded-2xl border border-white/[0.04] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-500 overflow-hidden"
                >
                  {/* Left accent line */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#5DD9C1] to-[#3B82F6] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                        <h3
                          className="text-lg md:text-xl font-bold text-white"
                          style={{
                            ...headingFont,
                            textTransform: "none",
                          }}
                        >
                          {exp.company}
                        </h3>
                        <span
                          className="text-[#5DD9C1]/80 font-medium text-sm"
                          style={headingFont}
                        >
                          {exp.role}
                        </span>
                      </div>
                      <p className="text-white/35 text-sm mb-3">
                        {exp.brief}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, j) => (
                          <span
                            key={j}
                            className="text-[11px] px-2.5 py-1 rounded-full border border-white/[0.06] text-white/40 tracking-wide"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-row md:flex-col items-start md:items-end gap-2 md:gap-1 shrink-0">
                      <span className="text-xs text-white/25 tracking-wide">
                        {exp.period}
                      </span>
                      <span className="text-sm font-semibold text-[#FF8533]">
                        {exp.highlight}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Expertise ── */}
      <section id="expertise" className="py-20 md:py-32 px-6 relative">
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#5DD9C1]/[0.025] blur-[160px]" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <Reveal>
            <p
              className="text-sm text-[#FF8533]/60 tracking-widest uppercase mb-3"
              style={headingFont}
            >
              What I Bring
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight"
              style={{ ...headingFont, textTransform: "none" }}
            >
              Expertise
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#FF8533] to-[#FF6B00] rounded-full mb-14" />
          </Reveal>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {expertise.map((skill, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{
                  y: -4,
                  borderColor: "rgba(93,217,193,0.15)",
                }}
                className="group relative p-6 rounded-2xl border border-white/[0.04] bg-white/[0.015] hover:bg-white/[0.03] transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#5DD9C1]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3
                    className="text-base font-bold text-white mb-2"
                    style={{
                      ...headingFont,
                      textTransform: "none",
                    }}
                  >
                    {skill.title}
                  </h3>
                  <p className="text-sm text-white/35 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Education & Languages ── */}
      <section className="py-16 md:py-20 px-6 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
              <div>
                <p
                  className="text-sm text-white/25 tracking-widest uppercase mb-3"
                  style={headingFont}
                >
                  Education
                </p>
                <h3
                  className="text-xl md:text-2xl font-bold text-white mb-1"
                  style={{ ...headingFont, textTransform: "none" }}
                >
                  Master in Digital Marketing & E-Commerce
                </h3>
                <p className="text-white/35 text-sm">
                  OBS Business School / University of Barcelona
                </p>
              </div>
              <div className="shrink-0">
                <p
                  className="text-sm text-white/25 tracking-widest uppercase mb-3"
                  style={headingFont}
                >
                  Languages
                </p>
                <div className="flex flex-wrap gap-2">
                  {["English", "Portuguese", "Spanish"].map(
                    (lang, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-full border border-white/[0.06] text-sm text-white/50 hover:border-[#5DD9C1]/20 hover:text-white/70 transition-all duration-300"
                      >
                        {lang}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        id="contact"
        className="py-28 md:py-40 px-6 relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] rounded-full bg-[#5DD9C1]/[0.04] blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] rounded-full bg-[#FF8533]/[0.03] blur-[100px]" />
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <Reveal>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight"
              style={{ ...headingFont, textTransform: "none" }}
            >
              <span className="bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">
                Let&apos;s Build
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#5DD9C1] via-[#4AACDB] to-[#3B82F6] bg-clip-text text-transparent">
                Together
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-white/30 mb-4 max-w-md mx-auto text-sm md:text-base">
              Looking for a digital strategist who lives and breathes
              Web3, builds communities, and ships with AI?
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {["Full-time", "Consulting", "Advisory"].map(
                (type, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1.5 rounded-full border border-white/[0.06] text-white/30"
                  >
                    {type}
                  </span>
                )
              )}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:super.mario.jorge@icloud.com"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#5DD9C1] to-[#3B82F6] text-[#0a0a0a] font-semibold text-sm hover:shadow-[0_8px_32px_rgba(93,217,193,0.25)] hover:-translate-y-0.5 transition-all duration-300"
                style={headingFont}
              >
                <EmailIcon />
                Get in Touch
              </a>
              <a
                href="https://linkedin.com/in/mario-vasconcelos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-white/[0.08] text-white/60 text-sm hover:text-white hover:border-white/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
              <a
                href="https://x.com/satoshimedici"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-white/[0.08] text-white/60 text-sm hover:text-white hover:border-white/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                <XIcon />
                @satoshimedici
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-8 px-6 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/15">
          <span>&copy; {new Date().getFullYear()} Mario Vasconcelos</span>
          <span>Built with Next.js, Tailwind CSS & Framer Motion</span>
        </div>
      </footer>
    </main>
  );
}
