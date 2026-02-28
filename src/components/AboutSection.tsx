import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="section-padding bg-section-alt">
    <div className="mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <p className="text-sm font-medium uppercase tracking-widest text-accent">About</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-foreground">
          Why this exists
        </h2>

        <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
          <p>
            This project started as a simple question: "What does a clean, real-world API
            integration actually look like?" Too many demos skip error handling, ignore
            loading states, or slap everything into a single file. I wanted to build
            something that felt like a finished product — not a tutorial leftover.
          </p>
          <p>
            Every card on this page talks to a live API, handles failures gracefully, and is
            built with the same patterns you'd use in production. The goal isn't to be
            flashy — it's to be reliable, readable, and worth stealing from.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="font-display text-lg font-semibold text-foreground">Tech Stack</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "shadcn/ui"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
