import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const experiences = [
  {
    period: "May 2026 — Present",
    role: "Software Engineering Intern",
    company: "State Farm",
    location: "Remote",
    bullets: [
      "Developing and maintaining Java 17 Spring Boot microservices exposing REST APIs across internal backend platforms; applying Hibernate/JPA query optimization and connection pool tuning to improve throughput and reduce latency under production load.",
      "Deploying and managing services on AWS (EC2, RDS, S3) with CloudWatch alarms and IAM least-privilege policies, strengthening observability and security posture across distributed, high-availability service accounts.",
      "Automated build, test, and release workflows via Jenkins CI/CD and Maven across 3 environments (dev, staging, production), cutting manual deployment overhead by 40% and enabling same-day rollout cycles.",
      "Authored 60+ unit and integration tests with JUnit and Mockito across Agile sprints; participated in code reviews covering 10+ PRs per sprint, improving defect detection rate before production release.",
    ],
  },
  {
    period: "Aug 2025 — Present",
    role: "Student Assistant — Software Engineer",
    company: "University of Texas at Arlington",
    location: "Arlington, TX",
    bullets: [
      "Developed internal web tools and automation scripts eliminating 5+ hours/week of manual report generation for department staff using Python and Shell.",
      "Designed and deployed a course management utility backed by PostgreSQL, tracking enrollment, section capacity, and waitlist status across 8+ graduate CS course sections in real time.",
      "Built and exposed 4 Spring Boot REST endpoints consumed by 3 internal department teams, enforcing JWT-based authentication and request schema validation to ensure secure, consistent data access.",
      "Refactored a legacy Python reporting pipeline processing 1,000+ student records per run, cutting undetected batch failures by 30% by introducing structured logging and early exit error propagation.",
    ],
  },
];

const education = [
  {
    school: "University of Texas at Arlington",
    degree: "Master of Science in Computer Science",
    period: "Aug 2025 – May 2027",
    location: "Arlington, TX",
  },
  {
    school: "Institute of Aeronautical Engineering",
    degree: "B.Tech in Computer Science & IT",
    period: "Aug 2021 – May 2025",
    location: "Hyderabad, India",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-20 sm:py-28" style={{ background: "var(--bg-base)" }} ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          {/* Two-column: Experience (left) + Education (right) */}
          <div className="grid lg:grid-cols-[1fr_280px] gap-10 lg:gap-14 items-start">

            {/* LEFT — Experience timeline */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2.5 mb-8"
              >
                <span className="text-sm font-mono" style={{ color: "var(--blue-accent)" }}>{"</>"}</span>
                <h2 className="text-3xl font-bold" style={{ color: "var(--text-primary)", letterSpacing: "-0.025em" }}>
                  Experience
                </h2>
              </motion.div>

              <div className="relative space-y-8">
                {/* Vertical timeline line */}
                <div
                  className="absolute left-[5px] top-2 bottom-2 w-px"
                  style={{ background: "linear-gradient(to bottom, var(--blue-accent), transparent)" }}
                />

                {experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.45, delay: i * 0.12 }}
                    className="pl-8 relative"
                  >
                    {/* Timeline dot */}
                    <div
                      className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 flex-shrink-0"
                      style={{
                        background: "var(--bg-base)",
                        borderColor: "var(--blue-accent)",
                        boxShadow: "0 0 6px rgba(88,166,255,0.4)",
                      }}
                    />

                    {/* Period */}
                    <p className="text-xs font-mono font-medium uppercase tracking-widest mb-1.5" style={{ color: "var(--blue-accent)" }}>
                      {exp.period}
                    </p>

                    {/* Role + Company */}
                    <h3 className="text-lg font-bold mb-0.5" style={{ color: "var(--text-primary)" }}>
                      {exp.role}
                    </h3>
                    <p className="text-base mb-4" style={{ color: "var(--text-secondary)" }}>
                      {exp.company}
                      <span style={{ color: "var(--text-muted)" }}> · {exp.location}</span>
                    </p>

                    {/* Bullets */}
                    <ul className="space-y-2">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                          <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--text-muted)" }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT — Education card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:sticky lg:top-24"
            >
              <div
                className="p-5 rounded-xl"
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <GraduationCap size={16} style={{ color: "var(--blue-accent)" }} />
                  <h3 className="text-base font-bold" style={{ color: "var(--text-primary)" }}>Education</h3>
                </div>

                <div className="space-y-5">
                  {education.map((edu, i) => (
                    <div key={i} className={i > 0 ? "pt-5" : ""} style={i > 0 ? { borderTop: "1px solid var(--border-subtle)" } : {}}>
                      <p className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>{edu.school}</p>
                      <p className="text-sm mt-0.5 leading-relaxed" style={{ color: "var(--text-secondary)" }}>{edu.degree}</p>
                      <p className="text-xs mt-1 font-mono" style={{ color: "var(--text-muted)" }}>{edu.period}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
