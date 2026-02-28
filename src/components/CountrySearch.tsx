import { useState } from "react";
import { Globe, Loader2, Search, MapPin, Users } from "lucide-react";

interface Country {
  name: { common: string };
  flags: { svg: string; alt?: string };
  capital?: string[];
  region: string;
  population: number;
}

const CountrySearch = () => {
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState<Country | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const search = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError("");
    setCountry(null);
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${encodeURIComponent(query)}?fields=name,flags,capital,region,population`
      );
      if (!res.ok) throw new Error("Country not found");
      const data = await res.json();
      setCountry(data[0]);
    } catch (e: any) {
      setError(e.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 flex items-center gap-2">
        <Globe size={20} className="text-accent" />
        <h3 className="font-display text-lg font-semibold text-foreground">Countries API</h3>
      </div>
      <p className="mb-4 text-sm text-muted-foreground">Look up any country's info instantly.</p>

      <form onSubmit={(e) => { e.preventDefault(); search(); }} className="flex gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Country name…"
          maxLength={80}
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

      {country && (
        <div className="mt-4 flex flex-col items-center gap-3 rounded-lg bg-muted/50 p-4">
          <img
            src={country.flags.svg}
            alt={country.flags.alt || country.name.common}
            className="h-16 w-24 rounded object-cover shadow-sm"
          />
          <p className="font-display text-lg font-bold text-foreground">{country.name.common}</p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><MapPin size={14} />{country.capital?.[0] || "N/A"}</span>
            <span>{country.region}</span>
            <span className="flex items-center gap-1"><Users size={14} />{country.population.toLocaleString()}</span>
          </div>
        </div>
      )}

      {!loading && !error && !country && (
        <div className="mt-6 flex flex-1 items-center justify-center text-sm text-muted-foreground">
          Search for a country above
        </div>
      )}
    </div>
  );
};

export default CountrySearch;
