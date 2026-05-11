import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import PropertyCard from "../components/home/PropertyCard";
import { propertiesForRent } from "../data/properties";

const FILTERS = [
  { label: "Todos", value: "todos" },
  { label: "Apartamentos", value: "apartamento" },
  { label: "Casas", value: "casa" },
  { label: "Oficinas", value: "oficina" },
];

const PRICE_RANGES = [
  { label: "Cualquier precio", min: 0, max: Infinity },
  { label: "Hasta Q 5,000/mes", min: 0, max: 5000 },
  { label: "Q 5,000 – Q 8,000/mes", min: 5000, max: 8000 },
  { label: "Q 8,000+/mes", min: 8000, max: Infinity },
];

function PropertiesRent() {
  const [favorites, setFavorites] = useState([]);
  const [activeFilter, setActiveFilter] = useState("todos");
  const [searchText, setSearchText] = useState("");
  const [priceRange, setPriceRange] = useState(0);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const filtered = useMemo(() => {
    const { min, max } = PRICE_RANGES[priceRange];
    return propertiesForRent.filter((p) => {
      const matchType = activeFilter === "todos" || p.type === activeFilter;
      const matchSearch =
        searchText === "" ||
        p.title.toLowerCase().includes(searchText.toLowerCase()) ||
        p.location.toLowerCase().includes(searchText.toLowerCase());
      const matchPrice = p.priceValue >= min && p.priceValue <= max;
      return matchType && matchSearch && matchPrice;
    });
  }, [activeFilter, searchText, priceRange]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">
            Propiedades en Renta
          </h1>

          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-white/10">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3.5 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Buscar por nombre o ubicación..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:bg-white/20 focus:border-blue-400 focus:outline-none transition-all"
                />
              </div>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white cursor-pointer focus:bg-white/20 focus:border-blue-400 focus:outline-none transition-all"
              >
                {PRICE_RANGES.map((r, i) => (
                  <option key={i} value={i} className="text-gray-900">
                    {r.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* ── Listado ──────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          {/* Filtros */}
          <div className="flex flex-wrap gap-3 mb-8">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === f.value
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {f.label}
              </button>
            ))}
            <span className="ml-auto self-center text-sm text-gray-400">
              {filtered.length} resultado{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>

          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  isFavorite={favorites.includes(property.id)}
                  onToggleFavorite={toggleFavorite}
                  badgeLabel="En Renta"
                  badgeColor="bg-blue-500"
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-400">
              <Search className="w-12 h-12 mx-auto mb-3 opacity-40" />
              <p className="text-lg">No se encontraron propiedades con esos filtros.</p>
              <button
                onClick={() => { setActiveFilter("todos"); setSearchText(""); setPriceRange(0); }}
                className="mt-4 text-blue-400 hover:text-blue-300 underline text-sm"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default PropertiesRent;
