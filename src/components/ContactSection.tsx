import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-gradient">touch</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            I'm always open to discussing new projects, creative ideas, or
            opportunities.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="mailto:steve.robertson80@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold hover:opacity-90 transition-opacity glow"
            >
              <Mail className="w-4 h-4" />
              Say hello
            </a>
            <a
              href="http://linkedin.com/in/steverobertson80"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-heading font-semibold hover:bg-secondary/80 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              Connect on LinkedIn
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 text-muted-foreground text-sm">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" /> Edinburgh, UK
            </span>
            <a
              href="https://github.com/stevejrobertson"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" /> stevejrobertson
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
