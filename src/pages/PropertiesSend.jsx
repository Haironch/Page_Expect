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

  // Datos de ejemplo de propiedades
  const properties = [
    {
      id: 1,
      title: "Casa Moderna en Zona 10",
      price: "Q2,500,000",
      location: "Zona 10, Guatemala",
      bedrooms: 4,
      bathrooms: 3,
      area: "280m²",
      image: "/imagenes/apartamento2.jpg", // ✅ Ruta corregida
      features: ["Jardín", "Piscina", "Garage doble"],
    },
    {
      id: 2,
      title: "Apartamento de Lujo",
      price: "Q1,800,000",
      location: "Zona 14, Guatemala",
      bedrooms: 3,
      bathrooms: 2,
      area: "150m²",
      image: "/imagenes/apartemento1.jpg", // ✅ Ruta corregida
      features: ["Vista a la ciudad", "Seguridad 24/7", "Área social"],
    },
    {
      id: 3,
      title: "Edificio en Zona 1",
      price: "Q3,200,000",
      location: "Zona 1, Guatemala",
      bedrooms: 10,
      bathrooms: 8,
      area: "650m²",
      image: "/imagenes/edificio1.jpg",
      features: ["Área comercial", "Parqueo techado", "Balcón con vista"],
    },
    // Puedes agregar más propiedades aquí
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
