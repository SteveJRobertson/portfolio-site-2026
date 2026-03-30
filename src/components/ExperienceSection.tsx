import { motion } from "framer-motion";

const experiences = [
  {
    company: "FanDuel",
    role: "Senior Software Engineer",
    period: "Jan 2025 – Present",
    description:
      "Senior engineer within Customer Platform Engineering, working across flagship customer-facing web applications in React and TypeScript. Led design system migration, contributed to React Router migration, and co-delivered a Salesforce chat integration ahead of schedule.",
    highlights: ["Design System Migration", "React Router Migration", "AWS Infrastructure", "AI Exploration"],
  },
  {
    company: "Wood Mackenzie",
    role: "UI Engineer / Design System Lead",
    period: "Dec 2019 – Nov 2024",
    description:
      "Hired to build a React and TypeScript UI component library, quickly moving into a lead role as the primary point of contact for the design system across the organisation. Built CI/CD pipelines, established coding standards, and mentored engineers.",
    highlights: ["Component Library", "CI/CD Pipeline", "Team Mentorship", "Cross-team Adoption"],
  },
  {
    company: "Royal Bank of Scotland",
    role: "Frontend Engineer",
    period: "Sep 2018 – Dec 2019",
    description:
      "Worked on a GDPR management reporting application built in React with Redux. Introduced modern patterns including Hooks and Context API, onboarding new developers rapidly on a time-critical project.",
    highlights: ["React/Redux", "GDPR Compliance", "Modern Patterns"],
  },
  {
    company: "Aegon",
    role: "Frontend Engineer",
    period: "Apr 2017 – Sep 2018",
    description:
      "Part of the delivery team for Aegon's customer-facing investment platform. Championed test-driven development and implemented a peer code review process.",
    highlights: ["Investment Platform", "TDD", "Code Review"],
  },
  {
    company: "Royal London",
    role: "Frontend Developer",
    period: "Nov 2016 – Apr 2017",
    description:
      "Delivered a content-managed, customer-facing website built on EPiServer with Bootstrap, jQuery, and Sass.",
    highlights: ["EPiServer CMS", "Responsive Design"],
  },
  {
    company: "Earlier Career",
    role: "Sopra Steria · Realise · Freelance",
    period: "2009 – 2016",
    description:
      "Built a freelance business from scratch, progressed to senior developer at a digital agency, and led UI toolkit development with Angular at Sopra Steria.",
    highlights: ["Angular", "Freelance", "Team Leadership"],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-24 md:py-32 bg-card/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A track record of leading frontend initiatives across financial services, energy, and sports technology.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-[29px] top-7 w-3 h-3 rounded-full bg-primary border-2 border-background hidden md:block" />

                <div className="rounded-xl bg-card border border-border p-6 md:p-8 hover:border-primary/20 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-heading text-xl font-bold">{exp.company}</h3>
                      <p className="text-primary text-sm font-medium">{exp.role}</p>
                    </div>
                    <span className="text-muted-foreground text-sm shrink-0">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((h) => (
                      <span key={h} className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary font-medium">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
