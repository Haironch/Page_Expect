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
  Calendar,
} from "lucide-react";
import PropertyCard from "../components/home/PropertyCard"; // Asegúrate de que la ruta sea correcta

function FutureProjects() {
  const [favorites, setFavorites] = useState([]);

  // Datos de ejemplo de proyectos futuros
  const properties = [
    {
      id: 1,
      title: "Residencial Los Altos",
      price: "Desde Q1,200,000",
      location: "Carretera a El Salvador, km 15",
      bedrooms: 3,
      bathrooms: 2,
      area: "180m²",
      image: "/imagenes/proyecto1.jpg",
      features: ["Entrega: 2026", "Club House", "Área verde"],
    },
    {
      id: 2,
      title: "Torre Empresarial Skytower",
      price: "Desde Q950,000",
      location: "Zona 10, Guatemala",
      bedrooms: 1,
      bathrooms: 1,
      area: "65m²",
      image: "/imagenes/proyecto2.jpg",
      features: ["Entrega: 2027", "Business Center", "Rooftop"],
    },
    {
      id: 3,
      title: "Lotificación Valle Verde",
      price: "Desde Q350,000",
      location: "San Lucas, Sacatepéquez",
      bedrooms: 0,
      bathrooms: 0,
      area: "600m²",
      image: "/imagenes/terreno1.jpg",
      features: ["Disponible: 2025", "Terrenos urbanizados", "Seguridad 24/7"],
    },
    {
      id: 4,
      title: "Condominios Vista Hermosa",
      price: "Desde Q790,000",
      location: "Zona 16, Guatemala",
      bedrooms: 2,
      bathrooms: 2,
      area: "120m²",
      image: "/imagenes/proyecto3.jpg",
      features: ["Entrega: 2026", "Piscina", "Áreas sociales"],
    },
    {
      id: 5,
      title: "Centro Comercial Plaza Central",
      price: "Desde Q1,500,000",
      location: "Zona 4, Mixco",
      bedrooms: 0,
      bathrooms: 2,
      area: "150m²",
      image: "/imagenes/comercial1.jpg",
      features: ["Apertura: 2026", "Alto tráfico", "Estacionamiento"],
    },
    {
      id: 6,
      title: "Eco-Residencial Bosque Verde",
      price: "Desde Q2,100,000",
      location: "Carretera a Antigua, km 25",
      bedrooms: 4,
      bathrooms: 3,
      area: "250m²",
      image: "/imagenes/proyecto4.jpg",
      features: ["Entrega: 2025", "Energía solar", "Captación de agua"],
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
              Proyectos Futuros
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-green-400 to-green-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
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
                             focus:bg-white/20 focus:border-green-500/50 
                             focus:ring-1 focus:ring-green-500/50
                             transition-all duration-300"
                  />
                  <Search
                    className="absolute left-3 top-3.5 text-gray-400 w-5 h-5 
                                   group-hover:text-green-500 transition-colors duration-300"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <select
                  className="px-4 py-3 rounded-lg 
                                 bg-white/10 border border-white/20 
                                 text-white cursor-pointer
                                 focus:bg-white/20 focus:border-green-500/50 
                                 focus:ring-1 focus:ring-green-500/50
                                 transition-all duration-300"
                >
                  <option value="" className="text-gray-900">
                    Año de entrega
                  </option>
                  <option value="1" className="text-gray-900">
                    2025
                  </option>
                  <option value="2" className="text-gray-900">
                    2026
                  </option>
                  <option value="3" className="text-gray-900">
                    2027+
                  </option>
                </select>
                <button
                  className="bg-green-500 text-white px-8 py-3 rounded-lg 
                                 hover:bg-green-600 active:bg-green-700
                                 transform hover:-translate-y-0.5 active:translate-y-0
                                 transition-all duration-300
                                 shadow-lg hover:shadow-green-500/20"
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

      {/* Listado de Proyectos Futuros */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          {/* Filtros */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
              Residenciales
            </button>
            <button className="px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
              Apartamentos
            </button>
            <button className="px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
              Lotificaciones
            </button>
            <button className="px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
              Comerciales
            </button>
          </div>

          {/* Información sobre proyectos futuros */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <Calendar className="text-green-400 w-8 h-8 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Invertir en proyectos futuros
                </h3>
                <p className="text-gray-300">
                  Nuestros proyectos futuros ofrecen oportunidades de inversión
                  con excelente potencial de crecimiento. Reserve hoy con un
                  plan de pago flexible y asegure el mejor precio antes de la
                  finalización del proyecto.
                </p>
              </div>
            </div>
          </div>

          {/* Grid de Propiedades usando el mismo PropertyCard */}
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

export default FutureProjects;
