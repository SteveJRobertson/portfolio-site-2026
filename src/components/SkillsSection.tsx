import { motion } from "framer-motion";
import { Code2, Layers, GitBranch, Figma, Terminal, Users } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "Redux",
      "React Router",
      "HTML",
      "CSS",
    ],
  },
  {
    icon: Layers,
    title: "Design Systems",
    items: [
      "Component libraries",
      "Design tokens",
      "Accessibility",
      "Documentation",
    ],
  },
  {
    icon: Terminal,
    title: "Tooling & Infrastructure",
    items: ["Git", "CI/CD", "Jenkins", "GitHub Actions", "Docker", "AWS", "Nx"],
  },
  {
    icon: Figma,
    title: "Design & Collaboration",
    items: [
      "Figma",
      "System architecture",
      "Stakeholder engagement",
      "Technical docs",
    ],
  },
  {
    icon: GitBranch,
    title: "Practices",
    items: ["Agile / Scrum", "TDD", "AI-assisted workflows"],
  },
  {
    icon: Users,
    title: "Leadership",
    items: ["Mentoring", "Developer enablement", "Knowledge sharing"],
  },
];

const SkillsSection = () => {
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
            What I <span className="text-gradient">do</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            I thrive where frontend engineering intersects with design, platform
            teams, and business stakeholders.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl bg-card border border-border p-6"
            >
              <skill.icon className="w-5 h-5 text-primary mb-4" />
              <h3 className="font-heading text-lg font-semibold mb-3">
                {skill.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
