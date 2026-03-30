import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, MapPin, Zap } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const quickFacts = [
    { icon: GraduationCap, label: "MS Computer Science", detail: "UT Arlington, Texas" },
    { icon: BookOpen, label: "B.Tech CS & IT", detail: "Undergraduate Degree" },
    { icon: MapPin, label: "Based in", detail: "United States" },
    { icon: Zap, label: "Focus Area", detail: "Backend & Cloud Engineering" },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden" ref={ref}>
      {/* Section background orb */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{ background: "hsl(215 50% 62% / 0.08)" }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mb-10" />

          <div className="grid lg:grid-cols-5 gap-10">
            {/* Bio */}
            <div className="lg:col-span-3 space-y-5">
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                I'm a software engineer passionate about{" "}
                <span className="text-foreground font-medium">backend engineering</span>,{" "}
                <span className="text-foreground font-medium">cloud infrastructure</span>, and{" "}
                <span className="text-foreground font-medium">distributed systems</span>. I thrive on
                building scalable, production-grade software that solves real problems — from
                high-throughput APIs to serverless event pipelines.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My experience spans designing microservices architectures, optimizing CI/CD pipelines,
                and working with cutting-edge cloud technologies. I'm particularly interested in system
                design, data pipelines, and applying LLMs to solve engineering challenges.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, I'm exploring new technologies, contributing to open source, and
                continuously leveling up my engineering craft.
              </p>

              {/* Inline highlight chips */}
              <div className="flex flex-wrap gap-2 pt-2">
                {["Problem Solver", "System Thinker", "Cloud Native", "Open Source"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-primary/8 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Facts */}
            <div className="lg:col-span-2 space-y-3">
              {quickFacts.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl glass border border-border/60 hover:border-primary/25 hover:bg-secondary/30 transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/12 transition-colors duration-200">
                    <item.icon size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground leading-tight">{item.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
