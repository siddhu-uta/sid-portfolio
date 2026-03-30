import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
    longDescription: (
      <div className="space-y-4 text-sm text-muted-foreground mt-4 text-left">
        <p>
          TicketOps is a production-ready, enterprise-grade ticket management system designed to showcase comprehensive DevSecOps practices and cloud-native architecture. It operates as a modern full-stack application, featuring a backend built with Java 17 and Spring Boot 3 running on PostgreSQL, and a frontend developed using React 18, TypeScript, Vite, and Tailwind CSS.
        </p>
        <p>
          Beyond just creating and managing tickets, the project heavily emphasizes infrastructure and continuous delivery, incorporating Docker for containerization, Kubernetes and Docker Swarm for orchestration, Terraform and Ansible for Infrastructure as Code (IaC), and multi-stage Azure DevOps pipelines for automated CI/CD and deployment.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <div>
            <h4 className="font-semibold text-foreground mb-1">Backend</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Language:</strong> Java 17</li>
              <li><strong>Framework:</strong> Spring Boot (v3.1.4)</li>
              <li><strong>Data Access:</strong> Spring Data JPA / Hibernate</li>
              <li><strong>Logging:</strong> Logback with Logstash</li>
              <li><strong>Migrations:</strong> Flyway</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-1">Frontend</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Core:</strong> React 18, TypeScript, Vite, Tailwind CSS</li>
              <li><strong>UI Components:</strong> shadcn/ui, Lucide React</li>
              <li><strong>Forms & State:</strong> React Hook Form, Zod, React Query</li>
              <li><strong>Testing:</strong> Vitest, React Testing Library</li>
            </ul>
          </div>
          <div className="sm:col-span-2">
            <h4 className="font-semibold text-foreground mb-1">Infrastructure & DevSecOps</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Database:</strong> PostgreSQL</li>
              <li><strong>Containerization:</strong> Docker (multi-stage builds), Docker Compose</li>
              <li><strong>Orchestration:</strong> Kubernetes (Deployments, Services, Ingress, HPA, PDB), Docker Swarm</li>
              <li><strong>IaC:</strong> Terraform (AWS EKS), Ansible</li>
              <li><strong>CI/CD:</strong> Azure DevOps (Multi-stage YAML pipelines)</li>
              <li><strong>Cloud Services:</strong> AWS, Azure Container Instances</li>
            </ul>
          </div>
        </div>
      </div>
    ),
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
    longDescription: (
      <div className="space-y-6 text-sm text-muted-foreground mt-4 text-left">
        <p>
          StreamVault is a real-time, cloud-native event ingestion and analytics platform designed to capture, process, and visualize telemetry data from client applications. Currently, it acts as the centralized tracking backend for "TicketFlow," a mock ticket management system.
        </p>

        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8 mt-2">
          {/* Cloud & Infrastructure */}
          <div>
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-1.5">
              <span>☁️</span> Cloud & Infrastructure (AWS Serverless)
            </h4>
            <ul className="list-disc pl-4 space-y-1.5 text-xs text-muted-foreground/90">
              <li><strong>API Gateway:</strong> Handles inbound REST API requests and routing.</li>
              <li><strong>Amazon Cognito:</strong> Manages user identity, OAuth2, and Auth flows.</li>
              <li><strong>Amazon SQS:</strong> Message broker buffering high-throughput events.</li>
              <li><strong>AWS Lambda:</strong> Serverless processing (Ingest & Processor).</li>
              <li><strong>Amazon DynamoDB:</strong> NoSQL database for persistent event storage.</li>
              <li><strong>AWS SAM & LocalStack:</strong> IaC deployment and offline simulation.</li>
            </ul>
          </div>
          
          {/* Backend Pipelines & Apps */}
          <div>
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-1.5">
              <span>⚙️</span> Backend Core & Mock Service
            </h4>
            <ul className="list-disc pl-4 space-y-1.5 text-xs text-muted-foreground/90 mb-4">
              <li><strong>Python 3.x:</strong> Primary language for Lambda functions.</li>
              <li><strong>Node.js & Express:</strong> Simulated client application backend.</li>
              <li><strong>Security & Sessions:</strong> Bcrypt.js, Express-Session.</li>
              <li><strong>Integrations:</strong> Node-Fetch for tracking HTTP calls.</li>
            </ul>
          </div>

          {/* Frontend */}
          <div>
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-1.5">
              <span>💻</span> Frontend (Observer Dashboard)
            </h4>
            <ul className="list-disc pl-4 space-y-1.5 text-xs text-muted-foreground/90">
              <li><strong>React 18 & Vite:</strong> Ultra-fast component-based UI framework.</li>
              <li><strong>TypeScript:</strong> Strongly-typed frontend logic.</li>
              <li><strong>Styling:</strong> CSS3 & HTML5 for structure and layout.</li>
              <li><strong>Dashboard:</strong> Real-time visualizations and activity feeds.</li>
            </ul>
          </div>
          
          {/* Testing & QA */}
          <div>
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-1.5">
              <span>🧪</span> Testing, Tooling & QA
            </h4>
            <ul className="list-disc pl-4 space-y-1.5 text-xs text-muted-foreground/90">
              <li><strong>Locust:</strong> Python distributed load-testing framework.</li>
              <li><strong>Jest & PyTest:</strong> JavaScript and Python Backend testing frameworks.</li>
              <li><strong>Package Management:</strong> NPM & Pip.</li>
              <li><strong>Version Control:</strong> Git with structured branching strategies.</li>
            </ul>
          </div>
        </div>
      </div>
    )
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
    longDescription: (
      <div className="space-y-4 text-sm text-muted-foreground mt-4 text-left">
        <p>
          A modern, animated developer portfolio built with React, TypeScript, Framer Motion, and Tailwind CSS. Features dark/light theming, smooth scroll animations, typewriter effects, glassmorphism design, and full responsiveness.
        </p>
      </div>
    )
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
              <Dialog key={project.title}>
                <DialogTrigger asChild>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.15 }}
                    className="group relative p-6 rounded-2xl glass border border-border/60 hover:border-primary/25 hover:bg-secondary/25 transition-all duration-300 flex flex-col cursor-pointer"
                  >
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2.5">
                        <span className="font-mono text-[10px] font-medium text-muted-foreground/35 tracking-[0.2em] select-none">{project.number}</span>
                        <div className="h-px flex-1 bg-border/25" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
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
                    <div className="flex items-center gap-2 mt-auto pt-2 border-t border-border/30" onClick={(e) => e.stopPropagation()}>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg border border-border/60 bg-secondary/30 text-foreground hover:bg-secondary/60 hover:border-border transition-all duration-200"
                      >
                        <Github size={13} />
                        GitHub
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg border border-primary/30 bg-primary/8 text-primary hover:bg-primary/12 hover:border-primary/40 transition-all duration-200"
                        >
                          <ArrowUpRight size={13} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </motion.div>
                </DialogTrigger>
                
                <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto w-[90vw] glass border-border/60 bg-background/95 backdrop-blur-xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-display font-bold text-foreground">
                      {project.title}
                    </DialogTitle>
                    <DialogDescription className="text-primary font-medium">
                      {project.summary}
                    </DialogDescription>
                  </DialogHeader>
                  
                  {project.longDescription}

                  <div className="flex items-center gap-3 mt-6 pt-4 border-t border-border/40">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-border/60 bg-card/50 text-foreground font-semibold text-sm hover:bg-secondary hover:border-border transition-all duration-200"
                    >
                      <Github size={16} />
                      View Source
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-primary/40 bg-primary/10 text-primary font-semibold text-sm hover:bg-primary/15 hover:border-primary/60 transition-all duration-200"
                      >
                        <ArrowUpRight size={16} />
                        Live Deploy
                      </a>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
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
