import React from "react";
import {
  MapPin,
  BedDouble,
  Bath,
  Square,
  Heart,
  Share2,
  Tag,
} from "lucide-react";

const PropertyCard = ({ property, isFavorite, onToggleFavorite }) => {
  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Imagen y badges */}
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
            En Venta
          </span>
        </div>

        {/* Botones de acción */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              onToggleFavorite(property.id);
            }}
            className="p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-colors group/btn"
          >
            <Heart
              className={`w-5 h-5 transition-colors ${
                isFavorite
                  ? "text-red-500 fill-current"
                  : "text-gray-600 group-hover/btn:text-red-500"
              }`}
            />
          </button>
          <button className="p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-colors group/share">
            <Share2 className="w-5 h-5 text-gray-600 group-hover/share:text-blue-500" />
          </button>
        </div>

        {/* Precio */}
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
            <Tag className="w-4 h-4 text-blue-600" />
            <span className="text-lg font-bold text-gray-900">
              {property.price}
            </span>
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {property.title}
        </h3>

        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="w-4 h-4 mr-2 text-blue-600" />
          <p className="text-gray-500">{property.location}</p>
        </div>

        {/* Características principales */}
        <div className="flex gap-6 text-gray-600 mb-6 border-y border-gray-100 py-4">
          <div className="flex items-center gap-2">
            <BedDouble className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700">
              {property.bedrooms} Habitaciones
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700">{property.bathrooms} Baños</span>
          </div>
          <div className="flex items-center gap-2">
            <Square className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700">{property.area}</span>
          </div>
        </div>

        {/* Características adicionales */}
        <div className="flex flex-wrap gap-2 mb-6">
          {property.features.map((feature, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm hover:bg-gray-100 transition-colors"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Botón de acción */}
        <button
          onClick={() => onViewDetails(property)}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors flex items-center justify-center gap-2 group/btn"
        >
          <span>Ver Detalles</span>
          <span className="transform translate-x-0 group-hover/btn:translate-x-1 transition-transform">
            →
          </span>
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
