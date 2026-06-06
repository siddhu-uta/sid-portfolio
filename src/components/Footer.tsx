import { Github, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="py-8" style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--bg-base)" }}>
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          © {new Date().getFullYear()} Vinayak Siddhu Bandaru. Built with vanilla web tech.
        </p>
        <div className="flex items-center gap-3">
          {[
            { href: "https://github.com/siddhu-uta", icon: Github },
            { href: "https://www.linkedin.com/in/vinayak-siddhu-bandaru/", icon: Linkedin },
          ].map(({ href, icon: Icon }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg transition-colors"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)"}
              onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)"}
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
