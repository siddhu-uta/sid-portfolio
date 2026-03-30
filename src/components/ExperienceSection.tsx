import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, TrendingUp, Calendar, Building2, Zap, ShieldCheck, Rocket } from "lucide-react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const metrics = [
    { value: "~15%", label: "API Response Time Reduced", icon: Zap },
    { value: "~25%", label: "Mean Time to Recovery Cut", icon: ShieldCheck },
    { value: "~60%", label: "Manual Deployment Effort Reduced", icon: Rocket },
  ];

  const bullets = [
    "Developed and optimized RESTful microservices using Spring Boot, improving API performance and system reliability.",
    "Built automated CI/CD pipelines reducing manual deployment effort and accelerating release cycles.",
    "Implemented monitoring and observability solutions, significantly reducing incident response times.",
  ];

  return (
    <section id="experience" className="py-24 sm:py-32 relative overflow-hidden" ref={ref}>
      {/* BG accent */}
      <div
        className="absolute top-1/2 -right-32 w-72 h-72 rounded-full blur-[100px] opacity-8 pointer-events-none"
        style={{ background: "hsl(215 50% 62% / 0.06)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mb-12" />

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden lg:block absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/15 to-transparent" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative lg:pl-20"
            >
              {/* Timeline node */}
              <div className="hidden lg:flex absolute -left-0 top-8 w-14 h-14 rounded-full border border-border/60 bg-card items-center justify-center">
                <Building2 size={20} className="text-primary" />
              </div>

              {/* Card */}
              <div className="p-8 rounded-2xl glass border border-border/60 hover:border-primary/25 hover:bg-secondary/20 transition-all duration-300">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-1">
                      Software Engineering Intern
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-primary font-semibold">State Farm</span>
                      <span className="text-muted-foreground/40">·</span>
                      <span className="text-xs text-muted-foreground bg-secondary/70 px-2 py-0.5 rounded-md border border-border/50">
                        Full-time Intern
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground bg-secondary/60 px-3 py-1.5 rounded-lg border border-border/50 self-start whitespace-nowrap">
                    <Calendar size={13} className="text-primary" />
                    Summer 2026
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-3 mb-8">
                  {bullets.map((b, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.35 + i * 0.1 }}
                      className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed"
                    >
                      <span className="w-5 h-5 rounded-full bg-primary/8 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      </span>
                      {b}
                    </motion.li>
                  ))}
                </ul>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {metrics.map((metric, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.55 + i * 0.1 }}
                      className="text-center p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/25 hover:bg-secondary/50 transition-all duration-200"
                    >
                      <div className="flex justify-center mb-2">
                        <div className="w-8 h-8 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center">
                          <metric.icon size={14} className="text-primary" />
                        </div>
                      </div>
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <TrendingUp size={11} className="text-primary opacity-60" />
                        <span className="font-display text-lg sm:text-xl font-bold text-gradient leading-none">
                          {metric.value}
                        </span>
                      </div>
                      <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight">{metric.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* "More coming" hint */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.85 }}
                className="mt-5 flex items-center gap-3 text-xs text-muted-foreground/40 lg:pl-0"
              >
                <div className="hidden lg:block w-px h-8 bg-gradient-to-b from-primary/15 to-transparent ml-7" />
                <span className="ml-0 lg:ml-8 italic">More experience coming as I grow...</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
