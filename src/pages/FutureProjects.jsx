import { useState, useMemo } from "react";
import { Search, Calendar } from "lucide-react";
import PropertyCard from "../components/home/PropertyCard";
import { futureProjects } from "../data/properties";

const FILTERS = [
  { label: "Todos", value: "todos" },
  { label: "Residenciales", value: "residencial" },
  { label: "Apartamentos", value: "apartamento" },
  { label: "Lotificaciones", value: "lotificacion" },
  { label: "Comerciales", value: "comercial" },
];

const DELIVERY_OPTIONS = [
  { label: "Cualquier año", value: "todos" },
  { label: "2025", value: "2025" },
  { label: "2026", value: "2026" },
  { label: "2027", value: "2027" },
];

const PRICE_RANGES = [
  { label: "Cualquier precio", min: 0, max: Infinity },
  { label: "Hasta Q 500,000", min: 0, max: 500000 },
  { label: "Q 500,000 – Q 1,200,000", min: 500000, max: 1200000 },
  { label: "Q 1,200,000+", min: 1200000, max: Infinity },
];

function FutureProjects() {
  const [favorites, setFavorites] = useState([]);
  const [activeFilter, setActiveFilter] = useState("todos");
  const [searchText, setSearchText] = useState("");
  const [delivery, setDelivery] = useState("todos");
  const [priceRange, setPriceRange] = useState(0);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const filtered = useMemo(() => {
    const { min, max } = PRICE_RANGES[priceRange];
    return futureProjects.filter((p) => {
      const matchType = activeFilter === "todos" || p.type === activeFilter;
      const matchSearch =
        searchText === "" ||
        p.title.toLowerCase().includes(searchText.toLowerCase()) ||
        p.location.toLowerCase().includes(searchText.toLowerCase());
      const matchDelivery =
        delivery === "todos" ||
        (p.delivery && p.delivery.includes(delivery));
      const matchPrice = p.priceValue >= min && p.priceValue <= max;
      return matchType && matchSearch && matchDelivery && matchPrice;
    });
  }, [activeFilter, searchText, delivery, priceRange]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">
            Proyectos Futuros
          </h1>

          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-white/10">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3.5 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Buscar por nombre o ubicación..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:bg-white/20 focus:border-green-400 focus:outline-none transition-all"
                />
              </div>
              <select
                value={delivery}
                onChange={(e) => setDelivery(e.target.value)}
                className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white cursor-pointer focus:bg-white/20 focus:border-green-400 focus:outline-none transition-all"
              >
                {DELIVERY_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value} className="text-gray-900">
                    {o.label}
                  </option>
                ))}
              </select>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white cursor-pointer focus:bg-white/20 focus:border-green-400 focus:outline-none transition-all"
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

          {/* Banner informativo */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-8 flex items-start gap-4">
            <Calendar className="text-green-400 w-7 h-7 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-white mb-1">Invierte en preventa</h3>
              <p className="text-gray-300 text-sm">
                Los proyectos en preventa ofrecen los mejores precios y facilidades de pago. Reserva hoy con un enganche y asegura tu inversión antes de que suban los precios.
              </p>
            </div>
          </div>

          {/* Filtros de categoría */}
          <div className="flex flex-wrap gap-3 mb-8">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === f.value
                    ? "bg-green-500 text-white shadow-lg shadow-green-500/30"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {f.label}
              </button>
            ))}
            <span className="ml-auto self-center text-sm text-gray-400">
              {filtered.length} proyecto{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  isFavorite={favorites.includes(property.id)}
                  onToggleFavorite={toggleFavorite}
                  badgeLabel="Preventa"
                  badgeColor="bg-green-500"
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-400">
              <Search className="w-12 h-12 mx-auto mb-3 opacity-40" />
              <p className="text-lg">No hay proyectos con esos filtros.</p>
              <button
                onClick={() => { setActiveFilter("todos"); setSearchText(""); setDelivery("todos"); setPriceRange(0); }}
                className="mt-4 text-green-400 hover:text-green-300 underline text-sm"
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

export default FutureProjects;
