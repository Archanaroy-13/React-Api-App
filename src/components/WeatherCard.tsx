import { useState } from "react";
import { CloudSun, Loader2, Search, Droplets, Thermometer } from "lucide-react";

interface WeatherData {
  name: string;
  main: { temp: number; humidity: number };
  weather: { description: string; icon: string }[];
}

const WeatherCard = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city.trim()) return;
    setLoading(true);
    setError("");
    setData(null);
    try {
      const key = "e947994d7ed02fddaea832a9b602cfcb";
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${key}&units=metric`
      );
      if (!res.ok) throw new Error("City not found");
      setData(await res.json());
    } catch (e: any) {
      setError(e.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 flex items-center gap-2">
        <CloudSun size={20} className="text-accent" />
        <h3 className="font-display text-lg font-semibold text-foreground">Weather API</h3>
      </div>
      <p className="mb-4 text-sm text-muted-foreground">Search any city to get live weather data.</p>

      <form
        onSubmit={(e) => { e.preventDefault(); fetchWeather(); }}
        className="flex gap-2"
      >
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city…"
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

      {data && (
        <div className="mt-4 flex flex-1 flex-col items-center gap-2 rounded-lg bg-muted/50 p-4">
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt={data.weather[0].description}
            className="h-16 w-16"
          />
          <p className="font-display text-xl font-bold text-foreground">{data.name}</p>
          <p className="capitalize text-sm text-muted-foreground">{data.weather[0].description}</p>
          <div className="mt-2 flex gap-4 text-sm text-foreground">
            <span className="flex items-center gap-1"><Thermometer size={14} />{Math.round(data.main.temp)}°C</span>
            <span className="flex items-center gap-1"><Droplets size={14} />{data.main.humidity}%</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
