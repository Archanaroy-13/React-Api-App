import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cat, Loader2, RefreshCw } from "lucide-react";

const CatGenerator = () => {
  const [url, setUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generate = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://api.thecatapi.com/v1/images/search");
      const json = await res.json();
      setUrl(json[0]?.url || null);
    } catch {
      setError("Failed to fetch cat image");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 flex items-center gap-2">
        <Cat size={20} className="text-accent" />
        <h3 className="font-display text-lg font-semibold text-foreground">Cat Images API</h3>
      </div>
      <p className="mb-4 text-sm text-muted-foreground">Generate a random cat photo instantly.</p>

      <button
        onClick={generate}
        disabled={loading}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:brightness-110 disabled:opacity-50"
      >
        {loading ? (
          <Loader2 size={16} className="animate-spin" />
        ) : (
          <RefreshCw size={16} />
        )}
        {url ? "New Cat" : "Generate Cat"}
      </button>

      {error && <p className="mt-3 text-sm text-destructive">{error}</p>}

      <div className="mt-4 flex flex-1 items-center justify-center">
        <AnimatePresence mode="wait">
          {url && (
            <motion.img
              key={url}
              src={url}
              alt="Random cat"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="max-h-52 w-full rounded-lg object-cover"
            />
          )}
        </AnimatePresence>
        {!url && !loading && (
          <p className="text-sm text-muted-foreground">Click the button above!</p>
        )}
      </div>
    </div>
  );
};

export default CatGenerator;
