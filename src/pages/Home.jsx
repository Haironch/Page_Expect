import {
  Home as HomeIcon,
  Heart,
  Handshake,
  Church,
  UsersRound,
  Star,
  MapPin,
} from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white min-h-[calc(100vh-64px)] flex items-center">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Transformando Hogares, Cumpliendo Sueños
            </h1>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              En{" "}
              <span className="font-semibold text-orange-500">
                Proyectos Xela
              </span>
              , nuestra misión es mucho más que comprar y vender propiedades; se
              trata de transformar vidas y construir futuros llenos de
              esperanza.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg">
                Ver Propiedades
              </button>
              <button className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-lg hover:bg-orange-500 hover:text-white transition-colors text-lg">
                Contáctanos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quiénes Somos Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">
              ¿Quiénes Somos?
            </h2>
            <div className="flex items-center justify-center mb-6">
              <Church className="w-12 h-12 text-orange-500" />
            </div>
            <p className="text-gray-600 text-center text-lg mb-8">
              Nacimos como un proyecto familiar, guiados por valores cristianos
              como la integridad, la confianza y el servicio. Hoy, expandimos
              nuestra visión para impactar a más familias en todo Guatemala,
              ayudándoles a encontrar un lugar al que puedan llamar hogar.
            </p>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            ¿Qué Hacemos?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <HomeIcon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2 text-blue-900">
                Compra y venta de casas
              </h3>
              <p className="text-gray-600">
                Conectamos sueños con oportunidades.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <Star className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2 text-blue-900">
                Asesoría inmobiliaria
              </h3>
              <p className="text-gray-600">
                Te ayudamos a tomar decisiones informadas.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <MapPin className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2 text-blue-900">
                Expansión a nuevas áreas
              </h3>
              <p className="text-gray-600">
                Estamos creciendo para llevar nuestras soluciones a más
                comunidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            Nuestros Valores
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Church className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2 text-blue-900">Fe</h3>
              <p className="text-gray-600">
                Creemos en la guía de Dios en cada paso de nuestro camino.
              </p>
            </div>
            <div className="text-center">
              <UsersRound className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2 text-blue-900">
                Familia
              </h3>
              <p className="text-gray-600">
                Entendemos que un hogar es el corazón de toda familia.
              </p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2 text-blue-900">
                Servicio
              </h3>
              <p className="text-gray-600">
                Trabajamos con pasión para que encuentres más que una casa,
                encuentres un hogar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Déjanos ayudarte a cumplir tus sueños
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Tu nuevo hogar comienza aquí.
          </p>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors">
            Contáctanos hoy
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
