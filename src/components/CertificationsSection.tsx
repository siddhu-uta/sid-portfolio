import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, BadgeCheck, ShoppingBag, Target } from "lucide-react";

const certifications = [
  {
    title: "Walmart Global Tech — Advanced Software Engineering",
    issuer: "Forage Job Simulation",
    year: "2024",
    description:
      "Completed advanced software engineering tasks including system design, data structures optimization, and UML design for scalable software architecture.",
    link: "#",
    icon: ShoppingBag,
    verified: true,
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-secondary/15 pointer-events-none" />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full blur-[100px] opacity-10 pointer-events-none"
        style={{ background: "hsl(215 50% 62% / 0.08)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Certifications &{" "}
            <span className="text-gradient">Training</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mb-12" />

          <div className="space-y-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="group flex items-start gap-5 p-6 rounded-2xl glass border border-border/60 hover:border-primary/25 hover:bg-secondary/20 transition-all duration-300"
              >
                {/* Badge */}
                <div className="flex-shrink-0 w-14 h-14 rounded-xl border border-border/60 bg-secondary/40 group-hover:border-primary/25 group-hover:bg-primary/5 flex items-center justify-center transition-all duration-300">
                  <cert.icon size={22} className="text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="font-display font-bold text-foreground text-base sm:text-lg leading-tight">
                      {cert.title}
                    </h3>
                    {cert.verified && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-primary bg-primary/8 border border-primary/20 px-2 py-0.5 rounded-full flex-shrink-0">
                        <BadgeCheck size={10} />
                        Verified
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <p className="text-sm text-primary font-semibold">{cert.issuer}</p>
                    <span className="text-muted-foreground/40">·</span>
                    <span className="text-xs text-muted-foreground">{cert.year}</span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  <a
                    href={cert.link}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/75 transition-colors"
                  >
                    <ExternalLink size={12} />
                    View Certificate
                  </a>
                </div>
              </motion.div>
            ))}

            {/* In progress / upcoming */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="p-5 rounded-2xl border border-dashed border-primary/20 bg-primary/3 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-xl border border-border/50 bg-secondary/40 flex items-center justify-center flex-shrink-0">
                <Target size={17} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">AWS Solutions Architect — Associate</p>
                <p className="text-xs text-muted-foreground mt-0.5">Preparing for certification · Expected 2025</p>
              </div>
              <span className="ml-auto text-xs text-primary bg-primary/8 border border-primary/20 px-2 py-1 rounded-full flex-shrink-0">
                In Progress
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
