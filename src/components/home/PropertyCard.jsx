import React from "react";
import {
  MapPin,
  Heart,
  Share2,
  Tag,
  Ruler,
  TrendingUp,
  Droplets,
  Zap,
  Wifi,
  BedDouble,
  Bath,
  Square,
} from "lucide-react";

const serviceIcons = {
  Agua: <Droplets className="w-3 h-3" />,
  Luz: <Zap className="w-3 h-3" />,
  Internet: <Wifi className="w-3 h-3" />,
};

const PropertyCard = ({ property, isFavorite, onToggleFavorite, onViewDetails, badgeLabel, badgeColor }) => {
  const isLand = property.areaM2 != null || property.pricePerM2 != null;

  const handleToggleFavorite = (e) => {
    e.preventDefault();
    if (onToggleFavorite) onToggleFavorite(property.id);
  };

  const handleViewDetails = () => {
    if (onViewDetails) onViewDetails(property);
  };

  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Imagen y badges */}
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        {/* Fallback si no hay imagen */}
        <div
          className="w-full h-64 bg-gradient-to-br from-green-800 to-green-600 items-center justify-center hidden"
          aria-hidden="true"
        >
          <Ruler className="w-16 h-16 text-green-300/50" />
        </div>

        {/* Badge tipo */}
        <div className="absolute top-3 left-3">
          <span
            className={`px-3 py-1 ${badgeColor || "bg-orange-500"} text-white text-xs font-semibold rounded-full`}
          >
            {badgeLabel || "En Venta"}
          </span>
        </div>

        {/* Acciones */}
        <div className="absolute top-3 right-3 flex gap-2">
          <button
            onClick={handleToggleFavorite}
            className="p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-colors group/btn"
            aria-label="Guardar favorito"
          >
            <Heart
              className={`w-5 h-5 transition-colors ${
                isFavorite
                  ? "text-red-500 fill-current"
                  : "text-gray-600 group-hover/btn:text-red-500"
              }`}
            />
          </button>
          <button
            className="p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-colors group/share"
            aria-label="Compartir"
          >
            <Share2 className="w-5 h-5 text-gray-600 group-hover/share:text-blue-500" />
          </button>
        </div>

        {/* Precio */}
        <div className="absolute bottom-3 left-3">
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
            <Tag className="w-4 h-4 text-orange-500" />
            <span className="text-base font-bold text-gray-900">
              {property.price}
            </span>
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
          {property.title}
        </h3>

        <div className="flex items-center text-gray-500 text-sm mb-3">
          <MapPin className="w-4 h-4 mr-1.5 text-orange-500 shrink-0" />
          {property.location}
        </div>

        {/* Métricas: terreno vs. casa */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 border-t border-gray-100 pt-3 mb-3">
          {isLand ? (
            <>
              <span className="flex items-center gap-1.5">
                <Ruler className="w-4 h-4 text-blue-600" />
                {property.areaM2 || property.area}
              </span>
              {property.pricePerM2 && (
                <span className="flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                  {property.pricePerM2}
                </span>
              )}
            </>
          ) : (
            <>
              {property.bedrooms != null && (
                <span className="flex items-center gap-1.5">
                  <BedDouble className="w-4 h-4 text-blue-600" />
                  {property.bedrooms} Hab.
                </span>
              )}
              {property.bathrooms != null && (
                <span className="flex items-center gap-1.5">
                  <Bath className="w-4 h-4 text-blue-600" />
                  {property.bathrooms} Baños
                </span>
              )}
              {property.area && (
                <span className="flex items-center gap-1.5">
                  <Square className="w-4 h-4 text-blue-600" />
                  {property.area}
                </span>
              )}
            </>
          )}
        </div>

        {/* Features / servicios */}
        {property.features?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {property.features.map((feature, i) => {
              const icon = serviceIcons[feature];
              return (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-gray-50 text-gray-600 rounded-full text-xs hover:bg-gray-100 transition-colors"
                >
                  {icon}
                  {feature}
                </span>
              );
            })}
          </div>
        )}

        {/* Botón */}
        <button
          onClick={handleViewDetails}
          className="w-full bg-blue-900 text-white py-2.5 rounded-lg hover:bg-blue-800 active:bg-blue-950 transition-colors flex items-center justify-center gap-2 text-sm font-semibold group/btn"
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
