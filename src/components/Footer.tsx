import { Github, Linkedin, Code2, Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-10 border-t border-border/40 relative overflow-hidden">
    {/* Full-width gradient divider at top */}
    <div className="absolute top-0 left-0 right-0 h-px section-divider" />

    <div className="container mx-auto px-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-lg bg-gradient-primary flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200">
            <Code2 size={14} className="text-primary-foreground" />
          </div>
          <span className="font-display text-base font-bold">
            <span className="text-gradient">Sid</span>
            <span className="text-muted-foreground font-normal">.dev</span>
          </span>
        </a>

        {/* Copyright */}
        <p className="text-sm text-muted-foreground flex items-center gap-1.5">
          Built with{" "}
          <Heart size={13} className="text-primary fill-primary" />
          {" "}by{" "}
          <span className="text-foreground font-medium">Vinayak Siddhu</span>
          {" "}· © {new Date().getFullYear()}
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/siddhu-uta"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-all duration-200"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/vinayak-siddhu-bandaru/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>

      {/* Bottom tagline */}
      <div className="mt-6 pt-5 border-t border-border/30 text-center">
        <p className="text-xs text-muted-foreground/50 font-mono">
          // Designing systems that scale · Building solutions that matter
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
