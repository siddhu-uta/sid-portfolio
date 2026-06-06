import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "StreamVault",
    subtitle: "Data Pipeline & Analytics Platform",
    tech: ["AWS Lambda", "SQS", "DynamoDB", "S3", "SAM", "GitHub Actions"],
    github: "https://github.com/siddhu-uta",
    demo: null,
    bullets: [
      "Architected a serverless data ingestion pipeline on AWS via API Gateway with Cognito JWT auth and per-route throttling; built a fault-tolerant SQS pipeline with DLQ (max 3 retries) and batch Lambda consumer for high-availability event processing.",
      "Engineered DynamoDB schema (PK: event type, SK: ingested_at, GSI: user_id, TTL: 7d) for sub-millisecond queries; persisted events to S3 as time-partitioned JSON Lines with lifecycle management supporting AI/ML workloads.",
      "Built end-to-end observability via AWS X-Ray distributed tracing, CloudWatch EMF metrics, and SNS alerts; defined full IaC stack with AWS SAM and GitHub Actions CI/CD gating across dev and prod.",
    ],
  },
  {
    title: "TicketOps",
    subtitle: "Ticketing REST API",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Kubernetes", "Terraform"],
    github: "https://github.com/siddhu-uta",
    demo: null,
    bullets: [
      "Built a scalable Spring Boot REST API with Hibernate/JPA and Flyway migrations for ticket creation, pagination, and threaded comments; containerized with Docker using environment-driven config for full environment parity.",
      "Integrated Supabase-managed PostgreSQL with SSL enforcement and connection pooling for cloud-native, zero-provisioning deployments on Linux infrastructure.",
      "Authored Terraform and Ansible automation to orchestrate Docker Swarm and AWS EKS deployments via Azure DevOps CI/CD across multiple environments.",
    ],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-20 sm:py-28" style={{ background: "var(--bg-surface)" }} ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2.5 mb-10"
          >
            <span className="text-sm font-mono" style={{ color: "var(--blue-accent)" }}>{"</>"}</span>
            <h2 className="text-3xl font-bold" style={{ color: "var(--text-primary)", letterSpacing: "-0.025em" }}>
              Selected Projects
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.12 }}
                className="flex flex-col p-5 rounded-xl"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-1.5">
                  <div>
                    <h3 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
                      {project.title}
                    </h3>
                    <p className="text-sm mt-0.5" style={{ color: "var(--blue-accent)" }}>
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0 mt-0.5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors"
                      style={{ color: "var(--text-muted)" }}
                      onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)"}
                      onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)"}
                      aria-label="GitHub"
                    >
                      <Github size={17} />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors"
                        style={{ color: "var(--text-muted)" }}
                        onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)"}
                        onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)"}
                        aria-label="Live demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 mb-5 flex-1">
                  {project.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--text-muted)" }} />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[11px] font-medium rounded-full"
                      style={{
                        background: "rgba(88,166,255,0.1)",
                        color: "var(--blue-accent)",
                        border: "1px solid rgba(88,166,255,0.2)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-sm mt-8 text-center"
            style={{ color: "var(--text-muted)" }}
          >
            More on{" "}
            <a
              href="https://github.com/siddhu-uta"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium transition-colors"
              style={{ color: "var(--blue-accent)" }}
              onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.opacity = "0.75"}
              onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.opacity = "1"}
            >
              github.com/siddhu-uta →
            </a>
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
