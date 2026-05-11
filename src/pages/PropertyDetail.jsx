import { useParams, useNavigate, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  MapPin,
  Ruler,
  TrendingUp,
  BedDouble,
  Bath,
  Square,
  CheckCircle,
  Phone,
  ArrowLeft,
  Calendar,
  CreditCard,
  Banknote,
  Home,
  Zap,
  Droplets,
  Wifi,
  ShieldCheck,
  Tag,
} from "lucide-react";
import { getPropertyById } from "../data/properties";

const WA_NUMBER = "50244899009";

const serviceIconMap = {
  "Agua potable": <Droplets className="w-4 h-4 text-blue-500" />,
  "Energía eléctrica": <Zap className="w-4 h-4 text-yellow-500" />,
  "Energía eléctrica 3 fases": <Zap className="w-4 h-4 text-yellow-500" />,
  "Internet fibra": <Wifi className="w-4 h-4 text-purple-500" />,
  "Escritura pública": <ShieldCheck className="w-4 h-4 text-green-500" />,
  default: <CheckCircle className="w-4 h-4 text-orange-500" />,
};

function FeatureIcon({ label }) {
  const icon = serviceIconMap[label] ?? serviceIconMap.default;
  return (
    <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-lg px-3 py-2">
      {icon}
      <span className="text-sm text-gray-700">{label}</span>
    </div>
  );
}

function PropertyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = getPropertyById(id);

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-4">
        <Home className="w-16 h-16 text-gray-300" />
        <h2 className="text-2xl font-bold text-gray-700">Propiedad no encontrada</h2>
        <p className="text-gray-500">La propiedad que buscas no existe o fue eliminada.</p>
        <Link
          to="/properties/sale"
          className="mt-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
        >
          Ver propiedades disponibles
        </Link>
      </div>
    );
  }

  const isLand = property.areaM2 != null;

  const waMessage = encodeURIComponent(
    `Hola, estoy interesado/a en la propiedad: *${property.title}* (${property.location}). Precio: ${property.price}. ¿Podrían darme más información?`
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── Navegación de regreso ─────────────────────────────── */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al listado
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* ── Columna principal ──────────────────────────────── */}
          <div className="lg:col-span-2 space-y-6">
            {/* Galería Swiper */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop
                className="h-72 md:h-96"
              >
                {property.images.map((src, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={src}
                      alt={`${property.title} - foto ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Encabezado */}
            <div>
              <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {property.title}
                </h1>
                <span className="bg-orange-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full shrink-0">
                  {property.category === "venta"
                    ? "En Venta"
                    : property.category === "renta"
                    ? "En Renta"
                    : "Proyecto Futuro"}
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>{property.location}</span>
              </div>
            </div>

            {/* Métricas */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {isLand ? (
                <>
                  <div className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
                    <Ruler className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                    <p className="text-xs text-gray-500 mb-1">Área total</p>
                    <p className="font-bold text-gray-900">{property.areaM2}</p>
                  </div>
                  {property.pricePerM2 && (
                    <div className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
                      <TrendingUp className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                      <p className="text-xs text-gray-500 mb-1">Precio/m²</p>
                      <p className="font-bold text-gray-900">{property.pricePerM2}</p>
                    </div>
                  )}
                </>
              ) : (
                <>
                  {property.bedrooms > 0 && (
                    <div className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
                      <BedDouble className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                      <p className="text-xs text-gray-500 mb-1">Habitaciones</p>
                      <p className="font-bold text-gray-900">{property.bedrooms}</p>
                    </div>
                  )}
                  {property.bathrooms > 0 && (
                    <div className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
                      <Bath className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                      <p className="text-xs text-gray-500 mb-1">Baños</p>
                      <p className="font-bold text-gray-900">{property.bathrooms}</p>
                    </div>
                  )}
                  {property.area && (
                    <div className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
                      <Square className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                      <p className="text-xs text-gray-500 mb-1">Área</p>
                      <p className="font-bold text-gray-900">{property.area}</p>
                    </div>
                  )}
                </>
              )}
              {property.zoning && (
                <div className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
                  <Tag className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                  <p className="text-xs text-gray-500 mb-1">Uso de suelo</p>
                  <p className="font-bold text-gray-900">{property.zoning}</p>
                </div>
              )}
              {property.access && (
                <div className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
                  <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                  <p className="text-xs text-gray-500 mb-1">Acceso</p>
                  <p className="font-bold text-gray-900 text-sm">{property.access}</p>
                </div>
              )}
              {property.delivery && (
                <div className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
                  <Calendar className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                  <p className="text-xs text-gray-500 mb-1">Entrega estimada</p>
                  <p className="font-bold text-gray-900">{property.delivery}</p>
                </div>
              )}
            </div>

            {/* Descripción */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-blue-900 mb-3">Descripción</h2>
              <p className="text-gray-600 leading-relaxed">{property.description}</p>
            </div>

            {/* Características */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-blue-900 mb-4">
                Características y servicios
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.features.map((f, i) => (
                  <FeatureIcon key={i} label={f} />
                ))}
              </div>
            </div>

            {/* Financiamiento */}
            {property.financing && (
              <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-orange-500" />
                  Opciones de financiamiento
                </h2>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-orange-50 rounded-xl p-4">
                    <Banknote className="w-6 h-6 text-orange-500 mx-auto mb-1" />
                    <p className="text-xs text-gray-500 mb-1">Enganche</p>
                    <p className="font-bold text-gray-900 text-sm">
                      {property.financing.initialPayment}
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4">
                    <CreditCard className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                    <p className="text-xs text-gray-500 mb-1">Cuota mensual</p>
                    <p className="font-bold text-gray-900 text-sm">
                      {property.financing.monthlyPayment}
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4">
                    <Calendar className="w-6 h-6 text-green-600 mx-auto mb-1" />
                    <p className="text-xs text-gray-500 mb-1">Plazo</p>
                    <p className="font-bold text-gray-900 text-sm">
                      {property.financing.months} meses
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-3 text-center">
                  * Financiamiento sujeto a aprobación. Contáctanos para más detalles.
                </p>
              </div>
            )}
          </div>

          {/* ── Sidebar ────────────────────────────────────────── */}
          <div className="space-y-5">
            {/* Precio + CTAs */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-md sticky top-4">
              <p className="text-3xl font-bold text-gray-900 mb-1">{property.price}</p>
              {isLand && property.pricePerM2 && (
                <p className="text-sm text-gray-400 mb-5">{property.pricePerM2}</p>
              )}
              {!isLand && property.category === "renta" && (
                <p className="text-sm text-gray-400 mb-5">Precio por mes</p>
              )}

              <div className="space-y-3">
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 active:scale-95 transition-all font-semibold"
                >
                  <Phone className="w-5 h-5" />
                  Consultar por WhatsApp
                </a>

                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full bg-blue-900 text-white py-3 rounded-xl hover:bg-blue-800 transition-colors font-semibold"
                >
                  Agendar visita
                </Link>
              </div>

              <div className="mt-5 pt-4 border-t border-gray-100 space-y-2 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                  Asesoría sin costo
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                  Documentación verificada
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                  Acompañamiento legal
                </div>
              </div>
            </div>

            {/* Ubicación */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
              <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-500" />
                Ubicación
              </h3>
              <p className="text-gray-600 text-sm">{property.location}</p>
              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(property.location)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm text-blue-600 hover:text-blue-800 underline"
              >
                Ver en Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetail;
