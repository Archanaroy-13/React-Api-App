import { motion } from "framer-motion";
import WeatherCard from "./WeatherCard";
import MovieSearch from "./MovieSearch";
import CatGenerator from "./CatGenerator";
import CountrySearch from "./CountrySearch";

const cards = [
  { component: WeatherCard },
  { component: MovieSearch },
  { component: CatGenerator },
  { component: CountrySearch },
];

const ApiShowcase = () => (
  <section id="apis" className="section-padding">
    <div className="mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-10 text-center"
      >
        <p className="text-sm font-medium uppercase tracking-widest text-accent">Live Integrations</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
          API Playground
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
          Each card below connects to a real API — type, click, and see live results.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2">
        {cards.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="card-hover rounded-xl border border-border bg-card p-6"
          >
            <c.component />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ApiShowcase;
