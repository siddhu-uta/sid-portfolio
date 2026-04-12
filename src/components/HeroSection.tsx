import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowDown, FileText, Mail, Terminal, ChevronRight, Github, Linkedin } from "lucide-react";

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg"
    >
      {/* Layered background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-hero" />

        {/* Dot grid — replaces crosshatch */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: `radial-gradient(hsl(var(--foreground) / 0.35) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        {/* Noise grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "256px 256px",
          }}
        />

        {/* Primary blue glow — upper left */}
        <div
          className="absolute -top-20 -left-20 w-[420px] h-[420px] rounded-full blur-[140px] opacity-20 animate-float-slow"
          style={{ background: "hsl(215 50% 62% / 0.18)" }}
        />

        {/* Warm amber accent glow — lower right, for contrast */}
        <div
          className="absolute bottom-10 -right-16 w-[340px] h-[340px] rounded-full blur-[120px] opacity-20 animate-float-slow"
          style={{ background: "hsl(35 95% 60% / 0.14)", animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Social Links Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center mb-8"
          >
            <div className="inline-flex items-center gap-5 px-6 py-2.5 rounded-full bg-secondary/60 border border-primary/20 backdrop-blur-sm">
              <a
                href="https://github.com/siddhu-uta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <div className="w-px h-4 bg-border/60"></div>
              <a
                href="https://www.linkedin.com/in/vinayak-siddhu-bandaru/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <div className="w-px h-4 bg-border/60"></div>
              <a
                href="mailto:vinayaksiddhu.devs@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
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
            {/* Primary CTA — most visually dominant */}
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all duration-300 shadow-lg"
              style={{ boxShadow: "var(--glow-primary)" }}
            >
              View Projects
              <ChevronRight size={16} />
            </a>
            {/* Secondary CTA — outlined */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-border/60 bg-card/50 text-foreground font-semibold text-sm hover:bg-secondary hover:border-border transition-all duration-300"
            >
              <FileText size={16} className="text-primary" />
              Resume
            </a>
            {/* Tertiary — text link style */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-3.5 text-muted-foreground font-medium text-sm hover:text-foreground transition-colors duration-200"
            >
              <Mail size={15} />
              Contact Me
            </a>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-10 mt-16 text-sm text-muted-foreground"
          >
            {[
              { value: "3+", label: "Years of Experience" },
              { value: "15+", label: "Technologies Used" },
              { value: "2", label: "Production Projects" },
              { value: "MS", label: "CS @ UT Arlington" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5">
                <span className="font-display text-2xl font-bold text-gradient">{stat.value}</span>
                <span className="text-[11px] uppercase tracking-widest text-muted-foreground/60 font-medium">{stat.label}</span>
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
