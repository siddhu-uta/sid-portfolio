import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    document.documentElement.classList.remove("light");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const sections = ["experience", "projects", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection("");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("light");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      {/* Pill container */}
      <div
        className="w-full max-w-3xl flex items-center justify-between px-4 py-2.5 transition-all duration-300"
        style={{
          borderRadius: "9999px",
          background: scrolled ? "var(--nav-bg)" : "var(--nav-bg-dim)",
          border: "1px solid var(--border-subtle)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: scrolled ? "var(--shadow-nav)" : "none",
        }}
      >
        {/* Brand — avatar + name */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, #58a6ff, #bc8cff)",
              color: "#0d1117",
            }}
          >
            VS
          </div>
          <span
            className="font-display text-base font-semibold hidden sm:block"
            style={{ color: "var(--text-primary)" }}
          >
            Vinayak Siddhu
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-1.5 text-base font-medium rounded-full transition-all duration-200"
                style={{
                  color: isActive ? "var(--blue-accent)" : "var(--text-secondary)",
                  background: isActive ? "var(--nav-hover-bg)" : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)";
                }}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-full transition-colors"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) => (e.currentTarget as HTMLButtonElement).style.color = "var(--text-primary)"}
            onMouseLeave={(e) => (e.currentTarget as HTMLButtonElement).style.color = "var(--text-muted)"}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex md:hidden p-1.5 rounded-full transition-colors"
            style={{ color: "var(--text-muted)" }}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-[68px] left-4 right-4 mx-auto max-w-3xl rounded-2xl p-3 flex flex-col gap-1"
            style={{
              background: "var(--nav-dropdown)",
              border: "1px solid var(--border-subtle)",
              backdropFilter: "blur(16px)",
              boxShadow: "var(--shadow-nav)",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium transition-colors"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "var(--nav-hover-bg)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
