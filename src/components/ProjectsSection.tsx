import { motion } from "framer-motion";
import { ExternalLink, Github, Construction } from "lucide-react";

interface Project {
  name: string;
  description: string;
  tech: string[];
  github: string;
  liveUrl?: string;
  status: "live" | "in-progress";
}

const projects: Project[] = [
  {
    name: "Isolate UI",
    description:
      "A tool for isolating and testing UI components in a sandboxed environment.",
    tech: ["TypeScript", "React"],
    github: "https://github.com/SteveJRobertson/isolate-ui",
    status: "in-progress",
  },
  {
    name: "Lighthouse Compare",
    description:
      "Compare Lighthouse performance reports side-by-side to track improvements over time.",
    tech: ["JavaScript"],
    github: "https://github.com/SteveJRobertson/lighthouse-compare",
    status: "in-progress",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Personal <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Side projects and experiments — some polished, some still taking
            shape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-xl bg-card border border-border p-6 flex flex-col"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-heading text-lg font-bold">
                  {project.name}
                </h3>
                <span
                  className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ${
                    project.status === "live"
                      ? "bg-primary/10 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {project.status === "live" ? (
                    "Live"
                  ) : (
                    <span className="flex items-center gap-1">
                      <Construction className="w-3 h-3" />
                      In progress
                    </span>
                  )}
                </span>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`${project.name} on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`View ${project.name} live`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
