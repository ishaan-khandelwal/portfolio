"use client";

import { useEffect, useState, useRef, useCallback } from "react";

/* ─── Scroll Reveal ─── */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ─── Active Section ─── */
function useActiveSection() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const sections = ["about", "work", "process", "contact"];
    const handler = () => {
      const y = window.scrollY + 180;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return active;
}

/* ─── Back to Top ─── */
function useBackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const h = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return show;
}

/* ─── Typewriter ─── */
function useTypewriter(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = words[wordIdx % words.length];
    let t;
    if (!deleting && charIdx <= current.length) {
      t = setTimeout(() => { setDisplay(current.slice(0, charIdx)); setCharIdx(c => c + 1); }, speed);
    } else if (!deleting && charIdx > current.length) {
      t = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      t = setTimeout(() => { setDisplay(current.slice(0, charIdx - 1)); setCharIdx(c => c - 1); }, speed / 2);
    } else {
      setDeleting(false); setWordIdx(w => (w + 1) % words.length);
    }
    return () => clearTimeout(t);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);
  return display;
}

/* ─── Counter ─── */
function useCounter(target, duration = 1400, triggered = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    let v = 0;
    const step = (target / duration) * 16;
    const t = setInterval(() => { v += step; if (v >= target) { setCount(target); clearInterval(t); } else setCount(Math.floor(v)); }, 16);
    return () => clearInterval(t);
  }, [triggered, target, duration]);
  return count;
}

/* ─── Tilt Card ─── */
function TiltCard({ children, className = "", glowColor = "rgba(245,158,11,0.2)" }) {
  const ref = useRef(null);
  const onMove = useCallback((e) => {
    const c = ref.current; if (!c) return;
    const r = c.getBoundingClientRect();
    const rx = ((e.clientY - r.top - r.height / 2) / (r.height / 2)) * -5;
    const ry = ((e.clientX - r.left - r.width / 2) / (r.width / 2)) * 5;
    c.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(8px)`;
    c.style.boxShadow = `0 20px 50px -15px rgba(0,0,0,0.6), 0 0 28px ${glowColor}`;
  }, [glowColor]);
  const onLeave = useCallback(() => {
    const c = ref.current; if (!c) return;
    c.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
    c.style.boxShadow = "";
  }, []);
  return <div ref={ref} className={`tilt-card ${className}`} onMouseMove={onMove} onMouseLeave={onLeave}>{children}</div>;
}

/* ─── Skill Bar ─── */
function SkillBar({ label, pct, color, triggered }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between">
        <span className="font-mono text-[0.74rem] text-ink-soft">{label}</span>
        <span className="font-mono text-[0.72rem] text-white/40">{pct}%</span>
      </div>
      <div className="skill-bar-track">
        <div className="skill-bar-fill" style={{ width: triggered ? `${pct}%` : "0%", background: `linear-gradient(90deg,${color}70,${color})`, boxShadow: triggered ? `0 0 8px ${color}50` : "none" }} />
      </div>
    </div>
  );
}

/* ─── Stat Card ─── */
function StatCard({ value, label, color, suffix = "+", triggered }) {
  const count = useCounter(value, 1400, triggered);
  return (
    <div className="stat-card text-center">
      <div className="font-serif font-bold text-3xl mb-1" style={{ color }}>{count}{suffix}</div>
      <div className="font-mono text-[0.7rem] text-ink-soft uppercase tracking-wider">{label}</div>
    </div>
  );
}

/* ════════════════════════════════════════════════ */
export default function Home() {
  useScrollReveal();
  const active = useActiveSection();
  const showTop = useBackToTop();

  /* Cursor spotlight */
  const spotRef = useRef(null);
  useEffect(() => {
    const mv = (e) => { if (spotRef.current) { spotRef.current.style.left = `${e.clientX}px`; spotRef.current.style.top = `${e.clientY}px`; } };
    window.addEventListener("mousemove", mv, { passive: true });
    return () => window.removeEventListener("mousemove", mv);
  }, []);

  /* Typewriter words */
  const typed = useTypewriter(["clean APIs", "fast interfaces", "scalable systems", "zero-latency UIs", "type-safe backends"]);

  /* Stats trigger */
  const statsRef = useRef(null);
  const [statsTrig, setStatsTrig] = useState(false);
  useEffect(() => {
    const el = statsRef.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStatsTrig(true); obs.disconnect(); } }, { threshold: 0.3 });
    obs.observe(el); return () => obs.disconnect();
  }, []);

  /* Skills trigger */
  const skillsRef = useRef(null);
  const [skillsTrig, setSkillsTrig] = useState(false);
  useEffect(() => {
    const el = skillsRef.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSkillsTrig(true); obs.disconnect(); } }, { threshold: 0.2 });
    obs.observe(el); return () => obs.disconnect();
  }, []);

  /* Particles — generated client-side only to avoid SSR hydration mismatch */
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    setParticles(
      Array.from({ length: 16 }, (_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100, y: Math.random() * 100,
        dx: `${(Math.random() - 0.5) * 180}px`,
        dy: `${-Math.random() * 280 - 80}px`,
        duration: Math.random() * 12 + 8,
        delay: Math.random() * 8,
        color: ["#F59E0B", "#FBBF24", "#10B981", "#34D399", "#FB923C"][Math.floor(Math.random() * 5)],
      }))
    );
  }, []);

  const skills = [
    { label: "React / Next.js", pct: 92, color: "#F59E0B" },
    { label: "Node.js / Go", pct: 85, color: "#10B981" },
    { label: "Database Optimization", pct: 88, color: "#FBBF24" },
    { label: "TypeScript", pct: 90, color: "#34D399" },
    { label: "System Architecture", pct: 82, color: "#FB923C" },
  ];

  const projects = [
    {
      id: "case-cooksmart", num: "01", name: "CookSmart AI",
      href: "https://cooksmartai.xyz", img: "/cooksmart.png",
      desc: "An AI-powered recipe assistant transforming ingredient lists into meal suggestions. Optimized LLM response times and concurrent search indexing.",
      meta: "FULL STACK / OPENAI · 2026", domain: "cooksmartai.xyz",
      glow: "rgba(245,158,11,0.25)", badge: "bg-amber-600/80 border-amber-400/20",
      hover: "hover:border-amber-500/40", text: "text-amber-300", titleHover: "group-hover:text-amber-400",
    },
    {
      id: "case-vasuli", num: "02", name: "Vasuli",
      href: "https://vasuli.vercel.app/", img: "/vasuli.png",
      desc: "A peer-to-peer expense splitter and debt settlement tracker. Rebuilt payment flows and ledgers to guarantee zero transaction mismatch.",
      meta: "WEB APP / TAILWIND · 2026", domain: "vasuli.vercel.app",
      glow: "rgba(16,185,129,0.25)", badge: "bg-emerald-600/80 border-emerald-400/20",
      hover: "hover:border-emerald-500/40", text: "text-emerald-300", titleHover: "group-hover:text-emerald-400",
    },
    {
      id: "case-getpdfx", num: "03", name: "getPdfX",
      href: "https://getpdfx.com/", img: "/getpdfx.png",
      desc: "A fast online utility for PDF operations (merge, split, compress). Server-side file buffers process files securely in under 2 seconds.",
      meta: "BACKEND / NODE.JS · 2026", domain: "getpdfx.com",
      glow: "rgba(251,146,60,0.25)", badge: "bg-orange-600/80 border-orange-400/20",
      hover: "hover:border-orange-500/40", text: "text-orange-300", titleHover: "group-hover:text-orange-400",
    },
    {
      id: "case-dmx", num: "04", name: "DMX Academy",
      href: "https://dmx-academy.vercel.app", img: "/dmx.png",
      desc: "An interactive learning platform for digital marketing and SEO. Refactored static generation queries, boosting SEO indexing rates.",
      meta: "FULL STACK / POSTGRES · 2026", domain: "dmx-academy.vercel.app",
      glow: "rgba(244,63,94,0.25)", badge: "bg-rose-600/80 border-rose-400/20",
      hover: "hover:border-rose-500/40", text: "text-rose-300", titleHover: "group-hover:text-rose-400",
    },
  ];

  const steps = [
    { num: "01", title: "Measure, don't guess", desc: "Server logs, database query plans, and Core Web Vitals before writing any code. Metrics reveal the real bottlenecks—assumptions never do.", dot: "border-amber-500", num_color: "text-amber-400", hov: "group-hover:border-amber-500/40" },
    { num: "02", title: "Isolate the bottleneck", desc: "Every system has one constraint. Optimize that first—refactoring everything at once introduces silent regressions and unpredictable behavior.", dot: "border-emerald-500", num_color: "text-emerald-400", hov: "group-hover:border-emerald-500/40" },
    { num: "03", title: "Build a testable benchmark", desc: "Simplest code path that resolves the bottleneck. Stress-test and load-test locally to verify gains before touching production.", dot: "border-orange-500", num_color: "text-orange-400", hov: "group-hover:border-orange-500/40" },
    { num: "04", title: "Deploy and monitor", desc: "Watch real-world telemetry post-deployment. The loop repeats as traffic patterns evolve and new scaling demands emerge under growth.", dot: "border-rose-500", num_color: "text-rose-400", hov: "group-hover:border-rose-500/40" },
  ];

  return (
    <div className="mesh-bg min-h-screen text-ink font-sans selection:bg-amber-500/30 selection:text-white relative">
      {/* Cursor spotlight */}
      <div ref={spotRef} className="cursor-spotlight" />

      {/* Back to top */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={`back-to-top ${showTop ? "visible" : ""}`} aria-label="Back to top">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15" /></svg>
      </button>

      {/* ──────────────── NAV ──────────────── */}
      <nav className="sticky top-0 z-50 glass-nav">
        <div className="max-w-[1100px] mx-auto px-6 sm:px-10 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group select-none">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-50" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400" />
            </span>
            <span className="font-serif font-semibold text-[1.1rem] text-white tracking-wide group-hover:text-amber-400 transition-colors duration-200">
              Ishaan Khandelwal
            </span>
          </a>
          <div className="flex gap-6 sm:gap-8">
            {["about", "work", "process", "contact"].map((s) => (
              <a key={s} href={`#${s}`} className={`nav-link font-mono text-[0.79rem] pb-1 transition-colors duration-200 ${active === s ? "text-amber-400 active glow-text-amber" : "text-ink-soft hover:text-white"}`}>
                {s}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ──────────────── HERO ──────────────── */}
      <header className="relative min-h-[88vh] flex items-center px-6 sm:px-10 max-w-[1100px] mx-auto overflow-hidden pb-12 pt-20">
        {/* Particles */}
        {particles.map((p) => (
          <span key={p.id} className="hero-particle" style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%`, background: p.color, "--dx": p.dx, "--dy": p.dy, animationDuration: `${p.duration}s`, animationDelay: `${p.delay}s`, boxShadow: `0 0 6px ${p.color}` }} />
        ))}

        {/* Glow orbs */}
        <div className="absolute top-10 right-0 w-[420px] h-[420px] bg-amber-500/8 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-emerald-500/6 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 w-full">
          <div className="reveal inline-flex items-center gap-2.5 font-mono text-[0.73rem] text-amber-400 bg-amber-950/50 border border-amber-800/40 px-4 py-2 rounded-full mb-8 select-none animate-float">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            full stack developer · bangalore
          </div>

          <h1 className="reveal reveal-delay-1 font-serif font-semibold text-[2.6rem] sm:text-[3.8rem] md:text-[5rem] leading-[1.05] text-white">
            I build
          </h1>
          {/* Typewriter — own dedicated line, fixed height so layout never shifts */}
          <div
            className="reveal reveal-delay-1 font-serif font-semibold text-[2.6rem] sm:text-[3.8rem] md:text-[5rem] leading-[1.05] mb-2"
            style={{ minHeight: "1.1em" }}
          >
            <span className="gradient-text whitespace-nowrap">
              {typed}<span className="typewriter-cursor" />
            </span>
          </div>
          <h1 className="reveal reveal-delay-2 font-serif font-semibold text-[2.6rem] sm:text-[3.8rem] md:text-[5rem] leading-[1.05] max-w-[860px] text-white/75 mt-1">
            and systems that don't break under load.
          </h1>

          <p className="reveal reveal-delay-3 mt-8 text-[1.05rem] text-ink-soft max-w-[520px] leading-relaxed font-light">
            Four production-grade projects, each a different class of bottleneck solved — from LLM latency to database query plans.
          </p>

          <div className="reveal reveal-delay-4 mt-10 flex gap-4 flex-wrap">
            <a href="#work" className="px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-mono text-[0.82rem] font-semibold transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_28px_rgba(245,158,11,0.5)] inline-flex items-center gap-2">
              see the work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href="#contact" className="px-7 py-3.5 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] text-white font-mono text-[0.82rem] transition-all duration-200 hover:-translate-y-1 hover:border-amber-500/30 inline-flex items-center gap-2">
              get in touch
            </a>
          </div>

          {/* Scroll hint */}
          <div className="reveal reveal-delay-5 absolute bottom-6 left-0 flex flex-col items-center gap-1.5 opacity-35">
            <span className="font-mono text-[0.65rem] text-ink-soft tracking-widest uppercase">scroll</span>
            <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
          </div>
        </div>
      </header>

      <div className="section-divider" />

      {/* ──────────────── ABOUT ──────────────── */}
      <section id="about" className="scroll-mt-24 py-20 px-6 sm:px-10 max-w-[1100px] mx-auto">
        <div className="reveal flex items-center gap-4 mb-3">
          <span className="section-badge text-amber-400 bg-amber-950/40 border-amber-800/40">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> about
          </span>
        </div>
        <h2 className="reveal reveal-delay-1 font-serif font-semibold text-[2rem] sm:text-[2.6rem] text-white mb-12">
          The short version.
        </h2>

        {/* Stats */}
        <div ref={statsRef} className="reveal reveal-delay-2 grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          <StatCard value={4} label="Projects Shipped" color="#F59E0B" suffix="+" triggered={statsTrig} />
          <StatCard value={1} label="Years Experience" color="#10B981" suffix="yr+" triggered={statsTrig} />
          <StatCard value={12} label="Technologies" color="#FBBF24" suffix="+" triggered={statsTrig} />
          <StatCard value={100} label="Performance Focus" color="#FB923C" suffix="%" triggered={statsTrig} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 items-start">
          {/* Photo */}
          <div className="reveal">
            <TiltCard glowColor="rgba(245,158,11,0.18)">
              <div className="group aspect-square rounded-2xl border border-white/8 bg-gradient-to-br from-amber-950/20 to-orange-950/20 overflow-hidden relative shadow-2xl">
                <img src="/ishaan.png" alt="Ishaan Khandelwal" className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 select-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent flex flex-col justify-end p-6">
                  <span className="font-serif font-semibold text-lg text-white">Ishaan Khandelwal</span>
                  <span className="font-mono text-xs text-amber-400 mt-0.5">Full Stack Developer</span>
                </div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-amber-500/10 group-hover:ring-amber-500/30 transition-all duration-500 pointer-events-none" />
              </div>
            </TiltCard>
          </div>

          {/* Text */}
          <div className="space-y-6">
            <p className="reveal reveal-delay-1 text-[1.15rem] text-white font-semibold leading-relaxed">
              I'm a full stack developer based in Bangalore, building web applications that are clean, fast, and robust.
            </p>
            <p className="reveal reveal-delay-2 text-[1rem] leading-relaxed text-ink-soft">
              Most of my work starts with a codebase that technically works but struggles to scale — a slow database query, a laggy UI, or a fragile third-party integration. I tune database indexes, build type-safe APIs, and ensure the front-end renders instantly.
            </p>
            <div className="reveal reveal-delay-3 border-l-2 border-amber-500/50 pl-5 py-1 bg-amber-950/10 rounded-r-lg">
              <p className="text-[0.98rem] leading-relaxed text-ink-soft">
                Previously I interned at <strong className="text-white">DatamindX Technologies Pvt Ltd</strong>, where my obsession with web performance and secure architecture started.
              </p>
            </div>

            {/* Skills */}
            <div ref={skillsRef} className="reveal reveal-delay-4 space-y-4 pt-2">
              {skills.map((s) => <SkillBar key={s.label} {...s} triggered={skillsTrig} />)}
            </div>

            {/* Tags */}
            <div className="reveal reveal-delay-5 flex flex-wrap gap-2 pt-2">
              {["full stack", "next.js", "react", "node.js", "go", "typescript", "postgresql", "system design"].map((t) => (
                <span key={t} className="font-mono text-[0.71rem] border border-white/10 rounded-full px-3.5 py-1.5 text-white/70 bg-white/[0.02] hover:bg-amber-500/10 hover:border-amber-400/35 hover:text-amber-300 transition-all duration-200 cursor-default select-none">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ──────────────── WORK ──────────────── */}
      <section id="work" className="scroll-mt-24 py-20 px-6 sm:px-10 max-w-[1100px] mx-auto">
        <div className="reveal flex items-center gap-4 mb-3">
          <span className="section-badge text-emerald-400 bg-emerald-950/40 border-emerald-800/40">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> selected work
          </span>
        </div>
        <div className="reveal reveal-delay-1 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <h2 className="font-serif font-semibold text-[2rem] sm:text-[2.6rem] text-white">
            Four bottlenecks, four architectures.
          </h2>
          <p className="text-ink-soft text-sm max-w-[360px] leading-relaxed">
            Click any card to visit the live site.
          </p>
        </div>

        {/* Project cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div key={p.id} className={`reveal ${i % 2 === 1 ? "reveal-delay-2" : "reveal-delay-1"} relative pt-4`}>
              {/* Badge sits OUTSIDE the overflow:hidden card so it's never clipped */}
              <div className={`absolute top-0 left-8 z-10 font-mono text-[0.7rem] text-white px-3 py-1 rounded-md ${p.badge} border shadow-lg`}>
                project {p.num}
              </div>
              <TiltCard glowColor={p.glow}>
                <a id={p.id} href={p.href} target="_blank" rel="noopener noreferrer"
                  className={`group relative glass-card rounded-2xl p-6 pt-8 block ${p.hover} transition-all`}>
                  <div className="project-img-wrap aspect-[16/9] mb-6 border border-white/5">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover object-top" />
                    <div className="project-img-overlay" />
                  </div>
                  <h3 className={`font-serif font-semibold text-[1.35rem] text-white mb-2 transition-colors duration-200 ${p.titleHover}`}>
                    {p.name}
                  </h3>
                  <p className="text-ink-soft text-[0.9rem] leading-relaxed mb-6">{p.desc}</p>
                  <div className={`flex justify-between items-center font-mono text-[0.73rem] border-t border-white/8 pt-4 ${p.text}`}>
                    <span>{p.meta}</span>
                    <span className="flex items-center gap-1 group-hover:underline">
                      {p.domain}
                      <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                    </span>
                  </div>
                </a>
              </TiltCard>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* ──────────────── PROCESS ──────────────── */}
      <section id="process" className="scroll-mt-24 py-20 px-6 sm:px-10 max-w-[1100px] mx-auto">
        <div className="reveal flex items-center gap-4 mb-3">
          <span className="section-badge text-orange-400 bg-orange-950/40 border-orange-800/40">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400" /> how I work
          </span>
        </div>
        <h2 className="reveal reveal-delay-1 font-serif font-semibold text-[2rem] sm:text-[2.6rem] text-white mb-14">
          Four steps, every project.
        </h2>

        <div className="relative pl-8 sm:pl-14 max-w-[820px]">
          <div className="timeline-line absolute left-0 top-4 bottom-4 h-auto" />
          <div className="space-y-10">
            {steps.map((s, idx) => (
              <div key={idx} className={`reveal ${["", "reveal-delay-1", "reveal-delay-2", "reveal-delay-3"][idx]}`}>
                <div className="relative group">
                  <div className={`absolute -left-[34px] sm:-left-[50px] top-5 w-5 h-5 rounded-full bg-[#0C0A08] border-2 ${s.dot} flex items-center justify-center transition-all duration-300 group-hover:scale-125 z-10`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>
                  <div className={`glass-card rounded-2xl p-6 sm:p-8 border transition-all duration-300 ${s.hov}`}>
                    <div className="flex items-center gap-4 mb-3">
                      <span className={`font-mono text-[0.8rem] w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/8 ${s.num_color} font-semibold`}>
                        {s.num}
                      </span>
                      <h3 className="font-serif font-semibold text-[1.2rem] text-white group-hover:text-amber-400 transition-colors duration-200">
                        {s.title}
                      </h3>
                    </div>
                    <p className="text-ink-soft text-[0.93rem] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ──────────────── CONTACT ──────────────── */}
      <section id="contact" className="scroll-mt-24 py-20 px-6 sm:px-10 max-w-[1100px] mx-auto">
        <div className="reveal relative glass-card rounded-3xl p-10 sm:p-16 overflow-hidden border border-white/8 shadow-2xl">
          <div className="absolute -top-20 -right-20 w-[350px] h-[350px] bg-amber-500/7 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-[350px] h-[350px] bg-emerald-500/7 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-12">
            <div className="max-w-[460px]">
              <span className="section-badge text-amber-400 bg-amber-950/40 border-amber-800/40 mb-5 inline-flex">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> contact
              </span>
              <h2 className="font-serif font-semibold text-white text-[2rem] sm:text-[2.8rem] leading-tight mt-2">
                Got a system that needs to scale?
              </h2>
              <p className="text-ink-soft mt-4 text-[0.95rem] leading-relaxed">
                Let's talk about performance bottlenecks, scalable architecture, or your next product.
              </p>
            </div>

            <div className="flex flex-col gap-3.5 min-w-[220px] w-full md:w-auto">
              <a href="mailto:ishaankhandelwal2007@gmail.com" className="contact-link">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-amber-500/12 border border-amber-500/20 text-amber-400">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  </span>
                  <span>mail</span>
                </div>
                <span className="contact-link-arrow text-amber-400">↗</span>
              </a>
              <a href="https://www.linkedin.com/in/ishaan-khandelwal-109a6135b" target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-emerald-500/12 border border-emerald-500/20 text-emerald-400">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                  </span>
                  <span>linkedin</span>
                </div>
                <span className="contact-link-arrow text-emerald-400">↗</span>
              </a>
              <a href="https://www.pdffiller.com/s/aQLDE76k" target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-orange-500/12 border border-orange-500/20 text-orange-400">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
                  </span>
                  <span>resume</span>
                </div>
                <span className="contact-link-arrow text-orange-400">↗</span>
              </a>
              <a href="https://github.com/ishaan-khandelwal" target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/8 border border-white/15 text-white/80">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                  </span>
                  <span>github</span>
                </div>
                <span className="contact-link-arrow text-white/60">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── FOOTER ──────────────── */}
      <footer className="border-t border-white/5 py-8 px-6 sm:px-10">
        <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-ink-soft font-mono text-[0.72rem]">
          <span>Ishaan Khandelwal · Bengaluru, India</span>
          <span>© {new Date().getFullYear()} · designed &amp; built with ♥</span>
        </div>
      </footer>
    </div>
  );
}
