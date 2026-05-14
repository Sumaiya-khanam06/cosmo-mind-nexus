import { motion } from "framer-motion";
import {
  Satellite, Brain, Radio, FileText, Image as ImageIcon, Video, AudioLines,
  Activity, Zap, Globe2, ShieldAlert, Sparkles, Upload, ArrowRight,
  Cpu, Network, Eye, Waves, Cloud, Rocket, Target, Bot, Send,
} from "lucide-react";
import { StarField } from "@/components/StarField";
import { CosmicEarth } from "@/components/CosmicEarth";
import { useEffect, useState } from "react";

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

// ---------- Upload / Demo ----------
function Demo() {
  const [stage, setStage] = useState(0);
  const stages = ["Upload", "Fuse", "Reason", "Output"];
  return (
    <section id="demo" className="relative px-6 py-32">
      <SectionTitle
        kicker="Prototype flow"
        title="Watch it think"
        sub="Drop multimodal inputs, watch the engine reason in real time, receive intelligence."
      />
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl glass-panel-glow p-6">
            <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-widest text-neon-cyan">
              <Upload className="h-4 w-4" /> Multimodal Upload
            </div>
            <div className="relative grid h-64 place-items-center rounded-xl border-2 border-dashed border-neon-blue/40 bg-neon-blue/5 transition hover:border-neon-cyan hover:bg-neon-cyan/5">
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-pulse" />
              <div className="text-center">
                <Upload className="mx-auto mb-3 h-10 w-10 text-neon-cyan" />
                <div className="font-display text-lg font-bold">Drop files here</div>
                <div className="mt-1 text-xs text-muted-foreground">Image · Video · Audio · PDF / Text</div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {[
                { i: ImageIcon, l: "sat_47.tif", c: "neon-blue" },
                { i: Video, l: "launch.mp4", c: "neon-purple" },
                { i: AudioLines, l: "comm.wav", c: "neon-cyan" },
                { i: FileText, l: "brief.pdf", c: "neon-pink" },
              ].map((f) => (
                <div key={f.l} className={`rounded-lg border border-${f.c}/30 bg-${f.c}/5 p-3 text-center`}>
                  <f.i className={`mx-auto mb-1 h-4 w-4 text-${f.c}`} />
                  <div className="truncate text-[10px] text-muted-foreground">{f.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl glass-panel-glow p-6">
            <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-widest text-neon-purple">
              <span className="flex items-center gap-2"><Network className="h-4 w-4" /> Pipeline</span>
              <button onClick={() => setStage((s) => (s + 1) % stages.length)} className="rounded-md border border-neon-purple/40 px-2 py-1 text-[10px] hover:bg-neon-purple/10">
                Step
              </button>
            </div>
            <ol className="space-y-3">
              {stages.map((s, i) => (
                <li key={s} className={`flex items-center gap-3 rounded-xl border p-3 transition ${
                  i <= stage ? "border-neon-cyan/40 bg-neon-cyan/5" : "border-border bg-background/30 opacity-50"
                }`}>
                  <div className={`grid h-7 w-7 place-items-center rounded-full font-bold ${
                    i <= stage ? "bg-neon-cyan text-background" : "bg-secondary text-muted-foreground"
                  }`}>{i + 1}</div>
                  <span className="text-sm font-semibold">{s}</span>
                  {i === stage && <span className="ml-auto text-[10px] uppercase tracking-widest text-neon-cyan">Active</span>}
                </li>
              ))}
            </ol>

            <div className="mt-5 rounded-xl border border-neon-pink/30 bg-gradient-to-br from-neon-pink/10 to-neon-purple/10 p-4">
              <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-widest text-neon-pink">
                <Sparkles className="h-3 w-3" /> Generated insight
              </div>
              <p className="text-sm leading-relaxed">
                Detected a <span className="text-neon-pink font-semibold">cyclonic anomaly</span> over the Bay of Bengal,
                correlated with an unscheduled <span className="text-neon-cyan font-semibold">VHF burst</span> from
                ISS comm. Mission report flags consistent with predicted weather front. Recommend
                <span className="text-neon-purple font-semibold"> Tier-2 alert</span>.
              </p>
            </div>
          </div>
        </div>
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

// ---------- Team & Footer ----------
function Team() {
  const team = [
    { n: "Dr. Anya Reyes", r: "Lead AI Architect", c: "neon-blue" },
    { n: "Kenji Okafor", r: "Aerospace Engineer", c: "neon-purple" },
    { n: "Mira Castellanos", r: "Data Fusion Lead", c: "neon-cyan" },
    { n: "Levi Ström", r: "UX & Visualization", c: "neon-pink" },
  ];
  return (
    <section id="team" className="relative px-6 py-32">
      <SectionTitle kicker="The crew" title="Built by mission engineers" />
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((t, i) => (
          <motion.div key={t.n} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}>
            <GlowCard className="text-center">
              <div className={`mx-auto mb-4 grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-${t.c}/30 to-background border-2 border-${t.c}/40 animate-float-y`}>
                <span className={`font-display text-2xl font-bold text-${t.c}`}>{t.n.split(" ").map((s) => s[0]).join("")}</span>
              </div>
              <div className="font-bold">{t.n}</div>
              <div className={`mt-1 text-xs uppercase tracking-widest text-${t.c}`}>{t.r}</div>
            </GlowCard>
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
