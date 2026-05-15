import { motion } from "framer-motion";
import {
  Satellite, Brain, Radio, FileText, Image as ImageIcon, Video, AudioLines,
  Activity, Zap, Globe2, ShieldAlert, Sparkles, Upload, ArrowRight,
  Cpu, Network, Eye, Waves, Cloud, Rocket, Target, Bot, Send,
  Camera, X, CheckCircle2, Loader2,
} from "lucide-react";
import { StarField } from "@/components/StarField";
import { CosmicEarth } from "@/components/CosmicEarth";
import { useEffect, useRef, useState } from "react";

// ---------- Reusable bits ----------
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function SectionTitle({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <motion.div {...fadeUp} className="mx-auto mb-14 max-w-3xl text-center">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-neon-cyan">
        <Sparkles className="h-3 w-3" /> {kicker}
      </div>
      <h2 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl">
        <span className="text-gradient-cosmic">{title}</span>
      </h2>
      {sub && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{sub}</p>}
    </motion.div>
  );
}

function GlowCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl glass-panel-glow p-6 transition hover:-translate-y-1 hover:border-neon-purple/40 ${className}`}>
      <div className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 transition group-hover:opacity-100"
           style={{ background: "linear-gradient(135deg, transparent, oklch(0.65 0.28 300 / 0.3), transparent)" }} />
      <div className="relative">{children}</div>
    </div>
  );
}

// ---------- Header ----------
function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl glass-panel px-5 py-3">
        <div className="flex items-center gap-2.5">
          <div className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple glow-blue">
            <Brain className="h-5 w-5 text-background" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-sm font-bold tracking-widest text-glow-cyan">COSMOMIND</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">AI · v2.0</div>
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {["Mission", "Capabilities", "Engine", "Demo", "Team"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="transition hover:text-neon-cyan">{l}</a>
          ))}
        </nav>
        <button className="rounded-xl border border-neon-pink/40 bg-neon-pink/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-neon-pink transition hover:bg-neon-pink/20 glow-pink">
          Launch
        </button>
      </div>
    </header>
  );
}

// ---------- Hero ----------
function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-6">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-neon-blue/40 bg-neon-blue/10 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-neon-cyan">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-cyan" />
            </span>
            System online · Earth orbit feed
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-[5.5rem]">
            <span className="block text-gradient-cosmic animate-gradient">COSMOMIND</span>
            <span className="block text-foreground/90 text-glow-blue">AI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
            Multimodal generative intelligence for{" "}
            <span className="text-neon-cyan text-glow-cyan">space data reconstruction</span>,
            anomaly detection, and Earth observation — fusing satellite imagery, video, signal
            audio, and mission text into one unified cognition layer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-9 flex flex-wrap gap-4">
            <button className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink px-7 py-3.5 font-semibold tracking-wide text-background shadow-[0_0_30px_oklch(0.65_0.28_300/0.6)] transition hover:scale-[1.03] animate-pulse-glow">
              <span className="relative z-10 flex items-center gap-2"><Rocket className="h-4 w-4" /> Launch System</span>
            </button>
            <button className="group rounded-xl border border-neon-cyan/50 bg-neon-cyan/5 px-7 py-3.5 font-semibold tracking-wide text-neon-cyan backdrop-blur transition hover:bg-neon-cyan/15">
              <span className="flex items-center gap-2"><Brain className="h-4 w-4" /> Run AI Analysis</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 1 }}
            className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
            {[
              { v: "98.7%", l: "AI Confidence" },
              { v: "1.2M+", l: "Frames / sec" },
              { v: "24/7", l: "Orbit Watch" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl glass-panel px-3 py-3 text-center">
                <div className="font-display text-2xl font-bold text-neon-cyan text-glow-cyan">{s.v}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Earth */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }}
          className="relative h-[420px] sm:h-[520px] lg:h-[600px]">
          <div className="absolute inset-0 rounded-full bg-gradient-radial from-neon-purple/20 via-transparent to-transparent blur-3xl" />
          <CosmicEarth />
          {/* HUD overlays */}
          <div className="pointer-events-none absolute left-2 top-6 rounded-lg glass-panel px-3 py-2 text-[10px] uppercase tracking-widest text-neon-cyan">
            LAT 28.5N · LNG 80.6W
          </div>
          <div className="pointer-events-none absolute right-2 top-16 rounded-lg glass-panel px-3 py-2 text-[10px] uppercase tracking-widest text-neon-pink">
            SAT-COMM · LOCKED
          </div>
          <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 rounded-lg glass-panel px-4 py-2 text-[10px] uppercase tracking-widest text-neon-purple">
            Orbital scan · 0.42 km/s
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ---------- About / Problem / Solution ----------
function About() {
  const items = [
    {
      icon: Globe2, title: "The Mission",
      text: "Build a unified cognition layer that listens to every channel of space data — visual, motion, signal, and language — and synthesizes operational intelligence in real time.",
      color: "neon-cyan",
    },
    {
      icon: ShieldAlert, title: "The Problem",
      text: "Space agencies operate on fragmented pipelines: imagery in one silo, telemetry in another, mission reports in PDFs. Critical anomalies hide in the gaps between modalities.",
      color: "neon-pink",
    },
    {
      icon: Sparkles, title: "Our Answer",
      text: "A multimodal generative engine that fuses every signal into a single, queryable space intelligence — reconstructing terrain, predicting events, and surfacing risk before it escalates.",
      color: "neon-purple",
    },
  ];
  return (
    <section id="mission" className="relative px-6 py-32">
      <SectionTitle
        kicker="About the project"
        title="Operating the impossible"
        sub="From orbit to ground truth — a single intelligence answering every question about our planet and the space around it."
      />
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
        {items.map((it, i) => (
          <motion.div key={it.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }}>
            <GlowCard className="h-full">
              <div className={`mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-${it.color}/10 border border-${it.color}/30`}>
                <it.icon className={`h-6 w-6 text-${it.color}`} />
              </div>
              <h3 className="mb-2 text-xl font-bold">{it.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{it.text}</p>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ---------- Capabilities (4 modalities) ----------
function Capabilities() {
  const mods = [
    {
      icon: ImageIcon, label: "Image", color: "neon-blue",
      title: "Satellite Vision",
      bullets: ["Terrain & climate detection", "AI image reconstruction", "Object & threat classification", "Heatmap synthesis"],
    },
    {
      icon: Video, label: "Video", color: "neon-purple",
      title: "Motion Intelligence",
      bullets: ["Rocket launch analytics", "Orbital tracking", "Frame-level anomaly", "Satellite movement model"],
    },
    {
      icon: AudioLines, label: "Audio", color: "neon-cyan",
      title: "Signal Cognition",
      bullets: ["Comm signal analysis", "Astronaut voice synthesis", "Speech-to-text", "Pattern anomaly detection"],
    },
    {
      icon: FileText, label: "Text", color: "neon-pink",
      title: "Mission Language",
      bullets: ["Mission report parsing", "Scientific summarization", "Event prediction", "Research analytics"],
    },
  ];
  return (
    <section id="capabilities" className="relative px-6 py-32">
      <SectionTitle
        kicker="Multimodal capabilities"
        title="Four senses. One intelligence."
        sub="Each modality is a domain expert. Fused together, they think like a mission control room."
      />
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
        {mods.map((m, i) => (
          <motion.div key={m.label} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}>
            <GlowCard className="h-full">
              <div className="mb-5 flex items-center justify-between">
                <div className={`grid h-12 w-12 place-items-center rounded-xl bg-${m.color}/15 border border-${m.color}/40`}>
                  <m.icon className={`h-6 w-6 text-${m.color}`} />
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-[0.25em] text-${m.color}`}>{m.label}</span>
              </div>
              <h3 className="mb-3 text-lg font-bold">{m.title}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {m.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className={`mt-1.5 h-1 w-1 rounded-full bg-${m.color}`} />
                    {b}
                  </li>
                ))}
              </ul>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ---------- Engine / Workflow ----------
function Engine() {
  return (
    <section id="engine" className="relative px-6 py-32">
      <SectionTitle
        kicker="AI Engine"
        title="Multimodal fusion architecture"
        sub="Four independent encoders feed a generative reasoning core that emits unified space intelligence."
      />
      <div className="mx-auto max-w-6xl">
        <div className="relative rounded-3xl glass-panel-glow p-8 lg:p-12">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {[
              { icon: ImageIcon, label: "Image Encoder", color: "neon-blue" },
              { icon: Video, label: "Video Encoder", color: "neon-purple" },
              { icon: AudioLines, label: "Audio Encoder", color: "neon-cyan" },
              { icon: FileText, label: "Text Encoder", color: "neon-pink" },
            ].map((e) => (
              <div key={e.label} className={`flex flex-col items-center rounded-xl border border-${e.color}/30 bg-${e.color}/5 p-4 text-center`}>
                <e.icon className={`mb-2 h-7 w-7 text-${e.color}`} />
                <div className="text-xs uppercase tracking-widest text-foreground">{e.label}</div>
              </div>
            ))}
          </div>

          {/* connectors */}
          <div className="my-8 flex justify-center">
            <svg viewBox="0 0 600 100" className="h-24 w-full max-w-2xl">
              {[120, 240, 360, 480].map((x, i) => (
                <line key={x} x1={x} y1="0" x2="300" y2="100" stroke={["#7dd3fc","#a78bfa","#67e8f9","#f0abfc"][i]} strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
              ))}
              <circle cx="300" cy="100" r="4" fill="#a78bfa" />
            </svg>
          </div>

          <div className="mx-auto mb-8 max-w-md rounded-2xl border border-neon-purple/40 bg-gradient-to-br from-neon-purple/15 to-neon-pink/10 p-6 text-center animate-pulse-glow">
            <Cpu className="mx-auto mb-2 h-8 w-8 text-neon-purple" />
            <div className="font-display text-lg font-bold text-glow-blue">MULTIMODAL GENAI CORE</div>
            <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Cross-modal Transformer · 47B params</div>
          </div>

          <div className="my-8 flex justify-center">
            <svg viewBox="0 0 600 80" className="h-20 w-full max-w-2xl">
              {[150, 300, 450].map((x, i) => (
                <line key={x} x1="300" y1="0" x2={x} y2="80" stroke={["#67e8f9","#a78bfa","#f0abfc"][i]} strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
              ))}
            </svg>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: Eye, label: "Reconstruction", c: "neon-cyan" },
              { icon: Activity, label: "Predictive Insight", c: "neon-purple" },
              { icon: ShieldAlert, label: "Anomaly Output", c: "neon-pink" },
            ].map((o) => (
              <div key={o.label} className={`flex items-center gap-3 rounded-xl border border-${o.c}/30 bg-${o.c}/5 p-4`}>
                <o.icon className={`h-5 w-5 text-${o.c}`} />
                <span className="text-sm font-semibold">{o.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Dashboard preview ----------
function Dashboard() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1500);
    return () => clearInterval(id);
  }, []);
  const conf = 92 + ((tick * 7) % 8);
  const threat = ["LOW", "ELEVATED", "MODERATE"][tick % 3];
  return (
    <section className="relative px-6 py-32">
      <SectionTitle
        kicker="Command dashboard"
        title="Live space intelligence"
        sub="A real-time mission-control surface for orbit, climate, and signal."
      />
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl glass-panel-glow p-6 lg:p-8 scanline">
          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <div className="rounded-2xl border border-neon-blue/30 bg-background/40 p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neon-cyan"><Satellite className="h-4 w-4" /> Live satellite feed</div>
                <div className="flex items-center gap-2 text-xs text-neon-pink">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-neon-pink" /> REC
                </div>
              </div>
              <div className="relative h-72 overflow-hidden rounded-xl bg-gradient-to-br from-neon-blue/20 via-background to-neon-purple/20">
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neon-cyan/40 animate-orbit">
                  <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-neon-cyan glow-cyan" />
                </div>
                <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neon-purple/30 animate-orbit" style={{ animationDuration: "30s", animationDirection: "reverse" }}>
                  <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-neon-purple glow-purple" />
                </div>
                <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple animate-pulse-glow" />
              </div>
              <div className="mt-4 grid grid-cols-4 gap-3 text-center">
                {[
                  { l: "Altitude", v: "412 km" },
                  { l: "Velocity", v: "7.66 km/s" },
                  { l: "Latency", v: "12 ms" },
                  { l: "Sensors", v: "47" },
                ].map((m) => (
                  <div key={m.l} className="rounded-lg border border-border bg-background/40 px-2 py-2">
                    <div className="font-display text-base font-bold text-neon-cyan">{m.v}</div>
                    <div className="text-[9px] uppercase tracking-widest text-muted-foreground">{m.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-neon-purple/30 bg-background/40 p-5">
                <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-widest">
                  <span className="text-muted-foreground">AI Confidence</span>
                  <span className="text-neon-purple">{conf}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-secondary">
                  <div className="h-full rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink transition-all duration-700" style={{ width: `${conf}%` }} />
                </div>
              </div>

              {[
                { icon: ShieldAlert, label: "Anomaly Detected", val: "Sector 7-G", c: "neon-pink" },
                { icon: Eye, label: "Reconstruction", val: "Complete", c: "neon-cyan" },
                { icon: Waves, label: "Signal Analysis", val: "Nominal", c: "neon-blue" },
                { icon: Target, label: "Threat Level", val: threat, c: "neon-purple" },
              ].map((c) => (
                <div key={c.label} className={`flex items-center justify-between rounded-xl border border-${c.c}/30 bg-${c.c}/5 p-4`}>
                  <div className="flex items-center gap-3">
                    <c.icon className={`h-5 w-5 text-${c.c}`} />
                    <span className="text-sm">{c.label}</span>
                  </div>
                  <span className={`font-display text-sm font-bold text-${c.c}`}>{c.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- AI Results Dashboard ----------
function useCounter(target: number, duration = 1600) {
  const [v, setV] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setV(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return v;
}

function ResultShell({ color, children, accent }: { color: string; children: React.ReactNode; accent?: string }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl glass-panel-glow p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-${color}/70`}
      style={{ boxShadow: `0 0 50px oklch(0.72 0.22 250 / 0.18)` }}
    >
      <span className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-${color} to-transparent animate-pulse`} />
      <span className={`pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-${accent ?? color} to-transparent animate-pulse`} />
      {["top-2 left-2 border-t-2 border-l-2", "top-2 right-2 border-t-2 border-r-2", "bottom-2 left-2 border-b-2 border-l-2", "bottom-2 right-2 border-b-2 border-r-2"].map((p) => (
        <span key={p} className={`pointer-events-none absolute h-4 w-4 ${p} border-${color}/70`} />
      ))}
      <span className={`pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-${color}/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full`} />
      <div className="relative">{children}</div>
    </div>
  );
}

function ConfidenceRing() {
  const v = useCounter(98.7);
  const r = 70, c = 2 * Math.PI * r;
  const off = c - (v / 100) * c;
  return (
    <ResultShell color="neon-cyan">
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-neon-cyan">
        <span className="flex items-center gap-2"><Brain className="h-4 w-4" /> AI Confidence</span>
        <span className="rounded-full border border-neon-cyan/40 bg-neon-cyan/10 px-2 py-0.5">LIVE</span>
      </div>
      <div className="mt-6 flex items-center gap-6">
        <div className="relative h-44 w-44 shrink-0">
          <svg viewBox="0 0 180 180" className="h-full w-full -rotate-90">
            <defs>
              <linearGradient id="confGrad" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.85 0.18 200)" />
                <stop offset="100%" stopColor="oklch(0.65 0.28 300)" />
              </linearGradient>
            </defs>
            <circle cx="90" cy="90" r={r} stroke="oklch(0.20 0.05 280)" strokeWidth="10" fill="none" />
            <circle cx="90" cy="90" r={r} stroke="url(#confGrad)" strokeWidth="10" strokeLinecap="round" fill="none"
              strokeDasharray={c} strokeDashoffset={off}
              style={{ filter: "drop-shadow(0 0 10px oklch(0.85 0.18 200 / 0.7))" }} />
          </svg>
          <span className="absolute inset-0 rounded-full border border-neon-cyan/20 animate-orbit" />
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center">
              <div className="font-display text-4xl font-black text-neon-cyan text-glow-cyan tabular-nums">{v.toFixed(1)}%</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Confidence</div>
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-2 text-sm text-muted-foreground">
          <div className="font-display text-lg font-bold text-foreground">Multimodal certainty</div>
          <p>Cross-modal attention agreement across image, video, audio, and text streams. Radar-locked on primary target.</p>
          <div className="mt-3 grid grid-cols-3 gap-2 text-center">
            {[["IMG","99%"],["AUD","98%"],["TXT","97%"]].map(([l,v]) => (
              <div key={l} className="rounded-lg border border-neon-cyan/20 bg-neon-cyan/5 px-2 py-1.5">
                <div className="font-display text-sm font-bold text-neon-cyan">{v}</div>
                <div className="text-[9px] uppercase tracking-widest text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ResultShell>
  );
}

function AnomalyCard() {
  const v = useCounter(94.3);
  return (
    <ResultShell color="neon-pink">
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-neon-pink">
        <span className="flex items-center gap-2"><ShieldAlert className="h-4 w-4 animate-pulse" /> Anomaly Detection</span>
        <span className="flex items-center gap-1.5 rounded-full border border-neon-pink/40 bg-neon-pink/10 px-2 py-0.5">
          <span className="h-1.5 w-1.5 animate-ping rounded-full bg-neon-pink" /> ALERT
        </span>
      </div>
      <div className="mt-5 flex items-baseline gap-3">
        <div className="font-display text-6xl font-black text-neon-pink text-glow-blue tabular-nums">{v.toFixed(1)}</div>
        <div className="font-display text-2xl text-neon-pink">%</div>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">
        Potential orbital climate anomaly detected near monitored satellite region.
      </p>
      <div className="mt-5 grid grid-cols-12 gap-1">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} className="h-8 rounded-sm bg-neon-pink/30"
            style={{ opacity: 0.25 + ((i * 7) % 9) / 12, animation: `pulse-glow ${1.5 + (i % 4) * 0.3}s ease-in-out infinite` }} />
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-widest">
        <span className="text-muted-foreground">Sector 7-G · LAT 28.5N</span>
        <span className="text-neon-pink">Severity: ELEVATED</span>
      </div>
    </ResultShell>
  );
}

function ReconstructionCard() {
  const v = useCounter(97.8);
  return (
    <ResultShell color="neon-blue" accent="neon-purple">
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-neon-blue">
        <span className="flex items-center gap-2"><Eye className="h-4 w-4" /> Reconstruction Accuracy</span>
        <span className="rounded-full border border-neon-blue/40 bg-neon-blue/10 px-2 py-0.5">SCAN</span>
      </div>
      <div className="mt-5 flex items-baseline gap-3">
        <div className="font-display text-6xl font-black text-gradient-cosmic tabular-nums">{v.toFixed(1)}</div>
        <div className="font-display text-2xl text-neon-purple">%</div>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">
        Satellite terrain successfully reconstructed using multimodal fusion intelligence.
      </p>
      <div className="relative mt-5 h-28 overflow-hidden rounded-xl border border-neon-blue/30 bg-gradient-to-br from-neon-blue/15 via-background to-neon-purple/20">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <span className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-neon-cyan/40 to-transparent"
          style={{ animation: "scan 2.4s linear infinite" }} />
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-4 gap-px p-2">
          {Array.from({ length: 32 }).map((_, i) => (
            <span key={i} className="rounded-sm bg-neon-blue/20" style={{ opacity: 0.2 + ((i * 11) % 9) / 14 }} />
          ))}
        </div>
      </div>
    </ResultShell>
  );
}

function SignalCard() {
  const v = useCounter(96.5);
  const bars = Array.from({ length: 40 });
  return (
    <ResultShell color="neon-purple" accent="neon-cyan">
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-neon-purple">
        <span className="flex items-center gap-2"><Waves className="h-4 w-4" /> Signal Analysis Success</span>
        <span className="rounded-full border border-neon-purple/40 bg-neon-purple/10 px-2 py-0.5">DECODED</span>
      </div>
      <div className="mt-5 flex items-baseline gap-3">
        <div className="font-display text-6xl font-black text-neon-purple text-glow-blue tabular-nums">{v.toFixed(1)}</div>
        <div className="font-display text-2xl text-neon-purple">%</div>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">
        Communication signal pattern successfully decoded and analyzed.
      </p>
      <div className="mt-5 flex h-24 items-center gap-1 rounded-xl border border-neon-purple/30 bg-background/40 px-3">
        {bars.map((_, i) => {
          const h = 20 + Math.abs(Math.sin(i * 0.7)) * 70;
          return (
            <span key={i} className="flex-1 rounded-full bg-gradient-to-t from-neon-purple to-neon-cyan"
              style={{ height: `${h}%`, animation: `pulse-glow ${1 + (i % 5) * 0.2}s ease-in-out infinite`, opacity: 0.55 + (i % 7) / 18 }} />
          );
        })}
      </div>
    </ResultShell>
  );
}

function PredictionCard() {
  const v = useCounter(99.1);
  const points = "0,55 12,48 24,52 36,40 48,42 60,30 72,34 84,22 96,26 108,14 120,18";
  return (
    <ResultShell color="neon-cyan" accent="neon-pink">
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-neon-cyan">
        <span className="flex items-center gap-2"><Activity className="h-4 w-4" /> Prediction Accuracy</span>
        <span className="rounded-full border border-neon-cyan/40 bg-neon-cyan/10 px-2 py-0.5">FORECAST</span>
      </div>
      <div className="mt-5 flex items-baseline gap-3">
        <div className="font-display text-6xl font-black text-gradient-aurora tabular-nums">{v.toFixed(1)}</div>
        <div className="font-display text-2xl text-neon-cyan">%</div>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">
        AI successfully generated climate and orbital predictive insights.
      </p>
      <div className="mt-5 h-28 overflow-hidden rounded-xl border border-neon-cyan/30 bg-gradient-to-br from-background to-neon-cyan/10 p-3">
        <svg viewBox="0 0 120 60" className="h-full w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="predFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.85 0.18 200 / 0.6)" />
              <stop offset="100%" stopColor="oklch(0.85 0.18 200 / 0)" />
            </linearGradient>
          </defs>
          <polyline points={`0,60 ${points} 120,60`} fill="url(#predFill)" />
          <polyline points={points} fill="none" stroke="oklch(0.85 0.18 200)" strokeWidth="1.5"
            style={{ filter: "drop-shadow(0 0 6px oklch(0.85 0.18 200 / 0.9))" }} />
          {points.split(" ").map((p, i) => {
            const [x, y] = p.split(",");
            return <circle key={i} cx={x} cy={y} r="1.5" fill="oklch(0.72 0.30 350)" />;
          })}
        </svg>
      </div>
    </ResultShell>
  );
}

function ResultsDashboard() {
  return (
    <section id="results" className="relative overflow-hidden px-6 py-32">
      <TeamParticles />
      <SectionTitle
        kicker="AI Result Dashboard"
        title="Multimodal Intelligence Output"
        sub="Live cognition scores from the COSMOMIND core — confidence, anomaly, reconstruction, signal, and prediction in one cinematic command surface."
      />
      <div className="relative mx-auto grid max-w-7xl gap-7 lg:grid-cols-6">
        <motion.div {...fadeUp} className="lg:col-span-3"><ConfidenceRing /></motion.div>
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="lg:col-span-3"><AnomalyCard /></motion.div>
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="lg:col-span-2"><ReconstructionCard /></motion.div>
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="lg:col-span-2"><SignalCard /></motion.div>
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.25 }} className="lg:col-span-2"><PredictionCard /></motion.div>
      </div>
    </section>
  );
}
type UploadedFile = {
  id: string;
  name: string;
  size: number;
  type: string;
  url: string;
  kind: "image" | "video" | "audio" | "doc";
  progress: number;
  status: "scanning" | "analyzing" | "done";
  insight?: string;
};

const KIND_INSIGHTS: Record<UploadedFile["kind"], string[]> = {
  image: ["Terrain anomaly detected in sector 7-G", "Cloud formation reconstructed at 98% fidelity", "Surface temperature gradient mapped"],
  video: ["Orbital movement identified · 7.66 km/s", "Frame-level anomaly at 00:42", "Launch trajectory nominal"],
  audio: ["Signal reconstruction complete · 99.2%", "VHF burst pattern classified", "Astronaut comm intent recognized"],
  doc: ["Mission report summarized · 4 key risks", "Telemetry log parsed · 0 critical events", "Research extract: 12 entities tagged"],
};

function detectKind(type: string, name: string): UploadedFile["kind"] {
  if (type.startsWith("image/")) return "image";
  if (type.startsWith("video/")) return "video";
  if (type.startsWith("audio/")) return "audio";
  if (/\.(pdf|txt|md|json|csv)$/i.test(name)) return "doc";
  return "doc";
}

function UploadSlot({
  label, accept, color, icon: Icon,
  files, onFiles, onRemove,
}: {
  label: string; accept: string; color: string; icon: typeof Upload;
  files: UploadedFile[];
  onFiles: (fl: FileList | null) => void;
  onRemove: (id: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [drag, setDrag] = useState(false);
  return (
    <div className={`relative overflow-hidden rounded-2xl glass-panel-glow p-5 transition hover:border-${color}/50`}>
      <div className={`mb-3 flex items-center justify-between text-xs uppercase tracking-widest text-${color}`}>
        <span className="flex items-center gap-2"><Icon className="h-4 w-4" /> {label}</span>
        <span className="text-[10px] text-muted-foreground">{files.length} file{files.length !== 1 ? "s" : ""}</span>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple
        className="hidden"
        onChange={(e) => { onFiles(e.target.files); if (inputRef.current) inputRef.current.value = ""; }}
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
        onDragLeave={() => setDrag(false)}
        onDrop={(e) => { e.preventDefault(); setDrag(false); onFiles(e.dataTransfer.files); }}
        className={`relative grid h-40 w-full place-items-center overflow-hidden rounded-xl border-2 border-dashed bg-${color}/5 transition cursor-pointer ${
          drag ? `border-${color} bg-${color}/15 scale-[1.02]` : `border-${color}/40 hover:border-${color}/70 hover:bg-${color}/10`
        }`}
      >
        <span className={`pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-${color} to-transparent animate-pulse`} />
        <span className={`pointer-events-none absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-${color} to-transparent animate-pulse`} />
        <div className="text-center pointer-events-none">
          <Upload className={`mx-auto mb-2 h-8 w-8 text-${color}`} />
          <div className="font-display text-sm font-bold">Drop or click to upload</div>
          <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{accept.replace(/,/g, " · ")}</div>
        </div>
      </button>

      {files.length > 0 && (
        <div className="mt-4 space-y-3">
          {files.map((f) => (
            <div key={f.id} className={`relative overflow-hidden rounded-xl border border-${color}/30 bg-background/60 p-3`}>
              <div className="flex items-start gap-3">
                <div className={`grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-lg border border-${color}/40 bg-${color}/10`}>
                  {f.kind === "image" ? (
                    <img src={f.url} alt={f.name} className="h-full w-full object-cover" />
                  ) : f.kind === "video" ? (
                    <Video className={`h-6 w-6 text-${color}`} />
                  ) : f.kind === "audio" ? (
                    <AudioLines className={`h-6 w-6 text-${color}`} />
                  ) : (
                    <FileText className={`h-6 w-6 text-${color}`} />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <div className="truncate text-sm font-semibold">{f.name}</div>
                    <button onClick={() => onRemove(f.id)} className="text-muted-foreground hover:text-neon-pink">
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {(f.size / 1024).toFixed(1)} KB
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-[10px] uppercase tracking-widest">
                    {f.status === "done" ? (
                      <><CheckCircle2 className="h-3 w-3 text-neon-cyan" /><span className="text-neon-cyan">Analysis complete</span></>
                    ) : (
                      <><Loader2 className={`h-3 w-3 animate-spin text-${color}`} /><span className={`text-${color}`}>{f.status === "scanning" ? "Scanning…" : "Analyzing multimodal data…"}</span></>
                    )}
                  </div>
                  <div className="mt-2 h-1 overflow-hidden rounded-full bg-secondary">
                    <div className={`h-full bg-gradient-to-r from-${color} to-neon-pink transition-all duration-300`} style={{ width: `${f.progress}%` }} />
                  </div>
                  {f.insight && (
                    <div className={`mt-2 rounded-md border border-${color}/30 bg-${color}/5 px-2 py-1.5 text-xs`}>
                      <span className="text-neon-cyan font-semibold">AI · </span>{f.insight}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Demo() {
  const [files, setFiles] = useState<Record<string, UploadedFile[]>>({
    image: [], video: [], audio: [], doc: [],
  });

  const addFiles = (slot: keyof typeof files, fl: FileList | null) => {
    if (!fl || fl.length === 0) return;
    const newFiles: UploadedFile[] = Array.from(fl).map((file) => {
      const kind = detectKind(file.type, file.name);
      return {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        name: file.name, size: file.size, type: file.type,
        url: URL.createObjectURL(file),
        kind, progress: 0, status: "scanning",
      };
    });
    setFiles((prev) => ({ ...prev, [slot]: [...prev[slot], ...newFiles] }));

    newFiles.forEach((nf) => {
      const tick = setInterval(() => {
        setFiles((prev) => {
          const arr = prev[slot].map((f) => {
            if (f.id !== nf.id) return f;
            const np = Math.min(100, f.progress + 8 + Math.random() * 12);
            const status: UploadedFile["status"] =
              np >= 100 ? "done" : np > 50 ? "analyzing" : "scanning";
            const insight = np >= 100
              ? KIND_INSIGHTS[f.kind][Math.floor(Math.random() * KIND_INSIGHTS[f.kind].length)]
              : f.insight;
            return { ...f, progress: np, status, insight };
          });
          return { ...prev, [slot]: arr };
        });
      }, 220);
      setTimeout(() => clearInterval(tick), 4000);
    });
  };

  const removeFile = (slot: keyof typeof files, id: string) => {
    setFiles((prev) => {
      const f = prev[slot].find((x) => x.id === id);
      if (f) URL.revokeObjectURL(f.url);
      return { ...prev, [slot]: prev[slot].filter((x) => x.id !== id) };
    });
  };

  const slots = [
    { key: "image" as const, label: "Satellite Image Input", accept: "image/*", color: "neon-blue", icon: ImageIcon },
    { key: "video" as const, label: "Orbital Video Feed", accept: "video/*", color: "neon-purple", icon: Video },
    { key: "audio" as const, label: "Space Signal Audio", accept: "audio/*", color: "neon-cyan", icon: AudioLines },
    { key: "doc" as const, label: "Mission Intelligence Reports", accept: ".pdf,.txt,.md,.json,.csv", color: "neon-pink", icon: FileText },
  ];

  return (
    <section id="demo" className="relative px-6 py-32">
      <SectionTitle
        kicker="Multimodal upload center"
        title="Feed the cognition core"
        sub="Drop satellite imagery, orbital video, signal audio, or mission text. The engine scans, analyzes, and returns insights in real time."
      />
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
        {slots.map((s) => (
          <motion.div key={s.key} {...fadeUp}>
            <UploadSlot
              label={s.label}
              accept={s.accept}
              color={s.color}
              icon={s.icon}
              files={files[s.key]}
              onFiles={(fl) => addFiles(s.key, fl)}
              onRemove={(id) => removeFile(s.key, id)}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ---------- Applications ----------
function Applications() {
  const apps = [
    { icon: Cloud, t: "Disaster monitoring", d: "Real-time storm, flood, and wildfire intelligence." },
    { icon: Globe2, t: "Climate analysis", d: "Decadal change models from fused Earth observation." },
    { icon: ShieldAlert, t: "Defense surveillance", d: "Sub-meter object tracking with signal correlation." },
    { icon: Satellite, t: "Satellite intelligence", d: "Constellation-wide telemetry reasoning." },
    { icon: Rocket, t: "Mission planning", d: "Generative trajectory and risk simulation." },
    { icon: Eye, t: "Earth observation", d: "Continuous geospatial scene understanding." },
    { icon: Activity, t: "Weather forecasting", d: "Hyperlocal predictive modeling." },
    { icon: Radio, t: "Astronaut comms", d: "Voice clarification, intent recognition, anomaly flags." },
    { icon: Zap, t: "Anomaly prediction", d: "Cross-modal early-warning systems." },
  ];
  return (
    <section className="relative px-6 py-32">
      <SectionTitle kicker="Real-world impact" title="Where COSMOMIND ships" />
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
        {apps.map((a, i) => (
          <motion.div key={a.t} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.05 }}>
            <GlowCard className="h-full">
              <div className="mb-3 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-neon-purple/10 border border-neon-purple/30">
                  <a.icon className="h-5 w-5 text-neon-purple" />
                </div>
                <h3 className="font-bold">{a.t}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{a.d}</p>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ---------- Tech & Future ----------
function TechFuture() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
        <motion.div {...fadeUp}>
          <GlowCard className="h-full">
            <div className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-neon-cyan">
              <Cpu className="h-3 w-3" /> Technology stack
            </div>
            <h3 className="mb-5 text-2xl font-bold text-gradient-cosmic">Built on the edge</h3>
            <div className="grid grid-cols-2 gap-3">
              {["React", "Tailwind CSS", "Framer Motion", "Three.js", "Python", "Gemini API", "OpenAI GPT", "Realtime WS"].map((t) => (
                <div key={t} className="rounded-lg border border-neon-blue/20 bg-neon-blue/5 px-3 py-2 text-sm">{t}</div>
              ))}
            </div>
          </GlowCard>
        </motion.div>
        <motion.div {...fadeUp}>
          <GlowCard className="h-full">
            <div className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-neon-pink">
              <Sparkles className="h-3 w-3" /> Future scope
            </div>
            <h3 className="mb-5 text-2xl font-bold text-gradient-aurora">What comes next</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                "On-orbit inference via edge satellites",
                "Federated learning across mission control centers",
                "Generative 3D terrain reconstruction at planet scale",
                "Astronaut wearable assistant integration",
                "Space-traffic management copilot",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <ArrowRight className="mt-0.5 h-4 w-4 text-neon-pink" /> {f}
                </li>
              ))}
            </ul>
          </GlowCard>
        </motion.div>
      </div>
    </section>
  );
}

// ---------- AI Assistant ----------
function Assistant() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([
    { who: "ai", text: "COSMOMIND online. I see your latest satellite frame — ready to analyze." },
  ]);
  const [input, setInput] = useState("");
  const send = () => {
    if (!input.trim()) return;
    const u = input;
    setMsgs((m) => [...m, { who: "user", text: u }]);
    setInput("");
    setTimeout(() => {
      setMsgs((m) => [
        ...m,
        { who: "ai", text: "Cross-referencing image, audio, and mission text… anomaly probability 87%. Generating reconstruction." },
      ]);
    }, 700);
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-neon-purple to-neon-pink text-background shadow-[0_0_30px_oklch(0.65_0.28_300/0.7)] transition hover:scale-110 animate-pulse-glow">
        <Bot className="h-6 w-6" />
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }}
          className="fixed bottom-24 right-6 z-40 flex h-[460px] w-[360px] flex-col rounded-2xl glass-panel-glow">
          <div className="flex items-center justify-between border-b border-border p-4">
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-neon-purple/20 border border-neon-purple/40">
                <Brain className="h-4 w-4 text-neon-purple" />
              </div>
              <div>
                <div className="font-display text-sm font-bold text-glow-blue">COSMO ASSISTANT</div>
                <div className="text-[10px] uppercase tracking-widest text-neon-cyan">Online</div>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.who === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] rounded-xl px-3 py-2 text-sm ${
                  m.who === "user"
                    ? "bg-neon-blue/20 border border-neon-blue/40 text-foreground"
                    : "glass-panel text-foreground"
                }`}>{m.text}</div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 border-t border-border p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Analyze this satellite image…"
              className="flex-1 rounded-lg border border-border bg-background/60 px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-neon-cyan"
            />
            <button onClick={send} className="grid h-9 w-9 place-items-center rounded-lg bg-neon-cyan text-background hover:bg-neon-cyan/80">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}

function TeamParticles() {
  const dots = Array.from({ length: 36 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((_, i) => {
        const colors = ["neon-blue", "neon-purple", "neon-cyan", "neon-pink"];
        const c = colors[i % colors.length];
        const left = (i * 37) % 100;
        const delay = (i % 8) * 0.6;
        const dur = 6 + (i % 5);
        return (
          <span
            key={i}
            className={`absolute h-1.5 w-1.5 rounded-full bg-${c}`}
            style={{
              left: `${left}%`,
              bottom: `-10px`,
              boxShadow: `0 0 10px currentColor`,
              animation: `float-y ${dur}s ease-in-out ${delay}s infinite, pulse-glow ${dur}s ease-in-out infinite`,
              opacity: 0.6,
            }}
          />
        );
      })}
    </div>
  );
}

// ---------- Team ----------
type Member = { id: string; name: string; color: string; img?: string };

function TeamCard({ member, onChange, index }: { member: Member; onChange: (m: Member) => void; index: number }) {
  const fileRef = useRef<HTMLInputElement>(null);
  const initials = member.name.split(" ").map((s) => s[0]).filter(Boolean).slice(0, 2).join("");
  const onPick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) onChange({ ...member, img: URL.createObjectURL(f) });
    if (fileRef.current) fileRef.current.value = "";
  };
  return (
    <div className={`group relative overflow-hidden rounded-3xl glass-panel-glow p-8 transition-all duration-500 hover:-translate-y-2 hover:border-${member.color}/70`}
         style={{ boxShadow: `0 0 40px oklch(0.72 0.22 250 / 0.15)` }}>
      {/* animated neon border lines */}
      <span className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-${member.color} to-transparent animate-pulse`} />
      <span className={`pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-${member.color} to-transparent animate-pulse`} />
      <span className={`pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-${member.color} to-transparent`} />
      <span className={`pointer-events-none absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-${member.color} to-transparent`} />
      {/* corner brackets */}
      {["top-2 left-2 border-t-2 border-l-2", "top-2 right-2 border-t-2 border-r-2", "bottom-2 left-2 border-b-2 border-l-2", "bottom-2 right-2 border-b-2 border-r-2"].map((p) => (
        <span key={p} className={`pointer-events-none absolute h-4 w-4 ${p} border-${member.color}/70 transition-opacity opacity-60 group-hover:opacity-100`} />
      ))}
      {/* hologram sweep */}
      <span className={`pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-${member.color}/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full`} />

      <div className="relative text-center">
        <div className={`mb-2 inline-flex items-center gap-2 rounded-full border border-${member.color}/40 bg-${member.color}/10 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-${member.color}`}>
          <Sparkles className="h-3 w-3" /> Crew · 0{index + 1}
        </div>
        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={onPick} />
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className={`group/avatar relative mx-auto mt-3 mb-5 grid h-28 w-28 place-items-center overflow-hidden rounded-full border-2 border-${member.color}/60 animate-float-y transition hover:scale-105`}
          style={{ boxShadow: `0 0 35px oklch(0.72 0.22 250 / 0.4)` }}
          title="Click to change photo"
        >
          <span className={`absolute inset-0 rounded-full bg-gradient-to-br from-${member.color}/40 via-background to-${member.color}/20`} />
          <span className={`absolute inset-0 rounded-full border border-${member.color}/30 animate-orbit`} />
          {member.img ? (
            <img src={member.img} alt={member.name} className="relative h-full w-full object-cover" />
          ) : (
            <span className={`relative font-display text-3xl font-bold text-${member.color} text-glow-cyan`}>{initials}</span>
          )}
          <span className="absolute inset-0 grid place-items-center bg-background/70 opacity-0 transition group-hover/avatar:opacity-100">
            <Camera className={`h-5 w-5 text-${member.color}`} />
          </span>
        </button>

        <div
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => onChange({ ...member, name: e.currentTarget.textContent || member.name })}
          className="font-display text-xl font-bold outline-none focus:text-neon-cyan"
        >
          {member.name}
        </div>
        <div className={`mt-2 text-[10px] uppercase tracking-[0.3em] text-${member.color}`}>
          ISE · COSMOMIND AI
        </div>

        <div className={`mx-auto mt-5 h-px w-2/3 bg-gradient-to-r from-transparent via-${member.color}/60 to-transparent`} />

        <div className="mt-4 flex items-center justify-center gap-3 text-[10px] uppercase tracking-widest text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className={`h-1.5 w-1.5 rounded-full bg-${member.color} animate-pulse`} /> Online
          </span>
          <span>·</span>
          <span>Clearance A1</span>
        </div>
      </div>
    </div>
  );
}

function Team() {
  const [team, setTeam] = useState<Member[]>([
    { id: "1", name: "Keerthana CS", color: "neon-cyan" },
    { id: "2", name: "Sumaiya Khanam", color: "neon-purple" },
  ]);
  const update = (m: Member) => setTeam((t) => t.map((x) => (x.id === m.id ? m : x)));
  return (
    <section id="team" className="relative overflow-hidden px-6 py-32">
      <TeamParticles />
      <SectionTitle
        kicker="The crew"
        title="Meet the COSMOMIND AI Team"
        sub="Department of Information Science and Engineering (ISE) — engineering the future of intelligent space analytics."
      />
      <div className="relative mx-auto mb-10 max-w-2xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-neon-purple/40 bg-neon-purple/10 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-neon-purple">
          <Cpu className="h-3 w-3" /> Department of Information Science and Engineering (ISE)
        </div>
      </div>
      <div className="relative mx-auto grid max-w-4xl gap-8 sm:grid-cols-2">
        {team.map((m, i) => (
          <motion.div key={m.id} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }}>
            <TeamCard member={m} onChange={update} index={i} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple">
            <Brain className="h-4 w-4 text-background" />
          </div>
          <span className="font-display text-sm tracking-widest text-glow-cyan">COSMOMIND AI</span>
        </div>
        <div className="text-xs text-muted-foreground">
          © 2026 COSMOMIND · Multimodal intelligence for space data
        </div>
        <div className="flex gap-4 text-xs uppercase tracking-widest text-muted-foreground">
          <a href="#" className="hover:text-neon-cyan">Docs</a>
          <a href="#" className="hover:text-neon-cyan">API</a>
          <a href="#" className="hover:text-neon-cyan">Contact</a>
        </div>
      </div>
    </footer>
  );
}

// ---------- Page ----------
export default function CosmomindPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <StarField />
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[60vh] bg-gradient-radial from-neon-purple/10 via-transparent to-transparent blur-3xl" />
      <Nav />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Engine />
        <Dashboard />
        <Demo />
        <Applications />
        <TechFuture />
        <Team />
      </main>
      <Footer />
      <Assistant />
    </div>
  );
}
