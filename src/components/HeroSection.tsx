import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowDown, FileText, Mail, Terminal, ChevronRight } from "lucide-react";

const roles = [
  "Backend Engineer",
  "Cloud Architect",
  "Distributed Systems Builder",
  "AWS Specialist",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Layered background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-hero" />

        {/* Large soft orbs */}
        <div
          className="absolute top-1/4 -left-24 w-[500px] h-[500px] rounded-full blur-[120px] opacity-30 animate-float-slow"
          style={{ background: "hsl(215 50% 62% / 0.12)" }}
        />
        <div
          className="absolute bottom-1/4 -right-24 w-[450px] h-[450px] rounded-full blur-[100px] opacity-25 animate-float-slow"
          style={{ background: "hsl(215 55% 72% / 0.10)", animationDelay: "3s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] opacity-10"
          style={{ background: "hsl(215 50% 62% / 0.08)" }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating particles */}
        {[
          { top: "15%", left: "10%", dur: "7s", delay: "0s" },
          { top: "75%", left: "8%", dur: "9s", delay: "1.5s" },
          { top: "40%", left: "85%", dur: "6s", delay: "0.8s" },
          { top: "20%", left: "70%", dur: "8s", delay: "2s" },
          { top: "80%", left: "75%", dur: "10s", delay: "0.3s" },
          { top: "55%", left: "20%", dur: "7.5s", delay: "1.2s" },
        ].map((p, i) => (
          <div
            key={i}
            className="particle"
            style={{
              top: p.top,
              left: p.left,
              "--dur": p.dur,
              "--delay": p.delay,
            } as React.CSSProperties}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-secondary/60 border border-primary/20 mb-8 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
              </span>
              <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
                Open to Opportunities
              </span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-4"
          >
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-gradient">Vinayak Siddhu</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Terminal size={18} className="text-primary opacity-60" />
            <p className="font-mono text-lg sm:text-xl lg:text-2xl text-primary font-medium tracking-tight">
              {displayed}
              <span className="cursor-blink border-r-2 border-primary ml-0.5 inline-block h-[1.2em] align-middle" />
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            I design and build reliable, production-grade distributed systems and cloud-native
            applications. <span className="text-foreground/70 font-medium">MS CS @ UT Arlington</span> · Building what scales.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-primary/40 bg-primary/8 text-primary font-semibold text-sm hover:bg-primary/12 hover:border-primary/55 transition-all duration-300"
            >
              View Projects
              <ChevronRight size={16} />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-border/60 bg-card/50 text-foreground font-semibold text-sm hover:bg-secondary hover:border-border transition-all duration-300"
            >
              <FileText size={16} className="text-primary" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-border/60 bg-card/50 text-foreground font-semibold text-sm hover:bg-secondary hover:border-border transition-all duration-300"
            >
              <Mail size={16} className="text-primary" />
              Contact Me
            </a>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-8 mt-16 text-sm text-muted-foreground"
          >
            {[
              { value: "3+", label: "Years Coding" },
              { value: "10+", label: "Technologies" },
              { value: "2", label: "Major Projects" },
              { value: "AWS", label: "Certified Focus" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className="font-display text-2xl font-bold text-gradient">{stat.value}</span>
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-[10px] text-muted-foreground/50 uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-9 rounded-full border-2 border-muted-foreground/25 flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
