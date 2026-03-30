import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Layers, Cloud, Database, Cpu, FlaskConical, Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Java", "Python", "C++", "SQL", "TypeScript", "JavaScript"],
  },
  {
    title: "Frameworks",
    icon: Layers,
    skills: ["Spring Boot", "Django", "React", "Node.js", "Express"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform", "Ansible", "GitHub Actions", "Azure DevOps"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "DynamoDB", "MongoDB", "Redis", "Supabase"],
  },
  {
    title: "Specialized Areas",
    icon: Cpu,
    skills: ["Distributed Systems", "Microservices", "LLMs", "Data Pipelines", "System Design", "REST APIs"],
  },
  {
    title: "Testing & Observability",
    icon: FlaskConical,
    skills: ["JUnit", "Mockito", "pytest", "CloudWatch", "Grafana"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 sm:py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/20 pointer-events-none" />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-[100px] opacity-10 pointer-events-none"
        style={{ background: "hsl(215 50% 62% / 0.08)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mb-12" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                className="group p-6 rounded-2xl glass border border-border/60 hover:border-primary/25 hover:bg-secondary/30 transition-all duration-300"
              >
                {/* Card header */}
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/12 transition-colors duration-200">
                    <category.icon size={15} className="text-primary" />
                  </div>
                  <h3 className="font-display text-sm font-bold text-foreground uppercase tracking-wider">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-secondary/70 text-secondary-foreground border border-border/50 hover:border-primary/30 hover:text-primary transition-all duration-150 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="mt-10 p-5 rounded-2xl glass border border-border/60 flex items-center gap-4"
          >
            <div className="w-9 h-9 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center flex-shrink-0">
              <Sparkles size={16} className="text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">
              Always exploring new technologies —{" "}
              <span className="text-foreground font-medium">currently deepening expertise</span> in
              Kubernetes orchestration, serverless architectures, and LLM-powered engineering tools.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
