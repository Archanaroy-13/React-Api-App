import { motion } from "framer-motion";
import { Zap, Shield, Layers } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Real-Time Data",
    description:
      "Each card fetches live data from public APIs with proper loading and error states.",
  },
  {
    icon: Shield,
    title: "Production Quality",
    description:
      "Built with accessible markup, responsive layouts, and clean architecture throughout.",
  },
  {
    icon: Layers,
    title: "Reusable Components",
    description:
      "Every piece is modular and composable — ready to drop into any project.",
  },
];

const FeaturesSection = () => (
  <section className="section-padding bg-section-alt">
    <div className="mx-auto max-w-5xl">
      <div className="grid gap-6 sm:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="card-hover rounded-xl border border-border bg-card p-6"
          >
            <div className="mb-4 inline-flex rounded-lg bg-secondary p-2.5">
              <f.icon size={20} className="text-primary" />
            </div>
            <h3 className="font-display text-base font-semibold text-foreground">
              {f.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {f.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
