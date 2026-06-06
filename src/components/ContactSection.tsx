import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Linkedin, Mail, Send, CheckCircle2 } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:vinayaksiddhu.devs@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const socials = [
    { icon: Github, label: "GitHub", href: "https://github.com/siddhu-uta", handle: "@siddhu-uta" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/vinayak-siddhu-bandaru/", handle: "vinayak-siddhu-bandaru" },
    { icon: Mail, label: "Email", href: "mailto:vinayaksiddhu.devs@gmail.com", handle: "vinayaksiddhu.devs@gmail.com" },
  ];

  const inputStyle = {
    background: "var(--bg-card)",
    border: "1px solid var(--border-subtle)",
    borderRadius: "8px",
    color: "var(--text-primary)",
    padding: "11px 16px",
    fontSize: "15px",
    width: "100%",
    outline: "none",
    transition: "border-color 0.15s",
  } as React.CSSProperties;

  return (
    <section id="contact" className="py-20 sm:py-28" style={{ background: "var(--bg-base)" }} ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2.5 mb-10"
          >
            <span className="text-sm font-mono" style={{ color: "var(--blue-accent)" }}>{"</>"}</span>
            <h2 className="text-3xl font-bold" style={{ color: "var(--text-primary)", letterSpacing: "-0.025em" }}>Contact</h2>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-10">
            {/* Socials */}
            <div className="md:col-span-2 space-y-3">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl transition-all duration-200"
                  style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)" }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--text-muted)"}
                  onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border-subtle)"}
                >
                  <s.icon size={17} style={{ color: "var(--blue-accent)", flexShrink: 0 }} />
                  <div className="min-w-0">
                    <p className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>{s.label}</p>
                    <p className="text-xs truncate mt-0.5" style={{ color: "var(--text-muted)" }}>{s.handle}</p>
                  </div>
                </motion.a>
              ))}

              {/* Availability */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2.5 p-3.5 rounded-xl mt-1"
                style={{ background: "rgba(63,185,80,0.06)", border: "1px solid rgba(63,185,80,0.2)" }}
              >
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: "var(--green)" }} />
                  <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "var(--green)" }} />
                </span>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  <span className="font-semibold" style={{ color: "var(--green)" }}>Available</span> for full-time roles
                </p>
              </motion.div>
            </div>

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="md:col-span-3 space-y-3"
            >
              <div className="grid sm:grid-cols-2 gap-3">
                {(["name", "email"] as const).map((field) => (
                  <div key={field}>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--text-secondary)" }}>
                      {field}
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      required
                      value={form[field]}
                      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      placeholder={field === "email" ? "you@example.com" : "Your name"}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "var(--blue-accent)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border-subtle)")}
                    />
                  </div>
                ))}
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--text-secondary)" }}>
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Let's talk about..."
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--blue-accent)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border-subtle)")}
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-sm font-semibold transition-all hover:opacity-90"
                style={{ background: "var(--blue-accent)", color: "#0d1117", borderRadius: "8px" }}
              >
                {sent ? <><CheckCircle2 size={16} /> Sent!</> : <><Send size={15} /> Send Message</>}
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
