import { Link } from "react-router-dom";
import {
  Home as HomeIcon,
  Heart,
  Church,
  UsersRound,
  MapPin,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  ShieldCheck,
  Phone,
  Ruler,
  Star,
} from "lucide-react";

const stats = [
  { label: "Terrenos vendidos", value: "50+" },
  { label: "Años de experiencia", value: "10+" },
  { label: "Familias beneficiadas", value: "200+" },
  { label: "Municipios atendidos", value: "5" },
];

const featuredLands = [
  {
    id: 1,
    title: "Lote Residencial Zona 3",
    location: "Quetzaltenango, Zona 3",
    area: "200 m²",
    pricePerM2: "Q 1,200/m²",
    price: "Q 240,000",
    services: ["Agua", "Luz", "Drenaje"],
    access: "Calle asfaltada",
    badge: "Disponible",
    badgeColor: "bg-green-500",
    image: "https://loremflickr.com/800/500/land,terrain,field?lock=10",
  },
  {
    id: 2,
    title: "Terreno Comercial Carretera",
    location: "Salcajá, Quetzaltenango",
    area: "500 m²",
    pricePerM2: "Q 950/m²",
    price: "Q 475,000",
    services: ["Agua", "Luz"],
    access: "Carretera principal",
    badge: "Última unidad",
    badgeColor: "bg-orange-500",
    image: "https://loremflickr.com/800/500/land,nature,mountain?lock=22",
  },
  {
    id: 3,
    title: "Lote Lotificación Valle Verde",
    location: "San Marcos, Guatemala",
    area: "320 m²",
    pricePerM2: "Q 800/m²",
    price: "Q 256,000",
    services: ["Agua", "Luz", "Drenaje", "Internet"],
    access: "Calle adoquinada",
    badge: "Nuevo",
    badgeColor: "bg-blue-600",
    image: "https://loremflickr.com/800/500/field,green,nature?lock=35",
  },
];

const steps = [
  {
    number: "01",
    icon: <MapPin className="w-7 h-7 text-orange-500" />,
    title: "Explora terrenos",
    desc: "Navega nuestro catálogo con filtros por zona, precio y área.",
  },
  {
    number: "02",
    icon: <Phone className="w-7 h-7 text-orange-500" />,
    title: "Agenda una visita",
    desc: "Contáctanos por WhatsApp y coordinamos una visita presencial.",
  },
  {
    number: "03",
    icon: <TrendingUp className="w-7 h-7 text-orange-500" />,
    title: "Invierte con confianza",
    desc: "Te acompañamos en todo el proceso legal y documental.",
  },
];

const testimonials = [
  {
    name: "María Hernández",
    role: "Cliente satisfecha",
    text: "Gracias a Expect encontré el terreno ideal para construir mi casa. El trato fue honesto y transparente desde el primer momento.",
    stars: 5,
  },
  {
    name: "Carlos Mendoza",
    role: "Inversionista",
    text: "Invertí en un lote y el proceso fue muy sencillo. El equipo me guió en cada paso con paciencia y profesionalismo.",
    stars: 5,
  },
  {
    name: "Ana Orozco",
    role: "Familia beneficiada",
    text: "Son personas de confianza. Cumplieron todo lo que prometieron y hoy tenemos nuestro terreno escriturado.",
    stars: 5,
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-1 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white overflow-hidden">
        {/* decorative blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-orange-500/20 text-orange-400 text-sm font-semibold px-4 py-1 rounded-full mb-6 tracking-wide uppercase">
              Terrenos · Lotes · Inversiones
            </span>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Encuentra tu terreno ideal{" "}
              <span className="text-orange-500">en Quetzaltenango</span>
            </h1>

            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
              En{" "}
              <span className="font-semibold text-white">
                Expect Inmobiliaria
              </span>{" "}
              te ayudamos a invertir en tierra con seguridad, transparencia y
              acompañamiento personalizado.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/properties/sale"
                className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors text-lg font-semibold flex items-center justify-center gap-2 group"
              >
                Ver terrenos disponibles
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/50244899009"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white/40 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg font-semibold flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Hablar por WhatsApp
              </a>
            </div>

            {/* quick trust signals */}
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Terrenos escriturados
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Asesoría sin costo
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Visitas coordinadas
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-orange-500 mb-1">
                  {s.value}
                </p>
                <p className="text-gray-500 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Terrenos destacados ────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-blue-900 mb-3">
              Terrenos Destacados
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Selección de lotes y terrenos disponibles con documentación en
              regla.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {featuredLands.map((land) => (
              <div
                key={land.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* imagen del terreno */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={land.image}
                    alt={land.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span
                    className={`absolute top-3 left-3 ${land.badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}
                  >
                    {land.badge}
                  </span>
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-gray-900 font-bold text-sm">
                      {land.price}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">
                    {land.title}
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <MapPin className="w-4 h-4 mr-1 text-orange-500" />
                    {land.location}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-600 border-t border-gray-100 pt-3 mb-3">
                    <span className="flex items-center gap-1">
                      <Ruler className="w-4 h-4 text-blue-600" />
                      {land.area}
                    </span>
                    <span className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4 text-blue-600" />
                      {land.pricePerM2}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {land.services.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 bg-green-50 text-green-700 rounded-full text-xs font-medium"
                      >
                        {s}
                      </span>
                    ))}
                    <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                      {land.access}
                    </span>
                  </div>

                  <Link
                    to="/properties/sale"
                    className="block w-full text-center bg-blue-900 text-white py-2.5 rounded-lg hover:bg-blue-800 transition-colors text-sm font-semibold"
                  >
                    Ver detalles
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/properties/sale"
              className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600 transition-colors"
            >
              Ver todos los terrenos disponibles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Cómo funciona ──────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            ¿Cómo funciona?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-50 rounded-full mb-4">
                  {step.icon}
                </div>
                <span className="block text-xs font-bold text-orange-400 tracking-widest uppercase mb-1">
                  Paso {step.number}
                </span>
                <h3 className="font-semibold text-xl mb-2 text-blue-900">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Por qué elegirnos ──────────────────────────────────────── */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            ¿Por qué elegirnos?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <ShieldCheck className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2 text-blue-900">
                Terrenos legales
              </h3>
              <p className="text-gray-500 text-sm">
                Todos nuestros terrenos cuentan con escritura pública, libre de
                gravámenes y con documentación verificada.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <HomeIcon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2 text-blue-900">
                Acompañamiento total
              </h3>
              <p className="text-gray-500 text-sm">
                Te guiamos desde la primera visita hasta la firma final. No
                estás solo en el proceso.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <TrendingUp className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2 text-blue-900">
                Inversión con futuro
              </h3>
              <p className="text-gray-500 text-sm">
                Ubicaciones estratégicas con alto potencial de valorización en
                Quetzaltenango y sus alrededores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Nuestros Valores ───────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            Nuestros Valores
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Church className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2 text-blue-900">Fe</h3>
              <p className="text-gray-500 text-sm">
                Creemos en la guía de Dios en cada paso de nuestro camino.
              </p>
            </div>
            <div className="text-center">
              <UsersRound className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2 text-blue-900">
                Familia
              </h3>
              <p className="text-gray-500 text-sm">
                Entendemos que un hogar empieza con un terreno. Trabajamos para
                cada familia.
              </p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2 text-blue-900">
                Servicio
              </h3>
              <p className="text-gray-500 text-sm">
                Trabajamos con pasión y honestidad para que encuentres el
                terreno perfecto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonios ────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            Lo que dicen nuestros clientes
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <StarRating count={t.stars} />
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                  "{t.text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {t.name}
                  </p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Final ──────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para invertir en tu terreno?
          </h2>
          <p className="text-lg text-blue-200 mb-8 max-w-xl mx-auto">
            Habla con nosotros hoy. Sin compromisos, sin presión — solo
            asesoría honesta.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors text-lg font-semibold"
            >
              Agendar visita
            </Link>
            <a
              href="https://wa.me/50244899009"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/40 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg font-semibold"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
