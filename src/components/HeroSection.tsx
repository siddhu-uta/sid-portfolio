import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";

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

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "var(--bg-base)" }}>
      {/* Subtle dot grid */}
      <div className="absolute inset-0 dot-grid opacity-100 pointer-events-none" />

      {/* Blue glow top-right */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full blur-[140px] opacity-10 pointer-events-none animate-float-slow"
        style={{ background: "radial-gradient(circle, #58a6ff 0%, #bc8cff 100%)" }}
      />

      <div className="container mx-auto px-6 relative z-10 pt-28 pb-16">
        <div className="max-w-2xl">

          {/* `</>` role line */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 mb-5"
          >
            <span className="font-mono text-sm font-medium" style={{ color: "var(--blue-accent)" }}>
              {"</>"}
            </span>
            <span className="font-mono text-sm" style={{ color: "var(--blue-accent)" }}>
              {displayed}
              <span
                className="cursor-blink border-r-2 ml-0.5 inline-block h-[1em] align-middle"
                style={{ borderColor: "var(--blue-accent)" }}
              />
            </span>
          </motion.div>

          {/* Large heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="font-display font-bold mb-5"
            style={{
              fontSize: "clamp(3.4rem, 7vw, 5.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.035em",
              color: "var(--text-primary)",
            }}
          >
            Hello, I'm{" "}
            <span className="text-gradient">Vinayak.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.14 }}
            className="text-lg leading-relaxed mb-7 max-w-lg"
            style={{ color: "var(--text-secondary)", letterSpacing: "-0.005em" }}
          >
            Building scalable distributed systems and cloud-native applications.
            MS CS student at UT Arlington passionate about backend performance,
            microservices architecture, and AI/ML infrastructure.
          </motion.p>

          {/* Social icon links */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex items-center gap-3 mb-7"
          >
            {[
              { href: "https://github.com/siddhu-uta", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/vinayak-siddhu-bandaru/", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:vinayaksiddhu.devs@gmail.com", icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg transition-all duration-200"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "var(--bg-surface)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                }}
              >
                <Icon size={22} />
              </a>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.26 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold transition-all duration-200 hover:opacity-90"
              style={{
                background: "var(--blue-accent)",
                color: "#0d1117",
                borderRadius: "8px",
              }}
            >
              <Download size={15} />
              Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold border transition-all duration-200"
              style={{
                borderRadius: "8px",
                borderColor: "var(--border-subtle)",
                color: "var(--text-primary)",
                background: "var(--bg-card)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--text-muted)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border-subtle)";
              }}
            >
              View Work
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <ArrowDown size={16} style={{ color: "var(--text-muted)" }} className="animate-bounce" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
