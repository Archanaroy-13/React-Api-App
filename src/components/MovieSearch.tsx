import { useState } from "react";
import { Film, Loader2, Search, Star } from "lucide-react";

interface Movie {
  Title: string;
  Year: string;
  Poster: string;
  imdbRating: string;
  imdbID: string;
}

const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const search = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError("");
    setMovies([]);
    try {
      const key = "6450105f";
      const res = await fetch(
        `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${key}`
      );
      const json = await res.json();
      if (json.Response === "False") throw new Error(json.Error || "No results");
      setMovies((json.Search || []).slice(0, 4));
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 flex items-center gap-2">
        <Film size={20} className="text-accent" />
        <h3 className="font-display text-lg font-semibold text-foreground">Movie API</h3>
      </div>
      <p className="mb-4 text-sm text-muted-foreground">Search movies by title with OMDB.</p>

      <form onSubmit={(e) => { e.preventDefault(); search(); }} className="flex gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Movie title…"
          maxLength={100}
          className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-primary px-3 py-2 text-primary-foreground transition-colors hover:brightness-110 disabled:opacity-50"
        >
          {loading ? <Loader2 size={16} className="animate-spin" /> : <Search size={16} />}
        </button>
      </form>

      {error && <p className="mt-3 text-sm text-destructive">{error}</p>}

      {movies.length > 0 && (
        <div className="mt-4 grid grid-cols-2 gap-2">
          {movies.map((m) => (
            <div key={m.imdbID} className="overflow-hidden rounded-lg bg-muted/50">
              {m.Poster !== "N/A" && (
                <img src={m.Poster} alt={m.Title} className="h-32 w-full object-cover" />
              )}
              <div className="p-2">
                <p className="truncate text-xs font-semibold text-foreground">{m.Title}</p>
                <p className="text-xs text-muted-foreground">{m.Year}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && !error && movies.length === 0 && (
        <div className="mt-6 flex flex-1 items-center justify-center text-sm text-muted-foreground">
          Search for a movie above
        </div>
      )}
    </div>
  );
};

export default MovieSearch;
