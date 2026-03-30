import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Linkedin, Mail, Send, CheckCircle2 } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:vinayaksiddhu@example.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const socials = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/vinayaksiddhu",
      handle: "@vinayaksiddhu",
      color: "hover:border-gray-400/40",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/vinayaksiddhu",
      handle: "linkedin.com/in/vinayaksiddhu",
      color: "hover:border-blue-400/40",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:vinayaksiddhu@example.com",
      handle: "vinayaksiddhu@example.com",
      color: "hover:border-primary/40",
    },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden" ref={ref}>
      {/* BG */}
      <div className="absolute inset-0 bg-secondary/15 pointer-events-none" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 rounded-full blur-[100px] opacity-10 pointer-events-none"
        style={{ background: "hsl(215 50% 62% / 0.08)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-primary rounded-full mb-6 mx-auto" />
            <p className="text-muted-foreground max-w-lg mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just connecting
              with fellow engineers. Drop me a message!
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-10">
            {/* Social links (2/5) */}
            <div className="md:col-span-2 space-y-4">
              <h3 className="font-display text-base font-semibold text-foreground mb-5">Find me online</h3>
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className={`flex items-center gap-4 p-4 rounded-xl glass ${social.color} transition-all duration-300 group hover:shadow-lg`}
                >
                  <div className="p-2.5 rounded-lg bg-gradient-subtle border border-primary/20 group-hover:bg-gradient-primary transition-all duration-300">
                    <social.icon size={18} className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground">{social.label}</p>
                    <p className="text-xs text-muted-foreground truncate">{social.handle}</p>
                  </div>
                </motion.a>
              ))}

              {/* Availability badge */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
                className="p-4 rounded-xl bg-primary/5 border border-primary/20 flex items-center gap-3"
              >
                <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
                </span>
                <p className="text-xs text-muted-foreground">
                  <span className="text-primary font-semibold">Available</span> for full-time roles & internships
                </p>
              </motion.div>
            </div>

            {/* Contact form (3/5) */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:col-span-3 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-xs font-semibold text-foreground mb-1.5 block uppercase tracking-wide">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-card/60 border border-border/60 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs font-semibold text-foreground mb-1.5 block uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-card/60 border border-border/60 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="text-xs font-semibold text-foreground mb-1.5 block uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-card/60 border border-border/60 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all resize-none"
                  placeholder="Let's talk about..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary/10 border border-primary/30 text-primary font-semibold text-sm hover:bg-primary/15 hover:border-primary/45 transition-all duration-200"
              >
                {sent ? (
                  <>
                    <CheckCircle2 size={16} />
                    Sent Successfully!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
