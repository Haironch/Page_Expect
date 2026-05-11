import React from "react";
import { useNavigate } from "react-router-dom";
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
  ArrowRight,
} from "lucide-react";

const serviceIcons = {
  Agua: <Droplets className="w-3 h-3" />,
  "Agua potable": <Droplets className="w-3 h-3" />,
  Luz: <Zap className="w-3 h-3" />,
  "Energía eléctrica": <Zap className="w-3 h-3" />,
  Internet: <Wifi className="w-3 h-3" />,
  "Internet fibra": <Wifi className="w-3 h-3" />,
};

const PropertyCard = ({ property, isFavorite, onToggleFavorite, badgeLabel, badgeColor }) => {
  const navigate = useNavigate();
  const isLand = property.areaM2 != null;
  const imageSrc = property.image || (property.images && property.images[0]);

  const handleToggleFavorite = (e) => {
    e.stopPropagation();
    if (onToggleFavorite) onToggleFavorite(property.id);
  };

  const handleViewDetails = () => {
    navigate(`/property/${property.id}`);
  };

  return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      {/* ── Imagen ───────────────────────────────── */}
      <div className="relative h-56 overflow-hidden cursor-pointer" onClick={handleViewDetails}>
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-green-800 to-green-600 flex items-center justify-center">
            <Ruler className="w-14 h-14 text-green-300/50" />
          </div>
        )}

        {/* Overlay suave en hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

        {/* Badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`px-3 py-1 ${badgeColor || "bg-orange-500"} text-white text-xs font-semibold rounded-full shadow`}
          >
            {badgeLabel || "En Venta"}
          </span>
        </div>

        {/* Acciones */}
        <div className="absolute top-3 right-3 flex gap-2">
          <button
            onClick={handleToggleFavorite}
            className="p-1.5 rounded-full bg-white/90 backdrop-blur-sm shadow hover:bg-white transition-colors"
            aria-label="Guardar favorito"
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                isFavorite ? "text-red-500 fill-current" : "text-gray-500 hover:text-red-400"
              }`}
            />
          </button>
          <button
            className="p-1.5 rounded-full bg-white/90 backdrop-blur-sm shadow hover:bg-white transition-colors"
            aria-label="Compartir"
          >
            <Share2 className="w-4 h-4 text-gray-500 hover:text-blue-500" />
          </button>
        </div>

        {/* Precio */}
        <div className="absolute bottom-3 left-3">
          <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow">
            <Tag className="w-3.5 h-3.5 text-orange-500" />
            <span className="text-sm font-bold text-gray-900">{property.price}</span>
          </div>
        </div>
      </div>

      {/* ── Contenido ────────────────────────────── */}
      <div className="p-5">
        <h3
          className="text-base font-semibold text-gray-900 mb-1.5 group-hover:text-blue-700 transition-colors cursor-pointer line-clamp-1"
          onClick={handleViewDetails}
        >
          {property.title}
        </h3>

        <div className="flex items-center text-gray-500 text-sm mb-3">
          <MapPin className="w-3.5 h-3.5 mr-1 text-orange-500 shrink-0" />
          <span className="truncate">{property.location}</span>
        </div>

        {/* Métricas */}
        <div className="flex flex-wrap gap-3 text-sm text-gray-600 border-t border-gray-100 pt-3 mb-3">
          {isLand ? (
            <>
              <span className="flex items-center gap-1">
                <Ruler className="w-4 h-4 text-blue-600" />
                {property.areaM2}
              </span>
              {property.pricePerM2 && (
                <span className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                  {property.pricePerM2}
                </span>
              )}
            </>
          ) : (
            <>
              {property.bedrooms > 0 && (
                <span className="flex items-center gap-1">
                  <BedDouble className="w-4 h-4 text-blue-600" />
                  {property.bedrooms} Hab.
                </span>
              )}
              {property.bathrooms > 0 && (
                <span className="flex items-center gap-1">
                  <Bath className="w-4 h-4 text-blue-600" />
                  {property.bathrooms} Baños
                </span>
              )}
              {property.area && (
                <span className="flex items-center gap-1">
                  <Square className="w-4 h-4 text-blue-600" />
                  {property.area}
                </span>
              )}
            </>
          )}
        </div>

        {/* Features */}
        {property.features?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {property.features.slice(0, 4).map((feature, i) => {
              const icon = serviceIcons[feature];
              return (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-50 text-gray-600 rounded-full text-xs border border-gray-100"
                >
                  {icon}
                  {feature}
                </span>
              );
            })}
            {property.features.length > 4 && (
              <span className="px-2 py-0.5 bg-gray-50 text-gray-400 rounded-full text-xs border border-gray-100">
                +{property.features.length - 4} más
              </span>
            )}
          </div>
        )}

        {/* Botón */}
        <button
          onClick={handleViewDetails}
          className="w-full bg-blue-900 text-white py-2.5 rounded-lg hover:bg-blue-800 active:bg-blue-950 transition-colors flex items-center justify-center gap-2 text-sm font-semibold group/btn"
        >
          Ver Detalles
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
