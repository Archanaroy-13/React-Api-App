import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToApis = () => {
    document.querySelector("#apis")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-hero-gradient"
    >
      {/* Subtle decorative circles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-teal/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-sky"
        >
          Explore · Learn · Build
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-display text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl"
        >
          APIs made
          <br />
          beautifully simple
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ice sm:text-lg"
        >
          A curated collection of live API integrations — weather, movies, cats,
          and countries — built to demonstrate real-world frontend skills.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8"
        >
          <button
            onClick={scrollToApis}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground transition-all hover:brightness-110 hover:shadow-lg"
          >
            Explore APIs
            <ArrowDown size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
