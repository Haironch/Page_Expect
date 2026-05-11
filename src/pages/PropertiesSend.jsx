import React, { useState } from "react";
import {
  Search,
  MapPin,
  BedDouble,
  Bath,
  Square,
  Heart,
  Share2,
  Tag,
} from "lucide-react";
import PropertyCard from "../components/home/PropertyCard"; // Asegúrate de que la ruta sea correcta

function PropertiesSend() {
  const [favorites, setFavorites] = useState([]);

  const properties = [
    {
      id: 1,
      title: "Lote Residencial Zona 3",
      price: "Q 240,000",
      location: "Quetzaltenango, Zona 3",
      areaM2: "200 m²",
      pricePerM2: "Q 1,200/m²",
      image: "https://loremflickr.com/800/500/land,terrain,field?lock=10",
      features: ["Agua", "Luz", "Drenaje", "Calle asfaltada"],
    },
    {
      id: 2,
      title: "Terreno Comercial Carretera",
      price: "Q 475,000",
      location: "Salcajá, Quetzaltenango",
      areaM2: "500 m²",
      pricePerM2: "Q 950/m²",
      image: "https://loremflickr.com/800/500/land,nature,mountain?lock=22",
      features: ["Agua", "Luz", "Carretera principal"],
    },
    {
      id: 3,
      title: "Lote Valle Verde",
      price: "Q 256,000",
      location: "San Marcos, Guatemala",
      areaM2: "320 m²",
      pricePerM2: "Q 800/m²",
      image: "https://loremflickr.com/800/500/field,green,nature?lock=35",
      features: ["Agua", "Luz", "Drenaje", "Internet", "Calle adoquinada"],
    },
    {
      id: 4,
      title: "Terreno Residencial Cantel",
      price: "Q 185,000",
      location: "Cantel, Quetzaltenango",
      areaM2: "150 m²",
      pricePerM2: "Q 1,233/m²",
      image: "https://loremflickr.com/800/500/countryside,land,grass?lock=47",
      features: ["Agua", "Luz", "Calle asfaltada"],
    },
    {
      id: 5,
      title: "Lote Industrial Zona 5",
      price: "Q 890,000",
      location: "Quetzaltenango, Zona 5",
      areaM2: "1,200 m²",
      pricePerM2: "Q 742/m²",
      image: "https://loremflickr.com/800/500/field,earth,terrain?lock=58",
      features: ["Agua", "Luz", "Drenaje", "Carretera principal"],
    },
    {
      id: 6,
      title: "Terreno con Vista al Volcán",
      price: "Q 320,000",
      location: "Almolonga, Quetzaltenango",
      areaM2: "400 m²",
      pricePerM2: "Q 800/m²",
      image: "https://loremflickr.com/800/500/volcano,landscape,nature?lock=63",
      features: ["Agua", "Luz", "Vista panorámica"],
    },
  ];

  const toggleFavorite = (propertyId) => {
    setFavorites((prev) =>
      prev.includes(propertyId)
        ? prev.filter((id) => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">
            <span className="inline-block relative group">
              Propiedades en Venta
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </span>
          </h1>

          {/* Barra de búsqueda */}
          <div className="max-w-3xl mx-auto backdrop-blur-sm bg-white/10 rounded-xl p-4 shadow-xl border border-white/10">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Buscar por ubicación..."
                    className="w-full pl-10 pr-4 py-3 rounded-lg 
                             bg-white/10 border border-white/20 
                             text-white placeholder-gray-300
                             focus:bg-white/20 focus:border-orange-500/50 
                             focus:ring-1 focus:ring-orange-500/50
                             transition-all duration-300"
                  />
                  <Search
                    className="absolute left-3 top-3.5 text-gray-400 w-5 h-5 
                                   group-hover:text-orange-500 transition-colors duration-300"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <select
                  className="px-4 py-3 rounded-lg 
                                 bg-white/10 border border-white/20 
                                 text-white cursor-pointer
                                 focus:bg-white/20 focus:border-orange-500/50 
                                 focus:ring-1 focus:ring-orange-500/50
                                 transition-all duration-300"
                >
                  <option value="" className="text-gray-900">
                    Precio
                  </option>
                  <option value="1" className="text-gray-900">
                    Q1M - Q2M
                  </option>
                  <option value="2" className="text-gray-900">
                    Q2M - Q3M
                  </option>
                  <option value="3" className="text-gray-900">
                    Q3M+
                  </option>
                </select>
                <button
                  className="bg-orange-500 text-white px-8 py-3 rounded-lg 
                                 hover:bg-orange-600 active:bg-orange-700
                                 transform hover:-translate-y-0.5 active:translate-y-0
                                 transition-all duration-300
                                 shadow-lg hover:shadow-orange-500/20"
                >
                  <span className="flex items-center gap-2">
                    <Search className="w-4 h-4" />
                    Buscar
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Listado de Propiedades */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          {/* Filtros */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
              Casas
            </button>
            <button className="px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
              Apartamentos
            </button>
            <button className="px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
              Terrenos
            </button>
          </div>

          {/* Grid de Propiedades usando el nuevo PropertyCard */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                isFavorite={favorites.includes(property.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PropertiesSend;
