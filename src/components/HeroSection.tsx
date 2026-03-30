import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Globe, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/steve-robertson-5425501a/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/stevejrobertson", label: "GitHub" },
  { icon: Globe, href: "https://sr.digital/", label: "Website" },
  { icon: Mail, href: "mailto:steve.robertson80@gmail.com", label: "Email" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
      </div>

      <div className="container relative z-10 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground tracking-wide uppercase">Edinburgh, Scotland</span>
          </div>

          <h1 className="font-heading text-5xl md:text-7xl font-800 tracking-tight mb-6 leading-[1.1]">
            Steve<br />
            <span className="text-gradient">Robertson</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-heading font-medium mb-4">
            Senior Frontend Engineer
          </p>

          <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mb-10 leading-relaxed">
            Over fifteen years building for the web, specialising in React, TypeScript, and design systems.
            I lead cross-team frontend initiatives — from shared UI libraries to large-scale codebase migrations.
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all duration-200"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
