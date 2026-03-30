import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "TicketOps",
    summary: "Production-grade Ticketing REST API",
    description:
      "A robust, fully containerized ticketing system built with clean architecture principles. Features schema migrations with Flyway, comprehensive test coverage, and automated infrastructure provisioning with Terraform and Ansible on AWS EKS.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Docker", "JPA", "Flyway", "Terraform", "Ansible", "AWS EKS", "Azure DevOps"],
    github: "#",
    demo: null,
    tags: ["Clean Architecture", "Full CI/CD"],
  },
  {
    number: "02",
    title: "StreamVault",
    summary: "Serverless AWS Event Ingestion Pipeline",
    description:
      "A high-throughput, serverless event ingestion pipeline on AWS. Implements JWT authentication via Cognito, dead-letter queues for fault tolerance, and full observability with CloudWatch. Infrastructure defined as code using SAM with CI/CD through GitHub Actions.",
    tech: ["AWS Lambda", "SQS", "DynamoDB", "S3", "Cognito", "SAM", "JWT", "GitHub Actions", "CloudWatch"],
    github: "#",
    demo: null,
    tags: ["High-Throughput", "Fault Tolerant"],
  },
  {
    number: "03",
    title: "CloudWeaver Portfolio",
    summary: "This Portfolio Site",
    description:
      "A modern, animated developer portfolio built with React, TypeScript, Framer Motion, and Tailwind CSS. Features dark/light theming, smooth scroll animations, typewriter effects, glassmorphism design, and full responsiveness.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    github: "#",
    demo: "#",
    tags: ["Animated", "Dark Mode"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-secondary/15 pointer-events-none" />
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[120px] opacity-8 pointer-events-none"
        style={{ background: "hsl(215 50% 62% / 0.07)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mb-12" />

          <div className="grid lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.15 }}
                className="group relative p-6 rounded-2xl glass border border-border/60 hover:border-primary/25 hover:bg-secondary/25 transition-all duration-300 flex flex-col"
              >
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="font-mono text-[10px] font-medium text-muted-foreground/35 tracking-[0.2em] select-none">{project.number}</span>
                    <div className="h-px flex-1 bg-border/25" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-primary text-xs font-semibold uppercase tracking-wide">{project.summary}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] text-muted-foreground bg-secondary/60 border border-border/50 px-2 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-secondary/70 text-muted-foreground border border-border/50 hover:border-primary/30 hover:text-primary transition-colors duration-150"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 mt-auto">
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg border border-border/60 bg-secondary/30 text-foreground hover:bg-secondary/60 hover:border-border transition-all duration-200"
                  >
                    <Github size={13} />
                    GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg border border-primary/30 bg-primary/8 text-primary hover:bg-primary/12 hover:border-primary/40 transition-all duration-200"
                    >
                      <ArrowUpRight size={13} />
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="text-center mt-10"
          >
            <p className="text-sm text-muted-foreground">
              More projects on{" "}
              <a href="#" className="text-primary font-medium hover:underline underline-offset-4">
                GitHub →
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
